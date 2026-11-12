# Vokri — Unit 4: Where Are You? · Coverage & Editorial QA

**Authoring revision 1.0 · 12 November 2026.** Source: [full Unit 4 teaching and exercise specification](./unit-04-where-are-you-complete-specification.md). This is evidence of authored-content and reference checks, **not** a measured learning-outcome study or an implemented React Native app. The product owner may approve Vokri content; no external teacher approval is claimed.

## 1. Inventory and workload

**Six lessons; 100 required teaching steps, one optional spoken recognition step, 77 required exercise records and six additional scheduled-Review variants: 83 unique authored records.** Six lesson matching boards contain 17 independent pairs, resulting in **88 required response units** (77 − 6 + 17), excluding additional effort for multiword text input. The ten-item end-of-unit checkpoint F05–F14 is inside Lesson 4.6.

| Lesson | Ordered steps | Required exercise records | Matching pairs | Editorial time estimate |
|---|---:|---:|---:|---|
| 4.1 Asking where something is | 16 | 11 | 2 | 6–9 min |
| 4.2 Saying ‘in’ | 18 | 12 | 2 | 7–10 min |
| 4.3 Common places | 26 | 19 | 10 | 12–18 min; staged in three blocks |
| 4.4 Saying where you're going | 19 | 12 | 3 | 8–11 min |
| 4.5 Useful location phrases | 13 | 9 | 0 | 5–8 min |
| 4.6 Location review | 8 | 14 | 0 | 9–13 min; pause before checkpoint |
| **Total** | **100** | **77** | **17** | **47–69 min** |

### Exercise-kind distribution

| Kind | Required records | Observations |
|---|---:|---|
| `multiple_choice` | 29 | Meaning/context/form selection; stable option-specific feedback |
| `text_input` | 28 | Dictionary form and taught complete phrase retrieval |
| `token_build` | 7 | Guided sentence assembly, explicitly not independent spelling recall |
| `matching` | 6 | 17 separately assessed pairs |
| `transform` | 0 | No need to force an inappropriate untaught transformation |
| **Total** | **70** | **Recalculate counts from the final specification before merge** |

## 2. Production vocabulary coverage (all 16)

**Matrix interpretation:** 'Required retrieval' means a concrete typed or word-specific required retrieval opportunity; a word merely in an option or a phrase is contextual exposure, not necessarily independent free recall. The unit capstone deliberately samples functional abilities instead of every isolated word.

| Lemma (#rank) | Formal introduction | First recognition | Required retrieval | Later reuse | Cumulative assessment | Review-compatible |
|---|---|---|---|---|---|---|
| **missä** (#338) | 4.1 where | A01 | A06 | A09/A11 → F05/F09 | F05 question; F09 contrast | A06 |
| **täällä** (#352) | 4.1 here-there | A02 | A07 | A11 → F08 | F08 | A07/A11 |
| **siellä** (#353) | 4.1 here-there | A03 | A08 | A10/F04 | F04 | A08 |
| **talo** (#188) | 4.2 talo | B01/B02 | B06 | B09/B11/F07 | F07 | B06 |
| **huone** (#190) | 4.2 huone | B04/B05 | B07 | B08/B12; R06 | B12 lesson checkpoint | B07/R06 |
| **asunto** (#189) | 4.3 homes | C01 | C02 | C19 asunnossa | F02 recognition | C02 |
| **paikka** (#206) | 4.3 homes | C01 | C03 | R candidate C03 due | Not sampled final | C03 |
| **koulu** (#212) | 4.3 school-work | C04 | C06 | D05/D10/F11 | F11 as destination | C06 |
| **työ** (#207) | 4.3 school-work | C05 | C07 | scheduled Review C07 | Not sampled final | C07 |
| **kauppa** (#234) | 4.3 shops | C08/C09 | C10 | C16/D09/E06/F06/F13 | F06 and F13 | C10 |
| **kahvila** (#237) | 4.3 shops | C09 | C11 | F03 category | F03 | C11 |
| **ravintola** (#236) | 4.3 shops | C09 | C12 | F03 contrast | F03 contrast | C12 |
| **vessa** (#195) | 4.3 everyday-facility | C13 | C14 | C15/C18/F05 | F05 | C14/C18 |
| **minne** (#339) | 4.4 minne | D01/D02 | D06 | D11/F09 | F09 | D06 |
| **koti** (#187) | 4.4 koti | D03 | D07 | D04/D08/D12/E08/F10 | F10 contrast | D07 |
| **lähellä** (#351) | 4.5 nearby | E03 | E04 | E06/E09/F13 | F13 | E04 |

**New lemmas and their introduction lessons:** 4.1 missä/täällä/siellä; 4.2 talo/huone; 4.3 eight places; 4.4 minne/koti; 4.5 lähellä; 4.6 none. The Original 2,000-lemma CSV is unchanged. Every production lemma has a required free-retrieval opportunity, and every recognition-only word has a suitable matching activity.

## 3. Recognition-only vocabulary coverage (all five)

| Recognition item (#rank) | First formal encounter | Lesson-local recognition | Standalone due Review | Restrictions |
|---|---|---|---|---|
| **pöytä** (#198) | 4.3 recognition-items | C17 matching | R01 | Finnish→meaning only |
| **tuoli** (#199) | 4.3 recognition-items | C17 matching | R02 | Finnish→meaning only |
| **ovi** (#201) | 4.3 recognition-items | C17 matching | R03 | Finnish→meaning only |
| **työpaikka** (#208) | 4.3 recognition-items | C17 matching | R04 | Finnish→meaning only |
| **ruokakauppa** (#235) | 4.3 recognition-items | C17 matching | R05 | Finnish→meaning only |

R01–R05 are independent, fully authored Review variants; C17 is a five-pair lesson-local matching board. None requires Finnish free production. R06 provides additional self-contained recognition of the production noun huone.

## 4. Morphology and grammar form audit

| Base / concept | Verified form / distinction | Teaching/assessment policy |
|---|---|---|
| talo | **talossa** | Transparent talo + ssa example; 'in the house' |
| huone | **huoneessa** | huonee- + ssa before the ending, not simply huone + ssa |
| kauppa | **kaupassa** | Stem change; kauppassa not accepted; note the same noun uses kauppaan for destination |
| asunto | **asunnossa** | Stem change; asuntossa not accepted |
| koulu | **koulussa** for location, **kouluun** for destination | No generic illative generator |
| kahvila | **kahvilassa** | Supported example, not independent new case curriculum |
| ravintola | **ravintolassa** | Supplied reference only, no new lemma |
| vessa | **vessassa** | Authored unscored reference, common everyday word |
| työ | **työssä** is a location form, but **töissä** is widely used for 'at work' | Do not present olen työssä as the universal everyday expression |
| koti | **kotona** (at home), **kotiin** (going home) | Kotona is NOT ordinary -ssa/-ssä; fixed expressions; not interchangeable |
| kauppa | **kauppaan** to the shop | Explicit taught destination, not invented uniform suffix |
| missed 'where' | **missä** = where at; **minne** = where to | Explain with Olen / Menen |
| front/back vowel contrast | **kylä → kylässä** vs **talo → talossa** | Kylä unscored supplied example; no premature full vowel-harmony paradigm |

**Important design correction:** The production Figma Unit 4 grammar demo demonstrates talo + ssa and lists Helsinki → Helsingissä. The new lesson content avoids assuming one decomposable stem model covers all nouns, uses huonee- as the explicitly taught stem and keeps unexplained place names out of scored questions. Figma is not modified.

## 5. Phrase, grammar and cross-unit coverage

| Target | First taught | Independent evidence | Deferred boundary |
|---|---|---|---|
| `phrase.missa-se-on` | 4.1 where-question | A04/A09 | No general interrogative paradigm |
| `phrase.olen-taalla` / `phrase.se-on-siella` | 4.1 location-replies | A05/A10/A11/F04/F08 | Earlier olla is re-used, not reintroduced |
| `grammar.inessive-ssa-ssa` | 4.2 inessive | B02/B08/B10/C16/F02/F06 | No full case tables or unseen stem inference |
| `grammar.vowel-harmony-location` | 4.2 front-vowels | B03/F12 written awareness only | No pronunciation/suffix-generation claim |
| `phrase.olen-talossa` | 4.2 place-phrase | B09/B11/F07 | Whole taught construction |
| `phrase.missa-vessa-on` | 4.3 toilet-question | C15/F05 | Everyday vessa register; no bathroom vocabulary expansion |
| `grammar.location-vs-destination` | 4.4 location-versus-destination | D01/D02/F09/F10 | No abstract six-location-case table |
| `phrase.minne-menet` | 4.4 question-chunk | D11/F09 | menet supplied in fixed phrase, not a full second-person paradigm |
| `phrase.menen-kotiin` | 4.4 home-destination | D04/D08/D12/F10 | No regular illative for unknown nouns |
| `phrase.menen-taught-destination` | 4.4 destination-phrase | D09/D10/F11 | Only kotiin/kauppaan/kouluun |
| `phrase.olen-kotona` / `phrase.kauppa-on-lahella` | 4.5 home-contrast / nearby-phrase | E05/E06/E08/E09/F10/F13 | kotona is not inessive; lähellä taught lexically |
| Spoken täällä→tääl / siellä→siel | Optional note in 4.1 | No mandatory production or mastery | Optional recognition only |

**Cross-unit dependencies:** Unit 1 olen, pronouns and familiar polite interactions; Unit 2 Asun Suomessa, se/tämä, question words; Unit 3 menen/tulen and introductory action sentences. The Unit 4 final checkpoint reuses these without awarding blanket word familiarity merely for appearing in a longer sentence.

## 6. Cumulative capability evidence (Lesson 4.6 F05–F14)

| Exercise | Skill | Scoring boundary |
|---|---|---|
| F05 | **Missä vessa on?** — ask where the toilet is | Phrase only |
| F06 | **Olen kaupassa** — say you are in a shop | Inessive grammar, not every noun |
| F07 | **talossa** = in the house | Recognise talo form |
| F08 | **Olen täällä** — I'm here | Phrase only |
| F09 | **Missä** vs **minne** through a destination question | Question phrase only |
| F10 | **kotona** vs **kotiin** | Fixed home-location phrase only |
| F11 | **Menen kouluun** — going to school | Taught destination phrase only |
| F12 | Front-vowel -ssä written awareness | No learning-knowledge score, awareness-only |
| F13 | **Kauppa on lähellä** | Phrase only |
| F14 | Two complete location→movement tiles | Capability only; `scoredTargetIds=[]` |

Only required attempts/Not sure are needed for completion; correct responses contribute the declared scoped learning evidence, not automatic permanent mastery.

## 7. Source-backed linguistic verification and limits

These references were checked to verify concrete Finnish language facts, not to copy their educational content or claim that they independently approved Vokri's exercise writing:

1. [Uusi kielemme — The Inessive Case (Missä)](https://uusikielemme.fi/finnish-grammar/finnish-cases/location-cases/the-inessive-case-missa). Provides talossa, työssä, huoneessa and front/back suffix examples and explains the changing noun stems.
2. [Uusi kielemme — Missä/Mistä/Mihin Location Cases](https://uusikielemme.fi/finnish-grammar/finnish-cases/location-cases/missa-mista-mihin-location-cases). Supplies location versus destination contrasts, including koulussa/kouluun, kaupassa/kauppaan and question contexts.
3. [Kotus — Vokaalisointu or vowel harmony](https://kielitoimistonohjepankki.fi/ohje/vierassanojen-taivutuspaatteen-vokaali/). Explains back vowels a/o/u, front vowels ä/ö/y, neutral i/e and the matching suffix-vowel distinction.
4. [Uusi kielemme — Adverbs of Location](https://uusikielemme.fi/finnish-vocabulary/word-types/adverbs/adverbs-of-location-taalla-kaikkialla-ylhaalla). Context for täällä/siellä and the destination adverb kotiin, not full productive paradigm instruction.
5. [Uusi kielemme — Finnish Question Words](https://uusikielemme.fi/finnish-vocabulary/word-types/pronouns/finnish-question-words-interrogative-pronouns). Clarifies where/destination questions and notes minne/mihin similarity, without introducing mihin as required new production.
6. [Uusi kielemme — Finnish Spoken Language Pronunciation](https://uusikielemme.fi/finnish-grammar/phonology/finnish-spoken-language-pronunciation). Supports recognition-first reduced spoken forms; does not certify a dialect-independent spelling transcript.
7. [Vokri original vocabulary CSV](../vocabulary/finnish_2000_curated.csv) and [provenance README](../vocabulary/README.md). Used for lemma/rank references, **not** certification of its AI-authored example sentences.

**Limits:** We did not conduct a native Finnish teacher review, actual learner interviews or deployed Expo device tests. The authoring QA only verifies curriculum consistency, independent linguistic references, deterministic answer declarations, and the intended exercise load. The product owner may approve without outside teacher review as previously agreed.

## 8. Provisional 100-point editorial self-assessment

| Category | Max | Awarded | Evidence / deduction |
|---|---:|---:|---|
| Finnish linguistic accuracy | 14 | 13 | Cross-checked authoritative spelling and forms; no external live teacher audit |
| Naturalness and register | 8 | 7 | Natural questions and phrases, but beginner situations need product trial |
| Curriculum adherence | 9 | 9 | Exact 16 production + five recognition; same six lessons, no added paradigms |
| Noun-form correctness | 10 | 10 | Talossa, huoneessa, asunnossa, kaupassa, kotona, kotiin and illatives checked |
| Vowel harmony | 8 | 8 | Correct supplied kylä→kylässä contrast, no false universal suffix choice |
| Grammar explanation clarity | 8 | 7 | Explicit stem changes and exception kotona; case terminology still novice-tested later |
| Pedagogical sequencing | 10 | 9 | Recognition precedes productive questions; 4.4 grammar formally introduced |
| Eight-noun lesson load | 6 | 5 | 4.3 has eight production nouns and 10 matching pairs; pause points mitigate but do not erase load |
| Practical usefulness | 9 | 9 | Finding toilet and describing shop/home/destinations are useful real tasks |
| Exercise-format variety | 6 | 6 | Only existing kinds, chosen deliberately |
| Answer/feedback quality | 5 | 5 | All 83 records have explicit answers, feedback, scoring boundaries; native validator pending |
| Cumulative retrieval | 3 | 2 | Earlier Unit 2/3 forms reused without progress inflation |
| Capability checkpoint sampling | 2 | 1 | 10 checks sample blueprint abilities, not every lexeme again |
| Native UX evidence | 2 | 0 | Real iOS/Android typography, keyboard, VoiceOver and learner outcomes not tested |
| **Total** | **100** | **91** | **Authoring complete; native/novice learning evidence still pending.** |

Do not interpret this editorial score as measured A1 proficiency. The main quality limitations are the fixed eight-noun load in 4.3, the fine distinction between location and destination in short exercises, and absence of native keyboard/accessibility testing.

## 9. Required approval and implementation checks

1. **Owner editorial sign-off:** all new Unit 4 content remains `needs_review` until the Vokri owner explicitly approves it. Their approval is sufficient under the agreed policy, without claiming a teacher certification.
2. **Wrong-versus-Almost adapter:** reconfirm the provisional shared Unit 1–3 `almost` non-success bucket for wrong responses, with honest visible incorrect/near feedback. No new Review scheduler is introduced by Unit 4.
3. **Novice pacing:** in particular, measure whether 4.3's eight production nouns and five recognition-only items need shorter screens or resume guidance in the actual app.
4. **Mobile accessibility/inputs:** validate Finnish ä/ö, doubled letters, position-aware question contexts, token controls, five-pair scrollable matching, keyboard-safe actions and accessible focus.
5. **Typed content conversion:** check all IDs, first encounters, precise answer keys, review flags and per-pair first attempts in the Expo/Zod conversion. This documentation PR alone does not pass those app tests.
6. **Source integrity:** earlier Units 1–3, original 2,000-row CSV, blueprint, Nordic Editorial Figma and application code must remain unchanged.

**Readiness:** fully authored for product-owner review and eventual Codex conversion, not independently teacher-certified or production-implemented.
