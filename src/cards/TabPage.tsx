import { layout } from '@/ui/layout';
import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { languages } from '../domain/languages';
import { usePreferences } from '../preferences/context';
import { Button, Surface, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';
import { CardsHeader } from './controls';

export function TabPage({ page }: { page: 'today' | 'discover' | 'my-words' }) {
  const { state } = usePreferences();
  const { colors } = useTheme();
  if (state.status !== 'ready' || !state.preferences.activeLearningLanguage) return null;
  const language = state.preferences.activeLearningLanguage;
  const name = languages[language].name;
  const today = page === 'today';
  const discover = page === 'discover';
  const title = today
    ? name + ' begins\nwith one word.'
    : discover
      ? 'Words worth\nremembering.'
      : 'My Words.';
  const caption = today
    ? 'Start with a few useful words. We’ll bring them back.'
    : discover
      ? 'Explore ' + name + ' at your own pace.'
      : 'The ' + name + ' expressions you want to remember.';
  const explore = (
    <Button
      align={today ? 'left' : 'center'}
      label={'Explore ' + name + ' words'}
      onPress={() => router.navigate('/discover')}
    />
  );
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: layout.margin, paddingBottom: 30 }}>
        <CardsHeader language={language} />
        <View style={{ marginTop: 12, gap: 8 }}>
          <Type variant="eyebrow" color={colors.secondary}>
            {today
              ? 'WELCOME / ' + name.toUpperCase()
              : discover
                ? 'DISCOVER / ' + name.toUpperCase()
                : 'YOUR VOCABULARY'}
          </Type>
          <Type variant="display" accessibilityRole="header">
            {title}
          </Type>
          <Type color={colors.secondary} style={today && { fontSize: 13, lineHeight: 19 }}>
            {caption}
          </Type>
        </View>
        {today ? (
          <View style={{ marginTop: 30, gap: 24 }}>
            <Surface style={{ minHeight: 222 }}>
              <Type variant="eyebrow" color={colors.secondary}>
                A FRESH START
              </Type>
              <Type variant="title">Start with the essentials.</Type>
              <Type variant="caption" color={colors.secondary}>
                Choose words you want to remember.
              </Type>
              <View style={{ flex: 1, minHeight: 10 }} />
              {explore}
            </Surface>
            <Type variant="caption" color={colors.secondary}>
              No {name} reviews yet.
            </Type>
          </View>
        ) : discover ? (
          <Surface style={{ marginTop: 28, backgroundColor: colors.action, padding: 22 }}>
            <Type variant="eyebrow" color={colors.onAction}>
              VOCABULARY
            </Type>
            <Type variant="title" color={colors.onAction}>
              {name} vocabulary
            </Type>
            <Type color={colors.onAction}>
              The {name} catalogue is being prepared. Words and collections will appear here.
            </Type>
          </Surface>
        ) : (
          <View style={{ gap: 16, marginTop: 32 }}>
            <Type variant="title">Saved entries</Type>
            <Surface
              style={{
                backgroundColor: colors.selected,
                borderColor: colors.selected,
                padding: 24,
              }}
            >
              <Type
                variant="display"
                accessible={false}
                importantForAccessibility="no"
                color={colors.onSelected}
              >
                Aa ✦
              </Type>
              <Type variant="title" color={colors.onSelected}>
                Your {name} words will live here.
              </Type>
              <Type color={colors.onSelected}>
                Personal entries will be available in a future update.
              </Type>
            </Surface>
            {explore}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
