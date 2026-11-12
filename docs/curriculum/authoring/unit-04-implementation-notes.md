# Vokri — Unit 4: Where Are You? · Implementation Notes

**Status:** Fully authored content handoff; no application code or Figma edits. **Revision:** 12 November 2026.

Read alongside the [complete Unit 4 lessons](./unit-04-where-are-you-complete-specification.md), [coverage and linguistic QA](./unit-04-coverage-and-qa.md), [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 3 implementation notes](./unit-03-implementation-notes.md), and [shared learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## 1. Identity, curriculum roles and lesson order

- Unit: `unit.where-are-you`, `learningLanguage: fi`, next after `unit.everyday-actions`. Course registry remains `course.fi`; stage remains `stage.a1-foundations`.
- Exactly six lessons: `lesson.where-are-you.ask-where`, `lesson.where-are-you.saying-in`, `lesson.where-are-you.common-places`, `lesson.where-are-you.going-to`, `lesson.where-are-you.location-phrases`, `lesson.where-are-you.location-review`. Do not invent a seventh lesson.
- Exactly **100 ordered required steps** plus **one optional `spoken_note`** (two recognition mappings) and **77 required exercises**. Six standalone Review-only variants live outside lesson progression. There are **83 unique authored exercise records**.
- Exactly **16 new production** and **five recognition-only** lemmas. The five recognition-only words are `pöytä, tuoli, ovi, työpaikka, ruokakauppa`; their comprehension exercises do not create English→Finnish production requirements.
- A word may appear in a contextual example or distractor without triggering a new vocabulary encounter or scorer. Only a marked `vocabulary_intro`, `phrase_intro` or `grammar_explanation` records the defined formal encounter.
- New lexical identifiers use existing `vocab.<ASCII transliteration of lemma>` convention, e.g. `vocab.missa`, `vocab.taalla`, `vocab.siella`, `vocab.tyo`, `vocab.lahella`. Display and score **real Finnish spelling**, not ASCII IDs.

## 2. Taught location forms, never arbitrary case generation

**Author the exact following forms.** They are learner-facing forms of known canonical lemmas, not independent duplicated VocabularyItems. The app must **not** implement general noun-inflection logic to generate answers for Unit 4.

| Lemma | Taught form | Meaning | Implementation/scoring guidance |
|---|---|---|---|
| `talo` | `talossa` | in the house | Transparent `talo + ssa`; can demonstrate how the inessive works |
| `huone` | `huoneessa` | in the room | Explicit extended stem `huonee-` + `ssa`; do not grade `huonessa` correct |
| `kauppa` | `kaupassa` | in the shop | Reduced stem `kaupa-`; do not accept `kauppassa` |
| `asunto` | `asunnossa` | in the apartment | Stem changes; do not accept `asuntossa` |
| `koulu` | `koulussa` | at/in school | Supplied model, not a full local-case table |
| `kahvila` | `kahvilassa` | in a café | Supplied contextual form |
| `ravintola` | `ravintolassa` | in a restaurant | Supplied model; no independent morphological derivation required |
| `vessa` | `vessassa` | in the toilet/restroom | Supplied model, not a production target for all inessive forms |
| `työ` | `työssä` | in work / at work in certain contexts | Do not teach this as the universally natural everyday “I'm at work.” The common expression `töissä` requires separate contextual treatment later |
| `koti` | `kotona` | at home | **Not an ordinary inessive**; fixed location expression |
| `koti` | `kotiin` | (going) home | Fixed destination form |
| `kauppa` | `kauppaan` | to the shop | Fixed destination form; distinct from `kaupassa` |
| `koulu` | `kouluun` | to school | Fixed destination form; distinct from `koulussa` |

**Vowel harmony:** Unit 4 displays the **supplied unscored example** `kylä → kylässä` contrasting `talo → talossa`. No `vocab.kyla` is created, no independent typing of `kylä` is required, and the front-vowel recognition tasks explicitly label awareness rather than productive case mastery.

**Location/destination:** `missä` is a current location question; `minne` is a destination/direction question. `mihin` is an alternative destination question word in broader Finnish, but **not a new Unit 4 production lemma**. Teaching it or its case system is deferred. `Minne menet?` is a fixed question that explicitly introduces its second-person form `menet`; do not treat that single example as a general second-person conjugation paradigm.

## 3. Phrase target registry and form-specific answer contracts

Author the stable phrase IDs used in the full specification without duplicate lexical or scheduling entries:

- `phrase.missa-se-on`: `Missä se on?`
- `phrase.olen-taalla`: `Olen täällä.`
- `phrase.se-on-siella`: `Se on siellä.`
- `phrase.olen-talossa`: `Olen talossa.`
- `phrase.missa-vessa-on`: `Missä vessa on?`
- `phrase.minne-menet`: `Minne menet?`
- `phrase.menen-kotiin`: `Menen kotiin.`
- `phrase.menen-taught-destination`: `Menen kauppaan.`, `Menen kouluun.` as two authored forms of the same *taught-destination family*
- `phrase.olen-kotona`: `Olen kotona.`
- `phrase.kauppa-on-lahella`: `Kauppa on lähellä.`

`Olen kaupassa` and `Olen asunnossa` are taught combinations under existing vocabulary/inessive grammar references, **not** automatically independent phrase-familiarity records. In F06, producing `Olen kaupassa` scores its authored `grammar.inessive-ssa-ssa` target, not every related lemma.

**N1 answer normalization** is exactly the same as Units 1–3: Unicode NFC, lowercase, whitespace collapse and replacing `. , ! ?` punctuation with spaces before trimming. Do not remove diacritics, collapse doubled consonants or vowels, allow wrong case endings, or generate unseen variants. Accepted answers are **enumerated per exercise** in the specification. Optional `Minä` is accepted only where expressly listed.

| Input | Task | Expected evaluation |
|---|---|---|
| `  OLEN  TÄÄLLÄ!  ` | A11 or F08 | Correct |
| `olen taalla` | A11/F08 | Spelling near miss; not correct |
| `missä vessa on?` | F05 | Correct |
| `missä vesa on` | F05 | Spelling near miss; not correct |
| `olen talossa` | B11 | Correct |
| `olen talo` | B11 | Incorrect form; not correct |
| `olen kaupassa` | F06 | Correct |
| `olen kauppassa` | F06 | Incorrect stem; not correct |
| `asunnossa` | C19 multiple-choice form | Correct only via the authored choice ID (not typed extraction) |
| `asuntossa` | C19 | Incorrect form |
| `minne menet?` | D11 | Correct |
| `minne menen?` | D11 | Incorrect person; menen is I go, menet is you go |
| `menen kotiin` | D12 | Correct |
| `menen koti` | D12 | Incorrect destination form |
| `menen kouluun` | F11 | Correct |
| `menen koulussa` | F11 | Incorrect location-versus-destination form |
| `olen kotona` | E08 | Correct |
| `olen kotiin` | E08 | Incorrect: destination substituted for current location |
| `kauppa on lähellä` | F13 | Correct |
| `kauppa on lahella` | F13 | Spelling near miss, not correct |

**Empty fields or punctuation-only input** do not commit knowledge events; offer the established Not sure action.

## 4. Feedback and scored learning boundaries

The original learning architecture stores `correct`, `almost`, `not_sure`; it does not independently define `incorrect`. Until the owner confirms a new domain schema, retain Units 1–3's *provisional non-success adapter*: an authored near miss or unrelated attempted wrong response is stored in the old `almost` non-success bucket, while presenting **distinct, truthful** near-versus-incorrect feedback. Do not display “Almost correct!” when the learner chose a wholly unrelated word. Do not treat `almostCount` as genuine near-miss statistics.

- **Scored** target IDs determine exactly what updates knowledge. `linkedTargetIds` supply context but should not increase familiarity.
- `F06` tests the inessive form `kaupassa` through a complete sentence; it scores the inessive concept rather than incorrectly attributing a successful recall of `vocab.kauppa`, `vocab.olla`, and a fabricated new `vocab.kaupassa`.
- `F12` is written vowel-harmony awareness: no productive grammar mastery score and no need for audio. `F14` is a two-sentence capability-only tile arrangement, `scoredTargetIds: []`.
- `F05` scores the toilet-location phrase; `F08` scores the `Olen täällä` phrase; `F09` scores the destination question phrase.
- Matching is **per pair**, at most one first-attempt outcome for each target per exercise run. Subsequent corrections are guided practice, not an independent successful spaced recall; one mismatched second tile should not penalise two vocabulary targets.

## 5. Review and optional Flashcards / Word Match

Six required lesson matching records contain **17 pair decisions**: A05 two, B05 two, C01 two, C09 three, C17 five, D05 three. They do not require a four-pair minimum; that minimum belongs to optional Word Match session eligibility, not classroom exercises.

The separate due-Review bank R01–R05 gives single-target, self-contained recognition for `pöytä/tuoli/ovi/työpaikka/ruokakauppa`; R06 reviews the production item `huone` at dictionary-form recognition. These are not compulsory lesson steps and are selected only for genuinely encountered, approved, due targets.

Optional Flashcards and Word Match use canonical encountered vocabulary, fixed teaching forms, and authored phrase targets. **Never** infer that the person has encountered Unit 4 merely from an illustrative Figma screen. When matching, qualify the distinct meanings of `koti/talo/asunto/huone/paikka`, `kauppa/ruokakauppa`, `kahvila/ravintola`, `missä/minne`, `täällä/siellä`, and `kotona/kotiin`. If unique matches can't be guaranteed with honest glosses, exclude a conflicting item rather than inventing a false English distinction.

Recognition-only vocabulary may be used in Finnish→English comprehension but not compulsory Finnish free spelling. User-owned My Words and practice do not modify official curriculum or due Review.

## 6. Nordic Editorial mobile presentation

The existing [Vokri Nordic Editorial Figma learning explorations](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766) were inspected **read-only** for grammar, MC, feedback, lesson/unit completion, Review, Flashcards and Word Match. Figma's existing Unit 4 grammar demo emphasises `talo + ssa → talossa`, lists `kaupassa`, and includes `Helsingissä`. It is a *visual example*, not verified app behaviour nor permission to use unseen `Helsinki` as a scored new production item.

- Show a highlighted **stem + suffix** for `talo + ssa` and **huonee + ssa`, not the false `huone + ssa` decomposition. Text labels and screen-reader description must preserve the distinction even when suffixes are rendered in separate visual spans.
- In the front-vowel awareness task, show `kylä → kylässä` with the supplied English gloss `village` and **no new vocabulary score**. Do not require pronunciation recognition without audio.
- For location/destination questions, print all relevant spatial context; do not make an unseen map, picture, finger pointing, or inferred user location a prerequisite.
- Avoid long overflowing grammar cards at 360/390/430 px widths and shorter screens. Keep the task question and action accessible when the Finnish keyboard is open and with larger text.
- Unit 4.3 is deliberately grouped into three resumable internal content segments; its five-pair recognition matching may be shown in a bounded scrolling board or progressive refill without changing pair IDs.
- Keep C17's recognition-only status in its feedback; don't mark users as having independently spelled `työpaikka` just because they matched it.
- The spoken-note setting may hide the `tääl/siel` note without making lesson progress impossible. No microphone, pronunciation-scoring system or new audio content is required.
- Completion remains calm and attempt-based. Returning to a lesson or a completion screen must never double-credit recall results or re-mark a vocabulary encounter.

## 7. Editorial and deployment boundaries

The authored content remains `needs_review` pending explicit Vokri project-owner approval. That approval is sufficient for internal project sign-off, as agreed; **no external teacher is mandatory**, and no independent teacher approval may be invented.

This PR is **content and documentation only**. After approval, Codex can convert to typed JSON/Zod using the existing content architecture and deterministic evaluator, then implement:

1. Validated, unique stable IDs and content-role gating for the 16 production/five recognition lexemes.
2. Precisely authored location-form answer sets; no generic noun-inflection engine.
3. All 77 required exercises and six standalone Review candidates, keyed to lessons and due targets.
4. Per-pair matching, scoped scoring, N1 normalization, and distinct visible wrong/near feedback.
5. Mobile/novice tests of Germanic-English spatial-question ambiguity, Finnish diacritics, accessibility, keyboard, pause/resume and lesson 4.3 load.

Do not edit the original 2,000-lemma CSV, earlier Units 1–3, A1 blueprint, existing Figma, or React Native code in this PR.
