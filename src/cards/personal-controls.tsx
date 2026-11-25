import { router } from 'expo-router';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useId, type ReactNode } from 'react';
import { Control, Icon, Type } from '../ui/primitives';
import { useTheme } from '../ui/theme';
import type { LearningLanguage } from '../domain/languages';

export function openEntry(language: LearningLanguage, id: string, replace = false) {
  const route = { pathname: '/personal/[id]', params: { language, id } } as const;
  if (replace) router.replace(route);
  else router.push(route);
}
export function PersonalPage({
  children,
  title,
  language,
}: {
  children: ReactNode;
  title: string;
  language: string;
}) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center', gap: 8 }}>
        <Control
          accessibilityLabel="Back"
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/my-words'))}
        >
          <Icon name="back" tint={colors.ink} />
        </Control>
        <Type variant="label" style={{ flex: 1 }}>
          {title}
        </Type>
        <Type variant="eyebrow">{language.toUpperCase()}</Type>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1, padding: 24, gap: 16 }}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export function Field({ label, ...props }: TextInputProps & { label: string }) {
  const { colors, fonts } = useTheme();
  const id = useId();
  return (
    <View style={{ gap: 6 }}>
      <Type nativeID={id} variant="label">
        {label}
      </Type>
      <TextInput
        {...props}
        accessibilityLabel={label}
        accessibilityLabelledBy={id}
        placeholderTextColor={colors.secondary}
        style={{
          color: colors.ink,
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: 12,
          minHeight: props.multiline ? 76 : 50,
          padding: 12,
          fontFamily: fonts ? 'Inter' : undefined,
          fontSize: 16,
          textAlignVertical: props.multiline ? 'top' : 'center',
        }}
      />
    </View>
  );
}
export function Chips<T extends string>({
  values,
  value,
  onSelect,
}: {
  values: readonly T[];
  value: T;
  onSelect: (value: T) => void;
}) {
  const { colors } = useTheme();
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
      {values.map((option) => (
        <Control
          key={option}
          accessibilityState={{ selected: value === option }}
          onPress={() => onSelect(option)}
          style={{
            paddingHorizontal: 13,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: value === option ? colors.selected : colors.surface,
          }}
        >
          <Type variant="label">{option}</Type>
        </Control>
      ))}
    </View>
  );
}
