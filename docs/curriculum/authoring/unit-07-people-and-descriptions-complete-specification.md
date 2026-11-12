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

