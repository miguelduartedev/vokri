# Vokri — Unit 6: Daily Life · Coverage, Linguistic Verification & Pedagogical QA

**12 November 2026 · Finnish (`fi`) authoring review, not native Expo tests or independent teacher certification.** Read with the [fully authored six-lesson specification](./unit-06-daily-life-complete-specification.md), [implementation notes](./unit-06-implementation-notes.md), [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 5](./unit-05-food-and-quantities-complete-specification.md), [A1 blueprint](../a1_foundations_curriculum_blueprint.md) and the original [Finnish CSV](../vocabulary/finnish_2000_curated.csv).

## 1. Verified inventory, quantities and pacing

**Six lessons**; **117 ordered LessonSteps** (114 required and three optional recognition/phrase/spoken steps); **92 required fully authored exercises**, including seven lesson-local matching boards containing **21 independently assessed pairs**; **eight standalone due-Review exercises** (seven recognition-only lemmas + one recognition-only fixed phrase). Total **100 unique exercise IDs**, with minimum first-pass learner responses **92 − 7 + 21 = 106** (typing effort and retries are additional). All lesson durations are **untested editorial estimates**.

| Lesson | Ordered steps | Required exercise records | Matching pair decisions | Est. minutes |
|---|---:|---:|---:|---|
| 6.1 Morning and evening | 20 | 14 | 2 | 9–13 |
| 6.2 Eat, drink, today, tomorrow | 21 | 14 | 2 | 10–15 |
| 6.3 What time is it? | 20 | 15 | 3 | 11–16 |
| 6.4 Monday to Thursday | 19 | 16 | 4 | 11–17 |
| 6.5 Friday to Sunday | 20 | 16 | 7 | 11–17 |
| 6.6 How often? | 17 | 17 | 3 | 12–18 |
| **Total** | **117** | **92** | **21** | **64–96** |

Required exercise kinds: **38 multiple_choice, 41 text_input, seven matching boards and six token_build tasks**. No forced transform exercises. Short matching boards of two/three pairs are allowed inside lessons; optional Word Match's minimum of four is separate.

## 2. Production vocabulary coverage — all 21 new lemmas

The initial recognition is provided by each lesson's vocabulary introduction and first guided exercise; first independent retrieval and later use are shown separately. Rank values match the user-owned source CSV. A later use in the **same** lesson is not necessarily spaced learning across days; eligible Review exercises supply eventual due retrieval. The unit checkpoint intentionally samples major communicative abilities, not all 21 words.

| New production lemma (rank) | Formal introduction | First required independent retrieval | Further reuse / capability evidence | Standalone due Review candidate |
|---|---|---|---|---|
| **aamu** (#170) | 6.1 | A05 | A10/A11; G12 | A05 |
| **ilta** (#171) | 6.1 | A06 | A14; scheduled Review | A06 |
| **herätä** (#93) | 6.1 | A08 | A13; C12/C13; G11/G15 | A08 |
| **nukkua** (#92) | 6.1 | A09 | A12; scheduled Review | A09/A12 |
| **syödä** (#90) | 6.2 | B06 | B11; G14 | B06/B11 |
| **juoda** (#91) | 6.2 | B07 | B10/B14; G12/G16 | B07/B10 |
| **tänään** (#173) | 6.2 | B08 | B12/B13 | B08 |
| **huomenna** (#175) | 6.2 | B09 | B13/B14; fixed Nähdään chunk | B09 |
| **kello** (#581) | 6.3 | C06 | C08/C12/C15; G11/G15 | C06 |
| **aika** (#162) | 6.3 | C07 | C03–C11 conceptual contrast; scheduled Review | C07 |
| **maanantai** (#176) | 6.4 | D06 | D10/D12; G16 originally revised to morning, due Review remains | D06 |
| **tiistai** (#177) | 6.4 | D07 | D13/D14 | D07 |
| **keskiviikko** (#178) | 6.4 | D08 | D11/D15; E13; G13 | D08 |
| **torstai** (#179) | 6.4 | D09 | D16; due Review | D09 |
| **perjantai** (#180) | 6.5 | E05 | E11/E14; G15 | E05 |
| **lauantai** (#181) | 6.5 | E06 | E08; due Review | E06 |
| **sunnuntai** (#182) | 6.5 | E07 | E12/E15; due Review | E07 |
| **lähteä** (#85) | 6.5 | E10 | E11/E12; G15 | E10 |
| **aina** (#42) | 6.6 | G05 | G10; due Review | G05 |
| **usein** (#43) | 6.6 | G06 | G08/G16/G17 | G06 |
| **joskus** (#44) | 6.6 | G07 | G09/G14 | G07 |

**Coverage decision:** every production lemma has a formal introduction and an authored independent recall opportunity. Words near the end of Unit 6 (such as lauantai/sunnuntai) rely more on intra-lesson reinforcement and later scheduled Review; do not pretend the final capability checkpoint exhaustively checks them. Some rows explicitly rely on future due Review rather than another required within-unit retrieval.

## 3. Recognition-only vocabulary coverage — all seven

| Recognition lemma (rank) | Formal introduction | Lesson-local recognition | Independent Review | No-production guardrail |
|---|---|---|---|---|
| **nousta** (#519) | 6.1 | A04 | R01 | No production or conjugation |
| **eilen** (#174) | 6.2 | B04 | R02 | No past tense |
| **päivä** (#163) | 6.3 | C03 (matching) | R03 | No unrestricted spelling |
| **tunti** (#167) | 6.3 | C03/C11 | R04 | Duration, not current clock time |
| **minuutti** (#168) | 6.3 | C03 | R05 | No minute calculations |
| **viikko** (#164) | 6.4 | D04 | R06 | No plural production |
| **kuukausi** (#165) | 6.4 | D05 | R07 | No month-name production |

The fixed phrase `Nähdään huomenna!` was **not** formally taught in Units 1–5 (verified by reading all five merged specifications). It is a **new, optional recognition-only chunk** introduced in Lesson 6.2 and given independent Review variant **R08**. It is not falsely marked a previously known review phrase or promoted to production. An optional step only records its encounter when actually visited.

## 4. Authored morphology and restricted grammar

| Grammar/form group | Taught complete forms | Explicitly withheld |
|---|---|---|
| First-person routine verbs | `herätä → herään`, `nukkua → nukun`, `syödä → syön`, `juoda → juon`, `lähteä → lähden` | No generic verb-type algorithm or six-person table |
| Dayparts | `aamulla`, `illalla` as practical fixed forms of aamu/ilta | No generic -lla/-llä case production |
| Whole-hour clock | `Kello on viisi.`, `Herään kello viisi.` | `Herään viideltä.` may be recognised but not required; no minute readings or hour endings |
| Weekday temporal forms | `maanantaina`, `tiistaina`, `keskiviikkona`, `torstaina`, `perjantaina`, `lauantaina`, `sunnuntaina` | No general essive-case productivity or habitual -isin adverbs |
| Frequency | `aina`, `usein`, `joskus` with known first-person forms | No invented strict percentage thresholds |
| Spoken recognition | `lähden → lähen`, earlier `menen → meen`/`tulen → tuun` | No independent production or familiarity score |

**Research findings:** Uusi kielemme's [time reference](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/telling-the-time-in-finnish-mita-kello-on) directly confirms the contrast among a clock reading, `Herään kello viisi` and `Herään viideltä`, including the warning against combining `kello` with an ablative hour in this construction. The [weekday guide](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/the-days-of-the-week-viikonpaivat) confirms `keskiviikkona` and distinguishes on a specific weekday from weekly habitual `maanantaisin`. The [time-expression guide](https://uusikielemme.fi/finnish-grammar/finnish-cases/interesting-inflection/expressions-of-time-ajanilmaukset) supports `aamulla`/`illalla`. The [verb list](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/your-first-100-finnish-verbs-finnish-for-beginners) supports `herään`/`nukun`; other first-person verbs and teaching examples remain subject to original editorial review. Additional independent language references: [Uusi kielemme's verb list](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/your-first-100-finnish-verbs-finnish-for-beginners) explicitly gives `syödä → syön`, `juoda → juon`, `lähteä → lähden`, `nukkua → nukun` and `herätä → herään`; its [nähdä discussion](https://uusikielemme.fi/finnish-vocabulary/interesting-verbs/katsoa-nahda-katsella-verb-differences) contains the fixed authentic expression `Nähdään huomenna!`; its [coffee/partitive reference](https://uusikielemme.fi/finnish-grammar/syntax/object-sentences/complications-with-finnish-mass-nouns-object-and-complement) supports `Juon kahvia.` in common usage. These sources reinforce the explicit forms without authorising a new general inflection paradigm. These citations verify morphology and usage patterns, not the app's educational effectiveness.

## 5. Phrase and grammar target traceability

| Authored learning concept | Introduction | Key exercise evidence | Scoring boundary |
|---|---|---|---|
| `grammar.daily-life.first-person-forms` | 6.1 form explanation; reinforced in 6.2 | A07, B05, B06/B07, G11 | No generic verb-conjugation claims |
| `grammar.daily-life.daypart-fixed-forms` | 6.1 daypart explanation | A10/A11/A14, G12 | No general temporal case scoring |
| `grammar.daily-life.whole-hour-time` | 6.3 whole-hour grammar | C05/C12/C13/C14, G11 | Number 6–10 remain recognition-only for free spelling |
| `grammar.daily-life.weekday-time-forms` | 6.4 weekday explanation; expanded 6.5 | D10–D16, E08–E12, G13 | Do not score habitual every-week construction |
| `grammar.daily-life.frequency-placement` | 6.6 frequency teaching | G08–G10, G16 | No unrelated auto-success from every visible word |
| `phrase.daily-life.kello-on-hour` | 6.3 form explanation | C08/C15; G11 | Self-contained time statement |
| `phrase.daily-life.mita-kello-on` | 6.3 fixed phrase introduction | C04 | Recognition-only, not grammatical parsing of mitä |
| `phrase.daily-life.nahdaan-huomenna` | 6.2 optional fixed phrase | R08 due Review after real encounter | New recognition chunk, not old REVIEW item |
| Four blueprint verb/weekday pattern examples | Across 6.1–6.5 | A/B/C/D/E and G checkpoint | Avoid independent duplicative PhraseItems |
| `Teen tämän usein.` | 6.6 recognition/example contract | Linked from earlier tehdä/tämä where used | No productive object-case paradigm |

## 6. Units 1–5 cumulative continuity

| Earlier learning | Unit 6 concrete application | Non-inflation rule |
|---|---|---|
| Unit 1 numbers, minä/olen | C05/C08/C15 and G11 clock exercises | Don't promote 6–10 to required unrestricted spelling |
| Unit 2 se/tämä | Fixed examples; only where already learned | No newly productive object-case or unseen pronoun morphology |
| Unit 3 mennä/tulla/tehdä/haluan/voin | E09 contrast lähden vs menen; earlier form comparisons | Existing lemma/review history preserved |
| Unit 4 koti/kotona | A12, D15, E14, G13 context | Not another local-case introduction |
| Unit 5 kahvia/teetä/vettä/leipää | B10–B14, D12/D16, G08/G12/G14/G16 | Previously authored partitives, no new counted lemmas |
| Unit 6 new frequency words | G01–G10 and G14/G16/G17 | Exactly three new adverb encounters, not repeated new lessons |

## 7. Explicit final capability check — Lesson 6.6 G11–G17

| Item | Ability and assessment level | Scoring |
|---|---|---|
| G11 | Type wake-up time using taught kello: `Herään kello viisi.` | Whole-hour grammar, not all visible lemmas |
| G12 | Type morning activity: `Aamulla juon kahvia.` | Daypart fixed-form application |
| G13 | Recognise Wednesday temporal form: `Keskiviikkona olen kotona.` | Weekday grammar target |
| G14 | Independently type `Syön joskus leipää.` | Sometimes/frequency target |
| G15 | Type three constrained independent sentences in requested order (wake-up, morning drink, Friday departure) | Capability evidence **only**; scoredTargetIds empty |
| G16 | Arrange supplied tiles into an often-in-morning sentence | Guided frequency grammar, not unaided spelling |
| G17 | Independently recall `usein` | Often vocabulary target |

The three-line task is constrained to taught forms; no open-ended semantic grading exists. It samples integrated routine production, but actual spontaneous conversation, listening and out-of-unit generalisation are **not measured**.

## 8. QA findings, corrections and known limitations

- **Resolved:** All 28 new lexical roles/ranks cross-checked against the unchanged source CSV: 21 production, seven recognition. Six lesson sections and six checkpoints confirmed; 92 unique compulsory exercise IDs and eight independent Review records.
- **Resolved:** New `Nähdään huomenna` classification corrected to new recognition-only phrase after inspecting Units 1–5; not falsely marked old review material.
- **Resolved:** Fixed the G16 'often on a particular Monday' semantic mismatch by using a natural repeated morning activity instead.
- **Resolved:** Six token_build banks now supply lowercase canonical tokens and explicitly require sentence-initial capitalisation after arrangement so both accepted orders are constructible.
- **Implementation dependency:** The current shared scheduler has Correct/Almost/Not sure but no independent Wrong outcome. Until architecture changes, the existing non-success mapping for a fully wrong response remains a provisional compatibility path. Do not label a completely wrong answer 'Almost!' in the UI.
- **Implementation dependency:** G15 requires three sentence boundaries and a restricted per-line matcher. A single flat N1 normaliser must not collapse sentence segmentation; use three scoped inputs if needed without adding a new lesson-step kind.
- **Cognitive load:** Lessons 6.4–6.5 each introduce weekday spellings, and 6.3 adds clock expressions. Real beginner timing, memory load and fatigue have not been measured. Short lesson/resume UX needs native tests.
- **Content:** These are original Finnish teaching examples; external references support grammatical forms, not independent human review of every authored distractor and answer. Owner approval is sufficient internally; no external teacher certification is claimed.
- **No code/UI QA:** No Expo iOS/Android run, Finnish keyboard testing, VoiceOver/TalkBack, reduced motion, persistence or true due-review scheduling was tested in this content PR.

## 9. Provisional pedagogical quality rubric (100 points)

| Criterion | Points (earned / max) | Evidence or limitation |
|---|---:|---|
| Curriculum fidelity | 10 / 10 | Exact six lessons and 21+7 lexical roles. |
| Vocabulary progression/retrieval | 9 / 10 | All production items have required recall; short-delay within-unit review uneven for late weekday words. |
| Grammar accuracy and scope | 18 / 20 | Finite first-person/time/weekday forms checked; no general paradigms; full native editorial review pending. |
| Exercise and distractor quality | 13 / 15 | 92 full questions with option-specific feedback; real learner comprehension untested. |
| Cumulative application | 9 / 10 | Unit 5 food forms and earlier language reused naturally. |
| Answer validity and grading | 8 / 10 | N1 deterministic lists; G15 multi-line and legacy wrong/Almost need implementation adaptation. |
| Review and scoring integrity | 9 / 10 | Separate due-Review bank, first-attempt matching and narrow targets; runtime not tested. |
| Mobile/pacing realism | 5 / 8 | Short readable prompts, pauses; no device validation and heavy 6.3–6.5. |
| Linguistic sourcing and originality | 6 / 7 | Reference-backed forms and original content; no human reviewer certificate. |
| **Provisional authoring total** | **87 / 100** | **Ready for owner review and structured-content conversion with follow-ups; not a tested mobile lesson or teacher-approved production curriculum.** |

**Overall readiness:** The six-lesson content package is complete as a draft and suitable for Vokri-owner editorial review. Its exact textual content is authored, but native app-level validation, user study, and the restrictive multiline/frequency grader require downstream implementation and testing. No release-level or CEFR learning-outcome claim is made.
