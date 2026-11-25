import { useEffect, useRef, useState } from 'react';
import { BackHandler } from 'react-native';
import { countLabel, FilePanel } from '@/cards/portability-panel';
import { router } from 'expo-router';
import { useLanguage } from '@/cards/discover-controls';
import { PersonalPage } from '@/cards/personal-controls';
import { ImportDecisions, unresolved } from '@/cards/import-decisions';
import { fileIssue, pickVocabulary } from '@/cards/portability-files';
import { languages } from '@/domain/languages';
import { useLearning } from '@/learning/provider';
import { freshChoices, StalePreview, type ImportPreview } from '@/learning/portability';
import { Button, Type } from '@/ui/primitives';

export default function ImportVocabulary() {
  const language = useLanguage(),
    store = useLearning();
  const [picked, setPicked] = useState<Awaited<ReturnType<typeof pickVocabulary>>>(null);
  const [preview, setPreview] = useState<ImportPreview>(),
    [choices, update] = useState(freshChoices);
  const [result, setResult] = useState<ReturnType<typeof store.importVocabulary>>();
  const [review, setReview] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState('');
  const [stale, setStale] = useState(false),
    [edgeLimit, setEdgeLimit] = useState(5);
  const lock = useRef(false);
  useEffect(() => {
    if (!review) return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      setReview(false);
      return true;
    });
    return () => sub.remove();
  }, [review]);
  function inspect(file: NonNullable<typeof picked>) {
    try {
      setPreview(store.importPreview(file.document));
      update(freshChoices());
      setError('');
      setStale(false);
      setReview(false);
    } catch (e) {
      setError(fileIssue(e, 'Your vocabulary could not be read. Try the preview again.'));
    }
  }
  async function select() {
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setError('');
    try {
      const file = await pickVocabulary();
      if (file) {
        setPicked(file);
        if (file.document.learningLanguage === language) inspect(file);
      }
    } catch (e) {
      setError(
        fileIssue(e, 'The file could not be read. Choose a local vocabulary file and try again.'),
      );
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  async function confirm() {
    if (!preview || lock.current) return;
    lock.current = true;
    setBusy(true);
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    try {
      setResult(store.importVocabulary(preview, choices));
      setError('');
    } catch (e) {
      lock.current = false;
      setStale(e instanceof StalePreview);
      setError(
        e instanceof StalePreview
          ? e.message
          : 'The import could not be saved. All changes were rolled back. You can retry.',
      );
    } finally {
      setBusy(false);
    }
  }
  if (!language) return null;
  const target = picked?.document.learningLanguage ?? language,
    name = languages[target].name;
  const pending = preview ? unresolved(preview, choices) : 0;
  const issues = preview
    ? preview.summary.identityConflicts +
      preview.summary.possibleDuplicates +
      preview.collections.filter((c) => c.status === 'conflict').length
    : 0;
  if (review && preview)
    return (
      <ImportDecisions
        preview={preview}
        choices={choices}
        update={update}
        done={() => setReview(false)}
      />
    );
  return (
    <PersonalPage
      key={result ? 'complete' : preview ? 'preview' : 'pick'}
      onBack={() => router.dismissTo('/settings')}
      title="Import vocabulary"
      language={name}
    >
      {!!error && <Type accessibilityRole="alert">{error}</Type>}
      {result ? (
        <>
          <Type variant="eyebrow">IMPORT COMPLETE</Type>
          <Type variant="display" accessibilityRole="header">
            {result.entriesAdded + result.collectionsAdded + result.membershipsAdded
              ? 'Vocabulary imported.'
              : 'No additions needed.'}
          </Type>
          <FilePanel>
            <Type variant="section">{name} vocabulary</Type>
            <Type>
              {countLabel(result.entriesAdded, 'entry', 'entries')} added · {result.entriesReused}{' '}
              reused · {result.entriesSkipped} skipped
            </Type>
            <Type>
              {countLabel(result.collectionsAdded, 'collection', 'collections')} created ·{' '}
              {result.collectionsReused} reused · {result.collectionsSkipped} skipped
            </Type>
            <Type>
              {countLabel(result.membershipsAdded, 'membership', 'memberships')} added ·{' '}
              {result.membershipsSkipped} skipped
            </Type>
          </FilePanel>
          <Button
            label={target === language ? 'Open My Words' : 'Back to Settings'}
            onPress={() =>
              target === language ? router.dismissTo('/my-words') : router.dismissTo('/settings')
            }
          />
        </>
      ) : preview && picked ? (
        <>
          <Type variant="eyebrow">IMPORT PREVIEW</Type>
          <Type variant="display" accessibilityRole="header">
            Review before you add.
          </Type>
          <FilePanel>
            <Type variant="eyebrow">YOUR FILE</Type>
            <Type variant="label">{picked.name}</Type>
            <Type>
              {name} · {countLabel(preview.summary.entries, 'entry', 'entries')} ·{' '}
              {countLabel(preview.summary.collections, 'collection', 'collections')} ·{' '}
              {countLabel(preview.summary.memberships, 'membership', 'memberships')}
            </Type>
          </FilePanel>
          <FilePanel>
            <Type variant="section">Ready to import</Type>
            <Type>
              {countLabel(preview.summary.newEntries, 'new entry', 'new entries')} ·{' '}
              {countLabel(
                preview.summary.matchingIdentities,
                'matching identity',
                'matching identities',
              )}
            </Type>
            <Type>New entries are saved in My Words. You can enrol them later.</Type>
          </FilePanel>
          {issues > 0 && (
            <FilePanel>
              <Type variant="section">Requires attention</Type>
              <Type>
                {countLabel(preview.summary.possibleDuplicates, 'similar entry', 'similar entries')}{' '}
                ·{' '}
                {countLabel(
                  preview.summary.identityConflicts,
                  'identity conflict',
                  'identity conflicts',
                )}{' '}
                ·{' '}
                {countLabel(
                  preview.collections.filter((g) => g.status === 'conflict').length,
                  'collection conflict',
                  'collection conflicts',
                )}
              </Type>
              <Button
                label={'Review matches · ' + pending + ' remaining'}
                variant="secondary"
                onPress={() => setReview(true)}
              />
            </FilePanel>
          )}
          {!!preview.missing.size && (
            <FilePanel>
              <Type variant="section">Unavailable curated vocabulary</Type>
              <Type>{preview.missingEdges.length} memberships refer to unavailable items.</Type>
              {preview.missingEdges.slice(0, edgeLimit).map((m) => (
                <Type key={JSON.stringify([m.collectionId, m.wordId])}>
                  {preview.doc.collections.find((c) => c.collectionId === m.collectionId)?.name} ·{' '}
                  {m.wordId}
                </Type>
              ))}
              {preview.missingEdges.length > edgeLimit && (
                <Button
                  label="Show more references"
                  variant="secondary"
                  onPress={() => setEdgeLimit((n) => n + 5)}
                />
              )}
              <Button
                label={
                  choices.skipMissing
                    ? 'Unavailable references will be skipped'
                    : 'Skip unavailable references'
                }
                variant="secondary"
                onPress={() => update({ ...choices, skipMissing: !choices.skipMissing })}
              />
            </FilePanel>
          )}
          {stale ? (
            <Button label="Refresh preview" onPress={() => inspect(picked)} />
          ) : (
            <Button
              label={busy ? 'Importing…' : 'Confirm import'}
              disabled={busy || !!pending || (!!preview.missing.size && !choices.skipMissing)}
              onPress={() => void confirm()}
            />
          )}
          <Button
            label="Cancel import"
            variant="secondary"
            onPress={() => router.dismissTo('/settings')}
          />
        </>
      ) : picked ? (
        <>
          <Type variant="display">Import into {name}?</Type>
          <Type>
            {picked.name} contains {name} vocabulary. Your current learning language is{' '}
            {languages[language].name}.
          </Type>
          <Button label={'Preview ' + name + ' vocabulary'} onPress={() => inspect(picked)} />
          <Button
            label="Cancel import"
            variant="secondary"
            onPress={() => router.dismissTo('/settings')}
          />
        </>
      ) : (
        <>
          <Type variant="eyebrow">VOCABULARY IMPORT</Type>
          <Type variant="display" accessibilityRole="header">
            Bring your words.
          </Type>
          <Type>
            Choose a Vokri Cards vocabulary file. You can review its entries, collections and
            possible matches before saving.
          </Type>
          <Button
            label={busy ? 'Opening file…' : 'Choose JSON file'}
            disabled={busy}
            onPress={() => void select()}
          />
        </>
      )}
    </PersonalPage>
  );
}
