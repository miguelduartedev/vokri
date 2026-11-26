# Native vocabulary portability

Settings imports and exports Finnish or Swedish personal vocabulary and collection memberships. A file carries one language and uses the existing version 1 contract. Learning progress and preferences stay on the device. [Format, limits and examples](vocabulary-interchange-v1.md)

## Export

Opening Export captures active personal entries, collections (including empty ones) and membership IDs inside one SQLite v4 read transaction for the active language. The entry-type counts, dated filename and bytes sent to the destination come from that same snapshot. The v1 writer selects portable fields and enforces its limits before any destination is opened. Change the learning language in Settings to export another inventory.

Android’s folder picker grants a writable directory and the document provider creates a new JSON file. The save confirmation follows the completed write. The native share sheet on either platform receives a file in its own cache directory. Dismissing the sheet returns to Export. The OS does not provide proof the recipient saved it. Shares older than one day are eligible for cleanup on the next share. [Expo FileSystem](https://docs.expo.dev/versions/v58.0.0/sdk/filesystem/) · [Expo Sharing](https://docs.expo.dev/versions/v58.0.0/sdk/sharing/)

## Preview

The system document picker accepts files regardless of their extension. Android reads the granted document URI directly. iOS requests a readable cache copy. The adapter checks available byte lengths, opens a read-only handle and reads at most 4 MiB plus one sentinel byte. UTF-8 must round-trip without replacement before the existing v1 parser accepts the document. A mismatch with the active learning language requires confirmation to preview into the file’s language. The preference stays as selected. Preview and cancellation have no database side effects. [Expo DocumentPicker](https://docs.expo.dev/versions/v58.0.0/sdk/document-picker/) · [Native adapter](../../../src/cards/portability-files.ts)

## Decisions and commit

- Matching personal IDs with equivalent authored content reuse the existing row and revision. Matching collection identities and metadata accept additional memberships.
- A personal ID collision, including a foreign-language or archived reservation, requires a decision. Only active same-language content is visible. Reuse a displayed personal or curated match, keep the incoming sense separately, or skip it and its dependent memberships. Candidates use both expressions and dictionary forms.
- **Keep all separately** asks for confirmation and resolves only outstanding similarity matches. Individual decisions, identity conflicts and collection conflicts retain their own choices.
- Collection ID collisions, normalized name collisions and repeated names within a file require individual decisions. Reuse adds accepted memberships. A separate copy gets a displayed unique name. Skip also skips its edges. Local collection metadata and memberships are preserved.
- Missing curated IDs identify the affected collections. Import requires explicit acceptance of those skipped memberships or cancellation.
- Confirmation rechecks the language inventory and relevant device-wide reservations inside the store’s write transaction. A stale preview asks the learner to refresh and review again. An ordinary write failure retains the choices for retry. Subscribers receive a single notification after a successful commit.
- Each accepted source entry and collection resolves once. Unoccupied incoming identities are retained. A collision resolved as a separate copy receives a SQLite-generated random identity. Both maps are applied before deduplicating memberships. The completion totals report actual creations, reuses, new edges and skips.
- Re-importing matching identities is idempotent. When a previous separate copy has a remapped ID, matching text can suggest it for reuse. Ambiguous rows require a fresh decision. SQLite stores no import history.

The transaction writes only personal entries, collections and membership links. Learning events, revisions of reused entries, enrolment, review schedules and frozen sessions retain their previous values. Schema version 4 already supports these writes. [SQLite adapter](../../../src/learning/portability.ts) · [Verification](portability-qa.md)

Settings also offers full bilingual replacement restoration through milestone 22C. [Full local backup](full-local-backup.md)
