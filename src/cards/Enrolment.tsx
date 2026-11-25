import { OrganizeButton } from './collection-controls';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal, ScrollView, View } from 'react-native';
import type { LearningLanguage } from '../domain/languages';
import type { CuratedDeck } from '../domain/vocabulary/decks';
import { getVocabularyItem } from '../domain/vocabulary/registry';
import { useInventory, useLearning } from '../learning/provider';
import { Button, Control, Icon, Surface, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';
import { StudyStart, useLearningAction } from './study-controls';

export function WordEnrolment({ language, id }: { language: LearningLanguage; id: string }) {
  const store = useLearning();
  const { enrolled, eligible } = useInventory(language);
  const { run, error } = useLearningAction();
  return (
    <View style={{ gap: 10 }}>
      {enrolled.has(id) ? (
        <>
          <Type variant="label">In your study words</Type>
          {eligible.includes(id) && (
            <StudyStart language={language} origin={{ kind: 'word', id }} />
          )}
        </>
      ) : (
        <Button label="Add to study" onPress={() => run(() => store.enrol(language, [id]))} />
      )}
      <OrganizeButton language={language} wordId={id} />
      {!!error && <Type accessibilityRole="alert">{error}</Type>}
    </View>
  );
}
export function DeckEnrolment({ deck }: { deck: CuratedDeck }) {
  const store = useLearning();
  const { colors } = useTheme();
  const { enrolled, eligible } = useInventory(deck.languageId);
  const [selection, setSelection] = useState<string[] | null>(null);
  const [added, setAdded] = useState<string[] | null>(null);
  const { run, error } = useLearningAction();
  const remaining = deck.wordRefs.filter((r) => !enrolled.has(r.wordId)).map((r) => r.wordId);
  const studyCount = deck.wordRefs.length - remaining.length;
  const origin = { kind: 'deck', id: deck.deckId } as const;
  if (selection)
    return (
      <Modal visible onRequestClose={() => setSelection(null)}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.background,
            paddingHorizontal: 24,
            paddingVertical: 12,
            gap: 10,
          }}
        >
          <ScrollView contentContainerStyle={{ gap: 10, paddingBottom: 16 }}>
            <Type variant="eyebrow">SELECT VOCABULARY</Type>
            <Type variant="title">Choose your words.</Type>
            <Button
              variant="secondary"
              label="Select all remaining"
              onPress={() => setSelection(remaining)}
            />
            {remaining.map((id) => {
              const selected = selection.includes(id);
              const item = getVocabularyItem({ languageId: deck.languageId, wordId: id })!;
              return (
                <Control
                  key={id}
                  accessibilityRole="checkbox"
                  accessibilityLabel={item.displayForm}
                  accessibilityState={{ checked: selected }}
                  onPress={() =>
                    setSelection(
                      selected ? selection.filter((key) => key !== id) : [...selection, id],
                    )
                  }
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 8,
                    alignItems: 'center',
                    gap: 10,
                    borderBottomWidth: 1,
                    borderColor: colors.border,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Type variant="label">{item.displayForm}</Type>
                    <Type variant="caption">{item.english}</Type>
                  </View>
                  <Icon name={selected ? 'selected' : 'unselected'} />
                </Control>
              );
            })}
          </ScrollView>
          <Button
            label={'Add ' + selection.length + ' to study'}
            disabled={!selection.length}
            onPress={() =>
              run(() => {
                const ids = remaining.filter((id) => selection.includes(id));
                store.enrol(deck.languageId, ids);
                setAdded(ids);
                setSelection(null);
              })
            }
          />
          <Button variant="secondary" label="Cancel" onPress={() => setSelection(null)} />
          {!!error && <Type accessibilityRole="alert">{error}</Type>}
        </SafeAreaView>
      </Modal>
    );
  return (
    <Surface>
      <Type variant="title">{deck.wordRefs.length} words</Type>
      <Type variant="caption">
        {studyCount} in study · {remaining.length} available to add
      </Type>
      {added && (
        <Type accessibilityLiveRegion="polite">
          {added.length} {added.length === 1 ? 'word' : 'words'} added to study.
        </Type>
      )}
      {deck.wordRefs.some((r) => eligible.includes(r.wordId)) && (
        <StudyStart
          language={deck.languageId}
          origin={origin}
          selected={added?.length && added.some((id) => eligible.includes(id)) ? added : undefined}
        />
      )}
      {remaining.length > 0 && (
        <>
          <Button
            label={'Start with ' + Math.min(5, remaining.length) + ' words'}
            onPress={() => setSelection(remaining.slice(0, 5))}
          />
          <Button variant="secondary" label="Choose words" onPress={() => setSelection([])} />
        </>
      )}
    </Surface>
  );
}
