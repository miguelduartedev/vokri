# V1 candidate QA · milestone 23

27 November 2026. Baseline `de9ddcf82ba59706ae0ca4a2e68e8236f8db0580` includes the existing-file verification fix in [PR 24](https://github.com/miguelduartedev/vokri/pull/24). All **158** baseline tests passed (144 Jest and 14 vocabulary pipeline). The candidate passes **159** (145 and 14). The additional navigation test revisits a chosen import match and reads its selected state.

## Findings and corrections

| Priority | Observation and learner impact | Correction and verification |
| --- | --- | --- |
| P1 | At 320 dp and 200% text, the default-direction label in Settings collapsed to roughly 32 dp and the study counter ran off the right edge. Reading the preference or determining session position was difficult. | Stack each value with its label and stack stage and progress when available width relative to font scale is small. The setting had roughly 242 dp for text on retest. The entire “1 of 1” was visible. |
| Verification blocker | Seven direct packages fell outside Expo’s SDK 58 recommendations. This blocked dependency verification ahead of beta. | Let Expo select compatible versions, regenerated the npm lockfile, tested a clean install and exercised SQLite, preferences, filesystem, sharing availability and document picking. |
| P2 | Android compact controls used a 44 dp shared minimum. Some selected filters depended on colour, and form and search outlines blended into the surface. | Use 48 dp on Android, retain 44 pt on iOS, give selected chips a distinct lower edge and add an input-specific outline token. Verified native control bounds and both palettes. |
| P2 | The final 320 dp/200% check showed “My Words” truncated in the tab bar. | Allow labels to wrap and give the bar room for a second line at very narrow effective widths. Verified the full label and opened My Words from Discover on the device. |
| P2 | Optional capture fields lacked an expanded state. Import reuse choices lacked a selected state, and multiple “View existing entry” buttons had indistinguishable accessible names. | Expose the native state and name each match using its expression and meaning. Navigation tests exercise expansion, named matches and returning to a selection. |
| P2 | Settings had no on-device vocabulary source credit, and the multilingual handoff still described shipped features as future work. | Added offline Finnish and Swedish credits and updated the handoff and roadmap. |
| P3 | SDK 58 Router reported deprecated initial-route settings during native navigation. | Updated nested stack anchors and removed the obsolete tab option. Verified onboarding, tab entry, return from study and the deleted-collection fallback. |

The audit found no confirmed P0 learner-data defect. SQLite v4, preference v1, the JSON vocabulary contract, the full-backup format and the learning engine retain their existing contracts.

## Visual and accessibility evidence

The reference was the editable multilingual handoff, including [first launch](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=454-4288), [Settings](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=455-4292), [responsive and dark](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=455-4442), [Discover and study](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=465-4854), [My Words](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6322) and [final integration](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=499-7954). Screens retain the cream and pine palettes, locally bundled Newsreader and Inter, editorial headings and three-tab navigation. At enlarged text sizes the stage and settings rows depart from the static horizontal composition so both values remain readable.

| Contrast on the surface | Light | Dark |
| --- | ---: | ---: |
| Primary text | 12.13:1 | 11.73:1 |
| Secondary and placeholder text | 6.21:1 | 8.04:1 |
| Primary button label on its fill | 11.23:1 | 9.74:1 |
| Selected text on its fill | 9.74:1 | 7.21:1 |
| Input outline on surface, before → after | 1.35 → 3.71:1 | 1.59 → 4.22:1 |

Ratios use WCAG relative luminance of the rendered token pairs. The native Settings control measured 96 × 96 physical pixels at 2× density. The prompt accessibility tree withheld the answer and ratings before reveal. Revealing exposed the answer, three named rating controls, then saved feedback and Next card. TalkBack was unavailable on this image. These observations cover accessible names, state and hierarchy. Spoken interaction on TalkBack and VoiceOver remains a device check.

[Responsive layouts at 125%, 150% and 200%](screenshots/v1-candidate/responsive.jpg) · [320 dp at 200%, before and after](screenshots/v1-candidate/large-text.jpg) · [First launch, Today and Discover](screenshots/v1-candidate/daily.jpg) · [Recognition, production, review and summary](screenshots/v1-candidate/study.jpg) · [Capture and organization](screenshots/v1-candidate/organize.jpg) · [Portability and restoration](screenshots/v1-candidate/files.jpg). The small floating tools button belongs to the Expo development host.

## Cross-feature checks

Native observations used a disposable Pixel 7 Android 14 emulator with SDK 58 Expo Go. File-backed tests ran against disposable SQLite files. No personal installation was involved.

| Journey | Native observations | Additional automated evidence |
| --- | --- | --- |
| A · First Finnish session | Selected Finnish, browsed Discover, opened **olla**, enrolled it, revealed the recognition answer, rated Knew It and finished. Today reflected the session. | Catalogue search, combined filters, back navigation, enrolment idempotency, direction selection and summaries. |
| B · Independent languages | Restored a Finnish session on a revealed production card. An acknowledged rating survived force-stop and relaunch. Swedish retained its own summary and due count. | One open session per language, settings write failures, resume, summary dismissal and independent directions. |
| C · Collections | Created a Finnish course collection and added a captured phrase. Captured **ett kurskompendium** with the article selector and saved it unenrolled. Studied a Swedish sentence from a mixed collection, paused on a revealed card, removed membership and deleted its originating collection. Resumed the exact card, rated Almost and returned to the surviving collections overview. | Multiple memberships, rename, duplicate names, bulk enrolment and frozen queues. |
| D · Content revisions | Edited only the note on the studied Swedish **en nyckel**. It stayed Introduced. Changing the English translation required a restart confirmation, returned it to New and retained its note. Confirmed archive after reading the dialog explaining the effect on study and history. | File-backed assertions compare schedules and frozen historical wording, exercise stale submissions, archive filtering, re-creation and transaction rollback. |
| E · Daily review | Swedish Today counted one due word. Review presented two directional cards for it. Recognition Again showed a four-hour deadline. The other direction was labelled first practice, accepted Almost and appeared in the finite revisit offer. Finnish production Knew It showed a next-day deadline. | Deterministic full interval ladder, familiarity, pending exposure, early and overdue reviews, revisit isolation and Today’s due-boundary refresh. |
| F · Vocabulary files | Saved a Finnish file through Android Documents and imported it into a different inventory. The preview contained one entry, one collection and one membership. Reused one curated match and confirmed a group decision for the remaining similarities in another file. Chose Keep both for a Swedish ID conflict, then selected the same file again. The second preview still required a decision. Skip added zero entries. Reusing a Swedish collection by name preserved its existing membership and added zero duplicates. | File-backed tests verify collision remapping, collection reuse, preserved individual decisions, enrolment independence and rollback. |
| G · Full backup | Restored a real pre-update bilingual backup over different data and saved a new backup through Android Documents. An independent comparison verified both SHA-256 payloads, preferences and every row ID and column across all 58 learner rows. Resumed the revealed card, rated it and verified acknowledgement after restart. | File-backed pre-commit rollback, committed-state retention, interrupted cleanup and finalized committed/rolled-back journals with missing live databases. |

The backup comparison included 6 enrolments, 12 frozen cards, 7 rating events, 7 review states, 6 personal entries, 4 sessions, 4 collections and 12 memberships. It covered review deadlines, revised and archived content and the undismissed Swedish summary. With Wi-Fi, mobile data and the Metro reverse tunnel disconnected, the resident app restored the backup, created and saved a replacement backup and imported the vocabulary file. Force-stop/relaunch used the development bundle server.

## Reproduction and compatibility

Run the root README verification commands with Node 24.22.2 and npm 11.19.1. Expo selected `expo 58.1.0`, `expo-router 58.0.33`, `expo-file-system 58.0.15`, `expo-sharing 58.0.24`, `expo-image 58.0.19`, `expo-splash-screen 58.0.15` and `jest-expo 58.0.16`. The lockfile retains React Native 0.88.1, SQLite 58.0.18, DocumentPicker 58.0.5 and AsyncStorage 2.2.0.

Local verification passed vocabulary validation and reproducibility, strict TypeScript, ESLint, Jest and the pipeline tests, Expo public configuration resolution, Expo’s dependency check, all 20 Doctor checks and Android and iOS production exports.

## Responsiveness and beta handoff

- Tested 400 dp at default text size, 360 dp at 125%, 480 dp at 150% and 320 dp at 200%. The larger settings used real Android font scaling. Search and capture fields, scrollable screens and tab names were inspected in the Android accessibility hierarchy. Long Finnish phrases and whole Swedish sentences retain their authored text.
- A 328 kB Finnish file with 2,000 unique entries took **408 ms** from tapping Confirm import to observing the native completion label. My Words displayed 2,003 entries and a query for **1999** returned one correct result. Focus, typing, IME interaction and waiting for the result took **3.67 s** through automation. Creating a full bilingual backup after the bulk import and observing its preview took **2.38 s**, including control lookup and automation waits. The native share sheet showed the generated filename.
- In 21 host samples the median Finnish catalogue query took **1.04 ms** and matching a 2,000-entry import took **11.47 ms**. The host figures isolate domain work. A force-stopped Expo Go launch reached the restored Swedish Today screen in **10.05 s**, including Metro bundle delivery and accessibility polling. The emulator figures include the development runtime and accessibility automation, and are single observations. Discover and My Words use virtualized lists. The measurements did not justify a cache or a change to the learning store.
- A disposable backup fixture placed one Swedish review deadline 95 seconds ahead on the emulator clock. With Today left open, the dashboard moved from **All caught up** to **1 word to revisit** while the separate undismissed session summary stayed visible. The fixture and its modified timestamp existed only outside the application.
- During Android configuration changes under concurrent development builds, Expo Go and System UI reported an application-not-responding dialog. Relaunch recovered the existing study checkpoint. Responsive retests applied the display configuration before launch. A release-build cold start and physical-device latency still need measurement.
- Both production bundles export. Native iOS interaction, VoiceOver, standalone disconnected cold launch and signing remain beta-device work. Review the editorial and third-party distribution requirements before distributing the bundled vocabulary. The 4,000 catalogue entries passed integrity and reproducibility checks. This milestone did not perform a comprehensive linguistic review.

The results support moving the frozen V1 candidate to milestone 24 for native beta verification.
