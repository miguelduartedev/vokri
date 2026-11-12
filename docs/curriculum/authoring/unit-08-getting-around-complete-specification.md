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

## Lesson 8.1 — Bus, train, tram, metro

**Lesson ID:** `lesson.getting-around.bus-train-tram-metro` · `unit.getting-around` · `fi` · Order 1 · **Estimated:** 10–14 minutes (not measured). **Prerequisite:** `lesson.people-and-descriptions.people-review` (Unit 7 completed).  
**Capability:** recognise and name five common transport types. **New production:** `vocab.bussi`, `vocab.juna`, `vocab.raitiovaunu`, `vocab.metro`, `vocab.taksi`. **New recognition:** `vocab.pyora`. **Earlier support:** `vocab.ja`. **Grammar deferred:** transport method cases until 8.5.  
**Completion:** all required steps, including A01–A14, attempted or Not sure; no perfect-score gate. **Resume boundary:** after A05, before longer text-input recall.

### Ordered learner experience

Step IDs: `step.getting-around.bus-train-tram-metro.<suffix>`. Each text is complete; only *Formal encounter* creates a new learning exposure. No numeric route/timetable data is required.

| # | Step suffix | LessonStep type | Exact learner-facing content or exercise reference | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Getting around starts with transport words.** You will learn five common ways people travel. These nouns are useful on signs and in everyday conversations; you'll learn 'by bus' and other transport forms in Lesson 8.5, not yet. | none | Yes |
| 2 | `bus-train-tram` | `vocabulary_intro` | **bussi — bus; juna — train; raitiovaunu — tram/streetcar.** A tram often operates on city-street rails; a train is another kind of rail service. We are learning the transport nouns, not timetables or ticket types yet. | `vocab.bussi`, `vocab.juna`, `vocab.raitiovaunu` | Yes |
| 3 | `metro-taxi` | `vocabulary_intro` | **metro — metro / underground; taksi — taxi.** The Finnish word metro is familiar in spelling; taksi uses ks rather than English x. They are not necessarily available in every town. | `vocab.metro`, `vocab.taksi` | Yes |
| 4 | `practice-01` | `exercise` | A01 | none | Yes |
| 5 | `practice-02` | `exercise` | A02 | none | Yes |
| 6 | `two-mode-examples` | `example_set` | A fictional transport list might show **bussi, juna, raitiovaunu, metro, taksi**. Choose which service is intended by the story. No 'take' verb or case ending is needed for today's recognition. | none | Yes |
| 7 | `practice-03` | `exercise` | A03 | none | Yes |
| 8 | `pyora` | `vocabulary_intro` | **pyörä — bicycle / wheel.** In an everyday transport list, it usually means a bicycle. This is recognition-only; you won't have to spell it or conjugate a cycling verb. | `vocab.pyora` | Yes |
| 9 | `practice-04` | `exercise` | A04 | none | Yes |
| 10 | `practice-05` | `exercise` | A05 | none | Yes |
| 11 | `word-form-notes` | `grammar_explanation` | **Dictionary form first.** A vehicle name like bussi is a lemma; the later form bussilla means travelling by bus. Don't guess transport endings yet. Focus now on recognising and retrieving the five nouns. | none | Yes |
| 12 | `practice-06` | `exercise` | A06 | none | Yes |
| 13 | `practice-07` | `exercise` | A07 | none | Yes |
| 14 | `practice-08` | `exercise` | A08 | none | Yes |
| 15 | `practice-09` | `exercise` | A09 | none | Yes |
| 16 | `practice-10` | `exercise` | A10 | none | Yes |
| 17 | `scenario-recap` | `example_set` | **Travel choice in context:** a tram uses a city-street rail route; a taxi is a hired car; a metro uses a designated metro service. Each example supports the precise meaning without asking about real city routes. | none | Yes |
| 18 | `practice-11` | `exercise` | A11 | none | Yes |
| 19 | `checkpoint` | `checkpoint` | **Lesson checkpoint A12–A14:** identify the transport selected by context, join two nouns without new grammar, and distinguish a train from bus/taxi. No case endings. | none | Yes |

### All complete authored exercises

Each record: `sourceType: original`, `editorialStatus: needs_review`, `reviewedBy: null`, `learningLanguage: fi`; N1 grading and stable shuffled option IDs. First-attempt matching gives per-pair target evidence, not one success for the whole board.

**A01 — `ex.getting-around.bus-train-tram-metro.road-rail-match`** · `matching` · `recognition` · difficulty `foundation`  
**Prompt:** Match each transport noun to its English name.  
**Stimulus:** Three common forms of transport, shown as dictionary words.  
**Matching pairs (3 first-attempt decisions):** **bussi ↔ bus** scoring `vocab.bussi`; **juna ↔ train** scoring `vocab.juna`; **raitiovaunu ↔ tram** scoring `vocab.raitiovaunu`. Shuffle columns independently.  
**Correct feedback:** Bussi is bus, juna is train, and raitiovaunu is tram.  
**Wrong feedback:** A tram is the city street-rail vehicle; a train and bus are different transport words.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** bussi → bus; juna → train; raitiovaunu → tram.  
**Hint:** None. **Linked:** `vocab.bussi`, `vocab.juna`, `vocab.raitiovaunu`. **Scored:** `vocab.bussi`, `vocab.juna`, `vocab.raitiovaunu`. **Review eligible:** false, guided or multi-pair. **Editorial:** `needs_review`.  

**A02 — `ex.getting-around.bus-train-tram-metro.metro-taxi-match`** · `matching` · `recognition` · difficulty `foundation`  
**Prompt:** Match these two additional transport nouns to their names.  
**Stimulus:** The words are metro and taksi.  
**Matching pairs (2 first-attempt decisions):** **metro ↔ metro / underground** scoring `vocab.metro`; **taksi ↔ taxi** scoring `vocab.taksi`. Shuffle columns independently.  
**Correct feedback:** Metro names the metro system; taksi is a taxi.  
**Wrong feedback:** A taxi is a hired car, not a metro service.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** metro → metro; taksi → taxi.  
**Hint:** None. **Linked:** `vocab.metro`, `vocab.taksi`. **Scored:** `vocab.metro`, `vocab.taksi`. **Review eligible:** false, guided or multi-pair. **Editorial:** `needs_review`.  

**A03 — `ex.getting-around.bus-train-tram-metro.tram-recognise`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** Which English transport name corresponds to raitiovaunu?  
**Stimulus:** raitiovaunu, a vehicle typically running on rails along city streets.  
**Options (stable keyed IDs, shuffle visually):** `a` tram · `b` taxi · `c` bus. **Correct:** `a` tram.  
**Wrong option `b`:** Taksi is the taxi word, not raitiovaunu.  
**Wrong option `c`:** Bussi means bus; the vehicle is not a tram.  
**Correct feedback:** Raitiovaunu is a tram, sometimes called a streetcar.  
**Wrong feedback:** A raitiovaunu is a tram; taksi and bussi are different transport nouns.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Raitiovaunu means tram.  
**Hint:** None. **Linked:** `vocab.raitiovaunu`. **Scored:** `vocab.raitiovaunu`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A04 — `ex.getting-around.bus-train-tram-metro.pyora-recognise`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** In a transport list, what does pyörä commonly mean?  
**Stimulus:** pyörä, listed alongside bussi and taksi.  
**Options (stable keyed IDs, shuffle visually):** `a` bicycle · `b` ticket · `c` station. **Correct:** `a` bicycle.  
**Wrong option `b`:** Lippu means ticket in the taught transport sense.  
**Wrong option `c`:** Asema means station, not a bicycle.  
**Correct feedback:** Pyörä commonly means bicycle in a transport context; it can also mean wheel.  
**Wrong feedback:** The transport meaning is bicycle; no Finnish spelling production is required.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Pyörä = bicycle (recognition-only).  
**Hint:** None. **Linked:** `vocab.pyora`. **Scored:** `vocab.pyora`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A05 — `ex.getting-around.bus-train-tram-metro.city-tram-context`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** A city service operates on rails laid along city streets. Which Finnish word best names this tram?  
**Stimulus:** Explicitly a tram, not a long-distance rail train or bus.  
**Options (stable keyed IDs, shuffle visually):** `a` juna · `b` raitiovaunu · `c` bussi. **Correct:** `b` raitiovaunu.  
**Wrong option `a`:** Juna means train; this context explicitly says tram.  
**Wrong option `c`:** Bussi means bus; buses do not need street tram rails.  
**Correct feedback:** Raitiovaunu is the specific tram word.  
**Wrong feedback:** Use raitiovaunu for a tram; juna is a train.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Raitiovaunu.  
**Hint:** None. **Linked:** `vocab.raitiovaunu`, `vocab.juna`, `vocab.bussi`. **Scored:** `vocab.raitiovaunu`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A06 — `ex.getting-around.bus-train-tram-metro.write-bussi`** · `text_input` · `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary noun for bus.  
**Stimulus:** bus  
**Accepted after N1:** `bussi`. Do not accept unlisted dictionary spellings.  
**Correct feedback:** Bussi is bus.  
**Wrong feedback:** Write bussi with two s letters, not taksi or metro.  
**Near feedback:** `busi` → Write the double s in bussi.  
**Not sure:** Write bussi.  
**Hint:** None. **Linked:** `vocab.bussi`. **Scored:** `vocab.bussi`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A07 — `ex.getting-around.bus-train-tram-metro.write-juna`** · `text_input` · `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary noun for train.  
**Stimulus:** train  
**Accepted after N1:** `juna`. Do not accept unlisted dictionary spellings.  
**Correct feedback:** Juna is train.  
**Wrong feedback:** Juna names the train, not metro or tram.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Write juna.  
**Hint:** None. **Linked:** `vocab.juna`. **Scored:** `vocab.juna`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A08 — `ex.getting-around.bus-train-tram-metro.write-raitiovaunu`** · `text_input` · `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary word for tram.  
**Stimulus:** tram / streetcar  
**Accepted after N1:** `raitiovaunu`. Do not accept unlisted dictionary spellings.  
**Correct feedback:** Raitiovaunu is the formal Finnish tram word.  
**Wrong feedback:** Write raitiovaunu as one word. The shorter colloquial ratikka is not a new production target here.  
**Near feedback:** `raitiovaun` → The taught form ends in -vaunu: raitiovaunu.  
**Not sure:** Write raitiovaunu.  
**Hint:** None. **Linked:** `vocab.raitiovaunu`. **Scored:** `vocab.raitiovaunu`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A09 — `ex.getting-around.bus-train-tram-metro.write-metro`** · `text_input` · `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish noun for a metro system.  
**Stimulus:** metro  
**Accepted after N1:** `metro`. Do not accept unlisted dictionary spellings.  
**Correct feedback:** Metro is spelled metro in standard Finnish.  
**Wrong feedback:** Write metro; don't substitute the rail-train noun juna.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Write metro.  
**Hint:** None. **Linked:** `vocab.metro`. **Scored:** `vocab.metro`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A10 — `ex.getting-around.bus-train-tram-metro.write-taksi`** · `text_input` · `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish noun for taxi.  
**Stimulus:** taxi  
**Accepted after N1:** `taksi`. Do not accept unlisted dictionary spellings.  
**Correct feedback:** Taksi is the Finnish spelling of taxi.  
**Wrong feedback:** Write taksi, not English taxi.  
**Near feedback:** `taxi` → Finnish writes this with ks: taksi.  
**Not sure:** Write taksi.  
**Hint:** None. **Linked:** `vocab.taksi`. **Scored:** `vocab.taksi`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A11 — `ex.getting-around.bus-train-tram-metro.metro-in-context`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** A route description explicitly says the journey uses the city's metro service. Which Finnish noun fits?  
**Stimulus:** A designated metro line, rather than a train or taxi.  
**Options (stable keyed IDs, shuffle visually):** `a` taksi · `b` juna · `c` metro. **Correct:** `c` metro.  
**Wrong option `a`:** Taksi is a hired car.  
**Wrong option `b`:** Juna is train; the described service is specifically a metro.  
**Correct feedback:** Metro is the appropriate noun for a metro service.  
**Wrong feedback:** The context names the metro system, so choose metro.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Metro.  
**Hint:** None. **Linked:** `vocab.metro`. **Scored:** `vocab.metro`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A12 — `ex.getting-around.bus-train-tram-metro.taxi-context`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** Someone hires an individual car with a driver instead of using public rail. Which Finnish transport noun fits?  
**Stimulus:** A taxi, not a metro or train.  
**Options (stable keyed IDs, shuffle visually):** `a` taksi · `b` metro · `c` juna. **Correct:** `a` taksi.  
**Wrong option `b`:** Metro is rail transit, not an individually hired car.  
**Wrong option `c`:** Juna is a train.  
**Correct feedback:** Taksi describes the individual taxi service.  
**Wrong feedback:** A hired taxi car is taksi.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Taksi.  
**Hint:** None. **Linked:** `vocab.taksi`. **Scored:** `vocab.taksi`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**A13 — `ex.getting-around.bus-train-tram-metro.bus-train-joined`** · `token_build` · `controlled_construction` · difficulty `controlled`  
**Prompt:** Use the three supplied tiles to write 'bus and train' in Finnish.  
**Stimulus:** A simple noun phrase using the earlier Unit 1 conjunction ja.  
**Shuffled lexical tiles:** `juna`, `ja`, `bussi`. **Accepted complete sequences:** `bussi ja juna`, `juna ja bussi`. Tokens are provided; this is guided construction, not independent spelling.  
**Correct feedback:** Bussi ja juna joins two familiar nouns using ja; either order is possible.  
**Wrong feedback:** Place ja between the two transport words.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** bussi ja juna.  
**Hint:** None. **Linked:** `vocab.bussi`, `vocab.juna`, `vocab.ja`. **Scored:** none. **Review eligible:** false, guided or multi-pair. **Editorial:** `needs_review`.  

**A14 — `ex.getting-around.bus-train-tram-metro.train-sign`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** A station sign is labelled JUNAT (trains). Which taught singular transport noun is the dictionary form?  
**Stimulus:** The English context identifies trains. The plural sign itself is recognition context only.  
**Options (stable keyed IDs, shuffle visually):** `a` juna · `b` bussi · `c` taksi. **Correct:** `a` juna.  
**Wrong option `b`:** Bussi means bus, not train.  
**Wrong option `c`:** Taksi means taxi.  
**Correct feedback:** Juna is the singular dictionary noun for train; no productive plural is required.  
**Wrong feedback:** The noun for a train is juna.  
**Near feedback:** None; do not invent a near evaluation.  
**Not sure:** Juna.  
**Hint:** None. **Linked:** `vocab.juna`. **Scored:** `vocab.juna`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Transport words you can recognise.” **Copy:** “You can name a bus, train, tram, metro and taxi in Finnish. Next, you'll learn the places and tickets connected with journeys.” **Required steps:** 19; **required exercises:** 14; **matching pair decisions:** 5. No assertion of real transit service availability, case mastery, or permanent recall. **Next:** 8.2 Stops, stations and tickets.

## Lesson 8.2 — Stops, stations and tickets

**Lesson ID:** `lesson.getting-around.stops-stations-tickets` · `unit.getting-around` · `fi` · Order 2 · **Estimated:** 10–16 minutes (untested). **Prerequisite:** Lesson 8.1.  
**Capability:** identify a station, stop, ticket and route and independently ask where a station is. **New production:** `vocab.asema`, `vocab.pysakki`, `vocab.lippu`, `vocab.reitti`. **New recognition:** `vocab.matkalippu`, `vocab.laituri`. **New phrase production:** `phrase.getting-around.missa-asema-on`. **New fixed recognition:** `phrase.getting-around.minne-tama-bussi-menee`. **Review:** Unit 4 missä/minne and earlier bussi.  
**Completion:** all required steps and B01–B16 attempted or Not sure, no perfection gate. **Pause:** after B10 before two distinct question types.

### Ordered learner experience

Full step IDs: `step.getting-around.stops-stations-tickets.<suffix>`. Only formal introductions add new learning records. Questions are fixed patterns, not an inferred person-conjugation paradigm.

| # | Step suffix | LessonStep type | Exact learner-facing copy / exercise | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Stops, stations and tickets.** Knowing the vehicle is useful; now learn the place where it stops and the ticket/route words that appear in simple journey information. We use generic examples, not actual live departure times. | none | Yes |
| 2 | `station-stop` | `vocabulary_intro` | **asema — station; pysäkki — stop.** A railway station is commonly an asema; a roadside bus stop is a pysäkki. These words can overlap in specific compound names, so don't treat them as an absolute size rule. | `vocab.asema`, `vocab.pysakki` | Yes |
| 3 | `ticket-route` | `vocabulary_intro` | **lippu — ticket** (in this travel context); **reitti — route** (the path of a service). Lippu can have other meanings elsewhere, but today we're discussing travel. | `vocab.lippu`, `vocab.reitti` | Yes |
| 4 | `practice-01` | `exercise` | B01 | none | Yes |
| 5 | `practice-02` | `exercise` | B02 | none | Yes |
| 6 | `practice-03` | `exercise` | B03 | none | Yes |
| 7 | `practice-04` | `exercise` | B04 | none | Yes |
| 8 | `travel-ticket` | `vocabulary_intro` | Recognition-only: **matkalippu — travel ticket**. You can understand it on a sign or in a message; the shorter lippu is your production word. | `vocab.matkalippu` | Yes |
| 9 | `practice-05` | `exercise` | B05 | none | Yes |
| 10 | `platform` | `vocabulary_intro` | Recognition-only: **laituri — platform** at a railway station, or pier in another context. The train context tells us which meaning is intended. No location-case inflection is required. | `vocab.laituri` | Yes |
| 11 | `practice-06` | `exercise` | B06 | none | Yes |
| 12 | `practice-07` | `exercise` | B07 | none | Yes |
| 13 | `practice-08` | `exercise` | B08 | none | Yes |
| 14 | `practice-09` | `exercise` | B09 | none | Yes |
| 15 | `practice-10` | `exercise` | B10 | none | Yes |
| 16 | `ask-station` | `phrase_intro` | **Missä asema on?** — Where is the station? This is a useful question with **missä** from Unit 4. The variant **Missä on asema?** is also natural, and a polite speaker may begin with **Anteeksi** (sorry/excuse me). | `phrase.getting-around.missa-asema-on` | Yes |
| 17 | `practice-11` | `exercise` | B11 | none | Yes |
| 18 | `practice-12` | `exercise` | B12 | none | Yes |
| 19 | `bus-question` | `phrase_intro` | **Minne tämä bussi menee?** — Where does this bus go? Learn this **as a complete recognition-first question**. The form menee is a third-person form; you do not need to conjugate other Finnish verbs to ask it. | `phrase.getting-around.minne-tama-bussi-menee` | Yes |
| 20 | `practice-13` | `exercise` | B13 | none | Yes |
| 21 | `checkpoint` | `checkpoint` | **Lesson checkpoint B14–B16:** independently ask where a station is, interpret a platform reference and choose the correct question for a station-versus-destination situation. | none | Yes |
| 22 | `question-contrast` | `example_set` | **Missä asema on?** asks about the station's location. **Minne tämä bussi menee?** asks about a bus's destination. They use familiar missä/minne but ask different things. | none | Yes |

### All complete authored exercises

Records are `sourceType: original`, `editorialStatus: needs_review` and `learningLanguage: fi`, using N1 accepted-answer rules and option-specific feedback. A recognition-only phrase cannot imply the full productive third-person verb rule.

**B01 — `ex.getting-around.stops-stations-tickets.stop-station-match`** · `matching` · `recognition` · difficulty `foundation`  
**Prompt:** Match two transport places to their basic meanings.  
**Stimulus:** This exercise is a typical stop versus station context, not an absolute rule for all facilities.  
**Matching pairs (2 first-attempt decisions):** **asema ↔ station** scoring `vocab.asema`; **pysäkki ↔ stop** scoring `vocab.pysakki`. Independent column shuffle.  
**Correct feedback:** Asema is station, pysäkki is a stop.  
**Wrong feedback:** A station may be a larger facility; a pysäkki is a stop. Real facilities can overlap.  
**Near feedback:** None.  
**Not sure:** asema → station; pysäkki → stop.  
**Hint:** None. **Linked:** `vocab.asema`, `vocab.pysakki`. **Scored:** `vocab.asema`, `vocab.pysakki`. **Review eligible:** false, matching/guided. **Editorial:** `needs_review`.  

**B02 — `ex.getting-around.stops-stations-tickets.ticket-route-match`** · `matching` · `recognition` · difficulty `foundation`  
**Prompt:** Match the travel ticket and route words to their meanings.  
**Stimulus:** Ticket as proof of travel and route as the path a service takes.  
**Matching pairs (2 first-attempt decisions):** **lippu ↔ ticket** scoring `vocab.lippu`; **reitti ↔ route** scoring `vocab.reitti`. Independent column shuffle.  
**Correct feedback:** Lippu is a ticket here; reitti is a route.  
**Wrong feedback:** A ticket is something you use for travel; a route describes where travel goes.  
**Near feedback:** None.  
**Not sure:** lippu → ticket; reitti → route.  
**Hint:** None. **Linked:** `vocab.lippu`, `vocab.reitti`. **Scored:** `vocab.lippu`, `vocab.reitti`. **Review eligible:** false, matching/guided. **Editorial:** `needs_review`.  

**B03 — `ex.getting-around.stops-stations-tickets.bus-stop-context`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** You are waiting at a typical bus stop. Which new Finnish word names that stop?  
**Stimulus:** A roadside bus stop rather than the whole station building.  
**Options (stable IDs, shuffle visually):** `a` asema · `b` pysäkki · `c` reitti. **Correct:** `b` pysäkki.  
**Wrong option `a`:** Asema names a station; the context specifically says a roadside stop.  
**Wrong option `c`:** Reitti is the route, not the place to wait.  
**Correct feedback:** Pysäkki is the stop where you wait for a bus.  
**Wrong feedback:** Use pysäkki for this specific stop context, not asema or reitti.  
**Near feedback:** None.  
**Not sure:** Pysäkki.  
**Hint:** None. **Linked:** `vocab.pysakki`, `vocab.asema`. **Scored:** `vocab.pysakki`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B04 — `ex.getting-around.stops-stations-tickets.ticket-context`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** What does lippu mean in this transport context?  
**Stimulus:** A person needs a valid lippu before travelling.  
**Options (stable IDs, shuffle visually):** `a` ticket · `b` road · `c` stop. **Correct:** `a` ticket.  
**Wrong option `b`:** Tie is road and is introduced in the next lesson.  
**Wrong option `c`:** Pysäkki is a stop, not a ticket.  
**Correct feedback:** Lippu is ticket in this travel context. The word has other meanings elsewhere.  
**Wrong feedback:** Lippu means ticket here, not road or stop.  
**Near feedback:** None.  
**Not sure:** Lippu means ticket here.  
**Hint:** None. **Linked:** `vocab.lippu`. **Scored:** `vocab.lippu`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B05 — `ex.getting-around.stops-stations-tickets.matkalippu`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** What is a matkalippu?  
**Stimulus:** matkalippu in a travel information display (recognition only)  
**Options (stable IDs, shuffle visually):** `a` travel ticket · `b` train platform · `c` taxi. **Correct:** `a` travel ticket.  
**Wrong option `b`:** Laituri means platform/pier in appropriate contexts.  
**Wrong option `c`:** Taksi means taxi.  
**Correct feedback:** Matkalippu is a travel ticket; lippu is the more general ticket noun.  
**Wrong feedback:** The word describes a travel ticket. You do not need to type it in Finnish.  
**Near feedback:** None.  
**Not sure:** Matkalippu means travel ticket.  
**Hint:** None. **Linked:** `vocab.matkalippu`, `vocab.lippu`. **Scored:** `vocab.matkalippu`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B06 — `ex.getting-around.stops-stations-tickets.laituri`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** At a railway station, what can laituri mean?  
**Stimulus:** A sign names a train's laituri.  
**Options (stable IDs, shuffle visually):** `a` a platform · `b` a bus ticket · `c` a taxi. **Correct:** `a` a platform.  
**Wrong option `b`:** Ticket is lippu / matkalippu, not laituri.  
**Wrong option `c`:** Taxi is taksi, not laituri.  
**Correct feedback:** Laituri is a train platform in this context. It can mean a pier elsewhere.  
**Wrong feedback:** At a railway station, laituri refers to a platform.  
**Near feedback:** None.  
**Not sure:** Laituri → platform (train context).  
**Hint:** None. **Linked:** `vocab.laituri`, `vocab.asema`. **Scored:** `vocab.laituri`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B07 — `ex.getting-around.stops-stations-tickets.write-asema`** · `text_input` · `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary word for station.  
**Stimulus:** station (generic transport context)  
**Accepted N1:** `asema`. No invented grammatical variants.  
**Correct feedback:** Asema is station.  
**Wrong feedback:** Write asema, not pysäkki (stop).  
**Near feedback:** None.  
**Not sure:** Write asema.  
**Hint:** None. **Linked:** `vocab.asema`. **Scored:** `vocab.asema`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B08 — `ex.getting-around.stops-stations-tickets.write-pysakki`** · `text_input` · `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish noun for a stop.  
**Stimulus:** stop (bus stop context)  
**Accepted N1:** `pysäkki`. No invented grammatical variants.  
**Correct feedback:** Pysäkki names a stop.  
**Wrong feedback:** The noun has ä and a double k: pysäkki.  
**Near feedback:** `pysakki` → The first vowel is ä: pysäkki.; `pysäki` → Pysäkki has a double k.  
**Not sure:** Write pysäkki.  
**Hint:** None. **Linked:** `vocab.pysakki`. **Scored:** `vocab.pysakki`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B09 — `ex.getting-around.stops-stations-tickets.write-lippu`** · `text_input` · `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word for a transport ticket.  
**Stimulus:** ticket (travel meaning)  
**Accepted N1:** `lippu`. No invented grammatical variants.  
**Correct feedback:** Lippu means ticket here.  
**Wrong feedback:** Use lippu with two p letters.  
**Near feedback:** `lipu` → There are two p letters: lippu.  
**Not sure:** Write lippu.  
**Hint:** None. **Linked:** `vocab.lippu`. **Scored:** `vocab.lippu`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B10 — `ex.getting-around.stops-stations-tickets.write-reitti`** · `text_input` · `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word for a transport route.  
**Stimulus:** route — the path that a service follows  
**Accepted N1:** `reitti`. No invented grammatical variants.  
**Correct feedback:** Reitti is a route.  
**Wrong feedback:** Write reitti; a route is not a ticket or station.  
**Near feedback:** `reiti` → Write both t letters: reitti.  
**Not sure:** Write reitti.  
**Hint:** None. **Linked:** `vocab.reitti`. **Scored:** `vocab.reitti`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B11 — `ex.getting-around.stops-stations-tickets.station-question-meaning`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** What does Missä asema on? ask?  
**Stimulus:** Missä asema on?  
**Options (stable IDs, shuffle visually):** `a` Where is the station? · `b` Where is this bus going? · `c` Do you have a ticket?. **Correct:** `a` Where is the station?.  
**Wrong option `b`:** A bus destination is asked using a different question starting with minne.  
**Wrong option `c`:** Lippu concerns a ticket; the sentence asks about asema.  
**Correct feedback:** Missä asema on? asks where the station is.  
**Wrong feedback:** Missä indicates a location; asema is station.  
**Near feedback:** None.  
**Not sure:** Where is the station?  
**Hint:** None. **Linked:** `phrase.getting-around.missa-asema-on`, `vocab.asema`, `vocab.missa`. **Scored:** `phrase.getting-around.missa-asema-on`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B12 — `ex.getting-around.stops-stations-tickets.build-station-question`** · `token_build` · `controlled_construction` · difficulty `contextual`  
**Prompt:** Arrange the three supplied tiles into the taught question 'Where is the station?'.  
**Stimulus:** The question uses words already taught, now as a useful complete expression.  
**Shuffled lexical tiles:** `on`, `missä`, `asema`. **Accepted complete sequence:** `Missä asema on?`. The renderer capitalises the first assembled word.  
**Correct feedback:** Missä asema on? is a complete and natural station question.  
**Wrong feedback:** Use Missä at the beginning, then asema and on.  
**Near feedback:** None.  
**Not sure:** Missä asema on?  
**Hint:** None. **Linked:** `phrase.getting-around.missa-asema-on`, `vocab.asema`. **Scored:** none. **Review eligible:** false, matching/guided. **Editorial:** `needs_review`.  

**B13 — `ex.getting-around.stops-stations-tickets.where-bus-goes`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** Which English question matches Minne tämä bussi menee?  
**Stimulus:** Minne tämä bussi menee? (fixed recognition phrase; no new third-person verb table)  
**Options (stable IDs, shuffle visually):** `a` Where does this bus go? · `b` Where is the station? · `c` Where can I buy a ticket?. **Correct:** `a` Where does this bus go?.  
**Wrong option `b`:** Missä asema on? is the station question.  
**Wrong option `c`:** Lippu would refer to ticket; this asks about the bus destination.  
**Correct feedback:** Minne tämä bussi menee? asks the bus's destination; menee is a fixed third-person form here.  
**Wrong feedback:** Minne asks where to; this phrase asks where the bus goes.  
**Near feedback:** None.  
**Not sure:** Where does this bus go?  
**Hint:** None. **Linked:** `phrase.getting-around.minne-tama-bussi-menee`, `vocab.bussi`, `vocab.minne`. **Scored:** `phrase.getting-around.minne-tama-bussi-menee`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B14 — `ex.getting-around.stops-stations-tickets.independent-station-question`** · `text_input` · `controlled_production` · difficulty `contextual`  
**Prompt:** Without seeing Finnish words, type the taught question 'Where is the station?'.  
**Stimulus:** Where is the station?  
**Accepted N1:** `Missä asema on?`, `Missä on asema?`. No invented grammatical variants.  
**Correct feedback:** Missä asema on? is the main taught form; Missä on asema? is also natural.  
**Wrong feedback:** Use missä, asema and on. The question asks a location, not a destination.  
**Near feedback:** `Missa asema on?` → Write ä in missä.; `Minne asema on?` → Minne means where to; the question asks where the station is.  
**Not sure:** Write Missä asema on?  
**Hint:** None. **Linked:** `phrase.getting-around.missa-asema-on`, `vocab.asema`, `vocab.missa`. **Scored:** `phrase.getting-around.missa-asema-on`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B15 — `ex.getting-around.stops-stations-tickets.station-platform-distinction`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** A railway ticket shows which laituri to use. What are you looking for?  
**Stimulus:** The train's numbered platform at a station; the noun laituri is supplied.  
**Options (stable IDs, shuffle visually):** `a` the platform · `b` the city bus route · `c` the ticket price. **Correct:** `a` the platform.  
**Wrong option `b`:** Reitti is a route, not a train platform.  
**Wrong option `c`:** The noun laituri describes the platform, not the fare.  
**Correct feedback:** At a railway station, laituri is a platform.  
**Wrong feedback:** This is the place to board a train, not the route or price.  
**Near feedback:** None.  
**Not sure:** The train platform.  
**Hint:** None. **Linked:** `vocab.laituri`, `vocab.asema`. **Scored:** `vocab.laituri`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**B16 — `ex.getting-around.stops-stations-tickets.which-question`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** You are lost and need the location of a station, not a bus's destination. Which Finnish question should you use?  
**Stimulus:** The station is somewhere nearby; you need to know where.  
**Options (stable IDs, shuffle visually):** `a` Minne tämä bussi menee? · `b` Missä asema on? · `c` Menen keskustaan.. **Correct:** `b` Missä asema on?.  
**Wrong option `a`:** This asks where the bus goes, not where the station is.  
**Wrong option `c`:** This says you are going downtown; it isn't a question.  
**Correct feedback:** Missä asema on? asks for the station's location.  
**Wrong feedback:** Use the missä question to ask where a station is.  
**Near feedback:** None.  
**Not sure:** Missä asema on?  
**Hint:** None. **Linked:** `phrase.getting-around.missa-asema-on`, `phrase.getting-around.minne-tama-bussi-menee`. **Scored:** `phrase.getting-around.missa-asema-on`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “You can ask for the station.” **Copy:** “You know words for station, stop, ticket and route, and you can ask where a station is. Next you'll learn how to describe a destination downtown.” **Required steps:** 22; **exercises:** 16; **matching pair decisions:** 4. No assumption that every stop is a full station. **Next:** 8.3 Around the city.

## Lesson 8.3 — Around the city

**Lesson ID:** `lesson.getting-around.around-the-city` · `unit.getting-around` · `fi` · Order 3 · **Estimated:** 11–16 minutes (untested). **Prerequisite:** Lesson 8.2 and Unit 4's location/destination introduction.  
**Capability:** name city, centre, road and journey; independently say you are going downtown. **New production:** `vocab.kaupunki`, `vocab.keskusta`, `vocab.tie`, `vocab.matka`. **New recognition:** `vocab.lento`, `vocab.lentokentta`. **New grammar:** `grammar.getting-around.location-destination`; **phrase:** `phrase.getting-around.menen-keskustaan`. **Earlier review:** `minne`, `mennä`, `kauppaan`, `kotiin`, `pitkä`.  
**Completion:** required steps and C01–C16 attempted/Not sure. **Pause:** after C09 before the taught keskustaan form. No universal destination conjugator.

### Ordered learner experience

Full IDs: `step.getting-around.around-the-city.<suffix>`. The future source form `keskustasta` is recognition context only, not independently assessed before Lesson 8.5.

| # | Step suffix | Step type | Exact learner-facing content or exercise | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Around the city.** A city has a centre, roads and many possible routes. You already know how to ask where someone is going; now you can say a precise destination: downtown. | none | Yes |
| 2 | `city-centre` | `vocabulary_intro` | **kaupunki — city; keskusta — the city centre/downtown.** The city and its central area aren't exactly the same thing. Learn both dictionary nouns first. | `vocab.kaupunki`, `vocab.keskusta` | Yes |
| 3 | `practice-01` | `exercise` | C01 | none | Yes |
| 4 | `road-journey` | `vocabulary_intro` | **tie — road/way; matka — trip/journey.** Reitti from the previous lesson means a route (the path planned), not necessarily one physical road or one person's trip. | `vocab.tie`, `vocab.matka` | Yes |
| 5 | `practice-02` | `exercise` | C02 | none | Yes |
| 6 | `flight-airport` | `vocabulary_intro` | Recognition only: **lento — flight; lentokenttä — airport.** You might see these in travel information, but spelling them in Finnish and explaining aircraft operations are outside this lesson. | `vocab.lento`, `vocab.lentokentta` | Yes |
| 7 | `practice-03` | `exercise` | C03 | none | Yes |
| 8 | `practice-04` | `exercise` | C04 | none | Yes |
| 9 | `practice-05` | `exercise` | C05 | none | Yes |
| 10 | `practice-06` | `exercise` | C06 | none | Yes |
| 11 | `practice-07` | `exercise` | C07 | none | Yes |
| 12 | `practice-08` | `exercise` | C08 | none | Yes |
| 13 | `practice-09` | `exercise` | C09 | none | Yes |
| 14 | `destination-form` | `grammar_explanation` | **keskusta → keskustaan**. Finnish often changes a place word when you move **to** it. **Menen keskustaan.** — I'm going to the city centre. This is one authored destination form; don't guess the ending of every other place noun. You already know **Menen kauppaan** and **Menen kotiin** from Unit 4. | `grammar.getting-around.location-destination` | Yes |
| 15 | `downtown-phrase` | `phrase_intro` | **Menen keskustaan.** — I'm going downtown. This is productive as one useful practical sentence. You already know menen; the new part is the exact form keskustaan. | `phrase.getting-around.menen-keskustaan` | Yes |
| 16 | `practice-10` | `exercise` | C10 | none | Yes |
| 17 | `practice-11` | `exercise` | C11 | none | Yes |
| 18 | `practice-12` | `exercise` | C12 | none | Yes |
| 19 | `checkpoint` | `checkpoint` | **Lesson checkpoint C13–C16:** independently produce a downtown destination, understand the previously taught Minne menet? question, distinguish where someone already is and reuse an earlier adjective for a new road. | none | Yes |
| 20 | `location-contrast` | `example_set` | **Menen keskustaan** — I go *to* the city centre. **Olen keskustassa** — I'm *in* the city centre. **Tulen keskustasta** — I come *from* the centre (recognition of this source form will be taught in 8.5). Don't treat location, destination and origin as interchangeable. | none | Yes |
| 21 | `unit4-review` | `example_set` | **Minne menet?** — Where are you going? This is REVIEW from Unit 4, not a new first-time phrase. **Menen kauppaan.** and **Menen kotiin.** are earlier authored destination examples. The centre forms extend the same practical distinction. | none | Yes |

### All complete authored exercises

Use unchanged N1, explicit accepted strings and per-option feedback. Do not rewrite Unit 4's lesson or emit new encounters for Unit 4 words; the new authored destination is a form of `vocab.keskusta`.

**C01 — `ex.getting-around.around-the-city.city-centre-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the city noun and the city-centre noun to their meanings.  
**Stimulus:** A whole city is not exactly the same as the central part of a city.  
**Matching pairs (2 first-attempt decisions):** **kaupunki ↔ city** scoring `vocab.kaupunki`; **keskusta ↔ city centre / downtown** scoring `vocab.keskusta`. Separate columns shuffled independently.  
**Correct feedback:** Kaupunki is the city; keskusta is its centre/downtown.  
**Wrong feedback:** Keskusta refers to a particular central area, not the entire kaupunki.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** kaupunki = city; keskusta = city centre.  
**Hint:** None. **Linked:** `vocab.kaupunki`, `vocab.keskusta`. **Scored:** `vocab.kaupunki`, `vocab.keskusta`. **Review eligible:** false, guided board/tiles. **Editorial:** `needs_review`.  

**C02 — `ex.getting-around.around-the-city.road-trip-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the word for a road with the word for a trip.  
**Stimulus:** A physical road is not the same as a journey made along it.  
**Matching pairs (2 first-attempt decisions):** **tie ↔ road** scoring `vocab.tie`; **matka ↔ trip / journey** scoring `vocab.matka`. Separate columns shuffled independently.  
**Correct feedback:** Tie is a road; matka is a journey or trip.  
**Wrong feedback:** The road is the physical way; a journey is the event of travelling.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** tie = road; matka = journey.  
**Hint:** None. **Linked:** `vocab.tie`, `vocab.matka`. **Scored:** `vocab.tie`, `vocab.matka`. **Review eligible:** false, guided board/tiles. **Editorial:** `needs_review`.  

**C03 — `ex.getting-around.around-the-city.lento-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which English noun corresponds to lento in a travel listing?  
**Stimulus:** lento, recognition only  
**Options (stable IDs):** `a` flight · `b` city centre · `c` route. **Correct:** `a` flight. Shuffle visually.  
**Wrong option `b`:** Keskusta means city centre.  
**Wrong option `c`:** Reitti is a route, which a flight may follow but is not the same noun.  
**Correct feedback:** Lento is a flight.  
**Wrong feedback:** The noun lento means flight; no new verb tense is involved.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Lento → flight.  
**Hint:** None. **Linked:** `vocab.lento`. **Scored:** `vocab.lento`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C04 — `ex.getting-around.around-the-city.airport-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does lentokenttä mean in a travel notice?  
**Stimulus:** lentokenttä, recognition only  
**Options (stable IDs):** `a` a bus stop · `b` an airport · `c` a ticket. **Correct:** `b` an airport. Shuffle visually.  
**Wrong option `a`:** A bus stop is a pysäkki.  
**Wrong option `c`:** A ticket is lippu or matkalippu.  
**Correct feedback:** Lentokenttä means airport.  
**Wrong feedback:** Lentokenttä names an airport, not a stop or ticket.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Lentokenttä is airport.  
**Hint:** None. **Linked:** `vocab.lentokentta`. **Scored:** `vocab.lentokentta`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C05 — `ex.getting-around.around-the-city.route-versus-road`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** A transit app shows the sequence of stops a service follows. Which Finnish noun most precisely names this planned route?  
**Stimulus:** The *path of a transport service*, rather than a single physical street.  
**Options (stable IDs):** `a` tie · `b` reitti · `c` matka. **Correct:** `b` reitti. Shuffle visually.  
**Wrong option `a`:** Tie is a road, which might form part of a route but is not the whole route plan.  
**Wrong option `c`:** Matka is a trip or journey, rather than specifically a mapped service route.  
**Correct feedback:** Reitti is a route; tie is a road and matka is a journey.  
**Wrong feedback:** Choose reitti for the route plan, not one road or an individual trip.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Reitti.  
**Hint:** None. **Linked:** `vocab.reitti`, `vocab.tie`, `vocab.matka`. **Scored:** `vocab.reitti`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C06 — `ex.getting-around.around-the-city.write-city`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary noun for a city.  
**Stimulus:** city, not city centre  
**Accepted after N1:** `kaupunki`. No unapproved inflections.  
**Correct feedback:** Kaupunki means city.  
**Wrong feedback:** Use kaupunki; keskusta means the city's centre.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Write kaupunki.  
**Hint:** None. **Linked:** `vocab.kaupunki`. **Scored:** `vocab.kaupunki`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C07 — `ex.getting-around.around-the-city.write-centre`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary word for city centre / downtown.  
**Stimulus:** city centre (dictionary noun)  
**Accepted after N1:** `keskusta`. No unapproved inflections.  
**Correct feedback:** Keskusta is the city centre; later you'll use keskustaan for a destination.  
**Wrong feedback:** Write keskusta. The directional form keskustaan is not the requested dictionary noun.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Write keskusta.  
**Hint:** None. **Linked:** `vocab.keskusta`. **Scored:** `vocab.keskusta`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C08 — `ex.getting-around.around-the-city.write-road`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary noun for road.  
**Stimulus:** road / way (physical road)  
**Accepted after N1:** `tie`. No unapproved inflections.  
**Correct feedback:** Tie means road.  
**Wrong feedback:** Write tie, not reitti (route) or matka (journey).  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Write tie.  
**Hint:** None. **Linked:** `vocab.tie`. **Scored:** `vocab.tie`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C09 — `ex.getting-around.around-the-city.write-trip`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word for a journey or trip.  
**Stimulus:** trip / journey  
**Accepted after N1:** `matka`. No unapproved inflections.  
**Correct feedback:** Matka is journey or trip.  
**Wrong feedback:** Use matka for the journey, not tie (road).  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Write matka.  
**Hint:** None. **Linked:** `vocab.matka`. **Scored:** `vocab.matka`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C10 — `ex.getting-around.around-the-city.downtown-movement-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does Menen keskustaan. mean?  
**Stimulus:** Menen keskustaan.  
**Options (stable IDs):** `a` I'm in the city centre. · `b` I'm going downtown. · `c` I'm coming from the city centre.. **Correct:** `b` I'm going downtown.. Shuffle visually.  
**Wrong option `a`:** Olen keskustassa would express being in the city centre.  
**Wrong option `c`:** Tulen keskustasta would express coming from the city centre.  
**Correct feedback:** Menen keskustaan says I'm going downtown, using a finite destination form.  
**Wrong feedback:** The form keskustaan signals going towards the city centre.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** I'm going downtown.  
**Hint:** None. **Linked:** `phrase.getting-around.menen-keskustaan`, `vocab.keskusta`, `vocab.menna`. **Scored:** `phrase.getting-around.menen-keskustaan`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C11 — `ex.getting-around.around-the-city.keskustaan-form`** · `multiple_choice` · intent `grammar` · difficulty `contextual`  
**Prompt:** Which of these explicitly taught forms fits movement *to* the city centre?  
**Stimulus:** Menen _____. — I'm going downtown.  
**Options (stable IDs):** `a` keskustassa · `b` keskusta · `c` keskustaan. **Correct:** `c` keskustaan. Shuffle visually.  
**Wrong option `a`:** Keskustassa is a recognised location form meaning in the centre.  
**Wrong option `b`:** Keskusta is the dictionary noun, not the taught destination expression.  
**Correct feedback:** Keskustaan is the authored destination form.  
**Wrong feedback:** For this specific noun, the taught destination is keskustaan.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** keskustaan.  
**Hint:** None. **Linked:** `vocab.keskusta`, `grammar.getting-around.location-destination`. **Scored:** `grammar.getting-around.location-destination`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C12 — `ex.getting-around.around-the-city.build-downtown`** · `token_build` · intent `controlled_construction` · difficulty `contextual`  
**Prompt:** Arrange the two supplied tiles to say 'I'm going downtown'.  
**Stimulus:** You know menen from Unit 3, and keskustaan is the new taught destination.  
**Shuffled lowercase lexical tiles:** `keskustaan`, `menen`. **Accepted sentence:** `Menen keskustaan.`. The first assembled word is capitalised by the renderer.  
**Correct feedback:** Menen keskustaan. expresses a movement towards the city centre.  
**Wrong feedback:** Start with menen (I go), then use keskustaan (downtown as destination).  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Menen keskustaan.  
**Hint:** None. **Linked:** `vocab.keskusta`, `vocab.menna`, `grammar.getting-around.location-destination`. **Scored:** `grammar.getting-around.location-destination`. **Review eligible:** false, guided board/tiles. **Editorial:** `needs_review`.  

**C13 — `ex.getting-around.around-the-city.independent-downtown`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Without seeing any Finnish word choices, type 'I'm going downtown'.  
**Stimulus:** I am going to the city centre. Use the taught destination form.  
**Accepted after N1:** `Menen keskustaan.`, `Minä menen keskustaan.`. No unapproved inflections.  
**Correct feedback:** Menen keskustaan. is the intended independently retrieved destination sentence.  
**Wrong feedback:** The Finnish sentence is Menen keskustaan, not Menen keskusta.  
**Near feedback:** `Menen keskusta` → Use the taught destination form keskustaan.; `Menen keskustassa` → Keskustassa means in the centre; movement to the centre needs keskustaan.  
**Not sure:** Write Menen keskustaan.  
**Hint:** None. **Linked:** `phrase.getting-around.menen-keskustaan`, `vocab.keskusta`, `vocab.menna`. **Scored:** `phrase.getting-around.menen-keskustaan`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C14 — `ex.getting-around.around-the-city.minne-review`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does the previously taught question Minne menet? ask?  
**Stimulus:** Minne menet? (review from Unit 4)  
**Options (stable IDs):** `a` Where are you? · `b` Where are you going? · `c` Where did you go yesterday?. **Correct:** `b` Where are you going?. Shuffle visually.  
**Wrong option `a`:** Missä asks about location; minne asks destination.  
**Wrong option `c`:** The taught present-tense question does not ask about yesterday or require past tense.  
**Correct feedback:** Minne menet? asks where someone is going.  
**Wrong feedback:** Minne asks where to, not simply where.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Where are you going?  
**Hint:** None. **Linked:** `vocab.minne`, `vocab.menna`. **Scored:** `grammar.getting-around.location-destination`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C15 — `ex.getting-around.around-the-city.in-or-to-centre`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Which Finnish sentence describes being *in* downtown, without travelling towards it?  
**Stimulus:** You are already in the city centre; this is a location, not a destination.  
**Options (stable IDs):** `a` Menen keskustaan. · `b` Olen keskustassa. · `c` Tulen keskustasta.. **Correct:** `b` Olen keskustassa.. Shuffle visually.  
**Wrong option `a`:** Menen keskustaan says I am going to the centre.  
**Wrong option `c`:** Tulen keskustasta says I am coming from the centre.  
**Correct feedback:** Olen keskustassa. uses a finite location form, not a movement destination.  
**Wrong feedback:** Being in downtown is Olen keskustassa, not Menen keskustaan.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Olen keskustassa.  
**Hint:** None. **Linked:** `vocab.keskusta`, `grammar.getting-around.location-destination`, `vocab.olla`. **Scored:** `grammar.getting-around.location-destination`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**C16 — `ex.getting-around.around-the-city.long-road`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Write 'The road is long' using the Unit 7 adjective pitkä.  
**Stimulus:** A fictional physical road; tie is new and pitkä was taught in Unit 7 as tall/long by context.  
**Accepted after N1:** `Tie on pitkä.`. No unapproved inflections.  
**Correct feedback:** Tie on pitkä. reuses the familiar singular adjective to describe a road.  
**Wrong feedback:** Use tie for road and pitkä for long: Tie on pitkä.  
**Near feedback:** `Tie on pitka` → Pitkä ends with ä.  
**Not sure:** Write Tie on pitkä.  
**Hint:** None. **Linked:** `vocab.tie`, `vocab.pitka`, `grammar.people.predicative-singular`. **Scored:** `vocab.tie`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “I'm going downtown.” **Copy:** “You can name the city and its centre and say Menen keskustaan using a taught destination form.” **Required steps:** 21; **required exercises:** 16; **matching decisions:** 4. The learner is not yet independently generating any place's destination case. **Next:** 8.4 Here, there and where to.

## Lesson 8.4 — Here, there and where to

**Lesson ID:** `lesson.getting-around.here-there-where-to` · `unit.getting-around` · `fi` · Order 4 · **Estimated:** 9–14 minutes (untested). **Prerequisite:** Lesson 8.3 and Unit 4's täällä/siellä, missä/minne.  
**Capability:** distinguish being here/there from moving here/there. **New production:** `vocab.tanne`, `vocab.sinne`. **New fixed recognition:** `phrase.getting-around.tule-tanne`. **Grammar concept:** `grammar.getting-around.here-there-movement`. **Review:** `vocab.taalla`, `vocab.siella`, `vocab.minne`, `vocab.missa`, `vocab.menna`, `vocab.tulla`.  
**Completion:** required steps and D01–D15 attempted or Not sure. **Pause:** after D06 before typing the new adverbs. No imperative conjugation table.

### Ordered learner experience

Every step has stable ID `step.getting-around.here-there-where-to.<suffix>`. Earlier location words are review, not newly encountered lemmas. The fixed recognition-only command is introduced before assessment.

| # | Step suffix | LessonStep type | Exact learner-facing content or exercise | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Here and there can describe two different things.** You already know *täällä* and *siellä* as places. Now learn *tänne* and *sinne* for moving towards those places, using familiar verbs like menen. | none | Yes |
| 2 | `tanne` | `vocabulary_intro` | **tänne — towards here / to here.** It indicates movement in the speaker's direction. Compare the Unit 4 location word **täällä — here, already at this place**. | `vocab.tanne` | Yes |
| 3 | `practice-01` | `exercise` | D01 | none | Yes |
| 4 | `sinne` | `vocabulary_intro` | **sinne — towards there / to there.** Compare **siellä — there, already at that place** from Unit 4. They are related but not interchangeable in movement sentences. | `vocab.sinne` | Yes |
| 5 | `practice-02` | `exercise` | D02 | none | Yes |
| 6 | `practice-03` | `exercise` | D03 | none | Yes |
| 7 | `practice-04` | `exercise` | D04 | none | Yes |
| 8 | `movement-model` | `grammar_explanation` | Four useful contrasts: **Olen täällä** (I'm here), **Tule tänne** (come here), **Olen siellä** (I'm there), **Menen sinne** (I'm going there). Ask whether the sentence describes location or a destination. | `grammar.getting-around.here-there-movement` | Yes |
| 9 | `practice-05` | `exercise` | D05 | none | Yes |
| 10 | `practice-06` | `exercise` | D06 | none | Yes |
| 11 | `practice-07` | `exercise` | D07 | none | Yes |
| 12 | `practice-08` | `exercise` | D08 | none | Yes |
| 13 | `come-here` | `phrase_intro` | **Tule tänne.** — Come here. The word tule is a familiar verb used as one **fixed imperative chunk**. Learn the meaning; do not conjugate a general imperative table yet. This particular command is recognition-only. | `phrase.getting-around.tule-tanne` | Yes |
| 14 | `practice-09` | `exercise` | D09 | none | Yes |
| 15 | `practice-10` | `exercise` | D10 | none | Yes |
| 16 | `movement-reuse` | `example_set` | **Menen sinne.** — I'm going there. **Olen täällä.** — I'm here. These combine Unit 3 verbs and Unit 4 location language with the new motion words. Don't score the old verb separately just because it appears in the sentence. | none | Yes |
| 17 | `practice-11` | `exercise` | D11 | none | Yes |
| 18 | `checkpoint` | `checkpoint` | **Lesson checkpoint D12–D15:** independently retrieve movement to there, review the destination question, distinguish staying here from moving and select a fixed come-here instruction. | none | Yes |
| 19 | `review-questions` | `example_set` | **Minne menet?** asks where someone is going. **Missä se on?** asks where something is. Both questions were formally taught in Unit 4; this is their later reuse, not their first encounter. | none | Yes |

### All complete authored exercises

All use original content/needs_review, the shared N1 acceptance and answer-specific feedback. Two matching boards are **guided semantic comparisons**, not multiple independent scores for the same grammar concept.

**D01 — `ex.getting-around.here-there-where-to.taalla-location`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Someone says Olen täällä. Are they describing a place or movement towards it?  
**Stimulus:** Olen täällä. — a sentence from the earlier location learning.  
**Options (stable IDs, shuffle):** `a` being here at this location · `b` coming here from somewhere else · `c` going there. **Correct:** `a` being here at this location.  
**Wrong option `b`:** Coming towards here uses a direction such as tänne, not the location word täällä.  
**Wrong option `c`:** Going there uses sinne.  
**Correct feedback:** Täällä identifies a location: here.  
**Wrong feedback:** Täällä means here at a place, not motion to it.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Olen täällä. — I'm here.  
**Hint:** None. **Linked:** `vocab.taalla`, `vocab.olla`. **Scored:** `vocab.taalla` (Unit 4 Review; new direction grammar is taught later). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D02 — `ex.getting-around.here-there-where-to.tanne-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does tänne indicate?  
**Stimulus:** A speaker wants someone to move in their direction.  
**Options (stable IDs, shuffle):** `a` towards here / to this place · `b` already here · `c` towards a place over there. **Correct:** `a` towards here / to this place.  
**Wrong option `b`:** Täällä means already here.  
**Wrong option `c`:** Sinne means towards there, not towards this speaker.  
**Correct feedback:** Tänne expresses movement towards here.  
**Wrong feedback:** Tänne is directional, unlike the existing location word täällä.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Tänne = towards here.  
**Hint:** None. **Linked:** `vocab.tanne`, `vocab.taalla`. **Scored:** `vocab.tanne`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D03 — `ex.getting-around.here-there-where-to.siella-location`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** The sentence Olen siellä describes what?  
**Stimulus:** Olen siellä.  
**Options (stable IDs, shuffle):** `a` I'm travelling there. · `b` I'm there, at that location. · `c` I'm coming back.. **Correct:** `b` I'm there, at that location..  
**Wrong option `a`:** Travel to there uses sinne, not the location word siellä.  
**Wrong option `c`:** Takaisin means back, introduced later, not location.  
**Correct feedback:** Siellä means there at a place.  
**Wrong feedback:** Being there uses siellä; movement to there uses sinne.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Olen siellä. — I'm there.  
**Hint:** None. **Linked:** `vocab.siella`, `vocab.olla`. **Scored:** `vocab.siella` (Unit 4 Review; new direction grammar is taught later). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D04 — `ex.getting-around.here-there-where-to.sinne-direction`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which word means 'towards there' rather than 'at that location'?  
**Stimulus:** Someone is going to a place away from the speaker.  
**Options (stable IDs, shuffle):** `a` siellä · `b` sinne · `c` täällä. **Correct:** `b` sinne.  
**Wrong option `a`:** Siellä means there at the location, not towards it.  
**Wrong option `c`:** Täällä means here at the speaker's location.  
**Correct feedback:** Sinne means movement to there.  
**Wrong feedback:** Use sinne for going there; siellä says someone is there.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Sinne = towards there.  
**Hint:** None. **Linked:** `vocab.sinne`, `vocab.siella`. **Scored:** `vocab.sinne`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D05 — `ex.getting-around.here-there-where-to.here-pair`** · `matching` · intent `concept_recognition` · difficulty `contextual`  
**Prompt:** Match these two 'here' words to the situation each describes.  
**Stimulus:** The English descriptions deliberately distinguish position and motion.  
**Matching pairs (2 decisions):** **täällä ↔ here (already at this place)**; unscored comparison of a known/new adverb; **tänne ↔ to here (moving towards it)**; unscored comparison of a known/new adverb. `knowledgeScoring: false` for this board, because the target is later retrieved without a visible meaning.  
**Correct feedback:** Täällä is a location; tänne is movement towards that location.  
**Wrong feedback:** Ask whether someone is already here or moving here.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** täällä = at here; tänne = towards here.  
**Hint:** None. **Linked:** `vocab.taalla`, `vocab.tanne`, `grammar.getting-around.here-there-movement`. **Scored:** none. **Review eligible:** false, guided board or tokens. **Editorial:** `needs_review`.  

**D06 — `ex.getting-around.here-there-where-to.there-pair`** · `matching` · intent `concept_recognition` · difficulty `contextual`  
**Prompt:** Match the two 'there' words with the appropriate location or destination meaning.  
**Stimulus:** Select either a position or a movement towards a place.  
**Matching pairs (2 decisions):** **siellä ↔ there (at that location)**; unscored comparison of a known/new adverb; **sinne ↔ to there (towards it)**; unscored comparison of a known/new adverb. `knowledgeScoring: false` for this board, because the target is later retrieved without a visible meaning.  
**Correct feedback:** Siellä is where someone is; sinne is where they are going.  
**Wrong feedback:** The moving-towards meaning belongs to sinne.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** siellä = at there; sinne = to there.  
**Hint:** None. **Linked:** `vocab.siella`, `vocab.sinne`, `grammar.getting-around.here-there-movement`. **Scored:** none. **Review eligible:** false, guided board or tokens. **Editorial:** `needs_review`.  

**D07 — `ex.getting-around.here-there-where-to.type-tanne`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word meaning 'towards here / to this place'.  
**Stimulus:** towards here, not already here  
**Accepted after N1:** `tänne`. Do not accept location words for destination words.  
**Correct feedback:** Tänne expresses movement towards the speaker.  
**Wrong feedback:** Write tänne, not täällä; preserve ä and double n.  
**Near feedback:** `tanne` → Use ä: tänne.; `täne` → Write double n: tänne.  
**Not sure:** Write tänne.  
**Hint:** None. **Linked:** `vocab.tanne`. **Scored:** `vocab.tanne`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D08 — `ex.getting-around.here-there-where-to.type-sinne`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word meaning 'to there / towards there'.  
**Stimulus:** towards another place, not simply located there  
**Accepted after N1:** `sinne`. Do not accept location words for destination words.  
**Correct feedback:** Sinne means to there.  
**Wrong feedback:** Write sinne; siellä means there at the location.  
**Near feedback:** `sine` → Write double n: sinne.  
**Not sure:** Write sinne.  
**Hint:** None. **Linked:** `vocab.sinne`. **Scored:** `vocab.sinne`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D09 — `ex.getting-around.here-there-where-to.tule-tanne-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does the fixed command Tule tänne. mean?  
**Stimulus:** Tule tänne. — a specific instruction, not a conjugation exercise.  
**Options (stable IDs, shuffle):** `a` Come here. · `b` I'm here. · `c` Go there.. **Correct:** `a` Come here..  
**Wrong option `b`:** Olen täällä means I'm here; Tule is a command to come.  
**Wrong option `c`:** Go there would express movement elsewhere, not towards this speaker.  
**Correct feedback:** Tule tänne. means Come here. Tule is a fixed command from the known verb tulla.  
**Wrong feedback:** Tule tänne asks someone to come towards the speaker.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Come here.  
**Hint:** None. **Linked:** `phrase.getting-around.tule-tanne`, `vocab.tanne`, `vocab.tulla`. **Scored:** `phrase.getting-around.tule-tanne`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D10 — `ex.getting-around.here-there-where-to.menen-sinne-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which English sentence matches Menen sinne.?  
**Stimulus:** Menen sinne.  
**Options (stable IDs, shuffle):** `a` I'm there already. · `b` I'm going there. · `c` I'm coming here.. **Correct:** `b` I'm going there..  
**Wrong option `a`:** Olen siellä describes already being there.  
**Wrong option `c`:** Tulen tänne would indicate coming towards here, not going there.  
**Correct feedback:** Menen sinne. means I'm going there.  
**Wrong feedback:** Menen shows going; sinne tells where to.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** I'm going there.  
**Hint:** None. **Linked:** `vocab.sinne`, `vocab.menna`, `grammar.getting-around.here-there-movement`. **Scored:** `grammar.getting-around.here-there-movement`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D11 — `ex.getting-around.here-there-where-to.build-go-there`** · `token_build` · intent `controlled_construction` · difficulty `contextual`  
**Prompt:** Build 'I'm going there' from the two supplied tiles.  
**Stimulus:** Use the taught movement word, not the location word siellä.  
**Shuffled lowercase lexical tiles:** `sinne`, `menen`. **Accepted complete sentence:** `Menen sinne.`; capitalize sentence-initial tile after assembly.  
**Correct feedback:** Menen sinne. describes motion to another place.  
**Wrong feedback:** Use menen plus the direction word sinne.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Menen sinne.  
**Hint:** None. **Linked:** `vocab.sinne`, `vocab.menna`. **Scored:** `grammar.getting-around.here-there-movement`. **Review eligible:** false, guided board or tokens. **Editorial:** `needs_review`.  

**D12 — `ex.getting-around.here-there-where-to.write-going-there`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Independently write 'I'm going there' using the taught forms.  
**Stimulus:** Movement towards a place away from the speaker.  
**Accepted after N1:** `Menen sinne.`, `Minä menen sinne.`. Do not accept location words for destination words.  
**Correct feedback:** Menen sinne is a useful, short movement sentence.  
**Wrong feedback:** Use sinne for a destination; siellä would mean already there.  
**Near feedback:** `Menen siellä` → The destination is sinne, not the location word siellä.  
**Not sure:** Write Menen sinne.  
**Hint:** None. **Linked:** `vocab.sinne`, `vocab.menna`. **Scored:** `vocab.sinne`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D13 — `ex.getting-around.here-there-where-to.minne-question-review`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which English question corresponds to the earlier taught Minne menet?  
**Stimulus:** Minne menet? — existing Unit 4 phrase.  
**Options (stable IDs, shuffle):** `a` Where are you going? · `b` Where are you? · `c` Where did you come from?. **Correct:** `a` Where are you going?.  
**Wrong option `b`:** Missä asks for a location, whereas minne asks a destination.  
**Wrong option `c`:** This is not a past-tense question about the source.  
**Correct feedback:** Minne menet? asks where you are going.  
**Wrong feedback:** Minne means where to, not simply where.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Where are you going?  
**Hint:** None. **Linked:** `vocab.minne`, `vocab.menna`. **Scored:** `grammar.getting-around.location-destination`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D14 — `ex.getting-around.here-there-where-to.already-here`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** A person says 'I'm here' without moving. Which Finnish sentence is correct?  
**Stimulus:** Position at the speaker's current place.  
**Options (stable IDs, shuffle):** `a` Menen sinne. · `b` Olen täällä. · `c` Tule tänne.. **Correct:** `b` Olen täällä..  
**Wrong option `a`:** Menen sinne is movement to there, not being here.  
**Wrong option `c`:** Tule tänne is a command to come here, not a location statement.  
**Correct feedback:** Olen täällä expresses being here.  
**Wrong feedback:** For location use täällä with olen.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Olen täällä.  
**Hint:** None. **Linked:** `vocab.taalla`, `grammar.getting-around.here-there-movement`. **Scored:** `grammar.getting-around.here-there-movement`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**D15 — `ex.getting-around.here-there-where-to.come-here-situation`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** You want someone to move towards your location. Which of these already taught expressions gives that instruction?  
**Stimulus:** The speaker stays here while another person comes towards them.  
**Options (stable IDs, shuffle):** `a` Tule tänne. · `b` Olen täällä. · `c` Menen sinne.. **Correct:** `a` Tule tänne..  
**Wrong option `b`:** Olen täällä only states location; it doesn't ask anyone to come.  
**Wrong option `c`:** Menen sinne says I go there, movement away from the speaker.  
**Correct feedback:** Tule tänne. is the taught fixed command to come here.  
**Wrong feedback:** Use Tule tänne when the other person is meant to move towards you.  
**Near feedback:** None; wrong direction is not a near-success.  
**Not sure:** Tule tänne.  
**Hint:** None. **Linked:** `phrase.getting-around.tule-tanne`, `vocab.tanne`. **Scored:** `phrase.getting-around.tule-tanne`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Here or towards here?” **Copy:** “You can tell when someone is at a place and when they are going towards it.” **Required steps:** 19; **exercises:** 15; **matching pair decisions:** 4. The command Tule tänne is recognised as a fixed phrase, not a general imperative skill. **Next:** 8.5 From there and by bus.

## Lesson 8.5 — From there and by bus

**Lesson ID:** `lesson.getting-around.from-there-by-bus` · `unit.getting-around` · `fi` · Order 5 · **Estimated:** 14–21 minutes (untested; heavier load). **Prerequisite:** Lesson 8.4 and Unit 4 location awareness.  
**Capability:** recognise a taught movement-from form, distinguish travel method from location, and produce Menen bussilla. **New production lemmas:** none. **New recognition:** `vocab.myohassa`, `vocab.ajoissa`, `vocab.paasta`, `vocab.ajaa`. **Grammar:** `grammar.getting-around.location-source` (recognition), `grammar.getting-around.transport-method` (finite controlled production). **Productive phrase:** `phrase.getting-around.menen-bussilla`; **recognition-only fixed question:** `phrase.getting-around.miten-paasen-keskustaan`. **Other:** `mistä` fixed recognition question, not new lemma.  
**Completion:** all required steps and E01–E19 attempted or Not sure, no perfection gate. **Pause:** after E09 before vehicle-method forms. No full source, transit or verb tables.

### Ordered learner experience

Step IDs: `step.getting-around.from-there-by-bus.<suffix>`; all sourced forms are finite examples, never a generated grammar rule. Recognition words are introduced before their first required assessment.

| # | Step suffix | LessonStep type | Exact learner-facing content / exercise | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **From somewhere, by a vehicle.** Finnish describes where someone is, where they go, where they come from and what method they use. We will learn a few exact forms, not all local cases or unrestricted noun inflections. | none | Yes |
| 2 | `source-forms` | `grammar_explanation` | **Tulen kaupasta.** — I come **from the shop**. **Tulen keskustasta.** — I come **from downtown**. **Tulen talosta.** — I come **out of the house**. These are three explicitly taught -sta/-stä source forms; compare known *kaupassa* (in shop) and *kauppaan* (to shop). Recognition first; don't generate an unknown place's source form. | `grammar.getting-around.location-source` | Yes |
| 3 | `station-external` | `example_set` | **Station exception:** **asemalle** (to station), **asemalla** (at station), **asemalta** (from station) are common in ordinary transport contexts; **pysäkille/pysäkillä/pysäkiltä** work for a stop. Being literally inside a building is a different situation. This is why -sta is **not** universal for from. | none | Yes |
| 4 | `practice-01` | `exercise` | E01 | none | Yes |
| 5 | `practice-02` | `exercise` | E02 | none | Yes |
| 6 | `practice-03` | `exercise` | E03 | none | Yes |
| 7 | `practice-04` | `exercise` | E04 | none | Yes |
| 8 | `source-question` | `phrase_intro` | **Mistä?** — Where from? Recognise it as a complete source question. You already know **Missä?** (where at) and **Minne?** (where to). Mistä is not an extra independently productive Unit 8 lemma. | none | Yes |
| 9 | `practice-05` | `exercise` | E05 | none | Yes |
| 10 | `late-ontime` | `vocabulary_intro` | Recognition-only: **myöhässä — late** and **ajoissa — in time/on time**. Compare **Juna on myöhässä.** and **Bussi on ajoissa.** These are fictional illustrative statuses, not actual schedule information. | `vocab.myohassa`, `vocab.ajoissa` | Yes |
| 11 | `practice-06` | `exercise` | E06 | none | Yes |
| 12 | `practice-07` | `exercise` | E07 | none | Yes |
| 13 | `reach-drive` | `vocabulary_intro` | Recognition-only: **päästä — get to/reach (a place)** in navigation; **ajaa — drive** in road transport. You will recognise a fixed question with pääsen, but not be asked to conjugate either verb independently. | `vocab.paasta`, `vocab.ajaa` | Yes |
| 14 | `practice-08` | `exercise` | E08 | none | Yes |
| 15 | `practice-09` | `exercise` | E09 | none | Yes |
| 16 | `vehicle-method` | `grammar_explanation` | **By bus:** **bussilla**. **By train:** **junalla**. Learn these two exact transport forms for production. Also recognise **metrolla** (by metro), **raitiovaunulla** (by tram), **taksilla** (by taxi). This does not mean you can add -lla to every noun automatically. | `grammar.getting-around.transport-method` | Yes |
| 17 | `bus-phrase` | `phrase_intro` | **Menen bussilla.** — I'm going by bus. The new form bussilla tells how you travel. The same simple idea applies to an authored phrase **Menen junalla.**, but only the finite forms taught above are required. | `phrase.getting-around.menen-bussilla` | Yes |
| 18 | `practice-10` | `exercise` | E10 | none | Yes |
| 19 | `practice-11` | `exercise` | E11 | none | Yes |
| 20 | `bus-inside-contrast` | `example_set` | **Menen bussilla.** — I'm travelling by bus (method). **Olen bussissa.** — I'm inside/on the bus (location). The difference is real and important: don't use the -ssa location form to mean travelling by a mode. | none | Yes |
| 21 | `practice-12` | `exercise` | E12 | none | Yes |
| 22 | `practice-13` | `exercise` | E13 | none | Yes |
| 23 | `practice-14` | `exercise` | E14 | none | Yes |
| 24 | `checkpoint` | `checkpoint` | **Lesson checkpoint E15–E19:** construct and independently retrieve by-bus travel, recognise the fixed getting-downtown question, and interpret source versus destination phrases. | none | Yes |
| 25 | `get-downtown` | `phrase_intro` | **Miten pääsen keskustaan?** — How do I get downtown? Learn this useful question **as one recognition-only chunk**. Pääsen comes from päästä (recognition-only), not a new general present-tense conjugation lesson. | `phrase.getting-around.miten-paasen-keskustaan` | Yes |
| 26 | `source-recap` | `example_set` | **Menen keskustaan** — go to downtown; **Olen keskustassa** — be in downtown; **Tulen keskustasta** — come from downtown. They are three different jobs with a finite authored form for the same noun. | none | Yes |

### All complete authored exercises

All records use original content/needs_review, the existing N1 and scored-target contracts. The source/transport matching boards are guided comparisons with **no duplicate grammar score**, and the late/on-time items remain recognition-only.

**E01 — `ex.getting-around.from-there-by-bus.from-shop`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In this context, what does Tulen kaupasta. mean?  
**Stimulus:** Tulen kaupasta. — a person has been to the shop and is now coming back.  
**Options (stable IDs):** `a` I come from the shop. · `b` I'm going to the shop. · `c` I'm inside the shop.. **Correct:** `a` I come from the shop.. Shuffle visually.  
**Wrong option `b`:** Menen kauppaan is going to the shop.  
**Wrong option `c`:** Olen kaupassa describes being in the shop.  
**Correct feedback:** Kaupasta means from the shop, with the taught source form.  
**Wrong feedback:** The ending -sta in kaupasta marks the origin in this context.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** I come from the shop.  
**Hint:** None. **Linked:** `vocab.kauppa`, `vocab.tulla`, `grammar.getting-around.location-source`. **Scored:** `grammar.getting-around.location-source`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E02 — `ex.getting-around.from-there-by-bus.from-downtown`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does Tulen keskustasta. say?  
**Stimulus:** Tulen keskustasta.  
**Options (stable IDs):** `a` I'm coming from downtown. · `b` I'm already downtown. · `c` I'm going downtown.. **Correct:** `a` I'm coming from downtown.. Shuffle visually.  
**Wrong option `b`:** Olen keskustassa means I'm in downtown.  
**Wrong option `c`:** Menen keskustaan means I'm going downtown.  
**Correct feedback:** Keskustasta is the taught 'from the centre' form, not the destination keskustaan.  
**Wrong feedback:** The form keskustasta marks coming from downtown.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** I'm coming from downtown.  
**Hint:** None. **Linked:** `vocab.keskusta`, `grammar.getting-around.location-source`. **Scored:** `grammar.getting-around.location-source`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E03 — `ex.getting-around.from-there-by-bus.location-source-pairs`** · `matching` · intent `concept_recognition` · difficulty `contextual`  
**Prompt:** Match each already taught location/source phrase with its correct meaning.  
**Stimulus:** From and in must remain distinct. The source forms are deliberately authored, not generated for arbitrary nouns.  
**Matching pairs (3 decisions):** **kaupassa ↔ in the shop**; guided contrast, not duplicate scored target; **kaupasta ↔ from the shop**; guided contrast, not duplicate scored target; **keskustasta ↔ from downtown**; guided contrast, not duplicate scored target. `knowledgeScoring: false`, `scoredTargetIds: []` for this board.  
**Correct feedback:** Kaupassa is in the shop; kaupasta is from the shop; keskustasta is from downtown.  
**Wrong feedback:** Compare the original known -ssa location with the -sta source form.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** kaupassa = in shop; kaupasta = from shop; keskustasta = from downtown.  
**Hint:** None. **Linked:** `vocab.kauppa`, `vocab.keskusta`, `grammar.getting-around.location-source`. **Scored:** none. **Review eligible:** false, guided board/tiles. **Editorial:** `needs_review`.  

**E04 — `ex.getting-around.from-there-by-bus.station-departure`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In a normal transit context, which taught expression means 'from the station'?  
**Stimulus:** A passenger departs from the station (not literally walking out of the building's interior).  
**Options (stable IDs):** `a` asemalle · `b` asemalta · `c` asemassa. **Correct:** `b` asemalta. Shuffle visually.  
**Wrong option `a`:** Asemalle means to/towards the station, not from it.  
**Wrong option `c`:** Asemassa is not the taught ordinary transit meaning 'from the station'.  
**Correct feedback:** Asemalta expresses from the station in this context. From a building's interior can be expressed differently.  
**Wrong feedback:** The station belongs to the taught external-place series: asemalle, asemalla, asemalta.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Asemalta.  
**Hint:** None. **Linked:** `vocab.asema`, `grammar.getting-around.location-source`. **Scored:** `grammar.getting-around.location-source`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E05 — `ex.getting-around.from-there-by-bus.mista-question`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does the question word mistä ask in a simple movement context?  
**Stimulus:** Mistä? — a fixed question word, taught for recognition only.  
**Options (stable IDs):** `a` Where from? · `b` Where to? · `c` Where (at a place)?. **Correct:** `a` Where from?. Shuffle visually.  
**Wrong option `b`:** Minne is where to, a destination.  
**Wrong option `c`:** Missä is where a person/thing is.  
**Correct feedback:** Mistä asks where from, the source of movement.  
**Wrong feedback:** Mistä is source; minne is destination and missä is location.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Where from?  
**Hint:** None. **Linked:** `grammar.getting-around.location-source`, `vocab.missa`, `vocab.minne`. **Scored:** `grammar.getting-around.location-source`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E06 — `ex.getting-around.from-there-by-bus.late-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** A transport message says Juna on myöhässä. What does myöhässä indicate?  
**Stimulus:** Juna on myöhässä. — a train is not running on time.  
**Options (stable IDs):** `a` late · `b` early · `c` at the station. **Correct:** `a` late. Shuffle visually.  
**Wrong option `b`:** Early is a different meaning; myöhässä means late.  
**Wrong option `c`:** Asema would name the station, not lateness.  
**Correct feedback:** Myöhässä means late.  
**Wrong feedback:** Myöhässä indicates lateness. It is recognition-only here.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Myöhässä = late.  
**Hint:** None. **Linked:** `vocab.myohassa`, `vocab.juna`. **Scored:** `vocab.myohassa`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E07 — `ex.getting-around.from-there-by-bus.in-time-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does ajoissa mean in Bussi on ajoissa.?  
**Stimulus:** Bussi on ajoissa. — the bus arrives in time.  
**Options (stable IDs):** `a` late · `b` in time / on time · `c` by bus. **Correct:** `b` in time / on time. Shuffle visually.  
**Wrong option `a`:** Myöhässä means late, the opposite in this scenario.  
**Wrong option `c`:** Bussilla means by bus, not in time.  
**Correct feedback:** Ajoissa means in time/on time in this context.  
**Wrong feedback:** The punctuality word is ajoissa, not myöhässä.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Ajoissa = in time/on time.  
**Hint:** None. **Linked:** `vocab.ajoissa`, `vocab.bussi`. **Scored:** `vocab.ajoissa`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E08 — `ex.getting-around.from-there-by-bus.paasta-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In navigation, what is the practical meaning of päästä?  
**Stimulus:** A person wants to get to the city centre. Päästä is recognition-only.  
**Options (stable IDs):** `a` to reach / get to · `b` to drive a car · `c` to buy a ticket. **Correct:** `a` to reach / get to. Shuffle visually.  
**Wrong option `b`:** Ajaa means drive in transport contexts.  
**Wrong option `c`:** Ostaa means buy, an earlier verb.  
**Correct feedback:** Päästä can mean reach/get to a place; pääsen occurs in a fixed question later.  
**Wrong feedback:** Päästä is about reaching or being able to get somewhere in this navigation context.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Päästä = get to / reach.  
**Hint:** None. **Linked:** `vocab.paasta`. **Scored:** `vocab.paasta`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E09 — `ex.getting-around.from-there-by-bus.ajaa-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does ajaa typically mean in a road-transport context?  
**Stimulus:** Ajaa, recognition only.  
**Options (stable IDs):** `a` to drive · `b` to sleep · `c` to ask. **Correct:** `a` to drive. Shuffle visually.  
**Wrong option `b`:** Nukkua means sleep.  
**Wrong option `c`:** Kysyä means ask.  
**Correct feedback:** Ajaa often means drive; you do not need to produce its conjugated forms.  
**Wrong feedback:** Ajaa is drive in this setting.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Ajaa = to drive.  
**Hint:** None. **Linked:** `vocab.ajaa`. **Scored:** `vocab.ajaa`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E10 — `ex.getting-around.from-there-by-bus.by-bus-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does Menen bussilla. mean?  
**Stimulus:** Menen bussilla.  
**Options (stable IDs):** `a` I'm inside the bus. · `b` I'm going by bus. · `c` I'm going to the bus.. **Correct:** `b` I'm going by bus.. Shuffle visually.  
**Wrong option `a`:** Olen bussissa would say I am inside the bus.  
**Wrong option `c`:** Menen bussille could have a different movement meaning; this lesson explicitly teaches travel by bus.  
**Correct feedback:** Menen bussilla is a statement about the **method** of travel.  
**Wrong feedback:** Bussilla means by bus, not inside the bus.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** I'm going by bus.  
**Hint:** None. **Linked:** `phrase.getting-around.menen-bussilla`, `vocab.bussi`, `grammar.getting-around.transport-method`. **Scored:** `phrase.getting-around.menen-bussilla`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E11 — `ex.getting-around.from-there-by-bus.method-pairs`** · `matching` · intent `concept_recognition` · difficulty `contextual`  
**Prompt:** Match the taught transport forms with their method-of-travel meanings.  
**Stimulus:** These are finite recognised forms, not a new general suffix rule.  
**Matching pairs (3 decisions):** **bussilla ↔ by bus**; guided contrast, not duplicate scored target; **junalla ↔ by train**; guided contrast, not duplicate scored target; **metrolla ↔ by metro**; guided contrast, not duplicate scored target. `knowledgeScoring: false`, `scoredTargetIds: []` for this board.  
**Correct feedback:** Bussilla, junalla and metrolla describe travel by bus, train and metro.  
**Wrong feedback:** All three indicate travel method; choose the correct vehicle name in each form.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** bussilla = by bus; junalla = by train; metrolla = by metro.  
**Hint:** None. **Linked:** `vocab.bussi`, `vocab.juna`, `vocab.metro`, `grammar.getting-around.transport-method`. **Scored:** none. **Review eligible:** false, guided board/tiles. **Editorial:** `needs_review`.  

**E12 — `ex.getting-around.from-there-by-bus.bus-inside-versus-by`** · `multiple_choice` · intent `grammar` · difficulty `contextual`  
**Prompt:** A person is travelling by bus. Which specific Finnish phrase expresses the travel method?  
**Stimulus:** Travel **by** bus, not merely be physically inside a bus.  
**Options (stable IDs):** `a` Olen bussissa. · `b` Menen bussilla. · `c` Menen keskustaan.. **Correct:** `b` Menen bussilla.. Shuffle visually.  
**Wrong option `a`:** Olen bussissa means I am inside/on the bus, a location rather than the travel method.  
**Wrong option `c`:** Menen keskustaan names a destination, not transport method.  
**Correct feedback:** Menen bussilla describes travelling by bus; bussissa describes being inside/on the bus.  
**Wrong feedback:** The practical travel-method form is bussilla.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Menen bussilla.  
**Hint:** None. **Linked:** `vocab.bussi`, `grammar.getting-around.transport-method`. **Scored:** `grammar.getting-around.transport-method`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E13 — `ex.getting-around.from-there-by-bus.write-bussilla`** · `text_input` · intent `controlled_production` · difficulty `contextual`  
**Prompt:** Type the taught Finnish word meaning 'by bus'.  
**Stimulus:** by bus (method of transport, not inside the bus)  
**Accepted after N1:** `bussilla`. Meaningful -lla/-ssa differences remain distinct.  
**Correct feedback:** Bussilla means by bus; the dictionary noun is bussi.  
**Wrong feedback:** Use bussilla, not bussissa. The endings have different meanings.  
**Near feedback:** `bussissa` → Bussissa means inside/on the bus. By bus is bussilla.  
**Not sure:** Write bussilla.  
**Hint:** None. **Linked:** `vocab.bussi`, `grammar.getting-around.transport-method`. **Scored:** `grammar.getting-around.transport-method`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E14 — `ex.getting-around.from-there-by-bus.write-junalla`** · `text_input` · intent `controlled_production` · difficulty `contextual`  
**Prompt:** Type the explicitly taught Finnish form meaning 'by train'.  
**Stimulus:** by train (method of travel)  
**Accepted after N1:** `junalla`. Meaningful -lla/-ssa differences remain distinct.  
**Correct feedback:** Junalla means by train.  
**Wrong feedback:** Use the finite taught method form junalla, not junassa (inside a train).  
**Near feedback:** `junassa` → Junassa is inside/on a train. Junalla is by train.  
**Not sure:** Write junalla.  
**Hint:** None. **Linked:** `vocab.juna`, `grammar.getting-around.transport-method`. **Scored:** `grammar.getting-around.transport-method`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E15 — `ex.getting-around.from-there-by-bus.build-by-bus`** · `token_build` · intent `controlled_construction` · difficulty `contextual`  
**Prompt:** Arrange the two supplied tiles to say 'I'm going by bus'.  
**Stimulus:** Use the exact finite form of bussi learned in this lesson.  
**Shuffled lowercase lexical tiles:** `bussilla`, `menen`. **Accepted complete sentence:** `Menen bussilla.`. Capitalise assembled first word.  
**Correct feedback:** Menen bussilla is a natural simple sentence about travel method.  
**Wrong feedback:** Use menen + bussilla, not the dictionary noun bussi.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Menen bussilla.  
**Hint:** None. **Linked:** `vocab.menna`, `vocab.bussi`, `grammar.getting-around.transport-method`. **Scored:** `grammar.getting-around.transport-method`. **Review eligible:** false, guided board/tiles. **Editorial:** `needs_review`.  

**E16 — `ex.getting-around.from-there-by-bus.independent-by-bus`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Independently write 'I'm going by bus' in Finnish.  
**Stimulus:** I'm going by bus. Use the taught travel-method form.  
**Accepted after N1:** `Menen bussilla.`, `Minä menen bussilla.`. Meaningful -lla/-ssa differences remain distinct.  
**Correct feedback:** Menen bussilla. is independently retrieved from the new transport phrase.  
**Wrong feedback:** Use menen (I go) and bussilla (by bus), not bussissa.  
**Near feedback:** `Menen bussissa` → Bussissa is a location; travelling by bus is Menen bussilla.  
**Not sure:** Write Menen bussilla.  
**Hint:** None. **Linked:** `phrase.getting-around.menen-bussilla`, `vocab.bussi`, `grammar.getting-around.transport-method`. **Scored:** `phrase.getting-around.menen-bussilla`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E17 — `ex.getting-around.from-there-by-bus.reach-downtown-question`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does the fixed question Miten pääsen keskustaan? ask?  
**Stimulus:** Miten pääsen keskustaan? — recognition-only; päästä is not a productive verb paradigm.  
**Options (stable IDs):** `a` How do I get downtown? · `b` Am I already downtown? · `c` What is the bus ticket price?. **Correct:** `a` How do I get downtown?. Shuffle visually.  
**Wrong option `b`:** Olen keskustassa describes being downtown, not asking how to reach it.  
**Wrong option `c`:** Lippu concerns tickets, but this question asks about getting somewhere.  
**Correct feedback:** Miten pääsen keskustaan? asks how to reach the city centre.  
**Wrong feedback:** Pääsen means getting/being able to reach here. Learn this as a fixed question only.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** How do I get downtown?  
**Hint:** None. **Linked:** `phrase.getting-around.miten-paasen-keskustaan`, `vocab.paasta`, `vocab.keskusta`. **Scored:** `phrase.getting-around.miten-paasen-keskustaan`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E18 — `ex.getting-around.from-there-by-bus.from-centre`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Which sentence says someone comes *from* downtown rather than going downtown?  
**Stimulus:** Distinguish taught source from destination forms of keskusta.  
**Options (stable IDs):** `a` Menen keskustaan. · `b` Tulen keskustasta. · `c` Olen keskustassa.. **Correct:** `b` Tulen keskustasta.. Shuffle visually.  
**Wrong option `a`:** Keskustaan is the destination form — to the centre.  
**Wrong option `c`:** Keskustassa is the location form — in the centre.  
**Correct feedback:** Tulen keskustasta. expresses movement from the centre.  
**Wrong feedback:** Use keskustasta as the finite source form.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Tulen keskustasta.  
**Hint:** None. **Linked:** `vocab.keskusta`, `grammar.getting-around.location-source`, `vocab.tulla`. **Scored:** `grammar.getting-around.location-source`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

**E19 — `ex.getting-around.from-there-by-bus.from-shop-check`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** A person has left the shop and is now coming from it. Which sentence says that?  
**Stimulus:** The shop is the point of departure.  
**Options (stable IDs):** `a` Tulen kaupasta. · `b` Menen kauppaan. · `c` Olen kaupassa.. **Correct:** `a` Tulen kaupasta.. Shuffle visually.  
**Wrong option `b`:** Menen kauppaan describes going to the shop.  
**Wrong option `c`:** Olen kaupassa describes being inside the shop.  
**Correct feedback:** Tulen kaupasta. says I'm coming from the shop.  
**Wrong feedback:** Kaupasta marks movement from the shop.  
**Near feedback:** None unless explicitly authored.  
**Not sure:** Tulen kaupasta.  
**Hint:** None. **Linked:** `vocab.kauppa`, `grammar.getting-around.location-source`. **Scored:** `grammar.getting-around.location-source`. **Review eligible:** true, independent stimulus. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “From where, and how?” **Copy:** “You can recognise a place someone comes from and describe travelling by bus or train with an explicitly taught form.” **Required steps:** 26; **required exercises:** 19; **matching pair decisions:** 6. This is a finite transport lesson, not mastery of six local cases or arbitrary verb paradigms. **Next:** 8.6 Simple directions.

## Lesson 8.6 — Simple directions

**Lesson ID:** `lesson.getting-around.simple-directions` · `unit.getting-around` · `fi` · Order 6 · **Estimated:** 17–26 minutes including stage capstone (untested; provide resume after F13 and F17). **Prerequisite:** Lessons 8.1–8.5 and all reached A1 Foundations material.  
**Capability:** recognise and produce simple direction words, follow a short ordered route and demonstrate five Unit 8 goals; then complete a small cross-unit stage capstone. **New production:** `vocab.suoraan`, `vocab.takaisin`, `vocab.oikea`, `vocab.vasen`. **New phrases:** productive fixed `phrase.getting-around.mene-suoraan`, `phrase.getting-around.tulen-takaisin`; recognition-only `phrase.getting-around.kaanny-oikealle`, `phrase.getting-around.kaanny-vasemmalle`. **Optional spoken:** takaisin → takas. **No new canonical recognition-only lemmas.**  
**Completion:** required steps and F01–F21 attempted or Not sure, without perfection gating; the A1 Foundations stage completion flag is separate from knowledge/mastery state or external CEFR certification.

### Ordered learner experience

Step IDs: `step.getting-around.simple-directions.<suffix>`. The final two `checkpoint` steps contain existing authored exercise records, **not a new exercise renderer or seventh lesson**. The spoken note is optional.

| # | Step suffix | LessonStep type | Exact learner-facing content or exercise ref | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Simple directions — and the end of Foundations.** You'll learn straight ahead, back, right and left. Then you'll use real movement and transport phrases from Unit 8 and finish with a short story using language from earlier units. This is not a driving exam or a complete route-planning lesson. | none | Yes |
| 2 | `straight-back` | `vocabulary_intro` | **suoraan — straight ahead/directly; takaisin — back/returning.** Straight ahead continues without turning; takaisin reverses towards a previous place. The standard written word is takaisin. | `vocab.suoraan`, `vocab.takaisin` | Yes |
| 3 | `right-left` | `vocabulary_intro` | **oikea — right**, when the context is directions; it can also mean correct. **vasen — left.** The right/left pair is deliberately taught even though vasen has a lower overall frequency rank. Neither dictionary word is identical to the directional phrase oikealle/vasemmalle. | `vocab.oikea`, `vocab.vasen` | Yes |
| 4 | `practice-01` | `exercise` | F01 | none | Yes |
| 5 | `practice-02` | `exercise` | F02 | none | Yes |
| 6 | `practice-03` | `exercise` | F03 | none | Yes |
| 7 | `practice-04` | `exercise` | F04 | none | Yes |
| 8 | `practice-05` | `exercise` | F05 | none | Yes |
| 9 | `practice-06` | `exercise` | F06 | none | Yes |
| 10 | `practice-07` | `exercise` | F07 | none | Yes |
| 11 | `straight-command` | `phrase_intro` | **Mene suoraan.** — Go straight ahead. This **one fixed singular imperative** is productive as a phrase. You are not expected to derive arbitrary command forms of other verbs. | `phrase.getting-around.mene-suoraan` | Yes |
| 12 | `practice-08` | `exercise` | F08 | none | Yes |
| 13 | `turn-commands` | `phrase_intro` | Recognise these two fixed instructions: **Käänny oikealle.** — Turn right; **Käänny vasemmalle.** — Turn left. **oikealle/vasemmalle** are directional forms, not the base adjectives **oikea/vasen**. The verb käänny is a fixed command here; we are not adding a general productive kääntyä verb paradigm. | `phrase.getting-around.kaanny-oikealle`, `phrase.getting-around.kaanny-vasemmalle` | Yes |
| 14 | `practice-09` | `exercise` | F09 | none | Yes |
| 15 | `come-back-phrase` | `phrase_intro` | **Tulen takaisin.** — I'm coming back. You already know **tulen** from Unit 3; the new word is takaisin. The phrase is productive as a complete short statement. | `phrase.getting-around.tulen-takaisin` | Yes |
| 16 | `practice-10` | `exercise` | F10 | none | Yes |
| 17 | `spoken-takas` | `spoken_note` | Optional spoken recognition: **takaisin → takas**. You may also recognise familiar **menen → meen** and **tulen → tuun** from earlier units. Do not type colloquial spellings as standard-Finnish answers. | none | No |
| 18 | `practice-11` | `exercise` | F11 | none | Yes |
| 19 | `practice-12` | `exercise` | F12 | none | Yes |
| 20 | `textual-route` | `example_set` | **Route:** 1. Mene suoraan. (Go straight.) 2. Käänny vasemmalle. (Turn left.) 3. Käänny oikealle. (Turn right.) A short list is enough to practise directions; a map or arrow-only diagram isn't required. | none | Yes |
| 21 | `practice-13` | `exercise` | F13 | none | Yes |
| 22 | `unit-capability-transition` | `explanation` | **Unit 8 checkpoint.** Next you'll use all five practical abilities: identify transport, ask where a station is, say you're going downtown, understand a from-phrase and follow basic direction order. Recall is tested without requiring new forms. | none | Yes |
| 23 | `unit8-capability-check` | `checkpoint` | **Unit 8 practical checkpoint F14–F17:** choose the correct mode of transport, independently ask where the station is and say you go downtown, then recognise movement from a known place. Direction-sequence comprehension was checked immediately before this. | none | Yes |
| 24 | `a1-stage-transition` | `explanation` | **A1 Foundations closing check.** Unit 8 is the final stage unit. A short, fictional story will reuse language from greetings, daily life, food and transport. Finishing this curriculum is valuable progress, but it is not an externally certified CEFR A1 exam. | none | Yes |
| 25 | `three-line-guide` | `example_set` | **One short day in three lines.** The final exercise gives three English facts about Aino, a fictional person. Write one taught Finnish sentence per line. This is a *restricted capability assessment*, not unrestricted storytelling or an AI-graded conversation. | none | Yes |
| 26 | `a1-foundations-capstone` | `checkpoint` | **A1 Foundations stage capstone F18–F21:** understand a basic introduction, retrieve a daily food/drink sentence, describe a concrete house by colour and write a connected three-line story about a fictional journey. Capability-only; do not award multiple lexical mastery events. | none | Yes |

### All complete authored exercises, Unit 8 checkpoint and A1 capstone

The first thirteen exercises introduce/assess simple directions. **F14–F17** cover the four remaining Unit 8 capabilities; **F18–F21** form the small, separate A1 Foundations capstone. All new records use `sourceType: original`, `editorialStatus: needs_review`, N1 deterministic acceptance and the existing five exercise kinds. F18–F21 are capability-only and do not create unrelated scheduled-Review successes.

**F01 — `ex.getting-around.simple-directions.straight-back-pair`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the two travel-direction words to their meanings.  
**Stimulus:** One word indicates continuing ahead; the other means returning/back.  
**Matching pairs (2 first-attempt decisions):** **suoraan ↔ straight ahead / directly** scoring `vocab.suoraan`; **takaisin ↔ back / back again** scoring `vocab.takaisin`. Context is direction-specific, not generic 'correct answer' for oikea.  
**Correct feedback:** Suoraan is straight ahead, while takaisin is back or returning.  
**Wrong feedback:** These aren't synonyms: one says continue straight, the other describes returning.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** suoraan → straight ahead; takaisin → back.  
**Hint:** None. **Linked:** `vocab.suoraan`, `vocab.takaisin`. **Scored:** `vocab.suoraan`, `vocab.takaisin`. **Review eligible:** false, guided or stage capability-only. **Editorial:** `needs_review`.  

**F02 — `ex.getting-around.simple-directions.right-left-pair`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the basic dictionary direction words to right and left.  
**Stimulus:** The context is navigation, not 'a correct answer'.  
**Matching pairs (2 first-attempt decisions):** **oikea ↔ right (direction)** scoring `vocab.oikea`; **vasen ↔ left (direction)** scoring `vocab.vasen`. Context is direction-specific, not generic 'correct answer' for oikea.  
**Correct feedback:** Oikea is right in a navigation context; vasen is left.  
**Wrong feedback:** Oikea can also mean correct, but the context here explicitly means right.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** oikea → right; vasen → left.  
**Hint:** None. **Linked:** `vocab.oikea`, `vocab.vasen`. **Scored:** `vocab.oikea`, `vocab.vasen`. **Review eligible:** false, guided or stage capability-only. **Editorial:** `needs_review`.  

**F03 — `ex.getting-around.simple-directions.right-semantic`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In directions, what does oikea mean?  
**Stimulus:** A sign discusses turning right, not whether an answer is correct.  
**Options (stable IDs, shuffled visually):** `a` right · `b` left · `c` straight ahead. **Correct:** `a` right.  
**Wrong option `b`:** Vasen means left, not oikea.  
**Wrong option `c`:** Suoraan means straight ahead.  
**Correct feedback:** Oikea means right here; the same adjective can also mean correct in other contexts.  
**Wrong feedback:** The direction meaning of oikea is right.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Oikea → right.  
**Hint:** None. **Linked:** `vocab.oikea`. **Scored:** `vocab.oikea`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F04 — `ex.getting-around.simple-directions.write-suoraan`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word for 'straight ahead' in a simple direction.  
**Stimulus:** straight ahead  
**Accepted after N1:** `suoraan`.   
**Correct feedback:** Suoraan means straight ahead.  
**Wrong feedback:** Write suoraan, not oikealle or vasemmalle.  
**Near feedback:** `soraan` → The taught word is suoraan, beginning with suu-.  
**Not sure:** Write suoraan.  
**Hint:** None. **Linked:** `vocab.suoraan`. **Scored:** `vocab.suoraan`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F05 — `ex.getting-around.simple-directions.write-takaisin`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the standard Finnish word meaning 'back / back again'.  
**Stimulus:** back, returning  
**Accepted after N1:** `takaisin`.   
**Correct feedback:** Takaisin is the standard written form for back.  
**Wrong feedback:** Write takaisin, not the colloquial shortening takas.  
**Near feedback:** `takas` → Takas is a spoken reduction; write takaisin in standard Finnish.  
**Not sure:** Write takaisin.  
**Hint:** None. **Linked:** `vocab.takaisin`. **Scored:** `vocab.takaisin`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F06 — `ex.getting-around.simple-directions.write-oikea`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary form for 'right' in navigation (not 'to the right').  
**Stimulus:** right (basic direction word)  
**Accepted after N1:** `oikea`.   
**Correct feedback:** Oikea is the dictionary word; oikealle is the directional form in a turn instruction.  
**Wrong feedback:** Write oikea, not oikealle, because this task asks for the dictionary form.  
**Near feedback:** `oikealle` → Oikealle is 'to the right'; the dictionary word asked for is oikea.  
**Not sure:** Write oikea.  
**Hint:** None. **Linked:** `vocab.oikea`. **Scored:** `vocab.oikea`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F07 — `ex.getting-around.simple-directions.write-vasen`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary form meaning 'left' in directions.  
**Stimulus:** left (basic direction word)  
**Accepted after N1:** `vasen`.   
**Correct feedback:** Vasen means left; vasemmalle is the direction form in fixed turn instructions.  
**Wrong feedback:** Write vasen, not oikea or vasemmalle.  
**Near feedback:** `vasemmalle` → Vasemmalle means 'to the left', but this prompt asks for the dictionary form vasen.  
**Not sure:** Write vasen.  
**Hint:** None. **Linked:** `vocab.vasen`. **Scored:** `vocab.vasen`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F08 — `ex.getting-around.simple-directions.mene-suoraan-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does the fixed command Mene suoraan. mean?  
**Stimulus:** Mene suoraan.  
**Options (stable IDs, shuffled visually):** `a` Go straight ahead. · `b` Turn right. · `c` Come back.. **Correct:** `a` Go straight ahead..  
**Wrong option `b`:** Käänny oikealle is turn right; that's a different fixed instruction.  
**Wrong option `c`:** Tule takaisin is a different meaning about returning.  
**Correct feedback:** Mene suoraan. means Go straight ahead. This one command is taught as a useful chunk.  
**Wrong feedback:** Mene suoraan tells someone to continue straight, not turn or return.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Go straight ahead.  
**Hint:** None. **Linked:** `phrase.getting-around.mene-suoraan`, `vocab.suoraan`, `vocab.menna`. **Scored:** `phrase.getting-around.mene-suoraan`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F09 — `ex.getting-around.simple-directions.turn-right-fixed`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does Käänny oikealle. mean?  
**Stimulus:** Käänny oikealle. — a fixed recognition-only route instruction.  
**Options (stable IDs, shuffled visually):** `a` Turn left. · `b` Turn right. · `c` Go straight.. **Correct:** `b` Turn right..  
**Wrong option `a`:** Turn left is Käänny vasemmalle.  
**Wrong option `c`:** Go straight is Mene suoraan.  
**Correct feedback:** Käänny oikealle. means Turn right. Oikealle is not the base word oikea.  
**Wrong feedback:** Käänny is the fixed command 'turn'; oikealle means to the right.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Turn right.  
**Hint:** None. **Linked:** `phrase.getting-around.kaanny-oikealle`, `vocab.oikea`. **Scored:** `phrase.getting-around.kaanny-oikealle`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F10 — `ex.getting-around.simple-directions.come-back-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which English sentence matches Tulen takaisin.?  
**Stimulus:** Tulen takaisin.  
**Options (stable IDs, shuffled visually):** `a` I'm returning / coming back. · `b` I'm going straight ahead. · `c` I am already there.. **Correct:** `a` I'm returning / coming back..  
**Wrong option `b`:** Suoraan means straight, not returning.  
**Wrong option `c`:** Olen siellä means I'm there, a location statement.  
**Correct feedback:** Tulen takaisin. says I'm coming back.  
**Wrong feedback:** Takaisin means back; tulen is the familiar first-person verb from tulla.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** I'm coming back.  
**Hint:** None. **Linked:** `phrase.getting-around.tulen-takaisin`, `vocab.takaisin`, `vocab.tulla`. **Scored:** `phrase.getting-around.tulen-takaisin`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F11 — `ex.getting-around.simple-directions.independent-straight-command`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type the fixed Finnish instruction 'Go straight ahead.'  
**Stimulus:** A short route command, singular listener. Use the **one taught imperative chunk**, not general verb conjugation.  
**Accepted after N1:** `Mene suoraan.`.   
**Correct feedback:** Mene suoraan. is the fixed useful instruction you can produce.  
**Wrong feedback:** Use Mene suoraan, not a made-up imperative or a right/left form.  
**Near feedback:** `Menen suoraan` → Menen means 'I go'; the instruction to another person is Mene suoraan.  
**Not sure:** Write Mene suoraan.  
**Hint:** None. **Linked:** `phrase.getting-around.mene-suoraan`, `vocab.suoraan`. **Scored:** `phrase.getting-around.mene-suoraan`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F12 — `ex.getting-around.simple-directions.independent-return`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Write the Finnish sentence 'I'm coming back.'  
**Stimulus:** I am returning now; use the known form tulen and the new standard word takaisin.  
**Accepted after N1:** `Tulen takaisin.`, `Minä tulen takaisin.`.   
**Correct feedback:** Tulen takaisin. expresses coming back.  
**Wrong feedback:** Use tulen and takaisin; the spoken shortening takas is not the standard written answer.  
**Near feedback:** `Tulen takas` → Takas is informal spoken recognition; write takaisin.  
**Not sure:** Write Tulen takaisin.  
**Hint:** None. **Linked:** `phrase.getting-around.tulen-takaisin`, `vocab.takaisin`, `vocab.tulla`. **Scored:** `phrase.getting-around.tulen-takaisin`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F13 — `ex.getting-around.simple-directions.route-sequence`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Read this sequence of three directions. Which English route follows the instructions in the same order?  
**Stimulus:** 1. Mene suoraan. 2. Käänny vasemmalle. 3. Käänny oikealle.  
**Options (stable IDs, shuffled visually):** `a` straight → left → right · `b` straight → right → left · `c` left → straight → right. **Correct:** `a` straight → left → right.  
**Wrong option `b`:** This swaps the two turns; vasemmalle means to the left.  
**Wrong option `c`:** The first instruction is straight, not a left turn.  
**Correct feedback:** The correct ordered route is straight, then left, then right.  
**Wrong feedback:** Read each short instruction in order. Vasemmalle is left and oikealle is right.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Straight, then left, then right.  
**Hint:** None. **Linked:** `phrase.getting-around.mene-suoraan`, `phrase.getting-around.kaanny-vasemmalle`, `phrase.getting-around.kaanny-oikealle`, `grammar.getting-around.direction-instruction`. **Scored:** `grammar.getting-around.direction-instruction`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F14 — `ex.getting-around.simple-directions.unit8-transport-choice`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** A fictional route specifically requires a train. Which Finnish transport word should you select?  
**Stimulus:** Train (not a bus or taxi).  
**Options (stable IDs, shuffled visually):** `a` bussi · `b` juna · `c` taksi. **Correct:** `b` juna.  
**Wrong option `a`:** Bussi is bus; the transport was specifically identified as train.  
**Wrong option `c`:** Taksi is taxi, a hired car.  
**Correct feedback:** Juna is the correct word for train.  
**Wrong feedback:** Use juna for train; the other transport names are distinct.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Juna.  
**Hint:** None. **Linked:** `vocab.juna`, `vocab.bussi`, `vocab.taksi`. **Scored:** `vocab.juna`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F15 — `ex.getting-around.simple-directions.unit8-ask-station`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Without Finnish answer choices, ask 'Where is the station?' in Finnish.  
**Stimulus:** You are in an unfamiliar area and want the station's location.  
**Accepted after N1:** `Missä asema on?`, `Missä on asema?`.   
**Correct feedback:** Missä asema on? is a useful and fully taught location question.  
**Wrong feedback:** Ask with missä (where at), asema (station) and on.  
**Near feedback:** `Minne asema on` → Minne asks where to; a station's location uses missä.  
**Not sure:** Write Missä asema on?  
**Hint:** None. **Linked:** `phrase.getting-around.missa-asema-on`, `vocab.asema`. **Scored:** `phrase.getting-around.missa-asema-on`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F16 — `ex.getting-around.simple-directions.unit8-downtown`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Independently write 'I'm going downtown.'  
**Stimulus:** A fictional journey towards the city centre.  
**Accepted after N1:** `Menen keskustaan.`, `Minä menen keskustaan.`.   
**Correct feedback:** Menen keskustaan is the taught destination expression.  
**Wrong feedback:** Use keskustaan for movement to the city centre.  
**Near feedback:** `Menen keskustassa` → Keskustassa is in downtown; going there is keskustaan.  
**Not sure:** Write Menen keskustaan.  
**Hint:** None. **Linked:** `phrase.getting-around.menen-keskustaan`, `vocab.keskusta`. **Scored:** `phrase.getting-around.menen-keskustaan`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F17 — `ex.getting-around.simple-directions.unit8-source`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does the source expression Tulen kaupasta mean?  
**Stimulus:** Tulen kaupasta. (Unit 4 shop, new recognition source form).  
**Options (stable IDs, shuffled visually):** `a` I'm in the shop. · `b` I'm coming from the shop. · `c` I'm going to the shop.. **Correct:** `b` I'm coming from the shop..  
**Wrong option `a`:** Olen kaupassa means I'm in the shop.  
**Wrong option `c`:** Menen kauppaan means I'm going to the shop.  
**Correct feedback:** Tulen kaupasta means I'm coming from the shop.  
**Wrong feedback:** Kaupasta indicates from the shop, not in or to.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** I'm coming from the shop.  
**Hint:** None. **Linked:** `vocab.kauppa`, `grammar.getting-around.location-source`. **Scored:** `grammar.getting-around.location-source`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**F18 — `ex.getting-around.simple-directions.a1-introduction`** · `multiple_choice` · intent `cumulative_recognition` · difficulty `cumulative`  
**Prompt:** In a friendly introduction, what does Hei! Olen Aino. mean?  
**Stimulus:** Hei! Olen Aino. (Unit 1 greeting and self-introduction; fictional Aino).  
**Options (stable IDs, shuffled visually):** `a` Hi! I'm Aino. · `b` Goodbye! I am a taxi. · `c` I have a sister.. **Correct:** `a` Hi! I'm Aino..  
**Wrong option `b`:** Taksi wasn't mentioned; Hei is a greeting, not goodbye.  
**Wrong option `c`:** Minulla on sisko would say I have a sister; this sentence just introduces the person.  
**Correct feedback:** Hei! Olen Aino. means Hi! I'm Aino.  
**Wrong feedback:** Hei is a greeting and olen introduces yourself.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Hi! I'm Aino.  
**Hint:** None. **Linked:** `vocab.hei`, `vocab.olla`, `phrase.olen-slot`. **Scored:** none. **Review eligible:** false, guided or stage capability-only. **Editorial:** `needs_review`.  

**F19 — `ex.getting-around.simple-directions.a1-today-coffee`** · `text_input` · intent `cumulative_recall` · difficulty `cumulative`  
**Prompt:** Type 'Today I drink coffee' using previously taught Unit 5 and Unit 6 forms.  
**Stimulus:** A fictional person says what they drink today. Do not introduce new food grammar.  
**Accepted after N1:** `Tänään juon kahvia.`, `Juon kahvia tänään.`, `Minä juon kahvia tänään.`, `Tänään minä juon kahvia.`.   
**Correct feedback:** Tänään juon kahvia. reuses the food/drink and daily-life forms from earlier units.  
**Wrong feedback:** Use tänään, juon and the Unit 5 drink form kahvia.  
**Near feedback:** `Tänään juon kahvi` → Unit 5 taught kahvia for drinking coffee.  
**Not sure:** Write Tänään juon kahvia.  
**Hint:** None. **Linked:** `vocab.tanaan`, `vocab.juoda`, `vocab.kahvi`. **Scored:** none. **Review eligible:** false, guided or stage capability-only. **Editorial:** `needs_review`.  

**F20 — `ex.getting-around.simple-directions.a1-red-house`** · `text_input` · intent `cumulative_recall` · difficulty `cumulative`  
**Prompt:** Type 'The house is red' using Unit 4's house word and Unit 7's colour.  
**Stimulus:** A fictional concrete singular house is red.  
**Accepted after N1:** `Talo on punainen.`.   
**Correct feedback:** Talo on punainen. combines a known place noun with a familiar colour adjective.  
**Wrong feedback:** Use Talo on punainen; no plural adjective or mass-noun grammar is needed.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Write Talo on punainen.  
**Hint:** None. **Linked:** `vocab.talo`, `vocab.punainen`, `grammar.people.colour-statement`. **Scored:** none. **Review eligible:** false, guided or stage capability-only. **Editorial:** `needs_review`.  

**F21 — `ex.getting-around.simple-directions.a1-integrated-three-lines`** · `text_input` · intent `cumulative_capability` · difficulty `cumulative`  
**Prompt:** Write exactly THREE short Finnish sentences on separate lines for the fictional person: (1) Hi! I'm Aino. (2) Today I drink coffee. (3) I'm going downtown.  
**Stimulus:** Three independent English prompts in an integrated fictional day. Each sentence uses already authored content from Units 1, 3, 5, 6 and 8.  
**Accepted after N1, as three independent scoped text fields (in the stated order):**  
- **Line 1:** `Hei! Olen Aino.` OR `Moi! Olen Aino.` (both are valid Unit 1 informal greetings).  
- **Line 2:** `Tänään juon kahvia.` OR `Juon kahvia tänään.` OR `Minä juon kahvia tänään.` OR `Tänään minä juon kahvia.`.  
- **Line 3:** `Menen keskustaan.` OR `Minä menen keskustaan.`.  
**Canonical display model (one valid combination):** `Hei! Olen Aino.` / `Tänään juon kahvia.` / `Menen keskustaan.`.  
**Validation:** All three fields must independently match **one explicitly listed variant** via N1, in the specified line order. This is one capability-only result, `knowledgeScoring: false`, `scoredTargetIds: []`; no combinatorial sentence-string parser, fuzzy NLP or multi-target SRS credit.  
**Correct feedback:** Your three-line mini-story introduces a person, describes an everyday drink and expresses a simple journey downtown. It reuses A1 Foundations knowledge coherently.  
**Wrong feedback:** Use three taught sentences, one per line: Hei! Olen Aino. / Tänään juon kahvia. / Menen keskustaan. Do not add new grammar.  
**Near feedback:** None; an incorrect direction is not an Almost result.  
**Not sure:** Hei! Olen Aino. / Tänään juon kahvia. / Menen keskustaan.  
**Hint:** None. **Linked:** `vocab.hei`, `vocab.olla`, `vocab.tanaan`, `vocab.juoda`, `vocab.kahvi`, `phrase.getting-around.menen-keskustaan`. **Scored:** none. **Review eligible:** false, guided or stage capability-only. **Editorial:** `needs_review`.  

### Unit 8 capability and A1 Foundations stage completion

**Five Unit 8 capabilities:** F14 recognises a train in transport context; F15 independently asks where the station is; F16 independently states a downtown destination; F17 identifies a form meaning *from the shop*; F13 follows a 3-step straight/left/right instruction. The other F01–F12 tasks independently retrieve dictionary directions and two fixed production chunks. These checks are short and concrete; no user-provided live route or map is needed.

**A1 Foundations stage-capstone F18–F21:** F18 recognises a greeting/intro; F19 independently retrieves today's coffee sentence from Units 5–6; F20 independently retrieves a Unit 4/7 house-colour statement; F21 integrates three fixed independent lines about the fictional person Aino: greeting, everyday drink and downtown movement. This is **cross-unit capability evidence**, not a CEFR-certified exam or proof that every one of the 142 unique production lemmas is retained.

**Completion copy:** “You've reached the end of A1 Foundations. You can introduce yourself, use simple everyday Finnish and understand basic travel directions. Your vocabulary will continue returning in scheduled Review.” **Required steps:** 25; **optional spoken note:** one; **required exercise records:** 21; **matching decisions:** 4. **Stage complete flag:** only after all eight units' required lesson/checkpoint tasks have been attempted, regardless of perfect scores; scheduled knowledge, familiarity and due items remain independent. The next curriculum stage is not authored by this document.

## Part III — Independently authored scheduled-Review variants

Sixteen **standalone Review-only items** cover all nine Unit 8 recognition-only lemmas and seven targeted navigation/grammar/phrase distinctions. They are **not mandatory lesson exercises** and are not optional Word Match activities. Review is selected only by the existing due scheduler after actual formal encounter and internal editorial approval. All use `multiple_choice`, intent `recognition`, `sourceType: original`, `editorialStatus: needs_review`, stable shuffled option IDs, and explicit `scoredTargetIds` naming **only one** target per task. Recognition-only items never require unrestricted Finnish spelling.

**R01 — `ex.getting-around.review.pyora-bicycle`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** In a transport list, which English meaning belongs to pyörä?  
**Stimulus:** pyörä — recognition-only, transport context (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` bicycle · `b` train platform · `c` station. **Accepted:** `a` bicycle.  
**Wrong option `b`:** Laituri can mean train platform; pyörä is bicycle/wheel.  
**Wrong option `c`:** Asema means station.  
**Correct feedback:** Pyörä is commonly a bicycle in transport context, also wheel.  
**Wrong feedback:** Pyörä is commonly a bicycle in transport context, also wheel.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Pyörä is commonly a bicycle in transport context, also wheel.  
**Hint:** None. **Linked:** `vocab.pyora`. **Scored:** `vocab.pyora` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R02 — `ex.getting-around.review.matkalippu-travel-ticket`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What does matkalippu mean in a travel notice?  
**Stimulus:** matkalippu — recognition-only (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` travel ticket · `b` road · `c` rail station. **Accepted:** `a` travel ticket.  
**Wrong option `b`:** Tie is road.  
**Wrong option `c`:** Asema is station.  
**Correct feedback:** Matkalippu means travel ticket.  
**Wrong feedback:** Matkalippu means travel ticket.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Matkalippu means travel ticket.  
**Hint:** None. **Linked:** `vocab.matkalippu`. **Scored:** `vocab.matkalippu` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R03 — `ex.getting-around.review.laituri-platform`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** At a railway station, which English meaning fits laituri?  
**Stimulus:** laituri on a train information screen (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` taxi · `b` platform · `c` city centre. **Accepted:** `b` platform.  
**Wrong option `a`:** Taksi is taxi, not platform.  
**Wrong option `c`:** Keskusta is downtown, not platform.  
**Correct feedback:** Laituri names a train platform in this context; elsewhere it can be a pier.  
**Wrong feedback:** Laituri names a train platform in this context; elsewhere it can be a pier.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Laituri names a train platform in this context; elsewhere it can be a pier.  
**Hint:** None. **Linked:** `vocab.laituri`. **Scored:** `vocab.laituri` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R04 — `ex.getting-around.review.lento-flight`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What does lento mean in a transport listing?  
**Stimulus:** lento — recognition-only (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` flight · `b` route · `c` ticket. **Accepted:** `a` flight.  
**Wrong option `b`:** Reitti is route, not flight.  
**Wrong option `c`:** Lippu is ticket, not flight.  
**Correct feedback:** Lento means flight.  
**Wrong feedback:** Lento means flight.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Lento means flight.  
**Hint:** None. **Linked:** `vocab.lento`. **Scored:** `vocab.lento` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R05 — `ex.getting-around.review.lentokentta-airport`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What does lentokenttä mean?  
**Stimulus:** lentokenttä — recognition-only place (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` bus stop · `b` airport · `c` rail route. **Accepted:** `b` airport.  
**Wrong option `a`:** Pysäkki is a stop.  
**Wrong option `c`:** Reitti is route.  
**Correct feedback:** Lentokenttä is airport.  
**Wrong feedback:** Lentokenttä is airport.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Lentokenttä is airport.  
**Hint:** None. **Linked:** `vocab.lentokentta`. **Scored:** `vocab.lentokentta` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R06 — `ex.getting-around.review.myohassa-late`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** In Juna on myöhässä, what does myöhässä mean?  
**Stimulus:** Juna on myöhässä. (fictional train status) (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` late · `b` in time · `c` downtown. **Accepted:** `a` late.  
**Wrong option `b`:** Ajoissa means in time.  
**Wrong option `c`:** Keskusta is downtown.  
**Correct feedback:** Myöhässä means late.  
**Wrong feedback:** Myöhässä means late.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Myöhässä means late.  
**Hint:** None. **Linked:** `vocab.myohassa`. **Scored:** `vocab.myohassa` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R07 — `ex.getting-around.review.ajoissa-on-time`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What does ajoissa mean in Bussi on ajoissa?  
**Stimulus:** Bussi on ajoissa. (fictional punctual service) (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` a ticket · `b` in time / on time · `c` a train stop. **Accepted:** `b` in time / on time.  
**Wrong option `a`:** Lippu is ticket.  
**Wrong option `c`:** Pysäkki is stop.  
**Correct feedback:** Ajoissa means in time or on time.  
**Wrong feedback:** Ajoissa means in time or on time.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Ajoissa means in time or on time.  
**Hint:** None. **Linked:** `vocab.ajoissa`. **Scored:** `vocab.ajoissa` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R08 — `ex.getting-around.review.paasta-reach`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What is the practical navigation meaning of päästä?  
**Stimulus:** päästä — to reach/get to somewhere, recognition only (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` to drive · `b` to reach / get to · `c` to buy. **Accepted:** `b` to reach / get to.  
**Wrong option `a`:** Ajaa means drive.  
**Wrong option `c`:** Ostaa means buy, an earlier verb.  
**Correct feedback:** Päästä can mean to reach/get to a destination.  
**Wrong feedback:** Päästä can mean to reach/get to a destination.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Päästä can mean to reach/get to a destination.  
**Hint:** None. **Linked:** `vocab.paasta`. **Scored:** `vocab.paasta` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R09 — `ex.getting-around.review.ajaa-drive`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** In a transport context, what does ajaa usually mean?  
**Stimulus:** ajaa — recognition-only dictionary verb (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` to drive · `b` to sleep · `c` to leave. **Accepted:** `a` to drive.  
**Wrong option `b`:** Nukkua means to sleep.  
**Wrong option `c`:** Lähteä means leave or set off.  
**Correct feedback:** Ajaa means to drive in this context.  
**Wrong feedback:** Ajaa means to drive in this context.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Ajaa means to drive in this context.  
**Hint:** None. **Linked:** `vocab.ajaa`. **Scored:** `vocab.ajaa` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R10 — `ex.getting-around.review.kaupasta-source`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What does Tulen kaupasta say?  
**Stimulus:** Tulen kaupasta. The shop is the journey's source. (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` I'm going to the shop. · `b` I'm coming from the shop. · `c` I'm in the shop.. **Accepted:** `b` I'm coming from the shop..  
**Wrong option `a`:** Menen kauppaan is going to shop.  
**Wrong option `c`:** Olen kaupassa is in shop.  
**Correct feedback:** Kaupasta means from the shop, a finite -sta source form.  
**Wrong feedback:** Kaupasta means from the shop, a finite -sta source form.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Kaupasta means from the shop, a finite -sta source form.  
**Hint:** None. **Linked:** `grammar.getting-around.location-source`. **Scored:** `grammar.getting-around.location-source` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R11 — `ex.getting-around.review.bussilla-method`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** Which meaning belongs to Menen bussilla?  
**Stimulus:** Menen bussilla. (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` I'm going by bus. · `b` I'm inside/on the bus. · `c` I'm going to the bus stop.. **Accepted:** `a` I'm going by bus..  
**Wrong option `b`:** Olen bussissa expresses being in the bus.  
**Wrong option `c`:** Pysäkille would express to a stop, not by bus.  
**Correct feedback:** Menen bussilla describes the method of transport.  
**Wrong feedback:** Menen bussilla describes the method of transport.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Menen bussilla describes the method of transport.  
**Hint:** None. **Linked:** `grammar.getting-around.transport-method`. **Scored:** `grammar.getting-around.transport-method` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R12 — `ex.getting-around.review.tanne-motion`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** The speaker says Tule tänne. What should the other person do?  
**Stimulus:** Tule tänne. — fixed recognition-only imperative (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` come towards the speaker · `b` remain here without moving · `c` go away to another place. **Accepted:** `a` come towards the speaker.  
**Wrong option `b`:** Olen täällä would state an existing location.  
**Wrong option `c`:** Menen sinne would say go there.  
**Correct feedback:** Tänne means towards here, and Tule tänne asks someone to come.  
**Wrong feedback:** Tänne means towards here, and Tule tänne asks someone to come.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Tänne means towards here, and Tule tänne asks someone to come.  
**Hint:** None. **Linked:** `grammar.getting-around.here-there-movement`. **Scored:** `grammar.getting-around.here-there-movement` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R13 — `ex.getting-around.review.turn-left`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What does Käänny vasemmalle mean?  
**Stimulus:** Käänny vasemmalle. (fixed short direction) (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` turn right · `b` turn left · `c` go straight. **Accepted:** `b` turn left.  
**Wrong option `a`:** Right is oikealle.  
**Wrong option `c`:** Straight ahead is suoraan.  
**Correct feedback:** Vasemmalle is to the left; this fixed phrase is Turn left.  
**Wrong feedback:** Vasemmalle is to the left; this fixed phrase is Turn left.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** Vasemmalle is to the left; this fixed phrase is Turn left.  
**Hint:** None. **Linked:** `phrase.getting-around.kaanny-vasemmalle`. **Scored:** `phrase.getting-around.kaanny-vasemmalle` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R14 — `ex.getting-around.review.how-reach-centre`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** Which English question translates Miten pääsen keskustaan?  
**Stimulus:** Miten pääsen keskustaan? — recognition-only fixed question (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` How do I get downtown? · `b` Am I downtown now? · `c` Where is the bus ticket?. **Accepted:** `a` How do I get downtown?.  
**Wrong option `b`:** Olen keskustassa would state being downtown.  
**Wrong option `c`:** Lippu is a ticket and isn't being asked about.  
**Correct feedback:** The question asks how to reach the city centre; no productive pääsen paradigm is required.  
**Wrong feedback:** The question asks how to reach the city centre; no productive pääsen paradigm is required.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** The question asks how to reach the city centre; no productive pääsen paradigm is required.  
**Hint:** None. **Linked:** `phrase.getting-around.miten-paasen-keskustaan`. **Scored:** `phrase.getting-around.miten-paasen-keskustaan` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R15 — `ex.getting-around.review.where-bus-going`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** What does Minne tämä bussi menee ask?  
**Stimulus:** Minne tämä bussi menee? — fixed recognition phrase (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` Where does this bus go? · `b` Where is the bus stop? · `c` What time is it?. **Accepted:** `a` Where does this bus go?.  
**Wrong option `b`:** Pysäkki would refer to the stop, not the bus's destination.  
**Wrong option `c`:** Mitä kello on? asks the time.  
**Correct feedback:** The question asks where this bus goes.  
**Wrong feedback:** The question asks where this bus goes.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** The question asks where this bus goes.  
**Hint:** None. **Linked:** `phrase.getting-around.minne-tama-bussi-menee`. **Scored:** `phrase.getting-around.minne-tama-bussi-menee` only. **Review eligible:** true. **Editorial:** `needs_review`.  

**R16 — `ex.getting-around.review.route-straight-right`** · `multiple_choice` · standalone recognition · `reviewEligible: true`  
**Prompt:** Follow the two short instructions in order. Which route sequence is correct?  
**Stimulus:** 1. Mene suoraan. 2. Käänny oikealle. (self-contained; no prior lesson slide required).  
**Options (stable IDs, shuffle visually):** `a` straight, then right · `b` right, then straight · `c` straight, then left. **Accepted:** `a` straight, then right.  
**Wrong option `b`:** This reverses the order.  
**Wrong option `c`:** Vasemmalle is left, but the instruction says oikealle/right.  
**Correct feedback:** First go straight, then turn right.  
**Wrong feedback:** First go straight, then turn right.  
**Near feedback:** None; don't grant unsupported partial credit. **Not sure:** First go straight, then turn right.  
**Hint:** None. **Linked:** `grammar.getting-around.direction-instruction`. **Scored:** `grammar.getting-around.direction-instruction` only. **Review eligible:** true. **Editorial:** `needs_review`.  

## Part IV — Unit 8 and A1 Foundations completion contract

### Five practical Unit 8 abilities — explicit authored evidence

| Blueprint ability | Assessed task | Evidence level |
|---|---|---|
| Identify an appropriate transport noun | F14 (train), plus A05/A11/A12 and source-specific recognition | Contextual multiple choice |
| Ask where the station is | F15 `Missä asema on?` | **Independent production**, two explicitly accepted order variants |
| Say you're going downtown | F16 `Menen keskustaan.` | **Independent production** of a finite destination phrase |
| Understand movement from somewhere | F17 `Tulen kaupasta.`; E01/E02/E18/E19 | **Recognition of finite** source forms, not unrestricted production |
| Follow a straight/right/left instruction | F13 three-step route; R16 two-step due Review | **Ordered comprehension**, no graphical map needed |

### Small cross-unit A1 Foundations closing assessment

F18 recognises `Hei! Olen Aino.` (Unit 1). F19 independently retrieves `Tänään juon kahvia.` (Unit 5 food + Unit 6 routine). F20 independently retrieves `Talo on punainen.` (Unit 4 place + Unit 7 description). F21 combines a three-line fictional story, with the exact accepted model:

```text
Hei! Olen Aino.
Tänään juon kahvia.
Menen keskustaan.
```

This is **one capability-only exercise**: `knowledgeScoring: false`, `scoredTargetIds: []`. The English cues specify all three required meanings and order; no open-ended AI grade. If N1 cannot preserve line boundaries in one field, use three scoped `text_input` subfields with authored acceptance per sentence. Do not accidentally generate multiple vocabulary successes from a single reconstructed story.

### Stage-completion semantics

The app may mark `stage.a1-foundations` **curricularly complete** after all eight units' required lessons and checkpoints have been attempted (including explicit Not sure), without a perfect-score requirement. Knowledge state and scheduled Review due dates remain separate and may continue after completion. No automatic “CEFR A1 certified” or permanently mastered labels. Any next-stage content remains deferred.

### Scope and source note

Unit 8 reuses actual Unit 4 phrases `Missä se on?` and `Minne menet?` as Review. It intentionally does not teach all six local cases, generate arbitrary destination/source forms, generalise imperatives, score recognition-only `päästä` as productive, invent dynamic transit schedules, or add a map/audio system. Source evidence and editorial limits are documented in the companion QA file; no external teacher has reviewed this full authored set. Owner approval is sufficient for internal authoring status.

