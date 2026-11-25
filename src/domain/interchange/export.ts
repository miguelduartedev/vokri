import type { LearningLanguage } from '../languages';
import {
  checkSize,
  format,
  InterchangeError,
  validateDocument,
  version,
  type Membership,
  type PortableCollection,
  type PortableEntry,
} from './format';

interface ExportSource {
  learningLanguage: LearningLanguage;
  exportedAt: string;
  personalEntries: readonly (PortableEntry & { archivedAt?: string | null })[];
  collections: readonly PortableCollection[];
  memberships: readonly Membership[];
}

function order(a: string, b: string) {
  return a < b ? -1 : a > b ? 1 : 0;
}

// Pick only interchange fields. Callers can pass richer domain records without leaking their state.
export function serializeVocabulary(source: ExportSource): string {
  const archived = new Set<string>();
  const personalEntries: PortableEntry[] = [];
  for (const item of source.personalEntries) {
    if (item.languageId !== source.learningLanguage)
      throw new InterchangeError('language', ['personalEntries'], 'Export one language at a time');
    if (item.archivedAt != null) {
      archived.add(item.wordId);
      continue;
    }
    personalEntries.push({
      languageId: item.languageId,
      wordId: item.wordId,
      type: item.type,
      displayForm: item.displayForm,
      english: item.english,
      lemma: item.lemma,
      context: item.context,
      forms: item.forms,
      note: item.note,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    });
  }
  if (personalEntries.some((item) => archived.has(item.wordId)))
    throw new InterchangeError(
      'duplicate',
      ['personalEntries'],
      'An entry cannot be both archived and active',
    );
  const collections = source.collections.map(
    ({ languageId, collectionId, name, description, createdAt, updatedAt }) => ({
      languageId,
      collectionId,
      name,
      description,
      createdAt,
      updatedAt,
    }),
  );
  const memberships = source.memberships
    .filter(
      (row) =>
        !(
          row.languageId === source.learningLanguage &&
          row.kind === 'personal' &&
          archived.has(row.wordId)
        ),
    )
    .map(({ languageId, collectionId, kind, wordId }) => ({
      languageId,
      collectionId,
      kind,
      wordId,
    }));

  const { document } = validateDocument({
    format,
    version,
    learningLanguage: source.learningLanguage,
    exportedAt: source.exportedAt,
    personalEntries: personalEntries.sort((a, b) => order(a.wordId, b.wordId)),
    collections: collections.sort((a, b) => order(a.collectionId, b.collectionId)),
    memberships: memberships.sort(
      (a, b) => order(a.collectionId, b.collectionId) || order(a.wordId, b.wordId),
    ),
  });
  const json = JSON.stringify(document, null, 2) + '\n';
  checkSize(json);
  return json;
}
