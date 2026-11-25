import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { languages, type LearningLanguage } from '@/domain/languages';
import { searchKey } from '@/domain/learning/personal';
import { CardsHeader } from '@/cards/controls';
import { DiscoverPage, useLanguage } from '@/cards/discover-controls';
import {
  collectionRoute,
  MyWordsSections,
  SectionAction,
  useCollectionStore,
} from '@/cards/collection-controls';
import { Field } from '@/cards/personal-controls';
import { Control, Surface, Type } from '@/ui/primitives';

export default function Collections() {
  const language = useLanguage();
  return language && <Overview key={language} language={language} />;
}
function Overview({ language }: { language: LearningLanguage }) {
  const store = useCollectionStore(),
    all = store.collections(language);
  const [query, setQuery] = useState('');
  return (
    <DiscoverPage>
      <FlatList
        data={all.filter((c) => searchKey(c.name).includes(searchKey(query)))}
        keyExtractor={(c) => c.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24, gap: 12 }}
        ListHeaderComponent={
          <View style={{ gap: 12 }}>
            <CardsHeader language={language} />
            <Type variant="eyebrow">YOUR COLLECTIONS</Type>
            <Type variant="display" accessibilityRole="header">
              Collections.
            </Type>
            <Type>Little collections of useful {languages[language].name}.</Type>
            <MyWordsSections collections />
            <SectionAction
              title="Your collections"
              shortLabel="New"
              label="Create a collection"
              onPress={() => router.push({ pathname: '/collection/edit', params: { language } })}
            />
            {!!all.length && (
              <Field
                label="Search collections"
                value={query}
                onChangeText={setQuery}
                placeholder="Search collection names"
              />
            )}
          </View>
        }
        ListEmptyComponent={
          <Surface>
            <Type variant="title">
              {all.length ? 'No matching collections.' : 'A place for your words.'}
            </Type>
            {!all.length && (
              <Type>Group words, phrases and sentences for a course or everyday life.</Type>
            )}
          </Surface>
        }
        renderItem={({ item }) => (
          <Control
            accessibilityLabel={item.name}
            onPress={() => router.push(collectionRoute(language, item.id))}
          >
            <Surface>
              <Type variant="section">{item.name}</Type>
              <Type variant="caption">
                {item.count} {item.count === 1 ? 'item' : 'items'} · {item.enrolled} in study
              </Type>
              <Type variant="eyebrow">PERSONAL COLLECTION</Type>
            </Surface>
          </Control>
        )}
      />
    </DiscoverPage>
  );
}
