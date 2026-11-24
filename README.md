# Vokri Cards

Vokri Cards is a local-first flashcards app for learners of Finnish and Swedish. Its interface is English. This first mobile release establishes language selection, navigation and preferences. Full Vokri, the future structured-course product, will reuse the vocabulary, learning-domain, persistence and design foundations.

## Run on a phone or emulator

Use Node **24.22.2** and npm **11.19.1**. The lockfile resolves Expo **58.0.26**, React Native **0.88.1**, React **19.3.0** and Expo Router **58.0.32**. Install native packages with `npx expo install` so Expo selects compatible versions. Expo Router’s dependency tree uses the matching React DOM peer. Application targets are Android and iOS.

```sh
nvm use
npm ci
npm start
```

Open the project in a compatible Expo Go client for SDK 58. Scan the Metro QR code on a phone connected to the development machine’s network. For Android, start an Android Studio virtual device and run `npm run android`. For iOS, use a Mac with full Xcode and an installed Simulator runtime, then run `npm run ios`. App configuration uses the development slug `vokri-cards` and local scheme of the same name. The repository contains no store credentials.

## Current experience

- Choose Finnish (Suomi) or Swedish (Svenska) on first launch. Continue saves the choice on the device. Returning learners land on Today after preference hydration.
- Navigate Today, Discover and My Words. Today’s first-use action opens Discover. Discover and My Words explain the current availability of content.
- Open Settings from the header. Switch language from the header chip or Settings, and choose System, Light or Dark appearance. Changing language preserves appearance and stays on the current screen.
- The native UI uses bundled Newsreader and Inter, local design icons, safe areas, scalable text and accessible selection controls. [Font licenses](assets/licenses) · [Multilingual design addendum](docs/handoff/vokri-cards/vokri-cards-multilingual-implementation-addendum.md)

## Checks

| Command | Result checked |
| --- | --- |
| `npm run typecheck` | Strict TypeScript across the app and tests |
| `npm run lint` | Expo ESLint rules |
| `npm test` | Preference-store behaviour and navigation through real Expo routes |
| `npx expo config --type public` | Resolved native Expo configuration |
| `npx expo install --check` | Dependency compatibility with the installed SDK |
| `npx expo-doctor` | Project and dependency health |
| `npm run bundle` | Android and iOS Metro exports in the ignored `dist/` directory |

GitHub Actions runs clean installation, type checking, linting, tests, Expo configuration and dependency checks, and both bundle exports for pull requests. [Android verification and screenshots](docs/handoff/vokri-cards/foundation-qa.md)

## Source and next milestone

Expo Router routes live in `app/`. Cards-specific screens and navigation composition live in `src/cards/`. Shared language and vocabulary references live in `src/domain/`, storage and state in `src/preferences/`, and navigation-independent controls and theme in `src/ui/`.

The next milestone is deterministic ingestion of each 2,000-entry source with stable identities, language-specific fields, provenance and editorial QA. Real catalogue search, curated decks, word details, study enrolment, Flashcard sessions, scheduled Review, personal vocabulary editing, collections, import/export, complete backups and notifications are deferred. Full Vokri will own lessons and structured exercises. [Cards-first roadmap](docs/architecture/vokri-cards-first-implementation-plan.md) · [Finnish source notes](docs/curriculum/vocabulary/README.md) · [Swedish source and QA](docs/curriculum/vocabulary/swedish_2000_curated_QA.md)
