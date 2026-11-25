# My Words QA

## Android migration

A disposable Pixel 7 emulator on Android 14 ran Expo Go 58.0.6. A QA-only setup used the merged PR #19 store and native SQLite adapter to enrol three curated items, leave a Finnish summary undismissed, and pause a Swedish session on its second revealed card. After a force-stop, the new app upgraded the same database to v3. All three enrolments, two rating events, two session records, three frozen cards and five directional schedules matched across their original columns. Swedish resumed on the revealed answer. Finnish restored the summary.

A separate on-device run created a second file with the original PR #19 code, closed it, applied the final migration and reopened it. It reproduced the same row counts and field equality. The current-exposure view returned three reveals and SQLite reported zero foreign-key violations. The file-backed automated suite also interrupted the migration and retried it from v2.

## Learning journeys

| Journey | Observed result |
| --- | --- |
| Finnish capture | Saved *iltapala* without enrolling it. Enrolled a phrase and the complete sentence *Olen asunut Suomessa kolme vuotta.* Search found the sentence by its English translation. An edited personal note appeared on reveal. |
| Mixed study | Rated the Finnish phrase, sentence and a curated word together. The sentence appeared as a single production card. Today showed four introduced Finnish items, including the earlier curated word. |
| Disconnected review | Advanced the disposable clock by 48 hours. Turned off Wi-Fi and mobile data and removed the Metro reverse port. The Finnish session accepted eight directional ratings across four words, including first practice in the opposite direction. The caught-up state survived reconnecting Metro, force-stopping Expo Go, confirming its process had exited and relaunching. |
| Edit and delete | Changed the translation of the studied phrase and confirmed the restart. The enrolled phrase became new again. Revealed its new prompt, left the session and confirmed deletion. The previous search returned zero results. After termination and relaunch the summary reported zero words studied and a skipped entry. Today showed three introduced Finnish items. |
| Swedish capture | Captured *en nyckel* with its article. The duplicate screen displayed the curated match and allowed a separate translation. Added and learned *Jag skulle vilja ha en kopp kaffe.* as one sentence. Switching back to Swedish showed its two personal entries and independent study counts. Reviewed eight directional cards across four Swedish items, resumed the batch after leaving it and declined the optional revisit. |

| Screenshots | Android captures |
| --- | --- |
| Capture | [Empty My Words](screenshots/my-words/sv-empty.png) · [Swedish form](screenshots/my-words/sv-form.png) · [Duplicate warning](screenshots/my-words/sv-duplicate.png) · [Saved without enrolment](screenshots/my-words/saved-only.png) |
| Browse | [Finnish list](screenshots/my-words/fi-list.png) · [Swedish list](screenshots/my-words/sv-list.png) · [Swedish sentence at 1.25× text on a 360 × 640 dp dark screen](screenshots/my-words/sv-dark-detail.png) |
| Study | [Sentence reveal](screenshots/my-words/sentence-answer.png) · [First recognition practice](screenshots/my-words/fi-review-card.png) · [Offline Finnish summary](screenshots/my-words/fi-offline-summary.png) · [Swedish review summary](screenshots/my-words/sv-review-summary.png) |
| Changes | [Material edit](screenshots/my-words/fi-confirm-reset.png) · [Deletion](screenshots/my-words/fi-confirm-delete.png) · [Skipped card and return to My Words](screenshots/my-words/sv-skipped.png) |

## Design comparison

Compared native captures with the editable My Words, quick capture, optional details, duplicate and edit frames. The screens reuse Newsreader and Inter, the language header, cream and pine surfaces, and the existing navigation and form controls. Capture gives both save actions explicit labels. My Words prioritises adding a personal entry, with search and type filters in the list. The future collections selector is omitted. Swedish learners can enter a whole expression or select a noun article. Material edits and deletion use Android confirmation dialogs. The floating Tools control in the screenshots belongs to Expo Go. [My Words](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6322) · [Quick capture](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6795) · [Duplicate](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6926) · [Storage handoff](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=499-7916)

## Verification and limits

The baseline passed 98 tests. The updated suite passes 109, comprising 95 Jest tests and 14 vocabulary pipeline tests. Coverage includes failed combined saves with draft retention, choosing a curated match, separate senses, Unicode equivalence, archive and recreation, late rating attempts, mixed-source sessions, revision-aware evidence and migration rollback. Both 2,000-item catalogues passed validation and reproducibility checks. Clean install, strict TypeScript, lint, Expo dependency checks, Expo Doctor (20/20) and Android/iOS production exports passed.

Native verification used Expo Go on Android. The host has no iOS simulator. Native iOS interactions, spoken screen-reader output and signed standalone installs remain unverified. All clock and seed controls were confined to the disposable QA copy. [Persistence and editing contract](vokri-cards-data-and-review-contract.md#personal-vocabulary--pr-20)
