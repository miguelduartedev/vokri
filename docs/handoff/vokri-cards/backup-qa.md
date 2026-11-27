# Full local backup and restoration QA

Milestone 22C was verified against merged main `a337ee1590818fb6ac838e3a5f65d2fa73fad2ed`. The baseline passed 127 Jest tests and 14 vocabulary pipeline tests. The final suite passes 144 Jest tests and the same 14 pipeline tests.

## Native Android

Pixel 7 emulator, API 34, Expo Go 58.0.6, Hermes. Two disposable SQLite databases represented separate inventories. The isolated QA checkout used the production learning store to create the fixture, a private preference key and temporary failure/pause hooks at the actual journal boundaries. The app's Settings, storage, SQLite, preference and file APIs performed the operations. The test hooks and fixture data are absent from the shipped application.

| Journey | Observed result |
| --- | --- |
| Create and save | Settings captured Finnish and Swedish together. Android Documents saved a 107,106-byte file. The Android share sheet displayed its full filename. An independent reader checked the header digest, database digest, exact length, SQLite integrity and foreign keys. |
| Preview, reject and cancel | Selecting a vocabulary interchange JSON produced a format error. Selecting the valid backup displayed its real counts, dark appearance, Finnish active language and both direction preferences. Cancelling the replacement dialog returned to the preview. The distinct target inventory remained available. |
| Replace a different installation | The target initially held a single Finnish entry, `kohde`, with Swedish selected and light appearance. Restoration recovered the source's Finnish selection, dark appearance, Finnish mixed and Swedish production preferences. |
| Native failure and rollback | A one-shot exception after the incoming database copy and before preference replacement restored `kohde` and the target's original preferences. The normal application reopened. |
| Force-stop before commit | Paused execution after database replacement. Android force-stopped Expo Go, and `pidof` confirmed process exit. On cold launch the gate restored the original database and preferences first. Repeated with a later rated inventory. |
| Force-stop after commit | Paused cleanup after persisting the committed marker. Cold startup retained the incoming Finnish installation, its original one-of-two rated checkpoint and its preferences. Cleanup completed on restart. |
| Missing live database after finalization | With either a `committed` or `rolledBack` journal, startup recovery and retry left the live file absent and preserved the journal and recovery snapshot. After the disposable live database was restored, verification and cleanup succeeded in both cases. |
| Disconnected round trip | Disabled Wi-Fi and mobile data and removed the Metro reverse port after loading the app. Created and saved a new backup, selected the original through Documents, confirmed replacement and resumed the revealed Finnish production card. Recording **Knew It** showed the next review deadline. Reconnected Metro solely to launch the development bundle after force-stop. The same acknowledged rating and deadline appeared after restart. |
| Swedish recovery | Switching to Swedish showed its undismissed two-card collection summary. The Finnish session retained its independent checkpoint. |

The source and restored Android exports matched across **all 58 rows**, including row IDs and every column. The comparison covered six personal entries (two archived), four collections, twelve memberships, six enrolments, seven ratings, seven directional schedules, twelve frozen occurrences and four sessions. The preference values also matched. The fixture included a material edit with historical text, pending exposures, weak and successful recall, a finite revisit queue and an unenrolled entry in each language. A native test exposed double-decoding of Expo Go's scoped directory name. Passing the encoded directory URI to SQLite preserved the correct file path.

## File-backed and release checks

The tests use real on-disk SQLite, online backups, WAL and bounded file handles. They cover empty-install replacement, repeat restoration, queued preference writes, strict staging, exact logical copy comparison, storage preflight, failures while preserving and replacing, failed preference writes and failed database reopening. Rollback checks distinguish an absent preference key from a verbatim stored default. Additional tests exercise repeated failed rollback, lost commit acknowledgement, cleanup failure after commit and preservation of subsequent study data. A router test checks that recovery blocks the providers and that confirmation remounts them with restored preferences.

Strict TypeScript, ESLint, vocabulary validation, reproducibility and Android and iOS production exports passed locally. Expo Doctor passed 20/20 checks during initial milestone verification. On the recovery-fix rerun it passed 19/20. The online dependency check now recommends Expo 58.1.0 and six companion package updates for the existing lockfile. Native iOS restoration and system file interaction remain unverified on this host, which lacks `simctl`.

## Design and screenshots

The Settings data-management handoff supplies the typography, row hierarchy, surfaces and spacing. Full-backup preview, replacement confirmation and recovery states extend those patterns. Android uses a system folder picker and a native destructive confirmation. The floating gear in some screenshots is an Expo Go control. [Editable Settings design](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=455-4292)

[Settings actions](screenshots/backup/settings.png) · [Create](screenshots/backup/create.png) · [Restore preview](screenshots/backup/preview.png) · [Confirmation](screenshots/backup/confirmation.png) · [Success](screenshots/backup/success.png) · [Cold-start rollback](screenshots/backup/rollback.png) · [Restored card after relaunch](screenshots/backup/rating.png)

[Full-backup format and recovery contract](full-local-backup.md)
