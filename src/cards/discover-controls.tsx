import { router } from 'expo-router';
import { useCallback, type ReactNode } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePreferences } from '../preferences/context';
import type { VocabularyItem } from '../domain/vocabulary/schema';
import { Control, Icon, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';

export function useLanguage() {
  const { state } = usePreferences();
  return state.status === 'ready' ? state.preferences.activeLearningLanguage : null;
}
export function useOpenWord() {
  return useCallback((item: VocabularyItem) => {
    router.push({
      pathname: '/discover/word/[wordId]',
      params: { wordId: item.wordId, language: item.languageId },
    });
  }, []);
}
export function DiscoverPage({ children }: { children: ReactNode }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      {children}
    </SafeAreaView>
  );
}
export function BackLink({ label = 'Discover' }: { label?: string }) {
  const { colors } = useTheme();
  return (
    <Control
      accessibilityLabel="Back"
      onPress={() => (router.canGoBack() ? router.back() : router.replace('/discover'))}
      style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 6 }}
    >
      <Icon name="back" tint={colors.secondary} />
      <Type variant="label">{label}</Type>
    </Control>
  );
}
export function MissingContent() {
  return (
    <DiscoverPage>
      <View style={{ padding: 24, gap: 16 }}>
        <Type variant="title">This item is unavailable.</Type>
        <Control onPress={() => router.replace('/discover')}>
          <Type variant="label">Back to Discover</Type>
        </Control>
      </View>
    </DiscoverPage>
  );
}
