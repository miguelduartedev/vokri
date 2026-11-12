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

