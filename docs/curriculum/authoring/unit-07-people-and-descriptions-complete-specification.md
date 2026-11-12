# Vokri — Unit 7: People & Descriptions · Complete Lesson & Exercise Specification

**Version:** 1.0 draft authoring · **Learning language:** `fi` · **Unit:** `unit.people-and-descriptions` · **Course:** `course.fi` · **Stage:** `stage.a1-foundations`.  
**Editorial:** All new content has `editorialStatus: needs_review`, `reviewedBy: null`, `reviewedAt: null`. Explicit Vokri product-owner approval is sufficient for the project's internal authoring workflow; no teacher certification is claimed.  
**Scope:** Original fully authored content for Finnish A1 only. No app code, Figma changes, CSV edits, authoring-standard updates or changes to Units 1–6.

Read the [authoring standard](./exercise-authoring-standard-v1.md), [Unit 6 specification](./unit-06-daily-life-complete-specification.md), [A1 blueprint](../a1_foundations_curriculum_blueprint.md), [vocabulary CSV](../vocabulary/finnish_2000_curated.csv), [learning architecture](../../architecture/content_learning_data_architecture_specification.md), [Unit 7 coverage and QA](./unit-07-coverage-and-qa.md) and [Unit 7 implementation notes](./unit-07-implementation-notes.md).

## Part I — Authoritative scope and assessment contract

### Learner-facing capability

“Talk about family and close relationships, say who has or doesn't have something, recognise a simple possessive form, and describe people and familiar objects using basic adjectives and colours.”

All scenarios use **fictional people**. Do not require students to disclose a partner, sibling, family structure, age, health, or appearance. Standard Finnish is required for productive answers; colloquial notes are recognition-only.

### Production-role inventory — 20 targets

| Lemma (canonical ID) | Rank | First production-role introduction | Scope |
|---|---:|---|---|
| `perhe` (`vocab.perhe`) | 155 | 7.1 | family |
| `äiti` (`vocab.aiti`) | 151 | 7.1 | mother |
| `isä` (`vocab.isa`) | 152 | 7.1 | father |
| `veli` (`vocab.veli`) | 153 | 7.1 | brother |
| `sisko` (`vocab.sisko`) | 154 | 7.1 | sister |
| `kumppani` (`vocab.kumppani`) | 158 | 7.2 | partner, neutral relationship term |
| `ystävä` (`vocab.ystava`) | 156 | 7.2 | friend; **already encountered as Unit 2 recognition** |
| `kaveri` (`vocab.kaveri`) | 157 | 7.2 | friend / buddy, generally more informal |
| `kanssa` (`vocab.kanssa`) | 349 | 7.3 | with, used after an appropriately formed noun |
| `iso` (`vocab.iso`) | 116 | 7.4 | big |
| `pieni` (`vocab.pieni`) | 117 | 7.4 | small |
| `vanha` (`vocab.vanha`) | 119 | 7.4 | old |
| `nuori` (`vocab.nuori`) | 120 | 7.4 | young |
| `pitkä` (`vocab.pitka`) | 121 | 7.4 | tall / long, context dependent |
| `lyhyt` (`vocab.lyhyt`) | 122 | 7.4 | short, context dependent |
| `väri` (`vocab.vari`) | 297 | 7.5 | colour |
| `musta` (`vocab.musta`) | 298 | 7.5 | black |
| `valkoinen` (`vocab.valkoinen`) | 299 | 7.5 | white |
| `punainen` (`vocab.punainen`) | 300 | 7.5 | red |
| `sininen` (`vocab.sininen`) | 301 | 7.5 | blue |

**Vocabulary accounting:** 20 **production-role introductions**, of which **19 new lemma encounters** and **one role promotion** (`vocab.ystava`: Unit 2 recognition → Unit 7 production). Preserve its existing canonical ID and knowledge history; never create a second `ystävä` record or a false first encounter. The full 26-role/rank inventory was checked against the original unchanged 2,000-lemma CSV. Previously taught *hän, asua, olla, lapsi, tämä* remain support and are not new targets.

### Six recognition-only lemmas

| Item | ID | Rank | First encounter |
|---|---|---:|---|
| poika — boy / son, context dependent | `vocab.poika` | 149 | 7.1 |
| tyttö — girl / daughter, context dependent | `vocab.tytto` | 150 | 7.1 |
| kaunis — beautiful | `vocab.kaunis` | 132 | 7.4 |
| mukava — nice / pleasant | `vocab.mukava` | 134 | 7.4 |
| silmä — an eye | `vocab.silma` | 273 | 7.5 |
| hius — a hair / hair strand | `vocab.hius` | 431 | 7.5 |

These may be encountered and independently recognised, not required as unrestricted typed Finnish production. Do not introduce plural eye/hair descriptions or pretend *hius* simply denotes a whole hairstyle.

### Finite taught forms and grammatical boundaries

| Lesson | Canonical noun/word | Authored form | Meaning/use | Boundary |
|---|---|---|---|---|
| 7.2 | sisko | `siskoa` | No sister: `Minulla ei ole siskoa.` | The negative possession phrase is taught as a whole; no general partitive generator |
| 7.2 | veli | `veljeä` | No brother: `Minulla ei ole veljeä.` | Stem changes: not `velia` |
| 7.2 | kumppani | `kumppania` | No partner: `Minulla ei ole kumppania.` | Optional additional authored negative, not blanket pattern |
| 7.2 | ystävä | `ystävää` | Recognition of `ei ole ystävää` | Already known canonical lemma, promoted to production |
| 7.3 | äiti | `äidin` | mother's / of mother | Stem change, not `äitin` |
| 7.3 | isä | `isän` | father's | Simple taught form |
| 7.3 | veli | `veljen` | brother's | Stem change |
| 7.3 | sisko | `siskon` | sister's | Taught form |
| 7.3 | ystävä | `ystävän` | friend's | Only taught with clear noun/phrase context |
| 7.3 | kaveri | `kaverin` | buddy's / friend's | Taught form |
| 7.3 | kumppani | `kumppanin` | partner's and `kumppanin kanssa` | Genitive before kanssa |
| 7.3 | Aino / Emma | `Ainon` / `Emman` | simple name-genitive | Example proper names, not separate vocab lemmas |
| 7.4 | singular adjective | `Hän on pitkä.` | a person is tall | No plural agreement or full predicate grammar |
| 7.5 | singular concrete subject | `Talo on punainen.` | house is red | No adjective before noun agreeing with cases |

**Positive possession:** `Minulla on sisko.`, `Sinulla on veli.` The verb remains `on` in both; *minulla olen* and *sinulla olet* are not taught. **Negative possession:** `Minulla ei ole siskoa.`, `Minulla ei ole veljeä.`, `Minulla ei ole kumppania.` Compare a **taught** affirmative to its corresponding **taught** negative. Do not infer arbitrary partitive forms from a one-size suffix rule.  
**Genitive:** `Ainon sisko`, `Emman veli`, `äidin nimi`, `veljen nimi`. Only relevant authored noun stems and proper names; avoid a full case paradigm or `minun sisko` without proper formal possessive-suffix treatment.  
**Postposition:** `Asun kumppanin kanssa.`, `Asun ystävän kanssa.` `kanssa` follows an authored genitive. It is not a generic modifier to attach to nominative words.  
**Predicative singular adjectives:** `Hän on nuori.`, `Hän on pitkä.`, `Talo on iso.`; `talo` and `huone` are already production words from Unit 4. A predicative colour adjective is a **nominative singular** in simple concrete-subject sentences; avoid the different pattern used with mass nouns.  
**Spoken recognition only:** `minulla on → mulla on`, `sinulla on → sulla on`, `minun → mun`, `kanssa → kaa`. Register and dialect vary. No compulsory spoken spelling.

### Grammar and phrase target registry

| Stable target | Introduced | Learner role |
|---|---|---|
| `grammar.people.possession-positive` | 7.2 | I have / you have with `minulla/sinulla on` |
| `grammar.people.possession-negative` | 7.2 | `minulla ei ole` plus the **specified** noun-partitive |
| `grammar.people.genitive-restricted` | 7.3 | finite -n possessive noun/name forms |
| `grammar.people.kanssa-genitive` | 7.3 | finite genitive + kanssa expression |
| `grammar.people.predicative-singular` | 7.4 | `Hän/Talo/Huone on + adjective` |
| `grammar.people.colour-statement` | 7.5 | familiar singular subject + `on` + colour adjective |
| `phrase.people.minulla-on` | 7.2 | productive positive possession pattern |
| `phrase.people.sinulla-on` | 7.2 | productive second-person possession pattern |
| `phrase.people.minulla-ei-ole` | 7.2 | fixed negative possession frame |
| `phrase.people.asun-kumppanin-kanssa` | 7.3 | productive *taught* concrete example |
| `phrase.people.han-on-pitka` | 7.4 | exemplar of predicate pattern, **not** a duplicate scored lexical item |

Don't create scored PhraseItems for every single-word vocabulary utterance; score phrase/grammar only when the particular structure is independently retrieved, not each incidental visible word.

### Shared exercise, feedback and scoring contract

- Unit steps: `step.people-and-descriptions.<lesson-slug>.<suffix>`. Exercises: `ex.people-and-descriptions.<lesson-slug>.<slug>`. Review only: `ex.people-and-descriptions.review.<slug>`. Validate uniqueness.
- Supported LessonStep types: `explanation`, `vocabulary_intro`, `phrase_intro`, `grammar_explanation`, `spoken_note`, `example_set`, `exercise`, `checkpoint`. Supported kinds: `multiple_choice`, `text_input`, `token_build`, `matching`, `transform`.
- The first formal introduction is a step encounter, not a word appearing incidentally in a distractor; the `ystävä` promotion retains its earlier encounter.
- For every required exercise, author prompt, stimulus, stable option IDs where needed, exact accepted response(s), correct/wrong/near/Not sure feedback, linked targets, narrowly scored targets, review eligibility and `needs_review`.
- Deterministic N1: Unicode NFC; trim/collapse whitespace, conditionally ignore case/terminal punctuation. Preserve `ä/ö`, long vowels, consonants and word boundaries. No AI/fuzzy grading.
- **Token-build:** supply **lowercase lexical tiles** where either order can be accepted; capitalize the assembled sentence-initial word in the renderer. Don't advertise a grammatically correct alternate that the supplied tiles cannot form.
- **Matching:** independent per-pair first-attempt evidence, no board-wide auto-success; lemma/gloss ambiguity must be controlled. 2–4 pair lesson-local boards are allowed despite optional Word Match's four-pair session threshold.
- **Wrong vs Almost compatibility:** semantic errors show “Another look” or form-specific feedback; the existing `correct|almost|not_sure` storage adapter may provisionally classify fully wrong as non-success `almost`, but the UI must never claim a fully wrong answer was almost right. Propose a shared engine change separately if needed.
- **Progress:** required steps visited, required exercises attempted or Not sure, checkpoint attempted, no perfect-score gate. Only explicit `scoredTargetIds` receive outcomes, and supplied-token / composite capability exercises may have `knowledgeScoring: false`, `scoredTargetIds: []`.
- Scheduled Review uses the existing due scheduler; optional Flashcards/Word Match/My Words practice does **not** clear due dates or award official lesson completion.
- All new content is `sourceType: original` and `editorialStatus: needs_review`, with no external reviewer name.

### Duration and pacing policy

Lessons 7.2 and 7.3 introduce important grammar, so plan natural pause/resume boundaries in their step tables. Do not force the same exercise number per lesson. Estimates will be explicitly stated as untested; the actual number of required exercises and matching pair decisions will be computed from authored records and verified in the coverage/QA file.

## Part II — Fully authored lessons

