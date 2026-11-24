import definitions from '../../content/decks.json';
import { languageIds, type LearningLanguage, type VocabularyRef } from '../languages';

export interface CuratedDeck {
  readonly deckId: string;
  readonly languageId: LearningLanguage;
  readonly title: string;
  readonly description: string;
  readonly wordRefs: readonly Readonly<VocabularyRef>[];
}
const decks = definitions.map(({ wordIds, ...deck }): CuratedDeck => {
  const languageId = languageIds.find((id) => id === deck.languageId);
  if (!languageId) throw new Error('Invalid deck language: ' + deck.deckId);
  return Object.freeze({
    ...deck,
    languageId,
    wordRefs: Object.freeze(wordIds.map((wordId) => Object.freeze({ wordId, languageId }))),
  });
});
export function getDecks(language: LearningLanguage) {
  return decks.filter((deck) => deck.languageId === language);
}
export function getDeck(language: LearningLanguage, id: string) {
  return decks.find((deck) => deck.languageId === language && deck.deckId === id);
}
