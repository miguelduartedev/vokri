# Discover in Vokri Cards

Discover gives learners access to the complete local catalogue in their chosen language. Today opens the same Discover tab as the tab bar. Settings remains a separate destination. The app uses the shared Nordic Editorial theme and preference provider for both languages.

## Collections and topics

| Deck ID | Title | Words | Selection |
| --- | --- | ---: | --- |
| `fi.essentials` | Finnish Essentials | 24 | Starts with hei, kiitos and minä, then introduces questions, everyday needs and places. |
| `sv.essentials` | Swedish Essentials | 24 | Starts with en bok, ett hus and äta, then greetings, pronouns, questions and practical needs. |
| `fi.everyday-verbs` | Everyday Verbs | 16 | Starts with herätä, puhua and syödä. Continues with movement, transactions, reading and sleep. |
| `sv.everyday-verbs` | Everyday Verbs | 16 | Everyday actions including eating, drinking, travelling, reading, working and paying. |
| `fi.food-drink` | Food & Drink | 16 | Drinks, staples and ingredients, beginning with kahvi, maito and vesi. |
| `sv.food-drink` | Food & Drink | 16 | Drinks and common foods, including kaffe, mjölk, vatten, juice, bröd and ost. |

Each definition stores a language, stable deck ID, title, description and ordered word IDs. The deck API exposes these as immutable language-scoped vocabulary references. A word can appear in several decks. The list renders the same canonical item in each. Selection uses the actual ranked source entries and the illustrated starting examples. The five-item samples in Figma informed the starting rows. CI checks every membership, ID, count and verb classification. [Memberships](../../src/content/decks.json) · [Shared deck API](../../src/domain/vocabulary/decks.ts)

Topic groups follow the source classifications independently of deck curation. Finnish vesi belongs to the Food & Drink deck and the source topic Other. Topic browsing offers the 25 Finnish or 26 Swedish topics present in the selected catalogue.

## Search, filters and navigation

The landing search and All Vocabulary use the same registry and virtualized list. Blank catalogue browsing follows pedagogical rank and deck browsing follows the manifest order. For search, trim and lowercase the NFC query and compare it with a precomputed index for one language. The ordered matches are:

1. Exact lemma or display expression.
2. Exact English meaning or semicolon-separated gloss.
3. Prefix of lemma or display expression.
4. Prefix of an English word.
5. Other substrings of lemma, display expression or English meaning.

Each result appears once. Ties retain pedagogical rank. Diacritics remain significant. Topic and tier intersect with the query. Topic counts reflect the current tier and tier choices reflect the selected topic. The displayed result count includes all three constraints. Clear search keeps filters and clear filters keeps the query. Search and filters run locally. [Vocabulary engine](vocabulary-engine.md)

The Discover stack holds landing, catalogue, deck and word routes under the existing tab. Deck and word routes carry the active language and stable ID. Back returns to the originating screen with its query, filters and list position. Language changes reset the browsing view and stale language-specific links return to Discover. Unknown IDs have a recovery action. All transient browsing state lives in memory.

## Vocabulary detail and study handoff

Shared row and detail components receive vocabulary items and callbacks. Cards supplies routing. Rows show the supplied display expression, gloss and part of speech. Details show the bilingual example, spoken forms and usage notes when supplied. Swedish noun gender, definite singular, plural forms, verb present, preterite, supine, adjective neuter and plural each render independently when present. Mass and plural-only words retain their original display expression. Finnish forms come directly from the canonical source. [Reusable presentation](../../src/ui/vocabulary.tsx)

The catalogue supports internal preview. Glosses and examples still await linguistic review. Review flags and provenance remain available on the canonical items. Public teaching should require approval of the entry and its displayed learning material before release. Examples, source IDs, Kelly frequencies and technical review data have distinct roles in the schema. [Source and editorial audit](vocabulary-engine-validation.md)

Decks and word details expose browsing actions. Word details and curated decks support explicit enrolment and Learn New using the same references. [Learner-state contract](../handoff/vokri-cards/vokri-cards-data-and-review-contract.md#implemented-learn-new-contract--pr-18) Opening a collection or viewing a word creates no review events or learner history. [Native QA](../handoff/vokri-cards/discover-qa.md)
