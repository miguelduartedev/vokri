import type { LearningLanguage } from '../languages';
import type { VocabularyItem } from '../vocabulary/schema';
export const entryTypes = ['Word', 'Phrase', 'Sentence'] as const;
export type EntryType = (typeof entryTypes)[number];
export interface PersonalDraft {
  type: EntryType;
  displayForm: string;
  english: string;
  note: string;
  lemma: string;
  context: string;
  forms: string;
}
export interface PersonalEntry extends PersonalDraft {
  languageId: LearningLanguage;
  wordId: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
  archivedAt: string | null;
}
export type LearningItem =
  | { source: 'curated'; content: VocabularyItem }
  | {
      source: 'personal';
      content: Pick<
        PersonalEntry,
        | 'languageId'
        | 'wordId'
        | 'displayForm'
        | 'english'
        | 'revision'
        | 'lemma'
        | 'context'
        | 'forms'
        | 'note'
      >;
    };
export const personalPrefix = 'personal:';
export const blankDraft: PersonalDraft = {
  type: 'Word',
  displayForm: '',
  english: '',
  note: '',
  lemma: '',
  context: '',
  forms: '',
};
export const comparable = (value: string) => value.normalize('NFC').trim().replace(/\s+/gu, ' ');
export const searchKey = (value: string) => comparable(value).toLowerCase();
export function materialChange(previous: PersonalDraft, next: PersonalDraft) {
  return (
    comparable(previous.displayForm) !== comparable(next.displayForm) ||
    comparable(previous.english) !== comparable(next.english)
  );
}
export function validDraft(draft: PersonalDraft) {
  return entryTypes.includes(draft.type) && !!draft.displayForm.trim() && !!draft.english.trim();
}
export function searchEntries(entries: PersonalEntry[], query: string, type?: EntryType) {
  const needle = searchKey(query);
  return entries.filter(
    (e) =>
      (!type || e.type === type) &&
      [e.displayForm, e.english].some((text) => searchKey(text).includes(needle)),
  );
}
