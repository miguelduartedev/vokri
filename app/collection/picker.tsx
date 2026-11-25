import { Redirect, router, useLocalSearchParams, usePreventRemove } from 'expo-router';
import { useMemo, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { languages, type LearningLanguage } from '@/domain/languages';
import { browseVocabulary } from '@/domain/vocabulary/catalogue';
import { searchEntries, searchKey } from '@/domain/learning/personal';
import { useLanguage } from '@/cards/discover-controls';
import { CheckRow, useCollectionStore } from '@/cards/collection-controls';
import { Field } from '@/cards/personal-controls';
import { Button, Control, Icon, Type } from '@/ui/primitives';
import { useTheme } from '@/ui/theme';
import { useLearningAction } from '@/cards/study-controls';

export default function PickerRoute() {
  const p = useLocalSearchParams<{ language: string; collectionId?: string; wordId?: string }>(),
    language = useLanguage(),
    store = useCollectionStore();
  if (!language || language !== p.language) return <Redirect href="/my-words/collections" />;
  if (!!p.collectionId === !!p.wordId) return <Redirect href="/my-words/collections" />;
  const subject = p.collectionId
    ? store.collection(language, p.collectionId)?.name
    : store.resolve(language, p.wordId ?? '')?.content.displayForm;
  if (!subject) return <Redirect href="/my-words/collections" />;
  return (
    <Picker
      key={language + (p.collectionId ?? p.wordId)}
      language={language}
      collectionId={p.collectionId}
      wordId={p.wordId}
      subject={subject}
    />
  );
}
function Picker({
  language,
  collectionId,
  wordId,
  subject,
}: {
  language: LearningLanguage;
  collectionId?: string;
  wordId?: string;
  subject: string;
}) {
  const store = useCollectionStore(),
    { colors } = useTheme(),
    { run, error } = useLearningAction();
  const [query, setQuery] = useState(''),
    [changes, setChanges] = useState(new Map<string, boolean>());
  const unguard = usePreventRemove(changes.size > 0, ({ repeat }) =>
    Alert.alert('Discard membership changes?', 'Your previous selection will be kept.', [
      { text: 'Keep choosing', style: 'cancel' },
      {
        text: 'Discard',
        style: 'destructive',
        onPress: () => {
          setChanges(new Map());
          repeat();
        },
      },
    ]),
  );
  const original = new Set(
    collectionId ? store.memberIds(language, collectionId) : store.memberships(language, wordId!),
  );
  const revision = store.getRevision();
  // Keep the catalogue search stable while the learner toggles checkboxes.
  const all = useMemo(
    () =>
      collectionId
        ? [
            ...searchEntries(store.entries(language), query),
            ...browseVocabulary(language, query),
          ].map((i) => ({ id: i.wordId, name: i.displayForm, detail: i.english }))
        : store
            .collections(language)
            .filter((c) => searchKey(c.name).includes(searchKey(query)))
            .map((c) => ({
              id: c.id,
              name: c.name,
              detail: c.count + (c.count === 1 ? ' item' : ' items'),
            })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query, collectionId, language, store, revision],
  );
  const selectedIds = new Set(original);
  for (const [id, selected] of changes) {
    if (selected) selectedIds.add(id);
    else selectedIds.delete(id);
  }
  function toggle(id: string) {
    setChanges((prev) => {
      const next = new Map(prev);
      const checked = !(prev.get(id) ?? original.has(id));
      if (checked === original.has(id)) next.delete(id);
      else next.set(id, checked);
      return next;
    });
  }
  function back() {
    if (router.canGoBack()) router.back();
    else router.replace('/my-words/collections');
  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background, paddingHorizontal: 24, gap: 10 }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Control accessibilityLabel="Back" onPress={back}>
          <Icon name="back" tint={colors.ink} />
        </Control>
        <Type variant="label" style={{ flex: 1 }}>
          {subject}
        </Type>
      </View>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={all}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ gap: 10, paddingBottom: 12 }}
        ListHeaderComponent={
          <View style={{ gap: 12 }}>
            <Type variant="eyebrow">
              {languages[language].name.toUpperCase()} / COLLECTION MEMBERSHIP
            </Type>
            <Type variant="display">{collectionId ? 'Add items.' : 'Choose collections.'}</Type>
            <Type variant="caption">Select or clear memberships. Study enrolment is separate.</Type>
            <Field
              label={collectionId ? 'Find vocabulary' : 'Find collections'}
              value={query}
              onChangeText={setQuery}
            />
            {!collectionId && (
              <Button
                variant="secondary"
                label="Create a collection"
                onPress={() =>
                  router.push({ pathname: '/collection/edit', params: { language, picker: '1' } })
                }
              />
            )}
          </View>
        }
        ListEmptyComponent={
          <Type>{query ? 'No matches.' : 'Create a collection to organize this entry.'}</Type>
        }
        renderItem={({ item }) => (
          <CheckRow
            name={item.name}
            detail={item.detail}
            checked={selectedIds.has(item.id)}
            toggle={() => toggle(item.id)}
          />
        )}
      />
      {!!error && <Type accessibilityRole="alert">{error}</Type>}
      <View style={{ paddingBottom: 8, gap: 6 }}>
        <Type variant="caption" accessibilityLiveRegion="polite">
          {selectedIds.size} selected
        </Type>
        <Button
          label="Save membership"
          onPress={() =>
            run(() => {
              if (changes.size)
                store.changeMemberships(
                  language,
                  [...changes].map(([id, selected]) => ({
                    collectionId: collectionId ?? id,
                    wordId: wordId ?? id,
                    selected,
                  })),
                );
              setChanges(new Map());
              unguard();
              back();
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}
