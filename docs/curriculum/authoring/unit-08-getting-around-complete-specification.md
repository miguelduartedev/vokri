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

