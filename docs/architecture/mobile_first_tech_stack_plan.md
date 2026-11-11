# Vokri — Mobile-First Tech Stack & Build Plan

**Updated 11 November 2026.** Vokri is the current working product name, not yet a commercially cleared final brand. **Finnish (`fi`) is the only learning language in V1. Swedish (`sv`) is a separate future course, not a second app or a Swedish translation of the app UI.** Launch as a React Native + Expo iOS/Android app first; web is deferred.

This document replaces the earlier web-first implementation order. Preserve the original principle of sharing typed learning/content/domain logic, but do not build a Next.js skeleton, PWA, web E2E or full Turborepo workspace merely to anticipate future needs.

## Goal

Build one polished local-first **Finnish learning mobile app** with structured content, a cumulative learning/review engine and Nordic Editorial UI. Future Swedish should reuse engine, navigation structure, component patterns, language-aware persistence and exercise schemas **while getting a separately authored Swedish curriculum and vocabulary source**. No Swedish course selector or fake Swedish lessons in V1.

A language being **learned** (fi/sv) is different from the interface language (English initially).

## Recommended stack

| Area | V1 choice |
|---|---|
| Platform | **React Native + Expo + Expo Router** |
| Language | **TypeScript** |
| App design | Nordic Editorial components, Newsreader + Inter, semantic design tokens from approved Figma |
| Content | Authored JSON; vocabulary CSV ingested to validated generated Finnish JSON |
| Validation | **Zod** with ID/reference and editorial checks |
| Lesson/review/practice engine | Pure deterministic TypeScript, independent of React/Expo |
| Persistence | **AsyncStorage** behind versioned and testable storage interfaces |
| UI state | Local React state/context, add Zustand only if needed |
| Testing | Vitest for domain logic; React Native Testing Library; Maestro/native QA |
| Native builds | Expo EAS |
| Backend | **None for V1** |
| Future web | Next.js + React is optional **later**; not part of V1 |

Do not pin a historical Expo SDK version in this plan. Codex should verify current compatible Expo, React Native, Router and library versions when scaffolding.

## Mobile-first architecture and future web

Use the existing Vokri repository with a single Expo project and modular directories initially:

```text
vokri/
  app/                           # Expo Router (navigation)
  src/
    ui/                          # Nordic Editorial native components
    tokens/                      # semantic colour, typography, spacing
    content/languages/fi/        # Finnish curriculum + generated vocabulary
    domain/content/              # schemas, content loader, validation
    domain/learning/             # lessons, knowledge, capabilities
    domain/review/               # scheduled review and due queue
    domain/practice/             # Flashcards, Word Match, My Words
    domain/persistence/          # language-scoped local storage
  docs/curriculum/               # authoring/source CSV + attribution
  docs/architecture/             # content/data architecture and this plan
  docs/handoff/                  # approved Figma + Expo contracts
```

**No empty Swedish content tree is required now.** When Swedish is genuinely authored, use a separate sv registry under the same typed content contracts. A future web app may import the domain/content logic but should have its own appropriate UI; we do not need to share React Native UI with a hypothetical web app. No monorepo or Turborepo is required until a concrete second app justifies it.

## Why Expo

The product consists mainly of text, exercises, native navigation and local learning state. Expo + React Native provides a single native codebase for iOS/Android and a manageable development loop. Use Expo Router for Home, Course, Review and Library tabs plus learning, reference, practice and Settings stacks. Avoid separate Swift/Kotlin apps without a real need.

## Storage abstraction

Learning logic must not call AsyncStorage directly. Use an interface for progress, preferences and resumable optional practice. The implementation should use **brand-neutral versioned keys** such as `language-learning:progress:v1` and `language-learning:preferences:v1`, and namespace curriculum/progress/knowledge/review/My Words by **learningLanguage** (fi now; sv later).

Remember that optional Flashcards/Word Match session checkpoints are distinct from scheduled Review outcomes. If a real deployed build already uses legacy `suomi:` keys, migrate non-destructively; do not create them as new keys. Reset progress preserves preferences and should not silently erase user-authored My Words without a separate explicit product decision.

## State management

Do not start with Redux by default.

This app has less global state than a complex editor/product app.

Most state falls into two categories:

### Domain state
- learner progress
- review schedule
- settings

### Temporary UI state
- selected answer
- current question
- search text
- dialog open

Keep temporary state in React where possible.

The most important logic should remain plain TypeScript:

```text
evaluateExercise()
recordResult()
scheduleNextReview()
deriveCapabilityState()
buildReviewSession()
```

Those functions should not depend on React.

If a small global client store becomes useful, Zustand is a good lightweight option, but it should not become the center of the architecture.

---


## Zod

Use Zod for runtime content validation.

TypeScript does not validate JSON content at runtime.

The content pipeline should be able to catch errors like:

- unknown vocabulary ID
- duplicate content ID
- missing grammar reference
- exercise without a correct answer
- production word introduced twice
- malformed review target
- broken prerequisite

Example validation error:

```text
Lesson lesson.hello.foo references unknown vocabulary ID vocab.ollla
```

This is especially valuable for a content-heavy learning product.

---


## Styling

Use the approved [Nordic Editorial Design System](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=197-828) and the existing [mobile handoff](../handoff/README.md), not generic Material/MUI/NativeWind styling by default. Fonts: **Newsreader** for editorial moments, **Inter** for Finnish text and controls. Core palette: Warm Ivory `#F7F5EF`, Deep Pine `#183B35`, Soft Mint `#D6EAE0`, Apricot `#F4AB77`, Periwinkle `#C9D8F6`.

Treat Figma's 390×844 as a visual reference, not fixed native dimensions. Test 360/390/430dp widths, short-screen heights, safe-area insets, text scaling, keyboard avoidance, VoiceOver/TalkBack and reduced motion. No generic framework UI that loses Nordic Editorial's typography and composition.

## No backend for V1

Do not add:

- PostgreSQL
- Supabase
- Firebase
- authentication
- cloud sync
- APIs
- user accounts

V1 can be:

```text
Content
↓
bundled JSON
↓
Learning engine
↓
local learner progress
```

If cross-device continuation later becomes important, that is the right time to introduce accounts/cloud sync.

The proposed architecture leaves room for that without requiring it now.

---


## Reminder setting

The V1 data model needs only `dailyReminderEnabled`; actual notification scheduling can be added only when the app requires and supports it. Spoken Finnish notes are recognition-only teaching metadata and can be toggled through a **language-scoped** preference (e.g., `spokenNotesEnabledByLanguage.fi`). Future Swedish spoken-form notes are authored separately.

## Content strategy refinement

**One authoritative Finnish CSV**: [finnish_2000_curated.csv](../curriculum/vocabulary/finnish_2000_curated.csv), preserved byte-for-byte, plus its [source README](../curriculum/vocabulary/README.md) documenting ranking and attribution. Build a reproducible importer: parse CSV → validate 2,000 unique lemmas/ranks/tier sizes → generate normalized JSON. No manual transcription into TypeScript.

Hand-author lessons, grammar, phrases, spoken notes, exercises and capabilities in JSON; validate IDs and editorial status using Zod. The A1 Foundations blueprint defines **eight units and 142 production lemmas**, but **start at Unit 1 — Hello (five lessons)**. Figma's Unit 4 demo progress must never be seeded.

CSV glosses/examples and teaching annotations are AI-curated, not certified native-speaker-approved content. Preserve dataset attribution and require Finnish-teacher editorial review before production assessment. Do not reproduce copyrighted textbook dialogues/exercises; use only general pedagogical sequencing.

## Finnish first, Swedish later

- V1 targets `learningLanguage = "fi"` and **does not expose a Swedish learning option** until Swedish content has been reviewed.
- Use stable local content IDs under a global identity `(learningLanguage, localId)`, e.g. `(fi, vocab.olla)`. A future Swedish `sv` course gets its own vocabulary and grammar; do not apply Finnish inflection rules automatically.
- Progress, Review due dates, language-scoped preferences and personal My Words are independent per target language.
- Flashcards, Word Match and My Words share the language-scoped registry; optional practice **does not** clear or postpone the scheduled Review queue.
- The general content renderer, session reducers, eligibility filters and design tokens are reusable. Do not prematurely implement Swedish screens, UI translations, a language-picker flow or a second scheduler.

See [Learning Data Architecture](./content_learning_data_architecture_specification.md) and [Vocabulary Practice contract](../handoff/vocabulary-practice/vocabulary-practice-data-contract.md).

## Recommended build path

1. **Inspect Vokri repo** and the [Nordic Editorial handoff](../handoff/README.md); preserve existing work. Implement an Expo/TypeScript foundation with Expo Router, fonts, tokens, safe areas and native navigation.
2. **Validate Finnish source content**: original 2,000-lemma CSV → deterministic generated JSON; typed vocabulary/phrase/grammar/course references, provenance and language-scoped IDs.
3. **Prove one real Finnish Unit 1 vertical slice** (not Figma Unit 4): explanation → vocabulary → exercise → feedback → completion → persisted progress. Expand to all five Unit 1 lessons only after the model is verified.
4. **Integrate scheduled Review V1**: due vocabulary, phrases and grammar; correct/almost/not-sure outcomes and simple interval ladder. Do not build a second SRS engine.
5. **Add optional vocabulary practice** from the approved Figma/contract: Flashcards active recall, Word Match recognition, personal sentence mining and source-aware practice setup. Session checkpoints remain distinct from due reviews.
6. **Expand Finnish curriculum gradually**: Unit 2, then 3–8 with editorial checks. Don't bulk-author all eight units before Unit 1 runs.
7. **Native QA and release**: responsive 360/390/430, short-height and keyboard, real iOS/Android devices, a11y, persistence/recovery, content validation, EAS builds.

Web/Next.js, an actual Swedish course, accounts, cloud sync, CMS and advanced speech scoring are **future** decisions.

## Final stack decision

**V1 is an Expo/React Native mobile app with TypeScript, Expo Router, structured JSON/Zod curriculum, one shared domain engine, language-scoped local AsyncStorage, native Nordic Editorial components and Expo EAS.** No backend or web client. Extensibility means making boundaries reusable, **not** building every future feature today.

**The first Codex task:** implement the Expo/mobile scaffold plus the typed language-aware content source/validator and one real Unit 1 — Hello learning slice, without rewriting the existing curriculum or introducing Swedish content.
