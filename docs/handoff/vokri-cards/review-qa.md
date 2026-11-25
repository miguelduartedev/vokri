# Daily review and Today QA

## Android upgrade

On a disposable Pixel 7 emulator (Android 14, API 34, ARM64), Expo Go 58.0.6 ran the app from the merged PR #18 commit `58b39e0`. Through Discover and Learn New, the learner enrolled five words per language, finished a Finnish first pass and two revisits, and left Swedish on the revealed production prompt for *ett hus*. The app was terminated before upgrading. The PR #19 app reopened the same Expo project, local database and preferences.

| Compared on the device | Result |
| --- | --- |
| SQLite version and historical ledger | Version 1 upgraded to 2. The eight v1 event rows matched field for field before and after migration, including sequence, event ID, direction and timestamps. |
| Enrolments and checkpoints | All ten enrolments, thirteen card occurrences and both session checkpoints matched. The upgrade restored Swedish at card 2 of 5 with the answer visible. Finnish retained its undismissed summary of five words and two revisits. |
| Historical projections | Again and Almost received four- and eight-hour deadlines. First Knew It received one day with zero spaced returns. The two Finnish revisits remained in history. The revealed, unrated Swedish direction had a pending deadline and zero recall evidence. |

[Original Finnish summary](screenshots/review/v1-fi-summary.png) · [Restored summary](screenshots/review/migrated-fi-summary.png) · [Original Swedish answer](screenshots/review/v1-sv-paused.png) · [Restored answer](screenshots/review/migrated-sv-answer.png)

## Daily journeys

The upgraded app completed the interrupted Swedish session. In each language, the learner added another word in Discover and studied it from Today. A clock supplied only to the disposable QA copy advanced 48 hours. The tested app used its regular SQLite adapter, vocabulary, selectors and routes. The release uses the device clock.

| Journey | Observed on Android |
| --- | --- |
| Distinct words and directions | Each language had six due words and twelve directional cards. The first batch contained ten cards. After a complete Swedish batch, the summary showed five distinct words, ten first-pass ratings and two actual revisits. One word remained due in both directions. |
| Scheduled responses | Both languages accepted Again, Almost and Knew It. An independent check reconstructed every directional level, streak and deadline from the on-device first-pass events, using the original UTC timestamps. After both queues cleared, 40 unique events agreed with all 24 directional schedules. |
| Termination and recovery | Force-stopped Expo Go immediately after acknowledged ratings in both languages, verified the process had gone away, then reopened the project. Resume restored saved feedback. The next card advanced once. Both final caught-up states survived another cold start. |
| Leave, resume and replace | Swedish resumed the same batch after leaving at three rated cards. Finnish confirmed replacement after one saved rating and a separate revealed card. The saved rating retained its deadline. The replacement offered the remaining due directions. |
| Disconnected study | Disabled Wi-Fi and mobile data and removed Metro’s ADB reverse port. In both languages the running app revealed cards, saved ratings, finished sessions and returned to Today. Reconnected Metro for the separate cold-start checks. |
| Language isolation | Completed Swedish, switched to Finnish and saw its six due words. The second journey produced its own evidence and schedules. |

[Finnish Today](screenshots/review/fi-due-final.png) · [Review front](screenshots/review/fi-front.png) · [Swedish reveal and supplied forms](screenshots/review/sv-review-reveal.png) · [Paused review](screenshots/review/fi-paused.png) · [Saved Finnish feedback after restart](screenshots/review/fi-cold-saved.png) · [Ten-card summary](screenshots/review/sv-review-summary.png) · [One remaining word](screenshots/review/sv-batch-two.png) · [Offline caught-up Today](screenshots/review/sv-offline-caught-up.png)

## Live deadline and accessible layout

On a 360 × 640 dp viewport with 1.25× Android font scale and system Dark appearance, the QA clock started 35 seconds before the next Swedish review. Today stayed open. It changed from caught up to one word due as the deadline passed. The learner opened that review, revealed *äta* with its supplied inflections, scrolled to Almost, checked the saved deadline, declined the revisit and returned to caught-up Today.

[Before the deadline](screenshots/review/sv-before-boundary.png) · [After the deadline](screenshots/review/sv-dark-due.png) · [Revealed answer](screenshots/review/sv-dark-answer.png) · [Directional feedback](screenshots/review/sv-dark-feedback.png) · [Completion](screenshots/review/sv-dark-summary.png)

## Design comparison

Compared emulator captures with the multilingual Today, paused and caught-up frames and the Review front, reveal, rating and completion frames. The implementation uses the shared header, pine review panel, locally bundled Newsreader and Inter, distinct rating colours, safe-area layout and bottom navigation. Native wrapping and supplied grammatical forms change card height. Longer answers and large text scroll with their actions. Expo Go adds a floating Tools overlay on these captures.

The dashboard uses the actual enrolled pool and curated deck size. When a batch covers only some due cards, the action states its card limit. The completion screen reports cards, distinct words and revisits. Feedback gives the local due time for the direction just rated. These adaptations keep the design’s illustrative counts and familiarity claims out of learner results. [Today](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=452-4081) · [Paused](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=409-986) · [Front](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=426-2738) · [Reveal](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=426-2759) · [Completion](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=426-2926)

## Verification and limits

The merged baseline passed 79 tests. PR #19 passes 98 (84 Jest, 14 vocabulary pipeline). The new coverage includes the interval ladder and regressions, independent first practice, pending exposures in both directions, frozen batches, transactional failure and retry, v1 upgrade rollback, language isolation and a mounted Today crossing its real schedule deadline under fake time. The 20-word/27-card fixture checks deduplication.

Clean installation, source validation, vocabulary identity and reproducibility, strict TypeScript, lint, public Expo config, SDK compatibility, Expo Doctor (20/20) and Android/iOS Hermes exports passed. This Mac has no iOS simulator. Native iOS interaction, physical devices, signed standalone cold starts and spoken screen-reader output remain unverified. The bilingual catalogue retains its existing private-preview editorial status.
