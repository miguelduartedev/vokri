import { directions, type DirectionChoice } from '../domain/learning/model';
import { layout } from '@/ui/layout';
import { useRef, useState, type ReactNode, type RefObject } from 'react';
import {
  AccessibilityInfo,
  Modal,
  Pressable,
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { languageIds, languages, type LearningLanguage } from '../domain/languages';
import { Control, Icon, Type } from './primitives';
import { useTheme } from './theme';

export function LanguageCards({
  value,
  onSelect,
  disabled,
}: {
  value: LearningLanguage;
  onSelect: (language: LearningLanguage) => void;
  disabled?: boolean;
}) {
  const { colors } = useTheme();
  return (
    <View accessibilityRole="radiogroup" style={{ gap: layout.cardGap }}>
      {languageIds.map((id) => {
        const active = id === value;
        const language = languages[id];
        return (
          <Control
            key={id}
            disabled={disabled}
            accessibilityRole="radio"
            accessibilityLabel={language.name + ', ' + language.nativeName}
            accessibilityState={{ checked: active, disabled: !!disabled }}
            onPress={() => onSelect(id)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              minHeight: 96,
              paddingHorizontal: 16,
              paddingVertical: 15,
              gap: layout.cardGap,
              borderRadius: layout.cardRadius,
              borderWidth: active ? 2 : 1,
              borderColor: active ? colors.focus : colors.border,
              backgroundColor: active ? colors.background : colors.surface,
            }}
          >
            <View
              style={{
                minWidth: 40,
                minHeight: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                backgroundColor: colors.muted,
              }}
            >
              <Type variant="eyebrow">{id.toUpperCase()}</Type>
            </View>
            <View style={{ flex: 1, gap: 2 }}>
              <Type variant="label">{language.name}</Type>
              <Type variant="caption" color={colors.secondary}>
                {language.nativeName}
              </Type>
            </View>
            <Icon name={active ? 'selected' : 'unselected'} />
          </Control>
        );
      })}
    </View>
  );
}

export function SettingRow({
  title,
  detail,
  value,
  onPress,
  trigger,
}: {
  title: string;
  detail: string;
  value?: string;
  onPress: () => void;
  trigger?: RefObject<React.ComponentRef<typeof View> | null>;
}) {
  const { colors } = useTheme();
  return (
    <Control
      ref={trigger}
      onPress={onPress}
      accessibilityLabel={[title, value ?? detail].join(', ')}
      style={{
        minHeight: 76,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: colors.border,
      }}
    >
      <View style={{ flex: 1, gap: 3 }}>
        <Type variant="label">{title}</Type>
        <Type variant="caption" color={colors.secondary}>
          {detail}
        </Type>
      </View>
      {value && <Type variant="caption">{value}</Type>}
      <Icon name="right" tint={colors.secondary} />
    </Control>
  );
}

export function Sheet({
  title,
  description,
  onClose,
  children,
}: {
  title: string;
  description: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const heading = useRef<React.ComponentRef<typeof View>>(null);
  return (
    <Modal
      visible
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
      navigationBarTranslucent
      onShow={() => {
        if (heading.current) AccessibilityInfo.sendAccessibilityEvent(heading.current, 'focus');
      }}
    >
      <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.38)' }}>
        <Pressable
          accessible={false}
          importantForAccessibility="no"
          onPress={onClose}
          style={{ flex: 1 }}
        />
        <View
          accessibilityViewIsModal
          onAccessibilityEscape={onClose}
          style={{
            maxHeight: height - insets.top - 12,
            backgroundColor: colors.surface,
            borderTopRightRadius: 22,
            borderTopLeftRadius: 22,
            paddingTop: 12,
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              width: 48,
              height: 4,
              backgroundColor: colors.border,
              borderRadius: 2,
            }}
          />
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              paddingHorizontal: layout.margin,
              paddingTop: 8,
              gap: 8,
              paddingBottom: Math.max(20, insets.bottom + 12),
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <View
                ref={heading}
                accessible
                accessibilityRole="header"
                accessibilityLabel={title}
                style={{ flex: 1 }}
              >
                <Type variant="title">{title}</Type>
              </View>
              <Control
                onPress={onClose}
                accessibilityLabel={'Close ' + title.toLowerCase()}
                style={{ alignItems: 'center' }}
              >
                <Type variant="caption" color={colors.secondary}>
                  Close
                </Type>
              </Control>
            </View>
            <Type variant="caption" color={colors.secondary}>
              {description}
            </Type>
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export function usePreferenceAction() {
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const busy = useRef(false);
  async function save(action: () => Promise<void>, done?: () => void) {
    if (busy.current) return;
    busy.current = true;
    setError('');
    setSaving(true);
    try {
      await action();
      done?.();
    } catch {
      setError('Your choice could not be saved. Please try again.');
    } finally {
      busy.current = false;
      setSaving(false);
    }
  }
  return { error, saving, save };
}

export function LanguageChip({
  language,
  onPress,
  trigger,
}: {
  language: LearningLanguage;
  onPress: () => void;
  trigger: RefObject<React.ComponentRef<typeof View> | null>;
}) {
  const { colors } = useTheme();
  return (
    <Control
      ref={trigger}
      onPress={onPress}
      accessibilityLabel={'Learning language, ' + languages[language].name}
      style={{
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.surface,
      }}
    >
      <Type variant="eyebrow" color={colors.secondary}>
        {language.toUpperCase()}
      </Type>
      <Type variant="caption">{languages[language].name}</Type>
      <Icon name="down" tint={colors.secondary} />
    </Control>
  );
}
export function useSheetTrigger() {
  const trigger = useRef<React.ComponentRef<typeof View>>(null);
  const [open, setOpen] = useState(false);
  function close() {
    setOpen(false);
    requestAnimationFrame(() => {
      if (trigger.current) AccessibilityInfo.sendAccessibilityEvent(trigger.current, 'focus');
    });
  }
  return { trigger, open, show: () => setOpen(true), close };
}

export function LanguageSheet({
  language,
  onSelect,
  close,
}: {
  language: LearningLanguage;
  onSelect: (id: LearningLanguage) => Promise<void>;
  close: () => void;
}) {
  const { error, saving, save } = usePreferenceAction();
  const { colors } = useTheme();
  return (
    <Sheet
      title="Learning language"
      description="Switch anytime. Your progress stays here."
      onClose={close}
    >
      <LanguageCards
        value={language}
        disabled={saving}
        onSelect={(id) => (id === language ? close() : void save(() => onSelect(id), close))}
      />
      {error && <Type accessibilityRole="alert">{error}</Type>}
      <Type variant="caption" color={colors.secondary}>
        Review schedules stay separate for each language.
      </Type>
    </Sheet>
  );
}

export function directionLabel(language: LearningLanguage, choice: DirectionChoice) {
  if (choice === 'mixed') return 'Mixed';
  const name = languages[language].name;
  return choice === 'recognition' ? name + ' → English' : 'English → ' + name;
}
export function DirectionChoices({
  language,
  value,
  onSelect,
}: {
  language: LearningLanguage;
  value: DirectionChoice;
  onSelect: (choice: DirectionChoice) => void;
}) {
  const { colors } = useTheme();
  return (
    <View accessibilityRole="radiogroup" style={{ gap: 6 }}>
      {directions.map((choice) => (
        <Control
          key={choice}
          accessibilityRole="radio"
          accessibilityLabel={directionLabel(language, choice)}
          accessibilityState={{ checked: value === choice }}
          onPress={() => onSelect(choice)}
          style={{
            padding: 14,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: value === choice ? colors.selected : colors.surface,
          }}
        >
          <Type variant="label">{directionLabel(language, choice)}</Type>
          <Icon name={value === choice ? 'selected' : 'unselected'} />
        </Control>
      ))}
    </View>
  );
}
