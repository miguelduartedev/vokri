# My Words portable JSON v1

One UTF-8 JSON file carries one language’s authored vocabulary and collection memberships. An installation can reconstruct an empty collection, a whole sentence, its note, and every collection containing that sentence. A curated membership carries only its reference. Enrolments, schedules, ratings, familiarity, sessions, frozen prompts, content revisions, archives, preferences and SQLite metadata stay on the originating device.

## File contract

| Object | Required fields | Optional fields |
| --- | --- | --- |
| Envelope | `format` = `vokri-cards-my-words`, numeric `version` = 1, `learningLanguage` = `fi` or `sv`, `exportedAt`, arrays `personalEntries`, `collections`, `memberships` | None |
| Personal entry | `languageId`, `wordId`, `type` (`Word`, `Phrase`, `Sentence`), `displayForm` (the whole expression), `english` | `lemma` (dictionary form), `context` (example/context), `forms`, `note`, `createdAt`, `updatedAt` |
| Collection | `languageId`, `collectionId`, `name` | `description`, `createdAt`, `updatedAt` |
| Membership | `languageId`, `collectionId`, `kind` (`curated` or `personal`), `wordId` | None |

Each record repeats the envelope language so that a misplaced reference is detectable. Expressions, English meanings and collection names must contain non-whitespace text. Optional text fields accept strings, including empty strings. Omission means the field was not supplied. All timestamps are ISO 8601 UTC strings ending in `Z`. Capture and modification times convey provenance. They do not determine which translation wins.

Personal IDs follow the existing `personal:` prefix plus 32 lowercase hexadecimal digits. Collection IDs are stable opaque strings independent of display names. Collection and curated ID tokens begin with a Unicode letter or number and may additionally contain combining marks, underscores, periods, hyphens or colons. The personal namespace is reserved. All ID comparisons are exact. The same word can belong to several collections through distinct membership records. Every personal entry and every collection appears once, including entries with no memberships.

### Finnish example

```json
{
  "format": "vokri-cards-my-words",
  "version": 1,
  "learningLanguage": "fi",
  "exportedAt": "2026-11-25T12:00:00.000Z",
  "personalEntries": [
    {"languageId":"fi","wordId":"personal:ab000000000000000000000000000001","type":"Sentence","displayForm":"Tänään sataa lunta.","english":"It’s snowing today.","note":"From class"}
  ],
  "collections": [{"languageId":"fi","collectionId":"course-4","name":"Luku 4"}],
  "memberships": [
    {"languageId":"fi","collectionId":"course-4","kind":"personal","wordId":"personal:ab000000000000000000000000000001"},
    {"languageId":"fi","collectionId":"course-4","kind":"curated","wordId":"vocab.olla"}
  ]
}
```

### Swedish example

```json
{
  "format": "vokri-cards-my-words",
  "version": 1,
  "learningLanguage": "sv",
  "exportedAt": "2026-11-25T12:00:00.000Z",
  "personalEntries": [
    {"languageId":"sv","wordId":"personal:cd000000000000000000000000000002","type":"Word","displayForm":"en nyckel","english":"a key","lemma":"nyckel","forms":"nyckeln"}
  ],
  "collections": [],
  "memberships": []
}
```

## Writing and reading

Pass a logical inventory and an explicit UTC export instant to `serializeVocabulary`. It projects an allowlist of fields, removes archived personal entries and their edges, validates the relationships and returns two-space-indented JSON with a final newline. Entries and collections sort by ID, memberships by collection then word ID, using locale-independent JavaScript string order. Source arrays and records retain their original ordering and content. No clock, file, network, native module or database connection is required. Authored case, lexical form, accents, whitespace, line breaks, punctuation and articles survive the round trip. [Writer](../../../src/domain/interchange/export.ts)

`parseVocabulary` first checks size, JSON, format and version. It validates the strict v1 record shapes, language, uniqueness and both ends of memberships. A fatal result has `ok: false` and one error with a code, record path and message. It contains no usable document. A successful result has `ok: true`, a document and a deduplicated list of missing curated references. An ID known only to the other language is an error. A well-formed curated ID absent from both installed catalogues remains in the document for preview. Unknown fields fail validation. Producers must emit unique JSON property names. For hand-written files with repeated property names, the platform JSON decoder retains the last value before schema validation. A later incompatible shape needs its own version and reader; retain the v1 reader for existing files. The interchange version is independent of SQLite. [Reader and schema](../../../src/domain/interchange/format.ts)

Both directions enforce 4 MiB of UTF-8 JSON and 25,000 records per array. These file-wide bounds limit work before showing a preview. The writer checks its actual formatted output. An over-limit inventory produces an error without truncation. The current capture UI has no per-field limit, so v1 imposes no additional per-field cap. Revisit the file budget against real inventories before integrating export failure messaging.

## Comparison and preview

`summarizeVocabulary` counts entries, collections, memberships and four mutually exclusive entry outcomes. It checks same-language ID matches and conflicts first, then possible duplicates among supplied local entries, installed curated vocabulary and other file entries. All remaining entries count as new. With no supplied local inventory, identity counts describe an empty personal library. Add missing-reference warnings from the parse result.

`compareEntries` compares personal entries without changing their text. Same-ID text uses PR #20’s case-sensitive NFC and whitespace comparison. Authored optional details preserve internal whitespace and case when comparing, with NFC equivalence and absent/empty optional text treated alike. Timestamps do not change content identity. A changed meaning, note or type on the same ID requires a decision. An archived local ID is also a conflict. For different IDs, either expression or dictionary lemma on each side can suggest a match using PR #20’s case-insensitive search key. The result distinguishes equivalent content, different meanings, different details, and similar expressions. Accents and articles remain significant. Each independent sense keeps its own ID until the learner chooses a resolution. [Preview functions](../../../src/domain/interchange/preview.ts) · [PR #22B integration](vocabulary-interchange-integration.md)
