import type { LearningLanguage } from '../domain/languages';
import type { Direction, Rating } from '../domain/learning/model';
import { hour, scheduleRating, type ReviewState } from '../domain/learning/review';
import type { LearningDatabase } from './database';

export interface DirectionalRef {
  languageId: LearningLanguage;
  wordId: string;
  direction: Direction;
}

export function getReviewState(db: LearningDatabase, ref: DirectionalRef): ReviewState | undefined {
  return db.getAllSync<ReviewState>(
    'SELECT * FROM review_state WHERE languageId=? AND wordId=? AND direction=?',
    ref.languageId,
    ref.wordId,
    ref.direction,
  )[0];
}

function pending(db: LearningDatabase, ref: DirectionalRef, dueAt: number) {
  db.runSync(
    `INSERT INTO review_state(languageId,wordId,direction,dueAt) VALUES(?,?,?,?)
    ON CONFLICT(languageId,wordId,direction) DO UPDATE SET dueAt=min(dueAt,excluded.dueAt)
    WHERE lastRating IS NULL`,
    ref.languageId,
    ref.wordId,
    ref.direction,
    dueAt,
  );
}

export function recordExposure(db: LearningDatabase, ref: DirectionalRef, time: number) {
  pending(db, ref, time + 8 * hour);
}

export function recordFirstPass(
  db: LearningDatabase,
  ref: DirectionalRef,
  rating: Rating,
  time: number,
) {
  const previous = getReviewState(db, ref);
  const next = scheduleRating(previous, rating, time);
  db.runSync(
    `INSERT INTO review_state(languageId,wordId,direction,dueAt,level,spacedSuccesses,familiarity,lastRating)
    VALUES(?,?,?,?,?,?,?,?) ON CONFLICT(languageId,wordId,direction) DO UPDATE SET
    dueAt=excluded.dueAt, level=excluded.level, spacedSuccesses=excluded.spacedSuccesses,
    familiarity=excluded.familiarity, lastRating=excluded.lastRating`,
    ref.languageId,
    ref.wordId,
    ref.direction,
    next.dueAt,
    next.level,
    next.spacedSuccesses,
    next.familiarity,
    rating,
  );
  if (!previous?.lastRating) {
    const opposite = {
      ...ref,
      direction: ref.direction === 'recognition' ? 'production' : 'recognition',
    } as const;
    // Once either direction has a rating, its independent schedule is authoritative.
    pending(db, opposite, next.dueAt);
  }
}

export function replayVersionOne(db: LearningDatabase) {
  const exposures = db.getAllSync<DirectionalRef & { firstReveal: string }>(
    `SELECT languageId,wordId,direction,min(revealedAt) AS firstReveal FROM session_cards
    WHERE pass='first' AND revealedAt IS NOT NULL GROUP BY languageId,wordId,direction`,
  );
  for (const ref of exposures) recordExposure(db, ref, Date.parse(ref.firstReveal));
  const firstPass = db.getAllSync<DirectionalRef & { rating: Rating; ratedAt: string }>(
    "SELECT * FROM learning_evidence_v1 WHERE pass='first' ORDER BY sequence",
  );
  for (const event of firstPass)
    recordFirstPass(db, event, event.rating, Date.parse(event.ratedAt));
}
