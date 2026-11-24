# Vokri Cards — Standalone Data, Review & Session Contract (V1)

**Historical handoff.** The [multilingual addendum](./vokri-cards-multilingual-implementation-addendum.md) supersedes Finnish-only launch, switching and data-scope assumptions. The [Cards-first roadmap](../../architecture/vokri-cards-first-implementation-plan.md) records current engineering milestones.

**Design-to-code contract; 21 November 2026. Not implemented.** The standalone application is Finnish-first (`fi`) and local-first; Swedish (`sv`) is a separate future target language, **not** an automatically populated switch or second interface translation. The contract reconciles actual [Vokri Cards Figma](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=407-766), [Phase 5 handoff](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4058), [existing Vokri learning architecture](../../architecture/content_learning_data_architecture_specification.md) and the [full Vokri optional-practice contract](../vocabulary-practice/vocabulary-practice-data-contract.md).

**The key deliberate adaptation:** In *full Vokri*, optional Flashcards practice does **not** commit scheduled Review outcomes. In **standalone Vokri Cards**, Flashcards is the **main** learning tool and a first-pass Again/Almost/Knew It rating **must** commit the app's one official spaced-review outcome (subject to the idempotency contract below). No second scheduler is created.

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

**This document is a design-to-domain contract, not working software.** Resolve explicitly marked owner/domain choices before production implementation rather than silently inventing them.
