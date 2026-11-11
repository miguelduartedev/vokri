# Vokri — Vocabulary Practice · Expo Implementation Handoff

**11 November 2026 · Prompt 5/5 final integration · Design/specification only.**  
**Product:** Vokri (working name); Finnish learning first, Swedish learning later. **Platform:** React Native + Expo + TypeScript, local-first. The web frontend remains deferred.

**Read alongside:** [Existing mobile handoff](../Language_Learning_Mobile_Implementation_Handoff.md), [Nordic Editorial tokens](../Nordic_Editorial_Mobile_Tokens.json), [Vocabulary Practice screen registry](./vocabulary-practice-screen-map.json), [Data/session contract](./vocabulary-practice-data-contract.md), [QA report](./vocabulary-practice-qa-report.md).

## 1. Sources of truth

- **Approved Figma:** [Vocabulary Practice / Foundation](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-1638), [My Words](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=323-2076), [Flashcards](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=340-2467), [Word Match](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=361-3102), [Final integration](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-3972).
- **Design system:** [Nordic Editorial v1](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-828) — Warm Ivory \`#F7F5EF\`, Deep Pine \`#183B35\`, Soft Mint \`#D6EAE0\`, Apricot \`#F4AB77\`, Periwinkle \`#C9D8F6\`, Newsreader + Inter. Use semantic token names; don't create a second visual language.
- **Learning source:** A1 Foundations Curriculum Blueprint, Content + Learning Data Architecture Specification and curated Finnish vocabulary. These are separate references; do not invent missing vocabulary allocations or rewrite review logic.
- **Implementation contract:** This specification controls optional vocabulary practice integration. The practice screen-map JSON contains **84 exact existing Figma frames** and real prototype destinations; node IDs must not be made up.

Existing Figma Unit 4, 94 encountered items, 12 saved personal entries, Flashcard/Word Match 10-item progress are **visual samples**, not the real first-run learner state. Start production teaching at Finnish **Unit 1 — Hello**.

## 2. Feature information architecture

Keep four existing primary tabs **Home, Course, Review, Library**, not a fifth Practice tab. Optional modes are discoverable from:

| Origin | Entry UI | Next destination | Return |
|---|---|---|---|
| Review | “Practise anytime” cards for Flashcards/Word Match in \`297:1639\` | Shared practice setup with mode preselected | Review |
| Course | “Practise Unit 4 vocabulary” exemplar \`297:1696\` | Unit-preselected shared practice setup; current *reached* unit in real app | Course/unit |
| Library | Vocabulary > My Words \`297:1849\` and \`323:2459\` | My Words add/edit, then Practice My Words → shared setup | My Words / Library |
| Personal detail | Saved item detail \`323:2556\` or sentence detail \`323:2798\` | Practice with eligible personal collection/item | Entry detail or Library |

**Do not replace scheduled Review with optional practice.** The Review landing may have a due queue and separate practice cards; the two semantics are deliberately distinct.

## 3. One setup, eight combinations

The existing design contains a 2×4 matrix, not eight competing setup flows:

| Scope | Flashcards selected | Word Match selected | Representative live-mode example |
|---|---|---|---|
| Encountered course | [297:1989](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-1989) | [297:2013](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-2013) | \`343:2467\` / \`362:3113\` |
| Specific reached unit | [297:2037](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-2037) | [388:3975](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-3975) | \`343:2783\` / \`362:3545\` |
| My Words | [297:2061](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-2061) | [388:4071](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-4071) | \`343:2821\` / \`362:3572\` |
| Course + My Words | [304:2002](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=304-2002) | [388:4163](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-4163) | \`343:2935\` / \`362:3599\` |

**Final Figma QA change:** three source-preserving Word Match-selected setup variants were added in Phase 5; the original Flashcards frames were preserved. Mode switches now take the user to the same source in the other mode. Source switches keep the currently selected mode. All modes' CTAs have correct destinations; there are no longer eligible My Words states incorrectly linking to an “insufficient matching pairs” screen.

Session-size choices: **10, 20, All**. Numeric size resolves to the number actually eligible if fewer. “All” must be visibly bounded if a collection is too large; do not silently create an endless activity. Flashcards alone exposes card direction (Finnish → English, English → Finnish, Mixed); Word Match does not show an irrelevant card-direction control.

\`PracticeSetup\` should be one data-driven screen with \`mode\`, \`scope\`, \`selectedUnitId?\`, \`size\`, \`direction?\`, \`origin\`. The three extra Figma variants are documentary, not three additional Expo screens.

## 4. Eligibility and source semantics

- **Encountered:** Course vocabulary/phrases the learner has actually seen, not all contents of future units.
- **Unit:** The intersection of reached-unit vocabulary and actual encounters. Switching modes preserves the same unit.
- **My Words:** Personal words, short phrases and full sentences, user-owned and editable. Words/phrases may match only if concise and unambiguous; sentences remain Flashcards-only for V1.
- **Combined:** Union of encountered course + user items, deduplicating equivalent canonical IDs without discarding user notes.
- **Language:** \`learningLanguage='fi'\` for initial release. Future Swedish \`sv\` must have a separate content registry, progress, review and personal collection. Do not mix target-language words in a session.

**Eligibility failure:** no vocab yet → \`297:2085\`. Fewer than four unambiguous Word Match pairs → \`297:2109\`; offer Flashcards or add more words. Do not route a valid pool there as a generic mode-selection screen.

See the [data contract](./vocabulary-practice-data-contract.md) for the complete score/duplicate/ambiguous-gloss criteria.

## 5. Flashcards — active recall

The learner should **attempt recall before revealing** the answer. Flashcard states:

1. \`front\` with a large Finnish word, short phrase or personal sentence (or English when reverse direction is selected).
2. \`revealed\` with counterpart, optional contextual example and user notes.
3. Self-rating \`Again\`, \`Almost\`, \`Knew it\`, then next distinct card.
4. End of first pass; if Again/Almost items exist, present one optional finite revisit.
5. Completion summarises **unique items** and **items revisited** separately.

Examples: [Front \`343:2467\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=343-2467), [Revealed \`343:2505\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=343-2505), [Revisit \`343:2971\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=343-2971), [Complete \`343:3297\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=343-3297), [Exit \`343:3345\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=343-3345).

The rating describes **voluntary practice**, not an automatic scheduled-Review result. No XP, score, streak or false permanent familiarity. Sentence mining example *Minulla on kiire.* belongs in Flashcards and remains a whole sentence.

## 6. Word Match — recognition

Use a focused screen (not bottom tabs), a calm progress bar and four visible pairs. Show English and Finnish columns, each independently shuffled. The active board uses stable slots; a match clears exactly those two slots. New eligible pair fills only the vacant locations.

**Interaction reducer:**
\`none → first-selected → choose-opposite → correct | incorrect → clear/refill | release-second → continue → first-pass-complete → optional-revisit → complete\`.

- Either column may be selected first.
- Same-tile tap deselects; another tile in the same column changes first selection.
- Correct match: mint + explicit acknowledgement, progress increments once for the distinct pair, clear/refill.
- Incorrect: restrained warm feedback, *first tile remains selected*, second tile released; no progress increment.
- Disable double taps during evaluation. New slots start unselected.
- Mismatches may enter one bounded optional revisit; do not force perfection.
- Completion displays distinct pairs and revisit attempts separately.

Examples: [initial \`362:3113\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=362-3113), [correct \`362:3194\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=362-3194), [incorrect \`362:3221\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=362-3221), [revisit \`362:3383\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=362-3383), [complete \`362:3464\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=362-3464), [four-pair pool \`362:3653\`](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=362-3653).

**Do not ship:** “Preview mid-session”, “Preview final pair”. They are Figma-only jumps across undrawn states. A real app advances by the queue, never by these shortcuts.

## 7. My Words and sentence mining

Required end-to-end authoring:

- Empty personal collection \`323:2079\`; add word \`323:2145\`, phrase \`323:2189\`, sentence \`323:2236\`.
- Save Finnish text and English meaning; add optional context, note and unit association \`323:2285\` / \`323:2335\`.
- Warn about possible duplicates \`323:2388\` without discarding user data.
- Saved states \`323:2424\` / \`325:2349\` / \`325:2384\`.
- Browse, search, filter and inspect personal entries \`323:2459\` / \`323:2556\` / \`323:2798\`.
- Edit \`323:2600\`, delete with explicit confirmation \`323:2649\`, reflect result \`331:2372\`.
- Missing meaning and no results \`323:2685\` / \`323:2728\`.
- Long personal sentence remains first-class data for Flashcards, not fragmented or automatically translated.

Personal items must remain editable without mutating official curriculum, and they must not artificially complete Unit 1–8 or change scheduled Review due dates.

## 8. Shared React Native component mapping

| Figma concept | Suggested RN component / responsibilities |
|---|---|
| \`299:1978\` Practice card | \`PracticeModeEntry\` — Review and Course entry CTA, accessible label |
| \`303:2002\` Practice mode tile | \`PracticeModeTile\` — selected/inactive, preserves current scope |
| \`303:2005\` Source choice | \`VocabularySourceChoice\` — four sources and active state |
| \`297:1989\` setup | \`PracticeSetupScreen\` — one shared source/mode/size form |
| \`323:2145\` capture | \`PersonalVocabularyEditor\` — word/phrase/sentence and validation |
| \`340:2470\` word card | \`FlashcardSurface\` — front/reveal and direction |
| \`340:2500\` rating | \`FlashcardRatingControls\` — Again, Almost, Knew it |
| \`361:3122\` seven tile variants | \`MatchTile\` — Default/Selected/Correct/Incorrect/Cleared/Disabled/Refill |
| \`361:3123\` 4-pair board | \`MatchingBoard\` — stable left/right slots and pairing |
| \`361:3144\` / \`361:3149\` | \`FocusedPracticeHeader\` / \`PracticeProgress\` |
| \`362:3491\` exit sheet | \`PracticeExitSheet\` with safe Stay and Exit actions |
| \`343:3297\` / \`362:3464\` | \`PracticeCompletionSummary\` — mode-specific facts, not mastery score |

Keep the current design system, no additional universal game UI library. Where design-specific comps are older exploration-local components, unify them in RN at implementation time.

## 9. Navigation and session lifecycle

Recommended conceptual routes:
\`/(tabs)/review\` → \`/practice/setup\` → \`/practice/flashcards\` or \`/practice/match\`; \`/(tabs)/course\` → unit route → same setup with unit context; \`/(tabs)/library\` → \`/my-words\` → add/edit/detail/practise.

These are **recommended Expo Router paths**, not existing app routes. Preserve an \`origin\` contract in session state so completion/exit returns to Review, Unit, My Words or personal detail appropriately. Figma's generic All Words completion cannot demonstrate every dynamic return path.

A session checkpoint should preserve chosen language, mode, source, unit, selected item queue, active card or stable matching slots, progress, revisit list and source origin. Resume must not reset, reshuffle remaining items or duplicate ratings. Reset-progress behaviour must follow the app-wide local policy; personal entry deletion is a distinct destructive action.

## 10. Accessibility, responsiveness and animation

- Reference viewport is 390×844, **not** a fixed native pixel size. Test 360, 390, 430 and short 720-height devices. The latest new setup screens are editable 390×844 Figma references; older phases already have responsive references.
- Full tile/card is tappable (≥44dp), with visible selected, correct and incorrect treatments not reliant on colour alone. Announce language column, selection, match outcome and progress via VoiceOver/TalkBack.
- Large Finnish words/sentences wrap naturally; Flashcard long answer scrolls under safe pinned controls; matching board retains equal columns and tile height where practical.
- Respect insets, keyboard avoidance, reduced motion, focus restoration after tile removal and dialogs. Native dynamic type and assistive tech have **not** been verified in Figma.
- Gentle 150–250ms transitions are guidance, not mandatory animation or timer. No leaderboard, pressure, confetti or gamification.

## 11. What Phase 5 changed in Figma

- Added **three minimal Word Match-selected setup frames**, reusing and preserving prior source designs: \`388:3975\` Unit, \`388:4071\` My Words, \`388:4163\` Combined.
- The two-mode × four-source setup graph now preserves both mode and source. Word Match CTAs lead to source-specific existing sample sessions.
- Removed prior confusing My Words Word Match mode transition to the insufficient-pairs screen despite a visually populated collection; the insufficient state remains a legitimate fallback **when fewer than four eligible pairs exist**.
- Corrected cropped Newsreader heading on original Unit Flashcards setup \`297:2037\` and new unit Word Match setup.
- Added an editable 15-panel [final integration board](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-3972) covering architecture, entry points, data boundaries, state machines, accessibility and Expo implementation steps.
- All previously approved sections are still present. No new Figma page; the source UI is preserved except the explicitly documented setup link changes and title repair.

## 12. Important limitations

1. **Figma does not execute** session randomisation, scoring, storage, actual review scheduling, native notifications or data validation.
2. Several standalone alternate-source Flashcards and Word Match examples retain intentionally simplified navigation or no next-card reaction where true destination depends on session data.
3. Interactive selection of \`10\`/\`20\`/\`All\`, changes to Unit 4 source and keyboard entry are static Figma demonstrations; implement actual controls in Expo.
4. Figma word/translation examples and the curated dataset still require editorial Finnish-teacher review before use in teaching/assessments.
5. Vokri is a working name, and Swedish is a future **learning language**; do not ship invented Swedish lesson content or use Figma's legacy \`Suomi\` wordmark as binding brand metadata.
6. This PR contains **documentation only**, not an implemented app.

## 13. Codex implementation order and first task

1. **Shared practice-domain first:** inspect repository and current data architecture; implement typed references, source eligibility, language-scoped collections, deterministic session reducers and local storage interface.
2. **One real Flashcards vertical slice:** one reached Finnish Unit 1 item, reveal, rate, save, resume and finite revisit; test correct references and scope preservation.
3. **Word Match reducer and board:** four unambiguous pairs with either-column selection, correct/incorrect, stable refill and finite revisit; no fake answer data.
4. **Entry points and My Words:** Review/Course/Library route integration and add/edit/delete/search/combined source.
5. **Native QA:** a11y, responsive, Dynamic Type, keyboard, reduced motion and Finnish editorial checks.

**Recommended first Codex prompt:**  
> Inspect \`docs/handoff/\` and \`docs/handoff/vocabulary-practice/\`, the existing repo, and the approved Figma nodes. Without creating a second learning database, implement a typed, language-scoped shared practice domain: four vocabulary sources; validated eligibility for Flashcards versus Word Match; stable canonical/personal IDs; session-size resolution; finite first-pass and revisit queues; local, versioned resumable checkpoints; and pure deterministic tests. Add a minimal working Finnish Unit 1 Flashcards slice using data-driven content and the Nordic Editorial design. Do not implement all UI screens, rewrite scheduled Review, seed Unit 4 progress, add Swedish course content or introduce a backend. Open an unmerged PR with tests and screenshots.

**Next milestone:** user review of this handoff PR, followed by incremental Expo implementation, not another large design exploration.
