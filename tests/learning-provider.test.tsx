import { Activity } from 'react';
import { Text } from 'react-native';
import { act, render, screen } from '@testing-library/react-native';
import { openDatabaseAsync } from 'expo-sqlite';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { LearningProvider, useInventory } from '@/learning/provider';
import { openLearningStore } from '@/learning/native';
import { testDatabase } from './learning-db';

jest.mock('expo-sqlite', () => ({ openDatabaseAsync: jest.fn() }));

function Inventory() {
  const { enrolled } = useInventory('fi');
  return <Text>{enrolled.size} enrolled</Text>;
}
it('retains the application connection when React hides and restores a live learner screen', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'vokri-provider-'));
  const path = join(directory, 'study.sqlite');
  const first = testDatabase(path);
  type NativeDatabase = Awaited<ReturnType<typeof openDatabaseAsync>>;
  jest.mocked(openDatabaseAsync).mockResolvedValueOnce(first as NativeDatabase);
  const tree = (mode: 'visible' | 'hidden') => (
    <Activity mode={mode}>
      <LearningProvider>
        <Inventory />
      </LearningProvider>
    </Activity>
  );
  const ui = await render(tree('visible'));
  try {
    await screen.findByText('0 enrolled');
    await ui.rerender(tree('hidden'));
    await act(async () => {
      (await openLearningStore()).enrol('fi', ['vocab.mina']);
    });
    await ui.rerender(tree('visible'));
    expect(openDatabaseAsync).toHaveBeenCalledTimes(1);
    expect(await screen.findByText('1 enrolled')).toBeOnTheScreen();
  } finally {
    await ui.unmount();
    first.closeSync();
    rmSync(directory, { recursive: true, force: true });
  }
});
