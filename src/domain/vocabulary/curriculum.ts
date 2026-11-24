import type { VocabularyRef } from '../languages.ts';

// The Unit 2 lesson 2.3 reuse paragraph spells these differently from the unit inventories.
const reuseSpellings = new Map([
  ['vocab.minä', 'vocab.mina'],
  ['vocab.hän', 'vocab.han'],
]);
export function finnishCurriculumRef(wordId: string): VocabularyRef {
  return { languageId: 'fi', wordId: reuseSpellings.get(wordId) ?? wordId };
}
