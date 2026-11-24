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
  expect(screen.getByText('Swedish Essentials')).toBeOnTheScreen();
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

it('opens a real curated deck, returns to its list, and preserves a catalogue query across word detail', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'system' }),
  );
  await renderRouter(routes, { initialUrl: '/discover' });
  await fireEvent.press(await screen.findByLabelText('Explore Swedish Essentials'));
  await fireEvent.press(await screen.findByLabelText('en bok, book, noun'));
  expect(await screen.findByText('Indefinite plural · böcker')).toBeOnTheScreen();
  await fireEvent.press(screen.getByLabelText('Back'));
  expect(await screen.findByText('24 words')).toBeOnTheScreen();
  await fireEvent.press(screen.getByLabelText('Back'));
  await fireEvent.press(await screen.findByLabelText('All Swedish words'));
  await fireEvent.changeText(screen.getByLabelText('Search Swedish or English'), 'en bok');
  await fireEvent.press(await screen.findByLabelText('en bok, book, noun'));
  await fireEvent.press(await screen.findByLabelText('Back'));
  expect(await screen.findByDisplayValue('en bok')).toBeOnTheScreen();
  expect(await AsyncStorage.getAllKeys()).toEqual([preferencesKey]);
});

it('intersects catalogue filters, clears an empty result and resets browsing when changing language', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'fi', appearance: 'system' }),
  );
  await renderRouter(routes, { initialUrl: '/discover/all?language=fi&topic=Transport' });
  await fireEvent.press(await screen.findByLabelText('Filter by tier, All tiers'));
  await fireEvent.press(await screen.findByText('Core'));
  await fireEvent.changeText(screen.getByLabelText('Search Finnish or English'), 'unmatchedzz');
  expect(await screen.findByText('No words found.')).toBeOnTheScreen();
  await fireEvent.press(screen.getByLabelText('Clear search'));
  await fireEvent.changeText(screen.getByLabelText('Search Finnish or English'), 'juna');
  await fireEvent.press(await screen.findByLabelText('juna, train, noun'));
  expect(await screen.findByText('Transport · Core')).toBeOnTheScreen();
  await fireEvent.press(screen.getByLabelText('Back'));
  expect(await screen.findByDisplayValue('juna')).toBeOnTheScreen();
  await fireEvent.press(screen.getByLabelText('Learning language, Finnish'));
  await fireEvent.press(await screen.findByRole('radio', { name: 'Swedish, Svenska' }));
  expect(await screen.findByText('Swedish Essentials')).toBeOnTheScreen();
  expect(screen.queryByDisplayValue('juna')).toBeNull();
});
it('recovers from an unknown vocabulary reference without creating learner records', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'system' }),
  );
  await renderRouter(routes, { initialUrl: '/discover/word/unknown?language=sv' });
  await fireEvent.press(await screen.findByText('Back to Discover'));
  expect(await screen.findByText('Swedish Essentials')).toBeOnTheScreen();
  expect(await AsyncStorage.getAllKeys()).toEqual([preferencesKey]);
});

it.each([
  ['sv-vatten-e20cc41e', 'vatten', 'Gender · ett', 'Indefinite plural'],
  [
    'sv-glasogon-464f502b',
    'glasögon',
    'Plural-only common noun; no singular article in display.',
    'FORMS',
  ],
  ['sv-stor-25e3d254', 'stor', 'Neuter · stort', 'Gender ·'],
  ['sv-ata-18777a45', 'äta', 'Supine · ätit', 'Gender ·'],
])(
  'renders supplied metadata and omits absent forms on %s',
  async (id, heading, expected, absent) => {
    await AsyncStorage.setItem(
      preferencesKey,
      JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'system' }),
    );
    await renderRouter(routes, { initialUrl: '/discover/word/' + id + '?language=sv' });
    expect(await screen.findByRole('header', { name: heading })).toBeOnTheScreen();
    expect(screen.getByText(expected)).toBeOnTheScreen();
    expect(screen.queryByText(new RegExp(absent))).toBeNull();
  },
);
it('opens Discover safely when a restored detail belongs to the previous language', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'fi', appearance: 'system' }),
  );
  await renderRouter(routes, { initialUrl: '/discover/word/sv-bok-9992bfa7?language=sv' });
  expect(await screen.findByText('Finnish Essentials')).toBeOnTheScreen();
  expect(screen.queryByText('en bok')).toBeNull();
});
