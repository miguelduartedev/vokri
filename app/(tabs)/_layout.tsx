import { layout } from '@/ui/layout';
import { Tabs } from 'expo-router';
import { Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@/ui/primitives';
import { useTheme } from '@/ui/theme';

const tabs = { today: 'Today', discover: 'Discover', 'my-words': 'My Words' } as const;
export default function TabLayout() {
  const { colors, fonts } = useTheme();
  const { bottom } = useSafeAreaInsets();
  const { width, fontScale } = useWindowDimensions();
  const wrapLabels = width / fontScale < 190;
  const labelStyle = { fontSize: 11, fontFamily: fonts ? 'Inter' : undefined };
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
          height: 62 + bottom + Math.max(0, fontScale - 1) * 18 + (wrapLabels ? 16 * fontScale : 0),
          paddingTop: 4,
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: labelStyle,
        tabBarLabel: wrapLabels
          ? ({ color, children }) => (
              <Text style={[labelStyle, { color, textAlign: 'center' }]}>{children}</Text>
            )
          : undefined,
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
