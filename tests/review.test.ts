import { hour, pendingReview, scheduleRating, type ReviewState } from '@/domain/learning/review';
import { refreshDelay } from '@/cards/use-daily-learning';

const day = 24 * hour;
const start = Date.UTC(2026, 9, 24, 11);
it('uses elapsed time for the full capped ladder and counts only actual spaced returns', () => {
  let previous: ReviewState | undefined;
  let time = start;
  [1, 3, 7, 14, 30, 30].forEach((days, index) => {
    const state = scheduleRating(previous, 'Knew It', time);
    expect(state).toEqual({
      dueAt: time + days * day,
      level: Math.min(index + 1, 5),
      spacedSuccesses: index,
      familiarity: index < 2 ? 'learning' : index < 4 ? 'becoming_familiar' : 'familiar',
      lastRating: 'Knew It',
    });
    time = state.dueAt + hour;
    previous = state;
  });
});
it.each(['Again', 'Almost'] as const)(
  'handles %s after established familiarity and recovers from a weak streak',
  (rating) => {
    const familiar: ReviewState = {
      level: 5,
      dueAt: start,
      spacedSuccesses: 4,
      familiarity: 'familiar',
      lastRating: 'Knew It',
    };
    const weak = scheduleRating(familiar, rating, start + day);
    expect(weak).toMatchObject({
      level: rating === 'Again' ? 0 : 4,
      dueAt: start + day + (rating === 'Again' ? 4 : 8) * hour,
      spacedSuccesses: 0,
      familiarity: rating === 'Again' ? 'becoming_familiar' : 'familiar',
    });
    const twice = scheduleRating(weak, rating, weak.dueAt);
    expect(twice.familiarity).toBe(rating === 'Again' ? 'learning' : 'becoming_familiar');
    const recovery = scheduleRating(twice, 'Knew It', twice.dueAt);
    expect(recovery.spacedSuccesses).toBe(1);
    expect(recovery.familiarity).toBe(twice.familiarity);
  },
);
it('distinguishes a pending introduction, an early answer and an on-time return', () => {
  const introduced = scheduleRating(pendingReview(start), 'Knew It', start + day);
  expect(introduced).toMatchObject({ spacedSuccesses: 0, level: 1, dueAt: start + 2 * day });
  expect(scheduleRating(introduced, 'Knew It', introduced.dueAt - 1).spacedSuccesses).toBe(0);
  expect(scheduleRating(introduced, 'Knew It', introduced.dueAt).spacedSuccesses).toBe(1);
});
it('wakes at the due instant or local midnight and periodically reconciles clock changes', () => {
  expect(refreshDelay(start, start + 9)).toBe(9);
  expect(refreshDelay(start)).toBe(60_000);
  const lastSecond = new Date(2026, 8, 30, 23, 59, 59).getTime();
  expect(refreshDelay(lastSecond, lastSecond + day)).toBe(1000);
});
