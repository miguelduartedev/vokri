import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { testDatabase } from './learning-db';
import { migrateLearning } from '@/learning/database';
import { LearningStore } from '@/learning/store';
import {
  freshChoices,
  keepRemainingSeparate,
  StalePreview,
  suggestedName,
} from '@/learning/portability';
import { blankDraft } from '@/domain/learning/personal';
import { parseVocabulary, type VocabularyDocument } from '@/domain/interchange/format';

const instant = '2026-11-25T12:00:00.000Z';
const file = (): VocabularyDocument => ({
  format: 'vokri-cards-my-words',
  version: 1,
  exportedAt: instant,
  learningLanguage: 'fi',
  personalEntries: [],
  collections: [],
  memberships: [],
});
const id = (n: number) => 'personal:' + String(n).padStart(32, '0');
const entry = (n: number, displayForm: string, english = 'my expression') => ({
  languageId: 'fi' as const,
  wordId: id(n),
  ...blankDraft,
  displayForm,
  english,
});
const group = (collectionId: string, name = collectionId) => ({
  languageId: 'fi' as const,
  collectionId,
  name,
});
const edge = (collectionId: string, wordId: string) => ({
  languageId: 'fi' as const,
  collectionId,
  wordId,
  kind: wordId.startsWith('personal:') ? ('personal' as const) : ('curated' as const),
});
let db: ReturnType<typeof testDatabase>, store: LearningStore, dir: string;
function open() {
  db = testDatabase(join(dir, 'learner.db'));
  migrateLearning(db);
  store = new LearningStore(
    db,
    () => true,
    () => Date.parse(instant),
  );
}
beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'portable-'));
  open();
});
afterEach(() => {
  db.closeSync();
  rmSync(dir, { recursive: true, force: true });
});
function history() {
  return ['enrolments', 'ratings', 'review_state', 'sessions', 'session_cards'].map((t) =>
    db.getAllSync('SELECT * FROM ' + t),
  );
}
function rows() {
  return ['personal_entries', 'collections', 'collection_members'].map((t) =>
    db.getAllSync('SELECT * FROM ' + t),
  );
}
it('exports one SQLite snapshot with authored text, shared edges, curated IDs and empty collections', () => {
  const a = store.saveCollection('sv', 'Kurs', ''),
    b = store.saveCollection('sv', 'Vardag', '');
  store.saveCollection('sv', 'Tom', '');
  store.saveCollection('fi', 'Finnish only', '');
  store.saveEntry(
    'sv',
    id(1),
    {
      ...blankDraft,
      displayForm: 'en blå dörr',
      english: 'a blue door',
      forms: 'dörren',
      note: 'Åäö',
    },
    { collections: [a, b], enrol: true },
  );
  store.saveEntry(
    'sv',
    id(2),
    { ...blankDraft, displayForm: 'arkiv', english: 'archive' },
    { collections: [b] },
  );
  store.archiveEntry('sv', id(2));
  store.changeMemberships('sv', [{ collectionId: a, wordId: 'sv.unknown', selected: true }]);
  const snapshot = store.vocabularyExport('sv');
  const result = parseVocabulary(snapshot.json);
  expect(result.ok).toBe(true);
  if (!result.ok) throw result.error;
  expect(result.document.personalEntries).toHaveLength(1);
  expect(result.document.personalEntries[0]).toMatchObject({
    displayForm: 'en blå dörr',
    forms: 'dörren',
    note: 'Åäö',
  });
  expect(snapshot).toMatchObject({
    filename: 'vokri-my-words-sv-2026-11-25.json',
    types: [1, 0, 0],
    entries: 1,
    collections: 3,
  });
  expect(result.document.memberships).toHaveLength(3);
  expect(snapshot.json).not.toMatch(/revision|archivedAt|enrolled|Finnish only/);
});
it('requires a new decision on remapped re-import and maps both memberships to the selected previous copy', () => {
  store.saveEntry('fi', id(1), entry(1, 'original wording'), { enrol: true });
  store.start('fi', { kind: 'today' }, 'recognition');
  const session = store.current('fi')!,
    card = store.cards(session.id)[0];
  store.present('fi', session.id, card);
  store.reveal('fi', session.id, card);
  store.rate('fi', session.id, card, 'Almost');
  const before = history();
  const doc = file();
  doc.personalEntries = [entry(1, 'uusi ilmaukseni')];
  doc.collections = [group('a'), group('b')];
  doc.memberships = [edge('a', id(1)), edge('b', id(1))];
  const p = store.importPreview(doc),
    c = freshChoices();
  c.words.set(id(1), { action: 'create' });
  const result = store.importVocabulary(p, c);
  expect(result).toMatchObject({ entriesAdded: 1, membershipsAdded: 2 });
  const copy = store.memberIds('fi', 'a')[0];
  expect(copy).not.toBe(id(1));
  expect(store.memberIds('fi', 'b')).toEqual([copy]);
  db.closeSync();
  open();
  const again = store.importPreview(doc);
  expect(again.candidates(doc.personalEntries[0]).map((w) => w.wordId)).toEqual(
    expect.arrayContaining([id(1), copy]),
  );
  expect(() => store.importVocabulary(again, freshChoices())).toThrow(/choose/i);
  const reuse = freshChoices();
  reuse.words.set(id(1), { action: 'reuse', id: copy });
  expect(store.importVocabulary(again, reuse)).toMatchObject({
    entriesAdded: 0,
    entriesReused: 1,
    collectionsAdded: 0,
    membershipsAdded: 0,
  });
  expect(history()).toEqual(before);
});
it('bulk-confirms only outstanding similarities, including incoming lemma matches, and preserves individual and collection choices', () => {
  const a = entry(1, 'minun muotoni');
  store.saveEntry('fi', id(1), a);
  store.saveEntry('fi', id(4), entry(4, 'erilainen sana'));
  store.saveCollection('fi', 'Course', '');
  const doc = file();
  doc.personalEntries = [
    { ...entry(2, 'taivutettu'), lemma: a.displayForm },
    { ...entry(3, 'muunnelma'), lemma: a.displayForm },
    entry(4, 'toinen muoto'),
  ];
  doc.collections = [group('incoming', 'COURSE')];
  const p = store.importPreview(doc);
  expect(p.entries.map((r) => r.status)).toEqual(['similar', 'similar', 'conflict']);
  const individual = freshChoices();
  individual.words.set(id(2), { action: 'reuse', id: id(1) });
  individual.collections.set('incoming', { action: 'skip' });
  const all = keepRemainingSeparate(p, individual);
  expect([...all.words]).toEqual([
    [id(2), { action: 'reuse', id: id(1) }],
    [id(3), { action: 'create' }],
  ]);
  expect(individual.words.size).toBe(1);
  expect(all.collections.get('incoming')).toEqual({ action: 'skip' });
  expect(() => store.importVocabulary(p, all)).toThrow(/choose/i);
});
it('protects archived and foreign IDs, maps to curated content only by choice, and skips missing edges explicitly', () => {
  store.saveEntry('fi', id(1), entry(1, 'archived'));
  store.archiveEntry('fi', id(1));
  store.saveEntry('sv', id(2), entry(2, 'hemlig'));
  const doc = file();
  doc.personalEntries = [entry(1, 'uusi lause'), entry(2, 'oma lause'), entry(3, 'olla')];
  doc.collections = [group('list')];
  doc.memberships = [
    edge('list', id(1)),
    edge('list', id(2)),
    edge('list', id(3)),
    edge('list', 'vocab.olla'),
    edge('list', 'vocab.unavailable'),
  ];
  const p = store.importPreview(doc),
    c = freshChoices();
  expect(p.entries.map((e) => e.status)).toEqual(['conflict', 'conflict', 'similar']);
  expect(p.candidates(doc.personalEntries[1])).toEqual([]);
  c.words.set(id(1), { action: 'skip' });
  c.words.set(id(2), { action: 'create' });
  c.words.set(id(3), { action: 'reuse', id: 'vocab.olla' });
  expect(() => store.importVocabulary(p, c)).toThrow(/unavailable/);
  c.skipMissing = true;
  expect(store.importVocabulary(p, c)).toMatchObject({
    entriesAdded: 1,
    entriesReused: 1,
    entriesSkipped: 1,
    membershipsAdded: 2,
    membershipsSkipped: 2,
  });
  expect(store.today('fi').enrolled).toBe(0);
  expect(store.personal('sv', id(2))?.displayForm).toBe('hemlig');
});
it('resolves collection identity and normalized-name collisions independently and preserves existing members', () => {
  const a = store.saveCollection('fi', 'Sää', 'old');
  const b = store.saveCollection('fi', 'Class', '');
  store.changeMemberships('fi', [{ collectionId: a, wordId: 'vocab.olla', selected: true }]);
  const doc = file();
  doc.collections = [group(a, 'Class'), group('other', ' Sa\u0308a\u0308 ')];
  doc.memberships = [edge(a, 'vocab.hei'), edge('other', 'vocab.hei')];
  const p = store.importPreview(doc),
    c = freshChoices();
  expect(p.collections[0].candidates.map((x) => x.collectionId)).toEqual([a, b]);
  c.collections.set(a, { action: 'create', name: suggestedName(p, c, doc.collections[0]) });
  c.collections.set('other', { action: 'reuse', id: a });
  expect(store.importVocabulary(p, c)).toMatchObject({
    collectionsAdded: 1,
    collectionsReused: 1,
    membershipsAdded: 2,
  });
  expect(store.memberIds('fi', a).sort()).toEqual(['vocab.hei', 'vocab.olla']);
  expect(store.today('fi').enrolled).toBe(0);
});
it('revalidates stale previews and rolls back entries, collections and edges together when a late insert fails', () => {
  const doc = file();
  doc.personalEntries = [entry(1, 'koeilmaukseni')];
  doc.collections = [group('set')];
  doc.memberships = [edge('set', id(1))];
  const old = store.importPreview(doc);
  store.saveCollection('fi', 'Other', '');
  expect(() => store.importVocabulary(old, freshChoices())).toThrow(StalePreview);
  const baseline = rows(),
    listener = jest.fn();
  store.subscribe(listener);
  const p = store.importPreview(doc);
  expect(rows()).toEqual(baseline);
  expect(listener).not.toHaveBeenCalled();
  db.execSync(
    "CREATE TRIGGER failure BEFORE INSERT ON collection_members BEGIN SELECT RAISE(ABORT,'injected'); END",
  );
  expect(() => store.importVocabulary(p, freshChoices())).toThrow('injected');
  expect(rows()).toEqual(baseline);
  expect(listener).not.toHaveBeenCalled();
  db.execSync('DROP TRIGGER failure');
  expect(store.importVocabulary(p, freshChoices())).toMatchObject({
    entriesAdded: 1,
    membershipsAdded: 1,
  });
  expect(listener).toHaveBeenCalledTimes(1);
  expect(store.importVocabulary(store.importPreview(doc), freshChoices())).toMatchObject({
    entriesAdded: 0,
    entriesReused: 1,
    membershipsAdded: 0,
  });
});
