import { DeckEnrolment } from '@/cards/Enrolment';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { FlatList, View } from 'react-native';
import { useInventory } from '@/learning/provider';
import { getDeck, type CuratedDeck } from '@/domain/vocabulary/decks';
import { getVocabularyItem } from '@/domain/vocabulary/registry';
import {
  BackLink,
  DiscoverPage,
  MissingContent,
  useLanguage,
  useOpenWord,
} from '@/cards/discover-controls';
import { Type } from '@/ui/primitives';
import { VocabularyRow } from '@/ui/vocabulary';
import { useTheme } from '@/ui/theme';
export default function DeckPage() {
  const { deckId, language } = useLocalSearchParams();
  const active = useLanguage();
  if (!active || active !== language) return <Redirect href="/discover" />;
  const deck = typeof deckId === 'string' && getDeck(active, deckId);
  if (!deck) return <MissingContent />;
  return <DeckContents deck={deck} />;
}
function DeckContents({ deck }: { deck: CuratedDeck }) {
  const open = useOpenWord();
  const { colors } = useTheme();
  const { enrolled } = useInventory(deck.languageId);
  return (
    <DiscoverPage>
      <FlatList
        data={deck.wordRefs}
        keyExtractor={(ref) => ref.wordId}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 28, gap: 8 }}
        ListHeaderComponent={
          <View style={{ gap: 12, paddingBottom: 8 }}>
            <BackLink />
            <Type variant="eyebrow" color={colors.secondary}>
              CURATED VOCABULARY
            </Type>
            <Type variant="page" accessibilityRole="header">
              {deck.title}
            </Type>
            <Type color={colors.secondary}>{deck.description}</Type>
            <DeckEnrolment key={deck.deckId} deck={deck} />
            <Type variant="eyebrow">IN THIS COLLECTION</Type>
          </View>
        }
        renderItem={({ item }) => (
          <VocabularyRow
            item={getVocabularyItem(item)!}
            onOpen={open}
            inStudy={enrolled.has(item.wordId)}
          />
        )}
      />
    </DiscoverPage>
  );
}
