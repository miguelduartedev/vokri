import { z } from 'zod';
import { hash } from './format';

export const journalSchema = z.strictObject({
  version: z.literal(1),
  phase: z.enum(['prepared', 'committed', 'rolledBack']),
  previousDigest: hash,
  previousPreferences: z.string().nullable(),
});
type Journal = z.infer<typeof journalSchema>;

export interface RecoveryIO {
  readJournal(): Promise<Journal | null>;
  writeJournal(journal: Journal): Promise<void>;
  cleanup(): Promise<void>;
  preserve(): Promise<string>;
  replacePrevious(digest: string): Promise<void>;
  readPreferences(): Promise<string | null>;
  writePreferences(value: string | null): Promise<void>;
  verifyLive(): Promise<void>;
}
async function preferences(io: RecoveryIO, value: string | null) {
  await io.writePreferences(value);
  if ((await io.readPreferences()) !== value) throw new Error('Preference verification failed.');
}
async function finalize(io: RecoveryIO) {
  try {
    await io.cleanup();
  } catch {
    /* The finalized journal makes cleanup independently retryable. */
  }
}
// Run before opening either normal provider. A failed rollback leaves the prepared journal intact.
export async function recover(io: RecoveryIO) {
  const journal = await io.readJournal();
  if (!journal) return null;
  if (journal.phase === 'prepared') {
    await io.replacePrevious(journal.previousDigest);
    await preferences(io, journal.previousPreferences);
    await io.verifyLive();
    await io.writeJournal({ ...journal, phase: 'rolledBack' });
    await finalize(io);
    return 'rolledBack' as const;
  }
  await io.verifyLive();
  await finalize(io);
  return journal.phase;
}
// Call with application writes suspended. Only the durable committed marker permits roll-forward.
export async function replaceInstallation(
  io: RecoveryIO,
  install: () => Promise<void>,
  incoming: string | null,
) {
  const journal: Journal = {
    version: 1,
    phase: 'prepared',
    previousPreferences: await io.readPreferences(),
    previousDigest: await io.preserve(),
  };
  await io.writeJournal(journal);
  await install();
  await preferences(io, incoming);
  await io.verifyLive();
  await io.writeJournal({ ...journal, phase: 'committed' });
  await finalize(io);
}
