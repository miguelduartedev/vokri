import AsyncStorage from '@react-native-async-storage/async-storage';
import { Directory, File, Paths } from 'expo-file-system';
import { openDatabaseAsync, backupDatabaseAsync, type SQLiteDatabase } from 'expo-sqlite';
import manifest from '../content/vocabulary/generated/manifest.json';
import { preferencesKey, type PreferenceStore } from '../preferences/store';
import {
  learningConnection,
  closeLearningConnection,
  learnerDatabaseName,
} from '../learning/native';
import { migrateLearning } from '../learning/database';
import { BackupError, maxBackupBytes, requireSpace, strictPreferences } from './format';
import { packageSnapshot, pickBackup, workDirectory } from './files';
import { schemaObjects, inspectDatabase } from './validation';
import { journalSchema, recover, replaceInstallation, type RecoveryIO } from './recovery';

const journalKey = 'vokri:full-restore:v1';
const catalogue = {
  fi: manifest.languages.find((l) => l.languageId === 'fi')!.contentSha256,
  sv: manifest.languages.find((l) => l.languageId === 'sv')!.contentSha256,
};
const recoveryDir = () => new Directory(Paths.document, 'vokri-restore-recovery');
const previous = () => new File(recoveryDir(), 'previous.db');
let busy = false;
async function exclusive<T>(operation: () => Promise<T>) {
  if (busy) throw new BackupError('Another backup operation is in progress.');
  busy = true;
  try {
    return await operation();
  } finally {
    busy = false;
  }
}
async function using<T>(
  connection: Promise<SQLiteDatabase>,
  operation: (db: SQLiteDatabase) => Promise<T> | T,
) {
  const db = await connection;
  try {
    return await operation(db);
  } finally {
    await db.closeAsync();
  }
}
function openFile(file: File, create = false) {
  if (!create && (!file.exists || file.size === 0))
    throw new BackupError('The required database file is unavailable.');
  return openDatabaseAsync(
    file.name,
    { useNewConnection: true },
    file.uri.slice(0, file.uri.lastIndexOf('/')),
  );
}
let reference: ReturnType<typeof schemaObjects> | undefined;
async function inspect(db: SQLiteDatabase) {
  reference ??= await using(openDatabaseAsync(':memory:', { useNewConnection: true }), (fresh) => {
    migrateLearning(fresh);
    return schemaObjects(fresh);
  });
  return inspectDatabase(db, reference);
}
const inspectFile = (file: File) => using(openFile(file), inspect);
function dbSize(db: SQLiteDatabase) {
  return db.getFirstSync<{ size: number }>(
    'SELECT page_count * page_size size FROM pragma_page_count,pragma_page_size',
  )!.size;
}
// Compare every value and rowid in SQLite, without sending history or note bodies through JS.
// Both connections remain open and the application write gate stays closed throughout the copy.
async function copyDatabase(sourceDatabase: SQLiteDatabase, destDatabase: SQLiteDatabase) {
  destDatabase.execSync('PRAGMA synchronous=FULL');
  await backupDatabaseAsync({ sourceDatabase, destDatabase });
  const summary = await inspect(destDatabase);
  const mainFile = (db: SQLiteDatabase) =>
    db.getFirstSync<{ file: string }>("SELECT file FROM pragma_database_list WHERE name='main'")!
      .file;
  await using(openDatabaseAsync(':memory:', { useNewConnection: true }), (verifier) => {
    verifier.execSync('PRAGMA trusted_schema=OFF; PRAGMA query_only=ON');
    verifier.runSync('ATTACH DATABASE ? AS original', mainFile(sourceDatabase));
    verifier.runSync('ATTACH DATABASE ? AS copied', mainFile(destDatabase));
    for (const { name } of reference!.filter((object) => object.type === 'table')) {
      const columns = verifier.getAllSync<{ name: string }>(`PRAGMA copied.table_info(${name})`);
      const equal = columns.map((column) => `s.${column.name} IS d.${column.name}`).join(' AND ');
      const difference = verifier.getFirstSync(`SELECT 1 WHERE
        (SELECT count(*) FROM original.${name}) != (SELECT count(*) FROM copied.${name})
        OR EXISTS (SELECT 1 FROM original.${name} s LEFT JOIN copied.${name} d ON s.rowid=d.rowid
          WHERE d.rowid IS NULL OR NOT (${equal}))`);
      if (difference) throw new BackupError('The database copy did not match the original.');
    }
  });
  return summary;
}
async function snapshot(source: SQLiteDatabase, file: File) {
  return using(openFile(file, true), (destination) => copyDatabase(source, destination));
}
async function checkDigest(file: File, digest: string) {
  if (!file.exists || (await file.digest('SHA-256')) !== digest)
    throw new BackupError('The staged database checksum does not match.');
}
async function install(file: File, digest: string) {
  await checkDigest(file, digest);
  await using(openFile(file), async (sourceDatabase) => {
    await inspect(sourceDatabase);
    await closeLearningConnection();
    await using(
      openDatabaseAsync(learnerDatabaseName, { useNewConnection: true }),
      (destDatabase) => copyDatabase(sourceDatabase, destDatabase),
    );
  });
}
const io: RecoveryIO = {
  async readJournal() {
    const [[, raw]] = await AsyncStorage.multiGet([journalKey]);
    return raw === null ? null : journalSchema.parse(JSON.parse(raw));
  },
  writeJournal: (j) => AsyncStorage.setItem(journalKey, JSON.stringify(j)),
  readPreferences: () => AsyncStorage.getItem(preferencesKey),
  writePreferences: (raw) =>
    raw === null
      ? AsyncStorage.removeItem(preferencesKey)
      : AsyncStorage.setItem(preferencesKey, raw),
  async preserve() {
    const dir = recoveryDir();
    // No prepared/finalized journal exists. An orphan here predates any live replacement.
    if (dir.exists) dir.delete();
    dir.create({ intermediates: true });
    await snapshot((await learningConnection()).db, previous());
    return previous().digest('SHA-256');
  },
  replacePrevious: (digest) => install(previous(), digest),
  async verifyLive() {
    // Never run migrations on this path. A missing or empty live DB must fail validation.
    await using(openDatabaseAsync(learnerDatabaseName, { useNewConnection: true }), inspect);
  },
  async cleanup() {
    const dir = recoveryDir();
    if (dir.exists) dir.delete();
    await AsyncStorage.removeItem(journalKey);
  },
};
export const recoverStartup = (retry = false) =>
  exclusive(async () => {
    if (retry) await closeLearningConnection();
    const result = await recover(io);
    // A crash before the prepared marker can leave an incomplete private snapshot.
    if (result === null) discard(recoveryDir());
    return result;
  });
function discard(dir: Directory) {
  try {
    if (dir.exists) dir.delete();
  } catch {
    /* Disposable cache cleanup is retried later. */
  }
}
export async function createBackup(prefs: PreferenceStore) {
  return exclusive(async () => {
    const dir = workDirectory();
    try {
      const { db, store } = await learningConnection();
      const resume = store.suspendWrites();
      const resumePrefs = await prefs.suspendWrites();
      const file = new File(dir, 'snapshot.db');
      let summary, preferences;
      const createdAt = new Date().toISOString();
      try {
        const size = dbSize(db);
        if (size >= maxBackupBytes) throw new BackupError('Full backups support up to 128 MiB.');
        requireSpace(Paths.availableDiskSpace, size * 2);
        const raw = await io.readPreferences();
        preferences = raw === null ? null : strictPreferences.parse(JSON.parse(raw));
        summary = await snapshot(db, file);
      } finally {
        resumePrefs();
        resume();
      }
      const result = await packageSnapshot(file, {
        format: 'vokri-cards-backup',
        version: 1,
        createdAt,
        databaseVersion: 4,
        preferenceVersion: 1,
        catalogue,
        preferences,
      });
      file.delete();
      return { ...result, summary };
    } catch (error) {
      discard(dir);
      throw error;
    }
  });
}
export async function chooseBackup() {
  return exclusive(async () => {
    const dir = workDirectory();
    try {
      const backup = await pickBackup(dir);
      if (!backup) {
        discard(dir);
        return null;
      }
      const summary = await inspectFile(backup.db);
      return {
        ...backup,
        summary,
        catalogueChanged:
          backup.header.catalogue.fi !== catalogue.fi ||
          backup.header.catalogue.sv !== catalogue.sv,
      };
    } catch (error) {
      discard(dir);
      throw error;
    }
  });
}
export type Candidate = NonNullable<Awaited<ReturnType<typeof chooseBackup>>>;
export function discardCandidate(candidate: Candidate) {
  discard(candidate.db.parentDirectory);
}
export class RecoveryBlocked extends Error {}
export async function restoreBackup(candidate: Candidate, prefs: PreferenceStore) {
  return exclusive(async () => {
    // The root gate unmounts both providers. Retire even stale references before replacement.
    const { db, store } = await learningConnection();
    store.suspendWrites();
    await prefs.suspendWrites();
    try {
      if (await io.readJournal()) {
        throw new RecoveryBlocked(
          'Recovery cleanup is pending. Retry recovery before restoring another backup.',
        );
      }
      await checkDigest(candidate.db, candidate.header.databaseSha256);
      const original = dbSize(db),
        replacement = candidate.db.size;
      requireSpace(
        Paths.availableDiskSpace,
        original + Math.max(original, replacement) + replacement,
      );
      await replaceInstallation(
        io,
        () => install(candidate.db, candidate.header.databaseSha256),
        candidate.header.preferences === null ? null : JSON.stringify(candidate.header.preferences),
      );
    } catch (error) {
      // A write can succeed before its promise rejects. The durable journal decides the outcome.
      if (error instanceof RecoveryBlocked) throw error;
      let decision;
      try {
        decision = await recover(io);
      } catch {
        throw new RecoveryBlocked(
          'Recovery could not finish. Your recovery files are retained. Free device storage if needed and retry.',
        );
      }
      if (decision === null) discard(recoveryDir());
      if (decision !== 'committed') throw error;
    } finally {
      try {
        await closeLearningConnection();
      } catch {
        throw new RecoveryBlocked(
          'The learner database could not close. Retry recovery before continuing.',
        );
      } finally {
        discardCandidate(candidate);
      }
    }
  });
}
