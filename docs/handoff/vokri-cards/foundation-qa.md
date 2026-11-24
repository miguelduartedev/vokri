# Foundation verification · 24 November 2026

## Automated checks

Verified from a clean `npm ci` with Node 24.22.2 and npm 11.19.1. Strict TypeScript and Expo ESLint passed. Jest Expo passed **21 behavioural tests** across the preference store and real Expo Router screens. The tests cover delayed/failed hydration, corrupt and unsupported records, simultaneous writes, failed writes and retry, persistence, theme resolution, onboarding, selection semantics, navigation and both switching entry points.

`npx expo config --type public` resolved iOS and Android. `npx expo install --check` found the dependencies compatible. Expo Doctor passed **20 of 20** checks. Metro exported a Hermes bundle for each native platform. The locked native stack is Expo 58.0.26, React Native 0.88.1, React 19.3.0, Router 58.0.32 and AsyncStorage 2.2.0. npm reported moderate transitive glob/minimatch advisories in the dependency tree. Its suggested forced changes cross SDK or Jest major versions. Track compatible upstream fixes.

## Android cold starts

Used an isolated Pixel 7 profile running Android 14 / API 34, ARM64, Expo Go 58.0.6 and the real AsyncStorage implementation. Metro served the project on the same local URL throughout each run. These are cold starts of the Android host process. For each check, captured the PID, ran `am force-stop host.exp.exponent`, confirmed `pidof` returned no process, then relaunched the same project by Android intent. Android reported `LaunchState: COLD` both times. App data was retained across each stop and restart.

| Setup | Observed after relaunch |
| --- | --- |
| On a fresh installation select Swedish, press Continue, and leave appearance on System with Android Light | New process, Swedish Today, English interface, light rendering. The learner entered Today directly. [Capture](screenshots/foundation/cold-swedish.png) |
| Open Settings, set appearance to Dark while Android stays Light, then repeat termination and relaunch | New process, dark Swedish Today. Reopening Settings showed both Swedish and Dark. [Today](screenshots/foundation/cold-dark-swedish.png) · [Restored settings](screenshots/foundation/restored-dark-settings.png) |

## Visual and functional checks

Compared rendered screens against the editable [multilingual foundation](https://www.figma.com/design/vJPxcNnHyCOAp57MBh46O7/Finnish-Learning-App?node-id=452-4080), including wordmark, editorial headings, native-language labels, selection indicators, status card, theme surfaces and the switcher. The first-use action opens the available Discover screen. Removed future deck and study examples from the composition. Adjusted Today’s supporting type and button alignment during comparison. System appearance followed Android between light and dark, and explicit Light and Dark both applied across the app.

| Case | Android evidence |
| --- | --- |
| Finnish and Swedish onboarding, 390×844 | [Finnish](screenshots/foundation/finnish-onboarding.png) · [Swedish](screenshots/foundation/swedish-onboarding.png) · [System dark](screenshots/foundation/onboarding-dark.png) |
| First-use Today and Settings | [Finnish Today](screenshots/foundation/finnish-today.png) · [Finnish Settings](screenshots/foundation/finnish-settings.png) · [Swedish Settings](screenshots/foundation/swedish-settings.png) |
| Switcher opened from Today and Settings | [360-wide](screenshots/foundation/narrow-switcher.png) · [430-wide](screenshots/foundation/wide-switcher.png) · [Dark Settings sheet](screenshots/foundation/dark-switcher.png) |
| Catalogue and personal vocabulary foundations | [Discover](screenshots/foundation/discover.png) · [My Words](screenshots/foundation/my-words.png) |
| 360×600 logical units at 200% Android font scale | Cards stayed distinct, copy wrapped and Continue was reachable by scrolling. Settings rows remained readable and the sheet accommodated both languages. [Continue](screenshots/foundation/onboarding-short-end.png) · [Language sheet](screenshots/foundation/large-switcher.png) |
| Finnish and Swedish characters | Rendered ä, ö, å, Ä, Ö and Å using the actual Newsreader and Inter components in a separate temporary native sample. [Glyph check](screenshots/foundation/unicode.png) |

Tapped the real Today → Discover action, switched tabs, opened Settings from My Words and used Android hardware Back to return to My Words. Hardware Back also dismissed the language sheet without changing selection. Switched languages through Settings and the header, and observed the new language on the current route. Checked selected radio semantics in component tests and inspected controls and labels in the Android accessibility hierarchy.

Android verification used Expo Go on an emulator. A standalone signed binary, physical-device run, iOS launch, VoiceOver and TalkBack remain unverified. The Mac has Apple Command Line Tools without full Xcode or an iOS Simulator runtime. These checks establish the mobile foundation for vocabulary integration. Native release validation remains a later milestone.
