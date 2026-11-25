import { Redirect, useLocalSearchParams } from 'expo-router';
import { Study } from '@/cards/Study';
import { usePreferences } from '@/preferences/context';
import { getVocabularyItem } from '@/domain/vocabulary/registry';
import { getDeck } from '@/domain/vocabulary/decks';
import type { Origin } from '@/domain/learning/model';

export default function StudyRoute() {
  const { state } = usePreferences();
  const params = useLocalSearchParams<{
    language: string;
    origin: string;
    id?: string;
    selection?: string;
  }>();
  if (
    state.status !== 'ready' ||
    !state.preferences.activeLearningLanguage ||
    params.language !== state.preferences.activeLearningLanguage
  )
    return <Redirect href="/today" />;
  const language = state.preferences.activeLearningLanguage;
  let origin: Origin = { kind: 'today' };
  let context: string[] | undefined;
  if (params.origin === 'deck') {
    const deck = getDeck(language, params.id ?? '');
    if (!deck) return <Redirect href="/discover" />;
    origin = { kind: 'deck', id: deck.deckId };
    context = deck.wordRefs.map((ref) => ref.wordId);
    if (params.selection) {
      try {
        const ids: unknown = JSON.parse(params.selection);
        if (!Array.isArray(ids)) throw new Error();
        context = context.filter((id) => ids.includes(id));
      } catch {
        return <Redirect href="/discover" />;
      }
    }
  } else if (params.origin === 'word') {
    const word = getVocabularyItem({ languageId: language, wordId: params.id });
    if (!word) return <Redirect href="/discover" />;
    origin = { kind: 'word', id: word.wordId };
    context = [word.wordId];
  }
  return (
    <Study
      key={language}
      language={language}
      origin={origin}
      context={context}
      initialChoice={state.preferences.directions?.[language] ?? 'recognition'}
    />
  );
}
