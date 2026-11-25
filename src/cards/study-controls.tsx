import { router } from 'expo-router';
import { useState } from 'react';
import type { Origin, SessionMode } from '../domain/learning/model';
import type { LearningLanguage } from '../domain/languages';
import { Button } from '../ui/primitives';

export function openStudy(
  language: LearningLanguage,
  origin: Origin,
  selected?: string[],
  mode: SessionMode = 'learn_new',
  started?: string,
) {
  router.push({
    pathname: '/study',
    params: {
      language,
      mode,
      ...(started && { started }),
      origin: origin.kind,
      ...(origin.kind !== 'today' && { id: origin.id }),
      ...(selected && { selection: JSON.stringify(selected) }),
    },
  });
}
export function useLearningAction() {
  const [error, setError] = useState('');
  function run(action: () => void) {
    try {
      setError('');
      action();
    } catch {
      setError('Your change could not be saved. Please try again.');
    }
  }
  return { run, error };
}
export function StudyStart({
  language,
  origin,
  selected,
}: {
  language: LearningLanguage;
  origin: Origin;
  selected?: string[];
}) {
  return <Button label="Learn New" onPress={() => openStudy(language, origin, selected)} />;
}
