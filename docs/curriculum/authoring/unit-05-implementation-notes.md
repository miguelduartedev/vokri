# Vokri — Unit 5: Food & Quantities · Implementation Notes

**Revision:** 1.0 · 12 November 2026 · **Scope:** content-specific Expo conversion and grading handoff, not implemented application code.  
Read with [Unit 5 complete specification](./unit-05-food-and-quantities-complete-specification.md), [Unit 5 Coverage & QA](./unit-05-coverage-and-qa.md), [Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 4 implementation notes](./unit-04-implementation-notes.md), and [learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## 1. Stable IDs and scope

Unit 5 has `id: unit.food-and-quantities`, `course: course.fi`, `stage: stage.a1-foundations`, and `learningLanguage: fi`.

The exact six lesson IDs are:

| Order | Stable lesson ID | New production lemmas |
|---|---|---|
| 5.1 | `lesson.food-and-quantities.coffee-tea-water` | `kahvi, tee, vesi, maito` |
| 5.2 | `lesson.food-and-quantities.food-you-use` | `ruoka, leipä, lounas, omena` |
| 5.3 | `lesson.food-and-quantities.asking-politely` | None; two new phrase targets |
| 5.4 | `lesson.food-and-quantities.little-lot-two` | `vähän, paljon` |
| 5.5 | `lesson.food-and-quantities.how-much` | `hinta, euro, maksaa, ostaa, paljonko, kortti` |
| 5.6 | `lesson.food-and-quantities.cafe-shop-review` | None; ten-item final assessment |

There are **99 required ordered LessonSteps**, **one optional recognition-only spoken_note**, **82 required lesson exercise records**, and **eight additional scheduled-Review-only records**, for **90 unique exercise IDs**. Nine required matching records contain **21 individual pair decisions**, so there are **94 required learner response units**, before multi-sentence typing effort.

Lesson step IDs have prefix `step.food-and-quantities.<lesson-slug>.`; exercise IDs have `ex.food-and-quantities.<lesson-slug>.<exercise-slug>`. All exact suffixes and full authored content appear in the main specification. Local A01–F13/R01–R08 labels are document navigation labels, not persisted IDs. New content remains `needs_review` pending product-owner approval.

**No extra lemma registry.** `kahvia`, `vettä`, `teetä`, `maitoa`, `ruokaa`, `leipää`, `omenaa`, `lounasta`, `euroa`, `kortilla` and `haluaisin` are taught forms or phrase components, not duplicate VocabularyItems with independent familiarity state. `paljon` and `paljonko` do have separate canonical vocabulary IDs, as specified in the CSV.

## 2. Finite food/drink partitive form registry

Store the **explicit approved forms** needed in Unit 5. A finite author-supplied table/typed references are enough; do not generate Finnish noun cases from a generic rule.

| Canonical vocabulary target | Dictionary word | Authored partitive form | Scope in this unit |
|---|---|---|---|
| `vocab.kahvi` | kahvi | **kahvia** | Haluan/Haluaisin kahvia, paljon kahvia |
| `vocab.tee` | tee | **teetä** | Haluan teetä, Haluaisin teetä |
| `vocab.vesi` | vesi | **vettä** | Haluan vettä, Voinko saada vettä |
| `vocab.maito` | maito | **maitoa** | Haluan maitoa, vähän maitoa |
| `vocab.ruoka` | ruoka | **ruokaa** | Haluan ruokaa |
| `vocab.leipa` | leipä | **leipää** | Haluan leipää |
| `vocab.lounas` | lounas | **lounasta** | Form recognition only; no arbitrary lunch object grammar |
| `vocab.omena` | omena | **omenaa** | kaksi omenaa; recognition of form |
| `vocab.euro` | euro | **euroa** | kaksi euroa, Se maksaa kaksi euroa |

The *limited* numeral learning target is `grammar.numeral-plus-singular-partitive`: `yksi omena` versus `kaksi omenaa`, then `yksi euro` versus `kaksi euroa`. This is not a full plural-partitive lesson or general cardinal-number generator. All price-assessment amounts use small **whole euros**; no €2.50 or ‘cents’ parsing is needed.

The amount target `grammar.quantity-plus-partitive` covers `vähän maitoa`, `paljon kahvia`, `vähän vettä` using already introduced forms. The project should **never** infer that the partitive in every context translates literally as the English word ‘some’. Existing earlier `Puhun suomea` remains valid but is not retrospectively regraded.

## 3. Phrase, scoped lemma and case-contract decisions

| Canonical item | Fully authored productive content | Do not infer |
|---|---|---|
| `phrase.haluan-kahvia` | Haluan kahvia. | That every Finnish object after haluan is dictionary form + a |
| `phrase.haluaisin-request` | Haluaisin kahvia / teetä / maitoa in taught contexts | General conditional conjugation or production of `voisin` |
| `phrase.voinko-saada-vetta` | Voinko saada vettä? | Independent productive mastery of `vocab.saada`, introduced recognition-only in Unit 3 |
| `phrase.vahan-maitoa-kiitos` | Vähän maitoa, kiitos. | General object/quantity-case engine |
| `phrase.paljonko-tama-maksaa` | Paljonko tämä maksaa? | That `paljon` and `paljonko` are one lemma |
| `phrase.voinko-maksaa-kortilla` | Voinko maksaa kortilla?; supporting Maksan kortilla. | Adessive `-lla/-llä` paradigm or `vocab.kortilla` |
| `vocab.maksaa` | maksaa (cost/pay), maksan (I pay) | ‘it costs’ and ‘I pay’ have identical subject/predicate contexts |
| `vocab.ostaa` | ostaa, ostan; Ostan kahvia. | Unrestricted total-object case grammar |

The spoken variants `paljon → paljo` and `vähän → vähä` are taught as **optional recognition notes** with no knowledge outcome. Unit 3 already introduced `haluan → haluun`; show a reminder if useful but do not introduce a duplicate spoken target.

Eight *recognition-only* words are allocated exactly: `kana, kala, peruna, banaani` in 5.2; `nälkä, jano` in 5.3; `kuitti, kassa` in 5.5. The fixed phrases `Minulla on nälkä / jano` appear in **recognition** only; Unit 5 does not introduce productive possessive grammar or make learners spell the words from memory.

## 4. Deterministic N1 answer validation and outcome semantics

Reuse the merged Units 1–4 N1 policy unchanged:

1. Unicode NFC.
2. Lowercase.
3. Replace permitted punctuation `.,!?` with **spaces before** collapsing whitespace; do not join neighbouring words.
4. Trim/collapse whitespace.
5. Compare to the finite **explicit authored accepted strings** of that particular exercise.

Preserve `ä/ö`, long vowels and doubled consonants. Do **not** stem, translate, infer a partitive from a new noun, or use an AI/fuzzy evaluator. A valid equivalent not listed must be intentionally added to that specific accepted set after review.

| Submitted input | Reference exercise | Expected |
|---|---|---|
| `  HALUAN KAHVIA!` | A10 | Correct |
| `haluan kahvi` | A10 | Incorrect; form feedback, no success |
| `HALUAN VETTÄ.` | A12 | Correct |
| `haluan vetta` | A12 | Orthographic near miss; ä not stripped |
| `TEETÄ` | A11 (MC) | MC uses option IDs, not typed-form evaluation |
| `Haluan leipää` | B11 | Correct |
| `Haluan leipä` | B11 | Incorrect; taught partitive required |
| `Haluaisin kahvia, kiitos!` | C03 | Correct (listed accepted alternative) |
| `Haluan kahvia` | C03 | Not accepted in this specific softer-'I'd like' task |
| `Voinko saada vettä?` | C06 | Correct |
| `voinko saada vesi` | C06 | Incorrect; use vettä |
| `vähän maitoa kiitos` | D08 | Correct |
| `vahan maitoa kiitos` | D08 | Orthographic near miss |
| `kaksi omenaa` | D11 | Correct |
| `kaksi omenat` | D11 | Incorrect; singular partitive required |
| `paljon kahvia` | D12 | Correct |
| `kaksi euroa` | E08 (MC) | Correct only through authored option ID |
| `paljonko tämä maksaa?` | E06 / F08 | Correct |
| `voinko maksan kortilla` | E16 | Incorrect; after Voinko use maksaa |
| `voinko maksaa kortti` | E16 | Incorrect; fixed card form is kortilla |
| `Voinko maksaa kortilla?` | E16 / F10 | Correct |
| `maksan kortilla` | E19 | Correct |
| `!!!` | Any text input | Empty after N1; no attempt |

### Wrong versus Almost

The existing learning domain stores only `correct`, `almost`, `not_sure`; it does not currently expose a dedicated `incorrect` scheduler result. **Do not implement a new Unit-5-only scheduler.** Preserve the **existing provisional non-success adapter** from Units 1–4 until explicit owner decision:

- Correct first attempt → `correct` on declared `scoredTargetIds`.
- Authored near miss → truthful visible “Check this form”, internal non-success `almost`.
- Fully wrong response → truthful visible incorrect feedback (“Another look”), internal non-success `almost`. Do not display “Almost!” for an unrelated error or misinterpret `almostCount` as genuinely-near statistics.
- “I'm not sure yet” → `not_sure`, show authored answer.
- Empty after normalization → not attempted.
- Capability-only F13 → no lexical/grammar scheduler event; record capability evidence only.

The eventual domain-model decision remains shared across all authored units. A different scheduler schema needs a deliberate migration/contract, not an undocumented exception.

## 5. Matching and scoped scoring

Nine **lesson matching** records contain 21 individual first-attempt pair decisions:

| Record | Pair topics | Pair count |
|---|---|---:|
| A01 | kahvi / tee | 2 |
| A04 | vesi / maito (positive recognition **before A05/A06**) | 2 |
| B01 | ruoka / leipä | 2 |
| B10 | kana / kala / peruna / banaani (recognition only) | 4 |
| C08 | nälkä / jano (recognition only) | 2 |
| D03 | vähän / paljon | 2 |
| E01 | hinta / euro / paljonko | 3 |
| E09 | ostan / maksan | 2 |
| E17 | kuitti / kassa (recognition only) | 2 |
| **Total** | | **21** |

Each pair has one independent first-attempt assessment, not a single result for the whole board; guided correction after a wrong tap is not spaced recall. A wrong pairing should not inappropriately penalise an unrelated target. Optional Word Match's four-pair session minimum does not apply to these curriculum exercises with two-pair boards.

**Scoring boundaries:** `linkedTargetIds` describe context, `scoredTargetIds` describe actual knowledge evidence. F13 has **no scored targets** because the learner merely rearranges supplied full sentences; `knowledgeScoring: false`. A10 phrase success does not automatically prove the learner separately inflected kahvi, and C06 phrase retrieval does not promote the recognition-only saada lemma.

## 6. Nordic Editorial Figma and mobile rendering

The existing [Nordic Editorial mobile Figma file](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766) was inspected **read-only** for grammar, exercise default/correct feedback, lesson/unit completion, Review, Flashcards and Word Match at a reference 390×844 px layout. These screens are visual contracts, **not proof** that keyboard, accessibility, persistence or evaluation work in Expo.

- Reuse existing eight LessonStep types and five exercise kinds; a café scenario is a sequence of `explanation`, `example_set`, `exercise` and `checkpoint`, **not a new dialogue engine**.
- Separate Finnish dictionary words from their taught partitive forms visually. A grammar display may highlight a suffix when accurate (kahvi/kahvia) but must not show a misleading generic decomposition for `vesi → vettä`.
- Keep each exercise independently understandable when rendered in Review; use explicit price (€2) and quantity contexts instead of requiring a hidden picture.
- Use native focus management, accessible option labels, safe-area buttons, screen-reader feedback, VoiceOver/TalkBack order, keyboard avoidance and Finnish diacritics. Do not shrink text to accommodate the 5.5 price/checkout block.
- Lesson 5.5 has **27 required steps** and **19 required exercises**. Preserve two natural pause boundaries (after E08 and E12) and resume the cursor without repeating formal encounter or first-attempt scoring events. The 5.6 ten-part checkpoint also benefits from pause/resume.
- In C05 use **three supplied tokens**, not four (the authored instruction was corrected during consolidation); in F13 three supplied **complete chunks** count as capability assembly, not spelling recall.
- The optional 5.4 spoken note may be hidden without blocking completion, introducing unknown lexemes or altering scheduler status.

## 7. Review bank, editorial acceptance and downstream implementation

The additional Review-only R01–R08 records are standalone MC recognition for the eight new comprehension-only words; they are **not** compulsory lesson steps. Select only after actual encounter and approval when scheduled due. The optional Flashcards and Word Match modes use the same canonical registry and never clear due Review or automatically complete lessons.

All new Unit 5 teaching content is `needs_review`. **The Vokri owner's explicit approval is sufficient** under the project's approved editorial policy, without mandatory external Finnish-teacher review. Record that owner sign-off truthfully; never claim an external linguist independently reviewed these items.

Recommended Codex implementation path after approval:

1. Convert the exact six lesson tables and 90 authored exercise records to existing TypeScript/JSON/Zod content schema; validate stable IDs, target references, encounter ordering, scored-target restrictions, deterministic accepted alternatives and per-option feedback.
2. Validate the exact partitive/quantity/euro/card form fixtures in native tests without generating additional partitive cases.
3. Add due Review variants and preserve prior lexical/knowledge history, especially recognition-only `saada` and recurring Unit 1–4 vocabulary.
4. Run iOS/Android functional/accessibility/keyboard tests with real Finnish orthography and shorter screens, including the heavy 5.5 lesson and complete 5.6 checkpoint.
5. Measure actual beginner study durations and revise pacing only from evidence. Keep the app's established Review and optional vocabulary practice independent.

**Documentation-only PR.** Do not modify React Native code, Figma, Units 1–4, the original Finnish CSV, A1 blueprint, Swedish content or the shared authoring standard. If a general architecture improvement becomes necessary, document it as a separate proposed change.
