import { comparable, searchKey } from '../learning/personal';
import { getVocabulary } from '../vocabulary/registry';
import type { PortableEntry, VocabularyDocument } from './format';

type ExistingEntry = PortableEntry & { archivedAt?: string | null };

export function compareEntries(incoming: PortableEntry, existing: ExistingEntry) {
  if (incoming.languageId !== existing.languageId) return 'unrelated';
  if (existing.archivedAt != null)
    return incoming.wordId === existing.wordId ? 'identity_conflict' : 'unrelated';
  const target = searchKey(incoming.displayForm);
  const sameId = incoming.wordId === existing.wordId;
  if (
    !sameId &&
    target !== searchKey(existing.displayForm) &&
    target !== searchKey(existing.lemma ?? '')
  )
    return 'unrelated';
  const sameText =
    comparable(incoming.displayForm) === comparable(existing.displayForm) &&
    comparable(incoming.english) === comparable(existing.english);
  const sameDetails =
    incoming.type === existing.type &&
    (['note', 'lemma', 'forms', 'context'] as const).every(
      (field) =>
        (incoming[field] ?? '').normalize('NFC') === (existing[field] ?? '').normalize('NFC'),
    );
  if (sameId) return sameText && sameDetails ? 'matching_identity' : 'identity_conflict';
  if (searchKey(incoming.english) !== searchKey(existing.english)) return 'different_meaning';
  if (!sameDetails) return 'different_details';
  return sameText ? 'equivalent_content' : 'similar_expression';
}

// Counts describe the incoming entries. An identity match takes precedence over resemblance.
export function summarizeVocabulary(
  doc: VocabularyDocument,
  existing: readonly ExistingEntry[] = [],
) {
  const byId = new Map<string, ExistingEntry>();
  const expressions = new Set<string>();
  for (const item of getVocabulary(doc.learningLanguage)) {
    expressions.add(searchKey(item.displayForm));
    expressions.add(searchKey(item.lemma));
  }
  for (const item of existing) {
    if (item.languageId !== doc.learningLanguage) continue;
    byId.set(item.wordId, item);
    if (item.archivedAt != null) continue;
    expressions.add(searchKey(item.displayForm));
    if (item.lemma) expressions.add(searchKey(item.lemma));
  }
  const fileExpressions = new Map<string, number>();
  for (const item of doc.personalEntries) {
    const keys = new Set([searchKey(item.displayForm)]);
    if (item.lemma) keys.add(searchKey(item.lemma));
    for (const key of keys) fileExpressions.set(key, (fileExpressions.get(key) ?? 0) + 1);
  }
  let matchingIdentities = 0,
    identityConflicts = 0,
    possibleDuplicates = 0,
    newEntries = 0;
  for (const item of doc.personalEntries) {
    const known = byId.get(item.wordId);
    if (known) {
      if (compareEntries(item, known) === 'matching_identity') matchingIdentities++;
      else identityConflicts++;
    } else {
      const key = searchKey(item.displayForm);
      if (expressions.has(key) || (fileExpressions.get(key) ?? 0) > 1) possibleDuplicates++;
      else newEntries++;
    }
  }
  return {
    language: doc.learningLanguage,
    entries: doc.personalEntries.length,
    collections: doc.collections.length,
    memberships: doc.memberships.length,
    matchingIdentities,
    identityConflicts,
    possibleDuplicates,
    newEntries,
  };
}
