# Vokri — Unit 7: People & Descriptions · Content-to-Expo Implementation Notes

**Status:** Content-specific implementation contract, **not actual React Native code** · **12 November 2026** · **Learning language:** `fi`. New educational content is `needs_review` until explicit Vokri product-owner approval; no external teacher reviewer is claimed.  
Read with [Unit 7 complete specification](./unit-07-people-and-descriptions-complete-specification.md), [Unit 7 coverage & QA](./unit-07-coverage-and-qa.md), [authoring standard v1](./exercise-authoring-standard-v1.md), [Unit 6 implementation notes](./unit-06-implementation-notes.md), [learning architecture](../../architecture/content_learning_data_architecture_specification.md) and [Vocabulary Practice data contract](../../handoff/vocabulary-practice/vocabulary-practice-data-contract.md).

## 1. Stable content IDs and scope

Use the existing course and stage: `course.fi` / `stage.a1-foundations` / `unit.people-and-descriptions`. Stable lesson IDs:

| Order | Lesson ID | New production role |
|---|---|---|
| 7.1 | `lesson.people-and-descriptions.your-family` | perhe, äiti, isä, veli, sisko |
| 7.2 | `lesson.people-and-descriptions.people-close-to-you` | kumppani, kaveri; **ystävä promotion** |
| 7.3 | `lesson.people-and-descriptions.whose-and-with-whom` | kanssa |
| 7.4 | `lesson.people-and-descriptions.describing-someone` | iso, pieni, vanha, nuori, pitkä, lyhyt |
| 7.5 | `lesson.people-and-descriptions.basic-colours` | väri, musta, valkoinen, punainen, sininen |
| 7.6 | `lesson.people-and-descriptions.people-review` | no new vocabulary |

Content ID contracts:
- `step.people-and-descriptions.<lesson-slug>.<step-suffix>`: order is stored as a field, not in immutable IDs.
- `ex.people-and-descriptions.<lesson-slug>.<exercise-slug>`: all required exercises with complete authored prompts, answers, feedback, target refs and eligibility.
- `ex.people-and-descriptions.review.<slug>`: independent, due-only Review variants R01–R09.
- `grammar.people.*` and `phrase.people.*`: the finite concept/phrase targets defined in Part I of the complete specification.
- Canonical `vocab.*` IDs come **only** from the existing Finnish CSV/registry, not from every new inflected display form.

The authored package includes exactly **121 ordered LessonSteps (119 required, two optional spoken notes)**, **96 required lesson exercise records**, **nine lesson matching boards with 19 pair decisions**, and **nine standalone due Review records** = **105 unique exercise IDs**. Native conversion must validate all counts against actual records, not hand-maintain these summaries.

## 2. Canonical identity, production promotion and learner records

The new production-role inventory has 20 items, **19 genuinely new lemma encounters plus one role promotion**:

`vocab.ystava` is an **existing Unit 2 recognition item**. When Lesson 7.2 introduces it for active recall, update its **role/eligibility** without resetting or duplicating learner knowledge, scheduled due history or progress references. The same record participates in both optional vocabulary practice and scheduled Review only according to its separately defined evidence and due state.

Recognition-only Unit 7 items remain `vocab.poika`, `vocab.tytto`, `vocab.kaunis`, `vocab.mukava`, `vocab.silma` and `vocab.hius`. Their R01–R06 due questions assess comprehension, **not unrestricted Finnish spelling**. A word merely displayed in a contextual example/distractor is never a new formal encounter.

The user owns personal `My Words`; they do not turn an official course item into a duplicate canonical lemma. Finnish and future Swedish learning state stay independently scoped by learning language.

## 3. Explicitly authored possession and genitive form registry

**Never generate arbitrary noun forms based on a one-suffix heuristic.** These forms are authored teaching content, with their meaning and use restricted to the specified lesson contexts.

| Noun | Affirmative possession noun | Negative possession (partitive) | Genitive / before kanssa |
|---|---|---|---|
| sisko | sisko | **siskoa** | **siskon** |
| veli | veli | **veljeä** | **veljen** |
| kumppani | kumppani | **kumppania** | **kumppanin** |
| ystävä | ystävä | **ystävää** (recognition of this negative noun form) | **ystävän** |
| kaveri | kaveri | Not assessed negatively | **kaverin** |
| äiti | äiti | Not assessed negatively | **äidin** |
| isä | isä | Not assessed negatively | **isän** |
| Aino / Emma | Context names only | Not applicable | **Ainon / Emman** |

**Possession frame:** `Minulla on sisko.` / `Sinulla on veli.` The verb stays `on`, not `olen` or `olet`. It is a construction using `olla`, not a fabricated separate Finnish “have” verb.

**Negative:** `Minulla ei ole siskoa.`, `Minulla ei ole veljeä.`, `Minulla ei ole kumppania.` The noun is partitive after negative. `Minulla ei ole sisko` and `Minulla ei ole velia` are invalid in the taught standard Finnish. No general partitive derivation is required; teach/test the finite table.

**Genitive:** `Ainon sisko`, `Emman veli`, `äidin nimi` and `veljen nimi` illustrate -n with stem changes. `veli → veljen` is not just dictionary-form + n. `minulla` (possession sentence) and `minun` (genitive “my”) must not be treated as interchangeable; general possessive suffixes remain deferred.

**With:** `Asun kumppanin kanssa.` and `Asun kaverin kanssa.` require the correct genitive before `kanssa`. `kumppania` is a *negative-possession partitive*, **not** the case to place before `kanssa`. The bare fragment `kumppanin kanssa` by itself does not literally encode the English pronoun “my”; the sentence/context typically supplies the intended relationship.

**Predicate adjectives:** `Hän on pitkä.`, `Hän on nuori.`, `Talo on iso.` and `Talo on punainen.` use a concrete singular subject with the basic adjective. This is not a general rule for plural or abstract/mass-noun predicates, and `Hän` is gender-neutral in Finnish standard-language reference.

**Spoken recognition only:** `mulla on / sulla on / mun / kaa`; no scored production or separate vocab IDs.

## 4. Deterministic N1 and scoring fixtures

Apply shared N1: Unicode NFC, trim/collapse irrelevant whitespace, optionally ignore case and sentence-terminal punctuation as documented per exercise, **preserve vowel length and a/ä/o/ö contrasts**. Never use edit-distance or a free-form LLM grader. Text-input and transformation answer arrays must be explicit.

| Target exercise | Accepted sample after N1 | Reject or mark authored near only | Reason |
|---|---|---|---|
| B09 affirmative possession | `Minulla on sisko.` | `Minä olen sisko.` | “I am” is not “I have” |
| B10 second-person possession | `Sinulla on kumppani.` | `Sinulla olet kumppani.` | Possession requires `on` |
| B13 / F04 negative sister | `Minulla ei ole siskoa.` | `Minulla ei ole sisko.` (authored near) | Negative takes taught partitive |
| B14 / F05 negative brother | `Minulla ei ole veljeä.` | `Minulla ei ole velia.` (near form feedback) | Stem change and ä |
| B15/F16 negative partner | `Minulla ei ole kumppania.` | `Minulla ei ole kumppani.` | Partitive after negative |
| C05 proper-name genitive | `Emman` | `Emma` | Taught name-genitive |
| C07 / F07 brother genitive | `veljen` | `velin` (authored near) | Use velje- stem |
| C09 name phrase | `Ainon sisko` | `Aino sisko` | Proper name genitive |
| C15/F09 living with partner | `Asun kumppanin kanssa.` | `Asun kumppani kanssa.` (near) | Genitive precedes kanssa |
| C16 buddy context | `Asun kaverin kanssa.` | `Asun kaveri kanssa.` (near) | Kaveri has kaverin genitive |
| D10 tall adjective | `pitkä` | `pitka` (authored near) | Finnish ä is meaningful |
| D13/F11 young person | `Hän on nuori.` | `Hän on nuorena.` | Fixed singular predicative form |
| E12 blue house | `Talo on sininen.` | `Talo on sinistä.` | Different predicative context |
| E15 red room | `Huone on punainen.` | `Huone on punaista.` | Taught concrete singular adjective |
| F14 owned relationship | `Emman veli on Olli.` | `Emma veli on Olli.` | Genitive before sibling |
| F15 3-line profile | Three exact learner-facing authored lines | Unlisted text/paraphrases not automatically accepted | Capability-only, no lexical SRS outcome |

**Token assembly:** Supply lowercase lexical tokens where they may become sentence-initial; capitalise the assembled first token. Proper names inside a sentence (e.g. **Emma**) must remain capitalised even mid-sentence. F13 uses `ainon`, `kumppani`, `on`, `Emma` (not lowercase emma), so `Ainon kumppani on Emma.` is constructible. A12 supplies three tiles, not two.

**Transformation:** B13/B14/F04/F05 must use only already taught noun-positive → noun-negative pairs. An immediate retry after the answer is displayed is guided practice and does not give a second successful recall event for the same attempt key.

### F15 — restricted multi-line profile

This is **one capability-only checkpoint exercise** with three deterministic subresponses, not an open-ended composition engine.

Given English facts about fictional Emma and Aino, the required lines are:

1. `Emman kumppani on Aino.`
2. `Aino on nuori.`
3. `Ainon talo on sininen.`

For React Native, prefer **three scoped `text_input` fields** inside the existing checkpoint screen, each with its own accepted variants and exact feedback; the combined result is **`knowledgeScoring: false` and `scoredTargetIds: []`**. Never collapse the line boundaries into one N1 string and then award success to every visible word. No new lesson-step type, camera, image or AI grading is required. The current spec lists one fully accepted three-line model; other variants require an explicit authored content revision.

### Semantic wrong versus scheduler `almost`

The existing scheduled Review vocabulary is `correct`, `almost`, `not_sure`; it does not have a distinct `wrong` slot yet. Preserve the prior provisional compatibility map from Units 1–6 pending a separate shared-domain decision:

| First attempted response | Visible feedback | Stored scheduler outcome | Successful target update |
|---|---|---|---|
| Authored correct | Correct | `correct` | Only explicit scored target(s) |
| Explicit near form | “Check the form” | `almost` (non-success) | None |
| Fully incorrect | “Another look” | `almost` (provisional non-success) | None |
| Learner chooses Not sure | Full model | `not_sure` | None |
| Empty response | No committed learning event | None | None |
| Guided composite / F15 profile | Capability feedback | No lexical outcome | Capability only |

This mapping does **not** imply a wrong answer is nearly right. A scheduler-wide `incorrect` outcome would need a separate reviewed architecture change, not a hidden Unit 7 exception.

## 5. Lesson-local matching, scheduled Review and optional Word Match

Exactly **nine instructional matching boards** produce **19 individual matching decisions**:

| Board | Content | Decisions | Scoring |
|---|---|---:|---|
| A01 | äiti / isä | 2 | First attempt per corresponding vocabulary item |
| A02 | veli / sisko | 2 | First attempt per vocabulary item |
| B12 | sisko → siskoa / veli → veljeä | 2 | **Unscored guided forms**; no duplicate grammar events |
| C03 | äiti→äidin / sisko→siskon / veli→veljen | 3 | **Unscored guided forms**; no triple-scoring genitive |
| D01 | iso / pieni | 2 | First attempt per adjective |
| D02 | nuori / vanha | 2 | First attempt per adjective |
| D03 | pitkä / lyhyt (height) | 2 | First attempt per adjective with contextual gloss |
| E01 | musta / valkoinen | 2 | First attempt per colour |
| E02 | punainen / sininen | 2 | First attempt per colour |
| **Total** | | **19** | |

The lesson-local matching boards may contain only two or three pairs. The separate optional Word Match activity still needs at least **four** distinct eligible unambiguous pairs to launch.

**Ambiguity rules:** `ystävä` and `kaveri` both can mean friend; don't put them on one active matching board with two indistinguishable “friend” answers. Use an editorially approved contextual distinction or omit that pairing. `pitkä` means tall in a person's height context, long in other contexts; `lyhyt` means short. Matching needs explicit authored context. Negative partitives, genitives and canonical forms must not become duplicate new VocabularyItems.

**Nine due Review-only variants:** R01 poika, R02 tyttö, R03 kaunis, R04 mukava, R05 silmä, R06 hius, R07 negative possession, R08 proper-name genitive and R09 genitive+kanssa. Only after the relevant **actual encounter and owner approval** may the existing due-Review engine select these. The phrase/grammar target is scored, not every surrounding noun.

Optional Flashcards, My Words and Word Match practice use the same canonical registry but do **not** clear due scheduled Review, award official unit completion or imply permanent mastery.

## 6. Native mobile and accessibility expectations

The Nordic Editorial design (Newsreader headings, Inter controls, Warm Ivory, Deep Pine and semantic feedback) remains the UI source of truth; Figma is **read-only** for this documentation PR.

- Handle UTF-8 Finnish spelling and soft keyboard while typing `äiti`, `isä`, `ystävä`, `veljeä`, `pitkä`, `väri`. Incorrect vowel variants need accurate, specific feedback.
- Support the current 390×844 Figma reference but test 360/390/430 widths, short-height screens, Dynamic Type, keyboard avoidance, VoiceOver/TalkBack, focus after feedback, reduced motion and safe-area navigation.
- Lesson 7.2 has 18 required exercises and Lesson 7.3 has 17; use specified pause/resume boundaries and validate real beginner duration. No timer, XP, streak, mascot, live audio scoring or pressure.
- No personal-family questionnaire: all teaching and end-of-unit examples use fictional people. Responses about a learner's personal relationships are optional, not prerequisites for completion.
- Recognition-only spoken notes `mulla on`, `sulla on`, `mun`, `kaa` can be hidden by the spoken-notes preference without blocking the lesson or losing required target scores.

## 7. Source provenance and release requirements

Reference grammar:
- [Uusi kielemme possession construction](https://uusikielemme.fi/finnish-grammar/syntax/sentence-types/possession-having-something)
- [Uusi kielemme family beginner grammar](https://uusikielemme.fi/language-levels/lesson-plans/family-beginner-finnish-lesson-plan)
- [Aalto OpenLearning family/genitive forms](https://openlearning.aalto.fi/mod/page/view.php?id=9897&lang=sv_fi)
- [Korpela's partitive handbook](https://jkorpela.fi/finnish/Partitive.html)
- [Uusi kielemme genitive](https://uusikielemme.fi/finnish-grammar/finnish-cases/grammatical-cases/the-genitive-case-genetiivi)
- [Uusi kielemme postpositions](https://uusikielemme.fi/finnish-grammar/finnish-cases/location-cases/the-inflection-of-postpositions-taivutus)
- [Uusi kielemme singular predicate/adjectives](https://uusikielemme.fi/finnish-grammar/finnish-cases/grammatical-cases/the-complement-predikatiivi)
- [Finnish noun inflection for sisko and kumppani](https://www.suomisanakirja.fi/sisko), [kumppani](https://www.suomisanakirja.fi/kumppani)

These sources support language forms; they are **not** a Finnish teacher's review of all Vokri examples. Do not reproduce textbook exercises/dialogues. Newly authored tasks remain `needs_review` until explicit Vokri-owner sign-off; independent linguistic research does not override that editorial status.

## 8. Suggested downstream Codex implementation (not part of this PR)

1. Inspect all merged Unit 1–6 specifications and the A1 blueprint. Validate the exact **20 production roles**, **six recognition items**, the existing `vocab.ystava` role-promotion event, the **121 ordered steps** and **105 exercise IDs**.
2. Convert Unit 7 Markdown to typed structured JSON/Zod; preserve step ordering, exact prompts, accepted variants, feedback, review eligibility and source references. Do not duplicate recognized Unit 2 words.
3. Implement finite negative partitive and genitive form overlays. No global case/conjugation generator or new lesson renderer kind.
4. Test `transform` negative possession correctness, matching first-attempt scoring and `G`-style multiline capstone acceptance (Unit 7 F15) without AI grading or duplicate successes.
5. Validate Review R01–R09, original encounter gating, optional-practice separation, lesson resume and target-scoping semantics.
6. Run native iOS/Android small-screen/keyboard/accessibility tests; measure actual learner study duration before any release claim.
7. Request Vokri product-owner editorial approval; no external teacher credential needs to be invented.

**This PR contains only Unit 7 authoring Markdown.** Do not modify earlier units, Figma, the original curated CSV, the existing authoring standard, the scheduler or React Native implementation in this content PR.
