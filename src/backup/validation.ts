import type { LearningDatabase } from '../learning/database';
import { BackupError } from './format';
import { getVocabularyItem } from '../domain/vocabulary/registry';
import { languageIds, type VocabularyRef } from '../domain/languages';
import { searchKey } from '../domain/learning/personal';

type InspectionDatabase = LearningDatabase & {
  getEachSync<T>(sql: string): Iterable<T>;
};

export function schemaObjects(db: LearningDatabase) {
  return db.getAllSync<{ type: string; name: string; tbl_name: string; sql: string | null }>(
    'SELECT type,name,tbl_name,sql FROM sqlite_schema ORDER BY type,name',
  );
}
// Only application-authored SQL runs. Compare all schema objects before using indexes or views.
export function inspectDatabase(
  db: InspectionDatabase,
  expected: ReturnType<typeof schemaObjects>,
) {
  db.execSync('PRAGMA trusted_schema=OFF; PRAGMA query_only=ON; PRAGMA cell_size_check=ON');
  const version = db.getAllSync<{ user_version: number }>('PRAGMA user_version')[0]?.user_version;
  const shape = db.getAllSync<{ n: number; bytes: number }>(
    'SELECT count(*) n, coalesce(sum(length(CAST(sql AS BLOB))),0) bytes FROM sqlite_schema',
  )[0];
  if (
    version !== 4 ||
    shape.n !== expected.length ||
    shape.bytes > 65536 ||
    JSON.stringify(schemaObjects(db)) !== JSON.stringify(expected)
  )
    throw new BackupError('This learner database has an unsupported structure or version.');
  if (
    db.getAllSync<{ integrity_check: string }>('PRAGMA integrity_check(1)')[0]?.integrity_check !==
      'ok' ||
    db.getAllSync('SELECT 1 FROM pragma_foreign_key_check LIMIT 1').length
  )
    throw new BackupError('The backup contains damaged records or broken relationships.');
  function reject(query: string) {
    if (db.getAllSync(query + ' LIMIT 1').length)
      throw new BackupError('The backup contains an invalid learner record or study checkpoint.');
  }
  // v4 tables use SQLite affinities. Check actual storage classes as well as declared constraints.
  for (const table of expected.filter((row) => row.type === 'table')) {
    const columns = db.getAllSync<{ name: string; type: string; notnull: number; pk: number }>(
      'PRAGMA table_info(' + table.name + ')',
    );
    const invalid = columns.map(({ name, type, notnull, pk }) => {
      const actual = `typeof(${name})`;
      const required = `'${type.toLowerCase()}'`;
      return notnull || pk ? `${actual} != ${required}` : `${actual} NOT IN (${required},'null')`;
    });
    reject('SELECT 1 FROM ' + table.name + ' WHERE ' + invalid.join(' OR '));
  }
  reject(`SELECT 1 FROM personal_entries WHERE revision<1 OR typeof(revision)!='integer' OR
    length(wordId)!=41 OR substr(wordId,10) GLOB '*[^0-9a-f]*' OR trim(displayForm)='' OR trim(english)=''`);
  reject(`SELECT 1 FROM (SELECT languageId,wordId FROM enrolments UNION ALL SELECT languageId,wordId FROM collection_members) r
    WHERE r.wordId GLOB 'personal:*' AND NOT EXISTS(SELECT 1 FROM personal_entries p WHERE p.wordId=r.wordId AND p.languageId=r.languageId)`);
  reject(`SELECT 1 FROM session_cards c LEFT JOIN personal_entries p USING(languageId,wordId)
    WHERE typeof(position)!='integer' OR position<0 OR skipped NOT IN (0,1) OR (revealedAt IS NOT NULL AND shownAt IS NULL)
    OR (p.wordId IS NOT NULL AND (contentRevision IS NULL OR contentRevision NOT BETWEEN 1 AND p.revision OR targetSnapshot IS NULL OR englishSnapshot IS NULL))
    OR (p.wordId IS NULL AND (contentRevision IS NOT NULL OR targetSnapshot IS NOT NULL OR englishSnapshot IS NOT NULL))`);
  reject(
    `SELECT 1 FROM session_cards GROUP BY sessionId,pass HAVING min(position)!=0 OR max(position)+1!=count(*)`,
  );
  reject(`SELECT 1 FROM session_cards c JOIN sessions s ON s.id=c.sessionId LEFT JOIN personal_entries p USING(languageId,wordId)
    WHERE s.closedAt IS NULL AND p.wordId IS NOT NULL AND (p.archivedAt IS NOT NULL OR p.revision!=c.contentRevision)
    AND c.skipped=0 AND s.phase!='completed' AND NOT EXISTS(SELECT 1 FROM ratings r WHERE r.sessionId=c.sessionId AND r.pass=c.pass AND r.position=c.position)`);
  reject(
    `SELECT 1 FROM collection_members m JOIN personal_entries p USING(languageId,wordId) WHERE p.archivedAt IS NOT NULL`,
  );
  reject(`SELECT 1 FROM sessions s WHERE cursor<0 OR (originKind='today')!=(originId IS NULL) OR NOT EXISTS(SELECT 1 FROM session_cards c WHERE c.sessionId=s.id AND c.pass='first')
    OR (phase IN ('first','revisit') AND NOT EXISTS(SELECT 1 FROM session_cards c WHERE c.sessionId=s.id AND c.pass=s.phase AND c.position=s.cursor AND c.skipped=0))
    OR (phase='offer' AND NOT EXISTS(SELECT 1 FROM session_cards c WHERE c.sessionId=s.id AND c.pass='revisit' AND c.skipped=0))
    OR (phase='abandoned' AND closedAt IS NULL) OR ((endedAt IS NOT NULL)!=(phase IN ('abandoned','completed')))
    OR (closedAt IS NOT NULL AND endedAt IS NULL)`);
  reject(
    `SELECT 1 FROM ratings r JOIN session_cards c USING(sessionId,pass,position) WHERE c.revealedAt IS NULL OR c.skipped=1 OR r.sequence<1`,
  );
  reject(`SELECT 1 FROM review_state WHERE typeof(dueAt)!='integer' OR abs(dueAt)>8640000000000000 OR typeof(level)!='integer'
    OR typeof(spacedSuccesses)!='integer' OR spacedSuccesses<0 OR (lastRating IS NULL AND (level!=0 OR spacedSuccesses!=0 OR familiarity!='learning'))`);
  // Read projections directly; validation must never replay ratings or move a due date.
  reject(`SELECT 1 FROM current_learning_evidence e LEFT JOIN review_state v USING(languageId,wordId,direction)
    WHERE e.pass='first' AND v.lastRating IS NULL`);
  reject(
    `SELECT 1 FROM review_state v JOIN personal_entries p USING(languageId,wordId) WHERE p.archivedAt IS NOT NULL`,
  );
  for (const [table, columns] of Object.entries({
    enrolments: ['enrolledAt'],
    sessions: ['createdAt', 'endedAt', 'closedAt'],
    session_cards: ['shownAt', 'revealedAt'],
    ratings: ['ratedAt'],
    personal_entries: ['createdAt', 'updatedAt', 'archivedAt'],
    collections: ['createdAt', 'updatedAt'],
  })) {
    const invalid = columns.map(
      (column) => `(${column} IS NOT NULL AND julianday(${column}) IS NULL)`,
    );
    reject(`SELECT 1 FROM ${table} WHERE ${invalid.join(' OR ')}`);
  }
  for (const c of db.getEachSync<{ name: string; nameKey: string }>(
    'SELECT name,nameKey FROM collections',
  )) {
    if (!c.nameKey || searchKey(c.name) !== c.nameKey)
      throw new BackupError('A collection name is invalid.');
  }
  const refs =
    db.getEachSync<VocabularyRef>(`SELECT languageId,wordId FROM enrolments WHERE wordId NOT GLOB 'personal:*'
    UNION SELECT languageId,wordId FROM collection_members WHERE wordId NOT GLOB 'personal:*'`);
  let missing = 0;
  for (const ref of refs) {
    if (getVocabularyItem(ref)) continue;
    if (
      !ref.wordId.trim() ||
      getVocabularyItem({ ...ref, languageId: ref.languageId === 'fi' ? 'sv' : 'fi' })
    )
      throw new BackupError('A vocabulary reference has the wrong language or identity.');
    missing++;
  }
  const languages = languageIds.map((language) => {
    const count = (table: string, extra = '') =>
      db.getAllSync<{ n: number }>(
        'SELECT count(*) n FROM ' + table + ' WHERE languageId=? ' + extra,
        language,
      )[0].n;
    return {
      language,
      personal: count('personal_entries', 'AND archivedAt IS NULL'),
      archived: count('personal_entries', 'AND archivedAt IS NOT NULL'),
      collections: count('collections'),
      enrolled: count('enrolments'),
      ratings: count('learning_evidence_v3'),
      schedules: count('review_state'),
      open: count('sessions', 'AND closedAt IS NULL'),
    };
  });
  return { languages, missing };
}
