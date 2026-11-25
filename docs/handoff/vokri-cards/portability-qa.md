# Vocabulary portability QA

Verified milestone 22B against merged main `20a77c67dea97f0e2cdc6a44f206b7873d3c19c7`. The baseline had 115 Jest and 14 vocabulary pipeline tests. The implementation passes 127 Jest and 14 pipeline tests, strict TypeScript, Expo lint, catalogue validation and byte-for-byte regeneration for both languages. Expo’s dependency check passed, Expo Doctor passed 20/20 checks, and Metro produced Android and iOS production bundles.

## Android round trip

Pixel 7 emulator, Android API 34, Expo Go 58.0.6, SDK 58 and Hermes. Two disposable SQLite v4 databases represented the source and receiving installations. The QA checkout used the production store to seed them. The only injected failure was a SQLite trigger targeting a QA-only collection ID. The application routes, file handling and transaction code were exercised through the native UI.

| Journey | Observed result |
| --- | --- |
| Export and share | Saved Finnish and Swedish files using Android Documents. The Android share sheet displayed the Finnish JSON filename. Inspected both actual UTF-8 files. Each carried one word, one phrase, one whole sentence, three collections including an empty one, and five memberships including a curated reference. The same personal ID appeared in two memberships. Both files preserved accented text and optional forms and notes. |
| Source re-import | Confirming the Finnish source file added zero entries, collections or edges. |
| Transfer into another inventory | Both imported languages encountered a personal ID collision and a normalized collection-name collision. Keeping both personal entries and reusing the local collection added three entries, two collections and five edges per language. Each shared entry received one fresh ID across both memberships. |
| Language and offline use | Selected a Swedish file with Finnish active. Cancel returned to Settings. Explicitly previewing into Swedish and confirming imported into Swedish while Finnish stayed active. Swedish folder-save and both destination imports ran with Wi-Fi and mobile data disabled and the Metro reverse port removed. |
| Repeated remapped import | A fresh decision was required for the Finnish conflict. Selecting the previously imported copy and the existing collection reused three entries and three collections, with zero new edges or copies. |
| Group confirmation | Skipped one similar entry, confirmed keeping the other two separately, and then explicitly reused a prior copy for an outstanding identity conflict. The completion screen reported two added, one reused and one skipped. SQLite contained precisely the two chosen new identities. |
| Invalid input and unavailable references | Malformed JSON returned a validation error. The Android picker rejected a 4,201,805-byte UTF-8 file before preview. A missing curated ID required acceptance of the skipped edge. The remaining valid entry, collection and edge committed. |
| Forced late failure | A trigger aborted the membership insert after the entry and collection inserts. The preview remained available. Subsequent database inspection found none of the three attempted records. |
| Recovery and learning state | Force-stopped Expo Go, verified the process had exited and relaunched. Both imported inventories persisted. Compared complete rows before and after the round trips for two enrolments, two ratings, four directional schedules, two sessions and four frozen occurrences. All matched, including timestamps. Imported entries remained unenrolled. |

A native read test caught an Android Expo Go permission failure with the document picker’s cache copy. Reading the granted document URI in read-only mode fixed the issue. The file-backed tests also inject a late failure, retry the same preview, close and reopen the database, exercise stale snapshots, and check group decisions independently of identity and collection conflicts.

## Visual comparison

Compared the captured screens with Settings, Export, Import Preview and Conflict Resolution in the editable Figma file. The app uses the editorial heading, bordered content panels, pine actions and a highlighted existing match. Android adds separate folder-save and share actions. Real file counts and multi-candidate comparisons can require scrolling. The floating gear in captures belongs to Expo Go. Native iOS interaction was unavailable on this host (`simctl` absent). [Settings design](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=455-4292) · [Export](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=436-3826) · [Preview](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=436-3950) · [Conflict resolution](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=436-4000)

[Export](screenshots/portability/export.png) · [Native share sheet](screenshots/portability/share.png) · [Preview](screenshots/portability/preview.png) · [Conflict comparison](screenshots/portability/conflict.png) · [Group decision result](screenshots/portability/group-result.png) · [Repeat-import result](screenshots/portability/repeat.png) · [Dark appearance](screenshots/portability/dark.png)
