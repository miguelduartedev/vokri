import { parse } from 'csv-parse/sync';
import { z } from 'zod';
import {
  itemSchema,
  posSchema,
  text,
  tierSchema,
  type VocabularyItem,
} from '../../src/domain/vocabulary/schema.ts';
import type { LearningLanguage } from '../../src/domain/languages.ts';
import { keyOf, type Assignment } from './identities.ts';

const integer = z
  .string()
  .regex(/^(0|[1-9]\d*)$/)
  .transform(Number)
  .pipe(z.int().nonnegative());
const positive = integer.pipe(z.int().positive());
const common = {
  rank: positive,
  lemma: text,
  english: text,
  part_of_speech: posSchema,
  tier: tierSchema,
  topic: text,
  usefulness_score: integer.pipe(z.number().min(50).max(100)),
  spoken_forms: z.string(),
  example_en: text,
  notes: z.string(),
};
const finnish = z.strictObject({
  ...common,
  example_fi: text,
  original_frequency_rank: z.union([z.literal(''), positive]),
});
const swedish = z.strictObject({
  ...common,
  word_id: text,
  language_id: z.literal('sv'),
  display_form: text,
  example_sv: text,
  noun_gender: z.enum(['', 'en', 'ett']),
  definite_singular: z.string(),
  plural_indefinite: z.string(),
  plural_definite: z.string(),
  verb_present: z.string(),
  verb_past: z.string(),
  verb_supine: z.string(),
  adjective_neuter: z.string(),
  adjective_plural: z.string(),
  original_kelly_id: z.string().regex(/^(?:[1-9]\d*)?$/),
  original_kelly_frequency: z.string().regex(/^(?:\d+(?:,\d+)?)?$/),
  original_kelly_cefr: z.enum(['', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
  source_status: z.enum(['kelly_retained', 'curated_added']),
  qa_flags: z.string(),
});

export function parseCsv(input: Uint8Array | string, expectedHeaders: string[]) {
  const source =
    typeof input === 'string' ? input : new TextDecoder('utf-8', { fatal: true }).decode(input);
  let foundHeader = false;
  const records: Record<string, string>[] = parse(source, {
    bom: true,
    columns(header: string[]) {
      if (
        header.length !== expectedHeaders.length ||
        expectedHeaders.some((key) => !header.includes(key))
      )
        throw new Error('Unexpected CSV header: ' + header.join(', '));
      foundHeader = true;
      return header;
    },
  });
  if (!foundHeader) throw new Error('Missing CSV header');
  return records;
}

function commonFields(row: z.infer<typeof finnish> | z.infer<typeof swedish>, example: string) {
  return {
    lemma: row.lemma,
    english: row.english,
    partOfSpeech: row.part_of_speech,
    rank: row.rank,
    tier: row.tier,
    topic: row.topic,
    usefulnessScore: row.usefulness_score,
    example: { learning: example, english: row.example_en },
    spokenForms: row.spoken_forms || undefined,
    notes: row.notes || undefined,
  };
}
const unreviewed = {
  gloss: 'unreviewed',
  example: 'unreviewed',
  publicTeaching: 'pending',
} as const;

function adaptSwedish(row: z.infer<typeof swedish>) {
  const flags = row.qa_flags ? row.qa_flags.split(';').map((s) => s.trim()) : [];
  const synthetic = flags.includes('synthetic_kelly_frequency_do_not_rank');
  const retained = row.source_status === 'kelly_retained';
  const hasKelly = [row.original_kelly_id, row.original_kelly_frequency, row.original_kelly_cefr];
  if (
    hasKelly.some((value) => Boolean(value) !== retained) ||
    synthetic !== (row.original_kelly_frequency === '1000000,00')
  )
    throw new Error('Inconsistent Kelly provenance or synthetic-frequency flag for ' + row.word_id);

  const noun =
    row.noun_gender || row.definite_singular || row.plural_indefinite || row.plural_definite
      ? {
          gender: row.noun_gender || undefined,
          definiteSingular: row.definite_singular || undefined,
          indefinitePlural: row.plural_indefinite || undefined,
          definitePlural: row.plural_definite || undefined,
        }
      : undefined;
  const verb =
    row.verb_present || row.verb_past || row.verb_supine
      ? {
          present: row.verb_present || undefined,
          past: row.verb_past || undefined,
          supine: row.verb_supine || undefined,
        }
      : undefined;
  const adjective =
    row.adjective_neuter || row.adjective_plural
      ? { neuter: row.adjective_neuter || undefined, plural: row.adjective_plural || undefined }
      : undefined;

  return {
    ...commonFields(row, row.example_sv),
    languageId: row.language_id,
    wordId: row.word_id,
    displayForm: row.display_form,
    noun,
    verb,
    adjective,
    editorial: {
      ...unreviewed,
      morphology: noun || verb || adjective ? 'unreviewed' : 'not-supplied',
      flags: flags.length ? flags : undefined,
    },
    provenance: {
      dataset: 'swedish_2000_curated',
      sourceStatus: row.source_status,
      kelly: retained
        ? {
            id: row.original_kelly_id,
            frequency: row.original_kelly_frequency,
            frequencyKind: synthetic ? 'synthetic' : 'measured',
            cefr: row.original_kelly_cefr,
          }
        : undefined,
    },
  };
}

export function adaptSource(
  language: LearningLanguage,
  input: Uint8Array | string,
  assignments: Map<string, Assignment>,
) {
  const consumed = new Set<string>();
  const shape = language === 'fi' ? finnish.shape : swedish.shape;
  const items = parseCsv(input, Object.keys(shape)).map((raw, index): VocabularyItem => {
    try {
      if (language === 'sv') return itemSchema.parse(adaptSwedish(swedish.parse(raw)));
      const row = finnish.parse(raw);
      const key = keyOf({ lemma: row.lemma, partOfSpeech: row.part_of_speech });
      if (consumed.has(key)) throw new Error('Ambiguous Finnish source identity: ' + key);
      const entry = assignments.get(key);
      if (!entry) throw new Error('Unmapped Finnish source identity: ' + key);
      consumed.add(key);
      return itemSchema.parse({
        ...commonFields(row, row.example_fi),
        languageId: 'fi',
        wordId: entry.wordId,
        displayForm: row.lemma,
        editorial: { ...unreviewed, morphology: 'not-supplied' },
        provenance: {
          dataset: 'finnish_2000_curated',
          originalFrequencyRank: row.original_frequency_rank || undefined,
        },
      });
    } catch (error) {
      throw new Error(
        language +
          ' CSV record ' +
          (index + 2) +
          ' (' +
          raw.lemma +
          '): ' +
          (error as Error).message,
      );
    }
  });
  if (language === 'fi') {
    for (const key of assignments.keys())
      if (!consumed.has(key)) throw new Error('Stale Finnish identity mapping: ' + key);
  }
  return items;
}
