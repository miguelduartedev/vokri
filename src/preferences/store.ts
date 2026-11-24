import { z } from 'zod';
import { languageIds, type LearningLanguage } from '../domain/languages';

export const appearances = ['system', 'light', 'dark'] as const;
export type AppearancePreference = (typeof appearances)[number];
export interface Preferences {
  schemaVersion: 1;
  activeLearningLanguage: LearningLanguage | null;
  appearance: AppearancePreference;
}

export const preferencesKey = 'language-learning:preferences:v1';
export interface PreferenceStorage {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
}

const defaults: Preferences = {
  schemaVersion: 1,
  activeLearningLanguage: null,
  appearance: 'system',
};
const schema = z
  .object({
    schemaVersion: z.literal(1),
    activeLearningLanguage: z.enum(languageIds).nullable().catch(null),
    appearance: z.enum(appearances).catch('system'),
  })
  .passthrough();

type Snapshot =
  | { status: 'loading' | 'readError' | 'unsupportedVersion' }
  | { status: 'ready'; preferences: Preferences; needsRepair: boolean };

function decode(raw: string | null): Snapshot {
  if (raw === null) return { status: 'ready', preferences: defaults, needsRepair: false };
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return { status: 'ready', preferences: defaults, needsRepair: true };
  }
  if (data && typeof data === 'object' && 'schemaVersion' in data && data.schemaVersion !== 1) {
    return { status: 'unsupportedVersion' };
  }
  const parsed = schema.safeParse(data);
  if (!parsed.success) return { status: 'ready', preferences: defaults, needsRepair: true };
  return {
    status: 'ready',
    preferences: parsed.data,
    needsRepair:
      parsed.data.activeLearningLanguage === null &&
      !(
        data &&
        typeof data === 'object' &&
        'activeLearningLanguage' in data &&
        data.activeLearningLanguage === null
      ),
  };
}

// Publish only acknowledged writes. Each queued change starts from the latest committed record.
export class PreferenceStore {
  constructor(private readonly storage: PreferenceStorage) {}
  private snapshot: Snapshot = { status: 'loading' };
  private listeners = new Set<() => void>();
  private writes: Promise<void> = Promise.resolve();
  private read?: Promise<void>;

  getSnapshot = () => this.snapshot;
  subscribe = (callback: () => void) => {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  };
  private publish(next: Snapshot) {
    this.snapshot = next;
    this.listeners.forEach((listener) => listener());
  }

  hydrate = (): Promise<void> => {
    if (this.read) return this.read;
    if (this.snapshot.status === 'ready') return Promise.resolve();
    this.publish({ status: 'loading' });
    this.read = this.load().finally(() => {
      this.read = undefined;
    });
    return this.read;
  };

  private async load() {
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      const timeout = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error('Read timed out')), 8000);
      });
      const raw = await Promise.race([this.storage.getItem(preferencesKey), timeout]);
      this.publish(decode(raw));
    } catch {
      this.publish({ status: 'readError' });
    } finally {
      clearTimeout(timer);
    }
  }

  private update(patch: Partial<Pick<Preferences, 'activeLearningLanguage' | 'appearance'>>) {
    const operation = this.writes.then(async () => {
      if (this.snapshot.status !== 'ready') throw new Error('Preferences are unavailable');
      const preferences = { ...this.snapshot.preferences, ...patch };
      await this.storage.setItem(preferencesKey, JSON.stringify(preferences));
      this.publish({ status: 'ready', preferences, needsRepair: false });
    });
    this.writes = operation.catch(() => {});
    return operation;
  }
  setLanguage = (activeLearningLanguage: LearningLanguage) =>
    this.update({ activeLearningLanguage });
  setAppearance = (appearance: AppearancePreference) => this.update({ appearance });
}
