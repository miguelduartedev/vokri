export interface LearningDatabase {
  execSync(sql: string): void;
  runSync(sql: string, ...values: (string | number | null)[]): unknown;
  getAllSync<T>(sql: string, ...values: (string | number | null)[]): T[];
  withTransactionSync(operation: () => void): void;
}

export function migrateLearning(db: LearningDatabase) {
  db.execSync('PRAGMA foreign_keys = ON');
  db.withTransactionSync(() => {
    const [{ user_version: version }] = db.getAllSync<{ user_version: number }>(
      'PRAGMA user_version',
    );
    if (version === 1) return;
    if (version !== 0) throw new Error('This learning database requires a newer app.');
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
      CREATE TABLE session_cards (
        sessionId TEXT NOT NULL, languageId TEXT NOT NULL, wordId TEXT NOT NULL,
        pass TEXT NOT NULL CHECK(pass IN ('first','revisit')), position INTEGER NOT NULL,
        direction TEXT NOT NULL CHECK(direction IN ('recognition','production')),
        shownAt TEXT, revealedAt TEXT, skipped INTEGER NOT NULL DEFAULT 0,
        PRIMARY KEY(sessionId,pass,position), UNIQUE(sessionId,pass,wordId),
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
      CREATE VIEW learning_evidence_v1 AS
        SELECT r.sequence, r.sessionId || ':' || r.pass || ':' || r.position AS eventId,
          1 AS schemaVersion, 'cards.learn_new' AS source, r.sessionId, r.pass, r.position,
          c.languageId, c.wordId, c.direction, c.shownAt, c.revealedAt, r.rating, r.ratedAt
        FROM ratings r JOIN session_cards c USING(sessionId,pass,position);
      PRAGMA user_version = 1;
    `);
  });
}
