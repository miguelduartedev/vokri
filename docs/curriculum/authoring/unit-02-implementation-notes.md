# Vokri — Unit 2: People & Things · Implementation Notes

**Status:** Content-specific engineering decisions; no application code implemented. **Updated:** 11 November 2026.  
**Read with:** [Unit 2 full specification](./unit-02-people-and-things-complete-specification.md), [Coverage & QA](./unit-02-coverage-and-qa.md), [approved Unit 1 authoring standard](./exercise-authoring-standard-v1.md), [Unit 1 implementation notes](./unit-01-implementation-notes.md), [shared learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## 1. Exact scope and identifiers

- Unit: `unit.people-and-things`, `learningLanguage: fi`, ordered after `unit.hello`. The unit label is “People & Things”; no Unit 1 IDs are renamed.
- Lessons: `lesson.people-and-things.this-that-it`, `lesson.people-and-things.who-is-that`, `lesson.people-and-things.finnish-and-english`, `lesson.people-and-things.where-you-live`, `lesson.people-and-things.questions-and-no`. Preserve order 1–5.
- Canonical vocab IDs: `vocab.<ascii-lemma>`, e.g. `vocab.tama`, `vocab.han`, `vocab.kieli`, with `learningLanguage=fi` as part of global identity. **Display and accept** correct Finnish orthography, not ASCII IDs.
- Full step ID: printed lesson step prefix plus row suffix. There are **85 required steps** and **two separately identified optional spoken notes**. Each step's content, target and encounter status is in the main spec.
- Required exercise IDs: the **62 unique** `ex.people-and-things.<lesson>.<slug>` records printed in the main specification. Additional `ex.people-and-things.review.*` records R01–R09 are **nine independent scheduled-Review variants**, not extra compulsory steps.
- Teaching-only appearance of a word, distractor or optional note should not count as a new encountered vocabulary item. First formal encounters are explicit at vocabulary/phrase/grammar-introduction steps, recorded in the lesson table.

## 2. Grammar, lemma, phrase and scoring integrity

These are content records, not requests to implement a Finnish morphology engine.

| Canonical item | Teaching form / unit scope | Scoring guidance |
|---|---|---|
| `vocab.puhua` | `puhua`, `puhun`, and the question model `puhutko` | `puhun/puhut` are forms of the same lemma; do not create new vocabulary IDs |
| `vocab.asua` | `asua`, `asun`, and the negative `en asu` | Do not generatively inflect arbitrary place nouns or full verbs |
| `vocab.suomi` | `suomi` (language), `Suomi` (country), `suomea` after `puhun`, `Suomessa` after `asun` | Phrase outcomes score the phrase or specified grammar concept, **not** automatic separate successful recalls of every underlying lemma |
| `vocab.englanti` | `englanti` dictionary form; `englantia` in speaking phrase | No general partitive exercise; only authored forms |
| `vocab.ei` | `ei` (short no / 3sg negative), `en` (I do not), `et` recognition only | A single lemma, not three separate words; in `en puhu` score `grammar.negative-en` when that is the intended test |
| `phrase.puhutko-suomea` | Recognised as fixed chunk in 2.3, formed after grammar in 2.5 | One canonical phrase ID; **not** a duplicate new encounter in 2.5 |
| `phrase.en-puhu-language` | Formally introduced after the negative-verb explanation and `vocab.ei` intro in 2.5 | Transformations E05/E15 score negation grammar; independent Review R09 scores the phrase |
| `grammar.demonstratives-tama-tuo-se` | Intro in 2.1 `reference-contrast` | Avoid reducing the three forms to arbitrary unique English one-word glosses |
| `grammar.kuka-mika-distinction` | 2.2 `who-versus-what` | Choose target-specific lexeme/phrase evidence, not all words in the prompt |
| `grammar.han-person-reference` | 2.2 introduction/explanation | `hän` is gender-neutral; colloquial `se` recognition-only |
| `grammar.yes-no-ko-ko` | 2.5 `question-patterns` | Only taught `onko`, `oletko`, `puhutko` patterns |
| `grammar.negative-en` | 2.5 `negative-forms` | After `en` use `puhu`/`asu`, not `puhun`/`asun` |

**New phrase definitions are curricular teaching targets** under the shared PhraseItem model. Do not duplicate vocabulary items like `vocab.olla` or make `on`, `puhun`, `asu` separate scored dictionary entries.

## 3. Evaluator compatibility and truthful feedback

The merged Unit 1 authoring standard currently specifies `correct`, `almost`, `not_sure` as scheduler outcomes, with no distinct stored `incorrect` event. Unit 2 **does not redefine or silently change that review engine**.

Recommended V1 adapter to confirm explicitly with the product owner:

| Actual response | Visible feedback class | Existing scheduler result | Knowledge success |
|---|---|---|---|
| Exact accepted option/form/pair | `correct` | `correct` | Once, for declared `scoredTargetIds` only |
| Authored near miss (e.g. `en puhun`) | `near` (“Check the form”) | `almost` | None |
| Unrelated wrong option/text | `incorrect` (“Another look”) | `almost` | None |
| Explicit “I'm not sure yet” | `not_sure` | `not_sure` | None |
| Empty text field | No submission | None | None |
| Capability-only D07/E16 | User-visible correct or corrective result | No lexical/grammar scheduler outcome | Capability evidence only |

The proposed `almost` bucket is **legacy non-success storage**, not a truthful statistical measure of nearly-correct answers. Changing it to a genuinely separate `incorrect` domain event should be a deliberate later schema migration rather than an undocumented Unit 2 exception. Do not use the string “Almost!” to label an unrelated wrong answer.

### N1 deterministic answer normalisation

Reuse Unit 1 exactly: Unicode NFC, lowercasing, trim, collapse whitespace, turn allowed `. , ! ?` into spaces before collapsing (do not join words), and compare only to the finite authored accepted sets. Never fold Finnish `ä/ö` into `a/o`, collapse doubled vowels/consonants or use fuzzy AI grading. The specification explicitly lists acceptable optional subject pronouns for relevant sentences.

| Input | Accepted set / task | Expected |
|---|---|---|
| `  SUOMI  ` | C04 dictionary `suomi` | Correct |
| `SUOMEA` | C04 dictionary `suomi` | Incorrect; different taught form |
| `Puhun suomea.` | C12 `Puhun suomea.` | Correct |
| `Minä puhun suomea!` | C12 `Minä puhun suomea.` | Correct after punctuation/case |
| `Puhun suomi` | C12 | Authored form near miss, not correct |
| `Puhutko suomea?` | E03 | Correct |
| `Puhunko suomea?` | E03 | Wrong grammatical person, authored near feedback |
| `oletkö` | E02 | Incorrect suffix spelling (authored near feedback) |
| `En puhun suomea.` | E05 | Incorrect; en requires puhu |
| `En puhu suomea!` | E05 | Correct (allowed punctuation) |
| `En asu Suomessa.` | E06 | Correct |
| `Ei asu Suomessa.` | E06 | Incorrect; not the first-person target |
| `hän` | B08 | Correct |
| `han` | B08 | Incorrect diacritic near miss |
| `!!!` | E07, accepts `ei` | Empty after normalisation; do not commit an attempt |
| `Hei! Olen Aino. Puhun suomea. Asun Suomessa.` | E16 token sequence | Correct when constructed in the exact task-defined order |

No runtime guessing of arbitrary translations or cases is permitted.

## 4. Matching, Review and optional practice

Required lesson matching boards:

| Record | Target | Pairs |
|---|---|---:|
| A04 | `tämä/tuo/se` with explicit context-qualified counterparts | 3 |
| B03 | `ihminen/mies/nainen/lapsi` | 4 |
| B11 | `me/te/he/ystävä` recognition only | 4 |
| C02 | `suomi/englanti/kieli` dictionary forms | 3 |
| C10 | `hyvin/maa` recognition only | 2 |
| **Total** | | **16** |

Each pair has a distinct identity and a single first-attempt scored target. A wrong match does not penalise the unrelated second item as if it were all incorrect; a corrected repeated tap is guided feedback, not an independent spaced success. The **optional Word Match session minimum of four pairs does not apply** to curriculum exercises with two or three authored pairs.

The nine independent Review variants R01–R09 should only be selected by the existing due-date scheduler after their targets have been formally encountered. R01–R07 are recognition-only lexical tests. R08 reviews `ihminen` without the first-letter cue in B04. R09 checks the negative phrase `En puhu suomea` without requiring a new form.

The optional Flashcards and Word Match modes share the same language-scoped registry but do not update scheduled Review due dates or complete lessons. In optional reverse Flashcards, filter recognition-only words so that `me, te, he, ystävä, maa, hyvin, miten` are not required as written Finnish.

## 5. UI implications from approved Figma (read-only inspection)

Figma file: [Nordic Editorial mobile explorations](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766).

Read-only inspection included `173:922` Grammar Lesson, `173:997` Exercise Default, `173:1052` Correct Feedback, `268:1320` Lesson Complete, `268:1345` Unit Complete, `182:977` Review Default, `343:2505` Flashcards Revealed, `362:3113` Word Match Initial.

These screens show focused learning headers, a scrollable reading area, calm feedback, completion without forced perfection, and native-safe bottom controls. They **do not certify** working text input, per-pair scoring, keyboard avoidance or task-complexity handling.

- `2.2` and `2.5` must support natural pause/resume points; 2.5's eight-task checkpoint should not be presented as an unskippable 16-interaction continuous screen.
- Four-sentence token E16 should wrap/scroll without reducing Finnish text size below readability. Use tappable controls with screen-reader labels, not drag-only tiles.
- English prompt context may refer to an object across the room. No image asset is a prerequisite; do not ask Codex to invent picture-based exercises.
- On-screen `ä` and `ö` input must be available without forcing system-language changes; input evaluation preserves these characters.
- Keep word/phrase notes concise; `Miten menee?` is a fixed **recognition** phrase without audio or pronunciation scoring.
- Do not infer from Figma's Unit 4 / 94-word demo progress that Unit 2 vocabulary has already been encountered.

## 6. Editorial policy, scope and build order

All Unit 2 new exercise and teaching records are `needs_review` until **explicit Vokri owner approval**. The owner has stated that their project-level sign-off is sufficient; no outside teacher approval is a mandatory blocker. Record approval truthfully (e.g., `approvedByRole: project_owner`) without inventing an outside S2 reviewer or claiming human-teacher certification.

Implementation order after document approval:

1. Parse and validate the five lessons and stable IDs, including grammar and PhraseItem definitions, in typed JSON/Zod using the already-merged Unit 1 ingestion approach.
2. Validate the acceptance set, first encounters, distinct review flags, wrong-feedback option IDs and N1 fixtures.
3. Run one Unit 2 mobile lesson end to end on iOS/Android, then connect all five to actual learner progress and Review due state.
4. Exercise the pause/resume path for heavy lessons, plus screen-reader/touch/keyboard behaviour and large text.
5. Calibrate durations with real novice study; keep content correct even if the UI needs shorter presentation segments.

**This is a content-only PR.** No application implementation, Figma edits, Unit 1 rewrites, curriculum blueprint amendments, or source CSV changes are requested.
