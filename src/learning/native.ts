import { openDatabaseAsync } from 'expo-sqlite';
import { getVocabularyItem } from '../domain/vocabulary/registry';
import { migrateLearning } from './database';
import { LearningStore } from './store';

// One local connection for the running application, including React effect replay.
let opening: Promise<LearningStore> | undefined;
export function openLearningStore(): Promise<LearningStore> {
  if (!opening) {
    opening = openDatabaseAsync('language-learning.db')
      .then((db) => {
        try {
          migrateLearning(db);
          return new LearningStore(
            db,
            (languageId, wordId) => !!getVocabularyItem({ languageId, wordId }),
          );
        } catch (error) {
          db.closeSync();
          throw error;
        }
      })
      .catch((error) => {
        opening = undefined;
        throw error;
      });
  }
  return opening;
}
