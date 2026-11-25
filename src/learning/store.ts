import type { LearningLanguage } from '../domain/languages';
import {
  needsRevisit,
  resolveDirection,
  selectNew,
  type Card,
  type DirectionChoice,
  type Origin,
  type Rating,
  type Session,
} from '../domain/learning/model';
import type { LearningDatabase } from './database';

type Occurrence = Pick<Card, 'position' | 'pass'>;
export class LearningStore {
  constructor(
    private db: LearningDatabase,
    private available: (language: LearningLanguage, id: string) => boolean,
  ) {}
  private listeners = new Set<() => void>();
  private revision = 0;
  getRevision = () => this.revision;
  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };
  private commit(operation: () => void) {
    this.db.withTransactionSync(operation);
    this.revision++;
    this.listeners.forEach((listener) => listener());
  }
  inventory(language: LearningLanguage) {
    const rows = this.db.getAllSync<{ wordId: string; attempted: number }>(
      `
      SELECT e.wordId, EXISTS(SELECT 1 FROM session_cards c JOIN ratings r USING(sessionId,pass,position)
        WHERE c.languageId=e.languageId AND c.wordId=e.wordId AND c.pass='first') AS attempted
      FROM enrolments e WHERE languageId=? ORDER BY enrolledAt, e.rowid`,
      language,
    );
    return {
      enrolled: new Set(rows.map((row) => row.wordId)),
      eligible: rows
        .filter((row) => !row.attempted && this.available(language, row.wordId))
        .map((row) => row.wordId),
    };
  }
  enrol(language: LearningLanguage, ids: readonly string[]) {
    const time = new Date().toISOString();
    this.commit(() => {
      for (const id of new Set(ids)) {
        if (!this.available(language, id)) throw new Error('This vocabulary is unavailable.');
        this.db.runSync(
          'INSERT INTO enrolments VALUES(?,?,?) ON CONFLICT(languageId,wordId) DO NOTHING',
          language,
          id,
          time,
        );
      }
    });
  }
  current(language: LearningLanguage): Session | undefined {
    return this.db.getAllSync<Session>(
      'SELECT * FROM sessions WHERE languageId=? AND closedAt IS NULL',
      language,
    )[0];
  }
  cards(id: string) {
    return this.db.getAllSync<Card>(
      `SELECT c.*,r.rating FROM session_cards c LEFT JOIN ratings r USING(sessionId,pass,position)
      WHERE c.sessionId=? ORDER BY c.pass,c.position`,
      id,
    );
  }
  start(
    language: LearningLanguage,
    origin: Origin,
    choice: DirectionChoice,
    context?: readonly string[],
    replaceId?: string,
  ) {
    this.commit(() => {
      const prior = this.current(language);
      if (prior && prior.id !== replaceId) return;
      if (replaceId && (!prior || prior.phase === 'completed')) return;
      const now = new Date().toISOString();
      if (prior)
        this.db.runSync(
          "UPDATE sessions SET phase='abandoned',endedAt=?,closedAt=? WHERE id=?",
          now,
          now,
          prior.id,
        );
      const ids = selectNew(this.inventory(language).eligible, context);
      if (!ids.length) return;
      const [{ id }] = this.db.getAllSync<{ id: string }>(
        'SELECT lower(hex(randomblob(16))) AS id',
      );
      this.db.runSync(
        "INSERT INTO sessions(id,languageId,originKind,originId,choice,phase,createdAt) VALUES(?,?,?,?,?,'first',?)",
        id,
        language,
        origin.kind,
        origin.kind === 'today' ? null : origin.id,
        choice,
        now,
      );
      ids.forEach((wordId, position) =>
        this.db.runSync(
          `INSERT INTO session_cards(sessionId,languageId,wordId,pass,position,direction)
        VALUES(?,?,?,'first',?,?)`,
          id,
          language,
          wordId,
          position,
          resolveDirection(choice, position),
        ),
      );
    });
  }
  private at(language: LearningLanguage, id: string, key: Occurrence) {
    const session = this.current(language);
    if (session?.id !== id || session.phase !== key.pass || session.cursor !== key.position) return;
    return this.cards(id).find((c) => c.pass === key.pass && c.position === key.position);
  }
  present(language: LearningLanguage, id: string, key: Occurrence) {
    this.commit(() => {
      const card = this.at(language, id, key);
      if (!card) return;
      if (!this.available(language, card.wordId)) {
        this.db.runSync(
          'UPDATE session_cards SET skipped=1 WHERE sessionId=? AND pass=? AND position=?',
          id,
          key.pass,
          key.position,
        );
        this.advance(id, key);
      } else if (!card.shownAt) {
        this.db.runSync(
          'UPDATE session_cards SET shownAt=? WHERE sessionId=? AND pass=? AND position=?',
          new Date().toISOString(),
          id,
          key.pass,
          key.position,
        );
      }
    });
  }
  reveal(language: LearningLanguage, id: string, key: Occurrence) {
    this.commit(() => {
      const card = this.at(language, id, key);
      if (!card?.shownAt || card.revealedAt) return;
      this.db.runSync(
        'UPDATE session_cards SET revealedAt=? WHERE sessionId=? AND pass=? AND position=?',
        new Date().toISOString(),
        id,
        key.pass,
        key.position,
      );
    });
  }
  rate(language: LearningLanguage, id: string, key: Occurrence, rating: Rating) {
    this.commit(() => {
      const card = this.at(language, id, key);
      if (!card || card.rating) return;
      if (!card.revealedAt) throw new Error('Reveal the answer first.');
      this.db.runSync(
        'INSERT INTO ratings(sessionId,pass,position,rating,ratedAt) VALUES(?,?,?,?,?)',
        id,
        key.pass,
        key.position,
        rating,
        new Date().toISOString(),
      );
      if (key.pass === 'first' && needsRevisit(rating)) {
        this.db.runSync(
          `INSERT INTO session_cards(sessionId,languageId,wordId,pass,position,direction)
          SELECT ?,?,?,'revisit',count(*),? FROM session_cards WHERE sessionId=? AND pass='revisit'`,
          id,
          language,
          card.wordId,
          card.direction,
          id,
        );
      }
    });
  }
  next(language: LearningLanguage, id: string, key: Occurrence) {
    this.commit(() => {
      if (this.at(language, id, key)?.rating) this.advance(id, key);
    });
  }
  private advance(id: string, key: Occurrence) {
    const cards = this.cards(id);
    if (cards.some((c) => c.pass === key.pass && c.position === key.position + 1)) {
      this.db.runSync('UPDATE sessions SET cursor=cursor+1 WHERE id=?', id);
    } else if (key.pass === 'first' && cards.some((c) => c.pass === 'revisit')) {
      this.db.runSync("UPDATE sessions SET phase='offer',cursor=0 WHERE id=?", id);
    } else this.finish(id);
  }
  chooseRevisit(language: LearningLanguage, id: string, revisit: boolean) {
    this.commit(() => {
      const session = this.current(language);
      if (session?.id !== id || session.phase !== 'offer') return;
      if (revisit) this.db.runSync("UPDATE sessions SET phase='revisit' WHERE id=?", id);
      else this.finish(id);
    });
  }
  private finish(id: string) {
    this.db.runSync(
      "UPDATE sessions SET phase='completed',endedAt=? WHERE id=?",
      new Date().toISOString(),
      id,
    );
  }
  dismiss(language: LearningLanguage, id: string) {
    this.commit(() =>
      this.db.runSync(
        "UPDATE sessions SET closedAt=? WHERE id=? AND languageId=? AND phase='completed' AND closedAt IS NULL",
        new Date().toISOString(),
        id,
        language,
      ),
    );
  }
}
