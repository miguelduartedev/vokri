import { Platform } from 'react-native';

// Nordic Editorial mobile dimensions, expressed in native logical units.
export const layout = {
  margin: 24,
  touchTarget: Platform.OS === 'android' ? 48 : 44,
  buttonHeight: 52,
  controlRadius: 13,
  cardRadius: 22,
  cardGap: 12,
} as const;
