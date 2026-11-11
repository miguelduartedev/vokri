# Vokri — Vocabulary Practice · Prompt 5 Final QA Report

**Date:** 11 November 2026 · **Scope:** Figma design/prototype and handoff, **not native implementation**.  
**Verdict:** **Ready for incremental Expo implementation with explicit conditions**, not certified production readiness.

## 1. Audit scope and evidence

| Phase | Section | Principal source screens | Representative scope |
|---|---|---:|---|
| 01 Foundation | [297:1638](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=297-1638) | 11 | Review, Course, Library and initial practice setup |
| 02 My Words | [323:2076](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=323-2076) | 18 | Word, phrase, sentence, edit, delete, duplicate, empty |
| 03 Flashcards | [340:2467](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=340-2467) | 31 | Reveal, ratings, directions, revisit, completion, resume |
| 04 Word Match | [361:3102](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=361-3102) | 21 | Tile state, matching, refill, error, revisit, sources |
| 05 Integration | [388:3972](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-3972) | **3 minimal new setup states** | Unit, My Words, Combined Word Match selected |

**Total: 84 principal 390×844 frames** in the dedicated Vocabulary Practice series (excluding responsive QA references, component specimens and handoff notes).

Current Figma inspection verified all five sections and a combined **296 existing prototype NODE actions with no missing target nodes**. That number is a graph inventory across all five sections, **not a claim of 296 fully tested user interactions**. All five original Figma pages remain; the new Phase 5 content is a section on the existing Nordic Editorial explorations page.

**Visual evidence inspected in this task:** Actual screenshots of the Review and Course entry points, personal Vocabulary Library, Add Word/Phrase/Sentence, Flashcards default/revealed/revisit/completion, Word Match correct/incorrect/exit/completion, the three new Word Match-selected setup frames, and the full final integration section. Existing 360/430/720 Figma responsive references from Phases 2–4 were retained and included in the audit scope; no device/emulator run has occurred.

## 2. Confirmed fixes performed

| Location | Previous issue | Corrective action |
|---|---|---|
| Original \`297:2037\` Unit Flashcards setup | Newsreader title clipped at the top | Increased heading line-height and re-rendered the screen |
| New \`388:3975\` Unit Word Match setup | Cloned title carried the same clipping risk | Applied corresponding typographic correction |
| \`297:2037\`, \`297:2061\`, \`304:2002\` | Flashcards-only selected mode; Word Match either unlinked or led to a wrong example | Linked their Word Match mode tiles to matching **Unit / My Words / Combined** selected states |
| New \`388:3975\`, \`388:4071\`, \`388:4163\` | These states did not exist | Created **only three** additional mode-selected frames in Phase 5; the earlier originals remain intact |
| Word Match-selected source selectors | Scope changes could revert the mode, causing visually inconsistent destination | Linked all available source switches to Word Match-selected setup variants |
| New Word Match setup clones | Flashcards-only card-direction control and CTA text | Removed card-direction controls, provided brief matching guidance and relabelled CTAs \`Start Word Match\` |
| \`305:2129\` in All Words Word Match | Valid personal vocabulary selection led to “Insufficient matching pairs” despite a populated example | Redirected to the legitimate My Words Word Match setup; insufficient-pairs remains a conditional fallback |
| New \`388:4086\` My Words Word Match selected tile | Clone inherited a misleading reaction to the insufficient-pairs screen | Removed the stale selected-tile interaction |
| Phase 5 Figma section | No consolidated implementation explanation | Added 15 native editable integration panels covering the feature and Expo build contract |

All three new setup frames render with **Word Match selected**, the correct source selected, the appropriate Word Match CTA, and no Flashcards card direction. Only the specific source frames needed for the 8-way matrix were added—not duplicate editions of all four previous phases.

## 3. Prototype and navigation findings

### Confirmed representative paths

- **General Flashcards**: Review > Flashcards > All Words setup > Flashcard session.
- **General Word Match**: Review > Word Match > All Words setup > matching board; select either language, evaluate correct/incorrect, refill and optionally revisit.
- **Unit Flashcards / Word Match**: Course unit > selected Unit setup > either mode (mode preserved while changing source).
- **My Words Flashcards / Word Match**: Library > My Words > Practise > mode-selected My Words setup.
- **Combined-source Flashcards / Word Match**: Combined setup > appropriate mode, without mislabelling selected tiles.
- **Personal capture**: Add word/phrase/sentence, save, browse, edit/delete, see missing-meaning and duplicate examples.
- **Exit/resume and completion**: Both modes contain representative confirmation, resume and finished screens.

### Incomplete or prototype-only behaviour

- Selection of \`10\` / \`20\` / \`All\`, changing an actual unit, search and keyboard entry are visual Figma controls, not a real data-driven filter.
- Source-specific session **return origin** cannot be demonstrated reliably with one generic completion screenshot. Expo must return to the actual Review/Unit/My Words context.
- Word Match **Preview mid-session / Preview final pair** are labelled Figma-only navigation shortcuts that skip unrendered intermediate queue items; remove them in Expo.
- Dynamic randomisation, pair validation, hidden lessons, duplicate resolution, spaced Review dates, session checkpoints and local writes are not executed by Figma.
- Some standalone alternate direction/source session frames intentionally lack an arbitrary next-card reaction because the real queue determines the next item.
- The insufficient-pairs state can be shown as a standalone alternate; actual eligibility drives when it appears in the app.

**Graph integrity is necessary but not sufficient**: no missing prototype destination IDs were found, but automated whole-flow replay on a device has not been performed.

## 4. Visual and design-system findings

Nordic Editorial remains coherent: Warm Ivory/Deep Pine, restrained Mint/Periwinkle, Newsreader for editorial display and Inter for readable controls. Review remains capability-oriented rather than performance/XP-oriented. Flashcards supports words, phrases and personal sentences; Word Match has four legible English/Finnish rows with restrained feedback, not generic radio-button UI.

**Reusable product-specific patterns already present:**
- Practice entry card \`299:1978\`, Mode tile \`303:2002\`, Source choice \`303:2005\`
- Flashcard surfaces \`340:2470\`, reveal \`340:2477\`, rating control \`340:2500\`
- Word Match tile variant set \`361:3122\` (seven variants), board \`361:3123\`, focused header \`361:3144\`, progress \`361:3149\`

Do **not** build a competing design system. In Expo unify reusable header, spacing, progress and action primitives, while keeping Flashcard and Word Match components specialist. Suggested small DS v1.1 candidates: Practice Setup source/mode selection, resumable session indicator, unified optional-practice completion summary. Existing DS v1 need not be mutated simply to increase component count.

No accidental full-screen raster images or wholesale redesign was introduced in Phase 5.

## 5. Responsive and accessibility audit

**Figma references available:** Prompt 2 has 360px/430px capture/edit examples; Prompt 3 has 360px and 430px cards plus a 390×720 revealed-answer reference; Prompt 4 has two 360px Word Match boards, one 430px combined board and one 390×720 completion reference.

**Still required in Expo:**

- Fluid layout at 360/390/430 widths and short viewport; no rigid 390px nested content.
- Large text/Dynamic Type, paragraph and Finnish compound wrapping, safe-area insets, sticky action clearance.
- Keyboard avoidance while editing personal words and sentences, scroll restoration.
- VoiceOver/TalkBack: each matching tile announces its language, selected state and result; after matched tiles vanish, restore focus meaningfully; progress updates announced without excessive verbosity.
- Flashcards announce reveal and rating; disabled/selected states have labels, not only colours.
- Error/correct feedback use readable text and icons, not only a transient coloured flash.
- Reduced motion: skip decorative transitions or respect native setting.
- Modal focus/escape handling and ≥44dp touch targets.

**No physical-device, simulator, automated accessibility-tree, notification or native performance tests were conducted.** The responsive Figma specimens demonstrate intended geometry only.

## 6. Linguistic and content review flags

- \`kiitos\`, \`hei\`, \`minä\`, \`kyllä\` and their selected sample English meanings are plausible instructional examples; production use still needs teaching-content approval.
- \`Minulla on kiire.\` → “I'm in a hurry” is a valuable saved sentence and remains Flashcards-only.
- \`haluan\` is a form of \`haluta\`; spoken \`haluun\` belongs in a recognition note, not as an unrelated dictionary lemma.
- Some short phrases can have context-dependent meanings; author unambiguous glosses before including them in Word Match.
- Word Match must not place duplicate or indistinguishable accepted English meanings on one board.
- The curated Finnish 2,000-word data and UI exercise examples are not teacher-certified; native-speaker/editorial approval remains a release gate.
- The existing mockups use Unit 4 and 94-word/12-personal-entry demo counts. **Do not seed that as real initial learning progress.**

Swedish (\`sv\`) is planned as a distinct **target language to learn**; this feature is currently a Finnish design and does not create Swedish lessons. Learning-language scope must be explicit in every session.

## 7. Data and Review boundaries

Scheduled Review and voluntary practice are **not interchangeable**. Word Match is recognition; Flashcards is learner-rated recall. Optional session completion should not:

- Mark a target permanently mastered.
- Complete lessons or units.
- Clear a due scheduled Review item.
- Push scheduled Review dates forward.
- Create a second hidden spaced-repetition engine.

A small optional practice history and finite revisit queue may exist alongside knowledge state. Store it separately. Version session checkpoints so Exit/Resume doesn't change active tile positions or double score items.

## 8. Implementation readiness and blocking items

**Design/spec handoff: READY, with conditions.** All eight mode×scope combinations are represented and visually consistent. The three new Figma setup frames were inspected after creation, and the relevant prototype controls were connected.

**Native feature: NOT IMPLEMENTED or release-ready.** Priority gates:

| Severity | Open item | Owner |
|---|---|---|
| High | Real data-driven source eligibility, four-pair ambiguity control and deduplication | Shared practice domain |
| High | Persistent session/resume and idempotent first pass/revisit | Domain + storage |
| High | Native 360/390/430+short-screen, Dynamic Type, keyboard and VoiceOver/TalkBack | Expo QA |
| High | Teaching content provenance and Finnish editorial review | Content/editorial |
| Medium | Origin-aware return navigation and user-owned item deletion impact on session | Expo Router / data |
| Medium | Bounded \`All\` session-size policy and truthful preflight count | Product/implementation |
| Medium | Optional practice/history versus scheduled Review event separation | Learning engine |
| Low | Promote only useful phase-specific design elements into DS v1.1 | Design system |

## 9. Recommended Codex sequence

1. Inspect current repository/Expo foundation, authoritative curriculum docs and this handoff. Extend existing learning-domain models rather than duplicate registry/storage.
2. Implement source selectors/eligibility and a **Unit 1 Finnish Flashcards vertical slice**, with save/resume tests.
3. Build deterministic Word Match reducer, stable board slots, clear/incorrect refill and finite revisit.
4. Integrate Review, Unit, Library and My Words routes, including one coherent setup preserving mode/source.
5. Run native responsive/accessibility/content QA and tighten the product based on actual device evidence.

### Figma references
- [Final integration and decisions](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=388-3972)
- [All 84 screen references](./vocabulary-practice-screen-map.json)
- [Data/session contract](./vocabulary-practice-data-contract.md)
- [Implementation handoff](./vocabulary-practice-implementation.md)

**The final integration work is intentionally limited to Figma, documentation and this proposed GitHub PR. No application code has been modified.**
