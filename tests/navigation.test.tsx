import { testDatabase } from './learning-db';
import path from 'node:path';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { act, fireEvent, renderRouter, screen, waitFor } from 'expo-router/testing-library';
import { preferencesKey } from '@/preferences/store';
import { palettes } from '@/ui/theme';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
let mockDatabase: ReturnType<typeof testDatabase>;
jest.mock('expo-sqlite', () => ({
  openDatabaseAsync: async () => {
    mockDatabase = require('./learning-db').testDatabase();
    return mockDatabase;
  },
}));
jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  useFonts: () => [true, null],
}));

const routes = path.resolve(__dirname, '../app');
afterAll(() => mockDatabase?.closeSync());
beforeEach(async () => {
  mockDatabase?.execSync(
    'DELETE FROM ratings; DELETE FROM session_cards; DELETE FROM sessions; DELETE FROM enrolments; DELETE FROM personal_entries;',
  );
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
  for (const table of ['enrolments', 'session_cards', 'ratings']) {
    expect(mockDatabase.getAllSync('SELECT count(*) AS total FROM ' + table)).toEqual([
      { total: 0 },
    ]);
  }
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
  for (const table of ['enrolments', 'session_cards', 'ratings']) {
    expect(mockDatabase.getAllSync('SELECT count(*) AS total FROM ' + table)).toEqual([
      { total: 0 },
    ]);
  }
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

it('studies an enrolled Swedish word in production and restores the actual completion summary', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'light' }),
  );
  await renderRouter(routes, { initialUrl: '/discover/word/sv-bok-9992bfa7?language=sv' });
  await fireEvent.press(await screen.findByText('Add to study'));
  await fireEvent.press(await screen.findByText('Learn New'));
  await fireEvent.press(await screen.findByRole('radio', { name: 'English → Swedish' }));
  await fireEvent.press(screen.getByText('Start session'));
  expect(await screen.findByRole('header', { name: 'book' })).toBeOnTheScreen();
  expect(screen.queryByText('Knew It')).toBeNull();
  await waitFor(() => expect(screen.getByRole('button', { name: 'Show answer' })).toBeEnabled());
  await fireEvent.press(screen.getByRole('button', { name: 'Show answer' }));
  expect(await screen.findByText('en bok')).toBeOnTheScreen();
  await fireEvent.press(screen.getByText('Almost'));
  await fireEvent.press(await screen.findByText('Next card'));
  await fireEvent.press(await screen.findByText('Revisit 1 word'));
  await waitFor(() => expect(screen.getByRole('button', { name: 'Show answer' })).toBeEnabled());
  await fireEvent.press(screen.getByRole('button', { name: 'Show answer' }));
  await fireEvent.press(await screen.findByText('Knew It'));
  await fireEvent.press(await screen.findByText('Next card'));
  expect(await screen.findByText('New words studied · 1')).toBeOnTheScreen();
  expect(screen.getByText('Items revisited · 1')).toBeOnTheScreen();
  await fireEvent.press(screen.getByText('Back to Today'));
  expect(screen).toHavePathname('/today');
  expect(
    mockDatabase.getAllSync(
      'SELECT direction,pass,rating FROM learning_evidence_v1 ORDER BY sequence',
    ),
  ).toEqual([
    { direction: 'production', pass: 'first', rating: 'Almost' },
    { direction: 'production', pass: 'revisit', rating: 'Knew It' },
  ]);
});

it('confirms whole-deck enrolment, pauses a revealed card and replaces only after confirmation', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'fi', appearance: 'light' }),
  );
  await renderRouter(routes, { initialUrl: '/discover/deck/fi.essentials?language=fi' });
  await fireEvent.press(await screen.findByText('Start with 5 words'));
  await fireEvent.press(await screen.findByText('Select all remaining'));
  expect(mockDatabase.getAllSync('SELECT count(*) AS n FROM enrolments')).toEqual([{ n: 0 }]);
  await fireEvent.press(screen.getByText('Add 24 to study'));
  expect(await screen.findByText('24 in study · 0 available to add')).toBeOnTheScreen();
  await fireEvent.press(screen.getByText('Learn New'));
  await fireEvent.press(await screen.findByText('Start session'));
  await waitFor(() => expect(screen.getByRole('button', { name: 'Show answer' })).toBeEnabled());
  await fireEvent.press(screen.getByRole('button', { name: 'Show answer' }));
  await fireEvent.press(screen.getByText('Again'));
  await fireEvent.press(await screen.findByText('Next card'));
  await waitFor(() => expect(screen.getByRole('button', { name: 'Show answer' })).toBeEnabled());
  await fireEvent.press(screen.getByRole('button', { name: 'Show answer' }));
  await fireEvent.press(screen.getByLabelText('Close flashcards'));
  await fireEvent.press(await screen.findByText('Leave session'));
  await fireEvent.press(await screen.findByText('Learn New'));
  await fireEvent.press(await screen.findByText('Start a new session'));
  await fireEvent.press(screen.getByText('Keep current session'));
  expect(mockDatabase.getAllSync('SELECT count(*) AS n FROM sessions')).toEqual([{ n: 1 }]);
  await fireEvent.press(screen.getByText('Start a new session'));
  await fireEvent.press(screen.getByText('End and start new'));
  expect(await screen.findByRole('header', { name: 'kiitos' })).toBeOnTheScreen();
  expect(screen.queryByText('Again')).toBeNull();
  expect(mockDatabase.getAllSync('SELECT phase FROM sessions ORDER BY rowid')).toEqual([
    { phase: 'abandoned' },
    { phase: 'first' },
  ]);
  expect(mockDatabase.getAllSync('SELECT rating FROM learning_evidence_v1')).toEqual([
    { rating: 'Again' },
  ]);
});

it('refreshes Today when a due boundary passes and reviews the frozen directions with actual counts', async () => {
  jest.useFakeTimers({ now: Date.UTC(2026, 2, 28, 12) });
  try {
    await AsyncStorage.setItem(
      preferencesKey,
      JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'light' }),
    );
    await renderRouter(routes, { initialUrl: '/discover/word/sv-bok-9992bfa7?language=sv' });
    await fireEvent.press(await screen.findByText('Add to study'));
    await fireEvent.press(await screen.findByText('Learn New'));
    await fireEvent.press(await screen.findByText('Start session'));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Show answer' })).toBeEnabled());
    await fireEvent.press(screen.getByRole('button', { name: 'Show answer' }));
    await fireEvent.press(await screen.findByText('Knew It'));
    await fireEvent.press(await screen.findByText('Next card'));
    // Both persisted directions mature while Today stays mounted.
    const [{ dueAt }] = mockDatabase.getAllSync<{ dueAt: number }>(
      'SELECT min(dueAt) AS dueAt FROM review_state',
    );
    jest.setSystemTime(dueAt - 5000);
    await fireEvent.press(await screen.findByText('Back to Today'));
    expect(await screen.findByText('All caught up.')).toBeOnTheScreen();
    await act(async () => {
      jest.advanceTimersByTime(dueAt - Date.now() - 1);
    });
    expect(screen.queryByRole('button', { name: 'Review 1 word' })).toBeNull();
    await act(async () => {
      jest.advanceTimersByTime(1);
    });
    const due = await screen.findByRole('button', { name: 'Review 1 word' });
    await fireEvent.press(due);
    expect(await screen.findByText('1 of 2')).toBeOnTheScreen();
    expect(screen.getByText('DUE REVIEW')).toBeOnTheScreen();
    for (const rating of ['Again', 'Knew It']) {
      await waitFor(() =>
        expect(screen.getByRole('button', { name: 'Show answer' })).toBeEnabled(),
      );
      await fireEvent.press(screen.getByRole('button', { name: 'Show answer' }));
      await fireEvent.press(await screen.findByText(rating));
      expect(await screen.findByText(/Next (recognition|production) review/)).toBeOnTheScreen();
      await fireEvent.press(await screen.findByText('Next card'));
    }
    await fireEvent.press(await screen.findByText('Finish session'));
    expect(await screen.findByText('Cards reviewed · 2')).toBeOnTheScreen();
    expect(screen.getByText('Distinct words · 1')).toBeOnTheScreen();
    await fireEvent.press(screen.getByText('Back to Today'));
    expect(await screen.findByText('All caught up.')).toBeOnTheScreen();
    expect(
      mockDatabase.getAllSync(
        "SELECT rating,direction FROM learning_evidence_v2 WHERE source='cards.review_due' ORDER BY sequence",
      ),
    ).toEqual([
      { rating: 'Again', direction: 'recognition' },
      { rating: 'Knew It', direction: 'production' },
    ]);
  } finally {
    jest.useRealTimers();
  }
});

it('captures a Swedish sentence, searches its translation, studies it and keeps the authored note behind reveal', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'light' }),
  );
  await renderRouter(routes, { initialUrl: '/my-words' });
  await fireEvent.press(await screen.findByText('Add your first word'));
  await fireEvent.press(await screen.findByText('Sentence'));
  await fireEvent.press(screen.getByText('Save sentence'));
  expect(await screen.findByText(/Enter both/)).toBeOnTheScreen();
  await fireEvent.changeText(
    screen.getByLabelText('Swedish expression'),
    'Jag skulle vilja ha en kopp kaffe.',
  );
  await fireEvent.changeText(
    screen.getByLabelText('English meaning'),
    'I would like a cup of coffee.',
  );
  await fireEvent.press(screen.getByText('Add optional details'));
  await fireEvent.changeText(screen.getByLabelText('Personal note'), 'At the café');
  await fireEvent.press(screen.getByText('Save sentence'));
  expect(await screen.findByText('Saved · Not in study')).toBeOnTheScreen();
  expect(mockDatabase.getAllSync('SELECT * FROM enrolments')).toEqual([]);
  await fireEvent.press(screen.getByLabelText('Back'));
  await fireEvent.changeText(await screen.findByLabelText('Search My Words'), 'coffee');
  await fireEvent.press(screen.getByText('Sentences'));
  await fireEvent.press(
    await screen.findByLabelText(
      'Jag skulle vilja ha en kopp kaffe., I would like a cup of coffee.',
    ),
  );
  await fireEvent.press(await screen.findByText('Add to study'));
  await fireEvent.press(await screen.findByText('Learn New'));
  await fireEvent.press(await screen.findByText('Start session'));
  expect(
    await screen.findByRole('header', { name: 'Jag skulle vilja ha en kopp kaffe.' }),
  ).toBeOnTheScreen();
  expect(screen.queryByText(/At the café/)).toBeNull();
  await waitFor(() => expect(screen.getByRole('button', { name: 'Show answer' })).toBeEnabled());
  await fireEvent.press(screen.getByRole('button', { name: 'Show answer' }));
  expect(await screen.findByText(/At the café/)).toBeOnTheScreen();
  await fireEvent.press(screen.getByText('Knew It'));
  await fireEvent.press(await screen.findByText('Next card'));
  await fireEvent.press(await screen.findByText('Back to word'));
  expect(await screen.findByText('In study · Introduced')).toBeOnTheScreen();
});

it('offers the curated match and preserves the separate draft across a failed combined save', async () => {
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'light' }),
  );
  await renderRouter(routes, { initialUrl: '/my-words' });
  await fireEvent.press(await screen.findByText('Add your first word'));
  await fireEvent.changeText(screen.getByLabelText('Swedish expression'), 'en nyckel');
  await fireEvent.changeText(screen.getByLabelText('English meaning'), 'a key to my apartment');
  await fireEvent.press(screen.getByText('Save and add to study'));
  await fireEvent.press(await screen.findByText('View existing entry'));
  await fireEvent.press(await screen.findByText('Add to study'));
  expect(mockDatabase.getAllSync('SELECT count(*) AS n FROM personal_entries')).toEqual([{ n: 0 }]);
  await fireEvent.press(screen.getByLabelText('Back'));
  mockDatabase.execSync(
    "CREATE TRIGGER fail_capture BEFORE INSERT ON personal_entries BEGIN SELECT RAISE(ABORT,'failed'); END",
  );
  try {
    await fireEvent.press(await screen.findByText('Keep as a separate entry'));
    expect(await screen.findByText(/Your text is still here/)).toBeOnTheScreen();
    expect(screen.getByDisplayValue('a key to my apartment')).toBeOnTheScreen();
  } finally {
    mockDatabase.execSync('DROP TRIGGER fail_capture');
  }
  await fireEvent.press(screen.getByText('Save and add to study'));
  await fireEvent.press(await screen.findByText('Keep as a separate entry'));
  expect(await screen.findByText('In study · New')).toBeOnTheScreen();
  expect(mockDatabase.getAllSync('SELECT count(*) AS n FROM enrolments')).toEqual([{ n: 2 }]);
  expect(mockDatabase.getAllSync('SELECT * FROM ratings')).toEqual([]);
});
