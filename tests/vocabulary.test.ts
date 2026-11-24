import { finnishCurriculumRef } from '../src/domain/vocabulary/curriculum';
import {
  vocabularyLanguages,
  getVocabulary,
  getVocabularyByTier,
  getVocabularyByTopic,
  getVocabularyCount,
  getVocabularyItem,
  searchVocabulary,
} from '../src/domain/vocabulary/registry';
import { tiers, vocabularyRefSchema } from '../src/domain/vocabulary/schema';

test('available languages expose ranked, complete, isolated catalogues and exact filters', () => {
  expect(vocabularyLanguages).toEqual(['fi', 'sv']);
  for (const language of vocabularyLanguages) {
    const items = getVocabulary(language);
    expect(items).toBe(getVocabulary(language));
    expect(getVocabularyCount(language)).toBe(2000);
    expect(items).toHaveLength(2000);
    expect(
      items.every((item, index) => item.languageId === language && item.rank === index + 1),
    ).toBe(true);
    for (const tier of tiers) {
      const filtered = getVocabularyByTier(language, tier);
      expect(filtered).toHaveLength(500);
      expect(filtered).toEqual(items.filter((item) => item.tier === tier));
    }
    expect(getVocabularyByTopic(language, 'Basics')).toEqual(
      items.filter((item) => item.topic === 'Basics'),
    );
    expect(getVocabularyByTopic(language, 'absent')).toEqual([]);
  }
});

test('canonical lookup respects both halves of a reference and handles external data', () => {
  const ref = { languageId: 'fi', wordId: 'vocab.mina' };
  expect(vocabularyRefSchema.safeParse(ref).success).toBe(true);
  expect(getVocabularyItem(ref)).toMatchObject({ ...ref, lemma: 'minä' });
  for (const invalid of [
    null,
    undefined,
    12,
    '',
    [],
    {},
    { ...ref, languageId: 'sv' },
    { ...ref, languageId: 'en' },
    { ...ref, wordId: 1 },
    { ...ref, wordId: 'absent' },
  ]) {
    expect(getVocabularyItem(invalid)).toBeUndefined();
  }
});

test('Finnish teaching forms and prose spellings resolve only through their intended context', () => {
  expect(getVocabularyItem(finnishCurriculumRef('vocab.haluta'))).toMatchObject({
    displayForm: 'haluta',
    spokenForms: 'haluun; haluut',
    example: { learning: 'Haluan kupin kahvia.', english: 'I want a cup of coffee.' },
  });
  expect(getVocabularyItem(finnishCurriculumRef('vocab.minä'))?.wordId).toBe('vocab.mina');
  expect(getVocabularyItem(finnishCurriculumRef('vocab.hän'))?.wordId).toBe('vocab.han');
  for (const word of [
    'minä',
    'hän',
    'haluan',
    'kaupassa',
    'kahvia',
    'vetta',
    'maitoa',
    'euroa',
    'kortilla',
    'kyla',
  ]) {
    expect(getVocabularyItem({ languageId: 'fi', wordId: 'vocab.' + word })).toBeUndefined();
  }
});

test('Swedish articles, optional morphology, plural-only and mass forms follow the source', () => {
  const lookup = (wordId: string) => getVocabularyItem({ languageId: 'sv', wordId });
  expect(lookup('sv-bok-9992bfa7')).toMatchObject({
    lemma: 'bok',
    displayForm: 'en bok',
    noun: {
      gender: 'en',
      definiteSingular: 'boken',
      indefinitePlural: 'böcker',
      definitePlural: 'böckerna',
    },
    provenance: { kelly: { frequency: '478,59' } },
  });
  expect(lookup('sv-hus-a331d508')).toMatchObject({
    displayForm: 'ett hus',
    noun: { gender: 'ett' },
  });
  expect(lookup('sv-ata-18777a45')).toMatchObject({
    verb: { present: 'äter', past: 'åt', supine: 'ätit' },
  });
  expect(lookup('sv-stor-25e3d254')).toMatchObject({
    adjective: { neuter: 'stort', plural: 'stora' },
  });
  const vatten = lookup('sv-vatten-e20cc41e');
  expect(vatten?.displayForm).toBe('vatten');
  expect(vatten?.languageId === 'sv' && vatten.noun).toEqual({ gender: 'ett' });
  for (const [wordId, lemma] of [
    ['sv-glasogon-464f502b', 'glasögon'],
    ['sv-pengar-c901392d', 'pengar'],
  ]) {
    expect(lookup(wordId)).toMatchObject({ lemma, displayForm: lemma });
    expect(lookup(wordId)).not.toHaveProperty('noun');
  }
});

test('search matches canonical, display and English fields once each in rank order', () => {
  const ref = { languageId: 'sv', wordId: 'sv-bok-9992bfa7' };
  for (const query of ['bok', '  EN BOK ', 'Book']) {
    const refs = searchVocabulary('sv', query);
    expect(refs).toContainEqual(ref);
    expect(refs.every((r) => r.languageId === 'sv')).toBe(true);
    expect(new Set(refs.map((r) => r.wordId)).size).toBe(refs.length);
    const ranks = refs.map((r) => getVocabularyItem(r)!.rank);
    expect(ranks).toEqual([...ranks].sort((a, b) => a - b));
  }
  expect(searchVocabulary('fi', '  ')).toEqual([]);
  expect(searchVocabulary('sv', 'absent-word-000')).toEqual([]);
  expect(searchVocabulary('fi', 'en bok')).toEqual([]);
});

test('Unicode normalization preserves real lexical distinctions', () => {
  for (const [first, second] of [
    ['pelata', 'pelätä'],
    ['vaara', 'väärä'],
    ['tähti', 'tahti'],
    ['valittaa', 'välittää'],
  ]) {
    const a = getVocabulary('fi').find((i) => i.lemma === first)!;
    const b = getVocabulary('fi').find((i) => i.lemma === second)!;
    expect(a.wordId).not.toBe(b.wordId);
    const hits = searchVocabulary('fi', second.normalize('NFD').toUpperCase());
    expect(hits).toEqual(searchVocabulary('fi', second));
    expect(hits).toContainEqual({ languageId: 'fi', wordId: b.wordId });
    expect(hits).not.toContainEqual({ languageId: 'fi', wordId: a.wordId });
  }
});

test('consumers cannot mutate cached items, nested source metadata, filters or search references', () => {
  const items = getVocabulary('sv');
  const item = getVocabularyItem({ languageId: 'sv', wordId: 'sv-bok-9992bfa7' })!;
  const refs = searchVocabulary('sv', 'en bok');
  for (const value of [
    vocabularyLanguages,
    items,
    item,
    item.example,
    item.provenance,
    item.editorial,
    getVocabularyByTopic('sv', 'Basics'),
    getVocabularyByTier('sv', 'Core'),
    refs,
    refs[0],
  ]) {
    expect(Object.isFrozen(value)).toBe(true);
  }
  expect(Reflect.set(item, 'english', 'changed')).toBe(false);
  expect(Reflect.set(items, 0, item)).toBe(false);
});
