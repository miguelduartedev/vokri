# Vokri — Unit 1: Hello · Complete Lesson & Exercise Specification

**Content version:** 1.0-authoring · 11 November 2026  
**Language:** `fi`; explanations: English. **Unit:** `unit.hello`; **stage:** `stage.a1-foundations`; **course:** `course.fi`.  
**Editorial status of every newly authored teaching block, example and exercise:** `needs_review`; `reviewedBy: null`; `reviewedAt: null`. Complete authoring is not human approval. No application code, Figma design or source CSV is changed by this specification.

Read with [Authoring Standard](./exercise-authoring-standard-v1.md), [Coverage & QA](./unit-01-coverage-and-qa.md), [Implementation Notes](./unit-01-implementation-notes.md), the [curriculum blueprint](../a1_foundations_curriculum_blueprint.md) and the [learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## Part I — Unit overview and binding conventions

### What the learner will practise

**Learner-facing unit capability:** “Greet someone, say who you are, respond politely and recognise basic numbers.”

The five existing lessons and their order are preserved. The course starts here, not at the illustrative Unit 4 in Figma. Estimated total study time is **30–42 minutes**, normally spread over several sessions; these are editorial estimates awaiting novice testing. Lessons 1.4 and 1.5 are deliberately resumable at natural boundaries because their fixed curriculum load is greater.

The production target is standard Finnish. Common spoken forms are optional recognition notes. Nothing requires audio, speech recording or pronunciation scoring. Written sound-pattern activities assess noticing spelling, not the ability to pronounce or hear a contrast.

### Exact lexical inventory

Ranks below were checked against the unchanged repository CSV, Git blob `81341de6828ec5ffa3b6bebfc828ac31bb275776`. All 26 listed lemmas are in the Core tier. The ASCII spelling in an ID is not the spelling to show or accept as Finnish.

| Role | Canonical ID | Lemma | Rank | Unit 1 meaning/form |
|---|---|---|---:|---|
| Production | `vocab.olla` | olla | 1 | to be; produce **olen**, **olet** in taught contexts |
| Production | `vocab.ja` | ja | 2 | and |
| Production | `vocab.mina` | minä | 5 | I |
| Production | `vocab.sina` | sinä | 6 | you, one person |
| Production | `vocab.yksi` | yksi | 17 | one |
| Production | `vocab.kaksi` | kaksi | 18 | two |
| Production | `vocab.kolme` | kolme | 19 | three |
| Production | `vocab.nelja` | neljä | 20 | four |
| Production | `vocab.viisi` | viisi | 21 | five |
| Production | `vocab.kylla` | kyllä | 47 | yes; certainly, depending on context |
| Production | `vocab.joo` | joo | 48 | yes/yeah, conversational |
| Production | `vocab.nimi` | nimi | 322 | name |
| Production | `vocab.anteeksi` | anteeksi | 373 | sorry; excuse me |
| Production | `vocab.kiitos` | kiitos | 374 | thank you; thanks |
| Production | `vocab.hei` | hei | 375 | hi/hello; also a leave-taking greeting in context |
| Production | `vocab.moi` | moi | 376 | hi/hello; also bye in context |
| Recognition | `vocab.kuusi` | kuusi | 22 | six, in this unit's number context |
| Recognition | `vocab.seitseman` | seitsemän | 23 | seven |
| Recognition | `vocab.kahdeksan` | kahdeksan | 24 | eight |
| Recognition | `vocab.yhdeksan` | yhdeksän | 25 | nine |
| Recognition | `vocab.kymmenen` | kymmenen | 26 | ten |
| Recognition | `vocab.hyva` | hyvä | 114 | good; “Good!” as a response here |
| Recognition | `vocab.tervetuloa` | tervetuloa | 377 | welcome |
| Recognition | `vocab.nakemiin` | näkemiin | 378 | goodbye |
| Support only | `vocab.nyt` | nyt | 40 | now |
| Support only | `vocab.ehka` | ehkä | 46 | maybe/perhaps |

`nyt` and `ehkä` remain available support metadata but are deliberately not inserted into this unit's assessed Finnish. They receive no formal encounter or recall event here. This avoids adding invisible vocabulary prerequisites.

### Phrases, grammar and spoken notes

First-class phrases: `phrase.olen-slot` (“Olen …”, production); `phrase.enta-sina` (“Entä sinä?”, production). The four one-word utterances Hei!, Moi!, Kiitos., Anteeksi. use their existing vocabulary IDs, not duplicate phrase knowledge.

The architecture already anticipates `phrase.what-is-your-name`. Here its fully authored candidate is **Mikä sinun nimesi on?** — “What is your name?” It is a **fixed recognition-only chunk**, introduced in 1.3. Do not assess `mikä`, `sinun`, `nimesi` or `on` as separate newly learned words, nor explain possessive suffixes/genitive as productive grammar. The phrase still needs teacher approval. Sources and the alternative colloquial formulation are discussed in QA.

Grammar IDs: `grammar.personal-pronouns-mina-sina`; `grammar.olla-present-1sg-2sg`; `grammar.subject-omission-awareness`; `grammar.vowel-length-awareness`; `grammar.vowel-harmony-awareness`. The omission ID follows the Unit 1 fixture; the architecture's longer spelling is a documented alias, not another concept. Awareness concepts have `reviewEligible: false` in Unit 1.

Optional notes: `spoken.mina-ma`, `spoken.sina-sa`, `spoken.olen-oon`, `spoken.olet-oot`. Optional contracted numbers `yks/kaks` are **not introduced** in this version to keep 1.4 manageable.

### Common record contract — applies to every record below

These are complete field defaults, not unfinished authoring instructions:

- `learningLanguage: fi`; `unitId: unit.hello`; editorial status `needs_review`, no human reviewer assigned.
- Every exercise's lesson is its containing lesson section. Each has a globally unique stable `ex.*` ID. G1/I1/N1/Y1/C1/R1 are document labels only, never persistent identifiers.
- `hint: null` throughout. Some prompts explicitly offer a first-letter cue; their demand is **cued recall**, not unaided production. No unimplemented hint button is required.
- Instruction and example steps do not score recall. `encounterTargetIds` names formal first exposures; an empty list means no new encounter event. All required exercises have `countsAsEncounter: false` because their targets were introduced earlier.
- Required MC answers validate immediately, then show feedback and Continue. Text/token tasks submit through **Check answer**, then feedback/Continue. Buttons are renderer copy, not curriculum logic. All tasks also permit **I'm not sure yet**.
- `correct` = a listed accepted response. Any other attempted response uses the existing scheduler's non-success `almost` outcome, with the **incorrect feedback** below; an expressly listed near miss uses its distinct near feedback. `not_sure` = explicitly choosing Not sure. Wrong attempts are not called correct or almost-correct in learner copy. See implementation notes for this legacy-name compatibility rule.
- Unless a record says `knowledgeScoring: false`, only its stated `scoredTargetIds` receive an outcome. Matching uses the per-pair target map; never apply one board result indiscriminately to every target.
- Text profile **N1**: Unicode NFC; lowercase; trim/collapse whitespace; replace `. , ! ?` with spaces before collapsing. Do not strip diacritics or letters, shorten doubled vowels, fuzzy-match, or join words. Accepted forms below are compared after N1. Diacritic near misses remain non-successes. The form-specific constraints in a prompt still apply.
- An empty response does not submit an attempted answer; use Not sure instead. Keyboard assistance for `ä/ö` is permitted and does not reveal the answer.
- Required attempts/checkpoints unlock completion, not a perfect-score threshold. First attempts are committed once. Repeating the same screen after feedback does not earn another independent recall event.
- `reviewEligible: true` means the prompt is self-contained and may be selected only after its targets were encountered and the content is approved. It does not alter the scheduler intervals. All false flags have reasons below.
- When options are listed as `a/b/c`, these are stable IDs, not fixed visual positions. Shuffle options; keep their keyed feedback attached. Token order shown is the initial bank, not the answer order.

### Binding duration and count definitions

| Lesson | Instructional steps (including one optional note in 1.2) | Exercise steps | Checkpoint steps | Total ordered steps | Required exercise records | Response units including matching pairs | Estimated duration |
|---|---:|---:|---:|---:|---:|---:|---|
| 1.1 | 5 | 7 | 1 | 13 | 9 | 9 | 5–7 min |
| 1.2 | 6 | 7 | 1 | 14 | 8 | 9 | 6–8 min |
| 1.3 | 5 | 6 | 1 | 12 | 7 | 7 | 4–6 min |
| 1.4 | 6 | 10 | 1 | 17 | 11 | 19 | 8–11 min, two sittings encouraged |
| 1.5 | 3 | 5 | 1 | 9 | 12 | 19 | 7–10 min, pause before checkpoint |
| **Total** | **25** | **35** | **5** | **65** | **47** | **63** | **30–42 min** |

A matching record with five pairs contains five response units. Six separately authored review-bank records follow the lessons; they are not extra mandatory lesson steps. The five-lesson structure is unchanged. If novice testing shows 1.4/1.5 too long, adjust presentation and pause points before changing the approved curriculum.

## Part II — Fully authored lessons

## Lesson 1.1 — Hello

### Metadata

`lessonId: lesson.hello.greetings`; order 1; prerequisites: none. Objective: **“Use a greeting, say thanks, and get someone's attention politely.”** New production: `vocab.hei`, `vocab.moi`, `vocab.kiitos`, `vocab.anteeksi`. New recognition: `vocab.tervetuloa`, `vocab.nakemiin`. No grammar prerequisites or separate phrase records. Duration 5–7 minutes. Complete after all required steps and G8/G9 are attempted; a Not sure response counts as an attempt, not successful recall.

### Ordered steps and exact instructional copy

Every ID in this table begins `step.hello.greetings.`. Exercise steps reference the complete records below. All are required. This prefix plus the suffix is the stable step ID.

| Order | Suffix / type | Exact content or exercise reference | Targets and encounter policy |
|---:|---|---|---|
| 1 | `welcome` / explanation | **A few words you can use today.** “Start with a greeting, a thank-you and a polite way to say sorry or excuse me. You do not need a whole sentence yet.” | No targets; no encounter |
| 2 | `greeting-words` / vocabulary_intro | **Hei!** “Hi. Hello.” **Moi!** “Hi. Hello.” “Both are everyday greetings. Moi often sounds casual. In a goodbye situation, hei or moi can also be used when leaving. Context tells you which.” | Formal encounter: hei, moi; linked IDs are their vocabulary IDs |
| 3 | `hei-meaning` / exercise | G1 | No new encounter |
| 4 | `courtesy-words` / vocabulary_intro | **Kiitos.** “Thank you. Thanks.” **Anteeksi.** “Sorry. Excuse me.” “Use kiitos to thank someone. Use anteeksi to apologise or to get someone's attention politely.” | Formal encounter: kiitos, anteeksi |
| 5 | `thank-someone` / exercise | G2 | No new encounter |
| 6 | `apologise` / exercise | G3 | No new encounter |
| 7 | `tiny-exchanges` / example_set | **Arriving:** “Hei!” — “Moi!” **Someone helps you:** “Kiitos.” **You need to pass someone:** “Anteeksi.” **Leaving a casual chat:** “Moi!” “The greeting can change with the situation; thanks and apologies have different jobs.” | Links all four production IDs; no new encounter |
| 8 | `retrieve-hei` / exercise | G4 | No new encounter |
| 9 | `retrieve-moi` / exercise | G5 | No new encounter |
| 10 | `notice-welcome-goodbye` / vocabulary_intro | **Tervetuloa!** “Welcome!” **Näkemiin!** “Goodbye!” “For now, recognise these when you see them. You will not have to spell them from memory.” | Formal recognition encounter: tervetuloa, näkemiin |
| 11 | `recognise-welcome` / exercise | G6 | No new encounter |
| 12 | `recognise-goodbye` / exercise | G7 | No new encounter |
| 13 | `courtesy-check` / checkpoint | **Your turn.** “Choose your words without a word bank. Trying is enough to finish this lesson.” Exercises G8, then G9. | Links kiitos, anteeksi; no encounter; evidence is the two individual responses |

**G1 — `ex.hello.greetings.hei-meaning`**  
Kind `multiple_choice`; intent recognition; demand guided recognition. Prompt: **“What does Hei! mean when someone arrives?”** Stimulus: **Hei!** Options: `a` Goodbye; `b` Hello; `c` Thank you. Accepted: `b`. Correct: “Here, hei greets someone: hello.” Incorrect `a`: “Hei can also be used when leaving, but this person is arriving. Here it means hello.” Incorrect `c`: “Thank you is kiitos. Here, hei is a greeting.” Not sure: “Here it means hello. You will meet hei again.” Near miss: none. Linked/scored: [`vocab.hei`]. Review eligible **true**: arrival context is in the prompt. Editorial: `needs_review`.

**G2 — `ex.hello.greetings.thank-someone`**  
Kind `multiple_choice`; intent recognition; demand contextual selection. Prompt: **“Someone holds a door for you. Choose a thank-you.”** Stimulus: none beyond the situation. Options: `a` Anteeksi.; `b` Moi!; `c` Kiitos. Accepted: `c`. Correct: “Kiitos thanks the person who helped you.” Incorrect `a`: “Anteeksi means sorry or excuse me. Here you want to say kiitos.” Incorrect `b`: “Moi is a greeting. To thank someone, use kiitos.” Not sure: “Use kiitos here: thank you.” Near miss: none. Linked: [`vocab.kiitos`, `vocab.anteeksi`, `vocab.moi`]; scored: [`vocab.kiitos`]. Review eligible **true**: standalone situation. Editorial: `needs_review`.

**G3 — `ex.hello.greetings.apologise`**  
Kind `multiple_choice`; intent recognition; demand contextual selection. Prompt: **“You accidentally bump into someone. Choose an apology.”** Options: `a` Anteeksi.; `b` Kiitos.; `c` Hei! Accepted: `a`. Correct: “Anteeksi is a short apology.” Incorrect `b`: “Kiitos thanks someone. After this accidental bump, anteeksi is the useful word.” Incorrect `c`: “Hei greets someone. Anteeksi expresses the apology here.” Not sure: “Use anteeksi: sorry.” Near miss: none. Linked: [`vocab.anteeksi`, `vocab.kiitos`, `vocab.hei`]; scored: [`vocab.anteeksi`]. Review eligible **true**. Editorial: `needs_review`.

**G4 — `ex.hello.greetings.retrieve-hei`**  
Kind `text_input`; intent recall; demand cued recall. Prompt: **“Recall the greeting beginning with h. Type the whole word.”** Stimulus: **hello · h…** Options: none. Accepted N1: [`hei`]. Correct: “Hei is the greeting you were looking for.” Incorrect: “The requested h-greeting is hei.” Special valid-but-not-requested response `moi`: “Moi is also a valid greeting. This question asks for the one beginning with h: hei.” Not sure: “The word is hei. Look at it once, then continue.” Near miss: none. Linked: [`vocab.hei`, `vocab.moi`]; scored: [`vocab.hei`]. Review eligible **false**: lesson-local retrieval of a particular synonymous form; G1 supplies independent recognition review. Editorial: `needs_review`.

**G5 — `ex.hello.greetings.retrieve-moi`**  
Kind `text_input`; intent recall; demand cued recall. Prompt: **“You are leaving a casual chat. Recall the short greeting beginning with m.”** Stimulus: **bye · m…** Options: none. Accepted N1: [`moi`]. Correct: “Moi works as a casual goodbye here.” Incorrect: “The requested short m-greeting is moi.” Special response `hei`: “Hei can also be a goodbye. This question specifically asks for the m-greeting: moi.” Not sure: “Use moi here.” Near miss: none. Linked: [`vocab.moi`, `vocab.hei`]; scored: [`vocab.moi`]. Review eligible **false**: form-cued local practice; R6 provides context-complete review. Editorial: `needs_review`.

**G6 — `ex.hello.greetings.recognise-welcome`**  
Kind `multiple_choice`; intent recognition; demand recognition. Prompt: **“A host writes Tervetuloa! What are they saying?”** Options: `a` Goodbye; `b` Thank you; `c` Welcome. Accepted: `c`. Correct: “Tervetuloa welcomes you.” Incorrect `a`: “Näkemiin means goodbye. Tervetuloa means welcome.” Incorrect `b`: “Kiitos means thank you. Tervetuloa means welcome.” Not sure: “Tervetuloa means welcome; recognising it is enough for now.” Near miss: none. Linked: [`vocab.tervetuloa`, `vocab.nakemiin`, `vocab.kiitos`]; scored: [`vocab.tervetuloa`]. Review eligible **true**, Finnish-to-English only. Editorial: `needs_review`.

**G7 — `ex.hello.greetings.recognise-goodbye`**  
Kind `multiple_choice`; intent recognition; demand recognition. Prompt: **“Someone ends a conversation with Näkemiin! What does it mean?”** Options: `a` Goodbye; `b` Welcome; `c` Sorry. Accepted: `a`. Correct: “Näkemiin is a goodbye.” Incorrect `b`: “Tervetuloa welcomes someone. Näkemiin is for leaving.” Incorrect `c`: “Anteeksi is an apology or excuse me. Näkemiin means goodbye.” Not sure: “It means goodbye. You do not need to type näkemiin from memory yet.” Near miss: none. Linked: [`vocab.nakemiin`, `vocab.tervetuloa`, `vocab.anteeksi`]; scored: [`vocab.nakemiin`]. Review eligible **true**, recognition only. Editorial: `needs_review`.

**G8 — `ex.hello.greetings.check-thanks`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“A neighbour helps you carry something. Write a short thank-you in Finnish.”** Options: none. Accepted N1: [`kiitos`]. Correct: “Kiitos — thank you.” Incorrect: “Use kiitos to thank someone. Anteeksi would mean sorry or excuse me.” Not sure: “The word is kiitos.” Near `kitos`: “Keep both i letters: kiitos.” This near response is not correct. Linked/scored: [`vocab.kiitos`]. Review eligible **true**. Editorial: `needs_review`.

**G9 — `ex.hello.greetings.check-excuse-me`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“You want to get someone's attention politely. Write ‘excuse me’ in Finnish.”** Options: none. Accepted N1: [`anteeksi`]. Correct: “Anteeksi can politely get someone's attention.” Incorrect: “Use anteeksi here: excuse me. Kiitos is for thanking.” Not sure: “The expression is anteeksi.” Near `anteksi`: “Keep the two e letters: anteeksi.” Linked/scored: [`vocab.anteeksi`]. Review eligible **true**. Editorial: `needs_review`.

### Completion and review handoff

Heading: **“Four useful words to start with.”** Body: **“You've practised greetings, thanks and apologies, and met two expressions to recognise. These words will return in Review.”** CTA: **“Continue learning”** to lesson 1.2. Secondary: **“Back to course.”** The six explicit vocabulary encounters establish review eligibility according to their roles; G1–G3/G6–G9 and R6 provide standalone tasks. Do not claim that a completed lesson proves six mastered words.

## Lesson 1.2 — I am, you are

### Metadata

`lessonId: lesson.hello.i-am-you-are`; order 2; prerequisite `lesson.hello.greetings`. Objective: **“Say who you are and recognise when someone is addressing you.”** New production: `vocab.olla`, `vocab.mina`, `vocab.sina`. New phrases: `phrase.olen-slot`, `phrase.enta-sina`. Grammar introduced: personal pronouns, olla-present-1sg-2sg, subject-omission-awareness. Review: greetings and courtesy words. Duration 6–8 minutes. All required steps and I8 must be attempted; spoken note is optional and excluded from completion requirements.

### Ordered steps and exact instructional copy

Step prefix: `step.hello.i-am-you-are.`. All required except `spoken-recognition`.

| Order | Suffix / type | Exact content or exercise reference | Targets and encounter policy |
|---:|---|---|---|
| 1 | `objective` / explanation | **Talk about yourself—and one other person.** “You will use ‘I’ and ‘you’, then make a short introduction.” | No new encounter |
| 2 | `people-words` / vocabulary_intro | **minä — I**; **sinä — you**. “Here, sinä addresses one person. These are the standard forms we will use when writing.” | Formal encounter: vocab.mina, vocab.sina |
| 3 | `match-person` / exercise | I1 | No new encounter |
| 4 | `meet-olla` / vocabulary_intro | **olla — to be.** “This is the dictionary form. In an introduction, use **olen — I am** or **olet — you are**. You do not need the other forms yet.” | Formal encounter: vocab.olla; authored teaching forms olen/olet, not separate lemma records |
| 5 | `person-pattern` / grammar_explanation | **The verb helps identify the person.** “Minä olen Aino. — I am Aino. Sinä olet Leo. — You are Leo. Notice olen with minä, and olet with sinä. Learn these two forms together; do not try to make them by simply adding a letter to olla.” **Shorter is also possible.** “Olen Aino. means I am Aino too. In these I/you forms, the verb can make the person clear without the pronoun. Keeping minä or sinä is also correct.” | Formal encounter: all three grammar IDs named above. Two short semantic panels within one grammar step; no additional recall scores |
| 6 | `choose-first-person` / exercise | I2 | No new encounter |
| 7 | `introduction-chunks` / phrase_intro | **Olen Aino. — I am Aino.** “Use Olen followed by a name to introduce yourself.” **Entä sinä? — And you? / What about you?** “After your introduction, this short phrase passes the turn to the other person.” | Formal encounter: phrase.olen-slot, phrase.enta-sina; do not separately introduce entä as production vocabulary |
| 8 | `build-you-are` / exercise | I3 | No new encounter |
| 9 | `retrieve-i` / exercise | I4 | No new encounter |
| 10 | `retrieve-you` / exercise | I5 | No new encounter |
| 11 | `introduce-aino` / exercise | I6 | No new encounter |
| 12 | `spoken-recognition` / spoken_note | **In everyday speech you may hear…** “minä → mä; sinä → sä; olen → oon; olet → oot. These are common spoken forms, not the only regional possibilities. For this course's written answers, keep using the standard forms you've learned.” | Optional; links four spoken IDs and underlying vocab. No new knowledge target or scored recall. Hidden when spoken notes are off |
| 13 | `return-the-turn` / exercise | I7 | No dependency on optional note |
| 14 | `person-check` / checkpoint | **One last distinction.** “Choose the form for the person being addressed.” Exercise I8. | Links vocab.olla and grammar.olla-present-1sg-2sg; no encounter |

**I1 — `ex.hello.i-am-you-are.match-person`**  
Kind `matching`; intent recognition; demand guided recognition. Prompt: **“Match each Finnish pronoun to its meaning.”** Left tile IDs: `mina` = minä; `sina` = sinä. Right IDs: `you` = you (one person); `i` = I. Accepted pairs: `mina→i`, `sina→you`. Pair targets: mina→`vocab.mina`; sina→`vocab.sina`. Exact pair feedback: “Minä means I.” / “Sinä means you when addressing one person.” Use the relevant sentence after a correct match, an incorrect attempt or Not sure, with the appropriate result heading; do not penalise the other pair. Near miss: none. Linked/scored: [`vocab.mina`, `vocab.sina`], per pair. Review eligible **false**: the review engine selects one due target, whereas this is a two-target teaching board. I4/I5 provide independent reviews. Editorial: `needs_review`.

**I2 — `ex.hello.i-am-you-are.choose-first-person`**  
Kind `multiple_choice`; intent grammar; demand guided form selection. Prompt: **“Complete the introduction.”** Stimulus: **Minä ___ Aino.** Options: `a` olet; `b` olla; `c` olen. Accepted: `c`. Correct: “Minä olen Aino. Olen means I am.” Incorrect `a`: “Olet means you are. With minä, use olen.” Incorrect `b`: “Olla is the dictionary form, to be. Here you need olen, I am.” Not sure: “Use olen: Minä olen Aino.” Near miss: none. Linked: [`vocab.mina`, `vocab.olla`, `grammar.olla-present-1sg-2sg`]; scored: [`vocab.olla`] on teaching form olen. Review eligible **true**. Editorial: `needs_review`.

**I3 — `ex.hello.i-am-you-are.build-you-are`**  
Kind `token_build`; intent grammar; demand controlled construction. Prompt: **“Build ‘You are Leo.’ Keep the word for ‘you’.”** Token IDs/text in initial order: `name` Leo; `first` olen; `you` Sinä; `second` olet. Accepted token sequence: [`you`, `second`, `name`]. The unused token is olen. Correct: “Sinä olet Leo. Olet goes with sinä.” Incorrect with olen: “Olen means I am. Addressing Leo uses sinä olet.” Other incorrect order: “Use the order Sinä + olet + Leo.” Not sure: “The model is Sinä olet Leo.” Near miss: none. Linked: [`vocab.sina`, `vocab.olla`, `grammar.olla-present-1sg-2sg`]; scored: [`grammar.olla-present-1sg-2sg`]. Review eligible **true**: full instruction remains available. Editorial: `needs_review`.

**I4 — `ex.hello.i-am-you-are.retrieve-i`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Type the standard Finnish pronoun meaning ‘I’.”** Options: none. Accepted N1: [`minä`]. Correct: “Minä means I.” Incorrect: “The standard word is minä. Sinä means you.” Not sure: “Use minä.” Near `mina`: “Use ä, not a: minä.” Spoken `mä`: “Mä is a common spoken form. This task practises standard written minä.” Both are non-success for this form-specific task, not claims that spoken Finnish is invalid. Linked/scored: [`vocab.mina`]. Review eligible **true**. Editorial: `needs_review`.

**I5 — `ex.hello.i-am-you-are.retrieve-you`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Type the standard Finnish pronoun for ‘you’, addressing one person.”** Options: none. Accepted N1: [`sinä`]. Correct: “Sinä addresses one person: you.” Incorrect: “The word is sinä. Minä means I.” Not sure: “Use sinä.” Near `sina`: “Use ä, not a: sinä.” Spoken `sä`: “Sä is a common spoken form. Here, practise standard sinä.” Linked/scored: [`vocab.sina`]. Review eligible **true**. Editorial: `needs_review`.

**I6 — `ex.hello.i-am-you-are.introduce-aino`**  
Kind `text_input`; intent phrase; demand controlled production. Prompt: **“For this role-play, your name is Aino. Write ‘I am Aino’ in standard Finnish.”** Options: none. Accepted N1: [`olen aino`, `minä olen aino`]. Correct: “Olen Aino and Minä olen Aino are both correct introductions.” Incorrect with olet: “Use olen for I am. Olet means you are.” Other incorrect: “A model is Olen Aino. You may also include minä.” Not sure: “Olen Aino. — I am Aino.” Near `mina olen aino`: “The sentence needs ä in minä: Minä olen Aino. Olen Aino is also correct.” Linked: [`phrase.olen-slot`, `vocab.mina`, `vocab.olla`, `grammar.olla-present-1sg-2sg`, `grammar.subject-omission-awareness`]; scored: [`phrase.olen-slot`]. Review eligible **true**. Editorial: `needs_review`.

**I7 — `ex.hello.i-am-you-are.return-the-turn`**  
Kind `text_input`; intent phrase; demand controlled production. Prompt: **“You have introduced yourself. Write the phrase meaning ‘And you?’”** Options: none. Accepted N1: [`entä sinä`]. Correct: “Entä sinä? passes the turn to the other person.” Incorrect: “Use the whole phrase Entä sinä? — And you?” Not sure: “The phrase is Entä sinä?” Near set [`enta sinä`, `entä sina`, `enta sina`]: “Keep the ä in both words: Entä sinä?” Linked: [`phrase.enta-sina`, `vocab.sina`]; scored: [`phrase.enta-sina`]. Review eligible **true**. Editorial: `needs_review`.

**I8 — `ex.hello.i-am-you-are.check-second-person`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Fill the gap with the standard verb form.”** Stimulus: **Sinä ___ Leo. — You are Leo.** Options: none. Accepted N1: [`olet`]. Correct: “Sinä olet Leo. Olet means you are.” Incorrect `olen`: “Olen means I am. Sinä needs olet here.” Other incorrect: “Use olet, not the dictionary form olla.” Not sure: “The missing word is olet.” Spoken `oot`: “Oot is spoken Finnish. Here, write the standard form olet.” No other near misses. Linked: [`vocab.sina`, `vocab.olla`, `grammar.olla-present-1sg-2sg`]; scored: [`vocab.olla`] on teaching form olet. Review eligible **true**. Editorial: `needs_review`.

### Completion and review handoff

Heading: **“An introduction of your own.”** Body: **“You've practised minä olen, sinä olet, and a short way to ask ‘And you?’ These forms will become more familiar as they return.”** Primary **“Continue learning”** to 1.3; secondary **“Back to course.”** Explicit encounters include three lemmas, two phrases and three grammar concepts. Only the present-person concept has an independently scored grammar task; the pronoun explanation and omission awareness are not automatically advanced to comfort by incidental appearances.

## Lesson 1.3 — Your name

### Metadata

`lessonId: lesson.hello.your-name`; order 3; prerequisite `lesson.hello.i-am-you-are`. Objective: **“Recognise a question about your name and give a simple introduction.”** New production: `vocab.nimi`, `vocab.ja`. New recognition: `vocab.hyva`, `phrase.what-is-your-name`. Review: minä, sinä, olla, Olen …, Entä sinä?, greetings. No genitive, possessive suffix or question-form production lesson. Duration 4–6 minutes; complete after N7 attempted and all required steps visited.

### Ordered steps and exact instructional copy

Prefix: `step.hello.your-name.`. All required.

| Order | Suffix / type | Exact content or reference | Targets and encounter policy |
|---:|---|---|---|
| 1 | `objective` / explanation | **A short name exchange.** “You can already say Olen Aino. Now recognise the question that invites that answer, and learn two small words you will see often.” | Links phrase.olen-slot; no new encounter |
| 2 | `name-and` / vocabulary_intro | **nimi — name**; **ja — and**. “On a simple form, nimi labels a name field. Ja joins two things: Aino ja Leo — Aino and Leo.” | Formal encounter: vocab.nimi, vocab.ja |
| 3 | `recognise-name` / exercise | N1 | No encounter |
| 4 | `recognise-and` / exercise | N2 | No encounter |
| 5 | `name-question` / phrase_intro | **Mikä sinun nimesi on?** “What is your name?” “Recognise this as one complete question. You do not need to build it yourself or explain its endings yet. You can answer with the introduction you already know.” | Formal recognition encounter: phrase.what-is-your-name. Link vocab.nimi, but do not create new productive records for the other words |
| 6 | `name-exchange` / example_set | **Aino:** “Hei! Mikä sinun nimesi on?” **Leo:** “Olen Leo. Entä sinä?” **Aino:** “Minä olen Aino.” English meanings: “Hello! What is your name?” / “I am Leo. And you?” / “I am Aino.” | Links hei, name-question, olen-slot, enta-sina, minä, olla; no new encounter. Original tiny scenario, not a copied textbook dialogue |
| 7 | `recognise-question` / exercise | N3 | No encounter |
| 8 | `retrieve-name` / exercise | N4 | No encounter |
| 9 | `join-names` / exercise | N5 | No encounter |
| 10 | `notice-good` / vocabulary_intro | **Hyvä! — Good!** “You may see hyvä in a positive response. For now, recognise its meaning; you do not need to spell it from memory.” | Formal recognition encounter: vocab.hyva |
| 11 | `recognise-good` / exercise | N6 | No encounter |
| 12 | `name-check` / checkpoint | **Answer for yourself in the role-play.** “Recognise the question, then use an introduction.” N7. | No new encounter; separate phrase evidence, not free production of the question |

**N1 — `ex.hello.your-name.recognise-name`**  
Kind `multiple_choice`; intent recognition; demand recognition. Prompt: **“A form has the label nimi. What information belongs there?”** Options: `a` A number; `b` A name; `c` A thank-you. Accepted: `b`. Correct: “Nimi means name.” Incorrect: “The label asks for a name: nimi.” Not sure: “Nimi means name.” Near miss: none. Linked/scored: [`vocab.nimi`]. Review eligible **true**. Editorial: `needs_review`.

**N2 — `ex.hello.your-name.recognise-and`**  
Kind `multiple_choice`; intent recognition; demand contextual recognition. Prompt: **“What does ja do in Aino ja Leo?”** Stimulus: **Aino ja Leo**. Options: `a` It joins the two names: and; `b` It asks for one name; `c` It says goodbye. Accepted: `a`. Correct: “Ja joins Aino and Leo.” Incorrect: “Ja means and. It joins the two names.” Not sure: “Aino ja Leo means Aino and Leo.” Near miss: none. Linked/scored: [`vocab.ja`]. Review eligible **true**. Editorial: `needs_review`.

**N3 — `ex.hello.your-name.recognise-question`**  
Kind `multiple_choice`; intent phrase; demand recognition. Prompt: **“What is this person asking?”** Stimulus: **Mikä sinun nimesi on?** Options: `a` Are you leaving?; `b` What number is this?; `c` What is your name? Accepted: `c`. Correct: “The whole question means What is your name?” Incorrect: “Mikä sinun nimesi on? asks for your name. Recognise the question as a whole.” Not sure: “It means What is your name?” Near miss: none. Linked: [`phrase.what-is-your-name`, `vocab.nimi`]; scored: [`phrase.what-is-your-name`], recognition only. Review eligible **true**. Editorial: `needs_review`, high-priority phrase/register review.

**N4 — `ex.hello.your-name.retrieve-name`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Recall the Finnish dictionary word for ‘name’.”** Options: none. Accepted N1: [`nimi`]. Correct: “Nimi — name.” Incorrect: “The dictionary word is nimi. The form nimesi belongs inside the question you've recognised; it is not the requested dictionary form.” Not sure: “The word is nimi.” Near miss: none. Linked/scored: [`vocab.nimi`]. Review eligible **true**. Editorial: `needs_review`.

**N5 — `ex.hello.your-name.join-names`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Fill the gap so it means ‘Aino and Leo’.”** Stimulus: **Aino ___ Leo**. Options: none. Accepted N1: [`ja`]. Correct: “Aino ja Leo — Aino and Leo.” Incorrect: “Use ja to join the two names.” Not sure: “The missing word is ja.” Near miss: none. Linked/scored: [`vocab.ja`]. Review eligible **true**. Editorial: `needs_review`.

**N6 — `ex.hello.your-name.recognise-good`**  
Kind `multiple_choice`; intent recognition; demand recognition. Prompt: **“You see the positive response Hyvä! What does it mean here?”** Options: `a` Good!; `b` Goodbye!; `c` Excuse me! Accepted: `a`. Correct: “Hyvä means good.” Incorrect `b`: “Näkemiin is goodbye. Hyvä means good.” Incorrect `c`: “Anteeksi is excuse me. Hyvä means good.” Not sure: “Here, Hyvä! means Good!” Near miss: none. Linked: [`vocab.hyva`, `vocab.nakemiin`, `vocab.anteeksi`]; scored: [`vocab.hyva`]. Review eligible **true**, recognition only. Editorial: `needs_review`.

**N7 — `ex.hello.your-name.answer-name-question`**  
Kind `text_input`; intent phrase; demand contextual production. Prompt: **“In this role-play your name is Leo. Answer with ‘I am Leo’ in standard Finnish.”** Stimulus: **Mikä sinun nimesi on?** Options: none. Accepted N1: [`olen leo`, `minä olen leo`]. Correct: “Olen Leo. You have answered with a simple introduction.” Incorrect with olet: “Use olen for your own introduction. Olet means you are.” Other incorrect: “A model answer is Olen Leo. Minä olen Leo is also correct.” Not sure: “You can answer Olen Leo.” Near `mina olen leo`: “Use ä in minä: Minä olen Leo.” Linked: [`phrase.what-is-your-name`, `phrase.olen-slot`, `vocab.olla`, `vocab.mina`]; scored: [`phrase.olen-slot`]. Review eligible **true**: role name and requested meaning are fully supplied. The incoming question is linked, not double-scored. Editorial: `needs_review`.

### Completion and review handoff

Heading: **“A name, a question, an answer.”** Body: **“You've practised nimi and ja, recognised a name question, and replied with an introduction.”** Primary **“Continue learning”** to 1.4. Secondary **“Back to course.”** New eligible targets are nimi, ja, recognition hyvä and recognition name-question. Do not register the internal words of the name question as separately acquired vocabulary.

## Lesson 1.4 — Yes, and a few numbers

### Metadata

`lessonId: lesson.hello.yes-and-numbers`; order 4; prerequisite `lesson.hello.your-name`. Objective: **“Use two everyday yes responses and retrieve numbers one to five; recognise six to ten.”** New production: kyllä, joo, yksi, kaksi, kolme, neljä, viisi. New recognition: kuusi, seitsemän, kahdeksan, yhdeksän, kymmenen. Review: kiitos and the meaning/function distinctions from earlier lessons. No number inflection or new Finnish yes/no question morphology. Duration **8–11 minutes**, two sittings encouraged. All required steps and Y11 attempted; no perfect-board condition.

### Ordered steps and exact instructional copy

Prefix `step.hello.yes-and-numbers.`. All required. Context questions are in English so the lesson does not assess untaught -ko/-kö.

| Order | Suffix / type | Exact content or reference | Targets and encounter policy |
|---:|---|---|---|
| 1 | `objective` / explanation | **Yes—and a small set of numbers.** “First practise yes responses and numbers one to five. Then meet six to ten just for recognition. You can pause before that last part and return to this lesson.” | No encounter |
| 2 | `yes-words` / vocabulary_intro | **kyllä — yes**; **joo — yes / yeah**. “Kyllä is a standard affirmative response; joo is very common in conversation. Both can mean yes. This is not a rule that one is always polite and the other rude. Finnish has other ways to answer too; today, keep these two.” | Formal encounter: vocab.kylla, vocab.joo |
| 3 | `recognise-joo` / exercise | Y1 | No encounter |
| 4 | `numbers-one-three` / vocabulary_intro | **1 — yksi; 2 — kaksi; 3 — kolme.** “Learn the word with the digit. You will type these from memory after a short matching practice.” | Formal encounter: vocab.yksi, vocab.kaksi, vocab.kolme |
| 5 | `numbers-four-five` / vocabulary_intro | **4 — neljä; 5 — viisi.** “Keep ä in neljä and both i letters in viisi. Now you have the words for one to five.” | Formal encounter: vocab.nelja, vocab.viisi |
| 6 | `choose-yes` / exercise | Y2 | Spaced between introductions and number practice; no encounter |
| 7 | `recognise-one-five` / exercise | Y3 | No encounter |
| 8 | `retrieve-three` / exercise | Y4 | No encounter |
| 9 | `retrieve-one` / exercise | Y5 | No encounter |
| 10 | `retrieve-five` / exercise | Y6 | No encounter |
| 11 | `retrieve-two` / exercise | Y7 | No encounter |
| 12 | `retrieve-four` / exercise | Y8 | No encounter |
| 13 | `retrieve-kylla` / exercise | Y9 | No encounter |
| 14 | `retrieve-joo` / exercise | Y10 | No encounter |
| 15 | `pause-and-use` / example_set | **Kyllä, kiitos. — Yes, thank you.** “A short response can combine words you know. You've now practised the words to retrieve yourself. This is a useful place to pause; the remaining numbers only need recognition.” | Links kyllä, kiitos; no new phrase entity/encounter. Existing lesson resume handles leaving |
| 16 | `numbers-six-ten` / vocabulary_intro | **6 — kuusi; 7 — seitsemän; 8 — kahdeksan; 9 — yhdeksän; 10 — kymmenen.** “For now, connect these written words with their digits. You do not need to write them from memory.” | Formal recognition encounters: the five listed vocab IDs |
| 17 | `number-recognition-check` / checkpoint | **Recognise the next five.** “Match the Finnish number words to their digits. Not sure is available for any pair.” Y11. | No encounter; per-pair recognition evidence |

**Y1 — `ex.hello.yes-and-numbers.recognise-joo`**  
Kind `multiple_choice`; intent recognition; demand recognition. Prompt: **“In a conversation, someone agrees by saying Joo. What does it mean here?”** Options: `a` Sorry; `b` Yes; `c` Goodbye. Accepted: `b`. Correct: “Joo is a common conversational yes.” Incorrect: “Here joo expresses agreement: yes or yeah.” Not sure: “Joo means yes here.” Near miss: none. Linked/scored: [`vocab.joo`]. Review eligible **true**. Editorial: `needs_review`.

**Y2 — `ex.hello.yes-and-numbers.choose-yes`**  
Kind `multiple_choice`; intent recognition; demand contextual recognition. Prompt: **“A colleague asks in English whether you can join a short break. You want to say yes. Which option expresses agreement?”** Options: `a` Anteeksi.; `b` Hei!; `c` Kyllä. Accepted: `c`. Correct: “Kyllä expresses yes here. Joo would also be a possible yes response, but is not an option in this question.” Incorrect `a`: “Anteeksi means sorry or excuse me. Kyllä expresses agreement.” Incorrect `b`: “Hei is a greeting. Kyllä is the affirmative option here.” Not sure: “Choose kyllä: yes.” Near miss: none. Linked: [`vocab.kylla`, `vocab.joo`, `vocab.anteeksi`, `vocab.hei`]; scored: [`vocab.kylla`]. Review eligible **true**. Editorial: `needs_review`.

**Y3 — `ex.hello.yes-and-numbers.recognise-one-five`**  
Kind `matching`; intent recognition; demand guided recognition. Prompt: **“Match the number words to the digits.”** Left IDs/text: `one` yksi; `two` kaksi; `three` kolme; `four` neljä; `five` viisi. Right IDs/text in initial order: `d4` 4; `d1` 1; `d5` 5; `d3` 3; `d2` 2. Accepted pairs: one→d1, two→d2, three→d3, four→d4, five→d5. Pair targets: `vocab.yksi`, `vocab.kaksi`, `vocab.kolme`, `vocab.nelja`, `vocab.viisi`, respectively. Exact per-pair correct/incorrect/Not sure teaching feedback: “Yksi means one (1).”; “Kaksi means two (2).”; “Kolme means three (3).”; “Neljä means four (4).”; “Viisi means five (5).” Appropriate outcome heading distinguishes confirmation from correction. Near miss: none. Linked/scored: those five IDs, per pair. Review eligible **false**: multi-target lesson activity; use Y4–Y8 independently. Editorial: `needs_review`.

**Y4 — `ex.hello.yes-and-numbers.retrieve-three`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Write this number in Finnish.”** Stimulus: **3**. Options: none. Accepted N1: [`kolme`]. Correct: “Kolme — three.” Incorrect: “3 is kolme. Read the digit before choosing the word.” Not sure: “The word is kolme.” Near miss: none. Linked/scored: [`vocab.kolme`]. Review eligible **true**. Editorial: `needs_review`.

**Y5 — `ex.hello.yes-and-numbers.retrieve-one`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Write the standard Finnish word for this number.”** Stimulus: **1**. Options: none. Accepted N1: [`yksi`]. Correct: “Yksi — one.” Incorrect: “1 is yksi.” Not sure: “The word is yksi.” Response `yks`: “Yks is a spoken form. Practise standard yksi here.” No other near miss. Linked/scored: [`vocab.yksi`]. Review eligible **true**. Editorial: `needs_review`.

**Y6 — `ex.hello.yes-and-numbers.retrieve-five`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Write the standard Finnish word for this number.”** Stimulus: **5**. Options: none. Accepted N1: [`viisi`]. Correct: “Viisi — five, with two i letters.” Incorrect: “5 is viisi. Keep both i letters.” Not sure: “The word is viisi.” Near `visi`: “The written long vowel needs ii: viisi.” Spoken `viis`: “Viis is used in speech. The standard form practised here is viisi.” Linked/scored: [`vocab.viisi`]. Review eligible **true**. Editorial: `needs_review`.

**Y7 — `ex.hello.yes-and-numbers.retrieve-two`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Write the standard Finnish word for this number.”** Stimulus: **2**. Options: none. Accepted N1: [`kaksi`]. Correct: “Kaksi — two.” Incorrect: “2 is kaksi.” Not sure: “The word is kaksi.” Spoken `kaks`: “Kaks is a spoken form. Practise standard kaksi here.” No other near miss. Linked/scored: [`vocab.kaksi`]. Review eligible **true**. Editorial: `needs_review`.

**Y8 — `ex.hello.yes-and-numbers.retrieve-four`**  
Kind `text_input`; intent recall; demand controlled production. Prompt: **“Write this number in Finnish.”** Stimulus: **4**. Options: none. Accepted N1: [`neljä`]. Correct: “Neljä — four.” Incorrect: “4 is neljä.” Not sure: “The word is neljä.” Near `nelja`: “Use ä at the end: neljä.” Linked/scored: [`vocab.nelja`]. Review eligible **true**. Editorial: `needs_review`.

**Y9 — `ex.hello.yes-and-numbers.retrieve-kylla`**  
Kind `text_input`; intent recall; demand cued recall. Prompt: **“Recall the yes response beginning with k. Type the whole word.”** Stimulus: **yes · k…** Options: none. Accepted N1: [`kyllä`]. Correct: “Kyllä is the yes form requested here.” Incorrect: “The requested k-form is kyllä.” Response `joo`: “Joo can also mean yes. This question specifically asks for the k-form: kyllä.” Not sure: “The word is kyllä.” Near `kylla`: “Keep ä: kyllä.” Linked: [`vocab.kylla`, `vocab.joo`]; scored: [`vocab.kylla`]. Review eligible **false**: targeted form retrieval with a cue; Y2 provides independent contextual review. Editorial: `needs_review`.

**Y10 — `ex.hello.yes-and-numbers.retrieve-joo`**  
Kind `text_input`; intent recall; demand cued recall. Prompt: **“Recall the conversational yes response beginning with j. Type the whole word.”** Stimulus: **yes / yeah · j…** Options: none. Accepted N1: [`joo`]. Correct: “Joo is a common conversational yes.” Incorrect: “The requested j-form is joo.” Response `kyllä`: “Kyllä can also mean yes. This task requests joo.” Not sure: “The word is joo.” Near `jo`: “The intended yes response has two o letters: joo. Do not remove one.” Linked: [`vocab.joo`, `vocab.kylla`]; scored: [`vocab.joo`]. Review eligible **false**: form-cued local retrieval; Y1 provides independent review. Editorial: `needs_review`.

**Y11 — `ex.hello.yes-and-numbers.recognise-six-ten`**  
Kind `matching`; intent recognition; demand recognition only. Prompt: **“Match each Finnish number to its digit. You do not need to type the words.”** Left IDs/text: `six` kuusi; `seven` seitsemän; `eight` kahdeksan; `nine` yhdeksän; `ten` kymmenen. Right IDs/text in initial order: `d9` 9; `d6` 6; `d10` 10; `d8` 8; `d7` 7. Accepted pairs: six→d6, seven→d7, eight→d8, nine→d9, ten→d10. Pair targets follow those words' canonical IDs. Exact per-pair correct/correction/Not sure teaching feedback: “Kuusi means six (6).”; “Seitsemän means seven (7).”; “Kahdeksan means eight (8).”; “Yhdeksän means nine (9).”; “Kymmenen means ten (10).” Near miss: none. Linked/scored: [`vocab.kuusi`, `vocab.seitseman`, `vocab.kahdeksan`, `vocab.yhdeksan`, `vocab.kymmenen`], per pair. Review eligible **false** as a whole board; R1–R5 are independent recognition variants. Editorial: `needs_review`.

### Completion and review handoff

Heading: **“A small set you can build on.”** Body: **“You've practised kyllä and joo, retrieved numbers one to five, and met six to ten for recognition. The longer number words can stay recognition-only for now.”** CTA **“Continue learning”** to 1.5; secondary **“Back to course.”** Retrieval evidence for numbers 1–5 comes from Y4–Y8 individually, not from clearing a recognition board. No numeral inflection, noun quantities or full yes/no question grammar has been added.

## Lesson 1.5 — First review

### Metadata

`lessonId: lesson.hello.first-review`; order 5; prerequisite `lesson.hello.yes-and-numbers`. Objective: **“Bring your first Finnish words together in a short introduction and everyday responses.”** New production vocabulary: **none**. New grammar awareness only: vowel length and a limited harmony preview. Review targets: all 16 production lemmas, all eight recognition lemmas, the two productive chunks and recognition name-question, at different evidence levels as recorded in the coverage matrix. Duration 7–10 minutes; allow pause before the final checkpoint. No perfect score is required.

### Ordered steps and exact instructional copy

Prefix `step.hello.first-review.`. All required; none introduces a new lexical production target.

| Order | Suffix / type | Exact content or reference | Targets and encounter policy |
|---:|---|---|---|
| 1 | `objective` / explanation | **Put your first Finnish to use.** “First notice two spelling patterns. Then recognise familiar expressions and try a short introduction. You can finish even when some answers need another look.” | No encounter |
| 2 | `notice-length` / grammar_explanation | **A doubled vowel matters.** “In familiar words such as kiitos and viisi, ii represents a long vowel. Joo has oo. A long vowel is written with the same vowel letter twice; that does not mean two separate syllables. Today you are noticing the spelling. Hearing and practising the sound will need audio later.” | Formal encounter: grammar.vowel-length-awareness. Links kiitos, viisi, joo. No listening/proficiency claim |
| 3 | `length-awareness` / exercise | C1 | Awareness-only, no knowledge outcome |
| 4 | `notice-harmony` / grammar_explanation | **A small pattern to notice.** “In many simple Finnish words, a, o, u belong to one vowel group, and ä, ö, y to another. The vowels e and i can occur with either group: notice i with o in kiitos, and i with ä in minä. This pattern is called vowel harmony. Compounds and borrowed words need more explanation later; you do not need to choose endings yet.” | Formal encounter: grammar.vowel-harmony-awareness. Links minä, kiitos. Preview only, no suffix production |
| 5 | `harmony-awareness` / exercise | C2 | Awareness-only, no knowledge outcome |
| 6 | `recognition-return` / exercise | C3 | Previously encountered recognition targets only |
| 7 | `name-return` / exercise | C4 | Production retrieval of previously introduced nimi |
| 8 | `and-return` / exercise | C5 | Production retrieval of previously introduced ja |
| 9 | `unit-capability-check` / checkpoint | **Your first Finnish exchange.** “Try these short situations without a word bank. Some answers can be expressed in more than one correct way. Use standard Finnish, and choose Not sure whenever you need the model. Trying each task completes the unit; comfortable recall develops over time.” Five capability groups: (1) greet/introduction C6; (2) polite responses C7/C8; (3) person distinction C9; (4) name-question recognition C10; (5) number/affirmative response C11/C12. | Seven exercises, no new lexical encounters. Capability evidence and vocabulary evidence remain distinct |

**C1 — `ex.hello.first-review.length-awareness`**  
Kind `multiple_choice`; intent grammar; demand awareness. Prompt: **“Which letters in kiitos show a long vowel?”** Stimulus: **kiitos**. Options: `a` k; `b` ii; `c` o. Accepted: `b`. Correct: “The double ii marks a long vowel. This question checks the spelling, not your pronunciation.” Incorrect: “Look for the doubled vowel: ii in kiitos.” Not sure: “The letters are ii.” Near miss: none. Linked: [`grammar.vowel-length-awareness`, `vocab.kiitos`]; scored: []; `knowledgeScoring: false`. Review eligible **false**: awareness preview, not a lexical or listening assessment. Editorial: `needs_review`.

**C2 — `ex.hello.first-review.harmony-awareness`**  
Kind `multiple_choice`; intent grammar; demand awareness. Prompt: **“Minä contains i and ä. Does that contradict the vowel-group pattern?”** Options: `a` Yes: i cannot occur with ä; `b` No: a and ä are the same letter; `c` No: i can occur with either group. Accepted: `c`. Correct: “I can occur with either group. Keep ä in minä; it is a different letter from a.” Incorrect `a`: “I is one of the vowels that can occur with either group.” Incorrect `b`: “A and ä are different letters. I is what allows this combination.” Not sure: “No contradiction: i can occur with either group.” Near miss: none. Linked: [`grammar.vowel-harmony-awareness`, `vocab.mina`]; scored: []; `knowledgeScoring: false`. Review eligible **false**, limited awareness only. Editorial: `needs_review`.

**C3 — `ex.hello.first-review.recognition-return`**  
Kind `matching`; intent cumulative; demand recognition only. Prompt: **“Recognise these familiar expressions and numbers. Match each to its meaning.”** Up to four pairs visible at once; there is no timer. The eight fixed pairs are:

| Left ID / Finnish | Right ID / meaning | Scored target | Exact teaching feedback after that pair's result |
|---|---|---|---|
| welcome / tervetuloa | meaning-welcome / welcome | vocab.tervetuloa | “Tervetuloa means welcome.” |
| goodbye / näkemiin | meaning-goodbye / goodbye | vocab.nakemiin | “Näkemiin means goodbye.” |
| good / hyvä | meaning-good / good | vocab.hyva | “Hyvä means good.” |
| six / kuusi | digit-six / 6 | vocab.kuusi | “Kuusi is six (6).” |
| seven / seitsemän | digit-seven / 7 | vocab.seitseman | “Seitsemän is seven (7).” |
| eight / kahdeksan | digit-eight / 8 | vocab.kahdeksan | “Kahdeksan is eight (8).” |
| nine / yhdeksän | digit-nine / 9 | vocab.yhdeksan | “Yhdeksän is nine (9).” |
| ten / kymmenen | digit-ten / 10 | vocab.kymmenen | “Kymmenen is ten (10).” |

Use the exact row mapping as `answerSpec`. Correct, incorrect and Not sure use the row's feedback with the distinct result heading; score only the row involved, at first attempt. Near miss: none. Linked/scored: the eight row IDs, per pair. Review eligible **false** as a board; G6/G7/N6/R1–R5 supply individual review. Editorial: `needs_review`. This is eight response units, not one effortless interaction.

**C4 — `ex.hello.first-review.name-return`**  
Kind `text_input`; intent cumulative; demand controlled production. Prompt: **“You are labelling the name field on a simple form. Type the Finnish word ‘name’.”** Options: none. Accepted N1: [`nimi`]. Correct: “Nimi is the word for name.” Incorrect: “Use the dictionary word nimi.” Not sure: “The label is nimi.” Near miss: none. Linked/scored: [`vocab.nimi`]. Review eligible **true**. Editorial: `needs_review`.

**C5 — `ex.hello.first-review.and-return`**  
Kind `text_input`; intent cumulative; demand controlled production. Prompt: **“Connect these two names with the Finnish word for ‘and’.”** Stimulus: **Leo ___ Aino**. Options: none. Accepted N1: [`ja`]. Correct: “Leo ja Aino — Leo and Aino.” Incorrect: “Ja is the word that joins the names.” Not sure: “Use ja.” Near miss: none. Linked/scored: [`vocab.ja`]. Review eligible **true**. Editorial: `needs_review`.

**C6 — `ex.hello.first-review.greet-and-introduce`**  
Kind `text_input`; intent cumulative; demand contextual production. Prompt: **“Your role-play name is Aino. Greet a neighbour with hei or moi, then write ‘I am Aino’ in standard Finnish.”** Options: none. Accepted after N1: [`hei olen aino`, `hei minä olen aino`, `moi olen aino`, `moi minä olen aino`]. This deliberately supplies the two greeting choices while requiring sentence production; it is not an uncued test of both greeting spellings. Correct: “That works as a greeting and an introduction. Minä may be included or left out here.” Incorrect: “One model is Hei! Olen Aino. Moi! Minä olen Aino. also works. Use olen for your own introduction.” Not sure: “Try the model Hei! Olen Aino. next time.” Near responses containing `mina` instead of `minä` in either full accepted pattern: “Keep ä in minä, or use the correct shorter introduction Olen Aino.” Linked: [`vocab.hei`, `vocab.moi`, `vocab.mina`, `vocab.olla`, `phrase.olen-slot`, `grammar.subject-omission-awareness`]; scored: []; `knowledgeScoring: false`; record capability evidence only for greeting + introduction. Do not credit both hei and moi from one chosen reply. Review eligible **false**: multi-part capability check with valid alternatives. Editorial: `needs_review`.

**C7 — `ex.hello.first-review.thank-after-help`**  
Kind `text_input`; intent cumulative; demand contextual production. Prompt: **“Your neighbour helps you find the right entrance. Write a short thank-you in Finnish.”** Options: none. Accepted N1: [`kiitos`]. Correct: “Kiitos thanks your neighbour.” Incorrect: “Use kiitos here. Anteeksi would express sorry or excuse me.” Not sure: “The word is kiitos.” Near `kitos`: “The spelling is kiitos, with ii.” Linked/scored: [`vocab.kiitos`]. Review eligible **true**. Editorial: `needs_review`.

**C8 — `ex.hello.first-review.polite-interruption`**  
Kind `text_input`; intent cumulative; demand contextual production. Prompt: **“You need to interrupt politely before asking for help. Write ‘excuse me’ in Finnish.”** Options: none. Accepted N1: [`anteeksi`]. Correct: “Anteeksi is a polite way to get attention.” Incorrect: “Use anteeksi for excuse me. A greeting or a thank-you has a different function.” Not sure: “The word is anteeksi.” Near `anteksi`: “Keep ee: anteeksi.” Linked/scored: [`vocab.anteeksi`]. Review eligible **true**. Editorial: `needs_review`.

**C9 — `ex.hello.first-review.change-person`**  
Kind `transform`; intent grammar; demand controlled production. Prompt: **“Change ‘I am Leo’ to ‘You are Leo.’ Keep the standard pronoun sinä in your answer.”** Stimulus: **Minä olen Leo.** Response modality: text. Options: none. Accepted N1: [`sinä olet leo`]. Correct: “Sinä olet Leo. Both the pronoun and the verb now refer to you.” Incorrect with olen: “With sinä, the verb is olet, not olen.” Response `olet leo`: “Olet Leo is grammatical, but this particular task asks you to keep sinä: Sinä olet Leo.” Other incorrect: “Use the model Sinä olet Leo.” Not sure: “The model is Sinä olet Leo.” Near `sina olet leo`: “Keep ä in sinä: Sinä olet Leo.” Linked: [`vocab.mina`, `vocab.sina`, `vocab.olla`, `grammar.olla-present-1sg-2sg`]; scored: [`grammar.olla-present-1sg-2sg`]. Review eligible **true**. Editorial: `needs_review`.

**C10 — `ex.hello.first-review.name-question-return`**  
Kind `multiple_choice`; intent cumulative; demand recognition. Prompt: **“Someone asks Mikä sinun nimesi on? Which kind of answer are they looking for?”** Options: `a` Your name; `b` A number; `c` A goodbye. Accepted: `a`. Correct: “They are asking for your name.” Incorrect: “The question asks What is your name? An introduction such as Olen Leo would answer it.” Not sure: “They want to know your name.” Near miss: none. Linked: [`phrase.what-is-your-name`, `phrase.olen-slot`, `vocab.nimi`]; scored: [`phrase.what-is-your-name`], recognition only. Review eligible **true**. Editorial: `needs_review`.

**C11 — `ex.hello.first-review.number-in-context`**  
Kind `text_input`; intent cumulative; demand contextual production. Prompt: **“Your role-play ticket number is 4. Write the number word in Finnish.”** Options: none. Accepted N1: [`neljä`]. Correct: “Neljä means four.” Incorrect: “The number is neljä.” Not sure: “Write neljä next time.” Near `nelja`: “Use ä: neljä.” Linked/scored: [`vocab.nelja`]. Review eligible **true**. Editorial: `needs_review`. This final task samples number recall; the evidence for all five productive numbers is Y4–Y8, not an inference from one correct answer here.

**C12 — `ex.hello.first-review.affirmative-response`**  
Kind `text_input`; intent cumulative; demand contextual production. Prompt: **“A colleague asks in English whether they may join you. Write one of the Finnish yes responses you've learned.”** Options: none. Accepted N1: [`kyllä`, `joo`]. Correct: “That is a valid yes response here. Kyllä and joo are both possible.” Incorrect: “A model is kyllä. Joo also expresses yes here.” Not sure: “You can use kyllä or joo.” Near `kylla`: “Use ä if you choose kyllä. Joo is another correct response.” Linked: [`vocab.kylla`, `vocab.joo`]; scored: []; `knowledgeScoring: false`; capability evidence only. Do not mark both synonymous vocabulary targets recalled from one answer. Review eligible **false**; Y1/Y2 provide target-specific review. Editorial: `needs_review`.

### Unit checkpoint interpretation and completion

The checkpoint has five capability groups and seven individual responses, not seven new teaching concepts. Capability evidence is explicit: introduction from C6; polite functions from C7/C8; person distinction from C9; name-question comprehension from C10; affirmative/number use from C11/C12. Broader number evidence is the five separate Y4–Y8 results. A correct C11 does not imply success on the other four numbers. Greeting and yes synonyms selected in open responses must not both acquire a knowledge success.

Completing Unit 1 means all required steps and checkpoint responses have been attempted. No minimum correct percentage is required. “Becoming comfortable” or “comfortable” must still respect the existing capability conditions and actual recall history; a learner who selected Not sure throughout completes the sequence without receiving false capability-success evidence.

**Lesson-completion heading:** “Your first Finnish connections.”  
**Body:** “You've combined greetings, introductions, polite words and basic numbers. Some answers may still need another look.”  
**Unit-completion heading:** “Your first words are in place.”  
**Body:** “You've completed Hello. You've practised greeting someone, introducing yourself, responding politely and working with small numbers. Words and patterns will keep returning in Review.”  
**Primary CTA:** “Continue to Unit 2” only when Unit 2 is actually available. Otherwise **“Back to course.”** Secondary **“Back to course”** when the primary exists. No fake Unit 2 screen or hard-coded Unit 4 completion.

## Part III — Independently authored scheduled-Review variants

These six exercises are a **bank**, not additional required steps. They require the originating encounter, source lesson attempted, approved editorial state and selected due target. Each has `learningLanguage: fi`, the common N1/feedback conventions, `hint: null`, `editorialStatus: needs_review`, and `reviewEligible: true`. They do not create a new scheduler or automatically run immediately after the lesson.

**R1 — `ex.hello.review.recognise-kuusi`**  
Source lesson `lesson.hello.yes-and-numbers`; kind `multiple_choice`; intent recognition. Prompt: **“Which digit matches the number word kuusi?”** Options: a=6, b=7, c=10. Accepted a. Correct: “Kuusi is six (6).” Incorrect: “In this number task, kuusi means six: 6.” Not sure: “Kuusi = 6.” Near miss none. Linked/scored [`vocab.kuusi`]. Recognition only.

**R2 — `ex.hello.review.recognise-seitseman`**  
Source lesson `lesson.hello.yes-and-numbers`; kind `multiple_choice`; intent recognition. Prompt: **“Which digit matches seitsemän?”** Options: a=8, b=7, c=6. Accepted b. Correct: “Seitsemän is seven (7).” Incorrect: “Seitsemän matches 7.” Not sure: “Seitsemän = 7.” Near miss none. Linked/scored [`vocab.seitseman`]. Recognition only.

**R3 — `ex.hello.review.recognise-kahdeksan`**  
Source lesson `lesson.hello.yes-and-numbers`; kind `multiple_choice`; intent recognition. Prompt: **“Which digit matches kahdeksan?”** Options: a=9, b=10, c=8. Accepted c. Correct: “Kahdeksan is eight (8).” Incorrect: “Kahdeksan matches 8.” Not sure: “Kahdeksan = 8.” Near miss none. Linked/scored [`vocab.kahdeksan`]. Recognition only.

**R4 — `ex.hello.review.recognise-yhdeksan`**  
Source lesson `lesson.hello.yes-and-numbers`; kind `multiple_choice`; intent recognition. Prompt: **“Which digit matches yhdeksän?”** Options: a=9, b=8, c=7. Accepted a. Correct: “Yhdeksän is nine (9).” Incorrect: “Yhdeksän matches 9.” Not sure: “Yhdeksän = 9.” Near miss none. Linked/scored [`vocab.yhdeksan`]. Recognition only.

**R5 — `ex.hello.review.recognise-kymmenen`**  
Source lesson `lesson.hello.yes-and-numbers`; kind `multiple_choice`; intent recognition. Prompt: **“Which digit matches kymmenen?”** Options: a=6, b=10, c=9. Accepted b. Correct: “Kymmenen is ten (10).” Incorrect: “Kymmenen matches 10.” Not sure: “Kymmenen = 10.” Near miss none. Linked/scored [`vocab.kymmenen`]. Recognition only.

**R6 — `ex.hello.review.moi-when-leaving`**  
Source lesson `lesson.hello.greetings`; kind `multiple_choice`; intent recognition. Prompt: **“A friend says Moi! as you leave. What does it mean in this situation?”** Options: a=Welcome; b=Thank you; c=Bye. Accepted c. Correct: “Here, moi is a casual goodbye.” Incorrect: “As you leave, moi means bye. In an arrival context it can mean hi.” Not sure: “Here, it means bye.” Near miss none. Linked/scored [`vocab.moi`]. Context is supplied, so no ambiguity with arriving.

## Part IV — Implementation, optional practice and content boundaries

### Structured content, not screen copies

The 65-step sequence uses the eight existing step kinds (this unit happens to use all eight). The 47 required exercise records use 15 multiple-choice, 26 text-input, four matching, one token-build and one transformation task. The six bank variants are multiple-choice. Total authored exercise records: **53**, not 53 mandatory questions in one session.

The original Figma lesson/exercise/completion/Review/Library/Flashcards/Word Match frames were inspected read-only to constrain short copy, focused navigation, feedback and scrolling. They do not certify that text-input, token-building or arbitrary lesson matching renderers have already been implemented. No new Figma screens are created. Input-specific behaviour and the scheduler-name adapter are specified in the companion notes.

### Word Match eligibility after encounters

Use canonical vocabulary records, not duplicate decks. `olla` may be represented by one authored teaching form at a time (olen or olet), never an unintroduced paradigm. Digits are clear matching meanings for number words. Recognition-only six to ten may match to digits without becoming productive targets. The support words are excluded because they were not formally introduced.

Semantic exclusions are stronger than string uniqueness:

- Never put unqualified hei and moi in the same board as separate “hi”/“hello” answers. Those are not reliably distinct meanings.
- Never put kyllä and joo together merely by labelling one “yes” and the other “yeah.” Both can satisfy a yes response.
- A goodbye gloss can also match hei/moi in context. When using näkemiin alongside a greeting, qualify the greeting task as **“hei · arriving” → “hello”**; otherwise exclude overlapping active meanings.
- Do not combine pronoun minä→I with an unqualified olen→I am in a board that removes the verb meaning or makes both simply “I.” Keep complete authored glosses.
- At the earliest four-production-word stage, hei/moi overlap means there may be only three simultaneously unambiguous pairs. Wait for enough encountered eligible items; do not invent filler. After tervetuloa is introduced, a safe four-pair example is **hei · arriving → hello; kiitos → thank you; anteeksi → excuse me; tervetuloa → welcome**.

Flashcards use the same records. Required course production remains limited to the 16 lemmas' taught forms. In default Unit 1 practice, recognition-only targets use Finnish-to-English/digit recognition; reverse-only sets filter them out and report the truthful count. Mixed direction must not quietly turn an eight-item recognition set into mandatory Finnish spelling.

### Coverage, sources and release status

The full item-by-item coverage matrix, canonical IDs, prerequisite checks, type counts, sources and audit findings are in [Coverage & Editorial QA](./unit-01-coverage-and-qa.md). All teaching text above is newly authored. External sources validate limited language facts; they do not make these exercises teacher-approved.

Three scope decisions are explicit rather than hidden: recognition tervetuloa/näkemiin are placed in 1.1; recognition hyvä in 1.3; the name question is authored as the recognition-only chunk already anticipated by the architecture. No production lemma was added or removed. No full case, negation, question-suffix or conjugation system is taught.

**Authored-content status:** complete for an engineering/teacher review branch. **Release status:** not approved until human Finnish-language review and novice/device testing. The original vocabulary CSV and base curriculum remain unchanged.
