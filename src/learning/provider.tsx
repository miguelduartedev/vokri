import { openLearningStore } from './native';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type PropsWithChildren,
} from 'react';
import { ActivityIndicator, View } from 'react-native';
import type { LearningLanguage } from '../domain/languages';
import { Button, Type } from '../ui/primitives';
import { LearningStore } from './store';

const Context = createContext<LearningStore | null>(null);
export function LearningProvider({ children }: PropsWithChildren) {
  const [attempt, retry] = useState(0);
  const [store, setStore] = useState<LearningStore>();
  const [error, setError] = useState('');
  useEffect(() => {
    // React owns the subscription; the native connection belongs to the app.
    let active = true;
    openLearningStore().then(
      (store) => {
        if (active) setStore(store);
      },
      (failure) => {
        if (active)
          setError(
            failure instanceof Error && failure.message.includes('newer app')
              ? failure.message
              : 'Your learning data could not be opened. Your saved data is still on this device.',
          );
      },
    );
    return () => {
      active = false;
    };
  }, [attempt]);
  if (error)
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 16 }}>
        <Type variant="title">Learning data unavailable</Type>
        <Type accessibilityRole="alert">{error}</Type>
        <Button
          label="Try again"
          onPress={() => {
            setError('');
            retry((n) => n + 1);
          }}
        />
      </View>
    );
  if (!store) return <ActivityIndicator accessibilityLabel="Loading saved learning progress" />;
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
export function useLearning() {
  const store = useContext(Context);
  if (!store) throw new Error('Learning provider missing');
  return store;
}
export function useInventory(language: LearningLanguage) {
  const store = useLearning();
  const revision = useSyncExternalStore(store.subscribe, store.getRevision);
  return useMemo(
    () => ({ ...store.inventory(language), session: store.current(language) }),
    // Database rows change on commit while the store identity stays stable.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, language, revision],
  );
}
