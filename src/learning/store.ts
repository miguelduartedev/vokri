import {
  exportSnapshot,
  previewImport,
  writeImport,
  type Choices,
  type ImportPreview,
} from './portability';
import type { VocabularyDocument } from '../domain/interchange/format';
import { getVocabulary, getVocabularyItem } from '../domain/vocabulary/registry';
import {
  personalPrefix,
  materialChange,
  validDraft,
  searchKey,
  type PersonalEntry,
  type PersonalDraft,
  type LearningItem,
} from '../domain/learning/personal';
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
  type SessionMode,
} from '../domain/learning/model';
import { selectReview, type ReviewCard } from '../domain/learning/review';
import { getReviewState, recordExposure, recordFirstPass } from './review-state';
import type { LearningDatabase } from './database';

export interface Collection {
  id: string;
  languageId: LearningLanguage;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export interface MembershipChange {
  collectionId: string;
  wordId: string;
  selected: boolean;
}

type Occurrence = Pick<Card, 'position' | 'pass'>;
export class LearningStore {
  constructor(
    private db: LearningDatabase,
    private curatedAvailable: (language: LearningLanguage, id: string) => boolean,
    readonly now: () => number = () => Date.now(),
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
  private suspended = false;
  suspendWrites() {
    this.suspended = true;
    return () => {
      this.suspended = false;
    };
  }
  private commit(operation: () => void) {
    if (this.suspended) throw new Error('Local data is busy. Try again.');
    this.db.withTransactionSync(operation);
    this.revision++;
    this.listeners.forEach((listener) => listener());
  }
  vocabularyExport(language: LearningLanguage) {
    return exportSnapshot(this.db, language, new Date(this.now()).toISOString());
  }
  importPreview(doc: VocabularyDocument) {
    return previewImport(this.db, doc);
  }
  importVocabulary(preview: ImportPreview, choices: Choices) {
    let result!: ReturnType<typeof writeImport>;
    this.commit(() => {
      result = writeImport(this.db, preview, choices, new Date(this.now()).toISOString());
    });
    return result;
  }
  personal(language: LearningLanguage, id: string): PersonalEntry | undefined {
    return this.db.getAllSync<PersonalEntry>(
      'SELECT * FROM personal_entries WHERE languageId=? AND wordId=? AND archivedAt IS NULL',
      language,
      id,
    )[0];
  }
  entries(language: LearningLanguage) {
    return this.db.getAllSync<PersonalEntry>(
      'SELECT * FROM personal_entries WHERE languageId=? AND archivedAt IS NULL ORDER BY createdAt DESC,rowid DESC',
      language,
    );
  }
  resolve(languageId: LearningLanguage, wordId: string): LearningItem | undefined {
    if (wordId.startsWith(personalPrefix)) {
      const content = this.personal(languageId, wordId);
      return content && { source: 'personal', content };
    }
    const content = getVocabularyItem({ languageId, wordId });
    return content && { source: 'curated', content };
  }
  private currentContent(language: LearningLanguage, card: Card) {
    return (
      card.contentRevision === null ||
      this.personal(language, card.wordId)?.revision === card.contentRevision
    );
  }
  private available(language: LearningLanguage, id: string) {
    return id.startsWith(personalPrefix)
      ? !!this.personal(language, id)
      : this.curatedAvailable(language, id);
  }
  collections(language: LearningLanguage) {
    return this.db.getAllSync<Collection & { count: number; enrolled: number }>(
      `SELECT c.*, count(m.wordId) AS count,count(e.wordId) AS enrolled
      FROM collections c LEFT JOIN collection_members m ON c.languageId=m.languageId AND c.id=m.collectionId
      LEFT JOIN enrolments e ON e.languageId=m.languageId AND e.wordId=m.wordId
      WHERE c.languageId=? GROUP BY c.id ORDER BY c.createdAt DESC,c.rowid DESC`,
      language,
    );
  }
  collection(language: LearningLanguage, id: string): Collection | undefined {
    return this.db.getAllSync<Collection>(
      'SELECT * FROM collections WHERE languageId=? AND id=?',
      language,
      id,
    )[0];
  }
  memberIds(language: LearningLanguage, id: string) {
    return this.db
      .getAllSync<{
        wordId: string;
      }>('SELECT wordId FROM collection_members WHERE languageId=? AND collectionId=? ORDER BY rowid', language, id)
      .map((row) => row.wordId);
  }
  memberships(language: LearningLanguage, wordId: string) {
    return this.db
      .getAllSync<{
        collectionId: string;
      }>('SELECT collectionId FROM collection_members WHERE languageId=? AND wordId=?', language, wordId)
      .map((row) => row.collectionId);
  }
  saveCollection(
    language: LearningLanguage,
    name: string,
    description: string,
    original?: Collection,
  ) {
    const key = searchKey(name);
    if (!key) throw new Error('Enter a collection name.');
    const id =
      original?.id ??
      this.db.getAllSync<{ id: string }>('SELECT lower(hex(randomblob(16))) AS id')[0].id;
    this.commit(() => {
      if (original && this.collection(language, id)?.updatedAt !== original.updatedAt)
        throw new Error('This collection changed. Reopen it before editing.');
      if (
        this.db.getAllSync(
          'SELECT 1 FROM collections WHERE languageId=? AND nameKey=? AND id<>?',
          language,
          key,
          id,
        ).length
      )
        throw new Error('A collection with this name already exists.');
      const stamp = new Date(
        Math.max(this.now(), original ? Date.parse(original.updatedAt) + 1 : 0),
      ).toISOString();
      if (original)
        this.db.runSync(
          'UPDATE collections SET name=?,nameKey=?,description=?,updatedAt=? WHERE languageId=? AND id=?',
          name.trim(),
          key,
          description.trim(),
          stamp,
          language,
          id,
        );
      else
        this.db.runSync(
          'INSERT INTO collections(languageId,id,name,nameKey,description,createdAt,updatedAt) VALUES(?,?,?,?,?,?,?)',
          language,
          id,
          name.trim(),
          key,
          description.trim(),
          stamp,
          stamp,
        );
    });
    return id;
  }
  deleteCollection(language: LearningLanguage, id: string) {
    this.commit(() =>
      this.db.runSync('DELETE FROM collections WHERE languageId=? AND id=?', language, id),
    );
  }
  private addMember(language: LearningLanguage, collectionId: string, wordId: string) {
    this.db.runSync(
      'INSERT INTO collection_members VALUES(?,?,?) ON CONFLICT DO NOTHING',
      language,
      collectionId,
      wordId,
    );
  }
  changeMemberships(language: LearningLanguage, changes: readonly MembershipChange[]) {
    this.commit(() => {
      for (const { collectionId, wordId, selected } of changes) {
        if (selected) {
          if (!this.available(language, wordId)) throw new Error('This vocabulary is unavailable.');
          this.addMember(language, collectionId, wordId);
        } else
          this.db.runSync(
            'DELETE FROM collection_members WHERE languageId=? AND collectionId=? AND wordId=?',
            language,
            collectionId,
            wordId,
          );
      }
    });
  }
  newPersonalId() {
    return (
      personalPrefix +
      this.db.getAllSync<{ id: string }>('SELECT lower(hex(randomblob(16))) AS id')[0].id
    );
  }
  matches(language: LearningLanguage, draft: PersonalDraft, exclude?: string) {
    const target = searchKey(draft.displayForm);
    const items = [...this.entries(language), ...getVocabulary(language)];
    return items
      .filter(
        (item) =>
          item.wordId !== exclude &&
          [item.displayForm, item.lemma].some((t) => searchKey(t) === target),
      )
      .sort(
        (a, b) =>
          Number(searchKey(b.english) === searchKey(draft.english)) -
          Number(searchKey(a.english) === searchKey(draft.english)),
      );
  }
  saveEntry(
    language: LearningLanguage,
    id: string,
    draft: PersonalDraft,
    options: {
      original?: PersonalEntry;
      enrol?: boolean;
      confirmReset?: boolean;
      collections?: readonly string[];
    } = {},
  ) {
    if (!validDraft(draft) || !/^personal:[0-9a-f]{32}$/.test(id))
      throw new Error('Enter an expression and English meaning.');
    const { type, displayForm, english, lemma, context, forms, note } = draft;
    this.commit(() => {
      const old = this.personal(language, id);
      const time = new Date(
        Math.max(this.now(), old ? Date.parse(old.updatedAt) + 1 : 0),
      ).toISOString();
      if (options.original) {
        if (!old || old.updatedAt !== options.original.updatedAt)
          throw new Error('This entry changed. Reopen it before editing.');
        const reset = materialChange(old, draft);
        if (reset && !options.confirmReset && this.hasStudyHistory(language, id))
          throw new Error('Confirm restart of study progress.');
        this.db.runSync(
          'UPDATE personal_entries SET type=?,displayForm=?,english=?,lemma=?,context=?,forms=?,note=?,updatedAt=?,revision=revision+? WHERE languageId=? AND wordId=?',
          type,
          displayForm,
          english,
          lemma,
          context,
          forms,
          note,
          time,
          Number(reset),
          language,
          id,
        );
        if (reset) this.invalidate(language, id);
      } else if (!old) {
        this.db.runSync(
          'INSERT INTO personal_entries(languageId,wordId,type,displayForm,english,lemma,context,forms,note,createdAt,updatedAt) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
          language,
          id,
          type,
          displayForm,
          english,
          lemma,
          context,
          forms,
          note,
          time,
          time,
        );
      } else if (
        Object.keys(draft).some(
          (k) => draft[k as keyof PersonalDraft] !== old[k as keyof PersonalDraft],
        )
      )
        throw new Error('This entry already exists.');
      for (const collectionId of options.collections ?? [])
        this.addMember(language, collectionId, id);
      if (options.enrol)
        this.db.runSync('INSERT OR IGNORE INTO enrolments VALUES(?,?,?)', language, id, time);
    });
  }
  hasStudyHistory(language: LearningLanguage, id: string) {
    return !!this.db.getAllSync(
      'SELECT 1 FROM session_cards c JOIN personal_entries p USING(languageId,wordId) WHERE languageId=? AND wordId=? AND c.contentRevision=p.revision LIMIT 1',
      language,
      id,
    ).length;
  }
  archiveEntry(language: LearningLanguage, id: string) {
    this.commit(() => {
      this.db.runSync(
        'UPDATE personal_entries SET archivedAt=? WHERE languageId=? AND wordId=? AND archivedAt IS NULL',
        new Date(this.now()).toISOString(),
        language,
        id,
      );
      if (id.startsWith(personalPrefix)) {
        this.db.runSync(
          'DELETE FROM collection_members WHERE languageId=? AND wordId=?',
          language,
          id,
        );
        this.invalidate(language, id);
      }
    });
  }
  private invalidate(language: LearningLanguage, id: string) {
    this.db.runSync('DELETE FROM review_state WHERE languageId=? AND wordId=?', language, id);
    const session = this.current(language);
    if (!session || session.phase === 'completed') return;
    this.db.runSync(
      `UPDATE session_cards SET skipped=1 WHERE sessionId=? AND wordId=? AND NOT EXISTS
      (SELECT 1 FROM ratings r WHERE r.sessionId=session_cards.sessionId AND r.pass=session_cards.pass AND r.position=session_cards.position)`,
      session.id,
      id,
    );
    const cards = this.cards(session.id);
    if (session.phase === 'offer' && !cards.some((c) => c.pass === 'revisit' && !c.skipped))
      this.finish(session.id);
    if (
      cards.some((c) => c.pass === session.phase && c.position === session.cursor && c.skipped) &&
      (session.phase === 'first' || session.phase === 'revisit')
    )
      this.advance(session.id, { pass: session.phase, position: session.cursor });
  }
  inventory(language: LearningLanguage) {
    const rows = this.db.getAllSync<{ wordId: string; attempted: number }>(
      `
      SELECT e.wordId, EXISTS(SELECT 1 FROM review_state r
        WHERE r.languageId=e.languageId AND r.wordId=e.wordId AND r.lastRating IS NOT NULL) AS attempted
      FROM enrolments e WHERE languageId=? AND NOT EXISTS(SELECT 1 FROM personal_entries p WHERE p.wordId=e.wordId AND p.archivedAt IS NOT NULL) ORDER BY enrolledAt, e.rowid`,
      language,
    );
    const availableRows = rows.filter(
      ({ wordId }) => wordId.startsWith(personalPrefix) || this.curatedAvailable(language, wordId),
    );
    return {
      enrolled: new Set(rows.map((row) => row.wordId)),
      available: new Set(availableRows.map((row) => row.wordId)),
      eligible: availableRows.filter((row) => !row.attempted).map((row) => row.wordId),
    };
  }
  enrol(language: LearningLanguage, ids: readonly string[]) {
    const time = new Date(this.now()).toISOString();
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
      `SELECT c.*,r.rating, NOT EXISTS(SELECT 1 FROM session_cards prior JOIN ratings pr USING(sessionId,pass,position)
        WHERE prior.languageId=c.languageId AND prior.wordId=c.wordId AND prior.direction=c.direction AND prior.pass='first'
          AND prior.contentRevision IS c.contentRevision AND (r.sequence IS NULL OR pr.sequence<r.sequence)) AS firstPractice
        FROM session_cards c LEFT JOIN ratings r USING(sessionId,pass,position)
      WHERE c.sessionId=? ORDER BY c.pass,c.position`,
      id,
    );
  }
  reviewState(languageId: LearningLanguage, card: Pick<Card, 'wordId' | 'direction'>) {
    return getReviewState(this.db, { languageId, wordId: card.wordId, direction: card.direction });
  }
  today(language: LearningLanguage, now = this.now(), releaseSession = false) {
    const inventory = this.inventory(language);
    const newWords = new Set(inventory.eligible);
    const availableWords = inventory.available;
    const session = this.current(language);
    const reserved = new Set(
      !releaseSession && session?.mode === 'learn_new'
        ? this.cards(session.id)
            .filter((card) => card.pass === 'first' && !card.rating && !card.skipped)
            .map((card) => card.wordId)
        : [],
    );
    const rows = this.db.getAllSync<ReviewCard>(
      `
      SELECT * FROM review_state WHERE languageId=?
      ORDER BY dueAt, CASE lastRating WHEN 'Again' THEN 0 WHEN 'Almost' THEN 1 WHEN 'Knew It' THEN 2 ELSE 3 END,
        wordId, CASE direction WHEN 'recognition' THEN 0 ELSE 1 END`,
      language,
    );
    const due: ReviewCard[] = [];
    const dueWords = new Set<string>();
    const familiarDirections = new Map<string, number>();
    let nextDueAt: number | undefined;
    for (const row of rows) {
      if (!availableWords.has(row.wordId)) continue;
      if (row.familiarity === 'familiar')
        familiarDirections.set(row.wordId, (familiarDirections.get(row.wordId) ?? 0) + 1);
      if (newWords.has(row.wordId) && (reserved.has(row.wordId) || dueWords.has(row.wordId)))
        continue;
      if (row.dueAt > now) {
        nextDueAt ??= row.dueAt;
      } else {
        dueWords.add(row.wordId);
        due.push(row);
      }
    }
    return {
      due,
      dueWords: dueWords.size,
      nextDueAt,
      session,
      enrolled: availableWords.size,
      introduced: availableWords.size - newWords.size,
      newWords: inventory.eligible.filter((id) => !dueWords.has(id)),
      familiarWords: [...familiarDirections.values()].filter((count) => count === 2).length,
    };
  }
  start(
    language: LearningLanguage,
    origin: Origin,
    choice: DirectionChoice,
    context?: readonly string[],
    replaceId?: string,
  ) {
    this.createSession(language, { mode: 'learn_new', origin, choice, context }, replaceId);
  }
  startReview(language: LearningLanguage, replaceId?: string) {
    this.createSession(
      language,
      { mode: 'review_due', origin: { kind: 'today' }, choice: 'mixed' },
      replaceId,
    );
  }
  private createSession(
    language: LearningLanguage,
    request: {
      mode: SessionMode;
      origin: Origin;
      choice: DirectionChoice;
      context?: readonly string[];
    },
    replaceId?: string,
  ) {
    const { mode, origin, choice, context } = request;
    this.commit(() => {
      if (origin.kind === 'collection' && !this.collection(language, origin.id)) return;
      const prior = this.current(language);
      if (prior && prior.id !== replaceId) return;
      if (replaceId && (!prior || prior.phase === 'completed')) return;
      const timestamp = this.now();
      const now = new Date(timestamp).toISOString();
      if (prior)
        this.db.runSync(
          "UPDATE sessions SET phase='abandoned',endedAt=?,closedAt=? WHERE id=?",
          now,
          now,
          prior.id,
        );
      let cards: Pick<Card, 'wordId' | 'direction'>[];
      if (mode === 'review_due') {
        cards = selectReview(this.today(language, timestamp).due);
      } else {
        const eligible =
          origin.kind === 'today'
            ? this.today(language, timestamp).newWords
            : this.inventory(language).eligible;
        cards = selectNew(
          eligible,
          origin.kind === 'collection' ? this.memberIds(language, origin.id) : context,
        ).map((wordId, position) => ({
          wordId,
          direction: resolveDirection(choice, position),
        }));
      }
      if (!cards.length) return;
      const [{ id }] = this.db.getAllSync<{ id: string }>(
        'SELECT lower(hex(randomblob(16))) AS id',
      );
      this.db.runSync(
        "INSERT INTO sessions(id,languageId,originKind,originId,choice,phase,createdAt,mode) VALUES(?,?,?,?,?,'first',?,?)",
        id,
        language,
        origin.kind,
        origin.kind === 'today' ? null : origin.id,
        choice,
        now,
        mode,
      );
      cards.forEach(({ wordId, direction }, position) =>
        this.db.runSync(
          `INSERT INTO session_cards(sessionId,languageId,wordId,pass,position,direction)
        VALUES(?,?,?,'first',?,?)`,
          id,
          language,
          wordId,
          position,
          direction,
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
      if (!card || card.rating) return;
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
          new Date(this.now()).toISOString(),
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
      if (!card?.shownAt || card.skipped || card.revealedAt || !this.currentContent(language, card))
        return;
      const now = this.now();
      this.db.runSync(
        'UPDATE session_cards SET revealedAt=? WHERE sessionId=? AND pass=? AND position=?',
        new Date(now).toISOString(),
        id,
        key.pass,
        key.position,
      );
      if (key.pass === 'first') recordExposure(this.db, { ...card, languageId: language }, now);
    });
  }
  rate(language: LearningLanguage, id: string, key: Occurrence, rating: Rating) {
    this.commit(() => {
      const card = this.at(language, id, key);
      if (!card || card.skipped || card.rating || !this.currentContent(language, card)) return;
      if (!card.revealedAt) throw new Error('Reveal the answer first.');
      const now = this.now();
      this.db.runSync(
        'INSERT INTO ratings(sessionId,pass,position,rating,ratedAt) VALUES(?,?,?,?,?)',
        id,
        key.pass,
        key.position,
        rating,
        new Date(now).toISOString(),
      );
      if (key.pass === 'first')
        recordFirstPass(this.db, { ...card, languageId: language }, rating, now);
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
    const next = cards.find((c) => c.pass === key.pass && c.position > key.position && !c.skipped);
    if (next) {
      this.db.runSync('UPDATE sessions SET cursor=? WHERE id=?', next.position, id);
    } else if (key.pass === 'first' && cards.some((c) => c.pass === 'revisit' && !c.skipped)) {
      this.db.runSync("UPDATE sessions SET phase='offer',cursor=0 WHERE id=?", id);
    } else this.finish(id);
  }
  chooseRevisit(language: LearningLanguage, id: string, revisit: boolean) {
    this.commit(() => {
      const session = this.current(language);
      if (session?.id !== id || session.phase !== 'offer') return;
      if (revisit)
        this.db.runSync(
          "UPDATE sessions SET phase='revisit',cursor=(SELECT min(position) FROM session_cards WHERE sessionId=sessions.id AND pass='revisit' AND skipped=0) WHERE id=?",
          id,
        );
      else this.finish(id);
    });
  }
  private finish(id: string) {
    this.db.runSync(
      "UPDATE sessions SET phase='completed',endedAt=? WHERE id=?",
      new Date(this.now()).toISOString(),
      id,
    );
  }
  dismiss(language: LearningLanguage, id: string) {
    this.commit(() =>
      this.db.runSync(
        "UPDATE sessions SET closedAt=? WHERE id=? AND languageId=? AND phase='completed' AND closedAt IS NULL",
        new Date(this.now()).toISOString(),
        id,
        language,
      ),
    );
  }
}
