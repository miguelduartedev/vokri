import { router, useFocusEffect } from 'expo-router';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { BackHandler, ScrollView, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getVocabularyItem } from '@/domain/vocabulary/registry';
import { getDeck } from '@/domain/vocabulary/decks';
import { languages, type LearningLanguage } from '@/domain/languages';
import {
  selectNew,
  type DirectionChoice,
  type Origin,
  type Session,
  type SessionMode,
} from '@/domain/learning/model';
import { localDueTime } from './use-daily-learning';
import { reviewBatchSize } from '../domain/learning/review';
import { useLearning, useInventory } from '@/learning/provider';
import { Type, Button, Control, Icon, Surface } from '@/ui/primitives';
import { useTheme } from '@/ui/theme';
import { Flashcard, RatingActions, ratingColors } from '@/ui/flashcard';
import { DirectionChoices } from '@/ui/preferences';
import { useLearningAction } from '@/cards/study-controls';

function returnTo(language: LearningLanguage, origin: Origin) {
  if (origin.kind === 'today') return router.dismissTo('/today');
  if (origin.kind === 'deck' && getDeck(language, origin.id))
    return router.dismissTo({
      pathname: '/discover/deck/[deckId]',
      params: { language, deckId: origin.id },
    });
  if (origin.kind === 'word' && getVocabularyItem({ languageId: language, wordId: origin.id }))
    return router.dismissTo({
      pathname: '/discover/word/[wordId]',
      params: { language, wordId: origin.id },
    });
  router.dismissTo('/discover');
}
function sessionOrigin(session: Session): Origin {
  return session.originKind === 'today' || !session.originId
    ? { kind: 'today' }
    : { kind: session.originKind, id: session.originId };
}
export function Study({
  language,
  origin,
  context,
  initialChoice,
  mode,
  startedSessionId,
}: {
  language: LearningLanguage;
  origin: Origin;
  context?: string[];
  initialChoice: DirectionChoice;
  mode: SessionMode;
  startedSessionId?: string;
}) {
  const store = useLearning();
  const { session, eligible } = useInventory(language);
  const review = (session?.mode ?? mode) === 'review_due';
  const { colors } = useTheme();
  const { width, fontScale } = useWindowDimensions();
  const { run, error } = useLearningAction();
  const [choice, setChoice] = useState(initialChoice);
  function startSession(replaceId?: string) {
    if (mode === 'review_due') store.startReview(language, replaceId);
    else store.start(language, origin, choice, context, replaceId);
  }
  const [view, setView] = useState<'study' | 'resume' | 'leave' | 'replace'>(() =>
    session && session.id !== startedSessionId && session.phase !== 'completed'
      ? 'resume'
      : 'study',
  );
  const [presentError, setPresentError] = useState(false);
  const [retry, setRetry] = useState(0);
  const scroll = useRef<React.ComponentRef<typeof ScrollView>>(null);
  const cards = session ? store.cards(session.id) : [];
  const card = cards.find((c) => c.pass === session?.phase && c.position === session.cursor);
  const item = card && getVocabularyItem({ languageId: language, wordId: card.wordId });
  const sessionId = session?.id;
  const pass = card?.pass;
  const position = card?.position;
  const needsPresentation = !!card && (!card.shownAt || !item);
  useEffect(() => {
    if (view !== 'study' || !sessionId || !pass || position === undefined || !needsPresentation)
      return;
    const frame = requestAnimationFrame(() => {
      try {
        store.present(language, sessionId, { pass, position });
        setPresentError(false);
      } catch {
        setPresentError(true);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [store, language, sessionId, pass, position, view, needsPresentation, retry]);
  useEffect(() => {
    scroll.current?.scrollTo({ y: 0, animated: false });
  }, [sessionId, pass, position, view, session?.phase]);
  const source = session ? sessionOrigin(session) : origin;
  function leave(destination: Origin = source) {
    run(() => {
      if (session?.phase === 'completed') store.dismiss(language, session.id);
      returnTo(language, destination);
    });
  }
  function back() {
    if (view === 'replace') setView('resume');
    else if (view === 'leave') setView('study');
    else if (view === 'study' && session && session.phase !== 'completed') setView('leave');
    else leave();
  }
  useFocusEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      back();
      return true;
    });
    return () => sub.remove();
  });
  const first = cards.filter((c) => c.pass === 'first');
  const revisits = cards.filter((c) => c.pass === 'revisit');
  const studied = first.filter((c) => c.rating).length;
  const revisited = revisits.filter((c) => c.rating).length;
  let count = 0;
  if (!session || view === 'replace') {
    const candidates = store.today(language, store.now(), view === 'replace');
    count =
      mode === 'review_due'
        ? Math.min(candidates.due.length, reviewBatchSize)
        : selectNew(context ? eligible : candidates.newWords, context).length;
  }
  const name = languages[language].name;
  let title = '',
    stage = review ? 'DUE REVIEW' : 'NEW WORDS',
    counter = '',
    progress = 0,
    body: ReactNode,
    actions: ReactNode;
  if (!session) {
    title = review
      ? count
        ? 'Review due cards.'
        : 'All caught up.'
      : count
        ? 'Learn new words.'
        : 'No new words here.';
    body = count ? (
      <>
        <Type>
          {count} {name}{' '}
          {review ? (count === 1 ? 'card' : 'cards') : count === 1 ? 'word' : 'words'} ready to
          study.
        </Type>
        {!review && (
          <>
            <Type variant="eyebrow">CARD DIRECTION</Type>
            <DirectionChoices language={language} value={choice} onSelect={setChoice} />
          </>
        )}
      </>
    ) : (
      <Type>
        {review ? 'No cards are due for review.' : 'Add words in Discover to start learning.'}
      </Type>
    );
    actions = count ? (
      <Button
        label={review ? 'Start review' : 'Start session'}
        onPress={() => run(() => startSession())}
      />
    ) : review ? (
      <Button label="Back to Today" onPress={() => leave({ kind: 'today' })} />
    ) : (
      <Button label="Explore words" onPress={() => router.dismissTo('/discover')} />
    );
  } else if (view === 'leave') {
    title = 'Leave for now?';
    stage = 'A SHORT PAUSE';
    body = <Type>Your ratings are saved. You can pick up with this card when you return.</Type>;
    actions = (
      <>
        <Button variant="secondary" label="Leave session" onPress={() => leave()} />
        <Button label="Continue studying" onPress={() => setView('study')} />
      </>
    );
  } else if (view === 'replace') {
    title = 'Start a new session?';
    body = (
      <>
        <Type>
          Your ratings and study words stay saved. Unrated cards remain available for study.
        </Type>
        {!!count && mode === 'learn_new' && (
          <DirectionChoices language={language} value={choice} onSelect={setChoice} />
        )}
      </>
    );
    actions = (
      <>
        <Button
          variant="secondary"
          label="Keep current session"
          onPress={() => setView('resume')}
        />
        <Button
          label={count ? 'End and start new' : 'End unfinished session'}
          onPress={() =>
            run(() => {
              startSession(session.id);
              setView('study');
            })
          }
        />
      </>
    );
  } else if (view === 'resume' && session.phase !== 'completed') {
    title = 'Continue where you left off.';
    stage = 'PAUSED SESSION';
    body = (
      <Surface>
        <Type variant="title">{name} flashcards</Type>
        <Type>
          {studied} of {first.length} {review ? 'cards' : 'words'} rated
        </Type>
      </Surface>
    );
    actions = (
      <>
        <Button
          variant="secondary"
          label="Start a new session"
          onPress={() => setView('replace')}
        />
        <Button label="Resume flashcards" onPress={() => setView('study')} />
      </>
    );
  } else if (session.phase === 'offer') {
    title = 'A few to revisit.';
    stage = 'FIRST PASS COMPLETE';
    counter = studied + ' studied';
    progress = 1;
    body = (
      <>
        <Type>Take one more look at words you marked Again or Almost.</Type>
        <Surface>
          {revisits.map((c) => (
            <Type key={c.position}>
              {getVocabularyItem({ languageId: language, wordId: c.wordId })?.displayForm ??
                'Unavailable word'}
              {review && ' · ' + c.direction}
            </Type>
          ))}
        </Surface>
      </>
    );
    actions = (
      <>
        <Button
          variant="secondary"
          label="Finish session"
          onPress={() => run(() => store.chooseRevisit(language, session.id, false))}
        />
        <Button
          label={
            'Revisit ' +
            revisits.length +
            (review
              ? revisits.length === 1
                ? ' card'
                : ' cards'
              : revisits.length === 1
                ? ' word'
                : ' words')
          }
          onPress={() => run(() => store.chooseRevisit(language, session.id, true))}
        />
      </>
    );
  } else if (session.phase === 'completed') {
    title = review ? 'Review complete.' : 'New words to return to.';
    stage = 'SESSION FINISHED';
    counter = studied + ' studied';
    progress = 1;
    body = (
      <>
        <Type>
          {review
            ? 'Your ratings set the next review for each direction.'
            : 'Your ratings are saved on this device.'}
        </Type>
        <Surface>
          <Type>
            {review ? 'Cards reviewed' : 'New words studied'} · {studied}
          </Type>
          {review && (
            <Type>
              Distinct words · {new Set(first.filter((c) => c.rating).map((c) => c.wordId)).size}
            </Type>
          )}
          <Type>Items revisited · {revisited}</Type>
        </Surface>
      </>
    );
    actions = (
      <>
        {review && (
          <Button
            variant="secondary"
            label="Explore words"
            onPress={() =>
              run(() => {
                store.dismiss(language, session.id);
                router.dismissTo('/discover');
              })
            }
          />
        )}
        {source.kind !== 'today' && (
          <Button
            variant="secondary"
            label={source.kind === 'deck' ? 'Back to collection' : 'Back to word'}
            onPress={() => leave()}
          />
        )}
        <Button label="Back to Today" onPress={() => leave({ kind: 'today' })} />
      </>
    );
  } else if (card && item) {
    const total = card.pass === 'first' ? first.length : revisits.length;
    counter = card.position + 1 + ' of ' + total;
    stage =
      card.pass === 'first'
        ? review
          ? 'REVIEW · FIRST PASS'
          : 'LEARNING · FIRST PASS'
        : 'ANOTHER LOOK';
    progress = (card.position + (card.rating ? 1 : 0)) / total;
    const reveal = () => run(() => store.reveal(language, session.id, card));
    const deckTitle = source.kind === 'deck' ? getDeck(language, source.id)?.title : undefined;
    const schedule =
      card.rating && card.pass === 'first' ? store.reviewState(language, card) : undefined;
    body = (
      <>
        {!card.rating && (
          <Type variant="eyebrow" color={colors.secondary}>
            {(deckTitle ?? name).toUpperCase()} ·{' '}
            {card.pass === 'first'
              ? review
                ? 'SCHEDULED REVIEW'
                : 'NEW WORDS'
              : 'SAME-SESSION REVISIT'}
          </Type>
        )}
        <Flashcard
          item={item}
          direction={card.direction}
          revealed={!!card.revealedAt}
          reveal={reveal}
        />
        {card.rating && (
          <Surface
            style={{
              backgroundColor: ratingColors[card.rating],
              borderColor: ratingColors[card.rating],
            }}
          >
            <Type accessibilityLiveRegion="polite" color="#183B35" variant="label">
              {card.rating} · Rating saved
            </Type>
            {schedule && (
              <Type variant="caption" color="#183B35">
                Next {card.direction} review · {localDueTime(schedule.dueAt)}
              </Type>
            )}
          </Surface>
        )}
      </>
    );
    actions = card.rating ? (
      <Button label="Next card" onPress={() => run(() => store.next(language, session.id, card))} />
    ) : card.revealedAt ? (
      <RatingActions
        onRate={(rating) => run(() => store.rate(language, session.id, card, rating))}
      />
    ) : (
      <Button label="Show answer" disabled={!card.shownAt} onPress={reveal} />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          paddingHorizontal: 24,
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          minHeight: 60,
        }}
      >
        <Control accessibilityLabel="Close flashcards" onPress={back}>
          <Icon name="close" tint={colors.ink} />
        </Control>
        <Type variant="label" style={{ flex: 1 }}>
          Flashcards
        </Type>
        {width / fontScale >= 300 && (
          <Type variant="eyebrow">{review ? 'DUE REVIEW' : 'NEW WORDS'}</Type>
        )}
      </View>
      <ScrollView
        ref={scroll}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingTop: 12,
          paddingBottom: 22,
          gap: 18,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 6 }}>
          <Type variant="eyebrow" color={colors.secondary}>
            {stage}
          </Type>
          <Type variant="caption" accessibilityLiveRegion="polite">
            {counter}
          </Type>
        </View>
        {!!counter && (
          <View
            accessibilityRole="progressbar"
            accessibilityValue={{ min: 0, max: 100, now: Math.round(progress * 100) }}
            style={{ height: 4, borderRadius: 3, backgroundColor: colors.border, marginBottom: 12 }}
          >
            <View
              style={{
                height: 4,
                borderRadius: 3,
                backgroundColor: colors.action,
                width: `${progress * 100}%`,
              }}
            />
          </View>
        )}
        {session?.phase === 'completed' && (
          <View
            accessible={false}
            importantForAccessibility="no"
            style={{
              height: 48,
              width: 48,
              borderRadius: 24,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.selected,
            }}
          >
            <Type variant="title" color={colors.onSelected}>
              ✓
            </Type>
          </View>
        )}
        {!!title && (
          <Type accessibilityRole="header" variant="display">
            {title}
          </Type>
        )}
        {body}
        {cards.some((c) => c.skipped) && (
          <Type accessibilityLiveRegion="polite">An unavailable word was skipped.</Type>
        )}
        <View style={{ flex: 1, minHeight: 4 }} />
        {presentError && (
          <Button label="Retry opening card" onPress={() => setRetry((n) => n + 1)} />
        )}
        {!!error && <Type accessibilityRole="alert">{error}</Type>}
        {actions}
      </ScrollView>
    </SafeAreaView>
  );
}
