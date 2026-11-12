# Vokri — Unit 4: Where Are You? · Complete Lesson & Exercise Specification

**Version:** 1.0 authoring · **Learning language:** `fi` · **Unit:** `unit.where-are-you` · **Stage:** `stage.a1-foundations` · **Course:** `course.fi`.  
**Editorial state:** new instructional content and exercises are `needs_review`, with no invented external teacher. Explicit project-owner approval is sufficient for Vokri's internal sign-off; no teacher certification is asserted.

Use with [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 1 specification](./unit-01-hello-complete-specification.md), [Unit 2 specification](./unit-02-people-and-things-complete-specification.md), [Unit 3 specification](./unit-03-everyday-actions-complete-specification.md), [Unit 4 QA](./unit-04-coverage-and-qa.md), [Unit 4 implementation notes](./unit-04-implementation-notes.md), [A1 curriculum blueprint](../a1_foundations_curriculum_blueprint.md), and [learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## Part I — Curriculum scope, vocabulary, grammar and shared contract

**Unit ability:** “Ask where things are, say where you are, name useful everyday places and describe a few common destinations.” **Prerequisite:** Units 1–3 completed to their normal attempt-based rules. Reuse **olen/on, asun, menen/tulen, se/tämä, missä?** only after their respective Unit 4 introduction; earlier `Asun Suomessa` remains a valid fixed phrase, not a retroactively incomplete or wrongly taught form.

**Six approved lessons:** 4.1 Asking where something is → 4.2 Saying ‘in’ → 4.3 Common places → 4.4 Saying where you're going → 4.5 Useful location phrases → 4.6 Location review. The cumulative check is inside 4.6, not a seventh lesson.

### Exact new production inventory — 16 lemmas

| Finnish lemma | Canonical ID | CSV rank | First introduction |
|---|---|---:|---|
| **koti** | `vocab.koti` | 187 | Lesson 4.4 |
| **talo** | `vocab.talo` | 188 | Lesson 4.2 |
| **asunto** | `vocab.asunto` | 189 | Lesson 4.3 |
| **huone** | `vocab.huone` | 190 | Lesson 4.2 |
| **vessa** | `vocab.vessa` | 195 | Lesson 4.3 |
| **paikka** | `vocab.paikka` | 206 | Lesson 4.3 |
| **työ** | `vocab.tyo` | 207 | Lesson 4.3 |
| **koulu** | `vocab.koulu` | 212 | Lesson 4.3 |
| **kauppa** | `vocab.kauppa` | 234 | Lesson 4.3 |
| **ravintola** | `vocab.ravintola` | 236 | Lesson 4.3 |
| **kahvila** | `vocab.kahvila` | 237 | Lesson 4.3 |
| **lähellä** | `vocab.lahella` | 351 | Lesson 4.5 |
| **täällä** | `vocab.taalla` | 352 | Lesson 4.1 |
| **siellä** | `vocab.siella` | 353 | Lesson 4.1 |
| **missä** | `vocab.missa` | 338 | Lesson 4.1 |
| **minne** | `vocab.minne` | 339 | Lesson 4.4 |

### Recognition-only inventory — 5 lemmas

| Finnish lemma | Canonical ID | CSV rank | First encounter |
|---|---|---:|---|
| **pöytä** | `vocab.poyta` | 198 | Lesson 4.3 |
| **tuoli** | `vocab.tuoli` | 199 | Lesson 4.3 |
| **ovi** | `vocab.ovi` | 201 | Lesson 4.3 |
| **työpaikka** | `vocab.tyopaikka` | 208 | Lesson 4.3 |
| **ruokakauppa** | `vocab.ruokakauppa` | 235 | Lesson 4.3 |

Canonical vocab IDs correspond to the **unchanged** pedagogically curated CSV. Never create a new vocabulary item for `talossa`, `huoneessa`, `asunnossa`, `kaupassa`, `kotiin`, `kauppaan`, `kouluun` or `kotona`; these are taught forms/chunks of existing lemmas. The five recognition-only words are not required as Finnish free production or reverse-only English→Finnish Flashcards.

### Grammar and authored phrase inventory

| ID | Full taught content | Boundary |
|---|---|---|
| `grammar.inessive-ssa-ssa` | `talo → talossa`, `huone → huoneessa`; later `kauppa → kaupassa`, `asunto → asunnossa` | A form attaches to an appropriate noun stem; **not** every dictionary word + -ssa |
| `grammar.vowel-harmony-location` | `talo → talossa` versus supplied unscored `kylä → kylässä` | Written awareness, no full vowel-harmony paradigm or independent `kylä` vocabulary |
| `grammar.location-vs-destination` | `missä` = where at; `minne` = where to; `kotona` versus `kotiin` | No general illative or six-case table |
| `phrase.missa-se-on` | **Missä se on?** | Fixed useful question |
| `phrase.olen-taalla` | **Olen täällä.** | First-person location |
| `phrase.se-on-siella` | **Se on siellä.** | Third-person familiar form, no general conjugation |
| `phrase.olen-talossa` | **Olen talossa.** | Taught inessive |
| `phrase.missa-vessa-on` | **Missä vessa on?** | Natural everyday location question |
| `phrase.minne-menet` | **Minne menet?** | Taught fixed question; `menet` is one recognised second-person form, not a paradigm |
| `phrase.menen-kotiin` | **Menen kotiin.** | Fixed destination home |
| `phrase.menen-taught-destination` | **Menen kauppaan. / Menen kouluun.** | Taught destinations, no automatic illative generator |
| `phrase.olen-kotona` | **Olen kotona.** | Home-location fixed form, **not an inessive -ssa/-ssä** |
| `phrase.kauppa-on-lahella` | **Kauppa on lähellä.** | Lexical nearby expression, not general -lla/-llä grammar |

**Additional model forms:** `Olen kaupassa` and `Olen asunnossa` are taught whole-location forms under the existing lemma/grammar relationships; they are **not** additional production lemmas or independent duplicate familiarity entries. `työ` is the dictionary noun “work”; everyday “at work” is frequently `töissä`, so this unit avoids inaccurately treating `Olen työssä` as the universal everyday equivalent. `kotona` is a high-value home-location form, not an ordinary `koti + ssa` derivation.

**Spoken Finnish:** `täällä → tääl`, `siellä → siel` are optional recognition-only notes, never scored as separate lemmas.

### Shared exercise, feedback and completion conventions

- Every listed step belongs to `fi` and `unit.where-are-you`; full stable step ID = its lesson prefix + printed suffix. All listed steps are required. Optional spoken notes are explicitly marked and must not gate progress. Step `type` is one of the eight supported types: `explanation`, `vocabulary_intro`, `phrase_intro`, `grammar_explanation`, `spoken_note`, `example_set`, `exercise`, `checkpoint`.
- All authored exercises use stable `ex.where-are-you.<lesson-slug>.<exercise-slug>` IDs, the existing five kinds `multiple_choice`, `text_input`, `token_build`, `transform`, `matching`, and **full concrete prompt/stimulus/answer/correct/incorrect/near/Not sure/linked/scored/review/editorial fields**. Document tags A01–F14 are human cross-references, not persistent keys.
- Multiple-choice option IDs are stable; visual order may be shuffled while keeping per-option feedback. Matching records score each pair's first attempt separately. A checkpoint is a container of fully authored exercises, **not** a sixth exercise kind. A token-build response receives construction evidence; it isn't falsely called unaided Finnish spelling recall.
- **N1 deterministic text profile (unchanged Units 1–3):** Unicode NFC, lowercase, trim/collapse whitespace, replace allowed `. , ! ?` punctuation with spaces before collapse; never strip accents or Finnish ä/ö, merge words, truncate long sounds, stem unknown forms, or use AI/fuzzy grading. Only expressly listed variants are correct. If an answer is a legitimate alternative in the stated context, enumerate it; do not reject it through a hidden assumption.
- The existing scheduler tracks `correct`, `almost`, `not_sure`. Until owner confirms a schema extension, an attempted wrong or authored near may route into the existing **non-success `almost` bucket** while the learner sees **truthful distinct incorrect versus near feedback**. A genuinely wrong answer must never display “Nearly correct!” or earn a success. `Not sure` is an explicit available action; empty text input is not an attempt.
- **Scored targets alone** update the relevant knowledge state. All other Linked targets are contextual. A multiword sentence does not imply each visible lemma was recalled independently. Awareness-only items and capability-only integration use `scoredTargetIds: []`, `knowledgeScoring: false`.
- Completion is visiting every required teaching step and attempting each required lesson exercise/checkpoint, with explicit Not sure allowed, **not** 100% correct mastery. Scheduled Review uses the existing due engine after genuine encounter and project owner approval. Flashcards and Word Match remain optional, do not clear due Review, and do not complete a curriculum unit.
- No Finnish audio, generated images, general morphology engine, backend, new grammar tables, new exercise kinds or Swedish course content are needed for this authoring handoff. All date/duration estimates are unmeasured editorial guidance.

### Estimated unit workload

| Lesson | Ordered required steps | Required exercise records | Matching pair decisions | Est. minutes |
|---|---:|---:|---:|---|
| 4.1 Asking where something is | 16 | 11 | 2 | 6–9 |
| 4.2 Saying “in” | 18 | 12 | 2 | 7–10 |
| 4.3 Common places | 26 | 19 | 10 | 12–18; three internal groups |
| 4.4 Going to destinations | 19 | 12 | 3 | 8–11 |
| 4.5 Useful location phrases | 13 | 9 | 0 | 5–8 |
| 4.6 Location review | 8 | 14 | 0 | 9–13; pause before checkpoint |
| **Total** | **100 + one optional spoken step** | **77** | **17** | **47–69** |

Six matching records hold 17 individual paired decisions, yielding **88 required response units** (77 − 6 + 17), excluding the extra work of multiword typing. Lesson 4.3 is deliberately more demanding; the lesson cursor supports pause/resume at the specified boundaries.

## Part II — Fully authored six-lesson content

## Lesson 4.1 — Asking where something is

**Metadata:** `lesson.where-are-you.ask-where`, `unit.where-are-you`, language `fi`, order 1, estimated **6–9 minutes**, prerequisite `lesson.everyday-actions.ask-answer-say` (final Unit 3 lesson). **Goal:** ask where something is, distinguish here and there, and reply with simple familiar verb forms. **New production:** `vocab.missa`, `vocab.taalla`, `vocab.siella`. **Phrases:** `phrase.missa-se-on`, `phrase.olen-taalla`, `phrase.se-on-siella`. **Reused:** `vocab.se`, `vocab.olla`, `vocab.mika`, `vocab.kuka`. **Completion:** all required steps and A01–A11 attempted or Not sure. Pause after A05 if needed.

### Ordered learner experience

Full ID is `step.where-are-you.ask-where.` plus row suffix. All listed steps required; only the named introduction steps formally encounter new items. Exercise steps are scored exactly as authored.

| # | Suffix | LessonStep type | Exact learner-facing copy / exercise reference | Formal new encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **A small question that helps.** “You already know how to ask about people and things. Now ask where something is, and say whether it is here or there.” | none |
| 2 | `where` | `vocabulary_intro` | **missä** — where? Use it for location, not where someone is heading. “You may have seen **Asun Suomessa**. That tells where you live; the question word for being somewhere is missä.” | `vocab.missa` |
| 3 | `recognise-missa` | `exercise` | A01 | none |
| 4 | `here-there` | `vocabulary_intro` | **täällä** — here, near the speaker's location. **siellä** — there, away from the speaker's location or at an established place. “The speaker's position and the conversation matter, not just an English translation.” | `vocab.taalla`, `vocab.siella` |
| 5 | `choose-here` | `exercise` | A02 | none |
| 6 | `choose-there` | `exercise` | A03 | none |
| 7 | `where-question` | `phrase_intro` | **Missä se on?** — “Where is it?” “The word **se** was introduced in Unit 2. **on** is the familiar ‘is’ form. The whole question is useful when looking for an item.” | `phrase.missa-se-on` |
| 8 | `location-replies` | `phrase_intro` | **Olen täällä.** — “I'm here.” **Se on siellä.** — “It is there.” “These are short complete answers. You already know olen/on; the new part is saying where.” | `phrase.olen-taalla`, `phrase.se-on-siella` |
| 9 | `model` | `example_set` | **Looking for a previously mentioned bag:** “Missä se on?” **Person nearby:** “Se on täällä.” **Pointing to a bag in another room:** “Se on siellä.” “Use the context; no hidden picture is needed.” | none |
| 10 | `recognise-question` | `exercise` | A04 | none |
| 11 | `recognise-replies` | `exercise` | A05 | none |
| 12 | `retrieve-missa` | `exercise` | A06 | none |
| 13 | `retrieve-taalla` | `exercise` | A07 | none |
| 14 | `retrieve-siella` | `exercise` | A08 | none |
| 15 | `build-question` | `exercise` | A09 | none |
| 16 | `checkpoint` | `checkpoint` | **Find it.** “Choose a clear location reply, then say you're here without tiles.” A10 → A11. | none |

**Optional `spoken_note`**, ID `step.where-are-you.ask-where.spoken-here-there`, after A05: “In casual Finnish you may see or hear **tääl** for standard **täällä**, and **siel** for standard **siellä**. Recognise these shorter variants, but write the standard forms in your own answers.” Links `spoken.taalla-taal` and `spoken.siella-siel`; no scored knowledge.

### Complete exercises

**A01 — `ex.where-are-you.ask-where.recognise-missa`** · `multiple_choice` · recognition  
**Prompt:** Someone is looking for an object. What does missä ask?  
**Stimulus:** missä?  
**Answer:** Options, shuffled but keyed: `a` who? · `b` where is it? · `c` where to?. Accepted ID `b`.  
**Correct feedback:** Missä asks about location.  
**Incorrect feedback:** `a`: Who? is kuka, a different question. `c`: Where to? is minne, introduced later. Missä asks where something is.  
**Near feedback:** None.  
**Not sure:** Missä means where, asking about location.  
**Hint:** null. **Linked:** `vocab.missa`. **Scored:** `vocab.missa`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A02 — `ex.where-are-you.ask-where.select-taalla`** · `multiple_choice` · contextual recognition  
**Prompt:** You are standing in the same room as the speaker. Which word says ‘here’ from your position?  
**Stimulus:** You are here in the same room.  
**Answer:** Options, shuffled but keyed: `a` siellä · `b` nyt · `c` täällä. Accepted ID `c`.  
**Correct feedback:** Täällä refers to here, where you are.  
**Incorrect feedback:** `a`: Siellä refers to there, away from the speaker or at another place. `b`: Nyt means now, not here.  
**Near feedback:** None.  
**Not sure:** Use täällä for here.  
**Hint:** null. **Linked:** `vocab.taalla`, `vocab.siella`, `vocab.nyt`. **Scored:** `vocab.taalla`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A03 — `ex.where-are-you.ask-where.select-siella`** · `multiple_choice` · contextual recognition  
**Prompt:** You are talking about an item in a different room. Which word says ‘there’?  
**Stimulus:** An item is in another room, not where you are.  
**Answer:** Options, shuffled but keyed: `a` siellä · `b` täällä · `c` missä. Accepted ID `a`.  
**Correct feedback:** Siellä means there in that other place.  
**Incorrect feedback:** `b`: Täällä is here at the speaker's location. `c`: Missä asks where something is; it is not an answer meaning there.  
**Near feedback:** None.  
**Not sure:** Use siellä for there.  
**Hint:** null. **Linked:** `vocab.taalla`, `vocab.siella`, `vocab.missa`. **Scored:** `vocab.siella`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A04 — `ex.where-are-you.ask-where.question-meaning`** · `multiple_choice` · phrase recognition  
**Prompt:** What does Missä se on? mean?  
**Stimulus:** Missä se on?  
**Answer:** Options, shuffled but keyed: `a` What is it? · `b` Where is it? · `c` Who is it?. Accepted ID `b`.  
**Correct feedback:** Missä se on? asks where it is.  
**Incorrect feedback:** `a`: What is it? is Mikä se on? in the taught distinction. `c`: Who is it? uses kuka, not missä.  
**Near feedback:** None.  
**Not sure:** It means Where is it?  
**Hint:** null. **Linked:** `phrase.missa-se-on`, `vocab.missa`, `vocab.se`. **Scored:** `phrase.missa-se-on`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A05 — `ex.where-are-you.ask-where.replies-match`** · `matching` · guided recognition  
**Prompt:** Match each short location reply to its meaning.  
**Stimulus:** Here and there from the speaker's viewpoint.  
**Answer:** Authorised matching pairs: Olen täällä. ↔ I'm here (`phrase.olen-taalla`); Se on siellä. ↔ It is there (`phrase.se-on-siella`). Each pair scored separately on first attempt.  
**Correct feedback:** Olen täällä. says I'm here; Se on siellä. says it is there.  
**Incorrect feedback:** `a`: Olen täällä. means I am here. `b`: Se on siellä. means it is there.  
**Near feedback:** None.  
**Not sure:** Olen täällä. = I'm here; Se on siellä. = It is there.  
**Hint:** null. **Linked:** `phrase.olen-taalla`, `phrase.se-on-siella`. **Scored:** `phrase.olen-taalla`, `phrase.se-on-siella`. **Review eligible:** false; lesson matching; **Editorial:** `needs_review`.

**A06 — `ex.where-are-you.ask-where.write-missa`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish location question word meaning where.  
**Stimulus:** where? (location)  
**Answer:** Accepted after Unit 1 N1 normalization: `missä`.  
**Correct feedback:** Missä asks where something is.  
**Incorrect feedback:** Write missä, including ä.  
**Near feedback:** `missa` → Write missä with ä, not missa.  
**Not sure:** Write missä.  
**Hint:** null. **Linked:** `vocab.missa`. **Scored:** `vocab.missa`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A07 — `ex.where-are-you.ask-where.write-taalla`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish word for here, at the speaker's location.  
**Stimulus:** here  
**Answer:** Accepted after Unit 1 N1 normalization: `täällä`.  
**Correct feedback:** Täällä means here.  
**Incorrect feedback:** The form is täällä, with two ä vowels before ll.  
**Near feedback:** `taalla` → The word is täällä, with ä and a long vowel.; `tälä` → Write täällä, with two ä vowels and ll.  
**Not sure:** Write täällä.  
**Hint:** null. **Linked:** `vocab.taalla`. **Scored:** `vocab.taalla`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A08 — `ex.where-are-you.ask-where.write-siella`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish word for there, at another place.  
**Stimulus:** there  
**Answer:** Accepted after Unit 1 N1 normalization: `siellä`.  
**Correct feedback:** Siellä means there.  
**Incorrect feedback:** Write siellä: ie and a final ä.  
**Near feedback:** `siella` → Write siellä with ä.  
**Not sure:** Write siellä.  
**Hint:** null. **Linked:** `vocab.siella`. **Scored:** `vocab.siella`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A09 — `ex.where-are-you.ask-where.build-missa-se-on`** · `token_build` · controlled construction  
**Prompt:** Put the supplied words in order to ask ‘Where is it?’  
**Stimulus:** Use each token once.  
**Answer:** Shuffled token bank: on / Missä / se. Accepted sequence `Missä se on?`.  
**Correct feedback:** Missä se on? is the complete question.  
**Incorrect feedback:** Start with Missä and place se before on.  
**Near feedback:** None.  
**Not sure:** Missä → se → on?  
**Hint:** null. **Linked:** `phrase.missa-se-on`, `vocab.missa`, `vocab.se`. **Scored:** `phrase.missa-se-on`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A10 — `ex.where-are-you.ask-where.checkpoint-location`** · `multiple_choice` · contextual application  
**Prompt:** You're in one room and someone asks where the already-mentioned item is. It is in another room. Choose a suitable reply.  
**Stimulus:** The item is not here; it is in another room.  
**Answer:** Options, shuffled but keyed: `a` Se on täällä. · `b` Se on siellä. · `c` Olen täällä.. Accepted ID `b`.  
**Correct feedback:** Se on siellä. says the item is there.  
**Incorrect feedback:** `a`: Se on täällä. would put the item here at the speaker's location. `c`: Olen täällä. says where you are, not where the item is.  
**Near feedback:** None.  
**Not sure:** Use Se on siellä.  
**Hint:** null. **Linked:** `phrase.se-on-siella`, `phrase.olen-taalla`. **Scored:** `phrase.se-on-siella`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

**A11 — `ex.where-are-you.ask-where.checkpoint-im-here`** · `text_input` · cumulative recall  
**Prompt:** Reply to someone looking for you: ‘I'm here.’ Type the complete Finnish sentence.  
**Stimulus:** I'm here.  
**Answer:** Accepted after Unit 1 N1 normalization: `Olen täällä.` or `Minä olen täällä.`.  
**Correct feedback:** Olen täällä. tells the person where you are.  
**Incorrect feedback:** Write Olen täällä. The location word is täällä.  
**Near feedback:** None.  
**Not sure:** Write Olen täällä.  
**Hint:** null. **Linked:** `phrase.olen-taalla`, `vocab.taalla`, `vocab.olla`. **Scored:** `phrase.olen-taalla`. **Review eligible:** true; self-contained; **Editorial:** `needs_review`.

### Completion

**Headline:** “You can ask where.” **Copy:** “You can ask **Missä se on?**, say **Olen täällä**, and talk about something **siellä**. Next you'll see how Finnish can say ‘in’ with a word ending.” **Review:** the three lexical items and three introduced phrases, only when encountered, editorially approved, and due under the existing scheduler. Do not score the entire sentence as independently recalled vocabulary.


## Lesson 4.2 — Saying “in”

**Metadata:** `lesson.where-are-you.saying-in`, unit `unit.where-are-you`, `fi`, lesson order 2, **7–10 minutes**; prerequisite `lesson.where-are-you.ask-where`. **Goal:** recognise/produce a few taught inessive forms, without general case generation. **New production:** `vocab.talo`, `vocab.huone`. **Grammar:** `grammar.inessive-ssa-ssa` and `grammar.vowel-harmony-location`; the latter is awareness only. **Phrase:** `phrase.olen-talossa`. **Earlier material:** `vocab.olla`, `vocab.missa`, `phrase.olen-taalla`. **Supplied non-scored teaching reference:** `kylä → kylässä` (village → in the village) explicitly not a production or Review item. **Completion:** visit all required steps and attempt B01–B12. Pause after B05 if useful.

### Ordered learner experience

Required steps use ID `step.where-are-you.saying-in.` plus suffix. Formal encounters are explicitly marked, not inferred from example-set incidental words or distractors.

| # | Suffix | Step type | Exact learner-facing copy / exercise | First formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Sometimes ‘in’ is at the end.** “English often uses the separate word ‘in’. Finnish can put this meaning into a noun ending. Start with just a few real words — not a full case table.” | none |
| 2 | `talo` | `vocabulary_intro` | **talo** — house/building. **talossa** — in the house. “In this example, talo + ssa → talossa. The ending is called the *inessive*: it answers a ‘where?’ question.” | `vocab.talo` |
| 3 | `recognise-talo` | `exercise` | B01 | none |
| 4 | `inessive` | `grammar_explanation` | **A useful inessive ending: -ssa / -ssä.** “For our simple example **talo → talossa**, the noun stem stays familiar. Other nouns may change their stem: do not assume every Finnish noun is just dictionary form + ssa.” | `grammar.inessive-ssa-ssa` |
| 5 | `recognise-talossa` | `exercise` | B02 | none |
| 6 | `front-vowels` | `grammar_explanation` | **Why two endings?** “Finnish has vowel harmony. In these examples, **talo → talossa** uses **-ssa**, while the *supplied, unscored* word **kylä** (‘village’) becomes **kylässä** (‘in the village’) with **-ssä**. You only need to notice the difference; you do not need to inflect kylä independently.” | `grammar.vowel-harmony-location` |
| 7 | `suffix-choice` | `exercise` | B03 | none |
| 8 | `huone` | `vocabulary_intro` | **huone** — room. **huoneessa** — in the room. “Here the case form has **huonee-** before **-ssa**: huonee + ssa → huoneessa. Learn the whole form first. We are not teaching every stem rule now.” | `vocab.huone` |
| 9 | `recognise-huone` | `exercise` | B04 | none |
| 10 | `compare-locations` | `example_set` | **Olen talossa.** — “I am in the house.” **Olen huoneessa.** — “I am in the room.” “Both say where you are. The final noun forms are different, and both are correct.” | none |
| 11 | `place-phrase` | `phrase_intro` | **Olen talossa.** — “I'm in the house.” “This combines your familiar **olen** with a location word. Learn the complete sentence and reuse the pattern with other *taught* locations later.” | `phrase.olen-talossa` |
| 12 | `match-forms` | `exercise` | B05 | none |
| 13 | `type-talo` | `exercise` | B06 | none |
| 14 | `type-huone` | `exercise` | B07 | none |
| 15 | `choose-room-form` | `exercise` | B08 | none |
| 16 | `build-house` | `exercise` | B09 | none |
| 17 | `recognise-pattern` | `exercise` | B10 | none |
| 18 | `checkpoint` | `checkpoint` | **One word, one place.** “Say you're in the house without tiles, then identify the room form.” B11 → B12. | none |

### Complete exercises

**B01 — `ex.where-are-you.saying-in.house-dictionary`** · `multiple_choice` · guided recognition  
**Prompt:** Which Finnish word names a house or building?  
**Stimulus:** house  
**Answer:** Options (stable IDs, shuffled): `a` koti · `b` talo · `c` huone. Correct `b`.  
**Correct feedback:** Talo means a house or building.  
**Incorrect feedback:** `a`: Koti means home, which is not always the same as a house. `c`: Huone means room, introduced later.  
**Near feedback:** None.  
**Not sure:** Talo means house/building.  
**Hint:** null. **Linked:** `vocab.talo`. **Scored:** `vocab.talo`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B02 — `ex.where-are-you.saying-in.talossa-meaning`** · `multiple_choice` · guided recognition  
**Prompt:** What does talossa mean?  
**Stimulus:** talossa  
**Answer:** Options (stable IDs, shuffled): `a` in the house · `b` to the house · `c` the house (dictionary form). Correct `a`.  
**Correct feedback:** Talossa is a taught location form: in the house.  
**Incorrect feedback:** `b`: Talossa tells where, not a destination toward the house. `c`: The dictionary form is talo. Talossa has the location ending.  
**Near feedback:** None.  
**Not sure:** Talossa means in the house.  
**Hint:** null. **Linked:** `vocab.talo`, `grammar.inessive-ssa-ssa`. **Scored:** `grammar.inessive-ssa-ssa`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B03 — `ex.where-are-you.saying-in.vowel-harmony-recognition`** · `multiple_choice` · grammar recognition  
**Prompt:** Which shown word uses the front-vowel inessive ending -ssä?  
**Stimulus:** Two supplied examples: talossa / kylässä. Kylä means village and is not new production vocabulary.  
**Answer:** Options (stable IDs, shuffled): `a` talossa · `b` kylässä · `c` talo. Correct `b`.  
**Correct feedback:** Kylässä ends in -ssä. Talossa ends in -ssa.  
**Incorrect feedback:** `a`: Talossa has the back-vowel ending -ssa. `c`: Talo is the dictionary form without the inessive ending.  
**Near feedback:** None.  
**Not sure:** The front-vowel example is kylässä.  
**Hint:** null. **Linked:** `grammar.vowel-harmony-location`, `grammar.inessive-ssa-ssa`. **Scored:** `grammar.vowel-harmony-location`. **Review eligible:** false; guided context/board. **Editorial:** `needs_review`.

**B04 — `ex.where-are-you.saying-in.recognise-room`** · `multiple_choice` · guided recognition  
**Prompt:** Which Finnish dictionary word means room?  
**Stimulus:** room  
**Answer:** Options (stable IDs, shuffled): `a` huone · `b` talo · `c` koti. Correct `a`.  
**Correct feedback:** Huone means room.  
**Incorrect feedback:** `b`: Talo is house, not a room. `c`: Koti is home, not specifically a room.  
**Near feedback:** None.  
**Not sure:** Huone is room.  
**Hint:** null. **Linked:** `vocab.huone`. **Scored:** `vocab.huone`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B05 — `ex.where-are-you.saying-in.match-location-forms`** · `matching` · guided recognition  
**Prompt:** Match the two taught location forms to their complete meanings.  
**Stimulus:** Each pair asks where someone is.  
**Answer:** Pairs: talossa ↔ in the house (`vocab.talo`); huoneessa ↔ in the room (`vocab.huone`). First attempt per pair.  
**Correct feedback:** Talossa means in a house; huoneessa means in a room.  
**Incorrect feedback:** `talossa`: Talossa = in the house. `huoneessa`: Huoneessa = in the room.  
**Near feedback:** None.  
**Not sure:** talossa = in the house; huoneessa = in the room.  
**Hint:** null. **Linked:** `vocab.talo`, `vocab.huone`, `grammar.inessive-ssa-ssa`. **Scored:** `vocab.talo`, `vocab.huone`. **Review eligible:** false; guided context/board. **Editorial:** `needs_review`.

**B06 — `ex.where-are-you.saying-in.recall-talo`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish dictionary word for house.  
**Stimulus:** house (dictionary form)  
**Answer:** Accepted after N1: `talo`.  
**Correct feedback:** Talo means house.  
**Incorrect feedback:** Write talo; talossa is the ‘in the house’ form.  
**Near feedback:** `talossa` → Talossa is ‘in the house’; the requested dictionary form is talo.  
**Not sure:** Write talo.  
**Hint:** null. **Linked:** `vocab.talo`. **Scored:** `vocab.talo`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B07 — `ex.where-are-you.saying-in.recall-huone`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish dictionary word for room.  
**Stimulus:** room (dictionary form)  
**Answer:** Accepted after N1: `huone`.  
**Correct feedback:** Huone means room.  
**Incorrect feedback:** Write huone; huoneessa is the location form.  
**Near feedback:** `huoneessa` → Huoneessa is the location form; the requested dictionary word is huone.  
**Not sure:** Write huone.  
**Hint:** null. **Linked:** `vocab.huone`. **Scored:** `vocab.huone`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B08 — `ex.where-are-you.saying-in.choose-huoneessa`** · `multiple_choice` · form recognition  
**Prompt:** Which is the correct taught Finnish form meaning ‘in the room’?  
**Stimulus:** huone → ?  
**Answer:** Options (stable IDs, shuffled): `a` huonessa · `b` huoneessa · `c` huoneissä. Correct `b`.  
**Correct feedback:** Huoneessa uses the taught huonee- stem plus -ssa.  
**Incorrect feedback:** `a`: The case form has a longer stem: huoneessa, not huonessa. `c`: This word's taught form is huoneessa, with -ssa.  
**Near feedback:** None.  
**Not sure:** Use huoneessa.  
**Hint:** null. **Linked:** `vocab.huone`, `grammar.inessive-ssa-ssa`. **Scored:** `grammar.inessive-ssa-ssa`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B09 — `ex.where-are-you.saying-in.build-olen-talossa`** · `token_build` · controlled construction  
**Prompt:** Arrange the supplied words to say ‘I am in the house’.  
**Stimulus:** I am in the house.  
**Answer:** Shuffled tokens talossa / Olen. Accepted `Olen talossa.`.  
**Correct feedback:** Olen talossa. uses a location form after olen.  
**Incorrect feedback:** Place Olen first, then talossa.  
**Near feedback:** None.  
**Not sure:** Olen → talossa.  
**Hint:** null. **Linked:** `phrase.olen-talossa`, `vocab.olla`, `vocab.talo`. **Scored:** `phrase.olen-talossa`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B10 — `ex.where-are-you.saying-in.recognise-inessive-suffix`** · `multiple_choice` · grammar recognition  
**Prompt:** In the taught form talossa, which part conveys ‘in’?  
**Stimulus:** talo + ssa → talossa  
**Answer:** Options (stable IDs, shuffled): `a` the ending -ssa · `b` the whole word talo without ending · `c` the first letter t. Correct `a`.  
**Correct feedback:** Here -ssa marks the location ‘in’.  
**Incorrect feedback:** `b`: Talo alone means house. The ending adds location. `c`: The letter t is part of the noun, not the location ending.  
**Near feedback:** None.  
**Not sure:** The ending -ssa marks this inessive location.  
**Hint:** null. **Linked:** `grammar.inessive-ssa-ssa`, `vocab.talo`. **Scored:** `grammar.inessive-ssa-ssa`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B11 — `ex.where-are-you.saying-in.checkpoint-in-house`** · `text_input` · contextual application  
**Prompt:** Without tiles, type ‘I'm in the house’ in Finnish.  
**Stimulus:** I am in the house.  
**Answer:** Accepted after N1: `Olen talossa.` or `Minä olen talossa.`.  
**Correct feedback:** Olen talossa. says where you are.  
**Incorrect feedback:** Use Olen talossa, not Olen talo.  
**Near feedback:** `olen talo` → To say in the house, use talossa, not talo.  
**Not sure:** Write Olen talossa.  
**Hint:** null. **Linked:** `phrase.olen-talossa`, `vocab.talo`. **Scored:** `phrase.olen-talossa`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

**B12 — `ex.where-are-you.saying-in.checkpoint-room-form`** · `multiple_choice` · cumulative recognition  
**Prompt:** What does huoneessa mean?  
**Stimulus:** huoneessa  
**Answer:** Options (stable IDs, shuffled): `a` to the room · `b` in the room · `c` a room (dictionary form). Correct `b`.  
**Correct feedback:** Huoneessa means in the room.  
**Incorrect feedback:** `a`: The form huoneessa answers where, not where to. `c`: Huone is room; huoneessa adds a location ending.  
**Near feedback:** None.  
**Not sure:** It means in the room.  
**Hint:** null. **Linked:** `vocab.huone`, `grammar.inessive-ssa-ssa`. **Scored:** `vocab.huone`. **Review eligible:** true, independent context. **Editorial:** `needs_review`.

### Completion

**Headline:** “A place inside a word.” **Copy:** “You can now recognise and say **Olen talossa**, understand **huoneessa**, and notice the difference between **-ssa** and **-ssä**. Next you'll learn more everyday places.” **Review:** the two lexemes and `phrase.olen-talossa` after encounter; grammar `grammar.inessive-ssa-ssa` after assessment. Vowel harmony is a written awareness concept only and does not claim pronunciation proficiency. **No independent new vocabulary is created for supplied kylä.**


## Lesson 4.3 — Common places

**Metadata:** `lesson.where-are-you.common-places`, `unit.where-are-you`, `learningLanguage: fi`, order 3, estimated **12–18 minutes** with **three resumable internal groups**. Prerequisite `lesson.where-are-you.saying-in`. **Capability:** name eight common places and recognise a few real location forms and furniture/workplace words. **New production:** `vocab.asunto`, `vocab.paikka`, `vocab.koulu`, `vocab.tyo`, `vocab.kauppa`, `vocab.kahvila`, `vocab.ravintola`, `vocab.vessa`. **Recognition only:** `vocab.poyta`, `vocab.tuoli`, `vocab.ovi`, `vocab.tyopaikka`, `vocab.ruokakauppa`. **New phrase:** `phrase.missa-vessa-on`. **Grammar:** `grammar.inessive-ssa-ssa` revisited through **kaupassa** and **asunnossa** as explicitly authored forms; other examples **koulussa**, **kahvilassa** supplied, not separate case systems. **Prior material:** `vocab.missa`, `vocab.talo`, `vocab.huone`, `vocab.olla`, `vocab.tyo` only once this lesson introduces it. **Completion:** required steps and C01–C19 attempted (Not sure permitted).

### Ordered learner experience

Stable ID prefix `step.where-are-you.common-places.` + suffix. Required rows are grouped naturally with resume after **C07** (home/work) and **C14** (shops/restroom). Recognition-only C17 is a five-pair board which can be shown in batches and counted as five responses.

| # | Step suffix | Step type | Exact learner-facing copy / exercise | Formal new encounters |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Places you might actually look for.** “You'll meet eight useful words today. They're grouped into smaller sets, so you can stop and come back. The goal is to recognise places and name them, not to guess every case ending.” | none |
| 2 | `homes` | `vocabulary_intro` | **asunto** — apartment or dwelling. **paikka** — place/spot. “An apartment is one kind of place. You already know *talo* (house) and *huone* (room); keep these meanings distinct.” | `vocab.asunto`, `vocab.paikka` |
| 3 | `match-homes` | `exercise` | C01 | none |
| 4 | `retrieve-asunto` | `exercise` | C02 | none |
| 5 | `retrieve-paikka` | `exercise` | C03 | none |
| 6 | `school-work` | `vocabulary_intro` | **koulu** — school. **työ** — work/job. “These are not interchangeable. **Olen koulussa.** means ‘I'm at school / in school.’ **Olen työssä.** is possible but doesn't always correspond to everyday ‘I'm at work’; the common fixed phrase is **Olen töissä.** Learn that separately later if you need it.” | `vocab.koulu`, `vocab.tyo` |
| 7 | `school-meaning` | `exercise` | C04 | none |
| 8 | `work-meaning` | `exercise` | C05 | none |
| 9 | `retrieve-koulu` | `exercise` | C06 | none |
| 10 | `retrieve-tyo` | `exercise` | C07 | none |
| 11 | `shops` | `vocabulary_intro` | **kauppa** — shop/store. **kahvila** — café. **ravintola** — restaurant. “A store is a shop; a café is for coffee and similar refreshments; a restaurant is primarily for meals. These are practical categories, not rigid definitions.” | `vocab.kauppa`, `vocab.kahvila`, `vocab.ravintola` |
| 12 | `choose-shop` | `exercise` | C08 | none |
| 13 | `places-match` | `exercise` | C09 | none |
| 14 | `retrieve-kauppa` | `exercise` | C10 | none |
| 15 | `retrieve-kahvila` | `exercise` | C11 | none |
| 16 | `retrieve-ravintola` | `exercise` | C12 | none |
| 17 | `everyday-facility` | `vocabulary_intro` | **vessa** — toilet/restroom, common informal everyday word. “You can ask **Missä vessa on?** — ‘Where is the toilet?’ The word is natural in ordinary conversation; it is less formal than some alternatives.” | `vocab.vessa` |
| 18 | `recognise-toilet` | `exercise` | C13 | none |
| 19 | `type-vessa` | `exercise` | C14 | none |
| 20 | `toilet-question` | `phrase_intro` | **Missä vessa on?** — “Where is the toilet?” “Use this whole question when asking for the toilet. It combines missä with a place you now know.” | `phrase.missa-vessa-on` |
| 21 | `build-toilet-question` | `exercise` | C15 | none |
| 22 | `location-forms` | `example_set` | **Olen kaupassa.** — “I'm in the shop.” **Olen asunnossa.** — “I'm in the apartment.” **Olen kahvilassa.** — “I'm in the café.” “Notice: kauppa becomes kaupassa, asunto becomes asunnossa. The stem can change. Learn these complete forms instead of guessing arbitrary endings.” | none |
| 23 | `locative-choice` | `exercise` | C16 | none |
| 24 | `recognition-items` | `vocabulary_intro` | **pöytä** — table. **tuoli** — chair. **ovi** — door. **työpaikka** — workplace. **ruokakauppa** — grocery shop. “Recognise these, but you don't need to spell them in Finnish yet.” | `vocab.poyta`, `vocab.tuoli`, `vocab.ovi`, `vocab.tyopaikka`, `vocab.ruokakauppa` |
| 25 | `recognition-board` | `exercise` | C17 | none |
| 26 | `checkpoint` | `checkpoint` | **Useful places.** “Recall one everyday place, then choose the appropriate location form.” C18 → C19. | none |

### Complete exercises

**C01 — `ex.where-are-you.common-places.match-home-place`** · `matching` · guided recognition  
**Prompt:** Match the two nouns with their meanings.  
**Stimulus:** Apartment and general place.  
**Answer:** Individually scored pairs: asunto ↔ apartment / dwelling (`vocab.asunto`); paikka ↔ place / spot (`vocab.paikka`). Match each unique target once.  
**Correct feedback:** Asunto is an apartment/dwelling; paikka means place/spot.  
**Incorrect feedback:** `asunto`: Asunto is apartment/dwelling. `paikka`: Paikka means place.  
**Near feedback:** None.  
**Not sure:** Asunto = apartment; paikka = place.  
**Hint:** null. **Linked:** `vocab.asunto`, `vocab.paikka`. **Scored:** `vocab.asunto`, `vocab.paikka`. **Review eligible:** false, guided batch matching. **Editorial:** `needs_review`.

**C02 — `ex.where-are-you.common-places.write-asunto`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish dictionary word for apartment/dwelling.  
**Stimulus:** apartment / dwelling  
**Answer:** Accepted after N1: `asunto`.  
**Correct feedback:** Asunto means an apartment or dwelling.  
**Incorrect feedback:** Write asunto; asunnossa is a location form.  
**Near feedback:** `asunnossa` → Asunnossa is a location form. The dictionary word is asunto.  
**Not sure:** Write asunto.  
**Hint:** null. **Linked:** `vocab.asunto`. **Scored:** `vocab.asunto`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C03 — `ex.where-are-you.common-places.write-paikka`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish word for place or spot.  
**Stimulus:** place / spot  
**Answer:** Accepted after N1: `paikka`.  
**Correct feedback:** Paikka means place or spot.  
**Incorrect feedback:** Write paikka, with double k.  
**Near feedback:** `paika` → Paikka has double k.  
**Not sure:** Write paikka.  
**Hint:** null. **Linked:** `vocab.paikka`. **Scored:** `vocab.paikka`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C04 — `ex.where-are-you.common-places.recognise-koulu`** · `multiple_choice` · guided recognition  
**Prompt:** What does koulu mean?  
**Stimulus:** koulu  
**Answer:** Options (shuffle stable IDs): `a` work · `b` school · `c` shop. Accepted `b`.  
**Correct feedback:** Koulu means school.  
**Incorrect feedback:** `a`: Work is työ. `c`: Shop is kauppa.  
**Near feedback:** None.  
**Not sure:** Koulu is school.  
**Hint:** null. **Linked:** `vocab.koulu`. **Scored:** `vocab.koulu`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C05 — `ex.where-are-you.common-places.recognise-tyo`** · `multiple_choice` · guided recognition  
**Prompt:** What does työ mean?  
**Stimulus:** työ  
**Answer:** Options (shuffle stable IDs): `a` school · `b` work / job · `c` home. Accepted `b`.  
**Correct feedback:** Työ means work or job.  
**Incorrect feedback:** `a`: Koulu means school. `c`: Home is koti, introduced later.  
**Near feedback:** None.  
**Not sure:** Työ means work/job.  
**Hint:** null. **Linked:** `vocab.tyo`. **Scored:** `vocab.tyo`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C06 — `ex.where-are-you.common-places.write-koulu`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish dictionary word for school.  
**Stimulus:** school  
**Answer:** Accepted after N1: `koulu`.  
**Correct feedback:** Koulu means school.  
**Incorrect feedback:** Write koulu.  
**Near feedback:** None.  
**Not sure:** Write koulu.  
**Hint:** null. **Linked:** `vocab.koulu`. **Scored:** `vocab.koulu`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C07 — `ex.where-are-you.common-places.write-tyo`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish dictionary word for work or job.  
**Stimulus:** work / job  
**Answer:** Accepted after N1: `työ`.  
**Correct feedback:** Työ means work/job.  
**Incorrect feedback:** Write työ, including ö.  
**Near feedback:** `tyo` → Write työ with ö.  
**Not sure:** Write työ.  
**Hint:** null. **Linked:** `vocab.tyo`. **Scored:** `vocab.tyo`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C08 — `ex.where-are-you.common-places.recognise-kauppa`** · `multiple_choice` · guided recognition  
**Prompt:** You want to buy everyday items. Which Finnish noun names a shop/store?  
**Stimulus:** A shop/store.  
**Answer:** Options (shuffle stable IDs): `a` kauppa · `b` kahvila · `c` ravintola. Accepted `a`.  
**Correct feedback:** Kauppa means a shop/store.  
**Incorrect feedback:** `b`: Kahvila is a café. `c`: Ravintola is a restaurant.  
**Near feedback:** None.  
**Not sure:** The word is kauppa.  
**Hint:** null. **Linked:** `vocab.kauppa`, `vocab.kahvila`, `vocab.ravintola`. **Scored:** `vocab.kauppa`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C09 — `ex.where-are-you.common-places.match-everyday-places`** · `matching` · guided recognition  
**Prompt:** Match the three kinds of place to their meanings.  
**Stimulus:** Three independent categories.  
**Answer:** Individually scored pairs: kauppa ↔ shop / store (`vocab.kauppa`); kahvila ↔ café (`vocab.kahvila`); ravintola ↔ restaurant (`vocab.ravintola`). Match each unique target once.  
**Correct feedback:** Kauppa is a shop, kahvila a café, ravintola a restaurant.  
**Incorrect feedback:** `kauppa`: Kauppa is shop. `kahvila`: Kahvila is café. `ravintola`: Ravintola is restaurant.  
**Near feedback:** None.  
**Not sure:** Kauppa = shop; kahvila = café; ravintola = restaurant.  
**Hint:** null. **Linked:** `vocab.kauppa`, `vocab.kahvila`, `vocab.ravintola`. **Scored:** `vocab.kauppa`, `vocab.kahvila`, `vocab.ravintola`. **Review eligible:** false, guided batch matching. **Editorial:** `needs_review`.

**C10 — `ex.where-are-you.common-places.write-kauppa`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish dictionary word for a shop/store.  
**Stimulus:** shop  
**Answer:** Accepted after N1: `kauppa`.  
**Correct feedback:** Kauppa means shop/store.  
**Incorrect feedback:** Write kauppa, with pp.  
**Near feedback:** `kaupa` → Write kauppa, with pp.  
**Not sure:** Write kauppa.  
**Hint:** null. **Linked:** `vocab.kauppa`. **Scored:** `vocab.kauppa`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C11 — `ex.where-are-you.common-places.write-kahvila`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish word for café.  
**Stimulus:** café  
**Answer:** Accepted after N1: `kahvila`.  
**Correct feedback:** Kahvila means café.  
**Incorrect feedback:** Write kahvila.  
**Near feedback:** None.  
**Not sure:** Write kahvila.  
**Hint:** null. **Linked:** `vocab.kahvila`. **Scored:** `vocab.kahvila`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C12 — `ex.where-are-you.common-places.write-ravintola`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish word for restaurant.  
**Stimulus:** restaurant  
**Answer:** Accepted after N1: `ravintola`.  
**Correct feedback:** Ravintola means restaurant.  
**Incorrect feedback:** Write ravintola.  
**Near feedback:** None.  
**Not sure:** Write ravintola.  
**Hint:** null. **Linked:** `vocab.ravintola`. **Scored:** `vocab.ravintola`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C13 — `ex.where-are-you.common-places.recognise-vessa`** · `multiple_choice` · guided recognition  
**Prompt:** What does vessa mean in everyday Finnish?  
**Stimulus:** vessa  
**Answer:** Options (shuffle stable IDs): `a` toilet / restroom · `b` classroom · `c` apartment. Accepted `a`.  
**Correct feedback:** Vessa means a toilet/restroom in everyday speech.  
**Incorrect feedback:** `b`: A classroom is a different place; vessa means toilet. `c`: An apartment is asunto.  
**Near feedback:** None.  
**Not sure:** Vessa means toilet/restroom.  
**Hint:** null. **Linked:** `vocab.vessa`. **Scored:** `vocab.vessa`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C14 — `ex.where-are-you.common-places.write-vessa`** · `text_input` · controlled recall  
**Prompt:** Type the everyday Finnish word for toilet/restroom.  
**Stimulus:** toilet/restroom  
**Answer:** Accepted after N1: `vessa`.  
**Correct feedback:** Vessa is an everyday Finnish word for toilet.  
**Incorrect feedback:** Write vessa, with ss.  
**Near feedback:** `vesa` → Write vessa with ss.  
**Not sure:** Write vessa.  
**Hint:** null. **Linked:** `vocab.vessa`. **Scored:** `vocab.vessa`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C15 — `ex.where-are-you.common-places.build-toilet-question`** · `token_build` · controlled construction  
**Prompt:** Arrange the tiles to ask ‘Where is the toilet?’  
**Stimulus:** Use all three supplied words.  
**Answer:** Shuffled tile bank: on / vessa / Missä. Accepted `Missä vessa on?`.  
**Correct feedback:** Missä vessa on? is a natural everyday location question.  
**Incorrect feedback:** Start with Missä, then vessa, then on.  
**Near feedback:** None.  
**Not sure:** Missä → vessa → on?  
**Hint:** null. **Linked:** `phrase.missa-vessa-on`, `vocab.missa`, `vocab.vessa`. **Scored:** `phrase.missa-vessa-on`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C16 — `ex.where-are-you.common-places.recognise-kaupassa`** · `multiple_choice` · form recognition  
**Prompt:** Which is the correct taught Finnish word form meaning ‘in the shop’?  
**Stimulus:** kauppa → ?  
**Answer:** Options (shuffle stable IDs): `a` kauppassa · `b` kaupassa · `c` kauppa. Accepted `b`.  
**Correct feedback:** Kaupassa means in the shop; the stem changes from kauppa.  
**Incorrect feedback:** `a`: The correct stem gives kaupassa, not kauppassa. `c`: Kauppa is the dictionary form, not the ‘in the shop’ form.  
**Near feedback:** None.  
**Not sure:** Use kaupassa.  
**Hint:** null. **Linked:** `vocab.kauppa`, `grammar.inessive-ssa-ssa`. **Scored:** `grammar.inessive-ssa-ssa`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C17 — `ex.where-are-you.common-places.recognition-five`** · `matching` · recognition-only practice  
**Prompt:** Match the five recognition-only words with their meanings.  
**Stimulus:** Five pairs, presented in manageable scrollable batches, with no Finnish typing.  
**Answer:** Individually scored pairs: pöytä ↔ table (`vocab.poyta`); tuoli ↔ chair (`vocab.tuoli`); ovi ↔ door (`vocab.ovi`); työpaikka ↔ workplace (`vocab.tyopaikka`); ruokakauppa ↔ grocery shop (`vocab.ruokakauppa`). Match each unique target once.  
**Correct feedback:** These words name a table, chair, door, workplace and grocery shop.  
**Incorrect feedback:** `pöytä`: Pöytä means table. `tuoli`: Tuoli means chair. `ovi`: Ovi means door. `työpaikka`: Työpaikka is a workplace. `ruokakauppa`: Ruokakauppa is a grocery shop.  
**Near feedback:** None.  
**Not sure:** pöytä = table; tuoli = chair; ovi = door; työpaikka = workplace; ruokakauppa = grocery shop.  
**Hint:** null. **Linked:** `vocab.poyta`, `vocab.tuoli`, `vocab.ovi`, `vocab.tyopaikka`, `vocab.ruokakauppa`. **Scored:** `vocab.poyta`, `vocab.tuoli`, `vocab.ovi`, `vocab.tyopaikka`, `vocab.ruokakauppa`. **Review eligible:** false, guided batch matching. **Editorial:** `needs_review`.

**C18 — `ex.where-are-you.common-places.checkpoint-restroom`** · `text_input` · independent recall  
**Prompt:** Type the everyday Finnish word for toilet/restroom.  
**Stimulus:** toilet / restroom  
**Answer:** Accepted after N1: `vessa`.  
**Correct feedback:** Vessa means toilet/restroom.  
**Incorrect feedback:** Write vessa, with ss.  
**Near feedback:** `vesa` → Write vessa with ss.  
**Not sure:** Write vessa.  
**Hint:** null. **Linked:** `vocab.vessa`. **Scored:** `vocab.vessa`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

**C19 — `ex.where-are-you.common-places.checkpoint-in-apartment`** · `multiple_choice` · cumulative form recognition  
**Prompt:** Which taught Finnish sentence means ‘I'm in the apartment’?  
**Stimulus:** apartment = asunto  
**Answer:** Options (shuffle stable IDs): `a` Olen asuntossa. · `b` Olen asunnossa. · `c` Olen asunto.. Accepted `b`.  
**Correct feedback:** Olen asunnossa. is correct: asunto changes to asunno- in this form.  
**Incorrect feedback:** `a`: The form is asunnossa, not asuntossa. `c`: Asunto alone is the dictionary noun, not ‘in the apartment’.  
**Near feedback:** None.  
**Not sure:** Use Olen asunnossa.  
**Hint:** null. **Linked:** `vocab.asunto`, `grammar.inessive-ssa-ssa`. **Scored:** `grammar.inessive-ssa-ssa`. **Review eligible:** true, independently meaningful. **Editorial:** `needs_review`.

### Completion

**Headline:** “Places you can name.” **Copy:** “You can name a shop, café, restaurant, school and other useful places. You also know how to ask **Missä vessa on?** and recognise taught forms such as **kaupassa** and **asunnossa**.” **Review:** the eight new production lemmas and five recognition-only words, plus the toilet-location question after formal encounters and appropriate assessment. **No compulsory productive inflection of recognition-only furniture/workplace words.**


## Lesson 4.4 — Saying where you're going

**Metadata:** `lesson.where-are-you.going-to`, `unit.where-are-you`, `fi`, lesson order 4, estimated **8–11 minutes**, prerequisite `lesson.where-are-you.common-places`. **Goal:** ask about destination and name three common destinations. **New production:** `vocab.minne`, `vocab.koti`. **Phrases:** `phrase.minne-menet`, `phrase.menen-kotiin`, `phrase.menen-taught-destination`. **Review:** `vocab.missa`, `vocab.menna`, `vocab.koulu`, `vocab.kauppa`, `grammar.inessive-ssa-ssa`. **Not taught:** general illative forms; only `kotiin`, `kauppaan`, `kouluun` and the fixed question `Minne menet?`. **Completion:** visit all required steps and attempt D01–D12.

### Ordered learner experience

Full ID prefix is `step.where-are-you.going-to.` + suffix. All rows required and formally encountered content appears before the exercises that assess it.

| # | Step suffix | Type | Exact learner-facing text / exercise | New formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **A place or a destination?** “You can ask where something is. Now ask where someone is going and name a few destinations. The form used for going somewhere may be different from the form for being there.” | none |
| 2 | `minne` | `vocabulary_intro` | **minne** — where to? / where, asking about a destination. “Compare **Missä olet?** (‘Where are you?’) with **Minne menet?** (‘Where are you going?’). The first asks about location; the second about movement.” | `vocab.minne` |
| 3 | `question-chunk` | `phrase_intro` | **Minne menet?** — “Where are you going?” “You know mennä → menen (‘I go’). **Menet** is the taught ‘you go’ form in this question. You only need this question, not a six-person verb table.” | `phrase.minne-menet` |
| 4 | `location-versus-destination` | `grammar_explanation` | **Location or direction?** “Use **missä** to ask where someone or something is; use **minne** when movement toward a destination is the point. **Missä olet?** — ‘Where are you?’ **Minne menet?** — ‘Where are you going?’ There is no rule that every English ‘where’ becomes missä.” | `grammar.location-vs-destination` |
| 5 | `recognise-minne` | `exercise` | D01 | none |
| 6 | `distinguish-questions` | `exercise` | D02 | none |
| 7 | `koti` | `vocabulary_intro` | **koti** — home. “The dictionary form is koti. For the destination home in the taught sentence, use **kotiin**.” | `vocab.koti` |
| 8 | `recognise-home` | `exercise` | D03 | none |
| 9 | `home-destination` | `phrase_intro` | **Menen kotiin.** — “I'm going home.” “Kotiin tells the destination. Do not use **koti** alone after menen in this taught sentence.” | `phrase.menen-kotiin` |
| 10 | `recognise-kotiin` | `exercise` | D04 | none |
| 11 | `other-destinations` | `example_set` | **Menen kauppaan.** — “I'm going to the shop.” **Menen kouluun.** — “I'm going to school.” **Menen kotiin.** — “I'm going home.” “These are three separately taught destination forms. Do not try to infer one universal ending for every noun.” | none |
| 12 | `destination-phrase` | `phrase_intro` | **Menen kauppaan. / Menen kouluun.** “These are complete useful expressions. The forms **kauppaan** and **kouluun** are fixed destinations here; the general illative system comes later.” | `phrase.menen-taught-destination` |
| 13 | `match-destinations` | `exercise` | D05 | none |
| 14 | `recall-minne` | `exercise` | D06 | none |
| 15 | `recall-koti` | `exercise` | D07 | none |
| 16 | `build-home` | `exercise` | D08 | none |
| 17 | `choose-destination-form` | `exercise` | D09 | none |
| 18 | `recognise-school` | `exercise` | D10 | none |
| 19 | `checkpoint` | `checkpoint` | **Where to?** “Ask where someone is going, then say you're heading home.” D11 → D12. | none |

### Complete exercises

**D01 — `ex.where-are-you.going-to.minne-meaning`** · `multiple_choice` · recognition  
**Prompt:** What does minne ask in this lesson?  
**Stimulus:** minne?  
**Answer:** Shuffled options: `a` where something is · `b` where someone is going · `c` what something is; accepted `b`.  
**Correct feedback:** Minne asks about destination or direction.  
**Incorrect feedback:** `a`: Where something is uses missä. `c`: What something is uses mikä.  
**Near feedback:** None.  
**Not sure:** Minne asks where to / where someone is going.  
**Hint:** null. **Linked:** `vocab.minne`, `vocab.missa`. **Scored:** `vocab.minne`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D02 — `ex.where-are-you.going-to.choose-location-question`** · `multiple_choice` · contextual recognition  
**Prompt:** You want to know where a person is now, not where they are headed. Which taught question fits?  
**Stimulus:** Current location  
**Answer:** Shuffled options: `a` Minne menet? · `b` Missä olet? · `c` Mikä tämä on?; accepted `b`.  
**Correct feedback:** Missä olet? asks where you are.  
**Incorrect feedback:** `a`: Minne menet? asks where you are going. `c`: Mikä tämä on? asks what this is.  
**Near feedback:** None.  
**Not sure:** Use Missä olet? for current location.  
**Hint:** null. **Linked:** `vocab.missa`, `vocab.minne`, `phrase.minne-menet`. **Scored:** `vocab.missa`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D03 — `ex.where-are-you.going-to.recognise-koti`** · `multiple_choice` · recognition  
**Prompt:** What does koti mean?  
**Stimulus:** koti  
**Answer:** Shuffled options: `a` home · `b` house/building · `c` room; accepted `a`.  
**Correct feedback:** Koti means home, not necessarily a particular building.  
**Incorrect feedback:** `b`: Talo means house/building. `c`: Huone means room.  
**Near feedback:** None.  
**Not sure:** Koti means home.  
**Hint:** null. **Linked:** `vocab.koti`, `vocab.talo`, `vocab.huone`. **Scored:** `vocab.koti`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D04 — `ex.where-are-you.going-to.meaning-kotiin`** · `multiple_choice` · form recognition  
**Prompt:** What does the sentence Menen kotiin. mean?  
**Stimulus:** Menen kotiin.  
**Answer:** Shuffled options: `a` I'm in the house. · `b` I'm going home. · `c` I'm in the house.; accepted `b`.  
**Correct feedback:** Menen kotiin. means I'm going home.  
**Incorrect feedback:** `a`: Olen talossa. describes being in a house, not travelling home. `c`: Olen talossa. says I'm in the house; this is movement toward home.  
**Near feedback:** None.  
**Not sure:** Menen kotiin means I'm going home.  
**Hint:** null. **Linked:** `phrase.menen-kotiin`, `vocab.menna`, `vocab.koti`. **Scored:** `phrase.menen-kotiin`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D05 — `ex.where-are-you.going-to.match-destinations`** · `matching` · guided recognition  
**Prompt:** Match the three complete destination forms to their places.  
**Stimulus:** All three are movement-to forms, not stationary location forms.  
**Answer:** Pairs separately scored: kotiin ↔ toward home / going home (`vocab.koti`); kauppaan ↔ to the shop (`vocab.kauppa`); kouluun ↔ to school (`vocab.koulu`).  
**Correct feedback:** Kotiin = homeward; kauppaan = to the shop; kouluun = to school.  
**Incorrect feedback:** `kotiin`: Kotiin means to home/going home. `kauppaan`: Kauppaan means to the shop. `kouluun`: Kouluun means to school.  
**Near feedback:** None.  
**Not sure:** kotiin = homeward; kauppaan = to a shop; kouluun = to school.  
**Hint:** null. **Linked:** `vocab.koti`, `vocab.kauppa`, `vocab.koulu`, `phrase.menen-taught-destination`. **Scored:** `vocab.koti`, `vocab.kauppa`, `vocab.koulu`. **Review eligible:** false, lesson-only paired exercise. **Editorial:** `needs_review`.

**D06 — `ex.where-are-you.going-to.write-minne`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish question word meaning ‘where to?’  
**Stimulus:** where to / destination  
**Answer:** Accepted N1: `minne`.  
**Correct feedback:** Minne asks for a destination.  
**Incorrect feedback:** Write minne, not missä.  
**Near feedback:** `missä` → Missä asks where someone is, not where they're going.  
**Not sure:** Write minne.  
**Hint:** null. **Linked:** `vocab.minne`. **Scored:** `vocab.minne`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D07 — `ex.where-are-you.going-to.write-koti`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish dictionary noun for home, not its destination form.  
**Stimulus:** home — dictionary form  
**Answer:** Accepted N1: `koti`.  
**Correct feedback:** Koti means home.  
**Incorrect feedback:** Write koti. Kotiin is a destination form.  
**Near feedback:** `kotiin` → Kotiin is the going-home form; the dictionary word is koti.  
**Not sure:** Write koti.  
**Hint:** null. **Linked:** `vocab.koti`. **Scored:** `vocab.koti`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D08 — `ex.where-are-you.going-to.build-home`** · `token_build` · controlled construction  
**Prompt:** Build the taught sentence ‘I'm going home’.  
**Stimulus:** I am going home.  
**Answer:** Shuffled tiles: kotiin / Menen. Accepted `Menen kotiin.`.  
**Correct feedback:** Menen kotiin. gives the destination home.  
**Incorrect feedback:** Use Menen then kotiin.  
**Near feedback:** None.  
**Not sure:** Menen → kotiin.  
**Hint:** null. **Linked:** `phrase.menen-kotiin`, `vocab.koti`, `vocab.menna`. **Scored:** `phrase.menen-kotiin`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D09 — `ex.where-are-you.going-to.choose-kauppaan`** · `multiple_choice` · form recognition  
**Prompt:** Which complete taught sentence means ‘I'm going to the shop’?  
**Stimulus:** You are heading toward the shop.  
**Answer:** Shuffled options: `a` Menen kaupassa. · `b` Menen kauppaan. · `c` Olen kaupassa.; accepted `b`.  
**Correct feedback:** Menen kauppaan. gives the destination.  
**Incorrect feedback:** `a`: Kaupassa means in the shop, not a destination after menen. `c`: Olen kaupassa. says where you are, not where you're going.  
**Near feedback:** None.  
**Not sure:** Use Menen kauppaan.  
**Hint:** null. **Linked:** `phrase.menen-taught-destination`, `vocab.kauppa`, `grammar.inessive-ssa-ssa`. **Scored:** `phrase.menen-taught-destination`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D10 — `ex.where-are-you.going-to.recognise-kouluun`** · `multiple_choice` · form recognition  
**Prompt:** What does kouluun mean in Menen kouluun?  
**Stimulus:** Menen kouluun.  
**Answer:** Shuffled options: `a` to school · `b` at school · `c` from school; accepted `a`.  
**Correct feedback:** Kouluun identifies going to school.  
**Incorrect feedback:** `b`: Koulussa means at/in school. Kouluun is a destination. `c`: From school uses a different form that isn't taught yet.  
**Near feedback:** None.  
**Not sure:** Kouluun = to school.  
**Hint:** null. **Linked:** `vocab.koulu`, `phrase.menen-taught-destination`. **Scored:** `phrase.menen-taught-destination`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D11 — `ex.where-are-you.going-to.checkpoint-question`** · `text_input` · phrase recall  
**Prompt:** Type the complete Finnish question ‘Where are you going?’  
**Stimulus:** Where are you going? (address one person)  
**Answer:** Accepted N1: `Minne menet?`.  
**Correct feedback:** Minne menet? asks someone's destination.  
**Incorrect feedback:** Write Minne menet? The form is menet for ‘you go’.  
**Near feedback:** `minne menen` → Menen means I go; the question to you uses menet.  
**Not sure:** Write Minne menet?  
**Hint:** null. **Linked:** `phrase.minne-menet`, `vocab.minne`, `vocab.menna`. **Scored:** `phrase.minne-menet`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

**D12 — `ex.where-are-you.going-to.checkpoint-going-home`** · `text_input` · phrase recall  
**Prompt:** Without tiles, type the Finnish sentence ‘I'm going home’.  
**Stimulus:** I am going home.  
**Answer:** Accepted N1: `Menen kotiin.` or `Minä menen kotiin.`.  
**Correct feedback:** Menen kotiin. names home as the destination.  
**Incorrect feedback:** Write Menen kotiin; do not use the dictionary form koti here.  
**Near feedback:** `menen koti` → The destination form is kotiin, not the dictionary form koti.  
**Not sure:** Write Menen kotiin.  
**Hint:** null. **Linked:** `phrase.menen-kotiin`, `vocab.koti`, `vocab.menna`. **Scored:** `phrase.menen-kotiin`. **Review eligible:** true, independently contextualised. **Editorial:** `needs_review`.

### Completion

**Headline:** “Now you know where to.” **Copy:** “You can ask **Minne menet?**, say **Menen kotiin**, and recognise **kauppaan** and **kouluun** as destinations. Next, you'll learn how to say you're already at home.” **Review:** the two production lemmas and fixed destination/question phrases, after true encounter and project approval. **No new noun identities** for kotiin, kauppaan or kouluun. **No productive general illative rule.**


## Lesson 4.5 — Useful location phrases

**Metadata:** `lesson.where-are-you.location-phrases`, `unit.where-are-you`, `fi`, order 5, estimated **5–8 minutes**, prerequisite `lesson.where-are-you.going-to`. **Goal:** say you're at home, distinguish destination from location, and tell someone a place is nearby. **New production:** `vocab.lahella`. **New phrases:** `phrase.olen-kotona`, `phrase.kauppa-on-lahella`. **Previously taught:** `vocab.koti`, `vocab.kauppa`, `phrase.menen-kotiin`, `vocab.missa`, `vocab.minne`. **Explicit grammar boundary:** `kotona` is a special taught form, not a regular inessive; `lähellä` is taught lexically, not through a full -lla/-llä paradigm. **Completion:** all steps and E01–E09 attempted or Not sure.

### Ordered learner experience

Step ID prefix `step.where-are-you.location-phrases.` plus suffix; all rows required. Formal phrase and vocabulary encounters precede any scoring.

| # | Step suffix | Type | Exact learner-facing copy / exercise | Formal new encounter |
|---:|---|---|---|---|
| 1 | `intro` | `explanation` | **At home, or heading home?** “A small difference changes the direction of a sentence. You'll also learn how to say a place is nearby.” | none |
| 2 | `home-contrast` | `phrase_intro` | **Olen kotona.** — “I'm at home.” **Menen kotiin.** — “I'm going home.” “Kotona is a special everyday form for being at home. It is **not** an example of simply adding -ssa/-ssä to koti. Kotiin names a destination; the forms are not interchangeable.” | `phrase.olen-kotona` |
| 3 | `recognise-home` | `exercise` | E01 | none |
| 4 | `contrast-location-destination` | `exercise` | E02 | none |
| 5 | `nearby` | `vocabulary_intro` | **lähellä** — near, nearby. “**Kauppa on lähellä.** — ‘The shop is nearby.’ This is one useful adverbial expression. You don't need the full -lla/-llä case system to use it.” | `vocab.lahella` |
| 6 | `recognise-near` | `exercise` | E03 | none |
| 7 | `nearby-phrase` | `phrase_intro` | **Kauppa on lähellä.** — “The shop is nearby.” “A familiar noun plus on and lähellä gives useful information without naming an exact address.” | `phrase.kauppa-on-lahella` |
| 8 | `examples` | `example_set` | **On the phone from home:** “Olen kotona.” **Leaving for home:** “Menen kotiin.” **Talking about the shop a short distance away:** “Kauppa on lähellä.” “Check whether the speaker is describing a location or an action toward a destination.” | none |
| 9 | `retrieve-lahella` | `exercise` | E04 | none |
| 10 | `build-home` | `exercise` | E05 | none |
| 11 | `write-nearby` | `exercise` | E06 | none |
| 12 | `location-word` | `exercise` | E07 | none |
| 13 | `checkpoint` | `checkpoint` | **Home and nearby.** “Respond about home, then choose the sentence about a nearby shop.” E08 → E09. | none |

### Complete exercises

**E01 — `ex.where-are-you.location-phrases.recognise-kotona`** · `multiple_choice` · guided recognition  
**Prompt:** What does Olen kotona. mean?  
**Stimulus:** Olen kotona.  
**Answer:** Options (stable IDs, shuffle): `a` I'm going home. · `b` I'm at home. · `c` I'm in a house, but not necessarily at home.. Correct `b`.  
**Correct feedback:** Olen kotona. tells someone you are at home.  
**Incorrect feedback:** `a`: Menen kotiin. means I'm going home. `c`: Olen talossa. means I'm in the house. Kotona specifically refers to being at home.  
**Near feedback:** None.  
**Not sure:** Olen kotona means I'm at home.  
**Hint:** null. **Linked:** `phrase.olen-kotona`, `phrase.menen-kotiin`, `vocab.koti`. **Scored:** `phrase.olen-kotona`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E02 — `ex.where-are-you.location-phrases.location-vs-destination`** · `multiple_choice` · contextual recognition  
**Prompt:** You are already home, not travelling. Which sentence tells the truth?  
**Stimulus:** You are in your home right now.  
**Answer:** Options (stable IDs, shuffle): `a` Menen kotiin. · `b` Olen kotona. · `c` Menen kouluun.. Correct `b`.  
**Correct feedback:** Olen kotona. is a location statement.  
**Incorrect feedback:** `a`: Menen kotiin. would mean going home, not already there. `c`: Menen kouluun. is going to school, a different destination.  
**Near feedback:** None.  
**Not sure:** Use Olen kotona.  
**Hint:** null. **Linked:** `phrase.olen-kotona`, `phrase.menen-kotiin`, `phrase.menen-taught-destination`. **Scored:** `phrase.olen-kotona`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E03 — `ex.where-are-you.location-phrases.recognise-lahella`** · `multiple_choice` · guided recognition  
**Prompt:** What does lähellä mean in Kauppa on lähellä.?  
**Stimulus:** Kauppa on lähellä.  
**Answer:** Options (stable IDs, shuffle): `a` far away · `b` near / nearby · `c` inside the shop. Correct `b`.  
**Correct feedback:** Lähellä says the shop is nearby.  
**Incorrect feedback:** `a`: Lähellä does not mean far away. `c`: Inside the shop would require a different phrase, such as kaupassa.  
**Near feedback:** None.  
**Not sure:** Lähellä means near/nearby.  
**Hint:** null. **Linked:** `vocab.lahella`, `vocab.kauppa`. **Scored:** `vocab.lahella`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E04 — `ex.where-are-you.location-phrases.write-lahella`** · `text_input` · controlled recall  
**Prompt:** Type the Finnish word for nearby / near.  
**Stimulus:** nearby  
**Answer:** Accepted N1: `lähellä`.  
**Correct feedback:** Lähellä means near or nearby.  
**Incorrect feedback:** Write lähellä, with ä and double l.  
**Near feedback:** `lahella` → Lähellä uses ä; do not strip the dots.  
**Not sure:** Write lähellä.  
**Hint:** null. **Linked:** `vocab.lahella`. **Scored:** `vocab.lahella`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E05 — `ex.where-are-you.location-phrases.build-olen-kotona`** · `token_build` · guided construction  
**Prompt:** Arrange the two tiles to say ‘I'm at home’.  
**Stimulus:** I'm at home.  
**Answer:** Shuffled tiles kotona / Olen; accepted `Olen kotona.`.  
**Correct feedback:** Olen kotona. is the taught home-location expression.  
**Incorrect feedback:** Use Olen first, then kotona.  
**Near feedback:** None.  
**Not sure:** Olen → kotona.  
**Hint:** null. **Linked:** `phrase.olen-kotona`, `vocab.koti`, `vocab.olla`. **Scored:** `phrase.olen-kotona`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E06 — `ex.where-are-you.location-phrases.write-nearby-shop`** · `text_input` · phrase recall  
**Prompt:** Type the taught Finnish sentence ‘The shop is nearby’.  
**Stimulus:** The shop is nearby.  
**Answer:** Accepted N1: `Kauppa on lähellä.`.  
**Correct feedback:** Kauppa on lähellä. uses familiar kauppa and on with lähellä.  
**Incorrect feedback:** Write Kauppa on lähellä. The final word means nearby.  
**Near feedback:** `kauppa on lahella` → Lähellä has ä; use standard Finnish spelling.  
**Not sure:** Write Kauppa on lähellä.  
**Hint:** null. **Linked:** `phrase.kauppa-on-lahella`, `vocab.lahella`, `vocab.kauppa`. **Scored:** `phrase.kauppa-on-lahella`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E07 — `ex.where-are-you.location-phrases.location-vs-moving`** · `multiple_choice` · contextual recognition  
**Prompt:** Someone asks where you are now. You're at home. Which answer is appropriate?  
**Stimulus:** Where are you now?  
**Answer:** Options (stable IDs, shuffle): `a` Menen kotiin. · `b` Olen kotona. · `c` Minne menet?. Correct `b`.  
**Correct feedback:** Olen kotona. answers where you are.  
**Incorrect feedback:** `a`: Menen kotiin. gives a destination while moving, not your current location. `c`: Minne menet? is itself a question about someone's destination.  
**Near feedback:** None.  
**Not sure:** Say Olen kotona.  
**Hint:** null. **Linked:** `phrase.olen-kotona`, `phrase.minne-menet`. **Scored:** `phrase.olen-kotona`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E08 — `ex.where-are-you.location-phrases.checkpoint-home`** · `text_input` · independent phrase recall  
**Prompt:** You are home. Type ‘I'm at home’ in Finnish.  
**Stimulus:** I am at home.  
**Answer:** Accepted N1: `Olen kotona.` or `Minä olen kotona.`.  
**Correct feedback:** Olen kotona. is the correct everyday expression.  
**Incorrect feedback:** Write Olen kotona; do not write Olen kotiin.  
**Near feedback:** `olen kotiin` → Kotiin means going home; at home is kotona.  
**Not sure:** Write Olen kotona.  
**Hint:** null. **Linked:** `phrase.olen-kotona`, `vocab.koti`. **Scored:** `phrase.olen-kotona`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**E09 — `ex.where-are-you.location-phrases.checkpoint-nearby`** · `multiple_choice` · cumulative contextual recognition  
**Prompt:** Which sentence specifically tells someone that the shop is nearby?  
**Stimulus:** The shop is not necessarily where you are.  
**Answer:** Options (stable IDs, shuffle): `a` Olen kaupassa. · `b` Kauppa on lähellä. · `c` Menen kauppaan.. Correct `b`.  
**Correct feedback:** Kauppa on lähellä. describes proximity.  
**Incorrect feedback:** `a`: Olen kaupassa. says I'm in the shop. `c`: Menen kauppaan. says I'm going to the shop.  
**Near feedback:** None.  
**Not sure:** Use Kauppa on lähellä.  
**Hint:** null. **Linked:** `phrase.kauppa-on-lahella`, `phrase.menen-taught-destination`, `vocab.kauppa`. **Scored:** `phrase.kauppa-on-lahella`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

### Completion

**Headline:** “At home or on your way?” **Copy:** “You can say **Olen kotona**, **Menen kotiin**, and **Kauppa on lähellä**. Next you'll put the location and destination language together.” **Review:** the new lemma and phrases after formal encounter and project approval; the earlier kotiin destination phrase is reinforced without duplicate new vocabulary.


## Lesson 4.6 — Location review

**Metadata:** `lesson.where-are-you.location-review`, `unit.where-are-you`, `fi`, lesson order 6, estimated **9–13 minutes**. **Prerequisite:** `lesson.where-are-you.location-phrases`. **Capability:** ask where something is, identify common places, express an inessive location, and distinguish being somewhere from moving toward a destination. **New production:** none. **Recognition:** all Unit 4 recognition items may appear in independent Review, not new introduction. **Grammar:** `grammar.inessive-ssa-ssa`, `grammar.vowel-harmony-location`, `grammar.location-vs-destination` (this lesson reinforces and explicitly labels the contrast established in 4.4). **Phrases:** reuses all required Unit 4 chunks. **Completion:** all required steps plus F01–F14 attempted or Not sure. **Pause:** before the ten-item final checkpoint if needed.

### Ordered learner experience

Full step ID is `step.where-are-you.location-review.` plus suffix. No new vocabulary formal encounters. F05–F14 are the **complete end-of-unit capability checkpoint**, not extra lesson 4.7.

| # | Suffix | Step type | Exact learner-facing copy / exercise | Formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Where you are, and where you're going.** “Use the words from this unit in a few practical situations. Some questions ask for a location; others ask where someone is headed.” | none |
| 2 | `quick-recap` | `example_set` | **Location:** Missä se on? — “Where is it?” **Destination:** Minne menet? — “Where are you going?” **At home:** Olen kotona. **Going home:** Menen kotiin. “Listen to the question's purpose, then choose a matching form.” | none |
| 3 | `review-identify` | `exercise` | F01 | none |
| 4 | `review-forms` | `exercise` | F02 | none |
| 5 | `review-people` | `exercise` | F03 | none |
| 6 | `review-here-there` | `exercise` | F04 | none |
| 7 | `grammar-recap` | `grammar_explanation` | **What you've learned — and what can wait.** “-ssa/-ssä can express ‘in’: talossa, huoneessa. Other nouns may change stems, such as kaupassa and asunnossa. Kotiin, kauppaan and kouluun are learned destinations. Kotona means at home, and is not an ordinary -ssa/-ssä form.” | none |
| 8 | `full-check` | `checkpoint` | **Unit 4 capability check.** “Ask where the toilet is, tell someone you're in a shop, recognise the house form, say you're here, and distinguish location from destination. Each question stands on its own. A perfect score isn't required.” F05, F06, F07, F08, F09, F10, F11, F12, F13, F14. | none |

### Complete exercises

**F01 — `ex.where-are-you.location-review.choose-question-for-place`** · `multiple_choice` · cumulative recognition  
**Prompt:** You want to know where someone is standing right now. Which word starts the location question?  
**Stimulus:** Current location, not destination.  
**Answer:** Options (stable IDs, shuffle): `a` missä · `b` minne · `c` mikä; accepted `a`.  
**Correct feedback:** Missä asks where somebody or something is.  
**Incorrect feedback:** `b`: Minne asks about a destination or movement direction. `c`: Mikä asks what/which, not where.  
**Near feedback:** None.  
**Not sure:** Use missä.  
**Hint:** null. **Linked:** `vocab.missa`, `vocab.minne`, `vocab.mika`. **Scored:** `vocab.missa`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F02 — `ex.where-are-you.location-review.recognise-in-form`** · `multiple_choice` · cumulative form recognition  
**Prompt:** Which Finnish form is the correct taught expression for ‘in the apartment’?  
**Stimulus:** asunto → ?  
**Answer:** Options (stable IDs, shuffle): `a` asuntossa · `b` asunnossa · `c` asuntoon; accepted `b`.  
**Correct feedback:** Asunnossa is the taught inessive form of asunto.  
**Incorrect feedback:** `a`: The stem changes: asunnossa, not asuntossa. `c`: This is a different form and is not the taught ‘in the apartment’ response.  
**Near feedback:** None.  
**Not sure:** Use asunnossa.  
**Hint:** null. **Linked:** `vocab.asunto`, `grammar.inessive-ssa-ssa`. **Scored:** `grammar.inessive-ssa-ssa`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F03 — `ex.where-are-you.location-review.place-category`** · `multiple_choice` · cumulative vocabulary recognition  
**Prompt:** Which Finnish word names a café, rather than a restaurant or a shop?  
**Stimulus:** café  
**Answer:** Options (stable IDs, shuffle): `a` ravintola · `b` kauppa · `c` kahvila; accepted `c`.  
**Correct feedback:** Kahvila means café.  
**Incorrect feedback:** `a`: Ravintola means restaurant. `b`: Kauppa means shop.  
**Near feedback:** None.  
**Not sure:** Use kahvila.  
**Hint:** null. **Linked:** `vocab.kahvila`, `vocab.ravintola`, `vocab.kauppa`. **Scored:** `vocab.kahvila`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F04 — `ex.where-are-you.location-review.where-is-it`** · `multiple_choice` · cumulative situational recognition  
**Prompt:** You and a friend have already mentioned an item that is in another room. Which answer says ‘It's there’?  
**Stimulus:** It is in a different room.  
**Answer:** Options (stable IDs, shuffle): `a` Se on täällä. · `b` Se on siellä. · `c` Olen täällä.; accepted `b`.  
**Correct feedback:** Se on siellä. says the item is there.  
**Incorrect feedback:** `a`: Se on täällä. says it is here with the speaker. `c`: Olen täällä. means I'm here, not that the item is there.  
**Near feedback:** None.  
**Not sure:** Use Se on siellä.  
**Hint:** null. **Linked:** `phrase.se-on-siella`, `phrase.olen-taalla`. **Scored:** `phrase.se-on-siella`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F05 — `ex.where-are-you.location-review.final-toilet-question`** · `text_input` · capability application  
**Prompt:** At a café, ask in everyday Finnish ‘Where is the toilet?’  
**Stimulus:** Where is the toilet?  
**Answer:** Accepted after N1 normalization: `Missä vessa on?`.  
**Correct feedback:** Missä vessa on? is a natural everyday question.  
**Incorrect feedback:** Use Missä vessa on? The word missä asks for location.  
**Near feedback:** `missä vesa on` → Write vessa with ss.  
**Not sure:** Write Missä vessa on?  
**Hint:** null. **Linked:** `phrase.missa-vessa-on`, `vocab.missa`, `vocab.vessa`. **Scored:** `phrase.missa-vessa-on`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F06 — `ex.where-are-you.location-review.final-in-shop`** · `text_input` · capability application  
**Prompt:** Someone asks where you are. Say ‘I'm in the shop’ in Finnish.  
**Stimulus:** I am in the shop.  
**Answer:** Accepted after N1 normalization: `Olen kaupassa.` or `Minä olen kaupassa.`.  
**Correct feedback:** Olen kaupassa. uses the taught correct shop location form.  
**Incorrect feedback:** Use kaupassa, not kauppa or kauppassa.  
**Near feedback:** `olen kauppassa` → The taught shop form is kaupassa, with one p in the location stem.; `olen kauppa` → Use kaupassa for in the shop.  
**Not sure:** Write Olen kaupassa.  
**Hint:** null. **Linked:** `vocab.kauppa`, `grammar.inessive-ssa-ssa`, `vocab.olla`. **Scored:** `grammar.inessive-ssa-ssa`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F07 — `ex.where-are-you.location-review.final-talossa`** · `multiple_choice` · cumulative form recognition  
**Prompt:** What does talossa mean?  
**Stimulus:** talossa  
**Answer:** Options (stable IDs, shuffle): `a` to the house · `b` in the house · `c` home; accepted `b`.  
**Correct feedback:** Talossa means in the house.  
**Incorrect feedback:** `a`: Talossa is a stationary inessive form here, not a destination. `c`: Home is koti; talossa refers to being in a house.  
**Near feedback:** None.  
**Not sure:** Talossa = in the house.  
**Hint:** null. **Linked:** `vocab.talo`, `grammar.inessive-ssa-ssa`. **Scored:** `vocab.talo`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F08 — `ex.where-are-you.location-review.final-im-here`** · `text_input` · capability recall  
**Prompt:** Reply to someone looking for you: ‘I'm here’.  
**Stimulus:** I'm here.  
**Answer:** Accepted after N1 normalization: `Olen täällä.` or `Minä olen täällä.`.  
**Correct feedback:** Olen täällä. tells someone your location.  
**Incorrect feedback:** Use Olen täällä, not siellä if you're indicating your own location here.  
**Near feedback:** `olen taalla` → Write täällä with ä.  
**Not sure:** Write Olen täällä.  
**Hint:** null. **Linked:** `phrase.olen-taalla`, `vocab.taalla`. **Scored:** `phrase.olen-taalla`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F09 — `ex.where-are-you.location-review.final-missa-minne`** · `multiple_choice` · contextual grammar  
**Prompt:** A friend is leaving and you want to ask their destination. Which Finnish question is appropriate?  
**Stimulus:** Where are you going?  
**Answer:** Options (stable IDs, shuffle): `a` Missä se on? · `b` Minne menet? · `c` Mikä tämä on?; accepted `b`.  
**Correct feedback:** Minne menet? asks where the friend is going.  
**Incorrect feedback:** `a`: Missä se on? asks where something is, not where someone is headed. `c`: Mikä tämä on? asks what this is.  
**Near feedback:** None.  
**Not sure:** Use Minne menet?  
**Hint:** null. **Linked:** `phrase.minne-menet`, `vocab.minne`, `vocab.missa`. **Scored:** `phrase.minne-menet`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F10 — `ex.where-are-you.location-review.final-home-contrast`** · `multiple_choice` · contextual grammar  
**Prompt:** You are already at home. Which sentence says that, rather than that you're going home?  
**Stimulus:** You are at home, not on your way.  
**Answer:** Options (stable IDs, shuffle): `a` Menen kotiin. · `b` Olen kotona. · `c` Menen kauppaan.; accepted `b`.  
**Correct feedback:** Olen kotona. means you are at home.  
**Incorrect feedback:** `a`: Menen kotiin. says you're going home. `c`: Menen kauppaan. says you're going to the shop.  
**Near feedback:** None.  
**Not sure:** Use Olen kotona.  
**Hint:** null. **Linked:** `phrase.olen-kotona`, `phrase.menen-kotiin`. **Scored:** `phrase.olen-kotona`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F11 — `ex.where-are-you.location-review.final-destination`** · `text_input` · cumulative phrase recall  
**Prompt:** Type the Finnish sentence ‘I'm going to school’.  
**Stimulus:** I am going to school.  
**Answer:** Accepted after N1 normalization: `Menen kouluun.` or `Minä menen kouluun.`.  
**Correct feedback:** Menen kouluun. gives school as the destination.  
**Incorrect feedback:** Use the taught destination form kouluun, not koulussa.  
**Near feedback:** `menen koulussa` → Koulussa is a location form. A destination uses kouluun.  
**Not sure:** Write Menen kouluun.  
**Hint:** null. **Linked:** `phrase.menen-taught-destination`, `vocab.koulu`, `vocab.menna`. **Scored:** `phrase.menen-taught-destination`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F12 — `ex.where-are-you.location-review.final-vowel-harmony`** · `multiple_choice` · written awareness  
**Prompt:** Which of the supplied examples uses the front-vowel inessive ending -ssä?  
**Stimulus:** talo → talossa; kylä → kylässä (kylä is an unscored example).  
**Answer:** Options (stable IDs, shuffle): `a` talossa · `b` kylässä · `c` talo; accepted `b`.  
**Correct feedback:** Kylässä has the ending -ssä; talossa has -ssa.  
**Incorrect feedback:** `a`: Talossa uses -ssa, the back-vowel ending. `c`: Talo is a dictionary form without the inessive ending.  
**Near feedback:** None.  
**Not sure:** The form is kylässä.  
**Hint:** null. **Linked:** `grammar.vowel-harmony-location`. **Scored:** none; `knowledgeScoring: false`, awareness/capability only. **Review eligible:** false; capability or awareness only. **Editorial:** `needs_review`.

**F13 — `ex.where-are-you.location-review.final-nearby`** · `text_input` · phrase recall  
**Prompt:** Type the taught sentence ‘The shop is nearby’.  
**Stimulus:** The shop is nearby.  
**Answer:** Accepted after N1 normalization: `Kauppa on lähellä.`.  
**Correct feedback:** Kauppa on lähellä. says the shop is near.  
**Incorrect feedback:** Use Kauppa on lähellä; lähellä is the nearby word.  
**Near feedback:** `kauppa on lahella` → The word lähellä has ä.  
**Not sure:** Write Kauppa on lähellä.  
**Hint:** null. **Linked:** `phrase.kauppa-on-lahella`, `vocab.lahella`, `vocab.kauppa`. **Scored:** `phrase.kauppa-on-lahella`. **Review eligible:** true; standalone. **Editorial:** `needs_review`.

**F14 — `ex.where-are-you.location-review.final-integrated`** · `token_build` · capability integration  
**Prompt:** Build two sentences in the given order: ‘I'm at home. I'm going to the shop.’ Use both complete tiles.  
**Stimulus:** Two clauses about current position and next destination.  
**Answer:** Shuffled complete sentence tiles Menen kauppaan. / Olen kotona.. Accepted order: `Olen kotona. Menen kauppaan.`.  
**Correct feedback:** The first sentence states location; the second states a destination.  
**Incorrect feedback:** Put Olen kotona. before Menen kauppaan.  
**Near feedback:** None.  
**Not sure:** Olen kotona. → Menen kauppaan.  
**Hint:** null. **Linked:** `phrase.olen-kotona`, `phrase.menen-taught-destination`, `vocab.kauppa`. **Scored:** none; `knowledgeScoring: false`, awareness/capability only. **Review eligible:** false; capability or awareness only. **Editorial:** `needs_review`.

### Final capability and completion

The ten-item checkpoint F05–F14 fully authors the five curriculum-required capabilities: **Missä vessa on?**, **Olen kaupassa**, recognising **talossa**, producing **Olen täällä**, and distinguishing **missä/minne**. It also tests home versus destination, school destination, optional written vowel awareness, nearby shop and a short integrated location→movement sequence. F12/F14 have no lexical scoring, to avoid treating copied patterns as independent mastery.

**Headline:** “You've found your way.” **Copy:** “You can ask where something is, name places around you, say where you are, and talk about where you're going. Some words and patterns will come back in Review.” **Completion:** all six lessons visited and their required work attempted, not a perfect percentage. **Up next:** Unit 5 — Food & Quantities. **Review:** the same due scheduler; no optional Flashcards/Word Match condition.


## Part III — Independent scheduled-Review variants

Six additional **Review-only** question records are authored here; they are **not mandatory extra lesson steps**. Five independently check the recognition-only items, and R06 offers a self-contained room check. All are `multiple_choice`, `intent: recognition`, `reviewEligible: true`, and can appear only for an encountered/approved target when the normal due scheduler selects it. Recognition-only vocabulary remains comprehension-only.

**R01 — `ex.where-are-you.review.table`** · `multiple_choice` · independent recognition  
**Prompt:** What does **pöytä** mean in the taught context?  
**Stimulus:** `pöytä` (dictionary-form spelling; no picture required).  
**Answer:** Shuffled options: `a` chair · `b` table · `c` door. Accepted ID: `b`.  
**Correct feedback:** Pöytä means table.  
**Incorrect feedback:** `a`: Chair is tuoli. `c`: Door is ovi.  
**Near feedback:** None.  
**Not sure:** Pöytä is table.  
**Hint:** null. **Linked:** `vocab.poyta`. **Scored:** `vocab.poyta` only, in its assigned learning role. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R02 — `ex.where-are-you.review.chair`** · `multiple_choice` · independent recognition  
**Prompt:** What does **tuoli** mean in the taught context?  
**Stimulus:** `tuoli` (dictionary-form spelling; no picture required).  
**Answer:** Shuffled options: `a` table · `b` chair · `c` room. Accepted ID: `b`.  
**Correct feedback:** Tuoli means chair.  
**Incorrect feedback:** `a`: Table is pöytä. `c`: Room is huone.  
**Near feedback:** None.  
**Not sure:** Tuoli is chair.  
**Hint:** null. **Linked:** `vocab.tuoli`. **Scored:** `vocab.tuoli` only, in its assigned learning role. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R03 — `ex.where-are-you.review.door`** · `multiple_choice` · independent recognition  
**Prompt:** What does **ovi** mean in the taught context?  
**Stimulus:** `ovi` (dictionary-form spelling; no picture required).  
**Answer:** Shuffled options: `a` room · `b` door · `c` shop. Accepted ID: `b`.  
**Correct feedback:** Ovi means door.  
**Incorrect feedback:** `a`: Room is huone. `c`: Shop is kauppa.  
**Near feedback:** None.  
**Not sure:** Ovi is door.  
**Hint:** null. **Linked:** `vocab.ovi`. **Scored:** `vocab.ovi` only, in its assigned learning role. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R04 — `ex.where-are-you.review.workplace`** · `multiple_choice` · independent recognition  
**Prompt:** What does **työpaikka** mean in the taught context?  
**Stimulus:** `työpaikka` (dictionary-form spelling; no picture required).  
**Answer:** Shuffled options: `a` grocery shop · `b` workplace · `c` home. Accepted ID: `b`.  
**Correct feedback:** Työpaikka means workplace.  
**Incorrect feedback:** `a`: Grocery shop is ruokakauppa. `c`: Home is koti.  
**Near feedback:** None.  
**Not sure:** Työpaikka means workplace.  
**Hint:** null. **Linked:** `vocab.tyopaikka`. **Scored:** `vocab.tyopaikka` only, in its assigned learning role. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R05 — `ex.where-are-you.review.grocery-shop`** · `multiple_choice` · independent recognition  
**Prompt:** What does **ruokakauppa** mean in the taught context?  
**Stimulus:** `ruokakauppa` (dictionary-form spelling; no picture required).  
**Answer:** Shuffled options: `a` café · `b` grocery shop · `c` restaurant. Accepted ID: `b`.  
**Correct feedback:** Ruokakauppa means grocery shop.  
**Incorrect feedback:** `a`: Café is kahvila. `c`: Restaurant is ravintola.  
**Near feedback:** None.  
**Not sure:** Ruokakauppa means grocery shop.  
**Hint:** null. **Linked:** `vocab.ruokakauppa`. **Scored:** `vocab.ruokakauppa` only, in its assigned learning role. **Review eligible:** true, standalone. **Editorial:** `needs_review`.

**R06 — `ex.where-are-you.review.huone-room`** · `multiple_choice` · independent recognition  
**Prompt:** What does **huone** mean in the taught context?  
**Stimulus:** `huone` (dictionary-form spelling; no picture required).  
**Answer:** Shuffled options: `a` house (dictionary form) · `b` room (dictionary form) · `c` home (dictionary form). Accepted ID: `b`.  
**Correct feedback:** Huone means room.  
**Incorrect feedback:** `a`: House is talo. `c`: Home is koti.  
**Near feedback:** None.  
**Not sure:** Huone means room.  
**Hint:** null. **Linked:** `vocab.huone`. **Scored:** `vocab.huone` only, in its assigned learning role. **Review eligible:** true, standalone. **Editorial:** `needs_review`.


## Part IV — Capability assessment, continuity and practice rules

**Unit 4's complete capability checkpoint is already fully authored as F05–F14 inside Lesson 4.6**, not as a duplicate seventh lesson. It explicitly checks asking where the toilet is (`Missä vessa on?`), saying `Olen kaupassa`, recognising `talossa`, recalling `Olen täällä`, choosing `missä` vs `minne`, a school destination, `kotona/kotiin`, proximity, awareness of `-ssä`, and a capability-only two-sentence sequence.

The five recognition-only lexemes are independently assessed in Lesson 4.3 C17 (five individually scored matching pairs) and have R01–R05 follow-up Review checks. Six matching lesson records total seventeen pair responses; these are not one single score event each.

**Optional practice:** All course vocabulary, taught lexical forms and authored PhraseItems reuse the canonical `fi` registry. Default English→Finnish Flashcards must filter recognition-only items. Word Match must resolve semantic collisions: `talo/koti/asunto/huone/paikka` require meaning qualifiers; `kauppa/ruokakauppa`, `kahvila/ravintola`, `missä/minne`, `täällä/siellä`, and `kotona/kotiin` cannot be forced into overlapping generic English meanings. Use authored context-qualified glosses or exclude competing tiles. No generative case inflection and no duplicate familiarity records for taught forms.

**Cross-unit bridge:** Unit 1 pronouns/`olla`; Unit 2 `Asun Suomessa`, `se/tämä` and questions; Unit 3 `menen/tulen`, `nyt/ehkä` and short action statements. No reintroduction of these earlier lemmas, and no automatic scoring from incidental context.

**Editorial and research:** Unit 4 word forms and the inessive pattern were cross-checked against [Uusi kielemme's inessive guide](https://uusikielemme.fi/finnish-grammar/finnish-cases/location-cases/the-inessive-case-missa), [location-question guide](https://uusikielemme.fi/finnish-grammar/finnish-cases/location-cases/missa-mista-mihin-location-cases), and further Finnish grammar references documented in [QA](./unit-04-coverage-and-qa.md). All newly authored exercises and examples are original for Vokri, not copied from textbooks. They remain `needs_review` until the owner's explicit sign-off; an outside teacher is not required, but no external certification is claimed.

**Documentation-only changes:** no React Native code, existing Unit 1–3 docs, source vocabulary CSV, A1 blueprint, Figma, or Swedish content is edited.
