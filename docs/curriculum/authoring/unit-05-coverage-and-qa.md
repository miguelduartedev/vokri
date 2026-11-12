# Vokri — Unit 5: Food & Quantities · Coverage & Editorial QA

**Content review date: 12 November 2026.** Read with [fully authored Unit 5 specification](./unit-05-food-and-quantities-complete-specification.md), [Unit 5 Implementation Notes](./unit-05-implementation-notes.md), [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md) and the [merged Finnish A1 blueprint](../a1_foundations_curriculum_blueprint.md). These findings validate authored content against known project sources and published Finnish references. They do **not** establish measured learning effectiveness or functioning native app tests.

## 1. Audited content inventory and pacing

Exactly **six lessons**, **99 required ordered teaching steps**, **one optional spoken note**, **82 required lesson exercise records** and **eight standalone scheduled-Review variants** = **90 unique authored exercise records**. Nine required matching boards contain **21 individually assessed pairs**, so the minimum required learner response count is **82 - 9 + 21 = 94**, excluding extra effort of multiword text input. F04–F13 is a **ten-question cumulative checkpoint inside Lesson 5.6**, not a seventh lesson.

| Lesson | Required steps | Required exercise records | Matching pair decisions | Estimated study time |
|---|---:|---:|---:|---|
| 5.1 Coffee, tea and water | 17 | 13 | 4 | 8–12 min |
| 5.2 Food you actually use | 17 | 13 | 6 | 8–12 min |
| 5.3 Asking for something | 15 | 11 | 2 | 7–10 min |
| 5.4 A little, a lot, two | 17 | 13 | 2 | 8–12 min |
| 5.5 How much is it? | 27 | 19 | 7 | 13–19 min |
| 5.6 Café and shop review | 6 | 13 | 0 | 9–14 min |
| **Total** | **99** | **82** | **21** | **53–79 min** |

### Required exercise kinds

| Kind | Records | Learning evidence |
|---|---:|---|
| `multiple_choice` | 33 | Specific meaning, grammar form or contextual comprehension, with option feedback |
| `text_input` | 32 | Finite accepted strings, independent dictionary/phrase recall and taught forms |
| `token_build` | 8 | Guided ordering with supplied Finnish material; not independent spelling evidence |
| `matching` | 9 | 21 separately evaluated first-attempt pairs |
| `transform` | 0 | Omitted deliberately; no reason to invent an untaught case transformation |
| **Total** | **82** | Eight additional Review-only MC records, excluded above |

## 2. Production vocabulary — complete 16/16 coverage

Every row tracks canonical source rank, first formal introduction, taught form, guided recognition, required retrieval, later use and Review. A phrase that merely contains a word is **not** independent success on that lemma. Some items are delayed to scheduled Review after their required independent recall rather than repeatedly drilled inside the same lesson.

| Lemma / CSV rank | First formal encounter | Taught form(s) | Guided recognition | First required recall | Later use / delayed retrieval | Final checkpoint sampling | Independent Review candidate |
|---|---|---|---|---|---|---|---|
| **kahvi** (#250) | 5.1 kahvi-tee | kahvi / kahvia | A01 match | A02 coffee lemma | A07/A10 → F05 coffee request | F05 | A02, A10 |
| **tee** (#251) | 5.1 kahvi-tee | tee / teetä | A01 match | A03 tea lemma | A11 tea form; C10 polite request; F02 | F02 | A03, A11 |
| **vesi** (#247) | 5.1 water-milk | vesi / vettä | A04 match | A05 water lemma | A08 → C06/F04 water request | F04 | A05, C06 |
| **maito** (#249) | 5.1 water-milk | maito / maitoa | A04 match | A06 milk lemma | A13 → D06/D08 → F06 | F06 | A06 |
| **ruoka** (#246) | 5.2 food-bread | ruoka / ruokaa | B01 match | B02 food lemma | B12 food-in-general expression | Not individually sampled in final | B02 |
| **leipä** (#248) | 5.2 food-bread | leipä / leipää | B01 match | B03 bread lemma | B08 → B11 bread request | B11 earlier checkpoint | B03 |
| **lounas** (#253) | 5.2 lunch-apple | lounas / lounasta | B04 meaning | B06 lunch lemma | B09 form; delayed due Review B06 | Not sampled in final | B06 |
| **omena** (#264) | 5.2 lunch-apple | omena / omenaa | B05 meaning | B07 apple lemma | B13 → D09/D11 → F07 | F07 numeral | B07 |
| **vähän** (#54) | 5.4 quantity-vocabulary | vähän / reduced spoken vähä | D01, D03 | D04 amount word | D08 milk request → F06 | F06 | D04 |
| **paljon** (#55) | 5.4 quantity-vocabulary | paljon / reduced spoken paljo | D02, D03 | D05 amount word | D12 much coffee; contrast with F06 | Contrast in F06 | D05 |
| **hinta** (#238) | 5.5 price-words | hinta | E01 match | E02 price noun | Due Review E02; F12 as recognition distractor | Not a specific final target | E02 |
| **euro** (#239) | 5.5 price-words | euro / euroa | E01 match | E03 euro noun | E07/E08 → E18/F09 simple price | F09 | E03 |
| **paljonko** (#341) | 5.5 price-words | paljonko (distinct from paljon) | E01 match | E04 question word | E05/E06 → F08 price request | F08 | E04, E06 |
| **maksaa** (#95) | 5.5 cost-verb | maksaa / maksan | E07 cost recognition | E11 I-pay form | E19 → F09/F10 price/payment | F09/F10 | E11 |
| **ostaa** (#94) | 5.5 buy-verb | ostaa / ostan | E09 buy/pay match | E10 I-buy form | E12 → F11 buy vs pay | F11 | E10 |
| **kortti** (#241) | 5.5 card-noun | kortti / fixed kortilla | E13 card meaning | E14 card lemma | E15/E16 → F10 card request | F10 | E14 |

**Important retrieval distinctions:** For coffee/tea/water/milk, dictionary-form spelling is assessed separately from the request partitives. The improved A04 is a genuine two-pair water/milk **positive recognition exercise before A05/A06 recall**, not merely two answer distractors. `hinta/euro/paljonko` each have typed retrieval in 5.5, and `ostan/maksan` are explicitly assessed as first-person forms. `kortilla` is a fixed expression form and does not become a duplicate `vocab.kortilla` target.

## 3. Recognition-only vocabulary — complete 8/8 coverage

| Lemma / CSV rank | First encounter | Lesson-local comprehension | Independent Review | Production boundary |
|---|---|---|---|---|
| **kana** (#255) | 5.2 recognition-foods | B10 four-pair match | R01 | No mandatory Finnish text input |
| **kala** (#256) | 5.2 recognition-foods | B10 four-pair match | R02 | No mandatory Finnish text input |
| **peruna** (#259) | 5.2 recognition-foods | B10 four-pair match | R03 | No mandatory Finnish text input |
| **banaani** (#265) | 5.2 recognition-foods | B10 four-pair match | R04 | No mandatory Finnish text input |
| **nälkä** (#268) | 5.3 hunger-thirst | C08 two-pair match | R05 | Minulla on nälkä is recognition-only fixed context, not possessive grammar |
| **jano** (#269) | 5.3 hunger-thirst | C08 match; C09 meaning | R06 | Minulla on jano is recognition-only fixed context |
| **kuitti** (#243) | 5.5 checkout-recognition | E17 pair match; F12 meaning | R07 | Receipt; no Finnish spelling requirement |
| **kassa** (#244) | 5.5 checkout-recognition | E17 pair match | R08 | Checkout/cashier; not independently produced |

**Unit 3 reuse:** `saada` was recognised earlier. Its appearance inside the **productive phrase** `Voinko saada vettä?` does **not** promote `vocab.saada` to unrestricted lexical production or a general conjugation target. Its own encounter history and canonical identity are preserved.

## 4. Exact linguistic forms and scope audit

| Canonical noun / verb | Correct taught form(s) | Why this is safe / what is deferred |
|---|---|---|
| kahvi | **kahvia** | Taught partitive used with Haluan / Haluaisin, not a separate lemma |
| tee | **teetä** | Correct long-vowel noun + -tä; no invented `teettä` |
| vesi | **vettä** | Irregular/stem-changing partitive; not `vesia` or dictionary form in taught request |
| maito | **maitoa** | Practical milk partitive in requests and amounts |
| ruoka | **ruokaa** | Unspecified food amount in a taught request |
| leipä | **leipää** | Long ä preserved; `leipäa` not accepted |
| lounas | **lounasta** | Not a universal +a transformation |
| omena | **omenaa** | In taught `kaksi omenaa` also the singular partitive |
| yksi omena / kaksi omenaa | **one apple / two apples** | Numeral 2 with **singular partitive**, not nominative plural `omenat` |
| yksi euro / kaksi euroa | **one euro / two euros** | Same limited pattern; no decimal prices or unrestricted numeral inflection |
| vähän / paljon + noun | **vähän maitoa**, **paljon kahvia** | Correct partitives after quantities in taught contexts; no claims about all uses of partitive |
| haluta | **haluan**, fixed polite **haluaisin** | Conditional-shaped polite chunk; no conditional conjugation |
| saada | **Voinko saada vettä?** | Phrase-only productive permission/request; `saada` remains recognition-only lemma |
| maksaa | **maksaa** ‘it costs’ / **maksan** ‘I pay’ | Distinct constructions, no implication they take identical complements |
| ostaa | **ostan kahvia** | Taught unspecified-amount context; do not extrapolate total-object grammar |
| kortti | **kortilla** (‘by card’) | Fixed payment phrase; no full adessive case paradigm |
| paljonko | **Paljonko tämä maksaa?** | Distinct canonical lexeme from `paljon`; exact price question |

## 5. Grammar and phrase coverage

| Target | First encounter | Actual exercise evidence | Defer / scoring boundary |
|---|---|---|---|
| `grammar.partitive-drinks` | 5.1 partitive-drinks | A07/A08/A11/A12/A13; F02 | Partitive comprehension not generic case-generation mastery |
| `grammar.partitive-food` | 5.2 food-partitive | B08/B09/B11/B12/B13 | No object-case selection rules |
| `phrase.haluan-kahvia` | 5.1 haluan-coffee | A09/A10; F05 | Phrase scoring does not inflate `vocab.haluta` and `vocab.kahvi` separately |
| `phrase.haluaisin-request` | 5.3 haluaisin | C01–C03/C07/C10; F01 | Fixed polite conditional-shaped chunk, not a new conjugation system |
| `phrase.voinko-saada-vetta` | 5.3 voinko-saada | C04–C06/C11; F04 | Earlier recognition-only saada remains scoped |
| `grammar.quantity-plus-partitive` | 5.4 quantity-partitive | D06/D12; F06 through phrase | No unchanged dictionary noun after vähän/paljon in taught contexts |
| `grammar.numeral-plus-singular-partitive` | 5.4 numerals-pattern | D09–D11, E08/E18, F07/F09 | Singular partitive; no plural partitive system |
| `phrase.vahan-maitoa-kiitos` | 5.4 small-milk | D07/D08/D13; F06 | Taught complete small polite request |
| `phrase.paljonko-tama-maksaa` | 5.5 price-question | E05/E06, F08 | Price question separate from cost statements |
| `phrase.voinko-maksaa-kortilla` | 5.5 card-phrase | E15/E16, F10; E19 with maksan | `kortilla` as fixed payment form, no adessive-paradigm mastery |
| Spoken recognition | 5.4 optional spoken-amounts | `paljon → paljo`, `vähän → vähä`; `haluan → haluun` from Unit 3 reinforced | Optional, no separate required assessment or knowledge record |

## 6. Units 1–4 cumulative continuity

| Earlier learning | Real Unit 5 reuse | Scoring limit |
|---|---|---|
| Unit 1 `hei/moi`, `kiitos` | 5.2 shop request, 5.3 café model, 5.6 integrated dialogue | Politeness/greeting is contextual, not falsely reintroduced |
| Unit 1 `yksi/kaksi` | 5.4 one/two apples and 5.5 one/two euros | Numeral + partitive assessed only in scoped examples |
| Unit 2 `tämä` | `Paljonko tämä maksaa?` | Whole price phrase scored, not lemma `vocab.tama` |
| Unit 2 language partitive `Puhun suomea` | Background form awareness for Unit 5 partitive | Unit 2 phrase remains correct; no retroactive change |
| Unit 3 `Haluan`, `Voinko`, recognition-only `saada` | `Haluan kahvia`, `Haluaisin kahvia`, `Voinko saada vettä` | Distinct phrase success; no arbitrary conditional or saada conjugation |
| Unit 4 `kahvila/kauppa/ravintola` | 5.6 F03 place context and café/shop models | No untaught `kahvilaan` case generation |

## 7. Complete cumulative assessment — 5.6 F04–F13

| Exercise | User can demonstrate | Scored target or boundary |
|---|---|---|
| F04 | Request water independently | `phrase.voinko-saada-vetta` |
| F05 | State wanting coffee independently | `phrase.haluan-kahvia` |
| F06 | Understand a little milk | `phrase.vahan-maitoa-kiitos` |
| F07 | Recognise two apples and singular partitive | `grammar.numeral-plus-singular-partitive` |
| F08 | Ask how much this costs | `phrase.paljonko-tama-maksaa` |
| F09 | Understand two-euro price | `vocab.maksaa` |
| F10 | Ask to pay by card | `phrase.voinko-maksaa-kortilla` |
| F11 | Distinguish buying coffee from paying | `vocab.ostaa` |
| F12 | Recognise receipt | `vocab.kuitti` comprehension |
| F13 | Combine greeting, ordering, asking price, payment with supplied chunks | Capability-only; `scoredTargetIds=[]` |

All **five blueprint-required abilities** have an actual scored task; the other tasks support cumulative application without a second full vocabulary drill. Completion requires attempting/Not sure, not a perfect result.

## 8. External linguistic research and source limitations

The following are **independent linguistic/reference sources** for the Finnish facts. They do **not** endorse or approve the specific original Vokri learner-facing exercises:

1. [Aalto OpenLearning — Partitive: Summary](https://openlearning.aalto.fi/mod/book/view.php?chapterid=560&id=10293). Gives `kahvi → kahvia`, `leipä → leipää`, food/drink quantities and singular partitive after numbers two and above, while explaining there are multiple endings.
2. [Yle Supisuomea, osa 7 — Suomalaista ruokaa ja partitiivi](https://yle.fi/a/20-156324). Gives `vesi → vettä`, `maito → maitoa`, `tee → teetä`, `kaksi omenaa`, and explicit food/quantity contexts; also makes clear that partitive has other functions.
3. [Yle — Matkailuenglantia: Ostoksilla](https://yle.fi/a/20-137063). Confirms the Finnish equivalent `Paljonko tämä maksaa?` and familiar card-payment phrases such as `Maksan (luotto)kortilla`.
4. [Kielitoimiston sanakirja — paljon](https://www.kielitoimistonsanakirja.fi/paljon). Confirms amount meanings and usage context; this is a lexical reference, not an authorship approval.
5. [Wellamo-opisto — Finnish course material](https://peda.net/wellamo-opisto/kielet/suomi-luonnos/mkl/suomen-jatkokurssi-2-perustaso-a2.1). Gives the correct `lounas → lounasta` form among other stem-changing words, corroborating the taught form independently.
6. [FinnishPod101 — Common Questions in Finnish](https://www.finnishpod101.com/blog/2020/11/27/common-finnish-questions-and-answers/). Cross-checks `paljonko`, `maksaa`, and `Se maksaa 5 euroa`; lower authority than Yle.
7. [Vokri curated Finnish CSV](../vocabulary/finnish_2000_curated.csv) and [vocabulary README](../vocabulary/README.md). Source of canonical lemma/rank/part-of-speech identities, not human certification of AI-authored examples.

### Authored-language caveats and corrections

- The partitive has more roles than an English ‘some’, so the course avoids this misleading explanation and does not generalise a suffix from `kahvi` to `vesi`.
- The form `teetä`, not `teettä`, preserves the correct long ee and one t in the partitive. `vettä` is taught directly rather than generated from `vesi`.
- `kaksi omenaa` and `kaksi euroa` use **singular** partitive, not a plural nominative. No priced decimal/cents example is assessed.
- `Haluaisin` is an explicitly scoped polite phrase. A response saying `Haluan` is semantically relevant but not marked correct in a task explicitly requiring the softer `Haluaisin` wording; tasks asking only for a generic request are authored to permit genuine alternatives when appropriate.
- `Voinko saada vettä` is a productive **phrase** with a recognition-only `saada` component, not unrestricted productive conjugation of `saada`.
- `kortilla` stays inside a fixed payment expression; no `-lla/-llä` grammar curriculum is added.
- One local issue was corrected before the final audit: the first water/milk recognition question was replaced with a **two-pair guided match**, so both words have recognition before required recall.
- A token-bank instruction was corrected from ‘four’ to ‘three’ after counting its actual supplied tokens.

**Not tested:** Real Finnish speaking/listening, actual native learner trials, accessibility keyboard interaction, mobile pause-resume persistence, professional S2 teacher approval, and whether all café micro-dialogues feel natural to every native speaker. These are editorial/product tests, not grounds to fabricate certification.

## 9. Provisional 100-point authoring-quality rubric

| Category | Maximum | Awarded | Evidence and deduction |
|---|---:|---:|---|
| Linguistic accuracy | 12 | 11 | Independent Aalto/Yle/Kotus guidance checked; no human teacher certification |
| Naturalness and register | 5 | 4 | Plausible short café dialogue; some tone choices require actual Finnish learner/user review |
| Curriculum integrity | 7 | 7 | Exact six lessons, 16 production and 8 recognition roles from merged blueprint |
| Partitive-form correctness | 10 | 10 | Verified kahvia, teetä, vettä, maitoa, ruokaa, leipää, lounasta, omenaa |
| Quantity and numeral accuracy | 8 | 8 | Yksi omena/kaksi omenaa and yksi euro/kaksi euroa; no false plural rule |
| Polite-request accuracy | 7 | 7 | Haluaisin kept as chunk; Voinko saada vettä reuses recognition-only saada |
| Price/payment correctness | 7 | 7 | Paljonko tämä maksaa, Se maksaa kaksi euroa, Voinko maksaa kortilla checked |
| Pedagogical progression | 7 | 6 | Guided recognition before required recall; fixed phrases before productive tests |
| Vocabulary/cognitive load | 6 | 5 | 5.5 is dense (19 records); two pause points help but need actual beginner calibration |
| Grammar clarity | 6 | 5 | No false universal partitive, object or conditional suffix paradigms |
| Communicative usefulness | 5 | 5 | Drink requests, two-euro price, card payment and basic checkout situation |
| Exercise variety | 4 | 4 | Four of five permitted kinds used, no gratuitous transform exercise |
| Answer and distractor validity | 5 | 4 | Finite accepted alternatives and per-option feedback; real users may surface variants |
| Corrective feedback | 3 | 3 | All 90 records have correct/wrong/near/Not sure guidance |
| Cumulative retrieval and assessment | 5 | 4 | Ten-part final checkpoint integrates prior Units 1–4 and samples five blueprint abilities |
| Mobile/novice validation | 3 | 1 | Read-only Figma inspection only; Expo accessibility, keyboard and timing not yet tested |
| **Total** | **100** | **91** | **Authoring-complete; independent teacher, novice and Expo effectiveness checks not claimed.** |

**91/100 is a provisional content self-review**, not a measured learner score or a certification. The main deductions are cognitive density in 5.5, some context/register simplifications and lack of tested Expo interactions.

## 10. Owner approval and implementation boundaries

1. Newly authored Unit 5 content remains `needs_review` until explicit **Vokri owner approval**. Under the agreed workflow, this sign-off is sufficient; no mandatory external Finnish teacher review and no false certification.
2. Confirm the inherited Units 1–4 wrong-versus-Almost scheduler adapter before native implementation. If changed, it must be a separate shared-domain decision, not a hidden Unit 5 patch.
3. Validate partitive form input, diacritics, long vowels, first attempt for each matching pair, stable IDs and Review eligibility in the typed content conversion and actual Expo sessions.
4. Test the heavy 5.5 session at shorter screen sizes with Finnish keyboard, large fonts, VoiceOver/TalkBack and interruption/resume. Editorial times are unmeasured estimates.
5. Confirm the PR diff contains **only** the three new Unit 5 Markdown files; no changes to Units 1–4, Figma, the approved A1 blueprint, original CSV or application code.

**Ready for owner editorial review and downstream Codex content conversion. Not evidence of a production-ready mobile release.**
