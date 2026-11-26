import * as Picker from 'expo-document-picker';
import { Directory, File, FileMode, Paths, type FileHandle } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Platform } from 'react-native';
import {
  BackupError,
  headerSchema,
  maxBackupBytes,
  maxHeader,
  requireSpace,
  signature,
  type BackupHeader,
} from './format';

const chunkSize = 256 * 1024;
const encoder = () => new TextEncoder();
export function workDirectory() {
  const root = new Directory(Paths.cache, 'vokri-full-backups');
  root.create({ intermediates: true, idempotent: true });
  for (const item of root.list())
    if (item instanceof Directory && Number(item.name.split('-')[0]) < Date.now() - 86400000) {
      try {
        item.delete();
      } catch {
        /* Retry old share cleanup later. */
      }
    }
  const dir = new Directory(root, Date.now() + '-' + Math.random().toString(36).slice(2));
  dir.create();
  return dir;
}
function discard(file: File | Directory) {
  try {
    file.delete();
  } catch {
    /* Only disposable staging data. */
  }
}
async function copyBytes(source: FileHandle, dest: FileHandle, length: number) {
  let remaining = length;
  while (remaining > 0) {
    const bytes = await source.readBytes(Math.min(chunkSize, remaining));
    if (!bytes.length) throw new BackupError('The backup file is incomplete.');
    await dest.writeBytes(bytes);
    remaining -= bytes.length;
  }
}
async function writeBody(source: File, destination: File, prefix?: Uint8Array) {
  const from = source.open(FileMode.ReadOnly);
  try {
    const to = destination.open(FileMode.WriteOnly);
    try {
      if (prefix) await to.writeBytes(prefix);
      await copyBytes(from, to, source.size);
    } finally {
      to.close();
    }
  } finally {
    from.close();
  }
}
async function headerDigest(dir: Directory, bytes: Uint8Array) {
  const temp = new File(dir, 'header.tmp');
  await temp.write(bytes);
  try {
    return await temp.digest('SHA-256');
  } finally {
    discard(temp);
  }
}
export async function packageSnapshot(
  db: File,
  metadata: Omit<BackupHeader, 'databaseBytes' | 'databaseSha256'>,
) {
  const dir = db.parentDirectory;
  const header = headerSchema.parse({
    ...metadata,
    databaseBytes: db.size,
    databaseSha256: await db.digest('SHA-256'),
  });
  const json = encoder().encode(JSON.stringify(header));
  if (json.length > maxHeader) throw new BackupError('The backup header is too large.');
  const start = encoder().encode(
    signature + String(json.length).padStart(8, '0') + (await headerDigest(dir, json)),
  );
  const prefix = new Uint8Array(start.length + json.length);
  prefix.set(start);
  prefix.set(json, start.length);
  if (db.size + prefix.length > maxBackupBytes)
    throw new BackupError('Full backups support up to 128 MiB.');
  requireSpace(Paths.availableDiskSpace, db.size + prefix.length);
  const file = new File(
    dir,
    'vokri-cards-backup-' + header.createdAt.replace(/[:.]/g, '-') + '.vokribackup',
  );
  file.create();
  await writeBody(db, file, prefix);
  return { file, header };
}
async function exact(handle: FileHandle, size: number) {
  const bytes = await handle.readBytes(size);
  if (bytes.length !== size) throw new BackupError('The backup is truncated.');
  return bytes;
}
export async function unpackBackup(file: File, dir: Directory, reported?: number) {
  if (Math.max(reported ?? 0, file.size) > maxBackupBytes)
    throw new BackupError('Choose a backup of 128 MiB or less.');
  const source = file.open(FileMode.ReadOnly);
  try {
    const decode = (b: Uint8Array) => new TextDecoder().decode(b);
    if (decode(await exact(source, signature.length)) !== signature)
      throw new BackupError('Choose a Vokri Cards full backup file.');
    const length = decode(await exact(source, 8)),
      digest = decode(await exact(source, 64));
    if (!/^\d{8}$/.test(length) || Number(length) > maxHeader)
      throw new BackupError('Invalid backup header.');
    const json = await exact(source, Number(length));
    if ((await headerDigest(dir, json)) !== digest)
      throw new BackupError('The backup metadata checksum does not match.');
    let header: BackupHeader;
    try {
      header = headerSchema.parse(JSON.parse(decode(json)));
    } catch {
      throw new BackupError('Invalid or unsupported backup version, metadata or preferences.');
    }
    if (signature.length + 72 + json.length + header.databaseBytes > maxBackupBytes)
      throw new BackupError('This backup exceeds 128 MiB.');
    requireSpace(Paths.availableDiskSpace, header.databaseBytes);
    const db = new File(dir, 'candidate.db');
    db.create();
    const to = db.open(FileMode.WriteOnly);
    try {
      await copyBytes(source, to, header.databaseBytes);
    } finally {
      to.close();
    }
    if (
      (await source.readBytes(1)).length ||
      (await db.digest('SHA-256')) !== header.databaseSha256
    )
      throw new BackupError('The backup is incomplete or its database checksum does not match.');
    return { db, header };
  } finally {
    source.close();
  }
}
export async function pickBackup(dir: Directory) {
  const picked = await Picker.getDocumentAsync({
    copyToCacheDirectory: Platform.OS === 'ios',
    multiple: false,
    type: '*/*',
  });
  if (picked.canceled) return null;
  const asset = picked.assets[0],
    file = new File(asset.uri);
  try {
    return await unpackBackup(file, dir, asset.size);
  } finally {
    if (Platform.OS === 'ios' && file.uri.startsWith(Paths.cache.uri.replace(/\/$/, '') + '/'))
      discard(file);
  }
}
export async function saveBackup(file: File) {
  let dir: Directory;
  try {
    dir = await Directory.pickDirectoryAsync();
  } catch (e) {
    if (e instanceof Error && /cancelled|canceled/i.test(e.message)) return null;
    throw e;
  }
  if (dir.list().some((item) => item.name === file.name))
    throw new BackupError('This folder already contains this backup. Choose another folder.');
  const out = dir.createFile(file.name, 'application/octet-stream');
  try {
    await writeBody(file, out);
    if ((await out.digest('SHA-256')) !== (await file.digest('SHA-256')))
      throw new BackupError('The saved backup could not be verified. Try another folder.');
    return out.name;
  } catch (e) {
    discard(out);
    throw e;
  }
}
export async function shareBackup(file: File) {
  if (!(await Sharing.isAvailableAsync()))
    throw new BackupError('Sharing is unavailable on this device.');
  await Sharing.shareAsync(file.uri, {
    mimeType: 'application/octet-stream',
    UTI: 'public.data',
    dialogTitle: 'Share full backup',
  });
}
