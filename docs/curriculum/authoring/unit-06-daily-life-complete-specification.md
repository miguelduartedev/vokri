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

