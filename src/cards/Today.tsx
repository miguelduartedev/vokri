import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { reviewBatchSize } from '../domain/learning/review';
import { languages, type LearningLanguage } from '../domain/languages';
import { getDeck, getDecks } from '../domain/vocabulary/decks';
import { usePreferences } from '../preferences/context';
import { layout } from '../ui/layout';
import { Button, Control, Icon, Surface, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';
import { CardsHeader } from './controls';
import { useLearning } from '../learning/provider';
import { openStudy, useLearningAction } from './study-controls';
import { localDueTime, useDailyLearning } from './use-daily-learning';

export function Today() {
  const { state } = usePreferences();
  if (state.status !== 'ready' || !state.preferences.activeLearningLanguage) return null;
  return <DailyDashboard language={state.preferences.activeLearningLanguage} />;
}

function dashboardCopy(name: string, enrolled: number, due: number, nextDueAt?: number) {
  if (due)
    return {
      heading: 'A little ' + name + ',\nevery day.',
      caption: 'Your vocabulary is ready when you are.',
      eyebrow: 'READY FOR REVIEW',
      headline: '',
      detail: 'A little repetition goes a long way.',
    };
  if (!enrolled)
    return {
      heading: name + ' begins\nwith one word.',
      caption: 'Start with a few useful words.',
      eyebrow: 'A FRESH START',
      headline: 'Start with the essentials.',
      detail: 'Choose words you want to remember.',
    };
  if (nextDueAt !== undefined)
    return {
      heading: 'A little space\nto remember.',
      caption: 'Nothing needs reviewing right now.',
      eyebrow: 'ALL CAUGHT UP',
      headline: 'All caught up.',
      detail: 'Next review · ' + localDueTime(nextDueAt),
    };
  return {
    heading: 'Every word has\na beginning.',
    caption: 'Your first reviews begin with a new word.',
    eyebrow: 'LEARNING HAS BEGUN',
    headline: 'No reviews yet.',
    detail: 'Study a new word to schedule your first review.',
  };
}

function DailyDashboard({ language }: { language: LearningLanguage }) {
  const { colors, dark } = useTheme();
  const { session, enrolled, introduced, due, dueWords, newWords, nextDueAt, familiarWords } =
    useDailyLearning(language);
  const name = languages[language].name;
  const deck = getDecks(language)[0];
  const explore = () => router.navigate('/discover');
  const store = useLearning();
  const { run, error } = useLearningAction();
  const start = (mode: 'learn_new' | 'review_due') =>
    run(() => {
      const origin = { kind: 'today' } as const;
      let started: string | undefined;
      if (mode === 'review_due' && !store.current(language)) {
        store.startReview(language);
        started = store.current(language)?.id;
      }
      openStudy(language, origin, undefined, mode, started);
    });
  const active = dueWords > 0;
  const ink = active ? (dark ? colors.onSelected : colors.onAction) : colors.ink;
  const originTitle =
    session?.originKind === 'collection'
      ? store.collection(language, session.originId ?? '')?.name
      : session?.originKind === 'deck' && getDeck(language, session.originId ?? '')?.title;
  const pass = session?.phase === 'revisit' ? 'revisit' : 'first';
  const frozen = session
    ? store.cards(session.id).filter((card) => card.pass === pass && !card.skipped)
    : [];
  const copy = dashboardCopy(name, enrolled, dueWords, nextDueAt);
  const heading = session
    ? session.phase === 'completed'
      ? 'Your session is complete.'
      : 'Pick up where\nyou left off.'
    : copy.heading;
  const caption = session
    ? session.phase === 'completed'
      ? frozen.some((card) => card.rating)
        ? 'Your ratings are saved on this device.'
        : 'Your session summary is ready.'
      : 'Your session is here when you’re ready.'
    : copy.caption;
  const primaryLearn = !!newWords.length && !active && !session;
  const action = active
    ? due.length > reviewBatchSize
      ? 'Start review'
      : 'Review ' + dueWords + (dueWords === 1 ? ' word' : ' words')
    : primaryLearn
      ? 'Learn New'
      : 'Explore ' + name + ' words';
  const onPress = active
    ? () => start('review_due')
    : primaryLearn
      ? () => start('learn_new')
      : explore;
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: layout.margin, paddingBottom: 30 }}>
        <CardsHeader language={language} />
        <View style={{ marginTop: 12, gap: 8 }}>
          <Type variant="eyebrow" color={colors.secondary}>
            {session ? 'CONTINUE' : enrolled ? 'TODAY' : 'WELCOME'} / {name.toUpperCase()}
          </Type>
          <Type variant="display" accessibilityRole="header">
            {heading}
          </Type>
          <Type color={colors.secondary} style={{ fontSize: 13, lineHeight: 19 }}>
            {caption}
          </Type>
        </View>
        <View style={{ marginTop: 28, gap: 14 }}>
          {session && (
            <Surface>
              <Type variant="eyebrow" color={colors.secondary}>
                {session.phase === 'completed' ? 'SESSION FINISHED' : 'PAUSED SESSION'}
              </Type>
              <Type variant="title">
                {originTitle ||
                  (session.mode === 'review_due' ? name + ' review' : name + ' flashcards')}
              </Type>
              <Type variant="caption">
                {frozen.filter((card) => card.rating).length} of {frozen.length}{' '}
                {pass === 'revisit' ? 'revisit cards' : 'cards'} rated
              </Type>
              <Button
                label={session.phase === 'completed' ? 'View session summary' : 'Resume session'}
                onPress={() => start(session.mode)}
              />
            </Surface>
          )}
          <Surface
            style={{
              minHeight: 210,
              ...(active && {
                backgroundColor: dark ? colors.selected : colors.action,
                borderWidth: 0,
              }),
            }}
          >
            <Type variant="eyebrow" color={ink}>
              {copy.eyebrow}
            </Type>
            {active ? (
              <View
                style={{ flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap', gap: 10 }}
              >
                <Type variant="display" color={ink} style={{ fontSize: 62, lineHeight: 68 }}>
                  {dueWords}
                </Type>
                <Type variant="section" color={ink}>
                  {dueWords === 1 ? 'word to revisit' : 'words to revisit'}
                </Type>
              </View>
            ) : (
              <Type variant="title" color={ink}>
                {copy.headline}
              </Type>
            )}
            <View style={{ flex: 1, minHeight: 4 }} />
            <Type variant="caption" color={ink}>
              {due.length > reviewBatchSize
                ? reviewBatchSize + ' cards in your next session.'
                : copy.detail}
            </Type>
            {!!error && (
              <Type accessibilityRole="alert" color={ink}>
                {error}
              </Type>
            )}
            <Button
              align="left"
              variant={active ? 'secondary' : 'primary'}
              label={action}
              onPress={onPress}
            />
          </Surface>
          {!!enrolled && (
            <>
              {(active || newWords.length > 0) && (
                <Surface>
                  <Type variant="eyebrow" color={colors.secondary}>
                    SOMETHING NEW
                  </Type>
                  <Type variant="title">
                    {newWords.length
                      ? newWords.length + (newWords.length === 1 ? ' new word' : ' new words')
                      : 'Find your next words.'}
                  </Type>
                  {!primaryLearn && (
                    <Control onPress={newWords.length ? () => start('learn_new') : explore}>
                      <Type variant="label">
                        {newWords.length ? 'Learn New' : 'Explore words'} →
                      </Type>
                    </Control>
                  )}
                </Surface>
              )}
              <Type variant="eyebrow" color={colors.secondary}>
                YOUR VOCABULARY
              </Type>
              <Type variant="caption">
                {enrolled} in study · {introduced} introduced · {familiarWords} familiar in both
                directions
              </Type>
              {deck && (
                <Control
                  accessibilityLabel={'Explore ' + deck.title}
                  onPress={() =>
                    router.push({
                      pathname: '/discover/deck/[deckId]',
                      params: { language, deckId: deck.deckId },
                    })
                  }
                >
                  <Surface style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                      <Type variant="label">{deck.title}</Type>
                      <Type variant="caption" color={colors.secondary}>
                        {deck.wordRefs.length} words
                      </Type>
                    </View>
                    <Icon name="right" tint={colors.ink} />
                  </Surface>
                </Control>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
