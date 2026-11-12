# Vokri — Unit 8: Getting Around · Complete Lesson & Exercise Specification

**Status:** Complete authored-content draft · **Learning language:** Finnish (`fi`) · **Unit:** `unit.getting-around` · **Course:** `course.fi` · **Stage:** `stage.a1-foundations`.  
**Editorial status:** `needs_review`; `sourceType: original`; `reviewedBy: null`; `reviewedAt: null` on every newly authored instructional step/exercise. Explicit Vokri product-owner approval is sufficient for internal authoring approval; independent Finnish-teacher certification has **not** occurred.  
**Scope:** A1 Foundations **Unit 8 of 8**, six lessons. This is content documentation, **not** implemented or learner-validated Expo functionality.

### Sources and continuation
Follow the [authoring standard](./exercise-authoring-standard-v1.md), [Unit 4 locations](./unit-04-where-are-you-complete-specification.md), [Unit 7 final authored specification](./unit-07-people-and-descriptions-complete-specification.md), [original CSV](../vocabulary/finnish_2000_curated.csv), [A1 blueprint](../a1_foundations_curriculum_blueprint.md) and the [learning architecture](../../architecture/content_learning_data_architecture_specification.md). Companion [Unit 8 coverage/QA](./unit-08-coverage-and-qa.md) and [Unit 8 implementation notes](./unit-08-implementation-notes.md) provide traceability and Codex-specific constraints.

## Part I — Learner capability, curriculum and finite language contracts

### Practical objective

*“Recognise common ways to travel, ask where a station is, say where you're going or how you're travelling, recognise a familiar ‘from’ expression and follow short straight/left/right instructions.”*

This completes an **authored eight-unit curriculum**, not a certified CEFR A1 exam. Scenarios use fictional people, generic places, timeless journey descriptions and textual routes; no real transit schedule, map API, audio input or dynamic image is required.

### Exactly 19 production lemmas, original CSV ranks verified

| Canonical target ID | Lemma | Meaning for A1 | Rank | Tier | First formal encounter |
|---|---|---|---:|---|---|
| `vocab.bussi` | bussi | bus | 220 | Core | 8.1 |
| `vocab.juna` | juna | train | 221 | Core | 8.1 |
| `vocab.raitiovaunu` | raitiovaunu | tram | 222 | Core | 8.1 |
| `vocab.metro` | metro | metro / underground | 223 | Core | 8.1 |
| `vocab.taksi` | taksi | taxi | 224 | Core | 8.1 |
| `vocab.asema` | asema | station | 227 | Core | 8.2 |
| `vocab.pysakki` | pysäkki | stop | 228 | Core | 8.2 |
| `vocab.lippu` | lippu | ticket (transport context) | 229 | Core | 8.2 |
| `vocab.reitti` | reitti | route | 231 | Core | 8.2 |
| `vocab.kaupunki` | kaupunki | city | 205 | Core | 8.3 |
| `vocab.keskusta` | keskusta | city centre / downtown | 591 | Everyday | 8.3 |
| `vocab.tie` | tie | road / way | 226 | Core | 8.3 |
| `vocab.matka` | matka | journey / trip | 230 | Core | 8.3 |
| `vocab.tanne` | tänne | to here / towards speaker | 354 | Core | 8.4 |
| `vocab.sinne` | sinne | to there / away from speaker | 355 | Core | 8.4 |
| `vocab.suoraan` | suoraan | straight ahead / directly | 361 | Core | 8.6 |
| `vocab.takaisin` | takaisin | back / again towards origin | 362 | Core | 8.6 |
| `vocab.oikea` | oikea | right (direction), also correct in other contexts | 126 | Core | 8.6 |
| `vocab.vasen` | vasen | left (direction) | 1618 | **Extended** | 8.6 |

**Critical vocabulary decision:** `vasen` is deliberately retained despite rank 1618 because navigation requires a right/left contrast. Every lemma above is a **single** canonical item; `bussilla`, `keskustaan`, `oikealle`, etc. are not new lemmas. Use `(learningLanguage, localItemId)` identity. The ranks were cross-checked against the original unchanged 2,000-word CSV.

### Exactly nine recognition-only lemmas

| ID | Lemma | Context-sensitive meaning | Rank/tier | Formal encounter |
|---|---|---|---|---|
| `vocab.pyora` | pyörä | bicycle or wheel; transport context = bicycle | 225 Core | 8.1 |
| `vocab.matkalippu` | matkalippu | travel ticket | 452 Core | 8.2 |
| `vocab.laituri` | laituri | platform or pier; train context = platform | 457 Core | 8.2 |
| `vocab.lento` | lento | flight | 232 Core | 8.3 |
| `vocab.lentokentta` | lentokenttä | airport | 233 Core | 8.3 |
| `vocab.myohassa` | myöhässä | late | 458 Core | 8.5 |
| `vocab.ajoissa` | ajoissa | in time / on time | 459 Core | 8.5 |
| `vocab.paasta` | päästä | reach, get to, manage to get somewhere | 509 Everyday | 8.5 |
| `vocab.ajaa` | ajaa | drive / travel by vehicle | 571 Everyday | 8.5 |

**No unrestricted Finnish spelling or verb conjugation of these nine is required.** In particular, `pääsen` in a navigation question and `ajaa` in transport context are **recognition/fixed phrases**, not newly productive conjugation paradigms.

### Existing learning and phrase reuse

**Previously encountered Unit 4 support:** `missä`, `minne`, `täällä`, `siellä`, `mennä`, `tulla`, `koti/kotiin`, `kauppa/kauppaan/kaupassa`, `talo/talossa`; `lähteä/lähden` is taught in Unit 6. `Missä se on?` and `Minne menet?` were checked in merged Unit 4 and remain **REVIEW**, never new initial phrase encounters.

### Finite authored form registry — **not a general case generator**

| Canonical lemma | Authored form(s) | Use and role | Learner obligation |
|---|---|---|---|
| keskusta | `keskustaan`, `keskustassa`, `keskustasta` | to/in/from downtown | **keskustaan** in production; other two recognised as taught |
| kauppa (Unit 4) | `kauppaan`, `kaupassa`, **`kaupasta`** | to/in/from the shop | source **kaupasta** recognition only |
| talo (Unit 4) | `talossa`, **`talosta`** | in/from the house | source **talosta** recognition only |
| asema | `asemalle`, `asemalla`, `asemalta` | to/at/from station | limited **recognition**; no invented `asemasta` as default |
| pysäkki | `pysäkillä`, `pysäkille`, `pysäkiltä` | at/to/from a stop | recognition examples only |
| bussi | **`bussilla`**, `bussissa` | travel **by bus** vs be inside/on a bus | bussilla taught for production; bussissa recognition contrast |
| juna | **`junalla`** | by train | finite controlled production |
| metro | `metrolla` | by metro | recognition after authored introduction |
| raitiovaunu | `raitiovaunulla` | by tram | recognition after authored introduction |
| taksi | `taksilla` | by taxi | recognition after authored introduction |
| takaisin | `takas` | casual spoken shortening | optional recognition; never typed production |
| oikea | `oikealle` | to the right in fixed turn command | recognition-only direction chunk |
| vasen | `vasemmalle` | to the left in fixed turn command | recognition-only direction chunk |
| mennä | `mene`, `menee` | fixed command / third-person phrase | finite **chunk** recognition; `menee` not a new person paradigm |
| tulla | `tule` | fixed command “come here” | recognition-only imperative |
| päästä (recognition lemma) | `pääsen` | “how can I get…?” fixed phrase | no independent verb-production requirement |
| kääntyä (not production inventory) | `käänny` | “turn” fixed route instruction | **phrase-only**, no new production lemma |

**Crucial boundaries:** `Menen keskustaan.` indicates destination. `Olen keskustassa.` indicates location. `Tulen keskustasta.` indicates source. The station uses `asemalle/asemalla/asemalta` in normal station-as-destination/location/departure contexts, not a blanket `asemasta`. `Menen bussilla.` is travel method; `Olen bussissa.` refers to being inside the bus. `täällä` is location, `tänne` direction toward here; `siellä` is location, `sinne` direction toward there. `oikea/vasen` are dictionary words, `oikealle/vasemmalle` are directional command forms. **No all-six-local-cases table, general illative/elative/allative generator or imperative conjugation paradigm is taught.**

### Exact phrase/chunk inventory and teaching roles

| Stable target | Finnish phrase | First formal phase | Learner assessment role |
|---|---|---|---|
| `phrase.getting-around.missa-asema-on` | Missä asema on? | 8.2 | **productive fixed question**, independently retrieved |
| `phrase.getting-around.minne-tama-bussi-menee` | Minne tämä bussi menee? | 8.2 | **recognition-only fixed question**; `menee` is not an unrestricted new person rule |
| `phrase.getting-around.menen-keskustaan` | Menen keskustaan. | 8.3 | **productive**, independently recalled with taught destination |
| `phrase.getting-around.menen-bussilla` | Menen bussilla. | 8.5 | **productive**, independently recalled with taught method |
| `phrase.getting-around.mene-suoraan` | Mene suoraan. | 8.6 | **productive as this one fixed command**, not unrestricted imperative morphology |
| `phrase.getting-around.miten-paasen-keskustaan` | Miten pääsen keskustaan? | 8.5 | **recognition-only question**, because `päästä` is recognition only |
| `phrase.getting-around.tulen-takaisin` | Tulen takaisin. | 8.6 | **productive** known tulla + new takaisin |
| `phrase.getting-around.tule-tanne` | Tule tänne. | 8.4 | **recognition-only fixed command**; no general imperative teaching |
| `phrase.getting-around.kaanny-oikealle` | Käänny oikealle. | 8.6 | **recognition-only fixed instruction**; `kääntyä` not a new production lemma |
| `phrase.getting-around.kaanny-vasemmalle` | Käänny vasemmalle. | 8.6 | **recognition-only fixed instruction** |
| Prior Unit 4 phrase registry | Missä se on? / Minne menet? | **Units 4** | **REVIEW ONLY**, preserve earlier IDs/knowledge |

### Grammar target registry

| ID | Scope | Main evidence |
|---|---|---|
| `grammar.getting-around.transport-lexicon` | lexical transport distinctions | explicit transport exercise; prefer lemma scores |
| `grammar.getting-around.location-destination` | where vs where-to with finite familiar destination forms | lesson 8.3, 8.4 |
| `grammar.getting-around.location-source` | recognition of taught -sta/-stä vs other source endings | lesson 8.5 |
| `grammar.getting-around.transport-method` | finite `-lla/-llä` travel-method chunks vs `-ssa/-ssä` location | lesson 8.5 |
| `grammar.getting-around.here-there-movement` | `täällä/tänne`, `siellä/sinne` | lesson 8.4 |
| `grammar.getting-around.direction-instruction` | fixed straight/right/left route commands | lesson 8.6 |

### Shared assessment contract (applies to each complete exercise below)

- Stable exercise IDs: `ex.getting-around.<lesson-slug>.<slug>`. LessonSteps: `step.getting-around.<lesson-slug>.<step-suffix>`. Standalone due Review: `ex.getting-around.review.<slug>`.
- Exercise types only `multiple_choice`, `text_input`, `token_build`, `matching`, `transform` when justified. LessonStep types remain the existing eight.
- N1 validation: Unicode NFC; trim and collapse extraneous whitespace, optional case and terminal punctuation ignoring for applicable tasks. Preserve `ä/ö`, vowel/consonant length, meaningful case suffixes and word boundaries. **No fuzzy/AI scoring.**
- MC options use stable option keys, not display indices; after shuffling preserve correct answer and per-option wrong explanation.
- For `token_build`, supply **lowercase lexical words** so both accepted orders can be assembled, except proper names remain inherently capitalised; the renderer capitalises assembled sentence-initial words. Never accept an order unbuildable from the tile bank.
- Lesson-local matching may use two or three pairs, independent left/right shuffling and **per-pair first-attempt** scoring. The optional Word Match's four-pair eligibility minimum is separate.
- Correct, wrong, explicit authored near and Not sure have different user-facing messages; until the shared scheduler gains a Wrong outcome, the inherited `correct|almost|not_sure` compatibility maps a clearly wrong answer to a non-success `almost` **without displaying “Almost!”**.
- **Only explicit `scoredTargetIds`** update scheduled knowledge. A prompted whole-sentence comprehension may link multiple words while scoring one target. Composite A1 stage capability tasks may have `scoredTargetIds: []`, `knowledgeScoring: false`.
- Required lessons complete when required steps have been visited and all their exercises attempted or marked Not sure; **no perfect-score gate**. Optional Flashcards, Word Match and personal My Words do not clear scheduled due Review or claim unit mastery.
- **All authored educational content remains `needs_review`** until explicit owner approval; external teacher approval is not claimed.
- The sample transit scenarios are fictitious, not real schedules or actual service advice. No map API, audio scoring or new interaction engine is required.

### Realistic time and pacing

Lessons 8.1 and 8.2 introduce five/four transport nouns, while 8.5–8.6 have the heaviest new conceptual distinctions. Natural pause boundaries are specified. Timings are **untested estimates**, not measured durations. Unit 8 is a capstone of existing A1 teaching, **not** an independent CEFR certification.

## Part II — Fully authored lessons

