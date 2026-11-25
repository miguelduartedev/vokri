import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { useLanguage, DiscoverPage } from '@/cards/discover-controls';
import { useCollectionStore, MyWordsSections, SectionAction } from '@/cards/collection-controls';
import { useDailyLearning } from '@/cards/use-daily-learning';
import { CardsHeader } from '@/cards/controls';
import { Field, Chips, openEntry } from '@/cards/personal-controls';
import { openStudy, StudyStart, useLearningAction } from '@/cards/study-controls';
import { Button, Control, Surface, Type } from '@/ui/primitives';
import type { LearningLanguage } from '@/domain/languages';
import { searchKey, entryTypes, type EntryType, personalPrefix } from '@/domain/learning/personal';
export default function DetailRoute() {
  const p = useLocalSearchParams<{ language: string; id: string }>(),
    language = useLanguage();
  return language && language === p.language ? (
    <Detail key={language + p.id} language={language} id={p.id} />
  ) : (
    <Redirect href="/my-words/collections" />
  );
}
function Detail({ language, id }: { language: LearningLanguage; id: string }) {
  const store = useCollectionStore(),
    daily = useDailyLearning(language),
    { run, error } = useLearningAction();
  const [query, setQuery] = useState(''),
    [type, setType] = useState<'All' | EntryType>('All');
  const collection = store.collection(language, id);
  const revision = store.getRevision();
  // Commits may change content or membership while the store identity remains stable.
  const members = useMemo(
    () =>
      store.memberIds(language, id).flatMap((wordId) => {
        const item = store.resolve(language, wordId);
        return item ? [item] : [];
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [store, language, id, revision],
  );
  if (!collection) return <Redirect href="/my-words/collections" />;
  const current =
    daily.session?.originKind === 'collection' && daily.session.originId === id
      ? daily.session
      : undefined;
  const inventory = store.inventory(language),
    newIds = new Set(inventory.eligible),
    due = new Set(daily.due.map((c) => c.wordId));
  const unenrolled = members
    .filter((m) => !inventory.enrolled.has(m.content.wordId))
    .map((m) => m.content.wordId);
  const matches = members.filter(
    ({ source, content }) =>
      (type === 'All' || (source === 'curated' ? 'Word' : content.type) === type) &&
      [content.displayForm, content.english].some((s) => searchKey(s).includes(searchKey(query))),
  );
  const remove = () =>
    Alert.alert(
      'Delete collection?',
      'This removes the collection and its memberships. Your vocabulary, ratings and review dates stay saved.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete collection',
          style: 'destructive',
          onPress: () =>
            run(() => {
              store.deleteCollection(language, id);
              router.dismissTo('/my-words/collections');
            }),
        },
      ],
    );
  return (
    <DiscoverPage>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={matches}
        keyExtractor={(m) => m.content.wordId}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24, gap: 12 }}
        ListHeaderComponent={
          <View style={{ gap: 12 }}>
            <CardsHeader language={language} />
            <Type variant="eyebrow">YOUR COLLECTIONS</Type>
            <Type variant="display" accessibilityRole="header">
              {collection.name}
            </Type>
            {!!collection.description && <Type>{collection.description}</Type>}
            <MyWordsSections collections />
            <SectionAction
              title="Collection items"
              label="Add items"
              onPress={() =>
                router.push({
                  pathname: '/collection/picker',
                  params: { language, collectionId: id },
                })
              }
            />
            {!!members.length && (
              <>
                <Field label="Search this collection" value={query} onChangeText={setQuery} />
                <Chips values={['All', ...entryTypes]} value={type} onSelect={setType} />
              </>
            )}
            <Type variant="caption">
              {members.length} {members.length === 1 ? 'item' : 'items'} ·{' '}
              {members.length - unenrolled.length} in study ·{' '}
              {members.filter((m) => due.has(m.content.wordId)).length} due
            </Type>
            {!!unenrolled.length && (
              <Button
                variant="secondary"
                label={'Add ' + unenrolled.length + ' to study'}
                onPress={() => run(() => store.enrol(language, unenrolled))}
              />
            )}
            {current ? (
              <Button
                label={current.phase === 'completed' ? 'View session summary' : 'Resume session'}
                onPress={() => openStudy(language, { kind: 'collection', id })}
              />
            ) : (
              members.some((m) => newIds.has(m.content.wordId)) && (
                <StudyStart language={language} origin={{ kind: 'collection', id }} />
              )
            )}
            {!!error && <Type accessibilityRole="alert">{error}</Type>}
          </View>
        }
        ListEmptyComponent={
          <Surface>
            <Type>
              {members.length
                ? 'No matching entries.'
                : 'Your collection is empty. Add vocabulary from Discover or My Words.'}
            </Type>
          </Surface>
        }
        renderItem={({ item: { content } }) => (
          <Control
            accessibilityLabel={content.displayForm}
            onPress={() =>
              content.wordId.startsWith(personalPrefix)
                ? openEntry(language, content.wordId)
                : router.push({
                    pathname: '/discover/word/[wordId]',
                    params: { language, wordId: content.wordId },
                  })
            }
          >
            <Surface>
              <Type variant="section">{content.displayForm}</Type>
              <Type>{content.english}</Type>
              <Type variant="caption">
                {content.wordId.startsWith(personalPrefix) ? 'Personal' : 'Curated'} ·{' '}
                {due.has(content.wordId)
                  ? 'Review due'
                  : inventory.enrolled.has(content.wordId)
                    ? 'In study'
                    : 'In collection'}
              </Type>
            </Surface>
          </Control>
        )}
        ListFooterComponent={
          <View style={{ gap: 10 }}>
            <Button
              variant="secondary"
              label="Edit collection"
              onPress={() =>
                router.push({ pathname: '/collection/edit', params: { language, id } })
              }
            />
            <Button variant="secondary" label="Delete collection" onPress={remove} />
          </View>
        }
      />
    </DiscoverPage>
  );
}
