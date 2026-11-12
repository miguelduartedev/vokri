# Vokri — Unit 8: Getting Around · Content-to-Expo Implementation Handoff

**12 November 2026 · Finnish `fi` · Documentation only.** This is a content/interaction contract for Codex, **not** application code, a completed Expo implementation or learner-tested material. New authored content starts as `editorialStatus: needs_review`; explicit Vokri product-owner approval is sufficient for internal authoring sign-off. No external Finnish-teacher certification is claimed.

Read with the [Unit 8 complete lesson/exercise specification](./unit-08-getting-around-complete-specification.md), [Unit 8 coverage/linguistic QA and stage audit](./unit-08-coverage-and-qa.md), [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 4 locations](./unit-04-where-are-you-complete-specification.md), [Unit 7 implementation notes](./unit-07-implementation-notes.md), the [A1 Foundations blueprint](../a1_foundations_curriculum_blueprint.md) and the [shared content/learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## 1. Stable hierarchy and content inventory

Use the existing Finnish course:

`course.fi` → `stage.a1-foundations` → `unit.getting-around`.

The exact six lesson IDs, order and formal new production items:

| Lesson | Stable lesson ID | New production lemmas |
|---|---|---|
| 8.1 | `lesson.getting-around.bus-train-tram-metro` | bussi, juna, raitiovaunu, metro, taksi |
| 8.2 | `lesson.getting-around.stops-stations-tickets` | asema, pysäkki, lippu, reitti |
| 8.3 | `lesson.getting-around.around-the-city` | kaupunki, keskusta, tie, matka |
| 8.4 | `lesson.getting-around.here-there-where-to` | tänne, sinne |
| 8.5 | `lesson.getting-around.from-there-by-bus` | **no new production lemmas** — finite source and transport grammar with recognition items |
| 8.6 | `lesson.getting-around.simple-directions` | suoraan, takaisin, oikea, vasen |

**Totals validated from committed source:** **133 ordered LessonSteps, 132 required and one optional spoken note; 101 required exercise records; 12 instructional matching boards with 27 first-attempt pair decisions; 16 independent due Review exercises; 117 globally unique exercise IDs.** Required kind distribution: **51 multiple choice, 33 text input, 12 matching, five token build, zero forced transformation**. 116 minimum first-pass decision units before typing/retries. Six lessons, six numbered lesson blocks; 8.6 uses **two checkpoint containers** (practical Unit 8 and A1 stage capstone) without adding another lesson.

Use `step.getting-around.<lesson-slug>.<step-suffix>`, `ex.getting-around.<lesson-slug>.<exercise-slug>` and `ex.getting-around.review.<slug>`. Order is stored separately, never encoded into an item ID. All records have `learningLanguage: fi`, `sourceType: original`, `editorialStatus: needs_review`, `reviewedBy: null`, `reviewedAt: null`.

## 2. One vocabulary registry — production versus recognition

The canonical CSV in `docs/curriculum/vocabulary/finnish_2000_curated.csv` provides original lemma IDs, rank/meaning metadata and provenance. Normalised app JSON is **generated and validated** from that source; do not manually copy 2,000 rows, alter ranks or mutate the CSV for Unit 8.

- Exactly **19 distinct production lemmas**, all new to the production register in Unit 8. The explicit exception to early-rank targeting is `vocab.vasen` (#1618 Extended).
- Exactly **nine recognition-only lemmas**: `vocab.pyora`, `vocab.matkalippu`, `vocab.laituri`, `vocab.lento`, `vocab.lentokentta`, `vocab.myohassa`, `vocab.ajoissa`, `vocab.paasta`, `vocab.ajaa`. These can be shown/recognised, **not** required as unrestricted productive Finnish spelling or verb forms.
- Unit 4 location/destination items and phrases `Missä se on?`, `Minne menet?` remain **existing** learner targets. A recognition example with an old lemma is **not** a new first encounter and never creates a duplicate VocabularyItem.
- `oikea` means right in a navigation context but can mean correct elsewhere. Match the authored sense for this board; do not silently treat every English “right” gloss as one-to-one.
- `pyörä` can be bicycle or wheel, and `laituri` can be platform or pier; the unit uses contextual recognition glosses. Don't create impossible optional Word Match boards with duplicate/ambiguous meanings.
- Swedish remains a separately authored future learning-language registry. Unit 8 is **Finnish-only**; all progress, review and personal words are scoped by learning language.

## 3. Strict finite location/destination/source form contract

**Do not implement a universal case generator from Unit 8.** Every form in the lesson is explicitly authored and linked to one canonical lemma; it does not establish a general noun declension rule.

| Dictionary lemma | Location `missä` | Destination `minne` | Origin `mistä` | Unit 8 production role |
|---|---|---|---|---|
| kauppa (Unit 4) | kaupassa | kauppaan | **kaupasta** | Origin recognition only |
| talo (Unit 4) | talossa | earlier finite form if taught | **talosta** | Origin recognition only |
| keskusta | **keskustassa** | **keskustaan** | **keskustasta** | `keskustaan` productive inside `Menen keskustaan`; other forms recognised |
| asema | **asemalla** | **asemalle** | **asemalta** | Finite recognition in ordinary transit context |
| pysäkki | **pysäkillä** | **pysäkille** | **pysäkiltä** | Finite recognition for a bus stop |
| koti (Unit 4) | kotona | kotiin | kotoa (not taught here) | Reuse previously taught known forms only |

**QA rule:** Different places conventionally use different local-case series; `kaupasta` and `asemalta` are each natural in their intended context. Do not substitute `asemasta` for ordinary “from the station” transit context, while acknowledging that physically moving out of a building may require different phrasing. A source-recognition task with `kaupasta` must not ask the learner to generate the corresponding suffix for an unknown noun.

Core contrast:

```text
Menen keskustaan.      I'm going downtown.       (destination)
Olen keskustassa.      I'm in downtown.          (location)
Tulen keskustasta.     I'm coming from downtown. (source)
```

Phrase `Menen keskustaan.` is productive. Recognising other location/source forms is separate from productive general case knowledge. `mistä` is introduced as a **fixed recognition-only question word**, not an extra 20th production lemma.

## 4. Transport-method and vehicle-location contract

| Lemma | Authored transport form | Role |
|---|---|---|
| bussi | **bussilla** | Finite controlled **productive** method |
| juna | **junalla** | Finite controlled **productive** method |
| metro | metrolla | Recognition after explicit introduction |
| raitiovaunu | raitiovaunulla | Recognition after explicit introduction |
| taksi | taksilla | Recognition after explicit introduction |
| bussi | **bussissa** | Recognition of physical location/inside a bus |

`Menen bussilla.` = I'm travelling by bus (the method). `Olen bussissa.` = I'm inside/on the bus (location). The words are related through the **same canonical `vocab.bussi`**, not duplicate vocab entries. Avoid turning `-lla/-llä` into a general auto-inflector or assuming it has the same meaning on every noun.

## 5. Movement and directions — restricted phrases

| Category | Authored text | Allowed learner task |
|---|---|---|
| Station question | `Missä asema on?` (alt. `Missä on asema?`) | Independent productive recall when explicitly prompted |
| Bus destination question | `Minne tämä bussi menee?` | Recognise as one fixed question; `menee` not an unconstrained new person ending |
| Downtown destination | `Menen keskustaan.` | Independent sentence production |
| Travel method | `Menen bussilla.` | Independent sentence production |
| Come here | `Tule tänne.` | Fixed recognition-only command |
| Straight | `Mene suoraan.` | One **productive fixed imperative chunk**, not general imperative verbs |
| Turn right/left | `Käänny oikealle.`, `Käänny vasemmalle.` | Fixed recognition-only instruction; no new productive `kääntyä` lemma |
| How to reach downtown | `Miten pääsen keskustaan?` | Fixed recognition-only question; `päästä` remains recognition-only |
| Return | `Tulen takaisin.` | Independent productive recall with earlier `tulen` |
| Position/movement here | `täällä/tänne` | Old location versus new destination, distinct |
| Position/movement there | `siellä/sinne` | Old location versus new destination, distinct |

The dictionary right/left words `oikea` and `vasen` are **not** interchangeable with directional `oikealle` and `vasemmalle` in a turn command. `takaisin → takas` and earlier `menen → meen`, `tulen → tuun` are optional spoken recognition, **not** approved standard spelling responses.

## 6. N1 deterministic evaluation and first-attempt scoring

Keep the established N1 normaliser and earlier Unit 1–7 answer semantics:

1. Unicode NFC, trimming/collapsing irrelevant repeated whitespace, allowed case and terminal punctuation tolerance.
2. Preserve ä/ö, long vowels, consonant length and meaningful case endings. Do not treat `bussilla` and `bussissa` as near-correct synonyms.
3. Text inputs have **explicit accepted strings**, including limited legitimate word order alternatives. Don't accept arbitrary per-word translations/fuzzy outputs or introduce runtime AI grading.
4. MC option correctness uses **stable IDs**, not option position after shuffling; each distractor has authored wrong feedback.
5. Token-build banks use lowercase **lexical** forms and capitalise the assembled first word. All five authored Unit 8 tile tasks are constructible from supplied tokens.
6. Matching boards track each stable pair's **first attempt**, with one knowledge event per actual scored pair. A corrected retry is practice, not a second independent success. Guided location/method comparison boards explicitly have `scoredTargetIds: []`.
7. Empty submissions commit no outcome. Not sure attempts show the model answer, but do not award a correct recall.
8. Avoid a false “Almost!” message for an unrelated wrong selection.

### Existing Wrong-versus-Almost scheduler compatibility

The shared scheduler currently uses `correct`, `almost`, `not_sure`, not a separate true Wrong event. Until the shared learning-domain contract is explicitly improved:

| Real first response | Visible message | Existing stored outcome | Success |
|---|---|---|---|
| Authored exact/accepted | Correct and short explanation | `correct` | Explicit `scoredTargetIds` only |
| Authored near spelling/form | Explain precisely what's almost right | `almost` (non-success) | None |
| Fully wrong | Explain the actual distinction, e.g. method vs location | `almost` (temporary non-success compatibility) | None |
| Explicit Not sure | Reveal the full correct response | `not_sure` | None |
| No answer | None; not committed | None | None |
| Composite stage task | Capability feedback | No lexical scheduling | Capability record only |

The provisional storage mapping does **not** imply a wrong answer is almost correct. Altering the scheduler globally is a separate reviewed domain task, not something to hide inside Unit 8.

### F21 restricted three-sentence capstone

The Unit 8 A1 Foundations closing item F21 asks for **exactly three authored short sentences**, in order:

1. **Hi! I'm Aino.** → `Hei! Olen Aino.`
2. **Today I drink coffee.** → `Tänään juon kahvia.`
3. **I'm going downtown.** → `Menen keskustaan.`

The three lines above are the **canonical displayed model**, not the only valid wording. The authored accepted alternatives are **line 1:** `Hei! Olen Aino.` or `Moi! Olen Aino.`; **line 2:** `Tänään juon kahvia.`, `Juon kahvia tänään.`, `Minä juon kahvia tänään.`, `Tänään minä juon kahvia.`; **line 3:** `Menen keskustaan.` or `Minä menen keskustaan.`. This permits **2 × 4 × 2 = 16 valid combinations**, provided the three intended meanings stay in the specified order. The task is **capability-only** (`knowledgeScoring: false`, `scoredTargetIds: []`) and not an unstructured conversation. Implement **three scoped `text_input` fields** and evaluate each against its explicit accepted list after N1 before aggregating a single capability record. Do not flatten line boundaries, infer extra wording with an LLM or generate independent knowledge successes for every familiar lemma.

F18–F20 are also capability-only cross-unit tasks. F13 tests an **ordered text route**, not just one word/arrow; its correct order is straight → left → right.

## 7. Existing phrases, optional practice and Review

The Unit 4 phrases **`Missä se on?`** and **`Minne menet?`** are explicitly evidenced in the merged Unit 4 specification; these are **REVIEW**, not new Unit 8 phrase entries. They retain canonical learning state and existing due history.

Unit 8's independently authored scheduled-Review records R01–R09 cover all nine recognition-only items; R10–R16 cover source, transport method, here/there motion, turn-left, reach-downtown question, where-the-bus-goes question, and an ordered straight/right route. Each record is self-contained and due-only, after genuine encounter. Lessons' own standalone `reviewEligible` tasks remain eligible, but the **existing due scheduler** chooses what to show.

Optional Flashcards, Word Match and My Words are a different voluntary practice domain. They share vocabulary identities but must **not** clear due reviews, award unit completion or move items to permanent mastery. Optional Word Match requires at least four eligible unambiguous pairs, while a lesson-local matching activity may contain only two or three pairs.

**Potential ambiguity:** avoid using two generic “transport” meanings as matching answers, or using `oikea` as both “right” and “correct” on a board without authored context. `pyörä` can mean bicycle or wheel; `laituri` platform or pier. Use the contextual glosses already authored, or keep ambiguous items out of the same live Word Match board.

## 8. A1 Foundations eight-unit stage completion contract

The original blueprint contains **eight units**, **46 authored lessons**, and exactly **142 unique production lemmas**, with no duplicate production allocations. Unit 8 remains on the new authoring PR branch until owner-approved and merged; earlier seven units are on `main`.

**No automatic CEFR credential:** A learner can be marked `stage.a1-foundations` curricularly completed when all eight units' required lesson/checkpoint attempts are recorded, including valid Not sure attempts. This is a **completion flag**, not measured A1 competence, no externally administered assessment, and not a claim every vocabulary item is familiar.

Suggested separate state variables:

- `stageCompletion` / `completedUnitIds` / `completedLessonIds`
- `capabilityEvidence` from finite checkpoint tasks
- `languageScopedKnowledge` and `scheduledReviewDue`
- `optionalPracticeSessions` for Flashcards/Word Match/My Words
- `languageLearningVersion` / `contentVersion` for migrations and source audit

Never clear scheduled due reviews upon stage completion. Personal user-authored entries should not be silently deleted on a progress reset.

**Stage-level Review pool:** After Unit 8, keep high-recurrence items from Units 1–8 eligible within the **existing** scheduler (greetings/olla, questions, daily verbs, location words, food, time, possession, transport and direction). Reuse eligible exercises already authored in previous units rather than creating hundreds of duplicate stage-level questions or a second SRS engine. The unit capstone and due Review serve different purposes.

## 9. Expo mobile design and accessibility

The existing Nordic Editorial Figma lesson/exercise/review screens are the presentation source; they were inspected **read-only**. **No new map, live route planner, direction-animation canvas, transit API or audio interaction is required.**

- Render each fixed route as a **numbered text sequence** that screen readers can announce in order. Correctness must not depend exclusively on arrow direction, colour, geographic gestures or inaccessible icons.
- At 360/390/430 dp widths and short-height viewport, keep Finnish phrases legible, support Dynamic Type, safe-area insets, fixed actions above keyboard and reliable text field focus.
- Accept Finnish diacritics and meaningful long vowels; don't autocorrect `tänne` to `tanne`, `pysäkki` to `pysakki`, or collapse consonants.
- Use accessible labels such as “Select Turn left” rather than only “Left arrow”; announce feedback and pair states without colour-only information.
- Respect reduced-motion and persist current exercise/answer across interruption; no fake navigation progress or coercive timers.
- Lessons 8.5 and 8.6 are long; use the authored natural pause positions and measure actual novice effort before release. The current estimated timings are not validated by users.
- Stage completion may be acknowledged editorially, but do not display “Certified A1” or equivalent. Returning to scheduled Review remains possible.

## 10. Linguistic provenance and editorial boundaries

Reliable grammar/phrase references used for bounded forms include:

- [Aalto OpenLearning — Mihin/Missä/Mistä local cases](https://openlearning.aalto.fi/mod/page/view.php?id=17161)
- [Uusi kielemme — Bussissa vs bussilla](https://uusikielemme.fi/finnish-grammar/finnish-cases/location-cases/hyllylla-or-hyllyssa-poydassa-or-poydalla)
- [Uusi kielemme — Traffic and transport words](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/traffic-liikenne)
- [Uusi kielemme — Asking for directions](https://uusikielemme.fi/finnish-vocabulary/vocabulary-phrases/asking-for-directions-in-finnish-tien-neuvominen)
- [Uusi kielemme — Here/there motion adverbs](https://uusikielemme.fi/finnish-vocabulary/word-types/adverbs/adverbs-of-location-taalla-kaikkialla-ylhaalla)
- [Yle educational page — transport forms](https://yle.fi/a/20-153572)
- [Yle educational page — left/right directions](https://yle.fi/a/20-140731)
- [Suomisanakirja — asema](https://www.suomisanakirja.fi/asema)
- [Suomisanakirja — pysäkki](https://www.suomisanakirja.fi/pys%C3%A4kki)

These references verify grammatical **forms and semantics**, not the naturalness of every newly authored Vokri distractor or the effectiveness of Unit 8 instruction. Keep owner/editorial status truthful, original lesson text and a clear later native/learner QA gate.

## 11. Recommended downstream Codex sequence (not part of this PR)

1. Review/merge the owner-approved **three Unit 8 Markdown documents**. Confirm the branch contains **only** these files and no code/Figma source modifications.
2. Inspect existing Finnish content schemas and source CSV, resolve all 19 production and nine recognition-only canonical refs; preserve previous Unit 4 phrase identities and Unit 7 `ystävä` role promotion.
3. Convert Unit 8 LessonSteps and exercises into structured JSON/Zod without inventing new questions, answers, grammar rules, or IDs. Validate 133 steps, 101 compulsory exercises, 12 matching boards/27 pair decisions, 16 Review variants.
4. Add the finite taught location/source/destination, transport and direction **form registry**; no general morphological generator.
5. Implement existing five exercise kinds with deterministic per-option feedback, first-attempt matching, narrow `scoredTargetIds`, F21 three-field acceptance and pause/resume checkpoints.
6. Integrate the eight-unit stage-completion flag independently from mastery/Review due queues; keep optional practice separate.
7. Test React Native iOS/Android accessibility, Finnish keyboard, 360/390/430 sizes, short-height, reduced motion, data persistence and native learner usability.
8. Obtain explicit Vokri owner editorial sign-off. Do not claim external Finnish-teacher certification or CEFR proficiency based solely on these authored Markdown files.

**This branch contains Unit 8 documentation only**, not a functioning Finnish lesson or deployed A1 curriculum. All past units, Figma, app code, original CSV and scheduling implementation stay unchanged.
