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
| 8 | `person-in-context` | `example_set` | **Kuka hän on?** — “Who is he/she?” **Hän on Aino.** — “She is Aino.” “Notice the word **on** (‘is’) inside these useful expressions. Learn the expressions as whole examples for now; no third-person conjugation table is required.” | none |
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

**Optional spoken note** (after B02; may be hidden by the Spoken Finnish setting): “You may hear **se** instead of **hän** when people refer to someone in casual conversation. In standard written Finnish, learn **hän** for a particular person. Here, simply recognise that both occur; no extra conjugation task.” Target `spoken.han-se-colloquial`; no independent familiarity score. Do not assert that `se` is never used for people in standard Finnish.

### Fully authored exercises

**B01 — `ex.people-and-things.who-is-that.kuka-person`** · `multiple_choice` · intent recognition · demand guided recognition · difficulty intro  
**Prompt:** You want to ask who an unknown person is. Which word starts that kind of question?  
**Stimulus:** A new person joins your conversation.  
**Answer:** Options (shuffle visually): `a` mikä · `b` kuka · `c` sinä. **Accepted:** `b`.  
**Correct:** Kuka asks who a person is.  
**Incorrect:** `a`: Mikä is the taught ‘what/which’ word; here you are asking about a person’s identity. `c`: Sinä means ‘you’, not the question ‘who?’.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Use kuka for ‘who?’  
**Hint:** null (context already supplied). **Linked:** `vocab.kuka`, `vocab.mika`, `vocab.sina`. **Scored:** `vocab.kuka`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B02 — `ex.people-and-things.who-is-that.han-person`** · `multiple_choice` · intent recognition · demand guided recognition · difficulty intro  
**Prompt:** In standard Finnish, who might hän refer to?  
**Stimulus:** Someone is talking about one person.  
**Answer:** Options (shuffle visually): `a` Only a man · `b` Only a woman · `c` A man or a woman. **Accepted:** `c`.  
**Correct:** Hän refers to one person without marking their gender.  
**Incorrect:** `a`: Hän is not limited to men; Finnish does not distinguish he and she in this pronoun. `b`: Hän is not limited to women; it can refer to any one person.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Hän can mean ‘he’ or ‘she’, depending on context.  
**Hint:** null (context already supplied). **Linked:** `vocab.han`, `grammar.han-person-reference`. **Scored:** `vocab.han`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B03 — `ex.people-and-things.who-is-that.people-match`** · `matching` · intent recognition · demand guided recognition · difficulty guided  
**Prompt:** Match the people words to their meanings.  
**Stimulus:** No separate stimulus.  
**Answer:** Authored pairs, each scored separately: **ihminen** ↔ **a person** (`vocab.ihminen`); **mies** ↔ **a man** (`vocab.mies`); **nainen** ↔ **a woman** (`vocab.nainen`); **lapsi** ↔ **a child** (`vocab.lapsi`). Correct when every chosen pair identity matches; no order constraint.  
**Correct:** Each word names a different kind of person.  
**Incorrect:** Use the specific meaning: person, man, woman or child.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Person = ihminen; man = mies; woman = nainen; child = lapsi.  
**Hint:** null (context already supplied). **Linked:** `vocab.ihminen`, `vocab.mies`, `vocab.nainen`, `vocab.lapsi`. **Scored:** `vocab.ihminen`, `vocab.mies`, `vocab.nainen`, `vocab.lapsi`. **Review eligible:** no, lesson-context board or cue. **Editorial:** `needs_review`.

**B04 — `ex.people-and-things.who-is-that.write-ihminen`** · `text_input` · intent recall · demand cued recall · difficulty recall  
**Prompt:** Recall the general Finnish word for a person. It begins with i.  
**Stimulus:** a person / human  
**Answer:** Accepted under Unit 1 N1 normalisation: `ihminen`.  
**Correct:** Ihminen means a person or human being.  
**Incorrect:** The general word is ihminen.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** The word is ihminen.  
**Hint:** null (context already supplied). **Linked:** `vocab.ihminen`. **Scored:** `vocab.ihminen`. **Review eligible:** no, lesson-context board or cue. **Editorial:** `needs_review`.

**B05 — `ex.people-and-things.who-is-that.write-mies`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish word for man.  
**Stimulus:** man  
**Answer:** Accepted under Unit 1 N1 normalisation: `mies`.  
**Correct:** Mies means a man.  
**Incorrect:** The word for man is mies.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Write mies.  
**Hint:** null (context already supplied). **Linked:** `vocab.mies`. **Scored:** `vocab.mies`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B06 — `ex.people-and-things.who-is-that.write-nainen`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish word for woman.  
**Stimulus:** woman  
**Answer:** Accepted under Unit 1 N1 normalisation: `nainen`.  
**Correct:** Nainen means a woman.  
**Incorrect:** The word for woman is nainen.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Write nainen.  
**Hint:** null (context already supplied). **Linked:** `vocab.nainen`. **Scored:** `vocab.nainen`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B07 — `ex.people-and-things.who-is-that.write-lapsi`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish word for child.  
**Stimulus:** child  
**Answer:** Accepted under Unit 1 N1 normalisation: `lapsi`.  
**Correct:** Lapsi means a child.  
**Incorrect:** The word for child is lapsi.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Write lapsi.  
**Hint:** null (context already supplied). **Linked:** `vocab.lapsi`. **Scored:** `vocab.lapsi`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B08 — `ex.people-and-things.who-is-that.write-han`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the standard Finnish pronoun for he or she.  
**Stimulus:** one person — he/she  
**Answer:** Accepted under Unit 1 N1 normalisation: `hän`.  
**Correct:** Hän is the standard form and it does not mark gender.  
**Incorrect:** The standard pronoun is hän.  
**Near:** `han` → Finnish writes hän with ä; han is not the same form.  
**Not sure:** Write hän, with ä.  
**Hint:** null (context already supplied). **Linked:** `vocab.han`, `grammar.han-person-reference`. **Scored:** `vocab.han`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B09 — `ex.people-and-things.who-is-that.write-kuka`** · `text_input` · intent recall · demand controlled production · difficulty recall  
**Prompt:** Type the Finnish question word for who.  
**Stimulus:** who?  
**Answer:** Accepted under Unit 1 N1 normalisation: `kuka`.  
**Correct:** Kuka asks who someone is.  
**Incorrect:** The question word is kuka. Mikä asks what/which.  
**Near:** `mikä` → Mikä asks ‘what/which’ here. Use kuka for a person’s identity.  
**Not sure:** Write kuka.  
**Hint:** null (context already supplied). **Linked:** `vocab.kuka`, `vocab.mika`. **Scored:** `vocab.kuka`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B10 — `ex.people-and-things.who-is-that.build-who-question`** · `token_build` · intent phrase · demand controlled construction · difficulty construction  
**Prompt:** Build the fixed question: Who is that person? Use all three tiles.  
**Stimulus:** Who is he/she? (The words are provided; you are not being tested on forming on.)  
**Answer:** Shuffled tiles: hän / on / Kuka. Accepted: `Kuka hän on?`.  
**Correct:** Kuka hän on? asks who the person is.  
**Incorrect:** The taught word order is Kuka → hän → on?  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Place Kuka first: Kuka hän on?  
**Hint:** null (context already supplied). **Linked:** `vocab.kuka`, `vocab.han`, `phrase.kuka-han-on`. **Scored:** `phrase.kuka-han-on`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B11 — `ex.people-and-things.who-is-that.recognise-pronoun-group`** · `matching` · intent recognition · demand guided recognition · difficulty recognition-only  
**Prompt:** Match these recognition-only words to their meanings.  
**Stimulus:** No separate stimulus.  
**Answer:** Authored pairs, each scored separately: **me** ↔ **we** (`vocab.me`); **te** ↔ **you — a group or polite form** (`vocab.te`); **he** ↔ **they — people** (`vocab.he`); **ystävä** ↔ **a friend** (`vocab.ystava`). Correct when every chosen pair identity matches; no order constraint.  
**Correct:** These forms refer to groups or a friend. You only need to recognise them for now.  
**Incorrect:** Use the meaning and number of people: we, you, they, or friend.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Me = we; te = plural/polite you; he = they; ystävä = friend.  
**Hint:** null (context already supplied). **Linked:** `vocab.me`, `vocab.te`, `vocab.he`, `vocab.ystava`. **Scored:** `vocab.me`, `vocab.te`, `vocab.he`, `vocab.ystava`. **Review eligible:** no, lesson-context board or cue. **Editorial:** `needs_review`.

**B12 — `ex.people-and-things.who-is-that.checkpoint-who-not-what`** · `multiple_choice` · intent cumulative · demand contextual application · difficulty application  
**Prompt:** A friend introduces someone you have not met. Which Finnish question is about the person's identity?  
**Stimulus:** You want to know who this person is.  
**Answer:** Options (shuffle visually): `a` Mikä tämä on? · `b` Kuka hän on? · `c` Entä sinä?. **Accepted:** `b`.  
**Correct:** Kuka hän on? is a question about who the person is.  
**Incorrect:** `a`: Mikä tämä on? asks what something is in the taught object context. `c`: Entä sinä? means ‘And you?’; it does not ask who someone is.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Use Kuka hän on? for an unknown person.  
**Hint:** null (context already supplied). **Linked:** `phrase.kuka-han-on`, `phrase.mika-tama-on`, `phrase.enta-sina`. **Scored:** `phrase.kuka-han-on`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

**B13 — `ex.people-and-things.who-is-that.checkpoint-child`** · `text_input` · intent cumulative · demand recall · difficulty recall  
**Prompt:** Recall the Finnish word for child.  
**Stimulus:** child  
**Answer:** Accepted under Unit 1 N1 normalisation: `lapsi`.  
**Correct:** Lapsi is the word for child.  
**Incorrect:** The word is lapsi.  
**Near:** None; don't guess at near synonyms.  
**Not sure:** Write lapsi.  
**Hint:** null (context already supplied). **Linked:** `vocab.lapsi`. **Scored:** `vocab.lapsi`. **Review eligible:** yes, standalone. **Editorial:** `needs_review`.

### Lesson completion and handoff

**Headline:** “You can ask about someone.” **Copy:** “You can ask **Kuka hän on?** and recognise basic words for people. Some group pronouns are here for recognition; you don't need to write them yet.” **Completion:** all required steps visited; B01–B13, including B12–B13 checkpoint, attempted or answered Not sure; no perfection gate. **Review:** the six production targets and fixed question chunk become eligible from their formal encounters (subject to existing scheduled Review/editorial gating). Recognition-only `me, te, he, ystävä` are comprehension-only. **Next:** name languages and say which one you speak.
