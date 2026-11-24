import { createContext, useContext, useEffect, type PropsWithChildren } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import type { AppearancePreference } from '../preferences/store';

// VC / Theme modes. The legacy Nordic token export contains only the light mode.
export const palettes = {
  light: {
    background: '#F7F5EF',
    surface: '#FFFEFA',
    muted: '#F7F5EF',
    ink: '#183B35',
    secondary: '#53645E',
    border: '#D9DED5',
    action: '#183B35',
    onAction: '#F7F5EF',
    selected: '#D6EAE0',
    onSelected: '#183B35',
    focus: '#183B35',
  },
  dark: {
    background: '#152723',
    surface: '#20362F',
    muted: '#284239',
    ink: '#F3F5EF',
    secondary: '#C1D0C6',
    border: '#3B554B',
    action: '#D6EAE0',
    onAction: '#183B35',
    selected: '#36584A',
    onSelected: '#F3F5EF',
    focus: '#D6EAE0',
  },
};
export function resolveMode(
  choice: AppearancePreference,
  system: 'light' | 'dark' | null | undefined | 'unspecified',
) {
  return choice === 'system' ? (system === 'dark' ? 'dark' : 'light') : choice;
}
const Context = createContext({ colors: palettes.light, dark: false, fonts: false });
export function ThemeProvider({
  preference,
  fonts,
  children,
}: PropsWithChildren<{ preference: AppearancePreference; fonts: boolean }>) {
  const mode = resolveMode(preference, useColorScheme());
  useEffect(() => {
    Appearance.setColorScheme(preference === 'system' ? 'auto' : preference);
  }, [preference]);
  return (
    <Context.Provider value={{ colors: palettes[mode], dark: mode === 'dark', fonts }}>
      {children}
    </Context.Provider>
  );
}
export const useTheme = () => useContext(Context);
