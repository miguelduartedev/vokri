# Vokri — Unit 6: Daily Life · Complete Lesson & Exercise Specification

**Content version:** 1.0 authoring · **Date:** 12 November 2026 · **Learning language:** `fi` · **Stage:** `stage.a1-foundations` · **Course:** `course.fi` · **Unit:** `unit.daily-life`.  
**Editorial status:** Every new exercise, example, chunk and explanation is `needs_review` with `reviewedBy: null` and `reviewedAt: null`. The product owner's explicit approval satisfies the internal editorial workflow; no teacher review is falsely claimed.  
**Scope:** Fully authored learning documentation, not Expo code. Existing A1 Blueprint, the Finnish 2,000-lemma CSV, Units 1–5, Figma and the content architecture are unchanged.

Read this alongside [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), the [merged Unit 5 authoring specification](./unit-05-food-and-quantities-complete-specification.md), [A1 curriculum blueprint](../a1_foundations_curriculum_blueprint.md), [Unit 6 coverage & QA](./unit-06-coverage-and-qa.md), [Unit 6 implementation notes](./unit-06-implementation-notes.md) and [learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## Part I — Unit objective, vocabulary, linguistic boundaries and content contract

### Learner-facing capability and prerequisites

**Goal:** “Describe a small part of your day, tell a whole-hour time, say what day something happens, and explain how often you do something.” Six lessons, ordered 6.1–6.6. Prerequisite: Unit 5 completion (course progression, not proof of mastery).

**Prerequisite knowledge:** Unit 1 greetings/numbers and `minä olen`; Unit 2 `se/tämä` (not productive object case); Unit 3 `menen`, `tulen`, `teen`, `haluan`, `voin`; Unit 4 `kotona`, `kotiin`, `kauppaan`, `kahvilassa` as taught chunks; Unit 5 `kahvia`, `teetä`, `vettä`, `ruokaa`, `leipää`, `lounasta`, `omenaa` as already authored practical food/drink forms. Never assign new Unit 6 “encounter” events to those previously encountered targets.

### Exact production vocabulary — 21 new lemmas, verified against the authoritative source

| New lemma (canonical ID is `vocab.<ASCII transliteration>`) | English meaning | Pedagogical rank | First formal lesson |
|---|---|---:|---|
| `aamu` | morning | 170 | 6.1 |
| `ilta` | evening | 171 | 6.1 |
| `herätä` | to wake up | 93 | 6.1 |
| `nukkua` | to sleep | 92 | 6.1 |
| `syödä` | to eat | 90 | 6.2 |
| `juoda` | to drink | 91 | 6.2 |
| `tänään` | today | 173 | 6.2 |
| `huomenna` | tomorrow | 175 | 6.2 |
| `kello` | clock / o’clock | 581 (Everyday) | 6.3 |
| `aika` | time | 162 | 6.3 |
| `maanantai` | Monday | 176 | 6.4 |
| `tiistai` | Tuesday | 177 | 6.4 |
| `keskiviikko` | Wednesday | 178 | 6.4 |
| `torstai` | Thursday | 179 | 6.4 |
| `perjantai` | Friday | 180 | 6.5 |
| `lauantai` | Saturday | 181 | 6.5 |
| `sunnuntai` | Sunday | 182 | 6.5 |
| `lähteä` | to leave / set off | 85 | 6.5 |
| `aina` | always | 42 | 6.6 |
| `usein` | often | 43 | 6.6 |
| `joskus` | sometimes | 44 | 6.6 |

**Only `kello` is Everyday-tier among these 21.** Do not treat inflected forms as new lemmas, and do not classify support words as newly encountered.

### Exact recognition vocabulary — seven non-production items

| Lemma | Rank | Formal introduction | Limit |
|---|---:|---|---|
| `päivä` | 163 | 6.3 | Meaning “day” only; no required Finnish typed answer |
| `viikko` | 164 | 6.4 | “Week” recognition; no plural grammar |
| `kuukausi` | 165 | 6.4 | “Month” recognition; months not active vocabulary |
| `tunti` | 167 | 6.3 | “Hour” as *duration*; distinguish from `kello` |
| `minuutti` | 168 | 6.3 | “Minute”; no minute-level clock calculations |
| `eilen` | 174 | 6.2 | “Yesterday” recognition; no past-tense production |
| `nousta` | 519 (Everyday) | 6.1 | “Rise/get up”; distinct from `herätä`; recognition only |

### Support vocabulary and earlier targets

`vocab.menna`, `vocab.tulla`, `vocab.tehda`, `vocab.koti`, `vocab.tyo`, `vocab.kahvi` and appropriate previously reached words/chunks from Units 1–5. Do not score previously learned words merely because they appear in contextual stimuli.

### Authored, finite teaching-form registry

| Canonical lemma | Approved-for-authoring teaching form | Pedagogical use |
|---|---|---|
| `vocab.herata` | `herään` | I wake up |
| `vocab.nukkua` | `nukun` | I sleep |
| `vocab.syoda` | `syön` | I eat |
| `vocab.juoda` | `juon` | I drink |
| `vocab.lahtea` | `lähden` | I leave / set off |
| `vocab.aamu` | `aamulla` | in the morning — fixed time expression |
| `vocab.ilta` | `illalla` | in the evening — fixed time expression |
| `vocab.maanantai` | `maanantaina` | on Monday (specific Monday) |
| `vocab.tiistai` | `tiistaina` | on Tuesday |
| `vocab.keskiviikko` | `keskiviikkona` | on Wednesday (note the extra k in the stem) |
| `vocab.torstai` | `torstaina` | on Thursday |
| `vocab.perjantai` | `perjantaina` | on Friday |
| `vocab.lauantai` | `lauantaina` | on Saturday |
| `vocab.sunnuntai` | `sunnuntaina` | on Sunday |

These are **explicitly authored teaching forms**, not the output of a general morphological generator. Standard-Finnish output remains the productive target. Spoken `lähden → lähen`, and earlier `menen → meen`/`tulen → tuun`, are recognition-only notes with no independent review score.

### Scoped grammar and phrase/chunk classification

| Concept / phrase ID | Scope and teaching decision | Scoring policy |
|---|---|---|
| `grammar.daily-life.first-person-forms` | Recognise/produce only five taught `minä` forms; no verb-type table | Score **only** explicit person-form tasks |
| `grammar.daily-life.daypart-fixed-forms` | `aamulla`/`illalla` fixed temporal forms | Recognition / controlled application, not general adessive paradigm |
| `grammar.daily-life.whole-hour-time` | `Kello on viisi.` and `Herään kello viisi.` | Score correct construct **when taught**, not arbitrary ablative derivation |
| `grammar.daily-life.weekday-time-forms` | Seven explicitly taught `-na` weekday expressions; `keskiviikkona` irregular stem pattern as whole form | Score selected form or guided application; no general essive productivity |
| `grammar.daily-life.frequency-placement` | `aina`, `usein`, `joskus` used naturally with known first-person verbs | Score only when target actually retrieved |
| `phrase.daily-life.kello-on-hour` | `Kello on {hour}.` reusable production pattern | Can score phrase once for a focused clock utterance |
| `phrase.daily-life.mita-kello-on` | `Mitä kello on?` fixed **recognition** chunk, without teaching `mitä` case | Recognition-only |
| `phrase.daily-life.naehdaan-huomenna` | `Nähdään huomenna!` entirely **new recognition chunk**, not REVIEW: absent from approved Unit 1–5 source specs | No required production / no separate grammar paradigms |
| `Herään …`, `Nukun …`, `Maanantaina …`, `Lähden …` | Examples/forms of existing lemmas plus temporal expressions, **not duplicate independent familiarity records** | Score correct lemma/form or explicit grammar as appropriate |
| `Teen tämän usein.` | Fixed illustrative sentence with previously encountered `tehdä/tämä`; `tämän` not independently productive | **Recognition/example only**, no independent phrase knowledge |

**Time boundary:** Productive `Kello on viisi.` states the hour; `Herään kello viisi.` states when waking. `Herään viideltä.` is a correct alternate construction but is **recognition-only when mentioned** and excluded from required answers here. Never show `Herään kello viideltä` as the target. No “half past”, quarters, general ablative or plurals. Production clocks restrict required word spelling to already productive numerals `yksi`–`viisi`; 6–10 are recognition by supplied text/options unless deliberately authored as new forms (not done here).

**Weekday semantic boundary:** `maanantaina` normally points to **on (a particular) Monday**, not automatically “every Monday”; habitual “on Mondays” can use `maanantaisin` but is **deferred**. A weekly routine can still describe weekday activities through specific-day examples without equating them to habitual grammatical frequency.

**No newly authored audio, speech recognition, web interaction, AI grading, or new case conjugator.**

### Shared assessment contract — applies to every exercise below

- Stable IDs: `ex.daily-life.<lesson-slug>.<unique-slug>`; LessonSteps `step.daily-life.<lesson-slug>.<unique-suffix>`.
- Supported kinds: `multiple_choice`, `text_input`, `token_build`, `matching`; `transform` only if justified. The `checkpoint` step type contains complete existing exercise records, not a new renderer.
- **N1 deterministic text normalisation:** Unicode NFC, trim/collapse whitespace, case-insensitive when the exercise allows, ignore permitted terminal punctuation only. Preserve `ä/ö` versus `a/o`, long-vowel spelling, word boundaries and the lexical stem. Near forms require explicit authored triggers; do not use edit-distance or AI grading.
- Correct, wrong and Not sure are separate visible feedback states. Under the existing legacy `correct|almost|not_sure` scheduler interface, a fully wrong answer may temporarily use the **non-success** `almost` event **without displaying “Almost!”**. See implementation notes; never give false success or rewrite the shared scheduler silently.
- Multiple-choice answer keys bind **option IDs**, not displayed position. Shuffled options retain keyed per-option incorrect feedback.
- Matching pairs are separately validated and scored on **first attempt** only. A corrected retry is guided practice, not an extra independent recall success. Lesson-local matching can contain two/three pairs; the optional Word Match feature's four-pair setup minimum does not apply.
- Only explicit `scoredTargetIds` update the selected target. A supplied sentence/dialogue does not grant recall to every word it contains. A capability-only checkpoint has `scoredTargetIds: []` with `knowledgeScoring: false`.
- A lesson completes after **all required steps have been visited** and all required exercises and its checkpoint have been **attempted or answered Not sure**; no perfect-score gate. Pause/resume is supported at natural teaching boundaries.
- Every new authored record: `sourceType: original`; `editorialStatus: needs_review`; `reviewedBy: null`. Dataset examples are editorial references, not release-approved examples.
- Exercise `reviewEligible: true` means the prompt stands alone with its complete stimulus, and the target was formally encountered; selecting a due item remains the **existing scheduled Review** engine's responsibility.
- Optional Flashcards and Word Match sessions do **not** advance scheduled due dates, course completion or permanent mastery.

### Workload and estimated study duration

The six lessons are intentionally not forced to a common number of interactions. Unit 6 has 21 new production lemmas (more than Unit 5's 16), and weekday/time lessons demand extra guided retrieval. **All durations below are untested editorial estimates.** Mandatory exercise counts and matching-pair decisions will be computed from the final authored records in the companion QA file, not declared in advance.

## Part II — Six fully authored lessons

