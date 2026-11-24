import { getDecks, getDeck } from '@/domain/vocabulary/decks';
import { browseVocabulary, vocabularyTopics } from '@/domain/vocabulary/catalogue';
import { getVocabularyItem, searchVocabulary } from '@/domain/vocabulary/registry';
import { languageIds } from '@/domain/languages';

for (const language of languageIds) {
  test(
    language + ' curated references are unique, resolvable and suitable for each collection',
    () => {
      const decks = getDecks(language);
      expect(decks.map((d) => d.deckId)).toEqual(
        ['essentials', 'everyday-verbs', 'food-drink'].map((k) => language + '.' + k),
      );
      expect(decks.map((d) => d.wordRefs.length)).toEqual([24, 16, 16]);
      for (const deck of decks) {
        expect(getDeck(language, deck.deckId)).toBe(deck);
        expect(getDeck(language === 'fi' ? 'sv' : 'fi', deck.deckId)).toBeUndefined();
        expect(new Set(deck.wordRefs.map((r) => r.wordId)).size).toBe(deck.wordRefs.length);
        for (const ref of deck.wordRefs) {
          const item = getVocabularyItem(ref);
          expect(item?.languageId).toBe(language);
          if (deck.deckId.endsWith('verbs')) expect(item?.partOfSpeech).toBe('verb');
        }
      }
    },
  );
  test(language + ' catalogue, topic counts, scoped tier combinations and clearing', () => {
    const topics = vocabularyTopics(language);
    expect(topics).toHaveLength(language === 'fi' ? 25 : 26);
    expect(topics.reduce((n, [, count]) => n + count, 0)).toBe(2000);
    const q = language === 'fi' ? 'juna' : 'tåg';
    const filtered = browseVocabulary(language, q, 'Transport', 'Core');
    expect(filtered.some((i) => i.lemma === q)).toBe(true);
    expect(
      filtered.every(
        (i) => i.languageId === language && i.tier === 'Core' && i.topic === 'Transport',
      ),
    ).toBe(true);
    expect(browseVocabulary(language, 'zzxx', 'Transport', 'Core')).toEqual([]);
    expect(browseVocabulary(language, '')).toHaveLength(2000);
    expect(vocabularyTopics(language, 'Core').reduce((n, [, count]) => n + count, 0)).toBe(500);
  });
}
test('exact lexical and English gloss matches outrank lower-ranked substrings', () => {
  for (const [query, lemma] of [
    ['bok', 'bok'],
    ['en bok', 'bok'],
    ['hus', 'hus'],
    ['en bok ', 'bok'],
    ['spectacles', 'glasögon'],
  ]) {
    expect(getVocabularyItem(searchVocabulary('sv', query)[0])?.lemma).toBe(lemma);
  }
  expect(getVocabularyItem(searchVocabulary('fi', 'minä')[0])?.lemma).toBe('minä');
});

test('equally exact English glosses retain pedagogical rank before lower-relevance matches', () => {
  const hits = searchVocabulary('sv', 'free').slice(0, 3).map(ref => getVocabularyItem(ref)?.lemma);
  expect(hits).toEqual(['ledig', 'fri', 'lös']);
});
