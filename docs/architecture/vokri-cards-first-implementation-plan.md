# Vokri Cards first

Vokri Cards is Vokri’s first application. Learners choose Finnish or Swedish, with English interface copy throughout. Full Vokri will later use the same language and content infrastructure for structured courses. This roadmap governs Cards implementation. Historical full-course rules continue to govern the Finnish curriculum. The [multilingual addendum](../handoff/vokri-cards/vokri-cards-multilingual-implementation-addendum.md) records the current design references.

## Working foundation

One iOS/Android Expo application uses Expo Router, React Native and strict TypeScript. The UI uses Nordic Editorial tokens and locally bundled Newsreader and Inter. A small React provider exposes a pure TypeScript preference store to both the app and its tests. The native composition root supplies AsyncStorage. Zod validates the versioned record. Jest Expo runs domain and navigation tests together. The installed versions and commands live in the [root README](../../README.md).

Cards owns Today, Discover, My Words, its navigation, curated decks, collection-based study and self-rated Flashcards. Shared code owns language definitions, vocabulary references, validated content, language-specific adapters, catalogue access, preference storage and reusable UI controls. Learning now shares directional evidence, resumable session persistence and the deterministic review engine. Personal words, phrases and sentences resolve through the same learning store as curated items. Language-scoped personal collections reference those items and feed the existing Learn New engine. Full Vokri owns course navigation, authored lessons, grammar instruction, exercise evaluation, unit completion, progression, capability assessment and optional practice.

| Expected PR | Deliverable and dependency |
| --- | --- |
| 15 | Runnable offline preference and navigation foundation for both languages |
| 16 | Shared vocabulary ingestion, stable IDs and editorial metadata on the foundation |
| 17 | [Bilingual Discover, six curated decks, search, topic/tier filters and vocabulary details](vokri-cards-discover.md) |
| 18 | Explicit enrolment, Learn New, persistent directional evidence and resumable flashcards |
| 19 | [Private alpha with scheduled Review, live Today and SQLite v2 recovery](../handoff/vokri-cards/vokri-cards-data-and-review-contract.md#daily-review-and-today--pr-19) |
| 20 | [My Words, personal capture and SQLite v3 content revisions](../handoff/vokri-cards/vokri-cards-data-and-review-contract.md#personal-vocabulary--pr-20) |
| 21 | [Personal collections, explicit enrolment and collection-scoped Learn New](../handoff/vokri-cards/vokri-cards-data-and-review-contract.md#personal-collections) |
| 22A–22B | Language-scoped JSON vocabulary export and import |
| 22C | [Full local bilingual backup and recoverable replacement restoration](../handoff/vokri-cards/full-local-backup.md) |
| 23 | [V1 candidate polish, accessibility findings and cross-feature QA](../handoff/vokri-cards/v1-candidate-qa.md) |
| 24 | Native beta readiness, release content clearance and distribution preparation |

## Durable lexical identity

Use a pair of `languageId` and opaque `wordId` for all future content references. Catalogue order, translation, deck membership and learner-facing expression can change independently. Memberships point to the same item from every deck, collection and future course. Personal entries have stable IDs in the reserved `personal:` namespace.

Swedish imports must copy the source `word_id` exactly, for example `sv-jag-f0c08efd`. Finnish lacks this column. The shared engine uses a version-controlled assignment table with NFC lemma, source part of speech and an explicit stable sense discriminator for ambiguous entries. The original assignments reserve authored unit references first. For example, the Unit 1 mapping is `minä → vocab.mina`, and Units 2 and 7 agree on `ystävä → vocab.ystava`. Flag conflicting references for editorial resolution and preserve aliases to previously shipped IDs.

For new Finnish entries, propose `vocab.<NFC lowercase lemma>` and reserve it against all existing assignments. Require an explicit permanent POS/sense suffix for a collision. Fail the import on a duplicate assignment, unresolved homograph, ambiguous alias or unrecognized change to an assigned source key. Check the mapping into source control and require explicit mapping edits for corrected spellings or reclassified senses. Reordering and rerunning the importer must produce identical IDs. Accent folding would merge real pairs including `vaara/väärä` and `pelata/pelätä`. [Vocabulary engine and identity workflow](vocabulary-engine.md)

## Language and editorial contracts

Both immutable source CSVs contain 2,000 curated entries. They share engineering infrastructure while retaining distinct source schemas and provenance. The adapters expose a common reference, meaning, topic, tier and examples, with language-specific presentation.

- Finnish `haluta`, authored `haluan` and spoken recognition form `haluun` can belong to the same item. Case notes and approved forms belong in Finnish overlays.
- Swedish `bok` can display as `en bok`. Reverse recall should expect the approved learner-facing expression. Preserve bare mass nouns and plural-only expressions, and show inflections only when the source supplies an approved form.
- Track availability, structural validity, internal preview eligibility and public teaching approval separately. Preserve original fields, Swedish Kelly IDs and QA flags. Require linguistic review of glosses, examples and applicable forms before public teaching. The 2,000-entry counts establish catalogue size. Learner proficiency and conversational coverage require independent evidence.
- Retain the Finnish attribution to Daniel Radice and the Yle/Kotus-derived frequency source. Credit Elena Volodina, Sofie Johansson Kokkinakis and Språkbanken Text for the Swedish Kelly List. Both source READMEs describe CC BY 4.0 for the specific upstream material. Review the exact redistribution terms and downstream contributions before release. [Finnish source notes](../curriculum/vocabulary/README.md) · [Swedish source notes](../curriculum/vocabulary/swedish_2000_curated_README.md) · [Swedish QA](../curriculum/vocabulary/swedish_2000_curated_QA.md)

## Learning evidence and local data

Keep catalogue availability, saved membership, collection membership, enrolment, encounter, rating, due status, becoming familiar and familiar distinguishable. Use one deterministic scheduling engine with product-specific event eligibility. In Cards a first-pass Again, Almost or Knew It commits an official recall event. Same-session revisits cannot duplicate spaced successes. Full Vokri optional practice retains the course’s formal assessment rules.

A mixed session resolves each card to learning-language-to-English or English-to-learning-language before presentation. Preserve recognition and production evidence separately under the same item identity. Each direction has its own schedule. Today counts distinct due words. The versioned SQLite evidence and session contract is documented in the [review contract](../handoff/vokri-cards/vokri-cards-data-and-review-contract.md).

Appearance and active language are global preferences. Enrolment, history, schedules and unfinished sessions are scoped by language. Checkpoint ongoing study before switching and restore it when the learner returns. Known Finnish-only legacy data may be migrated to Finnish when an actual historical format exists. Require explicit language provenance.

SQLite v4 preserves collection origins on frozen sessions and keeps membership independent of learning evidence. Settings provides single-language JSON vocabulary portability in milestone 22B. Learners preview the file, resolve conflicts and explicitly confirm additions. [Interchange implementation](../handoff/vokri-cards/vocabulary-interchange-integration.md)

Milestone 22C adds a full local backup for both languages and their preferences. The root checks a durable restoration journal before opening learner data. [Backup format and recovery contract](../handoff/vokri-cards/full-local-backup.md) · [Native QA](../handoff/vokri-cards/backup-qa.md)
