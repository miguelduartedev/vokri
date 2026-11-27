import { CheckRow, useCollectionStore } from '@/cards/collection-controls';
import { Redirect, router, useLocalSearchParams, usePreventRemove } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { languages, type LearningLanguage } from '@/domain/languages';
import {
  blankDraft,
  entryTypes,
  materialChange,
  personalPrefix,
  validDraft,
  type PersonalDraft,
  type PersonalEntry,
} from '@/domain/learning/personal';
import { useLearning } from '@/learning/provider';
import { Button, Surface, Type } from '@/ui/primitives';
import { Chips, Field, openEntry, PersonalPage } from '@/cards/personal-controls';
import { useLanguage } from '@/cards/discover-controls';
export default function EditorRoute() {
  const active = useLanguage(),
    store = useLearning(),
    p = useLocalSearchParams<{ language: string; id?: string }>();
  if (!active || p.language !== active) return <Redirect href="/my-words" />;
  const entry = p.id ? store.personal(active, p.id) : undefined;
  if (p.id && !entry) return <Redirect href="/my-words" />;
  return <Editor key={active + (p.id ?? 'new')} language={active} entry={entry} />;
}
function Editor({ language, entry }: { language: LearningLanguage; entry?: PersonalEntry }) {
  const store = useLearning();
  const [original] = useState(entry),
    [id] = useState(() => entry?.wordId ?? store.newPersonalId());
  const initial: PersonalDraft = original ?? blankDraft;
  const [draft, setDraft] = useState(initial),
    [details, setDetails] = useState(false),
    [error, setError] = useState(''),
    [done, setDone] = useState(false);
  const [duplicates, setDuplicates] = useState<ReturnType<typeof store.matches>>([]),
    [combined, setCombined] = useState(false);
  const collections = useCollectionStore().collections(language);
  const [selected, setSelected] = useState<string[]>([]);
  const [articleOnly, setArticleOnly] = useState(false);
  const busy = useRef(false);
  const name = languages[language].name;
  const unguard = usePreventRemove(
    !done && (selected.length > 0 || JSON.stringify(initial) !== JSON.stringify(draft)),
    ({ repeat }) =>
      Alert.alert('Discard changes?', 'Your unsaved text will be lost.', [
        { text: 'Keep editing', style: 'cancel' },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => {
            setDone(true);
            repeat();
          },
        },
      ]),
  );
  function change<K extends keyof PersonalDraft>(key: K, value: PersonalDraft[K]) {
    if (key === 'displayForm') setArticleOnly(false);
    setDraft((prev) => ({ ...prev, [key]: value }));
    setError('');
  }
  function commit(enrol: boolean, confirmReset = false) {
    if (busy.current) return;
    busy.current = true;
    try {
      store.saveEntry(language, id, draft, {
        original,
        enrol,
        confirmReset,
        collections: selected,
      });
      setDone(true);
      unguard();
      if (original && router.canGoBack()) router.back();
      else openEntry(language, id, true);
    } catch (e) {
      setError(
        e instanceof Error && /Reopen/.test(e.message)
          ? e.message
          : 'Your entry could not be saved. Your text is still here.',
      );
      busy.current = false;
    }
  }
  function save(enrol: boolean, keepSeparate = false) {
    Keyboard.dismiss();
    setError('');
    if (articleOnly) {
      setError('Enter the noun after its article.');
      return;
    }
    if (!validDraft(draft)) {
      setError('Enter both the ' + name + ' expression and its English meaning.');
      return;
    }
    if (!keepSeparate && (!original || materialChange(original, draft))) {
      const matches = store.matches(language, draft, id);
      if (matches.length) {
        setDuplicates(matches);
        setCombined(enrol);
        return;
      }
    }
    setDuplicates([]);
    if (original && materialChange(original, draft) && store.hasStudyHistory(language, id)) {
      Alert.alert(
        'Restart study progress?',
        'Changing the expression or meaning restarts both recall directions. Earlier ratings stay in your history and the edited entry can be learned again.',
        [
          { text: 'Keep editing', style: 'cancel' },
          { text: 'Save and restart', onPress: () => commit(enrol, true) },
        ],
      );
    } else commit(enrol);
  }
  const field = (key: Exclude<keyof PersonalDraft, 'type'>, label: string, multiline = true) => (
    <Field
      label={label}
      value={draft[key]}
      onChangeText={(v) => change(key, v)}
      multiline={multiline}
    />
  );
  return (
    <PersonalPage
      title={duplicates.length ? 'Possible duplicate' : original ? 'Edit entry' : 'Add to My Words'}
      language={name}
    >
      {duplicates.length ? (
        <>
          <Type variant="eyebrow">BEFORE YOU SAVE</Type>
          <Type variant="display">This looks familiar.</Type>
          {duplicates.map((m) => (
            <Surface key={m.wordId}>
              <Type variant="title">{m.displayForm}</Type>
              <Type>{m.english}</Type>
              <Type variant="caption">
                {m.wordId.startsWith(personalPrefix) ? 'Personal vocabulary' : 'Curated vocabulary'}
              </Type>
              <Button
                label="View existing entry"
                accessibilityLabel={'View existing entry: ' + m.displayForm + ', ' + m.english}
                onPress={() =>
                  m.wordId.startsWith(personalPrefix)
                    ? openEntry(language, m.wordId)
                    : router.push({
                        pathname: '/discover/word/[wordId]',
                        params: { language, wordId: m.wordId },
                      })
                }
              />
            </Surface>
          ))}
          <Button
            variant="secondary"
            label={original ? 'Save changes to this entry' : 'Keep as a separate entry'}
            onPress={() => save(combined, true)}
          />
          <Button variant="secondary" label="Back to editing" onPress={() => setDuplicates([])} />
        </>
      ) : (
        <>
          <Type variant="eyebrow">MY WORDS / {original ? 'EDIT' : 'QUICK CAPTURE'}</Type>
          <Type variant="display" accessibilityRole="header">
            {original ? 'Edit your entry.' : 'A word worth keeping.'}
          </Type>
          <Chips values={entryTypes} value={draft.type} onSelect={(v) => change('type', v)} />
          {field('displayForm', name + ' expression', draft.type !== 'Word')}
          {language === 'sv' && draft.type === 'Word' && (
            <View style={{ gap: 6 }}>
              <Type variant="caption">Noun article (optional)</Type>
              <Chips
                values={['No article', 'en', 'ett'] as const}
                value={
                  /^en\s/i.test(draft.displayForm)
                    ? 'en'
                    : /^ett\s/i.test(draft.displayForm)
                      ? 'ett'
                      : 'No article'
                }
                onSelect={(article) => {
                  const bare = draft.displayForm.replace(/^(en|ett)\s+/i, '');
                  change('displayForm', (article === 'No article' ? '' : article + ' ') + bare);
                  setArticleOnly(article !== 'No article' && !bare.trim());
                }}
              />
            </View>
          )}
          {field('english', 'English meaning', draft.type !== 'Word')}
          <Button
            label={details ? 'Hide optional details' : 'Add optional details'}
            accessibilityState={{ expanded: details }}
            variant="secondary"
            onPress={() => setDetails(!details)}
          />
          {details && (
            <>
              {!original && collections.length > 0 && (
                <>
                  <Type variant="label">Collections (optional)</Type>
                  {collections.map((c) => (
                    <CheckRow
                      key={c.id}
                      name={c.name}
                      checked={selected.includes(c.id)}
                      toggle={() =>
                        setSelected((prev) =>
                          prev.includes(c.id) ? prev.filter((id) => id !== c.id) : [...prev, c.id],
                        )
                      }
                    />
                  ))}
                </>
              )}
              {field('note', 'Personal note')}
              {field('context', 'Example or context')}
              {field('lemma', 'Dictionary form', false)}
              {field('forms', language === 'fi' ? 'Spoken form' : 'Other forms')}
            </>
          )}
          {!!error && <Type accessibilityRole="alert">{error}</Type>}
          <Button
            label={original ? 'Save changes' : 'Save ' + draft.type.toLowerCase()}
            onPress={() => save(false)}
          />
          {!original && (
            <Button variant="secondary" label="Save and add to study" onPress={() => save(true)} />
          )}
        </>
      )}
    </PersonalPage>
  );
}
