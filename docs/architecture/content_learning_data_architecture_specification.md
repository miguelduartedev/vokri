# Vokri — Content + Learning Data Architecture Specification

This specification treats the [Finnish A1 Foundations curriculum blueprint](../curriculum/a1_foundations_curriculum_blueprint.md) as the pedagogical source of truth, the [curated Finnish 2,000-lemma CSV](../curriculum/vocabulary/finnish_2000_curated.csv) as the lexical backbone, and Nordic Editorial Figma plus the mobile handoff as the product/UI contract.

> **Current scope — 11 November 2026:** Finnish (`fi`) is the **only implemented learning language in V1**, built with **React Native + Expo**. Swedish (`sv`) is a **future separate target language to learn**, not a request for Swedish interface localisation, lesson content or a nonfunctional selector. The earlier Suomi branding and web-first build order are superseded by the working name **Vokri** and the [mobile-first build plan](./mobile_first_tech_stack_plan.md).

The curriculum already establishes the most important constraint for the architecture: content should move through **first encounter → guided recall → later recall → contextual reuse**, rather than becoming a binary learned/not-learned system.

---

## 1. Architecture principles

### Core decision

Keep four layers strictly separate:

| Layer | Responsibility | Example |
|---|---|---|
| **Content** | What Finnish exists and how it is taught | `vocab.olla`, Unit 1, `grammar.olla-present-1sg-2sg` |
| **Learner state** | What this learner has encountered/done | `vocab.olla → becoming_familiar` |
| **Review engine** | Decides what should resurface | `vocab.olla due tomorrow` |
| **UI state** | Temporary interaction state | second answer selected, feedback open |

React components should know **how to display a grammar explanation**, but not contain the explanation of Finnish grammar themselves.

The content architecture should therefore be **referential rather than duplicative**. A lesson says “introduce `vocab.olla`”; it does not copy the entire `olla` vocabulary object into the lesson.

**Language scoping:** Every course belongs to a target-language registry. The V1 Finnish manifest declares `learningLanguage: "fi"`. Resolve local IDs globally as the composite `(learningLanguage, localItemId)`, for example `(fi, vocab.olla)`; a future `sv` registry uses its own words, grammar and lesson contents. This preserves existing stable Finnish local IDs without requiring all Finnish words to be prefixed or Swedish to copy Finnish morphological rules.

**Optional vocabulary practice:** Flashcards, Word Match and user-owned My Words reuse the **same language-scoped vocabulary registry** but have voluntary practice sessions separate from scored scheduled Review. See [Vocabulary Practice contract](../handoff/vocabulary-practice/vocabulary-practice-data-contract.md). Never create a second review scheduler.

The blueprint's five pedagogical rules remain architecture constraints: one dominant ability per lesson, realistic production vocabulary, progressive grammar disclosure, first-class chunks, and recognition-first spoken Finnish.

### Stable-ID decision

Do **not** encode mutable order into permanent IDs.

Prefer:

- `course.fi` (Finnish target course, not the app brand)
- `stage.a1-foundations`
- `unit.hello`
- `lesson.hello.greetings`
- `lesson.hello.i-am-you-are`
- `vocab.olla`
- `phrase.olen-slot`
- `grammar.olla-present-1sg-2sg`

Then keep `order: 1`, `order: 2`, etc. separately. These local item IDs are only unique **within a target-language course**; persisted identity includes the language code. Adding Swedish later must not overwrite Finnish progress or require renaming the Finnish curriculum.

This means inserting a new Lesson 1.3 later does not force us to rename half the content and migrate learner saves.

---

## 2. Content entity model

The content graph should contain these primary entities:

| Entity | Purpose |
|---|---|
| `Course` | Overall A1→A2 product |
| `Stage` | A1 Foundations, A1 Everyday Finnish, etc. |
| `Unit` | Hello, People & things, etc. |
| `Lesson` | Small teachable capability |
| `LessonStep` | One part of a lesson |
| `VocabularyItem` | Canonical lemma-backed lexical item |
| `PhraseItem` | Reusable phrase/chunk/pattern |
| `GrammarConcept` | Reusable grammar explanation/concept |
| `SpokenFormNote` | Recognition-only spoken/formal mapping |
| `Capability` | Human-facing ability shown in Progress |
| `Exercise` | Scored learning/review interaction |

I also recommend a lightweight embedded content type called **Example**. It does not need its own global library, but every important example receives an ID and editorial metadata so a Finnish teacher can approve it independently.

### Shared content reference

Any lesson should reference learning targets through a common conceptual structure:

- target ID
- target type: vocabulary / phrase / grammar
- role: production / recognition / support
- whether this occurrence counts as a learning encounter

That distinction matters enormously.

Seeing `ehkä` in an example as **support vocabulary** should not automatically tell the system that the learner has formally learned `ehkä`.

---

## 3. Course hierarchy

### Course

Recommended fields:

| Field | Purpose |
|---|---|
| `id` | Stable ID (e.g. `course.fi`) |
| `learningLanguage` | Target language (`fi` now, `sv` only when reviewed content ships) |
| `title` | Display name |
| `description` | Product-level description |
| `stageIds` | Ordered stage references |
| `contentVersion` | Curriculum release version |

The course object should be tiny.

### Stage

Recommended fields:

| Field | Purpose |
|---|---|
| `id` | Stable ID |
| `order` | Position in course |
| `title` | e.g. A1 Foundations |
| `cefr` | e.g. `A1` |
| `description` | Human-facing scope |
| `status` | `available` / `planned` |
| `unitIds` | Ordered unit references |
| `capabilityIds` | Stage-level abilities |
| `completionPolicy` | How stage completion is derived |

The current Figma journey already anticipates four stages:

- A1 Foundations
- A1 Everyday Finnish
- A2 Building confidence
- A2 Everyday independence

Only the first needs authored curriculum now. The others can exist as `planned` metadata so the existing Course/Progress UI can render them without fake lesson data.

### Unit

Recommended fields:

| Field | Purpose |
|---|---|
| `id` | Stable identifier |
| `stageId` | Parent |
| `order` | Display order |
| `title` | `Hello` |
| `capability` | Unit-level learner-facing statement |
| `lessonIds` | Ordered lessons |
| `productionVocabularyIds` | Unit's new production targets |
| `recognitionVocabularyIds` | New recognition targets |
| `supportVocabularyIds` | Recurring support targets |
| `phraseIds` | New phrases/chunks |
| `grammarIntroducedIds` | New concepts |
| `grammarReinforcedIds` | Reused concepts |
| `dependencyUnitIds` | Cumulative relationship |
| `capabilityIds` | Progress abilities affected |
| `completionCheckpointId` | Unit check |
| `estimatedNewItems` | Planning metadata |

These declarations primarily support validation and indexing. Lessons remain responsible for exactly **when** something is introduced.

### Lesson

Recommended fields:

| Field | Purpose |
|---|---|
| `id` | Stable ID |
| `unitId` | Parent |
| `order` | Position |
| `title` | Learner-facing title |
| `capability` | One dominant ability |
| `prerequisiteLessonIds` | Explicit prerequisites |
| `stepIds` / `steps` | Ordered lesson content |
| `introduces` | Learning target refs introduced here |
| `reviews` | Prior targets intentionally resurfaced |
| `approximateLoad` | Editorial planning |
| `completionPolicy` | Usually complete all required steps |
| `capabilityIds` | Abilities this lesson supports |

### Completion policy

V1 should **not block learners until every answer is perfect**.

A lesson completes when:

- all required instructional steps are visited;
- required exercises are attempted;
- its final checkpoint is attempted.

Incorrect/Almost answers simply feed the review model.

That fits the calm product philosophy much better than forcing repeated perfect scores.

---

## 4. Vocabulary model

The curated Finnish CSV remains the `fi` lexical source of truth. Future Swedish requires its own separately authored and reviewed vocabulary source.

It already supplies canonical lemma, English gloss, POS, tier, topic, spoken forms, examples, ranking and notes.

### Recommended `VocabularyItem`

| Field | Source |
|---|---|
| `id` | Generated from lemma, e.g. `vocab.olla` |
| `lemma` | CSV |
| `english` | CSV |
| `partOfSpeech` | CSV |
| `rank` | CSV |
| `tier` | CSV |
| `topic` | CSV |
| `datasetSpokenForms` | CSV |
| `datasetNotes` | CSV |
| `datasetExampleFi` | CSV, reference only |
| `datasetExampleEn` | CSV, reference only |
| `sourceRef` | Curated-dataset source registry |
| `teachingForms` | Curriculum-authored overlay |
| `spokenNoteIds` | Approved recognition notes |
| `editorial` | Review state for teaching additions |

### Important decision: learning role does not belong on the vocabulary item

`ystävä` can be recognition vocabulary in Unit 2 and production vocabulary in Unit 7.

Therefore do **not** put:

> `role: recognition`

on `vocab.ystävä`.

The role belongs to the **curriculum reference** from the relevant unit/lesson, scoped to its learning language.

### Lemma vs learner-visible form

This also resolves an important discrepancy between the CSV and the Figma vocabulary library.

The CSV contains:

`haluta` = canonical lemma.

The Figma design surfaces:

`haluan` = useful learner form.

Both are correct.

The canonical object remains:

`vocab.haluta`

and its teaching overlay can define forms such as:

- `haluan` — 1st person singular present
- `haluat` — later
- spoken `haluun` — recognition note

This prevents us from creating fake vocabulary entries for every inflected form.

The dataset deliberately uses standard dictionary forms as lemmas and stores spoken forms separately, which supports exactly this model.

### CSV examples

Keep the CSV example sentences available as **editorial reference data**, but do not automatically show them in lessons or tests.

They are AI-curated and the supplied README explicitly recommends Finnish-teacher/native-speaker review before production use.

---

## 5. Phrase/chunk model

A `PhraseItem` is something the learner should be able to recognise/retrieve **as a meaningful whole**, not merely an arbitrary example sentence.

Recommended fields:

| Field | Purpose |
|---|---|
| `id` | Stable phrase ID |
| `kind` | `fixed` or `pattern` |
| `fi` / `fiPattern` | Finnish |
| `en` / `enPattern` | Meaning |
| `register` | neutral / polite / informal |
| `productionTarget` | Whether learner should produce it |
| `linkedVocabularyIds` | Underlying lemmas |
| `linkedGrammarIds` | Grammar it illustrates |
| `spokenNoteIds` | Recognition variants |
| `slots` | For patterns such as `Haluan …` |
| `notes` | Pedagogical notes |
| `editorial` | Review metadata |

### Fixed vs pattern

Examples:

**Fixed**
- `En tiedä.`
- `En ymmärrä.`
- `Missä se on?`

**Pattern**
- `Haluan {thingOrAction}.`
- `Voinko {action}?`
- `Minulla on {thing}.`
- `Haluaisin {thing}.`

### When should something become a PhraseItem?

Make it an entity if at least one is true:

- it is explicitly taught;
- it appears in Review;
- it appears in the Vocabulary/phrase library;
- it has its own familiarity state;
- it recurs across multiple lessons.

Otherwise it is simply an instructional example.

### Avoid duplicated knowledge

`Hei`, `Moi`, `Kiitos`, and `Anteeksi` are both vocabulary items and complete utterances.

Do **not** create:

- `vocab.hei`
- *and* `phrase.hei`

with independent learning states.

Use `vocab.hei` as the learning target and allow the lesson to display it as an utterance/chunk.

That preserves the Unit 1 phrase decision without double-counting knowledge.

---

## 6. Grammar model

Grammar should be reusable across Lessons, Review and Grammar Library.

Recommended `GrammarConcept` fields:

| Field | Purpose |
|---|---|
| `id` | Stable ID |
| `title` | Internal/editorial title |
| `learnerFriendlyTitle` | UI title |
| `technicalTerm` | Optional linguistic label |
| `shortExplanation` | Library/list summary |
| `fullExplanation` | Detail-page explanation |
| `exampleIds` | Reviewed examples |
| `prerequisiteGrammarIds` | Dependency graph |
| `relatedGrammarIds` | Library navigation |
| `linkedVocabularyIds` | Useful examples |
| `targetMode` | awareness / recognition / production |
| `reviewEligible` | Whether it enters review |
| `teacherReviewRequired` | Release gate |
| `editorial` | Status |

Examples:

- `grammar.personal-pronouns-mina-sina`
- `grammar.olla-present-1sg-2sg`
- `grammar.subject-pronoun-omission-awareness`
- `grammar.vowel-length-awareness`
- `grammar.vowel-harmony-awareness`
- `grammar.yes-no-ko-ko`
- `grammar.negative-en`
- `grammar.inessive-ssa-ssa`
- `grammar.partitive-food-liquid`
- `grammar.minulla-on`
- `grammar.genitive-n`
- `grammar.local-from-sta-sta-recognition`

### Progressive disclosure

The grammar entity can exist before the learner reaches it.

Its curriculum status determines whether the learner has:

- never seen it,
- encountered it,
- practised it,
- become comfortable with it.

That allows the Grammar Library to eventually contain a richer catalogue while still showing “later in the course” appropriately.

The blueprint explicitly withholds the full case system, full verb paradigms, object system and similar material from A1 Foundations, so those concepts should not accidentally become prerequisites merely because related forms appear in examples.

---

## 7. Spoken Finnish model

Spoken Finnish should remain a **note attached to standard content**, never a parallel vocabulary course.

Recommended `SpokenFormNote`:

| Field | Purpose |
|---|---|
| `id` | Stable ID |
| `standard` | `minä` |
| `spoken` | `mä` |
| `scope` | word / form / phrase |
| `vocabularyId` | Optional |
| `phraseId` | Optional |
| `register` | e.g. everyday spoken |
| `regionNote` | Optional |
| `recognitionOnly` | `true` throughout Foundations |
| `explanation` | “In everyday speech you may hear…” |
| `teacherReviewRequired` | Usually true |
| `editorial` | Review status |

Examples:

- `spoken.mina-ma`
- `spoken.sina-sa`
- `spoken.olen-oon`
- `spoken.haluan-haluun`
- `spoken.taalla-taal`

No separate familiarity score is required for the spoken note itself in V1.

The learner's familiarity remains attached to the underlying vocabulary/phrase. A note can record that it was displayed if needed, but should not become another item in Review.

---

## 8. Lesson-step model

Rather than fifteen separate step types, I recommend **eight**.

| Step type | Purpose | Updates knowledge? | Review-compatible? |
|---|---|---:|---:|
| `explanation` | Plain-language explanation/bridge | No | No |
| `vocabulary_intro` | Introduces lexical targets | Yes: encounter | No |
| `phrase_intro` | Introduces chunk/pattern | Yes: encounter | No |
| `grammar_explanation` | Introduces/reinforces grammar | Yes: encounter | No |
| `spoken_note` | Recognition note | No separate mastery | No |
| `example_set` | Contextual examples | Usually no | No |
| `exercise` | Retrieval/application | Yes when scored | Yes |
| `checkpoint` | Cumulative or capability check | Yes | Yes |

Exercise variation belongs **inside `exercise`**, not in the LessonStep type system.

This means adding a new exercise interaction later does not require creating a new top-level lesson architecture.

### Shared LessonStep fields

Every step needs:

- stable `id`
- `type`
- `required`
- learning-item references
- content payload appropriate to the type
- editorial metadata

Optional presentation metadata should be **semantic only**, for example:

- `emphasis: normal | important`
- `showTechnicalTerm: true/false`

Do not store:

- pixel widths
- colors
- mobile coordinates
- card backgrounds
- button styles

Those belong to the renderer/design system.

---

## 9. Exercise model

### Exercise is content; visual state is not

An exercise describes the learning task.

The states shown in Figma:

**Default → Selected → Correct / Almost**

are renderer states around the same Exercise object.

### Core exercise fields

| Field | Purpose |
|---|---|
| `id` | Stable identifier |
| `kind` | Interaction model |
| `intent` | recognition / recall / grammar / phrase / cumulative |
| `prompt` | Instruction |
| `stimulus` | Finnish/English/source sentence |
| `options` | If applicable |
| `answerSpec` | Correct/accepted answers |
| `feedback` | Correct feedback |
| `almostFeedback` | Near/wrong answer guidance |
| `explanation` | Optional teaching note |
| `linkedTargetIds` | Contextual concepts |
| `scoredTargetIds` | Items whose knowledge changes |
| `difficulty` | simple editorial tag, not user score |
| `reviewEligible` | Can be indexed for Review |
| `editorial` | Review status |

### V1 exercise kinds

Use only:

1. `multiple_choice`
2. `text_input`
3. `token_build`
4. `transform`
5. `matching`

This covers the requested exercise catalogue.

Examples:

- Finnish → English = `multiple_choice`
- correct ending = `multiple_choice`
- one missing word = `text_input`
- controlled translation = `text_input`
- sentence construction = `token_build`
- affirmative → negative = `transform`
- meaning pairs = `matching`

### Correct vs Almost

Do not implement fuzzy AI evaluation in V1.

Use deterministic authored rules:

- correct option/answer → `correct`
- explicitly marked plausible near-answer → `almost`
- “Not sure” → `not_sure`

For text input, accepted variants can be explicitly enumerated after normalisation such as trimming whitespace and optionally ignoring terminal punctuation/capitalisation.

### `linkedTargets` vs `scoredTargets`

This distinction prevents accidental progress inflation.

An exercise can contain:

- `minä`
- `olla`
- the phrase `Olen …`

but perhaps it is actually testing only `grammar.olla-present-1sg-2sg`.

Only `scoredTargetIds` receive recall outcomes.

### Where exercises live

**Author exercises with their lesson**, because most are pedagogically contextual.

Each still receives a globally unique ID and gets indexed during validation/build.

That means Review can reuse an exercise marked `reviewEligible` without maintaining a second duplicate copy.

Later we can add review-only exercises if needed.

---

## 10. Unit 1 structured fixture

The blueprint fixes Unit 1 at 16 production lemmas, eight recognition items, two support words, five lessons and the exact lesson sequence shown below.

The following is **illustrative non-executable structure**, not production code.

### Unit

**ID:** `unit.hello` (within `learningLanguage: fi`)  
**Stage:** `stage.a1-foundations`  
**Order:** 1  
**Title:** Hello  
**Capability:** “Greet someone, say who you are, respond politely and recognise basic numbers.”

#### Production vocabulary

- `vocab.olla`
- `vocab.ja`
- `vocab.mina`
- `vocab.sina`
- `vocab.yksi`
- `vocab.kaksi`
- `vocab.kolme`
- `vocab.nelja`
- `vocab.viisi`
- `vocab.kylla`
- `vocab.joo`
- `vocab.nimi`
- `vocab.anteeksi`
- `vocab.kiitos`
- `vocab.hei`
- `vocab.moi`

#### Recognition vocabulary

- `vocab.kuusi`
- `vocab.seitseman`
- `vocab.kahdeksan`
- `vocab.yhdeksan`
- `vocab.kymmenen`
- `vocab.hyva`
- `vocab.tervetuloa`
- `vocab.nakemiin`

#### Support

- `vocab.nyt`
- `vocab.ehka`

#### Phrase entities

`phrase.olen-slot`

- kind: pattern
- Finnish: `Olen {identity}.`
- linked vocabulary: `vocab.olla`
- linked grammar: `grammar.olla-present-1sg-2sg`
- production target: yes

`phrase.enta-sina`

- Finnish: `Entä sinä?`
- English: “And you?”
- production target: yes
- linked vocabulary: `vocab.sina`

Single-word `Hei`, `Moi`, `Kiitos`, `Anteeksi` use their vocabulary entities as chunks rather than duplicate PhraseItems.

#### Grammar concepts

- `grammar.personal-pronouns-mina-sina`
- `grammar.olla-present-1sg-2sg`
- `grammar.subject-omission-awareness`
- `grammar.vowel-length-awareness`
- `grammar.vowel-harmony-awareness`

#### Spoken notes

- `spoken.mina-ma`
- `spoken.sina-sa`
- `spoken.olen-oon`
- `spoken.olet-oot`
- optional `spoken.yksi-yks`
- optional `spoken.kaksi-kaks`

### Lesson 1.1 — Hello

**ID:** `lesson.hello.greetings`

Capability: greet and leave politely.

Introduces:

- `vocab.hei`
- `vocab.moi`
- `vocab.kiitos`
- `vocab.anteeksi`

Representative steps:

1. explanation — greetings are short and useful immediately
2. vocabulary_intro — `hei`, `moi`
3. exercise — recognise `hei`
4. vocabulary_intro — `kiitos`, `anteeksi`
5. exercise — choose an appropriate response
6. exercise — controlled Finnish recall
7. checkpoint — short greeting review

Scored targets are limited to those four vocabulary IDs.

### Lesson 1.2 — I am, you are

**ID:** `lesson.hello.i-am-you-are`

Introduces:

- `vocab.olla`
- `vocab.mina`
- `vocab.sina`
- `phrase.olen-slot`
- `phrase.enta-sina`
- `grammar.personal-pronouns-mina-sina`
- `grammar.olla-present-1sg-2sg`
- recognition-only `grammar.subject-omission-awareness`

Representative flow:

1. grammar_explanation — I / you
2. vocabulary_intro — `minä`, `sinä`
3. grammar_explanation — `olen`, `olet`
4. example_set — `Minä olen …` / `Sinä olet …`
5. phrase_intro — `Olen …`
6. phrase_intro — `Entä sinä?`
7. spoken_note — `minä → mä`, `sinä → sä`, `olen → oon`, `olet → oot`
8. exercise — choose `olen` vs `olet`
9. exercise — build `Minä olen …`
10. checkpoint — identify I vs you

### Lesson 1.3 — Your name

**ID:** `lesson.hello.your-name`

Introduces:

- `vocab.nimi`
- `vocab.ja`

Reviews:

- `vocab.mina`
- `vocab.sina`
- `vocab.olla`

#### Small curriculum gap to resolve

The blueprint deliberately says the exact name-question construction requires teacher review before production.

But the lesson cannot actually run without *some* name-question content.

Smallest adjustment:

Create:

`phrase.what-is-your-name`

as:

- recognition target only initially;
- editorial state `needs_review`;
- Finnish candidate to be approved by a Finnish teacher;
- **not** added to the Unit 1 production-vocabulary load.

A likely candidate from the supplied dataset is `Mikä sinun nimesi on?`, but because the dataset examples are AI-curated, it should not become approved production curriculum merely because it appears in the CSV.

### Lesson 1.4 — Yes, and a few numbers

**ID:** `lesson.hello.yes-and-numbers`

Introduces production:

- `vocab.kylla`
- `vocab.joo`
- `vocab.yksi`
- `vocab.kaksi`
- `vocab.kolme`
- `vocab.nelja`
- `vocab.viisi`

Recognition:

- `vocab.kuusi`
- `vocab.seitseman`
- `vocab.kahdeksan`
- `vocab.yhdeksan`
- `vocab.kymmenen`

Representative exercises:

- number → word recognition
- Finnish word → digit
- yes response selection
- controlled production 1–5
- recognition 6–10

### Lesson 1.5 — First review

**ID:** `lesson.hello.first-review`

New production vocabulary: none.

Introduces awareness:

- `grammar.vowel-length-awareness`
- `grammar.vowel-harmony-awareness`

Reviews:

- greetings
- `minä / sinä`
- `olen / olet`
- name vocabulary
- yes
- numbers

Checkpoint:

- greeting selection
- `Minä ___ Aino`
- build `Olen …`
- recognise `sinä olet`
- retrieve 1–5

This is an ideal example of a `checkpoint` containing several Exercises rather than a special one-off React screen.

---

## 11. Learner progress model

**Language scope:** Persist the learner's course cursor, completed units/lessons, vocabulary/phrase/grammar knowledge, scheduled Review queue, capabilities, personal words and optional practice sessions under `languages.fi` now and `languages.sv` later. Onboarding and general app preferences can be global. Swedish learning state must never replace Finnish learning state or appear in a mixed-language review.

Persist **learner state only**, never the curriculum content itself.

Recommended top-level conceptual model:

### Identity/version

- `schemaVersion`
- `contentVersionSeen`

### Onboarding

- `completed`
- `completedAt`

### Course cursor

- `stageId`
- `unitId`
- `lessonId`
- `stepId`

This supports Continue learning.

### Lesson progress map

Per lesson:

- status: `not_started | in_progress | completed`
- firstStartedAt
- lastOpenedAt
- resumeStepId
- completedAt

### Knowledge maps

Separate:

- vocabulary knowledge
- phrase knowledge
- grammar knowledge

### Capability evidence

Evidence that a learner demonstrated practical abilities.

### Review state

- item schedules
- bounded review history
- recent session summaries

### Settings

Prefer separate persisted preferences storage, discussed below.

### Derived, not persisted

Do **not** separately save values such as:

- “3/8 units complete”
- stage percentage
- “94 words learned”
- completed-unit arrays if they can be derived cleanly
- familiar-item counts

These can become inconsistent.

Derive them from lesson and knowledge state whenever rendering Home, Course and Progress.

---

## 12. Knowledge-state model

### Vocabulary and phrase states

Use:

`unseen → learning → becoming_familiar → familiar`

### Grammar states

Use:

`unseen → introduced → practising → comfortable`

### Shared per-item record

Keep these fields:

- `firstSeenAt`
- `lastSeenAt`
- `lastReviewedAt`
- `encounterCount`
- `recallAttempts`
- `correctCount`
- `almostCount`
- `notSureCount`
- `consecutiveSuccessfulRecalls`
- `scheduleLevel`
- `state`
- `nextReviewAt`
- `lastResult`

These are enough to drive Review and the “Becoming familiar / Still practising” UI without creating analytics infrastructure.

### What counts as an encounter?

Count:

- explicit vocabulary introduction;
- explicit phrase introduction;
- grammar explanation;
- intentionally tagged guided reuse.

Do **not** count every incidental appearance of a support word.

### What counts as recall?

Only scored retrieval:

- choosing a meaning;
- producing a word;
- applying grammar;
- reconstructing a phrase.

Simply reading an example is not recall.

---

## 13. Review engine V1

The deterministic review rules below run **independently per learning language**. V1 contains only `fi` review items; later Swedish due items have their own `sv` queue, not a mixed Finnish/Swedish session.

Use a deterministic interval ladder rather than a full SRS algorithm.

### Initial exposure

When a production/recognition target is formally introduced:

- state → `learning`
- `firstSeenAt` set
- first review scheduled approximately **8 hours later**

Lesson-local exercises can and should resurface it earlier; `nextReviewAt` controls the separate Review section.

### Correct

Recommended interval ladder:

| Successful level | Next review |
|---|---:|
| 0 → 1 | 1 day |
| 1 → 2 | 3 days |
| 2 → 3 | 7 days |
| 3 → 4 | 14 days |
| 4+ | 30 days |

State rules:

- first successes: `learning`
- after two successful spaced recalls: `becoming_familiar`
- after four successful spaced recalls with no recent weak result: `familiar`

### Almost

- reset consecutive-success counter
- keep or reduce schedule level by one
- next review approximately **8 hours**
- normally do not immediately demote `becoming_familiar`
- two weak outcomes in recent attempts can demote `familiar → becoming_familiar`

### Not sure

- reset consecutive-success counter
- next review approximately **4 hours**
- `familiar → becoming_familiar`
- `becoming_familiar → learning` only after repeated uncertainty, not one bad attempt

### Grammar

Grammar uses the same scheduling mechanics but different labels:

- introduced
- practising
- comfortable

A grammar concept advances only when the learner successfully completes exercises where it is a **scored target**.

Merely seeing `-ssa` in another sentence does not make the concept “comfortable”.

### Phrase items

Treat them like vocabulary for scheduling.

That gives phrases genuine first-class status rather than making them decorative text.

---

## 14. Review session assembly

Default review session: **up to 10 items**.

If only 4 legitimate items are due, give 4. Do not pad the session with fake work.

### Candidate pools

Priority order:

1. overdue weak items
2. recently failed / Not sure
3. normally due learning items
4. becoming-familiar items
5. occasional familiar resurfacing

### Type balance

When sufficient items are available:

- around half vocabulary
- some phrases
- some grammar

Do not enforce percentages rigidly.

A better rule is:

- no more than ~60% of the session from one item type when other due types exist;
- include at least one due phrase and one due grammar concept when available.

### Avoid repetition

In V1:

**one learning target appears at most once per review session.**

This keeps sessions varied and means the scheduling logic stays understandable.

### Review prompt selection

For each candidate:

1. find exercises indexed as `reviewEligible`;
2. exclude recently used exercise if alternatives exist;
3. prefer an exercise matching the item's target level:
   - learning → recognition/guided recall
   - becoming familiar → stronger recall
   - familiar → contextual retrieval

### Nothing ready

If no candidate has `nextReviewAt <= now`, return an empty Review plan.

That directly powers the existing **Nothing ready** state.

### Review session object

The active session itself can remain in memory:

- generated session ID
- ordered candidate exercise IDs
- current index
- responses

Each response is persisted immediately into item knowledge.

If the user closes the review halfway through, there is no need to restore “question 4 of 10” tomorrow.

---

## 15. Capability/progress model

Capabilities should be explicit content entities, not generated from percentages.

Example:

`capability.introduce-yourself`

Fields:

- `id`
- `label`
- `stageId`
- `unitId`
- `supportingLessonIds`
- `requiredVocabulary`
- `requiredPhraseIds`
- `requiredGrammarIds`
- `checkpointExerciseIds`
- `visibilityCondition`
- `comfortCondition`

### Capability states

Use:

- `hidden`
- `current`
- `becoming_comfortable`
- `comfortable`

### Suggested derivation

**Hidden**

None of its supporting lessons has started.

**Current**

The capability has been introduced but its capability checkpoint has not yet been successfully demonstrated.

**Becoming comfortable**

- required lesson(s) completed;
- capability checkpoint passed at least once;
- but at least one key learning item is still `learning` / grammar only `introduced`.

**Comfortable**

All explicit criteria are satisfied, for example:

- capability checkpoint passed;
- required vocabulary minimum `becoming_familiar`;
- required phrase minimum `becoming_familiar`;
- required grammar minimum `practising`.

No 73%, 84%, or hidden weighted mastery formula is needed.

### Unit completion is different from comfort

A learner can **complete Unit 1** while “Introduce yourself” is still becoming comfortable.

That is desirable.

Progress and learning are not the same thing.

The Figma design's “You can now”, “Becoming familiar”, and “Still practising” sections map naturally onto these derived states.

---

## 16. Local persistence

For V1, keep **two brand-neutral versioned persisted records**, behind a testable Expo-compatible storage adapter; not one giant blob. These names are recommendations, not existing deployed keys.

### `language-learning:progress:v1`

Contains:

- progress schema and content version seen
- global onboarding state and `selectedLearningLanguage: "fi"` for V1
- `languages.fi`: Finnish course cursor, lesson progress, knowledge maps, capability evidence and bounded scheduled-review history
- future `languages.sv`: separate Swedish progress only when a reviewed Swedish curriculum actually ships
- language-specific optional Flashcards/Word Match resume checkpoints and personal My Words records, separate from scheduled-review knowledge

### `language-learning:preferences:v1`

Contains:

- preferences schema version
- global `dailyReminderEnabled`
- optional `spokenNotesEnabledByLanguage.fi` (shown as **Spoken Finnish notes** in the existing V1 UI)

This separation makes Reset Progress safer without encoding the obsolete Suomi brand into new save keys. If a real deployed app already uses `suomi:progress` or `suomi:preferences`, migrate it non-destructively; otherwise do not create legacy keys. The app has **no Swedish course selector in V1**.

### Reset learning progress

Delete/reinitialize:

- onboarding
- course cursor
- lessons
- knowledge
- capability evidence
- review history

Preserve:

- Daily reminder preference
- Spoken Finnish notes preference

This matches the existing confirmation UI, which explicitly tells the learner that settings remain unchanged. **Personal My Words are user-authored content:** do not silently erase them when resetting official learning progress until the product explicitly confirms this policy; personal entry deletion remains its own action.

### Curriculum data

Never write the 2,000-word vocabulary dataset or lessons into AsyncStorage; bundle the generated, validated content JSON with the Expo app.

They ship with the application.

### Corrupted save

On startup:

1. parse
2. migrate
3. validate
4. hydrate

If validation fails:

- preserve valid preferences;
- fall back to a clean progress state;
- optionally retain one raw backup value for diagnostics;
- never crash the app because one learner-state field became malformed.

---

## 17. Versioning/migrations

Use two separate versions.

### `contentVersion`

Semantic version or date-based curriculum release, for example:

`1.0.0`

Tracks shipped curriculum.

### `schemaVersion`

Simple integer:

`1`, `2`, `3`…

Tracks persisted-data shape.

### Stable-ID rules

Display-title changes **do not change IDs**.

If:

> “Yes, and a few numbers”

becomes:

> “Yes & numbers”

the lesson ID remains the same.

### New lesson inserted

No migration needed.

Add new content with a new `order`.

Existing lesson IDs remain untouched.

### Vocabulary metadata correction

No learner migration needed because progress points to `vocab.olla`, not a copied definition.

### Removed item

Maintain a small migration map:

`old ID → replacement ID`

or:

`old ID → removed`

### Renamed conceptual entity

Prefer keeping the old stable ID even if the new display name differs.

Only migrate IDs when the semantic identity genuinely changes.

---

## 18. Settings state

Persist only:

| Setting | Persist? |
|---|---:|
| Daily reminder toggle | Yes |
| Spoken Finnish notes toggle | Yes, via `spokenNotesEnabledByLanguage.fi` |
| “Saved on this device” | No — informational |
| Reset learning progress | No — action |
| About/version | No — application metadata |

### Reminder

V1 only needs the preference:

`dailyReminderEnabled`

Do not put reminder time, study quota, timezone schedule or notification history into the model.

The actual notification-delivery mechanism is a separate implementation concern.

### Spoken notes

The V1 control is labelled **Spoken Finnish notes**, but the stored preference should remain language-scoped (e.g. `spokenNotesEnabledByLanguage.fi`). A future Swedish course may show different recognition notes and should not reuse the literal Finnish flag.

If false:

- content still exists;
- spoken-note steps are simply omitted/hidden by the renderer;
- completion logic must not require them.

---

## 19. UI state vs persisted state

Do **not** persist for ordinary lesson/review UI:

- currently selected answer
- whether Correct/Almost feedback is open
- active Grammar/Vocabulary tab
- vocabulary filter
- Library search text
- reset dialog visibility
- scroll position
- open accordion
- current scheduled-Review question number (a different decision from resumable optional practice)
- hover/focus state
- skeleton/error visibility

Persist:

- completed learning work
- current resumable lesson
- scored exercise outcomes that affect learning
- review schedule
- preferences
- the **optional practice resume checkpoint** for an interrupted Flashcards/Word Match session, stored separately from ordinary UI state

### Selected answer example

The same exercise can render:

- Default
- Selected
- Correct
- Almost

without changing the curriculum object at all.

Only after evaluation is the `correct/almost/not_sure` result committed to learner state.

---

## 20. Recommended file/module organisation

For V1 I recommend a **hybrid architecture**:

**JSON for authored content + TypeScript for schemas, validation and learning logic.**

The original vocabulary CSV remains an editorial/source asset and is transformed later into normalized generated JSON.

Conceptually, for the **Expo V1** (this is an architecture example, not mandatory scaffolding):

```text
src/
  content/
    languages/
      fi/
        course.json
        stages/a1-foundations.json
        units/hello/             # Unit 1 and its five lessons
        vocabulary.generated.json # Built from docs/curriculum/vocabulary/finnish_2000_curated.csv
        teaching-overrides.json   # Reviewed teaching forms and examples
        phrases.json
        grammar.json
        spoken-notes.json
        capabilities.json
      # sv/ is created only after separately authored Swedish content is ready
  domain/
    content/                     # Shared Zod schemas and reference validation
    learning/                    # Language-scoped learner state
    review/                      # Shared algorithm, separate language-specific queues
    practice/                    # Flashcards, Word Match, My Words
    persistence/                 # Expo storage adapter, migrations, language keys
  ui/                            # React Native / Expo Router / Nordic Editorial
```

### Why JSON for authored content?

- separates content from application logic;
- future teacher/editor review is easier;
- avoids accidental executable logic inside curriculum files;
- can later be exported/imported by authoring tools;
- easy to diff in Git.

### Why TypeScript around it?

- strong schema validation;
- typed renderer inputs;
- safe item references;
- deterministic review functions;
- migration tests.

### Why generated vocabulary JSON?

The attached dataset already contains 2,000 validated unique lemmas and exactly 500 items per tier.

We should not manually transcribe 2,000 CSV rows into TypeScript.

---

## 21. Validation rules

### Content validation

The future content validator should fail on:

1. duplicate IDs
2. malformed ID conventions
3. unknown unit/lesson/item references
4. duplicate lesson orders inside one unit
5. duplicate unit orders inside a stage
6. prerequisite cycles
7. lesson referencing a prerequisite that occurs later without explicit exception
8. production vocabulary introduced as NEW twice
9. recognition→production promotion treated incorrectly as duplicate introduction
10. phrase linked to unknown vocabulary/grammar
11. grammar prerequisite cycle
12. spoken note with no standard form
13. spoken note marked production-target during A1 Foundations
14. `exercise` with no scored target when scoring is enabled
15. multiple choice with no correct answer
16. answer ID not present in options
17. `almost` answer also marked correct
18. text exercise with zero accepted answers
19. recall exercise targeting an item not yet introduced
20. review-eligible exercise whose target is not reviewable
21. capability requiring content that appears after the capability itself
22. required lesson step hidden behind an optional setting such as spoken notes
23. release content with assessment/explanation still `needs_review` where approval is mandatory

### Learner-state validation

Check:

- IDs exist or have migration mappings;
- counters are nonnegative integers;
- `correct + almost + notSure <= recallAttempts`;
- timestamps parse correctly;
- `nextReviewAt` is valid;
- vocabulary does not contain a grammar-only state;
- grammar does not contain a vocabulary familiarity state;
- current lesson belongs to current unit;
- resume step belongs to lesson;
- completed lesson exists in current content version;
- schedule level remains in supported bounds;
- schema version is supported.

### Curriculum assertions

For critical curriculum decisions, add explicit automated assertions.

Examples:

- Unit 1 has 16 new production vocabulary targets.
- Unit 1 has 8 recognition targets.
- A1 Foundations has 142 unique production lemmas.
- `vasen` remains the intentional >1000-rank production exception unless curriculum explicitly changes.

---

## 22. Source/editorial metadata

Use one shared metadata shape across teacher-sensitive content.

Recommended fields:

- `sourceType`
- `sourceReference`
- `editorialStatus`
- `reviewedBy`
- `reviewedAt`
- `editorialNotes`

### `sourceType`

Recommended values:

- `curated_dataset`
- `original`
- `external_reference`

### Do not mark textbook-inspired sequencing as copied content

At stage/unit level, we can maintain an editorial note that the broad pedagogical sequence was informed by external teaching references.

But individual original explanations/exercises should remain:

`sourceType: original`

We should never encode Suomen Mestari text or pretend that our original examples came from it.

### Source registry

Rather than repeating licensing detail on 2,000 vocabulary objects, use:

`source.vocabulary-curated-2000`

with the dataset's provenance/licensing notes, then vocabulary entries merely reference that source.

---

## 23. Native-speaker review workflow

No CMS is needed.

Use Git/content files themselves.

### Status lifecycle

`draft → needs_review → reviewed → approved`

Meaning:

**draft**  
Authoring incomplete.

**needs_review**  
Ready for Finnish-language/editorial review.

**reviewed**  
A human reviewer has checked it but requested or accepted revisions.

**approved**  
Safe for production teaching/assessment.

### Reviewable granularity

Status should be possible on:

- PhraseItem
- GrammarConcept explanation
- individual Example
- Exercise

Vocabulary's raw CSV metadata retains its dataset provenance, while **our teaching overlay** gets editorial review separately.

### Release rule

For production:

- grammar explanations used to teach a new concept → approved
- scored Finnish-language exercises → approved
- key phrases → approved
- spoken Finnish notes → approved
- examples used in assessment → approved

Development builds may allow `needs_review`.

### Review without a CMS

A future script can generate a simple review document containing:

- ID
- Finnish text
- English meaning
- context/unit
- current editorial status
- reviewer note

The teacher edits content or comments through the repository/PR workflow.

---

## 24. Deferred architecture decisions

Do **not** decide these yet:

- backend/database
- accounts/authentication
- cloud synchronization
- cross-device conflict resolution
- teacher/admin CMS
- multi-user profiles
- subscription state
- social features
- AI-generated lessons at runtime
- speech recognition/scoring
- audio recording
- full Anki/SM-2/FSRS scheduling
- exact notification scheduling
- analytics warehouse
- localization architecture for the app UI
- offline downloadable audio packs
- server-side curriculum delivery
- collaborative editorial permissions

Also defer advanced Finnish-specific engines such as automatically generating every case/conjugated form.

For V1, **author the forms we actually teach**. Automatic Finnish morphology generation is unnecessary complexity and could introduce pedagogical errors.

---

## 25. Recommended implementation order

The architecture now supports a clean vertical-slice build.

I would implement in this exact sequence:

1. **Project scaffold and design-system foundation**
   - application shell
   - responsive routing/layout
   - tokens/components mapped from Figma

2. **Content schemas and validation**
   - JSON schemas/types
   - ID/reference validation
   - source/editorial metadata

3. **Vocabulary ingestion**
   - curated CSV → normalized vocabulary registry
   - teaching-form overrides
   - spoken-note references

4. **Encode Unit 1**
   - all five lessons
   - Unit 1 vocabulary allocation
   - phrases
   - grammar concepts
   - representative approved/draft exercises

5. **Lesson renderer**
   - eight LessonStep types
   - Expo mobile presentation from structured content

6. **Exercise renderer/state machine**
   - Default
   - Selected
   - Correct
   - Almost
   - deterministic answer evaluation

7. **Local learner persistence**
   - onboarding
   - resume lesson
   - lesson completion
   - item knowledge
   - settings
   - reset while preserving preferences

8. **First complete vertical slice**
   - Onboarding
   - Home
   - Unit 1
   - lesson/exercises
   - completion
   - updated Home/Course/Progress

9. **Review V1**
   - scheduling
   - queue builder
   - mixed item types
   - correct/almost/not-sure updates
   - Nothing ready
   - completion state

10. **Library**
    - vocabulary + phrases aggregation
    - grammar catalogue
    - detail views
    - familiarity status

11. **Expand curriculum**
    - Unit 2
    - validate architecture
    - only then encode Units 3–8

The most important implementation principle is that **we should not bulk-encode all eight units before Unit 1 actually runs through the real app**. Unit 1 is our architecture test.

If Unit 1 can support explanation → vocabulary → grammar → phrases → spoken recognition → exercises → progress → review using the same structured content cleanly on mobile, then the underlying model is sound.

At that point, the next task really can be:

> **Create the Expo mobile scaffold and implement a real Finnish Unit 1 vertical slice.**

And Codex can receive a much tighter specification because it no longer needs to invent the curriculum model, learning state, or review behavior while it builds.
