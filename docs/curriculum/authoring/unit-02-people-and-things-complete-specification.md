# Vokri — Unit 2: People & Things · Complete Lesson & Exercise Specification

**Version:** 1.0 authoring draft · **Learning language:** `fi` · **Unit:** `unit.people-and-things` · **Stage:** `stage.a1-foundations` · **Course:** `course.fi`.  
**Editorial state of newly authored Finnish teaching text, examples, answer rules and exercises:** `needs_review`, `reviewedBy: null`, `reviewedAt: null`. Vokri's owner may approve content under the project workflow. No external teacher is a mandatory release blocker, but no native-speaker certification is claimed.

Read together with [Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 1 complete specification](./unit-01-hello-complete-specification.md), [Unit 2 Coverage & QA](./unit-02-coverage-and-qa.md), [Unit 2 Implementation Notes](./unit-02-implementation-notes.md), the [A1 Foundations Blueprint](../a1_foundations_curriculum_blueprint.md) and [Learning Architecture](../../architecture/content_learning_data_architecture_specification.md).

## Part I — Scope and instructional contract

### Goal and prerequisites

**Learner-facing unit goal:** “Identify people and things, say which language you speak, say where you live, ask simple questions, and make a basic negative statement.”

**Prerequisite:** completed/attempted Unit 1 — Hello; particularly `minä/sinä`, `olen/olet`, `Olen …`, greetings and name exchanges. Unit 1 recognition-only items remain recognition-only. Proper names Aino and Leo are neutral context tokens, not additional vocabulary targets.

**Lesson order (unchanged):** 2.1 This, that, it → 2.2 Who is that? → 2.3 Finnish and English → 2.4 Where you live → 2.5 Questions and no. Lesson 2.5 includes the end-of-unit assessment; **no sixth lesson is introduced**.

**Grammar limit:** finite demonstratives, `kuka/mikä`, `hän` gender-neutrality and everyday `se` recognition, useful `puhun/asun` forms, fixed language/location expressions, `onko/oletko/puhutko` yes/no models, and first-person `en puhu/en asu`. **Do not** teach partitive formation, locative-case paradigms, full third-person conjugation or the six-person negative paradigm. Written standard Finnish remains the production target; spoken variants are recognition-only.

### Exact production inventory — 17 new lemmas

| Lemma | Canonical vocabulary ID | CSV rank | First formal encounter |
|---|---|---:|---|
| **ei** | `vocab.ei` | 3 | Lesson 2.5 |
| **se** | `vocab.se` | 4 | Lesson 2.1 |
| **hän** | `vocab.han` | 7 | Lesson 2.2 |
| **tämä** | `vocab.tama` | 11 | Lesson 2.1 |
| **tuo** | `vocab.tuo` | 12 | Lesson 2.1 |
| **mikä** | `vocab.mika` | 13 | Lesson 2.1 |
| **kuka** | `vocab.kuka` | 14 | Lesson 2.2 |
| **puhua** | `vocab.puhua` | 70 | Lesson 2.3 |
| **asua** | `vocab.asua` | 88 | Lesson 2.4 |
| **ihminen** | `vocab.ihminen` | 145 | Lesson 2.2 |
| **mies** | `vocab.mies` | 146 | Lesson 2.2 |
| **nainen** | `vocab.nainen` | 147 | Lesson 2.2 |
| **lapsi** | `vocab.lapsi` | 148 | Lesson 2.2 |
| **suomalainen** | `vocab.suomalainen` | 161 | Lesson 2.3 |
| **kieli** | `vocab.kieli` | 325 | Lesson 2.3 |
| **suomi** | `vocab.suomi` | 326 | Lesson 2.3 |
| **englanti** | `vocab.englanti` | 327 | Lesson 2.3 |

The source rank is pedagogical, not a statistical absolute-frequency order. **Do not create separate vocabulary entries** for `puhun`, `puhut`, `asun`, `en`, `et`, `suomea`, `Suomessa` or `englantia`. They are taught forms/chunks linked to their existing lemmas. A word's production/recognition role belongs to its lesson reference, not permanently to the global vocabulary item.

### Recognition-only inventory — seven items

| Lemma | Canonical vocabulary ID | CSV rank | First formal encounter |
|---|---|---:|---|
| **me** | `vocab.me` | 8 | Lesson 2.2 |
| **te** | `vocab.te` | 9 | Lesson 2.2 |
| **he** | `vocab.he` | 10 | Lesson 2.2 |
| **ystävä** | `vocab.ystava` | 156 | Lesson 2.2 |
| **miten** | `vocab.miten` | 337 | Lesson 2.5 |
| **hyvin** | `vocab.hyvin` | 53 | Lesson 2.3 |
| **maa** | `vocab.maa` | 506 | Lesson 2.3 |

The existing support words `vocab.olla`, `vocab.mina`, `vocab.sina`, `vocab.ja`, `vocab.hyva` remain earlier encounters, **not new Unit 2 production**. All 24 new lexical items are present in the unchanged CSV (blob `81341de6828ec5ffa3b6bebfc828ac31bb275776`). `maa` is Everyday tier; the other 23 are Core tier.

### Phrase and grammar inventory

| Canonical ID | Learner-facing chunk | Teaching role |
|---|---|---|
| `phrase.mika-tama-on` | **Mikä tämä on?** | Fixed question, 2.1 |
| `phrase.kuka-han-on` | **Kuka hän on?** | Fixed person question, 2.2 |
| `phrase.puhun-language` | **Puhun suomea. / Puhun englantia.** | One productive language pattern with two authored forms, 2.3 |
| `phrase.puhutko-suomea` | **Puhutko suomea?** | Recognition in 2.3, production after -ko/-kö explanation in 2.5 |
| `phrase.asun-suomessa` | **Asun Suomessa.** | Fixed place expression, 2.4 |
| `phrase.en-puhu-language` | **En puhu suomea. / En puhu englantia.** | First-person negative phrase; 2.5 |

These are **course-authored PhraseItems**, not duplicate VocabularyItems. Unit 1 chunks `phrase.olen-slot` and `phrase.enta-sina` are reused without new encounter events.

**Grammar concepts:** `grammar.demonstratives-tama-tuo-se` (2.1), `grammar.kuka-mika-distinction` and `grammar.han-person-reference` (2.2), `grammar.yes-no-ko-ko` and `grammar.negative-en` (2.5). Practical `puhun/asun` forms are teaching-form overlays on their verbs; no general conjugation engine is introduced.

**Optional spoken notes:** `spoken.tama-taa`, `spoken.tuo-toi`, `spoken.han-se-colloquial`. The future `he → ne` note is deliberately deferred beyond V1 Unit 2 to keep optional recognition manageable.

### Content/assessment defaults applied to every record below

This binding statement supplies the canonical fields that are not worth repeating as filler in each record:

- Every step is `learningLanguage: fi`, `unitId: unit.people-and-things`; full step ID = the stable prefix printed for its lesson plus its row suffix. Every new teaching/example/exercise record has `editorialStatus: needs_review`, no fabricated `reviewedBy` or `reviewedAt`. Lesson title/duration/prerequisites are in each lesson's metadata.
- **Prompt**, **Stimulus**, **Answer**, **Correct feedback**, **Incorrect feedback**, **Near feedback**, **Not sure**, **Hint**, **Linked**, **Scored**, **Review eligible** and **Difficulty** fields in the exercise records map directly to `prompt`, `stimulus`, `answerSpec`, `feedback`, `almostFeedback`, `notSureFeedback`, `hint`, `linkedTargetIds`, `scoredTargetIds`, `reviewEligible` and `difficulty` in the typed content conversion.
- MC options have stable IDs; visual order must be shuffled and the option-specific incorrect feedback must remain attached to the original ID. Matching pair identities are explicit, each pair receives its own first-attempt outcome; a 4-pair board counts as four response units. Matching in a **lesson** may legitimately have 2–4 pairs; only **optional Word Match sessions** enforce four eligible pairs at once.
- The Unit 1 **N1** input profile applies: Unicode NFC, lowercase, trim/collapse spaces and replace terminal/inter-word `. , ! ?` separators with spaces (never concatenate neighbouring words). **Do not** remove Finnish diacritics, reduce doubled vowels, stem, fuzzy-compare or silently accept untaught inflections. Accepted answer sets listed after N1 are exhaustive; `ä` and `a` are different.
- Empty text does not commit an attempt. **“I'm not sure yet”** commits `not_sure` only for this record's expressly scored targets and reveals the authored model. A correct first attempt commits one `correct`; an authored near miss or other attempted wrong response uses the **existing provisional non-success `almost` scheduler bucket** with accurate separate visible feedback (“Check the form” or “Another look”). This legacy compatibility is unchanged from Unit 1 and must be confirmed before Expo implementation.
- If the record's **Scored** set is empty, set `knowledgeScoring: false`: it is capability evidence only. A correct answer to a multi-word sentence does **not** automatically award familiarity to every linked word. A checkpoint is an existing `checkpoint` step wrapping its listed authored exercises, not a new exercise kind.
- Required steps/attempts (including explicit Not sure) and an attempted lesson checkpoint satisfy lesson completion; **not** a 100% correct score. Formal encounters occur only at the named introduction steps. The separate deterministic scheduled Review engine handles due times; optional Flashcards and Word Match do not clear or postpone it.
- Runtime **hint** is null in every task below; any built-in prompt clue is intentionally visible and makes the exercise cued, not unaided recall. “Continue” after feedback, rather than infinite repeated attempts, preserves the calm learning flow. No audio, speech recognition, images or backend are prerequisites.

### Lesson workload

| Lesson | Required ordered steps | Required exercise records | Matching response pairs | Estimated duration |
|---|---:|---:|---:|---|
| 2.1 This, that, it | 17 + one optional spoken note | 11 | 3 | 6–9 min |
| 2.2 Who is that? | 19 + one optional spoken note | 13 | 8 | 9–13 min |
| 2.3 Finnish and English | 20 | 13 | 5 | 9–13 min |
| 2.4 Where you live | 13 | 9 | 0 | 5–8 min |
| 2.5 Questions and no | 16 | 16 (eight in the checkpoint) | 0 | 12–18 min |
| **Total** | **85 required + 2 optional** | **62** | **16** | **41–61 min** |

Total learner responses are **73** when the 5 matching-board records are expanded to their 16 pair decisions: `62 - 5 + 16 = 73`, before extra work for longer text responses. They are intentionally distributed over multiple sittings; the natural pause points do not create sixth lessons. **All duration estimates need actual novice-device calibration.**

## Part II — Complete lesson content

## Lesson 2.1 — This, that, it

**Metadata.** `lesson.people-and-things.this-that-it`; `unit.people-and-things`; `fi`; order 1; 6–9 minutes. **Objective:** Refer to an object near you, point to something farther away, refer back to something already mentioned, and recognise a basic what-question. **Prerequisite:** `lesson.hello.first-review`. **New production:** `vocab.tama`, `vocab.tuo`, `vocab.se`, `vocab.mika`. **Recognition:** none newly introduced. **Grammar:** `grammar.demonstratives-tama-tuo-se`. **Phrase:** `phrase.mika-tama-on`. **Review links:** `vocab.olla`, `vocab.mina`, `vocab.sina`. **Optional spoken:** `spoken.tama-taa`, `spoken.tuo-toi` (recognition only; shown in a separate optional note if enabled; not scored). **Pause:** After the first four recognition decisions, before writing the question.

### Ordered learner experience

All steps required except the optional spoken note, with ID prefix `step.people-and-things.this-that-it.`. An exercise or checkpoint does not cause a new encounter. Full exercise records follow the table.

| # | Step ID suffix | Existing type | Exact learner-facing content | Formal encounter |
|---:|---|---|---|---|
| 1 | `welcome` | `explanation` | **Here, there, and already known.** “You can already introduce yourself. Now you can point to something, refer back to it, and ask what it is.” | none |
| 2 | `pointing` | `vocabulary_intro` | **tämä** — this (something in the speaker’s immediate focus). **tuo** — that (often when indicating something farther from the speaker). **se** — it/that (often something already known or mentioned). “These are useful starting patterns, not strict one-word translations. Context matters.” | `vocab.tama`, `vocab.tuo`, `vocab.se` |
| 3 | `reference-contrast` | `grammar_explanation` | **A small reference pattern.** “Tämä, tuo and se often point differently, but none is a universal translation of English ‘that’. Choose from what the speaker and listener know or are pointing toward; do not treat the words as rigid distance rules.” | `grammar.demonstratives-tama-tuo-se` |
| 4 | `near` | `exercise` | A01 | none |
| 5 | `far` | `exercise` | A02 | none |
| 6 | `already-mentioned` | `exercise` | A03 | none |
| 7 | `compare-contexts` | `example_set` | **In your hand:** tämä. **Across the room:** tuo. **Already mentioned in conversation:** se. “The situation makes the reference clear; do not decide by the English word ‘that’ alone.” | none |
| 8 | `match-demonstratives` | `exercise` | A04 | none |
| 9 | `what-word` | `vocabulary_intro` | **mikä** — what/which. “Ask about something you do not know. In this unit you will use it in a short, complete question.” | `vocab.mika` |
| 10 | `meaning-mika` | `exercise` | A05 | none |
| 11 | `what-is-this` | `phrase_intro` | **Mikä tämä on?** — “What is this?” “Learn this useful question as a whole. The word **on** belongs to the question here; you do not need the full third-person verb table yet.” | `phrase.mika-tama-on` |
| 12 | `retrieve-this` | `exercise` | A06 | none |
| 13 | `retrieve-that` | `exercise` | A07 | none |
| 14 | `retrieve-it` | `exercise` | A08 | none |
| 15 | `extend-question` | `example_set` | **Mikä tuo on?** — “What is that?” “When you point to an object across the room, tuo can replace tämä. This is a small variation on the question you have just met.” | none |
| 16 | `build-question` | `exercise` | A09 | none |
| 17 | `checkpoint` | `checkpoint` | **One last look.** “Choose the right reference, then recall the question word.” A10 → A11. | none |

**Optional `spoken_note` with ID `step.people-and-things.this-that-it.spoken-tama-tuo`** (after the comparison examples; do not block completion): “In everyday speech you may hear **tää** for **tämä** and **toi** for **tuo**. For now, notice these forms. Write the standard forms in your own answers.” Targets `spoken.tama-taa`, `spoken.tuo-toi`; recognition only, no independent mastery.

### Fully authored exercises

**A01 — `ex.people-and-things.this-that-it.pointing-near`** · `multiple_choice` · recognition / guided recognition · difficulty: intro  
**Prompt:** You are holding a card. Which Finnish word points to something in your hand?  
**Stimulus:** The card is in your hand.  
**Answer:** Options (stable IDs, shuffled visually): `a` tämä · `b` tuo · `c` se. **Accepted:** `a`.  
**Correct feedback:** Tämä is a natural choice for something in your immediate focus.  
**Incorrect feedback:** `b`: Tuo commonly points to something farther away; the card is in your hand. `c`: Se often refers to something already identified or mentioned. Here you are pointing to the card in your hand.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** Use tämä for the card in your hand.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.tama`, `vocab.tuo`, `vocab.se`. **Scored targets:** `vocab.tama`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A02 — `ex.people-and-things.this-that-it.pointing-across-room`** · `multiple_choice` · recognition / contextual recognition · difficulty: intro  
**Prompt:** You point to a bag across the room. Which word best fits the pointing situation?  
**Stimulus:** An object across the room, clearly indicated.  
**Answer:** Options (stable IDs, shuffled visually): `a` se · `b` tuo · `c` tämä. **Accepted:** `b`.  
**Correct feedback:** Tuo commonly draws attention to something farther away.  
**Incorrect feedback:** `a`: Se could refer back to a known bag, but this task is about pointing one out across the room. `c`: Tämä is more typical for something in the speaker’s immediate focus; the bag is farther away.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** Tuo is a useful choice when pointing across the room.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.tama`, `vocab.tuo`, `vocab.se`. **Scored targets:** `vocab.tuo`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A03 — `ex.people-and-things.this-that-it.already-discussed`** · `multiple_choice` · recognition / contextual recognition · difficulty: intro  
**Prompt:** You and a friend are already talking about a particular item. Which Finnish word often refers back to it?  
**Stimulus:** An item both speakers have already mentioned.  
**Answer:** Options (stable IDs, shuffled visually): `a` tämä · `b` tuo · `c` se. **Accepted:** `c`.  
**Correct feedback:** Se often refers to something already known in the conversation.  
**Incorrect feedback:** `a`: Tämä can point to a current focus, but se is the straightforward reference-back word taught here. `b`: Tuo can point out something, especially away from the speaker; this is a reference back to an established item.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** Se is often ‘it’ or ‘that’ when the thing is already known.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.tama`, `vocab.tuo`, `vocab.se`. **Scored targets:** `vocab.se`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A04 — `ex.people-and-things.this-that-it.match-references`** · `matching` · recognition / guided recognition · difficulty: guided  
**Prompt:** Match each short Finnish reference to the situation it is being used for.  
**Stimulus:** Three independent contexts; all refer to an object, not a person.  
**Answer:** Pairs (each independently evaluated): 1. **tämä** ↔ **this — in my hand** → `vocab.tama`; 2. **tuo** ↔ **that — pointed out across the room** → `vocab.tuo`; 3. **se** ↔ **it — already mentioned** → `vocab.se`. **Accepted:** only these pair identities; any order.  
**Correct feedback:** Those three contexts explain why speakers choose different pointing words.  
**Incorrect feedback:** Check the situation: near the speaker, farther away, or already mentioned.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** In your hand: tämä. Across the room: tuo. Already mentioned: se.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.tama`, `vocab.tuo`, `vocab.se`. **Scored targets:** `vocab.tama`, `vocab.tuo`, `vocab.se`. **Review eligible:** no; lesson-local context/board. **Editorial:** `needs_review`.

**A05 — `ex.people-and-things.this-that-it.mika-meaning`** · `multiple_choice` · recognition / guided recognition · difficulty: intro  
**Prompt:** In a question about an unfamiliar object, what does mikä ask?  
**Stimulus:** mikä?  
**Answer:** Options (stable IDs, shuffled visually): `a` Who? · `b` What? / Which? · `c` Where?. **Accepted:** `b`.  
**Correct feedback:** Mikä can ask what something is, or which one is meant.  
**Incorrect feedback:** `a`: Who? is commonly kuka; that comes in the next lesson. `c`: This unit uses mikä to ask what something is, not where it is.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** Mikä asks ‘what?’ or ‘which?’ in the taught object question.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.mika`. **Scored targets:** `vocab.mika`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A06 — `ex.people-and-things.this-that-it.write-tama`** · `text_input` · recall / controlled production · difficulty: recall  
**Prompt:** Type the Finnish word for this, referring to the object in your hand.  
**Stimulus:** this • object close to the speaker  
**Answer:** Accepted after N1: `tämä`.  
**Correct feedback:** Tämä refers to the object you are holding.  
**Incorrect feedback:** The word for ‘this’ in this situation is tämä.  
**Near feedback:** `tama` → The vowel matters: write tämä with ä.  
**Not sure:** Write tämä. The dots above ä are part of the word.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.tama`. **Scored targets:** `vocab.tama`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A07 — `ex.people-and-things.this-that-it.write-tuo`** · `text_input` · recall / controlled production · difficulty: recall  
**Prompt:** Type the Finnish pointing word for that object across the room.  
**Stimulus:** that • pointed out farther away  
**Answer:** Accepted after N1: `tuo`.  
**Correct feedback:** Tuo fits the object you are pointing out across the room.  
**Incorrect feedback:** The taught pointing word for this farther-away object is tuo.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** The word is tuo.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.tuo`. **Scored targets:** `vocab.tuo`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A08 — `ex.people-and-things.this-that-it.write-se`** · `text_input` · recall / controlled production · difficulty: recall  
**Prompt:** Type the Finnish word often used for it when the thing has already been mentioned.  
**Stimulus:** it • already mentioned  
**Answer:** Accepted after N1: `se`.  
**Correct feedback:** Se often refers back to something you both know about.  
**Incorrect feedback:** The taught reference-back word is se.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** Write se.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.se`. **Scored targets:** `vocab.se`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A09 — `ex.people-and-things.this-that-it.assemble-mika-tama-on`** · `token_build` · phrase / controlled construction · difficulty: construction  
**Prompt:** Put the tiles in order to ask: What is this?  
**Stimulus:** Use all three provided tiles.  
**Answer:** Token bank (shuffled): on / tämä / Mikä. **Accepted assembled sentence:** `Mikä tämä on?`.  
**Correct feedback:** Mikä tämä on? is a complete question you can use immediately.  
**Incorrect feedback:** Start with mikä, then tämä, then on: Mikä tämä on?  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** Build: Mikä → tämä → on?  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.mika`, `vocab.tama`, `phrase.mika-tama-on`. **Scored targets:** `phrase.mika-tama-on`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A10 — `ex.people-and-things.this-that-it.checkpoint-distant`** · `multiple_choice` · cumulative / contextual application · difficulty: application  
**Prompt:** You're pointing out an object on the other side of the room. Which question best fits?  
**Stimulus:** The object is clearly visible but farther away.  
**Answer:** Options (stable IDs, shuffled visually): `a` Mikä tämä on? · `b` Mikä tuo on? · `c` Mikä se on?. **Accepted:** `b`.  
**Correct feedback:** Mikä tuo on? asks about the object you are pointing out farther away.  
**Incorrect feedback:** `a`: Mikä tämä on? is more natural when it is in the speaker’s immediate focus. `c`: Mikä se on? can refer to a known thing, but this scenario explicitly describes pointing out something farther away.  
**Near feedback:** None (no invented near-answer credit).  
**Not sure:** Use Mikä tuo on? in this particular pointing situation.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.mika`, `vocab.tama`, `vocab.tuo`, `vocab.se`, `phrase.mika-tama-on`. **Scored targets:** `vocab.tuo`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

**A11 — `ex.people-and-things.this-that-it.checkpoint-what`** · `text_input` · cumulative / recall · difficulty: recall  
**Prompt:** Recall the Finnish question word meaning what (or which). Type it.  
**Stimulus:** what? / which?  
**Answer:** Accepted after N1: `mikä`.  
**Correct feedback:** Mikä is the word used in Mikä tämä on?  
**Incorrect feedback:** The question word is mikä.  
**Near feedback:** `mika` → Keep the final ä: mikä.  
**Not sure:** Write mikä.  
**Hint:** none; all relevant context appears in the prompt. **Linked targets:** `vocab.mika`, `phrase.mika-tama-on`. **Scored targets:** `vocab.mika`. **Review eligible:** yes, independently self-contained. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “A few ways to point.”  
**Supporting copy:** “You can now refer to something nearby, point something out farther away, and ask **Mikä tämä on?**. You'll use those words with people next.”  
**What counts:** all required instructional steps visited and A01–A11 (including A10/A11 in the checkpoint) attempted or explicitly marked Not sure. No perfect-score barrier. **Review:** `vocab.tama`, `vocab.tuo`, `vocab.se`, `vocab.mika` and `phrase.mika-tama-on` become eligible as encountered, but only after editorial approval and the existing scheduler’s due logic. No awareness-only note is scored. **Next:** learn to ask **who** someone is.


## Lesson 2.2 — Who is that?

**Metadata:** `lesson.people-and-things.who-is-that`; `unit.people-and-things`; language `fi`; order 2; duration 9–13 minutes. **Goal:** Ask who a person is, understand hän in standard Finnish, and identify a few basic people words. **Prerequisite:** `lesson.people-and-things.this-that-it`. **New production:** `vocab.kuka`, `vocab.han`, `vocab.ihminen`, `vocab.mies`, `vocab.nainen`, `vocab.lapsi`. **Recognition-only:** `vocab.me`, `vocab.te`, `vocab.he`, `vocab.ystava`. **Grammar:** `grammar.kuka-mika-distinction`, `grammar.han-person-reference`. **Phrase:** `phrase.kuka-han-on`. **Review:** `vocab.mika`, `vocab.tama`, `vocab.tuo`, `vocab.mina`, `vocab.sina`. **Pause:** after B03 or B07, with the lesson cursor preserved.

### Ordered learner experience

All steps are required; the spoken note following the table is optional and recognition-only. IDs use the stable prefix `step.people-and-things.who-is-that.`. A required `exercise` or `checkpoint` does not create a vocabulary encounter event.

| # | Step suffix | Type | Exact learner-facing content or authored exercise reference | Formal encounter |
|---:|---|---|---|---|
| 1 | `purpose` | `explanation` | **People, not just things.** “You can ask what something is. Now learn to ask about a person and use a small set of useful people words.” | none |
| 2 | `who-and-one-person` | `vocabulary_intro` | **kuka** — who? **hän** — he/she, one person. “Hän does not mark gender. In standard Finnish writing, use hän when referring to a particular person.” | `vocab.kuka`, `vocab.han` |
| 3 | `who-versus-what` | `grammar_explanation` | **Kuka? = who?** about a person’s identity. **Mikä? = what?** when asking what a thing is. “Context matters in Finnish too: demonstratives can also point to people. This small distinction helps you choose a question here.” | `grammar.kuka-mika-distinction`, `grammar.han-person-reference` |
| 4 | `identify-who` | `exercise` | B01 | none |
| 5 | `recognise-han` | `exercise` | B02 | none |
| 6 | `people-words` | `vocabulary_intro` | **ihminen** — person, human. **mies** — man. **nainen** — woman. **lapsi** — child. “These name different types of people; you need not know how to inflect them yet.” | `vocab.ihminen`, `vocab.mies`, `vocab.nainen`, `vocab.lapsi` |
| 7 | `people-match` | `exercise` | B03 | none |
| 8 | `person-in-context` | `example_set` | **Kuka hän on?** — “Who is he/she?” **Hän on Aino.** — “She is Aino.” **yksi lapsi** — “one child.” **mies ja nainen** — “a man and a woman.” “These short noun phrases reuse Unit 1’s yksi and ja without introducing new grammar. Notice the word **on** (‘is’) inside these useful expressions. Learn the expressions as whole examples for now; no third-person conjugation table is required.” | none |
| 9 | `question-chunk` | `phrase_intro` | **Kuka hän on?** — “Who is that person?” “You can ask who someone is even before learning all the ways Finnish verbs change.” | `phrase.kuka-han-on` |
| 10 | `recall-ihminen` | `exercise` | B04 | none |
| 11 | `recall-mies` | `exercise` | B05 | none |
| 12 | `recall-nainen` | `exercise` | B06 | none |
| 13 | `recall-lapsi` | `exercise` | B07 | none |
| 14 | `recall-han` | `exercise` | B08 | none |
| 15 | `recall-kuka` | `exercise` | B09 | none |
| 16 | `build-who-question` | `exercise` | B10 | none |
| 17 | `recognition-people` | `vocabulary_intro` | **me** — we. **te** — you (more than one person, or polite singular). **he** — they, referring to people in standard Finnish. **ystävä** — friend. “Recognise these now; you are not expected to type them in Finnish yet.” | `vocab.me`, `vocab.te`, `vocab.he`, `vocab.ystava` |
| 18 | `recognise-groups` | `exercise` | B11 | none |
| 19 | `checkpoint` | `checkpoint` | **Someone new.** “Choose the correct question word, then recall one people word.” B12 → B13. | none |

**Optional spoken note, ID `step.people-and-things.who-is-that.spoken-han-se`** (after B02; may be hidden by the Spoken Finnish setting): “You may hear **se** instead of **hän** when people refer to someone in casual conversation. In standard written Finnish, learn **hän** for a particular person. Here, simply recognise that both occur; no extra conjugation task.” Target `spoken.han-se-colloquial`; no independent familiarity score. Do not assert that `se` is never used for people in standard Finnish.

### Fully authored exercises

**B01 — `ex.people-and-things.who-is-that.kuka-person`** · `multiple_choice` · intent recognition · demand guided recognition · difficulty intro  
**Prompt:** You want to ask who an unknown person is. Which word starts that kind of question?  
**Stimulus:** A new person joins your conversation.  
**Answer:** Options (shuffle visually): `a` mikä · `b` kuka · `c` sinä. **Accepted:** `b`.  
**Correct:** Kuka asks who a person is.  
**Incorrect:** `a`: Mikä is the taught ‘what/which’ word; here you are asking about a person’s identity. `c`: Sinä means ‘you’, not the question ‘who?’.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Use kuka for ‘who?’  
**Hint:** null (context already supplied). **Linked:** `vocab.kuka`, `vocab.mika`, `vocab.sina`. **Scored:** `vocab.kuka`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B02 — `ex.people-and-things.who-is-that.han-person`** · `multiple_choice` · intent recognition · demand guided recognition · difficulty intro  
**Prompt:** In standard Finnish, who might hän refer to?  
**Stimulus:** Someone is talking about one person.  
**Answer:** Options (shuffle visually): `a` Only a man · `b` Only a woman · `c` A man or a woman. **Accepted:** `c`.  
**Correct:** Hän refers to one person without marking their gender.  
**Incorrect:** `a`: Hän is not limited to men; Finnish does not distinguish he and she in this pronoun. `b`: Hän is not limited to women; it can refer to any one person.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Hän can mean ‘he’ or ‘she’, depending on context.  
**Hint:** null (context already supplied). **Linked:** `vocab.han`, `grammar.han-person-reference`. **Scored:** `vocab.han`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B03 — `ex.people-and-things.who-is-that.people-match`** · `matching` · intent recognition · demand guided recognition · difficulty guided  
**Prompt:** Match the people words to their meanings.  
**Stimulus:** No separate stimulus.  
**Answer:** Authored pairs, each scored separately: **ihminen** ↔ **a person** (`vocab.ihminen`); **mies** ↔ **a man** (`vocab.mies`); **nainen** ↔ **a woman** (`vocab.nainen`); **lapsi** ↔ **a child** (`vocab.lapsi`). Correct when every chosen pair identity matches; no order constraint.  
**Correct:** Each word names a different kind of person.  
**Incorrect:** Use the specific meaning: person, man, woman or child.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Person = ihminen; man = mies; woman = nainen; child = lapsi.  
**Hint:** null (context already supplied). **Linked:** `vocab.ihminen`, `vocab.mies`, `vocab.nainen`, `vocab.lapsi`. **Scored:** `vocab.ihminen`, `vocab.mies`, `vocab.nainen`, `vocab.lapsi`. **Review eligible:** no, lesson-context board or cue. **Editorial:** `needs_review`.

**B04 — `ex.people-and-things.who-is-that.write-ihminen`** · `text_input` · intent recall · demand cued recall · difficulty recall  
**Prompt:** Recall the general Finnish word for a person. It begins with i.  
**Stimulus:** a person / human  
**Answer:** Accepted under Unit 1 N1 normalisation: `ihminen`.  
**Correct:** Ihminen means a person or human being.  
**Incorrect:** The general word is ihminen.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** The word is ihminen.  
**Hint:** null (context already supplied). **Linked:** `vocab.ihminen`. **Scored:** `vocab.ihminen`. **Review eligible:** no, lesson-context board or cue. **Editorial:** `needs_review`.

**B05 — `ex.people-and-things.who-is-that.write-mies`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish word for man.  
**Stimulus:** man  
**Answer:** Accepted under Unit 1 N1 normalisation: `mies`.  
**Correct:** Mies means a man.  
**Incorrect:** The word for man is mies.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Write mies.  
**Hint:** null (context already supplied). **Linked:** `vocab.mies`. **Scored:** `vocab.mies`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B06 — `ex.people-and-things.who-is-that.write-nainen`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish word for woman.  
**Stimulus:** woman  
**Answer:** Accepted under Unit 1 N1 normalisation: `nainen`.  
**Correct:** Nainen means a woman.  
**Incorrect:** The word for woman is nainen.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Write nainen.  
**Hint:** null (context already supplied). **Linked:** `vocab.nainen`. **Scored:** `vocab.nainen`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B07 — `ex.people-and-things.who-is-that.write-lapsi`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish word for child.  
**Stimulus:** child  
**Answer:** Accepted under Unit 1 N1 normalisation: `lapsi`.  
**Correct:** Lapsi means a child.  
**Incorrect:** The word for child is lapsi.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Write lapsi.  
**Hint:** null (context already supplied). **Linked:** `vocab.lapsi`. **Scored:** `vocab.lapsi`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B08 — `ex.people-and-things.who-is-that.write-han`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the standard Finnish pronoun for he or she.  
**Stimulus:** one person — he/she  
**Answer:** Accepted under Unit 1 N1 normalisation: `hän`.  
**Correct:** Hän is the standard form and it does not mark gender.  
**Incorrect:** The standard pronoun is hän.  
**Near feedback:** `han` → Finnish writes hän with ä; han is not the same form.  
**Not sure:** Write hän, with ä.  
**Hint:** null (context already supplied). **Linked:** `vocab.han`, `grammar.han-person-reference`. **Scored:** `vocab.han`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B09 — `ex.people-and-things.who-is-that.write-kuka`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish question word for who.  
**Stimulus:** who?  
**Answer:** Accepted under Unit 1 N1 normalisation: `kuka`.  
**Correct:** Kuka asks who someone is.  
**Incorrect:** The question word is kuka. Mikä asks what/which.  
**Near feedback:** None. **Specific incorrect feedback for `mikä`:** Mikä asks ‘what/which’ here. Use kuka for a person’s identity.  
**Not sure:** Write kuka.  
**Hint:** null (context already supplied). **Linked:** `vocab.kuka`, `vocab.mika`. **Scored:** `vocab.kuka`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B10 — `ex.people-and-things.who-is-that.build-who-question`** · `token_build` · intent phrase · demand controlled construction · difficulty construction  
**Prompt:** Build the fixed question: Who is that person? Use all three tiles.  
**Stimulus:** Who is he/she? (The words are provided; you are not being tested on forming on.)  
**Answer:** Shuffled tiles: hän / on / Kuka. Accepted: `Kuka hän on?`.  
**Correct:** Kuka hän on? asks who the person is.  
**Incorrect:** The taught word order is Kuka → hän → on?  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Place Kuka first: Kuka hän on?  
**Hint:** null (context already supplied). **Linked:** `vocab.kuka`, `vocab.han`, `phrase.kuka-han-on`. **Scored:** `phrase.kuka-han-on`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B11 — `ex.people-and-things.who-is-that.recognise-pronoun-group`** · `matching` · intent recognition · demand guided recognition · difficulty recognition-only  
**Prompt:** Match these recognition-only words to their meanings.  
**Stimulus:** No separate stimulus.  
**Answer:** Authored pairs, each scored separately: **me** ↔ **we** (`vocab.me`); **te** ↔ **you — a group or polite form** (`vocab.te`); **he** ↔ **they — people** (`vocab.he`); **ystävä** ↔ **a friend** (`vocab.ystava`). Correct when every chosen pair identity matches; no order constraint.  
**Correct:** These forms refer to groups or a friend. You only need to recognise them for now.  
**Incorrect:** Use the meaning and number of people: we, you, they, or friend.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Me = we; te = plural/polite you; he = they; ystävä = friend.  
**Hint:** null (context already supplied). **Linked:** `vocab.me`, `vocab.te`, `vocab.he`, `vocab.ystava`. **Scored:** `vocab.me`, `vocab.te`, `vocab.he`, `vocab.ystava`. **Review eligible:** no, lesson-context board or cue. **Editorial:** `needs_review`.

**B12 — `ex.people-and-things.who-is-that.checkpoint-who-not-what`** · `multiple_choice` · intent cumulative · demand contextual application · difficulty application  
**Prompt:** A friend introduces someone you have not met. Which Finnish question is about the person's identity?  
**Stimulus:** You want to know who this person is.  
**Answer:** Options (shuffle visually): `a` Mikä tämä on? · `b` Kuka hän on? · `c` Entä sinä?. **Accepted:** `b`.  
**Correct:** Kuka hän on? is a question about who the person is.  
**Incorrect:** `a`: Mikä tämä on? asks what something is in the taught object context. `c`: Entä sinä? means ‘And you?’; it does not ask who someone is.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Use Kuka hän on? for an unknown person.  
**Hint:** null (context already supplied). **Linked:** `phrase.kuka-han-on`, `phrase.mika-tama-on`, `phrase.enta-sina`. **Scored:** `phrase.kuka-han-on`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B13 — `ex.people-and-things.who-is-that.checkpoint-child`** · `text_input` · intent cumulative · demand recall · difficulty recall  
**Prompt:** Recall the Finnish word for child.  
**Stimulus:** child  
**Answer:** Accepted under Unit 1 N1 normalisation: `lapsi`.  
**Correct:** Lapsi is the word for child.  
**Incorrect:** The word is lapsi.  
**Near feedback:** None; don't guess at near synonyms.  
**Not sure:** Write lapsi.  
**Hint:** null (context already supplied). **Linked:** `vocab.lapsi`. **Scored:** `vocab.lapsi`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

### Lesson completion and handoff

**Headline:** “You can ask about someone.” **Copy:** “You can ask **Kuka hän on?** and recognise basic words for people. Some group pronouns are here for recognition; you don't need to write them yet.” **Completion:** all required steps visited; B01–B13, including B12–B13 checkpoint, attempted or answered Not sure; no perfection gate. **Review:** the six production targets and fixed question chunk become eligible from their formal encounters (subject to existing scheduled Review/editorial gating). Recognition-only `me, te, he, ystävä` are comprehension-only. **Next:** name languages and say which one you speak.


## Lesson 2.3 — Finnish and English

**Metadata:** `lesson.people-and-things.finnish-and-english`; `unit.people-and-things`; language `fi`; order 3; approximately **9–13 minutes**, with a pause after C09 if needed. **Goal:** distinguish languages from nationalities and say which language you speak. **Prerequisite:** `lesson.people-and-things.who-is-that`. **New production:** `vocab.kieli`, `vocab.suomi`, `vocab.englanti`, `vocab.suomalainen`, `vocab.puhua`. **New recognition:** `vocab.hyvin`, `vocab.maa`. **Phrase:** `phrase.puhun-language`; `phrase.puhutko-suomea` recognised now, question structure explained in 2.5. **Reused:** Unit 1 introductions and `vocab.olla`, `vocab.minä`, plus Unit 2 `vocab.kuka`, `vocab.hän`. **Explicitly deferred:** partitive case morphology, country locative-case formation, full conjugation.

### Ordered learner experience

Every step required. The step ID prefix is `step.people-and-things.finnish-and-english.`, followed by the exact suffix below. A vocabulary/phrase introduction with encounter targets records one encounter per target; exercises never create new formal encounters.

| # | Step suffix | Type | Exact learner-facing content or exercise reference | Formal encounter |
|---:|---|---|---|---|
| 1 | `new-conversation` | `explanation` | **Which language do you speak?** “You can already say who you are. Add one useful sentence about language; you do not need to learn Finnish noun cases first.” | none |
| 2 | `language-names` | `vocabulary_intro` | **kieli** — language. **suomi** — Finnish (the language). **englanti** — English (the language). “The country name **Suomi** is written with a capital S; the language **suomi** normally has a lowercase s.” | `vocab.kieli`, `vocab.suomi`, `vocab.englanti` |
| 3 | `recognise-kieli` | `exercise` | C01 | none |
| 4 | `match-language-words` | `exercise` | C02 | none |
| 5 | `recall-kieli` | `exercise` | C03 | none |
| 6 | `recall-suomi` | `exercise` | C04 | none |
| 7 | `recall-englanti` | `exercise` | C05 | none |
| 8 | `finnish-person` | `vocabulary_intro` | **suomalainen** — a Finnish person; also an adjective meaning Finnish. “It is not the name of the Finnish language. A person can be **suomalainen**; the language is **suomi**.” | `vocab.suomalainen` |
| 9 | `recall-suomalainen` | `exercise` | C06 | none |
| 10 | `speak-verb` | `vocabulary_intro` | **puhua** — to speak. “With **I**, learn the useful form **puhun** (‘I speak’). Both belong to the same verb. We are not learning its entire conjugation table yet.” | `vocab.puhua` |
| 11 | `recall-puhua` | `exercise` | C07 | none |
| 12 | `puhun-language` | `phrase_intro` | **Puhun suomea.** — “I speak Finnish.” **Puhun englantia.** — “I speak English.” “These are practical sentences to learn together. The endings on the language words belong to these expressions; do not swap **suomi** for **suomea** in this sentence.” | `phrase.puhun-language` |
| 13 | `build-speaking` | `exercise` | C08 | none |
| 14 | `recall-speaking` | `exercise` | C09 | none |
| 15 | `introduced-yourself` | `example_set` | “**Hei! Olen Aino. Puhun suomea.**” — “Hello! I'm Aino. I speak Finnish.” “The introduction grows from something you already know, rather than starting from scratch.” | none |
| 16 | `two-recognition-words` | `vocabulary_intro` | **hyvin** — well. **maa** — country, land. “You can recognise **Puhun suomea hyvin.** (‘I speak Finnish well.’). Here **hyvin** tells you how well. **Maa** means a country or land; you will not have to spell these from memory yet.” | `vocab.hyvin`, `vocab.maa` |
| 17 | `recognise-hyvin-maa` | `exercise` | C10 | none |
| 18 | `hear-the-question` | `phrase_intro` | **Puhutko suomea?** — “Do you speak Finnish?” “For now, recognise the whole question. In Lesson 2.5 you'll learn how its question ending works.” | `phrase.puhutko-suomea` |
| 19 | `recognise-question` | `exercise` | C11 | none |
| 20 | `checkpoint` | `checkpoint` | **Say a little more.** “Retrieve your own language sentence, then distinguish a person from a language.” C12 → C13. | none |

### Fully authored exercises

**C01 — `ex.people-and-things.finnish-and-english.recognise-kieli`** · `multiple_choice` · recognition / guided recognition · difficulty intro  
**Prompt:** What does kieli mean in this lesson?  
**Stimulus:** kieli  
**Answer:** Options: `a` person · `b` language · `c` name (shuffle). Accepted ID: `b`.  
**Correct feedback:** Kieli means a language.  
**Incorrect feedback:** `a`: Person is ihminen. Kieli means language. `c`: Name is nimi, from Unit 1. Kieli means language.  
**Near feedback:** None.  
**Not sure:** Kieli means language.  
**Hint:** null. **Linked:** `vocab.kieli`, `vocab.ihminen`, `vocab.nimi`. **Scored:** `vocab.kieli`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C02 — `ex.people-and-things.finnish-and-english.match-language-dictionary-forms`** · `matching` · recognition / guided recognition · difficulty guided  
**Prompt:** Match the Finnish dictionary words with their meanings.  
**Stimulus:** Language names, not inflected forms used after puhun.  
**Answer:** Matching pairs, each independently scored: **suomi** ↔ **the Finnish language** (`vocab.suomi`); **englanti** ↔ **the English language** (`vocab.englanti`); **kieli** ↔ **a language** (`vocab.kieli`). Correct identities only.  
**Correct feedback:** Suomi and englanti are language names. Kieli means language.  
**Incorrect feedback:** Match the dictionary forms: suomi is Finnish, englanti is English, kieli is language.  
**Near feedback:** None.  
**Not sure:** suomi = Finnish; englanti = English; kieli = language.  
**Hint:** null. **Linked:** `vocab.suomi`, `vocab.englanti`, `vocab.kieli`. **Scored:** `vocab.suomi`, `vocab.englanti`, `vocab.kieli`. **Review eligible:** no, lesson-local or matching board. **Editorial:** `needs_review`.

**C03 — `ex.people-and-things.finnish-and-english.retrieve-kieli`** · `text_input` · recall / controlled production · difficulty recall  
**Prompt:** Type the Finnish word for language.  
**Stimulus:** language  
**Answer:** Accepted under N1 normalisation: `kieli`.  
**Correct feedback:** Kieli is a language.  
**Incorrect feedback:** The word is kieli.  
**Near feedback:** None.  
**Not sure:** Write kieli.  
**Hint:** null. **Linked:** `vocab.kieli`. **Scored:** `vocab.kieli`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C04 — `ex.people-and-things.finnish-and-english.retrieve-suomi`** · `text_input` · recall / controlled production · difficulty recall  
**Prompt:** Type the Finnish dictionary form for the Finnish language, not the form after puhun.  
**Stimulus:** Finnish — language name, dictionary form  
**Answer:** Accepted under N1 normalisation: `suomi`.  
**Correct feedback:** Suomi is the language's dictionary name; after puhun, the phrase uses suomea.  
**Incorrect feedback:** The dictionary form is suomi. Puhun suomea uses a different form.  
**Near feedback:** None.  
**Not sure:** Write suomi.  
**Hint:** null. **Linked:** `vocab.suomi`. **Scored:** `vocab.suomi`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C05 — `ex.people-and-things.finnish-and-english.retrieve-englanti`** · `text_input` · recall / controlled production · difficulty recall  
**Prompt:** Type the Finnish dictionary form for the English language.  
**Stimulus:** English — language name, dictionary form  
**Answer:** Accepted under N1 normalisation: `englanti`.  
**Correct feedback:** Englanti is the dictionary form. You'll later use englantia after puhun.  
**Incorrect feedback:** The language name is englanti.  
**Near feedback:** None.  
**Not sure:** Write englanti.  
**Hint:** null. **Linked:** `vocab.englanti`. **Scored:** `vocab.englanti`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C06 — `ex.people-and-things.finnish-and-english.retrieve-suomalainen`** · `text_input` · recall / controlled production · difficulty recall  
**Prompt:** Type the Finnish word for a Finnish person (a Finn).  
**Stimulus:** Finnish person — not language name  
**Answer:** Accepted under N1 normalisation: `suomalainen`.  
**Correct feedback:** Suomalainen can mean a Finn or serve as the adjective Finnish.  
**Incorrect feedback:** A Finnish person is suomalainen. The language is suomi.  
**Near feedback:** None.  
**Not sure:** Write suomalainen.  
**Hint:** null. **Linked:** `vocab.suomalainen`, `vocab.suomi`. **Scored:** `vocab.suomalainen`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C07 — `ex.people-and-things.finnish-and-english.retrieve-puhua`** · `text_input` · recall / controlled production · difficulty recall  
**Prompt:** Type the Finnish dictionary verb meaning to speak.  
**Stimulus:** to speak — basic dictionary form  
**Answer:** Accepted under N1 normalisation: `puhua`.  
**Correct feedback:** Puhua means to speak. Puhun means I speak.  
**Incorrect feedback:** The dictionary form is puhua. Puhun is the taught I-form.  
**Near feedback:** None.  
**Not sure:** Write puhua.  
**Hint:** null. **Linked:** `vocab.puhua`. **Scored:** `vocab.puhua`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C08 — `ex.people-and-things.finnish-and-english.build-puhun-suomea`** · `token_build` · phrase / controlled construction · difficulty construction  
**Prompt:** Build the sentence I speak Finnish. Use both tiles.  
**Stimulus:** I speak Finnish.  
**Answer:** Tokens: suomea / Puhun (shuffle). Accepted assembled: `Puhun suomea.`.  
**Correct feedback:** Puhun suomea. is the phrase for I speak Finnish.  
**Incorrect feedback:** Use Puhun first, then suomea; the full phrase is Puhun suomea.  
**Near feedback:** None.  
**Not sure:** Arrange Puhun → suomea.  
**Hint:** null. **Linked:** `vocab.puhua`, `vocab.suomi`, `phrase.puhun-language`. **Scored:** `phrase.puhun-language`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C09 — `ex.people-and-things.finnish-and-english.recall-puhun-englantia`** · `text_input` · phrase / controlled production · difficulty recall  
**Prompt:** Type the taught sentence: I speak English.  
**Stimulus:** I speak English. (Use the language form that follows puhun.)  
**Answer:** Accepted under N1 normalisation: `Puhun englantia.`, `Minä puhun englantia.`.  
**Correct feedback:** Puhun englantia. uses the correct language form after puhun.  
**Incorrect feedback:** Use Puhun englantia. The dictionary form englanti becomes englantia in this expression.  
**Near feedback:** `puhun englanti`: The phrase needs englantia after puhun, not the dictionary form englanti.  
**Not sure:** Write Puhun englantia.  
**Hint:** null. **Linked:** `vocab.puhua`, `vocab.englanti`, `phrase.puhun-language`, `vocab.mina`. **Scored:** `phrase.puhun-language`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C10 — `ex.people-and-things.finnish-and-english.recognise-maa-hyvin`** · `matching` · recognition / guided recognition · difficulty recognition only  
**Prompt:** Match the two recognition words to their meanings.  
**Stimulus:** The prompt alone.  
**Answer:** Matching pairs, each independently scored: **hyvin** ↔ **well (how well)** (`vocab.hyvin`); **maa** ↔ **country or land** (`vocab.maa`). Correct identities only.  
**Correct feedback:** Hyvin tells how well; maa names a country or land.  
**Incorrect feedback:** Hyvin describes manner; maa is a place/land concept.  
**Near feedback:** None.  
**Not sure:** hyvin = well; maa = country or land.  
**Hint:** null. **Linked:** `vocab.hyvin`, `vocab.maa`. **Scored:** `vocab.hyvin`, `vocab.maa`. **Review eligible:** no, lesson-local or matching board. **Editorial:** `needs_review`.

**C11 — `ex.people-and-things.finnish-and-english.recognise-puhutko`** · `multiple_choice` · recognition / guided recognition · difficulty recognition only  
**Prompt:** Someone asks Puhutko suomea? What are they asking?  
**Stimulus:** Puhutko suomea?  
**Answer:** Options: `a` Do you speak Finnish? · `b` I speak Finnish. · `c` I live in Finland. (shuffle). Accepted ID: `a`.  
**Correct feedback:** Puhutko suomea? asks whether you speak Finnish.  
**Incorrect feedback:** `b`: The statement ‘I speak Finnish’ is Puhun suomea. This is a question addressed to you. `c`: A living-location statement uses asua; this question is about speaking a language.  
**Near feedback:** None.  
**Not sure:** It means ‘Do you speak Finnish?’ The question ending comes later.  
**Hint:** null. **Linked:** `phrase.puhutko-suomea`, `phrase.puhun-language`. **Scored:** `phrase.puhutko-suomea`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C12 — `ex.people-and-things.finnish-and-english.checkpoint-puhun-suomea`** · `text_input` · cumulative / contextual application · difficulty application  
**Prompt:** You're introducing yourself. Type the Finnish sentence: I speak Finnish.  
**Stimulus:** I speak Finnish. (A separate sentence after Olen Aino.)  
**Answer:** Accepted under N1 normalisation: `Puhun suomea.`, `Minä puhun suomea.`.  
**Correct feedback:** Puhun suomea. adds a useful fact to your introduction.  
**Incorrect feedback:** Use Puhun suomea. The language word changes to suomea after puhun.  
**Near feedback:** `puhun suomi`: Use suomea, not suomi, after puhun.  
**Not sure:** Write Puhun suomea.  
**Hint:** null. **Linked:** `vocab.puhua`, `vocab.suomi`, `phrase.puhun-language`, `phrase.olen-slot`. **Scored:** `phrase.puhun-language`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

**C13 — `ex.people-and-things.finnish-and-english.checkpoint-finnish-person`** · `multiple_choice` · cumulative / contextual recognition · difficulty application  
**Prompt:** You are describing a person as Finnish. Which word is about the person rather than the language?  
**Stimulus:** A Finnish person  
**Answer:** Options: `a` suomi · `b` suomalainen · `c` suomea (shuffle). Accepted ID: `b`.  
**Correct feedback:** Suomalainen can describe a Finnish person; suomi names the language.  
**Incorrect feedback:** `a`: Suomi is the language name (or the country name with capital letter), not the word for a Finnish person. `c`: Suomea is a form used in phrases like Puhun suomea. It is not the person descriptor.  
**Near feedback:** None.  
**Not sure:** Use suomalainen for a Finnish person.  
**Hint:** null. **Linked:** `vocab.suomi`, `vocab.suomalainen`, `phrase.puhun-language`. **Scored:** `vocab.suomalainen`. **Review eligible:** yes, independent. **Editorial:** `needs_review`.

### Lesson completion and review handoff

**Headline:** “A little more about you.” **Copy:** “You can now say **Puhun suomea** and **Puhun englantia**, and tell the difference between a language and a person. Next you'll add where you live.” **Completion:** all required steps and C01–C13, including C12/C13 checkpoint, attempted or answered Not sure; no perfect score. **New Review-eligible targets:** the five production lemmas (after introduction) and the encountered phrase targets, with their own review-eligible exercise records. Recognition `vocab.hyvin` and `vocab.maa` receive comprehension-only outcomes. `Puhutko suomea?` is a fixed recognition item at this stage, not a production test of `-ko/-kö`.


## Lesson 2.4 — Where you live

**Metadata:** `lesson.people-and-things.where-you-live`; unit `unit.people-and-things`; `fi`; order 4; **5–8 minutes**. **Objective:** Use `asun` to say where you live and combine it with a language statement. **Prerequisite:** `lesson.people-and-things.finnish-and-english`. **New production:** `vocab.asua` (teaching form `asun`). **New recognition:** none. **Phrase:** `phrase.asun-suomessa` (fixed, with `Minä` optionally present). **Reused:** `phrase.puhun-language`, `phrase.olen-slot`, Unit 1 greetings and pronouns. **Grammar:** practical first-person `asun` without a general conjugation or locative-case lesson. All required, no additional spoken-note step.

### Ordered learner experience

All IDs use prefix `step.people-and-things.where-you-live.`. Required exercise or checkpoint steps are attempts; they do not add new formal encounters.

| # | Step suffix | Type | Exact learner-facing copy / exercise IDs | Formal encounter |
|---:|---|---|---|---|
| 1 | `next-detail` | `explanation` | **Where you live.** “You can introduce yourself and say what language you speak. Add one more useful fact: where you live.” | none |
| 2 | `asua` | `vocabulary_intro` | **asua** — to live, to reside. **asun** — I live. “The second word is the form you need when talking about yourself. It belongs to asua; do not memorise a full verb chart yet.” | `vocab.asua` |
| 3 | `recognise-asua` | `exercise` | D01 | none |
| 4 | `recall-asua` | `exercise` | D02 | none |
| 5 | `compare-speaking-living` | `example_set` | **Puhun suomea.** — I speak Finnish. **Asun Suomessa.** — I live in Finland. “The first says what language you speak; the second says where you live. Notice that **suomea** and **Suomessa** have different forms and meanings. The patterns, not the case rules, are what you need now.” | none |
| 6 | `living-chunk` | `phrase_intro` | **Asun Suomessa.** — “I live in Finland.” “Learn it as a useful complete phrase. You can also say **Minä asun Suomessa.** The word **Suomessa** belongs to this location phrase; we will explain broader place endings later.” | `phrase.asun-suomessa` |
| 7 | `recognise-asun` | `exercise` | D03 | none |
| 8 | `build-living` | `exercise` | D04 | none |
| 9 | `recall-living` | `exercise` | D05 | none |
| 10 | `model-introduction` | `example_set` | **Hei! Olen Leo. Puhun englantia. Asun Suomessa.** — “Hi! I'm Leo. I speak English. I live in Finland.” “These short sentences are enough for a basic personal introduction; there is no need to use a new question form yet.” | none |
| 11 | `choose-situation` | `exercise` | D06 | none |
| 12 | `build-two-facts` | `exercise` | D07 | none |
| 13 | `checkpoint` | `checkpoint` | **One sentence from memory.** “Say where you live, then identify which sentence is about language.” D08 → D09. | none |

### Fully authored exercises

**D01 — `ex.people-and-things.where-you-live.recognise-asua`** · `multiple_choice` · recognition / guided recognition · difficulty intro  
**Prompt:** What does the dictionary verb asua mean?  
**Stimulus:** asua  
**Answer:** Options: `a` to be · `b` to speak · `c` to live (shuffle). Accepted: `c`.  
**Correct feedback:** Asua means to live or reside.  
**Incorrect feedback:** `a`: Olla means to be. Asua means to live. `b`: Puhua means to speak; asua means to live.  
**Near feedback:** None.  
**Not sure:** Asua = to live.  
**Hint:** null. **Linked:** `vocab.asua`, `vocab.puhua`, `vocab.olla`. **Scored:** `vocab.asua`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**D02 — `ex.people-and-things.where-you-live.recall-asua`** · `text_input` · recall / controlled production · difficulty recall  
**Prompt:** Type the Finnish dictionary verb for to live.  
**Stimulus:** to live / reside  
**Answer:** Accepted after N1: `asua`.  
**Correct feedback:** Asua is the dictionary form; asun is the I-form.  
**Incorrect feedback:** The basic form is asua.  
**Near feedback:** None.  
**Not sure:** Write asua.  
**Hint:** null. **Linked:** `vocab.asua`. **Scored:** `vocab.asua`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**D03 — `ex.people-and-things.where-you-live.asun-versus-puhun`** · `multiple_choice` · grammar / guided recognition · difficulty intro  
**Prompt:** Which Finnish form says I live?  
**Stimulus:** I live  
**Answer:** Options: `a` asun · `b` puhun · `c` olen (shuffle). Accepted: `a`.  
**Correct feedback:** Asun means ‘I live’. Puhun means ‘I speak’.  
**Incorrect feedback:** `b`: Puhun means I speak. Asun is the I-form for live. `c`: Olen means I am. Asun means I live.  
**Near feedback:** None.  
**Not sure:** Use asun for ‘I live’.  
**Hint:** null. **Linked:** `vocab.asua`, `vocab.puhua`, `vocab.olla`. **Scored:** `vocab.asua`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**D04 — `ex.people-and-things.where-you-live.build-asun-suomessa`** · `token_build` · phrase / controlled construction · difficulty construction  
**Prompt:** Arrange the tiles to say I live in Finland.  
**Stimulus:** I live in Finland.  
**Answer:** Shuffled tokens: Suomessa / Asun. Accepted assembled: `Asun Suomessa.`.  
**Correct feedback:** Asun Suomessa. is the complete location sentence.  
**Incorrect feedback:** Put Asun first, then Suomessa: Asun Suomessa.  
**Near feedback:** None.  
**Not sure:** Asun → Suomessa.  
**Hint:** null. **Linked:** `vocab.asua`, `vocab.suomi`, `phrase.asun-suomessa`. **Scored:** `phrase.asun-suomessa`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**D05 — `ex.people-and-things.where-you-live.recall-living`** · `text_input` · phrase / controlled production · difficulty recall  
**Prompt:** Type the Finnish sentence: I live in Finland.  
**Stimulus:** I live in Finland.  
**Answer:** Accepted after N1: `Asun Suomessa.`, `Minä asun Suomessa.`.  
**Correct feedback:** Asun Suomessa. says where you live.  
**Incorrect feedback:** Use Asun Suomessa. The country form is Suomessa in this sentence.  
**Near feedback:** `asun suomea` → Suomea is used after puhun for the Finnish language. For living in Finland, write Suomessa.  
**Not sure:** Write Asun Suomessa.  
**Hint:** null. **Linked:** `vocab.asua`, `vocab.suomi`, `phrase.asun-suomessa`, `vocab.mina`. **Scored:** `phrase.asun-suomessa`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**D06 — `ex.people-and-things.where-you-live.choose-location-sentence`** · `multiple_choice` · recognition / contextual recognition · difficulty application  
**Prompt:** A new colleague asks in English where you live. Which Finnish sentence answers that question?  
**Stimulus:** Where do you live?  
**Answer:** Options: `a` Olen Leo. · `b` Asun Suomessa. · `c` Puhun suomea. (shuffle). Accepted: `b`.  
**Correct feedback:** Asun Suomessa. answers where you live.  
**Incorrect feedback:** `a`: Olen Leo. gives your name, not where you live. `c`: Puhun suomea. says which language you speak, not where you live.  
**Near feedback:** None.  
**Not sure:** Answer with Asun Suomessa.  
**Hint:** null. **Linked:** `phrase.asun-suomessa`, `phrase.puhun-language`, `phrase.olen-slot`. **Scored:** `phrase.asun-suomessa`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**D07 — `ex.people-and-things.where-you-live.two-fact-introduction`** · `text_input` · cumulative / contextual application · difficulty capability application  
**Prompt:** Introduce two facts in this order: I speak Finnish. I live in Finland. Type the two taught Finnish sentences.  
**Stimulus:** 1. I speak Finnish. 2. I live in Finland. Do not include a name or greeting.  
**Answer:** Accepted after N1: `Puhun suomea. Asun Suomessa.`, `Minä puhun suomea. Asun Suomessa.`, `Puhun suomea. Minä asun Suomessa.`, `Minä puhun suomea. Minä asun Suomessa.`.  
**Correct feedback:** You combined two useful facts into one small introduction.  
**Incorrect feedback:** Keep the order: Puhun suomea. Asun Suomessa. Check the different language and location forms.  
**Near feedback:** `puhun suomessa asun suomea` → The forms are reversed. Speak a language: suomea. Live in Finland: Suomessa.  
**Not sure:** The two sentences are Puhun suomea. Asun Suomessa.  
**Hint:** null. **Linked:** `vocab.puhua`, `vocab.asua`, `vocab.suomi`, `phrase.puhun-language`, `phrase.asun-suomessa`. **Scored:** none; `knowledgeScoring: false`, capability evidence only. **Review eligible:** no, capability or lesson-specific activity. **Editorial:** `needs_review`.

**D08 — `ex.people-and-things.where-you-live.checkpoint-location`** · `text_input` · cumulative / recall · difficulty recall  
**Prompt:** Without tiles, type a Finnish sentence saying that you live in Finland.  
**Stimulus:** I live in Finland.  
**Answer:** Accepted after N1: `Asun Suomessa.`, `Minä asun Suomessa.`.  
**Correct feedback:** Asun Suomessa. is a complete statement about where you live.  
**Incorrect feedback:** Remember Asun for I live, and Suomessa for in Finland.  
**Near feedback:** None.  
**Not sure:** Write Asun Suomessa.  
**Hint:** null. **Linked:** `vocab.asua`, `vocab.suomi`, `phrase.asun-suomessa`, `vocab.mina`. **Scored:** `phrase.asun-suomessa`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**D09 — `ex.people-and-things.where-you-live.checkpoint-language-v-location`** · `multiple_choice` · cumulative / contextual recognition · difficulty application  
**Prompt:** Which sentence is specifically about speaking a language, rather than living somewhere?  
**Stimulus:** Choose the language statement.  
**Answer:** Options: `a` Asun Suomessa. · `b` Olen Leo. · `c` Puhun englantia. (shuffle). Accepted: `c`.  
**Correct feedback:** Puhun englantia. is about speaking English.  
**Incorrect feedback:** `a`: Asun Suomessa. is about where someone lives. `b`: Olen Leo. tells someone's name.  
**Near feedback:** None.  
**Not sure:** The language statement is Puhun englantia.  
**Hint:** null. **Linked:** `phrase.puhun-language`, `phrase.asun-suomessa`, `phrase.olen-slot`. **Scored:** `phrase.puhun-language`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “One more detail about you.” **Copy:** “You can now say **Asun Suomessa** and combine it with **Puhun suomea**. In the next lesson, you'll ask yes/no questions and make a simple negative statement.” **Completion:** all required steps and D01–D09, including D08/D09 checkpoint, attempted or explicitly Not sure. No perfect-score threshold. **Review:** `vocab.asua` and `phrase.asun-suomessa` become Review-eligible after formal encounter; D07 is capability-only and does not silently score both phrases. `Suomessa` is an authored phrase form rather than a newly invented vocabulary lemma. **Next:** questions and no.


## Lesson 2.5 — Questions and no

**Metadata:** `lesson.people-and-things.questions-and-no`; unit `unit.people-and-things`; language `fi`; order 5; estimated **12–18 minutes**, with a pause before the final checkpoint. **Capability:** recognise and form simple yes/no questions and a few first-person negatives. **Prerequisite:** `lesson.people-and-things.where-you-live`. **New production:** `vocab.ei` (with taught forms en and short reply ei). **New recognition:** `vocab.miten`. **Grammar:** `grammar.yes-no-ko-ko`, `grammar.negative-en`. **Phrase:** `phrase.en-puhu-language`; production-level use of the previously introduced `phrase.puhutko-suomea`. **Reuses:** Unit 1 greetings, pronouns and introduction, and all Unit 2 lessons. **Deferred:** full negation, verb tables, general case formation and arbitrary question-suffix rules.

### Ordered learner experience

Step IDs use prefix `step.people-and-things.questions-and-no.` followed by suffix below. All listed steps are required. The checkpoint contains eight fully authored exercises E09–E16, not a separate sixth lesson. A long lesson can be paused before the checkpoint; resume preserves step and completed responses.

| # | Step suffix | Step type | Exact learner-facing copy / referenced exercise | First encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **A question and a simple no.** You can say who you are, which language you speak, and where you live. Now you can ask whether something is true — and say when it is not. | none |
| 2 | `question-patterns` | `grammar_explanation` | **Questions with -ko/-kö.** For the three forms in this lesson: on → onko (is it?), olet → oletko (are you?), puhut → puhutko (do you speak?). This suffix attaches to the verb and its question form comes first. Learn these examples: **Onko hän suomalainen?** (Is he/she Finnish?), **Oletko suomalainen?** (Are you Finnish?), **Puhutko suomea?** (Do you speak Finnish?). **Kyllä. / Joo.** = “Yes”, two positive answers learned in Unit 1. Puhut is the you-form used here; you do not need its full conjugation table. | `grammar.yes-no-ko-ko` |
| 3 | `question-choice` | `exercise` | E01 | none |
| 4 | `question-form` | `exercise` | E02 | none |
| 5 | `question-recall` | `exercise` | E03 | none |
| 6 | `negative-forms` | `grammar_explanation` | **A simple negative.** Finnish has a negative verb: en (I don't), et (you don't), ei (he/she/it doesn't, also ‘no’ as a short answer). We will produce **en** with two verbs: **Puhun suomea → En puhu suomea.** **Asun Suomessa → En asu Suomessa.** After en, use puhu or asu here — not puhun or asun. The full negative paradigm can wait. | `grammar.negative-en` |
| 7 | `ei-introduction` | `vocabulary_intro` | **ei** — no/not, the dictionary form of the negative verb. **Ei.** can be a one-word reply meaning “No.” For “I don't speak,” use **En puhu**; ei and en are not interchangeable within the same sentence. | `ei` |
| 8 | `negative-phrase` | `phrase_intro` | **En puhu …** — “I don't speak …” **En puhu suomea.** — “I don't speak Finnish.” **En puhu englantia.** — “I don't speak English.” “Learn this short negative phrase with an unchanged language word; en goes before puhu.” | `phrase.en-puhu-language` |
| 9 | `negative-recognition` | `exercise` | E04 | none |
| 10 | `negative-speaking` | `exercise` | E05 | none |
| 11 | `negative-living` | `exercise` | E06 | none |
| 12 | `recall-ei` | `exercise` | E07 | none |
| 13 | `how-question` | `vocabulary_intro` | **miten** — how. **Miten menee?** means “How's it going?” in everyday greetings. Recognise the full phrase for now; you are not expected to produce or analyse menee. | `miten` |
| 14 | `recognise-miten` | `exercise` | E08 | none |
| 15 | `full-example` | `example_set` | **Aino:** Hei! Olen Aino. Asun Suomessa. Puhun englantia. **Leo:** Puhutko suomea? **Aino:** Ei, en puhu suomea. **Leo:** Kiitos! The conversation uses your existing words to communicate something real. | none |
| 16 | `checkpoint` | `checkpoint` | **What can you say now?** These eight questions cover the whole unit and a little from Unit 1. Attempt them; a perfect score is not required. Exercises E09, E10, E11, E12, E13, E14, E15, E16. | none |

**Role note:** `phrase.puhutko-suomea` was first encountered in 2.3 as a whole recognition chunk; it is not marked NEW again. Here the learner first encounters `grammar.yes-no-ko-ko` before the form is assessed productively. `ei` remains **one** canonical lemma; en/et/ei are forms, not three unrelated vocabulary entries. The productive focus is en plus a short ei response. `miten` remains recognition-only.

### Fully authored exercises

**E01 — `ex.people-and-things.questions-and-no.recognise-yes-no`** · `multiple_choice` · intent grammar / demand recognition  
**Prompt:** Which sentence asks someone whether they speak Finnish?  
**Stimulus:** Question addressed to another person  
**Answer:** Options (visually shuffled): `a` Puhun suomea. · `b` Puhutko suomea? · `c` Asun Suomessa.. Accepted option ID: `b`.  
**Correct feedback:** Puhutko suomea? is the yes/no question with -ko.  
**Incorrect feedback:** `a`: Puhun suomea. is a statement meaning I speak Finnish. `c`: Asun Suomessa. tells where the speaker lives.  
**Near feedback:** None.  
**Not sure:** The question is Puhutko suomea?  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `grammar.yes-no-ko-ko`, `phrase.puhutko-suomea`, `phrase.puhun-language`. **Scored:** `grammar.yes-no-ko-ko`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E02 — `ex.people-and-things.questions-and-no.oletko-form`** · `text_input` · intent grammar / demand controlled production  
**Prompt:** Turn the taught form olet into its yes/no question form. Type one word.  
**Stimulus:** olet → ? (Are you…?)  
**Answer:** Accepted after N1 text normalization: `oletko`.  
**Correct feedback:** Oletko is the question form of olet.  
**Incorrect feedback:** Add -ko to olet: oletko.  
**Near feedback:** `olet` → Olet is a statement form; add -ko. `oletkö` → With olet the suffix is -ko: oletko.  
**Not sure:** Write oletko.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `grammar.yes-no-ko-ko`, `vocab.olla`. **Scored:** `grammar.yes-no-ko-ko`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E03 — `ex.people-and-things.questions-and-no.puhutko-suomea`** · `text_input` · intent phrase / demand controlled production  
**Prompt:** Type: Do you speak Finnish? Use the taught word puhutko.  
**Stimulus:** Do you speak Finnish?  
**Answer:** Accepted after N1 text normalization: `Puhutko suomea?`.  
**Correct feedback:** Puhutko suomea? asks whether the other person speaks Finnish.  
**Incorrect feedback:** Use Puhutko suomea? The question ending stays attached to puhut.  
**Near feedback:** `puhunko suomea` → Puhunko would ask whether I speak Finnish. You need puhutko.  
**Not sure:** Write Puhutko suomea?  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `phrase.puhutko-suomea`, `grammar.yes-no-ko-ko`, `vocab.puhua`, `vocab.suomi`. **Scored:** `phrase.puhutko-suomea`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E04 — `ex.people-and-things.questions-and-no.negative-recognition`** · `multiple_choice` · intent grammar / demand recognition  
**Prompt:** Which sentence means I don't speak Finnish?  
**Stimulus:** I do not speak Finnish.  
**Answer:** Options (visually shuffled): `a` En puhun suomea. · `b` En puhu suomea. · `c` Puhun suomea.. Accepted option ID: `b`.  
**Correct feedback:** En puhu suomea. uses en and the form puhu.  
**Incorrect feedback:** `a`: After en use puhu, not puhun. `c`: Puhun suomea. is affirmative; it does not say no.  
**Near feedback:** None.  
**Not sure:** The negative is En puhu suomea.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `grammar.negative-en`, `vocab.puhua`, `phrase.en-puhu-language`. **Scored:** `grammar.negative-en`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E05 — `ex.people-and-things.questions-and-no.make-speaking-negative`** · `transform` · intent grammar / demand controlled construction  
**Prompt:** Make this sentence negative. Keep the language the same.  
**Stimulus:** Puhun suomea. → I do not speak Finnish.  
**Answer:** Accepted after N1 text normalization: `En puhu suomea.` or `Minä en puhu suomea.`.  
**Correct feedback:** En puhu suomea. uses en + puhu.  
**Incorrect feedback:** Change Puhun to En puhu. Do not write en puhun.  
**Near feedback:** `en puhun suomea` → After en, the correct form is puhu, without -n.  
**Not sure:** Write En puhu suomea.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `grammar.negative-en`, `vocab.puhua`, `phrase.en-puhu-language`, `phrase.puhun-language`. **Scored:** `grammar.negative-en`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E06 — `ex.people-and-things.questions-and-no.make-living-negative`** · `transform` · intent grammar / demand controlled construction  
**Prompt:** Make the sentence negative. Keep the location unchanged.  
**Stimulus:** Asun Suomessa. → I do not live in Finland.  
**Answer:** Accepted after N1 text normalization: `En asu Suomessa.` or `Minä en asu Suomessa.`.  
**Correct feedback:** En asu Suomessa. is the correct negative statement.  
**Incorrect feedback:** Use En asu Suomessa. After en, write asu, not asun.  
**Near feedback:** `en asun suomessa` → Use asu without -n after en.  
**Not sure:** Write En asu Suomessa.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `grammar.negative-en`, `vocab.asua`, `phrase.asun-suomessa`. **Scored:** `grammar.negative-en`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E07 — `ex.people-and-things.questions-and-no.say-ei`** · `text_input` · intent recall / demand controlled production  
**Prompt:** Type the Finnish one-word answer for no.  
**Stimulus:** No. (A short reply — not ‘I don't’.)  
**Answer:** Accepted after N1 text normalization: `ei`.  
**Correct feedback:** Ei is a one-word negative answer. En is used for I don't.  
**Incorrect feedback:** The short answer is ei. En is for the first-person negative construction.  
**Near feedback:** `en` → En means I don't in the forms taught here. The short answer requested is ei.  
**Not sure:** Write ei.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.ei`, `grammar.negative-en`. **Scored:** `vocab.ei`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E08 — `ex.people-and-things.questions-and-no.recognise-miten`** · `multiple_choice` · intent recognition / demand guided recognition  
**Prompt:** What does Miten menee? mean as a greeting question?  
**Stimulus:** Miten menee?  
**Answer:** Options (visually shuffled): `a` How's it going? · `b` Who is that? · `c` Do you speak Finnish?. Accepted option ID: `a`.  
**Correct feedback:** Miten asks how. Miten menee? means How's it going?  
**Incorrect feedback:** `b`: Who is that? is Kuka hän on? `c`: Do you speak Finnish? is Puhutko suomea?  
**Near feedback:** None.  
**Not sure:** Miten menee? means How's it going?  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.miten`, `phrase.kuka-han-on`, `phrase.puhutko-suomea`. **Scored:** `vocab.miten`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E09 — `ex.people-and-things.questions-and-no.checkpoint-refer-back`** · `multiple_choice` · intent cumulative / demand contextual recognition  
**Prompt:** The speakers already know which item they are discussing. Which word often refers back to it?  
**Stimulus:** it — already mentioned  
**Answer:** Options (visually shuffled): `a` tuo · `b` se · `c` tämä. Accepted option ID: `b`.  
**Correct feedback:** Se often refers back to an item already mentioned.  
**Incorrect feedback:** `a`: Tuo tends to point something out; here the item is already established. `c`: Tämä may indicate the current focus; se is the reference-back word taught here.  
**Near feedback:** None.  
**Not sure:** Use se for this context.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.se`, `vocab.tuo`, `vocab.tama`. **Scored:** `vocab.se`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E10 — `ex.people-and-things.questions-and-no.checkpoint-who`** · `token_build` · intent cumulative / demand controlled construction  
**Prompt:** Build the taught question: Who is he/she? Use all tiles.  
**Stimulus:** Who is he/she?  
**Answer:** Shuffled tiles: on / Kuka / hän. Accepted assembled sentence: `Kuka hän on?`.  
**Correct feedback:** Kuka hän on? asks about this person's identity.  
**Incorrect feedback:** Put the tiles in this order: Kuka → hän → on.  
**Near feedback:** None.  
**Not sure:** Build Kuka hän on?  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.kuka`, `vocab.han`, `phrase.kuka-han-on`. **Scored:** `phrase.kuka-han-on`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E11 — `ex.people-and-things.questions-and-no.checkpoint-woman`** · `text_input` · intent cumulative / demand recall  
**Prompt:** Recall the Finnish word for woman.  
**Stimulus:** woman  
**Answer:** Accepted after N1 text normalization: `nainen`.  
**Correct feedback:** Nainen means woman.  
**Incorrect feedback:** The word is nainen.  
**Near feedback:** None.  
**Not sure:** Write nainen.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.nainen`. **Scored:** `vocab.nainen`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E12 — `ex.people-and-things.questions-and-no.checkpoint-speak`** · `text_input` · intent cumulative / demand practical application  
**Prompt:** Introduce yourself by saying I speak Finnish. Type the sentence.  
**Stimulus:** I speak Finnish.  
**Answer:** Accepted after N1 text normalization: `Puhun suomea.` or `Minä puhun suomea.`.  
**Correct feedback:** Puhun suomea. adds useful information to an introduction.  
**Incorrect feedback:** Use Puhun suomea; the language form after puhun is suomea.  
**Near feedback:** `puhun suomi` → After puhun use suomea, not the dictionary form suomi.  
**Not sure:** Write Puhun suomea.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.puhua`, `vocab.suomi`, `phrase.puhun-language`. **Scored:** `phrase.puhun-language`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E13 — `ex.people-and-things.questions-and-no.checkpoint-live`** · `text_input` · intent cumulative / demand practical application  
**Prompt:** Say in Finnish that you live in Finland.  
**Stimulus:** I live in Finland.  
**Answer:** Accepted after N1 text normalization: `Asun Suomessa.` or `Minä asun Suomessa.`.  
**Correct feedback:** Asun Suomessa. tells where you live.  
**Incorrect feedback:** Write Asun Suomessa. This location phrase uses Suomessa.  
**Near feedback:** `asun suomea` → Use Suomessa for in Finland, not suomea.  
**Not sure:** Write Asun Suomessa.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.asua`, `vocab.suomi`, `phrase.asun-suomessa`. **Scored:** `phrase.asun-suomessa`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E14 — `ex.people-and-things.questions-and-no.checkpoint-ask-language`** · `text_input` · intent cumulative / demand controlled production  
**Prompt:** Ask the other person in Finnish: Do you speak Finnish?  
**Stimulus:** Do you speak Finnish?  
**Answer:** Accepted after N1 text normalization: `Puhutko suomea?`.  
**Correct feedback:** Puhutko suomea? uses the taught yes/no question pattern.  
**Incorrect feedback:** Use Puhutko suomea? — don't change the person to I.  
**Near feedback:** `puhunko suomea` → Puhunko is a different person; use puhutko for you.  
**Not sure:** Write Puhutko suomea?  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `phrase.puhutko-suomea`, `grammar.yes-no-ko-ko`. **Scored:** `grammar.yes-no-ko-ko`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E15 — `ex.people-and-things.questions-and-no.checkpoint-negative`** · `transform` · intent cumulative / demand contextual application  
**Prompt:** Change this statement to I do not speak English.  
**Stimulus:** Puhun englantia. → I do not speak English.  
**Answer:** Accepted after N1 text normalization: `En puhu englantia.` or `Minä en puhu englantia.`.  
**Correct feedback:** En puhu englantia. has the correct negative form.  
**Incorrect feedback:** Change Puhun to En puhu. Keep englantia.  
**Near feedback:** `en puhun englantia` → After en, use puhu, not puhun.  
**Not sure:** Write En puhu englantia.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `grammar.negative-en`, `vocab.puhua`, `vocab.englanti`, `phrase.en-puhu-language`. **Scored:** `grammar.negative-en`. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**E16 — `ex.people-and-things.questions-and-no.checkpoint-integrated-intro`** · `token_build` · intent cumulative / demand contextual application  
**Prompt:** Build a four-sentence introduction: greeting, name (Aino), speaking Finnish, living in Finland. Use each tile once, in that order.  
**Stimulus:** Four complete sentence tiles  
**Answer:** Shuffled tiles: Puhun suomea. / Hei! / Asun Suomessa. / Olen Aino.. Accepted assembled sentence: `Hei! Olen Aino. Puhun suomea. Asun Suomessa.`.  
**Correct feedback:** You linked Unit 1 greetings and names with the new information from Unit 2.  
**Incorrect feedback:** Use Hei! → Olen Aino. → Puhun suomea. → Asun Suomessa.  
**Near feedback:** None.  
**Not sure:** Start with Hei!, then Olen Aino., Puhun suomea., Asun Suomessa.  
**Hint:** null; cues are already in the prompt or tokens. **Linked:** `vocab.hei`, `phrase.olen-slot`, `phrase.puhun-language`, `phrase.asun-suomessa`. **Scored:** none, capability evidence only; `knowledgeScoring: false`. **Review eligible:** no; capability-only assembly. **Editorial:** `needs_review`.

### Cumulative Unit 2 assessment and completion

**End-of-unit checkpoint:** E09–E16 is the complete eight-part capability assessment inside Lesson 2.5, rather than a sixth lesson. It samples a demonstrative, a person question, a people word, a language expression, a living-location expression, a yes/no question, a negative statement and an integrated introduction reusing Unit 1. Recognition-only items receive their own exercises and review candidates without mandatory productive writing.

**Completion headline:** “You can say a little more.” **Supporting learner copy:** “You have practised talking about people and things, asking simple questions, and telling someone which language you speak and where you live. Some words and patterns will come back in Review.” **Completion rule:** every required teaching step visited, exercises E01–E16 attempted or explicitly marked Not sure, checkpoint attempted; no perfect-score requirement. A unit may be completed before its capability state becomes comfortable. **Review:** encountered and editorially approved scored targets only, using the existing scheduler. Optional Flashcards/Word Match do not clear due items or award course completion. **Next:** Unit 3 expands everyday actions.


## Part III — Independent scheduled-Review variants

These **nine additional records are authored but not compulsory lesson steps**. They provide self-contained follow-up checks for seven recognition-only items and the cue-dependent production item ihminen. They are selected only when the target is due and has been formally encountered. Every task uses existing kind `multiple_choice` and `intent: recognition`, with three stable options shuffled in the app.

**R01 — `ex.people-and-things.review.me-we`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **me** mean in the context learned?  
**Stimulus:** `me`  
**Answer:** Options (shuffle): `a` they · `b` we · `c` you — group or polite. **Accepted option:** `b`.  
**Correct feedback:** Me means we.  
**Incorrect feedback:** `a`: They is he; me means we. `c`: Group/polite you is te, not me.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** Me means we.  
**Hint:** null. **Linked:** `vocab.me`. **Scored:** `vocab.me` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R02 — `ex.people-and-things.review.te-you`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **te** mean in the context learned?  
**Stimulus:** `te`  
**Answer:** Options (shuffle): `a` we · `b` you — group or polite · `c` they. **Accepted option:** `b`.  
**Correct feedback:** Te addresses more than one person or is a polite you.  
**Incorrect feedback:** `a`: We is me; te addresses you. `c`: They is he, not te.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** Te is plural or polite you.  
**Hint:** null. **Linked:** `vocab.te`. **Scored:** `vocab.te` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R03 — `ex.people-and-things.review.he-they`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **he** mean in the context learned?  
**Stimulus:** `he`  
**Answer:** Options (shuffle): `a` he/she, one person · `b` they — people · `c` we. **Accepted option:** `b`.  
**Correct feedback:** He means they in standard Finnish.  
**Incorrect feedback:** `a`: One person is hän; he is a group. `c`: We is me; he means they.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** He means they.  
**Hint:** null. **Linked:** `vocab.he`. **Scored:** `vocab.he` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R04 — `ex.people-and-things.review.ystava-friend`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **ystävä** mean in the context learned?  
**Stimulus:** `ystävä`  
**Answer:** Options (shuffle): `a` child · `b` friend · `c` man. **Accepted option:** `b`.  
**Correct feedback:** Ystävä means friend.  
**Incorrect feedback:** `a`: Child is lapsi; ystävä means friend. `c`: Man is mies; ystävä means friend.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** Ystävä means friend.  
**Hint:** null. **Linked:** `vocab.ystava`. **Scored:** `vocab.ystava` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R05 — `ex.people-and-things.review.hyvin-well`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **hyvin** mean in the context learned?  
**Stimulus:** `hyvin`  
**Answer:** Options (shuffle): `a` now · `b` well (how well) · `c` maybe. **Accepted option:** `b`.  
**Correct feedback:** Hyvin tells how well.  
**Incorrect feedback:** `a`: Now is nyt; hyvin means well. `c`: Maybe is ehkä; hyvin means well.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** Hyvin means well.  
**Hint:** null. **Linked:** `vocab.hyvin`. **Scored:** `vocab.hyvin` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R06 — `ex.people-and-things.review.maa-country`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **maa** mean in the context learned?  
**Stimulus:** `maa`  
**Answer:** Options (shuffle): `a` language · `b` country / land · `c` name. **Accepted option:** `b`.  
**Correct feedback:** Maa means country or land.  
**Incorrect feedback:** `a`: Language is kieli; maa is a country/land. `c`: Name is nimi; maa is country/land.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** Maa means country or land.  
**Hint:** null. **Linked:** `vocab.maa`. **Scored:** `vocab.maa` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R07 — `ex.people-and-things.review.miten-how`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **miten** mean in the context learned?  
**Stimulus:** `miten`  
**Answer:** Options (shuffle): `a` who · `b` how · `c` what/which. **Accepted option:** `b`.  
**Correct feedback:** Miten asks how, as in Miten menee?  
**Incorrect feedback:** `a`: Who is kuka; miten means how. `c`: What/which is mikä; miten means how.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** Miten means how.  
**Hint:** null. **Linked:** `vocab.miten`. **Scored:** `vocab.miten` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R08 — `ex.people-and-things.review.ihminen-person`** · `multiple_choice` · intent recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **ihminen** mean in the context learned?  
**Stimulus:** `ihminen`  
**Answer:** Options (shuffle): `a` woman, specifically · `b` person / human · `c` child, specifically. **Accepted option:** `b`.  
**Correct feedback:** Ihminen is the general word for person.  
**Incorrect feedback:** `a`: Woman is nainen; ihminen is a general person. `c`: Child is lapsi; ihminen is a general person.  
**Near feedback:** None; no invented near-correct synonym.  
**Not sure:** Ihminen means person.  
**Hint:** null. **Linked:** `vocab.ihminen`. **Scored:** `vocab.ihminen` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

**R09 — `ex.people-and-things.review.en-puhu-meaning`** · `multiple_choice` · intent phrase recognition / demand independent comprehension · difficulty foundation  
**Prompt:** What does **En puhu suomea.** mean?  
**Stimulus:** `En puhu suomea.`  
**Answer:** Options (shuffle): `a` I speak Finnish. · `b` I don't speak Finnish. · `c` I don't live in Finland. **Accepted option:** `b`.  
**Correct feedback:** En puhu suomea. means I do not speak Finnish.  
**Incorrect feedback:** `a`: Puhun suomea. is affirmative; en changes it to a negative. `c`: En asu Suomessa. means I do not live in Finland.  
**Near feedback:** None.  
**Not sure:** It means I don't speak Finnish.  
**Hint:** null. **Linked:** `phrase.en-puhu-language`, `grammar.negative-en`, `vocab.puhua`. **Scored:** `phrase.en-puhu-language` only. **Review eligible:** yes, self-contained. **Editorial:** `needs_review`.

Review session assembly remains **one target at most once per scheduled Review session**, using the existing deterministic scheduler. Repeating a successful response immediately is not proof of a **spaced** successful recall. The `reviewEligible` flag declares content suitability; the engine still checks due time, encounter status and editorial release status.

## Part IV — Optional practice, progress and implementation handoff

### Flashcards and Word Match

Unit 2 uses the canonical vocabulary registry, not a new deck. A word is eligible only after a formal encounter (e.g., `vocab.suomalainen` after its 2.3 introduction). Inflected/teaching forms remain linked to their lemma (`puhun` to `puhua`, `asun` to `asua`, `suomea` to `suomi`, `englantia` to `englanti`). `hän` is a standard one-person pronoun and `he` means they; do not invent gender morphology.

**Semantic matching restrictions:**
- `tämä`, `tuo` and `se` may need context-qualified meaning tiles (“this in my hand”; “that pointed out across the room”; “it already mentioned”). Unqualified “this/that” tiles can be ambiguous.
- `hän` must not be treated as only male or only female. If the board contains `hän` and `he`, the glosses must distinguish **one person** vs **they**.
- `suomi`, `suomalainen` and `Suomessa` are not interchangeable. Dictionary-form language names and phrase forms must be labelled accurately and only authored when the exact form was encountered.
- `puhua` (“to speak”) and `puhun` (“I speak”) are related teaching forms under one canonical ID; do not duplicate knowledge or introduce two arbitrary counterpart tiles for one item.
- Recognised language name `suomi` versus location `Suomessa` must never become a contrived spelling test with two equally defensible answers.

Optional Flashcards and Word Match **do not automatically complete lessons, clear due Review or award permanent mastery**. Recognition-only `me, te, he, ystävä, hyvin, maa, miten` may appear in Finnish-to-English recognition; exclude them from required English-to-Finnish productive direction.

### Learning evidence and stable answers

Exactly 17 new production lemmas; exactly seven recognition-only items; no additional production from Unit 1. Text input and transformations use Unit 1's N1 normalisation plus explicit finite accepted variants in each record. Optional subject omission is accepted only where the prompt permits it; a named form task can require a particular person.

**Multiple-choice:** detect answer by stable option ID; keep feedback per incorrect option. **Matching:** persist pair-specific first-attempt results; subsequent guided corrections are not separate spaced successes. **Token:** the supplied tiles are visible assistance, not unaided spelling recall. **Capability-only checkpoint E16 and contextual task D07:** store capability evidence, `scoredTargetIds=[]`, not success for every visible lexical item.

### Progress and completion

All five lessons follow the approved Unit 1 completion rule: required steps visited, required exercises attempted or explicit Not sure, final checkpoint attempted. Unit completion is not the same as becoming comfortable with every target. Never force optional practice or perfect scores to progress. Unit 2 strengthens Unit 1 greetings, `olen/olet`, the fixed name question and introductions rather than reintroducing their vocabulary as NEW.

### Research and editorial status

The instructional sentences, distractors, answers and feedback are newly authored for Vokri. The original CSV is used for lemma/rank verification, not as proof that its AI-generated examples were teacher-certified. Finnish facts checked include Kotus's [demonstrative guidance](https://kielitoimistonohjepankki.fi/ohje/pronominit-demonstratiivipronominit-tama-tuo-se-nama-nuo-ne-yleispiirteet/), [hän vs se](https://kielitoimistonohjepankki.fi/ohje/pronominit-han-vai-se/), [negative verb forms](https://kielitoimistonohjepankki.fi/ohje/konjunktiot-eika-ei-eika-ja-ei/), and [question morphology](https://kielitoimistonohjepankki.fi/ohje/kysymysmerkki/); see the QA document for claim-by-claim limits.

All newly authored Unit 2 records remain `needs_review` until explicit product-owner approval in Vokri's workflow. External teacher review is optional, not a falsely recorded fact or automatic release gate. This documentation changes **no application code**, **no Figma designs**, **no Unit 1 content** and **no original vocabulary CSV**.

