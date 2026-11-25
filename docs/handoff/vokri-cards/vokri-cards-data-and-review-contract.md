# Vokri Cards — Standalone Data, Review & Session Contract (V1)

**Current implementation.** Finnish and Swedish share the personal vocabulary and daily review contracts below. The PR #18 section records the original Learn New and SQLite v1 behavior. The numbered design proposals are historical.

**Historical handoff.** The [multilingual addendum](./vokri-cards-multilingual-implementation-addendum.md) supersedes Finnish-only launch, switching and data-scope assumptions. The [Cards-first roadmap](../../architecture/vokri-cards-first-implementation-plan.md) records current engineering milestones.

**Original design proposal, 21 November 2026.** The standalone application is Finnish-first (`fi`) and local-first; Swedish (`sv`) is a separate future target language, **not** an automatically populated switch or second interface translation. The contract reconciles actual [Vokri Cards Figma](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=407-766), [Phase 5 handoff](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4058), [existing Vokri learning architecture](../../architecture/content_learning_data_architecture_specification.md) and the [full Vokri optional-practice contract](../vocabulary-practice/vocabulary-practice-data-contract.md).

**The key deliberate adaptation:** In *full Vokri*, optional Flashcards practice does **not** commit scheduled Review outcomes. In **standalone Vokri Cards**, Flashcards is the **main** learning tool and a first-pass Again/Almost/Knew It rating **must** commit the app's one official spaced-review outcome (subject to the idempotency contract below). No second scheduler is created.

## Personal vocabulary · PR #20

**Identity and capture.** All study references use `(languageId, wordId)`. Bundled IDs retain their existing assignments. SQLite generates a personal ID from 16 random bytes in the reserved `personal:` namespace. It survives spelling and translation edits. A future collection can store the same pair and resolve it through `LearningStore.resolve`. The resolver returns either a curated item with its editorial metadata or a personal item with its learner-authored fields.

My Words stores an entire word, phrase or sentence as one learning item. Target expression and English meaning are required. Notes, example/context, dictionary form and language-specific forms are optional. A Swedish noun article is part of its authored expression. Search covers target and meaning. Duplicate checks look within the active language, compare personal and curated expressions and lemmas, and put exact bilingual matches first. Comparison uses NFC, folded case and collapsed whitespace while preserving accents and the original display text. Learners can open the existing item or keep a separate sense.

**Learning.** Save writes content. Add to study writes an enrolment. The combined action commits both together. Browse, save and enrol produce zero evidence. Learn New and Review use the same session limits, directional engine and pending exposure policy for both sources. First practice is determined from earlier first-pass ratings in the same direction and content revision. Today counts an item as introduced once at least one direction has a first-pass rating for its current content.

**SQLite v3.** An additive transaction creates `personal_entries` and adds nullable content revision, target snapshot and English snapshot to session occurrences. Existing curated records keep their original keys, timestamps, deadlines and checkpoints. Inserting a personal occurrence freezes its revision and bilingual content. When displaying its answer, the app can also show the current learner-authored notes. The v1 and v2 evidence views remain readable. The v3 evidence view adds revision and snapshot fields to each rating.

**Edits and deletion.** Updating type, notes or forms preserves learning progress. Canonically equivalent Unicode and whitespace changes on either side also preserve it. Other changes to the expression or translation advance the revision, clear both directional schedules and keep the enrolment. If the current revision has a frozen session card, the learner must confirm the restart. The same transaction skips affected unrated first-pass and revisit occurrences, advances a blocked cursor and leaves other cards available. Accepted ratings and their original prompts remain readable. Archiving removes the entry from My Words, active enrolment counts and review selection, with the same checkpoint handling. Entering the expression again creates a fresh ID.

For a future projection rebuild, consume `current_first_pass_exposures` and first-pass records in `current_learning_evidence` in evidence order. These views exclude obsolete and archived personal content. Use `learning_evidence_v3` for historical reporting. [Native QA and screenshots](./my-words-qa.md)

## Daily review and Today · PR #19

### Official learning events

Review Engine V1 consumes one accepted first-pass rating at a time for a single `(languageId, wordId, direction)`. A direction is recognition or production. Mixed only controls how Learn New chooses directions. The engine receives the previous directional state and the explicit rating time. An enrolment, prompt display, reveal or same-session revisit cannot earn a recall level. Full Vokri retains its own eligibility rules for formal assessment. [Pure TypeScript engine](../../../src/domain/learning/review.ts)

| First-pass response | Next interval | Directional progression |
| --- | --- | --- |
| Again | 4 hours | Reset level and spaced-success streak. Familiar moves to becoming familiar. A second consecutive Again while becoming familiar returns the direction to learning. |
| Almost | 8 hours | Reduce level by one, down to zero, and clear the streak. Two consecutive weak responses demote familiar to becoming familiar. |
| Knew It | 1, 3, 7, 14, then 30 days | Increase level by one up to level five. Only a previously rated direction answered at or after its deadline earns a spaced return. Two consecutive spaced successes establish becoming familiar and four establish familiar. |

Each deadline is an elapsed interval from the accepted rating, including overdue answers. A day is 24 hours across daylight-saving transitions. SQLite stores due instants in epoch milliseconds and retains original UTC event timestamps. The UI formats dates in the device's local time. A first Knew It in either session mode earns level one and zero spaced returns.

### First practice and formal exposure

- A word's first accepted rating makes its unattempted opposite direction available for first practice at the rated direction's first deadline. The opposite row has a null rating, zero level and zero spaced returns. Its first actual answer is its introduction.
- A first-pass reveal creates pending eligibility eight hours after exposure. The checkpoint preserves the actual reveal. When multiple reasons make an unrated direction eligible, keep the earliest deadline. A later reveal cannot postpone it. A rated direction keeps its own schedule.
- A wholly unrated word remains eligible for explicit Learn New from its word or deck. The frozen cards of an open Learn New session take priority. Once released, a mature exposure appears in Today’s review pool and leaves Today’s new pool. If both directions have pending exposures, surface the earliest one while the word is wholly unrated. A rating consumes only its own direction. The other direction retains the earliest legitimate deadline.
- New words in Discover, pending first practice and rated returns all refer to the same canonical vocabulary ID. Original reveals and immutable events distinguish exposure, first practice and recall.

### Storage, migration and recovery

SQLite v2 adds `sessions.mode` and a `review_state` table keyed by language, word and direction. This projection stores the deadline, level, consecutive spaced returns, familiarity and last official rating. The append-only rating ledger remains the source for attempts. The v1 evidence view keeps its original IDs, source, sequence and columns. The v2 view includes both `cards.learn_new` and `cards.review_due` with the same occurrence IDs.

One transaction upgrades existing sessions to Learn New, rebuilds card/rating constraints to allow one occurrence per **word and direction** in each pass, and copies the original rating sequences. It seeds earliest directional reveals, replays official first passes in sequence, checks foreign keys and advances `user_version`. Revisit history, skipped cards, progress, origin, undismissed summaries and interrupted sessions survive. An error rolls back the entire migration. [Migration](../../../src/learning/database.ts) · [Replay and schedule writes](../../../src/learning/review-state.ts)

A reveal and its exposure deadline commit together. A first-pass rating, its directional transition, any opposite-direction introduction and an optional revisit reservation also share a transaction. Retrying a saved occurrence returns its existing feedback. Next advances the frozen cursor separately. A revisit records practice history. Its rating leaves both schedules intact. Leaving saves the current session. Confirming replacement abandons it while preserving its ratings and releasing unrated cards. Each language has room for one open session, including its undismissed summary.

### Today and review selection

Today prioritises the saved summary or unfinished session, then due reviews, enrolled new words and Discover. A word counts once while any eligible direction is due. For example, eight words due only for recognition, five only for production and seven in both directions yield **20 due words and 27 cards**. Progress in the current batch counts actual directional occurrences. A word contributes to the familiar-word total only when both directions have earned familiar status.

Eligible cards have a deadline at or before the current time. Select at most ten, oldest deadline first. For equal deadlines the order is Again, Almost, Knew It, then first practice. Canonical ID and recognition before production break ties. Within the selected batch, take the earliest remaining card with a different word from the preceding card when possible. Both directions are available regardless of the Learn New preference. Missing canonical items are excluded, and an unavailable frozen card is skipped without deleting history.

Today refreshes on commits, focus, foregrounding and the next deadline or local midnight, with a one-minute cap to pick up clock changes. Its timer runs only while the screen is focused and the app is active. No background service or network is necessary. [Android upgrade and private alpha QA](review-qa.md)

## Implemented Learn New contract · PR #18

This section governs the running bilingual Learn New feature. The earlier design proposals below continue to describe later milestones. A learner can enrol a word explicitly, practise it offline and return to the same session after closing the app. Discover uses the canonical registry for all lexical content. Opening a deck, searching, filtering and reading a detail create no learning records.

### Storage and migrations

The Expo composition root opens one local `language-learning.db` connection. SQL transactions keep enrolment batches, ratings and session replacements consistent. The preference record stays in AsyncStorage. Its optional per-language direction field defaults to recognition on existing installations and preserves the active language, appearance and extension fields. PR #17 shipped preferences and immutable content only, so the learner migration begins with an empty database.

| SQLite v1 relation | Identity and purpose |
| --- | --- |
| `enrolments` | Primary key `(languageId, wordId)`, first enrolment time. Re-adding an existing word preserves its original row. |
| `sessions` | Random 128-bit local ID, language, origin kind and stable origin ID, direction choice, phase, cursor and timestamps. A partial unique index permits one open session per language, including a completed summary awaiting dismissal. |
| `session_cards` | Key `(sessionId, pass, position)`, canonical word reference, frozen direction, first display and first reveal times, skipped flag. Each pass contains each word at most once. |
| `ratings` | One accepted self-report per card occurrence, response, UTC timestamp and local sequence. Foreign keys connect its word, language and concrete direction through the frozen card. |
| `learning_evidence_v1` | Stable read view of each accepted interaction. It exposes event ID, version, sequence, source, session, pass, position, language, word, direction, presentation, exposure, rating and rating time. |

Opening runs ordered migrations under a transaction using SQLite's `user_version`. A failed migration rolls back and can be retried. A newer version is preserved and reported. Future migrations must retain stable event IDs and the meaning of v1 evidence. There is no lexical copy, automatic history expiry or network dependency. Clearing app storage removes local progress.

### Enrolment and session lifecycle

1. Word detail adds one word. Deck selection confirms the selected canonical IDs, including all remaining members when requested. Duplicate and overlapping adds leave existing learning history intact.
2. Learn New takes up to five distinct enrolled words in the current context with no first-pass rating in either direction. Decks follow manifest order, and Today follows enrolment order. Selection and concrete directions are frozen at session creation. Mixed alternates from recognition. A direction preference change applies to future sessions.
3. Showing the front records presentation. Revealing records formal exposure. Acknowledging a rating atomically inserts its event and, for a weak first pass, reserves one same-direction revisit. The saved feedback is itself a recoverable checkpoint. Next advances the cursor. Resubmitting for an already rated occurrence or a stale cursor leaves the original result intact.
4. At the end of the first pass, learners can take the finite revisit queue or finish. Accepted revisit ratings are retained as same-session practice. Completion counts first-pass words rated and revisits actually rated. Completion and summary dismissal are independently idempotent.
5. Leaving, backgrounding or terminating the app retains the checkpoint. Today offers Resume or the undismissed completion summary. Starting another session explicitly abandons the previous one and selects eligible words in the same transaction. The old cards, exposures and ratings remain available. Unrated words remain new. A failed replacement restores the prior session. An unavailable canonical ID is skipped at presentation and identified in the UI.

### Directional input to PR #19

Read `learning_evidence_v1` in local sequence order. Stable event IDs combine the session ID, pass and position. Sequence provides a replay cursor even if the device clock changes. A first pass from `cards.learn_new` supplies the official self-report for that single direction. Again, Almost and Knew It correspond to the existing not-sure, almost and correct outcomes. Revisit events remain available for practice summaries. Full Vokri optional practice keeps its separate product eligibility rules.

An item introduced through recognition is no longer a new *word*. Its production *direction* is still unattempted until that direction has its own first-pass rating. The converse holds for production-first introductions. To find introduced words awaiting production, PR #19 can query the v1 contract directly:

```sql
SELECT e.wordId
FROM enrolments e
WHERE e.languageId = :language
  AND EXISTS (
    SELECT 1 FROM learning_evidence_v1 r
    WHERE r.languageId = e.languageId AND r.wordId = e.wordId
      AND r.pass = 'first' AND r.direction = 'recognition'
  )
  AND NOT EXISTS (
    SELECT 1 FROM learning_evidence_v1 r
    WHERE r.languageId = e.languageId AND r.wordId = e.wordId
      AND r.pass = 'first' AND r.direction = 'production'
  );
```

A first-pass card with a reveal time and no rating is formal exposure without an attempt. Its session can still be resumed. PR #19 owns the policy for introducing the other direction, consuming pending exposure, and projecting intervals and due dates. The future Today count counts distinct due words per language even if both directions are due. PR #18 writes the observations needed for this projection and displays only current Learn New activity.

## 1. Identity and source-of-truth boundaries

Keep the following logically independent. Types below describe a suggested domain model, not new app code written in this PR.

| Entity | Conceptual stable ID | Contents | Persisted? |
|---|---|---|---|
| Canonical curated item | `{learningLanguage, courseItemId}` | lemma, English meanings/gloss, rank, POS, topic, source/editorial status | **Bundled immutable content**, not copied to device preferences |
| Learner-visible form | `{courseItemId, formId}` | approved inflection/spoken expression/example | Authored content overlay, **not** another canonical lemma |
| Personal entry | `{learningLanguage, personalEntryId}` | `word|phrase|sentence`, Finnish text, English meaning, optional notes/source/context, timestamps, optional `linkedCourseItemId` | Yes |
| Curated deck | `{learningLanguage, deckId}` | title, description, topic/filters, references to canonical IDs, reviewed metadata | Bundled content |
| Personal collection | `{learningLanguage, collectionId}` | title, optional description, references to canonical/personal item IDs | Yes |
| Study enrollment | `{learningLanguage, itemRef}` | when the learner intentionally added this item, status | Yes |
| Review schedule | `{learningLanguage, itemRef, recallDirection}` | due, interval level, first/last review, streak/weak outcomes | Yes |
| Review history | `reviewEventId` or deterministic first-pass transaction key | first-pass self-rating and timestamps | Yes, bounded |
| Active session | `sessionId` | source, item snapshot, cursor, current direction/revealed state, revisit queue, phase | Yes until completion/expiry |
| Preferences | global and target-language scoped keys | theme, default direction, reminders, spoken-note visibility | Yes |
| Transient UI | local route/view state | expanded panel, current modal, typed draft, error visibility | Normally not part of the learning scheduler |

Use typed stable references such as `{kind: "curated", courseItemId}` and `{kind: "personal", personalEntryId}`, scoped by `learningLanguage`. Do not fabricate a duplicate review item merely because a word appears in Finnish Essentials, A1 Foundations, My Words or multiple collections.

The 2,000-lemma CSV is curated, not a raw frequency ground truth. Treat ranking/tier as catalogue metadata, **not** as evidence a word was studied. Curated example text/inflected forms are only shown as approved explanatory overlays where verified; do not generate Finnish case forms algorithmically in V1.

## 2. Study eligibility and enrollment

**Five distinct concepts must stay distinct:**

1. **Available:** discoverable in a curated deck or search result; no learner progress/due item.
2. **Saved:** a personal entry exists (or a curated item is bookmarked) but is not automatically scheduled.
3. **Collection membership:** an organisational association, not an exposure/rating event.
4. **Enrolled:** the learner explicitly added the curated/personal item to the learning queue. Idempotent enrollment.
5. **Studied:** an actual first-pass flashcard experience/rating created independent evidence and a due date.

Never equate browsing, opening Word Detail, moving a card into a collection, creating a personal word or selecting a deck with a successful recall. An entry needs **Finnish text and English meaning** before it can be scheduled. Duplicate warnings protect existing meaning/context; different senses can remain separate personal entries when warranted.

**New vs due:** An enrolled-but-never-studied item should appear in New Words, not in the Due Review counter. Once the learner has begun a real flashcard exposure, its first scheduled event follows the rules below. A resumed new-word session remains intact, not silently re-enrolled or counted as another exposure.

## 3. Deterministic Review V1 — inherited interval policy

The existing full Vokri [architecture's Review Engine V1](../../architecture/content_learning_data_architecture_specification.md#13-review-engine-v1) recommends an **initial exposure review around eight hours** and the following **successful recall interval ladder**:

| Successful spaced level | Next due |
|---:|---|
| 0 → 1 | **1 day** |
| 1 → 2 | **3 days** |
| 2 → 3 | **7 days** |
| 3 → 4 | **14 days** |
| 4+ | **30 days** |

For standalone Vokri Cards, propose this explicit mapping, as it is the smallest adaptation of the approved architecture:

| Card self-rating | Domain outcome | Due interval | Effect | In-session revisit |
|---|---|---|---|---|
| **Again** | `not_sure` (lowest certainty) | Approximately **4 hours** | reset consecutive successes; weaken review state | yes; once in a finite revisit phase |
| **Almost** | `almost` | Approximately **8 hours** | reset consecutive successes; keep or reduce level by one | yes; once in a finite revisit phase |
| **Knew It** | `correct` | **1/3/7/14/30 days** depending on achieved level | advance success level and progression | normally no |
| **No rating / abandon** | no confirmed recall event | If actually seen but unrated, retain first-exposure pending state (approximately **8 hours**) | no success | resume session before new review |

**This mapping is a clear implementation proposal**, not a claim that the Figma prototype calculates time. Owner/domain review should lock the choice of storing an unrated reveal as an initial exposure; do not silently count merely opening a card as a success.

The earlier Vokri state labels are `learning`, `becoming_familiar`, `familiar` with first successes still learning, two spaced successes → becoming familiar and four spaced successes without recent weak results → familiar. A weak result should not immediately demote everyone; repeated weak results have defined demotion effects. In standalone Cards, display neutral vocabulary summaries rather than gamified ranking/proficiency claims.

**No FSRS or SM-2 migration in Prompt 5.** Changes to the ladder need separate explicit review and versioned migration. Review calculations are deterministic and testable pure TypeScript functions independent from the React component tree and current wall clock mocking.

## 4. Recall direction and canonical identity

The actual product allows:
- `fi_to_en` — recognise Finnish and recall English.
- `en_to_fi` — produce/recall the Finnish counterpart.
- `mixed` — decide/record direction at each card; mixed is a **session choice**, not a third independent skill to schedule.

**Recommended V1 direction policy:** use one canonical content item + explicit separate review subrecords per supported direction where it matters (`reviewKey = learningLanguage + itemRef + direction`). Don't duplicate canonical items or start another schedule due to a deck/collection. A mixed session resolves each shown card to one concrete direction **before displaying** it; only that direction receives the first-pass rating. The Today due summary must count either distinct due **cards by direction** with clear labelling or distinct vocabulary items with predictable deduplication, and must not misleadingly double-count one word as two generic words.

If implementation temporarily shares an item-level due date across both directions, **document that as an explicit V1 simplification**, not evidence that recognizing a Finnish word proves producing it. Do not hide the distinction in analytics. The source identity does not change.

## 5. Flashcard session state machine

Supported phases:

```text
created / queued
  → front
  → revealed
  → first-pass rating (exactly once)
  → next distinct item
  → first-pass complete
  → optional finite revisit queue (Again/Almost)
  → session complete
```

A minimal session snapshot should contain:

```ts
type Language = "fi" | "sv";
type CardDirection = "fi_to_en" | "en_to_fi";
type SessionMode = "learn_new" | "review_due";
type SessionPhase = "first_pass" | "revisit" | "completed" | "interrupted";
type ItemRef =
  | { kind: "curated"; courseItemId: string }
  | { kind: "personal"; personalEntryId: string };

interface SavedFlashcardSession {
  sessionId: string;
  schemaVersion: number;
  learningLanguage: Language;
  mode: SessionMode;
  origin: { route: string; collectionId?: string; deckId?: string; itemId?: string };
  orderedCards: Array<{ item: ItemRef; direction: CardDirection }>; // frozen distinct first-pass snapshot
  currentIndex: number;
  phase: SessionPhase;
  revealed: boolean;
  firstPassRatedKeys: string[];
  revisitKeys: string[];
  revisitIndex: number;
  createdAt: string;
  updatedAt: string;
}
```

The displayed 6 of 10 refers to **unique first-pass cards**; revisits have separate labelled progress. The app can store one active resumable session at a time in V1 or explicitly model more; do not silently overwrite an existing paused session. Always restore the **source route/selected deck or collection** after completion or exit.

**First-pass idempotency:** define a stable event key (e.g., `sessionId + resolvedItemId + direction + first_pass`) and atomically persist both `ratingCommitted=true` and the schedule transition. Double taps, crash/relaunch, or a same-session revisit must not duplicate the spaced-recall update. A revisit may change same-session practice presentation but **never** commits a second spaced-success event for that item/direction.

**Queue safety:** if an item is deleted or unenrolled during an interruption, remove its now-invalid queue reference on resume with a clear, non-destructive UX. An unavailable content ID should be skipped/logged with a recoverable message, not crash or show a ghost word.

## 6. Ratings and component presentation contract

Use Figma [Review Front 426:2738](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=426-2738) and [Answer Revealed 426:2759](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=426-2759). Rating labels are **Again / Almost / Knew It**. They express the learner's **self-reported recall**, not automatic correctness detection.

- Before reveal: no rating commitment and no 'auto-correct' grading.
- On reveal: English gloss or Finnish term according to resolved direction; optional reviewed sample, spoken note or personal notes.
- After first-pass rating: commit one due event, move forward; Again/Almost queue at most one finite revisit per card.
- On completion: unique cards studied, optional revisits, neutral feedback. Do not display fictitious "100% accuracy" or CEFR progress.
- On exit: preserve unfinished session; back/return uses origin. The actual React Native app must have keyboard/screen-reader-aware focus, not only Figma's representative links.

## 7. Personal words, phrases, sentences and collections

**Personal entries:**
- `word` — Finnish lexical form and learner-defined meaning.
- `phrase` — fixed expression and user meaning.
- `sentence` — whole authored/saved sentence, **never automatically split** into multiple cards/lemmas.
- Optional notes, topic/source and collection references, with editable content ownership.

**Collections:** stable collection ID, name, optional description, set/list of `ItemRef` memberships. Multiple memberships point to the **same** underlying learner-state identity per direction. Deleting a collection removes only its membership record; leaves canonical vocabulary, personal entries, study enrolment and due dates intact.

**Editing policy — requires owner/domain confirmation:**
- Notes-only edits do not reset learning history.
- Material changes to Finnish prompt/English meaning should **invalidate or restart due evidence for affected item/direction** while preserving historical audit events; avoid silently showing 'familiar' for substantially different learning content.
- If a personal entry is linked to a canonical item, link is optional and doesn't overwrite custom English meaning/notes.
- Soft-delete or recoverable delete may be preferred in storage, but user-facing delete confirmation must specify the outcome.

## 8. Local storage and backup contracts

Follow the shared [Expo stack](../../architecture/mobile_first_tech_stack_plan.md): local-first React Native/Expo + TypeScript, Zod validators and `AsyncStorage` through a versioned abstraction, no V1 backend. Persist progress, schedules, sessions, preferences and personal content in **separate versioned namespaces**; bundle immutable vocabulary/decks as validated app content (not duplicated to AsyncStorage).

On app start: **parse → migrate → validate → hydrate**. A corrupted save must not crash the app; preserve healthy user content/preferences and provide a safe recovery route. Handle offline/interruption and atomic rating writes in the domain layer.

### Export My Words — not full backup

Versioned JSON contains personal entries, optional notes, personal collection metadata and membership references. **Explicitly excludes** full review/schedule history, due dates, reminders, global UI preferences and accounts/cloud sync. Show this limitation in Settings.

Suggested envelope, nonbinding before domain acceptance:

```json
{
  "format": "vokri-cards-my-words",
  "version": 1,
  "learningLanguage": "fi",
  "exportedAt": "ISO-8601",
  "personalEntries": [],
  "collections": [],
  "memberships": []
}
```

**Import:** validate content type, JSON shape/version/size, language, duplicate identifiers and user-provided field lengths; preview new/duplicate/conflict counts; require choices to merge/keep-both/skip as authored by owner; commit only after explicit confirmation, using non-destructive transaction semantics. Never silently overwrite existing personal meanings or shift study due dates. Invalid/unrecognized files **do not** mutate local content.

**Reset Study Progress:** reset the learner's review/schedule/active-session history **only** after clear confirmation. **Preserve personal entries, collections and preferences**. Removing a personal entry is a different destructive operation.

## 9. Language boundaries, reminders and migration

**Finnish first:** scoped by `learningLanguage: "fi"`. Future `sv` content cannot inherit Finnish noun forms, due dates or decks. Don't expose a selectable Swedish study queue until reviewed Swedish vocabulary/decks actually ship. The UI may keep Finnish as its only active learning language in V1 while internal domain keys remain generic.

**Reminders:** optional local notification permission and a preference; preview does not prove delivery. Request permissions at appropriate native times. Rescheduling should depend on due dates but must not leak personal vocabulary to external services in V1.

**Migrations:** `schemaVersion` and content version support non-destructive upgrades; stable authored IDs are preserved. Maintain a test matrix for older JSON exports, renamed deck IDs, deleted personal entries, app restart during first-pass rating, and future language-scoped data.

## 10. Test and acceptance scenarios

| Fixture | Expected invariant |
|---|---|
| Browse 10 words without enrollment | Due queue unchanged |
| Add one word from two decks | One canonical enrollment; no duplicated due state |
| Rate Knew It then double-tap/restart | Exactly one successful spaced review event |
| Rate Again/Almost and revisit in same session | Revisit shows; no second spaced success |
| Mixed session | Resolved direction persisted for each card |
| Store one phrase in three collections | One canonical item/direction schedule |
| Edit only personal note | Same learning history |
| Change prompt/meaning | Invalidate affected evidence per approved policy |
| Delete collection | Entries/reviews retained; only membership removed |
| Delete item from paused queue | Resume safely skips missing ref |
| Import invalid JSON | No data mutated |
| Import conflicting custom translations | Explicit choice, no overwrite by default |
| Export and import personal entries | Entries/collections round-trip; full review history not claimed |
| Reset study progress | Personal content/collections intact |
| Switch target language in future | Finnish and Swedish schedules remain independent |
| Kill app midway through new session | Restored cursor, revealed state and source; no duplicate rating |

The implemented Learn New section above takes precedence over earlier proposals. Resolve remaining review, personal vocabulary and interchange decisions in their respective milestones.
