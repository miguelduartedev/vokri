import { z } from 'zod';
import { languageIds } from '../domain/languages';
import { directions } from '../domain/learning/model';
import { appearances } from '../preferences/store';

export const maxBackupBytes = 128 * 1024 * 1024;
export const signature = 'VOKRI-CARDS-BACKUP\n';
export const maxHeader = 8192;
export const hash = z.string().regex(/^[a-f0-9]{64}$/);
export const strictPreferences = z.strictObject({
  schemaVersion: z.literal(1),
  activeLearningLanguage: z.enum(languageIds).nullable(),
  appearance: z.enum(appearances),
  directions: z
    .strictObject({ fi: z.enum(directions).optional(), sv: z.enum(directions).optional() })
    .optional(),
});
export const headerSchema = z.strictObject({
  format: z.literal('vokri-cards-backup'),
  version: z.literal(1),
  createdAt: z.iso.datetime(),
  databaseVersion: z.literal(4),
  preferenceVersion: z.literal(1),
  preferences: strictPreferences.nullable(),
  catalogue: z.strictObject({ fi: hash, sv: hash }),
  databaseBytes: z.number().int().positive().max(maxBackupBytes),
  databaseSha256: hash,
});
export type BackupHeader = z.infer<typeof headerSchema>;
export class BackupError extends Error {}
export function requireSpace(available: number, required: number) {
  if (available < required + 4 * 1024 * 1024)
    throw new BackupError('Free up device storage and try again.');
}
