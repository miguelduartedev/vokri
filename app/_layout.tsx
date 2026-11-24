import AsyncStorage from '@react-native-async-storage/async-storage';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_600SemiBold } from '@expo-google-fonts/inter/600SemiBold';
import { Newsreader_400Regular } from '@expo-google-fonts/newsreader/400Regular';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PreferencesProvider, usePreferences } from '@/preferences/context';
import { PreferenceStore } from '@/preferences/store';
import { Button, Type } from '@/ui/primitives';
import { ThemeProvider, useTheme } from '@/ui/theme';

const families = {
  Inter: Inter_400Regular,
  InterSemiBold: Inter_600SemiBold,
  Newsreader: Newsreader_400Regular,
};

function Navigation({ fontsReady }: { fontsReady: boolean }) {
  const { state, store } = usePreferences();
  const { colors, dark } = useTheme();
  let content;
  if (state.status === 'loading' || !fontsReady) {
    content = <ActivityIndicator accessibilityLabel="Opening Vokri Cards" color={colors.ink} />;
  } else if (state.status !== 'ready') {
    content = (
      <View style={{ gap: 16, padding: 24 }}>
        <Type variant="title" accessibilityRole="header">
          Preferences unavailable
        </Type>
        <Type>
          {state.status === 'unsupportedVersion'
            ? 'This device has preferences from a different version. Open the latest app to continue.'
            : 'Your preferences could not be read. Your saved choices are still on this device.'}
        </Type>
        <Button label="Try again" onPress={() => void store.hydrate()} />
      </View>
    );
  } else {
    const selected = state.preferences.activeLearningLanguage !== null;
    content = (
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Protected guard={!selected}>
          <Stack.Screen name="language-selection" />
        </Stack.Protected>
        <Stack.Protected guard={selected}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="settings" />
        </Stack.Protected>
      </Stack>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center' }}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      {content}
    </View>
  );
}

function Startup() {
  const { state } = usePreferences();
  const [loaded, error] = useFonts(families);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    if (loaded || error) return;
    const timer = setTimeout(() => setFallback(true), 3500);
    return () => clearTimeout(timer);
  }, [loaded, error]);
  return (
    <ThemeProvider
      preference={state.status === 'ready' ? state.preferences.appearance : 'system'}
      fonts={loaded && !fallback}
    >
      <Navigation fontsReady={loaded || !!error || fallback} />
    </ThemeProvider>
  );
}
export default function RootLayout() {
  const [preferences] = useState(() => new PreferenceStore(AsyncStorage));
  return (
    <SafeAreaProvider>
      <PreferencesProvider store={preferences}>
        <Startup />
      </PreferencesProvider>
    </SafeAreaProvider>
  );
}
