import { replayVersionOne } from './review-state';

export interface LearningDatabase {
  execSync(sql: string): void;
  runSync(sql: string, ...values: (string | number | null)[]): unknown;
  getAllSync<T>(sql: string, ...values: (string | number | null)[]): T[];
  withTransactionSync(operation: () => void): void;
}

function createOccurrences(db: LearningDatabase, directional: boolean) {
  db.execSync(`
      CREATE TABLE session_cards (
        sessionId TEXT NOT NULL, languageId TEXT NOT NULL, wordId TEXT NOT NULL,
        pass TEXT NOT NULL CHECK(pass IN ('first','revisit')), position INTEGER NOT NULL,
        direction TEXT NOT NULL CHECK(direction IN ('recognition','production')),
        shownAt TEXT, revealedAt TEXT, skipped INTEGER NOT NULL DEFAULT 0,
        PRIMARY KEY(sessionId,pass,position), UNIQUE(sessionId,pass,wordId${directional ? ',direction' : ''}),
        FOREIGN KEY(sessionId,languageId) REFERENCES sessions(id,languageId),
        FOREIGN KEY(languageId,wordId) REFERENCES enrolments(languageId,wordId)
      );
      CREATE INDEX card_word ON session_cards(languageId,wordId,pass);
      CREATE TABLE ratings (
        sequence INTEGER PRIMARY KEY, sessionId TEXT NOT NULL, pass TEXT NOT NULL,
        position INTEGER NOT NULL, rating TEXT NOT NULL CHECK(rating IN ('Again','Almost','Knew It')),
        ratedAt TEXT NOT NULL, UNIQUE(sessionId,pass,position),
        FOREIGN KEY(sessionId,pass,position) REFERENCES session_cards(sessionId,pass,position)
      );
  `);
}

// Original schema, also used to construct pre-upgrade databases in migration tests.
export function createVersionOne(db: LearningDatabase) {
  db.execSync(`
      CREATE TABLE enrolments (
        languageId TEXT NOT NULL CHECK(languageId IN ('fi','sv')), wordId TEXT NOT NULL,
        enrolledAt TEXT NOT NULL, PRIMARY KEY(languageId,wordId)
      );
      CREATE TABLE sessions (
        id TEXT PRIMARY KEY NOT NULL, languageId TEXT NOT NULL CHECK(languageId IN ('fi','sv')),
        originKind TEXT NOT NULL CHECK(originKind IN ('today','deck','word')), originId TEXT,
        choice TEXT NOT NULL CHECK(choice IN ('recognition','production','mixed')),
        phase TEXT NOT NULL CHECK(phase IN ('first','offer','revisit','completed','abandoned')),
        cursor INTEGER NOT NULL DEFAULT 0, createdAt TEXT NOT NULL, endedAt TEXT, closedAt TEXT,
        UNIQUE(id,languageId)
      );
      CREATE UNIQUE INDEX one_open_session ON sessions(languageId) WHERE closedAt IS NULL;
  `);
  createOccurrences(db, false);
  db.execSync(`
      CREATE VIEW learning_evidence_v1 AS
        SELECT r.sequence, r.sessionId || ':' || r.pass || ':' || r.position AS eventId,
          1 AS schemaVersion, 'cards.learn_new' AS source, r.sessionId, r.pass, r.position,
          c.languageId, c.wordId, c.direction, c.shownAt, c.revealedAt, r.rating, r.ratedAt
        FROM ratings r JOIN session_cards c USING(sessionId,pass,position);
    PRAGMA user_version=1;
  `);
}

function upgradeToTwo(db: LearningDatabase) {
  db.execSync(`
    ALTER TABLE sessions ADD COLUMN mode TEXT NOT NULL DEFAULT 'learn_new'
      CHECK(mode IN ('learn_new','review_due'));
    DROP VIEW learning_evidence_v1;
    DROP INDEX card_word;
    ALTER TABLE session_cards RENAME TO old_cards;
    ALTER TABLE ratings RENAME TO old_ratings;
  `);
  createOccurrences(db, true);
  db.execSync(`
    INSERT INTO session_cards SELECT * FROM old_cards;
    INSERT INTO ratings(sequence,sessionId,pass,position,rating,ratedAt)
      SELECT sequence,sessionId,pass,position,rating,ratedAt FROM old_ratings;
    DROP TABLE old_ratings;
    DROP TABLE old_cards;
    CREATE VIEW learning_evidence_v2 AS
      SELECT r.sequence,r.sessionId || ':' || r.pass || ':' || r.position AS eventId,
        2 AS schemaVersion,'cards.' || s.mode AS source,r.sessionId,r.pass,r.position,
        c.languageId,c.wordId,c.direction,c.shownAt,c.revealedAt,r.rating,r.ratedAt
      FROM ratings r JOIN session_cards c USING(sessionId,pass,position) JOIN sessions s ON s.id=c.sessionId;
    CREATE VIEW learning_evidence_v1 AS
      SELECT sequence,eventId,1 AS schemaVersion,source,sessionId,pass,position,
        languageId,wordId,direction,shownAt,revealedAt,rating,ratedAt
      FROM learning_evidence_v2 WHERE source='cards.learn_new';
    CREATE TABLE review_state (
      languageId TEXT NOT NULL,wordId TEXT NOT NULL,direction TEXT NOT NULL CHECK(direction IN ('recognition','production')),
      dueAt INTEGER NOT NULL,level INTEGER NOT NULL DEFAULT 0 CHECK(level BETWEEN 0 AND 5),
      spacedSuccesses INTEGER NOT NULL DEFAULT 0,familiarity TEXT NOT NULL DEFAULT 'learning'
        CHECK(familiarity IN ('learning','becoming_familiar','familiar')),
      lastRating TEXT CHECK(lastRating IN ('Again','Almost','Knew It')),
      PRIMARY KEY(languageId,wordId,direction),
      FOREIGN KEY(languageId,wordId) REFERENCES enrolments(languageId,wordId) ON DELETE CASCADE
    );
    CREATE INDEX review_due ON review_state(languageId,dueAt);
  `);
  replayVersionOne(db);
  if (db.getAllSync('PRAGMA foreign_key_check').length)
    throw new Error('Invalid learning references.');
  db.execSync('PRAGMA user_version=2');
}

export function migrateLearning(db: LearningDatabase) {
  db.execSync('PRAGMA foreign_keys=ON');
  db.withTransactionSync(() => {
    const [{ user_version: version }] = db.getAllSync<{ user_version: number }>(
      'PRAGMA user_version',
    );
    if (version > 2) throw new Error('This learning database requires a newer app.');
    if (version === 0) createVersionOne(db);
    if (version < 2) upgradeToTwo(db);
  });
}
