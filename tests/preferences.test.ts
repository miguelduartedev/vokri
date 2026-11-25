import { PreferenceStore, preferencesKey, type Preferences } from '@/preferences/store';
import { languageIds } from '@/domain/languages';
import { resolveMode } from '@/ui/theme';

const defaults: Preferences = {
  schemaVersion: 1,
  activeLearningLanguage: null,
  appearance: 'system',
};
function memory(initial?: string) {
  const data = new Map([['unrelated', 'preserve me']]);
  if (initial !== undefined) data.set(preferencesKey, initial);
  const storage = {
    getItem: jest.fn(async (key: string) => data.get(key) ?? null),
    setItem: jest.fn(async (key: string, value: string) => {
      data.set(key, value);
    }),
  };
  return { data, storage, store: new PreferenceStore(storage) };
}

it.each(languageIds)('commits and restores %s across store instances', async (language) => {
  const { store, storage } = memory();
  await store.hydrate();
  expect(store.getSnapshot()).toEqual({
    status: 'ready',
    preferences: defaults,
    needsRepair: false,
  });
  await store.setLanguage(language);
  const returning = new PreferenceStore(storage);
  await returning.hydrate();
  expect(returning.getSnapshot()).toMatchObject({
    preferences: { activeLearningLanguage: language },
  });
});
it('serializes concurrent changes and preserves appearance, extension fields and unrelated keys', async () => {
  const { store, data } = memory(JSON.stringify({ ...defaults, extension: 7 }));
  await store.hydrate();
  await Promise.all([
    store.setLanguage('fi'),
    store.setAppearance('dark'),
    store.setLanguage('sv'),
  ]);
  expect(JSON.parse(data.get(preferencesKey)!)).toEqual({
    ...defaults,
    activeLearningLanguage: 'sv',
    appearance: 'dark',
    extension: 7,
  });
  expect(data.get('unrelated')).toBe('preserve me');
});
it.each(['{broken', 'null', '7', '{}'])(
  'recovers corrupt data after explicit selection: %s',
  async (raw) => {
    const { store, storage } = memory(raw);
    await store.hydrate();
    expect(store.getSnapshot()).toMatchObject({
      status: 'ready',
      needsRepair: true,
      preferences: defaults,
    });
    expect(storage.setItem).not.toHaveBeenCalled();
    await store.setLanguage('fi');
    expect(store.getSnapshot()).toMatchObject({ needsRepair: false });
  },
);
it('retains valid appearance when an unsupported language requires reselection', async () => {
  const { store } = memory(
    JSON.stringify({ ...defaults, activeLearningLanguage: 'xx', appearance: 'light' }),
  );
  await store.hydrate();
  expect(store.getSnapshot()).toMatchObject({
    preferences: { activeLearningLanguage: null, appearance: 'light' },
  });
});
it('retains valid language if appearance is invalid', async () => {
  const { store } = memory(
    JSON.stringify({ ...defaults, activeLearningLanguage: 'sv', appearance: 9 }),
  );
  await store.hydrate();
  expect(store.getSnapshot()).toMatchObject({
    preferences: { activeLearningLanguage: 'sv', appearance: 'system' },
  });
});
it('keeps unsupported versions intact', async () => {
  const { store, storage } = memory('{"schemaVersion":2}');
  await store.hydrate();
  expect(store.getSnapshot().status).toBe('unsupportedVersion');
  await expect(store.setLanguage('fi')).rejects.toThrow();
  expect(storage.setItem).not.toHaveBeenCalled();
});
it('keeps the previous record closed to writes after a failed read; retry restores it', async () => {
  const { store, storage } = memory(JSON.stringify({ ...defaults, activeLearningLanguage: 'sv' }));
  storage.getItem.mockRejectedValueOnce(new Error('temporary'));
  await store.hydrate();
  expect(store.getSnapshot().status).toBe('readError');
  await expect(store.setLanguage('fi')).rejects.toThrow();
  expect(storage.setItem).not.toHaveBeenCalled();
  await store.hydrate();
  expect(store.getSnapshot()).toMatchObject({ preferences: { activeLearningLanguage: 'sv' } });
});
it('recovers a stalled read and ignores its late result after retry', async () => {
  jest.useFakeTimers();
  try {
    const { store, storage } = memory();
    let resolve!: (value: string) => void;
    storage.getItem.mockImplementationOnce(
      () =>
        new Promise((done) => {
          resolve = done;
        }),
    );
    const hydration = store.hydrate();
    expect(store.getSnapshot().status).toBe('loading');
    await jest.advanceTimersByTimeAsync(8001);
    await hydration;
    expect(store.getSnapshot().status).toBe('readError');
    await store.hydrate();
    resolve(JSON.stringify({ ...defaults, activeLearningLanguage: 'sv' }));
    await Promise.resolve();
    expect(store.getSnapshot()).toMatchObject({ preferences: defaults });
  } finally {
    jest.useRealTimers();
  }
});
it('publishes only successful writes, then accepts a retry', async () => {
  const { store, storage } = memory();
  await store.hydrate();
  storage.setItem.mockRejectedValueOnce(new Error('full'));
  await expect(store.setLanguage('sv')).rejects.toThrow();
  expect(store.getSnapshot()).toMatchObject({ preferences: defaults });
  await store.setLanguage('sv');
  expect(store.getSnapshot()).toMatchObject({ preferences: { activeLearningLanguage: 'sv' } });
});
it.each([
  ['system', 'dark', 'dark'],
  ['system', 'light', 'light'],
  ['system', null, 'light'],
  ['dark', 'light', 'dark'],
  ['light', 'dark', 'light'],
] as const)('resolves %s with device %s to %s', (choice, system, expected) => {
  expect(resolveMode(choice, system)).toBe(expected);
});

it('adds independent card directions to an existing preference record and preserves concurrent changes', async () => {
  const { store, storage } = memory(
    JSON.stringify({ ...defaults, activeLearningLanguage: 'sv', appearance: 'dark' }),
  );
  await store.hydrate();
  await Promise.all([store.setDirection('fi', 'mixed'), store.setDirection('sv', 'production')]);
  const reopened = new PreferenceStore(storage);
  await reopened.hydrate();
  expect(reopened.getSnapshot()).toMatchObject({
    preferences: {
      activeLearningLanguage: 'sv',
      appearance: 'dark',
      directions: { fi: 'mixed', sv: 'production' },
    },
  });
});
