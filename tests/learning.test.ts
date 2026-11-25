import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  directions,
  ratings,
  resolveDirection,
  selectNew,
  type DirectionChoice,
  type Rating,
} from '@/domain/learning/model';
import { LearningStore } from '@/learning/store';
import { migrateLearning } from '@/learning/database';
import { testDatabase } from './learning-db';

let directory: string, path: string, db: ReturnType<typeof testDatabase>, store: LearningStore;
const origin = { kind: 'today' } as const;
const key = { position: 0, pass: 'first' } as const;
let available: (language: string, id: string) => boolean;
function open() {
  db = testDatabase(path);
  migrateLearning(db);
  store = new LearningStore(db, (language, id) => available(language, id));
}
function restart() {
  db.closeSync();
  open();
}
function start(words = ['a'], choice: DirectionChoice = 'recognition') {
  store.enrol('fi', words);
  store.start('fi', origin, choice);
  return store.current('fi')!.id;
}
function rate(
  id: string,
  rating: Rating = 'Knew It',
  position = 0,
  pass: 'first' | 'revisit' = 'first',
) {
  const card = { pass, position };
  store.present('fi', id, card);
  store.reveal('fi', id, card);
  store.rate('fi', id, card, rating);
}
function evidence() {
  return db.getAllSync('SELECT * FROM learning_evidence_v1 ORDER BY sequence');
}
beforeEach(() => {
  directory = mkdtempSync(join(tmpdir(), 'vokri-study-'));
  path = join(directory, 'study.sqlite');
  available = (_, id) => id !== 'invalid';
  open();
});
afterEach(() => {
  db.closeSync();
  rmSync(directory, { recursive: true, force: true });
});
it('applies migration once and preserves newer database versions', () => {
  store.enrol('fi', ['a']);
  migrateLearning(db);
  db.execSync('PRAGMA user_version=3');
  expect(() => migrateLearning(db)).toThrow(/newer app/);
  expect(store.inventory('fi').eligible).toEqual(['a']);
});
it('rolls back a failed initial migration', () => {
  const fresh = testDatabase();
  fresh.execSync('CREATE TABLE sessions(test INTEGER)');
  expect(() => migrateLearning(fresh)).toThrow();
  expect(fresh.getAllSync('PRAGMA user_version')).toEqual([{ user_version: 0 }]);
  expect(fresh.getAllSync("SELECT name FROM sqlite_schema WHERE name='enrolments'")).toEqual([]);
  fresh.closeSync();
});
it('commits complete decks, overlap and individual enrolments once per language', () => {
  store.enrol('fi', ['a']);
  store.enrol('fi', ['a', 'b', 'b']);
  store.enrol('fi', ['b', 'c']);
  store.enrol('sv', ['a']);
  restart();
  expect(store.inventory('fi').eligible).toEqual(['a', 'b', 'c']);
  expect(store.inventory('sv').eligible).toEqual(['a']);
  expect(evidence()).toEqual([]);
  expect(() => store.enrol('sv', ['b', 'invalid'])).toThrow();
  expect(store.inventory('sv').eligible).toEqual(['a']);
});
it('limits a new session to five distinct eligible items in context order', () => {
  expect(
    selectNew(['a', 'b', 'c', 'd', 'e', 'f'], ['f', 'q', 'f', 'd', 'b', 'c', 'a', 'e']),
  ).toEqual(['f', 'd', 'b', 'c', 'a']);
  store.start('fi', origin, 'mixed');
  expect(store.current('fi')).toBeUndefined();
});
it.each(directions)('freezes %s across restarts and prevents rating before reveal', (choice) => {
  const id = start(['a', 'b'], choice);
  store.present('fi', id, key);
  restart();
  expect(store.cards(id).map((c) => c.direction)).toEqual([
    resolveDirection(choice, 0),
    resolveDirection(choice, 1),
  ]);
  expect(() => store.rate('fi', id, key, 'Almost')).toThrow(/Reveal/);
  expect(store.cards(id)[0].revealedAt).toBeNull();
  store.reveal('fi', id, key);
  restart();
  expect(store.cards(id)[0].revealedAt).toBeTruthy();
  expect(store.inventory('fi').eligible).toEqual(['a', 'b']);
  expect(evidence()).toEqual([]);
});
it.each(ratings)(
  'retains one immutable first-pass %s event after repeated submissions and restarts',
  (rating) => {
    const id = start();
    rate(id, rating);
    restart();
    store.rate('fi', id, key, 'Again');
    store.enrol('fi', ['a']);
    expect(evidence()).toEqual([
      expect.objectContaining({
        source: 'cards.learn_new',
        schemaVersion: 1,
        sessionId: id,
        eventId: id + ':first:0',
        languageId: 'fi',
        wordId: 'a',
        direction: 'recognition',
        rating,
        pass: 'first',
        ratedAt: expect.any(String),
      }),
    ]);
    expect(store.inventory('fi').eligible).toEqual([]);
  },
);
it.each(['recognition', 'production'] as const)(
  'leaves the opposite direction unattempted after a %s introduction',
  (choice) => {
    const id = start(['a'], choice);
    rate(id);
    expect(
      db.getAllSync(
        'SELECT DISTINCT direction FROM learning_evidence_v1 WHERE wordId=? AND pass=?',
        'a',
        'first',
      ),
    ).toEqual([{ direction: choice }]);
    expect(
      db.getAllSync(
        'SELECT direction FROM session_cards WHERE wordId=? AND revealedAt IS NOT NULL',
        'a',
      ),
    ).toEqual([{ direction: choice }]);
  },
);
it('makes exactly one finite revisit per weak first-pass card, preserving direction and unique completion', () => {
  const id = start(['a', 'b'], 'mixed');
  for (const pos of [0, 1]) {
    rate(id, 'Again', pos);
    store.next('fi', id, { ...key, position: pos });
  }
  expect(store.current('fi')?.phase).toBe('offer');
  store.chooseRevisit('fi', id, true);
  for (const pos of [0, 1]) {
    rate(id, 'Again', pos, 'revisit');
    store.next('fi', id, { pass: 'revisit', position: pos });
  }
  restart();
  expect(store.current('fi')?.phase).toBe('completed');
  expect(store.cards(id)).toHaveLength(4);
  expect(
    db.getAllSync('SELECT pass,direction FROM learning_evidence_v1 ORDER BY sequence'),
  ).toEqual([
    { pass: 'first', direction: 'recognition' },
    { pass: 'first', direction: 'production' },
    { pass: 'revisit', direction: 'recognition' },
    { pass: 'revisit', direction: 'production' },
  ]);
  store.next('fi', id, key);
  store.dismiss('fi', id);
  store.dismiss('fi', id);
  expect(store.current('fi')).toBeUndefined();
  expect(evidence()).toHaveLength(4);
});
it('finishes a one-word session without taking the offered revisit', () => {
  const id = start();
  rate(id, 'Almost');
  store.next('fi', id, key);
  store.chooseRevisit('fi', id, false);
  restart();
  expect(store.current('fi')?.phase).toBe('completed');
  expect(evidence()).toHaveLength(1);
});
it('atomically rolls back the rating and its revisit on write failure', () => {
  const id = start();
  store.present('fi', id, key);
  store.reveal('fi', id, key);
  db.execSync(
    "CREATE TRIGGER fail BEFORE INSERT ON session_cards WHEN new.pass='revisit' BEGIN SELECT RAISE(ABORT,'test'); END",
  );
  expect(() => store.rate('fi', id, key, 'Again')).toThrow();
  restart();
  expect(evidence()).toEqual([]);
  expect(store.cards(id)[0]).toMatchObject({ rating: null, revealedAt: expect.any(String) });
  db.execSync('DROP TRIGGER fail');
  store.rate('fi', id, key, 'Again');
  expect(evidence()).toHaveLength(1);
});
it('replaces one language session atomically, preserving rated and revealed-only history', () => {
  const id = start(['a', 'b']);
  rate(id);
  store.next('fi', id, key);
  const second = { ...key, position: 1 };
  store.present('fi', id, second);
  store.reveal('fi', id, second);
  store.enrol('sv', ['a']);
  store.start('sv', origin, 'production');
  const swedish = store.current('sv');
  db.execSync(
    "CREATE TRIGGER fail BEFORE INSERT ON sessions BEGIN SELECT RAISE(ABORT,'test'); END",
  );
  expect(() => store.start('fi', origin, 'mixed', undefined, id)).toThrow();
  restart();
  expect(store.current('fi')?.id).toBe(id);
  db.execSync('DROP TRIGGER fail');
  store.start('fi', origin, 'mixed', undefined, id);
  const replacement = store.current('fi')!;
  expect(replacement.id).not.toBe(id);
  expect(store.cards(replacement.id).map((c) => c.wordId)).toEqual(['b']);
  expect(store.cards(id)[1].revealedAt).toBeTruthy();
  store.start('fi', origin, 'recognition', undefined, id);
  store.rate('fi', id, second, 'Knew It');
  expect(evidence()).toHaveLength(1);
  expect(store.current('sv')).toEqual(swedish);
});
it('skips an unavailable frozen reference and retains genuine interactions', () => {
  const id = start(['a', 'b']);
  available = (_, word) => word !== 'a';
  store.present('fi', id, key);
  expect(store.current('fi')?.cursor).toBe(1);
  expect(store.cards(id)[0].skipped).toBe(1);
  expect(evidence()).toEqual([]);
});

it('ends an unfinished session with an empty replacement pool while retaining its rating', () => {
  const id = start();
  rate(id, 'Almost');
  store.start('fi', origin, 'production', undefined, id);
  restart();
  expect(store.current('fi')).toBeUndefined();
  expect([...store.inventory('fi').enrolled]).toEqual(['a']);
  expect(store.inventory('fi').eligible).toEqual([]);
  expect(store.cards(id).filter((card) => card.rating)).toHaveLength(1);
  expect(evidence()).toHaveLength(1);
});
it('rejects wrong-language and stale card commands without advancing another cursor', () => {
  const id = start(['a', 'b']);
  store.present('sv', id, key);
  store.reveal('fi', id, key);
  expect(store.cards(id)[0]).toMatchObject({ shownAt: null, revealedAt: null });
  rate(id);
  store.next('fi', id, key);
  store.next('fi', id, key);
  store.reveal('fi', id, key);
  store.rate('fi', id, key, 'Almost');
  expect(store.current('fi')?.cursor).toBe(1);
  expect(store.cards(id)[1]).toMatchObject({ rating: null, revealedAt: null, shownAt: null });
  expect(evidence()).toHaveLength(1);
});
