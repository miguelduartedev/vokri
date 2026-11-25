import { router } from 'expo-router';
import { useMemo, useState, useSyncExternalStore } from 'react';
import { FlatList, View } from 'react-native';
import { languages, type LearningLanguage } from '../domain/languages';
import { searchEntries, type EntryType } from '../domain/learning/personal';
import { Button, Control, Surface, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';
import { useLearning } from '../learning/provider';
import { CardsHeader } from './controls';
import { DiscoverPage, useLanguage } from './discover-controls';
import { Field, Chips, openEntry } from './personal-controls';

export function MyWords() {
  const language = useLanguage();
  return language && <List key={language} language={language} />;
}
const filters = ['All', 'Words', 'Phrases', 'Sentences'] as const;
function List({ language }: { language: LearningLanguage }) {
  const { colors } = useTheme();
  const store = useLearning();
  const revision = useSyncExternalStore(store.subscribe, store.getRevision);
  const [query, setQuery] = useState(''),
    [filter, setFilter] = useState<(typeof filters)[number]>('All');
  // A committed write changes the rows while the store instance stays the same.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const all = useMemo(() => store.entries(language), [store, language, revision]);
  const rows = searchEntries(
    all,
    query,
    filter === 'All' ? undefined : (filter.slice(0, -1) as EntryType),
  );
  const name = languages[language].name;
  const add = () => router.push({ pathname: '/personal/edit', params: { language } });
  return (
    <DiscoverPage>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={rows}
        keyExtractor={(e) => e.wordId}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24, gap: 10 }}
        ListHeaderComponent={
          <View style={{ gap: 14 }}>
            <CardsHeader language={language} />
            <Type variant="eyebrow">YOUR VOCABULARY</Type>
            <Type variant="display" accessibilityRole="header">
              My Words.
            </Type>
            <Type>The {name} expressions you want to remember.</Type>
            <View
              style={{
                marginTop: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                flexWrap: 'wrap',
              }}
            >
              <Type variant="title">Saved entries</Type>
              {all.length > 0 && (
                <Control
                  accessibilityLabel="Add entry"
                  onPress={add}
                  style={{
                    backgroundColor: colors.selected,
                    paddingHorizontal: 16,
                    borderRadius: 12,
                  }}
                >
                  <Type variant="label" color={colors.onSelected}>
                    ＋ Add
                  </Type>
                </Control>
              )}
            </View>
            {all.length ? (
              <>
                <Field
                  label="Search My Words"
                  placeholder={'Search ' + name + ' or English'}
                  value={query}
                  onChangeText={setQuery}
                />
                <Chips values={filters} value={filter} onSelect={setFilter} />
                <Type variant="caption">
                  {rows.length} {rows.length === 1 ? 'entry' : 'entries'}
                </Type>
              </>
            ) : (
              <>
                <Surface style={{ backgroundColor: colors.selected, padding: 24, gap: 18 }}>
                  <Type
                    variant="display"
                    color={colors.onSelected}
                    accessible={false}
                    importantForAccessibility="no"
                  >
                    Aa ✦
                  </Type>
                  <Type variant="title" color={colors.onSelected}>
                    Your {name} words will live here.
                  </Type>
                  <Type color={colors.onSelected}>
                    Save a word, phrase or sentence from your day.
                  </Type>
                </Surface>
                <Button label="Add your first word" onPress={add} />
                <Button
                  variant="secondary"
                  label={'Explore ' + name + ' words'}
                  onPress={() => router.navigate('/discover')}
                />
              </>
            )}
          </View>
        }
        ListEmptyComponent={all.length > 0 ? <Type>No matching entries.</Type> : undefined}
        renderItem={({ item }) => (
          <Control
            accessibilityLabel={item.displayForm + ', ' + item.english}
            onPress={() => openEntry(language, item.wordId)}
          >
            <Surface>
              <Type variant="section">{item.displayForm}</Type>
              <Type>{item.english}</Type>
              <Type variant="eyebrow">{item.type.toUpperCase()}</Type>
            </Surface>
          </Control>
        )}
      />
    </DiscoverPage>
  );
}
