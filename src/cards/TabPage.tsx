import { layout } from '@/ui/layout';
import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { languages } from '../domain/languages';
import { usePreferences } from '../preferences/context';
import { Button, Surface, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';
import type { LearningLanguage } from '../domain/languages';
import { CardsHeader } from './controls';

export function TabPage() {
  const { state } = usePreferences();
  if (state.status !== 'ready' || !state.preferences.activeLearningLanguage) return null;
  return <LanguageTab language={state.preferences.activeLearningLanguage} />;
}
function LanguageTab({ language }: { language: LearningLanguage }) {
  const { colors } = useTheme();
  const name = languages[language].name;
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: layout.margin, paddingBottom: 30 }}>
        <CardsHeader language={language} />
        <View style={{ marginTop: 12, gap: 8 }}>
          <Type variant="eyebrow" color={colors.secondary}>
            YOUR VOCABULARY
          </Type>
          <Type variant="display" accessibilityRole="header">
            My Words.
          </Type>
          <Type color={colors.secondary}>The {name} expressions you want to remember.</Type>
        </View>
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
          <Button
            label={'Explore ' + name + ' words'}
            onPress={() => router.navigate('/discover')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
