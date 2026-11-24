import { Discover } from '@/cards/Discover';
import { useLanguage } from '@/cards/discover-controls';
export default function Landing() {
  const language = useLanguage();
  return language && <Discover key={language} language={language} />;
}
