import { Stack } from 'expo-router';
import { useTheme } from '@/ui/theme';
export const unstable_settings = { anchor: 'index' };
export default function MyWordsLayout() {
  const { colors } = useTheme();
  return (
    <Stack
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}
    />
  );
}
