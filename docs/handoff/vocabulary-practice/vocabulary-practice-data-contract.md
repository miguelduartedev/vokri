# Vokri — Vocabulary Practice Data & Session Contract (V1)

**Status:** Design-to-code contract, 11 November 2026. No production code is implemented by this document.  
**Platform:** Expo + React Native + TypeScript, local-first. **Target language:** Finnish (\`fi\`) first; Swedish (\`sv\`) later as a separate course/collection.  
**Related specifications:** [Mobile implementation handoff](../Language_Learning_Mobile_Implementation_Handoff.md), [Figma tokens](../Nordic_Editorial_Mobile_Tokens.json), [practice screen registry](./vocabulary-practice-screen-map.json).

## 1. Architectural boundary

One shared learning-item registry powers the Course, Vocabulary/Grammar Libraries, scheduled Review, optional Flashcards and optional Word Match. **Do not maintain a separate vocabulary database per practice activity.**

Keep four concerns independent:

1. **Curriculum/content:** canonical vocab/phrase/grammar records, localised forms, teaching examples, source provenance, lesson exposure.
2. **Learner knowledge:** language-scoped encounter and recall history, familiarity and scheduled Review dates. This belongs to the existing learning-domain architecture.
3. **Optional practice sessions:** source/mode, selected eligible item IDs, active queue, self-ratings/mismatches, first pass, revisit and resume checkpoint. This should not silently mutate scheduled Review state.
4. **Transient UI:** selected answer tile, currently revealed side, feedback banner, focus, active filter, keyboard, open dialog, animation progress. Persist only UI fields necessary to resume a promised unfinished session.

Current Figma uses Unit 4 as **illustrative** content. The real Finnish curriculum begins at **Unit 1 — Hello**; do not seed future words as “encountered.”

## 2. Stable identities and language separation

- \`learningLanguage\`: \`fi\` in V1, \`sv\` when reviewed Swedish content is later available. Do not confuse language **being learned** with UI localisation.
- \`courseItemId\`: stable ID from the existing canonical vocabulary registry, scoped to the learning language; display forms may be inflected or colloquial without becoming unrelated lemmas.
- \`personalEntryId\`: locally generated unique ID, scoped to a learning language. Not a rank, surface-text hash or course row number.
- \`sessionId\`: unique local session instance.
- \`pairId\`: unique identity of one authored matching task with a specific prompt/meaning; a single course lemma may support different *authored* matching tasks when context differs.

Link a saved personal entry to a course lemma by optional \`linkedCourseItemId\` while keeping its original Finnish phrase, translation, examples and personal notes editable. Never modify shared official curriculum data when editing personal entries.

Canonical example: \`haluan\` is a learner-facing form of \`haluta\`; spoken \`haluun\` is recognition-only. Retain these relationships, and do not auto-generate morphology.

## 3. Source selectors

\`PracticeMode = flashcards | word_match\`

\`PracticeScope = encountered | unit | my_words | combined\`

Required configuration fields:

| Field | Meaning |
|---|---|
| \`learningLanguage\` | Target-language scope, \`fi\` initially |
| \`mode\` | Flashcards or Word Match |
| \`scope\` | One of four shared sources |
| \`unitId?\` | Required for unit; only reached units are selectable |
| \`sizeChoice\` | \`10\`, \`20\` or \`all\` |
| \`cardDirection?\` | \`fi_to_en\`, \`en_to_fi\` or \`mixed\`; Flashcards only |
| \`origin\` | Review, Course unit, Library/My Words or personal detail; restore on return |
| \`createdAt\` and \`schemaVersion\` | Migration and bounded local persistence |

**Mode/source matrix (Figma):**

| Source | Flashcards setup | Word Match setup |
|---|---|---|
| Encountered | \`297:1989\` | \`297:2013\` |
| Specific unit | \`297:2037\` | \`388:3975\` |
| My Words | \`297:2061\` | \`388:4071\` |
| Combined | \`304:2002\` | \`388:4163\` |

The three final Word Match variants were needed because prior unit, My Words and combined setup frames visibly selected Flashcards. Switching modes must preserve **source** and unit. The source selector should preserve **mode**. Never route to a mode that is not visually selected.

## 4. Vocabulary eligibility

| Item | Flashcards | Word Match |
|---|---|---|
| Encountered course lemma/form | Yes | If independently matchable |
| Short phrase with accepted gloss | Yes | If brief and unambiguous |
| Manually saved word | Yes | If meaning supplied and disambiguated |
| Manually saved phrase | Yes | If sufficiently short and unambiguous |
| Full saved sentence | Yes | **No, V1** |
| Missing/empty English meaning | No until resolved | No |
| Not-yet-encountered course item | No | No |
| Matching gloss identical to another active pair | N/A | Exclude/replace or provide approved context |
| Spoken form | Recognition note, linked to standard target | Not an independently scored lemma by default |

For \`encountered\`, filter by a genuinely recorded exposure from reached lessons, not visible course summaries or sample Figma progress. For \`unit\`, intersect that unit's item IDs with the learner's actual exposures. For \`combined\`, union eligible encountered course and personal items then deduplicate by stable canonical identity **only where semantically equivalent**. Never silently delete a personal item's own notes or authored gloss. Do not combine Finnish and Swedish.

**Minimum matching eligibility:** four *distinct, simultaneously unambiguous* pairs. If fewer, use existing insufficient-pairs setup (\`297:2109\`) and recommend Flashcards or adding personal words.

**Size resolution:** \`10\`, \`20\` or \`all\`; for numeric choices, use the smaller of requested and eligible counts, with a truthful summary. An \`all\` selection is finite. If a user's collection becomes unusually large, choose and visibly disclose an explicit session-size cap before launch; do not silently truncate or build an unbounded session. The static count examples (94 encountered, Unit 4's 18, My Words 12) are not production data.

## 5. Shared session record

Recommended V1 fields (conceptual, not an imposed storage schema):

- \`id\`, \`schemaVersion\`, \`learningLanguage\`, \`mode\`, \`scope\`, \`origin\`
- \`unitId?\`, \`sizeChoice\`, \`resolvedItemIds[]\` (snapshot of eligible ordered distinct IDs)
- \`phase: first_pass | revisit | completed | interrupted\`
- \`firstPassCompletedUniqueIds[]\`, \`firstPassTotal\`
- \`revisitIds[]\`, \`revisitAttemptCount\`, \`revisitCompletedIds[]\`
- \`startedAt\`, \`updatedAt\`, \`completedAt?\`, \`resumeCheckpoint?\`
- \`versionedSourceSnapshot\` or equivalently stable IDs plus lightweight content version for graceful missing/edited item handling
- \`sessionResultCommitted\`: prevents double counting after back/duplicate taps

Avoid persisting redundant copies of the full 2,000-word CSV or official lessons. Persist the smallest information needed to restore a session deterministically.

When a personal entry is edited/deleted during an unfinished session, choose a deterministic safe resolution: restore the recorded pair snapshot when still valid, otherwise exclude the affected item with a clear explanation and maintain accurate totals. Do not resurrect a deleted personal record.

## 6. Flashcard state

Fields per active card:

- \`activeItemId\`, \`position\`, \`direction\`, \`revealed\`
- \`rating?: again | almost | knew_it\` (none before reveal)
- \`ratingCommitted\` to prevent duplicate taps
- \`revisitQueueIds[]\` for cards rated Again/Almost in the first pass

Lifecycle:

\`front → reveal → rate → next distinct item → first-pass finished → optional revisit → completed\`.

The front must invite the learner to recall *before* revealing. Finnish → English, English → Finnish and Mixed use the same record. Mixed direction must not immediately re-present the same expression as an identical duplicate.

**Distinct counters:** first pass counts unique selected items. Revisit reports repeat attempts separately. Again/Almost does not create an endless loop; after a bounded revisit pass, the learner may finish while still uncertain.

Optional self-ratings may be stored as session history, but **must not** automatically clear due scheduled reviews, postpone review dates or confer “familiar” status.

## 7. Word Match state

A matching task has:

- \`pairId\`, \`sourceItemId\`, \`leftText\` (English), \`rightText\` (Finnish)
- optional \`glossId\` or \`contextId\` identifying the unambiguous expected sense
- \`firstPassAttempted\`, \`hadMismatch\`, \`isMatched\`

The board is **four independently shuffled English/Finnish pairs** at a time, with two stable columns and four slots per column.

Session/board fields:

- \`orderedPairIds[]\`, \`nextPairIndex\`, \`firstPassMatchedIds[]\`, \`mismatchPairIds[]\`
- \`leftSlots[4]\`, \`rightSlots[4]\` with stable slot keys and \`pairId | null\`
- \`selectedTile?: { column, slotId, pairId }\`
- \`evaluation: idle | correct | incorrect | clearing | refilling\`
- \`revisitQueueIds[]\`, \`revisitMatchedIds[]\`, \`revisitAttemptCount\`
- \`visibleCount\` is at most four valid pairs; never add fake words

### Selection reducer contract

1. First tap on any unmatched tile selects it.
2. Tap that same tile again: deselect it.
3. Tap another tile **in the same column**: replace the first selection.
4. Tap a tile in the **opposite column**: validate the authored \`pairId\`, not merely whether strings resemble each other.
5. **Correct:** announce success, briefly highlight both with text/icon, commit exactly once, increment first-pass unique count only if first-time, clear both paired slots, then refill just the vacant slots with the next queued pair; **do not reorder other unmatched tiles**.
6. **Incorrect:** announce constructive feedback, record which pair(s) require revisit, keep the first selection, release the incorrect opposite tile after feedback; no progress increment.
7. During acknowledgement/refill, suppress duplicate taps; new tiles start unselected.
8. Last matching pair resolves to first-pass complete, not to another random board.
9. If mismatches exist, offer one **optional finite revisit**. Revisit progress and counts are independent of unique-first-pass totals. The learner may finish even after a remaining mismatch.
10. Progress is completed *distinct* pairs, not taps, failed attempts or duration.

**Board integrity:** Before display, ensure no two simultaneously displayed tasks have indistinguishable accepted answers; if unavoidable, choose another eligible pair, require approved matching-specific context, or show insufficient/unsuitable coverage. Do not penalise valid alternative translations. Personal translations are user-authored, not assumed reliable training labels.

Illustrative Figma interactions do **not** execute the queue. “Preview mid-session” / “Preview final pair” are **prototype-only controls** and must never ship in Expo.

## 8. Local persistence and exit

- \`selectedLearningLanguage\` and global preferences live in brand-neutral versioned state.
- Scheduled Review knowledge/progress stays in language-scoped review records.
- Optional practice checkpoint is stored separately, language-scoped. No accounts or cloud required.
- On Exit, present the approved confirmation sheet; “Keep matching” returns to current state. “Exit practice” leaves with resumable snapshot; current origin (Review/Course/Library/My Words) is preserved.
- Resume must restore mode, source, active unit, queue ordering, visible slots, phase, counters and the previously chosen card/selection *as safely as possible*, without new randomisation or double scoring.
- Back/done returns to **origin**, not always Home or Review. The existing generic Figma completion screens show an All Words example and cannot prove origin-sensitive navigation.
- Reset learning progress: follow existing app-wide policy preserving user preferences. Consider whether personal entries should survive that operation as a separate, explicit product decision; do not delete user-authored words silently.

Use a versioned Expo-compatible storage interface, validation, migration, corruption recovery, and atomic/idempotent result commits. Never claim a Figma prototype button persists data.

## 9. QA and release test contract

Unit tests:
- Source eligibility filters, encountered-unit gating, \`fi\`/\`sv\` isolation
- Personal entry create/edit/delete and deduplication rules
- Word Match ambiguous-gloss rejection, unique board pairings and stable refill
- Tile same-side replacement, same-tile deselect, correct and incorrect outcomes
- Duplicate-tap prevention, unique progress, finite revisit, no mastery inflation
- Flashcards reveal-before-rating, bidirectional/mixed direction and session state
- Resume after app suspend, edited/deleted personal entry, migrations and corruption
- Scheduled Review due dates remain unchanged by optional practice

Visual/native tests:
- 360/390/430 widths, short 720-height device, text scaling, safe-area/keyboard
- VoiceOver/TalkBack labels, announcements, focus after tile removal/refill
- Reduced-motion behaviour, no colour-only status, accessible modal focus
- Real iOS/Android device performance and E2E session completion

**Editorial review:** Native Finnish teacher review of instructional glosses and example sentences before production release. Preserve original user sentence-mining content as user data, not certified Finnish.

## 10. Implementation order

1. Inspect existing Expo repo and architecture. Stabilise shared vocabulary/phrase registries, source eligibility, language-specific practice IDs and local storage adapter.
2. First working Flashcards vertical slice with one reached Unit 1 set; front/reveal/rate/revisit/persist.
3. Word Match 4-pair board with authored pairs, deterministic reducer and two-stage queue.
4. Integrate the eight setup combinations, My Words authoring, Course/Review/Library entry points, saved sessions and origin-aware return.
5. Native accessibility, responsiveness, data validation, QA and Finnish editorial release gates.

Do **not** create a separate SRS engine for optional practice. Keep this lightweight and consistent with the original learning data architecture.

## 11. Figma source links

- [Foundation](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-1638)
- [My Words](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=323-2076)
- [Flashcards](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=340-2467)
- [Word Match](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=361-3102)
- [Final Integration](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-3972)

See the companion screen-map JSON for **84 verified mobile Figma frame identifiers**, source scopes, and prototype control destinations.
