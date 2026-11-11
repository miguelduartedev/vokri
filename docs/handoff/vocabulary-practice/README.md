# Vokri — Vocabulary Practice final design handoff

**Status:** Final Figma integration and specifications complete; native implementation not yet begun. **Date:** 11 November 2026.

Flashcards and Word Match are two optional practice modes over **one language-scoped vocabulary and personal entry registry**. Finnish (`fi`) is first; Swedish (`sv`) is a separate future learning course. Personal words, phrases and sentences remain user-owned; full sentences are for Flashcards rather than V1 Word Match.

## Files to read

1. [Implementation handoff](./vocabulary-practice-implementation.md) — screens, navigation, state machines, component mapping and recommended Codex sequence.
2. [Session/data contract](./vocabulary-practice-data-contract.md) — eligibility, identifiers, shared source selection, queue reducers, local persistence, revisit and learning boundaries.
3. [Screen registry JSON](./vocabulary-practice-screen-map.json) — **84** exact principal screen Figma IDs, URLs, states and known prototype destinations. Includes **three** minimal newly added Word Match-selected setup variants.
4. [Final QA report](./vocabulary-practice-qa-report.md) — actual Figma checks, fixes, prototype limitations and unresolved native/editorial release gates.

## Approved Figma

- [01 Foundation / shared practice setup](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-1638)
- [02 My Words and sentence mining](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=323-2076)
- [03 Flashcards](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=340-2467)
- [04 Word Match](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=361-3102)
- [05 Final integration & handoff](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-3972)

The app continues to use [Nordic Editorial Design System v1](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-828).

## Development guidance

- Inspect the original [mobile implementation handoff](../Language_Learning_Mobile_Implementation_Handoff.md), [design tokens](../Nordic_Editorial_Mobile_Tokens.json) and the current repository before editing code.
- Start with the actual **Finnish Unit 1**, not the illustrative Unit 4/94 encountered words in Figma.
- Build one functioning vertical slice, local progress/session storage, then scale.
- **Scheduled Review remains separate**; voluntary Flashcard ratings and Word Match recognition don't silently move review due dates or award permanent mastery.
- Figma demonstrates representative interactions; native randomisation, persistence, accessibility and Finnish editorial review are unverified.
- **No new product code is included in this PR.** It must be reviewed and merged explicitly.
