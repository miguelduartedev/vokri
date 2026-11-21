# Vokri Swedish 2,000 — Quality Assurance Report

**Audit:** 21 November 2026  
**Input:** attached Swedish Kelly XML, 8,425 entries  
**Output:** `swedish_2000_curated.csv` (UTF-8 with BOM)  
**Status:** **structurally valid, editorial review still required for production grammar and examples**.

## 1. Structural validation

| Check | Measured result | Status |
| --- | ---: | --- |
| CSV data rows | 2,000 | PASS |
| Unique exact dictionary entries | 2,000 | PASS |
| Distinct stable `word_id` | 2,000 | PASS |
| Rank series 1–2,000 | Continuous | PASS |
| Tier sizes Core/Everyday/Independent/Extended | 500 / 500 / 500 / 500 | PASS |
| Rows with `language_id=sv` | 2,000 | PASS |
| Non-empty English meaning | 2,000 | PASS |
| Non-empty Swedish example | 2,000 | PASS |
| Non-empty English example | 2,000 | PASS |
| Unique Swedish example text | 2,000 | PASS |
| Unique English example text | 2,000 | PASS |
| Non-empty POS, topic, tier and usefulness score | 2,000 each | PASS |
| Swedish å/ä/ö / UTF-8 round-trip | Preserved | PASS |
| `en/ett` only on noun rows | Enforced | PASS |
| Non-nouns do not carry noun inflection | Enforced | PASS |
| Non-verbs do not carry verb inflection | Enforced | PASS |
| Non-adjectives do not carry adjective inflection | Enforced | PASS |

**Important:** PASS means the rule was checked programmatically, **not** that all Swedish sentences or forms were certified by a native speaker.

## 2. Source audit and provenance

| Metric | Count / description |
| --- | ---: |
| Kelly XML lexical entries | 8,425 |
| Kelly distinct written forms | 8,170 |
| Additional Kelly lexical entries sharing a written form | 255 |
| First Kelly IDs with synthetic 1,000,000 WPM value | 86 |
| Selected records retaining a genuine Kelly ID | 1,929 |
| Added entries absent from this Kelly XML | 71 |
| Retained entries with synthetic Kelly WPM markers | 25 |

The first 86 Kelly IDs were identified by directly parsing the attached XML. `original_kelly_frequency` preserves the **original WPM per million** as a comma-decimal string; the 25 synthetic values retained in the curated selection are explicitly flagged and are **never counted as measured frequencies**. Original Kelly CEFR bands are source annotations, not independent proficiency assessments.

### Changes illustrating genuine selection rather than a top-2,000 copy

| Word | Original Kelly ID | Final pedagogical rank | Reason |
| --- | ---: | ---: | --- |
| *jag* | 102 | 1 | Core pronoun |
| *ursäkta* | 3484 | 35 | Essential everyday politeness |
| *förlåt* | 7196 | 36 | Essential everyday politeness |
| *bok* | 276 | 124 | Practical beginner noun |
| *apotek* | 5100 | 133 | Daily-life healthcare |
| *feber* | 5195 | 135 | Common health concern |
| *fika* | 4374 | 143 | Very common social-life concept |
| *biljett* | 2892 | 169 | Essential transport vocabulary |
| *halsduk* | Not in Kelly | 1004 | Practical winter vocabulary |
| *mobil* | 3891 | 501 | Everyday mobile phone noun, not adjective |
| *kort* | 1881 | 160 | Payment card rather than adjective |
| *resa* | 1000 | 172 | Travel verb rather than trip noun |
| *lag* | 333 | 804 | Law noun rather than sports-team noun |

The source also contains the artificially boosted manual entries *brunch*, *inrikesminister* and *inrikespolitik*. None is required in the Core 500. Several manually inserted numerals remain useful in Core; their synthetic WPM values are retained only for traceability.

### Supplemental vocabulary absent from Kelly XML

The following 71 entries were included on pedagogical grounds rather than assigned fabricated corpus records:

*några*, *inget*, *alla*, *törstig*, *pengar*, *vilket*, *vilka*, *snälla*, *varsågod*, *kännas*, *komma ihåg*, *finnas*, *avboka*, *köa*, *oroa sig*, *förrgår*, *övermorgon*, *ännu*, *senare*, *inatt*, *imorse*, *mest*, *mindre*, *minst*, *finska*, *app*, *wifi*, *frys*, *mikro*, *mikrovågsugn*, *diskmaskin*, *servett*, *tandborste*, *tandkräm*, *schampo*, *bankkort*, *mataffär*, *livsmedelsbutik*, *mer*, *stressad*, *hellre*, *busshållplats*, *tidbokning*, *dammsugare*, *sopor*, *toalettpapper*, *diskmedel*, *diskbänk*, *förnamn*, *postnummer*, *personnummer*, *pendeltåg*, *trafikljus*, *övergångsställe*, *kanelbulle*, *hallon*, *blåbär*, *vägbeskrivning*, *inloggning*, *användarnamn*, *halsduk*, *hörlurar*, *laddare*, *eluttag*, *laktosfri*, *glutenfri*, *vegetarisk*, *vegansk*, *köksbord*, *våffla*, *strykjärn*.

## 3. Four teaching tiers

| Tier | Ranks | Entries |
| --- | --- | ---: |
| Core | 1–500 | 500 |
| Everyday | 501–1,000 | 500 |
| Independent | 1,001–1,500 | 500 |
| Extended | 1,501–2,000 | 500 |

**Editorial assessment:** The Core 500 were actively prioritised around pronouns, question words, conjunctions, essential verbs, basic numbers, food, transport, home, family and health rather than Kelly rank alone. First 1,500 provide the main proposed learning progression; Extended is optional expansion. These judgments are not a validated statistical optimality or CEFR certification.

## 4. Part-of-speech distribution

| Part of speech | Records |
| --- | ---: |
| noun | 974 |
| verb | 405 |
| adjective | 250 |
| adverb | 191 |
| pronoun | 50 |
| preposition | 49 |
| conjunction | 25 |
| numeral | 25 |
| particle | 15 |
| interjection | 10 |
| determiner | 5 |
| participle | 1 |

## 5. Topic distribution

One primary learner-friendly topic per record; **Other** is reserved for difficult-to-specialise vocabulary rather than the majority of terms.

| Topic | Records |
| --- | ---: |
| Actions | 343 |
| Basics | 320 |
| Descriptions | 222 |
| Other | 105 |
| Home | 81 |
| Food & Drink | 77 |
| Time | 74 |
| Society | 68 |
| Technology | 62 |
| Opinions | 54 |
| Communication | 51 |
| School | 48 |
| Numbers | 47 |
| Transport | 46 |
| Leisure | 45 |
| Work | 45 |
| Health | 42 |
| Shopping | 40 |
| Body | 39 |
| Relationships | 35 |
| People | 33 |
| Nature | 31 |
| Feelings | 30 |
| Money | 26 |
| Travel | 20 |
| Weather | 16 |

## 6. Grammar enrichment completeness

| Field group | Populated | Relevant records | Completeness |
| --- | ---: | ---: | ---: |
| Noun gender (`en/ett`) | 950 | 974 | 97.5% |
| Three key noun forms populated | 200 | 974 | 20.5% |
| Present, preterite and supine populated | 137 | 405 | 33.8% |
| Neuter and plural adjective forms populated | 141 | 250 | 56.4% |
| Selective spoken/informal forms | 18 | 2,000 | 0.9% |

Noun gender: **702 en**, **248 ett**, **24 blank**. Of the blank genders, four correspond to common plural-only items and approximately 20 require a dictionary/context check or have no straightforward singular-article use. A total of **36 additional genders** entered for Kelly-absent items have been explicitly marked `added_gender_dictionary_review` rather than claimed source-verified.

The explicit morphology data were **selectively supplied through AI-curated, high-confidence annotation**, not batch-verified against a downloaded inflection dictionary. The rest were **left blank intentionally**; Vokri should hide missing paradigms until reviewed. In particular: the Swedish verb field `verb_past` refers to the **preterite**; `verb_supine` is **supine**, not a past participle.

### Homographs and lexical variants handled

* `sex` and `åtta`: corrected to the **numeral** Kelly entries rather than the same-written nouns.
* `kort`: **ett kort** (card), not adjective *kort* (short).
* `lag`: **en lag** (law), not **ett lag** (team).
* `resa`: the verb “to travel”, not noun *en resa*.
* `mobil`: everyday noun *en mobil* (mobile phone), not an adjective.
* `bok`: dictionary lemma `bok`, learner-facing `en bok` and verified-targeted selected inflections *boken/böcker/böckerna*.
* `hus`: dictionary lemma `hus`, learner-facing `ett hus`, inflections *huset/hus/husen*.
* Common function-word forms such as *något*, *några*, *bättre* and *bäst* are retained as pedagogically important recognisable forms with explanatory notes, even when morphologically related to other headwords. These exceptions may warrant consolidation as the curriculum evolves.

## 7. Outstanding QA flags

The following flags are machine-counted; multiple flags may apply to one word. Blank grammatical forms are *not* represented as verified negatives.

| QA flag | Rows | Action |
| --- | ---: | --- |
| `noun_inflection_not_enriched` | 774 | Dictionary-check irregular forms or leave UI empty. |
| `verb_inflection_not_enriched` | 268 | Review before displaying verb paradigms. |
| `adjective_inflection_not_enriched` | 109 | Review before displaying adjective paradigms. |
| `not_in_kelly` | 71 | Supplemental learner-selected item; no source Kelly metrics. |
| `mass_noun_article_suppressed_in_display` | 37 | Editorial review |
| `added_gender_dictionary_review` | 36 | Verify against authoritative Swedish dictionary. |
| `synthetic_kelly_frequency_do_not_rank` | 25 | Do not interpret original WPM as a measurement. |
| `noun_gender_needs_dictionary_check` | 20 | Resolve article/usage if applicable. |
| `multiword_lexical_item` | 9 | Keep as a fixed lexical study unit where justified. |
| `plural_only_or_mostly_plural` | 4 | Do not prepend singular en/ett. |
| `regional_or_gender_usage_review` | 1 | Check sense-specific/regional grammar. |

## 8. Example-sentence QA

- **2,000 / 2,000 Swedish examples** and **2,000 / 2,000 English translations** are populated.
- Every Swedish example is an individually AI-authored contextual sentence. Original Kelly or Swedish Academy example sentences were **not reproduced**.
- No duplicate Swedish or duplicate English example text remains after a second example-editing pass.
- Examples have been visually sampled across tiers and all of the first 100 words were read with their corresponding English glosses; this is **AI editorial inspection, not native-speaker certification**.
- Syntactic, idiomatic and word-sense accuracy still need a native Swedish-language editorial QA pass, especially function words, dialect-sensitive meanings and the 71 added items.

## 9. First 50 Vokri ranks — inspection sample

| Rank | Display expression | English | POS | Original Kelly ID |
| ---: | --- | --- | --- | ---: |
| 1 | jag | I | pronoun | 102 |
| 2 | du | you (singular) | pronoun | 134 |
| 3 | han | he | pronoun | 120 |
| 4 | hon | she | pronoun | 171 |
| 5 | vi | we | pronoun | 112 |
| 6 | ni | you (plural; polite singular) | pronoun | 233 |
| 7 | de | they; those | pronoun | 121 |
| 8 | dem | them | pronoun | 168 |
| 9 | den | it; that (common gender) | determiner | 107 |
| 10 | det | it; that (neuter) | pronoun | 92 |
| 11 | en | a; one (common gender) | determiner | 93 |
| 12 | ett | a; one (neuter) | determiner | 108 |
| 13 | mig | me | pronoun | 158 |
| 14 | dig | you (object) | pronoun | 248 |
| 15 | min | my (common gender) | pronoun | 155 |
| 16 | din | your (common gender) | pronoun | 217 |
| 17 | sin | his; her; their (reflexive possessive) | pronoun | 125 |
| 18 | man | one; people (impersonal) | pronoun | 114 |
| 19 | vem | who | pronoun | 446 |
| 20 | vad | what | pronoun | 147 |
| 21 | var | where | adverb | 1034 |
| 22 | varför | why | adverb | 277 |
| 23 | hur | how | adverb | 157 |
| 24 | när | when | adverb | 138 |
| 25 | och | and | conjunction | 87 |
| 26 | eller | or | conjunction | 126 |
| 27 | men | but | conjunction | 113 |
| 28 | att | that; to (infinitive marker) | conjunction | 99 |
| 29 | som | who; which; that | conjunction | 118 |
| 30 | inte | not | adverb | 103 |
| 31 | ja | yes | interjection | 350 |
| 32 | nej | no | interjection | 456 |
| 33 | hej | hello; hi | interjection | 1162 |
| 34 | tack | thanks; thank you | interjection | 903 |
| 35 | ursäkta | excuse; apologise | verb | 3484 |
| 36 | förlåt | sorry; forgive me | interjection | 7196 |
| 37 | vara | to be | verb | 88 |
| 38 | ha | to have | verb | 90 |
| 39 | göra | to do; make | verb | 131 |
| 40 | säga | to say | verb | 145 |
| 41 | gå | to go; walk | verb | 144 |
| 42 | komma | to come | verb | 123 |
| 43 | få | to get; receive; be allowed to | verb | 116 |
| 44 | kunna | to be able to; can | verb | 100 |
| 45 | vilja | to want | verb | 129 |
| 46 | måste | must; have to | verb | 140 |
| 47 | behöva | to need | verb | 204 |
| 48 | veta | to know (a fact) | verb | 201 |
| 49 | tycka | to think; have an opinion; like (tycka om) | verb | 199 |
| 50 | tro | to believe; think | verb | 197 |

## 10. Follow-up editorial review priorities

1. **Before public production:** native Swedish review of all Core 500 translations, example sentences, article and colloquial usage, then a structured sampled review of the remaining tiers.
2. **Before testing inflection skills:** verify every displayed noun, verb and adjective form against Svenska Akademiens ordlista or another licensed, authoritative morphology lexicon. Treat absent paradigms as unknown, not regular by default.
3. **Before teaching Finland-Swedish variants:** confirm regional vocabulary, pronunciation and alternative written forms with a Finland-Swedish specialist.
4. **Before importing to a spaced-repetition database:** freeze the `word_id` identifiers for released entries. If lemma or POS is edited later, create explicit identifier migration rules.
5. **Before public redistribution:** confirm the CC BY 4.0 attribution obligation for the exact Kelly XML version, and review any other content licences.

## 11. Production readiness decision

**PASS:** CSV structure, unique lexical IDs, tier segmentation, source traceability, English gloss, Swedish/English examples, conservative article handling, and multiple genuinely distinct learning topics.

**CONDITIONAL:** The dataset is suitable as a *provisional Vokri Cards vocabulary backbone* and for engineering integration, internal preview and content editing. It is **not yet independently language-editor-approved for public production**, and the majority of optional morphology paradigms remain deliberately unfilled. Do not claim the 2,000 words are a validated 80%-coverage Swedish conversation corpus.

---

Sources: [Official Swedish Kelly List](https://www.sprakbanken.se/en/resources/kelly) (source XML CC BY 4.0); [Gothenburg Dialogue Corpus](https://www.sprakbanken.se/en/resources/gdc) (research reference only, not bulk processed); [Svenska Akademiens ordböcker](https://svenska.se/) (editorial reference for future verification).
