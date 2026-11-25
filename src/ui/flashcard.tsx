import { View, useWindowDimensions } from 'react-native';
import { languages } from '../domain/languages';
import { ratings, type Direction, type Rating } from '../domain/learning/model';
import type { LearningItem } from '../domain/learning/personal';
import { Control, Surface, Type } from './primitives';
import { suppliedForms } from './vocabulary';
import { useTheme } from './theme';

export function Flashcard({
  item,
  direction,
  revealed,
  reveal,
}: {
  item: LearningItem;
  direction: Direction;
  revealed: boolean;
  reveal: () => void;
}) {
  const { colors } = useTheme();
  const language = languages[item.content.languageId].name;
  const forward = direction === 'recognition';
  const prompt = forward ? item.content.displayForm : item.content.english;
  const answer = forward ? item.content.english : item.content.displayForm;
  const { height } = useWindowDimensions();
  const details = (
    item.source === 'curated'
      ? suppliedForms(item.content)
      : [
          ['Dictionary form', item.content.lemma],
          ['Context', item.content.context],
          ['Forms', item.content.forms],
          ['Personal note', item.content.note],
        ].filter(([, value]) => !!value)
  )
    .map(([label, value]) => label + ' · ' + value)
    .join('\n');
  const front = (
    <>
      <Type variant="eyebrow" color={colors.secondary}>
        {(forward ? language : 'English').toUpperCase()} / {revealed ? 'REVEALED' : 'RECALL'}
      </Type>
      <Type variant="display" accessibilityRole="header" style={{ fontSize: 46, lineHeight: 52 }}>
        {prompt}
      </Type>
    </>
  );
  if (!revealed)
    return (
      <Control
        accessibilityLabel={prompt + ', Show answer'}
        onPress={reveal}
        style={{
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: 22,
          padding: 24,
          minHeight: Math.max(240, Math.min(370, height * 0.45)),
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          gap: 14,
        }}
      >
        {front}
        <View style={{ flex: 1, minHeight: 36 }} />
        <Type color={colors.secondary}>
          Try recalling the {forward ? 'meaning' : language + ' expression'} before revealing.
        </Type>
        <Type
          variant="caption"
          color={colors.secondary}
          style={{ borderTopWidth: 1, borderColor: colors.border, paddingTop: 12 }}
        >
          Tap card or choose Show answer
        </Type>
      </Control>
    );
  return (
    <Surface
      style={{ borderRadius: 22, padding: 24, gap: 16, minHeight: Math.min(418, height * 0.5) }}
    >
      {front}
      <View style={{ borderTopWidth: 1, borderColor: colors.border, paddingTop: 14, gap: 6 }}>
        <Type variant="eyebrow">{(forward ? 'English' : language).toUpperCase()} / ANSWER</Type>
        <Type variant="title">{answer}</Type>
      </View>
      {item.source === 'curated' && item.content.example && (
        <View style={{ padding: 12, borderRadius: 12, backgroundColor: colors.muted, gap: 4 }}>
          <Type variant="caption">{item.content.example.learning}</Type>
          <Type variant="caption" color={colors.secondary}>
            {item.content.example.english}
          </Type>
        </View>
      )}
      {!!details && <Type variant="caption">{details}</Type>}
      {item.source === 'curated' && !!item.content.spokenForms && (
        <Type variant="caption">Spoken · {item.content.spokenForms}</Type>
      )}
    </Surface>
  );
}
export const ratingColors: Record<Rating, string> = {
  Again: '#FCE9DE',
  Almost: '#C9D8F6',
  'Knew It': '#D6EAE0',
};

export function RatingActions({ onRate }: { onRate: (rating: Rating) => void }) {
  return (
    <View style={{ gap: 10 }}>
      <Type variant="eyebrow">HOW WELL DID YOU REMEMBER?</Type>
      <View style={{ flexDirection: 'row', gap: 6 }}>
        {ratings.map((rating) => (
          <Control
            key={rating}
            onPress={() => onRate(rating)}
            style={{
              flex: 1,
              alignItems: 'center',
              paddingHorizontal: 4,
              paddingVertical: 12,
              minHeight: 56,
              borderRadius: 13,
              backgroundColor: ratingColors[rating],
            }}
          >
            <Type variant="label" color="#183B35" style={{ textAlign: 'center' }}>
              {rating}
            </Type>
          </Control>
        ))}
      </View>
    </View>
  );
}
