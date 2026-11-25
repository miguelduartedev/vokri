# Personal collections QA

## Upgrade on Android

A disposable Pixel 7 emulator (Android 14, Expo Go 58.0.6) ran the app from the PR #20 merge, `3ab1e4d`. A QA-only setup used that version's learning store to create Finnish and Swedish personal phrases, enrol curated and personal items, complete a Finnish session and leave the second Swedish card revealed. Expo Go was force-stopped before installing the updated JavaScript bundle over the same SQLite file.

The v3 → v4 migration preserved all four enrolments, two personal entries, two session headers, four frozen cards, three ratings and seven directional schedule rows. The before/after comparison included every column in those tables and all five evidence and exposure views. SQLite reported zero foreign-key violations. The Finnish summary and the revealed Swedish card both reopened in the app. File-backed tests separately exercised rollback, retry, repeated initialization, the origin constraint and uniqueness of an open session.

## Native journeys

- **Finnish.** Created *Suomen Mestari Chapter 4*, selected *heikko* and *heittää* from the bundled catalogue, then captured *Kiitos paljon* with membership selected in the form. Added the phrase to a second collection. The course group showed three items and zero enrolled until the explicit bulk action. Started Learn New, rated the first card Almost and left the session.
- **Membership changes during study.** After a force-stop and relaunch, removed *heittää* from the course group, deleted the second collection and edited the course description. Resumed from Today with Wi-Fi, mobile data and the Metro reverse port disconnected. The frozen second card still presented *heittää*. Finished all three cards, declined the optional revisit and returned to the originating collection. A later confirmed translation edit made the enrolled phrase new again. Searching the collection for the revised translation found the same entry.
- **Swedish.** The migrated Swedish session resumed on its revealed production card. Finishing it and opening Collections showed an independent, empty inventory. Created a collection from the membership picker on the curated *en bok* detail. Saved a whole Swedish sentence to it. Explicitly enrolled both entries, rated the first and left the second pending. Assigned the sentence to a second collection, edited its note, renamed the original collection, removed the pending sentence from it and deleted the original. After a force-stop, Today resumed the frozen sentence. The completion summary counted both ratings and returned to the surviving collections overview.

The final database contained two members in the Finnish course collection and one in the surviving Swedish collection. The two completed collection sessions retained three distinct Finnish ratings and two distinct Swedish ratings. The Swedish sentence retained both directional schedules after deletion of its original collection. The edited Finnish phrase was at revision two with no old schedules. SQLite reported zero foreign-key violations.

## Screenshots

[New collection](screenshots/collections/sv-create.png) · [Collections overview](screenshots/collections/sv-overview.png) · [Multiple memberships](screenshots/collections/sv-memberships.png) · [Dark collection detail at 125% font scale](screenshots/collections/sv-dark-detail.png) · [Resumed Finnish card](screenshots/collections/fi-frozen.png) · [Completion after deleting the source collection](screenshots/collections/sv-deleted-origin.png)

## Design comparison

Compared the native screens with the editable multilingual collection overview, detail, create, membership picker, rename and deletion frames. My Words retains the three-tab navigation and the Collections / All entries switch. The overview and detail use the app's existing typography, surfaces and language header. The item picker combines bundled and personal vocabulary with native checkboxes, search and a persistent save action. Native confirmations handle discard and deletion. Counts and study actions use the local learner database. The frames show due counts and Learn New on collection detail. Scheduled reviews remain in Today. [Overview](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6559) · [Detail](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6603) · [Create](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6651) · [Membership](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6701) · [Rename](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6720) · [Delete](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6770)

## Verification

The baseline passed 109 tests. The updated suite passes 116 (102 Jest and 14 vocabulary pipeline). It covers shared identity and directions, independent language inventories, atomic membership and capture, migration, active and deleted session origins, revision-aware personal content, and the Swedish article-only capture edge case. Strict TypeScript, ESLint, catalogue validation and reproducibility, Expo dependency checks, Expo Doctor (20/20) and both production exports passed.

Device QA covered the Android emulator. The iOS production bundle was verified. Physical devices, native iOS interactions and spoken screen-reader output were outside this run. [Persistence and study contract](vokri-cards-data-and-review-contract.md#personal-collections)
