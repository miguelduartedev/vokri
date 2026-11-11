# Vokri — Finnish Curriculum & Vocabulary Sources

**Release scope:** Finnish (`fi`) only. The app ships an Expo/React Native iOS/Android Finnish-learning experience first. Swedish (`sv`) is a **separate future language to learn**, not a Swedish translation of the current Finnish course or a new app.

## Read in this order

| Document | Purpose |
|---|---|
| [A1 Foundations Curriculum Blueprint](./a1_foundations_curriculum_blueprint.md) | Eight Finnish A1 units, five Unit 1 lessons, 142 production lemmas and deliberate grammar progression |
| [Original Finnish 2,000-word CSV](./vocabulary/finnish_2000_curated.csv) | Source of ranked Finnish lemmas, glosses and editorial example metadata — **preserved byte-for-byte** |
| [Original Dataset README](./vocabulary/README.md) | 500-word tiers, ranking methods, Daniel Radice/Yle/Kotus attribution, licences, limits and editorial review flags |
| [Learning Data Architecture](../architecture/content_learning_data_architecture_specification.md) | Typed content and stable IDs, Unit 1 structured fixture, learner state, scheduled review and storage |
| [Mobile-First Tech Stack Plan](../architecture/mobile_first_tech_stack_plan.md) | Expo/React Native V1, shared learning engine, native persistence and incremental build sequence |
| [Existing Nordic Editorial Handoff](../handoff/README.md) | Approved Figma screens, verified design tokens and native UI requirements |
| [Vocabulary Practice Handoff](../handoff/vocabulary-practice/README.md) | Flashcards, Word Match, My Words and optional practice contracts |

## Dataset integrity and attribution

The provided CSV is original source data and was **not edited** for Vokri or Swedish readiness. It remains UTF-8 with BOM and CRLF newlines, with 2,000 distinct Finnish lemmas ranked 1–2,000 and four 500-word tiers: Core, Everyday, Independent and Extended.

These ranks are **pedagogical priorities**, not a scientifically exact ranking of Finland's most frequent 2,000 words. Its English glosses, examples, topic annotations, spoken forms and final usefulness ranks are AI-curated and need Finnish-teacher/native-speaker editorial review before use in production scored teaching.

Preserve the [source README](./vocabulary/README.md) and its CC BY 4.0 attribution to the upstream Finnish frequency project, Daniel Radice, Yle and Kotus. The source README also describes Language Bank of Finland references and ArkiSyn, but no ArkiSyn conversation text was incorporated. Vokri's authored lesson text and exercises should be original rather than adapted from copyrighted Finnish textbooks.

## Implementation guardrails

- **V1 starts at Finnish Unit 1 — Hello.** Unit 4 / 94 encountered words shown in Figma are illustrative, not real initial learning data.
- Use `learningLanguage: fi` in the Finnish course manifest and scope global content identity by both language and stable local ID; e.g., `(fi, vocab.olla)`. A future `(sv, ...)` registry is independently authored, not a copy of Finnish cases/inflections.
- Language-specific learner progress, scheduled-review due dates, saved My Words and practice sessions must not mix when a Swedish course is added.
- Keep the **2,000-word CSV** as the source asset and generate validated normalized JSON for the app; do not hand-transcribe it or copy its entire contents into learner storage.
- Keep optional Flashcards / Word Match separate from scheduled Review; completing a practice board does not mark words mastered or advance course units.
- Avoid a nonfunctional language picker, Swedish placeholder lessons, Next.js/web scaffolding or an accounts backend in V1.
- Review Finnish teaching examples and grammar with a qualified reviewer before release; source-data checks alone do not certify language pedagogy.

**Recommended first Codex task:** inspect the existing repository and design handoff, then implement the Expo foundation and one real Finnish Unit 1 vertical slice powered by the structured content and vocabulary registry.
