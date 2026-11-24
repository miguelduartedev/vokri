import type { LearningLanguage } from '../languages';
import { getVocabulary, getVocabularyItem, searchVocabulary } from './registry';
import type { VocabularyTier } from './schema';

export function browseVocabulary(
  language: LearningLanguage,
  query: string,
  topic?: string,
  tier?: VocabularyTier,
) {
  const items = query.trim()
    ? searchVocabulary(language, query).map((ref) => getVocabularyItem(ref)!)
    : getVocabulary(language);
  if (!topic && !tier) return items;
  return items.filter((item) => (!topic || item.topic === topic) && (!tier || item.tier === tier));
}

export function vocabularyTopics(language: LearningLanguage, tier?: VocabularyTier) {
  const counts = new Map<string, number>();
  for (const item of getVocabulary(language)) {
    if (!tier || item.tier === tier) counts.set(item.topic, (counts.get(item.topic) ?? 0) + 1);
  }
  return [...counts].sort(([a], [b]) => a.localeCompare(b, 'en'));
}
