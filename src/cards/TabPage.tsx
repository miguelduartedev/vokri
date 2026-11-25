import { layout } from '@/ui/layout';
import { router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { languages } from '../domain/languages';
import { usePreferences } from '../preferences/context';
import { Button, Surface, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';
import { useInventory } from '../learning/provider';
import type { LearningLanguage } from '../domain/languages';
import { openStudy } from './study-controls';
import { CardsHeader } from './controls';

export function TabPage({ page }: { page: 'today' | 'my-words' }) {
  const { state } = usePreferences();
  if (state.status !== 'ready' || !state.preferences.activeLearningLanguage) return null;
  return <LanguageTab page={page} language={state.preferences.activeLearningLanguage} />;
}
function LanguageTab({
  page,
  language,
}: {
  page: 'today' | 'my-words';
  language: LearningLanguage;
}) {
  const { colors } = useTheme();
  const { session, enrolled, eligible } = useInventory(language);
  const returning = enrolled.size > 0;
  const name = languages[language].name;
  const today = page === 'today';
  const title = today
    ? returning
      ? 'A little ' + name + ', every day.'
      : name + ' begins\nwith one word.'
    : 'My Words.';
  const caption = today
    ? returning
      ? 'Your vocabulary is ready when you are.'
      : 'Start with a few useful words.'
    : 'The ' + name + ' expressions you want to remember.';
  const explore = (
    <Button
      align={today ? 'left' : 'center'}
      label={'Explore ' + name + ' words'}
      onPress={() => router.navigate('/discover')}
    />
  );
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScrollView contentContainerStyle={{ paddingHorizontal: layout.margin, paddingBottom: 30 }}>
        <CardsHeader language={language} />
        <View style={{ marginTop: 12, gap: 8 }}>
          <Type variant="eyebrow" color={colors.secondary}>
            {today ? 'WELCOME / ' + name.toUpperCase() : 'YOUR VOCABULARY'}
          </Type>
          <Type variant="display" accessibilityRole="header">
            {title}
          </Type>
          <Type color={colors.secondary} style={today && { fontSize: 13, lineHeight: 19 }}>
            {caption}
          </Type>
        </View>
        {today ? (
          <View style={{ marginTop: 30, gap: 24 }}>
            {returning ? (
              <>
                <Surface>
                  <Type variant="eyebrow">YOUR STUDY WORDS</Type>
                  <Type variant="title">
                    {session
                      ? 'Your session.'
                      : eligible.length
                        ? 'Ready to learn.'
                        : 'Your words are in study.'}
                  </Type>
                  <Type>
                    {enrolled.size} in study · {eligible.length} new
                  </Type>
                  {(session || eligible.length > 0) && (
                    <Button
                      label={
                        session?.phase === 'completed'
                          ? 'View session summary'
                          : session
                            ? 'Resume session'
                            : 'Learn New'
                      }
                      onPress={() => openStudy(language, { kind: 'today' })}
                    />
                  )}
                </Surface>
                {explore}
              </>
            ) : (
              <Surface style={{ minHeight: 222 }}>
                <Type variant="eyebrow" color={colors.secondary}>
                  A FRESH START
                </Type>
                <Type variant="title">Start with the essentials.</Type>
                <Type variant="caption" color={colors.secondary}>
                  Choose words you want to remember.
                </Type>
                <View style={{ flex: 1, minHeight: 10 }} />
                {explore}
              </Surface>
            )}
          </View>
        ) : (
          <View style={{ gap: 16, marginTop: 32 }}>
            <Type variant="title">Saved entries</Type>
            <Surface
              style={{
                backgroundColor: colors.selected,
                borderColor: colors.selected,
                padding: 24,
              }}
            >
              <Type
                variant="display"
                accessible={false}
                importantForAccessibility="no"
                color={colors.onSelected}
              >
                Aa ✦
              </Type>
              <Type variant="title" color={colors.onSelected}>
                Your {name} words will live here.
              </Type>
              <Type color={colors.onSelected}>
                Personal entries will be available in a future update.
              </Type>
            </Surface>
            {explore}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
