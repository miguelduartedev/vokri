# Vokri — Unit 5: Food & Quantities · Complete Lesson & Exercise Specification

**Version:** 1.0 authoring · **Language:** `fi` · **Unit:** `unit.food-and-quantities` · **Stage:** `stage.a1-foundations` · **Course:** `course.fi`.  
**Editorial:** Every newly authored teaching block, exercise and Review variant is `needs_review` (`reviewedBy: null`; `reviewedAt: null`). The **Vokri product owner may approve content** under the agreed project policy without requiring external teacher sign-off. No false Finnish-teacher certification is claimed.

Read with [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), [Unit 1 content](./unit-01-hello-complete-specification.md), [Unit 2 content](./unit-02-people-and-things-complete-specification.md), [Unit 3 content](./unit-03-everyday-actions-complete-specification.md), [Unit 4 content](./unit-04-where-are-you-complete-specification.md), [Unit 5 Coverage & Editorial QA](./unit-05-coverage-and-qa.md), [Unit 5 Implementation Notes](./unit-05-implementation-notes.md), the [A1 Foundations curriculum](../a1_foundations_curriculum_blueprint.md) and the [content/learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## Part I — Unit overview, linguistic boundaries and binding contract

### Capability and prerequisites

**Learner-facing goal:** “Name some foods and drinks, request something politely, express a simple amount, ask a price and pay by card.” The six **unchanged** lessons are: 5.1 Coffee, tea and water → 5.2 Food you actually use → 5.3 Asking for something → 5.4 A little, a lot, two → 5.5 How much is it? → 5.6 Café and shop review.

**Prerequisites:** completion of Units 1–4 under attempt-based progression. Relevant prior knowledge includes `hei/moi`, `kiitos`, numbers `yksi/kaksi`, `tämä`, `haluan`, `Voinko …?`, `saada` (recognition only in Unit 3), and locations `kauppa/kahvila/ravintola`. A familiar place name is contextual support, **not a new target**. The final checkpoint is inside 5.6, not an unnecessary seventh lesson.

### Exact production vocabulary — 16 new curricular roles

| Lemma | Canonical ID | Original CSV pedagogical rank | Formal introduction |
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

**No invented duplicate lexemes:** `kahvia/vettä/maitoa/teetä/leipää/omenaa/ruokaa/lounasta/euroa/kortilla` are explicitly taught grammatical or fixed-expression forms of the existing canonical words, not extra VocabularyItems. `paljon` and `paljonko` are **two different** approved source lemmas.

### Exactly eight recognition-only words

| Lemma | Canonical ID | Original CSV rank | Formal introduction |
|---|---|---:|---|
| **kuitti** | `vocab.kuitti` | 243 | 5.5 |
| **kassa** | `vocab.kassa` | 244 | 5.5 |
| **kana** | `vocab.kana` | 255 | 5.2 |
| **kala** | `vocab.kala` | 256 | 5.2 |
| **peruna** | `vocab.peruna` | 259 | 5.2 |
| **banaani** | `vocab.banaani` | 265 | 5.2 |
| **nälkä** | `vocab.nalka` | 268 | 5.3 |
| **jano** | `vocab.jano` | 269 | 5.3 |

**Deliberate placement:** `kana/kala/peruna/banaani` first appear in the food vocabulary lesson 5.2; `nälkä/jano` first appear in polite requests 5.3 as recognition-only fixed expressions; `kuitti/kassa` appear with payment in 5.5. Each has an independently authored Review question R01–R08. These are **never mandatory Finnish free-production** items.

### Taught forms and grammar — limited practical scope

| Taught form or rule | Correct Finnish | How it is taught / what is deferred |
|---|---|---|
| Coffee, tea, water, milk | `kahvi → kahvia`, `tee → teetä`, `vesi → vettä`, `maito → maitoa` | Useful request-partitive forms, not an arbitrary suffix generator |
| Food forms | `ruoka → ruokaa`, `leipä → leipää`, `lounas → lounasta`, `omena → omenaa` | Exact nouns/contexts only, not the object-case system |
| Amount words | `vähän maitoa`, `paljon kahvia` | `grammar.quantity-plus-partitive` introduced in 5.4 |
| Numerals | `yksi omena`, `kaksi omenaa` and later `yksi euro`, `kaksi euroa` | `grammar.numeral-plus-singular-partitive` for these examples, not plural partitives |
| Softer request | `Haluaisin kahvia`, `Haluaisin teetä` | **Haluaisin** is an authored complete chunk, not independent conditional-conjugation grammar |
| Requesting water | `Voinko saada vettä?` | `saada` stays a **recognition-only Unit 3 lemma**; production is of the whole taught phrase |
| Price versus payment | `Paljonko tämä maksaa?`, `Se maksaa kaksi euroa`, `Maksan kortilla` | `maksaa` cost vs pay depends on use; `kortilla` is a fixed form, not an -lla/-llä lesson |
| Buy versus pay | `Ostan kahvia`, `Maksan kortilla` | Learn `ostan` and `maksan` explicitly; no general object-case grammar |

**Deferred:** systematic singular/plural partitive formation, object cases, general countability theory, conditional conjugation, -lla/-llä formation, units of measurement, decimal-price reading, and new verbs such as `syödä/juoda` as production.

### New phrase and grammar target registry

| Canonical ID | Exact taught content | First encounter |
|---|---|---|
| `grammar.partitive-drinks` | `kahvia/teetä/vettä/maitoa` | 5.1 |
| `grammar.partitive-food` | `ruokaa/leipää/lounasta/omenaa` | 5.2 |
| `phrase.haluan-kahvia` | `Haluan kahvia` (with taught `Haluan vettä` variation) | 5.1 |
| `phrase.haluaisin-request` | `Haluaisin kahvia/teetä/maitoa` as explicitly taught polite phrases | 5.3 |
| `phrase.voinko-saada-vetta` | `Voinko saada vettä?` | 5.3 |
| `grammar.quantity-plus-partitive` | `vähän/paljon +` taught partitive food/drinks | 5.4 |
| `grammar.numeral-plus-singular-partitive` | `yksi omena/kaksi omenaa`, later euro/euroa | 5.4 |
| `phrase.vahan-maitoa-kiitos` | `Vähän maitoa, kiitos.` | 5.4 |
| `phrase.paljonko-tama-maksaa` | `Paljonko tämä maksaa?` | 5.5 |
| `phrase.voinko-maksaa-kortilla` | `Voinko maksaa kortilla?` and contextual `Maksan kortilla.` | 5.5 |

**Spoken recognition (optional, never scored as new lemma):** new `paljon → paljo` and `vähän → vähä` awareness in 5.4. `haluan → haluun` is an existing Unit 3 spoken note and is only reinforced, not introduced anew.

### Shared assessment contract — applies to every record below

- All steps are `learningLanguage: fi`, have stable `step.food-and-quantities.<lesson>.<suffix>` IDs, and use **only** existing types `explanation`, `vocabulary_intro`, `phrase_intro`, `grammar_explanation`, `spoken_note`, `example_set`, `exercise`, `checkpoint`. A step table explicitly supplies its purpose, full learner text, linked targets, formal encounter flag and required status. No extra content engine is required for the café scenario.
- Every exercise has a globally unique ID `ex.food-and-quantities.<lesson>.<slug>`. Local A01–F13 and R01–R08 tags are document navigation aids, not persistent IDs. All exercise records explicitly provide prompt, stimulus, options/answers, correct/incorrect/near/Not sure feedback, hint, linked targets, scored targets, Review eligibility, difficulty and `needs_review` status. Matching records have individually authored pair identities and pair-specific feedback.
- Reuse the **existing N1 deterministic text policy**: Unicode NFC, lowercase, trim/collapse spaces, transform optional punctuation `.,!?` into spaces before collapsing, and compare only finite authored accepted strings. **Do not** remove Finnish diacritics, merge words, reduce long vowels/consonants, guess unseen partitives, use AI translation or apply fuzzy autocorrect. Explicit accepted variants are authoritative; punctuation isn't a hidden spelling gate.
- The domain scheduler currently supports `correct`, `almost`, `not_sure`. Preserve Units 1–4's **provisional wrong/near → non-success `almost` adapter** until an explicit schema decision, but display honest and distinct visible “incorrect” and “check this form” feedback. Do not award success for a partly wrong partitive or describe an unrelated wrong answer as nearly correct.
- `linkedTargetIds` provide context; **only** `scoredTargetIds` receive knowledge-state outcomes. Match pairs are scored individually on first attempt. A phrase-success event must not automatically count as unaided recall of all component vocabulary or productive conjugation of `saada`. For an integrated task with no scored targets, set `knowledgeScoring: false`.
- Completion requires all **required** teaching steps visited and required exercises/checkpoints attempted (including explicit Not sure), not full marks. One optional spoken note is **not** completion-gating. A `checkpoint` is an existing step container, not an extra exercise kind. Due scheduled Review is not cleared or postponed by optional Flashcards/Word Match.
- No runtime Finnish noun inflection, backend, speech recognition, image assets, custom café UI, simulated payment service or new `sv` course is needed. Introductory English context and simple written scenes are supported by existing Figma screens.

### Workload (editorial estimates; untested with beginners)

| Lesson | Required ordered steps | Required exercise records | Matching pair responses | Estimated study duration |
|---|---:|---:|---:|---|
| 5.1 Coffee, tea and water | 17 | 13 | 4 | 8–12 min |
| 5.2 Food you actually use | 17 | 13 | 6 | 8–12 min |
| 5.3 Asking for something | 15 | 11 | 2 | 7–10 min |
| 5.4 A little, a lot, two | 17 | 13 | 2 | 8–12 min |
| 5.5 How much is it? | 27 | 19 | 7 | 13–19 min |
| 5.6 Café and shop review | 6 | 13 (ten in final checkpoint) | 0 | 9–14 min |
| **Total** | **99 required + one optional spoken note** | **82** | **21** | **53–79 min** |

There are **nine matching exercise records** with 21 pair responses, giving **82-9+21 = 94 required learner response units** before the effort of multiword text entry. Lesson 5.5 is deliberately the heaviest due to six production words; the unit has natural pause/resume boundaries. No added seventh lesson.

## Part II — Fully authored lessons

## Lesson 5.1 — Coffee, tea and water

**Metadata:** `lesson.food-and-quantities.coffee-tea-water`, `unit.food-and-quantities`, `fi`, order 1, estimated **8–12 minutes**; prerequisite `lesson.where-are-you.location-review`. **Capability:** recognise four drinks and use four taught partitive forms to request a drink. **New production:** `vocab.kahvi`, `vocab.tee`, `vocab.vesi`, `vocab.maito`. **Grammar:** `grammar.partitive-drinks` (practical forms, not a general morphological generator). **Phrase:** `phrase.haluan-kahvia`. **Review:** `vocab.haluta` and Unit 1 `vocab.kiitos`. **Completion:** required steps visited; A01–A13 attempted or explicitly Not sure, no perfection gate. **Pause:** after A06, before partitive forms.

### Ordered learner experience

Full ID prefix `step.food-and-quantities.coffee-tea-water.` + suffix. Every row is **required**. The target refs in the **Linked** column identify context, while **Formal encounter** is the first intentional introduction; a word visible in distractors does not count as a new encounter.

| # | Step suffix | Type | Purpose | Exact learner-facing copy / exercise ref | Linked | Formal encounter | Required |
|---:|---|---|---|---|---|---|---|
| 1 | `opening` | `explanation` | Understand what changes when ordering a drink | **Coffee, tea and water.** “You already know how to say **Haluan …**. Now learn four drinks and a few forms Finnish uses when requesting them.” | none | none | yes |
| 2 | `kahvi-tee` | `vocabulary_intro` | Introduce first two drink lemmas | **kahvi** — coffee. **tee** — tea. “These are the words you would see as dictionary entries. The words may look different inside a full request.” | `vocab.kahvi`, `vocab.tee` | `vocab.kahvi`, `vocab.tee` | yes |
| 3 | `match-coffee-tea` | `exercise` | Guided meaning pairing | A01 | `vocab.kahvi`, `vocab.tee` | none | yes |
| 4 | `write-kahvi` | `exercise` | Independent coffee word recall | A02 | `vocab.kahvi` | none | yes |
| 5 | `write-tee` | `exercise` | Independent tea word recall | A03 | `vocab.tee` | none | yes |
| 6 | `water-milk` | `vocabulary_intro` | Introduce water and milk | **vesi** — water. **maito** — milk. “The forms used in a request are **vettä** and **maitoa**. You'll learn them as taught forms, not as guessed endings.” | `vocab.vesi`, `vocab.maito` | `vocab.vesi`, `vocab.maito` | yes |
| 7 | `recognise-water-milk` | `exercise` | Recognise drink vocabulary | A04 | `vocab.vesi`, `vocab.maito` | none | yes |
| 8 | `write-vesi` | `exercise` | Retrieve water lemma | A05 | `vocab.vesi` | none | yes |
| 9 | `write-maito` | `exercise` | Retrieve milk lemma | A06 | `vocab.maito` | none | yes |
| 10 | `partitive-drinks` | `grammar_explanation` | Introduce practical partitive forms without a universal conversion rule | **A useful drink form.** “When you request an unspecified amount, Finnish often uses the *partitive*: **kahvi → kahvia**, **tee → teetä**, **vesi → vettä**, **maito → maitoa**. These forms do **not** all follow the same ending rule. The partitive has other uses too; it doesn't simply mean the English word ‘some’.” | `grammar.partitive-drinks`, `vocab.kahvi`, `vocab.tee`, `vocab.vesi`, `vocab.maito` | `grammar.partitive-drinks` | yes |
| 11 | `partitive-choice` | `exercise` | Identify correct coffee form | A07 | `grammar.partitive-drinks`, `vocab.kahvi` | none | yes |
| 12 | `water-form` | `exercise` | Identify irregular taught water form | A08 | `grammar.partitive-drinks`, `vocab.vesi` | none | yes |
| 13 | `haluan-coffee` | `phrase_intro` | Introduce productive drink request | **Haluan kahvia.** — “I want coffee.” “You learned **haluan** in Unit 3. In this taught request, coffee appears as **kahvia**. Similarly, **Haluan vettä** means ‘I want water’, and **Haluan maitoa** means ‘I want milk’.” | `phrase.haluan-kahvia`, `grammar.partitive-drinks`, `vocab.haluta` | `phrase.haluan-kahvia` | yes |
| 14 | `build-coffee` | `exercise` | Construct guided coffee request | A09 | `phrase.haluan-kahvia`, `vocab.kahvi` | none | yes |
| 15 | `recall-coffee` | `exercise` | Retrieve independent coffee request | A10 | `phrase.haluan-kahvia` | none | yes |
| 16 | `tea-form` | `exercise` | Apply known drink form | A11 | `vocab.tee`, `grammar.partitive-drinks` | none | yes |
| 17 | `checkpoint` | `checkpoint` | Sample independent request and milk recognition | **One drink request.** “Type a short water request, then recognise the milk expression.” A12 → A13. | `grammar.partitive-drinks`, `vocab.vesi`, `vocab.maito` | none | yes |

### Complete authored exercises

**A01 — `ex.food-and-quantities.coffee-tea-water.match-kahvi-tee`** · `matching` · intent recognition · demand guided recognition · difficulty foundation  
**Prompt:** Match the two Finnish drink words to their meanings.  
**Stimulus:** Two independent drink words; no inflection required.  
**Answer:** Pairs, each evaluated independently: kahvi ↔ coffee (`vocab.kahvi`); tee ↔ tea (`vocab.tee`). Identity exact; order irrelevant.  
**Correct feedback:** Kahvi is coffee; tee is tea.  
**Incorrect feedback:** `kahvi`: Kahvi is coffee, not tea. `tee`: Tee is tea, not coffee.  
**Near feedback:** None (do not invent near credit).  
**Not sure:** kahvi = coffee; tee = tea.  
**Hint:** null. **Linked:** `vocab.kahvi`, `vocab.tee`. **Scored:** `vocab.kahvi`, `vocab.tee`. **Review eligible:** false; only guided lesson board. **Editorial:** `needs_review`.

**A02 — `ex.food-and-quantities.coffee-tea-water.type-kahvi`** · `text_input` · intent recall · demand independent dictionary-form recall · difficulty recall  
**Prompt:** Type the Finnish dictionary word for coffee.  
**Stimulus:** coffee (dictionary form)  
**Answer:** Accepted after N1 normalization: `kahvi`.  
**Correct feedback:** Kahvi means coffee.  
**Incorrect feedback:** The dictionary form is kahvi; kahvia is used in certain requests.  
**Near feedback:** `kahvia` → Kahvia is the partitive used in a request. Here, type the dictionary form kahvi.  
**Not sure:** Write kahvi.  
**Hint:** null. **Linked:** `vocab.kahvi`. **Scored:** `vocab.kahvi`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A03 — `ex.food-and-quantities.coffee-tea-water.type-tee`** · `text_input` · intent recall · demand independent dictionary-form recall · difficulty recall  
**Prompt:** Type the Finnish dictionary word for tea.  
**Stimulus:** tea (dictionary form)  
**Answer:** Accepted after N1 normalization: `tee`.  
**Correct feedback:** Tee is the noun for tea.  
**Incorrect feedback:** Write tee with a long e. Teetä is its taught partitive form.  
**Near feedback:** `te` → Tea is tee, with two e letters.  
**Not sure:** Write tee.  
**Hint:** null. **Linked:** `vocab.tee`. **Scored:** `vocab.tee`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A04 — `ex.food-and-quantities.coffee-tea-water.water-milk-meaning`** · `matching` · intent recognition · demand guided recognition · difficulty foundation  
**Prompt:** Match the two new Finnish drink words to their meanings.  
**Stimulus:** Two different drinks; no Finnish typing.  
**Answer:** Pairs, each independently scored on first attempt: **vesi** ↔ **water** (`vocab.vesi`); **maito** ↔ **milk** (`vocab.maito`). Shuffle both columns; accept only these identities.  
**Correct feedback:** Vesi means water; maito means milk.  
**Incorrect feedback:** `vesi`: Vesi means water, not milk. `maito`: Maito means milk, not water.  
**Near feedback:** None.  
**Not sure:** vesi = water; maito = milk.  
**Hint:** null. **Linked:** `vocab.vesi`, `vocab.maito`. **Scored:** `vocab.vesi`, `vocab.maito`, first-attempt pair outcomes. **Review eligible:** false; lesson-local two-pair matching. **Editorial:** `needs_review`.

**A05 — `ex.food-and-quantities.coffee-tea-water.type-vesi`** · `text_input` · intent recall · demand independent dictionary-form recall · difficulty recall  
**Prompt:** Type the Finnish dictionary word for water.  
**Stimulus:** water (dictionary form)  
**Answer:** Accepted after N1 normalization: `vesi`.  
**Correct feedback:** Vesi is the dictionary word for water.  
**Incorrect feedback:** The dictionary form is vesi; in a drink request you often see vettä.  
**Near feedback:** `vettä` → Vettä is the taught partitive form; the dictionary word is vesi.  
**Not sure:** Write vesi.  
**Hint:** null. **Linked:** `vocab.vesi`. **Scored:** `vocab.vesi`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A06 — `ex.food-and-quantities.coffee-tea-water.type-maito`** · `text_input` · intent recall · demand independent dictionary-form recall · difficulty recall  
**Prompt:** Type the Finnish dictionary word for milk.  
**Stimulus:** milk (dictionary form)  
**Answer:** Accepted after N1 normalization: `maito`.  
**Correct feedback:** Maito means milk.  
**Incorrect feedback:** Write maito; maitoa is the taught partitive form.  
**Near feedback:** `maitoa` → Maitoa is the request form; the dictionary word is maito.  
**Not sure:** Write maito.  
**Hint:** null. **Linked:** `vocab.maito`. **Scored:** `vocab.maito`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A07 — `ex.food-and-quantities.coffee-tea-water.coffee-partitive`** · `multiple_choice` · intent grammar · demand form recognition · difficulty recognition  
**Prompt:** Which taught form fits the request ‘I want coffee’?  
**Stimulus:** Haluan ___.  
**Answer:** Options (IDs stable; shuffle display): `a` kahvi · `b` kahvia · `c` kahvita. Accepted ID: `b`.  
**Correct feedback:** Haluan kahvia uses the taught partitive form kahvia.  
**Incorrect feedback:** `a`: Kahvi is the dictionary form; this taught request uses kahvia. `c`: Kahvita is not the correct partitive form of kahvi.  
**Near feedback:** None (do not invent near credit).  
**Not sure:** Write Haluan kahvia.  
**Hint:** null. **Linked:** `grammar.partitive-drinks`, `vocab.kahvi`, `vocab.haluta`. **Scored:** `grammar.partitive-drinks`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A08 — `ex.food-and-quantities.coffee-tea-water.water-partitive`** · `multiple_choice` · intent grammar · demand form recognition · difficulty recognition  
**Prompt:** Which form of vesi is used in the taught request ‘I want water’?  
**Stimulus:** Haluan ___.  
**Answer:** Options (IDs stable; shuffle display): `a` vesia · `b` vettä · `c` vesi. Accepted ID: `b`.  
**Correct feedback:** The taught partitive of vesi here is vettä.  
**Incorrect feedback:** `a`: Vesi changes its stem. Vesia is not the correct form. `c`: Vesi is the dictionary form. In this request, use vettä.  
**Near feedback:** None (do not invent near credit).  
**Not sure:** Haluan vettä.  
**Hint:** null. **Linked:** `grammar.partitive-drinks`, `vocab.vesi`. **Scored:** `grammar.partitive-drinks`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A09 — `ex.food-and-quantities.coffee-tea-water.build-haluan-kahvia`** · `token_build` · intent phrase · demand guided construction · difficulty construction  
**Prompt:** Arrange the supplied tiles to say ‘I want coffee’.  
**Stimulus:** Use both tiles.  
**Answer:** Token bank (visually shuffled): kahvia / Haluan. Accepted assembled sentence: `Haluan kahvia.`.  
**Correct feedback:** Haluan kahvia is the useful coffee request.  
**Incorrect feedback:** Put Haluan first, then kahvia. The noun takes the taught partitive form.  
**Near feedback:** None (do not invent near credit).  
**Not sure:** Haluan → kahvia.  
**Hint:** null. **Linked:** `phrase.haluan-kahvia`, `vocab.kahvi`, `grammar.partitive-drinks`. **Scored:** `phrase.haluan-kahvia`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A10 — `ex.food-and-quantities.coffee-tea-water.type-haluan-kahvia`** · `text_input` · intent phrase · demand independent sentence recall · difficulty application  
**Prompt:** Without tiles, type the taught Finnish sentence ‘I want coffee’.  
**Stimulus:** I want coffee.  
**Answer:** Accepted after N1 normalization: `Haluan kahvia.` or `Minä haluan kahvia.`.  
**Correct feedback:** Haluan kahvia is correct; the drink takes kahvia in this request.  
**Incorrect feedback:** Write Haluan kahvia. Don't leave coffee in the dictionary form.  
**Near feedback:** `haluan kahvi` → This request needs kahvia, not the dictionary form kahvi.  
**Not sure:** Write Haluan kahvia.  
**Hint:** null. **Linked:** `phrase.haluan-kahvia`, `vocab.haluta`, `vocab.kahvi`. **Scored:** `phrase.haluan-kahvia`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A11 — `ex.food-and-quantities.coffee-tea-water.tea-request-form`** · `multiple_choice` · intent grammar · demand contextual form recognition · difficulty application  
**Prompt:** You're requesting tea. Which taught Finnish form completes ‘Haluan ___’?   
**Stimulus:** I want tea.  
**Answer:** Options (IDs stable; shuffle display): `a` tee · `b` teetä · `c` teettä. Accepted ID: `b`.  
**Correct feedback:** Haluan teetä uses the correct taught form of tea.  
**Incorrect feedback:** `a`: Tee is the dictionary form; this request uses teetä. `c`: The taught partitive is teetä, with one t after the long ee.  
**Near feedback:** None (do not invent near credit).  
**Not sure:** Haluan teetä.  
**Hint:** null. **Linked:** `vocab.tee`, `grammar.partitive-drinks`. **Scored:** `grammar.partitive-drinks`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A12 — `ex.food-and-quantities.coffee-tea-water.checkpoint-water-request`** · `text_input` · intent cumulative · demand independent sentence recall · difficulty application  
**Prompt:** Type the taught Finnish sentence ‘I want water’.  
**Stimulus:** I want water.  
**Answer:** Accepted after N1 normalization: `Haluan vettä.` or `Minä haluan vettä.`.  
**Correct feedback:** Haluan vettä uses the correct irregular water form.  
**Incorrect feedback:** Use Haluan vettä. The taught partitive is vettä.  
**Near feedback:** `haluan vesi` → This request needs vettä, not the dictionary form vesi.; `haluan vetta` → Write vettä with ä; the dots are part of the spelling.  
**Not sure:** Write Haluan vettä.  
**Hint:** null. **Linked:** `grammar.partitive-drinks`, `vocab.vesi`, `vocab.haluta`. **Scored:** `grammar.partitive-drinks`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

**A13 — `ex.food-and-quantities.coffee-tea-water.checkpoint-milk-request`** · `multiple_choice` · intent cumulative · demand contextual recognition · difficulty application  
**Prompt:** Which sentence means ‘I want milk’?  
**Stimulus:** I want milk, not water or coffee.  
**Answer:** Options (IDs stable; shuffle display): `a` Haluan kahvia. · `b` Haluan vettä. · `c` Haluan maitoa.. Accepted ID: `c`.  
**Correct feedback:** Haluan maitoa means I want milk.  
**Incorrect feedback:** `a`: Haluan kahvia means I want coffee. `b`: Haluan vettä means I want water.  
**Near feedback:** None (do not invent near credit).  
**Not sure:** Choose Haluan maitoa.  
**Hint:** null. **Linked:** `vocab.maito`, `grammar.partitive-drinks`. **Scored:** `grammar.partitive-drinks`. **Review eligible:** true; independent of original lesson step. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “Your first drink request.” **Copy:** “You can now say **Haluan kahvia**, understand **vettä**, and recognise the request forms for tea and milk. Next, you'll learn useful foods.” **Learning evidence:** lexical recall through A02/A03/A05/A06 and taught-form/practical phrase retrieval through A09–A13. **Review:** eligible encountered and owner-approved targets only, following the existing deterministic scheduler. **Next:** food, bread, lunch and apples.


## Lesson 5.2 — Food you actually use

**Metadata:** `lesson.food-and-quantities.food-you-use`; unit `unit.food-and-quantities`; language `fi`; order 2; **8–12 minutes**, with a pause after B07. **Prerequisite:** `lesson.food-and-quantities.coffee-tea-water`. **Goal:** name food, bread, lunch and apple, recognise four extra foods, and understand a few supplied partitive forms. **New production:** `vocab.ruoka`, `vocab.leipa`, `vocab.lounas`, `vocab.omena`. **Recognition-only:** `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani`. **Grammar:** `grammar.partitive-food`. **Reused:** `vocab.haluta`, `vocab.hei`, `vocab.kiitos`, prior drinks. **Completion:** all required steps and B01–B13 attempted or explicitly Not sure.

### Ordered learner experience

Full step IDs use prefix `step.food-and-quantities.food-you-use.` plus suffix. Each listed row is required; formal encounters are recorded only in introductory rows.

| # | Step suffix | Step type | Purpose | Exact learner-facing copy / exercise | Linked target IDs | First formal encounter | Required |
|---:|---|---|---|---|---|---|---|
| 1 | `opening` | `explanation` | Move from drink requests to familiar foods | **Food you can name.** “You know how to request a drink. Now name four everyday foods and recognise a few more.” | none | none | yes |
| 2 | `food-bread` | `vocabulary_intro` | Introduce food and bread | **ruoka** — food, the general word. **leipä** — bread. “Bread is one kind of food; ruoka is the broad category.” | `vocab.ruoka`, `vocab.leipa` | `vocab.ruoka`, `vocab.leipa` | yes |
| 3 | `first-match` | `exercise` | Distinguish food and bread | B01 | `vocab.ruoka`, `vocab.leipa` | none | yes |
| 4 | `write-food` | `exercise` | Recall ruoka | B02 | `vocab.ruoka` | none | yes |
| 5 | `write-bread` | `exercise` | Recall leipä | B03 | `vocab.leipa` | none | yes |
| 6 | `lunch-apple` | `vocabulary_intro` | Introduce lunch and apple | **lounas** — lunch, a meal. **omena** — apple, a fruit. “The dictionary form of apple is omena, not the form you may meet after a quantity.” | `vocab.lounas`, `vocab.omena` | `vocab.lounas`, `vocab.omena` | yes |
| 7 | `recognise-lunch` | `exercise` | Recognise lunch | B04 | `vocab.lounas` | none | yes |
| 8 | `recognise-apple` | `exercise` | Recognise apple | B05 | `vocab.omena` | none | yes |
| 9 | `write-lunch` | `exercise` | Recall lounas | B06 | `vocab.lounas` | none | yes |
| 10 | `write-apple` | `exercise` | Recall omena | B07 | `vocab.omena` | none | yes |
| 11 | `food-partitive` | `grammar_explanation` | Teach limited food partitive examples | **A food form you can use.** “In a request, **Haluan ruokaa** means ‘I want food’ and **Haluan leipää** means ‘I want bread’. The partitive forms are **ruoka → ruokaa**, **leipä → leipää**. Recognise **omena → omenaa** and **lounas → lounasta** too. They do not all follow one dictionary-form suffix rule.” | `grammar.partitive-food`, `vocab.ruoka`, `vocab.leipa`, `vocab.omena`, `vocab.lounas` | `grammar.partitive-food` | yes |
| 12 | `bread-form` | `exercise` | Recognise bread partitive | B08 | `grammar.partitive-food`, `vocab.leipa` | none | yes |
| 13 | `lunch-form` | `exercise` | Recognise lunch partitive | B09 | `grammar.partitive-food`, `vocab.lounas` | none | yes |
| 14 | `recognition-foods` | `vocabulary_intro` | Introduce four comprehension-only food words | **kana** — chicken (food). **kala** — fish. **peruna** — potato. **banaani** — banana. “Recognise these for now. You do not need to type them in Finnish.” | `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani` | `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani` | yes |
| 15 | `matching-recognition` | `exercise` | Recognise the four new food words | B10 | `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani` | none | yes |
| 16 | `natural-example` | `example_set` | Show a useful shop request | **At a shop:** “Hei! Haluan leipää, kiitos.” — “Hello! I want bread, please.” “The bread form is leipää in this taught request. This is not a new object-case system.” | `vocab.hei`, `vocab.kiitos`, `grammar.partitive-food` | none | yes |
| 17 | `checkpoint` | `checkpoint` | Check actual food-request and form understanding | **Say what you want.** “Recall a bread request, then identify the food and apple forms.” B11, B12, B13. | `grammar.partitive-food`, `vocab.ruoka`, `vocab.leipa`, `vocab.omena` | none | yes |

### Fully authored exercises

**B01 — `ex.food-and-quantities.food-you-use.food-bread-match`** · `matching` · guided recognition  
**Prompt:** Match the dictionary words to their meanings.  
**Stimulus:** General food vs a particular type of food.  
**Answer:** Match pairs, each first-attempt scored: ruoka ↔ food (general) (`vocab.ruoka`); leipä ↔ bread (`vocab.leipa`).  
**Correct feedback:** Ruoka means food; leipä means bread.  
**Incorrect feedback:** `ruoka`: Ruoka is food in general. `leipä`: Leipä is bread.  
**Near feedback:** None.  
**Not sure:** ruoka = food, leipä = bread.  
**Hint:** null. **Linked:** `vocab.ruoka`, `vocab.leipa`. **Scored:** `vocab.ruoka`, `vocab.leipa`. **Review eligible:** false; lesson-only guided matching. **Difficulty:** foundation. **Editorial:** `needs_review`.

**B02 — `ex.food-and-quantities.food-you-use.write-ruoka`** · `text_input` · independent recall  
**Prompt:** Type the Finnish dictionary word for food.  
**Stimulus:** food (general)  
**Answer:** N1-accepted forms: `ruoka`.  
**Correct feedback:** Ruoka means food.  
**Incorrect feedback:** Write ruoka, not its partitive ruokaa.  
**Near feedback:** `ruokaa` → Ruokaa is the partitive; the dictionary word is ruoka.  
**Not sure:** Write ruoka.  
**Hint:** null. **Linked:** `vocab.ruoka`. **Scored:** `vocab.ruoka`. **Review eligible:** true; standalone. **Difficulty:** recall. **Editorial:** `needs_review`.

**B03 — `ex.food-and-quantities.food-you-use.write-leipa`** · `text_input` · independent recall  
**Prompt:** Type the Finnish dictionary word for bread.  
**Stimulus:** bread  
**Answer:** N1-accepted forms: `leipä`.  
**Correct feedback:** Leipä means bread.  
**Incorrect feedback:** Write leipä with ä; leipää is a different form.  
**Near feedback:** `leipa` → The Finnish word contains ä: leipä.  
**Not sure:** Write leipä.  
**Hint:** null. **Linked:** `vocab.leipa`. **Scored:** `vocab.leipa`. **Review eligible:** true; standalone. **Difficulty:** recall. **Editorial:** `needs_review`.

**B04 — `ex.food-and-quantities.food-you-use.meaning-lounas`** · `multiple_choice` · meaning/form recognition  
**Prompt:** What meal is lounas?  
**Stimulus:** lounas  
**Answer:** Options (stable IDs, shuffle visually): `a` breakfast · `b` lunch · `c` dinner. Accepted ID `b`.  
**Correct feedback:** Lounas means lunch.  
**Incorrect feedback:** `a`: Lounas is lunch, not breakfast. `c`: Lounas is lunch, not dinner.  
**Near feedback:** None.  
**Not sure:** Lounas means lunch.  
**Hint:** null. **Linked:** `vocab.lounas`. **Scored:** `vocab.lounas`. **Review eligible:** true; standalone. **Difficulty:** foundation. **Editorial:** `needs_review`.

**B05 — `ex.food-and-quantities.food-you-use.meaning-omena`** · `multiple_choice` · meaning/form recognition  
**Prompt:** Which Finnish word names an apple?  
**Stimulus:** apple  
**Answer:** Options (stable IDs, shuffle visually): `a` omena · `b` maito · `c` leipä. Accepted ID `a`.  
**Correct feedback:** Omena means apple.  
**Incorrect feedback:** `b`: Maito means milk. `c`: Leipä means bread.  
**Near feedback:** None.  
**Not sure:** Omena is apple.  
**Hint:** null. **Linked:** `vocab.omena`, `vocab.maito`, `vocab.leipa`. **Scored:** `vocab.omena`. **Review eligible:** true; standalone. **Difficulty:** foundation. **Editorial:** `needs_review`.

**B06 — `ex.food-and-quantities.food-you-use.write-lounas`** · `text_input` · independent recall  
**Prompt:** Type the Finnish dictionary word for lunch.  
**Stimulus:** lunch  
**Answer:** N1-accepted forms: `lounas`.  
**Correct feedback:** Lounas means lunch.  
**Incorrect feedback:** The dictionary word is lounas, not lounasta.  
**Near feedback:** `lounasta` → Lounasta is its taught partitive form; here type lounas.  
**Not sure:** Write lounas.  
**Hint:** null. **Linked:** `vocab.lounas`. **Scored:** `vocab.lounas`. **Review eligible:** true; standalone. **Difficulty:** recall. **Editorial:** `needs_review`.

**B07 — `ex.food-and-quantities.food-you-use.write-omena`** · `text_input` · independent recall  
**Prompt:** Type the Finnish dictionary word for apple.  
**Stimulus:** apple  
**Answer:** N1-accepted forms: `omena`.  
**Correct feedback:** Omena means apple.  
**Incorrect feedback:** The dictionary form is omena.  
**Near feedback:** `omenaa` → Omenaa is the partitive form, not the dictionary word.  
**Not sure:** Write omena.  
**Hint:** null. **Linked:** `vocab.omena`. **Scored:** `vocab.omena`. **Review eligible:** true; standalone. **Difficulty:** recall. **Editorial:** `needs_review`.

**B08 — `ex.food-and-quantities.food-you-use.leipaa-form`** · `multiple_choice` · meaning/form recognition  
**Prompt:** Which form fits the taught request ‘I want bread’?  
**Stimulus:** Haluan ___ (bread).  
**Answer:** Options (stable IDs, shuffle visually): `a` leipä · `b` leipää · `c` leipäa. Accepted ID `b`.  
**Correct feedback:** Haluan leipää uses the correct bread form.  
**Incorrect feedback:** `a`: Leipä is the dictionary form; this request uses leipää. `c`: The correct long-vowel ending is leipää.  
**Near feedback:** None.  
**Not sure:** Use leipää.  
**Hint:** null. **Linked:** `vocab.leipa`, `grammar.partitive-food`. **Scored:** `grammar.partitive-food`. **Review eligible:** true; standalone. **Difficulty:** foundation. **Editorial:** `needs_review`.

**B09 — `ex.food-and-quantities.food-you-use.lounasta-form`** · `multiple_choice` · meaning/form recognition  
**Prompt:** Which taught form is the partitive of lounas?  
**Stimulus:** lounas → ?  
**Answer:** Options (stable IDs, shuffle visually): `a` lounassa · `b` lounasta · `c` lounasa. Accepted ID `b`.  
**Correct feedback:** Lounasta is the correct partitive.  
**Incorrect feedback:** `a`: The form is lounasta, not lounassa. `c`: This noun takes the taught form lounasta.  
**Near feedback:** None.  
**Not sure:** Use lounasta.  
**Hint:** null. **Linked:** `vocab.lounas`, `grammar.partitive-food`. **Scored:** `grammar.partitive-food`. **Review eligible:** true; standalone. **Difficulty:** foundation. **Editorial:** `needs_review`.

**B10 — `ex.food-and-quantities.food-you-use.four-foods-recognition`** · `matching` · guided recognition  
**Prompt:** Match four recognition-only food words to their meanings.  
**Stimulus:** These words are not required as Finnish typing.  
**Answer:** Match pairs, each first-attempt scored: kana ↔ chicken (food) (`vocab.kana`); kala ↔ fish (`vocab.kala`); peruna ↔ potato (`vocab.peruna`); banaani ↔ banana (`vocab.banaani`).  
**Correct feedback:** These are four useful food words to recognise.  
**Incorrect feedback:** `kana`: Kana is chicken. `kala`: Kala is fish. `peruna`: Peruna is potato. `banaani`: Banaani is banana.  
**Near feedback:** None.  
**Not sure:** kana = chicken; kala = fish; peruna = potato; banaani = banana.  
**Hint:** null. **Linked:** `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani`. **Scored:** `vocab.kana`, `vocab.kala`, `vocab.peruna`, `vocab.banaani`. **Review eligible:** false; lesson-only guided matching. **Difficulty:** foundation. **Editorial:** `needs_review`.

**B11 — `ex.food-and-quantities.food-you-use.checkpoint-request-bread`** · `text_input` · independent recall  
**Prompt:** Without tiles, type a complete taught sentence meaning ‘I want bread’.  
**Stimulus:** I want bread — an unspecified amount.  
**Answer:** N1-accepted forms: `Haluan leipää.` or `Minä haluan leipää.`.  
**Correct feedback:** Haluan leipää is the taught bread request.  
**Incorrect feedback:** Use Haluan leipää, not Haluan leipä.  
**Near feedback:** `haluan leipä` → The request takes leipää, not leipä.  
**Not sure:** Write Haluan leipää.  
**Hint:** null. **Linked:** `grammar.partitive-food`, `vocab.haluta`, `vocab.leipa`. **Scored:** `grammar.partitive-food`. **Review eligible:** true; standalone. **Difficulty:** recall. **Editorial:** `needs_review`.

**B12 — `ex.food-and-quantities.food-you-use.checkpoint-general-food`** · `multiple_choice` · meaning/form recognition  
**Prompt:** Which sentence asks for food in general rather than a drink?  
**Stimulus:** I want food.  
**Answer:** Options (stable IDs, shuffle visually): `a` Haluan vettä. · `b` Haluan ruokaa. · `c` Haluan teetä.. Accepted ID `b`.  
**Correct feedback:** Haluan ruokaa asks for food.  
**Incorrect feedback:** `a`: Vettä is water. `c`: Teetä is tea.  
**Near feedback:** None.  
**Not sure:** Choose Haluan ruokaa.  
**Hint:** null. **Linked:** `vocab.ruoka`, `grammar.partitive-food`. **Scored:** `grammar.partitive-food`. **Review eligible:** true; standalone. **Difficulty:** foundation. **Editorial:** `needs_review`.

**B13 — `ex.food-and-quantities.food-you-use.checkpoint-apple-form`** · `multiple_choice` · meaning/form recognition  
**Prompt:** Which is the taught partitive form of omena?  
**Stimulus:** omena (apple) → ?  
**Answer:** Options (stable IDs, shuffle visually): `a` omenaa · `b` omena · `c` omenat. Accepted ID `a`.  
**Correct feedback:** Omenaa is the singular partitive form of omena.  
**Incorrect feedback:** `b`: Omena is its dictionary form. `c`: Omenat is a plural form, not the singular partitive.  
**Near feedback:** None.  
**Not sure:** Use omenaa.  
**Hint:** null. **Linked:** `vocab.omena`, `grammar.partitive-food`. **Scored:** `grammar.partitive-food`. **Review eligible:** true; standalone. **Difficulty:** foundation. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “Food you can name.” **Copy:** “You can name common foods and say **Haluan leipää**. You'll recognise chicken, fish, potatoes and bananas too, even if you can't yet type their Finnish names.” **Evidence:** independent lemma recall B02/B03/B06/B07, supported food-form checks B08/B09 and cumulative B11–B13. **Review:** due scheduler for introduced and owner-approved targets only; no unrestricted productive scores for the recognition words. **Next:** more polite café requests.


## Lesson 5.3 — Asking for something

**Metadata:** `lesson.food-and-quantities.asking-politely`; unit `unit.food-and-quantities`; `fi`; order 3, **7–10 minutes**. **Prerequisite:** `lesson.food-and-quantities.food-you-use`. **Capability:** make two complete, natural café requests. **New production lemmas:** none. **New phrase targets:** `phrase.haluaisin-request`, `phrase.voinko-saada-vetta`. **Recognition-only introduced:** `vocab.nalka`, `vocab.jano` (fixed phrases `Minulla on nälkä / jano` recognition, not possessive construction production). **Prior material:** `vocab.haluta`, `phrase.voinko-slot`, `vocab.saada` (recognition-only Unit 3 lemma), `vocab.kiitos`, drink vocabulary. **Grammar boundary:** `Haluaisin` is a taught conditional-shaped chunk, not a new paradigm; productive `Voinko saada vettä?` does not unrestrictedly promote `saada`. **Completion:** all required steps and C01–C11 attempted or explicit Not sure.

### Ordered learner experience

IDs use `step.food-and-quantities.asking-politely.` plus suffix; all listed rows required. There is no audio or new dialogue engine.

| # | Step suffix | Type | Purpose | Exact learner-facing content / exercise | Linked | Formal encounter | Required |
|---:|---|---|---|---|---|---|---|
| 1 | `opening` | `explanation` | Frame natural café exchanges | **A little more polite.** “You can say what you want. In a café, a softer request can sound more natural. Let's learn two complete patterns.” | none | none | yes |
| 2 | `haluaisin` | `phrase_intro` | Introduce polite chunk without conditional paradigm | **Haluaisin …** — “I would like …”. “It is a softer, polite form related to **haluan** (‘I want’). **Haluaisin kahvia.** — ‘I'd like coffee.’ **Haluaisin teetä.** — ‘I'd like tea.’ You don't have to conjugate other conditional forms.” | `phrase.haluaisin-request`, `vocab.haluta`, `vocab.kahvi`, `vocab.tee` | `phrase.haluaisin-request` | yes |
| 3 | `recognise-haluaisin` | `exercise` | Recognise polite request | C01 | `phrase.haluaisin-request` | none | yes |
| 4 | `build-haluaisin` | `exercise` | Guided construction of coffee request | C02 | `phrase.haluaisin-request` | none | yes |
| 5 | `write-haluaisin` | `exercise` | Independent polite coffee request | C03 | `phrase.haluaisin-request` | none | yes |
| 6 | `voinko-saada` | `phrase_intro` | Introduce fixed water request from earlier modal phrase | **Voinko saada vettä?** — “Can I have some water?” “You know **Voinko …?** from Unit 3. **Saada** was a recognition word there; in this *fixed phrase* it means to get/receive. Producing the chunk does not mean you must form other uses of saada.” | `phrase.voinko-saada-vetta`, `vocab.saada`, `vocab.vesi`, `phrase.voinko-slot` | `phrase.voinko-saada-vetta` | yes |
| 7 | `recognise-water-request` | `exercise` | Understand water request | C04 | `phrase.voinko-saada-vetta` | none | yes |
| 8 | `build-water-request` | `exercise` | Guided construction of water request | C05 | `phrase.voinko-saada-vetta` | none | yes |
| 9 | `write-water-request` | `exercise` | Independent water-request retrieval | C06 | `phrase.voinko-saada-vetta` | none | yes |
| 10 | `cafe-model` | `example_set` | Show a plausible two-line exchange | **Customer:** “Hei! Haluaisin kahvia, kiitos.” — “Hi! I'd like coffee, please.” **Staff:** “Kiitos.” “A brief reply is enough here; this is not a script for every café interaction.” | `phrase.haluaisin-request`, `vocab.hei`, `vocab.kiitos` | none | yes |
| 11 | `politeness-choice` | `exercise` | Select a contextually softer request | C07 | `phrase.haluaisin-request` | none | yes |
| 12 | `hunger-thirst` | `vocabulary_intro` | Introduce recognition-only hunger and thirst words | **nälkä** — hunger. **jano** — thirst. “You may hear the fixed phrases **Minulla on nälkä** (‘I'm hungry’) and **Minulla on jano** (‘I'm thirsty’). Recognise them only; no grammar of minulla is required yet.” | `vocab.nalka`, `vocab.jano` | `vocab.nalka`, `vocab.jano` | yes |
| 13 | `hunger-thirst-match` | `exercise` | Recognise hunger and thirst | C08 | `vocab.nalka`, `vocab.jano` | none | yes |
| 14 | `hunger-thirst-context` | `exercise` | Recognise the thirst phrase | C09 | `vocab.jano` | none | yes |
| 15 | `checkpoint` | `checkpoint` | Retrieve polite requests | **Two useful requests.** “Recall a polite request for tea and choose the correct water request.” C10, C11. | `phrase.haluaisin-request`, `phrase.voinko-saada-vetta` | none | yes |

### Fully authored exercises

**C01 — `ex.food-and-quantities.asking-politely.polite-meaning`** · `multiple_choice` · controlled meaning/phrase practice  
**Prompt:** What does Haluaisin kahvia. mean?  
**Stimulus:** Haluaisin kahvia.  
**Answer:** Shuffled options (stable IDs): `a` I have coffee. · `b` I'd like coffee. · `c` I don't want coffee.; accepted `b`.  
**Correct feedback:** Haluaisin kahvia. is a softer request meaning I'd like coffee.  
**Incorrect feedback:** `a`: This does not mean I have coffee. `c`: It is a polite request, not a negative.  
**Near feedback:** None.  
**Not sure:** It means I'd like coffee.  
**Hint:** null. **Linked:** `phrase.haluaisin-request`. **Scored:** `phrase.haluaisin-request`. **Review eligible:** true; self-contained. **Difficulty:** foundation. **Editorial:** `needs_review`.

**C02 — `ex.food-and-quantities.asking-politely.build-polite-coffee`** · `token_build` · controlled meaning/phrase practice  
**Prompt:** Build the taught polite request ‘I'd like coffee’.  
**Stimulus:** Use the two supplied words.  
**Answer:** Shuffled tile bank kahvia / Haluaisin; accepted ordered sentence `Haluaisin kahvia.`.  
**Correct feedback:** Haluaisin kahvia. is a polite drink request.  
**Incorrect feedback:** Put Haluaisin before the form kahvia.  
**Near feedback:** None.  
**Not sure:** Haluaisin → kahvia.  
**Hint:** null. **Linked:** `phrase.haluaisin-request`, `vocab.kahvi`. **Scored:** `phrase.haluaisin-request`. **Review eligible:** true; self-contained. **Difficulty:** foundation. **Editorial:** `needs_review`.

**C03 — `ex.food-and-quantities.asking-politely.type-polite-coffee`** · `text_input` · productive phrase recall  
**Prompt:** Without tiles, type a polite Finnish request meaning ‘I'd like coffee’.  
**Stimulus:** I'd like coffee.  
**Answer:** N1 accepted: `Haluaisin kahvia.` or `Haluaisin kahvia, kiitos.`.  
**Correct feedback:** Haluaisin kahvia. is correct; adding kiitos is also natural.  
**Incorrect feedback:** Use Haluaisin kahvia. Coffee is kahvia in this request.  
**Near feedback:** `haluan kahvia` → Haluan kahvia means I want coffee, but this task specifically asks for the softer Haluaisin form.; `haluaisin kahvi` → After haluaisin, use the taught partitive kahvia.  
**Not sure:** Write Haluaisin kahvia.  
**Hint:** null. **Linked:** `phrase.haluaisin-request`, `vocab.kahvi`. **Scored:** `phrase.haluaisin-request`. **Review eligible:** true; self-contained. **Difficulty:** recall. **Editorial:** `needs_review`.

**C04 — `ex.food-and-quantities.asking-politely.water-meaning`** · `multiple_choice` · controlled meaning/phrase practice  
**Prompt:** What is someone asking with Voinko saada vettä?  
**Stimulus:** Voinko saada vettä?  
**Answer:** Shuffled options (stable IDs): `a` Can I have some water? · `b` Do you speak Finnish? · `c` Where is the water?; accepted `a`.  
**Correct feedback:** Voinko saada vettä? is a natural request for water.  
**Incorrect feedback:** `b`: Do you speak Finnish is Puhutko suomea? `c`: Where is the water? is a location question, not this request.  
**Near feedback:** None.  
**Not sure:** It means Can I have some water?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.saada`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; self-contained. **Difficulty:** foundation. **Editorial:** `needs_review`.

**C05 — `ex.food-and-quantities.asking-politely.build-water-question`** · `token_build` · controlled meaning/phrase practice  
**Prompt:** Arrange the supplied tiles to request water: ‘Can I have some water?’  
**Stimulus:** Use all three tokens.  
**Answer:** Shuffled tile bank vettä / Voinko / saada; accepted ordered sentence `Voinko saada vettä?`.  
**Correct feedback:** Voinko saada vettä? asks politely for water.  
**Incorrect feedback:** Start with Voinko, then saada, then vettä.  
**Near feedback:** None.  
**Not sure:** Voinko → saada → vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.saada`, `vocab.vesi`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; self-contained. **Difficulty:** foundation. **Editorial:** `needs_review`.

**C06 — `ex.food-and-quantities.asking-politely.type-water-question`** · `text_input` · productive phrase recall  
**Prompt:** Without tiles, type the taught Finnish question ‘Can I have some water?’  
**Stimulus:** Can I have some water?  
**Answer:** N1 accepted: `Voinko saada vettä?`.  
**Correct feedback:** Voinko saada vettä? uses the taught fixed request.  
**Incorrect feedback:** Use Voinko saada vettä? The water form is vettä.  
**Near feedback:** `voinko saada vesi` → The request needs the taught partitive vettä, not vesi.; `voinko saada vetta` → Write vettä with ä.  
**Not sure:** Write Voinko saada vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.vesi`, `vocab.saada`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; self-contained. **Difficulty:** recall. **Editorial:** `needs_review`.

**C07 — `ex.food-and-quantities.asking-politely.choose-soft-milk`** · `multiple_choice` · controlled meaning/phrase practice  
**Prompt:** At a café, which sentence specifically uses the softer ‘I'd like milk, please’ wording?  
**Stimulus:** You want to make a softer, polite milk request.  
**Answer:** Shuffled options (stable IDs): `a` Haluan maitoa. · `b` Haluaisin maitoa, kiitos. · `c` En halua maitoa.; accepted `b`.  
**Correct feedback:** Haluaisin maitoa, kiitos. is the softer request.  
**Incorrect feedback:** `a`: Haluan maitoa. is understandable but uses the direct I want rather than the requested softer I'd like. `c`: En halua maitoa. means I don't want milk.  
**Near feedback:** None.  
**Not sure:** Use Haluaisin maitoa, kiitos.  
**Hint:** null. **Linked:** `phrase.haluaisin-request`, `vocab.maito`. **Scored:** `phrase.haluaisin-request`. **Review eligible:** true; self-contained. **Difficulty:** foundation. **Editorial:** `needs_review`.

**C08 — `ex.food-and-quantities.asking-politely.hunger-thirst-matching`** · `matching` · guided recognition  
**Prompt:** Match these two recognition-only words to their meanings.  
**Stimulus:** Do not type any Finnish answers.  
**Answer:** Pairs, independently scored: nälkä ↔ hunger (`vocab.nalka`); jano ↔ thirst (`vocab.jano`).  
**Correct feedback:** Nälkä means hunger; jano means thirst.  
**Incorrect feedback:** `nälkä`: Nälkä is hunger. `jano`: Jano is thirst.  
**Near feedback:** None.  
**Not sure:** nälkä = hunger; jano = thirst.  
**Hint:** null. **Linked:** `vocab.nalka`, `vocab.jano`. **Scored:** `vocab.nalka`, `vocab.jano`. **Review eligible:** false; lesson-local matching board. **Difficulty:** foundation. **Editorial:** `needs_review`.

**C09 — `ex.food-and-quantities.asking-politely.recognise-thirst`** · `multiple_choice` · controlled meaning/phrase practice  
**Prompt:** You see the fixed phrase Minulla on jano. What does it mean?  
**Stimulus:** Minulla on jano. (Fixed recognition chunk.)  
**Answer:** Shuffled options (stable IDs): `a` I'm at home. · `b` I'm thirsty. · `c` I'm hungry.; accepted `b`.  
**Correct feedback:** Minulla on jano. means I'm thirsty.  
**Incorrect feedback:** `a`: Olen kotona means I'm at home. `c`: Minulla on nälkä means I'm hungry.  
**Near feedback:** None.  
**Not sure:** It means I'm thirsty.  
**Hint:** null. **Linked:** `vocab.jano`, `vocab.nalka`. **Scored:** `vocab.jano`. **Review eligible:** true; self-contained. **Difficulty:** foundation. **Editorial:** `needs_review`.

**C10 — `ex.food-and-quantities.asking-politely.checkpoint-tea-polite`** · `text_input` · productive phrase recall  
**Prompt:** Type ‘I'd like tea, please’ in Finnish, using the taught polite chunk.  
**Stimulus:** I'd like tea, please.  
**Answer:** N1 accepted: `Haluaisin teetä, kiitos.`.  
**Correct feedback:** Haluaisin teetä, kiitos. is a polite tea request.  
**Incorrect feedback:** Write Haluaisin teetä, kiitos. Tea takes teetä in this request.  
**Near feedback:** `haluaisin tee kiitos` → This request needs the partitive teetä, not tee.  
**Not sure:** Write Haluaisin teetä, kiitos.  
**Hint:** null. **Linked:** `phrase.haluaisin-request`, `vocab.tee`, `vocab.kiitos`. **Scored:** `phrase.haluaisin-request`. **Review eligible:** true; self-contained. **Difficulty:** recall. **Editorial:** `needs_review`.

**C11 — `ex.food-and-quantities.asking-politely.checkpoint-water-choice`** · `multiple_choice` · controlled meaning/phrase practice  
**Prompt:** You would like to ask for water, not coffee. Which taught request fits?  
**Stimulus:** Can I have some water?  
**Answer:** Shuffled options (stable IDs): `a` Voinko saada kahvia? · `b` Voinko saada vettä? · `c` Haluaisin teetä.; accepted `b`.  
**Correct feedback:** Voinko saada vettä? is the exact taught water request.  
**Incorrect feedback:** `a`: Kahvia is coffee, not water. `c`: Teetä is tea, not water.  
**Near feedback:** None.  
**Not sure:** Choose Voinko saada vettä?  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.vesi`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; self-contained. **Difficulty:** foundation. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “A request you can actually use.” **Copy:** “You can now say **Haluaisin kahvia** and ask **Voinko saada vettä?**. You also recognise the words for hunger and thirst.” **Learning evidence:** independent request retrieval C03/C06/C10; recognition-only C08/C09. **Review:** the two phrases enter the existing scheduler when encountered and owner-approved; `saada` remains a recognition lemma, not unrestricted new production. **Next:** small and large quantities.


## Lesson 5.4 — A little, a lot, two

**Metadata:** `lesson.food-and-quantities.little-lot-two`, `unit.food-and-quantities`, language `fi`, order 4, estimated **8–12 minutes**; prerequisite `lesson.food-and-quantities.asking-politely`. **Goal:** express simple amounts of familiar drinks, distinguish one/two apples and recognise singular partitive after two. **New production:** `vocab.vahan`, `vocab.paljon`. **New grammar:** `grammar.quantity-plus-partitive`, `grammar.numeral-plus-singular-partitive`. **Phrase:** `phrase.vahan-maitoa-kiitos`. **Previous-unit reuse:** `vocab.yksi`, `vocab.kaksi`, `vocab.omena`, `vocab.maito`, `vocab.kahvi`, `vocab.kiitos`. **No euro amount yet** (euro is introduced in 5.5). **Pause:** after D08, before the numeral section. **Completion:** required steps and D01–D13 attempted or Not sure.

### Ordered learner experience

Full ID `step.food-and-quantities.little-lot-two.` plus suffix. All listed steps required, with first formal encounters at vocabulary, grammar and phrase introduction only.

| # | Step suffix | Type | Purpose | Exact learner-facing copy / exercise | Linked | Formal encounter | Required |
|---:|---|---|---|---|---|---|---|
| 1 | `opening` | `explanation` | Introduce small/large quantity communication | **How much? A little or a lot.** “Food requests can include quantities. You'll learn two words and reuse one and two from Unit 1.” | none | none | yes |
| 2 | `quantity-vocabulary` | `vocabulary_intro` | Introduce amount adverbs | **vähän** — a little / a small amount. **paljon** — a lot / much. “The quantity word matters, and the food or drink often appears in a partitive form.” | `vocab.vahan`, `vocab.paljon` | `vocab.vahan`, `vocab.paljon` | yes |
| 3 | `little-meaning` | `exercise` | Recognise vähän | D01 | `vocab.vahan` | none | yes |
| 4 | `much-meaning` | `exercise` | Recognise paljon | D02 | `vocab.paljon` | none | yes |
| 5 | `quantity-match` | `exercise` | Contrast the two meanings | D03 | `vocab.vahan`, `vocab.paljon` | none | yes |
| 6 | `write-little` | `exercise` | Recall vähän | D04 | `vocab.vahan` | none | yes |
| 7 | `write-lot` | `exercise` | Recall paljon | D05 | `vocab.paljon` | none | yes |
| 8 | `quantity-partitive` | `grammar_explanation` | Explain a limited quantity + partitive pattern | **A little or a lot of something.** “With our taught drinks, say **vähän maitoa** (a little milk), **paljon kahvia** (a lot of coffee), or **vähän vettä** (a little water). The noun appears in the taught partitive form. Do not use unchanged dictionary forms after these quantities in these examples.” | `grammar.quantity-plus-partitive`, `vocab.vahan`, `vocab.paljon`, `vocab.maito`, `vocab.kahvi`, `vocab.vesi` | `grammar.quantity-plus-partitive` | yes |
| 9 | `milk-form` | `exercise` | Recognise the correct form after a quantity | D06 | `grammar.quantity-plus-partitive`, `vocab.maito` | none | yes |
| 10 | `small-milk` | `phrase_intro` | Introduce precise polite quantity chunk | **Vähän maitoa, kiitos.** — “A little milk, please.” “This complete small request is especially useful if you want milk with coffee or tea. The form after vähän is **maitoa**, not **maito**.” | `phrase.vahan-maitoa-kiitos`, `vocab.kiitos` | `phrase.vahan-maitoa-kiitos` | yes |
| 11 | `build-milk` | `exercise` | Construct guided milk request | D07 | `phrase.vahan-maitoa-kiitos` | none | yes |
| 12 | `write-milk` | `exercise` | Retrieve milk request independently | D08 | `phrase.vahan-maitoa-kiitos` | none | yes |
| 13 | `numerals-pattern` | `grammar_explanation` | Teach one versus two followed by partitive singular | **One apple, two apples.** “You learned **yksi** (one) and **kaksi** (two). For the taught example: **yksi omena** — one apple, but **kaksi omenaa** — two apples. After numbers above one, this beginner pattern uses the *singular partitive*, not a normal English-style plural ending. We'll leave the wider number system for later.” | `grammar.numeral-plus-singular-partitive`, `vocab.yksi`, `vocab.kaksi`, `vocab.omena` | `grammar.numeral-plus-singular-partitive` | yes |
| 14 | `two-apples-choice` | `exercise` | Identify numeral plus partitive | D09 | `grammar.numeral-plus-singular-partitive`, `vocab.omena` | none | yes |
| 15 | `two-apples-build` | `exercise` | Build two apples from provided tiles | D10 | `grammar.numeral-plus-singular-partitive` | none | yes |
| 16 | `two-apples-recall` | `exercise` | Independently recall two apples | D11 | `grammar.numeral-plus-singular-partitive` | none | yes |
| 17 | `checkpoint` | `checkpoint` | Test distinct quantity contexts | **One little request and one large quantity.** “Write a phrase about a lot of coffee and choose the small-milk request.” D12, D13. | `grammar.quantity-plus-partitive`, `phrase.vahan-maitoa-kiitos` | none | yes |

**Optional `spoken_note`**, ID `step.food-and-quantities.little-lot-two.spoken-amounts`, shown after D05: “In casual speech, **paljon** may be shortened to **paljo**, and **vähän** to **vähä**. Recognise them but write the full standard forms. **Haluan → haluun** was already introduced in Unit 3 and is not a new vocabulary/knowledge target.” Ref `spoken.paljon-paljo`, `spoken.vahan-vaha`; previous `spoken.haluan-haluun` only reinforced. No required learner interaction.

### Fully authored exercises

**D01 — `ex.food-and-quantities.little-lot-two.recognise-vahan`** · `multiple_choice` · controlled construction or recognition  
**Prompt:** What does vähän mean when describing an amount?  
**Stimulus:** vähän  
**Answer:** Shuffled options: `a` a lot · `b` a little · `c` how much?; correct ID `b`.  
**Correct feedback:** Vähän means a little.  
**Incorrect feedback:** `a`: A lot is paljon. `c`: How much? is paljonko, introduced later.  
**Near feedback:** None.  
**Not sure:** Vähän means a little.  
**Hint:** null. **Linked:** `vocab.vahan`. **Scored:** `vocab.vahan`. **Review eligible:** true; independently understandable. **Difficulty:** guided. **Editorial:** `needs_review`.

**D02 — `ex.food-and-quantities.little-lot-two.recognise-paljon`** · `multiple_choice` · controlled construction or recognition  
**Prompt:** What does paljon mean in an amount expression?  
**Stimulus:** paljon  
**Answer:** Shuffled options: `a` a lot / much · `b` a little · `c` now; correct ID `a`.  
**Correct feedback:** Paljon means a lot / much.  
**Incorrect feedback:** `b`: A little is vähän. `c`: Now is nyt.  
**Near feedback:** None.  
**Not sure:** Paljon means a lot.  
**Hint:** null. **Linked:** `vocab.paljon`. **Scored:** `vocab.paljon`. **Review eligible:** true; independently understandable. **Difficulty:** guided. **Editorial:** `needs_review`.

**D03 — `ex.food-and-quantities.little-lot-two.match-quantities`** · `matching` · recognition  
**Prompt:** Match the Finnish quantity words to their meanings.  
**Stimulus:** Two distinct amounts.  
**Answer:** First-attempt scored pair identities: vähän ↔ a little (`vocab.vahan`); paljon ↔ a lot (`vocab.paljon`).  
**Correct feedback:** Vähän is a small amount; paljon a large amount.  
**Incorrect feedback:** `vähän`: Vähän means a little. `paljon`: Paljon means a lot.  
**Near feedback:** None.  
**Not sure:** vähän = a little, paljon = a lot.  
**Hint:** null. **Linked:** `vocab.vahan`, `vocab.paljon`. **Scored:** `vocab.vahan`, `vocab.paljon`. **Review eligible:** false; guided matching. **Difficulty:** guided. **Editorial:** `needs_review`.

**D04 — `ex.food-and-quantities.little-lot-two.write-vahan`** · `text_input` · independent recall  
**Prompt:** Type the Finnish word for a little.  
**Stimulus:** a little  
**Answer:** N1-accepted: `vähän`.  
**Correct feedback:** Vähän means a little.  
**Incorrect feedback:** Write vähän with ä.  
**Near feedback:** `vahan` → Standard spelling is vähän with ä.  
**Not sure:** Write vähän.  
**Hint:** null. **Linked:** `vocab.vahan`. **Scored:** `vocab.vahan`. **Review eligible:** true; independently understandable. **Difficulty:** recall. **Editorial:** `needs_review`.

**D05 — `ex.food-and-quantities.little-lot-two.write-paljon`** · `text_input` · independent recall  
**Prompt:** Type the Finnish word meaning a lot / much.  
**Stimulus:** a lot (one word)  
**Answer:** N1-accepted: `paljon`.  
**Correct feedback:** Paljon means a lot.  
**Incorrect feedback:** Write paljon, with the final n.  
**Near feedback:** `paljo` → Paljo is a spoken shortening; write standard paljon.  
**Not sure:** Write paljon.  
**Hint:** null. **Linked:** `vocab.paljon`. **Scored:** `vocab.paljon`. **Review eligible:** true; independently understandable. **Difficulty:** recall. **Editorial:** `needs_review`.

**D06 — `ex.food-and-quantities.little-lot-two.choose-maitoa`** · `multiple_choice` · controlled construction or recognition  
**Prompt:** Which taught form completes ‘vähän ___’ meaning a little milk?  
**Stimulus:** vähän ___.  
**Answer:** Shuffled options: `a` maito · `b` maitoa · `c` maitot; correct ID `b`.  
**Correct feedback:** Vähän maitoa uses the correct partitive milk form.  
**Incorrect feedback:** `a`: Maito is the dictionary form. Here use maitoa. `c`: Maitot is not the correct partitive of maito.  
**Near feedback:** None.  
**Not sure:** Use vähän maitoa.  
**Hint:** null. **Linked:** `grammar.quantity-plus-partitive`, `vocab.maito`. **Scored:** `grammar.quantity-plus-partitive`. **Review eligible:** true; independently understandable. **Difficulty:** guided. **Editorial:** `needs_review`.

**D07 — `ex.food-and-quantities.little-lot-two.build-vahan-maitoa`** · `token_build` · controlled construction or recognition  
**Prompt:** Arrange the supplied tiles to request a little milk politely.  
**Stimulus:** A little milk, please.  
**Answer:** Shuffled tiles: kiitos. / maitoa, / Vähän; accepted `Vähän maitoa, kiitos.`.  
**Correct feedback:** Vähän maitoa, kiitos. is a polite quantity request.  
**Incorrect feedback:** Start with Vähän, then maitoa, then kiitos.  
**Near feedback:** None.  
**Not sure:** Vähän → maitoa, → kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`. **Scored:** `phrase.vahan-maitoa-kiitos`. **Review eligible:** true; independently understandable. **Difficulty:** guided. **Editorial:** `needs_review`.

**D08 — `ex.food-and-quantities.little-lot-two.write-vahan-maitoa`** · `text_input` · independent recall  
**Prompt:** Without tiles, type the taught Finnish expression ‘A little milk, please’.  
**Stimulus:** A little milk, please.  
**Answer:** N1-accepted: `Vähän maitoa, kiitos.`.  
**Correct feedback:** Vähän maitoa, kiitos. is correct.  
**Incorrect feedback:** Use vähän maitoa, not vähän maito; include kiitos.  
**Near feedback:** `vähän maito kiitos` → Maito needs the taught partitive maitoa.; `vahan maitoa kiitos` → Write vähän with ä.  
**Not sure:** Write Vähän maitoa, kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`, `vocab.vahan`, `vocab.maito`. **Scored:** `phrase.vahan-maitoa-kiitos`. **Review eligible:** true; independently understandable. **Difficulty:** recall. **Editorial:** `needs_review`.

**D09 — `ex.food-and-quantities.little-lot-two.two-apples-form`** · `multiple_choice` · controlled construction or recognition  
**Prompt:** Which Finnish expression correctly means two apples in the taught pattern?  
**Stimulus:** two apples  
**Answer:** Shuffled options: `a` kaksi omenat · `b` kaksi omena · `c` kaksi omenaa; correct ID `c`.  
**Correct feedback:** Kaksi omenaa uses the singular partitive after kaksi.  
**Incorrect feedback:** `a`: Omenat is a plural nominative form, not the taught pattern after kaksi. `b`: After kaksi, the taught form is omenaa, not omena.  
**Near feedback:** None.  
**Not sure:** Use kaksi omenaa.  
**Hint:** null. **Linked:** `grammar.numeral-plus-singular-partitive`, `vocab.kaksi`, `vocab.omena`. **Scored:** `grammar.numeral-plus-singular-partitive`. **Review eligible:** true; independently understandable. **Difficulty:** guided. **Editorial:** `needs_review`.

**D10 — `ex.food-and-quantities.little-lot-two.build-kaksi-omenaa`** · `token_build` · controlled construction or recognition  
**Prompt:** Build the taught expression for two apples.  
**Stimulus:** two apples — use both tiles.  
**Answer:** Shuffled tiles: omenaa / kaksi; accepted `kaksi omenaa`.  
**Correct feedback:** Kaksi omenaa is correct.  
**Incorrect feedback:** Use kaksi first, then omenaa, not omena.  
**Near feedback:** None.  
**Not sure:** kaksi → omenaa.  
**Hint:** null. **Linked:** `grammar.numeral-plus-singular-partitive`. **Scored:** `grammar.numeral-plus-singular-partitive`. **Review eligible:** true; independently understandable. **Difficulty:** guided. **Editorial:** `needs_review`.

**D11 — `ex.food-and-quantities.little-lot-two.write-kaksi-omenaa`** · `text_input` · independent recall  
**Prompt:** Without tiles, type ‘two apples’ in Finnish.  
**Stimulus:** two apples  
**Answer:** N1-accepted: `kaksi omenaa`.  
**Correct feedback:** Kaksi omenaa uses the singular partitive after two.  
**Incorrect feedback:** Write kaksi omenaa, not kaksi omenat.  
**Near feedback:** `kaksi omena` → After kaksi, use omenaa.; `kaksi omenat` → The taught pattern uses singular partitive omenaa, not plural omenat.  
**Not sure:** Write kaksi omenaa.  
**Hint:** null. **Linked:** `grammar.numeral-plus-singular-partitive`, `vocab.omena`, `vocab.kaksi`. **Scored:** `grammar.numeral-plus-singular-partitive`. **Review eligible:** true; independently understandable. **Difficulty:** recall. **Editorial:** `needs_review`.

**D12 — `ex.food-and-quantities.little-lot-two.checkpoint-paljon-kahvia`** · `text_input` · independent recall  
**Prompt:** Type the Finnish quantity expression ‘a lot of coffee’.  
**Stimulus:** a lot of coffee — a phrase, not a full sentence.  
**Answer:** N1-accepted: `paljon kahvia`.  
**Correct feedback:** Paljon kahvia is the taught amount expression.  
**Incorrect feedback:** Use paljon kahvia. Coffee appears as kahvia here.  
**Near feedback:** `paljon kahvi` → After paljon, use kahvia in this taught expression.  
**Not sure:** Write paljon kahvia.  
**Hint:** null. **Linked:** `grammar.quantity-plus-partitive`, `vocab.paljon`, `vocab.kahvi`. **Scored:** `grammar.quantity-plus-partitive`. **Review eligible:** true; independently understandable. **Difficulty:** recall. **Editorial:** `needs_review`.

**D13 — `ex.food-and-quantities.little-lot-two.checkpoint-little-milk`** · `multiple_choice` · controlled construction or recognition  
**Prompt:** Someone wants just a little milk. Which Finnish request matches?  
**Stimulus:** A little milk, please.  
**Answer:** Shuffled options: `a` Paljon maitoa, kiitos. · `b` Vähän maitoa, kiitos. · `c` Vähän kahvia, kiitos.; correct ID `b`.  
**Correct feedback:** Vähän maitoa, kiitos. asks for a small amount of milk.  
**Incorrect feedback:** `a`: Paljon maitoa asks for a lot of milk, not a little. `c`: Vähän kahvia asks for coffee, not milk.  
**Near feedback:** None.  
**Not sure:** Use Vähän maitoa, kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`, `vocab.vahan`, `vocab.paljon`. **Scored:** `phrase.vahan-maitoa-kiitos`. **Review eligible:** true; independently understandable. **Difficulty:** guided. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “A little, a lot, and two.” **Copy:** “You can ask for a little milk, describe a lot of coffee and understand why two apples is **kaksi omenaa**. Next you'll ask prices and pay.” **Evidence:** independent amount-word retrieval D04/D05, quantity phrase D08/D12 and numeral form D11. **Review:** only formally encountered and owner-approved targets through existing due-state scheduling. **Next:** price, euro and card payment.


## Lesson 5.5 — How much is it?

**Metadata:** `lesson.food-and-quantities.how-much`, `unit.food-and-quantities`, `fi`, lesson order 5, **13–19 minutes** with pauses after E08 and E12. **Prerequisite:** `lesson.food-and-quantities.little-lot-two`. **Goal:** ask and understand a simple price, distinguish buying from paying, and ask to pay by card. **New production:** `vocab.hinta`, `vocab.euro`, `vocab.maksaa`, `vocab.ostaa`, `vocab.paljonko`, `vocab.kortti`. **New recognition:** `vocab.kuitti`, `vocab.kassa`. **Phrases:** `phrase.paljonko-tama-maksaa`, `phrase.voinko-maksaa-kortilla`. **Grammar:** previously introduced `grammar.numeral-plus-singular-partitive`, now in the taught `euro → euroa` form; `kortilla` is a fixed payment expression, not a productive adessive case. **Prerequisites/review:** Unit 1 `kaksi`, Unit 2 `tämä`, Unit 3 `Voinko …`. **Completion:** all required steps and E01–E19 attempted or Not sure, not a perfect score.

### Ordered learner experience

Stable step prefix `step.food-and-quantities.how-much.` + suffix. All rows are required. Three semantic groups — price, buying/paying, card/checkout — have resumable boundaries.

| # | Step suffix | Step type | Purpose | Exact learner-facing copy or exercise | Linked | Formal encounter | Required |
|---:|---|---|---|---|---|---|---|
| 1 | `opening` | `explanation` | Frame checkout as a practical task | **A price and a way to pay.** “Now that you can request food and drinks, learn to ask the cost and pay.” | none | none | yes |
| 2 | `price-words` | `vocabulary_intro` | Introduce price, euro, how much | **hinta** — price. **euro** — euro. **paljonko** — how much/how many? “Paljonko is a separate dictionary word from paljon, not the same vocabulary target.” | `vocab.hinta`, `vocab.euro`, `vocab.paljonko` | `vocab.hinta`, `vocab.euro`, `vocab.paljonko` | yes |
| 3 | `match-price` | `exercise` | Recognise three meanings | E01 | `vocab.hinta`, `vocab.euro`, `vocab.paljonko` | none | yes |
| 4 | `recall-hinta` | `exercise` | Recall price noun | E02 | `vocab.hinta` | none | yes |
| 5 | `recall-euro` | `exercise` | Recall euro noun | E03 | `vocab.euro` | none | yes |
| 6 | `recall-paljonko` | `exercise` | Recall how-much word | E04 | `vocab.paljonko` | none | yes |
| 7 | `cost-verb` | `vocabulary_intro` | Introduce cost/pay polysemy | **maksaa** — to cost or to pay. “**Se maksaa kaksi euroa.** means ‘It costs two euros.’ **Maksan.** means ‘I pay’. The meaning depends on the sentence; these uses are not freely interchangeable.” | `vocab.maksaa` | `vocab.maksaa` | yes |
| 8 | `euros-grammar` | `grammar_explanation` | Reinforce numeral plus partitive | **One versus two euros.** “Say **yksi euro**, but **kaksi euroa**. The second expression uses the same limited pattern you learned in **kaksi omenaa**. After two, do not write eurot in this expression.” | `vocab.euro`, `vocab.yksi`, `vocab.kaksi`, `grammar.numeral-plus-singular-partitive` | none | yes |
| 9 | `price-question` | `phrase_intro` | Introduce asking about the cost | **Paljonko tämä maksaa?** — “How much does this cost?” “You already know tämä (‘this’). A possible short reply is **Se maksaa kaksi euroa.** — ‘It costs two euros.’” | `phrase.paljonko-tama-maksaa`, `vocab.paljonko`, `vocab.maksaa`, `vocab.tama` | `phrase.paljonko-tama-maksaa` | yes |
| 10 | `price-build` | `exercise` | Construct price question | E05 | `phrase.paljonko-tama-maksaa` | none | yes |
| 11 | `price-write` | `exercise` | Recall price question | E06 | `phrase.paljonko-tama-maksaa` | none | yes |
| 12 | `cost-meaning` | `exercise` | Understand two euros | E07 | `vocab.maksaa`, `vocab.euro` | none | yes |
| 13 | `euro-forms` | `exercise` | Identify two euros form | E08 | `grammar.numeral-plus-singular-partitive`, `vocab.euro` | none | yes |
| 14 | `buy-verb` | `vocabulary_intro` | Introduce purchase versus paying | **ostaa** — to buy. **ostan** — I buy. “**Ostan kahvia.** means ‘I'm buying coffee.’ **Maksan.** means ‘I pay.’ One is getting a product, the other is giving payment. The object word kahvia is already familiar.” | `vocab.ostaa`, `vocab.maksaa`, `vocab.kahvi` | `vocab.ostaa` | yes |
| 15 | `match-buy-pay` | `exercise` | Distinguish buy/pay | E09 | `vocab.ostaa`, `vocab.maksaa` | none | yes |
| 16 | `recall-ostan` | `exercise` | Recall I buy | E10 | `vocab.ostaa` | none | yes |
| 17 | `recall-maksan` | `exercise` | Recall I pay | E11 | `vocab.maksaa` | none | yes |
| 18 | `buy-choice` | `exercise` | Apply buy versus pay context | E12 | `vocab.ostaa`, `vocab.maksaa` | none | yes |
| 19 | `card-noun` | `vocabulary_intro` | Introduce card and contextual form | **kortti** — card. “In the useful payment question, you'll see the special form **kortilla** (‘by card’). We are not learning all -lla/-llä endings.” | `vocab.kortti` | `vocab.kortti` | yes |
| 20 | `card-meaning` | `exercise` | Recognise card | E13 | `vocab.kortti` | none | yes |
| 21 | `card-recall` | `exercise` | Recall card noun | E14 | `vocab.kortti` | none | yes |
| 22 | `card-phrase` | `phrase_intro` | Introduce card-payment question and I-pay statement | **Voinko maksaa kortilla?** — “Can I pay by card?” **Maksan kortilla.** — “I'll pay by card.” “Both are practical expressions. **Kortilla** is a fixed taught form here, not a new adessive-paradigm lesson.” | `phrase.voinko-maksaa-kortilla`, `vocab.maksaa`, `vocab.kortti`, `phrase.voinko-slot` | `phrase.voinko-maksaa-kortilla` | yes |
| 23 | `card-build` | `exercise` | Guided payment question | E15 | `phrase.voinko-maksaa-kortilla` | none | yes |
| 24 | `card-write` | `exercise` | Recall card-payment question | E16 | `phrase.voinko-maksaa-kortilla` | none | yes |
| 25 | `checkout-recognition` | `vocabulary_intro` | Introduce receipt and checkout | **kuitti** — receipt. **kassa** — checkout or cashier. “Recognise these at a café or shop; you need not type them in Finnish.” | `vocab.kuitti`, `vocab.kassa` | `vocab.kuitti`, `vocab.kassa` | yes |
| 26 | `checkout-match` | `exercise` | Recognise checkout words | E17 | `vocab.kuitti`, `vocab.kassa` | none | yes |
| 27 | `checkpoint` | `checkpoint` | Cumulative price and payment check | **Price then payment.** “Recognise a two-euro price, then say that you will pay by card.” E18, E19. | `vocab.euro`, `vocab.maksaa`, `phrase.voinko-maksaa-kortilla` | none | yes |

### Fully authored exercises

**E01 — `ex.food-and-quantities.how-much.price-words`** · `matching` · guided recognition  
**Prompt:** Match these three price words to their meanings.  
**Stimulus:** Price, currency unit and question word.  
**Answer:** Pairs, each scored on first attempt: hinta ↔ price (`vocab.hinta`); euro ↔ euro (`vocab.euro`); paljonko ↔ how much? (`vocab.paljonko`).  
**Correct feedback:** Hinta means price, euro the currency, and paljonko asks how much.  
**Incorrect feedback:** `hinta`: Hinta is price. `euro`: Euro is the currency unit. `paljonko`: Paljonko asks how much.  
**Near feedback:** None.  
**Not sure:** hinta = price; euro = euro; paljonko = how much.  
**Hint:** null. **Linked:** `vocab.hinta`, `vocab.euro`, `vocab.paljonko`. **Scored:** `vocab.hinta`, `vocab.euro`, `vocab.paljonko`. **Review eligible:** false; lesson matching board. **Difficulty:** guided. **Editorial:** `needs_review`.

**E02 — `ex.food-and-quantities.how-much.write-hinta`** · `text_input` · independent recall  
**Prompt:** Type the Finnish dictionary noun for price.  
**Stimulus:** price  
**Answer:** N1-accepted: `hinta`.  
**Correct feedback:** Hinta means price.  
**Incorrect feedback:** Write hinta; paljonko asks how much.  
**Near feedback:** None.  
**Not sure:** Write hinta.  
**Hint:** null. **Linked:** `vocab.hinta`. **Scored:** `vocab.hinta`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E03 — `ex.food-and-quantities.how-much.write-euro`** · `text_input` · independent recall  
**Prompt:** Type the Finnish dictionary noun for euro.  
**Stimulus:** euro — one unit  
**Answer:** N1-accepted: `euro`.  
**Correct feedback:** Euro is the basic currency word.  
**Incorrect feedback:** Write euro. After kaksi, the taught form is euroa.  
**Near feedback:** `euroa` → Euroa is the partitive, not the dictionary form requested here.  
**Not sure:** Write euro.  
**Hint:** null. **Linked:** `vocab.euro`. **Scored:** `vocab.euro`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E04 — `ex.food-and-quantities.how-much.write-paljonko`** · `text_input` · independent recall  
**Prompt:** Type the Finnish question word meaning ‘how much?’  
**Stimulus:** how much?  
**Answer:** N1-accepted: `paljonko`.  
**Correct feedback:** Paljonko asks how much.  
**Incorrect feedback:** Paljonko is the question; paljon means a lot.  
**Near feedback:** `paljon` → Paljon means a lot, not how much.  
**Not sure:** Write paljonko.  
**Hint:** null. **Linked:** `vocab.paljonko`, `vocab.paljon`. **Scored:** `vocab.paljonko`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E05 — `ex.food-and-quantities.how-much.build-price-question`** · `token_build` · controlled recognition/construction  
**Prompt:** Arrange the three supplied tokens to ask ‘How much does this cost?’  
**Stimulus:** How much does this cost?  
**Answer:** Shuffled tiles maksaa? / Paljonko / tämä. Accepted assembled `Paljonko tämä maksaa?`.  
**Correct feedback:** Paljonko tämä maksaa? asks the cost.  
**Incorrect feedback:** Begin Paljonko, then tämä, then maksaa.  
**Near feedback:** None.  
**Not sure:** Paljonko → tämä → maksaa?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true; independently meaningful. **Difficulty:** guided. **Editorial:** `needs_review`.

**E06 — `ex.food-and-quantities.how-much.type-price-question`** · `text_input` · independent recall  
**Prompt:** Without tiles, type the taught question ‘How much does this cost?’  
**Stimulus:** How much does this cost?  
**Answer:** N1-accepted: `Paljonko tämä maksaa?`.  
**Correct feedback:** Paljonko tämä maksaa? is correct.  
**Incorrect feedback:** Use Paljonko tämä maksaa? The question begins with paljonko.  
**Near feedback:** `paljon tämä maksaa` → Paljon means a lot; the price question starts with paljonko.  
**Not sure:** Write Paljonko tämä maksaa?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E07 — `ex.food-and-quantities.how-much.cost-meaning`** · `multiple_choice` · controlled recognition/construction  
**Prompt:** What does Se maksaa kaksi euroa. mean?  
**Stimulus:** Se maksaa kaksi euroa.  
**Answer:** Options (shuffle stable IDs): `a` I pay by card. · `b` It costs two euros. · `c` I want two apples.. Accepted `b`.  
**Correct feedback:** Se maksaa kaksi euroa. states a cost of two euros.  
**Incorrect feedback:** `a`: This sentence describes the item's cost, not your payment method. `c`: The sentence states a price, not a food request.  
**Near feedback:** None.  
**Not sure:** It costs two euros.  
**Hint:** null. **Linked:** `vocab.maksaa`, `vocab.euro`. **Scored:** `vocab.maksaa`. **Review eligible:** true; independently meaningful. **Difficulty:** guided. **Editorial:** `needs_review`.

**E08 — `ex.food-and-quantities.how-much.two-euro-form`** · `multiple_choice` · controlled recognition/construction  
**Prompt:** Which Finnish expression is the taught form for two euros?  
**Stimulus:** two euros  
**Answer:** Options (shuffle stable IDs): `a` kaksi eurot · `b` kaksi euroa · `c` kaksi euro. Accepted `b`.  
**Correct feedback:** Kaksi euroa uses singular partitive after kaksi.  
**Incorrect feedback:** `a`: Eurot is not the required noun form after kaksi. `c`: After kaksi use euroa, not euro.  
**Near feedback:** None.  
**Not sure:** kaksi euroa.  
**Hint:** null. **Linked:** `grammar.numeral-plus-singular-partitive`, `vocab.euro`, `vocab.kaksi`. **Scored:** `grammar.numeral-plus-singular-partitive`. **Review eligible:** true; independently meaningful. **Difficulty:** guided. **Editorial:** `needs_review`.

**E09 — `ex.food-and-quantities.how-much.match-buy-pay`** · `matching` · guided recognition  
**Prompt:** Match the two taught I-forms to what they mean.  
**Stimulus:** Buying a product differs from paying.  
**Answer:** Pairs, each scored on first attempt: ostan ↔ I buy (`vocab.ostaa`); maksan ↔ I pay (`vocab.maksaa`).  
**Correct feedback:** Ostan means I buy, maksan means I pay.  
**Incorrect feedback:** `ostan`: Ostan is I buy. `maksan`: Maksan is I pay.  
**Near feedback:** None.  
**Not sure:** ostan = I buy, maksan = I pay.  
**Hint:** null. **Linked:** `vocab.ostaa`, `vocab.maksaa`. **Scored:** `vocab.ostaa`, `vocab.maksaa`. **Review eligible:** false; lesson matching board. **Difficulty:** guided. **Editorial:** `needs_review`.

**E10 — `ex.food-and-quantities.how-much.write-ostan`** · `text_input` · independent recall  
**Prompt:** Type the Finnish one-word form ‘I buy’.  
**Stimulus:** I buy — not I pay  
**Answer:** N1-accepted: `ostan`.  
**Correct feedback:** Ostan is the I-form of ostaa.  
**Incorrect feedback:** Write ostan, not maksan.  
**Near feedback:** `ostaa` → Ostaa is the dictionary form; the I-form is ostan.  
**Not sure:** Write ostan.  
**Hint:** null. **Linked:** `vocab.ostaa`. **Scored:** `vocab.ostaa`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E11 — `ex.food-and-quantities.how-much.write-maksan`** · `text_input` · independent recall  
**Prompt:** Type the Finnish one-word form ‘I pay’.  
**Stimulus:** I pay — not I buy  
**Answer:** N1-accepted: `maksan`.  
**Correct feedback:** Maksan means I pay.  
**Incorrect feedback:** Write maksan. Maksaa is the dictionary form and also appears in ‘it costs’.  
**Near feedback:** `maksaa` → The required I-form is maksan, not maksaa.  
**Not sure:** Write maksan.  
**Hint:** null. **Linked:** `vocab.maksaa`. **Scored:** `vocab.maksaa`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E12 — `ex.food-and-quantities.how-much.buy-coffee`** · `multiple_choice` · controlled recognition/construction  
**Prompt:** Which sentence says ‘I'm buying coffee’ instead of paying or stating a price?  
**Stimulus:** I'm buying coffee.  
**Answer:** Options (shuffle stable IDs): `a` Maksan. · `b` Ostan kahvia. · `c` Se maksaa kaksi euroa.. Accepted `b`.  
**Correct feedback:** Ostan kahvia describes buying coffee.  
**Incorrect feedback:** `a`: Maksan means I pay. `c`: This sentence states a price, not the act of buying.  
**Near feedback:** None.  
**Not sure:** Choose Ostan kahvia.  
**Hint:** null. **Linked:** `vocab.ostaa`, `vocab.maksaa`, `vocab.kahvi`. **Scored:** `vocab.ostaa`. **Review eligible:** true; independently meaningful. **Difficulty:** guided. **Editorial:** `needs_review`.

**E13 — `ex.food-and-quantities.how-much.card-meaning`** · `multiple_choice` · controlled recognition/construction  
**Prompt:** Which Finnish noun means card?  
**Stimulus:** card  
**Answer:** Options (shuffle stable IDs): `a` euro · `b` kortti · `c` hinta. Accepted `b`.  
**Correct feedback:** Kortti means card.  
**Incorrect feedback:** `a`: Euro is the currency unit. `c`: Hinta means price.  
**Near feedback:** None.  
**Not sure:** Card is kortti.  
**Hint:** null. **Linked:** `vocab.kortti`, `vocab.euro`, `vocab.hinta`. **Scored:** `vocab.kortti`. **Review eligible:** true; independently meaningful. **Difficulty:** guided. **Editorial:** `needs_review`.

**E14 — `ex.food-and-quantities.how-much.write-kortti`** · `text_input` · independent recall  
**Prompt:** Type the Finnish dictionary word for card.  
**Stimulus:** card  
**Answer:** N1-accepted: `kortti`.  
**Correct feedback:** Kortti means card.  
**Incorrect feedback:** Write kortti with double t. Kortilla is a form used for payment.  
**Near feedback:** `kortilla` → Kortilla is the payment form; this task asks for the dictionary word kortti.  
**Not sure:** Write kortti.  
**Hint:** null. **Linked:** `vocab.kortti`. **Scored:** `vocab.kortti`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E15 — `ex.food-and-quantities.how-much.build-card-question`** · `token_build` · controlled recognition/construction  
**Prompt:** Arrange the supplied tokens to ask ‘Can I pay by card?’  
**Stimulus:** Can I pay by card?  
**Answer:** Shuffled tiles kortilla? / Voinko / maksaa. Accepted assembled `Voinko maksaa kortilla?`.  
**Correct feedback:** Voinko maksaa kortilla? asks to pay by card.  
**Incorrect feedback:** Use Voinko → maksaa → kortilla.  
**Near feedback:** None.  
**Not sure:** Voinko → maksaa → kortilla?  
**Hint:** null. **Linked:** `phrase.voinko-maksaa-kortilla`, `vocab.maksaa`, `vocab.kortti`. **Scored:** `phrase.voinko-maksaa-kortilla`. **Review eligible:** true; independently meaningful. **Difficulty:** guided. **Editorial:** `needs_review`.

**E16 — `ex.food-and-quantities.how-much.write-card-question`** · `text_input` · independent recall  
**Prompt:** Without tiles, type the taught question ‘Can I pay by card?’  
**Stimulus:** Can I pay by card?  
**Answer:** N1-accepted: `Voinko maksaa kortilla?`.  
**Correct feedback:** Voinko maksaa kortilla? is correct.  
**Incorrect feedback:** Use kortilla for by card, and maksaa after Voinko.  
**Near feedback:** `voinko maksaa kortti` → The taught payment phrase uses kortilla, not kortti.; `voinko maksan kortilla` → After Voinko use the dictionary verb maksaa, not maksan.  
**Not sure:** Write Voinko maksaa kortilla?  
**Hint:** null. **Linked:** `phrase.voinko-maksaa-kortilla`, `vocab.maksaa`, `vocab.kortti`. **Scored:** `phrase.voinko-maksaa-kortilla`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

**E17 — `ex.food-and-quantities.how-much.checkout-match`** · `matching` · guided recognition  
**Prompt:** Match the two recognition-only checkout words.  
**Stimulus:** No Finnish typing is required.  
**Answer:** Pairs, each scored on first attempt: kuitti ↔ receipt (`vocab.kuitti`); kassa ↔ checkout / cashier (`vocab.kassa`).  
**Correct feedback:** Kuitti means receipt; kassa means checkout or cashier.  
**Incorrect feedback:** `kuitti`: Kuitti is a receipt. `kassa`: Kassa is the checkout/cashier.  
**Near feedback:** None.  
**Not sure:** kuitti = receipt, kassa = checkout/cashier.  
**Hint:** null. **Linked:** `vocab.kuitti`, `vocab.kassa`. **Scored:** `vocab.kuitti`, `vocab.kassa`. **Review eligible:** false; lesson matching board. **Difficulty:** guided. **Editorial:** `needs_review`.

**E18 — `ex.food-and-quantities.how-much.checkpoint-cost-2`** · `multiple_choice` · controlled recognition/construction  
**Prompt:** The item costs exactly two euros. Which taught Finnish sentence states its price?  
**Stimulus:** It costs two euros.  
**Answer:** Options (shuffle stable IDs): `a` Se maksaa kaksi euroa. · `b` Se maksaa kaksi euro. · `c` Maksan kortilla.. Accepted `a`.  
**Correct feedback:** Se maksaa kaksi euroa is the correct price statement.  
**Incorrect feedback:** `b`: After kaksi the word is euroa. `c`: Maksan kortilla describes the payment method, not the price.  
**Near feedback:** None.  
**Not sure:** Se maksaa kaksi euroa.  
**Hint:** null. **Linked:** `vocab.maksaa`, `vocab.euro`, `grammar.numeral-plus-singular-partitive`. **Scored:** `grammar.numeral-plus-singular-partitive`. **Review eligible:** true; independently meaningful. **Difficulty:** guided. **Editorial:** `needs_review`.

**E19 — `ex.food-and-quantities.how-much.checkpoint-pay-card`** · `text_input` · independent recall  
**Prompt:** Type the Finnish statement ‘I'll pay by card’.  
**Stimulus:** I'll pay by card.  
**Answer:** N1-accepted: `Maksan kortilla.` or `Minä maksan kortilla.`.  
**Correct feedback:** Maksan kortilla states your payment method.  
**Incorrect feedback:** Write Maksan kortilla, using the taught kortilla form.  
**Near feedback:** `maksan kortti` → The payment expression requires kortilla.  
**Not sure:** Write Maksan kortilla.  
**Hint:** null. **Linked:** `vocab.maksaa`, `vocab.kortti`, `phrase.voinko-maksaa-kortilla`. **Scored:** `vocab.maksaa`. **Review eligible:** true; independently meaningful. **Difficulty:** recall. **Editorial:** `needs_review`.

### Lesson completion

**Headline:** “You can ask the price.” **Copy:** “You can ask **Paljonko tämä maksaa?**, understand **kaksi euroa**, distinguish **ostan** and **maksan**, and ask **Voinko maksaa kortilla?**.” **Learning evidence:** dictionary and I-form recall E02–E04/E10/E11/E14 and full phrase recall E06/E16/E19. Recognition-only `kuitti/kassa` remain comprehension-only. **Review:** declared scored targets only when introduced, owner-approved and due. **Next:** combine the language in a short café/shop review.


## Lesson 5.6 — Café and shop review

**Metadata:** `lesson.food-and-quantities.cafe-shop-review`, `unit.food-and-quantities`, learning language `fi`, order 6, **9–14 minutes**, prerequisite `lesson.food-and-quantities.how-much`. **Capability:** request a drink, express quantity, ask and understand prices, and pay by card in a short café/shop exchange. **New production/recognition vocabulary:** none. **Previously introduced phrases/grammar:** `phrase.haluan-kahvia`, `phrase.haluaisin-request`, `phrase.voinko-saada-vetta`, `phrase.vahan-maitoa-kiitos`, `grammar.numeral-plus-singular-partitive`, `phrase.paljonko-tama-maksaa`, `phrase.voinko-maksaa-kortilla`. **Earlier units:** Unit 1 greetings/kiitos/numbers, Unit 2 tämä, Unit 3 Voinko, Unit 4 kahvila/kauppa/ravintola. **Completion:** every listed step and F01–F13 attempted or Not sure, no perfect score. **Pause:** before the ten-part final checkpoint.

### Ordered learner experience

All listed steps are required; full ID prefix `step.food-and-quantities.cafe-shop-review.` plus suffix. F04–F13 are the **actual Unit 5 end-of-unit capability assessment**, not an extra seventh lesson or conversation-engine interaction.

| # | Step suffix | Type | Purpose | Exact learner-facing content / exercise | Linked | Formal encounter | Required |
|---:|---|---|---|---|---|---|---|
| 1 | `opening` | `explanation` | Set cumulative café/shop scenario | **Your first short order.** “You know the place names from Unit 4 and polite words from Unit 1. Now put drinks, quantities, prices and payment together in a simple café interaction.” | none | none | yes |
| 2 | `cafe-model` | `example_set` | Provide practical conversation with taught chunks | **Customer:** “Hei! Haluaisin kahvia, kiitos.” — “Hi! I'd like coffee, please.” **Staff:** “Se maksaa kaksi euroa.” — “It costs two euros.” **Customer:** “Voinko maksaa kortilla?” — “Can I pay by card?” “Each sentence uses forms you've already met; there is no new grammar here.” | `vocab.hei`, `phrase.haluaisin-request`, `vocab.euro`, `phrase.voinko-maksaa-kortilla` | none | yes |
| 3 | `polite-choice` | `exercise` | Warm up by recognising the softened request | F01 | `phrase.haluaisin-request` | none | yes |
| 4 | `partitive-choice` | `exercise` | Warm up by recognising tea form | F02 | `grammar.partitive-drinks` | none | yes |
| 5 | `where-buy` | `exercise` | Reinforce known Unit 4 location vocabulary | F03 | `vocab.kahvila`, `vocab.kauppa`, `vocab.ravintola` | none | yes |
| 6 | `checkpoint` | `checkpoint` | Complete integrated ten-part capability assessment | **Café and shop — final capability check.** “Work through a short request, quantity, price and payment. Every question is self-contained. You can use ‘Not sure’, and you do not need a perfect score.” F04, F05, F06, F07, F08, F09, F10, F11, F12, F13. | `phrase.voinko-saada-vetta`, `phrase.haluan-kahvia`, `grammar.quantity-plus-partitive`, `grammar.numeral-plus-singular-partitive`, `phrase.paljonko-tama-maksaa`, `phrase.voinko-maksaa-kortilla` | none | yes |

### Fully authored exercises

**F01 — `ex.food-and-quantities.cafe-shop-review.polite-coffee-recognition`** · `multiple_choice` · contextual recognition  
**Prompt:** Which request specifically uses the polite ‘I'd like coffee’ wording?  
**Stimulus:** You want a softer café request.  
**Answer:** Options (stable IDs, visually shuffled): `a` Haluan kahvia. · `b` Haluaisin kahvia, kiitos. · `c` En halua kahvia.. Accepted option `b`.  
**Correct feedback:** Haluaisin kahvia, kiitos is a polite request.  
**Incorrect feedback:** `a`: Haluan kahvia is I want coffee; the task asks specifically for I'd like. `c`: En halua kahvia means I don't want coffee.  
**Near feedback:** None.  
**Not sure:** Use Haluaisin kahvia, kiitos.  
**Hint:** null. **Linked:** `phrase.haluaisin-request`, `phrase.haluan-kahvia`. **Scored:** `phrase.haluaisin-request`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F02 — `ex.food-and-quantities.cafe-shop-review.tea-partitive-recognition`** · `multiple_choice` · contextual recognition  
**Prompt:** Which taught Finnish form means tea in ‘Haluan ___’?   
**Stimulus:** I want tea.  
**Answer:** Options (stable IDs, visually shuffled): `a` tee · `b` teetä · `c` teettä. Accepted option `b`.  
**Correct feedback:** Teetä is the taught partitive of tee.  
**Incorrect feedback:** `a`: Tee is the dictionary form; the request needs teetä. `c`: Teettä has an extra t; the taught form is teetä.  
**Near feedback:** None.  
**Not sure:** Use teetä.  
**Hint:** null. **Linked:** `grammar.partitive-drinks`, `vocab.tee`. **Scored:** `grammar.partitive-drinks`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F03 — `ex.food-and-quantities.cafe-shop-review.cafe-place-context`** · `multiple_choice` · contextual recognition  
**Prompt:** Which word names the café where a coffee request might take place?  
**Stimulus:** a café (place)  
**Answer:** Options (stable IDs, visually shuffled): `a` ravintola · `b` kauppa · `c` kahvila. Accepted option `c`.  
**Correct feedback:** Kahvila means café, a place already taught in Unit 4.  
**Incorrect feedback:** `a`: Ravintola means restaurant. `b`: Kauppa means shop or store.  
**Near feedback:** None.  
**Not sure:** Café is kahvila.  
**Hint:** null. **Linked:** `vocab.kahvila`, `vocab.ravintola`, `vocab.kauppa`. **Scored:** `vocab.kahvila`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F04 — `ex.food-and-quantities.cafe-shop-review.final-request-water`** · `text_input` · independent practical production  
**Prompt:** At a café, ask in Finnish ‘Can I have some water?’ using the taught request.  
**Stimulus:** Can I have some water?  
**Answer:** Accepted under N1: `Voinko saada vettä?`.  
**Correct feedback:** Voinko saada vettä? is a natural water request.  
**Incorrect feedback:** Use Voinko saada vettä? The water form is vettä.  
**Near feedback:** `voinko saada vesi` → The taught request needs vettä, not vesi.  
**Not sure:** Write Voinko saada vettä.  
**Hint:** null. **Linked:** `phrase.voinko-saada-vetta`, `vocab.vesi`, `vocab.saada`. **Scored:** `phrase.voinko-saada-vetta`. **Review eligible:** true; independently self-contained. **Difficulty:** recall. **Editorial:** `needs_review`.

**F05 — `ex.food-and-quantities.cafe-shop-review.final-want-coffee`** · `text_input` · independent practical production  
**Prompt:** Type the taught Finnish sentence ‘I want coffee’ (not the softer ‘I'd like’ version).  
**Stimulus:** I want coffee.  
**Answer:** Accepted under N1: `Haluan kahvia.` or `Minä haluan kahvia.`.  
**Correct feedback:** Haluan kahvia means I want coffee.  
**Incorrect feedback:** Use Haluan kahvia with the taught partitive form kahvia.  
**Near feedback:** `haluan kahvi` → This request uses kahvia, not the dictionary form kahvi.; `haluaisin kahvia` → Haluaisin means I'd like; this prompt specifically asks for I want.  
**Not sure:** Write Haluan kahvia.  
**Hint:** null. **Linked:** `phrase.haluan-kahvia`, `vocab.haluta`. **Scored:** `phrase.haluan-kahvia`. **Review eligible:** true; independently self-contained. **Difficulty:** recall. **Editorial:** `needs_review`.

**F06 — `ex.food-and-quantities.cafe-shop-review.final-small-milk`** · `multiple_choice` · contextual recognition  
**Prompt:** You want only a little milk. Which request means ‘A little milk, please’?  
**Stimulus:** A little milk, please.  
**Answer:** Options (stable IDs, visually shuffled): `a` Paljon maitoa, kiitos. · `b` Vähän maitoa, kiitos. · `c` Vähän vettä, kiitos.. Accepted option `b`.  
**Correct feedback:** Vähän maitoa, kiitos. is the small milk request.  
**Incorrect feedback:** `a`: Paljon means a lot, not a little. `c`: Vettä is water, not milk.  
**Near feedback:** None.  
**Not sure:** Use Vähän maitoa, kiitos.  
**Hint:** null. **Linked:** `phrase.vahan-maitoa-kiitos`, `vocab.vahan`. **Scored:** `phrase.vahan-maitoa-kiitos`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F07 — `ex.food-and-quantities.cafe-shop-review.final-two-apples`** · `multiple_choice` · contextual recognition  
**Prompt:** Which taught expression means two apples?  
**Stimulus:** two apples  
**Answer:** Options (stable IDs, visually shuffled): `a` kaksi omenaa · `b` kaksi omena · `c` kaksi omenat. Accepted option `a`.  
**Correct feedback:** Kaksi omenaa uses the singular partitive after the number.  
**Incorrect feedback:** `b`: The word needs the taught form omenaa after kaksi. `c`: The normal plural omenat is not the taught pattern after kaksi.  
**Near feedback:** None.  
**Not sure:** Use kaksi omenaa.  
**Hint:** null. **Linked:** `grammar.numeral-plus-singular-partitive`, `vocab.omena`, `vocab.kaksi`. **Scored:** `grammar.numeral-plus-singular-partitive`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F08 — `ex.food-and-quantities.cafe-shop-review.final-price-question`** · `text_input` · independent practical production  
**Prompt:** Pointing to an item, type the taught question ‘How much does this cost?’  
**Stimulus:** How much does this cost?  
**Answer:** Accepted under N1: `Paljonko tämä maksaa?`.  
**Correct feedback:** Paljonko tämä maksaa? asks the price.  
**Incorrect feedback:** Use Paljonko tämä maksaa? The first word is paljonko.  
**Near feedback:** `paljon tämä maksaa` → The price question uses paljonko, not paljon.  
**Not sure:** Write Paljonko tämä maksaa?  
**Hint:** null. **Linked:** `phrase.paljonko-tama-maksaa`, `vocab.paljonko`, `vocab.tama`. **Scored:** `phrase.paljonko-tama-maksaa`. **Review eligible:** true; independently self-contained. **Difficulty:** recall. **Editorial:** `needs_review`.

**F09 — `ex.food-and-quantities.cafe-shop-review.final-two-euro-cost`** · `multiple_choice` · contextual recognition  
**Prompt:** A café item costs €2. Which Finnish sentence says this?  
**Stimulus:** It costs two euros.  
**Answer:** Options (stable IDs, visually shuffled): `a` Se maksaa kaksi euro. · `b` Se maksaa kaksi euroa. · `c` Maksan kortilla.. Accepted option `b`.  
**Correct feedback:** Se maksaa kaksi euroa gives the correct two-euro price.  
**Incorrect feedback:** `a`: After kaksi, use euroa rather than euro. `c`: Maksan kortilla states the payment method, not the price.  
**Near feedback:** None.  
**Not sure:** Se maksaa kaksi euroa.  
**Hint:** null. **Linked:** `vocab.maksaa`, `vocab.euro`, `grammar.numeral-plus-singular-partitive`. **Scored:** `vocab.maksaa`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F10 — `ex.food-and-quantities.cafe-shop-review.final-pay-by-card`** · `text_input` · independent practical production  
**Prompt:** Type the taught question ‘Can I pay by card?’  
**Stimulus:** Can I pay by card?  
**Answer:** Accepted under N1: `Voinko maksaa kortilla?`.  
**Correct feedback:** Voinko maksaa kortilla? is the correct card-payment question.  
**Incorrect feedback:** Use Voinko maksaa kortilla? Kortilla is the taught form for by card.  
**Near feedback:** `voinko maksaa kortti` → The payment expression uses kortilla, not kortti.  
**Not sure:** Write Voinko maksaa kortilla?  
**Hint:** null. **Linked:** `phrase.voinko-maksaa-kortilla`, `vocab.maksaa`, `vocab.kortti`. **Scored:** `phrase.voinko-maksaa-kortilla`. **Review eligible:** true; independently self-contained. **Difficulty:** recall. **Editorial:** `needs_review`.

**F11 — `ex.food-and-quantities.cafe-shop-review.final-buy-versus-pay`** · `multiple_choice` · contextual recognition  
**Prompt:** You want to say ‘I'm buying coffee’, not ‘I'm paying by card’. Which sentence does that?  
**Stimulus:** I'm buying coffee.  
**Answer:** Options (stable IDs, visually shuffled): `a` Maksan kortilla. · `b` Ostan kahvia. · `c` Se maksaa kaksi euroa.. Accepted option `b`.  
**Correct feedback:** Ostan kahvia means I'm buying coffee.  
**Incorrect feedback:** `a`: Maksan kortilla is about paying, not buying coffee. `c`: Se maksaa kaksi euroa gives the price.  
**Near feedback:** None.  
**Not sure:** Use Ostan kahvia.  
**Hint:** null. **Linked:** `vocab.ostaa`, `vocab.maksaa`, `vocab.kahvi`. **Scored:** `vocab.ostaa`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F12 — `ex.food-and-quantities.cafe-shop-review.final-recognise-receipt`** · `multiple_choice` · contextual recognition  
**Prompt:** At the checkout, which Finnish word means receipt?  
**Stimulus:** receipt  
**Answer:** Options (stable IDs, visually shuffled): `a` kassa · `b` kuitti · `c` hinta. Accepted option `b`.  
**Correct feedback:** Kuitti means receipt.  
**Incorrect feedback:** `a`: Kassa is the checkout/cashier. `c`: Hinta means price.  
**Near feedback:** None.  
**Not sure:** Receipt is kuitti.  
**Hint:** null. **Linked:** `vocab.kuitti`, `vocab.kassa`, `vocab.hinta`. **Scored:** `vocab.kuitti`. **Review eligible:** true; independently self-contained. **Difficulty:** cumulative. **Editorial:** `needs_review`.

**F13 — `ex.food-and-quantities.cafe-shop-review.final-three-chunk-cafe`** · `token_build` · cumulative capability-only construction  
**Prompt:** Arrange the three complete chunks into this order: greet and request coffee, ask the price, ask to pay by card.  
**Stimulus:** A short café/customer interaction; all words are supplied.  
**Answer:** Shuffled complete chunks: Voinko maksaa kortilla? / Hei! Haluaisin kahvia, kiitos. / Paljonko tämä maksaa?. Accepted ordered output `Hei! Haluaisin kahvia, kiitos. Paljonko tämä maksaa? Voinko maksaa kortilla?`.  
**Correct feedback:** You connected greeting, polite request, price and payment into a useful sequence.  
**Incorrect feedback:** Start with Hei! Haluaisin kahvia, kiitos. Then ask the price and payment question.  
**Near feedback:** None.  
**Not sure:** Hei! Haluaisin kahvia, kiitos. → Paljonko tämä maksaa? → Voinko maksaa kortilla?  
**Hint:** null. **Linked:** `vocab.hei`, `vocab.kiitos`, `phrase.haluaisin-request`, `phrase.paljonko-tama-maksaa`, `phrase.voinko-maksaa-kortilla`. **Scored:** none; `knowledgeScoring: false`, integrated capability evidence only. **Review eligible:** false; integrated capability only. **Difficulty:** cumulative. **Editorial:** `needs_review`.

### Unit 5 capability assessment and completion

F04–F13 directly test the five blueprint abilities: F04 **asks for water**, F05 **says I want coffee**, F06 **understands a small quantity**, F08 **asks a price**, F10 **asks to pay by card**. F07/F09 add numbers/euro prices, F11 buy-vs-pay, F12 receipt recognition and F13 an integrated supplied-chunk café sequence. Each task is independently understandable.

**Completion headline:** “You can order something.” **Supporting copy:** “You can request a drink, say how much you want, ask the price, and pay by card. Your new words will come back in Review — you do not need to remember them perfectly today.” **Completion:** normal required-step and attempted-exercise policy, no mastery/perfect-score gate. F13 is capability-only and does not award independent mastery for every supplied word. **Next:** Unit 6 — Daily Life.


## Part III — Independently authored scheduled-Review variants

Eight **separate Review-only records** supply standalone recognition for every Unit 5 recognition-only word. They are not compulsory seventh-lesson material or additional required LessonStep records. Each is a `multiple_choice` comprehension exercise with one scored canonical lexical target, no Finnish free-production, `reviewEligible: true`, and `editorial: needs_review`. They can be selected only after the item's actual first encounter, owner approval and due scheduling.

**R01 — `ex.food-and-quantities.review.kana-chicken`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **kana** mean in the taught context?  
**Stimulus:** `kana` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` fish · `b` chicken (food) · `c` potato. Accepted option `b`.  
**Correct feedback:** Kana means chicken.  
**Incorrect feedback:** `a`: Fish is kala. `c`: Potato is peruna.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Kana means chicken.  
**Hint:** null. **Linked:** `vocab.kana`. **Scored:** `vocab.kana` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**R02 — `ex.food-and-quantities.review.kala-fish`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **kala** mean in the taught context?  
**Stimulus:** `kala` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` chicken · `b` fish · `c` banana. Accepted option `b`.  
**Correct feedback:** Kala means fish.  
**Incorrect feedback:** `a`: Chicken is kana. `c`: Banana is banaani.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Kala means fish.  
**Hint:** null. **Linked:** `vocab.kala`. **Scored:** `vocab.kala` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**R03 — `ex.food-and-quantities.review.peruna-potato`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **peruna** mean in the taught context?  
**Stimulus:** `peruna` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` bread · `b` potato · `c` apple. Accepted option `b`.  
**Correct feedback:** Peruna means potato.  
**Incorrect feedback:** `a`: Bread is leipä. `c`: Apple is omena.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Peruna means potato.  
**Hint:** null. **Linked:** `vocab.peruna`. **Scored:** `vocab.peruna` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**R04 — `ex.food-and-quantities.review.banaani-banana`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **banaani** mean in the taught context?  
**Stimulus:** `banaani` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` apple · `b` banana · `c` milk. Accepted option `b`.  
**Correct feedback:** Banaani means banana.  
**Incorrect feedback:** `a`: Apple is omena. `c`: Milk is maito.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Banaani means banana.  
**Hint:** null. **Linked:** `vocab.banaani`. **Scored:** `vocab.banaani` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**R05 — `ex.food-and-quantities.review.nalka-hunger`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **nälkä** mean in the taught context?  
**Stimulus:** `nälkä` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` thirst · `b` hunger · `c` lunch. Accepted option `b`.  
**Correct feedback:** Nälkä means hunger.  
**Incorrect feedback:** `a`: Thirst is jano. `c`: Lunch is lounas.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Nälkä means hunger.  
**Hint:** null. **Linked:** `vocab.nalka`. **Scored:** `vocab.nalka` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**R06 — `ex.food-and-quantities.review.jano-thirst`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **jano** mean in the taught context?  
**Stimulus:** `jano` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` hunger · `b` thirst · `c` price. Accepted option `b`.  
**Correct feedback:** Jano means thirst.  
**Incorrect feedback:** `a`: Hunger is nälkä. `c`: Price is hinta.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Jano means thirst.  
**Hint:** null. **Linked:** `vocab.jano`. **Scored:** `vocab.jano` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**R07 — `ex.food-and-quantities.review.kuitti-receipt`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **kuitti** mean in the taught context?  
**Stimulus:** `kuitti` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` checkout / cashier · `b` receipt · `c` card. Accepted option `b`.  
**Correct feedback:** Kuitti means receipt.  
**Incorrect feedback:** `a`: Checkout/cashier is kassa. `c`: Card is kortti.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Kuitti means receipt.  
**Hint:** null. **Linked:** `vocab.kuitti`. **Scored:** `vocab.kuitti` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.

**R08 — `ex.food-and-quantities.review.kassa-checkout`** · `multiple_choice` · recognition / independent comprehension · difficulty foundation  
**Prompt:** What does **kassa** mean in the taught context?  
**Stimulus:** `kassa` (word shown, no image required).  
**Answer:** Options visually shuffled but keyed: `a` receipt · `b` checkout / cashier · `c` price. Accepted option `b`.  
**Correct feedback:** Kassa means checkout or cashier.  
**Incorrect feedback:** `a`: Receipt is kuitti. `c`: Price is hinta.  
**Near feedback:** None; no ungrounded near-synonym credit.  
**Not sure:** Kassa means checkout/cashier.  
**Hint:** null. **Linked:** `vocab.kassa`. **Scored:** `vocab.kassa` only (comprehension evidence). **Review eligible:** true, self-contained. **Editorial:** `needs_review`.


## Part IV — Complete final capability check and optional practice

**The ten-part final unit capability assessment is already fully authored as F04–F13 inside Lesson 5.6**. It is **not** duplicated as additional work and does not require a separate dialogue engine. It tests all five curriculum-required abilities: F04 asks for water, F05 states wanting coffee, F06 understands a small amount, F08 asks the price and F10 asks to pay by card. F07/F09 add numerical quantities and a two-euro price; F11 distinguishes buying from paying; F12 recognises the receipt; F13 provides capability-only integrated café sequencing. Independent learner comprehension/production is distinguished from supplied-token recognition.

**Learning roles:** The eight recognition-only words are first encountered and exercised in Lessons 5.2, 5.3 and 5.5, then have R01–R08 review candidates. None is required as Finnish text input. The prior `vocab.saada` remains recognition-only, although the complete fixed `Voinko saada vettä?` phrase is a productive phrase target. `Haluaisin …` is productive as a **taught request phrase**, not a general conditional verb paradigm.

**Flashcards and Word Match:** Use the shared canonical `fi` vocabulary/phrase registry and respect actual encounter history. Avoid impossible overlapping pairing of `kahvi/kahvia`, `tee/teetä`, `vesi/vettä`, `ruoka/lounas`, `vähän/paljon`, `paljon/paljonko`, `ostaa/maksaa`, `hinta/paljonko`, `kortti/kortilla`, `kuitti/kassa`. If two translations overlap, use a **truthful context-qualified gloss** or exclude one. Inflected forms are taught variants, not new independent VocabularyItems. Reverse Flashcards must not force unrestricted Finnish production of recognition-only words. My Words is user-owned and separate. Optional practice does not clear the scheduled Review queue or mark course completion.

**Source provenance:** This content is newly authored for Vokri; it does not reproduce copyrighted textbook dialogues. Verify linguistic facts against [Aalto's Partitive Summary](https://openlearning.aalto.fi/mod/book/view.php?chapterid=560&id=10293), [Yle's Food and Partitive](https://yle.fi/a/20-156324), and [Yle's shopping/payment phrases](https://yle.fi/a/20-137063), along with further sources in [Unit 5 QA](./unit-05-coverage-and-qa.md). The original curated CSV is lexical identity/rank evidence, not external certification of its AI-authored examples.

**Scope:** documentation only — no React Native code, Unit 1–4 rewrites, A1 blueprint, original CSV, Figma modifications or new backend. All new content remains `needs_review` until Vokri-owner approval, which is sufficient internally.

