import { useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState, useSyncExternalStore } from 'react';
import { AppState } from 'react-native';
import type { LearningLanguage } from '../domain/languages';
import { useLearning } from '../learning/provider';

export function refreshDelay(now: number, nextDueAt?: number) {
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return Math.min(
    60_000,
    midnight.getTime() - now,
    nextDueAt !== undefined && nextDueAt > now ? nextDueAt - now : Infinity,
  );
}

export function useDailyLearning(language: LearningLanguage) {
  const store = useLearning();
  const revision = useSyncExternalStore(store.subscribe, store.getRevision);
  const [tick, setTick] = useState(0);
  const daily = useMemo(
    () => store.today(language),
    // Commits and wall-clock boundaries both change queue eligibility.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [language, store, revision, tick],
  );
  useFocusEffect(
    useCallback(() => {
      let timer: ReturnType<typeof setTimeout>;
      const refresh = () => {
        clearTimeout(timer);
        setTick((value) => value + 1);
        timer = setTimeout(refresh, refreshDelay(store.now(), daily.nextDueAt));
      };
      if (AppState.currentState !== 'background' && AppState.currentState !== 'inactive') refresh();
      const subscription = AppState.addEventListener('change', (state) => {
        if (state === 'active') refresh();
        else clearTimeout(timer);
      });
      return () => {
        clearTimeout(timer);
        subscription.remove();
      };
    }, [daily.nextDueAt, store]),
  );
  return daily;
}

export function localDueTime(timestamp: number) {
  return new Date(timestamp).toLocaleString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}
