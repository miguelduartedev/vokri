import type { LearningLanguage } from '../languages';

export const directions = ['recognition', 'production', 'mixed'] as const;
export type DirectionChoice = (typeof directions)[number];
export type Direction = Exclude<DirectionChoice, 'mixed'>;
export const ratings = ['Again', 'Almost', 'Knew It'] as const;
export type Rating = (typeof ratings)[number];
export type Pass = 'first' | 'revisit';
export type Phase = Pass | 'offer' | 'completed' | 'abandoned';
export type Origin = { kind: 'today' } | { kind: 'deck' | 'word' | 'collection'; id: string };
export type SessionMode = 'learn_new' | 'review_due';
export interface Session {
  mode: SessionMode;
  id: string;
  languageId: LearningLanguage;
  originKind: Origin['kind'];
  originId: string | null;
  choice: DirectionChoice;
  phase: Phase;
  cursor: number;
}
export interface Card {
  contentRevision: number | null;
  targetSnapshot: string | null;
  englishSnapshot: string | null;
  firstPractice: number;
  position: number;
  pass: Pass;
  wordId: string;
  direction: Direction;
  shownAt: string | null;
  revealedAt: string | null;
  skipped: number;
  rating: Rating | null;
}
export function resolveDirection(choice: DirectionChoice, position: number): Direction {
  if (choice !== 'mixed') return choice;
  return position % 2 === 0 ? 'recognition' : 'production';
}
export function selectNew(enrolledNew: readonly string[], context?: readonly string[]) {
  const eligible = new Set(enrolledNew);
  return [...new Set(context ?? enrolledNew)].filter((id) => eligible.has(id)).slice(0, 5);
}
export function needsRevisit(rating: Rating) {
  return rating === 'Again' || rating === 'Almost';
}
