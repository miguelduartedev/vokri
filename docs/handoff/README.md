# Vokri — Expo mobile handoff

**Working project name:** Vokri (provisional). **Visual direction:** Nordic Editorial. **Initial learning language:** Finnish (`fi`). **Planned future learning language:** Swedish (`sv`).

These are implementation handoff materials for a **mobile-first React Native + Expo + TypeScript** app. This is not finished application code or a sign-off for production release.

## Read in this order

1. [Implementation Handoff](./Language_Learning_Mobile_Implementation_Handoff.md) — scope, component and navigation contracts, Expo implementation stages.
2. [Design Tokens](./Nordic_Editorial_Mobile_Tokens.json) — Figma-verified values; runtime behaviour still requires testing.
3. [Figma Screen Map](./Language_Learning_Mobile_Screen_Map.json) — all 27 editable design references and route/screen mapping.
4. [QA Report](./Language_Learning_Mobile_QA_Report.md) — what was inspected, the design changes made, and unresolved native QA requirements.

**Figma sources:** [Nordic Editorial screens](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766), [design system](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-828), [final QA boards](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=287-1638).

## Non-negotiable scope

- Implement Finnish first, with independent future Swedish course content, progress and review queues. **Learning-language choice is not interface localization.**
- Current `suomi` text and `Suomi*` Figma identifiers are legacy design references—not the app name. Keep exact source Figma identifiers for traceability; use **Vokri** only as the provisional working name.
- Do not mistake the sample Unit 4 content in screen mockups for the starting curriculum. Start with Finnish **Unit 1 — Hello** and a real functioning learning/review vertical slice.
- Preserve a local-first learner state and build responsive, accessible native layouts rather than reproducing a fixed 390×844 screenshot.
- The Finnish learning sources are now available under [docs/curriculum/](../curriculum/README.md): the [A1 Foundations blueprint](../curriculum/a1_foundations_curriculum_blueprint.md), [original 2,000-lemma CSV](../curriculum/vocabulary/finnish_2000_curated.csv), [source/attribution README](../curriculum/vocabulary/README.md), [learning data architecture](../architecture/content_learning_data_architecture_specification.md), and [mobile-first tech plan](../architecture/mobile_first_tech_stack_plan.md). **These are Finnish-only V1 teaching sources; do not invent unreviewed Swedish materials or fill gaps with Figma demo content.**

These handoff and curriculum source files are documentation/source assets only; they do not scaffold, modify, or run the mobile application.
