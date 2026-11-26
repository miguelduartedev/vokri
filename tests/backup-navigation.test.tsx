import path from 'node:path';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { act, fireEvent, renderRouter, screen } from 'expo-router/testing-library';
import { openDatabaseAsync } from 'expo-sqlite';
import { testDatabase } from './learning-db';
import { chooseBackup, restoreBackup, recoverStartup, type Candidate } from '@/backup/native';
import { preferencesKey } from '@/preferences/store';
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  useFonts: () => [true, null],
}));
jest.mock('expo-sqlite', () => ({ openDatabaseAsync: jest.fn() }));
jest.mock('@/backup/native', () => ({
  ...jest.requireActual('@/backup/native'),
  chooseBackup: jest.fn(),
  recoverStartup: jest.fn(),
  restoreBackup: jest.fn(),
  discardCandidate: jest.fn(),
}));
it('gates both providers on recovery, previews before destructive confirmation and rehydrates the restored preferences', async () => {
  const db = testDatabase();
  jest
    .mocked(openDatabaseAsync)
    .mockResolvedValue(db as Awaited<ReturnType<typeof openDatabaseAsync>>);
  const incoming = { schemaVersion: 1, activeLearningLanguage: 'sv', appearance: 'dark' };
  await AsyncStorage.setItem(
    preferencesKey,
    JSON.stringify({ ...incoming, activeLearningLanguage: 'fi', appearance: 'light' }),
  );
  jest.mocked(recoverStartup).mockRejectedValueOnce(Error('read error')).mockResolvedValue(null);
  const example = {
    header: { createdAt: '2026-11-26T08:00:00Z', preferences: incoming },
    summary: {
      languages: [
        {
          language: 'sv',
          personal: 3,
          archived: 2,
          collections: 1,
          enrolled: 5,
          ratings: 9,
          schedules: 4,
          open: 1,
        },
      ],
      missing: 0,
    },
  };
  jest.mocked(chooseBackup).mockResolvedValue(example as Candidate);
  jest
    .mocked(restoreBackup)
    .mockImplementation(async () => AsyncStorage.setItem(preferencesKey, JSON.stringify(incoming)));
  const alert = jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  const ui = await renderRouter(path.resolve(__dirname, '../app'), { initialUrl: '/settings' });
  try {
    expect(await screen.findByText('Recovery needs attention')).toBeOnTheScreen();
    expect(openDatabaseAsync).not.toHaveBeenCalled();
    await fireEvent.press(screen.getByText('Retry recovery'));
    await fireEvent.press(await screen.findByText('Restore from backup'));
    await fireEvent.press(await screen.findByText('Choose backup file'));
    expect(await screen.findByText('Restore preview')).toBeOnTheScreen();
    expect(screen.getByText(/Ratings 9/)).toBeOnTheScreen();
    await fireEvent.press(screen.getByText('Restore this backup'));
    expect(restoreBackup).not.toHaveBeenCalled();
    const buttons = alert.mock.lastCall![2]!;
    expect(buttons.find((b) => b.text === 'Cancel')?.style).toBe('cancel');
    const confirm = buttons.find((b) => b.style === 'destructive')!.onPress!;
    await act(async () => {
      confirm();
      confirm();
    });
    expect(restoreBackup).toHaveBeenCalledTimes(1);
    await fireEvent.press(await screen.findByText('Continue'));
    const restored = await screen.findByLabelText(/Learning language, Swedish/);
    expect(restored).toBeOnTheScreen();
  } finally {
    alert.mockRestore();
    await ui.unmount();
    db.closeSync();
  }
});
