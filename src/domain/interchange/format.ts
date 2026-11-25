import { z } from 'zod';
import { languageIds, type VocabularyRef } from '../languages';
import { entryTypes, personalPrefix } from '../learning/personal';
import { getVocabularyItem } from '../vocabulary/registry';
import { text } from '../vocabulary/schema';

export const format = 'vokri-cards-my-words';
export const version = 1;
export const maxBytes = 4 * 1024 * 1024;
const maxRows = 25_000;
const languageId = z.enum(languageIds);
const timestamp = z.iso.datetime();
// IDs are opaque tokens. Display text has no ID restrictions.
const token = z.string().regex(/^[\p{L}\p{N}][\p{L}\p{M}\p{N}_.:-]*$/u, 'Expected an identifier');
const personalId = z.string().regex(/^personal:[0-9a-f]{32}$/, 'Invalid personal vocabulary ID');
const dates = { createdAt: timestamp.optional(), updatedAt: timestamp.optional() };

const entry = z.strictObject({
  languageId,
  wordId: personalId,
  type: z.enum(entryTypes),
  displayForm: text,
  english: text,
  lemma: z.string().optional(),
  context: z.string().optional(),
  forms: z.string().optional(),
  note: z.string().optional(),
  ...dates,
});
const collection = z.strictObject({
  languageId,
  collectionId: token,
  name: text,
  description: z.string().optional(),
  ...dates,
});
const membership = z.strictObject({
  languageId,
  collectionId: token,
  kind: z.enum(['personal', 'curated']),
  wordId: token,
});
const rows = z.array(z.unknown()).max(maxRows);
const envelope = z.strictObject({
  format: z.literal(format),
  version: z.literal(version),
  learningLanguage: languageId,
  exportedAt: timestamp,
  personalEntries: rows,
  collections: rows,
  memberships: rows,
});

export type PortableEntry = z.infer<typeof entry>;
export type PortableCollection = z.infer<typeof collection>;
export type Membership = z.infer<typeof membership>;
export interface VocabularyDocument
  extends Omit<z.infer<typeof envelope>, 'personalEntries' | 'collections' | 'memberships'> {
  personalEntries: PortableEntry[];
  collections: PortableCollection[];
  memberships: Membership[];
}

type IssueCode =
  | 'size'
  | 'json'
  | 'format'
  | 'unsupported_version'
  | 'schema'
  | 'language'
  | 'duplicate'
  | 'reference';
export class InterchangeError extends Error {
  constructor(
    readonly code: IssueCode,
    readonly path: (string | number)[],
    message: string,
  ) {
    super(message);
  }
}
export type ValidationResult =
  | { ok: true; document: VocabularyDocument; missingCurated: VocabularyRef[] }
  | { ok: false; error: InterchangeError };

function read<T>(schema: z.ZodType<T>, raw: unknown, path: (string | number)[] = []): T {
  if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
    // Strict object parsing in Zod ignores some Object.prototype keys.
    const reserved = Object.keys(raw).find((key) => Object.hasOwn(Object.prototype, key));
    if (reserved)
      throw new InterchangeError('schema', [...path, reserved], 'Unexpected record field');
  }
  const result = schema.safeParse(raw);
  if (result.success) return result.data;
  const issue = result.error.issues[0];
  throw new InterchangeError(
    'schema',
    [...path, ...issue.path.map((k) => (typeof k === 'number' ? k : String(k)))],
    issue.message,
  );
}

function unique(seen: Set<string>, key: string, path: (string | number)[]) {
  if (seen.has(key))
    throw new InterchangeError('duplicate', path, 'Repeated identity or membership');
  seen.add(key);
}

// Shared by the writer and reader. Validate one row at a time to bound diagnostics for bad files.
export function validateDocument(raw: unknown): Extract<ValidationResult, { ok: true }> {
  if (!raw || typeof raw !== 'object' || !('format' in raw) || raw.format !== format)
    throw new InterchangeError('format', ['format'], 'Expected a Vokri Cards My Words file');
  if ('version' in raw && typeof raw.version === 'number' && raw.version !== version)
    throw new InterchangeError(
      'unsupported_version',
      ['version'],
      'Unsupported My Words interchange version',
    );

  const data = read(envelope, raw);
  function readScoped<T extends Pick<VocabularyRef, 'languageId'>>(
    schema: z.ZodType<T>,
    value: unknown,
    path: (string | number)[],
  ) {
    const row = read(schema, value, path);
    if (row.languageId !== data.learningLanguage)
      throw new InterchangeError(
        'language',
        [...path, 'languageId'],
        'Record belongs to a different language',
      );
    return row;
  }

  const personalIds = new Set<string>();
  const personalEntries = data.personalEntries.map((value, i) => {
    const path = ['personalEntries', i];
    const row = readScoped(entry, value, path);
    unique(personalIds, row.wordId, [...path, 'wordId']);
    return row;
  });
  const collectionIds = new Set<string>();
  const collections = data.collections.map((value, i) => {
    const path = ['collections', i];
    const row = readScoped(collection, value, path);
    unique(collectionIds, row.collectionId, [...path, 'collectionId']);
    return row;
  });
  const edges = new Set<string>();
  const missing = new Map<string, VocabularyRef>();
  const memberships = data.memberships.map((value, i) => {
    const path = ['memberships', i];
    const row = readScoped(membership, value, path);
    if (!collectionIds.has(row.collectionId))
      throw new InterchangeError(
        'reference',
        [...path, 'collectionId'],
        'Collection is absent from the file',
      );
    if (row.kind === 'personal') {
      if (!personalIds.has(row.wordId))
        throw new InterchangeError(
          'reference',
          [...path, 'wordId'],
          'Personal entry is absent from the file',
        );
    } else {
      if (row.wordId.startsWith(personalPrefix))
        throw new InterchangeError(
          'reference',
          [...path, 'wordId'],
          'Personal ID used as a curated reference',
        );
      const ref = { languageId: row.languageId, wordId: row.wordId };
      if (!getVocabularyItem(ref)) {
        if (
          languageIds.some(
            (lang) => lang !== row.languageId && getVocabularyItem({ ...ref, languageId: lang }),
          )
        )
          throw new InterchangeError(
            'language',
            [...path, 'wordId'],
            'Curated ID belongs to the other catalogue',
          );
        missing.set(row.wordId, ref);
      }
    }
    unique(edges, row.collectionId + '/' + row.wordId, path);
    return row;
  });
  return {
    ok: true,
    document: { ...data, personalEntries, collections, memberships },
    missingCurated: [...missing.values()],
  };
}

export function checkSize(json: string) {
  if (json.length > maxBytes || new TextEncoder().encode(json).length > maxBytes)
    throw new InterchangeError('size', [], 'My Words files support up to 4 MiB of UTF-8 JSON');
}

export function parseVocabulary(json: string): ValidationResult {
  try {
    checkSize(json);
    return validateDocument(JSON.parse(json));
  } catch (error) {
    if (error instanceof SyntaxError)
      return { ok: false, error: new InterchangeError('json', [], 'Invalid JSON') };
    if (error instanceof InterchangeError) return { ok: false, error };
    throw error;
  }
}
