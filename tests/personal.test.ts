import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  blankDraft,
  searchEntries,
  materialChange,
  type PersonalDraft,
} from '@/domain/learning/personal';
import { createVersionOne, upgradeToTwo, migrateLearning } from '@/learning/database';
import { LearningStore } from '@/learning/store';
import { testDatabase } from './learning-db';

let db: ReturnType<typeof testDatabase>, store: LearningStore, dir: string;
let time = Date.UTC(2026, 10, 25);
const origin = { kind: 'today' } as const;
const key = { position: 0, pass: 'first' } as const;
const sentence = {
  ...blankDraft,
  type: 'Sentence',
  displayForm: 'Olen asunut Suomessa kolme vuotta.',
  english: 'I have lived in Finland for three years.',
  note: 'My course',
} satisfies PersonalDraft;
function open() {
  db = testDatabase(join(dir, 'learning.db'));
  migrateLearning(db);
  store = new LearningStore(
    db,
    () => true,
    () => time,
  );
}
beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'vokri-personal-'));
  open();
});
afterEach(() => {
  db.closeSync();
  rmSync(dir, { recursive: true, force: true });
});
function save(enrol = true, draft: PersonalDraft = sentence) {
  const id = store.newPersonalId();
  store.saveEntry('fi', id, draft, { enrol });
  return id;
}
function first(id: string, rating: 'Again' | 'Almost' | 'Knew It' = 'Knew It') {
  store.start('fi', { kind: 'word', id }, 'recognition', [id]);
  const s = store.current('fi')!.id;
  store.present('fi', s, key);
  store.reveal('fi', s, key);
  store.rate('fi', s, key, rating);
  return s;
}
it('keeps authored text, distinguishes capture from enrolment and rolls back a failed combined save', () => {
  const id = save(false);
  store.saveEntry('fi', id, sentence);
  expect(store.entries('fi')).toHaveLength(1);
  expect(store.today('fi')).toMatchObject({ enrolled: 0, introduced: 0 });
  expect(store.resolve('sv', id)).toBeUndefined();
  store.enrol('fi', [id, id]);
  db.closeSync();
  open();
  expect(store.today('fi')).toMatchObject({
    enrolled: 1,
    newWords: [id],
    introduced: 0,
    dueWords: 0,
  });
  expect(store.personal('fi', id)).toMatchObject(sentence);
  db.execSync(
    "CREATE TRIGGER fail BEFORE INSERT ON enrolments BEGIN SELECT RAISE(ABORT,'failed'); END",
  );
  expect(() => save()).toThrow();
  expect(store.entries('fi')).toHaveLength(1);
  expect(() => save(false, { ...sentence, english: '  \n ' })).toThrow();
});
it('searches and filters by language, text and meaning and distinguishes senses and accents', () => {
  const word = { ...blankDraft, displayForm: 'sää', english: 'weather' };
  const id = save(false, word);
  save(false, { ...word, english: 'condition' });
  save(false, { ...word, displayForm: 'saa' });
  store.saveEntry('sv', store.newPersonalId(), { ...word, displayForm: 'en nyckel' });
  expect(searchEntries(store.entries('fi'), 'SA\u0308A\u0308', 'Word')).toHaveLength(2);
  expect(searchEntries(store.entries('fi'), 'WEATHER', 'Sentence')).toHaveLength(0);
  expect(store.matches('fi', { ...word, displayForm: ' SÄÄ ' })[0].wordId).toBe(id);
  expect(
    store.matches('sv', { ...word, displayForm: 'bok' }).some((e) => e.displayForm === 'en bok'),
  ).toBe(true);
  expect(materialChange(word, { ...word, displayForm: ' SA\u0308A\u0308 ' })).toBe(true);
  expect(materialChange(word, { ...word, displayForm: ' sa\u0308a\u0308 ' })).toBe(false);
});
it('freezes a whole sentence alongside curated vocabulary, preserves mixed directions and first-practice labels through restart', () => {
  const id = save();
  store.enrol('fi', ['vocab.hei']);
  store.start('fi', origin, 'mixed');
  const s = store.current('fi')!.id;
  const cards = store.cards(s);
  expect(cards.map((c) => c.direction)).toEqual(['recognition', 'production']);
  expect(cards[0]).toMatchObject({
    wordId: id,
    targetSnapshot: sentence.displayForm,
    englishSnapshot: sentence.english,
    contentRevision: 1,
  });
  for (const c of cards) {
    store.present('fi', s, c);
    store.reveal('fi', s, c);
    store.rate('fi', s, c, 'Knew It');
    store.next('fi', s, c);
  }
  store.dismiss('fi', s);
  time += 86400000;
  store.startReview('fi');
  const r = store.current('fi')!.id;
  expect(store.today('fi')).toMatchObject({ introduced: 2, dueWords: 2 });
  for (const c of store.cards(r)) {
    expect(Boolean(c.firstPractice)).toBe(
      c.direction !== (c.wordId === id ? 'recognition' : 'production'),
    );
    store.present('fi', r, c);
    store.reveal('fi', r, c);
    store.rate('fi', r, c, 'Knew It');
    db.closeSync();
    open();
    expect(store.cards(r).find((x) => x.position === c.position)?.firstPractice).toBe(
      c.firstPractice,
    );
    store.next('fi', r, c);
  }
});
it('preserves notes-only edits, resets both directions on confirmed lexical edits and retains the old meaning', () => {
  const id = save(),
    s = first(id, 'Again'),
    old = store.personal('fi', id)!;
  const schedule = store.reviewState('fi', { wordId: id, direction: 'recognition' });
  store.saveEntry('fi', id, { ...sentence, note: 'Changed', type: 'Phrase' }, { original: old });
  expect(store.reviewState('fi', { wordId: id, direction: 'recognition' })).toEqual(schedule);
  const current = store.personal('fi', id)!;
  const changed = { ...sentence, english: 'Updated translation' };
  expect(() => store.saveEntry('fi', id, changed, { original: current })).toThrow(/Confirm/);
  store.saveEntry('fi', id, changed, { original: current, confirmReset: true });
  expect(store.cards(s).find((c) => c.pass === 'revisit')?.skipped).toBe(1);
  store.next('fi', s, key);
  expect(store.current('fi')?.phase).toBe('completed');
  expect(db.getAllSync('SELECT englishSnapshot,contentRevision FROM learning_evidence_v3')).toEqual(
    [{ englishSnapshot: sentence.english, contentRevision: 1 }],
  );
  expect(db.getAllSync('SELECT * FROM current_learning_evidence')).toHaveLength(0);
  expect(db.getAllSync('SELECT * FROM current_first_pass_exposures')).toHaveLength(0);
  expect(store.today('fi')).toMatchObject({
    enrolled: 1,
    newWords: [id],
    introduced: 0,
    dueWords: 0,
  });
});
it.each(['edit', 'delete'])(
  'invalidates a revealed occurrence on %s while preserving unrelated cards',
  (operation) => {
    const id = save();
    store.enrol('fi', ['vocab.hei']);
    store.start('fi', origin, 'mixed');
    const s = store.current('fi')!.id;
    store.present('fi', s, key);
    store.reveal('fi', s, key);
    if (operation === 'delete') store.archiveEntry('fi', id);
    else
      store.saveEntry(
        'fi',
        id,
        { ...sentence, displayForm: 'Uusi lause.' },
        { original: store.personal('fi', id), confirmReset: true },
      );
    store.rate('fi', s, key, 'Knew It');
    db.closeSync();
    open();
    expect(store.current('fi')?.cursor).toBe(1);
    expect(store.cards(s)[0].skipped).toBe(1);
    expect(db.getAllSync('SELECT * FROM ratings')).toHaveLength(0);
    expect(store.reviewState('fi', { wordId: id, direction: 'recognition' })).toBeUndefined();
    if (operation === 'delete') {
      expect(store.personal('fi', id)).toBeUndefined();
      expect(store.today('fi').enrolled).toBe(1);
      expect(save()).not.toBe(id);
    }
  },
);
it('rolls back an archive or content reset if schedule cleanup fails', () => {
  const id = save();
  first(id);
  const old = store.personal('fi', id)!;
  db.execSync(
    "CREATE TRIGGER fail BEFORE DELETE ON review_state BEGIN SELECT RAISE(ABORT,'failure'); END",
  );
  expect(() => store.archiveEntry('fi', id)).toThrow();
  expect(() =>
    store.saveEntry(
      'fi',
      id,
      { ...sentence, english: 'Changed' },
      { original: old, confirmReset: true },
    ),
  ).toThrow();
  db.closeSync();
  open();
  expect(store.personal('fi', id)).toEqual(old);
  expect(store.today('fi').introduced).toBe(1);
});

it('upgrades a file-backed v2 checkpoint without rewriting its schedule, and rolls back a failed v3 DDL transaction', () => {
  db.closeSync();
  const path = join(dir, 'learning.db');
  rmSync(path);
  db = testDatabase(path);
  createVersionOne(db);
  const stamp = new Date(time).toISOString();
  db.runSync('INSERT INTO enrolments VALUES(?,?,?)', 'fi', 'vocab.hei', stamp);
  db.runSync(
    "INSERT INTO sessions VALUES('original','fi','today',NULL,'mixed','completed',0,?,?,NULL)",
    stamp,
    stamp,
  );
  db.runSync(
    "INSERT INTO session_cards VALUES('original','fi','vocab.hei','first',0,'production',?,?,0)",
    stamp,
    stamp,
  );
  db.runSync("INSERT INTO ratings VALUES(17,'original','first',0,'Almost',?)", stamp);
  db.withTransactionSync(() => upgradeToTwo(db));
  const historical = db.getAllSync('SELECT * FROM learning_evidence_v2'),
    schedules = db.getAllSync('SELECT * FROM review_state');
  db.execSync('CREATE VIEW current_learning_evidence AS SELECT 1');
  expect(() => migrateLearning(db)).toThrow();
  expect(db.getAllSync('pragma user_version')).toEqual([{ user_version: 2 }]);
  expect(db.getAllSync("SELECT * FROM sqlite_schema WHERE name='personal_entries'")).toEqual([]);
  db.execSync('DROP VIEW current_learning_evidence');
  db.closeSync();
  open();
  expect(db.getAllSync('SELECT * FROM learning_evidence_v2')).toEqual(historical);
  expect(db.getAllSync('SELECT * FROM review_state')).toEqual(schedules);
  expect(store.current('fi')).toMatchObject({ id: 'original', phase: 'completed' });
  expect(db.getAllSync('PRAGMA foreign_key_check')).toEqual([]);
});

it('keeps historical ratings readable after archive and starts a recreated expression with clean directions', () => {
  const id = save();
  const session = first(id);
  const prior = db.getAllSync('SELECT * FROM learning_evidence_v3');
  store.archiveEntry('fi', id);
  store.present('fi', session, key);
  expect(store.cards(session)[0]).toMatchObject({
    skipped: 0,
    rating: 'Knew It',
    targetSnapshot: sentence.displayForm,
  });
  store.next('fi', session, key);
  store.dismiss('fi', session);
  const newId = save();
  expect(newId).not.toBe(id);
  db.closeSync();
  open();
  expect(db.getAllSync('SELECT * FROM learning_evidence_v3')).toEqual(prior);
  expect(db.getAllSync('SELECT * FROM current_learning_evidence')).toEqual([]);
  expect(store.today('fi')).toMatchObject({
    enrolled: 1,
    introduced: 0,
    dueWords: 0,
    newWords: [newId],
  });
  first(newId);
  expect(store.reviewState('fi', { wordId: newId, direction: 'recognition' })).toMatchObject({
    level: 1,
    spacedSuccesses: 0,
  });
  expect(db.getAllSync('SELECT wordId FROM current_learning_evidence')).toEqual([
    { wordId: newId },
  ]);
});
