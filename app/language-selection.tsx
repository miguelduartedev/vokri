import { layout } from '@/ui/layout';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { languages, type LearningLanguage } from '@/domain/languages';
import { usePreferences } from '@/preferences/context';
import { LanguageCards, usePreferenceAction } from '@/ui/preferences';
import { Button, Type, Wordmark } from '@/ui/primitives';
import { useTheme } from '@/ui/theme';

export default function LanguageSelection() {
  const [choice, setChoice] = useState<LearningLanguage>('fi');
  const { state, store } = usePreferences();
  const { error, saving, save } = usePreferenceAction();
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: layout.margin,
          paddingTop: 38,
          paddingBottom: 22,
        }}
      >
        <Wordmark />
        <View style={{ marginTop: 48, gap: 10 }}>
          <Type variant="eyebrow" color={colors.secondary}>
            START WITH ONE LANGUAGE
          </Type>
          <Type variant="display" accessibilityRole="header">
            {'What would you\nlike to learn?'}
          </Type>
          <Type color={colors.secondary} style={{ marginTop: 8 }}>
            {'Choose a language to get started.\nYou can add another anytime.'}
          </Type>
        </View>
        <View style={{ marginTop: 28 }}>
          <LanguageCards value={choice} onSelect={setChoice} disabled={saving} />
        </View>
        <Type variant="caption" color={colors.secondary} style={{ marginTop: 22 }}>
          Study both at your own pace.
        </Type>
        <View style={{ flexGrow: 1, minHeight: 30 }} />
        <View style={{ gap: 10 }}>
          {state.status === 'ready' && state.needsRepair && (
            <Type variant="caption">Choose a language to restore your preferences.</Type>
          )}
          {!!error && <Type accessibilityRole="alert">{error}</Type>}
          <Button
            label={'Continue with ' + languages[choice].name}
            disabled={saving}
            onPress={() => void save(() => store.setLanguage(choice))}
          />
          <Type variant="caption" color={colors.secondary}>
            No account needed to begin.
          </Type>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
