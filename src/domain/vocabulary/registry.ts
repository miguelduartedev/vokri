import { languageIds, type LearningLanguage, type VocabularyRef } from '../languages';
import manifest from '../../content/vocabulary/generated/manifest.json';
import { vocabularyRefSchema, type VocabularyItem, type VocabularyTier } from './schema';

export const vocabularyLanguages = Object.freeze([...languageIds]);

// Metro resolves both literal assets at bundle time. Only index a language on first access.
const load = {
  fi: () => require('../../content/vocabulary/generated/fi.json') as VocabularyItem[],
  sv: () => require('../../content/vocabulary/generated/sv.json') as VocabularyItem[],
};

function freezeTree(value: object) {
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object') freezeTree(child);
  }
  Object.freeze(value);
}

const normalize = (value: string) => value.trim().normalize('NFC').toLowerCase();

function makeIndex(language: LearningLanguage) {
  const items = load[language]();
  freezeTree(items);
  const byId = new Map(items.map((item) => [item.wordId, item]));
  const searchable = items.map(({ wordId, lemma, displayForm, english }) => ({
    ref: Object.freeze({ languageId: language, wordId }),
    lexical: [normalize(lemma), normalize(displayForm)],
    meaning: normalize(english),
    glosses: normalize(english)
      .split(';')
      .map((s) => s.trim()),
    words: normalize(english)
      .split(/[^\p{L}\p{N}]+/u)
      .filter(Boolean),
  }));
  return { items: Object.freeze(items), byId, searchable };
}

const indexes = new Map<LearningLanguage, ReturnType<typeof makeIndex>>();
function index(language: LearningLanguage) {
  const cached = indexes.get(language);
  if (cached) return cached;
  const created = makeIndex(language);
  indexes.set(language, created);
  return created;
}

export function getVocabularyCount(language: LearningLanguage) {
  return manifest.languages.find((entry) => entry.languageId === language)?.count ?? 0;
}

// Accept untrusted references at this boundary, including data restored by future consumers.
export function getVocabularyItem(ref: unknown): VocabularyItem | undefined {
  const parsed = vocabularyRefSchema.safeParse(ref);
  if (!parsed.success) return undefined;
  return index(parsed.data.languageId).byId.get(parsed.data.wordId);
}

export function getVocabulary(language: LearningLanguage): readonly VocabularyItem[] {
  return index(language).items;
}

export function getVocabularyByTier(language: LearningLanguage, tier: VocabularyTier) {
  return Object.freeze(getVocabulary(language).filter((item) => item.tier === tier));
}

export function getVocabularyByTopic(language: LearningLanguage, topic: string) {
  return Object.freeze(getVocabulary(language).filter((item) => item.topic === topic));
}

export function searchVocabulary(
  language: LearningLanguage,
  query: string,
): readonly Readonly<VocabularyRef>[] {
  const needle = normalize(query);
  if (!needle) return Object.freeze([]);
  // Stable insertion into relevance bands preserves pedagogical rank within each band.
  const bands: Readonly<VocabularyRef>[][] = [[], [], [], [], []];
  for (const entry of index(language).searchable) {
    if (entry.lexical.includes(needle)) bands[0].push(entry.ref);
    else if (entry.meaning === needle || entry.glosses.includes(needle)) bands[1].push(entry.ref);
    else if (entry.lexical.some((form) => form.startsWith(needle))) bands[2].push(entry.ref);
    else if (entry.words.some((word) => word.startsWith(needle))) bands[3].push(entry.ref);
    else if (entry.meaning.includes(needle) || entry.lexical.some((form) => form.includes(needle)))
      bands[4].push(entry.ref);
  }
  return Object.freeze(bands.flat());
}
