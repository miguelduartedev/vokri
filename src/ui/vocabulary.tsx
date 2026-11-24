import { memo } from 'react';
import { View } from 'react-native';
import { languages } from '../domain/languages';
import type { VocabularyItem } from '../domain/vocabulary/schema';
import { Control, Icon, Surface, Type } from './primitives';
import { useTheme } from './theme';

export const VocabularyRow = memo(function VocabularyRow({
  item,
  onOpen,
}: {
  item: VocabularyItem;
  onOpen: (item: VocabularyItem) => void;
}) {
  const { colors } = useTheme();
  return (
    <Control
      accessibilityLabel={item.displayForm + ', ' + item.english + ', ' + item.partOfSpeech}
      onPress={() => onOpen(item)}
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 13,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <View style={{ flex: 1, gap: 4 }}>
        <Type variant="section">{item.displayForm}</Type>
        <Type variant="caption" color={colors.secondary}>
          {item.english} · {item.partOfSpeech}
        </Type>
      </View>
      <Icon name="right" tint={colors.secondary} />
    </Control>
  );
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const { colors } = useTheme();
  return (
    <View style={{ gap: 4 }}>
      <Type variant="eyebrow" color={colors.secondary}>
        {title}
      </Type>
      {children}
    </View>
  );
}

export function VocabularyDetail({ item }: { item: VocabularyItem }) {
  const { colors } = useTheme();
  const swedish = item.languageId === 'sv' ? item : undefined;
  const forms = [
    ['Gender', swedish?.noun?.gender],
    ['Definite singular', swedish?.noun?.definiteSingular],
    ['Indefinite plural', swedish?.noun?.indefinitePlural],
    ['Definite plural', swedish?.noun?.definitePlural],
    ['Present', swedish?.verb?.present],
    ['Preterite', swedish?.verb?.past],
    ['Supine', swedish?.verb?.supine],
    ['Neuter', swedish?.adjective?.neuter],
    ['Plural', swedish?.adjective?.plural],
  ].filter(([, value]) => value);
  return (
    <Surface style={{ padding: 20, gap: 18 }}>
      <Type variant="eyebrow" color={colors.secondary}>
        {languages[item.languageId].name.toUpperCase()} / {item.partOfSpeech.toUpperCase()}
      </Type>
      <Type accessibilityRole="header" variant="display" style={{ fontSize: 46, lineHeight: 52 }}>
        {item.displayForm}
      </Type>
      <Type variant="section">{item.english}</Type>
      <View style={{ height: 1, backgroundColor: colors.border }} />
      {forms.length > 0 && (
        <Section title="FORMS">
          {forms.map(([label, value]) => (
            <Type key={label}>
              {label} · {value}
            </Type>
          ))}
        </Section>
      )}
      {item.example && (
        <Section title="IN CONTEXT">
          <Type>{item.example.learning}</Type>
          <Type color={colors.secondary}>{item.example.english}</Type>
        </Section>
      )}
      {item.spokenForms && (
        <Section title="SPOKEN FORMS">
          <Type>{item.spokenForms}</Type>
        </Section>
      )}
      {item.notes && (
        <Section title="USAGE NOTE">
          <Type>{item.notes}</Type>
        </Section>
      )}
      <Type variant="caption" color={colors.secondary}>
        {item.lemma !== item.displayForm ? 'Dictionary lemma · ' + item.lemma + '\n' : ''}
        {item.topic} · {item.tier}
      </Type>
    </Surface>
  );
}
