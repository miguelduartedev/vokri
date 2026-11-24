import { Redirect, useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native';
import { getVocabularyItem } from '@/domain/vocabulary/registry';
import { BackLink, DiscoverPage, MissingContent, useLanguage } from '@/cards/discover-controls';
import { languages } from '@/domain/languages';
import { VocabularyDetail } from '@/ui/vocabulary';
import { Type } from '@/ui/primitives';
export default function WordPage() {
  const { wordId, language } = useLocalSearchParams();
  const active = useLanguage();
  if (active !== language) return <Redirect href="/discover" />;
  const item = getVocabularyItem({ wordId, languageId: active });
  if (!item) return <MissingContent />;
  return (
    <DiscoverPage>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 32, gap: 22 }}>
        <BackLink label="Back" />
        <Type variant="eyebrow">
          BUILT-IN {languages[item.languageId].name.toUpperCase()} VOCABULARY
        </Type>
        <VocabularyDetail item={item} />
      </ScrollView>
    </DiscoverPage>
  );
}
