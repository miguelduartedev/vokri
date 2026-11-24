import { Redirect, useLocalSearchParams } from 'expo-router';
import { Discover } from '@/cards/Discover';
import { useLanguage } from '@/cards/discover-controls';
import { vocabularyTopics } from '@/domain/vocabulary/catalogue';
export default function Catalogue() {
  const active = useLanguage();
  const { language, topic } = useLocalSearchParams();
  if (!active || language !== active) return <Redirect href="/discover" />;
  const initialTopic =
    typeof topic === 'string' && vocabularyTopics(active).some(([name]) => name === topic)
      ? topic
      : undefined;
  return (
    <Discover
      key={active + '/' + (initialTopic ?? '')}
      language={active}
      all
      initialTopic={initialTopic}
    />
  );
}
