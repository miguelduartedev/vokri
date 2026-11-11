# Vokri — Unit 3: Everyday Actions · Complete Lesson & Exercise Specification

**Date/version:** 11 November 2026 · 1.0 authoring draft · **Target language:** `fi` · **Unit:** `unit.everyday-actions` · **Course:** `course.fi`.  
**Editorial:** All new teaching copy and exercise records are `needs_review`, `reviewedBy: null`. As agreed, explicit Vokri-owner approval is sufficient; this does not claim external Finnish-teacher certification.

Read the [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 1](./unit-01-hello-complete-specification.md), [Unit 2](./unit-02-people-and-things-complete-specification.md), [Unit 3 QA](./unit-03-coverage-and-qa.md), [Unit 3 implementation notes](./unit-03-implementation-notes.md) and [A1 curriculum](../a1_foundations_curriculum_blueprint.md).

## Part I — Unit overview and shared data contract

**Unit capability:** “Say what you want, need, know, understand, can do, and where you are going. Describe familiar activities, ask permission and connect simple ideas.” Six approved lessons progress from want/need → know/understand → can/do → go/come → read/write/study → ask/answer/say. The final assessment is within Lesson 3.6, **not** a seventh lesson.

**Prerequisites:** Units 1 and 2, including pronouns and first-person `olen/olet`, `puhun/asun`, `Puhun suomea`, `Asun Suomessa`, `-ko/-kö` and `en puhu/en asu`. Proper names and supplied words `apua` and `ruokaa` are unscored contextual chunks; they are not new production lemmas or targets of unexplained case formation.

### Exactly 17 new production roles

| Finnish lemma | Canonical ID | CSV pedagogical rank | Formal introduction |
|---|---|---:|---|
| **mutta** | `vocab.mutta` | 29 | 3.6 |
| **nyt** | `vocab.nyt` | 40 | 3.4 |
| **ehkä** | `vocab.ehka` | 46 | 3.4 |
| **tulla** | `vocab.tulla` | 59 | 3.4 |
| **mennä** | `vocab.menna` | 60 | 3.4 |
| **tehdä** | `vocab.tehda` | 61 | 3.3 |
| **voida** | `vocab.voida` | 63 | 3.3 |
| **haluta** | `vocab.haluta` | 65 | 3.1 |
| **tarvita** | `vocab.tarvita` | 66 | 3.1 |
| **sanoa** | `vocab.sanoa` | 69 | 3.6 |
| **kysyä** | `vocab.kysya` | 72 | 3.6 |
| **vastata** | `vocab.vastata` | 73 | 3.6 |
| **tietää** | `vocab.tietaa` | 74 | 3.2 |
| **ymmärtää** | `vocab.ymmartaa` | 75 | 3.2 |
| **lukea** | `vocab.lukea` | 80 | 3.5 |
| **kirjoittaa** | `vocab.kirjoittaa` | 81 | 3.5 |
| **opiskella** | `vocab.opiskella` | 104 | 3.5 |

`nyt` and `ehkä` were previously *support* in Unit 1. Lesson 3.4 promotes them to formal **production** without duplicating canonical IDs or erasing earlier exposure. No production words from Units 1/2 are marked NEW again.

### Five recognition-only items

| Finnish lemma | Canonical ID | CSV pedagogical rank | Formal introduction |
|---|---|---:|---|
| **saada** | `vocab.saada` | 62 | 3.3 |
| **pitää** | `vocab.pitaa` | 64 | 3.4 |
| **nähdä** | `vocab.nahda` | 77 | 3.5 |
| **kuulla** | `vocab.kuulla` | 79 | 3.5 |
| **auttaa** | `vocab.auttaa` | 96 | 3.3 |

`saada` is restricted here to get/receive, `pitää` to necessity in `Minun pitää mennä nyt`; neither is presented as one-meaning-only across all Finnish. `nähdä`, `kuulla`, `auttaa` are comprehension-only. The learner will not be forced to type them in Finnish.

### Phrases and grammar

| Canonical concept | Taught phrase or scope |
|---|---|
| `phrase.haluan-slot` | **Haluan puhua**, then **Haluan mennä**; one reusable want+verb construction |
| `phrase.tarvitsen-slot` | **Tarvitsen apua** (with supplied noun form) |
| `phrase.en-tieda` | **En tiedä** |
| `phrase.en-ymmarra` | **En ymmärrä** |
| `phrase.voin-slot` | **Voin puhua**, later **Voin tulla** |
| `phrase.voinko-slot` | **Voinko puhua?** |
| `phrase.opiskelen-suomea` | **Opiskelen suomea** |
| `grammar.first-person-forms` | Real first-person forms without a single false conversion rule |
| `grammar.verb-type-1-preview` | Transparent known `puhua/asua` type-1 example, awareness-only |
| `grammar.verb-plus-infinitive` | `haluan/voin +` taught dictionary-form verb |
| Existing `grammar.negative-en`, `grammar.yes-no-ko-ko` | Reuse from Unit 2, no duplicate concept |

The five curriculum spoken mappings **haluan→haluun, tiedän→tiiän, menen→meen, tulen→tuun, mutta→mut** appear in four optional recognition-only spoken-note steps. Standard Finnish remains the productive form.

**Deferred:** full person/verb-type paradigms, object-case selection, destination/location-case generation, conditional mood, unlimited unseen verb inflection and audio-based pronunciation assessment.

### Shared binding rules — apply to all records below

- Every teaching step belongs to `unit.everyday-actions`, `learningLanguage: fi` and the containing lesson; full step ID is the displayed lesson prefix plus suffix. Lesson table rows give exact copy, formal encounter IDs and required step type. All table rows are required. Four separately named spoken notes are optional and cannot gate completion.
- Every exercise has a globally stable `ex.everyday-actions.<lesson>.<slug>` ID. Document tags A01–F19 are local cross-references only. Exercise records provide exact `Prompt`, `Stimulus`, `Answer`, `Correct feedback`, `Incorrect feedback`, `Near feedback`, `Not sure`, `Hint`, `Linked`, `Scored`, `Review eligible`, `Editorial`. For a non-encounter step, the learning purpose follows its type: explanation prepares context, example_set reinforces, exercise checks its declared demand, checkpoint samples cumulative skill.
- **N1 input profile**, unchanged from Units 1–2: Unicode NFC, casefold/lowercase, trim/collapse spaces, replace permitted period/comma/exclamation/question punctuation with spaces (never join words); preserve Finnish diacritics and sound length. Only explicitly authored accepted forms count. Empty input is not an attempted answer.
- MC options use stable IDs and shuffle visually; response-specific feedback stays keyed to option ID. Token order is a supplied assistance, **not** independent spelling recall. A matching board scores each distinct first-attempt pair, not all targets as one grade. Curriculum matching may have fewer than four pairs; optional Word Match's four-pair minimum is separate.
- Only `Scored` targets receive knowledge updates; `Linked` targets are contextual. A multi-word answer never proves every word was independently recalled. Capability-only records with empty scored targets set `knowledgeScoring: false`.
- Correct first attempts produce `correct`; authored near answers and other wrong attempts use Units 1–2's **provisional non-success `almost` scheduler bucket** while rendering truthful near vs incorrect feedback. “Not sure” produces `not_sure`. This adapter still requires owner confirmation before native implementation; it is not a new scheduler or a claim that a completely wrong answer was almost correct.
- A lesson completes after all required teaching steps are seen and all required exercises and its checkpoint attempted (or explicitly Not sure), **not after perfect recall**. Approval and actual due dates control scheduled Review. Optional Flashcards/Word Match never clear due Review or complete course lessons. No arbitrary Swedish content, backend, unimplemented audio, fabricated imagery or runtime AI grading is required.

### Workload

| Lesson | Required ordered steps | Required exercise records | Matching pair decisions | Estimated time |
|---|---:|---:|---:|---|
| 3.1 What you want and need | 16 | 11 | 2 | 6–9 min |
| 3.2 I know / I don't know | 17 | 12 | 2 | 7–10 min |
| 3.3 What you can do | 19 | 12 | 4 | 8–11 min |
| 3.4 Going and coming | 20 | 14 | 2 | 10–14 min |
| 3.5 Read, write, study | 20 | 13 | 5 | 9–12 min |
| 3.6 Ask, answer, say | 18 | 19 | 3 | 15–21 min |
| **Total** | **110 + four optional spoken notes** | **81** | **18** | **55–77 min** |

Eight matching records contain 18 pair choices. Therefore the realistic minimum response-unit count is **81−8+18 = 91**, not simply 81 taps. Multi-sentence typing adds workload. The longer lessons have specified pause/resume boundaries. Durations are editorial estimates, not actual measurements.

## Part II — Fully authored six-lesson curriculum

## Lesson 3.1 — What you want and need

**Metadata:** `lesson.everyday-actions.want-and-need`, `unit.everyday-actions`, `learningLanguage: fi`, order 1, estimated **6–9 minutes**, prerequisite `lesson.people-and-things.questions-and-no`. **Goal:** express a want or need using the taught I-forms. **New production:** `vocab.haluta`, `vocab.tarvita`. **Phrase items:** `phrase.haluan-slot`, `phrase.tarvitsen-slot`. **Grammar:** `grammar.first-person-forms` and awareness-only `grammar.verb-type-1-preview`. **Previously learned:** `vocab.puhua`, `phrase.puhun-language`, `vocab.olla`. **Pause:** after A05 before the phrases.

### Ordered learner experience

Every listed step is required; ID prefix `step.everyday-actions.want-and-need.` plus suffix. Formal encounters occur at vocabulary/phrase/grammar introductions, never solely from exercise distractors. A checkpoint contains its listed exercises.

| # | Suffix | Step type | Exact learner-facing copy or exercise | Formal encounter |
|---:|---|---|---|---|
| 1 | `open` | `explanation` | **Two useful intentions.** “You can already say what you do. Now say what you want — or what you need.” | none |
| 2 | `haluta` | `vocabulary_intro` | **haluta** — to want; **haluan** — I want. “Learn the full useful form. Not all verbs change like puhun.” | `vocab.haluta` |
| 3 | `recognise-want` | `exercise` | A01 | none |
| 4 | `tarvita` | `vocabulary_intro` | **tarvita** — to need; **tarvitsen** — I need. “Use it when you require something.” | `vocab.tarvita` |
| 5 | `recognise-need` | `exercise` | A02 | none |
| 6 | `form-explanation` | `grammar_explanation` | **A first verb pattern — and its limits.** “The familiar **puhua → puhun** and **asua → asun** show a transparent *verb type 1* pattern: in these taught verbs, the final dictionary-form -a is removed and the first-person form ends in -n. But this is **not a rule for all Finnish verbs**. **haluta → haluan** and **tarvita → tarvitsen** work differently. Learn their full forms now; the verb-type tables can wait.” | `grammar.first-person-forms`, `grammar.verb-type-1-preview` |
| 7 | `match-intentions` | `exercise` | A03 | none |
| 8 | `write-want` | `exercise` | A04 | none |
| 9 | `write-need` | `exercise` | A05 | none |
| 10 | `phrases` | `phrase_intro` | **Haluan puhua.** — “I want to speak.” “The second action, puhua, stays in its dictionary form here.” **Tarvitsen apua.** — “I need help.” “Learn this fixed phrase; apua is supplied context, not a new word to inflect yourself.” | `phrase.haluan-slot`, `phrase.tarvitsen-slot` |
| 11 | `model` | `example_set` | **At a meeting:** “Haluan puhua.” **When you need assistance:** “Tarvitsen apua.” “The first expresses a wish to speak; the second expresses a need for help.” | none |
| 12 | `choose` | `exercise` | A06 | none |
| 13 | `build-want` | `exercise` | A07 | none |
| 14 | `recall-want` | `exercise` | A08 | none |
| 15 | `build-need` | `exercise` | A09 | none |
| 16 | `checkpoint` | `checkpoint` | **Use what you know.** “Choose the correct response, then retrieve one I-form without a word bank.” A10 → A11. | none |

**Optional `spoken_note`** with ID `step.everyday-actions.want-and-need.spoken-haluan`, after A04: “In everyday speech, you may hear **haluun** for standard **haluan**. Recognise it, but write haluan in your own answers.” Reference `spoken.haluan-haluun`. Recognition only; no new mastery.

### Complete exercises

**A01 — `ex.everyday-actions.want-and-need.recognise-haluta`** · `multiple_choice` · recognition  
**Prompt:** What does the Finnish dictionary verb haluta mean?  
**Stimulus:** haluta  
**Answer:** Options (shuffled): `a` to speak · `b` to want · `c` to need. Accepted ID: `b`.  
**Correct feedback:** Haluta means to want; the I-form is haluan.  
**Incorrect feedback:** `a`: To speak is puhua, learned in Unit 2. `c`: To need is tarvita, introduced next.  
**Near feedback:** None.  
**Not sure:** Haluta means to want.  
**Hint:** null. **Linked:** `vocab.haluta`. **Scored:** `vocab.haluta`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A02 — `ex.everyday-actions.want-and-need.recognise-tarvita`** · `multiple_choice` · recognition  
**Prompt:** What does tarvita mean?  
**Stimulus:** tarvita  
**Answer:** Options (shuffled): `a` to want · `b` to need · `c` to be able to. Accepted ID: `b`.  
**Correct feedback:** Tarvita means to need. Its I-form is tarvitsen.  
**Incorrect feedback:** `a`: Wanting is haluta. Tarvita means to need. `c`: Being able to do something is not the same as needing something.  
**Near feedback:** None.  
**Not sure:** Tarvita means to need.  
**Hint:** null. **Linked:** `vocab.tarvita`. **Scored:** `vocab.tarvita`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A03 — `ex.everyday-actions.want-and-need.match-first-person`** · `matching` · guided recognition  
**Prompt:** Match the two first-person forms to their meanings.  
**Stimulus:** Two independent pairs.  
**Answer:** Pairs: haluan ↔ I want (`vocab.haluta`); tarvitsen ↔ I need (`vocab.tarvita`). Score first attempt per pair; order independent.  
**Correct feedback:** Haluan expresses wanting; tarvitsen expresses needing.  
**Incorrect feedback:** `haluan`: Haluan means I want. `tarvitsen`: Tarvitsen means I need.  
**Near feedback:** None.  
**Not sure:** Haluan = I want; tarvitsen = I need.  
**Hint:** null. **Linked:** `vocab.haluta`, `vocab.tarvita`. **Scored:** `vocab.haluta`, `vocab.tarvita`. **Review eligible:** false — lesson-local matching. **Editorial:** `needs_review`.

**A04 — `ex.everyday-actions.want-and-need.type-haluan`** · `text_input` · controlled recall  
**Prompt:** Type the taught Finnish word meaning ‘I want’.  
**Stimulus:** I want (one word)  
**Answer:** Accepted after Unit 1 N1: `haluan`.  
**Correct feedback:** Haluan is the I-form of haluta.  
**Incorrect feedback:** The full form is haluan; not a direct copy of the puhun pattern.  
**Near feedback:** `halun` → The standard form is haluan, with a after u.  
**Not sure:** Write haluan.  
**Hint:** null. **Linked:** `vocab.haluta`, `grammar.first-person-forms`. **Scored:** `vocab.haluta`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A05 — `ex.everyday-actions.want-and-need.type-tarvitsen`** · `text_input` · controlled recall  
**Prompt:** Type the taught Finnish word meaning ‘I need’.  
**Stimulus:** I need (one word)  
**Answer:** Accepted after Unit 1 N1: `tarvitsen`.  
**Correct feedback:** Tarvitsen is the I-form of tarvita.  
**Incorrect feedback:** Write tarvitsen. The standard form contains -tsen.  
**Near feedback:** `tarvitan` → Use tarvitsen, not a guessed pattern.  
**Not sure:** Write tarvitsen.  
**Hint:** null. **Linked:** `vocab.tarvita`, `grammar.first-person-forms`. **Scored:** `vocab.tarvita`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A06 — `ex.everyday-actions.want-and-need.need-help`** · `multiple_choice` · contextual selection  
**Prompt:** You need help. Which taught Finnish sentence says exactly ‘I need help’?  
**Stimulus:** I need help.  
**Answer:** Options (shuffled): `a` Haluan puhua. · `b` Puhun suomea. · `c` Tarvitsen apua.. Accepted ID: `c`.  
**Correct feedback:** Tarvitsen apua. is a useful request for help.  
**Incorrect feedback:** `a`: Haluan puhua. says I want to speak. `b`: Puhun suomea. says I speak Finnish.  
**Near feedback:** None.  
**Not sure:** Choose Tarvitsen apua.  
**Hint:** null. **Linked:** `phrase.tarvitsen-slot`, `phrase.haluan-slot`. **Scored:** `phrase.tarvitsen-slot`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A07 — `ex.everyday-actions.want-and-need.build-want-to-speak`** · `token_build` · controlled construction  
**Prompt:** Arrange the supplied words to say ‘I want to speak’.  
**Stimulus:** I want to speak.  
**Answer:** Tile bank (shuffled): puhua / Haluan. Accepted arranged output: `Haluan puhua.`.  
**Correct feedback:** Haluan puhua. keeps the second action in its dictionary form.  
**Incorrect feedback:** Put Haluan first, then puhua. Do not use puhun after haluan here.  
**Near feedback:** None.  
**Not sure:** Arrange Haluan → puhua.  
**Hint:** null. **Linked:** `phrase.haluan-slot`, `vocab.puhua`, `vocab.haluta`. **Scored:** `phrase.haluan-slot`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A08 — `ex.everyday-actions.want-and-need.recall-want-to-speak`** · `text_input` · phrase recall  
**Prompt:** Without tiles, type ‘I want to speak’ in Finnish.  
**Stimulus:** I want to speak.  
**Answer:** Accepted after Unit 1 N1: `Haluan puhua.` or `Minä haluan puhua.`.  
**Correct feedback:** Haluan puhua. is a useful way to express that intention.  
**Incorrect feedback:** Write Haluan puhua. The second verb stays puhua.  
**Near feedback:** `haluan puhun` → After haluan use puhua, not puhun.  
**Not sure:** Write Haluan puhua.  
**Hint:** null. **Linked:** `phrase.haluan-slot`, `vocab.haluta`, `vocab.puhua`. **Scored:** `phrase.haluan-slot`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A09 — `ex.everyday-actions.want-and-need.build-need-help`** · `token_build` · controlled construction  
**Prompt:** Arrange the supplied words to say ‘I need help’.  
**Stimulus:** I need help.  
**Answer:** Tile bank (shuffled): apua / Tarvitsen. Accepted arranged output: `Tarvitsen apua.`.  
**Correct feedback:** Tarvitsen apua. is a complete expression; apua was provided.  
**Incorrect feedback:** Arrange Tarvitsen first, then apua. You are not asked to form apua.  
**Near feedback:** None.  
**Not sure:** Tarvitsen → apua.  
**Hint:** null. **Linked:** `phrase.tarvitsen-slot`, `vocab.tarvita`. **Scored:** `phrase.tarvitsen-slot`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A10 — `ex.everyday-actions.want-and-need.checkpoint-want`** · `multiple_choice` · contextual application  
**Prompt:** At a meeting you want to speak. Which sentence expresses that wish?  
**Stimulus:** I want to speak.  
**Answer:** Options (shuffled): `a` Tarvitsen apua. · `b` Haluan puhua. · `c` Asun Suomessa.. Accepted ID: `b`.  
**Correct feedback:** Haluan puhua. states that you want to speak.  
**Incorrect feedback:** `a`: Tarvitsen apua. asks for help instead. `c`: Asun Suomessa. tells where you live.  
**Near feedback:** None.  
**Not sure:** Use Haluan puhua.  
**Hint:** null. **Linked:** `phrase.haluan-slot`, `phrase.tarvitsen-slot`. **Scored:** `phrase.haluan-slot`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

**A11 — `ex.everyday-actions.want-and-need.checkpoint-need`** · `text_input` · independent recall  
**Prompt:** Recall the one-word Finnish form meaning ‘I need’.  
**Stimulus:** I need  
**Answer:** Accepted after Unit 1 N1: `tarvitsen`.  
**Correct feedback:** Tarvitsen is the taught I-form.  
**Incorrect feedback:** Write tarvitsen — remember -tsen.  
**Near feedback:** None.  
**Not sure:** Write tarvitsen.  
**Hint:** null. **Linked:** `vocab.tarvita`. **Scored:** `vocab.tarvita`. **Review eligible:** true — independently self-contained. **Editorial:** `needs_review`.

### Completion

**Headline:** “Two useful intentions.” **Supporting copy:** “You can now say **Haluan puhua** and **Tarvitsen apua**. Next, learn to say what you know and understand.” **Completion:** required teaching steps and A01–A11 attempted or explicitly Not sure, no perfect score. **Review:** the two formally introduced lemmas and two phrases become eligible only when editorially approved and due. No support word is scored as new.


## Lesson 3.2 — I know / I don’t know

**Metadata:** `lesson.everyday-actions.know-understand`; unit `unit.everyday-actions`; language `fi`; order 2; **7–10 minutes**; prerequisite `lesson.everyday-actions.want-and-need`. **Capability:** distinguish knowing information from understanding an explanation and use correct negative replies. **New production:** `vocab.tietaa`, `vocab.ymmartaa`. **New phrases:** `phrase.en-tieda`, `phrase.en-ymmarra`. **Grammar reinforcement:** `grammar.negative-en` (introduced in Unit 2, not new here). **Review:** Unit 2 `En puhu …`, `Puhun suomea` and Unit 3 `haluan/tarvitsen`. **Pause:** after B05 before negative phrases.

### Ordered learner experience

Every step is required, prefix `step.everyday-actions.know-understand.` + suffix. Earlier `grammar.negative-en` is reinforced, not given a second formal NEW encounter.

| # | Step suffix | LessonStep type | Exact learner-facing copy / exercise | New formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Knowing and understanding.** “Sometimes you know an answer; sometimes you understand an explanation. You can express both in Finnish, including when the answer is no.” | none |
| 2 | `know-verb` | `vocabulary_intro` | **tietää** — to know (information or a fact). **tiedän** — I know. “You can say **Tiedän.** when you know the answer.” | `vocab.tietaa` |
| 3 | `recognise-know` | `exercise` | B01 | none |
| 4 | `understand-verb` | `vocabulary_intro` | **ymmärtää** — to understand. **ymmärrän** — I understand. “Use it when something makes sense to you. It is not just another word for knowing a fact.” | `vocab.ymmartaa` |
| 5 | `recognise-understand` | `exercise` | B02 | none |
| 6 | `contrast` | `example_set` | **Someone asks whether you know a fact:** Tiedän. — “I know.” **Someone explains something clearly:** Ymmärrän. — “I understand.” “Both are useful complete replies in the right situation.” | none |
| 7 | `match` | `exercise` | B03 | none |
| 8 | `recall-know` | `exercise` | B04 | none |
| 9 | `recall-understand` | `exercise` | B05 | none |
| 10 | `negative-recall` | `grammar_explanation` | **You already know en puhu.** “The same everyday negative pattern works here: **tiedän → en tiedä**, and **ymmärrän → en ymmärrä**. After **en**, the other verb does not keep the first-person -n. Do not write *en tiedän* or *en ymmärrän*.” | none |
| 11 | `negative-phrases` | `phrase_intro` | **En tiedä.** — “I don't know.” **En ymmärrä.** — “I don't understand.” “These are especially useful when you are learning: say which one you really mean.” | `phrase.en-tieda`, `phrase.en-ymmarra` |
| 12 | `recognise-negation` | `exercise` | B06 | none |
| 13 | `transform-know` | `exercise` | B07 | none |
| 14 | `transform-understand` | `exercise` | B08 | none |
| 15 | `type-dont-know` | `exercise` | B09 | none |
| 16 | `type-dont-understand` | `exercise` | B10 | none |
| 17 | `checkpoint` | `checkpoint` | **A little more independent.** “Use the right expression for the situation, then retrieve a negative sentence.” B11 → B12. | none |

**Optional `spoken_note`** `step.everyday-actions.know-understand.spoken-tiedan`, after B04: “In casual speech, standard **tiedän** often sounds like **tiiän**. Recognise the form; continue writing **tiedän**.” Reference `spoken.tiedan-tiian`. No mastery score.

### Complete exercises

**B01 — `ex.everyday-actions.know-understand.recognise-tietaa`** · `multiple_choice` · recognition  
**Prompt:** Which English meaning belongs to tietää?  
**Stimulus:** tietää  
**Answer:** Options (stable IDs): `a` to know · `b` to speak · `c` to need. Accepted `a`; shuffle displayed order.  
**Correct feedback:** Tietää means to know information or a fact.  
**Incorrect feedback:** `b`: To speak is puhua, learned earlier. `c`: To need is tarvita. Here, tietää means to know.  
**Near feedback:** None.  
**Not sure:** Tietää means to know.  
**Hint:** null. **Linked:** `vocab.tietaa`. **Scored:** `vocab.tietaa`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B02 — `ex.everyday-actions.know-understand.recognise-ymmartaa`** · `multiple_choice` · recognition  
**Prompt:** What does ymmärtää mean?  
**Stimulus:** ymmärtää  
**Answer:** Options (stable IDs): `a` to say · `b` to understand · `c` to want. Accepted `b`; shuffle displayed order.  
**Correct feedback:** Ymmärtää means to understand.  
**Incorrect feedback:** `a`: To say is sanoa, which comes later. `c`: To want is haluta.  
**Near feedback:** None.  
**Not sure:** Ymmärtää means to understand.  
**Hint:** null. **Linked:** `vocab.ymmartaa`. **Scored:** `vocab.ymmartaa`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B03 — `ex.everyday-actions.know-understand.match-know-understand`** · `matching` · guided recognition  
**Prompt:** Match the first-person forms to the kinds of reply they make.  
**Stimulus:** Two different contexts.  
**Answer:** Distinct pairs: **tiedän** ↔ **I know a fact** (`vocab.tietaa`); **ymmärrän** ↔ **I understand what was explained** (`vocab.ymmartaa`). Independent first-attempt per pair.  
**Correct feedback:** Tiedän replies about knowing; ymmärrän replies about understanding.  
**Incorrect feedback:** `tiedän`: Tiedän means I know. `ymmärrän`: Ymmärrän means I understand.  
**Near feedback:** None.  
**Not sure:** tiedän = I know; ymmärrän = I understand.  
**Hint:** null. **Linked:** `vocab.tietaa`, `vocab.ymmartaa`. **Scored:** `vocab.tietaa`, `vocab.ymmartaa`. **Review eligible:** false, supported lesson activity. **Editorial:** `needs_review`.

**B04 — `ex.everyday-actions.know-understand.type-tiedan`** · `text_input` · controlled recall  
**Prompt:** Type the standard Finnish word meaning ‘I know’.  
**Stimulus:** I know (one word)  
**Answer:** Accepted after N1: `tiedän`.  
**Correct feedback:** Tiedän is the I-form of tietää.  
**Incorrect feedback:** Write tiedän, including ä.  
**Near feedback:** `tiedan` → Standard Finnish writes tiedän with ä.  
**Not sure:** Write tiedän.  
**Hint:** null. **Linked:** `vocab.tietaa`. **Scored:** `vocab.tietaa`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B05 — `ex.everyday-actions.know-understand.type-ymmarran`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish one-word reply ‘I understand’.  
**Stimulus:** I understand (one word)  
**Answer:** Accepted after N1: `ymmärrän`.  
**Correct feedback:** Ymmärrän means I understand.  
**Incorrect feedback:** Write ymmärrän. Both ä vowels are part of the spelling.  
**Near feedback:** `ymmarran` → Standard Finnish writes ymmärrän with ä.  
**Not sure:** Write ymmärrän.  
**Hint:** null. **Linked:** `vocab.ymmartaa`. **Scored:** `vocab.ymmartaa`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B06 — `ex.everyday-actions.know-understand.recognise-en-tieda`** · `multiple_choice` · recognition  
**Prompt:** Someone says En tiedä. What are they telling you?  
**Stimulus:** En tiedä.  
**Answer:** Options (stable IDs): `a` I understand. · `b` I don't know. · `c` I need help.. Accepted `b`; shuffle displayed order.  
**Correct feedback:** En tiedä means I don't know.  
**Incorrect feedback:** `a`: I understand is Ymmärrän. These phrases describe different situations. `c`: I need help is Tarvitsen apua.  
**Near feedback:** None.  
**Not sure:** En tiedä means I don't know.  
**Hint:** null. **Linked:** `phrase.en-tieda`, `vocab.tietaa`. **Scored:** `phrase.en-tieda`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B07 — `ex.everyday-actions.know-understand.negate-tiedan`** · `transform` · controlled construction  
**Prompt:** Make the taught statement negative. Keep the meaning ‘know’.  
**Stimulus:** Tiedän. → I don't know.  
**Answer:** Accepted after N1: `En tiedä.` or `Minä en tiedä.`.  
**Correct feedback:** En tiedä. uses en and the form tiedä without first-person -n.  
**Incorrect feedback:** After en, use tiedä, not tiedän.  
**Near feedback:** `en tiedän` → After en, use tiedä, without the -n.  
**Not sure:** Write En tiedä.  
**Hint:** null. **Linked:** `grammar.negative-en`, `vocab.tietaa`, `phrase.en-tieda`. **Scored:** `grammar.negative-en`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B08 — `ex.everyday-actions.know-understand.negate-ymmarran`** · `transform` · controlled construction  
**Prompt:** Turn this sentence into ‘I don't understand’.  
**Stimulus:** Ymmärrän. → I don't understand.  
**Answer:** Accepted after N1: `En ymmärrä.` or `Minä en ymmärrä.`.  
**Correct feedback:** En ymmärrä. is the negative of Ymmärrän.  
**Incorrect feedback:** After en, use ymmärrä, not ymmärrän.  
**Near feedback:** `en ymmärrän` → After en, use ymmärrä, without the -n.  
**Not sure:** Write En ymmärrä.  
**Hint:** null. **Linked:** `grammar.negative-en`, `vocab.ymmartaa`, `phrase.en-ymmarra`. **Scored:** `grammar.negative-en`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B09 — `ex.everyday-actions.know-understand.recall-en-tieda`** · `text_input` · phrase recall  
**Prompt:** Without tiles, type the complete Finnish sentence ‘I don't know’.  
**Stimulus:** I don't know.  
**Answer:** Accepted after N1: `En tiedä.` or `Minä en tiedä.`.  
**Correct feedback:** En tiedä. is one of the most useful beginner responses.  
**Incorrect feedback:** Use En tiedä — two words, with ä.  
**Near feedback:** `en tiedän` → The negative is en tiedä, not en tiedän.  
**Not sure:** Write En tiedä.  
**Hint:** null. **Linked:** `phrase.en-tieda`, `vocab.tietaa`. **Scored:** `phrase.en-tieda`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B10 — `ex.everyday-actions.know-understand.recall-en-ymmarra`** · `text_input` · phrase recall  
**Prompt:** Type the Finnish sentence ‘I don't understand’.  
**Stimulus:** I don't understand.  
**Answer:** Accepted after N1: `En ymmärrä.` or `Minä en ymmärrä.`.  
**Correct feedback:** En ymmärrä. means I don't understand.  
**Incorrect feedback:** Use En ymmärrä, not En ymmärrän.  
**Near feedback:** `en ymmärrän` → The negative is en ymmärrä, not en ymmärrän.  
**Not sure:** Write En ymmärrä.  
**Hint:** null. **Linked:** `phrase.en-ymmarra`, `vocab.ymmartaa`. **Scored:** `phrase.en-ymmarra`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B11 — `ex.everyday-actions.know-understand.checkpoint-know-context`** · `multiple_choice` · contextual application  
**Prompt:** You are asked for an answer to a fact, but you do not know it. Which reply fits?  
**Stimulus:** You genuinely do not know the answer.  
**Answer:** Options (stable IDs): `a` Ymmärrän. · `b` Tiedän. · `c` En tiedä.. Accepted `c`; shuffle displayed order.  
**Correct feedback:** En tiedä. tells the other person you don't know the answer.  
**Incorrect feedback:** `a`: Ymmärrän. says you understand, not that you lack a fact. `b`: Tiedän. says you know the answer, which contradicts the situation.  
**Near feedback:** None.  
**Not sure:** Choose En tiedä.  
**Hint:** null. **Linked:** `phrase.en-tieda`, `vocab.tietaa`, `vocab.ymmartaa`. **Scored:** `phrase.en-tieda`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

**B12 — `ex.everyday-actions.know-understand.checkpoint-understand-context`** · `text_input` · contextual application  
**Prompt:** Someone explains something, but you still don't understand. What complete Finnish reply can you use?  
**Stimulus:** I don't understand.  
**Answer:** Accepted after N1: `En ymmärrä.` or `Minä en ymmärrä.`.  
**Correct feedback:** En ymmärrä. is a polite, useful way to say you do not understand.  
**Incorrect feedback:** Write En ymmärrä. The word after en is ymmärrä.  
**Near feedback:** None.  
**Not sure:** Write En ymmärrä.  
**Hint:** null. **Linked:** `phrase.en-ymmarra`, `grammar.negative-en`. **Scored:** `phrase.en-ymmarra`. **Review eligible:** true, independently self-contained. **Editorial:** `needs_review`.

### Completion

**Headline:** “Two answers you can use.” **Copy:** “You can now say **En tiedä** when you don't know and **En ymmärrä** when something isn't clear. Next you'll learn to say what you can do.” **Completion:** all required steps and B01–B12 attempted or Not sure; no perfection threshold. **Review:** phrase and lexical records can enter the existing due scheduler when approved. Optional practice is separate.


## Lesson 3.3 — What you can do

**Metadata:** `lesson.everyday-actions.can-do`, unit `unit.everyday-actions`, `fi`, order 3, estimated **8–11 minutes**, prerequisite `lesson.everyday-actions.know-understand`. **Capability:** express ability and ask a simple permission question using taught verbs. **New production:** `vocab.voida`, `vocab.tehda`. **New recognition:** `vocab.saada`, `vocab.auttaa`. **Phrases:** `phrase.voin-slot`, `phrase.voinko-slot`. **Grammar:** `grammar.verb-plus-infinitive` (explicitly introduced here); `grammar.yes-no-ko-ko` reinforced from Unit 2. **Review:** `phrase.haluan-slot`, `vocab.puhua`. **Pause:** after C07 before the question and recognition notes.

### Ordered learner experience

All listed steps are required with IDs `step.everyday-actions.can-do.` + suffix. Recognition-only vocabulary is introduced for comprehension, not Finnish productive writing. The familiar verb `puhua` is an action in phrases; `tulla` is deliberately deferred until 3.4.

| # | Step suffix | Step kind | Exact learner-facing content / exercise | Formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Being able to do something.** “You can say what you want or need. Now say what you can do — and ask whether you may do it.” | none |
| 2 | `voida` | `vocabulary_intro` | **voida** — can / to be able to. **voin** — I can. “Depending on context, it can express possibility or ability; in a question it can ask permission.” | `vocab.voida` |
| 3 | `recognise-voida` | `exercise` | C01 | none |
| 4 | `tehda` | `vocabulary_intro` | **tehdä** — to do or make. **teen** — I do / I make. “Learn the useful form teen directly. The change from tehdä is not the same as puhua → puhun.” | `vocab.tehda` |
| 5 | `recognise-tehda` | `exercise` | C02 | none |
| 6 | `compare-forms` | `example_set` | **Voin puhua.** — “I can speak.” **Teen ruokaa.** — “I'm making food / cooking.” “Ruokaa is supplied here as part of a fixed example, not a new word you must inflect.” | none |
| 7 | `match` | `exercise` | C03 | none |
| 8 | `write-voin` | `exercise` | C04 | none |
| 9 | `write-teen` | `exercise` | C05 | none |
| 10 | `two-verbs` | `grammar_explanation` | **Voin + another action.** “After voin, the other verb can stay in its dictionary form: **Voin puhua.** (‘I can speak.’) **Voin tehdä ruokaa.** (‘I can make food.’) You have already seen a similar pattern with **Haluan puhua**.” | `grammar.verb-plus-infinitive` |
| 11 | `phrase-voin` | `phrase_intro` | **Voin …** — “I can …”. Learn **Voin puhua.** as the main example. “The action after voin is supplied or already familiar; we are not changing the second verb.” | `phrase.voin-slot` |
| 12 | `meaning-voin` | `exercise` | C06 | none |
| 13 | `build-voin` | `exercise` | C07 | none |
| 14 | `question-voinko` | `phrase_intro` | **Voinko …?** — “Can I …?” “This follows the question pattern you learned in Unit 2: voin → voinko. **Voinko puhua?** — ‘Can I speak?’ In this situation the speaker is asking permission.” | `phrase.voinko-slot` |
| 15 | `write-voinko` | `exercise` | C08 | none |
| 16 | `build-teen-ruokaa` | `exercise` | C09 | none |
| 17 | `recognition-helpers` | `vocabulary_intro` | **saada** — to get/receive in **Saan apua.** (‘I receive help.’). **auttaa** — to help, recognised in **Voinko auttaa?** (‘Can I help?’). “These are recognition expressions only. Saada has other uses, including permission, which we are not testing now.” | `vocab.saada`, `vocab.auttaa` |
| 18 | `helper-match` | `exercise` | C10 | none |
| 19 | `checkpoint` | `checkpoint` | **You can ask.** “Choose a request for permission, then turn a statement into the corresponding taught question.” C11 → C12. | none |

### Complete exercises

**C01 — `ex.everyday-actions.can-do.recognise-voida`** · `multiple_choice` · recognition  
**Prompt:** What does voida express in its basic use here?  
**Stimulus:** voida  
**Answer:** Options with stable IDs (shuffle): `a` to want · `b` to be able to / can · `c` to understand. Accepted: `b`.  
**Correct feedback:** Voida is a verb used to express ability or possibility.  
**Incorrect feedback:** `a`: Haluta means to want. `c`: Ymmärtää means to understand.  
**Near feedback:** None.  
**Not sure:** Voida means can / be able to.  
**Hint:** null. **Linked:** `vocab.voida`. **Scored:** `vocab.voida`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C02 — `ex.everyday-actions.can-do.recognise-tehda`** · `multiple_choice` · recognition  
**Prompt:** What does tehdä mean?  
**Stimulus:** tehdä  
**Answer:** Options with stable IDs (shuffle): `a` to go · `b` to ask · `c` to do or make. Accepted: `c`.  
**Correct feedback:** Tehdä means to do or make.  
**Incorrect feedback:** `a`: Mennä means to go; it comes later. `b`: Kysyä means to ask, taught later.  
**Near feedback:** None.  
**Not sure:** Tehdä means to do/make.  
**Hint:** null. **Linked:** `vocab.tehda`. **Scored:** `vocab.tehda`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C03 — `ex.everyday-actions.can-do.match-voin-teen`** · `matching` · guided recognition  
**Prompt:** Match the two first-person forms to their meanings.  
**Stimulus:** Two independent verb forms.  
**Answer:** Pairs, individually evaluated: voin ↔ I can (`vocab.voida`); teen ↔ I do/make (`vocab.tehda`). Unique identity, order independent.  
**Correct feedback:** Voin means I can, and teen means I do or make.  
**Incorrect feedback:** `voin`: Voin is I can. `teen`: Teen is I do or make.  
**Near feedback:** None.  
**Not sure:** Voin = I can; teen = I do or make.  
**Hint:** null. **Linked:** `vocab.voida`, `vocab.tehda`. **Scored:** `vocab.voida`, `vocab.tehda`. **Review eligible:** false, supported/token/matching practice. **Editorial:** `needs_review`.

**C04 — `ex.everyday-actions.can-do.type-voin`** · `text_input` · controlled recall  
**Prompt:** Type the taught Finnish I-form meaning ‘I can’.  
**Stimulus:** I can (one word)  
**Answer:** Accepted after N1: `voin`.  
**Correct feedback:** Voin is the useful I-form of voida.  
**Incorrect feedback:** Write voin, not a form guessed from puhua.  
**Near feedback:** `voiin` → The standard form is voin, with one i.  
**Not sure:** Write voin.  
**Hint:** null. **Linked:** `vocab.voida`. **Scored:** `vocab.voida`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C05 — `ex.everyday-actions.can-do.type-teen`** · `text_input` · controlled recall  
**Prompt:** Type the taught Finnish word meaning ‘I do’ or ‘I make’.  
**Stimulus:** I do / I make (one word)  
**Answer:** Accepted after N1: `teen`.  
**Correct feedback:** Teen is the I-form of tehdä.  
**Incorrect feedback:** The correct form is teen, not tehdän.  
**Near feedback:** `tehän` → The taught form is teen; tehdä changes its stem.  
**Not sure:** Write teen.  
**Hint:** null. **Linked:** `vocab.tehda`. **Scored:** `vocab.tehda`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C06 — `ex.everyday-actions.can-do.recognise-voin-puhua`** · `multiple_choice` · phrase recognition  
**Prompt:** What does Voin puhua. mean?  
**Stimulus:** Voin puhua.  
**Answer:** Options with stable IDs (shuffle): `a` I want to speak. · `b` I can speak. · `c` I don't speak.. Accepted: `b`.  
**Correct feedback:** Voin puhua. says that speaking is possible for you.  
**Incorrect feedback:** `a`: Haluan puhua. means I want to speak. `c`: En puhu. means I do not speak.  
**Near feedback:** None.  
**Not sure:** It means I can speak.  
**Hint:** null. **Linked:** `phrase.voin-slot`, `phrase.haluan-slot`, `vocab.puhua`. **Scored:** `phrase.voin-slot`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C07 — `ex.everyday-actions.can-do.build-voin-puhua`** · `token_build` · controlled construction  
**Prompt:** Arrange the supplied tiles to say ‘I can speak’.  
**Stimulus:** I can speak.  
**Answer:** Token bank (shuffled): puhua / Voin. Accepted constructed sentence: `Voin puhua.`.  
**Correct feedback:** Voin puhua. puts the other action after voin.  
**Incorrect feedback:** Put Voin first, followed by the unchanged infinitive puhua.  
**Near feedback:** None.  
**Not sure:** Arrange Voin → puhua.  
**Hint:** null. **Linked:** `phrase.voin-slot`, `vocab.voida`, `vocab.puhua`. **Scored:** `phrase.voin-slot`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C08 — `ex.everyday-actions.can-do.type-voinko-puhua`** · `text_input` · phrase recall  
**Prompt:** Ask for permission to speak. Type the complete taught Finnish question.  
**Stimulus:** Can I speak?  
**Answer:** Accepted after N1: `Voinko puhua?`.  
**Correct feedback:** Voinko puhua? asks whether you can or may speak.  
**Incorrect feedback:** Use Voinko puhua? Put -ko on voin, and keep puhua in its dictionary form.  
**Near feedback:** `voin puhua` → Voin puhua is a statement; the question is Voinko puhua.  
**Not sure:** Write Voinko puhua?  
**Hint:** null. **Linked:** `phrase.voinko-slot`, `grammar.yes-no-ko-ko`, `vocab.voida`, `vocab.puhua`. **Scored:** `phrase.voinko-slot`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C09 — `ex.everyday-actions.can-do.build-teen-ruokaa`** · `token_build` · controlled construction  
**Prompt:** Arrange the supplied words to say ‘I'm making food’.  
**Stimulus:** I make food / I'm cooking. The object word is supplied.  
**Answer:** Token bank (shuffled): ruokaa / Teen. Accepted constructed sentence: `Teen ruokaa.`.  
**Correct feedback:** Teen ruokaa. is a natural sentence meaning I cook or make food.  
**Incorrect feedback:** Put Teen before ruokaa. The object form is provided, not generated.  
**Near feedback:** None.  
**Not sure:** Arrange Teen → ruokaa.  
**Hint:** null. **Linked:** `vocab.tehda`. **Scored:** `vocab.tehda`. **Review eligible:** false, supported/token/matching practice. **Editorial:** `needs_review`.

**C10 — `ex.everyday-actions.can-do.match-recognition-helpers`** · `matching` · recognition only  
**Prompt:** Match these two words to their meanings; do not type Finnish forms.  
**Stimulus:** Two recognition-only verbs.  
**Answer:** Pairs, individually evaluated: saada ↔ to get/receive (`vocab.saada`); auttaa ↔ to help (`vocab.auttaa`). Unique identity, order independent.  
**Correct feedback:** Saada can mean to receive/get; auttaa means to help.  
**Incorrect feedback:** `saada`: Saada means get or receive in this context. `auttaa`: Auttaa means help.  
**Near feedback:** None.  
**Not sure:** Saada = get/receive; auttaa = help.  
**Hint:** null. **Linked:** `vocab.saada`, `vocab.auttaa`. **Scored:** `vocab.saada`, `vocab.auttaa`. **Review eligible:** false, supported/token/matching practice. **Editorial:** `needs_review`.

**C11 — `ex.everyday-actions.can-do.checkpoint-permission`** · `multiple_choice` · contextual application  
**Prompt:** At a meeting, you want to ask whether you may speak. Which option does that?  
**Stimulus:** You are asking permission.  
**Answer:** Options with stable IDs (shuffle): `a` Voin puhua. · `b` Haluan puhua. · `c` Voinko puhua?. Accepted: `c`.  
**Correct feedback:** Voinko puhua? is the question that can ask permission here.  
**Incorrect feedback:** `a`: Voin puhua. states ability rather than asking. `b`: Haluan puhua. states a wish but does not ask permission.  
**Near feedback:** None.  
**Not sure:** Choose Voinko puhua?  
**Hint:** null. **Linked:** `phrase.voinko-slot`, `phrase.voin-slot`, `phrase.haluan-slot`. **Scored:** `phrase.voinko-slot`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**C12 — `ex.everyday-actions.can-do.checkpoint-transform-voin`** · `transform` · controlled application  
**Prompt:** Change the statement into the taught yes/no question. Keep the action unchanged.  
**Stimulus:** Voin puhua. → Can I speak?  
**Answer:** Accepted after N1: `Voinko puhua?`.  
**Correct feedback:** Voinko puhua? uses -ko on voin and keeps puhua.  
**Incorrect feedback:** Change voin to voinko; don't change puhua.  
**Near feedback:** `voin puhua` → This is the statement. Add -ko to voin to form Voinko.  
**Not sure:** Write Voinko puhua?  
**Hint:** null. **Linked:** `grammar.yes-no-ko-ko`, `phrase.voinko-slot`, `vocab.voida`. **Scored:** `grammar.yes-no-ko-ko`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

### Completion

**Headline:** “A little more possible.” **Copy:** “You can say **Voin puhua** and ask **Voinko puhua?**. You also met two useful helping/receiving words to recognise.” **Completion:** all steps and C01–C12 attempted or Not sure, no perfect-score barrier. **Review:** `vocab.voida`, `vocab.tehda` and the two phrases after formal encounters; recognition-only `saada/auttaa` may receive due comprehension checks, never mandatory Finnish production. **Next:** moving away and coming towards someone.


## Lesson 3.4 — Going and coming

**Metadata:** `lesson.everyday-actions.going-coming`, `unit.everyday-actions`, `fi`, order 4, **10–14 minutes**. Prerequisite `lesson.everyday-actions.can-do`. **Capability:** distinguish going and coming using a clear viewpoint, say now/maybe and combine familiar modal/want phrases. **New production:** `vocab.menna`, `vocab.tulla`, `vocab.nyt`, `vocab.ehka`. **Recognition-only:** `vocab.pitaa`. **Promotion:** `nyt/ehkä` were support in Unit 1; **this lesson first formally teaches them as production without creating new canonical items**. **Reused phrases:** `phrase.haluan-slot`, `phrase.voin-slot`; Haluan mennä and Voin tulla are new useful *examples*, not duplicate familiarity entities. **No new systematic location-case grammar.** Pause after D08 before the two-verb combinations.

### Ordered learner experience

All listed steps required and identified by `step.everyday-actions.going-coming.` + suffix. D03 refers to now before its formal production introduction only as a known **support word from Unit 1**; the exercise scores only mennä/tulla, not nyt.

| # | Step suffix | Type | Exact learner-facing text / exercise | New formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Going and coming.** “When you describe a move, it matters whether you are leaving or coming towards the person or place in focus. Add two useful words about time and uncertainty.” | none |
| 2 | `movement` | `vocabulary_intro` | **mennä** — to go; **menen** — I go / I'm going. **tulla** — to come; **tulen** — I come / I'm coming. “Learn these complete I-forms, not a guess from puhun. A person leaving says **Menen nyt.** To a person waiting for you, you may reply **Tulen nyt.**” | `vocab.menna`, `vocab.tulla` |
| 3 | `moving-contrast` | `example_set` | **You are leaving a room:** “Menen nyt.” — “I'm going now.” **A friend is waiting for you at their place and you are on your way to them:** “Tulen nyt.” — “I'm coming now.” “The reference point explains the verb; sometimes English uses ‘go’ and ‘come’ differently, so follow the actual scene.” | none |
| 4 | `recognise-menna` | `exercise` | D01 | none |
| 5 | `recognise-tulla` | `exercise` | D02 | none |
| 6 | `match-movement` | `exercise` | D03 | none |
| 7 | `forms` | `grammar_explanation` | **Two more I-forms.** “From mennä comes menen; from tulla comes tulen. They do not form like the old puhua → puhun example. The first-person ending still tells you who is acting.” | none |
| 8 | `write-menen` | `exercise` | D04 | none |
| 9 | `write-tulen` | `exercise` | D05 | none |
| 10 | `now-maybe` | `vocabulary_intro` | **nyt** — now. **ehkä** — maybe / perhaps. “You have seen these before as support words. Here you begin using them yourself: **Menen nyt.** (‘I'm going now.’) **Ehkä tulen.** (‘Maybe I'll come.’)” | `vocab.nyt`, `vocab.ehka` |
| 11 | `when-to-use` | `exercise` | D06 | none |
| 12 | `retrieve-nyt` | `exercise` | D07 | none |
| 13 | `retrieve-ehka` | `exercise` | D08 | none |
| 14 | `reuse-want-can` | `phrase_intro` | **Haluan mennä.** — “I want to go.” **Voin tulla.** — “I can come.” “These reuse the earlier **haluan/voin + dictionary verb** pattern. Mennä and tulla are now familiar actions; you are not learning a new verb type chart.” | none |
| 15 | `maybe-come` | `exercise` | D09 | none |
| 16 | `build-want-go` | `exercise` | D10 | none |
| 17 | `build-can-come` | `exercise` | D11 | none |
| 18 | `recognise-pitaa` | `vocabulary_intro` | **pitää** — a common verb with several meanings. Here recognise the fixed sentence **Minun pitää mennä nyt.** — “I have to go now.” “This is about necessity, not simply wanting to go. We will study the other meanings and the form minun later.” | `vocab.pitaa` |
| 19 | `recognise-must-go` | `exercise` | D12 | none |
| 20 | `checkpoint` | `checkpoint` | **Two directions.** “Tell someone you are coming now, then express that you might go.” D13 → D14. | none |

**Optional spoken note:** `step.everyday-actions.going-coming.spoken-movement`, shown after D05: “In casual speech **menen** may sound like **meen**, and **tulen** may sound like **tuun**. Recognise them; use the standard spellings in your answers.” `spoken.menen-meen`, `spoken.tulen-tuun`; no separate SRS target.

### Complete exercises

**D01 — `ex.everyday-actions.going-coming.mennä-meaning`** · `multiple_choice` · recognition  
**Prompt:** What does the dictionary verb mennä mean?  
**Stimulus:** mennä  
**Answer:** Options (shuffled): `a` to go · `b` to come · `c` to know. Accepted: `a`.  
**Correct feedback:** Mennä means to go.  
**Incorrect feedback:** `b`: To come is tulla. The direction differs. `c`: To know is tietää.  
**Near feedback:** None.  
**Not sure:** Mennä means to go.  
**Hint:** null. **Linked:** `vocab.menna`. **Scored:** `vocab.menna`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D02 — `ex.everyday-actions.going-coming.tulla-meaning`** · `multiple_choice` · recognition  
**Prompt:** What does tulla mean in a basic movement context?  
**Stimulus:** tulla  
**Answer:** Options (shuffled): `a` to need · `b` to go · `c` to come. Accepted: `c`.  
**Correct feedback:** Tulla means to come in this movement context.  
**Incorrect feedback:** `a`: To need is tarvita. `b`: To go is mennä; tulla often moves towards a person or point of reference.  
**Near feedback:** None.  
**Not sure:** Tulla means to come.  
**Hint:** null. **Linked:** `vocab.tulla`. **Scored:** `vocab.tulla`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D03 — `ex.everyday-actions.going-coming.pair-directions`** · `matching` · guided recognition  
**Prompt:** Match these two expressions to the speaker's situation.  
**Stimulus:** The first speaker is leaving. The second is heading towards a friend who is waiting.  
**Answer:** Independent authored pairs: Menen nyt. ↔ I'm going now — leaving (`vocab.menna`); Tulen nyt. ↔ I'm coming now — to the waiting friend (`vocab.tulla`). Correct keyed pair only.  
**Correct feedback:** Menen nyt is leaving; Tulen nyt is coming to the waiting friend.  
**Incorrect feedback:** `menen`: Menen nyt fits the speaker leaving. `tulen`: Tulen nyt fits heading towards the waiting person.  
**Near feedback:** None.  
**Not sure:** Menen nyt = I'm going now; Tulen nyt = I'm coming now.  
**Hint:** null. **Linked:** `vocab.menna`, `vocab.tulla`, `vocab.nyt`. **Scored:** `vocab.menna`, `vocab.tulla`. **Review eligible:** false, lesson-local board. **Editorial:** `needs_review`.

**D04 — `ex.everyday-actions.going-coming.write-menen`** · `text_input` · controlled recall  
**Prompt:** Type the taught one-word form for ‘I'm going’.  
**Stimulus:** I go / I'm going — one word  
**Answer:** Accepted after N1: `menen`.  
**Correct feedback:** Menen is the first-person form of mennä.  
**Incorrect feedback:** Write menen, not a form guessed from puhua.  
**Near feedback:** `mennen` → The taught form is menen, with one n in the middle.  
**Not sure:** Write menen.  
**Hint:** null. **Linked:** `vocab.menna`. **Scored:** `vocab.menna`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D05 — `ex.everyday-actions.going-coming.write-tulen`** · `text_input` · controlled recall  
**Prompt:** Type the taught one-word form for ‘I'm coming’.  
**Stimulus:** I come / I'm coming — one word  
**Answer:** Accepted after N1: `tulen`.  
**Correct feedback:** Tulen is the I-form of tulla.  
**Incorrect feedback:** Write tulen; the stem changes before the first-person ending.  
**Near feedback:** `tullun` → The standard form is tulen.  
**Not sure:** Write tulen.  
**Hint:** null. **Linked:** `vocab.tulla`. **Scored:** `vocab.tulla`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D06 — `ex.everyday-actions.going-coming.choose-leaving`** · `multiple_choice` · contextual recognition  
**Prompt:** You're at the door leaving the room. Which Finnish reply clearly says ‘I'm going now’?  
**Stimulus:** You are moving away from the room.  
**Answer:** Options (shuffled): `a` Ehkä tulen. · `b` Menen nyt. · `c` Tulen nyt.. Accepted: `b`.  
**Correct feedback:** Menen nyt. fits your movement away from the current place.  
**Incorrect feedback:** `a`: Ehkä tulen. means maybe I'll come, which doesn't state that you're leaving now. `c`: Tulen nyt. would naturally be used when coming towards a waiting person or destination in focus.  
**Near feedback:** None.  
**Not sure:** Use Menen nyt.  
**Hint:** null. **Linked:** `vocab.menna`, `vocab.tulla`, `vocab.nyt`. **Scored:** `vocab.menna`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D07 — `ex.everyday-actions.going-coming.write-nyt`** · `text_input` · independent recall  
**Prompt:** Type the Finnish word for ‘now’.  
**Stimulus:** now (one word)  
**Answer:** Accepted after N1: `nyt`.  
**Correct feedback:** Nyt means now.  
**Incorrect feedback:** The word is nyt.  
**Near feedback:** None.  
**Not sure:** Write nyt.  
**Hint:** null. **Linked:** `vocab.nyt`. **Scored:** `vocab.nyt`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D08 — `ex.everyday-actions.going-coming.write-ehka`** · `text_input` · independent recall  
**Prompt:** Type the Finnish word for ‘maybe’.  
**Stimulus:** maybe / perhaps (one word)  
**Answer:** Accepted after N1: `ehkä`.  
**Correct feedback:** Ehkä means maybe.  
**Incorrect feedback:** Write ehkä, with ä.  
**Near feedback:** `ehka` → The correct letter is ä: ehkä.  
**Not sure:** Write ehkä.  
**Hint:** null. **Linked:** `vocab.ehka`. **Scored:** `vocab.ehka`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D09 — `ex.everyday-actions.going-coming.build-ehka-tulen`** · `token_build` · controlled construction  
**Prompt:** Arrange the tiles to say ‘Maybe I'll come’.  
**Stimulus:** Maybe I'll come.  
**Answer:** Shuffled tiles: tulen / Ehkä. Accepted output: `Ehkä tulen.`.  
**Correct feedback:** Ehkä tulen. says the arrival is possible but not certain.  
**Incorrect feedback:** Put Ehkä before tulen in the taught sentence.  
**Near feedback:** None.  
**Not sure:** Ehkä → tulen.  
**Hint:** null. **Linked:** `vocab.ehka`, `vocab.tulla`. **Scored:** `vocab.ehka`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D10 — `ex.everyday-actions.going-coming.build-haluan-menna`** · `token_build` · phrase construction  
**Prompt:** Build ‘I want to go’ using two taught verbs.  
**Stimulus:** I want to go.  
**Answer:** Shuffled tiles: mennä / Haluan. Accepted output: `Haluan mennä.`.  
**Correct feedback:** Haluan mennä. keeps the second verb in its dictionary form.  
**Incorrect feedback:** Put Haluan first and mennä after it, not menen.  
**Near feedback:** `haluan menen` → After haluan, use mennä, not menen.  
**Not sure:** Haluan → mennä.  
**Hint:** null. **Linked:** `phrase.haluan-slot`, `vocab.menna`, `grammar.verb-plus-infinitive`. **Scored:** `grammar.verb-plus-infinitive`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D11 — `ex.everyday-actions.going-coming.build-voin-tulla`** · `token_build` · phrase construction  
**Prompt:** Build ‘I can come’ using two taught verbs.  
**Stimulus:** I can come.  
**Answer:** Shuffled tiles: tulla / Voin. Accepted output: `Voin tulla.`.  
**Correct feedback:** Voin tulla. is a useful two-verb sentence.  
**Incorrect feedback:** After Voin, keep tulla in the dictionary form.  
**Near feedback:** `voin tulen` → After voin, use tulla, not tulen.  
**Not sure:** Voin → tulla.  
**Hint:** null. **Linked:** `phrase.voin-slot`, `vocab.tulla`, `grammar.verb-plus-infinitive`. **Scored:** `phrase.voin-slot`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D12 — `ex.everyday-actions.going-coming.recognise-must`** · `multiple_choice` · recognition only  
**Prompt:** What does the fixed sentence Minun pitää mennä nyt. mean here?  
**Stimulus:** Minun pitää mennä nyt.  
**Answer:** Options (shuffled): `a` I want to go now. · `b` I have to go now. · `c` I can come now.. Accepted: `b`.  
**Correct feedback:** In this context pitää expresses necessity: ‘have to’.  
**Incorrect feedback:** `a`: Wanting to go is Haluan mennä. Here the speaker says going is necessary. `c`: Voin tulla. expresses ability to come, not an obligation to go.  
**Near feedback:** None.  
**Not sure:** It means I have to go now.  
**Hint:** null. **Linked:** `vocab.pitaa`, `vocab.menna`, `vocab.nyt`. **Scored:** `vocab.pitaa`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D13 — `ex.everyday-actions.going-coming.checkpoint-coming-now`** · `text_input` · contextual application  
**Prompt:** A friend is waiting for you at their place. Tell them in Finnish: ‘I'm coming now’.  
**Stimulus:** Message to the waiting friend: I'm coming now.  
**Answer:** Accepted after N1: `Tulen nyt.` or `Minä tulen nyt.`.  
**Correct feedback:** Tulen nyt. fits movement towards the waiting friend.  
**Incorrect feedback:** Use Tulen nyt. The speaker is heading towards the friend, not leaving them.  
**Near feedback:** None.  
**Not sure:** Write Tulen nyt.  
**Hint:** null. **Linked:** `vocab.tulla`, `vocab.nyt`. **Scored:** `vocab.tulla`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

**D14 — `ex.everyday-actions.going-coming.checkpoint-maybe-go`** · `text_input` · contextual application  
**Prompt:** You're uncertain whether you'll go. Say ‘Maybe I'll go’ in Finnish.  
**Stimulus:** Maybe I'll go. (No destination specified.)  
**Answer:** Accepted after N1: `Ehkä menen.` or `Ehkä minä menen.` or `Minä ehkä menen.`.  
**Correct feedback:** Ehkä menen. expresses uncertainty about going.  
**Incorrect feedback:** Use Ehkä menen. The word ehkä signals maybe.  
**Near feedback:** None.  
**Not sure:** Write Ehkä menen.  
**Hint:** null. **Linked:** `vocab.ehka`, `vocab.menna`. **Scored:** `vocab.ehka`. **Review eligible:** true, context included. **Editorial:** `needs_review`.

### Completion

**Headline:** “Two directions, more possibilities.” **Copy:** “You can say **Menen nyt**, **Tulen nyt**, **Ehkä tulen**, **Haluan mennä** and **Voin tulla** in the taught situations. Next, read, write and study.” **Completion:** required steps and D01–D14 attempted or Not sure; no forced perfection. **Review:** the four new production items, plus the recognition-only `pitää` meaning of necessity, enter the existing due queue only after formal encounter/approval. Support-role history is retained for nyt/ehkä.


## Lesson 3.5 — Read, write, study

**Metadata:** `lesson.everyday-actions.read-write-study`, `unit.everyday-actions`, `fi`, order 5, estimated **9–12 minutes**, prerequisite `lesson.everyday-actions.going-coming`. **Capability:** express basic reading, writing and studying activities. **New production:** `vocab.lukea` (`luen`), `vocab.kirjoittaa` (`kirjoitan`), `vocab.opiskella` (`opiskelen`). **Recognition-only:** `vocab.nahda`, `vocab.kuulla`. **Phrase:** `phrase.opiskelen-suomea`. **Previously learned:** `vocab.nyt`, `vocab.suomi`, `phrase.puhun-language`. **Grammar:** limited I-form awareness only, no new verb-type paradigm or case rule. **Pause:** after E07 before the complete study phrase.

### Ordered learner experience

All listed steps are required. Full IDs use `step.everyday-actions.read-write-study.` + suffix. The supported word `ruokaa` from a previous lesson is not used for scoring here; all scored Finnish forms were explicitly introduced before their exercise.

| # | Step suffix | Step type | Exact learner-facing text / exercise | Formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Three ways to learn.** “You can already say what you want or can do. Now talk about reading, writing and studying — common activities in everyday life.” | none |
| 2 | `lukea` | `vocabulary_intro` | **lukea** — to read. **luen** — I read / I'm reading. “Notice that luen does not simply copy the dictionary form. Learn the actual useful I-form.” | `vocab.lukea` |
| 3 | `recognise-lukea` | `exercise` | E01 | none |
| 4 | `kirjoittaa` | `vocabulary_intro` | **kirjoittaa** — to write. **kirjoitan** — I write / I'm writing. “It is one verb with two useful forms: dictionary form and the I-form.” | `vocab.kirjoittaa` |
| 5 | `recognise-kirjoittaa` | `exercise` | E02 | none |
| 6 | `opiskella` | `vocabulary_intro` | **opiskella** — to study. **opiskelen** — I study / I'm studying. “Keep the full form in memory; not every verb changes like the earlier ones.” | `vocab.opiskella` |
| 7 | `recognise-opiskella` | `exercise` | E03 | none |
| 8 | `three-contexts` | `example_set` | **You are reading:** “Luen nyt.” — “I'm reading now.” **You are writing:** “Kirjoitan nyt.” — “I'm writing now.” **You are studying the language:** “Opiskelen suomea.” — “I study Finnish.” | none |
| 9 | `forms-note` | `grammar_explanation` | **Useful I-forms, not one rule for every verb.** “Puhun and asun were transparent. Luen, kirjoitan and opiskelen need different stems. Learn these complete forms first. The detailed verb classes come later.” | none |
| 10 | `match-forms` | `exercise` | E04 | none |
| 11 | `retrieve-luen` | `exercise` | E05 | none |
| 12 | `retrieve-kirjoitan` | `exercise` | E06 | none |
| 13 | `retrieve-opiskelen` | `exercise` | E07 | none |
| 14 | `study-phrase` | `phrase_intro` | **Opiskelen suomea.** — “I study Finnish.” “The language word is the same familiar form as in Puhun suomea. You do not need a new case explanation here.” | `phrase.opiskelen-suomea` |
| 15 | `build-study` | `exercise` | E08 | none |
| 16 | `recall-study` | `exercise` | E09 | none |
| 17 | `read-or-write` | `exercise` | E10 | none |
| 18 | `see-hear` | `vocabulary_intro` | **nähdä** — to see. **kuulla** — to hear. “These are recognition words here. Reading, writing, seeing and hearing are not the same action. You don't have to spell nähdä or kuulla from memory.” | `vocab.nahda`, `vocab.kuulla` |
| 19 | `recognise-senses` | `exercise` | E11 | none |
| 20 | `checkpoint` | `checkpoint` | **Three real activities.** “Write a short reading sentence, then recall how to say you study Finnish.” E12 → E13. | none |

### Complete exercises

**E01 — `ex.everyday-actions.read-write-study.recognise-lukea`** · `multiple_choice` · guided recognition  
**Prompt:** What does lukea mean?  
**Stimulus:** lukea  
**Answer:** Options: `a` to write · `b` to read · `c` to go; visually shuffle; correct `b`.  
**Correct feedback:** Lukea means to read.  
**Incorrect feedback:** `a`: To write is kirjoittaa, which is introduced next. `c`: To go is mennä.  
**Near feedback:** None.  
**Not sure:** Lukea means to read.  
**Hint:** null. **Linked:** `vocab.lukea`. **Scored:** `vocab.lukea`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E02 — `ex.everyday-actions.read-write-study.recognise-kirjoittaa`** · `multiple_choice` · guided recognition  
**Prompt:** What does kirjoittaa mean?  
**Stimulus:** kirjoittaa  
**Answer:** Options: `a` to write · `b` to understand · `c` to study; visually shuffle; correct `a`.  
**Correct feedback:** Kirjoittaa means to write.  
**Incorrect feedback:** `b`: To understand is ymmärtää. `c`: To study is opiskella, coming next.  
**Near feedback:** None.  
**Not sure:** Kirjoittaa means to write.  
**Hint:** null. **Linked:** `vocab.kirjoittaa`. **Scored:** `vocab.kirjoittaa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E03 — `ex.everyday-actions.read-write-study.recognise-opiskella`** · `multiple_choice` · guided recognition  
**Prompt:** What does opiskella mean?  
**Stimulus:** opiskella  
**Answer:** Options: `a` to need · `b` to read · `c` to study; visually shuffle; correct `c`.  
**Correct feedback:** Opiskella means to study.  
**Incorrect feedback:** `a`: To need is tarvita. `b`: To read is lukea; studying is broader than reading.  
**Near feedback:** None.  
**Not sure:** Opiskella means to study.  
**Hint:** null. **Linked:** `vocab.opiskella`. **Scored:** `vocab.opiskella`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E04 — `ex.everyday-actions.read-write-study.matching-learning-actions`** · `matching` · guided recognition  
**Prompt:** Match the three I-forms to the activities.  
**Stimulus:** Three different actions.  
**Answer:** Pairs, each scored individually: luen ↔ I read (`vocab.lukea`); kirjoitan ↔ I write (`vocab.kirjoittaa`); opiskelen ↔ I study (`vocab.opiskella`).  
**Correct feedback:** Luen, kirjoitan and opiskelen refer to reading, writing and studying.  
**Incorrect feedback:** `luen`: Luen is I read. `kirjoitan`: Kirjoitan is I write. `opiskelen`: Opiskelen is I study.  
**Near feedback:** None.  
**Not sure:** Luen = I read; kirjoitan = I write; opiskelen = I study.  
**Hint:** null. **Linked:** `vocab.lukea`, `vocab.kirjoittaa`, `vocab.opiskella`. **Scored:** `vocab.lukea`, `vocab.kirjoittaa`, `vocab.opiskella`. **Review eligible:** false; paired/supplied introduction. **Editorial:** `needs_review`.

**E05 — `ex.everyday-actions.read-write-study.type-luen`** · `text_input` · controlled recall  
**Prompt:** Type the taught Finnish I-form for ‘I read’.  
**Stimulus:** I read / I am reading  
**Answer:** Accepted N1: `luen`.  
**Correct feedback:** Luen is the I-form of lukea.  
**Incorrect feedback:** Write luen. It is not *luken*.  
**Near feedback:** `luken` → The taught I-form is luen, not luken.  
**Not sure:** Write luen.  
**Hint:** null. **Linked:** `vocab.lukea`. **Scored:** `vocab.lukea`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E06 — `ex.everyday-actions.read-write-study.type-kirjoitan`** · `text_input` · controlled recall  
**Prompt:** Type the taught Finnish I-form for ‘I write’.  
**Stimulus:** I write / I am writing  
**Answer:** Accepted N1: `kirjoitan`.  
**Correct feedback:** Kirjoitan is the I-form of kirjoittaa.  
**Incorrect feedback:** Write kirjoitan; do not leave the long -ttaa ending unchanged.  
**Near feedback:** `kirjoittan` → The standard form is kirjoitan, with only one t in the stem here.  
**Not sure:** Write kirjoitan.  
**Hint:** null. **Linked:** `vocab.kirjoittaa`. **Scored:** `vocab.kirjoittaa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E07 — `ex.everyday-actions.read-write-study.type-opiskelen`** · `text_input` · controlled recall  
**Prompt:** Type the taught Finnish I-form for ‘I study’.  
**Stimulus:** I study (one word)  
**Answer:** Accepted N1: `opiskelen`.  
**Correct feedback:** Opiskelen means I study.  
**Incorrect feedback:** Write opiskelen; the word has the stem opiskele-.  
**Near feedback:** `opiskellan` → The correct form is opiskelen.  
**Not sure:** Write opiskelen.  
**Hint:** null. **Linked:** `vocab.opiskella`. **Scored:** `vocab.opiskella`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E08 — `ex.everyday-actions.read-write-study.build-opiskelen-suomea`** · `token_build` · controlled construction  
**Prompt:** Arrange the supplied words to say ‘I study Finnish’.  
**Stimulus:** I study Finnish. Use both tiles.  
**Answer:** Shuffled tiles: suomea / Opiskelen. Accepted sequence: `Opiskelen suomea.`.  
**Correct feedback:** Opiskelen suomea. uses a familiar language form.  
**Incorrect feedback:** Use Opiskelen first, then suomea.  
**Near feedback:** None.  
**Not sure:** Opiskelen → suomea.  
**Hint:** null. **Linked:** `phrase.opiskelen-suomea`, `vocab.opiskella`, `vocab.suomi`. **Scored:** `phrase.opiskelen-suomea`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E09 — `ex.everyday-actions.read-write-study.recall-opiskelen-suomea`** · `text_input` · phrase recall  
**Prompt:** Without tiles, type ‘I study Finnish’ in Finnish.  
**Stimulus:** I study Finnish.  
**Answer:** Accepted N1: `Opiskelen suomea.` or `Minä opiskelen suomea.`.  
**Correct feedback:** Opiskelen suomea. tells someone what you are studying.  
**Incorrect feedback:** Write Opiskelen suomea, keeping the taught language form.  
**Near feedback:** `opiskelen suomi` → After opiskelen, use the taught form suomea.  
**Not sure:** Write Opiskelen suomea.  
**Hint:** null. **Linked:** `phrase.opiskelen-suomea`, `vocab.opiskella`, `vocab.suomi`. **Scored:** `phrase.opiskelen-suomea`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E10 — `ex.everyday-actions.read-write-study.read-or-write-now`** · `multiple_choice` · contextual recognition  
**Prompt:** You are writing a message, not reading it. Which taught sentence says ‘I am writing now’?  
**Stimulus:** The speaker is writing now.  
**Answer:** Options: `a` Luen nyt. · `b` Kirjoitan nyt. · `c` Menen nyt.; visually shuffle; correct `b`.  
**Correct feedback:** Kirjoitan nyt. means I am writing now.  
**Incorrect feedback:** `a`: Luen nyt. means I am reading now. `c`: Menen nyt. is about going now, not writing.  
**Near feedback:** None.  
**Not sure:** Use Kirjoitan nyt.  
**Hint:** null. **Linked:** `vocab.kirjoittaa`, `vocab.lukea`, `vocab.nyt`. **Scored:** `vocab.kirjoittaa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E11 — `ex.everyday-actions.read-write-study.recognise-see-hear`** · `matching` · recognition only  
**Prompt:** Match these two recognition verbs to their meanings.  
**Stimulus:** No Finnish typing is required.  
**Answer:** Pairs, each scored individually: nähdä ↔ to see (`vocab.nahda`); kuulla ↔ to hear (`vocab.kuulla`).  
**Correct feedback:** Nähdä means to see; kuulla means to hear.  
**Incorrect feedback:** `nähdä`: Nähdä means to see. `kuulla`: Kuulla means to hear.  
**Near feedback:** None.  
**Not sure:** Nähdä = see; kuulla = hear.  
**Hint:** null. **Linked:** `vocab.nahda`, `vocab.kuulla`. **Scored:** `vocab.nahda`, `vocab.kuulla`. **Review eligible:** false; paired/supplied introduction. **Editorial:** `needs_review`.

**E12 — `ex.everyday-actions.read-write-study.checkpoint-reading`** · `text_input` · contextual application  
**Prompt:** You're reading at the moment. Type ‘I'm reading now’ in Finnish.  
**Stimulus:** I am reading now.  
**Answer:** Accepted N1: `Luen nyt.` or `Minä luen nyt.`.  
**Correct feedback:** Luen nyt. is a complete statement about reading now.  
**Incorrect feedback:** Write Luen nyt. Use the taught luen form and nyt.  
**Near feedback:** None.  
**Not sure:** Write Luen nyt.  
**Hint:** null. **Linked:** `vocab.lukea`, `vocab.nyt`. **Scored:** `vocab.lukea`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**E13 — `ex.everyday-actions.read-write-study.checkpoint-studying`** · `text_input` · contextual application  
**Prompt:** Tell someone in Finnish ‘I study Finnish’.  
**Stimulus:** I study Finnish.  
**Answer:** Accepted N1: `Opiskelen suomea.` or `Minä opiskelen suomea.`.  
**Correct feedback:** Opiskelen suomea. is a useful fact to add to an introduction.  
**Incorrect feedback:** Write Opiskelen suomea. The form is opiskelen, not opiskellan.  
**Near feedback:** None.  
**Not sure:** Write Opiskelen suomea.  
**Hint:** null. **Linked:** `phrase.opiskelen-suomea`, `vocab.opiskella`, `vocab.suomi`. **Scored:** `phrase.opiskelen-suomea`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

### Completion

**Headline:** “Three everyday activities.” **Copy:** “You can say **Luen nyt**, **Kirjoitan nyt** and **Opiskelen suomea**, and you can recognise the words for seeing and hearing.” **Completion:** all required steps and E01–E13 attempted or Not sure. **Review:** the three new lemmas and the study phrase can enter Review after exposure and approval. The two recognition-only verbs may be reviewed only in comprehension direction. **Next:** asking, answering and connecting two thoughts.


## Lesson 3.6 — Ask, answer, say

**Metadata:** `lesson.everyday-actions.ask-answer-say`, `unit.everyday-actions`, `learningLanguage: fi`; order 6; estimated **15–21 minutes**, with a **pause before the last nine-question checkpoint**. **Prerequisite:** `lesson.everyday-actions.read-write-study`. **Capability:** ask, answer, say, link two ideas with *mutta* and demonstrate Unit 3's practical skills. **New production:** `vocab.kysya`, `vocab.vastata`, `vocab.sanoa`, `vocab.mutta`. **No new recognition-only words.** **Review:** Units 1/2 greetings, introductions, language, -ko/-kö and en + verb alongside all Unit 3 phrases.

### Ordered learner experience

All rows are required. Full step ID prefix `step.everyday-actions.ask-answer-say.` + suffix. The checkpoint is the entire **Unit 3 end-of-unit assessment**, not a seventh lesson. It must allow a safe pause/resume, with no duplicate score event after reopening.

| # | Step suffix | Type | Learner-facing copy / exercise | New formal encounter |
|---:|---|---|---|---|
| 1 | `intro` | `explanation` | **Ask, answer, and say.** “Add three communication actions and one word that connects contrasting ideas. This final lesson also lets you use what you have learned across all three units.” | none |
| 2 | `ask` | `vocabulary_intro` | **kysyä** — to ask. **kysyn** — I ask. “You can say **Kysyn nyt.** — ‘I'm asking now.’” | `vocab.kysya` |
| 3 | `a1` | `exercise` | F01 | none |
| 4 | `answer` | `vocabulary_intro` | **vastata** — to answer or reply. **vastaan** — I answer. “Someone asks a question; you reply. **Vastaan nyt.** — ‘I'm answering now.’” | `vocab.vastata` |
| 5 | `a2` | `exercise` | F02 | none |
| 6 | `say` | `vocabulary_intro` | **sanoa** — to say. **sanon** — I say. “For example, **Sanon: ‘Kiitos.’** — ‘I say: Thank you.’ You are not being asked to learn object cases.” | `vocab.sanoa` |
| 7 | `a3` | `exercise` | F03 | none |
| 8 | `communication` | `example_set` | **Asking:** Kysyn nyt. **Replying:** Vastaan nyt. **Speaking words:** Sanon: “Kiitos.” “The three verbs refer to different jobs in a conversation.” | none |
| 9 | `match` | `exercise` | F04 | none |
| 10 | `f5` | `exercise` | F05 | none |
| 11 | `f6` | `exercise` | F06 | none |
| 12 | `f7` | `exercise` | F07 | none |
| 13 | `but` | `vocabulary_intro` | **mutta** — but. “It connects two ideas that contrast: **Puhun englantia, mutta opiskelen suomea.** — ‘I speak English, but I study Finnish.’ Both language forms were introduced in earlier lessons.” | `vocab.mutta` |
| 14 | `f8` | `exercise` | F08 | none |
| 15 | `f9` | `exercise` | F09 | none |
| 16 | `f10` | `exercise` | F10 | none |
| 17 | `context` | `example_set` | **Meeting someone:** “Hei! Olen Aino. Opiskelen suomea.” — “Hello! I'm Aino. I study Finnish.” **When someone asks something you cannot answer:** “En tiedä, mutta voin kysyä.” — “I don't know, but I can ask.” “These reuse earlier greetings, introductions and language expressions without new grammar.” | none |
| 18 | `checkpoint` | `checkpoint` | **Everyday actions — your turn.** “You will use what you know about intentions, understanding, permission, direction, study and negation. A perfect score is not required.” F11, F12, F13, F14, F15, F16, F17, F18, F19. | none |

**Optional `spoken_note`** `step.everyday-actions.ask-answer-say.spoken-mutta`, after F08: “In casual speech, **mutta** is often shortened to **mut**. You only need to recognise it; write mutta in standard Finnish.” Reference `spoken.mutta-mut`. No new mastery target.

### Complete exercises

**F01 — `ex.everyday-actions.ask-answer-say.recognise-kysya`** · `multiple_choice` · guided recognition  
**Prompt:** What does kysyä mean?  
**Stimulus:** kysyä  
**Answer:** Shuffled options: `a` to answer · `b` to ask · `c` to say. Accepted option ID: `b`.  
**Correct feedback:** Kysyä means to ask.  
**Incorrect feedback:** `a`: To answer is vastata. `c`: To say is sanoa.  
**Near feedback:** None.  
**Not sure:** Kysyä means to ask.  
**Hint:** null. **Linked:** `vocab.kysya`. **Scored:** `vocab.kysya`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F02 — `ex.everyday-actions.ask-answer-say.recognise-vastata`** · `multiple_choice` · guided recognition  
**Prompt:** What does vastata mean?  
**Stimulus:** vastata  
**Answer:** Shuffled options: `a` to answer / reply · `b` to come · `c` to write. Accepted option ID: `a`.  
**Correct feedback:** Vastata means to answer or reply.  
**Incorrect feedback:** `b`: To come is tulla. `c`: To write is kirjoittaa.  
**Near feedback:** None.  
**Not sure:** Vastata means to answer.  
**Hint:** null. **Linked:** `vocab.vastata`. **Scored:** `vocab.vastata`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F03 — `ex.everyday-actions.ask-answer-say.recognise-sanoa`** · `multiple_choice` · guided recognition  
**Prompt:** What does sanoa mean?  
**Stimulus:** sanoa  
**Answer:** Shuffled options: `a` to know · `b` to ask · `c` to say. Accepted option ID: `c`.  
**Correct feedback:** Sanoa means to say.  
**Incorrect feedback:** `a`: To know is tietää. `b`: To ask is kysyä.  
**Near feedback:** None.  
**Not sure:** Sanoa means to say.  
**Hint:** null. **Linked:** `vocab.sanoa`. **Scored:** `vocab.sanoa`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F04 — `ex.everyday-actions.ask-answer-say.match-communication`** · `matching` · guided recognition  
**Prompt:** Match each first-person form to its communication action.  
**Stimulus:** Ask / answer / say.  
**Answer:** Match pairs separately: kysyn ↔ I ask (`vocab.kysya`); vastaan ↔ I answer (`vocab.vastata`); sanon ↔ I say (`vocab.sanoa`).  
**Correct feedback:** Kysyn asks, vastaan answers, sanon says something.  
**Incorrect feedback:** `kysyn`: Kysyn is I ask. `vastaan`: Vastaan is I answer. `sanon`: Sanon is I say.  
**Near feedback:** None.  
**Not sure:** Kysyn = I ask; vastaan = I answer; sanon = I say.  
**Hint:** null. **Linked:** `vocab.kysya`, `vocab.vastata`, `vocab.sanoa`. **Scored:** `vocab.kysya`, `vocab.vastata`, `vocab.sanoa`. **Review eligible:** false, combined capability or lesson matching. **Editorial:** `needs_review`.

**F05 — `ex.everyday-actions.ask-answer-say.recall-kysyn`** · `text_input` · controlled recall  
**Prompt:** Type the taught one-word Finnish form for ‘I ask’.  
**Stimulus:** I ask  
**Answer:** Accepted after N1: `kysyn`.  
**Correct feedback:** Kysyn is the I-form of kysyä.  
**Incorrect feedback:** Write kysyn, not the dictionary form kysyä.  
**Near feedback:** `kysyä` → Kysyä is the dictionary form; the I-form is kysyn.  
**Not sure:** Write kysyn.  
**Hint:** null. **Linked:** `vocab.kysya`. **Scored:** `vocab.kysya`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F06 — `ex.everyday-actions.ask-answer-say.recall-vastaan`** · `text_input` · controlled recall  
**Prompt:** Type the taught one-word Finnish form for ‘I answer’.  
**Stimulus:** I answer  
**Answer:** Accepted after N1: `vastaan`.  
**Correct feedback:** Vastaan means I answer.  
**Incorrect feedback:** Write vastaan with aa near the end.  
**Near feedback:** `vastan` → The I-form is vastaan, with aa.  
**Not sure:** Write vastaan.  
**Hint:** null. **Linked:** `vocab.vastata`. **Scored:** `vocab.vastata`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F07 — `ex.everyday-actions.ask-answer-say.recall-sanon`** · `text_input` · controlled recall  
**Prompt:** Type the taught one-word Finnish form for ‘I say’.  
**Stimulus:** I say  
**Answer:** Accepted after N1: `sanon`.  
**Correct feedback:** Sanon means I say.  
**Incorrect feedback:** Write sanon; sanoa is the dictionary form.  
**Near feedback:** `sano` → The I-form is sanon.  
**Not sure:** Write sanon.  
**Hint:** null. **Linked:** `vocab.sanoa`. **Scored:** `vocab.sanoa`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F08 — `ex.everyday-actions.ask-answer-say.recognise-mutta`** · `multiple_choice` · recognition  
**Prompt:** In this sentence, what does mutta mean?  
**Stimulus:** Puhun englantia, mutta opiskelen suomea.  
**Answer:** Shuffled options: `a` and · `b` but · `c` maybe. Accepted option ID: `b`.  
**Correct feedback:** Mutta means but and connects contrasting ideas.  
**Incorrect feedback:** `a`: And is ja; here the speaker uses mutta for contrast. `c`: Maybe is ehkä, not mutta.  
**Near feedback:** None.  
**Not sure:** Mutta means but.  
**Hint:** null. **Linked:** `vocab.mutta`, `vocab.ja`, `vocab.ehka`. **Scored:** `vocab.mutta`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F09 — `ex.everyday-actions.ask-answer-say.build-contrast`** · `token_build` · controlled construction  
**Prompt:** Arrange the chunks to say ‘I speak English, but I study Finnish’.  
**Stimulus:** Use the three supplied sentence chunks.  
**Answer:** Tiles (shuffled): opiskelen suomea. / mutta / Puhun englantia,. Accepted result: `Puhun englantia, mutta opiskelen suomea.`.  
**Correct feedback:** The sentence connects two facts with mutta.  
**Incorrect feedback:** Order: Puhun englantia, → mutta → opiskelen suomea.  
**Near feedback:** None.  
**Not sure:** Puhun englantia, → mutta → opiskelen suomea.  
**Hint:** null. **Linked:** `vocab.mutta`, `phrase.puhun-language`, `phrase.opiskelen-suomea`. **Scored:** `vocab.mutta`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F10 — `ex.everyday-actions.ask-answer-say.recall-mutta`** · `text_input` · independent recall  
**Prompt:** Type the Finnish word for but.  
**Stimulus:** but  
**Answer:** Accepted after N1: `mutta`.  
**Correct feedback:** Mutta means but.  
**Incorrect feedback:** Write mutta with two t letters.  
**Near feedback:** `muta` → Mutta has two t letters.  
**Not sure:** Write mutta.  
**Hint:** null. **Linked:** `vocab.mutta`. **Scored:** `vocab.mutta`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F11 — `ex.everyday-actions.ask-answer-say.check-dont-know`** · `text_input` · cumulative recall  
**Prompt:** You don't know an answer. Type the full Finnish sentence ‘I don't know’.  
**Stimulus:** I don't know.  
**Answer:** Accepted after N1: `En tiedä.` or `Minä en tiedä.`.  
**Correct feedback:** En tiedä. is a useful everyday reply.  
**Incorrect feedback:** Use En tiedä, not En tiedän.  
**Near feedback:** `en tiedän` → After en, use tiedä, not tiedän.  
**Not sure:** Write En tiedä.  
**Hint:** null. **Linked:** `phrase.en-tieda`, `vocab.tietaa`. **Scored:** `phrase.en-tieda`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F12 — `ex.everyday-actions.ask-answer-say.check-want-go`** · `text_input` · cumulative application  
**Prompt:** Type the Finnish sentence ‘I want to go’.  
**Stimulus:** I want to go.  
**Answer:** Accepted after N1: `Haluan mennä.` or `Minä haluan mennä.`.  
**Correct feedback:** Haluan mennä. uses the dictionary form mennä after haluan.  
**Incorrect feedback:** Write Haluan mennä; don't write Haluan menen.  
**Near feedback:** `haluan menen` → After haluan, use mennä, not menen.  
**Not sure:** Write Haluan mennä.  
**Hint:** null. **Linked:** `phrase.haluan-slot`, `vocab.menna`, `grammar.verb-plus-infinitive`. **Scored:** `phrase.haluan-slot`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F13 — `ex.everyday-actions.ask-answer-say.check-permission`** · `text_input` · cumulative application  
**Prompt:** At a meeting, ask permission to speak in Finnish.  
**Stimulus:** Can I speak?  
**Answer:** Accepted after N1: `Voinko puhua?`.  
**Correct feedback:** Voinko puhua? can be used to ask permission.  
**Incorrect feedback:** Add -ko to voin: Voinko puhua?  
**Near feedback:** `voin puhua` → The question is Voinko puhua, not the statement Voin puhua.  
**Not sure:** Write Voinko puhua?  
**Hint:** null. **Linked:** `phrase.voinko-slot`, `grammar.yes-no-ko-ko`. **Scored:** `phrase.voinko-slot`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F14 — `ex.everyday-actions.ask-answer-say.check-need-help`** · `multiple_choice` · contextual recognition  
**Prompt:** You need assistance. Which taught sentence means ‘I need help’?  
**Stimulus:** I need help.  
**Answer:** Shuffled options: `a` Haluan puhua. · `b` Tarvitsen apua. · `c` Voin puhua.. Accepted option ID: `b`.  
**Correct feedback:** Tarvitsen apua. means I need help.  
**Incorrect feedback:** `a`: Haluan puhua. means I want to speak. `c`: Voin puhua. means I can speak.  
**Near feedback:** None.  
**Not sure:** Use Tarvitsen apua.  
**Hint:** null. **Linked:** `phrase.tarvitsen-slot`, `phrase.haluan-slot`. **Scored:** `phrase.tarvitsen-slot`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F15 — `ex.everyday-actions.ask-answer-say.check-coming`** · `multiple_choice` · contextual recognition  
**Prompt:** A friend is waiting at their house. You are on your way towards them now. Which response means ‘I'm coming now’?  
**Stimulus:** Your friend is waiting for you.  
**Answer:** Shuffled options: `a` Menen nyt. · `b` Ehkä tulen. · `c` Tulen nyt.. Accepted option ID: `c`.  
**Correct feedback:** Tulen nyt. fits moving towards the waiting friend.  
**Incorrect feedback:** `a`: Menen nyt. describes going, without the stated coming-to-friend viewpoint. `b`: Ehkä tulen. says maybe I'll come, so it's uncertain.  
**Near feedback:** None.  
**Not sure:** Use Tulen nyt.  
**Hint:** null. **Linked:** `vocab.tulla`, `vocab.menna`, `vocab.nyt`. **Scored:** `vocab.tulla`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F16 — `ex.everyday-actions.ask-answer-say.check-negative`** · `transform` · cumulative construction  
**Prompt:** Make the sentence negative without changing the language.  
**Stimulus:** Puhun englantia. → I don't speak English.  
**Answer:** Accepted after N1: `En puhu englantia.` or `Minä en puhu englantia.`.  
**Correct feedback:** En puhu englantia. uses en + puhu.  
**Incorrect feedback:** After en, write puhu, not puhun. Keep englantia.  
**Near feedback:** `en puhun englantia` → After en, use puhu, not puhun.  
**Not sure:** Write En puhu englantia.  
**Hint:** null. **Linked:** `grammar.negative-en`, `vocab.puhua`, `vocab.englanti`. **Scored:** `grammar.negative-en`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F17 — `ex.everyday-actions.ask-answer-say.check-study`** · `text_input` · cumulative application  
**Prompt:** Type the Finnish sentence ‘I study Finnish’.  
**Stimulus:** I study Finnish.  
**Answer:** Accepted after N1: `Opiskelen suomea.` or `Minä opiskelen suomea.`.  
**Correct feedback:** Opiskelen suomea. says what you're studying.  
**Incorrect feedback:** The I-form is opiskelen; use suomea after it.  
**Near feedback:** `opiskellan suomea` → Use the taught form opiskelen.  
**Not sure:** Write Opiskelen suomea.  
**Hint:** null. **Linked:** `phrase.opiskelen-suomea`, `vocab.opiskella`. **Scored:** `phrase.opiskelen-suomea`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F18 — `ex.everyday-actions.ask-answer-say.check-can-ask`** · `multiple_choice` · cumulative recognition  
**Prompt:** Which Finnish sentence means ‘I can ask’?  
**Stimulus:** I can ask.  
**Answer:** Shuffled options: `a` Voin vastata. · `b` Voin kysyä. · `c` Voin tulla.. Accepted option ID: `b`.  
**Correct feedback:** Voin kysyä. means I can ask.  
**Incorrect feedback:** `a`: Voin vastata. means I can answer. `c`: Voin tulla. means I can come.  
**Near feedback:** None.  
**Not sure:** Use Voin kysyä.  
**Hint:** null. **Linked:** `vocab.kysya`, `vocab.voida`, `grammar.verb-plus-infinitive`. **Scored:** `grammar.verb-plus-infinitive`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**F19 — `ex.everyday-actions.ask-answer-say.check-full-reply`** · `token_build` · cumulative capability  
**Prompt:** Arrange the supplied chunks to say ‘I don't know, but I can ask’.  
**Stimulus:** Use every complete chunk once.  
**Answer:** Tiles (shuffled): voin kysyä. / En tiedä, / mutta. Accepted result: `En tiedä, mutta voin kysyä.`.  
**Correct feedback:** You have linked an honest answer to a useful next action.  
**Incorrect feedback:** Arrange En tiedä, → mutta → voin kysyä.  
**Near feedback:** None.  
**Not sure:** En tiedä, → mutta → voin kysyä.  
**Hint:** null. **Linked:** `phrase.en-tieda`, `vocab.mutta`, `vocab.voida`, `vocab.kysya`. **Scored:** none; `knowledgeScoring: false`, capability-only integration. **Review eligible:** false, combined capability or lesson matching. **Editorial:** `needs_review`.

### Final capability checkpoint and Unit 3 completion

**The nine final checkpoint exercises F11–F19** sample: saying “I don't know”; wanting to go; asking permission; needing help; coming toward someone; negating a language statement; studying Finnish; recognising “I can ask”; and combining uncertainty with a useful next step. Earlier F05–F07 provide specific retrieval for *kysyn, vastaan, sanon* without crowding the final checkpoint with near-identical drills.

**Headline:** “More of what you mean.” **Copy:** “You can now talk about what you want or need, say when you don't know, ask permission, describe useful actions, and connect two ideas. The forms will return in Review — you don't need to remember every one perfectly today.” **Completion:** all required steps and F01–F19 attempted or explicitly Not sure; no perfection barrier. **Capability-only:** F19 does not inflate every linked lexical target. **Scheduled Review:** the existing due engine, after encounters and project approval; optional Flashcards/Word Match remain separate. **Next:** Unit 4 begins place and location patterns, not pre-taught here.


## Part III — Independent scheduled-Review variants

These five **additional** records are for recognition-only due items and are not required lesson steps. All use the existing `multiple_choice` format and have one independently scored target, a context-qualified meaning, and complete feedback. They are only offered after a formal encounter, when due and editorially approved.

**R01 — `ex.everyday-actions.review.saada-get`** · `multiple_choice` · recognition / independent comprehension  
**Prompt:** What does **saada** mean in the taught context?  
**Stimulus:** `saada` and contextual clarification in the accepted meaning.  
**Answer:** Shuffled options: `a` to need · `b` to get or receive (in Saan apua.) · `c` to want. Accepted: `b`.  
**Correct feedback:** Saada means to get or receive in this taught context.  
**Incorrect feedback:** `a`: Needing is tarvita. Saada here describes receiving. `c`: Wanting is haluta. Saada here describes receiving.  
**Near feedback:** None.  
**Not sure:** Saada is get/receive in the example.  
**Hint:** null. **Linked:** `vocab.saada`. **Scored:** `vocab.saada` (recognition only). **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R02 — `ex.everyday-actions.review.auttaa-help`** · `multiple_choice` · recognition / independent comprehension  
**Prompt:** What does **auttaa** mean in the taught context?  
**Stimulus:** `auttaa` and contextual clarification in the accepted meaning.  
**Answer:** Shuffled options: `a` to answer · `b` to help · `c` to hear. Accepted: `b`.  
**Correct feedback:** Auttaa means to help.  
**Incorrect feedback:** `a`: Answering is vastata; auttaa means help. `c`: Hearing is kuulla; auttaa means help.  
**Near feedback:** None.  
**Not sure:** Auttaa means help.  
**Hint:** null. **Linked:** `vocab.auttaa`. **Scored:** `vocab.auttaa` (recognition only). **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R03 — `ex.everyday-actions.review.pitaa-must`** · `multiple_choice` · recognition / independent comprehension  
**Prompt:** What does **pitää** mean in the taught context?  
**Stimulus:** `pitää` and contextual clarification in the accepted meaning.  
**Answer:** Shuffled options: `a` want to go · `b` have to / must (in Minun pitää mennä nyt.) · `c` can go. Accepted: `b`.  
**Correct feedback:** Pitää expresses necessity in the taught phrase.  
**Incorrect feedback:** `a`: Wanting to go uses haluan. This phrase means must go. `c`: Ability to go uses voin. The taught pitää phrase means have to.  
**Near feedback:** None.  
**Not sure:** Minun pitää mennä nyt. means I have to go now.  
**Hint:** null. **Linked:** `vocab.pitaa`. **Scored:** `vocab.pitaa` (recognition only). **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R04 — `ex.everyday-actions.review.nahda-see`** · `multiple_choice` · recognition / independent comprehension  
**Prompt:** What does **nähdä** mean in the taught context?  
**Stimulus:** `nähdä` and contextual clarification in the accepted meaning.  
**Answer:** Shuffled options: `a` to read · `b` to see · `c` to hear. Accepted: `b`.  
**Correct feedback:** Nähdä means to see.  
**Incorrect feedback:** `a`: Reading is lukea; nähdä is see. `c`: Hearing is kuulla; nähdä is see.  
**Near feedback:** None.  
**Not sure:** Nähdä means see.  
**Hint:** null. **Linked:** `vocab.nahda`. **Scored:** `vocab.nahda` (recognition only). **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R05 — `ex.everyday-actions.review.kuulla-hear`** · `multiple_choice` · recognition / independent comprehension  
**Prompt:** What does **kuulla** mean in the taught context?  
**Stimulus:** `kuulla` and contextual clarification in the accepted meaning.  
**Answer:** Shuffled options: `a` to know · `b` to hear · `c` to write. Accepted: `b`.  
**Correct feedback:** Kuulla means to hear.  
**Incorrect feedback:** `a`: Knowing is tietää; kuulla is hearing. `c`: Writing is kirjoittaa; kuulla is hearing.  
**Near feedback:** None.  
**Not sure:** Kuulla means hear.  
**Hint:** null. **Linked:** `vocab.kuulla`. **Scored:** `vocab.kuulla` (recognition only). **Review eligible:** true, standalone. **Editorial:** `needs_review`.


## Part IV — Cumulative checkpoint, scoring and optional practice

**Fully authored final capability assessment:** F11–F19 inside Lesson 3.6; these are not duplicated here or in a seventh lesson. In order: `En tiedä`; `Haluan mennä`; permission `Voinko puhua?`; `Tarvitsen apua`; `Tulen nyt`; `En puhu englantia`; `Opiskelen suomea`; `Voin kysyä`; and the combined capability-only `En tiedä, mutta voin kysyä`. Other production verbs are retrieved in their teaching lessons.

**Review boundaries:** Self-contained tasks can be scheduled only for already encountered targets. Recognition-only items never become mandatory Finnish typed tasks. No word gets extra vocabulary success from being visible in a longer phrase. Matching scores are per-pair first-attempt outcomes. The scheduled Review engine is separate from optional Flashcards/Word Match, which use the same canonical vocabulary and phrase registry.

**Word Match semantic safety:** avoid presenting overlapping English meanings as uniquely matchable; context-qualify `saada` vs `voida`, `haluta` vs `tarvita`, `tietää` vs `ymmärtää`, `mennä` vs `tulla`, and `tehdä` vs communication verbs where needed. Keep dictionary forms and I-forms bound to the same lemma IDs. Do not auto-copy official vocabulary into the learner's My Words.

**Research/editorial:** Source URLs and fact-specific verification are recorded in [Unit 3 Coverage & QA](./unit-03-coverage-and-qa.md). All teaching examples and exercises are original Vokri-authored text; neither the unchanged CSV's generated examples nor external textbook exercises are copied. Project-owner approval is sufficient under the agreed workflow, but no outside teacher review is claimed. No application code, Figma, original curriculum blueprint, Units 1–2 or CSV are modified.
