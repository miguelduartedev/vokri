# Language Learning App — Nordic Editorial Mobile Final QA Report

**Audit date:** 2026-11-10. **Figma:** https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766. **Editable QA section:** https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=287-1638. **Verdict:** Ready for **staged implementation handoff**, not certified production release.

## Brand-neutral and Swedish-course architecture amendment (post-audit)

The owner clarified **after the visual Figma QA** that the product must not be branded *Suomi*: Finnish is its first learning language (`fi`), and Swedish (`sv`) is planned as another language to learn. **Vokri is the working project name, but final public branding remains provisional.** The source Figma designs still show `suomi` in their wordmark, and their original source names/IDs are preserved for reference. This is an **open branding acceptance criterion**, not a completed visual fix.

Engineering must implement a language-neutral internal project identity, language-scoped curriculum registries and progress/review records, and a future-safe selected-learning-language field. The first release does **not** need selectable Swedish course content; do not mock unavailable Swedish lessons. Distinguish target-language support from UI localisation. Avoid the previous `suomi:` storage keys; use versioned neutral keys and a non-destructive migration if legacy saves already exist. The Finnish curriculum and 27 existing Figma screen designs were not altered by this file amendment.

**New remaining work item (R-10, high before public branding):** Choose a product name that can represent Finnish and Swedish, then update wordmark, app display name, bundle metadata, icons and store descriptions. The *Nordic Editorial* name is the visual design direction, not the product brand.

## 1. Scope, evidence and method

**Verified:** All 27 listed Nordic Editorial 390×844 frames exist on the consolidated explorations page; each was reviewed via a current 390×844 screenshot. The structural file inspection counted all 27, their text layers and Figma instance layers, and found no image-fill screen UI or significant unintended overflow at the reference viewport. The Design System v1 has 16 component sets, 57 variants, 30 variables in its semantic colour collection (27 aliases + 3 extra colour primitives), 25 dimension variables and 12 reusable text styles. Figma has five pages; no page was added for this audit.

**Full scroll inspection:** Course, Review Landing, Vocabulary Library, Grammar Library, Grammar Detail, Vocabulary Detail, Progress, Settings, Unit Complete, No Search Results, Loading, and Onboarding Ready were inspected beyond the first viewport using temporary QA copies that were removed. Remaining shorter screens were inspected at their full 390×844 frame.

**Prototype method:** Read actual reactions/prototype destination IDs from Figma. Links were checked for presence and destination validity; a click-graph inspection is **not** a native interaction, automated Figma replay or confirmation that save/review state actually changes.

**Responsive method:** Temporary resized copies were rendered at 360×844 (Home, Review Default, Vocabulary Detail), 430×844 (Course, Settings), and 390×720 (Home, Grammar Detail); each temporary copy was deleted. These reveal fixed Figma geometry limitations. No actual Expo app or phone was run.

## 2. Screen review register

| # | Screen | Figma | 390 screenshot | Full-scroll review | Notes |
|---:|---|---|---|---|---|
| 1 | Home | [173:826](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-826) | Inspected | Not required | Added visible Progress link, fixed tab/Settings/Review reactions |
| 2 | Grammar Lesson | [173:922](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-922) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 3 | Exercise / Default | [173:997](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-997) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 4 | Exercise / Correct | [173:1052](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-1052) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 5 | Course | [182:881](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-881) | Inspected | Yes | Continue 4.4 mock destination missing |
| 6 | Review / Landing | [182:929](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-929) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 7 | Review / Default | [182:977](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-977) | Inspected | Not required | Added Not sure button; no fake scoring prototype |
| 8 | Review / Correct | [182:1001](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-1001) | Inspected | Not required | Q3/10 → remaining items must be dynamic |
| 9 | Vocabulary Library | [182:1025](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-1025) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 10 | Grammar Library | [242:1030](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1030) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 11 | Grammar Detail | [242:1079](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1079) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 12 | Vocabulary Detail | [242:1114](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1114) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 13 | Progress | [242:1145](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1145) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 14 | Onboarding / Welcome | [242:1167](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1167) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 15 | Onboarding / How Learning Works | [242:1193](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1193) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 16 | Onboarding / Ready | [242:1219](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1219) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 17 | Settings | [242:1245](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1245) | Inspected | Yes | Wired reset entry; reminder behaviour decision pending |
| 18 | Exercise / Almost | [268:1270](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1270) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 19 | Lesson Complete | [268:1320](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1320) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 20 | Unit Complete | [268:1345](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1345) | Inspected | Yes | Removed misleading Unit5→Unit4 prototype reaction |
| 21 | Review / Session Complete | [268:1394](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1394) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 22 | Review / Nothing Ready | [268:1419](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1419) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 23 | Library / No Search Results | [268:1468](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1468) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 24 | Loading | [268:1517](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1517) | Inspected | Yes | Visual hierarchy consistent at 390px |
| 25 | Offline | [268:1566](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1566) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 26 | Error | [268:1615](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1615) | Inspected | Not required | Visual hierarchy consistent at 390px |
| 27 | Reset Confirmation | [268:1664](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1664) | Inspected | Not required | Overlay backdrop expected to exceed Settings scroll frame; not content clipping |

## 3. Changes made to Figma during this audit

| Category | Node/screen | Exact action and reason |
|---|---|---|
| Navigation | `173:826` Home | Connected Settings, Review preview, four-tab destinations and Progress preview; the new “View progress ›” text makes the latter discoverable. |
| Navigation | `182:881` Course | Connected Home tab and header Settings; deliberately did **not** point 4.4 Continue to unrelated 4.2 lesson. |
| Navigation | `182:929` Review Landing | Connected Home tab and header Settings; Start Review had already been wired. |
| Navigation | `182:1025` Vocabulary Library | Connected Home tab, header Settings and Grammar switch, preserving Vocabulary Detail link. |
| Navigation | `242:1245` Settings | Connected the 94px “Reset learning progress” row to Reset Confirmation `268:1664`. Cancel link already returns to Settings. |
| Navigation | `268:1419`, `268:1468`, `268:1566`, `268:1615` | Added missing nonactive main-tab links in Review Empty, Library Search Empty, Offline and Error examples. |
| Prototype integrity | `270:1674` Unit Complete CTA | Removed an incorrect prototype link to Course still showing Unit4. The native route must resolve the actual next unit. |
| Review state | `182:977` Review Default | Added a 342×52 Design System Text button “I’m not sure yet” in its reserved feedback area, without changing the answer option positions. App must implement the `not_sure` result. |
| Visual affordance | `173:890` capability preview | Added an editable “View progress ›” cue while preserving the original Home composition. |
| Handoff | `287:1638` | Created the new native editable **Final Mobile QA & Implementation Handoff** section beneath Exploration 04; no full-size duplicate screens or new pages. |

All existing Figma screen IDs remain present. Some existing screens have documented interaction changes; **“screens unchanged” would not be a truthful absolute claim**. The visual changes are limited to Home’s Progress cue and Review Default’s Not Sure button. The DS v1 page was not modified.

## 4. Navigation and prototype audit

| Flow | Figma status | Actual observation / missing work |
|---|---|---|
| A. Onboarding | Linked | Welcome `242:1167` → How `242:1193` → Ready `242:1219` → Home `173:826`. At runtime the first actual learning content must be Unit1, not Unit4 sample. |
| B. Lesson | Partial | Home `173:826` → Grammar Lesson `173:922` → Exercise Default `173:997` → Correct `173:1052` is linked. Current Course shows lesson 4.4, while illustrative grammar is 4.2; no genuine 4.4 → next authored step exists. Exercise Correct step4/5 not connected to a fabricated completion. |
| C. Review | Partial | Review Landing → Review Default Q3/10 → Review Correct is linked. Review Session Complete exists separately and returns to landing. No invented jump from Q3/10 to 10/10. Added visible Not Sure option without fake scoring. |
| D. Reference | Linked for representative items | Vocabulary ↔ Grammar tabs linked; `haluan`/inessive detail and their back destinations linked. Search, filters and remaining entries depend on native data. |
| E. Settings | Linked for Cancel | Home Settings → Settings → Reset Confirmation → Cancel → Settings. Reset destructive action deliberately has no fake data mutation. |
| F. Recovery | Linked to illustrative states | Error Try Again → Loading, Error Back Home → Home, Offline Continue Learning → Home, Search Clear → Vocabulary. These are visual transitions, not proof of resource or data recovery. |
| G. Progress | Linked | Home capability preview → Progress and back to Home. Added a visible text affordance on Home. |

**Remaining meaningful gaps:** Next lesson from Course/lesson completion; matching actual Unit 5 CTA, continuing Review from Q3 to Q10 and Session Complete, the Not Sure evaluation, other lesson exercise kinds, modal focus management, settings toggles and actual local reset. These belong in Expo/data logic, not fabricated Figma prototypes.

## 5. Visual and design-system assessment

The 27 visible renders maintain the approved **Warm Ivory / Deep Pine / Mint / Periwinkle / Apricot** palette, selective Newsreader editorial headings, Inter exercise/readable copy, open dictionary layouts, and prominent Finnish forms. A1 Foundations keeps adult-friendly, non-punitive capability framing. The Home hero is distinctive, and three completion screens communicate practice rather than exaggerated rewards.

**Reuse audit:** The DS is real (16 Figma component sets/57 variants) with semantic variables and text styles. Most later screens use instances of its buttons/headers/search/nav/feedback. Exploration 01 predates Design System v1 and retains some local original components; a strict all-screen instance-reuse audit would fail. Codex should use one RN component system matching the approved visual language rather than copying each old Figma local control separately.

**No aesthetic redesign recommended.** The approved layouts are sufficiently mature to begin implementation. True improvements now come from working content, navigation, responsive layouts and native accessibility.

## 6. Responsive and short-screen findings

| Test case | Observation | Severity for Expo | Required action |
|---|---|---|---|
| Home at 360px | Fixed 390px header/content/tab geometry extends beyond resized viewport; right-side clipping | **High** | Use fluid 100% widths, 24dp margins only where feasible, adaptive inner grids and a correct tab bar width. |
| Review Default at 360px | Progress count and right answer affordances can clip | **High** | Flex row/available width and text constraints; count must remain visible. |
| Vocabulary Detail at 360px | Featured card and text can clip on right; fixed 390px footer may overhang | **High** | Content width = viewport width − 2×margin; footer follows device inset and keyboard. |
| Course at 430px | Fixed 390px layout underfills wider viewport; bottom chrome does not stretch | **Medium** | Container stretches; centre/rebalance reading width without exceeding ergonomic measure. |
| Settings at 430px | Fixed-width content leaves unbalanced empty right side | **Medium** | Stretch full-width header and container while controlling text line length. |
| Home & Grammar Detail at 390×720 | Static 844px fixed chrome is clipped below shorter frame | **High** | Compute viewport dynamically; fixed actions remain visible, content scrolls and has footer clearance. |
| Dynamic Type / accessibility text | Not mechanically simulated or tested on device | **High, unverified** | Test 200% scaling, long Finnish forms, keyboard/input, VO/TalkBack. |

These are Figma *static-resize* findings, not proof that a future React Native layout fails. They establish a concrete acceptance test. No permanent additional viewport screens were added.

## 7. Accessibility findings

### Checked from source colours

| Foreground / background | Contrast | WCAG AA normal-text target 4.5:1 |
|---|---:|---|
| pine on ivory | 11.23:1 | Pass |
| secondary on ivory | 5.75:1 | Pass |
| muted on ivory | 4.57:1 | Pass |
| pine on mint | 9.74:1 | Pass |
| pine on periwinkle | 8.53:1 | Pass |
| pine on apricot | 6.37:1 | Pass |
| almostInk on almostSurface | 6.31:1 | Pass |
| pine on paper | 12.13:1 | Pass |
| border on ivory | 1.25:1 | Fail for text |

This verifies those specific hex combinations, **not every rendered text layer or focus ring**. Border `#D9DED5` on Ivory only ~1.25:1, so it must remain decorative; selection/focus needs Pine or another sufficiently strong indicator and ideally icon/text. Correct and Almost already use explicit indicators. The reviewed answer options are 60px high; primary buttons 52px, navigation tabs wider than 44px.

### Not verified by Figma

Native VoiceOver and TalkBack reading order, accessibility state announcements, keyboard focus and text input behavior, actual Dynamic Type scaling, switch state, notification permission handling, modal focus/dismissal, reduced-motion behavior and device-specific safe-area handling all require implementation tests. The Figma nav label style is **11px**, which deserves a legibility and text-scaling check. Visual contrast passes cannot replace assistive technology QA.

**Required a11y mapping:** `accessibilityRole="tab"`/selected for navigation, `button` for choices and “Not sure”, `switch` for preferences with value, explicit text status for completion/familiarity, an announcement for scored feedback, logical focus restoration after closing Reset, no reliance on colour alone.

## 8. Finnish-language / pedagogy editorial flags

| Visible concept | Audit finding | Editorial next step |
|---|---|---|
| `talo → talossa`, `kauppa → kaupassa` | Appropriate as instructional examples for inessive “in”; explanations simplified for beginners | Native teacher validates explanation and exercise wording before shipping. |
| `Helsinki → Helsingissä` | Valid example but includes stem/gradation change; **not** just append -ssä to unchanged lemma | Explicitly avoid presenting a universal mechanical suffix rule. |
| `Olen Helsingissä.` / “in Helsinki” | UI source is consistent; distractor “to Helsinki” clearly not correct | Teacher approves full example set/feedback. |
| `En tiedä.` / “I don’t know” | Recognisable useful phrase; explanation “En marks first-person negation” is compressed | Confirm teaching level and avoid implying complete negative-verb paradigm. |
| `haluan` (I want) / `haluta` lemma / spoken `haluun` | Figma intentionally distinguishes learner-facing form, dictionary lemma and spoken recognition | Preserve this structure in content model; teacher review colloquial register. |
| `Minulla on...`, genitive `-n` | Grammar Library labels them for later in course | Do not automatically mark familiar or completed in Unit 4 sample. |
| Unit 1 name question | Curriculum blueprint/architecture flags the exact candidate for teacher review | Keep `needs_review` until approved; do not invent production target. |
| `Vähitellen` and other poetic empty-state motifs | Previous empty-state sample was refined to “Olen täällä.”, consistent with known basic vocabulary | Empty-state copy must not change production allocation in the curriculum. |

No native Finnish teacher certification was performed in this audit. We inspected visible source content and flagged pedagogical simplifications; this is not authoritative linguistic verification. Before release, assess AI-curated CSV glosses/examples, spoken forms, source attribution/licensing and original content.

## 9. Design System v1.1 candidates

**Essential for implementation as shared RN components (can live in code without editing Figma):** `SettingsRow` + accessible switch, `CapabilityStatement`, `ConfirmationSheet` and a reusable empty-state template. The Review `NotSureAction` is already represented with a Text button. **Nice-to-have v1.1 Figma library:** completion header and skeleton placeholder. Do not create a generic large UI kit or duplicate existing DS1 Button/AnswerOption/Feedback components.

## 10. Unresolved issues and release gates

| ID | Severity | Outstanding issue | Owner/stage |
|---|---|---|---|
| R-01 | High | 390px static layouts clip/underfill at 360/430 and short heights | Expo foundation & responsive QA |
| R-02 | High | No real accessibility device validation; dynamic text, focus, VO/TalkBack | Native QA |
| R-03 | High | Real Unit 1 learning/lesson/review state not implemented; Unit 4 is mock content | Unit 1 vertical slice |
| R-04 | Medium | Prototype learning/Review continuation incomplete; no false next steps added | Expo Router/content-driven navigation |
| R-05 | Medium | Daily reminder switch visually enabled but notification delivery/permission/default time unspecified | Native settings decision |
| R-06 | High for release | Finnish lessons, spoken notes and examples require editorial native-speaker review | Curriculum/content author |
| R-07 | Medium | Actual persistent error fallback behavior must match “saved progress remains” copy | Persistence/error handling |
| R-08 | Medium | Review `not_sure` control now visually present but Figma cannot perform scheduling | Review V1 |
| R-09 | Low | Some older exploration components predate shared DS1 variants | React Native shared component implementation |

## 11. Implementation readiness assessment

**Design-to-code handoff: READY, with conditions.** The 27 approved Figma specimens and machine-readable tokens are sufficiently detailed to build the mobile app without revisiting aesthetic direction, but final language-neutral branding remains unresolved. The design specification deliberately leaves native details flexible where appropriate. **Native app release: NOT YET READY.** The responsive, accessibility, persistence, review scheduling, reminders and editorial content gates above remain open.

### Recommended first Codex task

**Stage 01 — Expo Foundation and Nordic Editorial Mobile Shell:** inspect the repo; create/adapt Expo Router + TypeScript, exact theme tokens and fonts, safe-area-aware four-tab navigation, core buttons/headers/answer options, one Home + Onboarding Welcome + Unit 1-compatible lesson/exercise shell. Produce emulator screenshots at 360/390/430 plus a short phone. Avoid backend/Next.js/all-eight-unit scope. Next PR: functional Unit 1.1 learning loop with genuine local persistence and review integration.

## 12. Verification and attachments

- [Final editable QA Figma section](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=287-1638) — present; no additional page created.
- [Consolidated 27-screen design page](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766) — prior screens and Design System v1 remain available.
- [Authoritative design system](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-828) — 16 component sets, 57 variants; no edits to DS page in this final QA.
- `Language_Learning_Mobile_Implementation_Handoff.md` — 22-section screen-by-screen Expo specification.
- `Nordic_Editorial_Mobile_Tokens.json` — verified tokens, text roles, dimensions, component references and contrast findings.
- `Language_Learning_Mobile_Screen_Map.json` — 27-entry registry with Figma links, route/state classification and implementation priorities.
- Source curriculum/architecture documents are available separately and should accompany this handoff to Codex.

**Explicit limitations:** no real native application was built, no live notifications tested, and no automated physical-device or Finnish-teacher QA occurred in this phase.
