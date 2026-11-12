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

## Lesson 6.1 — Morning and evening

**Lesson ID:** `lesson.daily-life.morning-evening` · **Unit:** `unit.daily-life` · **Language:** `fi` · **Order:** 1 · **Est. time:** 9–13 minutes (untested).  
**Capability:** Recognise morning and evening and produce natural first-person waking/sleeping statements.  
**Prerequisite:** `lesson.food-and-quantities.cafe-shop-review`. **New production:** `vocab.aamu`, `vocab.ilta`, `vocab.herata`, `vocab.nukkua`. **New recognition:** `vocab.nousta`. **Grammar:** `grammar.daily-life.first-person-forms`, `grammar.daily-life.daypart-fixed-forms`. **Review context:** `vocab.koti`, `vocab.olla`, `vocab.menna`.  
**Completion:** visit all required steps; attempt each exercise or select Not sure; no perfect-score gate. **Pause/resume:** After A06 before the first-person forms.

### Ordered learner experience

Full IDs: `step.daily-life.morning-evening.<step-suffix>`; all texts below are exact learner-facing content. Formal encounter is marked only for deliberate introduction.

| # | Step suffix | Type | Learner-facing copy or exercise ref | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Morning and evening.** You already know simple actions; now you'll describe waking and sleeping. Learn two time-of-day words, two actions and the forms that say what *I* do. There is no long verb table. | none | Yes |
| 2 | `day-nouns` | `vocabulary_intro` | **aamu — morning; ilta — evening.** These are the dictionary words for the two parts of the day. You will later see different forms when saying *in the morning* and *in the evening*. | `vocab.aamu`, `vocab.ilta` | Yes |
| 3 | `two-verbs` | `vocabulary_intro` | **herätä — to wake up; nukkua — to sleep.** Waking up is the change from asleep to awake; sleeping is the ongoing activity. Both are useful dictionary forms. | `vocab.herata`, `vocab.nukkua` | Yes |
| 4 | `get-up-note` | `vocabulary_intro` | **nousta — to get up / rise.** Recognition only: if you wake up and then stand up, nousta describes the second action. No production or conjugation is expected. | `vocab.nousta` | Yes |
| 5 | `practice-01` | `exercise` | A01 | none | Yes |
| 6 | `practice-02` | `exercise` | A02 | none | Yes |
| 7 | `practice-03` | `exercise` | A03 | none | Yes |
| 8 | `practice-04` | `exercise` | A04 | none | Yes |
| 9 | `practice-05` | `exercise` | A05 | none | Yes |
| 10 | `practice-06` | `exercise` | A06 | none | Yes |
| 11 | `i-forms` | `grammar_explanation` | **What I do.** In a statement, the verb looks different from its dictionary form: **herätä → herään** (I wake up), **nukkua → nukun** (I sleep). Learn both exact forms; not every Finnish verb follows one simple add-n shortcut. | `grammar.daily-life.first-person-forms` | Yes |
| 12 | `practice-07` | `exercise` | A07 | none | Yes |
| 13 | `practice-08` | `exercise` | A08 | none | Yes |
| 14 | `practice-09` | `exercise` | A09 | none | Yes |
| 15 | `daypart` | `grammar_explanation` | **When?** The noun aamu appears as **aamulla** (in the morning); ilta appears as **illalla** (in the evening). Treat these as two useful fixed forms, not a general -lla case table. | `grammar.daily-life.daypart-fixed-forms` | Yes |
| 16 | `examples` | `example_set` | **Herään aamulla.** — I wake up in the morning. **Illalla olen kotona.** — In the evening I am at home. **Nukun kotona.** — I sleep at home. The known words olen/kotona are review context, not new encounters. | none | Yes |
| 17 | `practice-10` | `exercise` | A10 | none | Yes |
| 18 | `practice-11` | `exercise` | A11 | none | Yes |
| 19 | `optional-spoken` | `spoken_note` | Optional spoken recognition recap: earlier **meen** (menen) and **tuun** (tulen) may appear in everyday conversations. No new spoken spelling is assessed in this lesson. | none | No |
| 20 | `final-checkpoint` | `checkpoint` | **Lesson checkpoint:** A12–A14; answer contextual waking/sleeping and time-of-day questions. Not sure is permitted. All constituent exercises have their own answer/feedback. | none | Yes |

### Complete authored exercises

Every exercise below has `sourceType: original`, `editorialStatus: needs_review`, `reviewedBy: null`, and `learningLanguage: fi`. Each first attempted result commits no more than the explicit scored targets. N1 normalisation applies to all text answers.

**A01 — `ex.daily-life.morning-evening.morning-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** A schedule says aamu. Which part of the day is that?  
**Stimulus:** aamu  
**Options (stable IDs, shuffle in UI):** `a` morning · `b` evening · `c` tomorrow. **Correct option:** `a` morning.  
**Wrong option `b`:** Ilta is evening, not aamu.  
**Wrong option `c`:** Huomenna is tomorrow, not a part of the day.  
**Correct feedback:** Aamu means morning.  
**Wrong feedback:** Aamu is the morning; ilta is the evening.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** Aamu means morning.  
**Hint:** None. **Linked:** `vocab.aamu`, `vocab.ilta`. **Scored:** `vocab.aamu`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A02 — `ex.daily-life.morning-evening.evening-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which Finnish word means evening?  
**Stimulus:** A person is describing the later part of the day.  
**Options (stable IDs, shuffle in UI):** `a` aamu · `b` ilta · `c` tänään. **Correct option:** `b` ilta.  
**Wrong option `a`:** Aamu is morning.  
**Wrong option `c`:** Tänään means today; it doesn't name the evening.  
**Correct feedback:** Ilta names the evening.  
**Wrong feedback:** Ilta means evening, not morning or today.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** The word is ilta.  
**Hint:** None. **Linked:** `vocab.aamu`, `vocab.ilta`. **Scored:** `vocab.ilta`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A03 — `ex.daily-life.morning-evening.wake-sleep`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the two activity verbs with their meanings.  
**Stimulus:** Two dictionary-form actions.  
**Matching pairs (2 decisions):** (1) **herätä** ↔ **wake up**, first-attempt target `vocab.herata`; (2) **nukkua** ↔ **sleep**, first-attempt target `vocab.nukkua`. Columns shuffle independently.  
**Correct feedback:** Herätä means wake up; nukkua means sleep.  
**Wrong feedback:** Waking is becoming awake; sleeping is the state before that.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** herätä → wake up; nukkua → sleep.  
**Hint:** None. **Linked:** `vocab.herata`, `vocab.nukkua`. **Scored:** `vocab.herata`, `vocab.nukkua`. **Review eligible:** No; depends on teaching context or board. **Editorial:** `needs_review`.  

**A04 — `ex.daily-life.morning-evening.recognise-get-up`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which meaning fits nousta in this context?  
**Stimulus:** Someone wakes up, then gets out of bed. Nousta describes the second action.  
**Options (stable IDs, shuffle in UI):** `a` to go to sleep · `b` to get up / rise · `c` to drink. **Correct option:** `b` to get up / rise.  
**Wrong option `a`:** Nukkua is to sleep; nousta means get up.  
**Wrong option `c`:** Juoda means to drink, not get up.  
**Correct feedback:** Nousta is to get up or rise; herätä is to wake up.  
**Wrong feedback:** Nousta is the movement of getting up, not falling asleep.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** Nousta means rise/get up; recognition only.  
**Hint:** None. **Linked:** `vocab.nousta`, `vocab.herata`. **Scored:** `vocab.nousta`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A05 — `ex.daily-life.morning-evening.write-aamu`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary word for “morning.”  
**Stimulus:** morning  
**Accepted after N1:** `aamu`. No unlisted synonym or spelling guesses.  
**Correct feedback:** Aamu is morning. Aamulla is a useful time expression.  
**Wrong feedback:** Write aamu, not a different time expression.  
**Near feedback:** `amu` → Write both a's: aamu has a long opening vowel.  
**Not sure feedback:** Write aamu.  
**Hint:** None. **Linked:** `vocab.aamu`. **Scored:** `vocab.aamu`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A06 — `ex.daily-life.morning-evening.write-ilta`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary word for “evening.”  
**Stimulus:** evening  
**Accepted after N1:** `ilta`. No unlisted synonym or spelling guesses.  
**Correct feedback:** Ilta is the noun. Illalla means in the evening.  
**Wrong feedback:** The Finnish word is ilta, not aamulla.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** Write ilta.  
**Hint:** None. **Linked:** `vocab.ilta`. **Scored:** `vocab.ilta`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A07 — `ex.daily-life.morning-evening.first-person-choice`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Which form says “I wake up”?  
**Stimulus:** You are talking about yourself.  
**Options (stable IDs, shuffle in UI):** `a` herään · `b` nukun · `c` herätä. **Correct option:** `a` herään.  
**Wrong option `b`:** Nukun means I sleep, a different action.  
**Wrong option `c`:** Herätä is the dictionary form, not the taught I-form.  
**Correct feedback:** Herään means “I wake up” and comes from herätä.  
**Wrong feedback:** Use herään for waking up in the first person.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** The taught I-form is herään.  
**Hint:** None. **Linked:** `vocab.herata`, `grammar.daily-life.first-person-forms`. **Scored:** `grammar.daily-life.first-person-forms`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A08 — `ex.daily-life.morning-evening.retrieve-heraan`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** Type “I wake up” in Finnish, using one taught verb.  
**Stimulus:** I wake up.  
**Accepted after N1:** `herään`. No unlisted synonym or spelling guesses.  
**Correct feedback:** Herään already includes “I” in the verb form.  
**Wrong feedback:** Write herään, not the dictionary form herätä.  
**Near feedback:** `heran` → Write both the long ää and final n: herään.; `heräänn` → There is only one final n in herään.  
**Not sure feedback:** Write herään.  
**Hint:** None. **Linked:** `vocab.herata`. **Scored:** `vocab.herata`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A09 — `ex.daily-life.morning-evening.retrieve-nukun`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** Type “I sleep” in Finnish as one word.  
**Stimulus:** I sleep.  
**Accepted after N1:** `nukun`. No unlisted synonym or spelling guesses.  
**Correct feedback:** Nukun is “I sleep”; the dictionary word is nukkua.  
**Wrong feedback:** Use nukun in a first-person statement, not nukkua.  
**Near feedback:** `nukkun` → Nukun has one k in the middle of the I-form.  
**Not sure feedback:** Write nukun.  
**Hint:** None. **Linked:** `vocab.nukkua`. **Scored:** `vocab.nukkua`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A10 — `ex.daily-life.morning-evening.daypart-context`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Which taught expression means “in the morning” in a routine?  
**Stimulus:** _____ herään. — In the morning, I wake up.  
**Options (stable IDs, shuffle in UI):** `a` illalla · `b` aamulla · `c` ilta. **Correct option:** `b` aamulla.  
**Wrong option `a`:** Illalla means in the evening.  
**Wrong option `c`:** Ilta is the dictionary noun evening, not the time phrase needed.  
**Correct feedback:** Aamulla describes when you wake up.  
**Wrong feedback:** The fixed time expression is aamulla, not the evening form.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** Choose aamulla for “in the morning”.  
**Hint:** None. **Linked:** `vocab.aamu`, `grammar.daily-life.daypart-fixed-forms`. **Scored:** `grammar.daily-life.daypart-fixed-forms`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A11 — `ex.daily-life.morning-evening.build-morning`** · `token_build` · intent `controlled_construction` · difficulty `controlled`  
**Prompt:** Put these two tiles in a natural order to say “I wake up in the morning.”  
**Stimulus:** The verb and time expression are supplied.  
**Shuffled tiles:** `aamulla`, `Herään`. **Accepted complete sequences:** `Herään aamulla.`, `Aamulla herään.`. Tokens are provided; this is guided construction, not independent spelling.  
**Correct feedback:** Herään aamulla and Aamulla herään both work naturally.  
**Wrong feedback:** Keep the taught verb herään and time expression aamulla together.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** One valid sentence is Herään aamulla.  
**Hint:** None. **Linked:** `vocab.herata`, `vocab.aamu`, `grammar.daily-life.daypart-fixed-forms`. **Scored:** `grammar.daily-life.daypart-fixed-forms`. **Review eligible:** No; depends on teaching context or board. **Editorial:** `needs_review`.  

**A12 — `ex.daily-life.morning-evening.sleep-context`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type the taught sentence “I sleep at home.”  
**Stimulus:** I sleep at home. Kotona was introduced in Unit 4.  
**Accepted after N1:** `Nukun kotona.`, `Minä nukun kotona.`. No unlisted synonym or spelling guesses.  
**Correct feedback:** Nukun kotona uses the known location word kotona.  
**Wrong feedback:** The verb is nukun, and “at home” is kotona.  
**Near feedback:** `nukkua kotona` → Use first-person nukun, not the dictionary form nukkua.  
**Not sure feedback:** Write Nukun kotona.  
**Hint:** None. **Linked:** `vocab.nukkua`, `vocab.koti`. **Scored:** `vocab.nukkua`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A13 — `ex.daily-life.morning-evening.contrast-wake`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** You have just opened your eyes. Which sentence means “I wake up”?  
**Stimulus:** Choose the action, not a location.  
**Options (stable IDs, shuffle in UI):** `a` Nukun. · `b` Herään. · `c` Olen kotona.. **Correct option:** `b` Herään..  
**Wrong option `a`:** Nukun means I sleep, not wake up.  
**Wrong option `c`:** Olen kotona says I am at home without naming this action.  
**Correct feedback:** Herään describes waking up, while nukun is sleeping.  
**Wrong feedback:** Waking up is herään; sleeping is nukun.  
**Near feedback:** None; don't invent near responses.  
**Not sure feedback:** Choose Herään.  
**Hint:** None. **Linked:** `vocab.herata`, `vocab.nukkua`. **Scored:** `vocab.herata`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

**A14 — `ex.daily-life.morning-evening.evening-fixed-form`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** Type the taught expression for “in the evening.”  
**Stimulus:** in the evening  
**Accepted after N1:** `illalla`. No unlisted synonym or spelling guesses.  
**Correct feedback:** Illalla tells when something happens; ilta is the noun.  
**Wrong feedback:** Use illalla for “in the evening”.  
**Near feedback:** `illala` → Write double l in illalla.; `ilala` → The taught form is illalla with both double-l positions.  
**Not sure feedback:** Write illalla.  
**Hint:** None. **Linked:** `vocab.ilta`, `grammar.daily-life.daypart-fixed-forms`. **Scored:** `grammar.daily-life.daypart-fixed-forms`. **Review eligible:** Yes; fully self-contained. **Editorial:** `needs_review`.  

### Lesson completion

**Ready to continue:** “You can recognise morning and evening and say when you wake or sleep.” 19 required LessonSteps; 14 required exercise records; one two-pair matching board produces an additional matching decision. Not sure is a valid attempt; no perfect score or permanent mastery claim. **Next:** Lesson 6.2 — Eat, drink, today, tomorrow. Any incorrect target enters the *existing* scheduled Review rules, not a second practice engine.

## Lesson 6.2 — Eat, drink, today, tomorrow

**ID:** `lesson.daily-life.eat-drink-today-tomorrow` · `unit.daily-life` · `fi` · Order 2 · **Duration:** 10–15 minutes (untested). **Prerequisite:** `lesson.daily-life.morning-evening`.  
**Capability:** Say what you eat/drink today or tomorrow using known food/drink forms. **New production:** `vocab.syoda`, `vocab.juoda`, `vocab.tanaan`, `vocab.huomenna`. **New recognition:** `vocab.eilen`. **Earlier unit reuse:** `vocab.kahvi`, `vocab.tee`, `vocab.vesi`, `vocab.leipa`, `vocab.ruoka`.  
**Completion:** all required steps and B01–B14 attempted or Not sure. **Pause:** After B05 before independent text recall. No perfect score, no new case lesson.

### Ordered learner experience

Full ID prefix `step.daily-life.eat-drink-today-tomorrow.` plus each suffix. Only the formal introductions emit new encounter events; review words are context only.

| # | Step suffix | Type | Exact teaching content / exercise | New formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Today and tomorrow.** You know foods and drinks from Unit 5. Now add two verbs so you can say what you eat and drink, and two time words so you can talk about today or tomorrow. | none | Yes |
| 2 | `dictionary-verbs` | `vocabulary_intro` | **syödä — to eat; juoda — to drink.** These are dictionary forms. Finnish changes the verb when you say what *I* do; you'll learn those exact forms shortly. | `vocab.syoda`, `vocab.juoda` | Yes |
| 3 | `time-words` | `vocabulary_intro` | **tänään — today; huomenna — tomorrow.** These short time words can appear before or after a familiar present-tense activity. | `vocab.tanaan`, `vocab.huomenna` | Yes |
| 4 | `yesterday-recognition` | `vocabulary_intro` | **eilen — yesterday.** Recognition only. You'll understand this when reading a calendar, but you do **not** need Finnish past-tense production in Unit 6. | `vocab.eilen` | Yes |
| 5 | `practice-01` | `exercise` | B01 | none | Yes |
| 6 | `practice-02` | `exercise` | B02 | none | Yes |
| 7 | `practice-03` | `exercise` | B03 | none | Yes |
| 8 | `practice-04` | `exercise` | B04 | none | Yes |
| 9 | `i-eat-i-drink` | `grammar_explanation` | **Talking about yourself:** syödä becomes **syön** (“I eat”); juoda becomes **juon** (“I drink”). Memorise these two useful forms, not an invented universal rule. You learned similar person changes earlier. | none | Yes |
| 10 | `practice-05` | `exercise` | B05 | none | Yes |
| 11 | `food-reuse` | `example_set` | **Juon kahvia.** — I drink coffee. **Syön leipää.** — I eat bread. The drink/food forms kahvia and leipää were taught in Unit 5; they are not newly introduced or independently scored here. | none | Yes |
| 12 | `practice-06` | `exercise` | B06 | none | Yes |
| 13 | `practice-07` | `exercise` | B07 | none | Yes |
| 14 | `practice-08` | `exercise` | B08 | none | Yes |
| 15 | `practice-09` | `exercise` | B09 | none | Yes |
| 16 | `practice-10` | `exercise` | B10 | none | Yes |
| 17 | `practice-11` | `exercise` | B11 | none | Yes |
| 18 | `temporal-context` | `grammar_explanation` | **No future tense required here.** Finnish often uses a present form with **huomenna** to talk about a future plan: **Huomenna juon vettä.** Keep this as a practical beginner sentence; do not learn a separate future conjugation. | none | Yes |
| 19 | `final-checkpoint` | `checkpoint` | **Lesson checkpoint B12–B14:** Build a taught day-and-drink sentence, distinguish today/tomorrow, and retrieve a complete phrase. All tasks are individually assessed. | none | Yes |
| 20 | `review-contrast` | `example_set` | **Tänään syön ruokaa.** — Today I eat food. **Huomenna juon teetä.** — Tomorrow I drink tea. The contrast is the time word and the action, not an unfamiliar noun inflection. | none | Yes |

### Complete authored exercises

All records: `sourceType: original`, `editorialStatus: needs_review`, `reviewedBy: null`, `learningLanguage: fi`; deterministic N1 and the shared wrong-vs-Almost adapter; no assumed review success.

**B01 — `ex.daily-life.eat-drink-today-tomorrow.eat-or-drink`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** You see the dictionary word syödä. Which action is it?  
**Stimulus:** syödä  
**Options:** `a` eat · `b` drink · `c` sleep; **correct:** `a` eat. Shuffle visually by option ID.  
**Wrong `b`:** Juoda means drink.  
**Wrong `c`:** Nukkua means sleep.  
**Correct:** Syödä means eat, while juoda means drink.  
**Wrong:** The action syödä is eating.  
**Near:** None; do not invent an Almost trigger.  
**Not sure:** Syödä is to eat.  
**Hint:** None. **Linked:** `vocab.syoda`, `vocab.juoda`. **Scored:** `vocab.syoda`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B02 — `ex.daily-life.eat-drink-today-tomorrow.drink-meaning`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** What does juoda mean?  
**Stimulus:** juoda  
**Options:** `a` to eat · `b` to drink · `c` to go; **correct:** `b` to drink. Shuffle visually by option ID.  
**Wrong `a`:** Syödä is eat, not drink.  
**Wrong `c`:** Mennä is go, an earlier action verb.  
**Correct:** Juoda is to drink.  
**Wrong:** Juoda is to drink; syödä is to eat.  
**Near:** None; do not invent an Almost trigger.  
**Not sure:** Juoda means drink.  
**Hint:** None. **Linked:** `vocab.juoda`, `vocab.syoda`. **Scored:** `vocab.juoda`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B03 — `ex.daily-life.eat-drink-today-tomorrow.today-tomorrow`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** You plan to do something on the next day, not today. Which word fits?  
**Stimulus:** tomorrow  
**Options:** `a` tänään · `b` huomenna · `c` aamulla; **correct:** `b` huomenna. Shuffle visually by option ID.  
**Wrong `a`:** Tänään means today.  
**Wrong `c`:** Aamulla means in the morning; it does not mean tomorrow.  
**Correct:** Huomenna means tomorrow; tänään means today.  
**Wrong:** The word for tomorrow is huomenna.  
**Near:** None; do not invent an Almost trigger.  
**Not sure:** Huomenna is tomorrow.  
**Hint:** None. **Linked:** `vocab.huomenna`, `vocab.tanaan`. **Scored:** `vocab.huomenna`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B04 — `ex.daily-life.eat-drink-today-tomorrow.eilen-recognition`** · `multiple_choice` · `recognition` · difficulty `foundation`  
**Prompt:** Which English meaning belongs to eilen?  
**Stimulus:** eilen (recognition only)  
**Options:** `a` yesterday · `b` tomorrow · `c` today; **correct:** `a` yesterday. Shuffle visually by option ID.  
**Wrong `b`:** Tomorrow is huomenna.  
**Wrong `c`:** Today is tänään.  
**Correct:** Eilen means yesterday. You won't need to describe yesterday in Finnish yet.  
**Wrong:** Eilen means yesterday; we are not introducing past-tense sentences.  
**Near:** None; do not invent an Almost trigger.  
**Not sure:** Eilen is yesterday.  
**Hint:** None. **Linked:** `vocab.eilen`. **Scored:** `vocab.eilen`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B05 — `ex.daily-life.eat-drink-today-tomorrow.first-person-pair`** · `matching` · `grammar` · difficulty `controlled`  
**Prompt:** Match the two taught first-person verb forms to the right actions.  
**Stimulus:** These are I-forms, not infinitives.  
**Pairs (2 separate first-attempt decisions):** **syön ↔ I eat** (`vocab.syoda`); **juon ↔ I drink** (`vocab.juoda`). Shuffle columns independently.  
**Correct:** Syön is I eat; juon is I drink.  
**Wrong:** Check the distinct middle vowels and the actions: syön (eat), juon (drink).  
**Near:** None; do not invent an Almost trigger.  
**Not sure:** syön → I eat; juon → I drink.  
**Hint:** None. **Linked:** `vocab.syoda`, `vocab.juoda`, `grammar.daily-life.first-person-forms`. **Scored:** `vocab.syoda`, `vocab.juoda`. **Review eligible:** false (lesson scaffold / matching). **Editorial:** `needs_review`.  

**B06 — `ex.daily-life.eat-drink-today-tomorrow.type-syon`** · `text_input` · `controlled_production` · difficulty `controlled`  
**Prompt:** Type the taught one-word Finnish form for “I eat.”  
**Stimulus:** I eat  
**N1 accepted:** `syön`; no fuzzy synonyms.  
**Correct:** Syön is the first-person form of syödä.  
**Wrong:** Use syön, not the dictionary form syödä.  
**Near:** `syon` → Finnish ö is essential: syön, not syon.  
**Not sure:** Write syön.  
**Hint:** None. **Linked:** `vocab.syoda`. **Scored:** `vocab.syoda`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B07 — `ex.daily-life.eat-drink-today-tomorrow.type-juon`** · `text_input` · `controlled_production` · difficulty `controlled`  
**Prompt:** Type the taught one-word Finnish form for “I drink.”  
**Stimulus:** I drink  
**N1 accepted:** `juon`; no fuzzy synonyms.  
**Correct:** Juon is the first-person form of juoda.  
**Wrong:** The I-form is juon; the dictionary word is juoda.  
**Near:** `juodan` → Don't add -n directly to juoda: the form is juon.  
**Not sure:** Write juon.  
**Hint:** None. **Linked:** `vocab.juoda`. **Scored:** `vocab.juoda`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B08 — `ex.daily-life.eat-drink-today-tomorrow.type-tanaan`** · `text_input` · `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish word for “today.”  
**Stimulus:** today  
**N1 accepted:** `tänään`; no fuzzy synonyms.  
**Correct:** Tänään means today.  
**Wrong:** Today is tänään; tomorrow is huomenna.  
**Near:** `tanaan` → Write the ä vowels: tänään.; `tänän` → The word is tänään with the correct long vowel.  
**Not sure:** Write tänään.  
**Hint:** None. **Linked:** `vocab.tanaan`. **Scored:** `vocab.tanaan`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B09 — `ex.daily-life.eat-drink-today-tomorrow.type-huomenna`** · `text_input` · `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish word for “tomorrow.”  
**Stimulus:** tomorrow  
**N1 accepted:** `huomenna`; no fuzzy synonyms.  
**Correct:** Huomenna means tomorrow.  
**Wrong:** Use huomenna for tomorrow, not tänään.  
**Near:** `huomena` → Write the double n: huomenna.  
**Not sure:** Write huomenna.  
**Hint:** None. **Linked:** `vocab.huomenna`. **Scored:** `vocab.huomenna`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B10 — `ex.daily-life.eat-drink-today-tomorrow.drink-coffee`** · `text_input` · `contextual_application` · difficulty `contextual`  
**Prompt:** Type the taught Finnish sentence “I drink coffee.”  
**Stimulus:** I drink coffee. Unit 5 taught the form kahvia.  
**N1 accepted:** `Juon kahvia.`, `Minä juon kahvia.`; no fuzzy synonyms.  
**Correct:** Juon kahvia combines the new verb with the familiar drink form from Unit 5.  
**Wrong:** Use juon for the action and kahvia for an unspecified amount of coffee.  
**Near:** `Juoda kahvia` → Use juon for “I drink”; juoda is the dictionary form.  
**Not sure:** Write Juon kahvia.  
**Hint:** None. **Linked:** `vocab.juoda`, `vocab.kahvi`. **Scored:** `vocab.juoda`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B11 — `ex.daily-life.eat-drink-today-tomorrow.eat-bread`** · `text_input` · `contextual_application` · difficulty `contextual`  
**Prompt:** Type the taught Finnish sentence “I eat bread.”  
**Stimulus:** I eat bread. Unit 5 taught leipää.  
**N1 accepted:** `Syön leipää.`, `Minä syön leipää.`; no fuzzy synonyms.  
**Correct:** Syön leipää uses the existing taught food form.  
**Wrong:** Use syön for I eat, and leipää for bread in this context.  
**Near:** `syon leipaa` → Write ö and ä as taught: Syön leipää.  
**Not sure:** Write Syön leipää.  
**Hint:** None. **Linked:** `vocab.syoda`, `vocab.leipa`. **Scored:** `vocab.syoda`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B12 — `ex.daily-life.eat-drink-today-tomorrow.today-tea-tiles`** · `token_build` · `controlled_construction` · difficulty `controlled`  
**Prompt:** Build a sentence meaning “Today I drink tea” with all three supplied tiles.  
**Stimulus:** Use today's word, the I-form and the taught partitive of tea.  
**Shuffled tiles:** `teetä`, `juon`, `Tänään`; **accepted whole sequences:** `Tänään juon teetä.`, `Juon teetä tänään.`. This is guided token arrangement, not unaided spelling.  
**Correct:** Tänään juon teetä. combines today with an everyday drink.  
**Wrong:** The verb is juon, tea in a request/drink context is teetä, and today is tänään.  
**Near:** None; do not invent an Almost trigger.  
**Not sure:** One natural sentence is Tänään juon teetä.  
**Hint:** None. **Linked:** `vocab.tanaan`, `vocab.juoda`, `vocab.tee`. **Scored:** `vocab.tanaan`. **Review eligible:** false (lesson scaffold / matching). **Editorial:** `needs_review`.  

**B13 — `ex.daily-life.eat-drink-today-tomorrow.tomorrow-context`** · `multiple_choice` · `contextual_application` · difficulty `contextual`  
**Prompt:** Which sentence says you will drink water tomorrow?  
**Stimulus:** The Finnish present form can be used with a clear future time word.  
**Options:** `a` Tänään juon vettä. · `b` Huomenna juon vettä. · `c` Huomenna syön vettä.; **correct:** `b` Huomenna juon vettä.. Shuffle visually by option ID.  
**Wrong `a`:** Tänään means today, not tomorrow.  
**Wrong `c`:** Syön is eat; you drink water using juon.  
**Correct:** Huomenna juon vettä. uses tomorrow and the right verb.  
**Wrong:** Use huomenna for tomorrow and juon for a drink.  
**Near:** None; do not invent an Almost trigger.  
**Not sure:** Choose Huomenna juon vettä.  
**Hint:** None. **Linked:** `vocab.huomenna`, `vocab.juoda`, `vocab.vesi`. **Scored:** `vocab.huomenna`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

**B14 — `ex.daily-life.eat-drink-today-tomorrow.tomorrow-water-recall`** · `text_input` · `contextual_application` · difficulty `contextual`  
**Prompt:** Without seeing any Finnish options, write “Tomorrow I drink water.”  
**Stimulus:** Tomorrow I drink water. Use only the forms taught in Units 5 and 6.  
**N1 accepted:** `Huomenna juon vettä.`, `Juon vettä huomenna.`, `Minä juon vettä huomenna.`, `Huomenna minä juon vettä.`; no fuzzy synonyms.  
**Correct:** Huomenna juon vettä. is a complete, natural statement about tomorrow.  
**Wrong:** The sentence needs huomenna (tomorrow), juon (I drink) and vettä (water).  
**Near:** `huomenna juon vesi` → Use the previously taught drink form vettä, not the dictionary form vesi.  
**Not sure:** Write Huomenna juon vettä.  
**Hint:** None. **Linked:** `vocab.huomenna`, `vocab.juoda`, `vocab.vesi`. **Scored:** `vocab.juoda`. **Review eligible:** true (standalone). **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Food, drink, today and tomorrow.” **Copy:** “You can use the taught forms syön and juon with familiar foods and say whether something happens today or tomorrow.” 20 required steps, 14 required exercise records, 2 matching decisions. Completing the lesson doesn't imply mastery of all food and time expressions. **Next:** Lesson 6.3 — What time is it? **Resume:** after B05 if needed.

## Lesson 6.3 — What time is it?

**ID:** `lesson.daily-life.what-time` · `unit.daily-life` · `fi` · Order 3 · **Estimated:** 11–16 minutes, untested. **Prerequisite:** `lesson.daily-life.eat-drink-today-tomorrow`.  
**Capability:** State whole-hour clock times and recognise the difference between a time reading and when an activity happens. **New production:** `vocab.kello`, `vocab.aika`. **New recognition:** `vocab.paiva`, `vocab.tunti`, `vocab.minuutti`. **Related:** `grammar.daily-life.whole-hour-time`, `phrase.daily-life.kello-on-hour`, `phrase.daily-life.mita-kello-on`.  
**Completion:** all required steps and C01–C15 attempted/Not sure. **Pause:** after C08, before recognition-only clock sentences. No full clock-case paradigm.

### Ordered learner experience

Every suffix below resolves to `step.daily-life.what-time.<suffix>`; all new targets are encountered only when deliberately introduced.

| # | Step suffix | Type | Exact teaching text or exercise ID | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **What time is it?** You already recognise numbers. Now use whole hours on a clock, with one reliable pattern for stating the time and another for saying when an activity happens. This lesson does not teach half past, quarter past or a general case system. | none | Yes |
| 2 | `clock-nouns` | `vocabulary_intro` | **kello — clock / o'clock; aika — time (general).** A time of day is normally introduced with kello. Aika means time in a broader sense; the words are not interchangeable in every sentence. | `vocab.kello`, `vocab.aika` | Yes |
| 3 | `duration-recognition` | `vocabulary_intro` | Recognition only: **päivä — day**, **tunti — hour (duration)**, **minuutti — minute**. Distinguish a duration such as tunti from a clock time such as Kello on kolme. No number-of-minutes calculations are required. | `vocab.paiva`, `vocab.tunti`, `vocab.minuutti` | Yes |
| 4 | `ask-time-chunk` | `phrase_intro` | **Mitä kello on?** — What time is it? Learn it as a complete question. The form mitä need not be analysed as a new case paradigm; recognising the question is enough. | `phrase.daily-life.mita-kello-on` | Yes |
| 5 | `practice-01` | `exercise` | C01 | none | Yes |
| 6 | `practice-02` | `exercise` | C02 | none | Yes |
| 7 | `practice-03` | `exercise` | C03 | none | Yes |
| 8 | `practice-04` | `exercise` | C04 | none | Yes |
| 9 | `whole-hour` | `grammar_explanation` | **Kello on viisi.** — It's five o'clock. Use **Kello on + a taught whole-hour numeral**. The same pattern gives Kello on yksi, kaksi, kolme, neljä and viisi. This is not a lesson on minute readings. | `grammar.daily-life.whole-hour-time`, `phrase.daily-life.kello-on-hour` | Yes |
| 10 | `practice-05` | `exercise` | C05 | none | Yes |
| 11 | `practice-06` | `exercise` | C06 | none | Yes |
| 12 | `practice-07` | `exercise` | C07 | none | Yes |
| 13 | `practice-08` | `exercise` | C08 | none | Yes |
| 14 | `number-six-to-ten` | `example_set` | **Kello on seitsemän.** (07:00) and **Kello on kahdeksan.** (08:00). You previously *recognised* numbers 6–10 in Unit 1; you can identify these supplied sentences but do not need to type those numbers unprompted. | none | Yes |
| 15 | `practice-09` | `exercise` | C09 | none | Yes |
| 16 | `practice-10` | `exercise` | C10 | none | Yes |
| 17 | `practice-11` | `exercise` | C11 | none | Yes |
| 18 | `wake-time` | `grammar_explanation` | **Two jobs:** **Kello on viisi.** states the current time. **Herään kello viisi.** says *when I wake up*. Finnish also has **Herään viideltä.** as a natural alternate, but it is recognition-only here; do **not** combine kello with viideltä or try to generate an ablative suffix for every number. | none | Yes |
| 19 | `clock-review` | `example_set` | **Mitä kello on? — Kello on neljä.** This is a complete exchange with a supplied number. **Herään kello neljä.** is a different statement: it tells when the action happens. The latter is uncommon as a personal routine but grammatically useful for contrast. | none | Yes |
| 20 | `final-checkpoint` | `checkpoint` | **Lesson checkpoint C12–C15:** tell an activity time with supplied tiles and independent text, distinguish clock time from activity time, and retrieve a simple whole-hour statement. | none | Yes |

### Complete authored exercises

All: `sourceType: original`, `editorialStatus: needs_review`, `learningLanguage: fi`. No audio/clock visual component required. A digital time as text is sufficient and accessible.

**C01 — `ex.daily-life.what-time.kello-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which Finnish word is used for a clock or to introduce an o'clock time?  
**Stimulus:** Choose the new word for clock / o’clock.  
**Options (stable IDs, shuffle visually):** `a` kello · `b` aika · `c` tunti. **Correct:** `a` kello.  
**Wrong `b`:** Aika means time in a general sense.  
**Wrong `c`:** Tunti is an hour of duration, not the normal word introducing a clock time.  
**Correct feedback:** Kello is clock and starts expressions such as Kello on viisi.  
**Wrong feedback:** The clock word is kello; aika is time generally.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Kello — clock / o'clock.  
**Hint:** None. **Linked:** `vocab.kello`, `vocab.aika`, `vocab.tunti`. **Scored:** `vocab.kello`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C02 — `ex.daily-life.what-time.aika-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which Finnish word means time in a general sense?  
**Stimulus:** You aren't asking for the hour on a clock.  
**Options (stable IDs, shuffle visually):** `a` kello · `b` aika · `c` minuutti. **Correct:** `b` aika.  
**Wrong `a`:** Kello is a clock or o'clock expression.  
**Wrong `c`:** Minuutti is one minute, a particular duration.  
**Correct feedback:** Aika is the general Finnish word for time.  
**Wrong feedback:** Use aika for time generally; kello is for clocks and clock times.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Aika — time.  
**Hint:** None. **Linked:** `vocab.aika`. **Scored:** `vocab.aika`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C03 — `ex.daily-life.what-time.duration-units`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match these recognition-only time nouns to their meanings.  
**Stimulus:** You need only recognise these words, not type them.  
**Matching pairs (3 first-attempt decisions):** **päivä ↔ day** (score `vocab.paiva`); **tunti ↔ hour (duration)** (score `vocab.tunti`); **minuutti ↔ minute** (score `vocab.minuutti`); independent column shuffle.  
**Correct feedback:** Päivä is day, tunti is an hour, and minuutti is a minute.  
**Wrong feedback:** Don't confuse tunti, a unit of duration, with kello, the clock/time expression.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** päivä → day; tunti → hour; minuutti → minute.  
**Hint:** None. **Linked:** `vocab.paiva`, `vocab.tunti`, `vocab.minuutti`. **Scored:** `vocab.paiva`, `vocab.tunti`, `vocab.minuutti`. **Review eligible:** false, scaffolded/multi-target. **Editorial:** `needs_review`.  

**C04 — `ex.daily-life.what-time.clock-question`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does the fixed Finnish question Mitä kello on? ask?  
**Stimulus:** Mitä kello on?  
**Options (stable IDs, shuffle visually):** `a` What time is it? · `b` What day is it? · `c` Where is the clock?. **Correct:** `a` What time is it?.  
**Wrong `b`:** This asks about the time, not the weekday.  
**Wrong `c`:** This is a time question, not a question about the location of a clock.  
**Correct feedback:** Mitä kello on? asks for the time. Learn it as a whole question.  
**Wrong feedback:** This fixed question means “What time is it?”  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Mitä kello on? — What time is it?  
**Hint:** None. **Linked:** `phrase.daily-life.mita-kello-on`, `vocab.kello`. **Scored:** `phrase.daily-life.mita-kello-on`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C05 — `ex.daily-life.what-time.five-oclock`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** A digital clock shows 05:00. Which Finnish sentence says it is five o'clock?  
**Stimulus:** 05:00 (whole hour)  
**Options (stable IDs, shuffle visually):** `a` Kello on viisi. · `b` Kello on kaksi. · `c` Herään kello viisi.. **Correct:** `a` Kello on viisi..  
**Wrong `b`:** Kaksi means two, not five.  
**Wrong `c`:** Herään kello viisi tells when someone wakes; it doesn't simply state the current clock time.  
**Correct feedback:** Kello on viisi. states the time; the form viisi is already productive from Unit 1.  
**Wrong feedback:** To state the current time use Kello on viisi.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Kello on viisi.  
**Hint:** None. **Linked:** `vocab.kello`, `grammar.daily-life.whole-hour-time`, `vocab.viisi`. **Scored:** `grammar.daily-life.whole-hour-time`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C06 — `ex.daily-life.what-time.retrieve-kello`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish noun used for a clock and o'clock expressions.  
**Stimulus:** clock / o'clock  
**Accepted after N1:** `kello`. Instructions explicitly restrict to the taught `kello` construction; no arbitrary morphological guesses.  
**Correct feedback:** Kello is the new dictionary word.  
**Wrong feedback:** The correct noun is kello. Tunti is an hour of duration.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Write kello.  
**Hint:** None. **Linked:** `vocab.kello`. **Scored:** `vocab.kello`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C07 — `ex.daily-life.what-time.retrieve-aika`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish noun for “time” in a general sense.  
**Stimulus:** time (general noun)  
**Accepted after N1:** `aika`. Instructions explicitly restrict to the taught `kello` construction; no arbitrary morphological guesses.  
**Correct feedback:** Aika is the general noun for time.  
**Wrong feedback:** Use aika; kello is a clock/clock-time word.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Write aika.  
**Hint:** None. **Linked:** `vocab.aika`. **Scored:** `vocab.aika`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C08 — `ex.daily-life.what-time.write-three`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** A digital clock shows 03:00. Type the full taught Finnish sentence for the time.  
**Stimulus:** 03:00 — It's three o'clock.  
**Accepted after N1:** `Kello on kolme.`. Instructions explicitly restrict to the taught `kello` construction; no arbitrary morphological guesses.  
**Correct feedback:** Kello on kolme. states the current whole-hour time.  
**Wrong feedback:** Use Kello on plus the known number kolme.  
**Near feedback:** `Kello kolme` → Include on: Kello on kolme.  
**Not sure:** Write Kello on kolme.  
**Hint:** None. **Linked:** `phrase.daily-life.kello-on-hour`, `vocab.kello`, `vocab.kolme`. **Scored:** `phrase.daily-life.kello-on-hour`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C09 — `ex.daily-life.what-time.seven-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What time does Kello on seitsemän. express?  
**Stimulus:** Kello on seitsemän.  
**Options (stable IDs, shuffle visually):** `a` 07:00 · `b` 05:00 · `c` 03:00. **Correct:** `a` 07:00.  
**Wrong `b`:** Viisi would be five o'clock.  
**Wrong `c`:** Kolme would be three o'clock.  
**Correct feedback:** Seitsemän means seven. This is a recognition task, not a spelling test.  
**Wrong feedback:** Kello on seitsemän. means seven o'clock.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** The answer is 07:00.  
**Hint:** None. **Linked:** `vocab.seitseman`, `grammar.daily-life.whole-hour-time`. **Scored:** `grammar.daily-life.whole-hour-time`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C10 — `ex.daily-life.what-time.eight-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which clock sentence describes 08:00?  
**Stimulus:** 08:00 — choose a supplied Finnish sentence.  
**Options (stable IDs, shuffle visually):** `a` Kello on kuusi. · `b` Kello on kahdeksan. · `c` Kello on kymmenen.. **Correct:** `b` Kello on kahdeksan..  
**Wrong `a`:** Kuusi is six; 06:00 is not the displayed time.  
**Wrong `c`:** Kymmenen is ten; 10:00 is a different whole hour.  
**Correct feedback:** Kahdeksan means eight; 08:00 is Kello on kahdeksan.  
**Wrong feedback:** Use the supplied seven-to-ten number forms only for recognition.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Kello on kahdeksan.  
**Hint:** None. **Linked:** `vocab.kahdeksan`, `grammar.daily-life.whole-hour-time`. **Scored:** `grammar.daily-life.whole-hour-time`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C11 — `ex.daily-life.what-time.hour-duration`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** A timetable describes an activity lasting one hour. Which noun means an hour of duration?  
**Stimulus:** An hour as a length of time, not a time-of-day reading.  
**Options (stable IDs, shuffle visually):** `a` kello · `b` tunti · `c` aika. **Correct:** `b` tunti.  
**Wrong `a`:** Kello is a clock or clock-time word.  
**Wrong `c`:** Aika means time generally, not specifically an hour.  
**Correct feedback:** Tunti is an hour of duration; kello is used for clock times.  
**Wrong feedback:** An hour of duration is tunti.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Tunti = hour.  
**Hint:** None. **Linked:** `vocab.tunti`, `vocab.kello`. **Scored:** `vocab.tunti`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C12 — `ex.daily-life.what-time.wake-five-tiles`** · `token_build` · intent `controlled_construction` · difficulty `controlled`  
**Prompt:** Build “I wake up at five o'clock” using all three supplied tiles.  
**Stimulus:** Use the taught kello + hour construction; do not inflect the numeral.  
**Shuffled tiles:** `viisi`, `Herään`, `kello`. **Accepted complete sequences:** `Herään kello viisi.`. Guided construction, no independent spelling claim.  
**Correct feedback:** Herään kello viisi. states when you wake up; kello on viisi states the current time.  
**Wrong feedback:** Start with herään; place kello immediately before the hour viisi.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Herään kello viisi.  
**Hint:** None. **Linked:** `vocab.herata`, `vocab.kello`, `grammar.daily-life.whole-hour-time`. **Scored:** `grammar.daily-life.whole-hour-time`. **Review eligible:** false, scaffolded/multi-target. **Editorial:** `needs_review`.  

**C13 — `ex.daily-life.what-time.type-wake-five`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type “I wake up at five o'clock” using the taught word kello.  
**Stimulus:** I wake up at five o'clock. Use the kello construction (not viideltä).  
**Accepted after N1:** `Herään kello viisi.`, `Minä herään kello viisi.`. Instructions explicitly restrict to the taught `kello` construction; no arbitrary morphological guesses.  
**Correct feedback:** Herään kello viisi. combines the taught verb with a fixed whole-hour time.  
**Wrong feedback:** Use herään kello viisi. The alternate viideltä construction is correct Finnish but outside this particular instructed answer form.  
**Near feedback:** `Herään viideltä` → This is another natural Finnish expression, but this task explicitly asks for the taught kello construction.  
**Not sure:** Write Herään kello viisi.  
**Hint:** None. **Linked:** `vocab.herata`, `vocab.kello`, `grammar.daily-life.whole-hour-time`. **Scored:** `grammar.daily-life.whole-hour-time`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C14 — `ex.daily-life.what-time.time-or-activity`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Which sentence only states what time it is, without saying what someone does?  
**Stimulus:** Compare a clock reading with a waking-up statement.  
**Options (stable IDs, shuffle visually):** `a` Herään kello viisi. · `b` Kello on viisi. · `c` Nukun kotona.. **Correct:** `b` Kello on viisi..  
**Wrong `a`:** Herään kello viisi tells when an activity happens.  
**Wrong `c`:** Nukun kotona says where someone sleeps, not the clock time.  
**Correct feedback:** Kello on viisi. gives the clock reading; Herään kello viisi. says when waking happens.  
**Wrong feedback:** To say what time it currently is, start with Kello on.  
**Near feedback:** None; do not invent a near result.  
**Not sure:** Kello on viisi.  
**Hint:** None. **Linked:** `grammar.daily-life.whole-hour-time`, `vocab.herata`. **Scored:** `grammar.daily-life.whole-hour-time`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**C15 — `ex.daily-life.what-time.two-oclock`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** A clock shows 02:00. Write the full Finnish sentence “It's two o'clock.”  
**Stimulus:** 02:00 — It's two o'clock.  
**Accepted after N1:** `Kello on kaksi.`. Instructions explicitly restrict to the taught `kello` construction; no arbitrary morphological guesses.  
**Correct feedback:** Kello on kaksi. is a complete statement of the whole hour.  
**Wrong feedback:** Begin with Kello on, then use the known word kaksi.  
**Near feedback:** `Kello kaksi` → Include on: Kello on kaksi.  
**Not sure:** Write Kello on kaksi.  
**Hint:** None. **Linked:** `phrase.daily-life.kello-on-hour`, `vocab.kello`, `vocab.kaksi`. **Scored:** `phrase.daily-life.kello-on-hour`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “The clock makes sense.” **Copy:** “You can tell whole-hour times and use a simple kello expression to say when you wake up.” 20 required steps, 15 required exercise records, 3 matching decisions. Only 1–5 require unrestricted typed number production; 6–10 stay recognition. **Next:** Lesson 6.4 — Monday to Thursday.

## Lesson 6.4 — Monday to Thursday

**ID:** `lesson.daily-life.monday-thursday` · `unit.daily-life` · `fi` · Order 4 · **Estimated duration:** 11–17 minutes, untested. **Prerequisite:** `lesson.daily-life.what-time`.  
**Capability:** Recognise and retrieve Monday–Thursday and use taught forms for activities on particular weekdays. **New production:** `vocab.maanantai`, `vocab.tiistai`, `vocab.keskiviikko`, `vocab.torstai`. **New recognition:** `vocab.viikko`, `vocab.kuukausi`. **Grammar:** `grammar.daily-life.weekday-time-forms`.  
**Completion:** all 19 required steps and D01–D16 attempted or Not sure. **Pause:** after D09 before teaching time forms. Do not introduce habitual `maanantaisin` as a mandatory target.

### Ordered learner experience

Prefix `step.daily-life.monday-thursday.` + suffix; **Formal encounter** only at actual new introduction, never by incidental use in a token bank.

| # | Step suffix | Type | Exact learner-facing content or exercise | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **The first half of the week.** The days of the week help place familiar actions on a calendar. First learn the names Monday–Thursday, then learn their useful “on [day]” forms. No full case table or perfect memorised ordering quiz is needed. | none | Yes |
| 2 | `four-days` | `vocabulary_intro` | **maanantai — Monday; tiistai — Tuesday; keskiviikko — Wednesday; torstai — Thursday.** Finnish weekday names are written with lowercase initials except at the start of sentences. | `vocab.maanantai`, `vocab.tiistai`, `vocab.keskiviikko`, `vocab.torstai` | Yes |
| 3 | `exercise-01` | `exercise` | D01 | none | Yes |
| 4 | `exercise-02` | `exercise` | D02 | none | Yes |
| 5 | `exercise-03` | `exercise` | D03 | none | Yes |
| 6 | `week-month` | `vocabulary_intro` | Recognition only: **viikko — week; kuukausi — month.** These name longer calendar periods. You don't need to list months or produce these nouns from English yet. | `vocab.viikko`, `vocab.kuukausi` | Yes |
| 7 | `exercise-04` | `exercise` | D04 | none | Yes |
| 8 | `exercise-05` | `exercise` | D05 | none | Yes |
| 9 | `exercise-06` | `exercise` | D06 | none | Yes |
| 10 | `exercise-07` | `exercise` | D07 | none | Yes |
| 11 | `exercise-08` | `exercise` | D08 | none | Yes |
| 12 | `exercise-09` | `exercise` | D09 | none | Yes |
| 13 | `weekday-forms` | `grammar_explanation` | **On a particular day.** Finnish changes the weekday word when talking about an event on that day: **maanantaina**, **tiistaina**, **keskiviikkona**, **torstaina**. Learn these complete forms. Notice the carefully authored **keskiviikkona**; a general essive-case system comes later. | `grammar.daily-life.weekday-time-forms` | Yes |
| 14 | `weekday-examples` | `example_set` | **Maanantaina juon kahvia.** — On Monday I drink coffee. **Tiistaina olen kotona.** — On Tuesday I am at home. These can refer to a particular Monday/Tuesday; they do not automatically mean *every Monday/Tuesday*. No new location grammar is being introduced. | none | Yes |
| 15 | `exercise-10` | `exercise` | D10 | none | Yes |
| 16 | `exercise-11` | `exercise` | D11 | none | Yes |
| 17 | `exercise-12` | `exercise` | D12 | none | Yes |
| 18 | `wednesday-thursday` | `example_set` | **Keskiviikkona olen kotona.** — I'm at home on Wednesday. **Torstaina juon teetä.** — On Thursday I drink tea. Both reuse prior vocabulary. Don't create extra item IDs for new temporal forms. | none | Yes |
| 19 | `final-checkpoint` | `checkpoint` | **Lesson checkpoint D13–D16:** choose weekday time expressions, independently use Tuesday and Thursday, and distinguish a specific Wednesday from a recurring habit. Each constituent exercise has its own feedback. | none | Yes |

### Complete authored exercises

Each exercise carries `editorialStatus: needs_review` and `sourceType: original`; role distinction and N1 grading remain unchanged. `keskiviikkona` is intentionally taught as a complete form rather than a guessed suffix rule.

**D01 — `ex.daily-life.monday-thursday.match-first-four`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match Monday through Thursday with the correct Finnish weekday nouns.  
**Stimulus:** Four dictionary-form weekday names.  
**Matching pairs (4 first-attempt decisions):** (1) **maanantai ↔ Monday** scoring `vocab.maanantai`; (2) **tiistai ↔ Tuesday** scoring `vocab.tiistai`; (3) **keskiviikko ↔ Wednesday** scoring `vocab.keskiviikko`; (4) **torstai ↔ Thursday** scoring `vocab.torstai`; independently shuffle columns.  
**Correct feedback:** The first four weekday nouns are maanantai, tiistai, keskiviikko and torstai.  
**Wrong feedback:** Look at the full Finnish forms, not just their shared final letters.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Monday maanantai; Tuesday tiistai; Wednesday keskiviikko; Thursday torstai.  
**Hint:** None. **Linked:** `vocab.maanantai`, `vocab.tiistai`, `vocab.keskiviikko`, `vocab.torstai`. **Scored:** `vocab.maanantai`, `vocab.tiistai`, `vocab.keskiviikko`, `vocab.torstai`. **Review eligible:** false, guided board/task. **Editorial:** `needs_review`.  

**D02 — `ex.daily-life.monday-thursday.choose-monday`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which Finnish weekday is Monday?  
**Stimulus:** Monday (dictionary noun)  
**Options (stable IDs, shuffle visually):** `a` torstai · `b` maanantai · `c` tiistai. **Correct:** `b` maanantai.  
**Wrong option `a`:** Torstai is Thursday.  
**Wrong option `c`:** Tiistai is Tuesday, the day after Monday.  
**Correct feedback:** Maanantai is Monday.  
**Wrong feedback:** Monday is maanantai; Tuesday is tiistai.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Choose maanantai.  
**Hint:** None. **Linked:** `vocab.maanantai`, `vocab.tiistai`. **Scored:** `vocab.maanantai`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D03 — `ex.daily-life.monday-thursday.choose-wednesday`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** You read keskiviikko in a calendar. Which weekday does it name?  
**Stimulus:** keskiviikko  
**Options (stable IDs, shuffle visually):** `a` Wednesday · `b` Tuesday · `c` Thursday. **Correct:** `a` Wednesday.  
**Wrong option `b`:** Tuesday is tiistai.  
**Wrong option `c`:** Thursday is torstai.  
**Correct feedback:** Keskiviikko is Wednesday, between tiistai and torstai.  
**Wrong feedback:** Keskiviikko means Wednesday.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Keskiviikko is Wednesday.  
**Hint:** None. **Linked:** `vocab.keskiviikko`. **Scored:** `vocab.keskiviikko`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D04 — `ex.daily-life.monday-thursday.viikko-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does viikko mean?  
**Stimulus:** viikko (recognition only)  
**Options (stable IDs, shuffle visually):** `a` a weekday · `b` a week · `c` a month. **Correct:** `b` a week.  
**Wrong option `a`:** A weekday may be maanantai, tiistai, etc.; viikko means the whole week.  
**Wrong option `c`:** Kuukausi is a month, a longer period.  
**Correct feedback:** Viikko means week, not a specific weekday.  
**Wrong feedback:** Viikko is week.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Viikko means week.  
**Hint:** None. **Linked:** `vocab.viikko`. **Scored:** `vocab.viikko`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D05 — `ex.daily-life.monday-thursday.kuukausi-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does kuukausi mean?  
**Stimulus:** kuukausi (recognition only)  
**Options (stable IDs, shuffle visually):** `a` a minute · `b` a month · `c` a week. **Correct:** `b` a month.  
**Wrong option `a`:** Minuutti is a minute; kuukausi is much longer.  
**Wrong option `c`:** Viikko is a week, not a month.  
**Correct feedback:** Kuukausi means month; months' names are not production vocabulary in Unit 6.  
**Wrong feedback:** Kuukausi means month.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Kuukausi is month.  
**Hint:** None. **Linked:** `vocab.kuukausi`, `vocab.viikko`. **Scored:** `vocab.kuukausi`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D06 — `ex.daily-life.monday-thursday.write-monday`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary word for Monday.  
**Stimulus:** Monday  
**Accepted (N1):** `maanantai`. No unlisted stem or case variants.  
**Correct feedback:** Maanantai means Monday.  
**Wrong feedback:** Monday is maanantai, not tiistai.  
**Near feedback:** `manantai` → There are two a letters at the start: maanantai.  
**Not sure:** Write maanantai.  
**Hint:** None. **Linked:** `vocab.maanantai`. **Scored:** `vocab.maanantai`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D07 — `ex.daily-life.monday-thursday.write-tuesday`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary word for Tuesday.  
**Stimulus:** Tuesday  
**Accepted (N1):** `tiistai`. No unlisted stem or case variants.  
**Correct feedback:** Tiistai is Tuesday.  
**Wrong feedback:** Write tiistai, not maanantai.  
**Near feedback:** `tistai` → Tiistai has two i letters near the start.  
**Not sure:** Write tiistai.  
**Hint:** None. **Linked:** `vocab.tiistai`. **Scored:** `vocab.tiistai`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D08 — `ex.daily-life.monday-thursday.write-wednesday`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary word for Wednesday.  
**Stimulus:** Wednesday  
**Accepted (N1):** `keskiviikko`. No unlisted stem or case variants.  
**Correct feedback:** Keskiviikko means Wednesday.  
**Wrong feedback:** Write keskiviikko. Its middle and ending matter; the temporal form will be keskiviikkona.  
**Near feedback:** `keskivikko` → Keskiviikko has a long double k near the end: -viikko.  
**Not sure:** Write keskiviikko.  
**Hint:** None. **Linked:** `vocab.keskiviikko`. **Scored:** `vocab.keskiviikko`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D09 — `ex.daily-life.monday-thursday.write-thursday`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish dictionary word for Thursday.  
**Stimulus:** Thursday  
**Accepted (N1):** `torstai`. No unlisted stem or case variants.  
**Correct feedback:** Torstai is Thursday.  
**Wrong feedback:** Write torstai, not keskiviikko.  
**Near feedback:** `torstaii` → Torstai ends in one final i.  
**Not sure:** Write torstai.  
**Hint:** None. **Linked:** `vocab.torstai`. **Scored:** `vocab.torstai`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D10 — `ex.daily-life.monday-thursday.on-monday`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** You want to say an event happens on Monday (a particular Monday). Which taught form fits?  
**Stimulus:** ____ juon kahvia. — On Monday, I drink coffee.  
**Options (stable IDs, shuffle visually):** `a` maanantaina · `b` maanantai · `c` tiistaina. **Correct:** `a` maanantaina.  
**Wrong option `b`:** Maanantai is the dictionary weekday; maanantaina is the taught 'on Monday' form.  
**Wrong option `c`:** Tiistaina means on Tuesday, a different day.  
**Correct feedback:** Maanantaina means on Monday; this is an explicitly taught form.  
**Wrong feedback:** Use maanantaina, not the noun maanantai.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Maanantaina.  
**Hint:** None. **Linked:** `vocab.maanantai`, `grammar.daily-life.weekday-time-forms`. **Scored:** `grammar.daily-life.weekday-time-forms`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D11 — `ex.daily-life.monday-thursday.wednesday-form`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Which is the taught form for “on Wednesday”?  
**Stimulus:** on Wednesday (one specific day)  
**Options (stable IDs, shuffle visually):** `a` keskiviikkana · `b` keskiviikko · `c` keskiviikkona. **Correct:** `c` keskiviikkona.  
**Wrong option `a`:** The taught form is keskiviikkona, with -kkona; not -kkana.  
**Wrong option `b`:** Keskiviikko is the dictionary weekday, not the temporal expression.  
**Correct feedback:** Keskiviikkona is the correct form for on Wednesday.  
**Wrong feedback:** The taught weekday time form is keskiviikkona, not keskiviikkana.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Keskiviikkona.  
**Hint:** None. **Linked:** `vocab.keskiviikko`, `grammar.daily-life.weekday-time-forms`. **Scored:** `grammar.daily-life.weekday-time-forms`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D12 — `ex.daily-life.monday-thursday.build-monday-coffee`** · `token_build` · intent `controlled_construction` · difficulty `controlled`  
**Prompt:** Build “On Monday, I drink coffee” from the given complete forms.  
**Stimulus:** All three tiles are supplied; use the taught specific-day expression.  
**Shuffled tiles:** `kahvia`, `Maanantaina`, `juon`. **Accepted complete orders:** `Maanantaina juon kahvia.`, `Juon kahvia maanantaina.`; guided construction, not independent spelling.  
**Correct feedback:** Maanantaina juon kahvia. combines a weekday time expression with the familiar drink sentence.  
**Wrong feedback:** Use Maanantaina + juon + kahvia, or put the weekday at the end.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Maanantaina juon kahvia.  
**Hint:** None. **Linked:** `vocab.maanantai`, `vocab.juoda`, `vocab.kahvi`, `grammar.daily-life.weekday-time-forms`. **Scored:** `grammar.daily-life.weekday-time-forms`. **Review eligible:** false, guided board/task. **Editorial:** `needs_review`.  

**D13 — `ex.daily-life.monday-thursday.tuesday-form`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Which phrase means “on Tuesday”?  
**Stimulus:** A single planned Tuesday, not “every Tuesday”.  
**Options (stable IDs, shuffle visually):** `a` tiistai · `b` maanantaina · `c` tiistaina. **Correct:** `c` tiistaina.  
**Wrong option `a`:** Tiistai is the dictionary noun Tuesday; the taught time expression is tiistaina.  
**Wrong option `b`:** Maanantaina means on Monday.  
**Correct feedback:** Tiistaina is on Tuesday.  
**Wrong feedback:** Use tiistaina for on Tuesday.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** Tiistaina.  
**Hint:** None. **Linked:** `vocab.tiistai`, `grammar.daily-life.weekday-time-forms`. **Scored:** `grammar.daily-life.weekday-time-forms`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D14 — `ex.daily-life.monday-thursday.tuesday-bread`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type “On Tuesday, I eat bread” using the forms taught in Units 5–6.  
**Stimulus:** Use tiistaina, syön and leipää; express one particular Tuesday.  
**Accepted (N1):** `Tiistaina syön leipää.`, `Syön leipää tiistaina.`, `Minä syön leipää tiistaina.`, `Tiistaina minä syön leipää.`. No unlisted stem or case variants.  
**Correct feedback:** Tiistaina syön leipää. uses the correct weekday form and the familiar food expression.  
**Wrong feedback:** Use tiistaina for on Tuesday, syön for I eat and leipää for bread.  
**Near feedback:** `tiistai syön leipää` → Use the time expression tiistaina, not the dictionary noun tiistai.  
**Not sure:** Write Tiistaina syön leipää.  
**Hint:** None. **Linked:** `vocab.tiistai`, `vocab.syoda`, `vocab.leipa`, `grammar.daily-life.weekday-time-forms`. **Scored:** `grammar.daily-life.weekday-time-forms`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D15 — `ex.daily-life.monday-thursday.wednesday-context`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Which English meaning fits Keskiviikkona olen kotona.?  
**Stimulus:** Keskiviikkona olen kotona.  
**Options (stable IDs, shuffle visually):** `a` I'm at home on Wednesday. · `b` I'm at home on Thursday. · `c` I'm at home every Wednesday.. **Correct:** `a` I'm at home on Wednesday..  
**Wrong option `b`:** Thursday is torstaina, not keskiviikkona.  
**Wrong option `c`:** This -na phrase can refer to a particular Wednesday; it doesn't automatically mean a recurring every-Wednesday habit.  
**Correct feedback:** The sentence means “I'm at home on Wednesday” (a particular Wednesday).  
**Wrong feedback:** Keskiviikkona means on Wednesday, not automatically every Wednesday.  
**Near feedback:** None; avoid fabricated near credit.  
**Not sure:** I'm at home on Wednesday.  
**Hint:** None. **Linked:** `vocab.keskiviikko`, `grammar.daily-life.weekday-time-forms`, `vocab.koti`. **Scored:** `grammar.daily-life.weekday-time-forms`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D16 — `ex.daily-life.monday-thursday.thursday-tea`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Write “On Thursday, I drink tea” using the taught forms.  
**Stimulus:** One particular Thursday; use torstaina, juon and teetä.  
**Accepted (N1):** `Torstaina juon teetä.`, `Juon teetä torstaina.`, `Minä juon teetä torstaina.`, `Torstaina minä juon teetä.`. No unlisted stem or case variants.  
**Correct feedback:** Torstaina juon teetä is a natural statement about one Thursday.  
**Wrong feedback:** Use torstaina, not torstai; the known drink sentence is juon teetä.  
**Near feedback:** `Torstai juon teetä` → The expression needs torstaina for “on Thursday”.  
**Not sure:** Write Torstaina juon teetä.  
**Hint:** None. **Linked:** `vocab.torstai`, `vocab.juoda`, `vocab.tee`, `grammar.daily-life.weekday-time-forms`. **Scored:** `grammar.daily-life.weekday-time-forms`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Four days, two ways to say them.” **Copy:** “You can name Monday to Thursday and understand how Finnish expresses something happening on one of those days.” 19 required steps, 16 exercises, 4 matching decisions. **Next:** Lesson 6.5 — Friday to Sunday. No perfect-score gate and no false recurring-every-week grammar claim.

