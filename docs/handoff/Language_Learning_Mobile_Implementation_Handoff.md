# Language Learning App — Nordic Editorial Mobile Implementation Handoff

**Status:** Brand-neutral update of the final Figma visual-design handoff; ready for staged Expo implementation, **not** a claim of native production readiness.  **Audit date:** 10 November 2026.  **Priority:** React Native + Expo on iOS/Android; website deferred.

**Figma:** [27-screen Nordic Editorial explorations](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-766) · [Design System v1](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-828) · [Final editable QA section](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=287-1638).

## Important update — app brand and multilingual scope (supersedes earlier naming assumptions)

**Decision:** The product is **not called Suomi**. Its final user-facing name is **TBD**. Use `vokri` as the working repository/package slug and `Vokri` as the provisional app display label. Treat the final public brand as a separate, still-open decision. Do not ship `Suomi` as its brand or adopt `Nordic Editorial` as a product name: **Nordic Editorial describes the approved visual design language**. The current Figma file, node names, design-system token collection names and earlier filenames retain the word *Suomi* for historical source traceability, not as the future product name. Preserve all precise Figma IDs, links, variant identifiers and verified colour values.

**Learning-language roadmap:** Finnish (`fi`) is the **only implemented target language in the first release**. Swedish (`sv`) is the planned next **target language to learn** and must be possible without re-architecting the app. A target language is distinct from the language of the app interface; Swedish course support is **not** the same as localising interface text into Swedish. Keep any explanation-language setting outside V1 unless explicitly requested.

**Required data isolation:** Each course, stage, unit, lesson, vocabulary item, phrase, grammar concept, review record, capability and lesson cursor belongs to one `learningLanguage` / `targetLanguage` code (`fi`, later `sv`). Prefer stable globally scoped IDs such as `course.fi.a1-foundations` and `course.sv.a1-foundations` for future course manifests, or a formally equivalent `(language, localId)` composite key. Do not collide on IDs like `unit.hello` across languages; do not assume Finnish-specific grammar concepts apply to Swedish. Existing Finnish curriculum identities may be kept as local IDs within the `fi` registry if this matches the source architecture. Never silently rewrite approved curriculum allocations.

**Learner data:** Use brand-neutral versioned storage keys such as `language-learning:progress:v1` and `language-learning:preferences:v1` (or a documented equivalent). Scope progress, familiarity, capabilities, review queue and completed lessons **by learning language**. Keep a global `selectedLearningLanguage` (default `fi`) and global preferences separately. A future switch to `sv` must not erase Finnish progress or mix the Swedish review queue with Finnish. If an implementation already stores `language-learning:progress:v1` / `language-learning:preferences:v1`, implement a one-time **non-destructive migration** before changing keys.

**V1 user experience:** The current onboarding begins directly with Finnish Unit 1 — Hello. Do **not** render a selectable Swedish course or pretend content exists before a reviewed Swedish curriculum is shipped. When Swedish is ready, add an accessible learning-language chooser at an appropriate entry point (and a way to switch back) using the existing visual system. No Swedish lesson screens, translations, vocabulary registry or grammar data are requested in the first implementation PR.

**Brand follow-up:** Before final public release, select a language-neutral name and update the visible Figma-derived `suomi` wordmark, title, app metadata, icon and store listing. This is a deliberately open branding task, not permission for Codex to invent a permanent name.

## 1. Read this first — source precedence

1. **Approved Figma 27 screens and Design System v1** are the source for the mobile visual language and sample interactions. Use screen-specific imagery and Figma properties, not a new UI style. A screenshot or a prototype reaction does not by itself prove native behaviour.
2. **`a1_foundations_curriculum_blueprint.md`** determines what and when to teach. Start with Unit 1 — Hello, not the Unit 4 demo content dominating the mockups.
3. **`content_learning_data_architecture_specification.md`** determines the content/learner-state/review boundaries and initial review algorithm. Implement actual behaviour from structured data, never from static Figma labels.
4. **This document + `Nordic_Editorial_Mobile_Tokens.json` + `Language_Learning_Mobile_Screen_Map.json`** determine the Expo-first implementation presentation and route contract. Where older `finnish_learning_app_tech_stack_plan.md` says web first, **this latest mobile-first decision supersedes its platform order**, not its reusable TypeScript-domain principles.
5. **`Language_Learning_Mobile_QA_Report.md`** records audited facts, changes and unresolved test gaps. Treat unverified accessibility/responsive claims as test requirements, not completed work.

Do not copy copyrighted textbook dialogues, exercise wording or explanations. The 2,000-word dataset is curated, contains AI-authored material, and is not a native-teacher-approved course. It is input to an editorial workflow, not an unquestionable truth oracle.

## 2. Product boundaries and launch scope

The app is a calm, premium, adult-oriented language-learning product, launching with Finnish A1→A2 and leaving a clean path for Swedish as a separate course. The learning loop is **Explain → guided recognition → controlled construction → sentence use → cumulative review**. Useful Finnish, clear grammar, common chunks, gradual familiarity and non-punitive feedback drive the experience. Spoken forms are **recognition-first**, standard Finnish is the production baseline.

V1 is local-first: **no authentication, database, cloud sync, subscription, streaks, XP, leaderboards, hearts, mascots, audio recording, microphone or speech scoring**. Do not force an elaborate placement test or quotas into onboarding. Learner progress is saved per device; nothing promises cross-device continuity.

**Platform decision:** Expo SDK-compatible React Native + Expo Router + TypeScript. Content JSON with Zod runtime validation and pure TypeScript learning/review logic. Expo-compatible local persistence (e.g. AsyncStorage behind a storage interface). Use the modern Expo-supported font-loading approach with properly licensed Newsreader and Inter; do not obtain font files from Figma. Release architecture may be one Expo app with portable `src/domain`, `src/content`, and `src/theme` packages/folders; a monorepo is optional, not a prerequisite. Native iOS and Android should share domain code. Keep UI platform-specific only where needed.

## 3. Complete Figma screen inventory — exactly 27

| # | Screen | Node | Suggested Expo presentation | Stage |
|---:|---|---|---|---:|
| 1 | [Home](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-826) | `173:826` | route · `/(tabs)/home` | 1 |
| 2 | [Grammar Lesson](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-922) | `173:922` | route · `/learn/[lessonId]` | 2 |
| 3 | [Exercise / Default](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-997) | `173:997` | transient · `/learn/[lessonId]` | 2 |
| 4 | [Exercise / Correct](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-1052) | `173:1052` | transient · `/learn/[lessonId]` | 2 |
| 5 | [Course](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-881) | `182:881` | route · `/(tabs)/course` | 1 |
| 6 | [Review / Landing](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-929) | `182:929` | route · `/(tabs)/review` | 3 |
| 7 | [Review / Default](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-977) | `182:977` | transient · `/review/session` | 3 |
| 8 | [Review / Correct](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-1001) | `182:1001` | transient · `/review/session` | 3 |
| 9 | [Vocabulary Library](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-1025) | `182:1025` | route · `/(tabs)/library/vocabulary` | 5 |
| 10 | [Grammar Library](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1030) | `242:1030` | route · `/(tabs)/library/grammar` | 5 |
| 11 | [Grammar Detail](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1079) | `242:1079` | route · `/library/grammar/[conceptId]` | 5 |
| 12 | [Vocabulary Detail](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1114) | `242:1114` | route · `/library/vocabulary/[vocabId]` | 5 |
| 13 | [Progress](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1145) | `242:1145` | route · `/progress` | 5 |
| 14 | [Onboarding / Welcome](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1167) | `242:1167` | route · `/onboarding/welcome` | 1 |
| 15 | [Onboarding / How Learning Works](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1193) | `242:1193` | route · `/onboarding/how-it-works` | 1 |
| 16 | [Onboarding / Ready](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1219) | `242:1219` | route · `/onboarding/ready` | 1 |
| 17 | [Settings](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1245) | `242:1245` | route · `/settings` | 5 |
| 18 | [Exercise / Almost](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1270) | `268:1270` | transient · `/learn/[lessonId]` | 2 |
| 19 | [Lesson Complete](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1320) | `268:1320` | route · `/learn/[lessonId]/complete` | 2 |
| 20 | [Unit Complete](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1345) | `268:1345` | route · `/course/unit/[unitId]/complete` | 4 |
| 21 | [Review / Session Complete](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1394) | `268:1394` | route · `/review/session/complete` | 4 |
| 22 | [Review / Nothing Ready](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1419) | `268:1419` | transient · `/(tabs)/review` | 4 |
| 23 | [Library / No Search Results](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1468) | `268:1468` | transient · `/(tabs)/library/vocabulary` | 6 |
| 24 | [Loading](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1517) | `268:1517` | transient · `current-route` | 6 |
| 25 | [Offline](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1566) | `268:1566` | transient · `current-route` | 6 |
| 26 | [Error](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1615) | `268:1615` | transient · `current-route` | 6 |
| 27 | [Reset Confirmation](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1664) | `268:1664` | overlay · `/settings (modal overlay)` | 6 |

**Categories:** main tabs are Home, Course, Review and Library. Progress and Settings are secondary destinations. Grammar/Vocabulary detail are nested library routes. Exercise feedback, Nothing Ready, Search Empty, Loading, Offline and Error are *states* inside an existing route. Reset Confirmation is an overlay. Completion may be a dedicated destination in a focused learning/review stack. Route strings above are implementation recommendations, not already-running Expo paths.

## 4. Navigation architecture — recommended Expo Router

```text
app/
  _layout                # Root Stack / fonts / persistence hydration
  onboarding/
    welcome
    how-it-works
    ready
  (tabs)/
    _layout             # Four tabs exactly: Home Course Review Library
    home
    course
    review              # queue ready / nothing-ready state
    library/
      vocabulary
      grammar
  learn/[lessonId]       # Lesson-step renderer: explain/exercise/feedback
  learn/[lessonId]/complete
  course/unit/[unitId]/complete
  review/session         # Active queue and feedback
  review/session/complete
  library/vocabulary/[vocabId]
  library/grammar/[conceptId]
  progress
  settings              # Reset confirmation presented as modal/sheet, not a separate top-level tab
```

Use nested stacks for each tab and the focused lesson/review flows. The root stack owns onboarding and secondary routes. Preserved navigation context matters: returning from Grammar Detail goes back to Grammar; returning from Vocabulary Detail goes back to Vocabulary. `Back`/`Close` never reset the course or review queue. Completion screens must not let a second press re-award learning history or double-increment knowledge counters.

**Routes versus states:** `AnswerOption` selected/correct/almost, review `not_sure`, skeletons, query empty and offline/error visuals belong to view state. Do not create an Expo route for every screenshot. Model the reset sheet as a controlled modal overlay. Use declarative navigation guards for unavailable content and initial onboarding.

## 5. Verified prototype relationships and known gaps

| Flow | Current Figma evidence | Expo behaviour to implement |
|---|---|---|
| Onboarding | Welcome → How Learning Works → Ready → Home: wired | Mark onboarding complete; first real content is Unit 1, not mockup Unit 4. |
| Learning | Home → Grammar Lesson → Exercise Default → Correct: sample wired | Content-driven lesson progression; Step 4 of 5 must not skip directly to completion. |
| Main navigation | Home/Course/Review/Vocabulary/Grammar and several system-state tabs wired in final QA | Four consistently active tabs and working secondary destinations. |
| Settings | Home settings → Settings → Reset Confirmation → Cancel: wired in final QA | Actual reset only after explicit confirmation, prefs preserved. |
| Reference | Vocabulary ↔ Grammar tabs; respective detail → back: wired | Search & selected library context preserved on back. |
| Review | Landing → Default → Correct wired; completed review → landing separately wired | Q3/10 feedback must continue through real remaining queue before Session Complete. |
| Recovery | Error → Loading retry / Home and Offline → Home wired | Retry actual resource, not unconditional success; handle offline content truthfully. |
| Unresolved lesson transitions | Course 4.4 CTA lacks 4.4 destination; Exercise Correct step4/5 and Lesson Complete next step lack authored next-screen fixture | Route by actual current lesson/step and `nextLessonId`. Do not invent misleading prototype links. |
| Unit Complete CTA | Previously linked to a Course mockup still showing Unit 4; incorrect prototype reaction removed | Continue opens real Unit 5 (if available), else Course with correct up-next context. |
| Review Not Sure | New visible “I’m not sure yet” control on Review Default, no false prototype evaluation link | Record `not_sure`, reveal correct answer and explanation, schedule short retry. |

**Prototype limitation:** The Figma graph and observed reactions were audited, but this is not equivalent to automated end-to-end interaction testing on a physical device. Do not assume functional persistence, notification scheduling or real exercise evaluation from a Figma click.

## 6. Visual and token contract

The approved palette is **Warm Ivory `#F7F5EF`**, **Deep Pine `#183B35`**, **Soft Mint `#D6EAE0`**, **Apricot `#F4AB77`**, **Periwinkle `#C9D8F6`**, with paper `#FFFEFA`, secondary text `#53645E`, muted `#65736B` and subtle border `#D9DED5`. Almost feedback uses `#FCE9DE` / `#854326`. Follow semantic aliases rather than putting hex literals inside screens. See machine-readable token JSON for all 30 verified semantic-collection variables (27 aliases plus three extra primitives), 10 approved palette primitives, 25 dimensional values, and 12 text roles.

Typography: Newsreader for editorial display and selected large language/number motifs; Inter for functional text, Finnish answers and control labels. Figma foundation sizes are: editorial display 38/40; page heading 34/36; Finnish display 43/53; vocabulary entry 22/28; section 17/24; body 15/22; supporting 13/19; metadata 12/16; buttons 15/22; navigation 11/16. Local screen overrides (e.g. larger onboarding headings) are allowed only when directly justified by the actual Figma frame.

| Figma layout measurement | Verified reference | Expo implementation rule |
|---|---:|---|
| Reference frame | 390 × 844 | Reference only, no fixed screen size |
| Horizontal content margin | 24 | Width = availableContentWidth − 48, with safe-area-aware adjustments |
| Minimum interaction target | 44 | Accessible target dimension, not necessarily visible icon size |
| Primary button | 52 | Maintain 52dp minimum plus dynamic text accommodation |
| Answer tile | 60 | Maintain ≥60dp or grow with content |
| Search | 52 | Grow for dynamic text |
| App header | 60 | Combine with runtime top safe insets |
| Focused header | 72 | Keep step count and back control accessible |
| Bottom navigation | 88 | Reference chrome including a mock home indicator; use runtime bottom insets |
| Focused action area | 108 | Reference footer, not fixed screen arithmetic |

**Responsive finding:** When actual Figma frames were temporarily resized to 360px, several headers, progress captions, content surfaces and tab destinations clipped or overflowed. At 430px some content remains left-aligned and underfills width. At 390×720 static screen resizing can hide fixed bottom navigation/actions. These are documented limitations of the **fixed-width Figma specimens**, not an acceptable native implementation. Use `flex: 1`, width constraints, `ScrollView`, safe area insets and bottom action overlays correctly. Never set all wrappers to 390px or assume 44px physical status bars. At 360, 390, 430 and short heights, every control must remain accessible.

## 7. Component inventory — map to React Native

| Figma DS component | Source | Suggested RN component / props | Behaviour and accessibility |
|---|---|---|---|
| Button / Pine; Ivory; Text | [216:939](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=216-939) | `SuomiButton {variant, label, disabled, loading, leadingIcon?, trailingIcon?, onPress}` | role button, ≥44dp, pressed/disabled; text property and optional icon |
| Answer Option | [204:804](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=204-804) | `AnswerOption {label, state, selected, onPress, disabled}` | Default/Selected/Correct/Almost/Disabled, feedback not colour-only |
| Feedback | [204:806](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=204-806) | `ExerciseFeedback {result, title, explanation}` | Correct/Almost/Information, live announcement on evaluation |
| Mobile Navigation | [202:796](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=202-796) | `BottomNavigation / Expo Tabs {activeTab}` | Four tabs, labelled and selected; avoid separate fifth Progress tab |
| App Header | [202:798](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=202-798) | `AppHeader {onSettings?,showSettings}` | Wordmark and optional 44dp Settings target |
| Focused Header | [202:800](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=202-800) | `FocusedLearningHeader {mode, title, stepIndex, stepCount, onBack}` | Close/back, progress, accessible count |
| Progress Indicator | [202:802](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=202-802) | `ProgressIndicator {current,total,kind,label}` | Derived progress; no invented mastery percent |
| Search Field | [200:800](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=200-800) | `SearchField {query,onChange,onClear,autoFocus?}` | Keyboard, clear, text input focus and visible selected state |
| Library Tabs | [200:802](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=200-802) | `LibraryTabs {value,onChange}` | Grammar/Vocabulary switch as tabs |
| Library Filter | [200:804](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=200-804) | `LearningFilter {value,onChange}` | Learning/Familiar/All; clear selected state |
| Vocabulary Entry | [206:890](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=206-890) | `VocabularyEntry {form,lemma,gloss,example?,familiarity?,onPress}` | Dictionary-like open row with optional state |
| Course Chapter Entry | [206:892](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=206-892) | `ChapterEntry {number,title,status,onPress}` | Completed/current/upcoming/later distinguish status from familiarity |
| Lesson Progress Row | [206:894](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=206-894) | `LessonProgressRow {number,title,status,onPress?}` | Completed/current/upcoming, optional navigation |
| Learning Pattern | [204:808](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=204-808) | `LearningPattern {base,suffix,result,meaning,exampleKind}` | Authored morphological forms, no generation engine |

**Smaller components recommended only as needed:** `ReferenceHeader`, `SettingsRow`, `SettingsSwitch`, `OnboardingStepIndicator`, `CapabilityStatement`, `ReviewEmptyState`, `SkeletonBlock`, `CompletionView`, and `ConfirmationSheet` are not currently all full Design System v1 component sets. Make local reusable components in code and consider a small additive v1.1 Figma extension later; do not create a competing visual library.

## 8. Screen-by-screen implementation contract

### 01. Home — `home`
**Figma:** [173:826](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-826) · **presentation:** route · **recommended Expo host:** `/(tabs)/home` · **stage:** 1.

**Approved sample (illustrative):** Unit 4 — Where are you? (3/6 lessons). Next lesson hero and review preview.

**Implement:** Single dominant Continue action; show current stage/unit/lesson dynamically; display due review and genuine capability preview; Progress/Settings remain secondary destinations.

**Interaction/navigation:** Home tab; Continue to current lesson; Review; Course; Library; Progress preview; Settings.

**Dependencies:** `AppHeader`, `BottomNavigation`, `PrimaryButton`, `ProgressIndicator`, `LearningPattern`. **States:** `default`, `resume`, `due-review-preview`.

### 02. Grammar Lesson — `grammar-lesson`
**Figma:** [173:922](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-922) · **presentation:** route · **recommended Expo host:** `/learn/[lessonId]` · **stage:** 2.

**Approved sample (illustrative):** Unit 4.2 — Saying where something is: talo → talossa; kauppa → kaupassa; Helsinki → Helsingissä.

**Implement:** Structured lesson step with concise explanation, visual noun + suffix pattern, examples, takeaway and Continue; supports any unit, not only inessive.

**Interaction/navigation:** Back to lesson context; Continue advances lessonStep cursor.

**Dependencies:** `FocusedLearningHeader`, `LearningPattern`, `PrimaryButton`, `ProgressIndicator`. **States:** `explanation`, `step-progress`, `spoken-note-optional`.

### 03. Exercise / Default — `exercise-default`
**Figma:** [173:997](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-997) · **presentation:** transient · **recommended Expo host:** `/learn/[lessonId]` · **stage:** 2.

**Approved sample (illustrative):** Olen Helsingissä. Choose from/from in/to Helsinki; answer taps evaluate in the mockup.

**Implement:** Render question from content data; selection is temporary UI; disable repeat submission while evaluating; reserve space for feedback.

**Interaction/navigation:** Answer choice → evaluate; next lesson step after feedback; back to lesson.

**Dependencies:** `FocusedLearningHeader`, `AnswerOption`, `ProgressIndicator`. **States:** `unanswered`, `selected`, `disabled`.

### 04. Exercise / Correct — `exercise-correct`
**Figma:** [173:1052](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=173-1052) · **presentation:** transient · **recommended Expo host:** `/learn/[lessonId]` · **stage:** 2.

**Approved sample (illustrative):** Correct answer “in Helsinki”; exactly + concise -ssä explanation.

**Implement:** Keep answer geometry unchanged, display selected correct option and explicit checkmark, update only scored knowledge targets once.

**Interaction/navigation:** Continue to next lesson step; not necessarily a route.

**Dependencies:** `AnswerOption`, `Feedback`, `FocusedLearningHeader`, `PrimaryButton`. **States:** `correct`.

### 05. Course — `course`
**Figma:** [182:881](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-881) · **presentation:** route · **recommended Expo host:** `/(tabs)/course` · **stage:** 1.

**Approved sample (illustrative):** Four stages; A1 Foundations eight units; Unit 4 currently 3/6; lesson 4.4 is current.

**Implement:** Accordion/chapter journey with clear current unit, six lesson statuses, later chapters and stages; distinguish completed versus familiar.

**Interaction/navigation:** Course tab; current lesson resolved from saved cursor; other chapter entry as available.

**Dependencies:** `AppHeader`, `BottomNavigation`, `CourseChapterEntry`, `LessonProgressRow`, `ProgressIndicator`, `PrimaryButton`. **States:** `current-unit-expanded`, `completed-chapters`, `upcoming-chapters`.

### 06. Review / Landing — `review-landing`
**Figma:** [182:929](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-929) · **presentation:** route · **recommended Expo host:** `/(tabs)/review` · **stage:** 3.

**Approved sample (illustrative):** Sample: 10 items due (8 words, 2 grammar), about 5 minutes.

**Implement:** Due count computed by review scheduler, not static; concise word/grammar preview; Start Review only if items available.

**Interaction/navigation:** Review tab; Start Review → active session; empty queue → Nothing Ready.

**Dependencies:** `AppHeader`, `BottomNavigation`, `PrimaryButton`, `VocabularyEntry`. **States:** `items-ready`, `session-launch`, `none-ready`.

### 07. Review / Default — `review-default`
**Figma:** [182:977](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-977) · **presentation:** transient · **recommended Expo host:** `/review/session` · **stage:** 3.

**Approved sample (illustrative):** Question 3/10: En tiedä. Four options; QA added “I’m not sure yet”.

**Implement:** Review item may test word, phrase or grammar; “not_sure” must be a real scored result separate from Almost; render from authored exercise.

**Interaction/navigation:** Evaluate choice or Not sure, show feedback in same session, then advance.

**Dependencies:** `FocusedReviewHeader`, `AnswerOption`, `TextButton`, `ProgressIndicator`. **States:** `unanswered`, `not_sure`, `selected`.

### 08. Review / Correct — `review-correct`
**Figma:** [182:1001](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-1001) · **presentation:** transient · **recommended Expo host:** `/review/session` · **stage:** 3.

**Approved sample (illustrative):** “En tiedä.” = “I don’t know”; short first-person negative explanation.

**Implement:** Selected answer and feedback rendered without layout shift; scored result scheduled by domain; continue until queue ends.

**Interaction/navigation:** Continue to next review item, or Session Complete when the last item is answered.

**Dependencies:** `FocusedReviewHeader`, `AnswerOption`, `Feedback`, `PrimaryButton`. **States:** `correct`.

### 09. Vocabulary Library — `vocabulary-library`
**Figma:** [182:1025](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=182-1025) · **presentation:** route · **recommended Expo host:** `/(tabs)/library/vocabulary` · **stage:** 5.

**Approved sample (illustrative):** haluan, missä?, täällä, vielä, paljon, siellä; En tiedä., Voinko…?, Minulla on…

**Implement:** Encountered lexical items + phrases; lemma and learner-facing forms distinct; search/filter from local content/progress; no fake 94 count.

**Interaction/navigation:** Library tab; switch to Grammar; select vocabulary to detail.

**Dependencies:** `AppHeader`, `BottomNavigation`, `LibraryTabs`, `LibraryFilter`, `SearchField`, `VocabularyEntry`. **States:** `all`, `learning`, `familiar`, `query`, `empty`.

### 10. Grammar Library — `grammar-library`
**Figma:** [242:1030](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1030) · **presentation:** route · **recommended Expo host:** `/(tabs)/library/grammar` · **stage:** 5.

**Approved sample (illustrative):** olen/olet, -ko/-kö, en+verb, -ssa/-ssä, Minulla on, genitive -n.

**Implement:** Practical titles first, pattern examples second, technical terms optional; later concepts clearly labelled rather than falsely familiar.

**Interaction/navigation:** Library tab; switch to Vocabulary; open current concept detail.

**Dependencies:** `AppHeader`, `BottomNavigation`, `LibraryTabs`, `SearchField`, `GrammarEntry`. **States:** `introduced-concepts`, `search`, `later-in-course`.

### 11. Grammar Detail — `grammar-detail`
**Figma:** [242:1079](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1079) · **presentation:** route · **recommended Expo host:** `/library/grammar/[conceptId]` · **stage:** 5.

**Approved sample (illustrative):** Inessive -ssa/-ssä, talo → talossa, kauppa → kaupassa, Helsinki → Helsingissä.

**Implement:** Reference lesson supports short/full grammar explanations and examples; avoid implying automatic formation of every noun.

**Interaction/navigation:** Back to Grammar; optional practice from concept exercises, only after engine supports it.

**Dependencies:** `ReferenceHeader`, `LearningPattern`, `PrimaryButton`. **States:** `content`, `related-patterns`, `practice-entry`.

### 12. Vocabulary Detail — `vocabulary-detail`
**Figma:** [242:1114](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1114) · **presentation:** route · **recommended Expo host:** `/library/vocabulary/[vocabId]` · **stage:** 5.

**Approved sample (illustrative):** haluan = I want, canonical haluta, spoken recognition haluun, Haluan kahvia.

**Implement:** Canonical lemma retains identity; learner-facing conjugated form is a teaching form; spoken notes are recognition-first and toggleable.

**Interaction/navigation:** Back to Vocabulary; practice item only when a reviewable exercise exists.

**Dependencies:** `ReferenceHeader`, `VocabularyEntry`, `PrimaryButton`. **States:** `standard`, `spoken-recognition-note`, `familiarity`, `practice-entry`.

### 13. Progress — `progress`
**Figma:** [242:1145](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1145) · **presentation:** route · **recommended Expo host:** `/progress` · **stage:** 5.

**Approved sample (illustrative):** A1 Foundations Unit 4; abilities: introduce yourself, ask simple questions, locations.

**Implement:** Derive capabilities from explicit evidence/lesson completion, not percentages; never equate lesson completion to familiarity.

**Interaction/navigation:** Secondary route via Home capability preview; Back to previous screen.

**Dependencies:** `ReferenceHeader`, `CapabilityStatement`, `ProgressIndicator`. **States:** `current`, `becoming-comfortable`, `comfortable`, `still-practising`.

### 14. Onboarding / Welcome — `onboarding-welcome`
**Figma:** [242:1167](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1167) · **presentation:** route · **recommended Expo host:** `/onboarding/welcome` · **stage:** 1.

**Approved sample (illustrative):** “Finnish, at your own pace.” minä / sinä / suomi.

**Implement:** No account, placement, quotas or subscriptions; strong editorial start; persist completion only when onboarding done.

**Interaction/navigation:** Get started → How Learning Works.

**Dependencies:** `OnboardingStepIndicator`, `PrimaryButton`. **States:** `first-launch`.

### 15. Onboarding / How Learning Works — `onboarding-learning`
**Figma:** [242:1193](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1193) · **presentation:** route · **recommended Expo host:** `/onboarding/how-it-works` · **stage:** 1.

**Approved sample (illustrative):** Understand → Practise → Remember; minä olen, En tiedä.

**Implement:** Three coherent principles rather than generic features; no streak or microphone messaging.

**Interaction/navigation:** Continue → Ready; support back as appropriate.

**Dependencies:** `OnboardingStepIndicator`, `PrimaryButton`. **States:** `introduction`, `three-steps`.

### 16. Onboarding / Ready — `onboarding-ready`
**Figma:** [242:1219](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1219) · **presentation:** route · **recommended Expo host:** `/onboarding/ready` · **stage:** 1.

**Approved sample (illustrative):** A1 Foundations, Unit 1 Hello, hei/moi/kiitos; saved locally.

**Implement:** Promise device-local save only; first run advances into actual Unit 1/first lesson or Home routing to it.

**Interaction/navigation:** Start learning → initial lesson or Home resume route.

**Dependencies:** `OnboardingStepIndicator`, `PrimaryButton`. **States:** `ready-to-start`.

### 17. Settings — `settings`
**Figma:** [242:1245](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=242-1245) · **presentation:** route · **recommended Expo host:** `/settings` · **stage:** 5.

**Approved sample (illustrative):** Two toggles, device-local saved progress, Reset learning progress, About Version 0.1.

**Implement:** Preferences persisted separately; reset preserves preferences; avoid an inert reminder toggle—implement notification permission/scheduling if enabled or clearly disable.

**Interaction/navigation:** Secondary route via Settings icon; Reset entry opens confirmation overlay.

**Dependencies:** `ReferenceHeader`, `SettingsRow`, `SettingsSwitch`, `ConfirmationSheet`. **States:** `daily-reminder-toggle`, `spoken-notes-toggle`, `local-save-info`, `reset-entry`.

### 18. Exercise / Almost — `exercise-almost`
**Figma:** [268:1270](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1270) · **presentation:** transient · **recommended Expo host:** `/learn/[lessonId]` · **stage:** 2.

**Approved sample (illustrative):** Selected “to Helsinki”; brief -ssä meaning “in” correction.

**Implement:** Same answer geometry as Default/Correct, warm constructive colour, explicit wrong-but-useful explanation; records almost, not correct.

**Interaction/navigation:** Continue lesson step; no fake perfect result.

**Dependencies:** `FocusedLearningHeader`, `AnswerOption`, `Feedback`, `PrimaryButton`. **States:** `almost`.

### 19. Lesson Complete — `lesson-complete`
**Figma:** [268:1320](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1320) · **presentation:** route · **recommended Expo host:** `/learn/[lessonId]/complete` · **stage:** 2.

**Approved sample (illustrative):** Unit 4.2 Saying “in”, talo → talossa; pattern returns in Review.

**Implement:** Completed required lesson steps, not mastery; acknowledge practice and schedule exposed items; remain resumable.

**Interaction/navigation:** Continue next lesson if available or return Course; sample 4/5 exercise does not directly imply completion.

**Dependencies:** `FocusedLearningHeader`, `LearningPattern`, `PrimaryButton`. **States:** `lesson-completed`.

### 20. Unit Complete — `unit-complete`
**Figma:** [268:1345](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1345) · **presentation:** route · **recommended Expo host:** `/course/unit/[unitId]/complete` · **stage:** 4.

**Approved sample (illustrative):** Unit 4 complete; Next Unit 5 Food & quantities.

**Implement:** Only after every required lesson/checkpoint; summary and still-reviewing explanation; next-unit dynamic.

**Interaction/navigation:** Continue to actual next unit, not fixed Course screenshot; Back to Course secondary.

**Dependencies:** `AppHeader`, `PrimaryButton`, `CapabilityStatement`. **States:** `unit-completed`, `next-unit`.

### 21. Review / Session Complete — `review-session-complete`
**Figma:** [268:1394](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1394) · **presentation:** route · **recommended Expo host:** `/review/session/complete` · **stage:** 4.

**Approved sample (illustrative):** Ten items revisited; En tiedä., missä?, -ssa/-ssä.

**Implement:** Quiet recap with reviewed items, no percentage or perfect-score banners; enqueue weak items by schedule.

**Interaction/navigation:** Back to Review or continue learning.

**Dependencies:** `FocusedReviewHeader`, `Feedback`, `PrimaryButton`. **States:** `review-finished`.

### 22. Review / Nothing Ready — `review-nothing-ready`
**Figma:** [268:1419](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1419) · **presentation:** transient · **recommended Expo host:** `/(tabs)/review` · **stage:** 4.

**Approved sample (illustrative):** No due reviews now; “Olen täällä.” thematic motif.

**Implement:** Do not invent next-due timestamps or falsely imply mastery; source due status from review engine.

**Interaction/navigation:** Continue learning/Home or Course.

**Dependencies:** `AppHeader`, `BottomNavigation`, `ReviewEmptyState`, `PrimaryButton`. **States:** `queue-empty`.

### 23. Library / No Search Results — `library-search-empty`
**Figma:** [268:1468](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1468) · **presentation:** transient · **recommended Expo host:** `/(tabs)/library/vocabulary` · **stage:** 6.

**Approved sample (illustrative):** No matches for raitiovaunu in currently encountered collection.

**Implement:** Search does not imply word absent from Finnish; clear query without losing tab/filter context.

**Interaction/navigation:** Clear search → Vocabulary Library.

**Dependencies:** `AppHeader`, `BottomNavigation`, `SearchField`, `LibraryTabs`, `LibraryFilter`, `PrimaryButton`. **States:** `query-with-no-matches`.

### 24. Loading — `loading`
**Figma:** [268:1517](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1517) · **presentation:** transient · **recommended Expo host:** `current-route` · **stage:** 6.

**Approved sample (illustrative):** Content-shaped muted placeholders and “Getting your lesson ready…”

**Implement:** Only show when local hydration/content loading actually requires it; avoid endless shimmer.

**Interaction/navigation:** Return to requested content or recover gracefully.

**Dependencies:** `AppHeader`, `BottomNavigation`, `Skeleton`. **States:** `loading`.

### 25. Offline — `offline`
**Figma:** [268:1566](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1566) · **presentation:** transient · **recommended Expo host:** `current-route` · **stage:** 6.

**Approved sample (illustrative):** Local data survives offline; available content can continue.

**Implement:** Local-first: do not block bundled lessons unnecessarily; content availability must be verified in implementation.

**Interaction/navigation:** Continue available learning; Retry only for actual unavailable resource.

**Dependencies:** `AppHeader`, `BottomNavigation`, `PrimaryButton`. **States:** `offline-informational`.

### 26. Error — `error`
**Figma:** [268:1615](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1615) · **presentation:** transient · **recommended Expo host:** `current-route` · **stage:** 6.

**Approved sample (illustrative):** “Something didn’t load.” Try again / Back to Home.

**Implement:** Error copy must not guarantee data preserved if storage is corrupted; keep actionable retry and safe back.

**Interaction/navigation:** Try again → Loading (prototype only); Back to Home.

**Dependencies:** `AppHeader`, `BottomNavigation`, `PrimaryButton`, `SecondaryButton`. **States:** `load-failed`, `retry`.

### 27. Reset Confirmation — `reset-confirmation`
**Figma:** [268:1664](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=268-1664) · **presentation:** overlay · **recommended Expo host:** `/settings (modal overlay)` · **stage:** 6.

**Approved sample (illustrative):** Clear learning history and review progress on this device; preferences remain unchanged.

**Implement:** Cancel primary/safe; confirm explicitly clears learner state and preserves preferences; sheet focus/labels and dismissals need native validation.

**Interaction/navigation:** Settings → open; Cancel → Settings; Confirm → reset and route to first-run state.

**Dependencies:** `ConfirmationSheet`, `PrimaryButton`, `SettingsRow`. **States:** `open`, `cancel`, `confirm-destructive`.

## 9. Exercise and learning-state contract

The content model must support course → stage → unit → lesson → ordered `LessonStep`, plus reusable `VocabularyItem`, `PhraseItem`, `GrammarConcept`, `SpokenFormNote`, `Capability`, and authored `Exercise`. The rendering layer is data-driven. Explanations, Finnish strings, accepted answers, distractors, scoped grammar targets and examples never live as one-off hard-coded screen JSX.

**Eight lesson steps:** `explanation`, `vocabulary_intro`, `phrase_intro`, `grammar_explanation`, `spoken_note`, `example_set`, `exercise`, `checkpoint`. **Five exercise kinds:** `multiple_choice`, `text_input`, `token_build`, `transform`, `matching`. Render them through a small set of reusable native components; choose one primary learning ability per lesson. A lesson is complete after required instructional steps and checkpoint attempts, not only after perfect scores.

Keep **linkedTargetIds** (contextual references) separate from **scoredTargetIds** (the item whose familiarity updates). Example: the phrase “Olen Helsingissä” contains `olla` and a place name, but an inessive exercise may score only `grammar.inessive-ssa-ssa`. Introductory example exposure is not recall. A scored outcome must be committed exactly once per attempt, including when a user backs out or taps repeatedly.

| UI evaluation | Domain outcome | UI response | Review consequence |
|---|---|---|---|
| Unanswered / selected | none yet | Default tile or selected styling; no learning claim | No score until submitted/evaluated |
| Correct | `correct` | Mint/pine feedback, checkmark, short teaching explanation | Increment successful recall and schedule the next spaced review |
| Almost | `almost` | Soft apricot surface, clear explanation, non-punitive | Short retry interval; do not award a correct score |
| Not sure yet | `not_sure` | Reveal correct answer and supportive explanation | Shorter retry interval, record distinct uncertain result |
| Disabled | none | Clear non-interactive treatment and accessible disabled state | No accidental repeated evaluation |

Use deterministic authored acceptance rules for V1; no fuzzy AI scoring. Handle whitespace/case/punctuation normalisation deliberately and maintain authored accepted variants. Do not mark a partially correct wrong ending as a fully correct answer. Review can reuse review-eligible lesson exercises, but it must not expose unintroduced targets.

## 10. Review and knowledge progression

Shared pure TypeScript review functions should select due targets, assemble up to 10 varied items, record one result per target per session, and make No Ready appear when due count is zero. The source architecture recommends: first formal exposure review around **8 hours** later; successive correct recalls at roughly **1, 3, 7, 14 and 30 days**; Almost around **8 hours**; Not Sure around **4 hours**. Use a test clock, not wall-clock-dependent unit tests. Do not call this FSRS, Anki or SM-2.

Vocabulary/phrase qualitative states: `unseen → learning → becoming_familiar → familiar`. Grammar: `unseen → introduced → practising → comfortable`. Use these as domain concepts, not mandatory public mastery percentages. Capability state should be explicitly derived from supported lessons/checkpoints and target knowledge, e.g. `hidden / current / becoming_comfortable / comfortable`. **Unit completion is not permanent recall mastery.**

Review session priorities: overdue weak, recently uncertain, due learning, becoming familiar, occasional familiar resurfacing. Mix vocabulary, phrases and grammar only when eligible; do not pad sessions with filler. Review Default has a visible “I’m not sure yet” action added during final QA; native implementation must make it actually record `not_sure`. Correct/Almost/NotSure show feedback before the next item. After final item, show Review Session Complete; Never display 10/10 merely because user answered an illustrative Q3/10 Figma screen.

## 11. First authentic curriculum slice — Unit 1

**Unit 1 — Hello**, five lessons in this exact order: **1.1 Hello; 1.2 I am, you are; 1.3 Your name; 1.4 Yes, and a few numbers; 1.5 First review.** Production = **16** lemmas; recognition = **8** items; support = **2**. Those are curricular assertions, not optional UI decorations. The exact vocabulary identifiers and allocations are in the attached blueprint. In this file, the production lemma set is: `olla`, `ja`, `minä`, `sinä`, `yksi`, `kaksi`, `kolme`, `neljä`, `viisi`, `kyllä`, `joo`, `nimi`, `anteeksi`, `kiitos`, `hei`, `moi`. Recognition: `kuusi`, `seitsemän`, `kahdeksan`, `yhdeksän`, `kymmenen`, `hyvä`, `tervetuloa`, `näkemiin`. Support: `nyt`, `ehkä`.

Only teach `minä/sinä` and `olla` in the limited `olen/olet` scope; subject-pronoun omission is preview/recognition, not a full conjugation paradigm. Name-question content from AI-curated examples is flagged `needs_review`; do not silently promote unreviewed Finnish into an approved production target. Spoken notes `minä→mä`, `sinä→sä`, `olen→oon`, `olet→oot` are recognition-only. End lesson review uses the existing pattern/exercise components with Unit 1 content, not Unit 4 screenshots copied into the code.

For later expansion, A1 Foundations units are fixed: 1 Hello, 2 People & things, 3 Everyday actions, 4 Where are you?, 5 Food & quantities, 6 Daily life, 7 People & descriptions, 8 Getting around. A1 Foundations target is ~142 unique production lemmas by Unit 8. Do **not** bulk author Units 2–8 before the first functional Unit 1 slice is validated.

## 12. Local learner persistence

Persist two separate versioned **brand-neutral** records, e.g. `language-learning:progress:v1` for per-language course position, lessons, knowledge maps, review dates/history and capability evidence, plus global onboarding/selected-language state; and `language-learning:preferences:v1` for global preferences (daily-reminder toggle, spoken-Finnish-note toggle when relevant). The records must be versioned and support independent `fi` and future `sv` progress. Do not create `suomi:` storage namespaces in a new app. Use storage adapters (`readProgress`, `writeProgress`, `resetProgress`, `readPreferences`, `writePreferences`) rather than calling AsyncStorage from every screen. Provide schema migration and safe corrupt-state handling. Curriculum definitions stay in bundled JSON, not duplicated in learner saves.

Reset confirmation explicitly clears learning history, lesson state, familiarity and review progress but **preserves preferences**. Cancel must be safe and accessible. No cross-device sync. Any destructive reset is an application action, not a Figma prototype effect. Use deterministic review timestamps for testing and guard against duplicate writes.

**Reminder caveat:** The approved Settings mock shows an enabled Daily reminder switch, but our source documents intentionally deferred scheduling details. Do not ship an inert switch implying that reminders are delivered. Either implement a legitimate local native-notification permission/scheduling flow with an explicit approved default, or keep it disabled / clearly labelled pending a product decision. Do not silently invent a reminder hour or server job.

## 13. Libraries, reference pages and search

Vocab registry is generated from `finnish_2000_curated(1).csv`; lessons reference stable IDs, and a teaching overlay owns `haluan` as a form of lemma `haluta`. Spoken `haluun` is recognition, not a new lemma. Search normalises Finnish/English strings and queries the local encountered collection. Grammar Library uses learner-friendly labels such as “Saying ‘in’”, linked to reusable grammar IDs, with a clearly identified “Later in the course” section for not-yet-taught concepts.

Detail pages must not be hard-coded for `haluan` or the inessive. Their exact data shape comes from the separate content architecture, including original examples, bilingual glosses, editorial metadata and teacher review status. A full application-wide dictionary is not part of V1. Empty search means no matching encountered entries, **not** that a word does not exist in Finnish.

## 14. Completion and system behaviour

Lesson Complete: one lesson finished and patterns practised; allow next lesson when available. Unit Complete: required unit lessons/checks finished and next unit available; if unavailable, provide Course rather than a dead-end. Review Complete: revisit items, no scores. Review Nothing Ready: calm no-work state, do not invent next-due time. Search Empty: clear query without corrupting filters. Loading: show content-shaped skeleton only during actual hydration/loading. Offline: do not block bundled lessons; do not promise every remote asset is offline. Error: recoverable retry, accurate saved-data language. Reset Confirmation: bottom sheet with Cancel visually safest and explicit destructive confirmation.

## 15. Accessibility and native-screen requirements

- Touch targets ≥44 logical dp; answer tiles 60dp minimum and buttons 52dp reference. Provide explicit `accessibilityRole`, `accessibilityLabel`, `accessibilityState` and a correct logical reading order; nav items announce selected state.
- Correct, Almost and familiarity cannot rely on colour alone: show icons/text. After evaluation, announce feedback with a non-intrusive accessibility live region/announcement. `Not sure` is a separate button and result.
- Support iOS Dynamic Type/font scaling and Android font scaling; test up to 200% or system largest practical sizes. Permit wraps and growing heights. Do not use 390 fixed widths across all device sizes.
- Use runtime safe-area insets. The Figma 44px status bar/88px tab bar/108px bottom action are **reference measurements**, not universal system constants.
- On-screen keyboard must not cover Search input/clear action; scroll/keyboard avoidance must work on both OSes. Bottom sheet traps focus as appropriate and returns focus on Cancel.
- Reduced-motion preference respected; no flashing shimmer, strong parallax, celebratory animation or mandatory gestures. Design can be fully navigated by touch, keyboard where relevant, VoiceOver/TalkBack; actual testing remains to be done.
- Approved palette contrast ratios: Pine on Ivory 11.23:1, Secondary on Ivory 5.75:1, Muted on Ivory 4.57:1, Pine on Mint 9.74:1, Pine on Periwinkle 8.53:1, Almost ink on Almost surface 6.31:1. Border on Ivory **1.25:1** cannot be used alone to communicate a control boundary or focus state. Verify screenshots and actual output again after native rendering.

## 16. Structural testing and visual QA

Required tests: content Zod/reference validation, exercise answer evaluator (`correct`, `almost`, `not_sure`), qualitative state transitions, review intervals with injectable clock, session selection balance and empty queue, completion idempotency, storage migration/corruption, reset preserving preferences, and active tab routing. Add component tests for answer input, feedback, disabled states and local preference toggle. In later stages, add Expo-compatible E2E/device tests and RN accessibility smoke tests; on-device VoiceOver/TalkBack remains a launch gate.

Visual snapshots should use **390×844** Figma reference and compare at **360**, **390**, **430** widths plus short viewport and increased text. Inspect full scroll, not just first viewport; test bottom actions when keyboard is shown. Avoid pixel-perfect assumptions for platform system font rendering or safe insets. Record each visual mismatch with source Figma ID, screenshot, severity and fix. The static Figma frames fail narrower resizing as documented; responsive coding is mandatory.

## 17. Release, editorial and copyright gates

Every published Finnish teaching example/explanation/phrase/exercise needs authoring provenance and an explicit editorial status (`draft`, `needs_review`, `reviewed`, `approved`). Final release should require native Finnish-teacher/editor review for key explanations, phrases, spoken forms and assessed examples. The curated CSV has AI-authored glosses/examples; do not present them as independently verified. Original content only—do not reproduce Suomen Mestari materials. Keep vocabulary/source provenance in a shared source registry, and document any upstream attribution/licensing review before publication.

## 18. Known handoff limitations — non-negotiable disclosure

1. **Figma is not a responsive implementation.** Temporary 360px, 430px and 390×720 tests exposed clipping/underfill in static frames. Fix in Expo, not by shrinking Finnish text. This is the leading visual-release risk.
2. **Partial prototype:** Several lesson “continue” controls and Review Q3→session complete are intentionally not linked because the next sample step is not designed. Stage 1/2 must implement actual route/state transitions. Figma “Continue to Unit 5” had an incorrect destination (Unit 4 Course sample) and that reaction was removed.
3. **Native accessibility unknown:** No real device VoiceOver/TalkBack, keyboard, dynamic-type or notification-permission testing has been performed.
4. **Content not teacher certified:** Unit 4 mock grammar is pedagogically simplified, `Helsinki → Helsingissä` includes stem change, name-question and spoken notes remain editorial-review candidates.
5. **Not all old screens use DS v1 native instances.** Exploration 01 was authored before the unified library. In code use the approved design tokens and shared RN components; do not replicate redundant Figma-local assets.
6. **Reminder toggle behaviour unresolved:** A visually enabled reminder cannot be shipped unless actual local notification behaviour is implemented and verified; otherwise clearly defer.

## 19. Recommended Codex implementation stages

| Stage | Deliverable | Exit criteria |
|---|---|---|
| 0 — Inspect existing repo | Inventory prior Expo/Next scaffold, git workflow and source files; decide minimum safe migration. | Do not overwrite a working app or create competing architecture. |
| 1 — Expo foundation | Expo Router, TypeScript, fonts, tokens, four-tab shell, safe-area system, two or three high-fidelity components/screens. | Expo runs on iOS/Android simulators and screenshots match the approved visual foundation. |
| 2 — Functional Unit 1 vertical slice | Zod schema/content registry, Lesson 1.1+ core Unit 1 fixture, answer evaluation, local progress and resume, lesson completion. | Real first-run Onboarding→Home→Unit 1→exercise→completion→resume survives reload. |
| 3 — Review V1 | Pure TypeScript scheduler, due queue, Not Sure/Almost/Correct, session complete/nothing ready. | Clock-based unit tests and one real mixed review session. |
| 4 — Reference + progress + settings | Grammar/Vocab libraries, details, capabilities, preferences, reset confirmation. | Data-driven screens and repeatable local persistence tests. |
| 5 — Completion/system + native QA | Unit completion, loading/offline/error, responsive/a11y/perf/device QA. | 360/390/430+short dynamic screens, keyboard, large text and accessibility sign-off. |
| 6 — Curriculum expansion | Extend 2–8 after evidence from Unit 1. | Source content validation and Finnish editorial sign-off; no bulk unreviewed release. |

This order deliberately advances the **functional learning slice before all 27 screens**; it gives early evidence that content, review and local state work. Keep PRs narrow, visually inspect, then merge after tests.

## 20. Exact recommended first Codex task

> **Language Learning App Stage 01 — Expo Foundation and Nordic Editorial Mobile Shell.** Inspect the repository and all attached architecture/curriculum/handoff files first. Use a language-neutral app/repository/package name; the `suomi` Figma wordmark is temporary. Finnish is `fi` target course in V1, with future `sv` support in the content and per-language persistence model; do not build empty or fake Swedish screens. Make Expo + React Native + Expo Router the primary mobile app; avoid starting Next.js or a backend. Create or adapt a small TypeScript project with semantic Figma-derived tokens, licensed Newsreader/Inter loading, safe-area-aware layout, four-tab native navigation, a focused learning stack and a storage abstraction interface. Implement reusable primary/secondary buttons, AppHeader, FocusedHeader, BottomNavigation, and AnswerOption states. Render at least Home, Onboarding Welcome, and the Unit 1-compatible Lesson/Exercise container using structured fixture data, not hard-coded Unit 4 prose. Do not implement all 27 screens, Units 2–8, authentication or cloud sync. Add schema/route/unit tests and visual screenshots at 360/390/430 and a short screen; fix clipping. Return an unmerged PR with exact tests run, screenshot references and a clear Stage 02 vertical-slice plan.**

## 21. What is intentionally deferred

Web/Next.js frontend, desktop designs, accounts and cloud sync, database/backend, subscriptions, speech scoring, AI-generated runtime courses, heavy gamification, global dictionary/corpus search, CMS, cross-device migrations, detailed notification settings, complex SRS (FSRS/Anki) and advanced Finnish morphology generation. Expand only when the mobile learning loop proves its value.

## 22. Reference links and audit record

- [Design System — Overview](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-832) (`197:832`)
- [Design System — Colours](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-838) (`197:838`)
- [Design System — Typography](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-844) (`197:844`)
- [Design System — Spacing](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-850) (`197:850`)
- [Design System — Radii](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-856) (`197:856`)
- [Design System — Controls](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-862) (`197:862`)
- [Design System — Navigation](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-868) (`197:868`)
- [Design System — Learning](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-874) (`197:874`)
- [Design System — Dictionary](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-880) (`197:880`)
- [Design System — Compositions](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-886) (`197:886`)
- [Design System — Accessibility](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-892) (`197:892`)
- [Design System — Handoff](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-898) (`197:898`)
- [Final Mobile QA & Implementation Handoff section](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=287-1638) (`287:1638`)
- Companion files: `Nordic_Editorial_Mobile_Tokens.json`, `Language_Learning_Mobile_Screen_Map.json`, `Language_Learning_Mobile_QA_Report.md`, plus `a1_foundations_curriculum_blueprint.md` and `content_learning_data_architecture_specification.md`.

**Implementation principle:** Figma makes the app look right; the curriculum/data architecture makes its first Finnish course teach correctly; native device QA makes it usable. None replaces the others.
