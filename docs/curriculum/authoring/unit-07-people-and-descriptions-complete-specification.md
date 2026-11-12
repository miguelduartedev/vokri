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

## Lesson 7.1 — Your family

**ID:** `lesson.people-and-descriptions.your-family` · `unit.people-and-descriptions` · `learningLanguage: fi` · Order 1 · **Estimated 9–13 minutes** (untested). **Prerequisite:** `lesson.daily-life.how-often`. **New production:** `vocab.perhe`, `vocab.aiti`, `vocab.isa`, `vocab.veli`, `vocab.sisko`. **New recognition:** `vocab.poika`, `vocab.tytto`. **Earlier review:** `vocab.han`, `vocab.olla`, `vocab.ja`.  
**Capability:** Recognise family terms and independently name five basic relationships. **Completion:** visit all required steps, attempt every A01–A14 or select Not sure, no perfection gate. **Pause:** after A05.

### Ordered learner experience

Full step IDs use `step.people-and-descriptions.your-family.<suffix>`. Only the **Formal encounter** column adds first-contact state; a known word in context does not.

| # | Step suffix | Type | Exact learner-facing copy or exercise reference | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Family words without assumptions.** You'll learn names for relatives and a family as a group. We use fictional people; you never need to disclose your own family situation. Later you'll learn how to say you have or don't have particular relatives. | none | Yes |
| 2 | `mother-father` | `vocabulary_intro` | **äiti — mother; isä — father.** These are common Finnish family nouns. Practise their exact spelling, including ä. | `vocab.aiti`, `vocab.isa` | Yes |
| 3 | `practice-01` | `exercise` | A01 | none | Yes |
| 4 | `brother-sister` | `vocabulary_intro` | **veli — brother; sisko — sister.** These are singular dictionary forms. We are not yet teaching the negative-possession forms veljeä and siskoa. | `vocab.veli`, `vocab.sisko` | Yes |
| 5 | `practice-02` | `exercise` | A02 | none | Yes |
| 6 | `family-group` | `vocabulary_intro` | **perhe — family.** It names the group rather than one individual. Not everyone has the same family relationships, so the examples are fictional and optional personal practice can use the learner's own wording. | `vocab.perhe` | Yes |
| 7 | `practice-03` | `exercise` | A03 | none | Yes |
| 8 | `son-daughter` | `vocabulary_intro` | **poika — boy / son; tyttö — girl / daughter.** Meaning depends on context. Recognition only: you won't be asked to type either noun in Finnish. | `vocab.poika`, `vocab.tytto` | Yes |
| 9 | `practice-04` | `exercise` | A04 | none | Yes |
| 10 | `practice-05` | `exercise` | A05 | none | Yes |
| 11 | `reference-person` | `example_set` | **Hän on äiti.** — That person is a mother. **Hän on isä.** — That person is a father. **Hän** is the familiar standard-language pronoun for a person and does not tell us their gender by itself. | none | Yes |
| 12 | `practice-06` | `exercise` | A06 | none | Yes |
| 13 | `practice-07` | `exercise` | A07 | none | Yes |
| 14 | `practice-08` | `exercise` | A08 | none | Yes |
| 15 | `practice-09` | `exercise` | A09 | none | Yes |
| 16 | `sibling-recap` | `example_set` | Imagine two fictional siblings. One is introduced as a **veli** and another as a **sisko**. These are words to identify relationships; next lesson we will learn how to express having a sister, brother or partner. | none | Yes |
| 17 | `practice-10` | `exercise` | A10 | none | Yes |
| 18 | `practice-11` | `exercise` | A11 | none | Yes |
| 19 | `checkpoint` | `checkpoint` | **Lesson checkpoint A12–A14:** Use supplied family nouns in context and retrieve the right dictionary words. No possession forms assessed yet. | none | Yes |

### Fully authored exercises

All records have `sourceType: original`, `editorialStatus: needs_review`, `reviewedBy: null`; N1 and the shared non-success mapping apply. Matching produces per-pair first-attempt evidence, not a board-wide success event.

**A01 — `ex.people-and-descriptions.your-family.parents-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the two parent terms with their meanings.  
**Stimulus:** Use the Finnish dictionary nouns, not a possession sentence.  
**Matching pairs (2 individual first-attempt decisions):** **äiti ↔ mother**, score `vocab.aiti`; **isä ↔ father**, score `vocab.isa`. Shuffle columns independently.  
**Correct feedback:** Äiti means mother and isä means father.  
**Wrong feedback:** Isä names a father; äiti names a mother.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** äiti → mother; isä → father.  
**Hint:** None. **Linked:** `vocab.aiti`, `vocab.isa`. **Scored:** `vocab.aiti`, `vocab.isa`. **Review eligible:** false; guided or composite. **Editorial:** `needs_review`.  

**A02 — `ex.people-and-descriptions.your-family.siblings-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the two sibling terms with their meanings.  
**Stimulus:** Two Finnish dictionary nouns.  
**Matching pairs (2 individual first-attempt decisions):** **veli ↔ brother**, score `vocab.veli`; **sisko ↔ sister**, score `vocab.sisko`. Shuffle columns independently.  
**Correct feedback:** Veli is brother; sisko is sister.  
**Wrong feedback:** Check which family relationship each noun names: veli brother, sisko sister.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** veli → brother; sisko → sister.  
**Hint:** None. **Linked:** `vocab.veli`, `vocab.sisko`. **Scored:** `vocab.veli`, `vocab.sisko`. **Review eligible:** false; guided or composite. **Editorial:** `needs_review`.  

**A03 — `ex.people-and-descriptions.your-family.family-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which Finnish word means family as a group?  
**Stimulus:** family (not one particular relative)  
**Options (stable IDs, shuffle visually):** `a` perhe · `b` äiti · `c` veli. **Correct:** `a` perhe.  
**Wrong option `b`:** Äiti is mother, one family member.  
**Wrong option `c`:** Veli is brother, one family member.  
**Correct feedback:** Perhe refers to a family; it doesn't identify one single person.  
**Wrong feedback:** The group noun is perhe.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Perhe means family.  
**Hint:** None. **Linked:** `vocab.perhe`. **Scored:** `vocab.perhe`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A04 — `ex.people-and-descriptions.your-family.poika-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In a family context, what can poika mean?  
**Stimulus:** The story says a child is someone's poika.  
**Options (stable IDs, shuffle visually):** `a` son · `b` daughter · `c` father. **Correct:** `a` son.  
**Wrong option `b`:** Tyttö can mean girl/daughter; poika can mean boy/son.  
**Wrong option `c`:** Isä means father, not son.  
**Correct feedback:** Poika means boy and can mean son in a family context.  
**Wrong feedback:** Poika is a boy or son, depending on context.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Poika means boy/son; recognition only.  
**Hint:** None. **Linked:** `vocab.poika`, `vocab.tytto`. **Scored:** `vocab.poika`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A05 — `ex.people-and-descriptions.your-family.tytto-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In a family context, what can tyttö mean?  
**Stimulus:** A child is described as someone's tyttö.  
**Options (stable IDs, shuffle visually):** `a` mother · `b` girl / daughter · `c` brother. **Correct:** `b` girl / daughter.  
**Wrong option `a`:** Äiti means mother, not girl.  
**Wrong option `c`:** Veli means brother, not girl.  
**Correct feedback:** Tyttö can mean girl or daughter depending on context.  
**Wrong feedback:** Tyttö means girl/daughter, not a brother or parent.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Tyttö is girl or daughter, recognition only.  
**Hint:** None. **Linked:** `vocab.tytto`, `vocab.aiti`. **Scored:** `vocab.tytto`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A06 — `ex.people-and-descriptions.your-family.retrieve-aeiti`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary word for mother.  
**Stimulus:** mother  
**Accepted after N1:** `äiti`. No automatic translations.  
**Correct feedback:** Äiti means mother.  
**Wrong feedback:** Use äiti; a different letter changes the Finnish spelling.  
**Near feedback:** `aiti` → The word begins with ä, not a: äiti.  
**Not sure feedback:** Write äiti.  
**Hint:** None. **Linked:** `vocab.aiti`. **Scored:** `vocab.aiti`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A07 — `ex.people-and-descriptions.your-family.retrieve-isa`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary word for father.  
**Stimulus:** father  
**Accepted after N1:** `isä`. No automatic translations.  
**Correct feedback:** Isä is father.  
**Wrong feedback:** The word is isä with ä.  
**Near feedback:** `isa` → Write the final ä: isä.  
**Not sure feedback:** Write isä.  
**Hint:** None. **Linked:** `vocab.isa`. **Scored:** `vocab.isa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A08 — `ex.people-and-descriptions.your-family.retrieve-perhe`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish dictionary word for family.  
**Stimulus:** family (as a group)  
**Accepted after N1:** `perhe`. No automatic translations.  
**Correct feedback:** Perhe is family.  
**Wrong feedback:** Write perhe; it names the family rather than one member.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Write perhe.  
**Hint:** None. **Linked:** `vocab.perhe`. **Scored:** `vocab.perhe`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A09 — `ex.people-and-descriptions.your-family.retrieve-veli`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word for brother.  
**Stimulus:** brother (singular)  
**Accepted after N1:** `veli`. No automatic translations.  
**Correct feedback:** Veli is brother. The word will change in later genitive examples.  
**Wrong feedback:** Write veli. The sister word is sisko.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Write veli.  
**Hint:** None. **Linked:** `vocab.veli`. **Scored:** `vocab.veli`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A10 — `ex.people-and-descriptions.your-family.retrieve-sisko`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish word for sister.  
**Stimulus:** sister (singular)  
**Accepted after N1:** `sisko`. No automatic translations.  
**Correct feedback:** Sisko is sister.  
**Wrong feedback:** Write sisko; veli means brother.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Write sisko.  
**Hint:** None. **Linked:** `vocab.sisko`. **Scored:** `vocab.sisko`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A11 — `ex.people-and-descriptions.your-family.family-identification`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** A fictional person is introduced: 'Hän on äiti.' What does the statement mean?  
**Stimulus:** Hän on äiti.  
**Options (stable IDs, shuffle visually):** `a` That person is a mother. · `b` That person is a sister. · `c` That person is a father.. **Correct:** `a` That person is a mother..  
**Wrong option `b`:** Sister would be sisko, not äiti.  
**Wrong option `c`:** Father would be isä, not äiti.  
**Correct feedback:** Hän on äiti means that person is a mother. Hän doesn't specify gender by itself.  
**Wrong feedback:** Äiti identifies a mother. Hän is not limited to he or she by grammar.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** That person is a mother.  
**Hint:** None. **Linked:** `vocab.aiti`, `vocab.han`, `vocab.olla`. **Scored:** `vocab.aiti`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A12 — `ex.people-and-descriptions.your-family.two-parents`** · `token_build` · intent `controlled_construction` · difficulty `contextual`  
**Prompt:** Arrange these two word tiles to write 'mother and father' in Finnish.  
**Stimulus:** These are family words, not a new sentence pattern.  
**Shuffled lexical tiles:** `isä`, `ja`, `äiti`. **Accepted whole sequences:** `äiti ja isä`, `isä ja äiti`. The displayed tokens must allow both accepted orders; only existing target grammar is assessed.  
**Correct feedback:** Äiti ja isä names mother and father. Either order is reasonable.  
**Wrong feedback:** Join äiti and isä with the earlier word ja, meaning and.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** äiti ja isä  
**Hint:** None. **Linked:** `vocab.aiti`, `vocab.isa`, `vocab.ja`. **Scored:** none. **Review eligible:** false; guided or composite. **Editorial:** `needs_review`.  

**A13 — `ex.people-and-descriptions.your-family.sibling-story`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** The English story identifies a fictional person as 'a brother'. Which Finnish noun matches that role?  
**Stimulus:** Aino's sibling in the story is her brother. Only identify the noun, without a possession form.  
**Options (stable IDs, shuffle visually):** `a` sisko · `b` veli · `c` perhe. **Correct:** `b` veli.  
**Wrong option `a`:** Sisko means sister, not brother.  
**Wrong option `c`:** Perhe names the family, not a brother.  
**Correct feedback:** Veli means brother; possession grammar will come in a later lesson.  
**Wrong feedback:** Choose veli for brother.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Veli means brother.  
**Hint:** None. **Linked:** `vocab.veli`, `vocab.sisko`, `vocab.perhe`. **Scored:** `vocab.veli`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**A14 — `ex.people-and-descriptions.your-family.final-family-recall`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** A fictional person says 'family'. Type the Finnish noun for that group.  
**Stimulus:** family (not an individual family member)  
**Accepted after N1:** `perhe`. No automatic translations.  
**Correct feedback:** Perhe is the family as a whole.  
**Wrong feedback:** Use perhe, rather than äiti, isä, veli or sisko.  
**Near feedback:** None; don't invent an Almost trigger.  
**Not sure feedback:** Write perhe.  
**Hint:** None. **Linked:** `vocab.perhe`, `vocab.aiti`, `vocab.isa`. **Scored:** `vocab.perhe`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Family words, in Finnish.” **Copy:** “You can name basic family relationships and recognise a few more people words. Next you'll learn how to say someone has—or doesn't have—a particular person in their life.” **Required steps:** 19; **required exercises:** 14; **matching pair decisions:** 4. No personal disclosure and no unintroduced possession grammar. **Next:** 7.2 People close to you.

## Lesson 7.2 — People close to you

**ID:** `lesson.people-and-descriptions.people-close-to-you` · `unit.people-and-descriptions` · `fi` · Order 2 · **Estimated 13–20 minutes** (untested; resume after B10). **Prerequisite:** Lesson 7.1. **New production encounters:** `vocab.kumppani`, `vocab.kaveri`. **Role promotion:** `vocab.ystava` (Unit 2 recognition → Unit 7 production, same ID/history). **Grammar:** `grammar.people.possession-positive`, `grammar.people.possession-negative`; **phrase targets:** `phrase.people.minulla-on`, `phrase.people.sinulla-on`, `phrase.people.minulla-ei-ole`.  
**Capability:** express a basic positive possession, address another possessor and make a taught sentence negative using an explicit noun form. **Completion:** all required steps and exercises B01–B18 attempted or Not sure. No learner-life disclosure or blanket noun-case generator.

### Ordered learner experience

IDs: `step.people-and-descriptions.people-close-to-you.<suffix>`. **Production promotion is not a second first encounter:** the same `vocab.ystava` retains its Unit 2 learning history.

| # | Step suffix | Type | Exact teaching text or exercise reference | Formal new encounter | Role promotion | Required |
|---:|---|---|---|---|---|---|
| 1 | `opening` | `explanation` | **People close to you.** You'll learn a neutral word for partner and two everyday friendship words, then learn how Finnish says 'I have' and 'I don't have'. We use fictional speakers so you don't have to describe your own relationships. | none | none | Yes |
| 2 | `relationships` | `vocabulary_intro` | **kumppani — partner** (a neutral word, in a relationship context). **kaveri — friend/buddy**, often informal. **ystävä — friend** is the same word you recognised in Unit 2: now practise producing it independently. There is overlap between ystävä and kaveri; their English meanings are not strict opposites. | `vocab.kumppani`, `vocab.kaveri` | `vocab.ystava` | Yes |
| 3 | `exercise-01` | `exercise` | B01 | none | none | Yes |
| 4 | `exercise-02` | `exercise` | B02 | none | none | Yes |
| 5 | `exercise-03` | `exercise` | B03 | none | none | Yes |
| 6 | `exercise-04` | `exercise` | B04 | none | none | Yes |
| 7 | `exercise-05` | `exercise` | B05 | none | none | Yes |
| 8 | `exercise-06` | `exercise` | B06 | none | none | Yes |
| 9 | `positive-grammar` | `grammar_explanation` | **Minulla on sisko.** — I have a sister. **Sinulla on veli.** — You have a brother. In these special possession sentences Finnish uses *on* with minulla/sinulla, not *olen/olet*. You've seen Minulla on nälkä as a fixed recognition chunk in Unit 5; now learn the reusable positive possession frame. | `grammar.people.possession-positive`, `phrase.people.minulla-on`, `phrase.people.sinulla-on` | none | Yes |
| 10 | `positive-examples` | `example_set` | **Minulla on kumppani.** — I have a partner. **Sinulla on ystävä.** — You have a friend. These are examples about fictional people. There is no separate Finnish verb in our vocabulary list meaning English 'have'. | none | none | Yes |
| 11 | `exercise-07` | `exercise` | B07 | none | none | Yes |
| 12 | `exercise-08` | `exercise` | B08 | none | none | Yes |
| 13 | `exercise-09` | `exercise` | B09 | none | none | Yes |
| 14 | `exercise-10` | `exercise` | B10 | none | none | Yes |
| 15 | `negative-grammar` | `grammar_explanation` | **Minulla ei ole siskoa.** — I don't have a sister. Compare **Minulla on sisko**. In taught negative possession, the noun takes a special partitive form. Learn **siskoa**, **veljeä** and **kumppania** as complete forms. The stem changes in veli → veljeä; there is no universal 'add-a' shortcut. | `grammar.people.possession-negative`, `phrase.people.minulla-ei-ole` | none | Yes |
| 16 | `negative-examples` | `example_set` | **Minulla ei ole veljeä.** — I don't have a brother. **Minulla ei ole kumppania.** — I don't have a partner. **Minulla ei ole ystävää.** — I don't have a friend (recognition only for this last noun form). The negative phrase remains ei ole, not en ole. | none | none | Yes |
| 17 | `exercise-11` | `exercise` | B11 | none | none | Yes |
| 18 | `exercise-12` | `exercise` | B12 | none | none | Yes |
| 19 | `spoken-possess` | `spoken_note` | Optional spoken recognition: standard **minulla on** is often **mulla on**, and **sinulla on** becomes **sulla on** in everyday speech. Continue producing standard Finnish in assessed answers; variants vary by region and register. | none | none | No |
| 20 | `exercise-13` | `exercise` | B13 | none | none | Yes |
| 21 | `exercise-14` | `exercise` | B14 | none | none | Yes |
| 22 | `exercise-15` | `exercise` | B15 | none | none | Yes |
| 23 | `checkpoint` | `checkpoint` | **Lesson checkpoint B16–B18:** decide who the possessor is, retrieve a friend/partner possession statement and independently produce a taught negative pattern. Your answer isn't a personal claim. | none | none | Yes |
| 24 | `checkpoint-explainer` | `example_set` | **Before your checkpoint:** I have a sister → Minulla on sisko. I don't have a brother → Minulla ei ole veljeä. You will retrieve the two patterns independently without being asked to transform arbitrary unseen nouns. | none | none | Yes |

### Complete authored exercises

All exercises: `sourceType: original`, `editorialStatus: needs_review`, `reviewedBy: null`. Negative production is tested **only after** the exact forms siskoa / veljeä / kumppania were introduced. Matching of two noun/forms is recognition practice only; it does not duplicate the same grammar score on each pair.

**B01 — `ex.people-and-descriptions.people-close-to-you.partner-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** A person mentions their kumppani. What relationship does the word most directly describe here?  
**Stimulus:** kumppani in a personal relationship context.  
**Options (stable IDs):** `a` partner · `b` sister · `c` father. **Correct:** `a` partner.  
**Wrong option `b`:** Sisko is sister.  
**Wrong option `c`:** Isä is father.  
**Correct feedback:** Kumppani is a gender-neutral word for partner in this context.  
**Wrong feedback:** Kumppani can describe a partner; sisko and isä are family nouns.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Kumppani means partner.  
**Hint:** None. **Linked:** `vocab.kumppani`. **Scored:** `vocab.kumppani`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B02 — `ex.people-and-descriptions.people-close-to-you.friend-promotion`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** You recognised ystävä in Unit 2. Which meaning belongs to it?  
**Stimulus:** ystävä — the same existing Finnish vocabulary item; now preparing for active recall.  
**Options (stable IDs):** `a` friend · `b` father · `c` house. **Correct:** `a` friend.  
**Wrong option `b`:** Father is isä.  
**Wrong option `c`:** House is talo.  
**Correct feedback:** Ystävä means friend. This is the same word you met earlier, now becoming a production target.  
**Wrong feedback:** Ystävä is friend; no new duplicate vocabulary item is needed.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Ystävä means friend.  
**Hint:** None. **Linked:** `vocab.ystava`. **Scored:** `vocab.ystava`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B03 — `ex.people-and-descriptions.people-close-to-you.buddy-context`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In an informal conversation, what can kaveri mean?  
**Stimulus:** A casual friend or buddy, rather than necessarily a romantic partner.  
**Options (stable IDs):** `a` an aunt · `b` a friend / buddy · `c` a clock. **Correct:** `b` a friend / buddy.  
**Wrong option `a`:** An aunt is a different family relationship, not kaveri.  
**Wrong option `c`:** Clock is kello from Unit 6.  
**Correct feedback:** Kaveri is commonly a friend or buddy; ystävä also means friend, with overlapping meanings.  
**Wrong feedback:** Kaveri is an everyday friend/buddy word; don't assume it always differs sharply from ystävä.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Kaveri means friend / buddy.  
**Hint:** None. **Linked:** `vocab.kaveri`, `vocab.ystava`. **Scored:** `vocab.kaveri`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B04 — `ex.people-and-descriptions.people-close-to-you.write-kumppani`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish word for a partner, without specifying gender.  
**Stimulus:** partner (relationship context)  
**Accepted N1 forms:** `kumppani`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Kumppani is a useful neutral word for partner.  
**Wrong feedback:** Write kumppani. It does not identify the person's gender.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Kumppani.  
**Hint:** None. **Linked:** `vocab.kumppani`. **Scored:** `vocab.kumppani`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B05 — `ex.people-and-descriptions.people-close-to-you.write-ystava`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish word ystävä from your earlier recognition practice: 'friend'.  
**Stimulus:** friend — retrieve the earlier-recognised word independently.  
**Accepted N1 forms:** `ystävä`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Ystävä is now retrieved as production vocabulary; its earlier Unit 2 recognition history stays intact.  
**Wrong feedback:** The word is ystävä with ä in both the middle and final syllable.  
**Near feedback:** `ystava` → Keep Finnish ä letters: ystävä.  
**Not sure feedback:** Write ystävä.  
**Hint:** None. **Linked:** `vocab.ystava`. **Scored:** `vocab.ystava`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B06 — `ex.people-and-descriptions.people-close-to-you.write-kaveri`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish word for a buddy or casual friend.  
**Stimulus:** buddy / friend (common everyday expression)  
**Accepted N1 forms:** `kaveri`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Kaveri means buddy or friend.  
**Wrong feedback:** Use kaveri. Ystävä also means friend but the prompt asks for the buddy term.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Write kaveri.  
**Hint:** None. **Linked:** `vocab.kaveri`, `vocab.ystava`. **Scored:** `vocab.kaveri`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B07 — `ex.people-and-descriptions.people-close-to-you.have-vs-am`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Which sentence expresses 'I have a sister'?  
**Stimulus:** Fictional scenario; choose possession, not personal identity.  
**Options (stable IDs):** `a` Minä olen sisko. · `b` Minulla on sisko. · `c` Sinulla on sisko.. **Correct:** `b` Minulla on sisko..  
**Wrong option `a`:** Minä olen sisko says 'I am a sister', not 'I have a sister'.  
**Wrong option `c`:** Sinulla on sisko says 'You have a sister', not 'I have'.  
**Correct feedback:** Minulla on sisko expresses possession. The verb is on, not olen.  
**Wrong feedback:** Use Minulla on for I have; Minä olen means I am.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Minulla on sisko.  
**Hint:** None. **Linked:** `vocab.sisko`, `grammar.people.possession-positive`, `phrase.people.minulla-on`. **Scored:** `grammar.people.possession-positive`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B08 — `ex.people-and-descriptions.people-close-to-you.have-you-vs-i`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Choose the sentence meaning 'You have a brother'.  
**Stimulus:** The person addressed is 'you', not the speaker.  
**Options (stable IDs):** `a` Minulla on veli. · `b` Sinulla on veli. · `c` Sinä olet veli.. **Correct:** `b` Sinulla on veli..  
**Wrong option `a`:** Minulla on veli means I have a brother.  
**Wrong option `c`:** Sinä olet veli means you are a brother, not you have one.  
**Correct feedback:** Sinulla on veli expresses that you have a brother. The verb is still on.  
**Wrong feedback:** Sinulla on is the taught second-person possession construction.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Sinulla on veli.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.possession-positive`, `phrase.people.sinulla-on`. **Scored:** `phrase.people.sinulla-on`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B09 — `ex.people-and-descriptions.people-close-to-you.type-have-sister`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** A fictional person says 'I have a sister.' Type the full taught Finnish sentence.  
**Stimulus:** I have a sister.  
**Accepted N1 forms:** `Minulla on sisko.`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Minulla on sisko. uses on with a nominative noun in the simple affirmative sentence.  
**Wrong feedback:** Write Minulla on sisko; do not use Minä olen sisko or a negative partitive noun.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Minulla on sisko.  
**Hint:** None. **Linked:** `grammar.people.possession-positive`, `phrase.people.minulla-on`, `vocab.sisko`. **Scored:** `phrase.people.minulla-on`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B10 — `ex.people-and-descriptions.people-close-to-you.type-you-partner`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** In a fictional scene, type 'You have a partner.'  
**Stimulus:** You have a partner.  
**Accepted N1 forms:** `Sinulla on kumppani.`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Sinulla on kumppani. uses the same on for the second-person possessor.  
**Wrong feedback:** Write Sinulla on kumppani. The subject is 'you', so not minulla.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Sinulla on kumppani.  
**Hint:** None. **Linked:** `phrase.people.sinulla-on`, `vocab.kumppani`. **Scored:** `phrase.people.sinulla-on`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B11 — `ex.people-and-descriptions.people-close-to-you.negative-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does Minulla ei ole siskoa mean?  
**Stimulus:** A fictional speaker denies having a sister.  
**Options (stable IDs):** `a` I am a sister. · `b` I have a sister. · `c` I don't have a sister.. **Correct:** `c` I don't have a sister..  
**Wrong option `a`:** The statement says the speaker does not have a sister; this is not 'I am'.  
**Wrong option `b`:** An affirmative version would use Minulla on sisko.  
**Correct feedback:** Minulla ei ole siskoa is negative possession, and the noun is in the taught partitive form.  
**Wrong feedback:** The negative uses ei ole plus the taught form siskoa.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** I don't have a sister.  
**Hint:** None. **Linked:** `grammar.people.possession-negative`, `vocab.sisko`, `phrase.people.minulla-ei-ole`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B12 — `ex.people-and-descriptions.people-close-to-you.partitive-negative-pair`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match each singular family noun to the exact form shown in a negative possession sentence.  
**Stimulus:** These are two **taught** forms, not a general suffix exercise.  
**Matching pairs (2 decisions):** **sisko ↔ siskoa** (learning reference unscored guided form); **veli ↔ veljeä** (learning reference unscored guided form). **Per-pair `scoredTargetIds: []` and capability-only feedback for this guided form board.**  
**Correct feedback:** Sisko → siskoa; veli → veljeä. Veli changes its stem in the partitive.  
**Wrong feedback:** Negative possession uses siskoa or veljeä. Don't write the dictionary noun unchanged.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** sisko → siskoa; veli → veljeä.  
**Hint:** None. **Linked:** `vocab.sisko`, `vocab.veli`, `grammar.people.possession-negative`. **Scored:** none. **Review eligible:** false, lesson dependent or guided. **Editorial:** `needs_review`.  

**B13 — `ex.people-and-descriptions.people-close-to-you.negative-sister`** · `transform` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** Make this taught possession sentence negative while keeping its meaning about a sister.  
**Stimulus:** Minulla on sisko. → I don't have a sister.  
**Accepted N1 forms:** `Minulla ei ole siskoa.`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Minulla ei ole siskoa. uses the specific taught partitive form.  
**Wrong feedback:** Replace on with ei ole, and use siskoa rather than the noun sisko.  
**Near feedback:** `Minulla ei ole sisko.` → The negative needs the taught noun form siskoa.  
**Not sure feedback:** Minulla ei ole siskoa.  
**Hint:** None. **Linked:** `grammar.people.possession-negative`, `vocab.sisko`, `phrase.people.minulla-ei-ole`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B14 — `ex.people-and-descriptions.people-close-to-you.negative-brother`** · `transform` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** Make this taught sentence negative: 'I have a brother.'  
**Stimulus:** Minulla on veli. → I don't have a brother.  
**Accepted N1 forms:** `Minulla ei ole veljeä.`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Minulla ei ole veljeä. shows the correct changing stem veli → veljeä.  
**Wrong feedback:** Use ei ole and the taught form veljeä, not veli or velia.  
**Near feedback:** `Minulla ei ole veli.` → Negative possession requires veljeä, not the bare noun veli.; `Minulla ei ole velia.` → The taught partitive is veljeä, with the changed stem.  
**Not sure feedback:** Minulla ei ole veljeä.  
**Hint:** None. **Linked:** `grammar.people.possession-negative`, `vocab.veli`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B15 — `ex.people-and-descriptions.people-close-to-you.negative-partner`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Choose the correct taught negative sentence for 'I don't have a partner'.  
**Stimulus:** A fictional person, not a question about the learner's personal life.  
**Options (stable IDs):** `a` Minulla ei ole kumppani. · `b` Minulla ei ole kumppania. · `c` Minulla olen kumppania.. **Correct:** `b` Minulla ei ole kumppania..  
**Wrong option `a`:** Negative possession needs kumppania, not the basic noun kumppani.  
**Wrong option `c`:** The construction needs ei ole, not olen, and the correct noun form.  
**Correct feedback:** Minulla ei ole kumppania is standard negative possession.  
**Wrong feedback:** Use ei ole kumppania; don't leave the noun in its dictionary form.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Minulla ei ole kumppania.  
**Hint:** None. **Linked:** `vocab.kumppani`, `grammar.people.possession-negative`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B16 — `ex.people-and-descriptions.people-close-to-you.identify-possessor`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** In 'Sinulla on ystävä', who is described as having a friend?  
**Stimulus:** Sinulla on ystävä.  
**Options (stable IDs):** `a` the speaker (I) · `b` the person addressed (you) · `c` a third person (he/she). **Correct:** `b` the person addressed (you).  
**Wrong option `a`:** The speaker would use Minulla on.  
**Wrong option `c`:** Sinulla is directed at 'you', not a third person.  
**Correct feedback:** Sinulla identifies the person being addressed. Ystävä is the earlier word promoted to production.  
**Wrong feedback:** Sinulla means 'you have' in this construction.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** The person addressed (you).  
**Hint:** None. **Linked:** `grammar.people.possession-positive`, `vocab.ystava`. **Scored:** `grammar.people.possession-positive`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B17 — `ex.people-and-descriptions.people-close-to-you.checkpoint-have-friend`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'I have a friend' using the newly practised production word ystävä.  
**Stimulus:** A fictional speaker has one friend.  
**Accepted N1 forms:** `Minulla on ystävä.`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Minulla on ystävä. combines the possession frame with a word now moved from recognition to production.  
**Wrong feedback:** Use Minulla on ystävä, not Minä olen ystävä.  
**Near feedback:** None (no unsupported near-miss credit).  
**Not sure feedback:** Minulla on ystävä.  
**Hint:** None. **Linked:** `vocab.ystava`, `phrase.people.minulla-on`, `grammar.people.possession-positive`. **Scored:** `vocab.ystava`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**B18 — `ex.people-and-descriptions.people-close-to-you.checkpoint-negative-sibling`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'I don't have a brother' without supplied Finnish choices.  
**Stimulus:** A fictional speaker does not have a brother; use the taught exact negative form.  
**Accepted N1 forms:** `Minulla ei ole veljeä.`. Do not accept missing/incorrect Finnish case endings.  
**Correct feedback:** Minulla ei ole veljeä. applies the earlier taught negative-possession pattern independently.  
**Wrong feedback:** Keep the exact taught noun form veljeä after ei ole.  
**Near feedback:** `Minulla ei ole veli` → Use veljeä, not the dictionary noun.  
**Not sure feedback:** Minulla ei ole veljeä.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.possession-negative`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “A useful way to say ‘have’.” **Copy:** “You can say someone has a sibling or partner, and make specific taught possession sentences negative.” **Steps:** 24 total (23 required), **exercises:** 18, **matching pair decisions:** 2. **Next:** Lesson 7.3 — Whose? And with whom? **Native QA:** Finnish ä/long vowels, negative case forms and a mid-lesson resume boundary.

## Lesson 7.3 — Whose? And with whom?

**ID:** `lesson.people-and-descriptions.whose-and-with-whom` · `unit.people-and-descriptions` · `fi` · Order 3 · **Estimated 13–20 minutes** (untested). **Prerequisite:** Lesson 7.2. **New production:** `vocab.kanssa`. **New grammar:** `grammar.people.genitive-restricted`, `grammar.people.kanssa-genitive`. **Phrase:** `phrase.people.asun-kumppanin-kanssa`. **Review:** `vocab.asua`, `vocab.veli`, `vocab.sisko`, `vocab.kumppani`, `vocab.ystava`.  
**Capability:** recognise limited genitive ownership and independently say that someone lives with a friend/partner. **Completion:** all required steps and C01–C17 attempted or Not sure. **Pause:** after C10, before introducing `kanssa`. No general genitive or possessive suffix algorithm.

### Ordered learner experience

IDs: `step.people-and-descriptions.whose-and-with-whom.<suffix>`. Names are fictional context, not scored vocabulary. One optional spoken recognition note does not block completion.

| # | Step suffix | Step type | Exact learner-facing copy / exercise | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Whose? And with whom?** You can already name relatives and use Minulla on. Now learn a small set of genitive forms for 'whose?' and use kanssa to say you live with someone. The noun can change before -n, so we'll practise real examples rather than a general case chart. | none | Yes |
| 2 | `nouns-genitives` | `grammar_explanation` | **Whose?** Finnish often shows a possessor with a noun form ending in -n: **äiti → äidin**, **veli → veljen**, **sisko → siskon**. These are three complete forms to learn; äiti and veli change their stem. **Äidin nimi** means mother's name; **veljen nimi** means brother's name. | `grammar.people.genitive-restricted` | Yes |
| 3 | `exercise-01` | `exercise` | C01 | none | Yes |
| 4 | `exercise-02` | `exercise` | C02 | none | Yes |
| 5 | `exercise-03` | `exercise` | C03 | none | Yes |
| 6 | `proper-names` | `example_set` | **Aino → Ainon**, **Emma → Emman** (two deliberately taught example names). **Ainon sisko** — Aino's sister. **Emman veli** — Emma's brother. Proper names are context tokens, not new canonical vocabulary lemmas; not all names follow one universal pattern. | none | Yes |
| 7 | `exercise-04` | `exercise` | C04 | none | Yes |
| 8 | `exercise-05` | `exercise` | C05 | none | Yes |
| 9 | `friends-genitives` | `grammar_explanation` | Useful further authored forms: **ystävä → ystävän**, **kaveri → kaverin**, **kumppani → kumppanin**, **isä → isän**. Some are transparent; others have changed stems. They will appear in short phrases and with kanssa. Don't attempt automatic case generation for other nouns. | none | Yes |
| 10 | `exercise-06` | `exercise` | C06 | none | Yes |
| 11 | `exercise-07` | `exercise` | C07 | none | Yes |
| 12 | `exercise-08` | `exercise` | C08 | none | Yes |
| 13 | `minulla-minun` | `grammar_explanation` | **Different jobs:** **minulla** belongs to the construction Minulla on… ('I have'). **minun** is a genitive pronoun meaning 'my/of me'. You need only recognise this difference here; productive possessive suffixes and expressions such as minun + suffix-marked noun are deferred. | none | Yes |
| 14 | `exercise-09` | `exercise` | C09 | none | Yes |
| 15 | `exercise-10` | `exercise` | C10 | none | Yes |
| 16 | `introduce-kanssa` | `vocabulary_intro` | **kanssa — with.** Standard Finnish places this after a noun in an appropriate genitive: **kumppanin kanssa** (with my/a partner), **ystävän kanssa** (with a friend). **kumppani kanssa** is not the taught standard construction. | `vocab.kanssa`, `grammar.people.kanssa-genitive` | Yes |
| 17 | `with-model` | `phrase_intro` | **Asun kumppanin kanssa.** — I live with my partner. You already learned asun in Unit 2. The important new part is **kumppanin kanssa**. Practise the exact phrase without trying to inflect arbitrary nouns. | `phrase.people.asun-kumppanin-kanssa` | Yes |
| 18 | `exercise-11` | `exercise` | C11 | none | Yes |
| 19 | `exercise-12` | `exercise` | C12 | none | Yes |
| 20 | `exercise-13` | `exercise` | C13 | none | Yes |
| 21 | `spoken-kanssa` | `spoken_note` | Optional recognition only: in casual speech kanssa can be shortened to **kaa** (e.g. kumppanin kaa). Standard written exercises require kanssa. **minun → mun** also appears in casual speech; don't practise a new possessive suffix paradigm. | none | No |
| 22 | `exercise-14` | `exercise` | C14 | none | Yes |
| 23 | `checkpoint` | `checkpoint` | **Lesson checkpoint C15–C17:** independently write a sentence with kanssa and a genitive, then express whose brother someone is. Don't generate forms beyond the authored set. | none | Yes |

### Complete authored exercises

Each record: `fi`, `sourceType: original`, `editorialStatus: needs_review`, full N1 answer rules. Per-pair matching of forms is capability-only to prevent repeating one genitive grammar score three times from a guided board.

**C01 — `ex.people-and-descriptions.whose-and-with-whom.recognise-aeidin`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which dictionary noun has the taught genitive form äidin?  
**Stimulus:** äidin (mother's / of mother)  
**Options (stable IDs):** `a` äiti — mother · `b` isä — father · `c` sisko — sister. **Correct:** `a` äiti — mother.  
**Wrong option `b`:** Isän is the taught form for father's.  
**Wrong option `c`:** Siskon is the taught form for sister's.  
**Correct feedback:** Äiti → äidin. The stem changes before the genitive -n.  
**Wrong feedback:** Äidin comes from äiti, not by attaching -n to äiti unchanged.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** äiti → äidin.  
**Hint:** None. **Linked:** `vocab.aiti`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C02 — `ex.people-and-descriptions.whose-and-with-whom.recognise-veljen`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which word has the taught genitive form veljen?  
**Stimulus:** veljen, used in an expression such as 'brother's name'.  
**Options (stable IDs):** `a` sisko · `b` veli · `c` perhe. **Correct:** `b` veli.  
**Wrong option `a`:** Sisko becomes siskon.  
**Wrong option `c`:** Perhe would be perheen; it is not the source of veljen.  
**Correct feedback:** Veli → veljen; the word stem changes.  
**Wrong feedback:** The genitive of veli is veljen, not velin.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** veli → veljen.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C03 — `ex.people-and-descriptions.whose-and-with-whom.genitive-pair-board`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match three dictionary nouns with their explicitly taught genitive forms.  
**Stimulus:** This is finite form-recognition practice, not a general noun-case generator.  
**Matching pairs (3 decisions):** **äiti ↔ äidin**; **sisko ↔ siskon**; **veli ↔ veljen**. **Each pair: `scoredTargetIds: []`; `knowledgeScoring: false`** for this guided form-relationship board.  
**Correct feedback:** Äidin, siskon and veljen are the taught forms of äiti, sisko and veli.  
**Wrong feedback:** Remember the changed stems: äiti → äidin and veli → veljen.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** äiti → äidin; sisko → siskon; veli → veljen.  
**Hint:** None. **Linked:** `vocab.aiti`, `vocab.sisko`, `vocab.veli`, `grammar.people.genitive-restricted`. **Scored:** none. **Review eligible:** false; scaffolded or matching. **Editorial:** `needs_review`.  

**C04 — `ex.people-and-descriptions.whose-and-with-whom.name-aino`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** You mean Aino's sister. Which two-word expression uses the taught proper-name genitive?  
**Stimulus:** Aino's sister (fictional name).  
**Options (stable IDs):** `a` Aino sisko · `b` Ainon sisko · `c` Ainoon sisko. **Correct:** `b` Ainon sisko.  
**Wrong option `a`:** The possessor needs the genitive Ainon.  
**Wrong option `c`:** Ainoon has a different ending; the taught genitive is Ainon.  
**Correct feedback:** Ainon sisko means Aino's sister.  
**Wrong feedback:** For the supplied name Aino, the taught genitive is Ainon.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Ainon sisko.  
**Hint:** None. **Linked:** `vocab.sisko`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C05 — `ex.people-and-descriptions.whose-and-with-whom.name-emma`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** Type the taught genitive of the example name Emma, meaning Emma's.  
**Stimulus:** Emma → Emma's  
**Accepted after N1:** `Emman`. No unguided arbitrary genitive or pronoun case variants.  
**Correct feedback:** Emma → Emman in this taught example.  
**Wrong feedback:** Use Emman, not Emma alone. This is an authored proper-name form, not a rule for all names.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Write Emman.  
**Hint:** None. **Linked:** `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C06 — `ex.people-and-descriptions.whose-and-with-whom.friend-genitive`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Which complete form is 'friend's' in the taught standard Finnish example?  
**Stimulus:** ystävä → ? (a friend's name)  
**Options (stable IDs):** `a` ystävä · `b` ystävän · `c` ystävänä. **Correct:** `b` ystävän.  
**Wrong option `a`:** Ystävä is the dictionary noun, not the taught possessor form.  
**Wrong option `c`:** Ystävänä is a different form, not the genitive we need.  
**Correct feedback:** Ystävä → ystävän is the taught genitive form.  
**Wrong feedback:** Use ystävän in the taught possession phrase.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Ystävän.  
**Hint:** None. **Linked:** `vocab.ystava`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C07 — `ex.people-and-descriptions.whose-and-with-whom.type-veljen`** · `text_input` · intent `controlled_production` · difficulty `controlled`  
**Prompt:** Type the taught genitive of veli, 'brother's'.  
**Stimulus:** veli → brother's  
**Accepted after N1:** `veljen`. No unguided arbitrary genitive or pronoun case variants.  
**Correct feedback:** Veljen is correct; the stem changes from veli.  
**Wrong feedback:** Write veljen, not veli+n or velin.  
**Near feedback:** `velin` → The taught stem is velje-: veljen.  
**Not sure:** Write veljen.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C08 — `ex.people-and-descriptions.whose-and-with-whom.understand-aino-sisko`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** What does 'Ainon sisko on Emma' mean?  
**Stimulus:** Ainon sisko on Emma.  
**Options (stable IDs):** `a` Emma is Aino's sister. · `b` Aino is Emma's sister. · `c` Emma is Aino's partner.. **Correct:** `a` Emma is Aino's sister..  
**Wrong option `b`:** Ainon means Aino's, so the sentence identifies Aino's sister as Emma.  
**Wrong option `c`:** Kumppani would name a partner; sisko means sister.  
**Correct feedback:** Ainon sisko on Emma. identifies Aino's sister as Emma.  
**Wrong feedback:** The genitive Ainon identifies whose sister is being described.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Emma is Aino's sister.  
**Hint:** None. **Linked:** `vocab.sisko`, `grammar.people.genitive-restricted`, `vocab.olla`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C09 — `ex.people-and-descriptions.whose-and-with-whom.write-aino-sister`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'Aino's sister' as the exact taught Finnish two-word expression.  
**Stimulus:** Aino's sister  
**Accepted after N1:** `Ainon sisko`. No unguided arbitrary genitive or pronoun case variants.  
**Correct feedback:** Ainon sisko uses the proper-name genitive Ainon.  
**Wrong feedback:** Write Ainon sisko, keeping the sister noun unchanged in this simple noun phrase.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Ainon sisko.  
**Hint:** None. **Linked:** `vocab.sisko`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C10 — `ex.people-and-descriptions.whose-and-with-whom.minulla-minun`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In which expression does minulla mean 'I have' rather than 'my'?  
**Stimulus:** Compare minulla (in a possession sentence) with minun (genitive pronoun).  
**Options (stable IDs):** `a` Minulla on sisko. · `b` Minun — my (as a genitive form). · `c` Äidin nimi — mother's name.. **Correct:** `a` Minulla on sisko..  
**Wrong option `b`:** Minun is a different genitive pronoun meaning my; it does not make the 'I have' construction alone.  
**Wrong option `c`:** Äidin is the genitive of äiti, not the possessive-person form minulla.  
**Correct feedback:** Minulla on expresses I have; minun belongs to 'my/of me' forms. Don't conflate them.  
**Wrong feedback:** Minulla and minun have different grammatical jobs; we do not teach possessive suffixes now.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Minulla on sisko means I have a sister.  
**Hint:** None. **Linked:** `grammar.people.possession-positive`, `grammar.people.genitive-restricted`. **Scored:** none. **Review eligible:** false; scaffolded or matching. **Editorial:** `needs_review`.  

**C11 — `ex.people-and-descriptions.whose-and-with-whom.kanssa-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does kanssa express in the phrase kumppanin kanssa?  
**Stimulus:** kumppanin kanssa  
**Options (stable IDs):** `a` without a partner · `b` with a partner · `c` about a partner's age. **Correct:** `b` with a partner.  
**Wrong option `a`:** Kanssa means with; without would be a different construction.  
**Wrong option `c`:** Kanssa tells companionship, not age or description.  
**Correct feedback:** Kumppanin kanssa means with a partner.  
**Wrong feedback:** Kanssa means with and follows the authored form kumppanin.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Kumppanin kanssa — with a partner.  
**Hint:** None. **Linked:** `vocab.kanssa`, `vocab.kumppani`, `grammar.people.kanssa-genitive`. **Scored:** `vocab.kanssa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C12 — `ex.people-and-descriptions.whose-and-with-whom.choose-kumppanin-kanssa`** · `multiple_choice` · intent `grammar` · difficulty `controlled`  
**Prompt:** Which phrase correctly says 'with my partner' in the taught standard sentence fragment?  
**Stimulus:** The preposition-like word is kanssa, and the noun needs its authored genitive.  
**Options (stable IDs):** `a` kumppani kanssa · `b` kumppanin kanssa · `c` kumppania kanssa. **Correct:** `b` kumppanin kanssa.  
**Wrong option `a`:** The noun must be kumppanin before kanssa, not the dictionary form.  
**Wrong option `c`:** Kumppania is the partitive taught for negative possession, not the genitive needed here.  
**Correct feedback:** Kumppanin kanssa is the correct standard form.  
**Wrong feedback:** Use kumppanin, not kumppani or kumppania, before kanssa.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Kumppanin kanssa.  
**Hint:** None. **Linked:** `vocab.kumppani`, `vocab.kanssa`, `grammar.people.kanssa-genitive`. **Scored:** `grammar.people.kanssa-genitive`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C13 — `ex.people-and-descriptions.whose-and-with-whom.type-kanssa`** · `text_input` · intent `cued_recall` · difficulty `controlled`  
**Prompt:** Type the Finnish word meaning 'with' in the taught postposition construction.  
**Stimulus:** with — after an appropriately formed noun  
**Accepted after N1:** `kanssa`. No unguided arbitrary genitive or pronoun case variants.  
**Correct feedback:** Kanssa follows its noun phrase, often in the genitive.  
**Wrong feedback:** Write kanssa; it is not an English-style preposition placed before a bare noun.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Write kanssa.  
**Hint:** None. **Linked:** `vocab.kanssa`, `grammar.people.kanssa-genitive`. **Scored:** `vocab.kanssa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C14 — `ex.people-and-descriptions.whose-and-with-whom.build-live-partner`** · `token_build` · intent `controlled_construction` · difficulty `controlled`  
**Prompt:** Arrange the three supplied lexical tiles to say 'I live with my partner.'  
**Stimulus:** The noun and verb forms are fully supplied; this is guided construction.  
**Supplied lowercase lexical tiles:** `kanssa`, `asun`, `kumppanin`. **Accepted whole order:** `Asun kumppanin kanssa.`; sentence-initial capitalisation is applied after assembly.  
**Correct feedback:** Asun kumppanin kanssa. uses the genitive noun before kanssa.  
**Wrong feedback:** Use asun for I live and kumppanin kanssa for with a partner.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Asun kumppanin kanssa.  
**Hint:** None. **Linked:** `vocab.kanssa`, `vocab.kumppani`, `vocab.asua`, `grammar.people.kanssa-genitive`, `phrase.people.asun-kumppanin-kanssa`. **Scored:** `grammar.people.kanssa-genitive`. **Review eligible:** false; scaffolded or matching. **Editorial:** `needs_review`.  

**C15 — `ex.people-and-descriptions.whose-and-with-whom.independent-live-partner`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type the complete taught Finnish sentence 'I live with my partner.'  
**Stimulus:** Fictional speaker. Use standard Finnish, not spoken kaa.  
**Accepted after N1:** `Asun kumppanin kanssa.`, `Minä asun kumppanin kanssa.`. No unguided arbitrary genitive or pronoun case variants.  
**Correct feedback:** Asun kumppanin kanssa. reuses Unit 2 asun and the new genitive + kanssa.  
**Wrong feedback:** The correct construction is Asun kumppanin kanssa. The dictionary noun kumppani changes to kumppanin.  
**Near feedback:** `Asun kumppani kanssa` → Before kanssa, use the taught genitive kumppanin.  
**Not sure:** Asun kumppanin kanssa.  
**Hint:** None. **Linked:** `vocab.kumppani`, `vocab.kanssa`, `vocab.asua`, `phrase.people.asun-kumppanin-kanssa`. **Scored:** `phrase.people.asun-kumppanin-kanssa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C16 — `ex.people-and-descriptions.whose-and-with-whom.independent-live-friend`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Write 'I live with a friend' using the taught formal standard-Finnish form of ystävä.  
**Stimulus:** One fictional friend, not a spouse/partner.  
**Accepted after N1:** `Asun ystävän kanssa.`, `Minä asun ystävän kanssa.`. No unguided arbitrary genitive or pronoun case variants.  
**Correct feedback:** Asun ystävän kanssa. uses the taught genitive ystävän.  
**Wrong feedback:** Use ystävän, not ystävä, before kanssa.  
**Near feedback:** `Asun ystävä kanssa` → The friend form is ystävän before kanssa.  
**Not sure:** Write Asun ystävän kanssa.  
**Hint:** None. **Linked:** `vocab.ystava`, `vocab.kanssa`, `grammar.people.kanssa-genitive`. **Scored:** `grammar.people.kanssa-genitive`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

**C17 — `ex.people-and-descriptions.whose-and-with-whom.final-name-and-person`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'Aino's brother is Olli' using the taught simple genitive form and familiar on.  
**Stimulus:** Fictional Aino and Olli. All names are supplied as context.  
**Accepted after N1:** `Ainon veli on Olli.`. No unguided arbitrary genitive or pronoun case variants.  
**Correct feedback:** Ainon veli on Olli. uses Ainon to identify whose brother Olli is.  
**Wrong feedback:** Use Ainon, followed by the dictionary noun veli and the familiar on; this is not a negative possession sentence.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Ainon veli on Olli.  
**Hint:** None. **Linked:** `grammar.people.genitive-restricted`, `vocab.veli`, `vocab.olla`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Whose, and with whom.” **Copy:** “You can recognise a few genitive forms and say that you live with a friend or partner.” **Required steps:** 22; **optional spoken note:** 1; **exercises:** 17; **matching pair decisions:** 3. **Next:** Lesson 7.4 — Describing someone. Genitive recognition is not mastery of arbitrary noun inflections.

## Lesson 7.4 — Describing someone

**ID:** `lesson.people-and-descriptions.describing-someone` · `unit.people-and-descriptions` · `fi` · Order 4 · **Estimated 10–15 minutes**, untested. **Prerequisite:** Lesson 7.3. **New production:** `vocab.iso`, `vocab.pieni`, `vocab.vanha`, `vocab.nuori`, `vocab.pitka`, `vocab.lyhyt`. **Recognition-only:** `vocab.kaunis`, `vocab.mukava`. **Grammar:** `grammar.people.predicative-singular`. **Support:** `vocab.han`, `vocab.olla`, `vocab.talo`, `vocab.huone`.  
**Capability:** make simple singular descriptions of a fictional person or familiar concrete thing. **Completion:** required steps visited; D01–D16 attempted or Not sure. No appearance stereotypes or case-agreement paradigm.

### Ordered learner experience

Step IDs use `step.people-and-descriptions.describing-someone.<suffix>`.

| # | Step suffix | Type | Exact teaching text or exercise reference | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **Describe someone simply.** Finnish can use a familiar pattern, Hän on + adjective, without a full adjective grammar table. We will practise size, age and height using fictional people or familiar objects. A person's value is never part of the assessment. | none | Yes |
| 2 | `size-words` | `vocabulary_intro` | **iso — big; pieni — small.** Use these for familiar concrete things such as a talo (house) or huone (room). A sentence like Talo on iso uses the already known verb on. | `vocab.iso`, `vocab.pieni` | Yes |
| 3 | `practice-01` | `exercise` | D01 | none | Yes |
| 4 | `age-words` | `vocabulary_intro` | **vanha — old; nuori — young.** These are neutral age words in our fictional examples; do not infer someone's age from appearance or require self-descriptions. | `vocab.vanha`, `vocab.nuori` | Yes |
| 5 | `practice-02` | `exercise` | D02 | none | Yes |
| 6 | `height-words` | `vocabulary_intro` | **pitkä — tall** in a person's height description; it can also mean **long** for a suitable object or time span. **lyhyt — short** in height or length contexts. The English gloss must match the scenario. | `vocab.pitka`, `vocab.lyhyt` | Yes |
| 7 | `practice-03` | `exercise` | D03 | none | Yes |
| 8 | `recognise-extra-adjectives` | `vocabulary_intro` | Recognition only: **kaunis — beautiful**, **mukava — nice/pleasant**. You may recognise them in examples but are not required to type them as productive new adjectives. | `vocab.kaunis`, `vocab.mukava` | Yes |
| 9 | `practice-04` | `exercise` | D04 | none | Yes |
| 10 | `practice-05` | `exercise` | D05 | none | Yes |
| 11 | `predicate-explanation` | `grammar_explanation` | **Hän on pitkä.** — That person is tall. **Hän on nuori.** — That person is young. In these **singular** simple descriptions, the adjective after on keeps its taught basic form. This is not a full table of adjective agreement. | `grammar.people.predicative-singular` | Yes |
| 12 | `practice-06` | `exercise` | D06 | none | Yes |
| 13 | `practice-07` | `exercise` | D07 | none | Yes |
| 14 | `practice-08` | `exercise` | D08 | none | Yes |
| 15 | `practice-09` | `exercise` | D09 | none | Yes |
| 16 | `practice-10` | `exercise` | D10 | none | Yes |
| 17 | `practice-11` | `exercise` | D11 | none | Yes |
| 18 | `object-examples` | `example_set` | **Talo on iso.** — The house is big. **Huone on pieni.** — The room is small. Both nouns were taught in Unit 4. No new case forms of the nouns or adjectives are required here. | none | Yes |
| 19 | `practice-12` | `exercise` | D12 | none | Yes |
| 20 | `checkpoint` | `checkpoint` | **Lesson checkpoint D13–D16:** retrieve a taught adjective in a genuine singular sentence and distinguish height from size; no plural agreement. | none | Yes |

### Complete authored exercises

All exercises use standard Finnish, the existing N1 grader, explicit target scoping, and editorial status needs_review. The two/three-pair recognition boards each score the target item independently on first attempt.

**D01 — `ex.people-and-descriptions.describing-someone.size-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the two size adjectives to their meanings.  
**Stimulus:** Use the Finnish dictionary forms.  
**Pairs (2 independent first-attempt decisions):** **iso ↔ big** scoring `vocab.iso`; **pieni ↔ small** scoring `vocab.pieni`. Contextual glosses prevent ambiguity.  
**Correct feedback:** Iso means big, pieni means small.  
**Wrong feedback:** Big is iso; small is pieni.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** iso → big; pieni → small.  
**Hint:** None. **Linked:** `vocab.iso`, `vocab.pieni`. **Scored:** `vocab.iso`, `vocab.pieni`. **Review eligible:** false, guided board. **Editorial:** `needs_review`.  

**D02 — `ex.people-and-descriptions.describing-someone.age-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the two age descriptions with their meanings.  
**Stimulus:** These are adjectives, not claims about your personal age.  
**Pairs (2 independent first-attempt decisions):** **nuori ↔ young** scoring `vocab.nuori`; **vanha ↔ old** scoring `vocab.vanha`. Contextual glosses prevent ambiguity.  
**Correct feedback:** Nuori means young; vanha means old.  
**Wrong feedback:** Vanha and nuori describe contrasting ages, not size.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** nuori → young; vanha → old.  
**Hint:** None. **Linked:** `vocab.nuori`, `vocab.vanha`. **Scored:** `vocab.nuori`, `vocab.vanha`. **Review eligible:** false, guided board. **Editorial:** `needs_review`.  

**D03 — `ex.people-and-descriptions.describing-someone.height-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the adjectives for tall and short.  
**Stimulus:** In this board the context is a person's height.  
**Pairs (2 independent first-attempt decisions):** **pitkä ↔ tall** scoring `vocab.pitka`; **lyhyt ↔ short** scoring `vocab.lyhyt`. Contextual glosses prevent ambiguity.  
**Correct feedback:** Pitkä means tall here, lyhyt means short.  
**Wrong feedback:** In a height description, pitkä is tall and lyhyt is short. Pitkä can also mean long in another context.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** pitkä → tall; lyhyt → short (height context).  
**Hint:** None. **Linked:** `vocab.pitka`, `vocab.lyhyt`. **Scored:** `vocab.pitka`, `vocab.lyhyt`. **Review eligible:** false, guided board. **Editorial:** `needs_review`.  

**D04 — `ex.people-and-descriptions.describing-someone.kaunis-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does kaunis mean in a simple description?  
**Stimulus:** A fictional context: Hän on kaunis.  
**Options (keyed, shuffle visually):** `a` beautiful · `b` tall · `c` small. **Correct:** `a` beautiful.  
**Wrong `b`:** Tall would be pitkä.  
**Wrong `c`:** Small would be pieni.  
**Correct feedback:** Kaunis means beautiful, a recognition-only word for now.  
**Wrong feedback:** Kaunis is beautiful; it's not another word for tall or small.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Kaunis means beautiful.  
**Hint:** None. **Linked:** `vocab.kaunis`. **Scored:** `vocab.kaunis`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D05 — `ex.people-and-descriptions.describing-someone.mukava-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In an everyday description, how can mukava be understood?  
**Stimulus:** A fictional person is described as mukava.  
**Options (keyed, shuffle visually):** `a` old · `b` nice / pleasant · `c` short. **Correct:** `b` nice / pleasant.  
**Wrong `a`:** Vanha means old.  
**Wrong `c`:** Lyhyt means short.  
**Correct feedback:** Mukava often means nice or pleasant, in context.  
**Wrong feedback:** Mukava means nice/pleasant; it isn't one of the six production adjectives.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Mukava is nice/pleasant.  
**Hint:** None. **Linked:** `vocab.mukava`. **Scored:** `vocab.mukava`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D06 — `ex.people-and-descriptions.describing-someone.retrieve-iso`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for 'big'.  
**Stimulus:** big  
**Accepted after N1:** `iso`.  
**Correct feedback:** Iso is big.  
**Wrong feedback:** Write iso; pieni is small.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Write iso.  
**Hint:** None. **Linked:** `vocab.iso`. **Scored:** `vocab.iso`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D07 — `ex.people-and-descriptions.describing-someone.retrieve-pieni`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for 'small'.  
**Stimulus:** small  
**Accepted after N1:** `pieni`.  
**Correct feedback:** Pieni means small.  
**Wrong feedback:** Write pieni, not iso.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Write pieni.  
**Hint:** None. **Linked:** `vocab.pieni`. **Scored:** `vocab.pieni`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D08 — `ex.people-and-descriptions.describing-someone.retrieve-vanha`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for 'old'.  
**Stimulus:** old (age context)  
**Accepted after N1:** `vanha`.  
**Correct feedback:** Vanha is old.  
**Wrong feedback:** Write vanha; nuori is young.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Write vanha.  
**Hint:** None. **Linked:** `vocab.vanha`. **Scored:** `vocab.vanha`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D09 — `ex.people-and-descriptions.describing-someone.retrieve-nuori`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for 'young'.  
**Stimulus:** young  
**Accepted after N1:** `nuori`.  
**Correct feedback:** Nuori means young.  
**Wrong feedback:** Write nuori, not vanha.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Write nuori.  
**Hint:** None. **Linked:** `vocab.nuori`. **Scored:** `vocab.nuori`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D10 — `ex.people-and-descriptions.describing-someone.retrieve-pitka`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for 'tall' in a height description.  
**Stimulus:** a tall person  
**Accepted after N1:** `pitkä`.  
**Correct feedback:** Pitkä describes tall height; it can also mean long in other contexts.  
**Wrong feedback:** Write pitkä with ä. Lyhyt is short.  
**Near feedback:** `pitka` → The last vowel is ä, so write pitkä.  
**Not sure:** Write pitkä.  
**Hint:** None. **Linked:** `vocab.pitka`. **Scored:** `vocab.pitka`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D11 — `ex.people-and-descriptions.describing-someone.retrieve-lyhyt`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for 'short' in a height description.  
**Stimulus:** a short person  
**Accepted after N1:** `lyhyt`.  
**Correct feedback:** Lyhyt means short in this context.  
**Wrong feedback:** Write lyhyt. Pitkä means tall here.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Write lyhyt.  
**Hint:** None. **Linked:** `vocab.lyhyt`. **Scored:** `vocab.lyhyt`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D12 — `ex.people-and-descriptions.describing-someone.predicate-tall`** · `multiple_choice` · intent `grammar` · difficulty `contextual`  
**Prompt:** Which complete sentence says 'That person is tall'?  
**Stimulus:** A fictional person's height, in a singular predicative sentence.  
**Options (keyed, shuffle visually):** `a` Hän on pitkä. · `b` Hän on pitkän. · `c` Hän on pitkässä.. **Correct:** `a` Hän on pitkä..  
**Wrong `b`:** Pitkän is not the taught predicate form in this sentence.  
**Wrong `c`:** Pitkässä is a different inflected form and is not used in this basic description.  
**Correct feedback:** Hän on pitkä. uses the singular adjective in its basic form.  
**Wrong feedback:** With a singular person and on, the taught predicate is pitkä, not genitive or inessive.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Hän on pitkä.  
**Hint:** None. **Linked:** `vocab.pitka`, `vocab.han`, `grammar.people.predicative-singular`. **Scored:** `grammar.people.predicative-singular`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D13 — `ex.people-and-descriptions.describing-someone.type-young-person`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Describe a fictional person as young: type 'He/she is young' in standard Finnish.  
**Stimulus:** A singular person; remember hän does not indicate gender.  
**Accepted after N1:** `Hän on nuori.`.  
**Correct feedback:** Hän on nuori. is a simple singular description.  
**Wrong feedback:** Use Hän on followed by the adjective nuori, not a plural form.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Write Hän on nuori.  
**Hint:** None. **Linked:** `vocab.nuori`, `vocab.han`, `grammar.people.predicative-singular`. **Scored:** `vocab.nuori`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D14 — `ex.people-and-descriptions.describing-someone.house-is-big`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Which sentence describes a house as big?  
**Stimulus:** The noun talo was taught in Unit 4.  
**Options (keyed, shuffle visually):** `a` Talo on iso. · `b` Talo on pieni. · `c` Talo on vanha.. **Correct:** `a` Talo on iso..  
**Wrong `b`:** Talo on pieni means the house is small.  
**Wrong `c`:** Talo on vanha means the house is old.  
**Correct feedback:** Talo on iso. describes a big house with a simple singular predicate.  
**Wrong feedback:** Use iso for big. Don't change the already known noun talo.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Talo on iso.  
**Hint:** None. **Linked:** `vocab.iso`, `vocab.talo`, `grammar.people.predicative-singular`. **Scored:** `vocab.iso`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D15 — `ex.people-and-descriptions.describing-someone.room-is-small`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'The room is small' using the taught noun huone and adjective pieni.  
**Stimulus:** A fictional room; don't describe anything personal.  
**Accepted after N1:** `Huone on pieni.`.  
**Correct feedback:** Huone on pieni. is a natural simple description of a room.  
**Wrong feedback:** Use Huone on pieni; the adjective is in its basic form.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Write Huone on pieni.  
**Hint:** None. **Linked:** `vocab.pieni`, `vocab.huone`, `grammar.people.predicative-singular`. **Scored:** `vocab.pieni`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

**D16 — `ex.people-and-descriptions.describing-someone.final-short-person`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Independently type 'That person is short' using hän and the taught adjective.  
**Stimulus:** A fictional person, height context.  
**Accepted after N1:** `Hän on lyhyt.`.  
**Correct feedback:** Hän on lyhyt. is a complete and neutral height description.  
**Wrong feedback:** Use lyhyt for short, not pitkä.  
**Near feedback:** None; don't invent near credit.  
**Not sure:** Hän on lyhyt.  
**Hint:** None. **Linked:** `vocab.lyhyt`, `vocab.han`, `grammar.people.predicative-singular`. **Scored:** `vocab.lyhyt`. **Review eligible:** true, standalone. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Describe someone or something.” **Copy:** “You can use familiar on-sentences with basic adjectives to describe a person or object.” **Steps:** 20 required; **exercises:** 16; **matching pairs:** 6. **Next:** Lesson 7.5 — Basic colours. No adjectives are promoted from recognition-only unless explicitly in the new production list.

## Lesson 7.5 — Basic colours

**ID:** `lesson.people-and-descriptions.basic-colours` · `unit.people-and-descriptions` · `fi` · Order 5 · **Estimated 9–14 minutes** (untested). **Prerequisite:** Lesson 7.4. **New production:** `vocab.vari`, `vocab.musta`, `vocab.valkoinen`, `vocab.punainen`, `vocab.sininen`. **New recognition:** `vocab.silma`, `vocab.hius`. **Grammar:** `grammar.people.colour-statement`. **Earlier nouns:** `vocab.talo`, `vocab.huone`.  
**Capability:** name basic colours and describe the colour of a familiar concrete singular noun. **Completion:** required steps and E01–E15 attempted or Not sure. No plural body-part or adjective agreement production.

### Ordered learner experience

Step IDs `step.people-and-descriptions.basic-colours.<suffix>`. Formal encounter is intentional and limited to these entries.

| # | Step suffix | Type | Exact learner-facing copy or exercise | Formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **The colour of familiar things.** You already know talo and huone. Learn four colours and a general noun for colour, then describe a fictional house or room using the same simple on-sentence from Lesson 7.4. No pictures are required. | none | Yes |
| 2 | `colour-words` | `vocabulary_intro` | **väri — colour (noun)**; **musta — black; valkoinen — white**. The noun väri names the category, while musta and valkoinen describe specific colours. | `vocab.vari`, `vocab.musta`, `vocab.valkoinen` | Yes |
| 3 | `exercise-01` | `exercise` | E01 | none | Yes |
| 4 | `red-blue` | `vocabulary_intro` | **punainen — red; sininen — blue.** Both are adjective dictionary forms. We will use them after on in a familiar singular sentence. | `vocab.punainen`, `vocab.sininen` | Yes |
| 5 | `exercise-02` | `exercise` | E02 | none | Yes |
| 6 | `exercise-03` | `exercise` | E03 | none | Yes |
| 7 | `body-recognition` | `vocabulary_intro` | Recognition only: **silmä — eye** and **hius — an individual hair/strand**. Finnish often uses different plural or partitive forms to describe people's eyes and hair, but those constructions are deferred; never require them as production. | `vocab.silma`, `vocab.hius` | Yes |
| 8 | `exercise-04` | `exercise` | E04 | none | Yes |
| 9 | `exercise-05` | `exercise` | E05 | none | Yes |
| 10 | `exercise-06` | `exercise` | E06 | none | Yes |
| 11 | `exercise-07` | `exercise` | E07 | none | Yes |
| 12 | `exercise-08` | `exercise` | E08 | none | Yes |
| 13 | `exercise-09` | `exercise` | E09 | none | Yes |
| 14 | `exercise-10` | `exercise` | E10 | none | Yes |
| 15 | `predicative-colours` | `grammar_explanation` | **Talo on punainen.** — The house is red. **Huone on valkoinen.** — The room is white. The noun is familiar and singular, so use the taught basic colour adjective after on. Don't transfer this unchanged to mass-noun descriptions like coffee; those have different grammar. | `grammar.people.colour-statement` | Yes |
| 16 | `colours-context` | `example_set` | A fictional description says **Talo on sininen** and **Huone on valkoinen**. Both sentences are about concrete singular things, not an image generated by the app. You can read and type them with ordinary text controls. | none | Yes |
| 17 | `exercise-11` | `exercise` | E11 | none | Yes |
| 18 | `exercise-12` | `exercise` | E12 | none | Yes |
| 19 | `checkpoint` | `checkpoint` | **Lesson checkpoint E13–E15:** independently describe a fictional black house and red room, applying the colour statement beyond mere word recognition. | none | Yes |

### Complete authored exercises

Each exercise uses the inherited N1/feedback contract, stable options and exact scoped knowledge targets. No unsupported image/colour-picker interface is required; fictional object colours are specified in text.

**E01 — `ex.people-and-descriptions.basic-colours.black-white-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the two colour words to black and white.  
**Stimulus:** Colour names as standalone adjectives.  
**Matching pairs (2 first-attempt decisions):** **musta ↔ black**, score `vocab.musta`; **valkoinen ↔ white**, score `vocab.valkoinen`.  
**Correct feedback:** Musta is black; valkoinen is white.  
**Wrong feedback:** Musta and valkoinen are contrasting colour words, not adjective agreement forms.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** musta → black; valkoinen → white.  
**Hint:** None. **Linked:** `vocab.musta`, `vocab.valkoinen`. **Scored:** `vocab.musta`, `vocab.valkoinen`. **Review eligible:** false, matching/tiles. **Editorial:** `needs_review`.  

**E02 — `ex.people-and-descriptions.basic-colours.red-blue-match`** · `matching` · intent `recognition` · difficulty `foundation`  
**Prompt:** Match the colours red and blue with their Finnish words.  
**Stimulus:** Two new colour adjectives.  
**Matching pairs (2 first-attempt decisions):** **punainen ↔ red**, score `vocab.punainen`; **sininen ↔ blue**, score `vocab.sininen`.  
**Correct feedback:** Punainen is red; sininen is blue.  
**Wrong feedback:** Don't interchange the two colour words: red punainen, blue sininen.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** punainen → red; sininen → blue.  
**Hint:** None. **Linked:** `vocab.punainen`, `vocab.sininen`. **Scored:** `vocab.punainen`, `vocab.sininen`. **Review eligible:** false, matching/tiles. **Editorial:** `needs_review`.  

**E03 — `ex.people-and-descriptions.basic-colours.colour-noun`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which Finnish word is the noun 'colour'?  
**Stimulus:** The general noun colour, not a particular colour adjective.  
**Options (stable IDs, shuffle visually):** `a` musta · `b` väri · `c` punainen. **Correct:** `b` väri.  
**Wrong option `a`:** Musta is the colour black, not the general noun.  
**Wrong option `c`:** Punainen is red, not the general word for colour.  
**Correct feedback:** Väri means colour as a noun.  
**Wrong feedback:** Väri is the category noun; the others are colour adjectives.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Väri — colour.  
**Hint:** None. **Linked:** `vocab.vari`, `vocab.musta`, `vocab.punainen`. **Scored:** `vocab.vari`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E04 — `ex.people-and-descriptions.basic-colours.silma-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does silmä mean?  
**Stimulus:** silmä (recognition only, singular)  
**Options (stable IDs, shuffle visually):** `a` eye · `b` hair strand · `c` hand. **Correct:** `a` eye.  
**Wrong option `b`:** A single hair strand is hius, not silmä.  
**Wrong option `c`:** Hand is a different Finnish noun, not silmä.  
**Correct feedback:** Silmä means an eye. Plural descriptions are not required.  
**Wrong feedback:** Silmä is eye, not hair or hand.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Silmä means eye.  
**Hint:** None. **Linked:** `vocab.silma`, `vocab.hius`. **Scored:** `vocab.silma`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E05 — `ex.people-and-descriptions.basic-colours.hius-recognition`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** In this singular form, what does hius mean?  
**Stimulus:** hius, one hair / strand of hair  
**Options (stable IDs, shuffle visually):** `a` a single strand of hair · `b` a shoe · `c` an eye. **Correct:** `a` a single strand of hair.  
**Wrong option `b`:** A shoe is a different word, not hius.  
**Wrong option `c`:** Eye is silmä, not hius.  
**Correct feedback:** Hius is an individual hair/strand; no plural hair-description forms are tested.  
**Wrong feedback:** Hius is a single hair strand, not the general plural hairstyle.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Hius — a hair strand.  
**Hint:** None. **Linked:** `vocab.hius`, `vocab.silma`. **Scored:** `vocab.hius`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E06 — `ex.people-and-descriptions.basic-colours.retrieve-vari`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish noun meaning 'colour'.  
**Stimulus:** colour (as a general noun)  
**Accepted after N1:** `väri`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Väri is the noun for colour.  
**Wrong feedback:** Write väri, not a specific colour such as punainen.  
**Near feedback:** `vari` → Use ä in väri.  
**Not sure:** Write väri.  
**Hint:** None. **Linked:** `vocab.vari`. **Scored:** `vocab.vari`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E07 — `ex.people-and-descriptions.basic-colours.retrieve-musta`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for black.  
**Stimulus:** black  
**Accepted after N1:** `musta`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Musta means black.  
**Wrong feedback:** Write musta, not valkoinen (white).  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Write musta.  
**Hint:** None. **Linked:** `vocab.musta`. **Scored:** `vocab.musta`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E08 — `ex.people-and-descriptions.basic-colours.retrieve-valkoinen`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for white.  
**Stimulus:** white  
**Accepted after N1:** `valkoinen`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Valkoinen means white.  
**Wrong feedback:** Write valkoinen, not musta.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Write valkoinen.  
**Hint:** None. **Linked:** `vocab.valkoinen`. **Scored:** `vocab.valkoinen`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E09 — `ex.people-and-descriptions.basic-colours.retrieve-punainen`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for red.  
**Stimulus:** red  
**Accepted after N1:** `punainen`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Punainen is red.  
**Wrong feedback:** Write punainen, not sininen (blue).  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Write punainen.  
**Hint:** None. **Linked:** `vocab.punainen`. **Scored:** `vocab.punainen`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E10 — `ex.people-and-descriptions.basic-colours.retrieve-sininen`** · `text_input` · intent `cued_recall` · difficulty `contextual`  
**Prompt:** Type the Finnish adjective for blue.  
**Stimulus:** blue  
**Accepted after N1:** `sininen`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Sininen means blue.  
**Wrong feedback:** Write sininen, not punainen.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Write sininen.  
**Hint:** None. **Linked:** `vocab.sininen`. **Scored:** `vocab.sininen`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E11 — `ex.people-and-descriptions.basic-colours.red-house`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Which complete Finnish sentence says 'The house is red'?  
**Stimulus:** A fictional house shown in a written property description.  
**Options (stable IDs, shuffle visually):** `a` Talo on punainen. · `b` Talo on sininen. · `c` Talo on punaisessa.. **Correct:** `a` Talo on punainen..  
**Wrong option `b`:** Sininen is blue, not red.  
**Wrong option `c`:** Punaisessa is a different case form, not the taught singular predicate.  
**Correct feedback:** Talo on punainen. is the taught singular colour statement.  
**Wrong feedback:** Use the base colour adjective punainen after on for this concrete singular house.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Talo on punainen.  
**Hint:** None. **Linked:** `vocab.talo`, `vocab.punainen`, `grammar.people.colour-statement`. **Scored:** `grammar.people.colour-statement`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E12 — `ex.people-and-descriptions.basic-colours.blue-house`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Independently type the Finnish sentence 'The house is blue'.  
**Stimulus:** The house is blue. Talo was taught in Unit 4.  
**Accepted after N1:** `Talo on sininen.`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Talo on sininen. describes a blue house.  
**Wrong feedback:** Use Talo on followed by sininen; don't invent inflected colour endings.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Write Talo on sininen.  
**Hint:** None. **Linked:** `vocab.talo`, `vocab.sininen`, `grammar.people.colour-statement`. **Scored:** `vocab.sininen`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E13 — `ex.people-and-descriptions.basic-colours.white-room`** · `token_build` · intent `controlled_construction` · difficulty `contextual`  
**Prompt:** Build 'The room is white' from the supplied lexical tiles.  
**Stimulus:** Three supplied words; capitalize the first assembled word.  
**Shuffled lowercase lexical tiles:** `huone`, `on`, `valkoinen`. **Accepted whole order:** `Huone on valkoinen.`. Capitalise the assembled first word, not a fixed tile.  
**Correct feedback:** Huone on valkoinen. is a simple singular colour description.  
**Wrong feedback:** Put the familiar subject huone first, followed by on and valkoinen.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Huone on valkoinen.  
**Hint:** None. **Linked:** `vocab.huone`, `vocab.valkoinen`, `grammar.people.colour-statement`. **Scored:** `grammar.people.colour-statement`. **Review eligible:** false, matching/tiles. **Editorial:** `needs_review`.  

**E14 — `ex.people-and-descriptions.basic-colours.black-house`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'The house is black' in Finnish without choices.  
**Stimulus:** A fictional house: black exterior.  
**Accepted after N1:** `Talo on musta.`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Talo on musta. uses the basic colour adjective.  
**Wrong feedback:** Use musta for black after Talo on.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Talo on musta.  
**Hint:** None. **Linked:** `vocab.talo`, `vocab.musta`, `grammar.people.colour-statement`. **Scored:** `vocab.musta`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

**E15 — `ex.people-and-descriptions.basic-colours.red-room-final`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'The room is red' in Finnish without word tiles.  
**Stimulus:** A fictional room: red interior.  
**Accepted after N1:** `Huone on punainen.`. No arbitrary mass-noun predicate forms.  
**Correct feedback:** Huone on punainen. applies the taught singular colour statement.  
**Wrong feedback:** Use huone from Unit 4 and punainen from this lesson.  
**Near feedback:** None; not every colour mistake is near.  
**Not sure:** Huone on punainen.  
**Hint:** None. **Linked:** `vocab.huone`, `vocab.punainen`, `grammar.people.colour-statement`. **Scored:** `vocab.punainen`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.  

### Lesson completion

**Headline:** “Colours in everyday sentences.” **Copy:** “You can name four colours and describe the colour of familiar singular objects.” **Steps:** 19, **required exercises:** 15, **matching pairs:** 4. Colour nouns are new, but house and room remain earlier vocabulary. **Next:** Lesson 7.6 — People review.

## Lesson 7.6 — People review

**ID:** `lesson.people-and-descriptions.people-review` · `unit.people-and-descriptions` · `fi` · Order 6 · **Estimated 12–18 minutes** (untested). **Prerequisite:** Lesson 7.5. **New production/recognition:** none. **Capability:** produce simple possession, negative possession, person descriptors, genitive ownership and colour statements, and integrate them into a short fictional profile. **Prerequisite targets:** all Unit 7 forms/phrases; previously encountered `hän`, `olla`, `asua`, `talo`, `huone`.  
**Completion:** all required steps and F01–F16 attempted or Not sure, without a perfect-score condition. **Pause:** before the six-task final checkpoint F11–F16.

### Ordered learner experience

Full step IDs `step.people-and-descriptions.people-review.<suffix>`. No new formal encounters or production role promotions occur in the review lesson.

| # | Step suffix | Type | Exact learner-facing content / exercise | New formal encounter | Required |
|---:|---|---|---|---|---|
| 1 | `opening` | `explanation` | **People review.** You have learned family words, simple possession, limited genitives and kanssa, basic adjectives and colours. Combine them in short fictional descriptions. You do not need to tell the app anything about your own family or partner. | none | Yes |
| 2 | `possession-recap` | `example_set` | **Minulla on sisko.** — I have a sister. **Minulla ei ole veljeä.** — I don't have a brother. The taught negative forms siskoa and veljeä are not arbitrary -a endings. The verb remains on or ei ole. | none | Yes |
| 3 | `practice-01` | `exercise` | F01 | none | Yes |
| 4 | `practice-02` | `exercise` | F02 | none | Yes |
| 5 | `practice-03` | `exercise` | F03 | none | Yes |
| 6 | `practice-04` | `exercise` | F04 | none | Yes |
| 7 | `practice-05` | `exercise` | F05 | none | Yes |
| 8 | `genitive-recap` | `example_set` | **Ainon sisko** — Aino's sister. **Asun kumppanin kanssa.** — I live with my partner. The genitive forms Ainon and kumppanin serve different examples but follow the same limited authored pattern. | none | Yes |
| 9 | `practice-06` | `exercise` | F06 | none | Yes |
| 10 | `practice-07` | `exercise` | F07 | none | Yes |
| 11 | `practice-08` | `exercise` | F08 | none | Yes |
| 12 | `practice-09` | `exercise` | F09 | none | Yes |
| 13 | `adjective-recap` | `example_set` | **Hän on pitkä.** — That person is tall. **Hän on nuori.** — That person is young. **Talo on punainen.** — The house is red. No plural adjective agreement, personal appearance judgment or new case production is required. | none | Yes |
| 14 | `practice-10` | `exercise` | F10 | none | Yes |
| 15 | `unit-capability-check` | `checkpoint` | **Unit 7 checkpoint F11–F16:** independently describe a person and a coloured house, recognise a genitive relationship, build a fictional mini-profile and apply the taught negative possession of kumppani. Each task keeps precise feedback and scoring. | none | Yes |
| 16 | `assessment-transition` | `explanation` | **Your first short people profile.** The remaining exercises include an authored three-sentence fictional profile using exactly known words. Writing supplied facts is an A1 learning task, not a request to disclose personal details. Multi-line acceptance will be implemented with three scoped inputs if necessary. | none | Yes |

### Fully authored exercises, including six-task final capability assessment

All records have `learningLanguage: fi`, `sourceType: original`, `editorialStatus: needs_review`, `reviewedBy: null`. F11–F16 are inside Lesson 7.6; they do not constitute a seventh lesson. F15 is **capability-only**, scoredTargetIds empty, and must retain each input sentence boundary deterministically.

**F01 — `ex.people-and-descriptions.people-review.possession-choice`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which sentence correctly says 'I have a brother'?  
**Stimulus:** A fictional speaker, present tense.  
**Options (stable IDs, shuffle):** `a` Minulla on veli. · `b` Minä olen veli. · `c` Minulla ei ole veljeä.. **Correct:** `a` Minulla on veli..  
**Wrong option `b`:** Minä olen veli says I am a brother, not that I have one.  
**Wrong option `c`:** Minulla ei ole veljeä says I don't have a brother.  
**Correct feedback:** Minulla on veli expresses affirmative possession.  
**Wrong feedback:** Use Minulla on + the noun for I have, rather than minä olen.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Minulla on veli.  
**Hint:** None. **Linked:** `vocab.veli`, `phrase.people.minulla-on`, `grammar.people.possession-positive`. **Scored:** `grammar.people.possession-positive`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F02 — `ex.people-and-descriptions.people-review.independent-sister`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Type 'I have a sister' in the taught Finnish form.  
**Stimulus:** A fictional speaker; no family disclosure is requested.  
**Accepted after N1:** `Minulla on sisko.`. Authored forms only; no guessed stems.  
**Correct feedback:** Minulla on sisko. is a correct simple positive possession sentence.  
**Wrong feedback:** Use Minulla on sisko, not Minulla olen sisko.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Minulla on sisko.  
**Hint:** None. **Linked:** `vocab.sisko`, `phrase.people.minulla-on`. **Scored:** `phrase.people.minulla-on`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F03 — `ex.people-and-descriptions.people-review.negative-meaning`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** What does Minulla ei ole veljeä mean?  
**Stimulus:** Minulla ei ole veljeä.  
**Options (stable IDs, shuffle):** `a` I have a brother. · `b` I don't have a brother. · `c` I am a brother.. **Correct:** `b` I don't have a brother..  
**Wrong option `a`:** This is negative; affirmative would be Minulla on veli.  
**Wrong option `c`:** I am a brother would use an olla sentence, not negative possession.  
**Correct feedback:** Minulla ei ole veljeä denies having a brother; the noun is partitive.  
**Wrong feedback:** The taught negative is ei ole veljeä, not the bare word veli.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** I don't have a brother.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.possession-negative`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F04 — `ex.people-and-descriptions.people-review.transform-sister`** · `transform` · intent `controlled_production` · difficulty `contextual`  
**Prompt:** Change the positive sentence to the taught negative version, keeping the sister meaning.  
**Stimulus:** Minulla on sisko. → I don't have a sister.  
**Accepted after N1:** `Minulla ei ole siskoa.`. Authored forms only; no guessed stems.  
**Correct feedback:** Minulla ei ole siskoa. uses the correct taught partitive siskoa.  
**Wrong feedback:** Use ei ole siskoa; don't leave the noun unchanged.  
**Near feedback:** `Minulla ei ole sisko` → Negative possession requires siskoa, not the basic noun.  
**Not sure:** Minulla ei ole siskoa.  
**Hint:** None. **Linked:** `vocab.sisko`, `grammar.people.possession-negative`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F05 — `ex.people-and-descriptions.people-review.transform-brother`** · `transform` · intent `controlled_production` · difficulty `contextual`  
**Prompt:** Change this sentence to 'I don't have a brother'.  
**Stimulus:** Minulla on veli.  
**Accepted after N1:** `Minulla ei ole veljeä.`. Authored forms only; no guessed stems.  
**Correct feedback:** Veljeä is the partitive form of veli after ei ole.  
**Wrong feedback:** Use Minulla ei ole veljeä, not velia or veli.  
**Near feedback:** `Minulla ei ole veli` → Use veljeä after ei ole.; `Minulla ei ole velia` → The correct changed stem is veljeä.  
**Not sure:** Minulla ei ole veljeä.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.possession-negative`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F06 — `ex.people-and-descriptions.people-review.genitive-aino`** · `multiple_choice` · intent `recognition` · difficulty `foundation`  
**Prompt:** Which English meaning fits Ainon sisko?  
**Stimulus:** Ainon sisko (fictional Aino)  
**Options (stable IDs, shuffle):** `a` Aino's sister · `b` Aino is a sister · `c` Aino's partner. **Correct:** `a` Aino's sister.  
**Wrong option `b`:** This is a noun phrase with a possessor, not a full 'Aino is' sentence.  
**Wrong option `c`:** Partner would be kumppani rather than sisko.  
**Correct feedback:** Ainon sisko means Aino's sister; Ainon is a genitive form.  
**Wrong feedback:** Ainon specifies whose sister is meant.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Aino's sister.  
**Hint:** None. **Linked:** `vocab.sisko`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F07 — `ex.people-and-descriptions.people-review.recall-veljen`** · `text_input` · intent `controlled_production` · difficulty `contextual`  
**Prompt:** Type the taught genitive of veli, meaning 'brother's'.  
**Stimulus:** brother's (genitive singular)  
**Accepted after N1:** `veljen`. Authored forms only; no guessed stems.  
**Correct feedback:** Veli → veljen is a taught stem-changing genitive.  
**Wrong feedback:** Write veljen, not velin.  
**Near feedback:** `velin` → The taught form has the changed stem velje-: veljen.  
**Not sure:** Veljen.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.genitive-restricted`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F08 — `ex.people-and-descriptions.people-review.with-partner-choice`** · `multiple_choice` · intent `grammar` · difficulty `contextual`  
**Prompt:** Which expression is correct standard Finnish for 'with a partner'?  
**Stimulus:** Use the taught genitive + kanssa construction.  
**Options (stable IDs, shuffle):** `a` kumppani kanssa · `b` kumppanin kanssa · `c` kumppania kanssa. **Correct:** `b` kumppanin kanssa.  
**Wrong option `a`:** Kumppani is the dictionary form; before kanssa use kumppanin.  
**Wrong option `c`:** Kumppania was the negative-possession partitive, not the genitive here.  
**Correct feedback:** Kumppanin kanssa is the correct taught form.  
**Wrong feedback:** Kanssa follows the genitive kumppanin.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Kumppanin kanssa.  
**Hint:** None. **Linked:** `vocab.kumppani`, `vocab.kanssa`, `grammar.people.kanssa-genitive`. **Scored:** `grammar.people.kanssa-genitive`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F09 — `ex.people-and-descriptions.people-review.live-partner`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Write 'I live with my partner' as a complete sentence.  
**Stimulus:** A fictional speaker; no real relationship status.  
**Accepted after N1:** `Asun kumppanin kanssa.`, `Minä asun kumppanin kanssa.`. Authored forms only; no guessed stems.  
**Correct feedback:** Asun kumppanin kanssa. is a correct learned sentence.  
**Wrong feedback:** Use asun and kumppanin kanssa with the noun in its genitive form.  
**Near feedback:** `Asun kumppani kanssa` → Use genitive kumppanin before kanssa.  
**Not sure:** Asun kumppanin kanssa.  
**Hint:** None. **Linked:** `vocab.asua`, `vocab.kumppani`, `vocab.kanssa`, `phrase.people.asun-kumppanin-kanssa`. **Scored:** `phrase.people.asun-kumppanin-kanssa`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F10 — `ex.people-and-descriptions.people-review.tall-person`** · `multiple_choice` · intent `grammar` · difficulty `contextual`  
**Prompt:** Which sentence means 'That person is tall'?  
**Stimulus:** A single fictional person, height context.  
**Options (stable IDs, shuffle):** `a` Hän on pitkä. · `b` Hän on lyhyt. · `c` Hän on iso.. **Correct:** `a` Hän on pitkä..  
**Wrong option `b`:** Lyhyt means short, the opposite height description.  
**Wrong option `c`:** Iso means big; it isn't the specific word tall.  
**Correct feedback:** Hän on pitkä. describes a tall person using the singular adjective.  
**Wrong feedback:** The precise height adjective is pitkä.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Hän on pitkä.  
**Hint:** None. **Linked:** `vocab.pitka`, `vocab.han`, `grammar.people.predicative-singular`. **Scored:** `vocab.pitka`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F11 — `ex.people-and-descriptions.people-review.independent-young`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Independently type 'That person is young' in standard Finnish.  
**Stimulus:** The fictional person is young; hän is gender-neutral.  
**Accepted after N1:** `Hän on nuori.`. Authored forms only; no guessed stems.  
**Correct feedback:** Hän on nuori. is a natural singular description.  
**Wrong feedback:** Use Hän on plus nuori, not a plural form.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Hän on nuori.  
**Hint:** None. **Linked:** `vocab.nuori`, `vocab.han`, `grammar.people.predicative-singular`. **Scored:** `vocab.nuori`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F12 — `ex.people-and-descriptions.people-review.red-house-independent`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Write 'The house is red' without any Finnish answer choices.  
**Stimulus:** A fictional house, red exterior; talo was introduced in Unit 4.  
**Accepted after N1:** `Talo on punainen.`. Authored forms only; no guessed stems.  
**Correct feedback:** Talo on punainen. uses the taught singular colour adjective.  
**Wrong feedback:** Use talo + on + punainen; no extra case endings.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Talo on punainen.  
**Hint:** None. **Linked:** `vocab.talo`, `vocab.punainen`, `grammar.people.colour-statement`. **Scored:** `grammar.people.colour-statement`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F13 — `ex.people-and-descriptions.people-review.integrated-name-tiles`** · `token_build` · intent `controlled_construction` · difficulty `contextual`  
**Prompt:** Arrange four supplied words to say 'Aino's partner is Emma'.  
**Stimulus:** Fictional names; the genitive form of Aino is taught.  
**Shuffled lowercase lexical tokens:** `ainon`, `kumppani`, `on`, `emma`. **Accepted complete order:** `Ainon kumppani on Emma.`. Capitalise the first assembled word and the supplied proper name Emma; this is guided composition.  
**Correct feedback:** Ainon kumppani on Emma. identifies Emma as Aino's partner.  
**Wrong feedback:** Begin with the possessor Ainon, then kumppani on Emma.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Ainon kumppani on Emma.  
**Hint:** None. **Linked:** `vocab.kumppani`, `grammar.people.genitive-restricted`, `vocab.olla`. **Scored:** none. **Review eligible:** false, guided or capability assessment. **Editorial:** `needs_review`.  

**F14 — `ex.people-and-descriptions.people-review.another-genitive-sentence`** · `text_input` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** Write 'Emma's brother is Olli' using the taught Emman genitive and familiar on.  
**Stimulus:** Fictional Emma and Olli, both proper-name context.  
**Accepted after N1:** `Emman veli on Olli.`. Authored forms only; no guessed stems.  
**Correct feedback:** Emman veli on Olli. uses the proper-name genitive with a relationship noun.  
**Wrong feedback:** Use Emman (Emma's) + veli (brother) + on Olli.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Emman veli on Olli.  
**Hint:** None. **Linked:** `vocab.veli`, `grammar.people.genitive-restricted`, `vocab.olla`. **Scored:** `grammar.people.genitive-restricted`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

**F15 — `ex.people-and-descriptions.people-review.integrated-three-line-profile`** · `text_input` · intent `cumulative` · difficulty `cumulative`  
**Prompt:** Write exactly THREE short Finnish sentences on separate lines about these fictional facts: (1) Emma's partner is Aino. (2) Aino is young. (3) Aino's house is blue.  
**Stimulus:** Use the exact taught models for the three statements. Do not add new words or case rules.  
**Accepted after N1:** `Emman kumppani on Aino.
Aino on nuori.
Ainon talo on sininen.`. Three separately evaluated lines; `knowledgeScoring: false`, `scoredTargetIds: []`.  
**Correct feedback:** The three sentences describe the same fictional people and one familiar object, combining genitive relationships, a singular description and a colour.  
**Wrong feedback:** Use the model: Emman kumppani on Aino. / Aino on nuori. / Ainon talo on sininen. Keep three distinct sentences.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Emman kumppani on Aino. / Aino on nuori. / Ainon talo on sininen.  
**Hint:** None. **Linked:** `grammar.people.genitive-restricted`, `vocab.kumppani`, `vocab.nuori`, `vocab.talo`, `vocab.sininen`, `grammar.people.colour-statement`. **Scored:** none. **Review eligible:** false, guided or capability assessment. **Editorial:** `needs_review`.  

**F16 — `ex.people-and-descriptions.people-review.negative-partner-capstone`** · `multiple_choice` · intent `contextual_application` · difficulty `contextual`  
**Prompt:** A fictional speaker has no partner. Which complete sentence accurately says that?  
**Stimulus:** No partner; recall the explicitly taught negative noun form.  
**Options (stable IDs, shuffle):** `a` Minulla ei ole kumppani. · `b` Minulla ei ole kumppania. · `c` Minulla olen kumppania.. **Correct:** `b` Minulla ei ole kumppania..  
**Wrong option `a`:** After negative possession use the taught partitive kumppania, not bare kumppani.  
**Wrong option `c`:** The negative frame is ei ole, never minulla olen.  
**Correct feedback:** Minulla ei ole kumppania. correctly expresses a negative relationship statement.  
**Wrong feedback:** Use minulla ei ole with kumppania, not the dictionary noun.  
**Near feedback:** None; no automatic near-miss credit.  
**Not sure:** Minulla ei ole kumppania.  
**Hint:** None. **Linked:** `vocab.kumppani`, `grammar.people.possession-negative`. **Scored:** `grammar.people.possession-negative`. **Review eligible:** true, independently understandable. **Editorial:** `needs_review`.  

### End-of-unit capability and completion

**Blueprint ability trace:** F02 = independently say “I have a sister”; F04/F05 = make affirmative possession negative with exact taught siskoa/veljeä; F11 = say someone is young and F10 tall; F06/F07/F14 = recognise or independently retrieve simple genitives; F12 = type a colour statement about a familiar object. **F15** integrates the finite curriculum in a three-sentence fictional profile, evaluated as one capability outcome without automatic lexical mastery. F16 provides a fresh negative-partner scenario. **Final headline:** “People and places, in simple Finnish.” **Copy:** “You can say someone has—or doesn't have—a sibling, describe a person, recognise whose relative is being discussed and describe an object by colour. The words will return in scheduled Review as they become due.” **Required steps:** 16; **exercises:** 16. **Next:** Unit 8 — Getting Around. Completion doesn't imply spontaneous speaking, human teacher assessment or permanent familiarity.

