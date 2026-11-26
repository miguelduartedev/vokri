import type { PropsWithChildren } from 'react';
import { Surface } from '../ui/primitives';
import { useTheme } from '../ui/theme';

export function FilePanel({ children, match }: PropsWithChildren<{ match?: boolean }>) {
  const { colors, dark } = useTheme();
  return (
    <Surface
      style={{
        gap: 6,
        padding: 14,
        borderRadius: 12,
        backgroundColor: match ? (dark ? colors.selected : '#C9D8F6') : colors.surface,
      }}
    >
      {children}
    </Surface>
  );
}

export function countLabel(count: number, singular: string, plural = singular + 's') {
  return count + ' ' + (count === 1 ? singular : plural);
}
