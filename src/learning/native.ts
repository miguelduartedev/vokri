import { openDatabaseAsync } from 'expo-sqlite';
import { getVocabularyItem } from '../domain/vocabulary/registry';
import { migrateLearning } from './database';
import { LearningStore } from './store';

export const learnerDatabaseName = 'language-learning.db';
async function openConnection() {
  const db = await openDatabaseAsync(learnerDatabaseName);
  try {
    migrateLearning(db);
    return {
      db,
      store: new LearningStore(
        db,
        (languageId, wordId) => !!getVocabularyItem({ languageId, wordId }),
      ),
    };
  } catch (error) {
    db.closeSync();
    throw error;
  }
}
let opening: ReturnType<typeof openConnection> | undefined;
export function learningConnection() {
  opening ??= openConnection().catch((error) => {
    opening = undefined;
    throw error;
  });
  return opening;
}
export async function openLearningStore() {
  return (await learningConnection()).store;
}
export async function closeLearningConnection() {
  if (!opening) return;
  const { db, store } = await opening;
  store.suspendWrites();
  await db.closeAsync();
  opening = undefined;
}
