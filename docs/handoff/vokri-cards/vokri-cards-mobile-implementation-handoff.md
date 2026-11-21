# Vokri Cards — Standalone Mobile Implementation Handoff

**Phase:** Prompt 5/5 — final Figma integration · **Status:** editable design and documentation handoff, **not implemented** Expo functionality · **Date:** 21 November 2026.  
**Product:** Vokri Cards, Finnish-first local-first standalone flashcards. Swedish is a **future separate target language**; it must not be presented as containing ready-made decks until that content is verified.  
**Design:** [Vokri Cards Figma page, node 407:766](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=407-766) · [Final editable Phase 5 handoff, node 447:4058](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4058).  
**Machine-readable authoritative registry:** [Screen map](./vokri-cards-screen-map.json). **Domain contract:** [Review/data](./vokri-cards-data-and-review-contract.md). **Actual Figma QA:** [Final QA report](./vokri-cards-final-qa-report.md).

## 1. Scope and source hierarchy

**Promise:** discover useful vocabulary → deliberately add it to study → practise with Flashcards → revisit when due. **No courses, grammar lesson player, multiple-choice quiz, Word Match, XP, streaks, accounts, server or cloud synchronization in V1.** Keep the application adult, fast and calm.

Use sources in this order:
1. **Approved Nordic Editorial design system** — [Figma design-system page](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-828), Newsreader editorial headlines, Inter controls, existing `VC / Theme` Light/Dark variables and existing component instances.
2. **Vokri Cards Figma** — all existing Phase 1–4 screens, two Phase 5 corrective screens and twelve editable implementation panels; native frame IDs in the screen-map JSON, no new invented destinations.
3. **Vokri Cards standalone contract** — [Data/review](./vokri-cards-data-and-review-contract.md). The full Vokri course's optional practice rules must **not** prevent Vokri Cards ratings from updating its own single due scheduler.
4. **Common technical/source truth** — [Vokri learning architecture](../../architecture/content_learning_data_architecture_specification.md), [mobile-first stack](../../architecture/mobile_first_tech_stack_plan.md), [existing vocabulary-practice handoff](../vocabulary-practice/vocabulary-practice-implementation.md), [curated Finnish CSV](../../curriculum/vocabulary/finnish_2000_curated.csv), [CSV provenance and editorial status](../../curriculum/vocabulary/README.md).

**Do not treat static Figma samples as executed search, scheduler, imported JSON or actual local persistence.** Examples with 12 due words, five suggested words or sample personal entries are illustrative only.

## 2. Navigation and screen classification

Exactly **three primary tabs: Today / Discover / My Words**. Settings lives behind the top-right icon; all study, editor and data-management flows are focused, tabless routes or modal confirmations.

| Destination | Proposed Expo Router path | Primary reference | Required behavior |
|---|---|---|---|
| Today | `/today` | [408:897](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=408-897) | Derived due state, new-word entry, recent collection, paused session |
| First use | same Today route with empty state | [409:866](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=409-866) | Guide to Discover; do not fake due items |
| Due complete | same Today route | [409:924](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=409-924) | No item due now, not permanent mastery |
| Resume | Today → session route | [409:986](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=409-986) | Restore same cursor/direction/phase and original source |
| Discover | `/discover` | [413:1444](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=413-1444) | Browse curated topics/decks, all 2,000, search without enrollment |
| Search/filter | Discover scoped state | [416:1963](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=416-1963) | Visible search, query, empty/filtered results; no duplicated data |
| Deck detail | `/discover/deck/[deckId]` | [414:1422](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=414-1422) | Preview, select words, enrolled/new/available distinction |
| Word detail | `/discover/word/[itemId]` | [415:1722](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=415-1722) | Lemma, meaning, editorially reviewed forms and explicit study action |
| Flashcards | `/flashcards/[sessionId]` | [426:2738](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=426-2738) | Front, reveal, first-pass rating, revisit, complete, exit/resume |
| My Words | `/my-words` | [434:2989](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=434-2989) | List/search/filter personal entries; collections switch |
| Add personal entry | `/my-words/create` | [434:3158](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=434-3158) | Word/phrase/sentence, Finnish+English mandatory, optional notes |
| Personal detail/edit | `/my-words/entry/[entryId]` | [434:3100](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=434-3100) | Edit, add to study, delete safely |
| Long-sentence edit | same personal-entry edit route | [447:4147](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4147) | New Phase 5 editable state with long Finnish text and English meaning |
| Collection | `/my-words/collection/[collectionId]` | [434:3538](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=434-3538) | Multi-membership without duplicate review identities |
| Settings | `/settings` | [436:3726](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=436-3726) | Theme, default direction, reminder, import/export, reset |
| Backup preview/conflict | Settings focused flow | [436:3950](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=436-3950) | Validate schema, preview, conflict resolution, confirmation |
| Personal expression complete | session completed state | [447:4185](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4185) | Shared phrase/sentence completion, one card, correct return |

**Route names above are proposed implementation mappings**; Figma only establishes views and prototype states. The JSON map records **119 actual mobile frames**, their exact Figma node IDs, real prototype edges, feature areas, candidate routes, and priority. Many frames are variants, not 119 independent Expo Router routes.

## 3. Screen-by-screen interaction contract

### Today (Phase 1)

The first action is context-driven: due items → **Review**, a paused session → **Resume**, none due → **Learn New / Discover**. An interrupted 6/10 session and 12 separate due reviews are **distinct**. Do not silently clear due items or claim today's reviews were completed by leaving.

States: normal [408:897], first use [409:866], caught up [409:924], paused [409:986], no reviews yet [409:1049], dark [409:1111], 360 [409:1177], 430 [409:1240], short viewport [409:1303].

### Discover, deck and word detail (Phase 2)

Discover [413:1444] has real editable search/filter, featured and topic deck cards. Deck states [414:1422], [414:1503], [414:1584] distinguish first visit, partial enrollment and all added. Word selection [415:1599] chooses **specific distinct canonical IDs**. A saved/deck word may be read without enrollment or scheduling. Add-to-study is explicit and idempotent: do not create multiple due queues for one item shown in several decks. Word detail [415:1722] and in-study variant [415:1832] must derive state from enrollment.

Bundled Finnish CSV contains 2,000 pedagogically curated lemmas (four tiers of 500). It is **not** an objective top-2,000 by raw frequency; curated source examples are not automatically certified teaching phrases. Use approved authored overlays where available. Browse is possible without creating a review record.

### Flashcards & scheduled Review (Phase 3)

Authoritative state frames: Review front [426:2738], revealed [426:2759], Again [426:2820], Almost [426:2842], Knew It [426:2864], Next [426:2886], Another Look [426:2905], completed [426:2926]; Learn New [426:2963] / [426:2984] / [426:3007] / [426:3044]; direction [426:3102]; exit [426:3121], resume [426:3148] / [429:2982] / [429:3018].

Front → deliberate reveal → Again/Almost/Knew It → next unique card → optional finite revisit → complete. During **first pass**, rate exactly once; in-session revisit does not generate duplicate spaced-success transactions. Show unique items and revisits separately. Preserve direction `fi_to_en`, `en_to_fi`, `mixed`; a direction is chosen/recorded explicitly at the card level. Scheduling is Vokri Cards' **primary core activity**; it is not treated as optional unscored course practice.

### My Words, collections and personal Flashcards (Phase 4)

My Words empty [434:2966], populated [434:2989], long saved sentence [434:3133]. Capture [434:3158] / [434:3191] / [434:3227] with mandatory Finnish/English, optional details, missing-meaning validation [434:3304], duplicates [434:3336] and saved states. Edit [434:3385] and long sentence [447:4147] preserve owner-controlled meaning/context; deletion [434:3423] removes **the entry**, not underlying curated words or unrelated collections. Collection overview [434:3473], detail [434:3538], membership [434:3613], removal confirmation [434:3631]; deleting a collection never deletes its members.

Personal words, phrases and sentences are **whole cards**, not split. Rating examples: personal word [439:4367], phrase [439:4643], sentence [439:4687]; the latter two now lead to the shared expression-completed state [447:4185]. Personal word completion stays [439:4454]. All originate from actual selected saved entries and return to My Words or the originating collection.

### Settings and local data (Phase 4)

Default settings [436:3726], dark [436:3776], direction picker [439:3819], theme picker [439:3894], export [436:3826]/[436:3876], import file [436:3900], preview [436:3950], conflict [436:4000], invalid [436:4025], complete [436:4057], reset [436:4081]. No accounts/cloud. Do not represent 'Export My Words' as a full device/review backup. Import conflict choices must be resolved before final confirmation; invalid file or cancellation is non-destructive. Study-progress reset must retain the personal vocabulary entries and collections.

## 4. Origin-aware end-to-end journeys

| Flow | Walkthrough | Runtime invariant |
|---|---|---|
| A / First use | Today → Discover → Essentials → select five → enroll → new Flashcards → complete → Today | No simulated reviews before first enrollment; ordered distinct selected IDs |
| B / Due | Today due → front → reveal → rate → next/revisit → complete | One first-pass scheduling event per item/direction, revisit unscored |
| C / Discovery | Search/filter → deck/word detail → add to study → back | Preserve source deck/filter and avoid automatic enrollment when merely browsing |
| D / Personal word | My Words → add → optional details → save → detail → enroll → Flashcards | Personal IDs and notes retained, no duplicate canonical content |
| E / Phrase/sentence | Capture → saved entry → learn → whole-card reveal/rating → [expression completion](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=447-4185) | Sentence or phrase remains one card |
| F / Collections | Create → open → manage members → study → return; rename/delete independently | Collection membership is not a review identity |
| G / Edit/delete | Entry → edit → save / discard; delete → confirm → updated list | Changed prompt/meaning needs explicit rating invalidation policy |
| H / Import/export | Settings → export; import → file → preview → resolve conflict → confirm | Strict schema/version checks; no silent overwrite or fake success |
| I / Settings | Today header → Settings → direction/theme/reminder/reset → back | Preference state and native permissions persist separately |
| J / Exit/resume | Session → confirmation → originating screen → resume → same card phase | No cursor/reset/duplicate rating |

Prototype links are illustrative, **not actual stateful logic**. Runtime must compute due dates, import previews, modified collection counts, correct session return routes, and notification permissions.

## 5. Design system and component implementation inventory

| Family | Reuse | Code responsibility |
|---|---|---|
| Text | Newsreader editorial + Inter UI | Bundle/licensed fonts; dynamic type and Finnish diacritic support |
| Semantic colours | Existing `VC / Theme` variable collection with Light/Dark | Reference semantic tokens, not manually duplicate literals |
| Navigation | Three-tab bottom nav and header Settings | Expo Router tabs + focused stack |
| Buttons/chips | Existing button, icon, rating, filter and segmented states | Touch targets, press states, accessible names |
| Cards | Today due, featured deck, word detail, flashcard, saved entry | Distinct renderers over shared stable data refs |
| Fields/dialogs | Search, capture, edit, import/confirm | Keyboard avoidance, validation, focus management |
| Review UI | Reveal, rating, progress, revisit, complete | Scheduler transactions and session persistence |
| Safety | Exit/delete/reset/conflict | Distinct destructive/cancel/confirm paths |

Approved nominal palette includes Warm Ivory `#F7F5EF`, Deep Pine `#183B35`, Soft Mint `#D6EAE0`, Apricot `#F4AB77`, Periwinkle `#C9D8F6`; use **existing semantic tokens** instead of hardcoded direct literals. The actual Vokri Cards file already includes `VC / Theme` Light/Dark variables, which Phase 5 handoff uses.

## 6. Responsive and accessible implementation

Figma baselines: 390×844, narrow 360, wide 430, 390×720 short view, light and dark. **No desktop build.**

- Use native safe-area insets, keyboard avoidance, scrollable long Finnish/English answers and sensible Dynamic Type. Do not use tiny text just to fit a long card.
- Buttons/touch targets ideally at least 44×44 pt where applicable. Clear focus ordering for text inputs, first card/reveal, rating choices, errors, and exits.
- Announce reveal/feedback/progress changes to screen readers; no information conveyed by colour alone. Respect reduced motion.
- Check themes with real accessibility contrast measurements and device screenshots. The Figma visual audit is not proof of WCAG AA/VoiceOver/TalkBack compliance.
- Test deletion while an item is in a paused session; handle missing IDs safely. Test font scaling, offline operation, interrupted review, repeated taps and restarts.

## 7. Implementation sequence and first vertical slice

**Technology per Vokri shared plan:** Expo + React Native + TypeScript + Expo Router; deterministic pure TS content/scheduler logic; Zod validation; AsyncStorage via versioned storage interfaces (consider database only if measured scale requires it). Bundled validated vocabulary content is read-only; local storage is for state, entries, preferences and sessions. No V1 backend.

1. **Foundation:** project/app shell, load fonts and tokens, light/dark semantic themes, Today/Discover/My Words, Settings header and accessible components.
2. **Domain:** import curated 2,000 CSV into validated bundled content; stable language-scoped item identities, deck references, optional reviewed form overlays, enrollment, personal content models and storage migrations.
3. **Working vertical slice (first real milestone):** Discover → Finnish Essentials → select **five distinct words** → add to study → Learn New → front/reveal/rate → completed → Today. Persist correct state through app restart.
4. **Due scheduling:** due selection, deterministic Again/Almost/Knew It, first-pass idempotency, revisit, resume and Today derived summaries.
5. **My Words/collections:** capture word/phrase/sentence, edit/delete, search/filters, membership, personal flashcards.
6. **Settings/import/export:** versioned user-content JSON, conflicts, preferences, reminders, progress reset.
7. **Native QA:** iOS/Android, Finland keyboard, Dynamic Type, VoiceOver/TalkBack, 360/390/430, accessibility, offline and persistence.

Avoid building 119 disconnected static screen components. The 119 Figma views are **route/state/variant examples** which should map to far fewer data-driven React Native screen implementations.

## 8. Open decisions requiring implementation discipline

- After **substantial changes** to a studied item's Finnish prompt/meaning, retain historical audits but choose an explicit **relearning/invalidation** policy; do not silently keep stale familiarity.
- A personal entry deleted in a paused queue must not crash or point to a ghost card.
- Choose atomic write/idempotency strategy for review first-pass commits, session cursor and app-background save.
- Decide how separate FI→EN and EN→FI recall evidence will coexist while avoiding duplicate learning IDs across decks.
- Import duplicates/conflicts require non-destructive explicit choices; do not invent automatic merging.
- Export My Words does **not** preserve SRS history, so don't market it as full device migration.
- Swedish must remain behind actual curated-data availability, not fake unlocked cards.
- Some Figma prototype-only flows are illustrative snapshots. A valid prototype destination is not evidence that state transitions or notifications were executed.

**No React Native code was implemented in Prompt 5.** This document is an owner-reviewable design-to-code contract, not a product-release certificate.
