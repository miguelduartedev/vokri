import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { blankDraft } from '@/domain/learning/personal';
import { LearningStore } from '@/learning/store';
import {
  createVersionOne,
  upgradeToTwo,
  upgradeToThree,
  migrateLearning,
} from '@/learning/database';
import { testDatabase } from './learning-db';

let dir: string, db: ReturnType<typeof testDatabase>, store: LearningStore;
const vocabulary = {
  ...blankDraft,
  type: 'Phrase' as const,
  displayForm: 'Ei se mitään',
  english: 'No worries',
};
function open() {
  db = testDatabase(join(dir, 'learner.db'));
  store = new LearningStore(
    db,
    (_, id) => id.startsWith('vocab.'),
    () => 1700000000000,
  );
}
function reopen() {
  db.closeSync();
  open();
  migrateLearning(db);
}
beforeEach(() => {
  dir = mkdtempSync(join(tmpdir(), 'collections-'));
  open();
});
afterEach(() => {
  db.closeSync();
  rmSync(dir, { recursive: true, force: true });
});
it('rolls back a failed v3 upgrade, then preserves ratings, content revisions, checkpoints, constraints and schedules on reopen', () => {
  db.execSync('PRAGMA foreign_keys=ON');
  db.withTransactionSync(() => {
    createVersionOne(db);
    upgradeToTwo(db);
    upgradeToThree(db);
  });
  for (const language of ['fi', 'sv'] as const) {
    const word = store.newPersonalId();
    store.saveEntry(language, word, vocabulary, { enrol: true });
    store.enrol(language, ['vocab.hei']);
    store.start(language, { kind: 'today' }, 'mixed');
    const session = store.current(language)!;
    for (const card of store.cards(session.id)) {
      store.present(language, session.id, card);
      store.reveal(language, session.id, card);
      if (language === 'sv' && card.position === 1) break;
      store.rate(language, session.id, card, 'Knew It');
      store.next(language, session.id, card);
    }
  }
  const snapshot = () =>
    [
      'enrolments',
      'personal_entries',
      'sessions',
      'session_cards',
      'review_state',
      'learning_evidence_v1',
      'learning_evidence_v2',
      'learning_evidence_v3',
      'current_learning_evidence',
      'current_first_pass_exposures',
    ].map((t) => db.getAllSync('SELECT * FROM ' + t));
  const before = snapshot();
  db.execSync('CREATE TABLE collections(conflict TEXT)');
  expect(() => migrateLearning(db)).toThrow();
  expect(db.getAllSync('PRAGMA user_version')).toEqual([{ user_version: 3 }]);
  expect(snapshot()).toEqual(before);
  expect(db.getAllSync('PRAGMA foreign_keys')).toEqual([{ foreign_keys: 1 }]);
  db.execSync('DROP TABLE collections');
  reopen();
  migrateLearning(db);
  expect(snapshot()).toEqual(before);
  expect(db.getAllSync('PRAGMA foreign_key_check')).toEqual([]);
  expect(store.current('fi')?.phase).toBe('completed');
  expect(store.current('sv')?.cursor).toBe(1);
  expect(() => db.execSync("UPDATE sessions SET originKind='invalid'")).toThrow();
  expect(() =>
    db.execSync(
      "INSERT INTO sessions SELECT id||'2',languageId,originKind,originId,choice,phase,cursor,createdAt,endedAt,closedAt,mode FROM sessions",
    ),
  ).toThrow();
});
it('scopes names and membership to a language, permits empty collections, and commits multi-selection or capture atomically', () => {
  migrateLearning(db);
  const a = store.saveCollection('fi', ' Sää ', 'Forecast'),
    b = store.saveCollection('fi', 'Lesson 2', '');
  expect(() => store.saveCollection('fi', ' SA\u0308A\u0308 ', '')).toThrow(/already exists/);
  expect(() => store.saveCollection('fi', '  ', '')).toThrow(/name/);
  const swedish = store.saveCollection('sv', 'Sää', '');
  const id = store.newPersonalId();
  expect(() =>
    store.saveEntry('fi', id, vocabulary, { enrol: true, collections: [a, swedish] }),
  ).toThrow();
  expect(store.personal('fi', id)).toBeUndefined();
  expect(store.today('fi').enrolled).toBe(0);
  store.saveEntry('fi', id, vocabulary, { collections: [a, b, b] });
  const changes = [
    { collectionId: a, wordId: 'vocab.hei', selected: true },
    { collectionId: swedish, wordId: id, selected: true },
  ];
  expect(() => store.changeMemberships('fi', changes)).toThrow();
  expect(store.memberIds('fi', a)).toEqual([id]);
  expect(() =>
    store.changeMemberships('sv', [{ collectionId: swedish, wordId: id, selected: true }]),
  ).toThrow();
  store.changeMemberships('fi', [changes[0], changes[0]]);
  reopen();
  expect(store.collections('fi').map((c) => c.count)).toEqual([1, 2]);
  expect(store.collections('sv')[0].count).toBe(0);
  expect(store.today('fi')).toMatchObject({ enrolled: 0, dueWords: 0, introduced: 0 });
  store.saveCollection('fi', 'Chapter four', 'Updated', store.collection('fi', a));
  expect(store.memberships('fi', id).sort()).toEqual([a, b].sort());
});
it('freezes only eligible collection members, resumes after removal or deletion, and shares one directional history across memberships', () => {
  migrateLearning(db);
  const a = store.saveCollection('fi', 'Course', ''),
    b = store.saveCollection('fi', 'Practice', '');
  const id = store.newPersonalId();
  store.saveEntry('fi', id, vocabulary, { collections: [a, b] });
  store.changeMemberships('fi', [
    { collectionId: a, wordId: 'vocab.hei', selected: true },
    { collectionId: a, wordId: 'vocab.unenrolled', selected: true },
  ]);
  store.enrol('fi', ['vocab.other', id, 'vocab.hei']);
  store.enrol('fi', [id, 'vocab.hei']);
  store.start('fi', { kind: 'collection', id: a }, 'mixed', ['vocab.other']);
  const session = store.current('fi')!;
  const [first, second] = store.cards(session.id);
  expect(store.cards(session.id).map((c) => c.wordId)).toEqual([id, 'vocab.hei']);
  store.present('fi', session.id, first);
  store.reveal('fi', session.id, first);
  store.rate('fi', session.id, first, 'Knew It');
  store.next('fi', session.id, first);
  const schedules = db.getAllSync('SELECT * FROM review_state');
  expect(schedules).toHaveLength(2);
  store.saveCollection('fi', 'Renamed', '', store.collection('fi', a));
  store.changeMemberships('fi', [{ collectionId: a, wordId: second.wordId, selected: false }]);
  store.deleteCollection('fi', a);
  reopen();
  expect(store.current('fi')).toMatchObject({
    id: session.id,
    originKind: 'collection',
    originId: a,
    cursor: 1,
  });
  expect(store.memberIds('fi', a)).toEqual([]);
  expect(store.memberships('fi', id)).toEqual([b]);
  expect(store.today('fi', Number.MAX_SAFE_INTEGER)).toMatchObject({
    introduced: 1,
    dueWords: 1,
    enrolled: 3,
  });
  expect(db.getAllSync('SELECT * FROM review_state')).toEqual(schedules);
  store.present('fi', session.id, second);
  store.reveal('fi', session.id, second);
  store.rate('fi', session.id, second, 'Knew It');
  store.next('fi', session.id, second);
  expect(store.current('fi')?.phase).toBe('completed');
});
it('resolves edited content everywhere and removes archived personal memberships while retaining the original evidence', () => {
  migrateLearning(db);
  const a = store.saveCollection('fi', 'Course', ''),
    b = store.saveCollection('fi', 'Daily', '');
  const id = store.newPersonalId();
  store.saveEntry('fi', id, vocabulary, { collections: [a, b], enrol: true });
  store.start('fi', { kind: 'collection', id: a }, 'production');
  const s = store.current('fi')!,
    c = store.cards(s.id)[0];
  store.present('fi', s.id, c);
  store.reveal('fi', s.id, c);
  store.rate('fi', s.id, c, 'Almost');
  store.saveEntry(
    'fi',
    id,
    { ...vocabulary, english: 'Never mind' },
    { original: store.personal('fi', id), confirmReset: true },
  );
  for (const group of [a, b])
    expect(store.resolve('fi', store.memberIds('fi', group)[0])?.content.english).toBe(
      'Never mind',
    );
  expect(store.memberships('fi', id)).toHaveLength(2);
  expect(store.today('fi').newWords).toEqual([id]);
  store.archiveEntry('fi', id);
  reopen();
  expect(store.collections('fi').map((c) => c.count)).toEqual([0, 0]);
  expect(db.getAllSync('SELECT englishSnapshot FROM learning_evidence_v3')).toEqual([
    { englishSnapshot: 'No worries' },
  ]);
});
