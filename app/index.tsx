import { Redirect } from 'expo-router';
import { usePreferences } from '@/preferences/context';

export default function Index() {
  const { state } = usePreferences();
  if (state.status !== 'ready') return null;
  return (
    <Redirect href={state.preferences.activeLearningLanguage ? '/today' : '/language-selection'} />
  );
}
