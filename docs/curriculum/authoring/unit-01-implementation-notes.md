# Unit 1 — Content-specific Implementation Notes

**Version:** 1.0-authoring · 11 November 2026  
**Purpose:** Resolve concrete integration details required by the [complete Unit 1 specification](./unit-01-hello-complete-specification.md). This is an authoring contract, not application code. It supplements—not replaces—the existing [learning architecture](../../architecture/content_learning_data_architecture_specification.md) and [Vocabulary Practice contract](../../handoff/vocabulary-practice/vocabulary-practice-data-contract.md).

## 1. Source precedence and stable identities

Keep `learningLanguage: fi`, `course.fi`, `stage.a1-foundations`, `unit.hello`, and the five existing lesson IDs. Resolve global identities as `(learningLanguage, localId)`. The ASCII ID `vocab.mina` identifies the lemma **minä**; it never authorizes accepting `mina` as correct Finnish. Ranks come from the unchanged CSV, not the exercise order.

The authoring document supplies exact learner copy, answers and feedback. Its G1/I1/N1/Y1/C1/R1 labels are reading aids only. Use the `ex.*` identifiers as permanent keys. A step's complete ID is its section's declared `step.hello.<lesson>.` prefix plus the table suffix. Do not convert step order or display title into permanent identity.

The architecture contains both `grammar.subject-pronoun-omission-awareness` in a general example and `grammar.subject-omission-awareness` in its Unit 1 fixture. This specification follows the **fixture's shorter ID**. Treat the longer spelling as an alias when resolving older data; do not create two knowledge records. No original architecture file is modified in this PR.

The name-question entity `phrase.what-is-your-name` is already anticipated in that fixture. It remains recognition-only with `needs_review`, not a new production lemma. The component words inside the chunk must not automatically receive encounters or recall successes.

## 2. Expanding the document into structured records

The common contract in the main specification is inherited by every exercise: language, unit, editorial metadata, `hint: null`, normalization profile and submission policy. Materialize these defaults explicitly when converting to JSON. No exercise needs invented instructional copy during conversion.

For exercise records without a separate stimulus, use `stimulus: null`; the full situation is already in `prompt`. For records without options, use `options: null`. An explicitly absent near-answer rule is `almostAnswers: []`, not permission to apply edit distance. A separate contextual English stimulus is retained exactly when provided.

The existing architecture uses `difficulty` as an editorial tag. Map the authored demand labels as follows; this does not add an exercise kind:

| Authored demand | `difficulty` | Interpretation |
|---|---|---|
| Guided recognition, recognition, contextual recognition or contextual selection | `u1-recognition` | Answer resources remain visible |
| Cued recall | `u1-cued-recall` | A requested form/first-letter cue limits the response |
| Controlled production | `u1-controlled-production` | Short typed Finnish response |
| Controlled construction | `u1-controlled-construction` | Supplied token bank, not free recall |
| Contextual production or grammar transformation | `u1-application` | Known language used for a situation/contrast |
| Awareness | `u1-awareness` | Not a vocabulary or pronunciation success |

All six R-bank variants are `u1-recognition`. C9's explicitly named transform is `u1-application`. I2's guided form selection is `u1-recognition`. Keep `intent` as separately authored; difficulty does not determine which knowledge record to score.

Every exercise/checkpoint step links to the union of the exercises it contains. Each exercise's `scoredTargetIds` remains narrower. A checkpoint container must **not emit an extra recall event** after its children have already emitted theirs. Instructional examples use the explicitly listed references and `countsAsEncounter: false` unless the step names a formal introduction.

## 3. Normalization and exact accepted answers

Use the authored **N1** normalization, in this order: Unicode NFC; case-insensitive comparison; replace `.`, `,`, `!`, `?` with spaces; trim and collapse whitespace. Preserve all letters and letter boundaries. Do not remove diacritics, double-vowel length or spaces between words. Do not stem or translate the answer.

Do not interpret a pattern such as `Olen …` as a literal answer with an ellipsis. Every exercise supplies a concrete role-play name and an explicit finite set of accepted sentences. No learner's real name or personal identity must be requested to run the unit.

Representative acceptance fixtures:

| Input | Task's accepted forms | Result |
|---|---|---|
| `  KIITOS!  ` | `kiitos` | Correct |
| `kitos` | `kiitos` | Authored spelling near miss, not correct |
| `k.i.i.t.o.s` | `kiitos` | Incorrect; punctuation does not join letters |
| `MINA` followed by a combining diaeresis | `minä` | Correct after NFC and case normalization |
| `mina` | `minä` | Diacritic near miss, not correct |
| `nelja` | `neljä` | Diacritic near miss, not correct |
| `jo` | `joo` | Authored spelling near miss, not correct |
| `Hei! Minä olen Aino.` | C6's four listed variants | Correct capability response |
| `Hei! Minä olet Aino.` | C6's variants | Incorrect person agreement |
| `Olet Leo.` | C9 explicitly requires `sinä olet leo` | Form constraint not met; feedback acknowledges grammatical shorter form |
| `Sinä   olet Leo.` | C9's accepted form | Correct |
| `moi` | G4 explicitly requests the h-greeting | Requested form not met; acknowledge moi is a valid greeting |
| `joo` | C12 permits kyllä or joo | Correct capability response |
| `!!!` | `kiitos` | Empty after normalization; require text or Not sure |

A valid response can fail an **explicit form constraint** without being bad Finnish. Use the authored distinction in feedback. Conversely, removing all Finnish diacritics must never yield full correctness merely because the intended meaning is guessable.

## 4. Incorrect versus Almost: a documented compatibility decision

The current domain scheduler has `correct`, `almost`, `not_sure`, while the exercise architecture does not fully specify a general incorrect-answer event. Unit 1 needs both completely wrong choices and specifically authored near answers.

The proposal in this specification is to keep the existing scheduling buckets and separate the visible feedback classification:

| Response class | Existing scheduler result | Learner heading | Success increment? |
|---|---|---|---|
| Exact accepted answer | `correct` | “Correct” or the approved positive treatment | Yes, only for scored targets |
| Explicit authored near answer | `almost` | “Check the spelling” or an equally accurate authored clarification | No |
| Other attempted wrong answer | `almost` | “Another look” | No |
| Explicit Not sure | `not_sure` | “Let's look together” | No |
| Empty input | No committed outcome | Input prompt remains | No |
| Awareness/capability-only task | No knowledge outcome | Correct/corrective copy as authored | No vocabulary/grammar increment |

This is **an explicit implementation decision for review**, not a claim that the original architecture already defined it. Do not display “Almost!” on a completely unrelated response, call a wrong answer nearly correct, increment consecutive successes, or add a separate scheduling algorithm. `almostCount` is a legacy non-success bucket under this proposal; it must not be presented as an accuracy statistic or an analytical count of near-correct answers. The product owner should confirm this interpretation before implementation. A later separate incorrect domain outcome would require a deliberate schema migration, outside this PR.

For automatic evaluation, retain an internal feedback classification of `incorrect` versus `near` when useful; that is renderer/evaluation metadata, not a new scheduler. A selected synonym outside an explicitly requested first-letter form gets its dedicated “valid but not requested” explanation.

## 5. Pair-level outcomes and finite lesson matching

There are four required lesson matching records: I1 has two pairs; Y3 and Y11 each have five; C3 has eight. They are **20 response units**, not four atomic answers. Use each authored pair-to-target mapping.

When a learner starts from either column, attribute the attempt to the Finnish target represented by the first selected tile or its uniquely keyed English counterpart. Do not penalize both targets merely because a mismatched second tile was tapped. At most one first-attempt result is committed for each pair within that exercise run. An incorrect first attempt can be followed by guided correction, but that correction must not immediately upgrade the same attempt to an independent successful recall.

Not sure applies to the current pair; reveal that pair's model, record `not_sure` for its target, and allow progression. When every pair has either an attempted answer or an explicit Not sure response, the matching exercise is complete. Perfection and clearing a board without help are not requirements. Exact pair feedback is authored in the main specification.

The **four-pair minimum** belongs to optional Word Match session eligibility. It is not a requirement for every curriculum `matching` exercise. I1 legitimately has two pairs. Five- and eight-pair lesson records may display at most four active pairs and refill from the finite authored set, or use a scrollable list; that presentation choice must not change targets or scores. Counts in this package count actual pairs, not just visible boards.

## 6. Knowledge versus capability evidence

C1/C2 are awareness tasks with no knowledge scores. C6 is a multi-part greeting/introduction capability task; C12 permits either yes response. All four have `knowledgeScoring: false` and `scoredTargetIds: []`. Record capability or awareness completion as appropriate, not successful retrieval of every linked word.

In particular, a learner writing **moi** in C6 has not also retrieved **hei**. A learner writing **joo** in C12 has not also retrieved **kyllä**. A learner omitting minä from a correct introduction has not produced minä on that attempt. Rather than inventing response-dependent knowledge targets, these open-alternative checkpoints remain capability-only. Dedicated earlier tasks provide target-specific evidence.

The final number task C11 samples **four**. The five distinct first-pass recall opportunities are Y4–Y8. Do not infer correct recall of one, two, three and five from C11 alone. The QA matrix makes the final-checkpoint sampling explicit.

The lesson-completion policy permits Not sure; the capability-success policy does not treat Not sure as success. Unit completion and familiarity must therefore remain separate. No fixed success percentage or compulsory Flashcards/Word Match session is introduced.

## 7. Review gating, roles and optional practice

A `reviewEligible: true` record must be self-contained, target an encountered item and be editorially approved before public use. R1–R5 allow recognition-only numbers to be selected individually; R6 supplies an independent, contextual moi review. They are a bank, not extra mandatory lesson steps.

Do not schedule required free production for the eight recognition-only vocabulary items. Default reverse-only Unit 1 Flashcards should filter these out; mixed direction should keep them in recognition direction. Report the resolved item count truthfully. Personal-word practice remains user-owned and separate from the official Unit 1 role allocation.

Formal first encounters occur only at named introduction steps. G1's corrective feedback can briefly define kiitos before the required courtesy introduction; this is an **incidental unscored preview**, not a formal encounter and never a prerequisite for G1. All actual scored tests of kiitos occur after its formal introduction. Other words merely appearing in distractors, examples or feedback receive no automatic knowledge updates.

Keep the scheduled Review algorithm unchanged. Successful same-session repetition is not sufficient to satisfy a threshold described as successful **spaced** recalls. Optional practice ratings/matches do not clear due items or complete curriculum lessons.

## 8. Mobile renderer requirements exposed by this content

The nine existing Figma frame structures were inspected read-only; the Exercise Default screenshot was visually inspected. The examples establish focused headers, short copy, scrolling, immediate MC feedback and calm completion. They do **not** prove that typed-answer, token-build, transform or every lesson-matching renderer already exists.

Implement within the approved visual language: immediate MC validation; **Check answer** for text/token/transform; **Continue** after feedback; keyboard access to ä/ö; logical focus after submission; readable fixed actions with scroll clearance; no bottom navigation during focused learning. Token controls must be usable through taps and assistive technology, not drag-only.

Split the two semantic panels of the I/you grammar explanation visually without inventing new teaching content. Preserve the optional spoken-note setting: when disabled, omit the step from required progress and do not substitute a forced spoken assessment.

Pronunciation awareness is text-only here. Do not play invented audio, simulate microphone scoring, or claim a learner can hear/produce vowel length because they identified doubled letters. Add native recorded audio only as a future separately scoped teaching improvement.

## 9. Content release gates and verification scope

All newly authored instructions, examples, scored exercises and language notes are `needs_review`, with no fabricated reviewer. Keep development fixtures usable behind an editorial gate; a merged documentation PR alone must not mark production curriculum approved.

An independent local authoring-inventory check was run for counts, unique IDs, declared target order, role separation and 16 normalization fixtures. It cross-checked the 26 Unit 1 lexical references against the original 2,000-row CSV. This is **not** a claim that an app evaluator, Zod converter, mobile UI, accessibility tree or full Markdown-to-JSON pipeline has passed tests. Those remain implementation work.

Before shipping: confirm the outcome adapter, perform human Finnish/S2 review (especially the name chunk, register and spelling explanations), then novice-test the longer number/review lessons and the actual device input flows. No application code, original CSV or Figma content is altered by these documents.
