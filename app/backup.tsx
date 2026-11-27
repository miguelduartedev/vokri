import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { PersonalPage } from '@/cards/personal-controls';
import { FilePanel } from '@/cards/portability-panel';
import { usePreferences } from '@/preferences/context';
import { useRestore } from '@/backup/boundary';
import { BackupError } from '@/backup/format';
import { chooseBackup, createBackup, discardCandidate, type Candidate } from '@/backup/native';
import { saveBackup, shareBackup } from '@/backup/files';
import { languages } from '@/domain/languages';
import { Type, Button } from '@/ui/primitives';

export default function BackupPage() {
  const picking = useLocalSearchParams<{ mode?: string }>().mode === 'restore';
  const { store } = usePreferences(),
    restore = useRestore();
  const [candidate, setCandidate] = useState<Candidate>(),
    [output, setOutput] = useState<Awaited<ReturnType<typeof createBackup>>>();
  const [busy, setBusy] = useState(''),
    [message, setMessage] = useState('');
  const lock = useRef(false),
    mounted = useRef(true),
    owned = useRef<Candidate | undefined>(undefined);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (owned.current) discardCandidate(owned.current);
    };
  }, []);
  const summary = candidate?.summary ?? output?.summary,
    header = candidate?.header ?? output?.header;
  async function run(label: string, action: () => Promise<void>) {
    if (lock.current) return;
    lock.current = true;
    setBusy(label);
    setMessage('');
    try {
      await action();
    } catch (error) {
      if (mounted.current)
        setMessage(
          error instanceof BackupError
            ? error.message
            : 'This operation could not finish. Check the file and available storage, then try again.',
        );
    } finally {
      lock.current = false;
      if (mounted.current) setBusy('');
    }
  }
  async function pick() {
    if (owned.current) discardCandidate(owned.current);
    owned.current = undefined;
    setCandidate(undefined);
    const value = await chooseBackup();
    if (!value) return;
    if (!mounted.current) {
      discardCandidate(value);
      return;
    }
    owned.current = value;
    setCandidate(value);
  }
  function confirm() {
    if (!candidate || lock.current) return;
    Alert.alert(
      'Replace your current data?',
      'Your current vocabulary, learning progress, review schedules and app settings will be replaced with this backup.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Replace and restore',
          style: 'destructive',
          onPress: () => {
            if (owned.current !== candidate) return;
            owned.current = undefined;
            restore(candidate, store);
          },
        },
      ],
      { cancelable: true },
    );
  }
  return (
    <PersonalPage
      title="Backup & Restore"
      language=""
      onBack={() => (router.canGoBack() ? router.back() : router.replace('/settings'))}
    >
      <Type variant="display" accessibilityRole="header">
        {picking ? (candidate ? 'Restore preview' : 'Restore from backup') : 'Full local backup'}
      </Type>
      <Type>
        {picking
          ? candidate
            ? 'Review the saved contents for both languages.'
            : 'Choose a .vokribackup file to preview your saved data.'
          : 'Keep both languages, collections, learning history, review schedules, unfinished sessions and app preferences together.'}
      </Type>
      {!picking && (
        <Type>
          Backup files are unencrypted. Anyone with the file can read your vocabulary and personal
          notes.
        </Type>
      )}
      {summary && header && (
        <>
          <FilePanel>
            <Type variant="eyebrow">CREATED</Type>
            <Type variant="section">{new Date(header.createdAt).toLocaleString()}</Type>
            <Type>
              {header.preferences?.activeLearningLanguage
                ? languages[header.preferences.activeLearningLanguage].name
                : 'No language selected'}{' '}
              · {header.preferences?.appearance ?? 'system'} appearance
            </Type>
          </FilePanel>
          {summary.languages.map((l) => (
            <FilePanel key={l.language}>
              <Type variant="section">{languages[l.language].name}</Type>
              <Type>
                Personal entries {l.personal} · Archived {l.archived} · Collections {l.collections}
              </Type>
              <Type>
                Enrolled {l.enrolled} · Ratings {l.ratings} · Directional schedules {l.schedules}
              </Type>
              <Type>
                Open sessions {l.open} ·{' '}
                {header.preferences?.directions?.[l.language] ?? 'recognition'} direction
              </Type>
            </FilePanel>
          ))}
          {(candidate?.catalogueChanged || !!summary.missing) && (
            <Type>
              The bundled catalogue differs. Unavailable vocabulary references ({summary.missing})
              retain their history.
            </Type>
          )}
        </>
      )}
      {!!busy && (
        <>
          <ActivityIndicator />
          <Type accessibilityLiveRegion="polite">{busy}</Type>
        </>
      )}
      {!!message && <Type accessibilityLiveRegion="polite">{message}</Type>}
      {picking ? (
        <>
          {candidate && (
            <>
              <Type>Restoring replaces your current data for both languages.</Type>
              <Button disabled={!!busy} label="Restore this backup" onPress={confirm} />
            </>
          )}
          <Button
            variant={candidate ? 'secondary' : 'primary'}
            disabled={!!busy}
            label={candidate ? 'Choose a different file' : 'Choose backup file'}
            onPress={() => void run('Checking backup…', pick)}
          />
        </>
      ) : output ? (
        <>
          {Platform.OS === 'android' && (
            <Button
              label="Save to folder"
              disabled={!!busy}
              onPress={() =>
                void run('Saving backup…', async () => {
                  const name = await saveBackup(output.file);
                  if (name) setMessage('Saved ' + name);
                })
              }
            />
          )}
          <Button
            variant={Platform.OS === 'android' ? 'secondary' : 'primary'}
            disabled={!!busy}
            label="Share backup"
            onPress={() => void run('Opening sharing…', () => shareBackup(output.file))}
          />
        </>
      ) : (
        <Button
          disabled={!!busy}
          label="Create backup"
          onPress={() =>
            void run('Creating backup…', async () => {
              const result = await createBackup(store);
              if (mounted.current) setOutput(result);
            })
          }
        />
      )}
    </PersonalPage>
  );
}
