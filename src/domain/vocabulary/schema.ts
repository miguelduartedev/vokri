import { z } from 'zod';
import { languageIds, type VocabularyRef } from '../languages.ts';

export const tiers = ['Core', 'Everyday', 'Independent', 'Extended'] as const;
export const tierSchema = z.enum(tiers);
export type VocabularyTier = z.infer<typeof tierSchema>;
export const text = z.string().refine((value) => value.trim().length > 0, 'Expected nonblank text');
export const posSchema = z.enum([
  'noun',
  'verb',
  'adjective',
  'adverb',
  'pronoun',
  'numeral',
  'particle',
  'preposition',
  'postposition',
  'conjunction',
  'interjection',
  'determiner',
  'participle',
  'other',
]);

export const vocabularyRefSchema = z.object({
  languageId: z.enum(languageIds),
  wordId: text,
}) satisfies z.ZodType<VocabularyRef>;

const common = {
  wordId: text,
  lemma: text,
  displayForm: text,
  english: text,
  partOfSpeech: posSchema,
  rank: z.int().positive(),
  tier: tierSchema,
  topic: text,
  usefulnessScore: z.int().min(50).max(100),
  example: z.strictObject({ learning: text, english: text }).optional(),
  spokenForms: text.optional(),
  notes: text.optional(),
  editorial: z.strictObject({
    gloss: z.enum(['unreviewed', 'reviewed']),
    example: z.enum(['not-supplied', 'unreviewed', 'reviewed']),
    morphology: z.enum(['not-supplied', 'unreviewed', 'reviewed']),
    publicTeaching: z.enum(['pending', 'approved']),
    flags: z.array(text).optional(),
  }),
};

const finnish = z.strictObject({
  ...common,
  languageId: z.literal('fi'),
  provenance: z.strictObject({
    dataset: z.literal('finnish_2000_curated'),
    originalFrequencyRank: z.int().positive().optional(),
  }),
});

const swedish = z.strictObject({
  ...common,
  languageId: z.literal('sv'),
  noun: z
    .strictObject({
      gender: z.enum(['en', 'ett']).optional(),
      definiteSingular: text.optional(),
      indefinitePlural: text.optional(),
      definitePlural: text.optional(),
    })
    .optional(),
  verb: z
    .strictObject({ present: text.optional(), past: text.optional(), supine: text.optional() })
    .optional(),
  adjective: z.strictObject({ neuter: text.optional(), plural: text.optional() }).optional(),
  provenance: z.strictObject({
    dataset: z.literal('swedish_2000_curated'),
    sourceStatus: z.enum(['kelly_retained', 'curated_added']),
    kelly: z
      .strictObject({
        id: text,
        frequency: text,
        frequencyKind: z.enum(['measured', 'synthetic']),
        cefr: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
      })
      .optional(),
  }),
});

export const itemSchema = z
  .discriminatedUnion('languageId', [finnish, swedish])
  .superRefine((item, ctx) => {
    if (item.languageId !== 'sv') return;
    for (const pos of ['noun', 'verb', 'adjective'] as const) {
      if (item[pos] && pos !== item.partOfSpeech) {
        ctx.addIssue({
          code: 'custom',
          path: [pos],
          message: 'Morphology conflicts with part of speech',
        });
      }
    }
  });

type DeepReadonly<T> = T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T;
export type VocabularyItem = DeepReadonly<z.infer<typeof itemSchema>>;
