import { Alert, View } from 'react-native';
import { PersonalPage } from './personal-controls';
import { languages } from '../domain/languages';
import { FilePanel } from './portability-panel';
import { useState } from 'react';
import { Button, Type } from '../ui/primitives';
import type { Candidate } from '../domain/interchange/preview';
import {
  keepRemainingSeparate,
  suggestedName,
  type Choices,
  type Choice,
  type ImportPreview,
} from '../learning/portability';

export function unresolved(preview: ImportPreview, choices: Choices) {
  return (
    preview.entries.filter(
      (e) =>
        (e.status === 'similar' || e.status === 'conflict') && !choices.words.has(e.item.wordId),
    ).length +
    preview.collections.filter(
      (e) => e.status === 'conflict' && !choices.collections.has(e.item.collectionId),
    ).length
  );
}
function EntryText({ entry }: { entry: Candidate & { type?: string } }) {
  return (
    <>
      <Type variant="section">{entry.displayForm}</Type>
      <Type>{entry.english}</Type>
      {(
        [
          ['Type', entry.type],
          ['Dictionary form', entry.lemma],
          ['Forms', entry.forms],
          ['Context', entry.context],
          ['Note', entry.note],
        ] as const
      ).map(([label, value]) =>
        value ? (
          <Type key={label}>
            {label} · {value}
          </Type>
        ) : null,
      )}
    </>
  );
}
export function ImportDecisions({
  preview,
  choices,
  update,
  done,
}: {
  preview: ImportPreview;
  choices: Choices;
  update: (choices: Choices) => void;
  done: () => void;
}) {
  const rows = preview.entries.filter((e) => e.status === 'similar' || e.status === 'conflict');
  const groups = preview.collections.filter((e) => e.status === 'conflict');
  const count = rows.length + groups.length;
  function firstPending(decisions: Choices) {
    const entryIndex = rows.findIndex(({ item }) => !decisions.words.has(item.wordId));
    if (entryIndex >= 0) return entryIndex;
    const groupIndex = groups.findIndex(
      ({ item }) => !decisions.collections.has(item.collectionId),
    );
    return groupIndex < 0 ? -1 : rows.length + groupIndex;
  }
  const [index, move] = useState(() => Math.max(0, firstPending(choices))),
    [limit, show] = useState(5);
  const word = rows[index],
    group = groups[index - rows.length];
  const id = word?.item.wordId ?? group?.item.collectionId;
  const collection = !word;
  const current = (collection ? choices.collections : choices.words).get(id);
  const remaining = rows.filter(
    (e) => e.status === 'similar' && !choices.words.has(e.item.wordId),
  ).length;
  function go(n: number) {
    move(n);
    show(5);
  }
  function choose(choice: Choice) {
    const key = collection ? 'collections' : 'words';
    const next = { ...choices, [key]: new Map(choices[key]).set(id, choice) };
    update(next);
    const nextIndex = firstPending(next);
    if (nextIndex >= 0) go(nextIndex);
    else done();
  }
  const candidates = word ? preview.candidates(word.item) : [];
  const name = group ? suggestedName(preview, choices, group.item) : '';
  return (
    <PersonalPage
      key={index}
      title="Review matches"
      language={languages[preview.doc.learningLanguage].name}
      onBack={done}
    >
      <Type variant="eyebrow">
        MATCH {index + 1} OF {count}
      </Type>
      <Type variant="display" accessibilityRole="header">
        Review possible matches.
      </Type>
      <Type>
        {word
          ? word.status === 'conflict'
            ? 'An entry already uses this identity.'
            : 'This expression resembles another entry.'
          : 'The collection identity or name is already in use.'}
      </Type>
      <FilePanel>
        <Type variant="eyebrow">IN YOUR FILE</Type>
        {word ? (
          <EntryText entry={word.item} />
        ) : (
          <>
            <Type variant="section">{group.item.name}</Type>
            <Type>{group.item.description}</Type>
          </>
        )}
      </FilePanel>
      {candidates.slice(0, limit).map((item) => (
        <FilePanel key={item.wordId} match>
          <Type variant="eyebrow">
            {item.wordId.startsWith('personal:') ? 'MY WORDS' : 'CURATED VOCABULARY'}
          </Type>
          <EntryText entry={item} />
          <Button
            label={
              current?.action === 'reuse' && current.id === item.wordId
                ? 'Selected entry'
                : 'Use this existing entry'
            }
            accessibilityLabel={'Use ' + item.displayForm + ' · ' + item.english}
            variant="secondary"
            onPress={() => choose({ action: 'reuse', id: item.wordId })}
          />
        </FilePanel>
      ))}
      {candidates.length > limit && (
        <Button label="Show more matches" variant="secondary" onPress={() => show((n) => n + 5)} />
      )}
      {group?.candidates.map((g) => (
        <FilePanel key={g.collectionId} match>
          <Type variant="eyebrow">ON THIS DEVICE</Type>
          <Type variant="section">{g.name}</Type>
          <Type>{g.description}</Type>
          <Button
            label={
              current?.action === 'reuse' && current.id === g.collectionId
                ? 'Selected collection'
                : 'Use this collection'
            }
            accessibilityLabel={'Use collection ' + g.name}
            variant="secondary"
            onPress={() => choose({ action: 'reuse', id: g.collectionId })}
          />
        </FilePanel>
      ))}
      <Type>
        {collection
          ? 'Reusing a collection adds accepted memberships to it.'
          : 'Reusing a match links memberships to its existing wording and notes. Keeping both saves the incoming wording separately.'}
      </Type>
      {!!current && (
        <Type variant="label">
          Current choice ·{' '}
          {current.action === 'reuse'
            ? 'Use existing'
            : current.action === 'create'
              ? 'Keep separately'
              : 'Skip'}
        </Type>
      )}
      <Button
        label={collection ? 'Create ' + name : 'Keep both'}
        onPress={() => choose(collection ? { action: 'create', name } : { action: 'create' })}
      />
      <Button
        label={collection ? 'Skip collection' : 'Skip entry'}
        variant="secondary"
        onPress={() => choose({ action: 'skip' })}
      />
      {remaining > 0 && (
        <Button
          label={'Keep all separately (' + remaining + ')'}
          variant="secondary"
          onPress={() =>
            Alert.alert(
              'Keep remaining matches separately?',
              remaining +
                ' unresolved similar entries will be saved independently. Your individual choices are preserved.',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Keep all separately',
                  onPress: () => {
                    update(keepRemainingSeparate(preview, choices));
                    done();
                  },
                },
              ],
            )
          }
        />
      )}
      <View style={{ gap: 8 }}>
        {index > 0 && (
          <Button label="Previous match" variant="secondary" onPress={() => go(index - 1)} />
        )}
        {index + 1 < count && (
          <Button label="Next match" variant="secondary" onPress={() => go(index + 1)} />
        )}
        <Button label="Return to preview" variant="secondary" onPress={done} />
      </View>
    </PersonalPage>
  );
}
