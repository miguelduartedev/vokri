import { comparable, searchKey } from '../learning/personal';
import { getVocabulary } from '../vocabulary/registry';
import type { PortableEntry, VocabularyDocument } from './format';

export function expressionKeys(item: { displayForm: string; lemma?: string }) {
  return [...new Set([searchKey(item.displayForm), searchKey(item.lemma ?? '')].filter(Boolean))];
}

type ExistingEntry = PortableEntry & { archivedAt?: string | null };

export function compareEntries(incoming: PortableEntry, existing: ExistingEntry) {
  if (incoming.languageId !== existing.languageId) return 'unrelated';
  if (existing.archivedAt != null)
    return incoming.wordId === existing.wordId ? 'identity_conflict' : 'unrelated';
  const targets = expressionKeys(incoming);
  const sameId = incoming.wordId === existing.wordId;
  if (!sameId && !expressionKeys(existing).some((key) => targets.includes(key))) return 'unrelated';
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

export type EntryStatus = 'new' | 'matching' | 'similar' | 'conflict';
export type Candidate = Pick<
  PortableEntry,
  'wordId' | 'displayForm' | 'english' | 'lemma' | 'context' | 'note' | 'forms'
>;

export function inspectVocabulary(
  doc: VocabularyDocument,
  existing: readonly ExistingEntry[] = [],
  reserved: ReadonlySet<string> = new Set(),
) {
  const byId = new Map<string, ExistingEntry>();
  const index = new Map<string, Candidate[]>();
  function indexItem(item: Candidate) {
    for (const key of expressionKeys(item)) {
      const group = index.get(key);
      if (group) group.push(item);
      else index.set(key, [item]);
    }
  }
  for (const item of getVocabulary(doc.learningLanguage)) indexItem(item);
  for (const item of existing) {
    if (item.languageId !== doc.learningLanguage) continue;
    byId.set(item.wordId, item);
    if (item.archivedAt == null) indexItem(item);
  }
  const frequencies = new Map<string, number>();
  for (const item of doc.personalEntries)
    for (const key of expressionKeys(item)) frequencies.set(key, (frequencies.get(key) ?? 0) + 1);
  const entries = doc.personalEntries.map((item) => {
    const known = byId.get(item.wordId);
    let status: EntryStatus = 'new';
    if (known)
      status = compareEntries(item, known) === 'matching_identity' ? 'matching' : 'conflict';
    else if (reserved.has(item.wordId)) status = 'conflict';
    else if (expressionKeys(item).some((key) => index.has(key) || (frequencies.get(key) ?? 0) > 1))
      status = 'similar';
    return { item, status };
  });
  function candidates(item: PortableEntry) {
    const known = byId.get(item.wordId);
    const matches = new Set<Candidate>();
    if (known && known.archivedAt == null) matches.add(known);
    for (const key of expressionKeys(item))
      for (const match of index.get(key) ?? []) matches.add(match);
    return [...matches];
  }
  const summary = {
    language: doc.learningLanguage,
    entries: entries.length,
    collections: doc.collections.length,
    memberships: doc.memberships.length,
    matchingIdentities: 0,
    identityConflicts: 0,
    possibleDuplicates: 0,
    newEntries: 0,
  };
  for (const { status } of entries) {
    if (status === 'matching') summary.matchingIdentities++;
    else if (status === 'conflict') summary.identityConflicts++;
    else if (status === 'similar') summary.possibleDuplicates++;
    else summary.newEntries++;
  }
  return { entries, candidates, summary };
}

export function summarizeVocabulary(
  doc: VocabularyDocument,
  existing: readonly ExistingEntry[] = [],
) {
  return inspectVocabulary(doc, existing).summary;
}
