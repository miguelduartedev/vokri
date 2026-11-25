import type { Direction, Rating } from './model';

export const hour = 3_600_000;
const successfulDays = [1, 3, 7, 14, 30] as const;
export type Familiarity = 'learning' | 'becoming_familiar' | 'familiar';
export interface ReviewState {
  dueAt: number;
  level: number;
  spacedSuccesses: number;
  familiarity: Familiarity;
  lastRating: Rating | null;
}
export interface ReviewCard extends ReviewState {
  wordId: string;
  direction: Direction;
}
export function pendingReview(dueAt: number): ReviewState {
  return { dueAt, level: 0, spacedSuccesses: 0, familiarity: 'learning', lastRating: null };
}

// Only an accepted first-pass response is an official scheduling event.
export function scheduleRating(
  previous: ReviewState | undefined,
  rating: Rating,
  ratedAt: number,
): ReviewState {
  const state = previous ?? pendingReview(ratedAt);
  let { familiarity } = state;
  if (rating === 'Knew It') {
    const level = Math.min(state.level + 1, successfulDays.length);
    const spacedSuccesses =
      state.spacedSuccesses + (state.lastRating && ratedAt >= state.dueAt ? 1 : 0);
    if (spacedSuccesses >= 4) familiarity = 'familiar';
    else if (spacedSuccesses >= 2 && familiarity === 'learning') familiarity = 'becoming_familiar';
    return {
      dueAt: ratedAt + successfulDays[level - 1] * 24 * hour,
      lastRating: rating,
      level,
      spacedSuccesses,
      familiarity,
    };
  }
  if (
    familiarity === 'familiar' &&
    (rating === 'Again' || state.lastRating === 'Almost' || state.lastRating === 'Again')
  )
    familiarity = 'becoming_familiar';
  else if (
    familiarity === 'becoming_familiar' &&
    rating === 'Again' &&
    state.lastRating === 'Again'
  )
    familiarity = 'learning';
  const again = rating === 'Again';
  return {
    dueAt: ratedAt + (again ? 4 : 8) * hour,
    level: again ? 0 : Math.max(0, state.level - 1),
    spacedSuccesses: 0,
    lastRating: rating,
    familiarity,
  };
}

export const reviewBatchSize = 10;

// Input is already in priority order. Only rearrange the selected batch.
export function selectReview(due: readonly ReviewCard[]) {
  const remaining = due.slice(0, reviewBatchSize);
  const cards: ReviewCard[] = [];
  while (remaining.length) {
    const different = remaining.findIndex((card) => card.wordId !== cards.at(-1)?.wordId);
    cards.push(remaining.splice(Math.max(0, different), 1)[0]);
  }
  return cards;
}
