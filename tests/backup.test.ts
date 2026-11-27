import {
  mkdirSync,
  mkdtempSync,
  renameSync,
  rmSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import * as Picker from 'expo-document-picker';
import { blankDraft } from '@/domain/learning/personal';
import {
  Paths,
  backupDatabaseAsync,
  openDatabaseAsync as platformOpen,
  setDatabaseDirectory,
} from './backup-platform';
import { preferencesKey, PreferenceStore } from '@/preferences/store';
import {
  closeLearningConnection,
  learningConnection,
  learnerDatabaseName,
} from '@/learning/native';
import {
  chooseBackup,
  createBackup,
  discardCandidate,
  recoverStartup,
  restoreBackup,
} from '@/backup/native';
import { maxBackupBytes, signature } from '@/backup/format';
import { decodeVocabulary } from '@/cards/portability-files';
import { bilingualInventory } from './backup-inventory';
import { inspectDatabase, schemaObjects } from '@/backup/validation';
import { migrateLearning } from '@/learning/database';
import { testDatabase } from './learning-db';

jest.mock('expo-sqlite', () => require('./backup-platform'));
jest.mock('expo-file-system', () => require('./backup-platform'));
jest.mock('expo-document-picker', () => ({ getDocumentAsync: jest.fn() }));
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
const incoming = JSON.stringify({
  schemaVersion: 1,
  activeLearningLanguage: 'sv',
  appearance: 'dark',
  directions: { fi: 'mixed', sv: 'production' },
});
const storedDefault =
  ' { "appearance":"system", "activeLearningLanguage":null, "schemaVersion":1 } ';
const journal = 'vokri:full-restore:v1';
let dir: string;
const prefs = () => new PreferenceStore(AsyncStorage);
beforeEach(async () => {
  jest.replaceProperty(Platform, 'OS', 'android');
  dir = mkdtempSync(join(tmpdir(), 'vokri-restore-'));
  setDatabaseDirectory(dir);
  Paths.document = join(dir, 'documents');
  Paths.cache = join(dir, 'cache');
  Paths.availableDiskSpace = 1e9;
  await AsyncStorage.clear();
});
afterEach(async () => {
  await closeLearningConnection();
  jest.restoreAllMocks();
  rmSync(dir, { recursive: true, force: true });
});
function pick(uri: string, reported?: number) {
  jest.mocked(Picker.getDocumentAsync).mockResolvedValueOnce({
    canceled: false,
    assets: [{ uri, name: 'data.vokribackup', size: reported, lastModified: 0 }],
  });
  return chooseBackup();
}
async function saved() {
  const { db, store } = await learningConnection();
  db.execSync('PRAGMA journal_mode=WAL; PRAGMA wal_autocheckpoint=0');
  bilingualInventory(store);
  await AsyncStorage.setItem(preferencesKey, incoming);
  const output = await createBackup(prefs());
  return { ...output, candidate: (await pick(output.file.uri))! };
}
function rows(path: string) {
  const sql = new DatabaseSync(path, { readOnly: true });
  try {
    return Object.fromEntries(
      [
        'enrolments',
        'ratings',
        'sessions',
        'session_cards',
        'review_state',
        'collections',
        'collection_members',
        'personal_entries',
      ].map((t) => [t, sql.prepare('SELECT rowid,* FROM ' + t + ' ORDER BY rowid').all()]),
    );
  } finally {
    sql.close();
  }
}
async function freshTarget(raw: string | null, seed = true) {
  await closeLearningConnection();
  rmSync(join(dir, learnerDatabaseName));
  if (seed) (await learningConnection()).store.enrol('fi', ['vocab.hei']);
  if (raw === null) await AsyncStorage.removeItem(preferencesKey);
  else await AsyncStorage.setItem(preferencesKey, raw);
}
it('captures committed bilingual WAL state, preserves a revealed checkpoint, undismissed summary, original revisions and due times across two replacements', async () => {
  const output = await saved(),
    path = join(dir, learnerDatabaseName),
    source = rows(path);
  expect(output.summary.languages).toEqual([
    expect.objectContaining({ language: 'fi', archived: 1, collections: 2, open: 1 }),
    expect.objectContaining({ language: 'sv', archived: 1, open: 1 }),
  ]);
  expect(rows(fileURLToPath(output.candidate.db.uri))).toEqual(source);
  expect(source.session_cards.some((c) => c.revealedAt && c.targetSnapshot)).toBe(true);
  expect(source.personal_entries.some((p) => p.revision === 2)).toBe(true);
  expect(source.review_state.some((s) => s.lastRating === null)).toBe(true);
  expect(() => decodeVocabulary(readFileSync(fileURLToPath(output.file.uri)))).toThrow();
  await freshTarget(null, false);
  for (let i = 0; i < 2; i++) {
    const stale = (await learningConnection()).store;
    await restoreBackup(i === 0 ? output.candidate : (await pick(output.file.uri))!, prefs());
    expect(() => stale.enrol('fi', ['vocab.hei'])).toThrow();
    expect(rows(path)).toEqual(source);
    expect(JSON.parse((await AsyncStorage.getItem(preferencesKey))!)).toEqual(JSON.parse(incoming));
    const { store } = await learningConnection();
    expect(store.current('fi')?.cursor).toBe(1);
    expect(store.current('sv')?.phase).toBe('completed');
    expect(
      store.cards(store.current('fi')!.id).find((c) => c.position === 1)?.revealedAt,
    ).toBeTruthy();
  }
});
it.each([null, storedDefault])(
  'rolls back a late preference failure and restores the exact original record (%p)',
  async (raw) => {
    const { candidate } = await saved();
    await freshTarget(raw);
    const before = rows(join(dir, learnerDatabaseName)),
      write = jest.mocked(AsyncStorage.setItem).getMockImplementation()!;
    let once = true;
    jest.spyOn(AsyncStorage, 'setItem').mockImplementation(async (k, v) => {
      if (k === preferencesKey && once) {
        once = false;
        throw Error('storage full');
      }
      return write(k, v);
    });
    await expect(restoreBackup(candidate, prefs())).rejects.toThrow();
    expect(rows(join(dir, learnerDatabaseName))).toEqual(before);
    expect(await AsyncStorage.getItem(preferencesKey)).toBe(raw);
    expect(await recoverStartup()).toBeNull();
    jest.mocked(AsyncStorage.setItem).mockImplementation(write);
  },
);
it('fails safely on space preflight and ENOSPC in a destination transaction', async () => {
  const { candidate, file } = await saved();
  await freshTarget(storedDefault);
  const path = join(dir, learnerDatabaseName),
    before = rows(path);
  Paths.availableDiskSpace = 512;
  await expect(restoreBackup(candidate, prefs())).rejects.toThrow(/storage/);
  expect(rows(path)).toEqual(before);
  expect(await AsyncStorage.getItem(journal)).toBeNull();
  Paths.availableDiskSpace = 1e9;
  const retry = (await pick(file.uri))!;
  const real = backupDatabaseAsync.getMockImplementation()!;
  let fail = true;
  backupDatabaseAsync.mockImplementation(async (args) => {
    if (args.destDatabase.path === path && fail) {
      fail = false;
      throw Error('SQLITE_FULL');
    }
    await real(args);
  });
  try {
    await expect(restoreBackup(retry, prefs())).rejects.toThrow('SQLITE_FULL');
  } finally {
    backupDatabaseAsync.mockImplementation(real);
  }
  expect(rows(path)).toEqual(before);
  expect(await AsyncStorage.getItem(preferencesKey)).toBe(storedDefault);
});
it('refuses a changed staged file and a corrupt recovery snapshot; startup never initializes an empty replacement', async () => {
  const { candidate } = await saved();
  await freshTarget(null);
  const path = join(dir, learnerDatabaseName),
    before = rows(path);
  writeFileSync(fileURLToPath(candidate.db.uri), 'truncated');
  await expect(restoreBackup(candidate, prefs())).rejects.toThrow(/checksum/);
  expect(rows(path)).toEqual(before);
  await closeLearningConnection();
  rmSync(path);
  await AsyncStorage.setItem(
    journal,
    JSON.stringify({
      version: 1,
      phase: 'prepared',
      previousDigest: '0'.repeat(64),
      previousPreferences: null,
    }),
  );
  await expect(recoverStartup()).rejects.toThrow();
  expect(existsSync(path)).toBe(false);
  expect(await AsyncStorage.getItem(journal)).toBeTruthy();
});
it.each(['committed', 'rolledBack'])(
  'blocks startup and retry with a missing live database and a %s journal',
  async (phase) => {
    const live = join(dir, learnerDatabaseName);
    const recovery = join(Paths.document, 'vokri-restore-recovery');
    const previous = join(recovery, 'previous.db');
    (await learningConnection()).store.enrol('fi', ['vocab.hei']);
    await closeLearningConnection();
    mkdirSync(recovery, { recursive: true });
    renameSync(live, previous);
    const bytes = readFileSync(previous);
    // A same-named file in Documents is not the installation's live SQLite database.
    writeFileSync(join(Paths.document, learnerDatabaseName), bytes);
    const marker = JSON.stringify({
      version: 1,
      phase,
      previousDigest: createHash('sha256').update(bytes).digest('hex'),
      previousPreferences: storedDefault,
    });
    await AsyncStorage.setItem(journal, marker);
    platformOpen.mockClear();
    for (const retry of [false, true]) {
      await expect(recoverStartup(retry)).rejects.toThrow();
      expect(existsSync(live)).toBe(false);
      expect(platformOpen).not.toHaveBeenCalled();
      expect(await AsyncStorage.getItem(journal)).toBe(marker);
      expect(readFileSync(previous).equals(bytes)).toBe(true);
    }
  },
);
it('rejects interchange, oversize, tampering, truncation, trailing data and incompatible metadata before preview', async () => {
  const { file, candidate } = await saved();
  discardCandidate(candidate);
  const bytes = readFileSync(fileURLToPath(file.uri)),
    fixture = join(dir, 'bad.vokribackup');
  await expect(pick(file.uri, maxBackupBytes + 1)).rejects.toThrow(/128 MiB/);
  const offset = signature.length + 72,
    len = Number(bytes.subarray(signature.length, signature.length + 8).toString()),
    header = JSON.parse(bytes.subarray(offset, offset + len).toString());
  function reframe(data: unknown) {
    const json = Buffer.from(JSON.stringify(data));
    return Buffer.concat([
      Buffer.from(
        signature +
          String(json.length).padStart(8, '0') +
          createHash('sha256').update(json).digest('hex'),
      ),
      json,
      bytes.subarray(offset + len),
    ]);
  }
  const altered = Buffer.from(bytes);
  altered[altered.length - 1] ^= 1;
  for (const bad of [
    Buffer.from('{"format":"vokri-cards-my-words"}'),
    bytes.subarray(0, -5),
    altered,
    Buffer.concat([bytes, Buffer.from('extra')]),
    reframe({ ...header, version: 2 }),
    reframe({ ...header, databaseVersion: 5 }),
    reframe({ ...header, preferences: { ...header.preferences, appearance: 'invalid' } }),
  ]) {
    writeFileSync(fixture, bad);
    await expect(pick(fixture)).rejects.toThrow();
  }
  expect(await AsyncStorage.getItem(journal)).toBeNull();
});
it('validates the complete known schema before views, referential integrity and study checkpoint invariants', () => {
  const trusted = testDatabase();
  migrateLearning(trusted);
  const schema = schemaObjects(trusted);
  trusted.closeSync();
  for (const sql of [
    'DROP VIEW current_learning_evidence',
    'CREATE TRIGGER extra AFTER INSERT ON ratings BEGIN SELECT 1; END',
    "PRAGMA foreign_keys=OFF; INSERT INTO collection_members VALUES('sv','absent','vocab.hei')",
    "INSERT INTO enrolments VALUES('fi','personal:missing','2026-11-26')",
    "INSERT INTO sessions(id,languageId,originKind,choice,phase,createdAt) VALUES('s','fi','today','mixed','first','2026-11-26')",
  ]) {
    const db = testDatabase();
    try {
      migrateLearning(db);
      db.execSync(sql);
      expect(() => inspectDatabase(db, schema)).toThrow();
    } finally {
      db.closeSync();
    }
  }
});

it('retries interrupted rollback from the durable prepared marker before permitting learning', async () => {
  const { candidate } = await saved();
  await freshTarget(storedDefault);
  const path = join(dir, learnerDatabaseName),
    before = rows(path);
  const real = backupDatabaseAsync.getMockImplementation()!;
  let installed = false;
  backupDatabaseAsync.mockImplementation(async (args) => {
    if (args.destDatabase.path !== path) return real(args);
    if (!installed) {
      await real(args);
      installed = true;
    }
    throw Error('Device storage unavailable');
  });
  try {
    await expect(restoreBackup(candidate, prefs())).rejects.toThrow(/Recovery could not finish/);
    expect(JSON.parse((await AsyncStorage.getItem(journal))!).phase).toBe('prepared');
    expect(rows(path)).not.toEqual(before);
    await expect(recoverStartup()).rejects.toThrow();
    expect(existsSync(join(Paths.document, 'vokri-restore-recovery', 'previous.db'))).toBe(true);
  } finally {
    backupDatabaseAsync.mockImplementation(real);
  }
  expect(await recoverStartup()).toBe('rolledBack');
  expect(await recoverStartup()).toBeNull();
  expect(rows(path)).toEqual(before);
  expect(await AsyncStorage.getItem(preferencesKey)).toBe(storedDefault);
});
it('keeps the restored installation and later writes when committed cleanup fails repeatedly', async () => {
  const { candidate } = await saved(),
    expected = rows(join(dir, learnerDatabaseName));
  await freshTarget(null);
  const remove = jest.mocked(AsyncStorage.removeItem),
    real = remove.getMockImplementation()!;
  remove.mockImplementation(async (key) => {
    if (key === journal) throw Error('cleanup failed');
    return real(key);
  });
  try {
    await restoreBackup(candidate, prefs());
    expect(JSON.parse((await AsyncStorage.getItem(journal))!).phase).toBe('committed');
    expect(rows(join(dir, learnerDatabaseName))).toEqual(expected);
    expect(await recoverStartup()).toBe('committed');
    (await learningConnection()).store.saveCollection('sv', 'After restore', '');
    await closeLearningConnection();
  } finally {
    remove.mockImplementation(real);
  }
  expect(await recoverStartup()).toBe('committed');
  expect(await recoverStartup()).toBeNull();
  expect(rows(join(dir, learnerDatabaseName)).collections).toHaveLength(
    expected.collections.length + 1,
  );
  expect(await AsyncStorage.getItem(preferencesKey)).toBe(incoming);
});
it('rolls back the database and preferences if reopening the installed snapshot fails', async () => {
  const { candidate } = await saved();
  await freshTarget(storedDefault);
  const path = join(dir, learnerDatabaseName),
    before = rows(path);
  const open = platformOpen.getMockImplementation()!;
  let armed = false;
  const write = jest.mocked(AsyncStorage.setItem),
    original = write.getMockImplementation()!;
  write.mockImplementation(async (key, value) => {
    await original(key, value);
    if (key === preferencesKey && value === incoming) armed = true;
  });
  platformOpen.mockImplementation(async (...args) => {
    if (armed && args[0] === learnerDatabaseName) {
      armed = false;
      throw Error('Reopen unavailable');
    }
    return open(...args);
  });
  try {
    await expect(restoreBackup(candidate, prefs())).rejects.toThrow('Reopen unavailable');
  } finally {
    platformOpen.mockImplementation(open);
    write.mockImplementation(original);
  }
  expect(rows(path)).toEqual(before);
  expect(await AsyncStorage.getItem(preferencesKey)).toBe(storedDefault);
});
it('waits for queued preferences and streams a multi-chunk snapshot without mutating its source', async () => {
  const { store } = await learningConnection();
  const id = store.newPersonalId();
  store.saveEntry('fi', id, {
    ...blankDraft,
    displayForm: 'muistikirja',
    english: 'notebook',
    note: 'ä'.repeat(400000),
  });
  const settings = prefs();
  await settings.hydrate();
  const pending = settings.setAppearance('dark');
  const before = rows(join(dir, learnerDatabaseName));
  const output = await createBackup(settings);
  await pending;
  expect(output.header.preferences?.appearance).toBe('dark');
  expect(output.file.size).toBeGreaterThan(3 * 256 * 1024);
  const candidate = (await pick(output.file.uri))!;
  expect(rows(fileURLToPath(candidate.db.uri))).toEqual(before);
  expect(rows(join(dir, learnerDatabaseName))).toEqual(before);
  discardCandidate(candidate);
});

it('honours a durable commit even when its acknowledgement is lost', async () => {
  const { candidate } = await saved();
  const expected = rows(join(dir, learnerDatabaseName));
  await freshTarget(storedDefault);
  const write = jest.mocked(AsyncStorage.setItem);
  const original = write.getMockImplementation()!;
  write.mockImplementation(async (key, value) => {
    await original(key, value);
    if (key === journal && JSON.parse(value).phase === 'committed')
      throw Error('Lost acknowledgement');
  });
  try {
    await restoreBackup(candidate, prefs());
  } finally {
    write.mockImplementation(original);
  }
  expect(rows(join(dir, learnerDatabaseName))).toEqual(expected);
  expect(await AsyncStorage.getItem(preferencesKey)).toBe(incoming);
  expect(await recoverStartup()).toBeNull();
});

it('detects a valid but incomplete copy before committing a replacement', async () => {
  const { candidate } = await saved();
  await freshTarget(storedDefault);
  const before = rows(join(dir, learnerDatabaseName));
  const real = backupDatabaseAsync.getMockImplementation()!;
  let change = true;
  backupDatabaseAsync.mockImplementation(async (args) => {
    await real(args);
    if (change && args.destDatabase.path === join(dir, learnerDatabaseName)) {
      change = false;
      args.destDatabase.raw.exec("UPDATE personal_entries SET note='changed after copying'");
    }
  });
  try {
    await expect(restoreBackup(candidate, prefs())).rejects.toThrow(/did not match/);
  } finally {
    backupDatabaseAsync.mockImplementation(real);
  }
  expect(rows(join(dir, learnerDatabaseName))).toEqual(before);
  expect(await AsyncStorage.getItem(preferencesKey)).toBe(storedDefault);
});

it('leaves the live installation untouched when its recovery snapshot cannot be written', async () => {
  const { candidate } = await saved();
  await freshTarget(storedDefault);
  const path = join(dir, learnerDatabaseName),
    before = rows(path);
  backupDatabaseAsync.mockRejectedValueOnce(Error('SQLITE_FULL creating recovery snapshot'));
  await expect(restoreBackup(candidate, prefs())).rejects.toThrow(/SQLITE_FULL/);
  expect(rows(path)).toEqual(before);
  expect(await AsyncStorage.getItem(preferencesKey)).toBe(storedDefault);
  expect(await AsyncStorage.getItem(journal)).toBeNull();
  expect(existsSync(join(Paths.document, 'vokri-restore-recovery'))).toBe(false);
});
