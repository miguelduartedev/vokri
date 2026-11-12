# Vokri — Unit 5: Food & Quantities · Complete Lesson & Exercise Specification

**Content version:** 1.0 authoring · 12 November 2026 · **Learning language:** `fi`; explanations English; **Course** `course.fi`, **Stage** `stage.a1-foundations`, **Unit** `unit.food-and-quantities`.  
**Editorial:** all newly authored teaching content, explanations, exercise and Review records `needs_review`, `reviewedBy: null`. The Vokri project owner may give sufficient internal editorial approval; external teacher certification is neither claimed nor required.

Read with [Authoring Standard v1](./exercise-authoring-standard-v1.md), approved [Unit 1](./unit-01-hello-complete-specification.md), [Unit 2](./unit-02-people-and-things-complete-specification.md), [Unit 3](./unit-03-everyday-actions-complete-specification.md), [Unit 4](./unit-04-where-are-you-complete-specification.md), [Unit 5 coverage and QA](./unit-05-coverage-and-qa.md), [Unit 5 implementation notes](./unit-05-implementation-notes.md) and [A1 curriculum](../a1_foundations_curriculum_blueprint.md).

## Part I — Teaching goals, lexical inventory and content contract

### Capability and prerequisites

**Unit goal, learner-facing:** “Request food or drink, describe a small amount, understand simple prices, ask how much something costs, and pay by card.”

**Prerequisite:** completed Unit 4, plus Unit 1 greetings, kiitos, numbers 1–5; Unit 2 `tämä`; Unit 3 `haluan/voin/voinko`, limited verb + infinitive; Unit 4 `kahvila/kauppa/ravintola` as familiar places. `saada` has previously been encountered **for recognition only**. No new productive grammar is inferred from its fixed use in this unit.

**Six existing lessons in order:** 5.1 Coffee, tea and water → 5.2 Food you actually use → 5.3 Asking for something → 5.4 A little, a lot, two → 5.5 How much is it? → 5.6 Café and shop review. The last lesson contains the **ten-part end-of-unit checkpoint**, not a seventh lesson.

### Sixteen new production lemmas

| Lemma | Canonical ID | Original curated CSV rank | Formal introduction |
|---|---|---:|---|
| **vähän** | `vocab.vahan` | 54 | 5.4 |
| **paljon** | `vocab.paljon` | 55 | 5.4 |
| **ostaa** | `vocab.ostaa` | 94 | 5.5 |
| **maksaa** | `vocab.maksaa` | 95 | 5.5 |
| **hinta** | `vocab.hinta` | 238 | 5.5 |
| **euro** | `vocab.euro` | 239 | 5.5 |
| **kortti** | `vocab.kortti` | 241 | 5.5 |
| **ruoka** | `vocab.ruoka` | 246 | 5.2 |
| **vesi** | `vocab.vesi` | 247 | 5.1 |
| **leipä** | `vocab.leipa` | 248 | 5.2 |
| **maito** | `vocab.maito` | 249 | 5.1 |
| **kahvi** | `vocab.kahvi` | 250 | 5.1 |
| **tee** | `vocab.tee` | 251 | 5.1 |
| **lounas** | `vocab.lounas` | 253 | 5.2 |
| **omena** | `vocab.omena` | 264 | 5.2 |
| **paljonko** | `vocab.paljonko` | 341 | 5.5 |

### Eight recognition-only lemmas

| Lemma | Canonical ID | CSV rank | Formal introduction |
|---|---|---:|---|
| **kuitti** | `vocab.kuitti` | 243 | 5.5 |
| **kassa** | `vocab.kassa` | 244 | 5.5 |
| **kana** | `vocab.kana` | 255 | 5.2 |
| **kala** | `vocab.kala` | 256 | 5.2 |
| **peruna** | `vocab.peruna` | 259 | 5.2 |
| **banaani** | `vocab.banaani` | 265 | 5.2 |
| **nälkä** | `vocab.nalka` | 268 | 5.2 |
| **jano** | `vocab.jano` | 269 | 5.2 |

All 24 are already in the canonical 2,000-lemma CSV; none of `kahvia`, `vettä`, `teetä`, `maitoa`, `leipää`, `omenaa`, `euroa` or `kortilla` creates a new VocabularyItem. `paljon` and `paljonko` remain **distinct existing lemmas**, not duplicate/generated identities.

### Fixed learner-facing inflected forms and grammar

| Lemma / construction | Taught form | Scope and important limit |
|---|---|---|
| `kahvi` | `kahvia` | Request/unspecified amount of coffee |
| `tee` | `teetä` | Explicitly learned drink form, not dictionary + a |
| `vesi` | `vettä` | Stem change; no automatic suffix prediction |
| `maito` | `maitoa` | Request and amount form |
| `ruoka` | `ruokaa` | Supported food partitive |
| `leipä` | `leipää` | Bread partitive, correct ä and vowel length |
| `lounas` | `lounasta` | Taught form, no generalized suffix rule |
| `omena` | `omenaa` | Fruit partitive, used after `kaksi` |
| `euro` | `euroa` | Partitive singular after `kaksi` |
| `kortti` | `kortilla` | Fixed card-payment form; no productive -lla/-llä system |
| `haluta` | `haluaisin` | Polite request chunk; conditional paradigm deferred |
| `ostaa` | `ostan` | First-person buying, with taught `maitoa` object |
| `maksaa` | `maksan` and `Se maksaa …` | Paying versus costing distinguished by context |
| `saada` | `Voinko saada vettä?` | Fixed productive PhraseItem; `saada` lemma remains recognition-only |

`grammar.partitive-food-drinks` teaches practical partitive forms in requests; `grammar.quantity-plus-partitive` covers `vähän maitoa` and `paljon kahvia`; `grammar.numeral-singular-partitive` covers `yksi omena` vs `kaksi omenaa` and `yksi euro` vs `kaksi euroa`. **Do not** assert that the partitive always means “some” or that each noun can be inflected with an identical suffix. Full case selection, plural partitive, conditional paradigms, adessive paradigms and decimal prices remain deferred.

### New PhraseItems

| Canonical ID | Authored phrase and learner-facing meaning |
|---|---|
| `phrase.haluan-kahvia` | **Haluan kahvia.** — I want coffee |
| `phrase.haluaisin-slot` | **Haluaisin kahvia. / Haluaisin teetä.** — I'd like coffee/tea |
| `phrase.voinko-saada-vetta` | **Voinko saada vettä?** — Can I have some water? |
| `phrase.vahan-maitoa-kiitos` | **Vähän maitoa, kiitos.** — A little milk, please |
| `phrase.paljonko-tama-maksaa` | **Paljonko tämä maksaa?** — How much does this cost? |
| `phrase.voinko-maksaa-kortilla` | **Voinko maksaa kortilla?** — Can I pay by card? |

The earlier `phrase.haluan-slot` and `phrase.voinko-slot` are reused, not reintroduced. `Se maksaa kaksi euroa`, `Ostan maitoa`, `kaksi omenaa` and `Maksan kortilla` are taught complete examples, linked to their existing lemma/grammar targets rather than automatically added as new duplicate PhraseItems.

### Binding conventions for every lesson step and exercise

- Every LessonStep has full ID **`step.food-and-quantities.<lesson-slug>.<suffix>`**, `learningLanguage: fi`, containing lesson, `required: true` unless explicitly optional. The step tables below supply exact learner-facing copy and the `vocabulary_intro`/`phrase_intro`/`grammar_explanation` formal encounter targets. An example or exercise does **not** create a new lexical encounter just because a target appears in a sentence.
- Every exercise has unique stable ID **`ex.food-and-quantities.<lesson-slug>.<slug>`**; document tags A01–F14 identify cross-references, not persisted IDs. The record contains the exact authored `Prompt`, `Stimulus`, options/pairs/tokens, accepted `Answer`, correct/incorrect/near/Not sure feedback, `Hint`, `Linked`, `Scored`, `Review eligible` and editorial state. All exercise kinds are from the established five, and step types from the established eight.
- **N1 text normalization (same as Units 1–4):** Unicode NFC, lowercase, trim and collapse spaces, convert allowed `. , ! ?` separator punctuation to spaces **before** collapsing (never concatenate distinct words). Preserve Finnish ä/ö, doubled vowels/consonants, word boundaries and person endings. Compare only to **enumerated accepted variants**. No fuzzy AI, stemming or arbitrary morphology. Empty text/punctuation-only input does not submit knowledge evidence.
- Each MC option has a stable ID; shuffle visually but retain per-option corrective feedback by key. For matching, only first-attempt **pair identities** count, not all items as one success. Token construction is guided assembly, not independent spelling recall. A checkpoint **wraps** listed exercise records; it is not a sixth exercise type.
- Only `Scored` (i.e., `scoredTargetIds`) targets update knowledge. `Linked` is broader context. Empty scored sets mean `knowledgeScoring: false`: capability-only evidence without fabricated familiarity for each word in a multi-clause response.
- `correct`, `almost`, `not_sure` remain the existing scheduler result buckets. Pending owner confirmation of the preexisting Units 1–4 adapter, wrong attempts and authored near misses may use the internal non-success `almost` bucket **while visible feedback distinctly says wrong versus near**. Never call an unrelated wrong answer “Almost correct.” Explicit `Not sure` is a committed attempted response; an empty field is not.
- All required steps and required exercises/checkpoints must be attempted or explicitly marked Not sure to complete a lesson; perfect scores or optional Flashcards/Word Match are **not** required. Review appears only for formally encountered, approved, due items under the existing deterministic scheduler. These documents do not implement a second scheduler, a new UI game or runtime AI grading.
- `saada` retains its Unit 3 recognition-only vocabulary role. Producing the **fixed** `Voinko saada vettä?` scores the phrase, not unrestricted conjugation or a promoted `vocab.saada`. Recognition-only `kana/kala/peruna/banaani/nälkä/jano/kassa/kuitti` never require Finnish free typing.

### Workload — editorial estimates, not timed novice study

| Lesson | Required steps | Required exercise records | Matching pairs | Estimated session |
|---|---:|---:|---:|---|
| 5.1 Coffee, tea and water | 17 | 13 | 8 | 8–11 min |
| 5.2 Food you actually use | 18 | 14 | 10 | 9–13 min |
| 5.3 Asking for something | 15 | 11 | 0 | 7–10 min |
| 5.4 A little, a lot, two | 17 | 12 | 4 | 8–11 min |
| 5.5 How much is it? | 28 | 21 | 5 | 14–20 min |
| 5.6 Café and shop review | 8 | 14 | 0 | 10–15 min |
| **Total** | **103 + 2 optional spoken notes** | **85** | **27** | **56–80 min** |

The eleven matching records contain 27 separate pair decisions, making **85 − 11 + 27 = 101 learner response units**, not just 85. Multiword typing adds workload. Lessons 5.2 and 5.5 provide explicit pause points to avoid unavoidable continuous sessions.

## Part II — Six fully authored lessons

## Lesson 5.1 — Coffee, tea and water

**Metadata:** `lesson.food-and-quantities.coffee-tea-water`, unit `unit.food-and-quantities`, `learningLanguage: fi`, order 1, estimated **8–11 minutes**, prerequisite `lesson.where-are-you.location-review`. **Capability:** identify four drinks and use familiar Haluan with their taught partitive forms. **New production:** `vocab.kahvi`, `vocab.tee`, `vocab.vesi`, `vocab.maito`. **Grammar:** `grammar.partitive-food-drinks`. **Phrase:** `phrase.haluan-kahvia`. **Reused:** `vocab.haluta`, `vocab.kiitos`, Unit 4 café/shop vocabulary. **Pause:** after A08. **Completion:** attempt every required practice exercise and checkpoint (Not sure counts as attempt), no perfect-score gate.

### Ordered learner experience

Full step IDs use prefix `step.food-and-quantities.coffee-tea-water.` and suffix below. Every listed step is required; formal encounter is limited to the named introduction steps. Exercises and examples never automatically create new vocabulary entries.

| # | Step suffix | Type | Exact learner-facing copy / exercise reference | Formal encounter IDs |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **Your first drink request.** “You already know Haluan (‘I want’) and Kiitos (‘thank you’). Now learn four common drinks and the forms used when asking for an amount of them.” | none |
| 2 | `coffee-tea` | `vocabulary_intro` | **kahvi** — coffee; **tee** — tea. In a request for an unspecified amount, you will often use **kahvia** (coffee) or **teetä** (tea). They don't change in exactly the same way. | `vocab.kahvi`, `vocab.tee` |
| 3 | `recognise-drinks` | `exercise` | A01 | none |
| 4 | `water-milk` | `vocabulary_intro` | **vesi** — water; **maito** — milk. The taught request forms are **vettä** and **maitoa**. Notice especially **vesi → vettä**: you can't make this form by simply adding a letter to the dictionary word. | `vocab.vesi`, `vocab.maito` |
| 5 | `recognise-water-milk` | `exercise` | A02 | none |
| 6 | `partitive` | `grammar_explanation` | **The practical partitive.** “Finnish often uses a special noun form for an unspecified amount of food or drink. In this unit, **kahvia, teetä, vettä, maitoa** are the forms to learn. It doesn't always translate as English ‘some’, and we aren't learning every partitive rule now.” | `grammar.partitive-food-drinks` |
| 7 | `drink-form-choice` | `exercise` | A03 | none |
| 8 | `drink-match` | `exercise` | A04 | none |
| 9 | `recall-kahvi` | `exercise` | A05 | none |
| 10 | `recall-tee` | `exercise` | A06 | none |
| 11 | `recall-vesi` | `exercise` | A07 | none |
| 12 | `recall-maito` | `exercise` | A08 | none |
| 13 | `request-phrase` | `phrase_intro` | **Haluan kahvia.** — “I want coffee.” This extends the familiar **Haluan …** pattern. “To ask for water with the same structure, you can say **Haluan vettä.** Keep the forms kahvia and vettä in these taught requests.” | `phrase.haluan-kahvia` |
| 14 | `build-coffee` | `exercise` | A09 | none |
| 15 | `recognise-teeta` | `exercise` | A10 | none |
| 16 | `build-water` | `exercise` | A11 | none |
| 17 | `checkpoint` | `checkpoint` | **A drink in Finnish.** “Recall a complete coffee request, then recognise the correct water form.” A12, A13. | none |

### Complete exercises

**A01 — `ex.food-and-quantities.coffee-tea-water.recognise-kahvi-tee`** · `matching` · guided recognition · difficulty foundation  
**Prompt:** Match the two Finnish drink names to their English meanings.  
**Stimulus:** Two canonical dictionary nouns.  
**Answer:** Pairs, each with a distinct first-attempt score: kahvi ↔ coffee (`vocab.kahvi`); tee ↔ tea (`vocab.tee`). Correct identity only; order independent.  
**Correct feedback:** Kahvi is coffee; tee is tea.  
**Incorrect feedback:** `kahvi`: Kahvi means coffee. `tee`: Tee means tea.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Kahvi = coffee; tee = tea.  
**Hint:** null. **Linked:** `vocab.kahvi`, `vocab.tee`. **Scored:** `vocab.kahvi`, `vocab.tee`. **Review eligible:** false, lesson-local matching. **Editorial:** `needs_review`.

**A02 — `ex.food-and-quantities.coffee-tea-water.recognise-vesi-maito`** · `matching` · guided recognition · difficulty foundation  
**Prompt:** Match these two Finnish drink nouns to their meanings.  
**Stimulus:** Dictionary forms, not partitives.  
**Answer:** Pairs, each with a distinct first-attempt score: vesi ↔ water (`vocab.vesi`); maito ↔ milk (`vocab.maito`). Correct identity only; order independent.  
**Correct feedback:** Vesi is water; maito is milk.  
**Incorrect feedback:** `vesi`: Vesi means water. `maito`: Maito means milk.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Vesi = water; maito = milk.  
**Hint:** null. **Linked:** `vocab.vesi`, `vocab.maito`. **Scored:** `vocab.vesi`, `vocab.maito`. **Review eligible:** false, lesson-local matching. **Editorial:** `needs_review`.

**A03 — `ex.food-and-quantities.coffee-tea-water.choose-kahvia`** · `multiple_choice` · guided form recognition · difficulty foundation  
**Prompt:** Which is the taught form used in ‘I want coffee’?  
**Stimulus:** Haluan ___.  
**Answer:** Options with stable IDs (visually shuffle): `a` kahvi · `b` kahvia · `c` kahvissa. Accepted ID `b`.  
**Correct feedback:** Haluan kahvia uses the taught partitive form.  
**Incorrect feedback:** `a`: Kahvi is the dictionary form; use kahvia in this request. `c`: Kahvissa is a location form, not the form used in this request.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Use kahvia after Haluan.  
**Hint:** null. **Linked:** `vocab.kahvi`, `grammar.partitive-food-drinks`. **Scored:** `grammar.partitive-food-drinks`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A04 — `ex.food-and-quantities.coffee-tea-water.match-drink-partitives`** · `matching` · guided recognition · difficulty foundation  
**Prompt:** Match each taught drink form to the correct English meaning in a drink request.  
**Stimulus:** All four forms are given; the English glosses name distinct drinks.  
**Answer:** Pairs, each with a distinct first-attempt score: kahvia ↔ coffee — request form (`vocab.kahvi`); teetä ↔ tea — request form (`vocab.tee`); vettä ↔ water — request form (`vocab.vesi`); maitoa ↔ milk — request form (`vocab.maito`). Correct identity only; order independent.  
**Correct feedback:** Kahvia is coffee, teetä tea, vettä water and maitoa milk in these requests.  
**Incorrect feedback:** `kahvia`: Kahvia means coffee in this request. `teetä`: Teetä means tea in this request. `vettä`: Vettä means water. `maitoa`: Maitoa means milk.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** kahvia = coffee; teetä = tea; vettä = water; maitoa = milk.  
**Hint:** null. **Linked:** `vocab.kahvi`, `vocab.tee`, `vocab.vesi`, `vocab.maito`. **Scored:** `vocab.kahvi`, `vocab.tee`, `vocab.vesi`, `vocab.maito`. **Review eligible:** false, lesson-local matching. **Editorial:** `needs_review`.

**A05 — `ex.food-and-quantities.coffee-tea-water.recall-kahvi`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary word for coffee, not the request form.  
**Stimulus:** coffee — dictionary form  
**Answer:** Accepted after N1 normalization: `kahvi`.  
**Correct feedback:** Kahvi is the dictionary form; kahvia appears in the taught request.  
**Incorrect feedback:** Write kahvi. Kahvia is the partitive form.  
**Near feedback:** `kahvia` → This asks for the dictionary noun kahvi, not the request form.  
**Not sure:** Write kahvi.  
**Hint:** null. **Linked:** `vocab.kahvi`. **Scored:** `vocab.kahvi`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A06 — `ex.food-and-quantities.coffee-tea-water.recall-tee`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary word for tea.  
**Stimulus:** tea — dictionary form  
**Answer:** Accepted after N1 normalization: `tee`.  
**Correct feedback:** Tee is tea; teetä is a request form.  
**Incorrect feedback:** Write tee, not teetä for the dictionary form.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Write tee.  
**Hint:** null. **Linked:** `vocab.tee`. **Scored:** `vocab.tee`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A07 — `ex.food-and-quantities.coffee-tea-water.recall-vesi`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary word for water.  
**Stimulus:** water — dictionary form  
**Answer:** Accepted after N1 normalization: `vesi`.  
**Correct feedback:** Vesi means water; vettä is a different form of the same noun.  
**Incorrect feedback:** Write vesi. The request form is vettä.  
**Near feedback:** `vettä` → Vettä is the request form; the dictionary form is vesi.  
**Not sure:** Write vesi.  
**Hint:** null. **Linked:** `vocab.vesi`. **Scored:** `vocab.vesi`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A08 — `ex.food-and-quantities.coffee-tea-water.recall-maito`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary word for milk.  
**Stimulus:** milk — dictionary form  
**Answer:** Accepted after N1 normalization: `maito`.  
**Correct feedback:** Maito means milk.  
**Incorrect feedback:** Write maito, not maitoa for the dictionary form.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Write maito.  
**Hint:** null. **Linked:** `vocab.maito`. **Scored:** `vocab.maito`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A09 — `ex.food-and-quantities.coffee-tea-water.build-haluan-kahvia`** · `token_build` · controlled construction · difficulty controlled  
**Prompt:** Use the two supplied tiles to say ‘I want coffee’.  
**Stimulus:** I want coffee.  
**Answer:** Token bank (shuffled): kahvia / Haluan. Accepted ordered output `Haluan kahvia.`.  
**Correct feedback:** Haluan kahvia. is a complete taught request.  
**Incorrect feedback:** Use Haluan first, then kahvia.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Haluan → kahvia.  
**Hint:** null. **Linked:** `phrase.haluan-kahvia`, `vocab.haluta`, `vocab.kahvi`. **Scored:** `phrase.haluan-kahvia`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A10 — `ex.food-and-quantities.coffee-tea-water.recognise-teeta`** · `multiple_choice` · form recognition · difficulty foundation  
**Prompt:** What is the correct taught form for tea in the request Haluan ___?  
**Stimulus:** I want tea.  
**Answer:** Options with stable IDs (visually shuffle): `a` teetä · `b` tee · `c` teessä. Accepted ID `a`.  
**Correct feedback:** Haluan teetä uses the correct taught partitive.  
**Incorrect feedback:** `b`: Tee is the dictionary form; use teetä here. `c`: Teessä means in tea, not the drink request form.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Use teetä.  
**Hint:** null. **Linked:** `vocab.tee`, `grammar.partitive-food-drinks`. **Scored:** `grammar.partitive-food-drinks`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A11 — `ex.food-and-quantities.coffee-tea-water.build-water`** · `token_build` · controlled construction · difficulty controlled  
**Prompt:** Arrange the two taught forms to say ‘I want water’.  
**Stimulus:** I want water.  
**Answer:** Token bank (shuffled): vettä / Haluan. Accepted ordered output `Haluan vettä.`.  
**Correct feedback:** Haluan vettä. uses the correct request form of vesi.  
**Incorrect feedback:** Arrange Haluan then vettä; vesi changes to vettä.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Haluan → vettä.  
**Hint:** null. **Linked:** `vocab.vesi`, `vocab.haluta`, `grammar.partitive-food-drinks`. **Scored:** `grammar.partitive-food-drinks`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A12 — `ex.food-and-quantities.coffee-tea-water.checkpoint-coffee-request`** · `text_input` · independent phrase recall · difficulty controlled  
**Prompt:** Without tiles, type the complete Finnish sentence ‘I want coffee’.  
**Stimulus:** I want coffee.  
**Answer:** Accepted after N1 normalization: `Haluan kahvia.` or `Minä haluan kahvia.`.  
**Correct feedback:** Haluan kahvia. is useful at a café; later you will learn a softer polite version.  
**Incorrect feedback:** Write Haluan kahvia; the coffee form is kahvia.  
**Near feedback:** `haluan kahvi` → After Haluan, use kahvia for this request, not kahvi.  
**Not sure:** Write Haluan kahvia.  
**Hint:** null. **Linked:** `phrase.haluan-kahvia`, `vocab.kahvi`. **Scored:** `phrase.haluan-kahvia`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**A13 — `ex.food-and-quantities.coffee-tea-water.checkpoint-water-form`** · `multiple_choice` · cumulative form recognition · difficulty foundation  
**Prompt:** In a request for an unspecified amount of water, which form is correct?  
**Stimulus:** Choose the request form for water.  
**Answer:** Options with stable IDs (visually shuffle): `a` vesi · `b` vettä · `c` vete. Accepted ID `b`.  
**Correct feedback:** Vettä is the taught partitive of vesi.  
**Incorrect feedback:** `a`: Vesi is the dictionary form, not the taught request form. `c`: Vete is not the correct request form; write vettä with double t and ä.  
**Near feedback:** None; do not invent near credit.  
**Not sure:** Use vettä.  
**Hint:** null. **Linked:** `vocab.vesi`, `grammar.partitive-food-drinks`. **Scored:** `grammar.partitive-food-drinks`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “Your first drink request.” **Copy:** “You can name coffee, tea, water and milk, and say **Haluan kahvia**. Next you'll learn a few everyday foods.” **What was practised:** dictionary drink meanings, recognition of four taught partitive forms and independent coffee-request recall. **Review:** after formal encounter/approval, the four canonical lemmas, partitive grammar and `phrase.haluan-kahvia` may enter due Review via independently suitable tasks. No separate vocabulary entries for `vettä`, `teetä`, `maitoa` or `kahvia`.


## Lesson 5.2 — Food you actually use

**Metadata:** `lesson.food-and-quantities.food-you-use`; `unit.food-and-quantities`; language `fi`; order 2; estimated **9–13 minutes**; prerequisite `lesson.food-and-quantities.coffee-tea-water`. **Goal:** identify four everyday foods and recognise six additional food/need words. **New production:** `vocab.ruoka`, `vocab.leipa`, `vocab.lounas`, `vocab.omena`. **New recognition-only:** `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani`, `vocab.nalka`, `vocab.jano`. **Grammar:** limited recognition of already taught `grammar.partitive-food-drinks` with **leipää**, supplied **ruokaa, lounasta, omenaa**; no new case-generation paradigm. **Earlier context:** `vocab.haluta`, `vocab.kahvi`. **Pause:** after B08 before the recognition-only words. **Completion:** all required steps and B01–B14 attempted (Not sure counts), no perfect-score requirement.

### Ordered learner experience

Step IDs use `step.food-and-quantities.food-you-use.` + suffix. Every table row is required; all new encountered vocabulary items are declared at their introduction rows. The fixed `Minulla on …` expressions are recognition-only context, **not** new productive grammar.

| # | Step suffix | Type | Exact learner-facing content / exercise | New formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **A few foods worth knowing.** “You have drinks. Now add food, bread, lunch and an apple, plus a few other things you may recognise on a café or shop menu.” | none |
| 2 | `food-bread` | `vocabulary_intro` | **ruoka** — food, in general. **leipä** — bread. “When asking for an unspecified amount, the useful forms are **ruokaa** and **leipää**. The long vowels and final ä in leipää matter.” | `vocab.ruoka`, `vocab.leipa` |
| 3 | `recognise-food-bread` | `exercise` | B01 | none |
| 4 | `lunch-apple` | `vocabulary_intro` | **lounas** — lunch (a meal). **omena** — apple (a fruit). “The taught partitive forms are **lounasta** and **omenaa**. These are supplied forms, not an invitation to invent other noun cases.” | `vocab.lounas`, `vocab.omena` |
| 5 | `recognise-lunch-apple` | `exercise` | B02 | none |
| 6 | `food-form-compare` | `example_set` | **Haluan leipää.** — “I want bread.” **Haluan omenaa.** — “I want some apple.” The second implies an amount of apple rather than necessarily a whole apple. “When talking about one whole apple as a count, use **yksi omena**; the numeral rule comes in Lesson 5.4.” | none |
| 7 | `forms-recognition` | `exercise` | B03 | none |
| 8 | `recall-ruoka` | `exercise` | B04 | none |
| 9 | `recall-leipa` | `exercise` | B05 | none |
| 10 | `recall-lounas` | `exercise` | B06 | none |
| 11 | `recall-omena` | `exercise` | B07 | none |
| 12 | `food-context` | `exercise` | B08 | none |
| 13 | `six-recognition` | `vocabulary_intro` | **kana** — chicken. **kala** — fish. **peruna** — potato. **banaani** — banana. **nälkä** — hunger. **jano** — thirst. “The last two appear in everyday expressions about being hungry or thirsty, but you only need to recognise these nouns for now.” | `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani`, `vocab.nalka`, `vocab.jano` |
| 14 | `recognise-four-foods` | `exercise` | B09 | none |
| 15 | `recognise-hunger-thirst` | `exercise` | B10 | none |
| 16 | `hunger-context` | `example_set` | **Minulla on nälkä.** — “I'm hungry.” **Minulla on jano.** — “I'm thirsty.” “Recognise these whole expressions. We are not teaching the construction **minulla on** or asking you to spell it independently.” | none |
| 17 | `recognise-context` | `exercise` | B11 | none |
| 18 | `checkpoint` | `checkpoint` | **Food you can use.** “Name two familiar foods, then recognise the form used in a bread request.” B12, B13, B14. | none |

### Complete exercises

**B01 — `ex.food-and-quantities.food-you-use.match-ruoka-leipa`** · `matching` · guided recognition · difficulty foundation  
**Prompt:** Match the two Finnish words to their meanings.  
**Stimulus:** Food in general versus bread.  
**Answer:** Pairs: ruoka ↔ food in general (`vocab.ruoka`); leipä ↔ bread (`vocab.leipa`). One first-attempt outcome per pair.  
**Correct feedback:** Ruoka means food; leipä means bread.  
**Incorrect feedback:** `ruoka`: Ruoka means food, in general. `leipä`: Leipä is bread.  
**Near feedback:** None.  
**Not sure:** Ruoka = food; leipä = bread.  
**Hint:** null. **Linked:** `vocab.ruoka`, `vocab.leipa`. **Scored:** `vocab.ruoka`, `vocab.leipa`. **Review eligible:** false, lesson matching. **Editorial:** `needs_review`.

**B02 — `ex.food-and-quantities.food-you-use.match-lunch-apple`** · `matching` · guided recognition · difficulty foundation  
**Prompt:** Match the two food nouns to their meanings.  
**Stimulus:** One is a meal; the other is a fruit.  
**Answer:** Pairs: lounas ↔ lunch — meal (`vocab.lounas`); omena ↔ apple — fruit (`vocab.omena`). One first-attempt outcome per pair.  
**Correct feedback:** Lounas is lunch; omena is an apple.  
**Incorrect feedback:** `lounas`: Lounas names lunch. `omena`: Omena means apple.  
**Near feedback:** None.  
**Not sure:** Lounas = lunch; omena = apple.  
**Hint:** null. **Linked:** `vocab.lounas`, `vocab.omena`. **Scored:** `vocab.lounas`, `vocab.omena`. **Review eligible:** false, lesson matching. **Editorial:** `needs_review`.

**B03 — `ex.food-and-quantities.food-you-use.choose-leipaa`** · `multiple_choice` · guided form recognition · difficulty foundation  
**Prompt:** Which is the taught form for bread in ‘Haluan ___’?  
**Stimulus:** I want bread.  
**Answer:** Shuffled options: `a` leipä · `b` leipää · `c` leipässä. Accepted `b`.  
**Correct feedback:** Haluan leipää uses the partitive form.  
**Incorrect feedback:** `a`: Leipä is the dictionary noun, not the taught request form. `c`: Leipässä would be a location form, not the request form.  
**Near feedback:** None.  
**Not sure:** Use leipää in this taught request.  
**Hint:** null. **Linked:** `vocab.leipa`, `grammar.partitive-food-drinks`. **Scored:** `grammar.partitive-food-drinks`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B04 — `ex.food-and-quantities.food-you-use.recall-ruoka`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary noun for food.  
**Stimulus:** food — dictionary form  
**Answer:** Accepted under N1: `ruoka`.  
**Correct feedback:** Ruoka means food.  
**Incorrect feedback:** Write ruoka. Ruokaa is a partitive form.  
**Near feedback:** None.  
**Not sure:** Write ruoka.  
**Hint:** null. **Linked:** `vocab.ruoka`. **Scored:** `vocab.ruoka`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B05 — `ex.food-and-quantities.food-you-use.recall-leipa`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary noun for bread.  
**Stimulus:** bread — dictionary form  
**Answer:** Accepted under N1: `leipä`.  
**Correct feedback:** Leipä means bread.  
**Incorrect feedback:** Write leipä with ä.  
**Near feedback:** `leipa` → Finnish uses ä: leipä.  
**Not sure:** Write leipä.  
**Hint:** null. **Linked:** `vocab.leipa`. **Scored:** `vocab.leipa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B06 — `ex.food-and-quantities.food-you-use.recall-lounas`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary noun for lunch.  
**Stimulus:** lunch — meal name  
**Answer:** Accepted under N1: `lounas`.  
**Correct feedback:** Lounas means lunch.  
**Incorrect feedback:** Write lounas; lounasta is its partitive.  
**Near feedback:** None.  
**Not sure:** Write lounas.  
**Hint:** null. **Linked:** `vocab.lounas`. **Scored:** `vocab.lounas`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B07 — `ex.food-and-quantities.food-you-use.recall-omena`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary noun for apple.  
**Stimulus:** apple — dictionary form  
**Answer:** Accepted under N1: `omena`.  
**Correct feedback:** Omena means apple.  
**Incorrect feedback:** Write omena. Omenaa is a partitive form.  
**Near feedback:** `omenaa` → This asks for the dictionary word omena, not omenaa.  
**Not sure:** Write omena.  
**Hint:** null. **Linked:** `vocab.omena`. **Scored:** `vocab.omena`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B08 — `ex.food-and-quantities.food-you-use.food-context-choice`** · `multiple_choice` · contextual recognition · difficulty foundation  
**Prompt:** You are deciding what to eat at midday. Which Finnish noun means lunch?  
**Stimulus:** The midday meal, not a particular fruit or drink.  
**Answer:** Shuffled options: `a` lounas · `b` omena · `c` kahvi. Accepted `a`.  
**Correct feedback:** Lounas is lunch.  
**Incorrect feedback:** `b`: Omena means apple, not a named meal. `c`: Kahvi is coffee, a drink.  
**Near feedback:** None.  
**Not sure:** Use lounas.  
**Hint:** null. **Linked:** `vocab.lounas`, `vocab.omena`, `vocab.kahvi`. **Scored:** `vocab.lounas`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B09 — `ex.food-and-quantities.food-you-use.recognise-four-foods`** · `matching` · recognition only · difficulty foundation  
**Prompt:** Match these four recognition-only Finnish food nouns to their meanings.  
**Stimulus:** Choose unique meanings; no Finnish typing required.  
**Answer:** Pairs: kana ↔ chicken (`vocab.kana`); kala ↔ fish (`vocab.kala`); peruna ↔ potato (`vocab.peruna`); banaani ↔ banana (`vocab.banaani`). One first-attempt outcome per pair.  
**Correct feedback:** Kana = chicken, kala = fish, peruna = potato and banaani = banana.  
**Incorrect feedback:** `kana`: Kana means chicken. `kala`: Kala means fish. `peruna`: Peruna means potato. `banaani`: Banaani means banana.  
**Near feedback:** None.  
**Not sure:** Kana chicken; kala fish; peruna potato; banaani banana.  
**Hint:** null. **Linked:** `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani`. **Scored:** `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani`. **Review eligible:** false, lesson matching. **Editorial:** `needs_review`.

**B10 — `ex.food-and-quantities.food-you-use.recognise-hunger-thirst`** · `matching` · recognition only · difficulty foundation  
**Prompt:** Match the two recognition nouns describing physical needs.  
**Stimulus:** Nouns: hunger and thirst, not verbs.  
**Answer:** Pairs: nälkä ↔ hunger (`vocab.nalka`); jano ↔ thirst (`vocab.jano`). One first-attempt outcome per pair.  
**Correct feedback:** Nälkä means hunger and jano means thirst.  
**Incorrect feedback:** `nälkä`: Nälkä means hunger. `jano`: Jano means thirst.  
**Near feedback:** None.  
**Not sure:** Nälkä = hunger; jano = thirst.  
**Hint:** null. **Linked:** `vocab.nalka`, `vocab.jano`. **Scored:** `vocab.nalka`, `vocab.jano`. **Review eligible:** false, lesson matching. **Editorial:** `needs_review`.

**B11 — `ex.food-and-quantities.food-you-use.recognise-jano-phrase`** · `multiple_choice` · recognition of fixed chunk · difficulty foundation  
**Prompt:** What does Minulla on jano. express?  
**Stimulus:** Minulla on jano. (Whole phrase; minulla is not taught for production.)  
**Answer:** Shuffled options: `a` I'm hungry. · `b` I'm thirsty. · `c` I want a coffee.. Accepted `b`.  
**Correct feedback:** Minulla on jano. is a way to say I'm thirsty.  
**Incorrect feedback:** `a`: Minulla on nälkä. means I'm hungry. `c`: To ask for coffee use a coffee request, not this expression.  
**Near feedback:** None.  
**Not sure:** It means I'm thirsty.  
**Hint:** null. **Linked:** `vocab.jano`, `vocab.nalka`. **Scored:** `vocab.jano`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B12 — `ex.food-and-quantities.food-you-use.checkpoint-food`** · `text_input` · independent recall · difficulty controlled  
**Prompt:** Type the Finnish word for food.  
**Stimulus:** food — dictionary form  
**Answer:** Accepted under N1: `ruoka`.  
**Correct feedback:** Ruoka means food.  
**Incorrect feedback:** Write ruoka.  
**Near feedback:** None.  
**Not sure:** Write ruoka.  
**Hint:** null. **Linked:** `vocab.ruoka`. **Scored:** `vocab.ruoka`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B13 — `ex.food-and-quantities.food-you-use.checkpoint-apple`** · `text_input` · independent recall · difficulty controlled  
**Prompt:** Type the Finnish word for apple.  
**Stimulus:** apple — dictionary form  
**Answer:** Accepted under N1: `omena`.  
**Correct feedback:** Omena means apple.  
**Incorrect feedback:** Write omena.  
**Near feedback:** `omenaa` → The dictionary form is omena; omenaa is a partitive form.  
**Not sure:** Write omena.  
**Hint:** null. **Linked:** `vocab.omena`. **Scored:** `vocab.omena`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**B14 — `ex.food-and-quantities.food-you-use.checkpoint-bread`** · `multiple_choice` · cumulative form recognition · difficulty foundation  
**Prompt:** Which complete sentence means ‘I want bread’ in the taught context?  
**Stimulus:** An unspecified amount of bread.  
**Answer:** Shuffled options: `a` Haluan leipä. · `b` Haluan leipää. · `c` Haluan leipässä.. Accepted `b`.  
**Correct feedback:** Haluan leipää. uses the correct bread form.  
**Incorrect feedback:** `a`: In this taught request the form is leipää, not leipä. `c`: Leipässä is not the requested partitive form.  
**Near feedback:** None.  
**Not sure:** Use Haluan leipää.  
**Hint:** null. **Linked:** `vocab.leipa`, `grammar.partitive-food-drinks`, `vocab.haluta`. **Scored:** `grammar.partitive-food-drinks`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

### Completion

**Headline:** “Food you recognise.” **Copy:** “You can name food, bread, lunch and an apple. You've also met the words for chicken, fish, potato, banana, hunger and thirst — recognition is enough for those for now.” **Review:** four production lexemes via independent dictionary-form recall; six recognition words via self-contained later matching/Review, no Finnish typing requirement. **Next:** ask for food or drinks more politely.


## Lesson 5.3 — Asking for something

**Metadata:** `lesson.food-and-quantities.ask-for-something`, `unit.food-and-quantities`, `fi`, order 3, **7–10 minutes**; prerequisite `lesson.food-and-quantities.food-you-use`. **Goal:** make polite café requests using explicitly taught complete phrases. **New production lemmas:** none. **New PhraseItems:** `phrase.haluaisin-slot`, `phrase.voinko-saada-vetta`. **Previously introduced:** `vocab.haluta`, `phrase.haluan-kahvia`, `vocab.voida`, `vocab.saada` (recognition-only lemma from Unit 3), `vocab.kiitos`, `vocab.kahvi`, `vocab.tee`, `vocab.vesi`. **Grammar:** the `haluaisin` conditional-shaped form is a taught **polite chunk**, not productive conditional conjugation; `saada` remains recognition-only outside the fixed request. **Completion:** all steps and C01–C11 attempted, Not sure allowed, no perfect score.

### Ordered learner experience

All rows required. Step IDs use prefix `step.food-and-quantities.ask-for-something.` + suffix. Phrases are formally encountered at `phrase_intro` and never recorded as new lexical production for `saada`.

| # | Suffix | Step type | Exact learner-facing copy / exercise reference | New formal encounter |
|---:|---|---|---|---|
| 1 | `intro` | `explanation` | **A softer way to ask.** “You can already say Haluan kahvia. At a café, a short polite request may feel more natural. You'll learn two complete, useful expressions.” | none |
| 2 | `haluaisin` | `phrase_intro` | **Haluaisin …** — “I would like …”. **Haluaisin kahvia.** — “I'd like coffee.” **Haluaisin teetä.** — “I'd like tea.” “This comes from haluta, but its grammar is not a new conjugation exercise. Learn the whole polite request pattern, using only the taught drinks.” | `phrase.haluaisin-slot` |
| 3 | `haluan-versus` | `example_set` | **Haluan kahvia.** — “I want coffee.” **Haluaisin kahvia.** — “I'd like coffee.” “Both are understandable, but haluaisin is softer for a polite request. Adding **kiitos** is natural too.” | none |
| 4 | `recognise-polite` | `exercise` | C01 | none |
| 5 | `recognise-coffee` | `exercise` | C02 | none |
| 6 | `build-polite-tea` | `exercise` | C03 | none |
| 7 | `saada-request` | `phrase_intro` | **Voinko saada vettä?** — “Can I have some water?” “You know **Voinko …?** from Unit 3. **Saada** was introduced there for recognition (get/receive). You can now learn this **fixed whole request** without gaining unrestricted productive command of the saada verb.” | `phrase.voinko-saada-vetta` |
| 8 | `recognise-water` | `exercise` | C04 | none |
| 9 | `choose-polite-context` | `exercise` | C05 | none |
| 10 | `build-water` | `exercise` | C06 | none |
| 11 | `cafe-model` | `example_set` | **Customer:** “Hei! Haluaisin kahvia, kiitos.” — “Hello! I'd like coffee, please.” **Staff:** “Kyllä.” — “Yes.” “Simple, complete expressions are enough here; you're not learning a new café dialogue engine.” | none |
| 12 | `independent-coffee` | `exercise` | C07 | none |
| 13 | `independent-water` | `exercise` | C08 | none |
| 14 | `independent-tea` | `exercise` | C09 | none |
| 15 | `checkpoint` | `checkpoint` | **One useful request.** “Choose the appropriate phrase for the café, then type the water request.” C10, C11. | none |

**Optional spoken recognition note:** `step.food-and-quantities.ask-for-something.spoken-haluan` after C02: “You previously met the casual **haluun** for standard **haluan**. Recognise it when you hear it, but type the standard forms **haluan** and **haluaisin** in these lessons.” This reinforces the existing Unit 3 `spoken.haluan-haluun` identity without a new lesson requirement, production score or duplicate introduction.

### Complete exercises

**C01 — `ex.food-and-quantities.ask-for-something.recognise-haluaisin`** · `multiple_choice` · guided recognition · difficulty guided  
**Prompt:** What does Haluaisin kahvia. mean?  
**Stimulus:** Haluaisin kahvia.  
**Answer:** Options with stable IDs (shuffle): `a` I don't want coffee. · `b` I'd like coffee. · `c` I am making coffee.; correct `b`.  
**Correct feedback:** Haluaisin kahvia. is a common polite request for coffee.  
**Incorrect feedback:** `a`: This is not negative; haluaisin expresses a wish. `c`: Making coffee would use another verb, not haluaisin.  
**Near feedback:** None.  
**Not sure:** It means I'd like coffee.  
**Hint:** null. **Linked:** `phrase.haluaisin-slot`, `vocab.kahvi`. **Scored:** `phrase.haluaisin-slot`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C02 — `ex.food-and-quantities.ask-for-something.compare-haluaisin-haluan`** · `multiple_choice` · contextual choice · difficulty guided  
**Prompt:** You want to sound a little softer when ordering coffee. Which taught sentence fits?  
**Stimulus:** Customer speaking politely to café staff.  
**Answer:** Options with stable IDs (shuffle): `a` Haluan kahvia. · `b` Haluaisin kahvia. · `c` En puhu suomea.; correct `b`.  
**Correct feedback:** Haluaisin kahvia. is the softer taught request.  
**Incorrect feedback:** `a`: Haluan kahvia. is understandable, but Haluaisin is the specific polite form this question asks for. `c`: En puhu suomea. is about speaking Finnish, not ordering coffee.  
**Near feedback:** None.  
**Not sure:** Choose Haluaisin kahvia.  
**Hint:** null. **Linked:** `phrase.haluaisin-slot`, `phrase.haluan-kahvia`. **Scored:** `phrase.haluaisin-slot`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C03 — `ex.food-and-quantities.ask-for-something.build-haluaisin-teeta`** · `token_build` · guided construction · difficulty guided  
**Prompt:** Arrange the supplied words to ask politely for tea.  
**Stimulus:** I'd like tea.  
**Answer:** Tiles, shuffled: teetä / Haluaisin. Accepted complete sequence `Haluaisin teetä.`.  
**Correct feedback:** Haluaisin teetä. is a useful request for tea.  
**Incorrect feedback:** Use Haluaisin then teetä, the taught drink form.  
**Near feedback:** None.  
**Not sure:** Haluaisin → teetä.  
**Hint:** null. **Linked:** `phrase.haluaisin-slot`, `vocab.tee`. **Scored:** `phrase.haluaisin-slot`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C04 — `ex.food-and-quantities.ask-for-something.recognise-water-request`** · `multiple_choice` · phrase recognition · difficulty guided  
**Prompt:** What does Voinko saada vettä? ask?  
**Stimulus:** Voinko saada vettä?  
**Answer:** Options with stable IDs (shuffle): `a` May I have some water? · `b` Can I pay by card? · `c` How much is the water?; correct `a`.  
**Correct feedback:** Voinko saada vettä? is a polite request for water.  
**Incorrect feedback:** `b`: Asking about card payment uses maksaa kortilla, which comes later. `c`: This is not a price question; it asks to receive water.  
**Near feedback:** None.  
**Not sure:** It means Can I have some water?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.vesi`, `vocab.saada`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C05 — `ex.food-and-quantities.ask-for-something.choose-water-context`** · `multiple_choice` · contextual recognition · difficulty guided  
**Prompt:** You'd like the café staff to bring you water. Which taught question should you ask?  
**Stimulus:** At a café: request water, not ask the price.  
**Answer:** Options with stable IDs (shuffle): `a` Missä vessa on? · `b` Voinko saada vettä? · `c` Menen kotiin.; correct `b`.  
**Correct feedback:** Voinko saada vettä? is the water request.  
**Incorrect feedback:** `a`: Missä vessa on? asks where the toilet is. `c`: Menen kotiin. says you're going home.  
**Near feedback:** None.  
**Not sure:** Use Voinko saada vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `phrase.missa-vessa-on`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C06 — `ex.food-and-quantities.ask-for-something.build-voinko-saada`** · `token_build` · guided construction · difficulty guided  
**Prompt:** Build the complete taught water request from the supplied words.  
**Stimulus:** Can I have some water?  
**Answer:** Tiles, shuffled: vettä / saada / Voinko. Accepted complete sequence `Voinko saada vettä?`.  
**Correct feedback:** Voinko saada vettä? is a complete polite question.  
**Incorrect feedback:** Use Voinko, then saada, then vettä. Do not conjugate saada yourself.  
**Near feedback:** None.  
**Not sure:** Voinko → saada → vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.voida`, `vocab.saada`, `vocab.vesi`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C07 — `ex.food-and-quantities.ask-for-something.recall-haluaisin-coffee`** · `text_input` · phrase recall · difficulty recall  
**Prompt:** Type the polite Finnish request ‘I'd like coffee’.  
**Stimulus:** I'd like coffee.  
**Answer:** Accepted after N1: `Haluaisin kahvia.` or `Haluaisin kahvia, kiitos.`.  
**Correct feedback:** Haluaisin kahvia. is a polite request for coffee.  
**Incorrect feedback:** Use Haluaisin kahvia; the coffee form is kahvia.  
**Near feedback:** `haluaisin kahvi` → After haluaisin in this request, use kahvia, not kahvi.  
**Not sure:** Write Haluaisin kahvia.  
**Hint:** null. **Linked:** `phrase.haluaisin-slot`, `vocab.kahvi`. **Scored:** `phrase.haluaisin-slot`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C08 — `ex.food-and-quantities.ask-for-something.recall-water-request`** · `text_input` · phrase recall · difficulty recall  
**Prompt:** Type the taught Finnish question ‘Can I have some water?’  
**Stimulus:** Can I have some water?  
**Answer:** Accepted after N1: `Voinko saada vettä?` or `Voinko saada vettä, kiitos?`.  
**Correct feedback:** Voinko saada vettä? is a natural polite request.  
**Incorrect feedback:** Write Voinko saada vettä? The water form is vettä.  
**Near feedback:** `voinko saada vesi` → Use vettä after the taught request phrase, not vesi.  
**Not sure:** Write Voinko saada vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.vesi`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C09 — `ex.food-and-quantities.ask-for-something.recall-tea-request`** · `text_input` · phrase recall · difficulty recall  
**Prompt:** Without tiles, type ‘I'd like tea’ in Finnish.  
**Stimulus:** I'd like tea.  
**Answer:** Accepted after N1: `Haluaisin teetä.` or `Haluaisin teetä, kiitos.`.  
**Correct feedback:** Haluaisin teetä. uses the correct tea form.  
**Incorrect feedback:** Use Haluaisin teetä, not the dictionary form tee.  
**Near feedback:** `haluaisin tee` → The taught partitive tea form is teetä.  
**Not sure:** Write Haluaisin teetä.  
**Hint:** null. **Linked:** `phrase.haluaisin-slot`, `vocab.tee`. **Scored:** `phrase.haluaisin-slot`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C10 — `ex.food-and-quantities.ask-for-something.checkpoint-polite`** · `multiple_choice` · cumulative application · difficulty guided  
**Prompt:** The café worker asks what you would like. Which reply is a polite request for tea?  
**Stimulus:** You want tea, not coffee or water.  
**Answer:** Options with stable IDs (shuffle): `a` Haluaisin kahvia. · `b` Haluaisin teetä. · `c` Voinko saada vettä?; correct `b`.  
**Correct feedback:** Haluaisin teetä. politely requests tea.  
**Incorrect feedback:** `a`: Haluaisin kahvia. requests coffee. `c`: Voinko saada vettä? requests water.  
**Near feedback:** None.  
**Not sure:** Choose Haluaisin teetä.  
**Hint:** null. **Linked:** `phrase.haluaisin-slot`, `vocab.tee`, `vocab.kahvi`. **Scored:** `phrase.haluaisin-slot`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

**C11 — `ex.food-and-quantities.ask-for-something.checkpoint-water`** · `text_input` · cumulative application · difficulty recall  
**Prompt:** At the café, type a complete Finnish question asking for water.  
**Stimulus:** Can I have some water?  
**Answer:** Accepted after N1: `Voinko saada vettä?` or `Voinko saada vettä, kiitos?`.  
**Correct feedback:** Voinko saada vettä? is a complete useful request.  
**Incorrect feedback:** Write Voinko saada vettä? Use the taught fixed request rather than inventing saada forms.  
**Near feedback:** `voinko saada vesi` → The correct water request uses vettä.  
**Not sure:** Write Voinko saada vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.saada`, `vocab.vesi`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; independent phrase task. **Editorial:** `needs_review`.

### Completion

**Headline:** “A little more polite.” **Copy:** “You can now order coffee or tea with **Haluaisin …** and ask **Voinko saada vettä?**. Next, learn to ask for a little or a lot.” **Review:** the two self-contained phrase targets become Review-eligible after encounter and approval. No independent conjugation skill is inferred from producing `haluaisin` or `saada` in these memorised phrases.


## Lesson 5.4 — A little, a lot, two

**Metadata:** `lesson.food-and-quantities.a-little-a-lot-two`; unit `unit.food-and-quantities`; `fi`; lesson order 4; **8–11 minutes**; prerequisite `lesson.food-and-quantities.ask-for-something`. **Goal:** express quantity and recognise a two-plus-partitive counting pattern. **New production:** `vocab.vahan`, `vocab.paljon`. **Grammar:** `grammar.quantity-plus-partitive`, `grammar.numeral-singular-partitive`. **Phrase:** `phrase.vahan-maitoa-kiitos`. **Reused:** `vocab.kaksi`, `vocab.yksi`, `vocab.maito`, `vocab.kahvi`, `vocab.omena`, `vocab.kiitos`. **Deferred:** general partitive endings, plural partitive and countability theory. **Completion:** all steps and D01–D12 attempted or Not sure.

### Ordered learner experience

Step IDs use `step.food-and-quantities.a-little-a-lot-two.` plus suffix. All listed steps required; the quantity grammar is formally introduced before D03, and numeral grammar before D07. The supplied numeric form `omenaa` is taught before any test requiring it.

| # | Step suffix | Type | Exact learner-facing copy / exercise | Formal new encounter |
|---:|---|---|---|---|
| 1 | `open` | `explanation` | **How much? A little, a lot, or two.** “You can ask for a drink. Now specify a small or large amount, and use the numbers one and two with a food word.” | none |
| 2 | `quantifiers` | `vocabulary_intro` | **vähän** — a little, a small amount. **paljon** — a lot, much. “In these food/drink examples, each is followed by the appropriate partitive: **vähän maitoa**, **paljon kahvia**. Do not leave the noun in its dictionary form.” | `vocab.vahan`, `vocab.paljon` |
| 3 | `choose-amount` | `exercise` | D01 | none |
| 4 | `match-amounts` | `exercise` | D02 | none |
| 5 | `quantity-grammar` | `grammar_explanation` | **Quantity + a food or drink form.** “**vähän maitoa** means ‘a little milk’; **paljon kahvia** means ‘a lot of coffee’. You already saw maitoa and kahvia in 5.1. The full partitive system is larger; use these familiar expressions first.” | `grammar.quantity-plus-partitive` |
| 6 | `recognise-forms` | `exercise` | D03 | none |
| 7 | `phrase-milk` | `phrase_intro` | **Vähän maitoa, kiitos.** — “A little milk, please.” “This short request is complete even without a separate verb. Kiitos makes it polite.” | `phrase.vahan-maitoa-kiitos` |
| 8 | `build-milk` | `exercise` | D04 | none |
| 9 | `write-vahan` | `exercise` | D05 | none |
| 10 | `write-paljon` | `exercise` | D06 | none |
| 11 | `one-two` | `grammar_explanation` | **One apple, two apples.** “**yksi omena** — one apple. **kaksi omenaa** — two apples. In this small taught counting pattern, numbers from two upwards take the noun in a partitive singular form, **omenaa** here. It is not the ordinary English plural and not *kaksi omenat*.” | `grammar.numeral-singular-partitive` |
| 12 | `one-vs-two` | `exercise` | D07 | none |
| 13 | `match-apple-count` | `exercise` | D08 | none |
| 14 | `build-two-apples` | `exercise` | D09 | none |
| 15 | `quantities-in-context` | `example_set` | **At a café:** “Vähän maitoa, kiitos.” **Talking about a large amount:** “Paljon kahvia.” **Counting fruit:** “Kaksi omenaa.” “These are different kinds of amounts, but the noun forms are supplied or taught before you are tested.” | none |
| 16 | `recognise-more` | `exercise` | D10 | none |
| 17 | `checkpoint` | `checkpoint` | **Make the quantity clear.** “Recall a small-milk request, then choose the correct form after kaksi.” D11, D12. | none |

**Optional spoken note**, `step.food-and-quantities.a-little-a-lot-two.spoken-amounts` after D06: “In casual Finnish, **paljon** may be heard as **paljo**, and **vähän** as **vähä**. Recognise the forms; continue writing paljon and vähän in standard Finnish.” Targets `spoken.paljon-paljo`, `spoken.vahan-vaha`; optional recognition, no separate knowledge score.

### Complete exercises

**D01 — `ex.food-and-quantities.a-little-a-lot-two.choose-vahan`** · `multiple_choice` · guided recognition · difficulty guided  
**Prompt:** Which word means a little in a food quantity?  
**Stimulus:** A small amount, not a large amount.  
**Answer:** Options (stable IDs, shuffle): `a` paljon · `b` vähän · `c` paljonko. Accepted `b`.  
**Correct feedback:** Vähän means a little.  
**Incorrect feedback:** `a`: Paljon means much/a lot. `c`: Paljonko asks how much or how many, introduced with prices later.  
**Near feedback:** None.  
**Not sure:** Use vähän for a little.  
**Hint:** null. **Linked:** `vocab.vahan`, `vocab.paljon`. **Scored:** `vocab.vahan`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D02 — `ex.food-and-quantities.a-little-a-lot-two.match-quantity`** · `matching` · guided recognition · difficulty guided  
**Prompt:** Match these quantity words with their meanings.  
**Stimulus:** Small versus large quantity.  
**Answer:** Pairs with distinct first-attempt decisions: vähän ↔ a little (`vocab.vahan`); paljon ↔ a lot (`vocab.paljon`).  
**Correct feedback:** Vähän means a little; paljon means a lot.  
**Incorrect feedback:** `vähän`: Vähän means a little. `paljon`: Paljon means a lot.  
**Near feedback:** None.  
**Not sure:** vähän = a little; paljon = a lot.  
**Hint:** null. **Linked:** `vocab.vahan`, `vocab.paljon`. **Scored:** `vocab.vahan`, `vocab.paljon`. **Review eligible:** false; lesson-local matching. **Editorial:** `needs_review`.

**D03 — `ex.food-and-quantities.a-little-a-lot-two.recognise-maitoa`** · `multiple_choice` · guided form recognition · difficulty guided  
**Prompt:** What is the correct taught expression for ‘a little milk’?  
**Stimulus:** a little milk  
**Answer:** Options (stable IDs, shuffle): `a` vähän maito · `b` vähän maitoa · `c` paljon maitoa. Accepted `b`.  
**Correct feedback:** Vähän maitoa uses the taught milk partitive.  
**Incorrect feedback:** `a`: With vähän, the taught milk form is maitoa. `c`: Paljon maitoa means a lot of milk, not a little.  
**Near feedback:** None.  
**Not sure:** The phrase is vähän maitoa.  
**Hint:** null. **Linked:** `vocab.vahan`, `vocab.maito`, `grammar.quantity-plus-partitive`. **Scored:** `grammar.quantity-plus-partitive`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D04 — `ex.food-and-quantities.a-little-a-lot-two.build-milk-kiitos`** · `token_build` · guided construction · difficulty guided  
**Prompt:** Build the taught request ‘A little milk, please’.  
**Stimulus:** Use the three supplied chunks.  
**Answer:** Shuffled tokens: kiitos. / Vähän / maitoa,. Accepted `Vähän maitoa, kiitos.`.  
**Correct feedback:** Vähän maitoa, kiitos. is a complete polite request.  
**Incorrect feedback:** Use Vähän before maitoa, then kiitos.  
**Near feedback:** None.  
**Not sure:** Vähän → maitoa, → kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`, `vocab.kiitos`. **Scored:** `phrase.vahan-maitoa-kiitos`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D05 — `ex.food-and-quantities.a-little-a-lot-two.recall-vahan`** · `text_input` · controlled recall · difficulty recall  
**Prompt:** Type the Finnish word for a little, a small amount.  
**Stimulus:** a little  
**Answer:** Accepted after N1: `vähän`.  
**Correct feedback:** Vähän means a little.  
**Incorrect feedback:** Write vähän, with ä.  
**Near feedback:** `vahan` → Write vähän with ä.  
**Not sure:** Write vähän.  
**Hint:** null. **Linked:** `vocab.vahan`. **Scored:** `vocab.vahan`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D06 — `ex.food-and-quantities.a-little-a-lot-two.recall-paljon`** · `text_input` · controlled recall · difficulty recall  
**Prompt:** Type the Finnish word for a lot or much (not the question word how much).  
**Stimulus:** a lot / much  
**Answer:** Accepted after N1: `paljon`.  
**Correct feedback:** Paljon means much or a lot.  
**Incorrect feedback:** Write paljon. Paljonko is a separate question word.  
**Near feedback:** `paljonko` → Paljonko is the question ‘how much’; the amount word is paljon.  
**Not sure:** Write paljon.  
**Hint:** null. **Linked:** `vocab.paljon`. **Scored:** `vocab.paljon`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D07 — `ex.food-and-quantities.a-little-a-lot-two.two-apples-choice`** · `multiple_choice` · grammar recognition · difficulty guided  
**Prompt:** Which form correctly means ‘two apples’ in the taught counting pattern?  
**Stimulus:** two apples  
**Answer:** Options (stable IDs, shuffle): `a` kaksi omena · `b` kaksi omenaa · `c` kaksi omenat. Accepted `b`.  
**Correct feedback:** Kaksi omenaa is the correct taught numeral + partitive expression.  
**Incorrect feedback:** `a`: After kaksi, use the partitive omenaa, not omena. `c`: The plural omenat is not used after kaksi in this simple pattern.  
**Near feedback:** None.  
**Not sure:** Use kaksi omenaa.  
**Hint:** null. **Linked:** `vocab.omena`, `grammar.numeral-singular-partitive`, `vocab.kaksi`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D08 — `ex.food-and-quantities.a-little-a-lot-two.one-two-match`** · `matching` · guided recognition · difficulty guided  
**Prompt:** Match the two complete apple quantities to their English meanings.  
**Stimulus:** One and two apples, each unique.  
**Answer:** Pairs with distinct first-attempt decisions: yksi omena ↔ one apple (`grammar.numeral-singular-partitive`); kaksi omenaa ↔ two apples (`grammar.numeral-singular-partitive`).  
**Correct feedback:** Yksi omena is one apple; kaksi omenaa is two apples.  
**Incorrect feedback:** `yksi`: Yksi omena means one apple. `kaksi`: Kaksi omenaa means two apples.  
**Near feedback:** None.  
**Not sure:** yksi omena = one apple; kaksi omenaa = two apples.  
**Hint:** null. **Linked:** `vocab.omena`, `vocab.yksi`, `vocab.kaksi`, `grammar.numeral-singular-partitive`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** false; lesson-local matching. **Editorial:** `needs_review`.

**D09 — `ex.food-and-quantities.a-little-a-lot-two.build-two-apples`** · `token_build` · controlled construction · difficulty guided  
**Prompt:** Build ‘two apples’ with the supplied Finnish words.  
**Stimulus:** Two apples; use the partitive singular of omena.  
**Answer:** Shuffled tokens: omenaa / Kaksi. Accepted `Kaksi omenaa.`.  
**Correct feedback:** Kaksi omenaa is the taught counting expression.  
**Incorrect feedback:** Use Kaksi followed by omenaa.  
**Near feedback:** None.  
**Not sure:** Kaksi → omenaa.  
**Hint:** null. **Linked:** `vocab.kaksi`, `vocab.omena`, `grammar.numeral-singular-partitive`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D10 — `ex.food-and-quantities.a-little-a-lot-two.much-coffee`** · `multiple_choice` · contextual recognition · difficulty guided  
**Prompt:** Which expression means ‘a lot of coffee’?  
**Stimulus:** A large amount of coffee  
**Answer:** Options (stable IDs, shuffle): `a` paljon kahvia · `b` vähän kahvia · `c` paljon kahvi. Accepted `a`.  
**Correct feedback:** Paljon kahvia uses paljon and the taught partitive.  
**Incorrect feedback:** `b`: Vähän kahvia means a little coffee, not a lot. `c`: After paljon in this context, use kahvia, not the dictionary form kahvi.  
**Near feedback:** None.  
**Not sure:** Use paljon kahvia.  
**Hint:** null. **Linked:** `vocab.paljon`, `vocab.kahvi`, `grammar.quantity-plus-partitive`. **Scored:** `grammar.quantity-plus-partitive`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D11 — `ex.food-and-quantities.a-little-a-lot-two.checkpoint-milk`** · `text_input` · phrase recall · difficulty recall  
**Prompt:** Without tiles, type ‘A little milk, please’ in Finnish.  
**Stimulus:** A little milk, please.  
**Answer:** Accepted after N1: `Vähän maitoa, kiitos.`.  
**Correct feedback:** Vähän maitoa, kiitos. is a useful short order.  
**Incorrect feedback:** Use vähän, then maitoa, then kiitos.  
**Near feedback:** `vahan maitoa kiitos` → Write vähän with ä.  
**Not sure:** Write Vähän maitoa, kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`, `vocab.vahan`, `vocab.maito`. **Scored:** `phrase.vahan-maitoa-kiitos`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

**D12 — `ex.food-and-quantities.a-little-a-lot-two.checkpoint-apple-partitive`** · `multiple_choice` · cumulative grammar recognition · difficulty guided  
**Prompt:** Which is correct for the number two followed by apple?  
**Stimulus:** two apples  
**Answer:** Options (stable IDs, shuffle): `a` kaksi omenat · `b` kaksi omenaa · `c` kaksi omena. Accepted `b`.  
**Correct feedback:** Kaksi omenaa is correct; the noun is partitive singular.  
**Incorrect feedback:** `a`: Omenat is a plural form, not the taught form after kaksi. `c`: The dictionary form omena changes to omenaa after kaksi.  
**Near feedback:** None.  
**Not sure:** Use kaksi omenaa.  
**Hint:** null. **Linked:** `grammar.numeral-singular-partitive`, `vocab.omena`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** true, independently comprehensible. **Editorial:** `needs_review`.

### Completion

**Headline:** “Just the amount you mean.” **Copy:** “You can ask for **Vähän maitoa, kiitos**, describe a lot of coffee, and recognise **kaksi omenaa**. Next comes prices and payment.” **Review:** the two new lemmas, quantity/number grammar and the milk phrase after formal introduction and project approval. No duplicate new lexical record is created for omenaa, maitoa or earlier numbers.


## Lesson 5.5 — How much is it?

**Metadata:** `lesson.food-and-quantities.how-much`, `unit.food-and-quantities`, `fi`, lesson order 5, estimated **14–20 minutes**, prerequisite `lesson.food-and-quantities.a-little-a-lot-two`. **Capability:** ask prices, recognise simple euro prices, distinguish buying/paying/costing, and ask to pay by card. **New production:** `vocab.hinta`, `vocab.euro`, `vocab.paljonko`, `vocab.maksaa`, `vocab.ostaa`, `vocab.kortti`. **Recognition-only:** `vocab.kassa`, `vocab.kuitti`. **Phrases:** `phrase.paljonko-tama-maksaa`, `phrase.voinko-maksaa-kortilla`. **Reinforced:** `grammar.numeral-singular-partitive` with `kaksi euroa`, `vocab.tama`, `vocab.voida`, `vocab.maito`. **Deferred:** adessive generation (`kortilla` is a fixed taught form), general object cases, conditional paradigm, decimal/cents pricing. **Pause:** after E08 (price) and E16 (payment) before checkout recognition. **Completion:** required steps, E01–E21 and checkpoint attempted/Not sure, no perfect score.

### Ordered learner experience

Step ID prefix `step.food-and-quantities.how-much.` + suffix; all listed required. The fixed price question is introduced as a chunk before the independent dictionary-form verb `maksaa`; E07/E08 test **only the phrase**, not an unseen conjugation. The `maksaa` lemma is introduced before E09–E12. The taught form `kortilla` is introduced before E15–E20.

| # | Step suffix | Type | Exact learner-facing copy / exercise | Formal new encounter |
|---:|---|---|---|---|
| 1 | `open` | `explanation` | **From ordering to paying.** “You can ask for something and express a quantity. Now learn a simple price question, what things cost, and how to ask whether you can pay by card.” | none |
| 2 | `price-words` | `vocabulary_intro` | **hinta** — price. **euro** — euro. **paljonko** — how much/how many? (a question word). “Paljon and paljonko are separate words: paljon describes a large amount, while paljonko asks for an amount.” | `vocab.hinta`, `vocab.euro`, `vocab.paljonko` |
| 3 | `price-meaning` | `exercise` | E01 | none |
| 4 | `match-price-words` | `exercise` | E02 | none |
| 5 | `one-two-euros` | `grammar_explanation` | **One and two euros.** “**yksi euro** — one euro; **kaksi euroa** — two euros. This follows the number pattern you saw with **yksi omena / kaksi omenaa**. The form after two is **euroa**, not eurot. We are not learning prices with cents yet.” | none |
| 6 | `recognise-euroa` | `exercise` | E03 | none |
| 7 | `retrieve-hinta` | `exercise` | E04 | none |
| 8 | `retrieve-euro` | `exercise` | E05 | none |
| 9 | `retrieve-paljonko` | `exercise` | E06 | none |
| 10 | `price-question` | `phrase_intro` | **Paljonko tämä maksaa?** — “How much does this cost?” “Use it when asking the price of an item you can point to. The word **maksaa** is the familiar verb form in this fixed question; we'll now look at its two everyday meanings.” | `phrase.paljonko-tama-maksaa` |
| 11 | `recognise-price-question` | `exercise` | E07 | none |
| 12 | `build-price-question` | `exercise` | E08 | none |
| 13 | `verbs` | `vocabulary_intro` | **maksaa** — to pay, or to cost, depending on the sentence. **maksan** — I pay. **ostaa** — to buy. **ostan** — I buy. “If you buy something, you acquire it; when you pay, you give money. In **Se maksaa kaksi euroa**, maksaa means ‘costs’.” | `vocab.maksaa`, `vocab.ostaa` |
| 14 | `buy-pay-choice` | `exercise` | E09 | none |
| 15 | `recall-maksaa` | `exercise` | E10 | none |
| 16 | `recall-ostaa` | `exercise` | E11 | none |
| 17 | `example-price` | `example_set` | **Se maksaa kaksi euroa.** — “It costs two euros.” **Ostan maitoa.** — “I'm buying milk.” **Maksan kortilla.** — “I'll pay by card.” “The milk form maitoa was taught earlier. The card form kortilla is supplied and will be taught as a fixed payment expression, not a new case paradigm.” | none |
| 18 | `meaning-cost` | `exercise` | E12 | none |
| 19 | `card` | `vocabulary_intro` | **kortti** — card. “When paying by card, the useful taught expression contains **kortilla**. That is a fixed form for this context; we are not introducing the general -lla/-llä case system.” | `vocab.kortti` |
| 20 | `recognise-card` | `exercise` | E13 | none |
| 21 | `write-card` | `exercise` | E14 | none |
| 22 | `payment-phrase` | `phrase_intro` | **Voinko maksaa kortilla?** — “Can I pay by card?” “You already know Voinko …? This is a complete polite payment question. **Maksan kortilla.** — ‘I pay by card’ is a useful statement with the same fixed form.” | `phrase.voinko-maksaa-kortilla` |
| 23 | `recognise-payment` | `exercise` | E15 | none |
| 24 | `build-payment` | `exercise` | E16 | none |
| 25 | `ask-price-from-memory` | `exercise` | E17 | none |
| 26 | `checkout-words` | `vocabulary_intro` | **kassa** — checkout/cashier in a shop context. **kuitti** — receipt. “At checkout you pay; a receipt is the record you may receive afterwards. Recognise these words, but you don't have to type them yet.” | `vocab.kassa`, `vocab.kuitti` |
| 27 | `checkout-match` | `exercise` | E18 | none |
| 28 | `checkpoint` | `checkpoint` | **At checkout.** “Recall the price question, then ask to pay by card, and recognise a simple price.” E19, E20, E21. | none |

### Complete exercises

**E01 — `ex.food-and-quantities.how-much.recognise-paljonko`** · `multiple_choice` · guided recognition · difficulty guided  
**Prompt:** Which Finnish word asks ‘how much’ rather than describing a lot?  
**Stimulus:** Asking a price or amount.  
**Answer:** Stable option IDs, visually shuffled: `a` paljon · `b` paljonko · `c` vähän. Accepted `b`.  
**Correct feedback:** Paljonko is a question word meaning how much or how many.  
**Incorrect feedback:** `a`: Paljon means much/a lot; it isn't the question here. `c`: Vähän means a little.  
**Near feedback:** None.  
**Not sure:** Paljonko asks how much/how many.  
**Hint:** null. **Linked:** `vocab.paljonko`, `vocab.paljon`. **Scored:** `vocab.paljonko`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E02 — `ex.food-and-quantities.how-much.match-price-basics`** · `matching` · guided recognition · difficulty guided  
**Prompt:** Match the three Finnish words to their meanings.  
**Stimulus:** Price, euro, and a question word.  
**Answer:** Authored matching pairs (first attempt per target): hinta ↔ price (`vocab.hinta`); euro ↔ euro (`vocab.euro`); paljonko ↔ how much? (question) (`vocab.paljonko`).  
**Correct feedback:** Hinta is price, euro is euro, paljonko asks how much.  
**Incorrect feedback:** `hinta`: Hinta means price. `euro`: Euro is a euro. `paljonko`: Paljonko asks how much/how many.  
**Near feedback:** None.  
**Not sure:** hinta = price, euro = euro, paljonko = how much.  
**Hint:** null. **Linked:** `vocab.hinta`, `vocab.euro`, `vocab.paljonko`. **Scored:** `vocab.hinta`, `vocab.euro`, `vocab.paljonko`. **Review eligible:** false, lesson-local matching. **Editorial:** `needs_review`.

**E03 — `ex.food-and-quantities.how-much.two-euros-form`** · `multiple_choice` · guided form recognition · difficulty guided  
**Prompt:** Which phrase correctly means ‘two euros’?  
**Stimulus:** A price of €2.  
**Answer:** Stable option IDs, visually shuffled: `a` kaksi euro · `b` kaksi euroa · `c` kaksi eurot. Accepted `b`.  
**Correct feedback:** Kaksi euroa is correct; the noun is partitive singular after the number two.  
**Incorrect feedback:** `a`: The taught form is euroa after kaksi, not euro. `c`: Eurot is not the form used after kaksi in this expression.  
**Near feedback:** None.  
**Not sure:** Use kaksi euroa.  
**Hint:** null. **Linked:** `vocab.euro`, `grammar.numeral-singular-partitive`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E04 — `ex.food-and-quantities.how-much.recall-hinta`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary word for price.  
**Stimulus:** price (noun)  
**Answer:** Accepted after N1: `hinta`.  
**Correct feedback:** Hinta means price.  
**Incorrect feedback:** Write hinta.  
**Near feedback:** None.  
**Not sure:** Write hinta.  
**Hint:** null. **Linked:** `vocab.hinta`. **Scored:** `vocab.hinta`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E05 — `ex.food-and-quantities.how-much.recall-euro`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary word for euro.  
**Stimulus:** one euro — dictionary noun  
**Answer:** Accepted after N1: `euro`.  
**Correct feedback:** Euro means euro.  
**Incorrect feedback:** Write euro; euroa is the form used after kaksi.  
**Near feedback:** None.  
**Not sure:** Write euro.  
**Hint:** null. **Linked:** `vocab.euro`. **Scored:** `vocab.euro`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E06 — `ex.food-and-quantities.how-much.recall-paljonko`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish question word ‘how much?’ used in asking a price.  
**Stimulus:** how much? (question word)  
**Answer:** Accepted after N1: `paljonko`.  
**Correct feedback:** Paljonko asks how much.  
**Incorrect feedback:** Write paljonko, not paljon. Paljon is an amount word.  
**Near feedback:** `paljon` → Paljon means much. Paljonko asks how much.  
**Not sure:** Write paljonko.  
**Hint:** null. **Linked:** `vocab.paljonko`, `vocab.paljon`. **Scored:** `vocab.paljonko`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E07 — `ex.food-and-quantities.how-much.recognise-price-question`** · `multiple_choice` · phrase recognition · difficulty guided  
**Prompt:** What does Paljonko tämä maksaa? mean?  
**Stimulus:** Paljonko tämä maksaa?  
**Answer:** Stable option IDs, visually shuffled: `a` How much does this cost? · `b` Can I pay by card? · `c` Where is the shop?. Accepted `a`.  
**Correct feedback:** Paljonko tämä maksaa? asks the price of this item.  
**Incorrect feedback:** `b`: Card payment is a different question, taught later. `c`: Where is the shop? asks for location, not price.  
**Near feedback:** None.  
**Not sure:** It means How much does this cost?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`, `vocab.paljonko`, `vocab.tama`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E08 — `ex.food-and-quantities.how-much.build-price`** · `token_build` · controlled construction · difficulty controlled  
**Prompt:** Arrange the words to ask ‘How much does this cost?’  
**Stimulus:** How much does this cost?  
**Answer:** Shuffled tiles: maksaa? / Paljonko / tämä. Accepted complete answer `Paljonko tämä maksaa?`.  
**Correct feedback:** Paljonko tämä maksaa? is a complete price question.  
**Incorrect feedback:** Place Paljonko first, then tämä, then maksaa.  
**Near feedback:** None.  
**Not sure:** Paljonko → tämä → maksaa?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`, `vocab.tama`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E09 — `ex.food-and-quantities.how-much.buy-or-pay`** · `multiple_choice` · guided contrast · difficulty guided  
**Prompt:** Which Finnish verb means to buy rather than pay?  
**Stimulus:** to buy / acquire an item  
**Answer:** Stable option IDs, visually shuffled: `a` ostaa · `b` maksaa · `c` haluta. Accepted `a`.  
**Correct feedback:** Ostaa means to buy.  
**Incorrect feedback:** `b`: Maksaa means to pay or to cost, depending on context. `c`: Haluta means to want, not to buy.  
**Near feedback:** None.  
**Not sure:** Ostaa means to buy.  
**Hint:** null. **Linked:** `vocab.ostaa`, `vocab.maksaa`, `vocab.haluta`. **Scored:** `vocab.ostaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E10 — `ex.food-and-quantities.how-much.recall-maksaa`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary verb meaning to pay or to cost.  
**Stimulus:** to pay / to cost — dictionary form  
**Answer:** Accepted after N1: `maksaa`.  
**Correct feedback:** Maksaa can mean to pay or to cost, depending on the sentence.  
**Incorrect feedback:** Write maksaa, with double a at the end.  
**Near feedback:** None.  
**Not sure:** Write maksaa.  
**Hint:** null. **Linked:** `vocab.maksaa`. **Scored:** `vocab.maksaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E11 — `ex.food-and-quantities.how-much.recall-ostaa`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary verb meaning to buy.  
**Stimulus:** to buy — dictionary form  
**Answer:** Accepted after N1: `ostaa`.  
**Correct feedback:** Ostaa means to buy.  
**Incorrect feedback:** Write ostaa, with a long final aa.  
**Near feedback:** None.  
**Not sure:** Write ostaa.  
**Hint:** null. **Linked:** `vocab.ostaa`. **Scored:** `vocab.ostaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E12 — `ex.food-and-quantities.how-much.recognise-cost`** · `multiple_choice` · contextual meaning · difficulty guided  
**Prompt:** What does Se maksaa kaksi euroa. mean?  
**Stimulus:** Se maksaa kaksi euroa.  
**Answer:** Stable option IDs, visually shuffled: `a` It costs two euros. · `b` I pay two euros. · `c` It costs one euro.. Accepted `a`.  
**Correct feedback:** Se maksaa kaksi euroa. gives the price: two euros.  
**Incorrect feedback:** `b`: Here the subject is se (it), so maksaa means costs; the speaker is not saying ‘I pay’. `c`: Kaksi means two, not one.  
**Near feedback:** None.  
**Not sure:** It costs two euros.  
**Hint:** null. **Linked:** `vocab.maksaa`, `vocab.euro`, `grammar.numeral-singular-partitive`. **Scored:** `vocab.maksaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E13 — `ex.food-and-quantities.how-much.recognise-kortti`** · `multiple_choice` · guided recognition · difficulty guided  
**Prompt:** What does kortti mean?  
**Stimulus:** kortti  
**Answer:** Stable option IDs, visually shuffled: `a` receipt · `b` card · `c` checkout. Accepted `b`.  
**Correct feedback:** Kortti is a card.  
**Incorrect feedback:** `a`: Receipt is kuitti, taught for recognition later. `c`: Checkout is kassa.  
**Near feedback:** None.  
**Not sure:** Kortti means card.  
**Hint:** null. **Linked:** `vocab.kortti`. **Scored:** `vocab.kortti`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E14 — `ex.food-and-quantities.how-much.recall-kortti`** · `text_input` · controlled recall · difficulty controlled  
**Prompt:** Type the Finnish dictionary noun for card.  
**Stimulus:** card (dictionary form)  
**Answer:** Accepted after N1: `kortti`.  
**Correct feedback:** Kortti means card.  
**Incorrect feedback:** Write kortti; kortilla is the fixed payment form.  
**Near feedback:** None.  
**Not sure:** Write kortti.  
**Hint:** null. **Linked:** `vocab.kortti`. **Scored:** `vocab.kortti`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E15 — `ex.food-and-quantities.how-much.recognise-card-question`** · `multiple_choice` · phrase recognition · difficulty guided  
**Prompt:** Which phrase asks if you may pay by card?  
**Stimulus:** A customer asks the cashier about card payment.  
**Answer:** Stable option IDs, visually shuffled: `a` Paljonko tämä maksaa? · `b` Voinko maksaa kortilla? · `c` Ostan maitoa.. Accepted `b`.  
**Correct feedback:** Voinko maksaa kortilla? asks to pay by card.  
**Incorrect feedback:** `a`: Paljonko tämä maksaa? asks the price. `c`: Ostan maitoa. means I'm buying milk; it doesn't ask about payment method.  
**Near feedback:** None.  
**Not sure:** Ask Voinko maksaa kortilla?  
**Hint:** null. **Linked:** `phrase.voinko-maksaa-kortilla`, `phrase.paljonko-tama-maksaa`. **Scored:** `phrase.voinko-maksaa-kortilla`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E16 — `ex.food-and-quantities.how-much.build-card-payment`** · `token_build` · guided construction · difficulty controlled  
**Prompt:** Build the complete question ‘Can I pay by card?’  
**Stimulus:** Can I pay by card?  
**Answer:** Shuffled tiles: kortilla? / maksaa / Voinko. Accepted complete answer `Voinko maksaa kortilla?`.  
**Correct feedback:** Voinko maksaa kortilla? is the fixed card-payment question.  
**Incorrect feedback:** Use Voinko → maksaa → kortilla. The word kortilla is already supplied.  
**Near feedback:** None.  
**Not sure:** Voinko → maksaa → kortilla?  
**Hint:** null. **Linked:** `phrase.voinko-maksaa-kortilla`, `vocab.kortti`, `vocab.maksaa`. **Scored:** `phrase.voinko-maksaa-kortilla`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E17 — `ex.food-and-quantities.how-much.recall-price-question`** · `text_input` · phrase recall · difficulty controlled  
**Prompt:** Without tiles, type ‘How much does this cost?’ in Finnish.  
**Stimulus:** How much does this cost?  
**Answer:** Accepted after N1: `Paljonko tämä maksaa?`.  
**Correct feedback:** Paljonko tämä maksaa? is a useful shop question.  
**Incorrect feedback:** Write Paljonko tämä maksaa? Do not use paljon without -ko.  
**Near feedback:** `paljon tämä maksaa` → Use paljonko to ask how much: Paljonko tämä maksaa?  
**Not sure:** Write Paljonko tämä maksaa?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`, `vocab.paljonko`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E18 — `ex.food-and-quantities.how-much.match-checkout`** · `matching` · recognition-only · difficulty guided  
**Prompt:** Match the two recognition words to their shop meanings.  
**Stimulus:** At a checkout, the cashier may give you a receipt.  
**Answer:** Authored matching pairs (first attempt per target): kassa ↔ checkout / cashier (`vocab.kassa`); kuitti ↔ receipt (`vocab.kuitti`).  
**Correct feedback:** Kassa is checkout/cashier in context; kuitti is receipt.  
**Incorrect feedback:** `kassa`: Kassa is checkout/cashier in the taught situation. `kuitti`: Kuitti is a receipt.  
**Near feedback:** None.  
**Not sure:** Kassa = checkout/cashier; kuitti = receipt.  
**Hint:** null. **Linked:** `vocab.kassa`, `vocab.kuitti`. **Scored:** `vocab.kassa`, `vocab.kuitti`. **Review eligible:** false, lesson-local matching. **Editorial:** `needs_review`.

**E19 — `ex.food-and-quantities.how-much.checkpoint-price`** · `text_input` · independent phrase recall · difficulty controlled  
**Prompt:** At the shop, ask the price of the item you point to. Type the complete Finnish question.  
**Stimulus:** How much does this cost?  
**Answer:** Accepted after N1: `Paljonko tämä maksaa?`.  
**Correct feedback:** Paljonko tämä maksaa? asks the price.  
**Incorrect feedback:** Use Paljonko tämä maksaa? with paljonko as one word.  
**Near feedback:** `paljon tämä maksaa` → The correct question word is paljonko, one word.  
**Not sure:** Write Paljonko tämä maksaa?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`, `vocab.paljonko`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E20 — `ex.food-and-quantities.how-much.checkpoint-card`** · `text_input` · independent phrase recall · difficulty controlled  
**Prompt:** At checkout, type ‘Can I pay by card?’ in Finnish.  
**Stimulus:** Can I pay by card?  
**Answer:** Accepted after N1: `Voinko maksaa kortilla?`.  
**Correct feedback:** Voinko maksaa kortilla? is the taught card-payment request.  
**Incorrect feedback:** Use Voinko maksaa kortilla?; kortilla is the fixed card-payment form.  
**Near feedback:** `voinko maksaa kortti` → The taught payment phrase uses kortilla, not the dictionary form kortti.  
**Not sure:** Write Voinko maksaa kortilla?  
**Hint:** null. **Linked:** `phrase.voinko-maksaa-kortilla`, `vocab.kortti`, `vocab.maksaa`. **Scored:** `phrase.voinko-maksaa-kortilla`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**E21 — `ex.food-and-quantities.how-much.checkpoint-euro`** · `multiple_choice` · cumulative numerical recognition · difficulty guided  
**Prompt:** The item has a price tag of €2. Which Finnish sentence states that price?  
**Stimulus:** Price €2, not €1.  
**Answer:** Stable option IDs, visually shuffled: `a` Se maksaa yksi euro. · `b` Se maksaa kaksi euroa. · `c` Se maksaa kaksi eurot.. Accepted `b`.  
**Correct feedback:** Se maksaa kaksi euroa. correctly says it costs two euros.  
**Incorrect feedback:** `a`: Yksi euro is one euro, but the price here is two. `c`: After kaksi use euroa, not eurot.  
**Near feedback:** None.  
**Not sure:** Use Se maksaa kaksi euroa.  
**Hint:** null. **Linked:** `vocab.maksaa`, `vocab.euro`, `grammar.numeral-singular-partitive`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

### Completion

**Headline:** “You can ask and pay.” **Copy:** “You can ask **Paljonko tämä maksaa?**, understand **kaksi euroa**, and ask **Voinko maksaa kortilla?**. Next you'll put these pieces into one café interaction.” **Review:** all six production lemmas and two phrase patterns, plus the recognition-only checkout words in comprehension, only after encounter and editorial approval. **No new vocabulary identity is created for euroa or kortilla.**


## Lesson 5.6 — Café and shop review

**Metadata:** `lesson.food-and-quantities.cafe-shop-review`, `unit.food-and-quantities`, `fi`, order 6, estimated **10–15 minutes**, prerequisite `lesson.food-and-quantities.how-much`. **Capability:** connect the six Unit 5 lessons into a practical simple café/shop interaction. **New production lemmas:** none. **New recognition-only words:** none. **Review:** all previously taught production/recognition words and phrases; explicitly include Unit 1 greetings/kiitos, Unit 3 Haluan/Voinko, Unit 4 café/shop and Unit 5 drink, quantity, price/payment forms. **Grammar:** partitive food/drinks, quantity + partitive, numeral singular partitive, fixed polite requests; nothing generative beyond the taught forms. **Pause:** before the ten-question checkpoint after F04. **Completion:** attempt every required teaching step and F01–F14 or explicitly Not sure; no perfect score gate.

### Ordered learner experience

Full step IDs: `step.food-and-quantities.cafe-shop-review.` + suffix. All listed steps required. **F05–F14 are the final ten-part unit capability check**, not an extra seventh lesson or a conversation UI engine. Each exercise can be assessed independently without displaying an unseen previous dialogue.

| # | Step suffix | Type | Exact learner-facing copy / exercise reference | New formal encounter |
|---:|---|---|---|---|
| 1 | `opening` | `explanation` | **A small café interaction.** “You know enough to greet someone, request a drink, understand a simple price and ask how to pay. Practise those pieces together, without needing a new kind of conversation game.” | none |
| 2 | `model-dialogue` | `example_set` | **Customer:** “Hei! Haluaisin kahvia, kiitos.” **Staff:** “Kyllä. Se maksaa kaksi euroa.” **Customer:** “Voinko maksaa kortilla?” **Staff:** “Kyllä.” **Customer:** “Kiitos!” “The dialogue uses only forms you have already met. Prices here are example prices, not a real café's price list.” | none |
| 3 | `drink-check` | `exercise` | F01 | none |
| 4 | `quantity-check` | `exercise` | F02 | none |
| 5 | `euro-check` | `exercise` | F03 | none |
| 6 | `buy-pay-check` | `exercise` | F04 | none |
| 7 | `grammar-recap` | `grammar_explanation` | **What makes these short phrases work.** “For an amount of water, the taught form is **vettä**, not vesi. After kaksi in the examples, use **omenaa** or **euroa**. **Haluaisin** is a polite chunk, and **kortilla** belongs to the fixed card-payment expression. You don't need the full partitive, conditional or payment-case systems today.” | none |
| 8 | `checkpoint` | `checkpoint` | **Your first café and shop check.** “Each situation has its own context. Ask for water, say you want coffee, choose quantities, ask the price and pay by card. Not sure is always a valid response.” F05, F06, F07, F08, F09, F10, F11, F12, F13, F14. | none |

### Complete exercises

**F01 — `ex.food-and-quantities.cafe-shop-review.recognise-water`** · `multiple_choice` · cumulative recognition · difficulty contextual recognition  
**Prompt:** Which taught question asks for water at a café?  
**Stimulus:** You want a drink of water.  
**Answer:** Shuffled stable options: `a` Voinko saada vettä? · `b` Paljonko tämä maksaa? · `c` Missä se on?. Accepted ID `a`.  
**Correct feedback:** Voinko saada vettä? asks for water.  
**Incorrect feedback:** `b`: Paljonko tämä maksaa? asks the price. `c`: Missä se on? asks where something is.  
**Near feedback:** None.  
**Not sure:** Use Voinko saada vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.vesi`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F02 — `ex.food-and-quantities.cafe-shop-review.recognise-small-milk`** · `multiple_choice` · quantity recognition · difficulty contextual recognition  
**Prompt:** Which Finnish expression asks for a small amount of milk?  
**Stimulus:** A little milk, please.  
**Answer:** Shuffled stable options: `a` Paljon maitoa. · `b` Vähän maitoa, kiitos. · `c` Vähän maito.. Accepted ID `b`.  
**Correct feedback:** Vähän maitoa, kiitos. means a little milk, please.  
**Incorrect feedback:** `a`: Paljon maitoa means a lot of milk. `c`: The taught milk form after vähän is maitoa.  
**Near feedback:** None.  
**Not sure:** Use Vähän maitoa, kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`, `grammar.quantity-plus-partitive`. **Scored:** `phrase.vahan-maitoa-kiitos`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F03 — `ex.food-and-quantities.cafe-shop-review.recognise-price`** · `multiple_choice` · cumulative price recognition · difficulty contextual recognition  
**Prompt:** What does Se maksaa kaksi euroa. say?  
**Stimulus:** Se maksaa kaksi euroa.  
**Answer:** Shuffled stable options: `a` It costs one euro. · `b` It costs two euros. · `c` I would like two coffees.. Accepted ID `b`.  
**Correct feedback:** Se maksaa kaksi euroa. states a price of two euros.  
**Incorrect feedback:** `a`: Yksi is one; kaksi is two. `c`: This sentence is about a cost, not ordering coffee.  
**Near feedback:** None.  
**Not sure:** It costs two euros.  
**Hint:** null. **Linked:** `vocab.maksaa`, `vocab.euro`, `grammar.numeral-singular-partitive`. **Scored:** `vocab.maksaa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F04 — `ex.food-and-quantities.cafe-shop-review.shop-action`** · `multiple_choice` · recognition of buy versus pay · difficulty contextual recognition  
**Prompt:** Which Finnish verb means to buy an item rather than pay for it?  
**Stimulus:** to buy  
**Answer:** Shuffled stable options: `a` maksaa · `b` ostaa · `c` tarvita. Accepted ID `b`.  
**Correct feedback:** Ostaa means to buy.  
**Incorrect feedback:** `a`: Maksaa means pay or cost, depending on context. `c`: Tarvita means need, not buy.  
**Near feedback:** None.  
**Not sure:** Ostaa means to buy.  
**Hint:** null. **Linked:** `vocab.ostaa`, `vocab.maksaa`. **Scored:** `vocab.ostaa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F05 — `ex.food-and-quantities.cafe-shop-review.final-request-water`** · `text_input` · independent phrase recall · difficulty independent recall  
**Prompt:** At the café, type a complete Finnish request for water: ‘Can I have some water?’  
**Stimulus:** Can I have some water?  
**Answer:** Accepted under N1: `Voinko saada vettä?` or `Voinko saada vettä, kiitos?`.  
**Correct feedback:** Voinko saada vettä? is a complete polite water request.  
**Incorrect feedback:** Use Voinko saada vettä; the water form is vettä.  
**Near feedback:** `voinko saada vesi` → The taught phrase uses vettä, not vesi.  
**Not sure:** Write Voinko saada vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.vesi`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F06 — `ex.food-and-quantities.cafe-shop-review.final-want-coffee`** · `text_input` · independent phrase recall · difficulty independent recall  
**Prompt:** You want coffee. Type the taught Finnish sentence ‘I want coffee’.  
**Stimulus:** I want coffee. (Use the Haluan version, not Haluaisin.)  
**Answer:** Accepted under N1: `Haluan kahvia.` or `Minä haluan kahvia.`.  
**Correct feedback:** Haluan kahvia. uses the correct coffee form.  
**Incorrect feedback:** Use kahvia after haluan; kahvi is the dictionary form.  
**Near feedback:** `haluan kahvi` → In the taught request, use kahvia.  
**Not sure:** Write Haluan kahvia.  
**Hint:** null. **Linked:** `phrase.haluan-kahvia`, `vocab.kahvi`, `vocab.haluta`. **Scored:** `phrase.haluan-kahvia`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F07 — `ex.food-and-quantities.cafe-shop-review.final-quantity`** · `multiple_choice` · contextual quantity recognition · difficulty contextual recognition  
**Prompt:** The customer wants only a little milk. Which expression fits?  
**Stimulus:** a little milk, please  
**Answer:** Shuffled stable options: `a` Paljon maitoa, kiitos. · `b` Vähän maitoa, kiitos. · `c` Vähän maito, kiitos.. Accepted ID `b`.  
**Correct feedback:** Vähän maitoa, kiitos. asks for a little milk.  
**Incorrect feedback:** `a`: Paljon means a lot, not a little. `c`: The milk form here is maitoa, not maito.  
**Near feedback:** None.  
**Not sure:** Use Vähän maitoa, kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`, `grammar.quantity-plus-partitive`. **Scored:** `grammar.quantity-plus-partitive`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F08 — `ex.food-and-quantities.cafe-shop-review.final-two-apples`** · `token_build` · guided construction · difficulty guided construction  
**Prompt:** Use the supplied tiles to say ‘two apples’.  
**Stimulus:** Two whole apples counted as items; the words are supplied.  
**Answer:** Shuffled complete tile bank: `omenaa` / `Kaksi`. Accepted sequence: `Kaksi omenaa.`.  
**Correct feedback:** Kaksi omenaa is the taught two-plus-partitive pattern.  
**Incorrect feedback:** Use Kaksi then omenaa, not omenat.  
**Near feedback:** None.  
**Not sure:** Kaksi → omenaa.  
**Hint:** null. **Linked:** `grammar.numeral-singular-partitive`, `vocab.omena`, `vocab.kaksi`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F09 — `ex.food-and-quantities.cafe-shop-review.final-price-question`** · `text_input` · independent phrase recall · difficulty independent recall  
**Prompt:** You point to a product at the shop. Ask ‘How much does this cost?’ in Finnish.  
**Stimulus:** How much does this cost?  
**Answer:** Accepted under N1: `Paljonko tämä maksaa?`.  
**Correct feedback:** Paljonko tämä maksaa? is the complete price question.  
**Incorrect feedback:** Use Paljonko tämä maksaa? The question word is paljonko.  
**Near feedback:** `paljon tämä maksaa` → The price question word is paljonko, not paljon.  
**Not sure:** Write Paljonko tämä maksaa?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`, `vocab.paljonko`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F10 — `ex.food-and-quantities.cafe-shop-review.final-price-euros`** · `multiple_choice` · cumulative numerical recognition · difficulty contextual recognition  
**Prompt:** A café item costs €2. Which complete Finnish sentence gives that price correctly?  
**Stimulus:** The price shown is €2.  
**Answer:** Shuffled stable options: `a` Se maksaa kaksi euroa. · `b` Se maksaa yksi euro. · `c` Se maksaa kaksi eurot.. Accepted ID `a`.  
**Correct feedback:** Se maksaa kaksi euroa. states the price correctly.  
**Incorrect feedback:** `b`: Yksi euro is one euro, not two. `c`: The taught number pattern uses euroa after kaksi, not eurot.  
**Near feedback:** None.  
**Not sure:** Use Se maksaa kaksi euroa.  
**Hint:** null. **Linked:** `grammar.numeral-singular-partitive`, `vocab.euro`, `vocab.maksaa`. **Scored:** `grammar.numeral-singular-partitive`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F11 — `ex.food-and-quantities.cafe-shop-review.final-card-payment`** · `text_input` · independent phrase recall · difficulty independent recall  
**Prompt:** At checkout, ask ‘Can I pay by card?’ in Finnish.  
**Stimulus:** Can I pay by card?  
**Answer:** Accepted under N1: `Voinko maksaa kortilla?`.  
**Correct feedback:** Voinko maksaa kortilla? is the taught card-payment question.  
**Incorrect feedback:** Use the full phrase Voinko maksaa kortilla; kortilla is the fixed payment form.  
**Near feedback:** `voinko maksaa kortti` → The fixed form is kortilla when paying by card.  
**Not sure:** Write Voinko maksaa kortilla?  
**Hint:** null. **Linked:** `phrase.voinko-maksaa-kortilla`, `vocab.kortti`, `vocab.maksaa`. **Scored:** `phrase.voinko-maksaa-kortilla`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F12 — `ex.food-and-quantities.cafe-shop-review.final-buy-pay`** · `text_input` · contextual independent recall · difficulty independent recall  
**Prompt:** At a shop, you are buying some milk. Type the taught Finnish sentence “I'm buying milk.”  
**Stimulus:** I am buying milk; describe the purchase, not the payment method.  
**Answer:** Accepted after N1: `Ostan maitoa.` or `Minä ostan maitoa.`.  
**Correct feedback:** Ostan maitoa. says you're buying milk; Maksan kortilla. would explain how you pay.  
**Incorrect feedback:** Use Ostan maitoa. The verb is ostan (“I buy”) and the taught milk form is maitoa.  
**Near feedback:** `maksan maitoa` → Maksaa means pay/cost; to buy milk say Ostan maitoa.  
**Not sure:** Write Ostan maitoa.  
**Hint:** null. **Linked:** `vocab.ostaa`, `vocab.maito`, `vocab.maksaa`. **Scored:** `vocab.ostaa`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F13 — `ex.food-and-quantities.cafe-shop-review.final-receipt`** · `multiple_choice` · recognition-only comprehension · difficulty contextual recognition  
**Prompt:** After you pay, the cashier offers a kuitti. What is that?  
**Stimulus:** kuitti at a shop checkout  
**Answer:** Shuffled stable options: `a` receipt · `b` checkout · `c` card. Accepted ID `a`.  
**Correct feedback:** Kuitti is a receipt.  
**Incorrect feedback:** `b`: Kassa is checkout/cashier, not the receipt. `c`: Kortti is a card used to pay.  
**Near feedback:** None.  
**Not sure:** Kuitti means receipt.  
**Hint:** null. **Linked:** `vocab.kuitti`, `vocab.kassa`, `vocab.kortti`. **Scored:** `vocab.kuitti`. **Review eligible:** true; self-contained. **Editorial:** `needs_review`.

**F14 — `ex.food-and-quantities.cafe-shop-review.final-dialogue`** · `token_build` · integrated capability · difficulty guided construction  
**Prompt:** Build this short café exchange in order: greeting and polite coffee order; price; card-payment question; thanks.  
**Stimulus:** Four complete supplied chunks. Use each once in the indicated conversation order.  
**Answer:** Shuffled complete tile bank: `Voinko maksaa kortilla?` / `Kiitos!` / `Hei! Haluaisin kahvia, kiitos.` / `Se maksaa kaksi euroa.`. Accepted sequence: `Hei! Haluaisin kahvia, kiitos. Se maksaa kaksi euroa. Voinko maksaa kortilla? Kiitos!`.  
**Correct feedback:** You combined Unit 1 politeness with ordering, a simple price and payment.  
**Incorrect feedback:** Order: Hei! Haluaisin kahvia, kiitos. → Se maksaa kaksi euroa. → Voinko maksaa kortilla? → Kiitos!  
**Near feedback:** None.  
**Not sure:** Greeting/order → price → payment question → thanks.  
**Hint:** null. **Linked:** `phrase.haluaisin-slot`, `phrase.voinko-maksaa-kortilla`, `vocab.maksaa`, `vocab.euro`, `vocab.hei`, `vocab.kiitos`. **Scored:** none; `knowledgeScoring: false`, capability integration only. **Review eligible:** false; multi-target guided capstone. **Editorial:** `needs_review`.

### Cumulative capability checkpoint and completion

F05–F14 explicitly test all five blueprint capabilities: requesting water (F05), saying you want coffee (F06), understanding quantity (F07/F08), asking a price (F09), and paying by card (F11). They also sample a €2 price (F10), buying versus paying (F12), recognition of a receipt (F13) and a complete guided mini-dialogue (F14). The F14 tiles are supplied, so it earns **capability evidence**, not independent lexical success for every visible word.

**Headline:** “Your first café conversation.” **Copy:** “You can now request a drink, ask about a price, recognise basic amounts, and ask to pay by card. Your words will return in Review as they become due.” **Completion:** all six lessons attempted under existing policy, not perfect recall. **Next:** Unit 6 — Daily Life. **Review:** due scheduler only, independently eligible targets, never auto-complete optional practice.


## Part III — Independent scheduled-Review variants

These **eight review-only exercises are not extra compulsory lesson steps**. They check the meaning of each recognition-only item independently, after its formal encounter and only when due. All are `multiple_choice`, `intent: recognition`, `difficulty: foundation`, `reviewEligible: true`, with standalone prompt/stimulus, distinct distractors and exact feedback. They **never** require Finnish typed production.

**R01 — `ex.food-and-quantities.review.kana-chicken`** · `multiple_choice` · independent recognition  
**Prompt:** What does **kana** mean in the taught everyday context?  
**Stimulus:** `kana`.  
**Answer:** Shuffled stable options: `a` fish · `b` chicken · `c` banana. Accepted option ID: `b`.  
**Correct feedback:** Kana means chicken.  
**Incorrect feedback:** `a`: Fish is kala, not kana. `c`: Banana is banaani, not kana.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Kana means chicken.  
**Hint:** null. **Linked:** `vocab.kana`. **Scored:** `vocab.kana` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.

**R02 — `ex.food-and-quantities.review.kala-fish`** · `multiple_choice` · independent recognition  
**Prompt:** What does **kala** mean in the taught everyday context?  
**Stimulus:** `kala`.  
**Answer:** Shuffled stable options: `a` chicken · `b` fish · `c` potato. Accepted option ID: `b`.  
**Correct feedback:** Kala means fish.  
**Incorrect feedback:** `a`: Chicken is kana. `c`: Potato is peruna.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Kala means fish.  
**Hint:** null. **Linked:** `vocab.kala`. **Scored:** `vocab.kala` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.

**R03 — `ex.food-and-quantities.review.peruna-potato`** · `multiple_choice` · independent recognition  
**Prompt:** What does **peruna** mean in the taught everyday context?  
**Stimulus:** `peruna`.  
**Answer:** Shuffled stable options: `a` banana · `b` potato · `c` bread. Accepted option ID: `b`.  
**Correct feedback:** Peruna means potato.  
**Incorrect feedback:** `a`: Banana is banaani. `c`: Bread is leipä.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Peruna means potato.  
**Hint:** null. **Linked:** `vocab.peruna`. **Scored:** `vocab.peruna` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.

**R04 — `ex.food-and-quantities.review.banaani-banana`** · `multiple_choice` · independent recognition  
**Prompt:** What does **banaani** mean in the taught everyday context?  
**Stimulus:** `banaani`.  
**Answer:** Shuffled stable options: `a` potato · `b` banana · `c` apple. Accepted option ID: `b`.  
**Correct feedback:** Banaani means banana.  
**Incorrect feedback:** `a`: Potato is peruna. `c`: Apple is omena.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Banaani means banana.  
**Hint:** null. **Linked:** `vocab.banaani`. **Scored:** `vocab.banaani` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.

**R05 — `ex.food-and-quantities.review.nalka-hunger`** · `multiple_choice` · independent recognition  
**Prompt:** What does **nälkä** mean in the taught everyday context?  
**Stimulus:** `nälkä`.  
**Answer:** Shuffled stable options: `a` thirst · `b` hunger · `c` lunch. Accepted option ID: `b`.  
**Correct feedback:** Nälkä names hunger.  
**Incorrect feedback:** `a`: Thirst is jano. `c`: Lunch is lounas.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Nälkä means hunger.  
**Hint:** null. **Linked:** `vocab.nalka`. **Scored:** `vocab.nalka` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.

**R06 — `ex.food-and-quantities.review.jano-thirst`** · `multiple_choice` · independent recognition  
**Prompt:** What does **jano** mean in the taught everyday context?  
**Stimulus:** `jano`.  
**Answer:** Shuffled stable options: `a` hunger · `b` thirst · `c` water. Accepted option ID: `b`.  
**Correct feedback:** Jano names thirst.  
**Incorrect feedback:** `a`: Hunger is nälkä. `c`: Water is vesi; jano is thirst.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Jano means thirst.  
**Hint:** null. **Linked:** `vocab.jano`. **Scored:** `vocab.jano` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.

**R07 — `ex.food-and-quantities.review.kassa-checkout`** · `multiple_choice` · independent recognition  
**Prompt:** What does **kassa** mean in the taught everyday context?  
**Stimulus:** `kassa`.  
**Answer:** Shuffled stable options: `a` receipt · `b` checkout / cashier (at a shop) · `c` card. Accepted option ID: `b`.  
**Correct feedback:** Kassa means checkout/cashier in the taught shop context.  
**Incorrect feedback:** `a`: Receipt is kuitti, not kassa. `c`: Card is kortti.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Kassa means checkout/cashier.  
**Hint:** null. **Linked:** `vocab.kassa`. **Scored:** `vocab.kassa` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.

**R08 — `ex.food-and-quantities.review.kuitti-receipt`** · `multiple_choice` · independent recognition  
**Prompt:** What does **kuitti** mean in the taught everyday context?  
**Stimulus:** `kuitti`.  
**Answer:** Shuffled stable options: `a` checkout / cashier · `b` receipt · `c` card. Accepted option ID: `b`.  
**Correct feedback:** Kuitti means receipt.  
**Incorrect feedback:** `a`: Checkout/cashier is kassa. `c`: Card is kortti.  
**Near feedback:** None; no invented near synonym.  
**Not sure:** Kuitti means receipt.  
**Hint:** null. **Linked:** `vocab.kuitti`. **Scored:** `vocab.kuitti` (recognition-only). **Review eligible:** true, independent and self-contained. **Editorial:** `needs_review`.


## Part IV — Final assessment, cumulative learning and optional practice

**End-of-unit capability check:** F05–F14 is fully authored inside Lesson 5.6. It has independent questions to request water, say you want coffee, understand the quantity words `vähän/paljon`, use `kaksi omenaa`, ask a price, recognise a two-euro price, ask to pay by card, distinguish `ostaa` vs `maksaa` via `Ostan maitoa`, recognise `kuitti`, and order a small complete café dialogue using supplied sentence tiles. The final token task has `scoredTargetIds: []`; successful tile ordering does not imply every lexical item was spelled from memory.

**Cross-unit progression:** Unit 1 `Hei`, `Kiitos`, `kyllä` and numbers; Unit 2 `tämä` and familiar question forms; Unit 3 `haluan`, `voinko`, `saada` recognition and short verb combinations; Unit 4 `kahvila`, `kauppa`, `ravintola`. None of the older words is marked newly introduced solely for use in a café scene. No requirement to produce `kahvilaan` or a new location-case ending.

**Scheduled Review:** only independently understandable, genuinely due records for formally encountered and approved targets. Match pairs are first-attempt scored individually; lesson-local matching boards do not become indiscriminate Review questions for every target. A phrase review score does not confer new `saada` lemma production. Content-scope and editorial status must be checked before the Review engine selects a record.

**Flashcards and Word Match:** reuse existing canonical vocabulary and appropriate taught forms. For optional reverse Flashcards, recognition-only `kana/kala/peruna/banaani/nälkä/jano/kassa/kuitti` must be filtered from required Finnish free recall. `kahvi/kahvia`, `tee/teetä`, `vesi/vettä`, `kortti/kortilla` share vocabulary identities; no duplicate SRS entries. Keep `paljon` and `paljonko` distinct, and exclude or qualify potentially ambiguous `ostaa/maksaa` matches. Optional My Words remains a separate personal collection.

**Research and human approval:** newly written Vokri examples are original, not copied textbook dialogues. The grammatical facts behind the partitive, numeral constructions, polite requests and card payment were cross-checked against [Aalto partitive guidance](https://openlearning.aalto.fi/mod/book/view.php?chapterid=560&id=10293&lang=fi), [Yle Supisuomea on food and the partitive](https://yle.fi/a/20-156324), [Uusi kielemme](https://uusikielemme.fi/finnish-grammar/finnish-cases/grammatical-cases/the-partitive-case-partitiivi), and payment-language references recorded in [Unit 5 QA](./unit-05-coverage-and-qa.md). The source CSV confirms lemma IDs/ranks, not certification of its generated examples. The project owner may approve; no external teacher is falsely recorded as having done so.

**Documentation-only:** No React Native source, original CSV, curriculum blueprint, Figma or previously approved Unit 1–4 content has been changed.
