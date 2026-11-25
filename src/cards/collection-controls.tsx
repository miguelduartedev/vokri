import { router } from 'expo-router';
import { useSyncExternalStore } from 'react';
import { View } from 'react-native';
import { useLearning } from '@/learning/provider';
import type { LearningLanguage } from '@/domain/languages';
import { Button, Control, Type } from '@/ui/primitives';
import { useTheme } from '@/ui/theme';

export function useCollectionStore() {
  const store = useLearning();
  useSyncExternalStore(store.subscribe, store.getRevision);
  return store;
}
export function collectionRoute(language: LearningLanguage, id: string) {
  return { pathname: '/my-words/[id]', params: { language, id } } as const;
}
export function MyWordsSections({ collections = false }: { collections?: boolean }) {
  const { colors } = useTheme();
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      {['Collections', 'All entries'].map((label, i) => {
        const active = i === 0 ? collections : !collections;
        return (
          <Control
            key={label}
            accessibilityState={{ selected: active }}
            onPress={() => router.navigate(i === 0 ? '/my-words/collections' : '/my-words')}
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: active ? colors.selected : colors.surface,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: colors.border,
              padding: 6,
            }}
          >
            <Type variant="label">{label}</Type>
          </Control>
        );
      })}
    </View>
  );
}
export function SectionAction({
  title,
  label,
  shortLabel,
  onPress,
}: {
  title: string;
  label: string;
  shortLabel?: string;
  onPress: () => void;
}) {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        flexWrap: 'wrap',
      }}
    >
      <Type variant="title" style={{ flexShrink: 1 }}>
        {title}
      </Type>
      <Control
        accessibilityLabel={label}
        onPress={onPress}
        style={{ backgroundColor: colors.selected, paddingHorizontal: 16, borderRadius: 12 }}
      >
        <Type variant="label" color={colors.onSelected}>
          ＋ {shortLabel ?? label}
        </Type>
      </Control>
    </View>
  );
}
export function OrganizeButton({
  language,
  wordId,
}: {
  language: LearningLanguage;
  wordId: string;
}) {
  return (
    <Button
      variant="secondary"
      label="Manage collections"
      onPress={() => router.push({ pathname: '/collection/picker', params: { language, wordId } })}
    />
  );
}
export function CheckRow({
  name,
  detail,
  checked,
  toggle,
}: {
  name: string;
  detail?: string;
  checked: boolean;
  toggle: () => void;
}) {
  const { colors } = useTheme();
  return (
    <Control
      accessibilityRole="checkbox"
      accessibilityLabel={name}
      accessibilityState={{ checked }}
      onPress={toggle}
      style={{
        padding: 14,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: checked ? colors.selected : colors.surface,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <View style={{ flex: 1, gap: 4 }}>
        <Type variant="section">{name}</Type>
        {!!detail && <Type variant="caption">{detail}</Type>}
      </View>
      <Type variant="label">{checked ? '✓' : '＋'}</Type>
    </Control>
  );
}
