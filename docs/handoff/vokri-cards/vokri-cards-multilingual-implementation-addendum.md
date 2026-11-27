# Multilingual implementation addendum

Use the current Cards-first product brief first, then the multilingual Figma sections for interaction, the Nordic Editorial system for styling, and the original Cards handoff for compatible session and product semantics. The [shared architecture](../../architecture/vokri-cards-first-implementation-plan.md) governs identity, storage and future reuse. Use the original CSVs and their source notes for lexical data. The [original registry](./vokri-cards-screen-map.json) preserves 119 earlier mobile frames.

## Editable references

The following node IDs and names were checked against the editable file on 24 November 2026. State variants share native routes.

| Section | Verified screens and components |
| --- | --- |
| [Foundation and switching](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=452-4080) | Finnish and Swedish Today `452:4081`, `452:4092`. Selected/unselected language cards `453:4184`, `453:4193`. Active chip and learning-language row `453:4201`, `453:4206`. |
| [First launch](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=454-4288) | Finnish and Swedish pending selection `454:4288`, `454:4336`. Dark onboarding `455:4479`. |
| [Switcher and first use](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=455-4246) | Sheet `455:4246`, open on Today `455:4270`, Swedish first use `455:4281`, Swedish switcher open `458:4694`. |
| [Settings](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=455-4292) | Finnish and Swedish `455:4292`, `455:4367`. Open switcher `459:4764`, `459:4868`. |
| [Responsive and dark references](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=455-4442) | Dark `455:4442`, narrow `455:4827`, wide `455:4838`. Architecture and QA `457:4622`. |
| [Discover, decks and Flashcards](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=465-4854) | Shared recall and language-specific presentation handoff `475:6274`. |
| [My Words, data and final QA](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=481-6322) | Storage/migration `499:7916`, final integration `499:7954`. |

## Implemented interactions

A fresh install shows both language cards, with Finnish highlighted. Continue commits the choice before entering Today. A valid saved choice bypasses the picker. Startup waits for storage and font loading, with read recovery and a font fallback. A failed preference write leaves the prior choice active and presents a retryable message. A newer storage version remains intact.

The header chip and Settings row open the same selector. Selecting a language updates the current route, retaining the English interface and appearance. Dismissing the sheet preserves the previous selection. System appearance follows the phone. Explicit Light or Dark applies across routes and survives restart. Only the global preferences record is written.

Today links to Discover. Discover and My Words show language-specific first-use states. Settings includes learning language and appearance. Future-only controls and sample counts from the designs are omitted. The brand header uses native safe areas and system status indicators. The shared light palette comes from the [Nordic token export](../Nordic_Editorial_Mobile_Tokens.json), with the light/dark overrides drawn from the editable VC theme.

## Shipped multilingual behaviour

- Discover and Flashcards share the catalogue. Finnish authored and spoken forms and Swedish articles and inflections appear where supplied. Each language keeps its own frozen session and directional review deadlines.
- My Words and collections follow the active language. Vocabulary interchange previews one language per file. A full backup includes both languages, study history, open sessions and preferences. [Interchange contract](vocabulary-interchange-v1.md) · [Backup and recovery](full-local-backup.md)
- Preferences use schema v1 and the learner database uses SQLite v4. See the [learning and persistence contract](vokri-cards-data-and-review-contract.md) for the migration history and the [roadmap](../../architecture/vokri-cards-first-implementation-plan.md) for native beta preparation.
