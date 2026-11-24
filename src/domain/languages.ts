export const languageIds = ['fi', 'sv'] as const;
export type LearningLanguage = (typeof languageIds)[number];

export const languages = {
  fi: { name: 'Finnish', nativeName: 'Suomi' },
  sv: { name: 'Swedish', nativeName: 'Svenska' },
} as const satisfies Record<LearningLanguage, { name: string; nativeName: string }>;

export interface VocabularyRef {
  languageId: LearningLanguage;
  wordId: string;
}
