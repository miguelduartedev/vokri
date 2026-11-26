import { useRef, useState } from 'react';
import { Platform } from 'react-native';
import { useLanguage } from '@/cards/discover-controls';
import { PersonalPage } from '@/cards/personal-controls';
import { fileIssue, saveVocabulary, shareVocabulary } from '@/cards/portability-files';
import { countLabel, FilePanel } from '@/cards/portability-panel';
import { languages, type LearningLanguage } from '@/domain/languages';
import { useLearning } from '@/learning/provider';
import { Button, Type } from '@/ui/primitives';

export default function ExportVocabulary() {
  const language = useLanguage();
  return language ? <ExportPage key={language} language={language} /> : null;
}
function ExportPage({ language }: { language: LearningLanguage }) {
  const store = useLearning();
  const [message, setMessage] = useState(''),
    [busy, setBusy] = useState(false);
  const lock = useRef(false);
  function read() {
    try {
      return { data: store.vocabularyExport(language) };
    } catch (e) {
      return { error: fileIssue(e, 'Your vocabulary could not be read. Try again.') };
    }
  }
  const [snapshot, setSnapshot] = useState(read);
  const data = snapshot.data;
  async function send(save: boolean) {
    if (lock.current || !data) return;
    lock.current = true;
    setBusy(true);
    setMessage('');
    try {
      if (save) {
        const name = await saveVocabulary(data);
        if (name) setMessage('Saved ' + name);
      } else if (!(await shareVocabulary(data)))
        setMessage('Sharing is unavailable on this device.');
    } catch {
      setMessage(
        'The file could not be written or shared. Choose another destination and try again.',
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  return (
    <PersonalPage title="Export vocabulary" language={languages[language].name}>
      <Type variant="eyebrow">YOUR LOCAL DATA</Type>
      <Type variant="display" accessibilityRole="header">
        Keep a copy.
      </Type>
      <Type>Save your personal {languages[language].name} vocabulary and collections.</Type>
      {data ? (
        <>
          <FilePanel>
            <Type variant="eyebrow">READY TO EXPORT</Type>
            <Type variant="section">
              {countLabel(data.entries, 'personal entry', 'personal entries')}
            </Type>
            <Type>
              {countLabel(data.types[0], 'word')} · {countLabel(data.types[1], 'phrase')} ·{' '}
              {countLabel(data.types[2], 'sentence')}
            </Type>
          </FilePanel>
          <FilePanel>
            <Type variant="eyebrow">COLLECTIONS</Type>
            <Type variant="section">{countLabel(data.collections, 'collection')}</Type>
            <Type>Includes their vocabulary references.</Type>
          </FilePanel>
          <FilePanel>
            <Type variant="label">Portable JSON file</Type>
            <Type>{data.filename}</Type>
            <Type>Learning progress, review schedules and app settings are excluded.</Type>
          </FilePanel>
          {Platform.OS === 'android' && (
            <Button label="Save to folder" disabled={busy} onPress={() => void send(true)} />
          )}
          <Button
            label="Share file"
            variant={Platform.OS === 'android' ? 'secondary' : 'primary'}
            disabled={busy}
            onPress={() => void send(false)}
          />
        </>
      ) : (
        <>
          <Type accessibilityRole="alert">{snapshot.error}</Type>
          <Button label="Try again" onPress={() => setSnapshot(read())} />
        </>
      )}
      {!!message && <Type accessibilityLiveRegion="polite">{message}</Type>}
    </PersonalPage>
  );
}
