import { View } from 'react-native';
import { router } from 'expo-router';
import type { LearningLanguage } from '../domain/languages';
import { usePreferences } from '../preferences/context';
import { Control, Icon, Wordmark } from '../ui/primitives';
import { LanguageChip, LanguageSheet, useSheetTrigger } from '../ui/preferences';
import { useTheme } from '../ui/theme';

export function CardsHeader({ language }: { language: LearningLanguage }) {
  const { colors } = useTheme();
  const { store } = usePreferences();
  const sheet = useSheetTrigger();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
        paddingVertical: 8,
      }}
    >
      <Wordmark />
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <LanguageChip language={language} trigger={sheet.trigger} onPress={sheet.show} />
        <Control
          accessibilityLabel="Settings"
          onPress={() => router.push('/settings')}
          style={{ borderRadius: 22, alignItems: 'center', backgroundColor: colors.selected }}
        >
          <Icon name="settings" tint={colors.onSelected} />
        </Control>
      </View>
      {sheet.open && (
        <LanguageSheet onSelect={store.setLanguage} language={language} close={sheet.close} />
      )}
    </View>
  );
}
