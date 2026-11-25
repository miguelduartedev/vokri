import { DatabaseSync } from 'node:sqlite';
import type { LearningDatabase } from '../src/learning/database';

export function testDatabase(path = ':memory:'): LearningDatabase & { closeSync: () => void } {
  const db = new DatabaseSync(path);
  return {
    execSync: (sql) => db.exec(sql),
    runSync: (sql, ...values) => db.prepare(sql).run(...values),
    getAllSync: <T>(sql: string, ...values: (string | number | null)[]) =>
      db.prepare(sql).all(...values) as T[],
    withTransactionSync(operation) {
      db.exec('BEGIN');
      try {
        operation();
        db.exec('COMMIT');
      } catch (error) {
        db.exec('ROLLBACK');
        throw error;
      }
    },
    closeSync: () => db.close(),
  };
}
