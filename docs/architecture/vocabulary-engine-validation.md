# Vocabulary engine validation · 24 November 2026

## Source audit

| Measurement | Finnish | Swedish |
| --- | ---: | ---: |
| Source columns | 12 | 28 |
| Source bytes | 242,772 | 430,240 |
| Source records / generated items | 2,000 / 2,000 | 2,000 / 2,000 |
| Distinct NFC lemmas / canonical word IDs | 2,000 / 2,000 | 2,000 / 2,000 |
| Core / Everyday / Independent / Extended | 500 / 500 / 500 / 500 | 500 / 500 / 500 / 500 |
| Topics | 25 | 26 |
| Generated UTF-8 JSON bytes | 984,538 | 1,279,374 |

Both inputs use UTF-8 with BOM. Finnish uses CRLF and Swedish uses LF. All 4,000 rows have continuous, unique within-language ranks from 1 through 2,000. All source text cells currently use NFC. The source CSVs and authored units match the foundation commit. The 981-byte manifest records source, generated and mapping SHA-256 digests. Two successive generations produced identical bytes for all three assets. [Manifest](../../src/content/vocabulary/generated/manifest.json) · [Column mapping](vocabulary-engine.md#source-columns-and-normalized-fields)

## Identity coverage

- All 2,000 Finnish lexical keys have exactly one frozen assignment. The eight complete authored specifications contain 26, 24, 22, 21, 24, 28, 26 and 28 inventory rows. All 199 declarations resolve to the correct source items. The three repeated targets are `nyt` and `ehkä` (Unit 1 support to Unit 3 production) and `ystävä` (Unit 2 recognition to Unit 7 production). That leaves 196 canonical targets. Unit 6’s inventory uses its stated ASCII convention.
- A separate scan checked all 198 distinct explicit `vocab.*` spellings in those eight documents. The Unit 2 lesson 2.3 reuse paragraph spells `vocab.minä` and `vocab.hän` differently from the formal `vocab.mina` and `vocab.han`. Only the Finnish curriculum resolver accepts those two alternate spellings. All declared targets exist in the source. Illustrative architecture snippets, grammar, phrases, inflected lesson forms and prose outside the eight specifications fall outside this lexical inventory.
- Search and identity preserve all four Finnish accent-fold collision pairs in this edition, including `pelata/pelätä`, `vaara/väärä`, `tähti/tahti` and `valittaa/välittää`. Composed and decomposed search text resolve consistently.
- All 2,000 Swedish source `word_id` strings survived exact comparison. Tests reconstructed all 12 Finnish and 28 Swedish lexical source columns from the generated items and compared the resulting 80,000 cell values with the input. The Finnish display form also matched the source lemma throughout.

## Field completeness and editorial limits

Counts give the number of source rows supplying a value. Optional cells become absent properties. All 4,000 rows supplied a gloss, topic, POS, score and both example languages.

| Optional source fields | Finnish | Swedish |
| --- | ---: | ---: |
| Spoken forms | 39 | 18 |
| Notes | 27 | 44 |
| Original Finnish frequency rank | 1,689 | — |
| Noun gender | — | 950 of 974 nouns (702 en, 248 ett) |
| Definite singular / indefinite plural / definite plural | — | 200 / 200 / 200 |
| Verb present / preterite / supine | — | 137 / 137 / 137 |
| Adjective neuter / plural | — | 141 / 141 |
| Original Kelly ID / frequency / CEFR | — | 1,929 / 1,929 / 1,929 |
| At least one source QA flag | — | 1,222 |

Swedish retains 1,929 Kelly matches and 71 curated additions. Twenty-five retained records carry the synthetic `1000000,00` WPM marker. The adapter keeps these flagged and preserves the original strings. It also preserves the different presentations of `en bok`, `ett hus`, the mass noun `vatten` and the plural-only `pengar` and `glasögon`.

Source flags include 774 nouns, 268 verbs and 109 adjectives without inflection enrichment, 71 additions outside Kelly, 37 suppressed mass-noun articles, 36 added genders awaiting dictionary review, 25 synthetic frequency markers, 20 genders requiring a dictionary check, nine multiword items, four plural or mostly plural items and one regional/gender review. A row can carry multiple flags.

The corpus-derived inputs and editorial annotations have distinct provenance. Both language catalogues are available for internal integration. Independent review of translations, examples, gender, optional forms and public redistribution remains outstanding. CEFR labels are Kelly source annotations. [Finnish curation notes](../curriculum/vocabulary/README.md) · [Swedish dataset and attribution](../curriculum/vocabulary/swedish_2000_curated_README.md) · [Swedish QA](../curriculum/vocabulary/swedish_2000_curated_QA.md)

## Part of speech and topic distributions

| Part of speech | Finnish | Swedish |
| --- | ---: | ---: |
| adjective | 215 | 250 |
| adverb | 204 | 191 |
| conjunction | 17 | 25 |
| determiner | 0 | 5 |
| interjection | 0 | 10 |
| noun | 958 | 974 |
| numeral | 32 | 25 |
| other | 1 | 0 |
| participle | 0 | 1 |
| particle | 8 | 15 |
| postposition | 37 | 0 |
| preposition | 5 | 49 |
| pronoun | 29 | 50 |
| verb | 494 | 405 |

| Topic | Finnish | Swedish |
| --- | ---: | ---: |
| Actions | 378 | 343 |
| Basics | 245 | 320 |
| Body | 77 | 39 |
| Communication | 37 | 51 |
| Descriptions | 160 | 222 |
| Feelings | 16 | 30 |
| Food & Drink | 57 | 77 |
| Health | 53 | 42 |
| Home | 62 | 81 |
| Leisure | 30 | 45 |
| Money | 38 | 26 |
| Nature | 14 | 31 |
| Numbers | 62 | 47 |
| Opinions | 0 | 54 |
| Other | 417 | 105 |
| People | 9 | 33 |
| Relationships | 44 | 35 |
| School | 28 | 48 |
| Shopping | 27 | 40 |
| Society | 20 | 68 |
| Technology | 47 | 62 |
| Time | 48 | 74 |
| Transport | 53 | 46 |
| Travel | 20 | 20 |
| Weather | 20 | 16 |
| Work | 38 | 45 |

## Engineering and native verification

- A clean `npm ci` installed the lockfile. TypeScript, Expo lint, vocabulary validation, generation and the non-writing byte check passed. Automated coverage rose from **21 to 41 passing tests** (21 existing foundation tests, seven new Jest Expo registry tests and 13 Node pipeline tests). An isolated CLI fixture verified failed validation for malformed source, stale/missing/extra assets and preservation of the last good output. History tests rejected removed IDs and undocumented key substitutions.
- Expo resolved both native platforms and reported compatible dependency versions. Expo Doctor passed 20/20. The application exported Android and iOS Hermes bundles. A temporary Metro entry point importing the actual registry also exported for both native platforms. The fixture stays outside the product and the normal app loads its existing routes.
- On an ARM64 Android 14/API 34 emulator using Expo Go 58.0.6, fresh Finnish and Swedish onboarding reached their respective Today screens. Today’s action opened Discover, My Words opened from the tab bar, and the Settings switch changed the language to Finnish. Screenshots showed the expected selection, tab and appearance states.
- After Swedish onboarding, Android reported a cold launch in a new process (8715 → 9180) and opened Swedish Today. After selecting Dark while Android remained Light, a second cold launch (9180 → 9822) opened dark Swedish Today. Settings displayed both `Swedish · Svenska` and `Dark`. Both checks force-stopped Expo Go, confirmed the process was absent and relaunched the same project without clearing its data.
- The temporary verification entry point loaded under Hermes. Before the first lookups, device Wi-Fi and mobile data were disabled and both Metro port forwards removed. The UI then reported 2,000 items in each language, `minä`, `en bok` and `böckerna`. Uppercase article search and decomposed Finnish search returned the expected references. Wrong-language lookup returned no item. This verifies offline lookup in a running native process. Device execution was Android only. iOS evidence is a production bundle export.
- GitHub Actions runs the vocabulary check against the base revision and retains the clean install, TypeScript, lint, tests, Expo configuration, dependency and two-platform export steps. [PR checks](https://github.com/miguelduartedev/vokri/pull/16/checks)
