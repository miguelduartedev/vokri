import { Stack } from 'expo-router';
import { useTheme } from '@/ui/theme';
export const unstable_settings = { initialRouteName: 'index' };
export default function DiscoverLayout() {
  const { colors } = useTheme();
  return (
    <Stack
      screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}
    />
  );
}
