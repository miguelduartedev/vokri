import { Platform } from 'react-native';
import * as Picker from 'expo-document-picker';
import { Directory, File, FileMode, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { InterchangeError, maxBytes, parseVocabulary } from '../domain/interchange/format';

const tooLarge = () => new InterchangeError('size', [], 'Choose a file of 4 MiB or less.');
export function decodeVocabulary(bytes: Uint8Array) {
  if (bytes.length > maxBytes) throw tooLarge();
  const data = bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191 ? bytes.subarray(3) : bytes;
  const text = new TextDecoder().decode(data);
  // Some native decoders replace malformed input even when fatal decoding is requested.
  const encoded = new TextEncoder().encode(text);
  if (encoded.length !== data.length || !encoded.every((b, i) => b === data[i]))
    throw new InterchangeError('json', [], 'Choose a valid UTF-8 vocabulary file.');
  const parsed = parseVocabulary(text);
  if (!parsed.ok) throw parsed.error;
  return parsed.document;
}
export async function pickVocabulary() {
  const picked = await Picker.getDocumentAsync({
    copyToCacheDirectory: Platform.OS === 'ios',
    type: '*/*',
    multiple: false,
  });
  if (picked.canceled) return null;
  const asset = picked.assets[0],
    file = new File(asset.uri);
  try {
    if ((asset.size ?? 0) > maxBytes || file.size > maxBytes) throw tooLarge();
    const handle = file.open(FileMode.ReadOnly);
    try {
      const bytes = await handle.readBytes(maxBytes + 1);
      return { name: asset.name, document: decodeVocabulary(bytes) };
    } finally {
      handle.close();
    }
  } finally {
    // Only dispose of the private picker copy.
    if (Platform.OS === 'ios' && file.uri.startsWith(Paths.cache.uri.replace(/\/$/, '') + '/')) {
      try {
        file.delete();
      } catch {
        /* The OS also clears its cache. */
      }
    }
  }
}

type Output = { json: string; filename: string };
export async function saveVocabulary({ json, filename }: Output) {
  let folder: Directory;
  try {
    folder = await Directory.pickDirectoryAsync();
  } catch (error) {
    if (error instanceof Error && /cancelled|canceled/i.test(error.message)) return null;
    throw error;
  }
  const file = folder.createFile(filename, 'application/json');
  try {
    await file.write(json);
  } catch (error) {
    try {
      file.delete();
    } catch {
      /* A document provider can revoke access. */
    }
    throw error;
  }
  return file.name;
}
export async function shareVocabulary({ json, filename }: Output) {
  if (!(await Sharing.isAvailableAsync())) return false;
  const root = new Directory(Paths.cache, 'vokri-exports');
  root.create({ idempotent: true, intermediates: true });
  const now = Date.now();
  for (const item of root.list()) {
    if (item instanceof Directory && Number(item.name.split('-')[0]) < now - 86400000) {
      try {
        item.delete();
      } catch {
        /* Retry cleanup on a later share. */
      }
    }
  }
  const dir = new Directory(root, now + '-' + Math.random().toString(36).slice(2));
  dir.create();
  const file = new File(dir, filename);
  await file.write(json);
  await Sharing.shareAsync(file.uri, {
    mimeType: 'application/json',
    UTI: 'public.json',
    dialogTitle: 'Share vocabulary',
  });
  return true;
}
export function fileIssue(error: unknown, fallback: string) {
  if (error instanceof InterchangeError)
    return [error.path.join('.'), error.message].filter(Boolean).join(' · ');
  return fallback;
}
