# Vokri Cards — Prompt 5/5 Final Figma Integration & QA Report

**Audit date:** 21 November 2026 · **Scope:** Vokri Cards Figma page [407:766](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=407-766). **Final editable handoff:** [447:4058](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4058).  
**Evidence type:** actual Figma node/prototype interrogation, representative rendered screenshots and new GitHub design-to-code documents — **not executed iOS/Android, React Native, live notifications, JSON parsing, storage or learner tests**.

Read alongside [screen map](./vokri-cards-screen-map.json), [mobile implementation handoff](./vokri-cards-mobile-implementation-handoff.md), [data/review contract](./vokri-cards-data-and-review-contract.md), and [existing Phase 4 Figma personal-vocabulary handoff](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=439-4064).

## 1. What was actually audited

The standalone Figma page was inspected **read-only first**, then changes were applied. Baseline had **ten existing Vokri Cards sections**, representing the four earlier design phases. A programmatic traversal of mobile frames and nested prototype reactions found **117 existing 330–450px-width mobile frame examples** and **285 prototype connections**; the first audit found **zero broken destination IDs** but genuine important screens without outgoing navigation.

After corrections, an independent final traversal confirmed:

| Metric | Verified post-integration |
|---|---:|
| Existing sections 01–10 preserved | **10 / 10** |
| New Phase 5 section | **1** — [447:4058](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4058) |
| New editable handoff panels | **12** |
| New essential, editable mobile state variants | **2** |
| Mobile reference screens total | **119** |
| Prototype links observed across mobile frames | **319** |
| Distinct destination frames | **89** |
| Nonexistent prototype destination IDs | **0** |
| Static/reference screens with no outgoing links | **14** (component/responsive/direction examples; see below) |
| Verified machine-readable screen records | **119**, each with actual Figma node ID and URL |
| Underlying app functionality implemented | **None** |

All ten earlier sections preserve their original IDs and counts of top-level direct children: 5, 7, 25, 8, 14, 33, 20, 7, 40 and 17. **No new Figma page or competing design-system library was created.**

### Actual screenshot coverage

Representative **rendered** review included the new handoff panel before/after spacing refinement, the new long personal-sentence editor, the shared personal-expression completion screen, and earlier established My Words, Collection, Settings and Import previews from the previously completed design audit. This does **not** mean every one of the 119 screens received a manual screenshot/visual inspection.

The new Phase 5 panels were structurally inspected for width, placement, clipping and actual text bounds: **all 12 editable panels** are 1680×478 with their text ending before the panel bottom (largest observed last text bottom 357px from panel top). Panels use real Newsreader/Inter fonts and bound existing `VC / Theme` semantic variables for surfaces/text/borders, not a new token scheme.

## 2. Targeted changes actually made in Figma

### New final handoff area

Created **VC / 11 — Final Integration, Prototype QA & Expo Handoff**, actual node **`447:4058`**, on the original Vokri Cards page. It contains twelve native editable, token-bound documentation panels:

1. Product information architecture
2. Route model/return context
3. Ten user journeys
4. Flashcard state machine
5. Canonical data/decks/collections
6. Review scheduler/recall direction
7. Personal vocabulary lifecycle
8. Settings/import/export
9. Components/theme tokens
10. Finnish-first and later Swedish
11. Responsive/accessibility requirements
12. Codex build order and unresolved decisions

The initial documentation panels displayed excessive empty space, so their height and grid spacing were reduced after inspection. A second rendered screenshot confirmed legibility and no observed clipped text.

### Two missing mobile states — editable Figma layers

1. **Edit Personal Sentence** — [447:4147](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4147), reusing the established Edit Word editor structure but with actual multi-line personal-sentence/English-meaning content and Sentence (not Word) segmented state.
2. **Personal Expression Session Complete** — [447:4185](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4185), a reusable personal phrase/sentence completion treatment. It correctly states that one expression remains one flashcard and returns when due.

These were created as editable Figma clones of existing patterns, then text/content/selection updated and screenshots inspected. Original editable screens remain untouched visually.

### Prototype repairs — **34 targeted link actions**

One initial Back link, **23** Phase 4 integration/entry/collections/edit links, and **10** Phase 3 Flashcards/Review/resume links were corrected or added. Actual Figma `setReactionsAsync` was used only for prototyping interactions; visual editing used Figma's plan-based builder.

| Affected flow | Example actual control | Updated result |
|---|---|---|
| Long sentence detail | Back / Edit sentence | Return to populated My Words; edit opens new real Edit Sentence [447:4147] |
| Missing Meaning | Back | Returns to the editable Add Word form. **The invalid Save remains intentionally non-successful**, not linked to false saved state |
| After Delete snapshot | Search, saved entries, Today/Discover tabs, Settings, study CTA | These visible affordances now have valid representative destinations |
| Personal Phrase Revealed | Close + three ratings | Close to exit confirmation; Again/Almost/Knew It to shared personal-expression completion |
| Personal Sentence Revealed | Close + three ratings | Same appropriate completion, without artificially splitting the sentence |
| Edit Personal Sentence | Back, Save Changes | Back to long-sentence detail, Save Changes to detail **as representative prototype state**; actual form persistence is deferred |
| Personal-expression Complete | Dismiss/return controls | Both return to My Words, not word-specific unrelated detail |
| Review Almost | Close and Next Card | Exit confirmation / next card |
| Review Next/Another Look | Close/Reveal | Exit confirmation / revealed example |
| Resumed Card Revealed | Close + rating trio | Exit confirmation / next card |

**All 319 observed post-fix prototype links now point to existing Figma nodes.** This is link integrity, **not proof of correct runtime state transitions**. For example, a single static next-card design cannot represent data-dependent selection of every possible next word, and each Again/Almost/Knew It path is a representative state, not an executed scheduler.

### Remaining intentionally unlinked reference frames

Fourteen mobile-sized frames remain without outgoing links. These are component inventories, selected dark/responsive samples or illustrative direction/deck frames:

- Navigation States [410:4630], Today Components [410:4700], Primary Button component sample [408:780].
- Flashcards deck sample [426:3081] and alternate direction sample [426:3102].
- Phase 3 dark, responsive and mixed-direction visual QA frames [426:3392], [426:3413], [426:3436], [426:3457], [426:3478], [426:3499].
- Phase 4 responsive Add Word/Edit Word/Add Sentence samples [439:4112], [439:4145], [439:4183].

They are not represented as independent **unfinished core user journeys**. Each should map to data/state variants in Expo, not fake standalone app routes.

## 3. Navigation and journey verification

Checked ten representative journey families against actual source/destination reactions and Phase 4 implementation handoff. The [screen-map JSON](./vokri-cards-screen-map.json) captures real per-screen links.

| Journey | Figma design verdict | Native implementation work |
|---|---|---|
| A / First use → Discover → deck → enroll → Learn New | **Representative route linked** | Actual catalog state, selection and enrolled-ID persistence |
| B / Due Review → reveal → rate → revisit/complete | **Representative states linked; several missing transitions repaired** | Idempotent rating, due scheduling, queue lifecycle |
| C / Discover search/filter → word/detail → add to study | **Representative route linked** | Real search/filter and source return |
| D / Add personal word → entry → study | **Representative route linked** | Validate/persist entry and session |
| E / Add phrase/sentence → whole-card Flashcards | **Completion dead ends corrected** | Full long-content/whole-card render, actual rating |
| F / Collections create/rename/membership/delete | **Existing representative states preserved** | Real memberships, safe mutation and persistence |
| G / Edit/delete personal entry | **New sentence editor and missing returns corrected** | Actual edit save, deletion and invalidation rules |
| H / Import/export and invalid-file recovery | **Representative states exist** | JSON/file APIs, preview, conflict decisions and error recovery |
| I / Settings/direction/appearance/reset | **Representative routes linked** | Preferences, permissions, native theme and reset storage |
| J / Exit/resume | **Representative state/return paths linked** | Restore exact item/direction/phase; avoid duplicate events |

**Important caveat:** Static prototypes do not perform validations, generate different due words, apply filters or recompute counts. Some flows therefore cannot be tested end-to-end without implementing domain state in Expo. Do not equate zero broken links with complete working interaction.

## 4. Design system, typography and component reuse

**Reused existing Nordic Editorial** Newsreader/Inter and established Vokri Cards semantic `VC / Theme` Light/Dark color collection. The handoff uses existing `surface`, `text-primary`, `text-secondary`, `border` semantic IDs, rather than duplicating a token collection. The correction screens reuse original Figma edit/completion component structures.

Visual review of representative Today/Discover/My Words/Settings and newly created Phase 5 states showed coherent background, editorial headings and calm action hierarchy. Original sections 01–10 are preserved. **No exhaustive per-layer token-detachment audit or full 119-screen contrast measurement was performed.** Do not misstate a sample-based visual result as certification of the entire design library.

## 5. Standalone scheduling and state decisions

This is the most important source-of-truth adaptation:

- Full Vokri: optional Flashcards **does not** advance scheduled Review.
- Vokri Cards: Flashcards is the primary activity; **each first-pass self-rating updates the standalone app's official due schedule exactly once**.
- The already-authored deterministic ladder offers ~8h initial exposure, success 1/3/7/14/30 days, Almost ~8h and Not sure ~4h. **Proposed** mapping: Again → `not_sure`, Almost → `almost`, Knew It → `correct`. Confirm first-unrated-exposure handling as an implementation/domain decision.
- A card may be in several curated decks or personal collections; **deck membership is not another review identity**.
- Finnish→English and English→Finnish are distinct recall directions, ideally separate review subrecords under one canonical content item; `mixed` resolves to an actual direction before rating.
- Editing material learner-authored Finnish/English meaning requires an explicit schedule-invalidation policy; deleting an item from a paused session requires safe queue pruning.

The new [data/review contract](./vokri-cards-data-and-review-contract.md) distinguishes fixed Phase 3/4 decisions from these implementation recommendations and future product forks. No second SRS or backend was added.

## 6. Local data import/export, reset and privacy

Phase 4 already defines "Export My Words" as a **versioned JSON export of personal entries and collection memberships**, not a complete learning-progress backup. No accounts or cloud sync in V1. Import must validate, preview duplicate/conflict counts and confirm choices without silent overwrite. Invalid file and cancel are non-destructive.

The visible Missing Meaning state remains an invalid form, not a clickable successful save: the Back recovery now works, but real keyboard entry/validation is deferred. Reset Study Progress must clear learning history/due dates while retaining personal words/collections/preferences. Personal-content deletion is separate.

## 7. Responsive and accessibility coverage

**Actual static Figma states exist for:** 390×844, 360 width, 430 width, a 390×720 short viewport, dark mode, long sentence editing and long-card answers. The new sentence editor was screenshot inspected with correctly wrapped Finnish and English sentences, and its bottom action remains visible at the reference size.

**Still requires implementation/device validation:** Dynamic Type and text zoom at increased sizes, keyboard-open safe areas, scrolling when the form is longer than the viewport, VoiceOver/TalkBack reading order and focus, status changes/announcements, 44pt targets, WCAG AA contrast audit, dark-mode contrast, reduced motion, persistence through app suspension and screen reader accessible rating buttons.

**Do not claim these native checks passed.** Figma mockups cannot confirm them.

## 8. Finnish-language content provenance and product honesty

The bundled 2,000-lemma CSV is a **pedagogically curated** vocabulary backbone, not a guaranteed unambiguous dictionary or objective corpus frequency top-2,000. Do not display an unreviewed inflected example as officially teacher certified. The familiar `haluta/haluan/haluun` distinction remains one canonical lemma with forms and recognition-only spoken example, not three duplicate study cards.

The standalone app is Finnish-first. Swedish may later reuse the same components and independent language-scoped state, but must not offer blank/deceptive Swedish learning decks before Swedish content is ready.

## 9. Provisional Phase 5 design-readiness rubric (100 points)

| Criterion | Earned / max | Evidence and boundary |
|---|---:|---|
| Information architecture / three tabs | 10 / 10 | Today, Discover, My Words and focused Settings |
| Existing visual-system preservation | 10 / 10 | No new library/pages; original 10 sections retained; token-bound handoff |
| Critical screen/state inventory | 12 / 12 | 119 exact screens in machine-readable map, two targeted missing variants |
| Prototype link correctness | 11 / 12 | 319 valid destinations, 34 fixed interactions; dynamic flows cannot execute in Figma |
| Flashcard lifecycle semantics | 10 / 12 | First pass/revisit/resume model, rating contract; no native scheduler tests |
| Data identity, deck, collections | 10 / 11 | One canonical item across groups; substantive edit policy still open |
| Import/export/privacy distinction | 8 / 9 | Clear JSON-only user backup; actual conflict algorithm and OS file APIs pending |
| Accessibility/responsive evidence | 6 / 10 | Existing viewport variants and sampled content wrapping; no native testing |
| Precise implementation documents | 8 / 9 | Four files, validated IDs/screen map; new technical choices need owner review |
| **Total — provisional design handoff** | **85 / 95** | This rubric reserves **5 points** below for implementation-only verification |
| Native runtime / user verification | **0 / 5** | Not tested or implemented |
| **Total** | **85 / 100** | Design handoff ready for Codex vertical slice, **not production-app ready** |

**Readiness judgement:** Core design and documented implementation handoff are ready for a first Expo working vertical slice. Actual product readiness awaits implementation, native accessibility, deterministic due-state and import/export tests. Do not claim the provisional 85/100 as a measured user-experience score.

## 10. Recommended Codex implementation starting point

A first PR should establish the smallest real Expo shell and one data-backed vertical slice:

1. Expo Router + TypeScript + semantic Light/Dark design variables; Today, Discover, My Words.
2. Import validated Finnish starter vocabulary from the existing CSV (no duplicate manually maintained lexicon).
3. Discover → Finnish Essentials → choose five distinct vocabulary IDs → explicit study enrollment.
4. Learn New → reveal → Again/Almost/Knew It → one scheduled event per first-pass item/direction → session complete → Today.
5. Persist data, session cursor and last direction across app restart.
6. Test idempotence, first-pass/revisit, keyboard, native navigation and accessibility before expanding UI.

**Do not build all 119 Figma frames as 119 disconnected hardcoded screens.** They are visual source states to render using a smaller set of reusable, data-driven React Native components.

**Approval gate:** This report and handoff are for owner review; no GitHub PR should be merged automatically.
