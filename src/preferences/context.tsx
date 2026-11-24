import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type PropsWithChildren,
} from 'react';
import { PreferenceStore } from './store';

const Context = createContext<PreferenceStore | null>(null);

export function PreferencesProvider({
  store,
  children,
}: PropsWithChildren<{ store: PreferenceStore }>) {
  useEffect(() => {
    void store.hydrate();
  }, [store]);
  return <Context.Provider value={store}>{children}</Context.Provider>;
}

export function usePreferences() {
  const store = useContext(Context);
  if (!store) throw new Error('PreferencesProvider is required');
  return { state: useSyncExternalStore(store.subscribe, store.getSnapshot), store };
}
