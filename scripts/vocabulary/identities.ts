import { z } from 'zod';
import { finnishCurriculumRef } from '../../src/domain/vocabulary/curriculum.ts';
import { posSchema, text } from '../../src/domain/vocabulary/schema.ts';

const lexicalKey = z.strictObject({
  lemma: text.refine((value) => value === value.normalize('NFC'), 'Expected NFC lemma'),
  partOfSpeech: posSchema,
  sense: text.optional(),
});
const assignment = lexicalKey.extend({
  wordId: z
    .string()
    .regex(/^vocab\.[^\s]+$/u)
    .refine((value) => value === value.normalize('NFC'), 'Expected NFC word ID'),
  previousKeys: z.array(lexicalKey).optional(),
});
export const identityMapSchema = z.strictObject({
  version: z.literal(1),
  entries: z.array(assignment),
});
export type Assignment = z.infer<typeof assignment>;
export type IdentityMap = z.infer<typeof identityMapSchema>;
export function keyOf(entry: z.infer<typeof lexicalKey>) {
  return JSON.stringify([entry.lemma.normalize('NFC'), entry.partOfSpeech, entry.sense ?? null]);
}

export function indexAssignments(entries: Assignment[]) {
  const byKey = new Map<string, Assignment>();
  const byId = new Map<string, Assignment>();
  const reservedKeys = new Set<string>();
  for (const entry of entries) {
    if (finnishCurriculumRef(entry.wordId).wordId !== entry.wordId)
      throw new Error('Conflicting Finnish curriculum alias: ' + entry.wordId);
    if (byId.has(entry.wordId)) throw new Error('Duplicate Finnish ID: ' + entry.wordId);
    byId.set(entry.wordId, entry);
    byKey.set(keyOf(entry), entry);
    for (const key of [entry, ...(entry.previousKeys ?? [])].map(keyOf)) {
      if (reservedKeys.has(key)) throw new Error('Conflicting Finnish lexical key: ' + key);
      reservedKeys.add(key);
    }
  }
  return { byKey, byId };
}

// Reviewed spelling/POS corrections retain the ID and record its former key explicitly.
export function verifyPreviousMap(previous: IdentityMap, next: IdentityMap) {
  const { byId } = indexAssignments(next.entries);
  for (const before of previous.entries) {
    const after = byId.get(before.wordId);
    if (!after) throw new Error('Removed or reassigned Finnish ID: ' + before.wordId);
    const history = new Set([after, ...(after.previousKeys ?? [])].map(keyOf));
    for (const old of [before, ...(before.previousKeys ?? [])]) {
      if (!history.has(keyOf(old)))
        throw new Error('Unacknowledged identity change: ' + before.wordId);
    }
  }
}
