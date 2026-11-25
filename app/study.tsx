import { Redirect, useLocalSearchParams } from 'expo-router';
import { Study } from '@/cards/Study';
import { usePreferences } from '@/preferences/context';
import { useLearning } from '@/learning/provider';
import { getDeck } from '@/domain/vocabulary/decks';
import { personalPrefix } from '@/domain/learning/personal';
import type { Origin } from '@/domain/learning/model';

export default function StudyRoute() {
  const store = useLearning();
  const { state } = usePreferences();
  const params = useLocalSearchParams<{
    language: string;
    origin: string;
    id?: string;
    selection?: string;
    mode?: string;
    started?: string;
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
  if (params.origin === 'collection') {
    const id = params.id ?? '';
    if (!store.collection(language, id)) {
      const frozen = store.current(language);
      if (frozen?.originKind !== 'collection' || frozen.originId !== id)
        return <Redirect href="/my-words/collections" />;
    }
    origin = { kind: 'collection', id };
    context = store.memberIds(language, id);
  } else if (params.origin === 'deck') {
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
    const word = store.resolve(language, params.id ?? '')?.content;
    if (!word && !store.current(language))
      return <Redirect href={params.id?.startsWith(personalPrefix) ? '/my-words' : '/discover'} />;
    if (!word) return <Redirect href="/today" />;
    origin = { kind: 'word', id: word.wordId };
    context = [word.wordId];
  }
  return (
    <Study
      key={language}
      language={language}
      origin={origin}
      context={context}
      mode={origin.kind === 'today' && params.mode === 'review_due' ? 'review_due' : 'learn_new'}
      startedSessionId={params.started}
      initialChoice={state.preferences.directions?.[language] ?? 'recognition'}
    />
  );
}
