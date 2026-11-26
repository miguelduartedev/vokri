import { Platform } from 'react-native';
import * as Picker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';
import { Directory, File } from 'expo-file-system';
import { maxBytes } from '@/domain/interchange/format';
import {
  decodeVocabulary,
  pickVocabulary,
  saveVocabulary,
  shareVocabulary,
} from '@/cards/portability-files';

const mockRead = jest.fn(),
  mockClose = jest.fn(),
  mockDelete = jest.fn(),
  mockWrite = jest.fn(),
  mockCreateFile = jest.fn();
jest.mock('expo-document-picker', () => ({ getDocumentAsync: jest.fn() }));
jest.mock('expo-sharing', () => ({ isAvailableAsync: jest.fn(), shareAsync: jest.fn() }));
jest.mock('expo-file-system', () => {
  class Dir {
    static pickDirectoryAsync = jest.fn();
    create = jest.fn();
    list = () => [];
  }
  return {
    Directory: Dir,
    Paths: { cache: { uri: 'file:///cache/' } },
    FileMode: { ReadOnly: 'r' },
    File: jest
      .fn()
      .mockImplementation((uri) => ({
        uri: typeof uri === 'string' ? uri : 'file:///cache/shared.json',
        name: 'selected.json',
        size: 0,
        delete: mockDelete,
        write: mockWrite,
        open: () => ({ readBytes: mockRead, close: mockClose }),
      })),
  };
});
const json = JSON.stringify({
  format: 'vokri-cards-my-words',
  version: 1,
  learningLanguage: 'sv',
  exportedAt: '2026-11-25T12:00:00.000Z',
  personalEntries: [],
  collections: [],
  memberships: [],
});
const data = { json, filename: 'words-sv.json' };
function asset(size?: number) {
  return {
    canceled: false as const,
    assets: [{ uri: 'file:///cache/words', name: 'arbitrary.txt', size, lastModified: 0 }],
  };
}
beforeEach(() => jest.clearAllMocks());
it('handles cancellation and reported oversize before reading, then closes and cleans a bounded picker copy', async () => {
  jest
    .mocked(Picker.getDocumentAsync)
    .mockResolvedValueOnce({ canceled: true, assets: null })
    .mockResolvedValueOnce(asset(maxBytes + 1))
    .mockResolvedValueOnce(asset());
  expect(await pickVocabulary()).toBeNull();
  await expect(pickVocabulary()).rejects.toMatchObject({ code: 'size' });
  expect(mockRead).not.toHaveBeenCalled();
  mockRead.mockResolvedValueOnce(new TextEncoder().encode(json));
  expect(await pickVocabulary()).toMatchObject({
    name: 'arbitrary.txt',
    document: { learningLanguage: 'sv' },
  });
  expect(mockRead).toHaveBeenCalledWith(maxBytes + 1);
  expect(mockClose).toHaveBeenCalledTimes(1);
  expect(mockDelete).toHaveBeenCalledTimes(2);
});
it('rejects invalid UTF-8, malformed or future documents and actual oversize even without provider metadata', async () => {
  for (const [bytes, code] of [
    [new Uint8Array([0xc0, 0xa0]), 'json'],
    [new TextEncoder().encode('{'), 'json'],
    [new TextEncoder().encode(json.replace('"version":1', '"version":2')), 'unsupported_version'],
    [new Uint8Array(maxBytes + 1), 'size'],
  ] as const) {
    jest.mocked(Picker.getDocumentAsync).mockResolvedValueOnce(asset());
    mockRead.mockResolvedValueOnce(bytes);
    await expect(pickVocabulary()).rejects.toMatchObject({ code });
  }
  expect(mockClose).toHaveBeenCalledTimes(4);
  expect(decodeVocabulary(new TextEncoder().encode('\uFEFF' + json)).learningLanguage).toBe('sv');
});
it('writes UTF-8 to the chosen folder, distinguishes dismissal and removes a failed new document', async () => {
  const saved = { write: mockWrite, name: 'words-sv (1).json', delete: mockDelete };
  mockCreateFile.mockReturnValue(saved);
  jest
    .mocked(Directory.pickDirectoryAsync)
    .mockRejectedValueOnce(new Error('Picker cancelled'))
    .mockResolvedValue({ createFile: mockCreateFile } as unknown as Directory);
  expect(await saveVocabulary(data)).toBeNull();
  expect(await saveVocabulary(data)).toBe(saved.name);
  expect(mockCreateFile).toHaveBeenCalledWith(data.filename, 'application/json');
  expect(mockWrite).toHaveBeenCalledWith(json);
  mockWrite.mockRejectedValueOnce(new Error('storage'));
  await expect(saveVocabulary(data)).rejects.toThrow('storage');
  expect(mockDelete).toHaveBeenCalledTimes(1);
});
it('checks availability and keeps a shared file readable after opening the system sheet', async () => {
  jest.mocked(Sharing.isAvailableAsync).mockResolvedValueOnce(false).mockResolvedValueOnce(true);
  expect(await shareVocabulary(data)).toBe(false);
  expect(File).not.toHaveBeenCalled();
  expect(await shareVocabulary(data)).toBe(true);
  expect(Sharing.shareAsync).toHaveBeenCalledWith(
    'file:///cache/shared.json',
    expect.objectContaining({ mimeType: 'application/json' }),
  );
  expect(mockDelete).not.toHaveBeenCalled();
});

it('reads the URI granted by Android and leaves the source document in place', async () => {
  const original = Platform.OS;
  Platform.OS = 'android';
  try {
    const chosen = asset();
    chosen.assets[0].uri =
      'content://com.android.externalstorage.documents/document/primary%3ADocuments%2Fwords.json';
    jest.mocked(Picker.getDocumentAsync).mockResolvedValueOnce(chosen);
    mockRead.mockResolvedValueOnce(new TextEncoder().encode(json));
    expect((await pickVocabulary())?.document.learningLanguage).toBe('sv');
    expect(Picker.getDocumentAsync).toHaveBeenCalledWith(
      expect.objectContaining({ copyToCacheDirectory: false }),
    );
    expect(mockDelete).not.toHaveBeenCalled();
  } finally {
    Platform.OS = original;
  }
});
