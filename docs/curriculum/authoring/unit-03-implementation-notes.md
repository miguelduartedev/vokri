# Vokri — Unit 3: Everyday Actions · Implementation Notes

**Purpose:** Unit-3-specific content-to-Expo decisions. No application code has been implemented here. **Date:** 11 November 2026.  
**Read alongside:** [Complete Unit 3 specification](./unit-03-everyday-actions-complete-specification.md), [Unit 3 coverage and QA](./unit-03-coverage-and-qa.md), [Unit 1 implementation notes](./unit-01-implementation-notes.md), [Unit 2 implementation notes](./unit-02-implementation-notes.md), [shared learning architecture](../../architecture/content_learning_data_architecture_specification.md), and [approved Nordic Editorial design handoff](../../handoff/README.md).

## 1. Stable identity and exact source binding

- Unit: `unit.everyday-actions`, `learningLanguage: fi`, after `unit.people-and-things`. Keep `stage.a1-foundations` and `course.fi`.
- Lesson IDs: `lesson.everyday-actions.want-and-need`, `lesson.everyday-actions.know-understand`, `lesson.everyday-actions.can-do`, `lesson.everyday-actions.going-coming`, `lesson.everyday-actions.read-write-study`, `lesson.everyday-actions.ask-answer-say`.
- Exercise IDs: exactly **81** `ex.everyday-actions.<lesson-slug>.<exercise-slug>` required records and **five** `ex.everyday-actions.review.<slug>` standalone due-Review records. The document tags A01–F19/R01–R05 are for navigation in the Markdown only.
- Steps: exactly **110** required ordered `step.everyday-actions.<lesson-slug>.<suffix>` records and **four optional** `spoken_note` steps. A final `checkpoint` is not a new lesson or exercise kind; Lesson 3.6's F11–F19 is the Unit 3 checkpoint.
- The only newly introduced production lexical references are the **17 exact blueprint lemmas**, with **five recognition-only** entries. `nyt` and `ehkä` are role promotions from earlier support to production using existing canonical IDs (and preserving previous encounters), not new vocabulary records.
- When an example contains `apua`, `ruokaa`, proper names or already-introduced earlier-unit words, never mark them as newly encountered or independently scored merely because they are visible.

Do not create a separate Unit 3 database, generate a Swedish curriculum or update scheduled Review from optional Flashcards/Word Match.

## 2. Lemma → taught form → permitted context

Unit 3 requires a **finite authored teaching-form registry** or equivalent content references. It does **not** require a Finnish morphological generator.

| Canonical lemma ID | First-person form | Known negative / construction | Instructional restriction |
|---|---|---|---|
| `vocab.haluta` | `haluan` | `Haluan puhua`, later `Haluan mennä` | Modal/want + taught infinitive |
| `vocab.tarvita` | `tarvitsen` | `Tarvitsen apua` | Fixed support noun; **not** `Tarvitsen mennä` |
| `vocab.tietaa` | `tiedän` | `En tiedä` | After `en`, use `tiedä`, not `tiedän` |
| `vocab.ymmartaa` | `ymmärrän` | `En ymmärrä` | After `en`, use `ymmärrä`, not `ymmärrän` |
| `vocab.voida` | `voin` | `Voin puhua`, `Voinko puhua?` | `voinko` derives from taught `-ko`; not conditional `voisin` |
| `vocab.tehda` | `teen` | `Teen ruokaa` | `ruokaa` supplied; no object-case generator |
| `vocab.menna` | `menen` | `Menen nyt`, `Haluan mennä` | Reference point for going must be clear |
| `vocab.tulla` | `tulen` | `Tulen nyt`, `Voin tulla` | Reference point for coming must be clear |
| `vocab.lukea` | `luen` | `Luen nyt` | Do not guess `luken` |
| `vocab.kirjoittaa` | `kirjoitan` | `Kirjoitan nyt` | Do not guess `kirjoittan` |
| `vocab.opiskella` | `opiskelen` | `Opiskelen suomea` | Existing known language form; no fresh partitive paradigm |
| `vocab.kysya` | `kysyn` | `Voin kysyä` | No unintroduced object-case pattern |
| `vocab.vastata` | `vastaan` | `Vastaan nyt` | Reply/answer, not interchangeable with ask/say |
| `vocab.sanoa` | `sanon` | `Sanon: “Kiitos.”` | Fixed quoted example, no object-case parsing |

`vocab.mutta`, `vocab.nyt`, `vocab.ehka` are not verbs. They are production vocabulary with the ordinary forms `mutta`, `nyt`, `ehkä`. The `grammar.verb-type-1-preview` in Lesson 3.1 is **awareness-only** and uses previously known `puhua/asua` as transparent models. Do not apply it to the remaining Unit 3 verbs.

Recognition-only `saada`, `pitää`, `nähdä`, `kuulla`, `auttaa` must remain `fi`→English recognition items in scheduled Review and optional practice, unless the learner separately saves them in My Words with its own user-owned role. `saada` and `pitää` have other meanings; the course recognises only the context taught.

## 3. Phrase and grammar target inventory

Use the existing PhraseItem and GrammarConcept registries:

- `phrase.haluan-slot` — `Haluan puhua`, `Haluan mennä` (latter after `mennä` is introduced).
- `phrase.tarvitsen-slot` — `Tarvitsen apua` fixed chunk. `apua` is not independently assessed.
- `phrase.en-tieda` — `En tiedä`; `phrase.en-ymmarra` — `En ymmärrä`.
- `phrase.voin-slot` — `Voin puhua`, `Voin tulla` (latter after 3.4). `phrase.voinko-slot` — `Voinko puhua?`.
- `phrase.opiskelen-suomea` — `Opiskelen suomea`.
- `grammar.first-person-forms` — limited I-forms; `grammar.verb-type-1-preview` — recognition/awareness only; `grammar.verb-plus-infinitive` — formally introduced in 3.3 using `voin/haluan`.
- Reuse existing `grammar.negative-en` and `grammar.yes-no-ko-ko` from Unit 2. No second introduction or new knowledge identity.

`Haluan puhua` in 3.1 is a **fixed taught chunk** before the general two-verb explanation in 3.3; its scored target is the chunk, not a before-the-fact grammar generalization. A token-built or multiple-choice response may test phrase retrieval but should not automatically score all linked vocabulary.

## 4. Deterministic answer checking and honest errors

The **Unit 1 N1** normalisation policy is unchanged: NFC, lowercase, trim/collapse spaces, convert permitted terminal/inter-word punctuation `.,!?` into spaces *before* collapsing whitespace (no concatenation), preserve Finnish ä/ö and doubled letters, and compare against the enumerated `answerSpec` strings. No stemming, typo-distance grading, AI evaluation or arbitrary conjugation.

| Input | Record / expected | Outcome |
|---|---|---|
| `HALUAN PUHUA!` | A08 accepts `Haluan puhua` | Correct |
| `haluan puhun` | A08 | Authored form error; not correct |
| `tarvitan` | A05 accepts `tarvitsen` | Form near miss; not correct |
| `EN TIEDÄ.` | B09 accepts `En tiedä` | Correct |
| `en tiedän` | B09 | Incorrect: after en use tiedä |
| `en ymmärrän` | B10 | Incorrect: after en use ymmärrä |
| `Voinko puhua?` | C08/C12, F13 | Correct |
| `Minä voinko puhua?` | C08/C12, F13 | Not in authored accepted set; do not autoaccept |
| `voin puhua` | C08 (permission question) | Incorrect statement; feedback, not a correct question |
| `Voin tulla!` | D11 | Correct, if the authored order is constructed |
| `Menen nyt.` | D13 (“coming to waiting friend”) | Incorrect in the explicitly provided viewpoint |
| `ehka` | D08 accepts `ehkä` | Spelling near miss; not correct |
| `kirjoittan` | E06 accepts `kirjoitan` | Wrong stem spelling; not correct |
| `en puhun englantia` | F16 | Incorrect negative verb form |
| `En tiedä, mutta voin kysyä.` | F19 constructed chunks | Correct capability evidence, no extra lexical scoring |
| `!!!` | any text input | Empty after normalisation; requires input or explicit Not sure |

**Important distinction:** The scheduler domain still has `correct`, `almost`, `not_sure`, but no dedicated `incorrect` outcome. Units 1–2 explicitly proposed mapping wrong and authored near attempts to the existing **non-success `almost` bucket** while showing truthful learner-facing `incorrect` vs `near` feedback. Do not silently alter that outcome model; confirm the adapter with the product owner before native integration. `almost` should not be displayed as a claim that an unrelated wrong answer was nearly correct.

## 5. Matching and knowledge-event integrity

There are **eight required lesson matching records totaling 18 pairs**:

| ID | Pair scope | Count |
|---|---|---:|
| A03 | haluan / tarvitsen | 2 |
| B03 | tiedän / ymmärrän | 2 |
| C03 | voin / teen | 2 |
| C10 | saada / auttaa (recognition only) | 2 |
| D03 | menen / tulen with explicit viewpoint | 2 |
| E04 | luen / kirjoitan / opiskelen | 3 |
| E11 | nähdä / kuulla (recognition only) | 2 |
| F04 | kysyn / vastaan / sanon | 3 |
| **Total** | | **18** |

Each matched pair emits **at most one first-attempt** target result per exercise run. Subsequent retries are guided correction, not fresh spaced successes; do not penalise an unrelated pair when a learner taps a wrong counterpart. Curriculum matching can have two or three pairs — the four-pair minimum applies **only** to optional Word Match sessions.

`linkedTargetIds` are for context, `scoredTargetIds` are for actual tested knowledge. In the final F19, the entire `En tiedä, mutta voin kysyä` is a **capability-only** assembly with `scoredTargetIds: []` and `knowledgeScoring: false`. Do not award lemma success for every visible chunk.

## 6. Mobile presentation and pause/resume contracts

Approved [Nordic Editorial Figma](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766) was inspected **read-only** for focused Grammar, Exercise Default/Correct, Lesson Complete, Unit Complete, scheduled Review, Flashcards and Word Match. The designs show a 390×844 visual reference, a scrollable reading area and restrained feedback; they do **not** prove native typed-answer or review-state execution.

- Render explanations in compact, scrollable paragraphs with exact quoted examples from the authored content. Avoid shrinking Finnish text to fit an entire paragraph.
- Use the existing five exercise kinds and eight LessonStep kinds; do **not** invent a game renderer for each verb class.
- At 360/390/430 widths and 390×720 height, keep safe-area bottom actions above the keyboard; support text scaling and accessible focus/announcements.
- Make token selection/tile moving usable via buttons and assistive technology, not drag-only. Long F19 three-chunk construction needs wrapping and focus restoration.
- Lesson 3.4 should allow a pause after D08; Lesson 3.6 should allow a pause before its nine-question checkpoint, with progress recovered without duplicate scoring. Other natural pause points are in the lesson metadata.
- Optional spoken-note setting can hide all four notes **without blocking lesson completion or introducing empty review items**. No audio/voice scoring is assumed.
- This PR is documentation only; actual navigation, content JSON conversion, editor approval gates and accessible iOS/Android performance must be tested in Expo.

## 7. Approval, build order, and deferred decisions

**Project owner sign-off is sufficient** for Vokri's internal content editorial state, as explicitly agreed. New Unit 3 text remains `needs_review` until that approval is given. No external teacher is required, and none is falsely named. Original sources and prior approved units remain untouched.

After approval, recommended Codex implementation sequence:

1. Convert this specification into typed structured LessonStep/Exercise/PhraseItem records using existing content architecture, avoiding new IDs where the concept already exists.
2. Validate 17 production and five recognition roles against the original unchanged vocabulary registry, including `nyt/ehkä` support→production promotion.
3. Write deterministic tests for all 86 authored answer specifications, N1 alternatives, near feedback, matching pair scoring, review eligibility and introduction-before-assessment.
4. Implement Unit 3 as a content-driven Expo continuation of Units 1–2, with checkpoint/pause navigation; no second scheduler or generated morphology engine.
5. Perform actual beginner, accessibility, Finnish input and responsive native QA. Update lesson pacing only with evidence.

This PR must **not** edit React Native source, existing Units 1/2, the A1 blueprint, original CSV, Nordic Editorial Figma or future Swedish learning content.
