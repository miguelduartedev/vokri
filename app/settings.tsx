import { layout } from '@/ui/layout';
import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { languages } from '@/domain/languages';
import { appearances, type AppearancePreference } from '@/preferences/store';
import { usePreferences } from '@/preferences/context';
import {
  LanguageSheet,
  useSheetTrigger,
  SettingRow,
  Sheet,
  usePreferenceAction,
} from '@/ui/preferences';
import { Control, Icon, Type } from '@/ui/primitives';
import { useTheme } from '@/ui/theme';

const labels: Record<AppearancePreference, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};
export default function Settings() {
  const { state, store } = usePreferences();
  const { colors } = useTheme();
  const languageSheet = useSheetTrigger();
  const appearanceSheet = useSheetTrigger();
  const { saving, save, error } = usePreferenceAction();
  if (state.status !== 'ready' || !state.preferences.activeLearningLanguage) return null;
  const { appearance, activeLearningLanguage: language } = state.preferences;
  const { name, nativeName } = languages[language];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: layout.margin, paddingBottom: 30 }}>
        <Control
          accessibilityLabel="Back"
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/today'))}
          style={{
            alignSelf: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 14,
            paddingHorizontal: 8,
            minHeight: 60,
          }}
        >
          <Icon name="back" tint={colors.ink} />
          <Type variant="label">Settings</Type>
        </Control>
        <Type variant="eyebrow" color={colors.secondary} style={{ marginTop: 12 }}>
          YOUR FLASHCARDS
        </Type>
        <Type variant="display" accessibilityRole="header" style={{ marginTop: 5 }}>
          Settings.
        </Type>
        <View style={{ marginTop: 26 }}>
          <Type
            variant="eyebrow"
            color={colors.secondary}
            style={{ borderBottomWidth: 1, borderColor: colors.border, paddingBottom: 8 }}
          >
            PREFERENCES
          </Type>
          <SettingRow
            trigger={languageSheet.trigger}
            title="Learning language"
            detail={name + ' · ' + nativeName}
            onPress={languageSheet.show}
          />
          <SettingRow
            trigger={appearanceSheet.trigger}
            title="Appearance"
            detail="Follow your phone or choose a theme."
            value={labels[appearance]}
            onPress={appearanceSheet.show}
          />
        </View>
      </ScrollView>
      {languageSheet.open && (
        <LanguageSheet
          onSelect={store.setLanguage}
          language={language}
          close={languageSheet.close}
        />
      )}
      {appearanceSheet.open && (
        <Sheet
          title="Appearance"
          description="Follow your phone or choose a theme."
          onClose={appearanceSheet.close}
        >
          <View accessibilityRole="radiogroup">
            {appearances.map((option) => (
              <Control
                key={option}
                disabled={saving}
                accessibilityRole="radio"
                accessibilityLabel={labels[option]}
                accessibilityState={{ checked: appearance === option }}
                onPress={() => void save(() => store.setAppearance(option), appearanceSheet.close)}
                style={{
                  minHeight: 54,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottomWidth: 1,
                  borderColor: colors.border,
                }}
              >
                <Type variant="label">{labels[option]}</Type>
                <Icon name={appearance === option ? 'selected' : 'unselected'} />
              </Control>
            ))}
          </View>
          {!!error && <Type accessibilityRole="alert">{error}</Type>}
        </Sheet>
      )}
    </SafeAreaView>
  );
}
