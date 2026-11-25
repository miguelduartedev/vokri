import { View, useWindowDimensions } from 'react-native';
import { languages } from '../domain/languages';
import { ratings, type Direction, type Rating } from '../domain/learning/model';
import type { VocabularyItem } from '../domain/vocabulary/schema';
import { Control, Surface, Type } from './primitives';
import { suppliedForms } from './vocabulary';
import { useTheme } from './theme';

export function Flashcard({
  item,
  direction,
  revealed,
  reveal,
}: {
  item: VocabularyItem;
  direction: Direction;
  revealed: boolean;
  reveal: () => void;
}) {
  const { colors } = useTheme();
  const language = languages[item.languageId].name;
  const forward = direction === 'recognition';
  const prompt = forward ? item.displayForm : item.english;
  const answer = forward ? item.english : item.displayForm;
  const { height } = useWindowDimensions();
  const details = suppliedForms(item)
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
      {item.example && (
        <View style={{ padding: 12, borderRadius: 12, backgroundColor: colors.muted, gap: 4 }}>
          <Type variant="caption">{item.example.learning}</Type>
          <Type variant="caption" color={colors.secondary}>
            {item.example.english}
          </Type>
        </View>
      )}
      {!!details && <Type variant="caption">{details}</Type>}
      {!!item.spokenForms && <Type variant="caption">Spoken · {item.spokenForms}</Type>}
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
