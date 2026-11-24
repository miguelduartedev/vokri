import { layout } from '@/ui/layout';
import { Tabs } from 'expo-router';
import { View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@/ui/primitives';
import { useTheme } from '@/ui/theme';

const tabs = { today: 'Today', discover: 'Discover', 'my-words': 'My Words' } as const;
export const unstable_settings = { initialRouteName: 'today' };
export default function TabLayout() {
  const { colors, fonts } = useTheme();
  const { bottom } = useSafeAreaInsets();
  const { fontScale } = useWindowDimensions();
  return (
    <Tabs
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: {
          height: 62 + bottom + Math.max(0, fontScale - 1) * 18,
          paddingTop: 4,
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: { fontSize: 11, fontFamily: fonts ? 'Inter' : undefined },
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      {(Object.keys(tabs) as (keyof typeof tabs)[]).map((name) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: tabs[name],
            tabBarAccessibilityLabel: tabs[name],
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 42,
                  height: 32,
                  borderRadius: layout.controlRadius,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: focused ? colors.selected : 'transparent',
                }}
              >
                <Icon name={name} tint={focused ? colors.onSelected : colors.secondary} />
              </View>
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
