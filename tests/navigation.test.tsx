import path from 'node:path';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { act, fireEvent, renderRouter, screen, waitFor } from 'expo-router/testing-library';
import { preferencesKey } from '@/preferences/store';
import { palettes } from '@/ui/theme';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  useFonts: () => [true, null],
}));

const routes = path.resolve(__dirname, '../app');
beforeEach(async () => {
  await AsyncStorage.removeItem(preferencesKey);
});

it('shows no destination while hydrating, then restores Swedish directly', async () => {
  let resolve!: (value: string) => void;
  jest.mocked(AsyncStorage.getItem).mockImplementationOnce(
    () =>
      new Promise((done) => {
        resolve = done;
      }),
  );
  await renderRouter(routes);
  expect(screen.queryByText('Continue with Finnish')).toBeNull();
  expect(screen.queryByText('Start with the essentials.')).toBeNull();
  await act(async () =>
    resolve(JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'dark' })),
  );
  await screen.findByText('Explore Swedish words');
  expect(screen).toHavePathname('/today');
  expect(screen.queryByText('Continue with Finnish')).toBeNull();
});

it('onboards, navigates three tabs, switches from Settings and the header, and retains appearance', async () => {
  await renderRouter(routes);
  const swedish = await screen.findByRole('radio', { name: 'Swedish, Svenska', checked: false });
  expect(screen.getByRole('radio', { name: 'Finnish, Suomi', checked: true })).toBeOnTheScreen();
  await fireEvent.press(swedish);
  expect(screen.getByRole('radio', { name: 'Swedish, Svenska', checked: true })).toBeOnTheScreen();
  jest.mocked(AsyncStorage.setItem).mockRejectedValueOnce(new Error('temporarily unavailable'));
  await fireEvent.press(screen.getByText('Continue with Swedish'));
  await screen.findByText(/could not be saved/);
  expect(screen).toHavePathname('/language-selection');
  await fireEvent.press(screen.getByText('Continue with Swedish'));
  await fireEvent.press(await screen.findByText('Explore Swedish words'));
  expect(screen).toHavePathname('/discover');
  expect(screen.getByText(/Swedish catalogue is being prepared/)).toBeOnTheScreen();
  await fireEvent.press(screen.getByLabelText('My Words'));
  expect(screen).toHavePathname('/my-words');
  expect(screen.getByText('Your Swedish words will live here.')).toBeOnTheScreen();
  await fireEvent.press(screen.getByLabelText('Settings'));
  await fireEvent.press(screen.getByLabelText('Appearance, System'));
  await fireEvent.press(await screen.findByRole('radio', { name: 'Dark' }));
  await screen.findByLabelText('Appearance, Dark');
  expect(screen.getByText('Settings.')).toHaveStyle({ color: palettes.dark.ink });
  await fireEvent.press(screen.getByLabelText('Learning language, Swedish · Svenska'));
  await fireEvent.press(await screen.findByRole('radio', { name: 'Finnish, Suomi' }));
  await fireEvent.press(await screen.findByLabelText('Back'));
  expect(screen).toHavePathname('/my-words');
  await fireEvent.press(screen.getByLabelText('Learning language, Finnish'));
  await fireEvent.press(await screen.findByRole('radio', { name: 'Swedish, Svenska' }));
  await waitFor(() =>
    expect(screen.getByText('Your Swedish words will live here.')).toBeOnTheScreen(),
  );
  expect(JSON.parse((await AsyncStorage.getItem(preferencesKey))!)).toMatchObject({
    activeLearningLanguage: 'sv',
    appearance: 'dark',
  });
});


it('retries a failed storage read and continues with Finnish on a fresh installation', async () => {
  jest.mocked(AsyncStorage.getItem).mockRejectedValueOnce(new Error('temporary'));
  await renderRouter(routes);
  expect(await screen.findByText('Preferences unavailable')).toBeOnTheScreen();
  expect(AsyncStorage.setItem).not.toHaveBeenCalled();
  await fireEvent.press(screen.getByText('Try again'));
  await fireEvent.press(await screen.findByText('Continue with Finnish'));
  expect(await screen.findByText('Explore Finnish words')).toBeOnTheScreen();
  expect(screen).toHavePathname('/today');
});
