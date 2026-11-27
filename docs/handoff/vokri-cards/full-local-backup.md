# Full local backup · milestone 22C

Settings → Backup & Restore creates one unencrypted `.vokribackup` file for the installation. Anyone with access can read its contents, including personal notes. Restoration requires a preview and an explicit **Replace and restore** confirmation. Use the separate vocabulary JSON workflow to combine words and collections. [Vocabulary interchange](vocabulary-interchange-v1.md)

## File format v1

| Order | Bytes | Meaning |
| --- | --- | --- |
| 1 | 19 | ASCII `VOKRI-CARDS-BACKUP` followed by LF |
| 2 | 8 | Zero-padded decimal byte length of the JSON header, up to 8,192 |
| 3 | 64 | Lowercase hexadecimal SHA-256 of the exact UTF-8 header bytes |
| 4 | As declared | UTF-8 JSON object |
| 5 | `databaseBytes` | One standalone SQLite database image, followed immediately by EOF |

The header carries `format: "vokri-cards-backup"`, `version: 1`, UTC `createdAt`, `databaseVersion: 4`, `preferenceVersion: 1`, `preferences`, `catalogue.fi` and `catalogue.sv` (bundled content digests), `databaseBytes` and `databaseSha256`. A null preferences value represents an absent preference record. Supported records contain the active language, appearance and optional per-language direction choices. Checksums detect accidental damage. File provenance and confidentiality depend on the learner's storage and sharing choices.

The complete file is limited to 128 MiB. The supported compatibility combination is envelope v1, learner schema v4 and preferences v1. Other versions and unexpected header or preference fields are rejected before replacement. A future database upgrade needs a tested staged migration or an explicit new compatibility rule.

## Contents and snapshot

The eight learner tables retain all records for both languages, including archived entries, current personal revisions, collections and edges, enrolments, rating sequences, directional review schedules, pending exposures, session phases, frozen directions, historical text and revisit occurrences. SQLite row order identities are preserved. The catalogue stays in the app bundle. A changed catalogue hash or unresolved historical reference appears in the preview. An unavailable word can retain its history but needs compatible bundled content to be studied.

Source code, bundled assets, global OS data, working directories, temporary exports, attachments and file paths are outside the package. The public header describes only the learner database and durable preferences.

One operation at a time can create, stage or restore a backup. Creation suspends learner mutations and waits for previously queued preference writes. Expo SQLite's online backup captures committed pages, including changes held in WAL. Every database copy checks the known v4 schema and compares row counts, row IDs and every column against its source in SQLite while writes are suspended. Preview counts come from the captured database. Creation releases the stores before packaging the private snapshot.

SDK 58 provides asynchronous native file digests. The Android and iOS implementations increment SHA-256 over 64 KiB chunks. Packaging and unpacking use file handles and at most 256 KiB per payload read/write in JavaScript. The short header is hashed separately. Android reads the picker's granted URI and creates a new document in the selected folder. Saving verifies the destination digest after closing its handle. Sharing retains its private file for the receiver and reports no external save. iOS uses the picker's temporary cache copy and the native share sheet, which can offer Save to Files. Old export directories are cleared on later backup operations.

## Staging and data integrity

The reader checks the provider size where available, signature, version, typed preferences, declared lengths, both digests and EOF. Staging uses a fresh private directory. The installed app builds a reference schema from its own migrations in memory. Inspection disables trusted schema, uses query-only mode and compares the full set of tables, indexes, triggers and views before reading application projections. SQLite integrity checks, foreign keys, storage classes and application checks cover identities, language separation, historical snapshots, exposure before rating, session checkpoints and review state. A failed check discards the candidate. Choosing a file or cancelling the confirmation leaves the live stores intact.

Free-space checks allow space for the snapshot plus output during creation, the declared payload at selection, and the original recovery snapshot plus replacement and journal headroom during restore. Each estimate includes an additional 4 MiB margin. Space can change after the check. A failed write follows the same recovery protocol as interruption. On iOS the system picker may copy its selection before JavaScript receives its size.

## Replacement and startup

1. Unmount normal navigation and providers, block repeated actions, suspend learner writes and drain preference writes. Confirm the staged checksum again.
2. Save the original database with the native backup API in a private, persistent recovery directory. Validate, compare and hash that copy. Read the exact original preference string or absence.
3. Persist a single AsyncStorage journal record in phase `prepared`, containing the previous snapshot digest and exact original preference record. Live replacement can begin only after that write succeeds.
4. Close the application-owned SQLite connection and retire its store. Copy the verified candidate into the learner database with SQLite's transactional backup API. The native handle is closed and the restored preferences are written and read back. Reopen the database on a separate connection and verify it without running migrations or replaying learning events.
5. Persist phase **`committed`**. This durable write is the restoration commit point. Release the recovery files, then remove the journal. Fresh providers rehydrate the installation when the learner continues.

| Journal on startup | Action before normal providers open |
| --- | --- |
| Absent | Open the normal installation. An abandoned pre-replacement recovery snapshot can be discarded. |
| `prepared` | Verify and reinstall the original snapshot. Restore the exact original preference string, or remove the key if originally absent. Verify the pair and persist `rolledBack` before cleanup. |
| `committed` or `rolledBack` | Verify the finalized database and retry cleanup. Later study activity remains intact. |

Cleanup always removes the recovery directory before deleting the finalized marker. A cleanup failure leaves a retryable marker, including when part of the directory has already been removed. A finalized marker never directs the application to reinstall older data. If a journal write's acknowledgement is uncertain, recovery reads the durable phase. Failed rollback or unreadable recovery state blocks ordinary startup and retains available recovery material. Freeing storage and retrying is safe. Losing both device storage and the external backup is outside local recovery's guarantees.

[Android journeys, failure injection and screenshots](backup-qa.md)
