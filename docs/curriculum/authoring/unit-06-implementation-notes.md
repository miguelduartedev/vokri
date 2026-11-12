# Vokri — Unit 6: Daily Life · Content-to-Expo Implementation Notes

**12 November 2026 · Documentation only · Learning language:** `fi`. This file is an implementation **contract** for Codex after Vokri-owner editorial approval, **not** a claim that any React Native/Expo code or native tests exist.

Read alongside [Unit 6 complete specification](./unit-06-daily-life-complete-specification.md), [Unit 6 coverage & QA](./unit-06-coverage-and-qa.md), [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md), the [merged Unit 5 notes](./unit-05-implementation-notes.md) and [shared learning architecture](../../architecture/content_learning_data_architecture_specification.md).

## 1. Stable Unit and Lesson IDs

`course.fi` → `stage.a1-foundations` → `unit.daily-life` (`learningLanguage: fi`). Exactly six lessons, no seventh assessment lesson:

| Order | Stable lesson ID | Formal new production lemmas |
|---|---|---|
| 6.1 | `lesson.daily-life.morning-evening` | aamu, ilta, herätä, nukkua |
| 6.2 | `lesson.daily-life.eat-drink-today-tomorrow` | syödä, juoda, tänään, huomenna |
| 6.3 | `lesson.daily-life.what-time` | kello, aika |
| 6.4 | `lesson.daily-life.monday-thursday` | maanantai, tiistai, keskiviikko, torstai |
| 6.5 | `lesson.daily-life.friday-sunday` | perjantai, lauantai, sunnuntai, lähteä |
| 6.6 | `lesson.daily-life.how-often` | aina, usein, joskus |

Exercise keys: `ex.daily-life.<lesson-slug>.<exercise-slug>`. Required LessonStep keys: `step.daily-life.<lesson-slug>.<step-suffix>`. Independent due-Review keys: `ex.daily-life.review.<target-slug>`. These are lesson-local stable IDs under the Finnish course; no mutable order embedded in an identifier.

**Versioned content metadata:** `contentVersion`, `editorialStatus: needs_review`, `sourceType: original`, `reviewedBy: null` until explicit Vokri-owner sign-off. No invention of teacher-review credentials.

**Required record counts:** 117 ordered steps (114 required, 3 optional), 92 mandatory exercises, eight standalone Review exercises, 100 globally unique exercise IDs. Seven required matching boards contain 21 actual first-attempt pair choices, so minimum required response count is 106, not 92. One optional phrase intro (6.2) and optional spoken recognition notes (6.1, 6.5) must not block completion.

## 2. Vocabulary source, identity and role safety

- Canonical lemma backing is the unchanged `docs/curriculum/vocabulary/finnish_2000_curated.csv`. Generate JSON via the shared importer/validator. Keep authored form overlays **separate** from the CSV.
- Exactly **21 new production** lemmas (cumulative 103 at end of Unit 6) and exactly **seven new recognition-only** items. All 28 ranks were cross-checked against the original CSV.
- Maintain separate target types and roles: lemma versus inflected form, new/review/recognition/support, grammar concept versus fixed phrase, scheduled-Review evidence versus voluntary practice.
- Illustrative `(fi, vocab.syoda)` is the same learning item whether the UI shows `syödä` or `syön`; forms do not become extra dictionary objects. The Unicode spelling `ä`, `ö`, long vowels and consonants are part of authored Finnish and should not be stripped from learner-visible text.
- Recognition only: `vocab.nousta`, `vocab.eilen`, `vocab.paiva`, `vocab.tunti`, `vocab.minuutti`, `vocab.viikko`, `vocab.kuukausi`. They receive self-contained English-meaning Review questions, **not** compulsory Finnish spelling.
- `phrase.daily-life.nahdaan-huomenna` is a **new optional recognition-only phrase** introduced in 6.2, never an old reviewed production chunk; due Review variant R08 must not appear until the actual optional phrase step was encountered.
- `Nähdään` is a fixed recognition chunk here; no new `nähdä` production lemma, passive tense paradigm, or new lexicon entry from it.
- Personal `My Words` entries are user-owned and separate; optional Flashcards/Word Match must not alter official unit completion or scheduled due dates.

## 3. Explicitly authored Finnish forms — no morphological generator

| Existing/new lemma | Authored learner-visible form | Required ability |
|---|---|---|
| herätä | herään | I wake up |
| nukkua | nukun | I sleep |
| syödä | syön | I eat |
| juoda | juon | I drink |
| lähteä | lähden | I leave |
| aamu | aamulla | in the morning, fixed form |
| ilta | illalla | in the evening, fixed form |
| maanantai | maanantaina | on Monday, a particular Monday |
| tiistai | tiistaina | on Tuesday |
| keskiviikko | keskiviikkona | on Wednesday — retain both k's |
| torstai | torstaina | on Thursday |
| perjantai | perjantaina | on Friday |
| lauantai | lauantaina | on Saturday |
| sunnuntai | sunnuntaina | on Sunday |

**Whole hour:** `Kello on viisi.` is a clock reading; `Herään kello viisi.` states when the action happens. `Herään viideltä.` is a natural alternative but deliberately **recognition-only** in this author's scoped Unit 6. Do not require `viideltä` in C13 or G11, and do not combine it as `Herään kello viideltä.`. Numbers 6–10 may be recognised in whole-hour sentences, but they remain recognition-only for unconstrained typed Finnish production.

**Weekday time forms:** the `-na` forms often indicate an event on a particular weekday. Habits every Monday use other forms, such as `maanantaisin` or `joka maanantai`, which Unit 6 does **not** require. The frequency adverbs `aina/usein/joskus` describe frequency without inventing exact numerical proportions.

**Spoken Finnish:** `lähden → lähen` plus earlier `menen → meen` and `tulen → tuun` are optional spoken recognition notes only. No required `lähen` answer or independent lexical knowledge record.

**Grammar IDs** are explicitly scoped to: `grammar.daily-life.first-person-forms`, `grammar.daily-life.daypart-fixed-forms`, `grammar.daily-life.whole-hour-time`, `grammar.daily-life.weekday-time-forms`, `grammar.daily-life.frequency-placement`. These are pedagogical learning concepts, **not** implementation rules to autogenerate inflections.

**Phrase IDs:** `phrase.daily-life.kello-on-hour` (productive fixed pattern), `phrase.daily-life.mita-kello-on` (recognition-only question) and `phrase.daily-life.nahdaan-huomenna` (optional recognition-only farewell). `Herään…`, `Nukun…`, `Maanantaina…`, `Lähden…` are examples using the existing lemma/form registry, not duplicate independent scored phrases. `Teen tämän usein.` is a fixed awareness/example, not a new taught object case.

## 4. Deterministic answer validation

Use the existing N1 normalisation from Units 1–5:

1. Normalize to Unicode NFC, trim outer whitespace and collapse repeated internal whitespace **within each answer segment**.
2. Ignore case and permitted terminal punctuation only where the exercise explicitly allows it; never remove Finnish `ä/ö`, double letters or word boundaries.
3. Do not allow synonyms, invented object-case forms, arbitrary alternative word order or loose semantic AI grading unless the record explicitly lists the allowed response.
4. `text_input` uses authored accepted strings after N1; `multiple_choice` checks stable option IDs after shuffling, not visible position.
5. `token_build` tiles use **lowercase lexical content** and the renderer capitalises the assembled first word of a sentence. All six authored token-build examples must support both declared word orders without displaying a capital letter in the middle of a sentence.
6. For matching, each pair scores its own first attempt. An eventual corrected match is guided practice, not a second scored correct result.

### Restricted multiline final routine — G15

G15 is **one integrated capability exercise**, not a generic free-writing editor. The learner is given three **specific English prompts** and writes three short lines, in order:

1. I wake up at five o'clock.
2. In the morning I drink coffee.
3. On Friday I leave.

**Recommended implementation:** render three scoped `text_input` fields in the existing checkpoint layout, each with its own accepted variants and feedback, and combine their completed state into one **capability-only** result. This is an implementation presentation of an existing input type, not a new exercise kind or NLP grader.

Allowed per-line answers from the specification:
- Line 1: `Herään kello viisi.`; allow `Minä herään kello viisi.` where authored.
- Line 2: `Aamulla juon kahvia.`; allow `Juon kahvia aamulla.` when authored.
- Line 3: `Perjantaina lähden.`; allow `Lähden perjantaina.` where authored.

**Do not treat any unlisted combination as automatically accepted until content specifically approves it**; when converting Markdown, consider adding the valid Cartesian combinations of independently approved line variants to the per-field acceptance arrays rather than embedding a single multi-line string. The canonical text remains the source; a content-authoring correction should be explicit. G15 has `scoredTargetIds: []`, `knowledgeScoring: false`; it can add capability checkpoint evidence but must not create seven vocabulary successes.

### Wrong versus Almost — shared compatibility

The existing scheduling interface only has `correct`, `almost` and `not_sure`. Under the inherited Unit 1–5 provisional compatibility rule:

| First attempt | Visible feedback | Stored outcome | Correct/mastery success |
|---|---|---|---|
| Fully correct | Correct | `correct` | Only explicit `scoredTargetIds` |
| Explicit authored near miss | “Check the form” | `almost` (non-success) | None |
| Clearly wrong | “Another look” with true explanation | `almost` (provisional non-success) | None |
| Explicit Not sure | Full model answer | `not_sure` | None |
| Empty input | No committed result | None | None |
| G15 capability-only result | Contextual feedback | No lexical SRS outcome | Capability evidence only |

The mapping is **not** an accurate distinction between wrong and nearly correct results. Do not pretend it is. Changing shared scheduler semantics requires a separate reviewed domain change, not a Unit 6-only patch. Never show “Almost!” for a completely wrong response.

## 5. Matching, Review and event integrity

**Required matching boards:** seven in the lesson flow. They involve **21 separately validated pairs**: 6.1 two; 6.2 two; 6.3 three; 6.4 four; 6.5 seven across two boards; 6.6 three. The optional **Word Match practice activity** requires four eligible pairs in session setup; this minimum **does not apply to lesson-local matching activities**.

No auto-success for an entire board. Track a stable matching pair ID, authored answer association, first-attempt correctness and independent score transaction ID. If a learner mismatches two tiles, do not commit failures to every item in the board. Do not create duplicate knowledge events when the user retries after seeing feedback.

**Separate due-Review variants:** R01–R07 assess `nousta`, `eilen`, `päivä`, `tunti`, `minuutti`, `viikko`, `kuukausi` through English-meaning recognition. R08 assesses the fixed farewell `Nähdään huomenna!` only after the optional phrase intro was actually encountered. All are separately authored self-contained prompts, not lesson-local scaffolds.

**Review scoping:** lessons can provide immediate practice and mark `reviewEligible` for self-contained prompts; the scheduled-Review engine decides when due. Optional Flashcards/Word Match do not clear, postpone or replace due Review.

**Avoid duplicate scoring:** The matching boards score first attempt per pair; if a grammar target appears in several paired prompts on the same board, scope each pair's target instead of committing the same grammar concept multiple times for one learner action. Context-only/capability-only questions have empty `scoredTargetIds`.

## 6. Nordic Editorial mobile presentation considerations

Review the existing approved lesson, exercise, feedback, lesson completion and Review designs; **Figma stays unchanged** in this content PR.

- Use the existing eight LessonStep and five exercise types. Unit 6 does not require a clock-widget, a drag calendar, an audio service, a new grammar visual renderer or a separate conversation engine. Numeric clock text `05:00` with accessible labels is sufficient.
- Finnish keyboard: do not autocorrect `herään` to `heran`, `lähden` to `lahden`, or `syön` to `syon`. Give correct diacritic-specific feedback instead of stripping characters to match.
- The same 390×844 reference screen should reflow at 360 and 430 dp, and at 720-height with a software keyboard. Preserve scrolling above fixed actions, font scaling and sufficient touch targets.
- Make selected states, Not sure affordances and first-attempt feedback accessible without reliance on color alone. Test TalkBack/VoiceOver focus during matching, and restore paused lesson correctly.
- Lessons 6.3–6.5 are cognitively denser (clock expressions, four weekdays, three weekdays + leaving). Provide natural pauses and measure novice duration before release; estimated timings are not validated performance benchmarks.
- Optional spoken `lähen` is recognition only. Disabling spoken notes must not hide a required exercise or create a skipped required step.

## 7. Linguistic provenance and editorial approval

The Unit 6 source CSV is the unchanged lexical authority for lemma ranks and identities. It does **not** certify AI-authored examples. Research references to verify the finiteness and naturalness of forms:

- [Uusi kielemme — Telling the Time](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/telling-the-time-in-finnish-mita-kello-on)
- [Uusi kielemme — Weekday forms](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/the-days-of-the-week-viikonpaivat)
- [Uusi kielemme — Expressions of Time](https://uusikielemme.fi/finnish-grammar/finnish-cases/interesting-inflection/expressions-of-time-ajanilmaukset)
- [Uusi kielemme — First 100 Finnish Verbs](https://uusikielemme.fi/finnish-vocabulary/vocabulary-lists/your-first-100-finnish-verbs-finnish-for-beginners)

Content authoring used these as reference points; exercises and examples are independently authored and do not reproduce copyrighted textbook passages. Owner approval is sufficient for Vokri's **internal** authoring workflow; no external teacher certification is claimed.

## 8. Recommended downstream Codex sequence (not part of this PR)

1. Inspect merged source docs and approved Nordic Editorial Figma; validate all canonical lemma/grammar/phrase IDs, Unit 5 predecessor references, 117 LessonSteps, 100 exercise records and the 28 new lexical roles.
2. Convert authored Markdown into typed structured JSON/Zod, preserving exact learner-facing copy, accepted answers, per-option feedback, `linkedTargetIds` and `scoredTargetIds`.
3. Add the finite taught time and weekday form table; no automatic conjugation or new case engine.
4. Implement deterministic G15 three-line acceptance without free-form NLP or a new learning UI type. Resolve any required scoring contract adaptation with explicit tests.
5. Exercise the scheduled-Review-only R01–R08 bank, matching first-attempt event integrity and optional practice boundaries.
6. Test actual Expo iOS/Android views with Finnish keyboard, accessibility tree, small devices, pause/resume and learner-timed sessions. All content remains draft until Vokri-owner review.

**This PR is only the Unit 6 documentation package.** No app implementation, Figma changes, source CSV changes, previous-unit rewrites or scheduled Review modifications are included.
