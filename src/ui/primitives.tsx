import { layout } from '@/ui/layout';
import { Image } from 'expo-image';
import { useState, type ComponentProps, type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { useTheme } from './theme';

const variants = StyleSheet.create({
  display: { fontSize: 38, lineHeight: 40 },
  page: { fontSize: 34, lineHeight: 38 },
  title: { fontSize: 26, lineHeight: 30 },
  section: { fontSize: 17, lineHeight: 24 },
  body: { fontSize: 15, lineHeight: 22 },
  label: { fontSize: 15, lineHeight: 20 },
  caption: { fontSize: 12, lineHeight: 17 },
  eyebrow: { fontSize: 11, lineHeight: 16, letterSpacing: 0.5 },
});

export function Type({
  variant = 'body',
  color,
  style,
  ...props
}: ComponentProps<typeof Text> & {
  variant?: keyof typeof variants;
  color?: string;
}) {
  const { colors, fonts } = useTheme();
  const editorial = variant === 'display' || variant === 'page' || variant === 'title';
  const strong = variant === 'section' || variant === 'label' || variant === 'eyebrow';
  const family = editorial ? 'Newsreader' : strong ? 'InterSemiBold' : 'Inter';
  return (
    <Text
      {...props}
      style={[
        variants[variant],
        {
          color: color ?? colors.ink,
          fontFamily: fonts ? family : editorial ? 'serif' : undefined,
          fontWeight: !fonts && strong ? '600' : undefined,
        },
        style,
      ]}
    />
  );
}

const icons = {
  collectionArrow: require('../../assets/icons/collection-arrow.svg'),
  search: require('../../assets/icons/search.svg'),
  filter: require('../../assets/icons/filter.svg'),
  close: require('../../assets/icons/close.svg'),
  today: require('../../assets/icons/today.svg'),
  discover: require('../../assets/icons/discover.svg'),
  'my-words': require('../../assets/icons/my-words.svg'),
  settings: require('../../assets/icons/settings.svg'),
  back: require('../../assets/icons/back.svg'),
  down: require('../../assets/icons/down.svg'),
  right: require('../../assets/icons/right.svg'),
  selected: require('../../assets/icons/selected.svg'),
  unselected: require('../../assets/icons/unselected.svg'),
};
export type IconName = keyof typeof icons;
export function Icon({ name, tint }: { name: IconName; tint?: string }) {
  const size = name === 'down' ? 13 : name === 'back' ? 21 : name === 'right' ? 20 : 22;
  return (
    <Image
      accessible={false}
      source={icons[name]}
      tintColor={tint}
      contentFit="contain"
      style={{ width: size, height: size }}
    />
  );
}

export function Control({
  children,
  style,
  ...props
}: Omit<PressableProps, 'style' | 'children'> & {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  ref?: React.Ref<React.ComponentRef<typeof View>>;
}) {
  const [focused, setFocused] = useState(false);
  const { colors } = useTheme();
  return (
    <Pressable
      accessibilityRole="button"
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={({ pressed }) => [
        { minHeight: layout.touchTarget, minWidth: layout.touchTarget, justifyContent: 'center' },
        style,
        focused && { outlineWidth: 2, outlineColor: colors.focus, outlineOffset: -2 },
        (pressed || props.disabled) && { opacity: 0.7 },
      ]}
    >
      {children}
    </Pressable>
  );
}

export function Button({
  label,
  accessibilityLabel,
  accessibilityState,
  onPress,
  disabled,
  align = 'center',
  variant = 'primary',
}: {
  label: string;
  accessibilityLabel?: string;
  accessibilityState?: PressableProps['accessibilityState'];
  onPress: () => void;
  disabled?: boolean;
  align?: 'left' | 'center';
  variant?: 'primary' | 'secondary';
}) {
  const { colors } = useTheme();
  return (
    <Control
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      disabled={disabled}
      accessibilityState={{ ...accessibilityState, disabled: !!disabled }}
      style={{
        minHeight: layout.buttonHeight,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: layout.controlRadius,
        alignItems: align === 'left' ? 'flex-start' : 'center',
        backgroundColor: variant === 'primary' ? colors.action : colors.surface,
        borderWidth: variant === 'primary' ? 0 : 1,
        borderColor: colors.border,
      }}
    >
      <Type
        variant="label"
        color={variant === 'primary' ? colors.onAction : colors.ink}
        style={{ textAlign: align }}
      >
        {label}
      </Type>
    </Control>
  );
}

export function Surface({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const { colors } = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: layout.cardRadius,
          padding: 18,
          gap: layout.cardGap,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function Wordmark() {
  const { colors } = useTheme();
  return (
    <View
      accessible
      accessibilityLabel="Vokri Cards"
      style={{ flexDirection: 'row', alignItems: 'baseline', gap: 6 }}
    >
      <Type variant="title" style={{ fontSize: 30, lineHeight: 37 }}>
        vokri
      </Type>
      <Type variant="eyebrow" color={colors.secondary} style={{ fontSize: 10 }}>
        CARDS
      </Type>
    </View>
  );
}
