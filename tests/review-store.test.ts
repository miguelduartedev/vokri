import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { Direction, Rating } from '@/domain/learning/model';
import { hour } from '@/domain/learning/review';
import { migrateLearning, createVersionOne } from '@/learning/database';
import { LearningStore } from '@/learning/store';
import { testDatabase } from './learning-db';

const initial = Date.UTC(2026, 1, 15, 10);
const today = { kind: 'today' } as const;
const first = { pass: 'first', position: 0 } as const;
let directory: string, db: ReturnType<typeof testDatabase>, store: LearningStore, now: number;
let unavailable: string | undefined;
function open(upgrade = true) {
  db = testDatabase(join(directory, 'study.db'));
  if (upgrade) migrateLearning(db);
  store = new LearningStore(
    db,
    (_, wordId) => unavailable !== wordId,
    () => now,
  );
}
function restart() {
  db.closeSync();
  open();
}
function startWord(id: string, direction: Direction, replace?: string) {
  store.enrol('fi', [id]);
  store.start('fi', { kind: 'word', id }, direction, [id], replace);
  return store.current('fi')!.id;
}
function show(id: string, position = 0) {
  const key = { ...first, position };
  store.present('fi', id, key);
  store.reveal('fi', id, key);
  return key;
}
function finishWord(id: string, rating: Rating) {
  const key = show(id);
  store.rate('fi', id, key, rating);
  store.next('fi', id, key);
  if (store.current('fi')?.phase === 'offer') store.chooseRevisit('fi', id, false);
  store.dismiss('fi', id);
}
function review() {
  store.startReview('fi');
  return store.current('fi')!.id;
}
const schedule = (wordId: string, direction: Direction) =>
  store.reviewState('fi', { wordId, direction });
beforeEach(() => {
  directory = mkdtempSync(join(tmpdir(), 'vokri-review-'));
  now = initial;
  unavailable = undefined;
  open();
});
afterEach(() => {
  db.closeSync();
  rmSync(directory, { recursive: true, force: true });
});

it.each(['recognition', 'production'] as const)(
  'introduces a previously unattempted %s within Review without earning a spaced return',
  (direction) => {
    const other = direction === 'production' ? 'recognition' : 'production';
    finishWord(startWord('a', other), 'Knew It');
    now += 24 * hour - 1;
    expect(store.today('fi').due).toHaveLength(0);
    now++;
    const id = review();
    const cards = store.cards(id);
    expect(cards.map((c) => c.direction)).toEqual([other, direction]);
    for (const card of cards) {
      show(id, card.position);
      store.rate('fi', id, card, 'Knew It');
      store.next('fi', id, card);
    }
    expect(schedule('a', direction)).toMatchObject({
      level: 1,
      spacedSuccesses: 0,
      dueAt: now + 24 * hour,
    });
    expect(schedule('a', other)).toMatchObject({
      level: 2,
      spacedSuccesses: 1,
      dueAt: now + 72 * hour,
    });
    expect(db.getAllSync('SELECT source FROM learning_evidence_v2 ORDER BY sequence')).toEqual([
      { source: 'cards.learn_new' },
      { source: 'cards.review_due' },
      { source: 'cards.review_due' },
    ]);
    expect(db.getAllSync('SELECT * FROM learning_evidence_v1')).toHaveLength(1);
  },
);
it.each(['recognition', 'production'] as const)(
  'consumes only the rated %s exposure when explicitly studying from Discover',
  (direction) => {
    const other = direction === 'recognition' ? 'production' : 'recognition';
    const one = startWord('a', other);
    show(one);
    now += hour;
    const two = startWord('a', direction, one);
    show(two);
    const pending = schedule('a', other);
    now += 9 * hour;
    expect(store.today('fi').due).toEqual([]); // still reserved by Learn New
    store.start('fi', { kind: 'word', id: 'a' }, direction, [], two);
    expect(store.today('fi')).toMatchObject({ newWords: [], dueWords: 1 });
    expect(store.today('fi').due.map((c) => c.direction)).toEqual([other]); // earliest pending exposure
    expect(store.inventory('fi').eligible).toEqual(['a']);
    finishWord(startWord('a', direction), 'Knew It');
    restart();
    expect(schedule('a', other)).toEqual(pending);
    expect(store.today('fi').due.map((c) => c.direction)).toEqual([other]);
    expect(schedule('a', direction)).toMatchObject({
      lastRating: 'Knew It',
      spacedSuccesses: 0,
      dueAt: now + 24 * hour,
    });
  },
);
it('offers a mature abandoned exposure once and keeps its original due time on repeat reveal', () => {
  const id = startWord('a', 'recognition');
  show(id);
  store.start('fi', { kind: 'word', id: 'a' }, 'recognition', [], id);
  now += 8 * hour;
  expect(store.today('fi')).toMatchObject({ dueWords: 1, newWords: [] });
  store.start('fi', today, 'mixed');
  expect(store.current('fi')).toBeUndefined();
  const next = review();
  show(next);
  expect(schedule('a', 'recognition')?.dueAt).toBe(now);
  expect(db.getAllSync('SELECT * FROM ratings')).toEqual([]);
});
it('counts distinct due words, freezes ten directional cards, separates adjacent opposites and ignores the Learn New preference', () => {
  for (const id of ['a', 'b', 'c', 'd', 'e', 'f'])
    finishWord(startWord(id, 'recognition'), 'Almost');
  now += 8 * hour;
  expect(store.today('fi')).toMatchObject({ dueWords: 6, newWords: [] });
  expect(store.today('fi').due).toHaveLength(12);
  const id = review();
  const frozen = store.cards(id);
  expect(frozen).toHaveLength(10);
  expect(frozen.some((c) => c.direction === 'recognition')).toBe(true);
  expect(frozen.some((c) => c.direction === 'production')).toBe(true);
  expect(frozen.some((c, i) => i > 0 && c.wordId === frozen[i - 1].wordId)).toBe(false);
  now += hour;
  restart();
  expect(store.cards(id)).toEqual(frozen);
  show(id);
  store.rate('fi', id, first, 'Again');
  expect(store.today('fi').dueWords).toBe(6);
  const checkpoint = store.cards(id)[0];
  restart();
  store.rate('fi', id, first, 'Knew It');
  expect(store.cards(id)[0]).toEqual(checkpoint);
  const rated = schedule(checkpoint.wordId, checkpoint.direction);
  store.startReview('fi', id);
  expect(store.current('fi')?.id).not.toBe(id);
  expect(schedule(checkpoint.wordId, checkpoint.direction)).toEqual(rated);
  expect(store.today('fi').due).toHaveLength(11);
  expect(store.today('sv')).toMatchObject({ dueWords: 0, newWords: [], enrolled: 0 });
});
it('rolls back both the evidence and schedules after a failed transition and accepts one retry', () => {
  const id = startWord('a', 'recognition');
  show(id);
  const before = schedule('a', 'recognition');
  db.execSync(
    "CREATE TRIGGER reject_opposite BEFORE INSERT ON review_state WHEN new.direction='production' BEGIN SELECT RAISE(ABORT,'failure'); END",
  );
  expect(() => store.rate('fi', id, first, 'Again')).toThrow('failure');
  restart();
  expect(schedule('a', 'recognition')).toEqual(before);
  expect(db.getAllSync('SELECT * FROM ratings')).toHaveLength(0);
  db.execSync('DROP TRIGGER reject_opposite');
  store.rate('fi', id, first, 'Again');
  restart();
  store.rate('fi', id, first, 'Almost');
  expect(db.getAllSync('SELECT * FROM ratings')).toHaveLength(1);
  expect(schedule('a', 'recognition')).toMatchObject({
    lastRating: 'Again',
    dueAt: now + 4 * hour,
  });
});
it('keeps two weak directions in a bounded revisit pass without changing their due times or familiarity', () => {
  finishWord(startWord('a', 'production'), 'Almost');
  now += 8 * hour;
  const id = review();
  for (const card of store.cards(id)) {
    show(id, card.position);
    store.rate('fi', id, card, 'Again');
    store.next('fi', id, card);
  }
  store.chooseRevisit('fi', id, true);
  const before = db.getAllSync('SELECT * FROM review_state ORDER BY direction');
  for (const card of store.cards(id).filter((c) => c.pass === 'revisit')) {
    store.present('fi', id, card);
    store.reveal('fi', id, card);
    store.rate('fi', id, card, 'Knew It');
    store.next('fi', id, card);
  }
  restart();
  expect(store.current('fi')).toMatchObject({ phase: 'completed', mode: 'review_due' });
  expect(db.getAllSync('SELECT * FROM review_state ORDER BY direction')).toEqual(before);
  expect(store.cards(id)).toHaveLength(4);
});
it('preserves historical evidence and skips a missing reference in an already frozen review', () => {
  finishWord(startWord('a', 'recognition'), 'Again');
  now += 4 * hour;
  const id = review();
  unavailable = 'a';
  store.present('fi', id, first);
  store.present('fi', id, { ...first, position: 1 });
  expect(store.current('fi')?.phase).toBe('completed');
  expect(store.today('fi').dueWords).toBe(0);
  expect(db.getAllSync('SELECT * FROM learning_evidence_v2')).toHaveLength(1);
});

it('upgrades a v1 database transactionally and reopens the original events, revealed checkpoint and undismissed summary', () => {
  db.closeSync();
  rmSync(join(directory, 'study.db'));
  open(false);
  createVersionOne(db);
  const stamp = new Date(now).toISOString();
  for (const lang of ['fi', 'sv']) {
    db.runSync('INSERT INTO enrolments VALUES(?,?,?)', lang, 'a', stamp);
    db.runSync(
      "INSERT INTO sessions VALUES(?,?, 'today',NULL,'mixed',?,0,?,?,NULL)",
      lang,
      lang,
      lang === 'fi' ? 'completed' : 'first',
      stamp,
      lang === 'fi' ? stamp : null,
    );
    db.runSync(
      "INSERT INTO session_cards VALUES(?,?,'a','first',0,'recognition',?,?,0)",
      lang,
      lang,
      stamp,
      stamp,
    );
  }
  db.runSync(
    "INSERT INTO session_cards VALUES('fi','fi','a','revisit',0,'recognition',?,?,0)",
    stamp,
    stamp,
  );
  db.runSync("INSERT INTO ratings VALUES(7,'fi','first',0,'Almost',?)", stamp);
  db.runSync("INSERT INTO ratings VALUES(12,'fi','revisit',0,'Knew It',?)", stamp);
  const historical = db.getAllSync('SELECT * FROM learning_evidence_v1 ORDER BY sequence');
  db.execSync('CREATE TABLE review_state(dummy)');
  expect(() => migrateLearning(db)).toThrow();
  expect(db.getAllSync('PRAGMA user_version')).toEqual([{ user_version: 1 }]);
  expect(db.getAllSync('SELECT * FROM learning_evidence_v1 ORDER BY sequence')).toEqual(historical);
  db.execSync('DROP TABLE review_state');
  migrateLearning(db);
  restart();
  migrateLearning(db);
  expect(db.getAllSync('SELECT * FROM learning_evidence_v1 ORDER BY sequence')).toEqual(historical);
  expect(db.getAllSync('PRAGMA foreign_key_check')).toEqual([]);
  expect(store.current('fi')).toMatchObject({ phase: 'completed', mode: 'learn_new' });
  expect(store.current('sv')).toMatchObject({ phase: 'first', mode: 'learn_new' });
  expect(store.cards('sv')[0]).toMatchObject({ revealedAt: stamp, rating: null });
  expect(schedule('a', 'recognition')).toMatchObject({
    lastRating: 'Almost',
    level: 0,
    dueAt: now + 8 * hour,
  });
  expect(schedule('a', 'production')).toMatchObject({
    lastRating: null,
    level: 0,
    dueAt: now + 8 * hour,
  });
  expect(store.reviewState('sv', { wordId: 'a', direction: 'recognition' })).toMatchObject({
    lastRating: null,
    dueAt: now + 8 * hour,
  });
  expect(store.reviewState('sv', { wordId: 'a', direction: 'production' })).toBeUndefined();
});

it('reports 20 due words for 27 due directions and counts familiarity conservatively across directions', () => {
  for (let i = 0; i < 20; i++) {
    const wordId = String(i);
    store.enrol('fi', [wordId]);
    for (const direction of ['recognition', 'production']) {
      const due = i < 7 || (i < 15 ? direction === 'recognition' : direction === 'production');
      db.runSync(
        `INSERT INTO review_state(languageId,wordId,direction,dueAt,level,spacedSuccesses,familiarity,lastRating)
        VALUES('fi',?,?,?,5,4,?,'Knew It')`,
        wordId,
        direction,
        due ? now : now + hour,
        i === 0 || direction === 'recognition' ? 'familiar' : 'becoming_familiar',
      );
    }
  }
  expect(store.today('fi')).toMatchObject({
    enrolled: 20,
    dueWords: 20,
    familiarWords: 1,
    newWords: [],
  });
  expect(store.today('fi').due).toHaveLength(27);
});

it('orders by oldest deadline before rating priority and uses canonical references to resolve ties', () => {
  const fixture = [
    ['z', 'Knew It', -2],
    ['b', 'Almost', -1],
    ['c', null, -1],
    ['d', 'Knew It', -1],
    ['a', 'Again', -1],
    ['e', 'Almost', -1],
  ] as const;
  for (const [id, rating, offset] of fixture) {
    store.enrol('fi', [id]);
    db.runSync(
      "INSERT INTO review_state(languageId,wordId,direction,dueAt,lastRating) VALUES('fi',?,'production',?,?)",
      id,
      now + offset,
      rating,
    );
  }
  const id = review();
  expect(store.cards(id).map((card) => card.wordId)).toEqual(['z', 'a', 'b', 'e', 'd', 'c']);
});

it('resumes separate Finnish and Swedish reviews of the same canonical identifier', () => {
  for (const language of ['fi', 'sv'] as const) {
    store.enrol(language, ['shared-id']);
    store.start(language, today, 'recognition');
    const session = store.current(language)!;
    store.present(language, session.id, first);
    store.reveal(language, session.id, first);
    store.rate(language, session.id, first, 'Knew It');
    store.next(language, session.id, first);
    store.dismiss(language, session.id);
  }
  now += 24 * hour;
  store.startReview('sv');
  store.startReview('fi');
  const sv = store.current('sv')!,
    fi = store.current('fi')!;
  store.present('sv', sv.id, first);
  store.reveal('sv', sv.id, first);
  show(fi.id);
  store.rate('fi', fi.id, first, 'Almost');
  store.next('fi', fi.id, first);
  restart();
  expect(store.current('sv')).toEqual(sv);
  expect(store.cards(sv.id)[0]).toMatchObject({ revealedAt: expect.any(String), rating: null });
  expect(store.current('fi')).toMatchObject({ id: fi.id, mode: 'review_due', cursor: 1 });
  expect(store.reviewState('sv', store.cards(fi.id)[0])?.lastRating).toBe('Knew It');
  expect(store.today('sv').due).toHaveLength(2);
  expect(store.today('fi').due).toHaveLength(1);
});
