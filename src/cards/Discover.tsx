import { router } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Keyboard, TextInput, View, useWindowDimensions } from 'react-native';
import { languages, type LearningLanguage } from '../domain/languages';
import { getDecks, type CuratedDeck } from '../domain/vocabulary/decks';
import { browseVocabulary, vocabularyTopics } from '../domain/vocabulary/catalogue';
import { getVocabularyCount } from '../domain/vocabulary/registry';
import { tiers, type VocabularyTier } from '../domain/vocabulary/schema';
import { Control, Icon, Type } from '../ui/primitives';
import { Sheet, useSheetTrigger } from '../ui/preferences';
import { VocabularyRow } from '../ui/vocabulary';
import { useTheme } from '../ui/theme';
import { CardsHeader } from './controls';
import { BackLink, DiscoverPage, useOpenWord } from './discover-controls';

function Chip({
  label,
  selected,
  onPress,
  trigger,
}: {
  label: string;
  selected?: boolean;
  onPress: () => void;
  trigger?: React.Ref<React.ComponentRef<typeof View>>;
}) {
  const { colors } = useTheme();
  return (
    <Control
      ref={trigger}
      onPress={onPress}
      accessibilityState={{ selected: !!selected }}
      style={{
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: selected ? colors.selected : colors.border,
        backgroundColor: selected ? colors.selected : colors.surface,
      }}
    >
      <Type variant="caption" color={selected ? colors.onSelected : colors.ink}>
        {label}
      </Type>
    </Control>
  );
}

function DeckCard({ deck, featured = false }: { deck: CuratedDeck; featured?: boolean }) {
  const { colors } = useTheme();
  const open = () =>
    router.push({
      pathname: '/discover/deck/[deckId]',
      params: { deckId: deck.deckId, language: deck.languageId },
    });
  if (featured)
    return (
      <Control
        accessibilityLabel={'Explore ' + deck.title}
        onPress={open}
        style={{ padding: 18, borderRadius: 22, gap: 14, backgroundColor: colors.action }}
      >
        <Type variant="eyebrow" color={colors.onAction}>
          A GOOD PLACE TO BEGIN
        </Type>
        <Type variant="title" color={colors.onAction} style={{ fontSize: 30, lineHeight: 34 }}>
          {deck.title}
        </Type>
        <Type color={colors.onAction}>
          {deck.languageId === 'fi'
            ? 'Useful words for getting started.'
            : 'Build your everyday Swedish vocabulary.'}
        </Type>
        <View
          style={{
            minHeight: 44,
            justifyContent: 'center',
            paddingHorizontal: 16,
            marginTop: 8,
            borderRadius: 13,
            backgroundColor: colors.onAction,
          }}
        >
          <Type variant="label" color={colors.action}>
            Explore collection
          </Type>
        </View>
      </Control>
    );
  return (
    <Control
      accessibilityLabel={deck.title}
      onPress={open}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 16,
        borderWidth: 1,
        borderRadius: 13,
        borderColor: colors.border,
        backgroundColor: colors.surface,
      }}
    >
      <View style={{ flex: 1, gap: 5 }}>
        <Type variant="label">{deck.title}</Type>
        <Type variant="caption" color={colors.secondary}>
          {deck.description}
        </Type>
      </View>
      <Icon name="collectionArrow" tint={colors.secondary} />
    </Control>
  );
}

export function Discover({
  language,
  all = false,
  initialTopic,
}: {
  language: LearningLanguage;
  all?: boolean;
  initialTopic?: string;
}) {
  const { colors, fonts } = useTheme();
  const { height } = useWindowDimensions();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  useEffect(() => {
    const shown = Keyboard.addListener('keyboardDidShow', (e) =>
      setKeyboardHeight(e.endCoordinates.height),
    );
    const hidden = Keyboard.addListener('keyboardDidHide', () => setKeyboardHeight(0));
    return () => {
      shown.remove();
      hidden.remove();
    };
  }, []);
  const name = languages[language].name;
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const compactSearch = focused && height - keyboardHeight < 550;
  const [topic, setTopic] = useState(initialTopic);
  const [tier, setTier] = useState<VocabularyTier>();
  const [panel, setPanel] = useState<'Topic' | 'Tier'>('Topic');
  const topicSheet = useSheetTrigger();
  const tierSheet = useSheetTrigger();
  const sheet = panel === 'Topic' ? topicSheet : tierSheet;
  const topics = useMemo(() => vocabularyTopics(language, tier), [language, tier]);
  const possibleTiers = useMemo(
    () => tiers.filter((t) => browseVocabulary(language, '', topic, t).length),
    [language, topic],
  );
  const resultsMode = all || focused || !!query || !!topic || !!tier;
  const list = useRef<FlatList>(null);
  const input = useRef<React.ComponentRef<typeof TextInput>>(null);
  const results = useMemo(
    () => (resultsMode ? browseVocabulary(language, query, topic, tier) : []),
    [resultsMode, language, query, topic, tier],
  );
  const decks = useMemo(() => getDecks(language), [language]);
  const count = getVocabularyCount(language).toLocaleString('en-US');
  const openWord = useOpenWord();
  function openCatalogue(selected?: string) {
    router.push({
      pathname: '/discover/all',
      params: { language, ...(selected ? { topic: selected } : {}) },
    });
  }
  function choosePanel(which: 'Topic' | 'Tier') {
    Keyboard.dismiss();
    setPanel(which);
    (which === 'Topic' ? topicSheet : tierSheet).show();
  }
  function moveToStart() {
    list.current?.scrollToOffset({ offset: 0, animated: false });
  }
  const heading = topic
    ? topic === 'Transport'
      ? 'Words for the road.'
      : topic
    : all
      ? 'All ' + name + ' words.'
      : resultsMode
        ? 'Find a ' + name + ' word.'
        : 'Words worth\nremembering.';
  const header = (
    <View style={{ gap: 16, paddingBottom: 12 }}>
      {!compactSearch && <CardsHeader language={language} />}
      {all && !focused && <BackLink />}
      <View style={{ gap: 8 }}>
        <Type variant="eyebrow" color={colors.secondary}>
          {(topic
            ? 'DISCOVER / ' + topic
            : resultsMode && !all
              ? 'SEARCH / ' + name + ' OR ENGLISH'
              : 'DISCOVER / ' + name
          ).toUpperCase()}
        </Type>
        <Type accessibilityRole="header" variant={resultsMode ? 'page' : 'display'}>
          {heading}
        </Type>
        {!focused && (
          <Type color={colors.secondary}>
            {all
              ? 'Browse our curated ' + name + ' vocabulary.'
              : 'Explore ' + name + ' at your own pace.'}
          </Type>
        )}
      </View>
      <View
        style={{
          minHeight: 54,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 14,
          gap: 10,
          borderWidth: 1,
          borderRadius: 13,
          borderColor: focused ? colors.focus : colors.border,
          backgroundColor: colors.surface,
        }}
      >
        <Icon name="search" tint={colors.secondary} />
        <TextInput
          ref={input}
          accessibilityLabel={'Search ' + name + ' or English'}
          placeholder={'Search ' + name + ' or English'}
          placeholderTextColor={colors.secondary}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          value={query}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={(value) => {
            setQuery(value);
            moveToStart();
          }}
          style={{
            flex: 1,
            minHeight: 52,
            fontSize: 15,
            fontFamily: fonts ? 'Inter' : undefined,
            color: colors.ink,
          }}
        />
        {(!!query || focused) && (
          <Control
            accessibilityLabel={query ? 'Clear search' : 'Close search'}
            onPress={() => {
              if (query) {
                setQuery('');
                input.current?.focus();
              } else {
                input.current?.blur();
                Keyboard.dismiss();
                setFocused(false);
              }
              moveToStart();
            }}
            style={{ alignItems: 'center' }}
          >
            <Icon name="close" tint={colors.secondary} />
          </Control>
        )}
      </View>
      {resultsMode && (
        <>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            <Chip
              trigger={topicSheet.trigger}
              label={topic ?? 'All topics'}
              selected={!!topic}
              onPress={() => choosePanel('Topic')}
            />
            <Control
              ref={tierSheet.trigger}
              accessibilityLabel={'Filter by tier, ' + (tier ?? 'All tiers')}
              onPress={() => choosePanel('Tier')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                paddingHorizontal: 12,
                borderWidth: 1,
                borderColor: colors.border,
                borderRadius: 12,
                backgroundColor: tier ? colors.selected : colors.surface,
              }}
            >
              <Icon name="filter" tint={colors.secondary} />
              <Type variant="caption">{tier ?? 'All tiers'}</Type>
            </Control>
            {(topic || tier) && (
              <Chip
                label="Clear filters"
                onPress={() => {
                  setTopic(undefined);
                  setTier(undefined);
                  moveToStart();
                }}
              />
            )}
          </View>
          <Type variant="eyebrow" color={colors.secondary} accessibilityLiveRegion="polite">
            {results.length.toLocaleString('en-US')} {results.length === 1 ? 'WORD' : 'WORDS'}
          </Type>
        </>
      )}
      {!resultsMode && (
        <>
          <DeckCard deck={decks[0]} featured />
          <View style={{ gap: 8, marginTop: 4 }}>
            <Type variant="eyebrow" color={colors.secondary}>
              HANDPICKED COLLECTIONS
            </Type>
            {decks.slice(1).map((deck) => (
              <DeckCard deck={deck} key={deck.deckId} />
            ))}
          </View>
          <Control
            accessibilityLabel={'All ' + name + ' words'}
            onPress={() => openCatalogue()}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <Type variant="section">All {name} words</Type>
            <Type variant="caption">{count} words</Type>
          </Control>
          <Type variant="eyebrow" color={colors.secondary}>
            BROWSE BY TOPIC
          </Type>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            {topics.map(([t, n]) => (
              <Chip key={t} label={t + ' · ' + n} onPress={() => openCatalogue(t)} />
            ))}
          </View>
        </>
      )}
    </View>
  );
  return (
    <DiscoverPage>
      <FlatList
        ref={list}
        data={results}
        keyExtractor={(item) => item.wordId}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 32, gap: 8 }}
        ListHeaderComponent={header}
        renderItem={({ item }) => <VocabularyRow item={item} onOpen={openWord} />}
        ListEmptyComponent={
          resultsMode ? (
            <View style={{ gap: 8, paddingVertical: 16 }}>
              <Type variant="title">No words found.</Type>
              <Type color={colors.secondary}>Try another word or clear your filters.</Type>
            </View>
          ) : undefined
        }
      />
      {sheet.open && (
        <Sheet
          title={panel}
          description={
            panel === 'Topic' ? 'Browse a topic in ' + name + '.' : 'Choose a vocabulary tier.'
          }
          onClose={sheet.close}
        >
          {(panel === 'Topic'
            ? [[undefined, 'All topics'], ...topics.map(([t, n]) => [t, t + ' · ' + n])]
            : [[undefined, 'All tiers'], ...possibleTiers.map((t) => [t, t])]
          ).map(([value, label]) => (
            <Chip
              key={label}
              label={label!}
              selected={(panel === 'Topic' ? topic : tier) === value}
              onPress={() => {
                if (panel === 'Topic') setTopic(value);
                else setTier(value as VocabularyTier | undefined);
                sheet.close();
                moveToStart();
              }}
            />
          ))}
        </Sheet>
      )}
    </DiscoverPage>
  );
}
