import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { Alert } from 'react-native';
import { useLanguage } from '@/cards/discover-controls';
import { PersonalPage } from '@/cards/personal-controls';
import { useLearning, useInventory } from '@/learning/provider';
import { Button, Surface, Type } from '@/ui/primitives';
import { languages, type LearningLanguage } from '@/domain/languages';
import { StudyStart, useLearningAction } from '@/cards/study-controls';
export default function DetailRoute() {
  const active = useLanguage(),
    p = useLocalSearchParams<{ id: string; language: string }>();
  return active === p.language && active ? (
    <Detail language={active} id={p.id} />
  ) : (
    <Redirect href="/my-words" />
  );
}
function Detail({ language, id }: { language: LearningLanguage; id: string }) {
  const store = useLearning(),
    { enrolled, eligible } = useInventory(language),
    { run, error } = useLearningAction();
  const entry = store.personal(language, id);
  if (!entry) return <Redirect href="/my-words" />;
  const learning = enrolled.has(id);
  return (
    <PersonalPage title="Personal entry" language={languages[language].name}>
      <Type variant="eyebrow">MY WORDS / {entry.type.toUpperCase()}</Type>
      <Type variant="display" accessibilityRole="header">
        {entry.displayForm}
      </Type>
      <Type variant="title">{entry.english}</Type>
      {[
        ['Dictionary form', entry.lemma],
        ['Context', entry.context],
        ['Forms', entry.forms],
        ['Personal note', entry.note],
      ]
        .filter(([, v]) => v)
        .map(([k, v]) => (
          <Surface key={k}>
            <Type variant="eyebrow">{k.toUpperCase()}</Type>
            <Type>{v}</Type>
          </Surface>
        ))}
      <Surface>
        <Type variant="eyebrow">STUDY STATUS</Type>
        <Type variant="section">
          {learning
            ? eligible.includes(id)
              ? 'In study · New'
              : 'In study · Introduced'
            : 'Saved · Not in study'}
        </Type>
        {!learning ? (
          <Button label="Add to study" onPress={() => run(() => store.enrol(language, [id]))} />
        ) : eligible.includes(id) ? (
          <StudyStart language={language} origin={{ kind: 'word', id }} />
        ) : (
          <Button label="Go to Today" onPress={() => router.navigate('/today')} />
        )}
      </Surface>
      <Button
        variant="secondary"
        label="Edit entry"
        onPress={() => router.push({ pathname: '/personal/edit', params: { language, id } })}
      />
      <Button
        variant="secondary"
        label="Delete entry"
        onPress={() =>
          Alert.alert(
            'Delete this entry?',
            'This removes it from My Words and scheduled study. Previously recorded ratings stay in your history.',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Delete',
                style: 'destructive',
                onPress: () =>
                  run(() => {
                    store.archiveEntry(language, id);
                    router.dismissTo('/my-words');
                  }),
              },
            ],
          )
        }
      />
      {!!error && <Type accessibilityRole="alert">{error}</Type>}
    </PersonalPage>
  );
}
