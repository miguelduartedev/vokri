# Vokri — Unit 5: Food & Quantities · Implementation Notes

**Status:** Complete Unit 5 content-specific implementation handoff, **not Expo application implementation**. **Date:** 12 November 2026.  
**Use with:** [complete Unit 5 specification](./unit-05-food-and-quantities-complete-specification.md), [coverage and QA](./unit-05-coverage-and-qa.md), [authoring standard v1](./exercise-authoring-standard-v1.md), [Unit 4 implementation notes](./unit-04-implementation-notes.md), [shared learning architecture](../../architecture/content_learning_data_architecture_specification.md) and Nordic Editorial mobile designs.

## 1. Stable content scope and editor approval

`unit.food-and-quantities` belongs to `course.fi` / `stage.a1-foundations` with `learningLanguage: fi`.

Exactly six lessons, in order:

1. `lesson.food-and-quantities.coffee-tea-water`
2. `lesson.food-and-quantities.food-you-use`
3. `lesson.food-and-quantities.ask-for-something`
4. `lesson.food-and-quantities.a-little-a-lot-two`
5. `lesson.food-and-quantities.how-much`
6. `lesson.food-and-quantities.cafe-shop-review`

Full required step IDs use `step.food-and-quantities.<lesson-slug>.<suffix>`; authored exercise IDs use `ex.food-and-quantities.<lesson-slug>.<slug>`. The source specification contains **103 required step rows**, **two optional spoken notes**, **85 compulsory exercise records**, and **eight Review-only variants** under `ex.food-and-quantities.review.*`. There are **93 unique exercise IDs**.

Every newly authored teaching, phrase, grammar and exercise record remains `editorialStatus: needs_review` until explicit **Vokri project-owner approval**. Such approval is sufficient for project sign-off, as agreed; do not claim an external Finnish teacher certified it or fabricate reviewer metadata.

## 2. Canonical lemmas and taught forms

Do not create a second vocabulary registry or individual vocabulary IDs for inflected noun forms.

| Canonical VocabularyItem | Exact taught form(s) | Usage and scoring rule |
|---|---|---|
| `vocab.kahvi` | kahvi, **kahvia** | Distinguish dictionary form from partitive request `Haluan kahvia` |
| `vocab.tee` | tee, **teetä** | The taught tea partitive has -tä; do not accept `teea` |
| `vocab.vesi` | vesi, **vettä** | Taught stem change; do not accept `vesia` or `vesitä` |
| `vocab.maito` | maito, **maitoa** | In `vähän maitoa`, `Ostan maitoa` and drink requests |
| `vocab.ruoka` | ruoka, **ruokaa** | Useful food partitive, not separate lemma |
| `vocab.leipa` | leipä, **leipää** | Long ä and correct vowel harmony |
| `vocab.lounas` | lounas, **lounasta** | Fixed useful partitive form, broad case generation deferred |
| `vocab.omena` | omena, **omenaa** | Count `yksi omena` vs `kaksi omenaa` |
| `vocab.euro` | euro, **euroa** | Count `yksi euro`, `kaksi euroa` |
| `vocab.kortti` | kortti, **kortilla** | Fixed pay-by-card form; NOT a productive -lla/-llä grammar engine |
| `vocab.ostaa` | ostaa, **ostan** | Acquire/buy; `Ostan maitoa` is independently produced in F12 |
| `vocab.maksaa` | maksaa, **maksan**, **Se maksaa …** | Paying vs costing depends on syntax/context; not interchangeable with ostaa |
| `vocab.vahan` | vähän | A little; `vähän maitoa` |
| `vocab.paljon` | paljon | A lot/much; `paljon kahvia` |
| `vocab.paljonko` | paljonko | Separate question-word lemma, NOT a generated new `paljon` variant |
| `vocab.hinta` | hinta | Price noun; not confused with costing verb |

All **sixteen** new production roles are explicit and link back to the unchanged original CSV. Recognition-only `kuitti/kassa/kana/kala/peruna/banaani/nälkä/jano` are single existing canonical items, never forced Finnish free production. They can appear in Finnish→English meaning activities only. The `saada` lemma from Unit 3 remains a canonical **recognition** item even when the fixed `Voinko saada vettä?` PhraseItem is authored and scored productively.

## 3. Phrase and grammar IDs

The following PhraseItems are authored under stable, language-scoped IDs:

| PhraseItem | Exact taught form | Additional content boundary |
|---|---|---|
| `phrase.haluan-kahvia` | `Haluan kahvia.` | Uses Unit 3 `haluan`, new drink form |
| `phrase.haluaisin-slot` | `Haluaisin kahvia.`, `Haluaisin teetä.` | Polite request chunk; no conditional paradigm |
| `phrase.voinko-saada-vetta` | `Voinko saada vettä?` | Fixed use of `saada`, no independent productive verb lemma |
| `phrase.vahan-maitoa-kiitos` | `Vähän maitoa, kiitos.` | Quantity + taught partitive + Unit 1 politeness |
| `phrase.paljonko-tama-maksaa` | `Paljonko tämä maksaa?` | Price question; old `tämä` preserved |
| `phrase.voinko-maksaa-kortilla` | `Voinko maksaa kortilla?` | Fixed card form, not general adessive inflection |

GrammarConcept IDs:

- `grammar.partitive-food-drinks`: finite taught food/drink forms in requests.
- `grammar.quantity-plus-partitive`: `vähän/paljon` plus the appropriate explicitly taught partitive.
- `grammar.numeral-singular-partitive`: 5.4 `yksi omena/kaksi omenaa`, 5.5 `yksi euro/kaksi euroa`.

Reinforce old `phrase.haluan-slot`, `phrase.voinko-slot` and `vocab.saada` **without** new vocabulary encounters or duplicate knowledge records. Do not create independent `vocab.kahvia`, `vocab.vetta`, `vocab.maitoa`, `vocab.euroa` or `vocab.kortilla` IDs.

## 4. Deterministic answer normalization and targeted feedback

Reuse Units 1–4 **N1** exactly:

1. Unicode NFC normalisation.
2. Lowercase.
3. Replace allowed punctuation separators `. , ! ?` with spaces before trimming/collapsing whitespace; do not concatenate different words.
4. Preserve ä/ö, long vowels/consonants, inflection and word boundaries.
5. Compare only to the finite accepted sets explicitly printed in the main specification.
6. Empty or punctuation-only input is not a knowledge attempt; show the explicit Not sure option.

**Do not use runtime AI translation, suffix generation, edit-distance acceptance or loose equivalence across grammatical cases.**

| Input | Exercise/target | Expected |
|---|---|---|
| `  HALUAN KAHVIA! ` | A12 | Correct |
| `haluan kahvi` | A12 | Incorrect/near form, no success |
| `Haluaisin teetä.` | C09 | Correct |
| `haluaisin tee` | C09 | Wrong drink form |
| `Voinko saada vettä?` | C08/F05 | Correct |
| `voinko saada vesi` | C08/F05 | Wrong; vesi→vettä |
| `Vähän maitoa, kiitos.` | D11 | Correct |
| `vahan maitoa kiitos` | D11 | Near miss, ä is required |
| `kaksi omenaa` | D07/D09 | Correct when key/constructed task matches |
| `kaksi omenat` | D07/D09 | Incorrect; use omenaa |
| `paljon` | E06 expecting `paljonko` | Incorrect; separate lexical item |
| `Paljonko tämä maksaa?` | E17/F09 | Correct |
| `paljon tämä maksaa` | E17/F09 | Incorrect, not an accepted full question |
| `Se maksaa kaksi euroa.` | E21/F10 MC | Correct by the authored MC **option ID**, not text OCR |
| `Se maksaa kaksi eurot` | E21/F10 MC | Incorrect option |
| `Voinko maksaa kortilla?` | E20/F11 | Correct |
| `voinko maksaa kortti` | E20/F11 | Incorrect; fixed form kortilla |
| `Ostan maitoa.` | F12 | Correct |
| `Maksan maitoa.` | F12 | Wrong buying vs paying verb |
| `!!!` | Any text-input task | No attempt; require text or Not sure |

*Important:* multiple-choice and token-build records grade their **stable option IDs or authored tile sequences**, not by applying free-text comparison to a visual screen. A token exercise that supplies all morphology does not imply independent recall of that morphology.

### Wrong versus Almost compatibility

The current scheduler has `correct`, `almost`, `not_sure`, not an independent `incorrect` result. Until the product owner approves a schema change, use the existing **provisional non-success compatibility mapping** documented in Units 1–4:

| Learner response | Visible feedback | Stored learning outcome | Success awarded |
|---|---|---|---|
| Authored correct first attempt | Correct | `correct` | Only explicit `scoredTargetIds` |
| Authored near form (e.g. `vahan`) | “Check the form” | `almost` (non-success) | None |
| Fully wrong form/distractor | “Another look” | `almost` (non-success) | None |
| Explicit “I'm not sure yet” | Model solution | `not_sure` | None |
| Empty field | No committed answer | None | None |
| Guided multi-target dialogue F14 | Capability-specific feedback | No lexical SRS result | Capability evidence only |

This legacy mapping is not a truthful count of *nearly correct* attempts. Do not display “Almost!” for unrelated wrong answers; consider a proper separate `incorrect` scheduler event only via an explicit future architecture change, not as a silent Unit 5 exception.

## 5. Matching, Review and optional vocabulary practice

There are **eleven lesson matching boards containing 27 pair decisions**, not 11 single decisions:

| Record | Scope | Pairs |
|---|---|---:|
| A01 | kahvi/tee | 2 |
| A02 | vesi/maito | 2 |
| A04 | four taught drink partitives | 4 |
| B01 | ruoka/leipä | 2 |
| B02 | lounas/omena | 2 |
| B09 | kana/kala/peruna/banaani recognition | 4 |
| B10 | nälkä/jano recognition | 2 |
| D02 | vähän/paljon | 2 |
| D08 | yksi omena/kaksi omenaa | 2 |
| E02 | hinta/euro/paljonko | 3 |
| E18 | kassa/kuitti recognition | 2 |
| **Total** | | **27** |

Matching items emit a **separate first-attempt result per pair**. For D08, one pair links `vocab.yksi` and the second targets `grammar.numeral-singular-partitive` to avoid scoring the *same grammar target twice* on a single guided board. Board shuffling may not change identities. The optional Word Match minimum of four pairs does **not** apply to lesson matching boards of two or three pairs.

The eight independent Review-only exercises R01–R08 are fully authored recognition checks of the eight recognition-only vocabulary items. They are selected solely by existing due scheduling, after encounter and project approval. The scheduled Review queue must not be cleared or postponed by an optional Flashcards/Word Match/My Words session.

**Semantic board safety:** never include `paljon` and `paljonko` with identical glosses; nor `ostaa` and `maksaa` with unsupported generic English “get”; nor `kuitti` and `kassa` as interchangeable checkout words. Dictionary-form and partitive-form versions of the **same** lemma share one canonical identity, not two unrelated matchable learner words. Use authored context qualifications, or omit ambiguous pairs.

## 6. Read-only Nordic Editorial Figma and Expo ergonomics

[Existing Vokri lesson and exercise Figma](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766) was inspected read-only for grammar text, multiple choice, correct/incorrect feedback, completion, Review, Flashcards and Word Match.

Existing examples show a 390×844 mobile screen, vertically scrollable reading regions and compact feedback. They do not prove native focus, typing or per-pair scoring works.

- Display the **correct complete partitive word** (e.g. `vettä`) rather than pretending all words can be generated by one suffix animation.
- On grammar cards, use semantic emphasis for dictionary vs request form. At minimum explain `vesi → vettä` and `tee → teetä` honestly without fake stem decompositions.
- 5.2 has recognition-only word groups. Break B09 (four pairs) and B10 (two) into distinct lesson encounters; don't claim they independently tested Finnish spelling.
- 5.5 has 21 exercises with six production + two recognition words. Preserve pause/resume after E08 and E16; never make the session effectively uninterruptible or double-score on resumption.
- A14 etc. not used: exact exercise IDs are A01–A13, B01–B14, C01–C11, D01–D12, E01–E21, F01–F14. Never use a tag without a matching stable exercise record.
- Allow Finnish ä/ö input without requiring users to change their system-language keyboard; test native scrolling/keyboard-safe bottom actions and VoiceOver/TalkBack reading order.
- Optional spoken forms `paljo/vähä` and previously seen `haluun` are recognition-only notes with no audio/speech assessment or new SRS item; hiding notes cannot block completion.
- F14 uses four **complete sentence chunks**, not generated conversation branching; make them tappable/accessible with large text and stable order identities. It is capability-only and should not award a correctness event to every constituent vocabulary item.

## 7. Review, owner approval and native implementation plan

All new teaching and exercises remain `needs_review` until **explicit Vokri product-owner sign-off**, which is sufficient under the project policy. No external teacher review is mandatory or falsely recorded.

This PR is documentation only. After owner approval, a downstream Codex task may:

1. Convert the authored Markdown into typed JSON/Zod content records, preserving IDs, exact answers, target links and editorial states.
2. Validate 16 new production and eight recognition roles against the original CSV; preserve Unit 3 `saada` and `haluun` encounter identities.
3. Test the three grammar-concept targets, six PhraseItems, eleven matching boards and independent Review variants.
4. Enforce N1, wrong/near visible feedback, score boundaries and stable first-attempt events.
5. Test iOS/Android content rendering, Finnish keyboard, larger fonts, screen reader, resume and actual novice duration.

Do not modify the original CSV, existing A1 blueprint, approved Units 1–4, Figma designs, React Native code or create a separate currency/price calculator in this content PR.
