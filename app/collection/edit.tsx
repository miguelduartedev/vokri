import { Redirect, router, useLocalSearchParams, usePreventRemove } from 'expo-router';
import { useState, useRef } from 'react';
import { Alert } from 'react-native';
import { languages, type LearningLanguage } from '@/domain/languages';
import type { Collection } from '@/learning/store';
import { useLanguage } from '@/cards/discover-controls';
import { collectionRoute, useCollectionStore } from '@/cards/collection-controls';
import { PersonalPage, Field } from '@/cards/personal-controls';
import { Button, Surface, Type } from '@/ui/primitives';

export default function EditCollection() {
  const p = useLocalSearchParams<{ language: string; id?: string; picker?: string }>(),
    language = useLanguage(),
    store = useCollectionStore();
  if (!language || p.language !== language) return <Redirect href="/my-words/collections" />;
  const original = p.id ? store.collection(language, p.id) : undefined;
  if (p.id && !original) return <Redirect href="/my-words/collections" />;
  return (
    <Form
      key={language + (p.id ?? 'new')}
      language={language}
      collection={original}
      picker={p.picker === '1'}
    />
  );
}
function Form({
  language,
  collection,
  picker,
}: {
  language: LearningLanguage;
  collection?: Collection;
  picker: boolean;
}) {
  const store = useCollectionStore(),
    [original] = useState(collection),
    [name, setName] = useState(original?.name ?? ''),
    [description, setDescription] = useState(original?.description ?? ''),
    [error, setError] = useState('');
  const saving = useRef(false);
  const [saved, setSaved] = useState(false);
  const unguard = usePreventRemove(
    !saved && (name !== (original?.name ?? '') || description !== (original?.description ?? '')),
    ({ repeat }) =>
      Alert.alert('Discard changes?', 'Your unsaved collection details will be lost.', [
        { text: 'Keep editing', style: 'cancel' },
        {
          text: 'Discard',
          style: 'destructive',
          onPress: () => {
            setSaved(true);
            repeat();
          },
        },
      ]),
  );
  function save() {
    if (saving.current) return;
    saving.current = true;
    try {
      const id = store.saveCollection(language, name, description, original);
      setSaved(true);
      unguard();
      if ((picker || original) && router.canGoBack()) router.back();
      else router.replace(collectionRoute(language, id));
    } catch (e) {
      saving.current = false;
      setError(
        e instanceof Error && /^(Enter a collection|A collection|This collection)/.test(e.message)
          ? e.message
          : 'Could not save. Your text is still here.',
      );
    }
  }
  return (
    <PersonalPage
      title={original ? 'Edit collection' : 'New collection'}
      language={languages[language].name}
    >
      <Type variant="eyebrow">PERSONAL COLLECTION</Type>
      <Type variant="display">{original ? 'Edit collection.' : 'Give these words a place.'}</Type>
      <Field label="Collection name" value={name} onChangeText={setName} />
      <Field
        multiline
        label="Description (optional)"
        value={description}
        onChangeText={setDescription}
      />
      <Surface>
        <Type variant="caption">Organizing words keeps your study progress and review dates.</Type>
      </Surface>
      {!!error && <Type accessibilityRole="alert">{error}</Type>}
      <Button label={original ? 'Save changes' : 'Create collection'} onPress={save} />
      <Button
        variant="secondary"
        label="Cancel"
        onPress={() =>
          router.canGoBack() ? router.back() : router.replace('/my-words/collections')
        }
      />
    </PersonalPage>
  );
}
