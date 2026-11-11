# Vokri — Exercise & Lesson Content Authoring Standard v1

**Version:** 1.0 · 11 November 2026  
**Status:** Authored specification; instructional examples require language-teacher review. This is not a claim of human certification or measured learning effectiveness.  
**Applies to:** Finnish now; separately authored Swedish later. Language-specific spelling, grammar and register rules belong in each course, not in this general standard.

Read with the [curriculum blueprint](../a1_foundations_curriculum_blueprint.md), [content architecture](../../architecture/content_learning_data_architecture_specification.md) and [Unit 1 specification](./unit-01-hello-complete-specification.md). The curriculum determines scope; this standard determines how to turn that scope into teachable, assessable content.

## 1. Begin with an ability, not a question quota

A lesson has one dominant practical ability, expressed in ordinary language: “Introduce yourself” is better than “Learn two first-person forms.” State what the learner will do, identify the necessary words and patterns, then write the final capability check. Work backwards to the explanations and guided tasks needed to make that check fair.

Distinguish four functions. **Introduction** makes meaning or form available for the first time. **Reinforcement** provides supported use or a changed context. **Assessment** asks for evidence without supplying the answer. **Review** revisits previously encountered content after intervening work. An explanation is not a successful recall; a correct guess is not evidence of permanent mastery.

Keep prerequisites explicit. Do not make an exercise difficult by inserting an unfamiliar question word, inflection or culturally obscure situation. English can frame a beginner scenario while Finnish remains the response being learned. Proper names may be context tokens; they must not quietly become new vocabulary targets.

## 2. Plan a learning progression, not a rigid template

The default movement is **explain → guided recognition → controlled construction → sentence use → cumulative review**. Different abilities need different balances. Greetings need contextual choices; a person distinction benefits from contrasting examples and a controlled transformation; number spelling needs brief retrieval.

Use the eight existing step types: `explanation`, `vocabulary_intro`, `phrase_intro`, `grammar_explanation`, `spoken_note`, `example_set`, `exercise`, `checkpoint`. Use the five supported exercise kinds: `multiple_choice`, `text_input`, `token_build`, `transform`, `matching`. Do not add a renderer type for every instructional intention.

Multiple choice is useful for initial meaning distinctions and self-contained comprehension. Text input tests recall when spelling or a short form has been taught. Token construction reduces writing load while testing arrangement or form selection; it is not equivalent to unaided production. Transformation tests a previously explained contrast, not an untaught paradigm. Matching tests visible associations and should be brief, unambiguous and scored per pair when several targets are present. A checkpoint is a container for authored exercises, not a new game.

Never require all five exercise kinds merely to achieve variety. A justified repeated format is preferable to a distracting interaction. Explain why each question exists and what makes it different from the previous one.

## 3. Increase independence deliberately

Mark the demand of each task: **recognition**, **cued recall**, **controlled production**, or **contextual application**. A first-letter cue is still assistance; supplied tokens are still recognition resources. Do not report these as unaided recall.

New targets need an explicit meaningful exposure before testing. Later tasks should remove some assistance, vary the context, or require combining known material. A final task may use a familiar structure with a different proper name; it need not introduce another grammatical feature to feel authentic.

Preserve curriculum roles. Recognition-only vocabulary can be matched to meanings or digits but must not become required Finnish free production. Support words are not automatically encountered targets. Spoken-language notes remain optional recognition when the curriculum says so, and disabling them cannot make a required exercise impossible.

## 4. Keep mobile sessions honest

As a starting authoring guideline, use a short opening, two to four compact teaching blocks, one or two contextual examples, four to eight practice records, and a small checkpoint. These are design heuristics, not scientifically optimal quotas. Count matching subpairs and multi-part responses as real learner work: one five-pair board is not one effortless decision.

Ordinary explanations should fit roughly 35–75 words; longer material should be broken at meaningful boundaries rather than reduced to tiny text. Keep prompts direct and feedback usually one or two sentences. Show one decision at a time; preserve text entry when the keyboard opens and allow Finnish letters without changing devices or keyboard language.

Estimate duration from actual steps and responses, not word count alone. State that timings are untested estimates. If a fixed lesson contains unusually many targets, disclose the heavier load, provide a natural pause using existing lesson resume, and test it with beginners. Do not silently add a sixth lesson or remove approved targets to meet an arbitrary duration.

## 5. Write distractors that diagnose a distinction

A distractor should represent a plausible confusion: a thank-you where an apology is needed, or the second-person verb form when the subject is “I.” Prefer previously introduced Finnish alternatives. English answer meanings may express alternatives without making the learner produce new Finnish.

Do not use two valid synonyms as mutually exclusive answers. Do not force differences through misleading labels, unusual punctuation, a conspicuously long correct choice, or a repeated position. Identify options by stable IDs and shuffle their visual order independently of the answer key.

Provide a reason for each wrong option when the misunderstanding differs. Avoid trick questions and incorrect forms likely to become memorable unless they expose a relevant, explicitly taught contrast. When two answers are genuinely valid, enumerate both or narrow the prompt openly; do not narrow it only in the hidden answer key.

## 6. Author the acceptance contract before publishing

For every productive task, specify exact accepted forms, not “accept equivalent answers.” Include legitimate pronoun omission, translation alternatives and word order where appropriate. State when a constraint is intentional: “Keep the pronoun” permits a different answer set from “Introduce yourself.”

Normalization may trim outer whitespace, collapse repeated internal whitespace, use Unicode NFC, ignore case, and ignore explicitly permitted sentence punctuation. It must not remove accents, delete Finnish diacritics, merge words, stem arbitrary responses, collapse long sounds, or use edit-distance/AI grading. Punctuation normalization must replace separators with spaces, not concatenate adjacent words.

A language-specific keyboard affordance is not an answer hint. For Finnish, `a` and `ä` remain different letters. An explicitly listed near miss such as a missing diacritic receives corrective feedback, not full correctness. Do not declare every one-character difference “Almost”; some differences change the word or grammatical person.

For contextual tasks with several valid replies, assess the communicative task without crediting every possible underlying word. If the learner chooses one of two synonymous greetings, the unchosen greeting has not been retrieved. Either use response-specific target evidence supported by the architecture or a capability-only checkpoint with no vocabulary-knowledge update. Unit 1 uses the latter for its open greeting task.

## 7. Feedback should explain the result

Author exact text for correct, incorrect and Not sure outcomes. Near-answer feedback is optional and must have an explicit trigger. A correct message may confirm the distinction instead of praising the learner. An incorrect message should identify the relevant contrast and supply a model. Not sure should show the answer without blame or a forced guessing loop.

Separate **semantic result**, **feedback presentation**, and **scheduler vocabulary**. The current scheduler stores `correct`, `almost`, `not_sure`; it has no separate incorrect bucket. Until that architecture changes, Unit 1 routes an attempted wrong or authored near response to the existing non-success `almost` path, but uses an honest visible heading such as “Another look” or “Check the spelling.” It never labels a completely wrong answer as nearly correct, increments success, or creates a new scheduler. This compatibility decision is explicit in the implementation notes.

Allow Continue after feedback. An optional immediate retry is practice with the answer recently shown, not a second independent successful recall. Persist one learning event per target and attempt key; returning to a screen must not duplicate it.

## 8. Make scoring smaller than the visible sentence

`linkedTargetIds` lists relevant content; `scoredTargetIds` lists only the knowledge actually tested. A name-question recognition exercise can link to the name vocabulary and `olla` while scoring only the fixed question chunk. A token transformation can score the person distinction without claiming to retrieve every visible word.

Matching records need per-pair evidence. Never assign one mistaken pair to every item on the board or credit all items because the board eventually clears. Store first-attempt results; later corrected matches are guided practice. A capability-only or awareness-only task has knowledge scoring disabled and an empty scored-target list, not a fictitious lexical target.

Lesson completion follows the existing policy: required teaching steps visited, required exercises attempted or explicitly answered Not sure, and checkpoint attempted. Comfort and familiarity remain separate. Never block course progression until a perfect score, display arbitrary mastery percentages, or treat completion as permanent competence.

## 9. Reuse content safely in scheduled Review

Mark review eligibility exercise by exercise. A review prompt must include its own context, be intelligible without a preceding teaching card, and refer only to encountered targets. “Translate the word above” is not independently reviewable. A useful context-sensitive lesson item may need a separately authored review variant.

Keep the existing deterministic scheduler; authoring does not change its intervals. Only its selected scored targets receive the review outcome. Immediate lesson repetition must not satisfy a “spaced successful recall” threshold merely through repeated taps. A multi-target matching board may be suitable in a lesson but not as one scheduled-review question when the engine selects one due target.

Optional Flashcards and Word Match use the same canonical records. They are not required for unit completion and do not silently clear due reviews. Do not duplicate a one-word utterance into both a vocabulary item and an independent phrase knowledge record.

## 10. Guarantee cumulative coverage

Before finalizing a unit, build a matrix for every production target: introduction, guided recognition, required retrieval, later use, checkpoint coverage and independent review eligibility. Recognition targets need introduction and comprehension opportunities, not required spelling production. Support words need an explicit non-scoring policy.

A matrix must distinguish **opportunity** from **demonstrated success**. A supplied token is not free recall; a word appearing in feedback is not an assessment; a sampled checkpoint is not exhaustive mastery evidence. If a target never receives retrieval, add a purposeful task or revise the sequence with an explained curriculum decision.

Revisit material after intervening work rather than presenting three paraphrases of the same question consecutively. Useful carry-forward examples combine familiar people, expressions and grammar without importing unlearned vocabulary just to make a sentence longer.

## 11. Test ambiguity in optional matching

A matching board must support one defensible counterpart for each active tile. Inspect semantic alternatives, not just duplicate strings. Two different English labels, such as “hi” and “hello,” do not make synonymous Finnish greetings uniquely matchable. Exclude competing items from the same board or add genuine authored context.

The four-pair minimum belongs to optional Word Match setup. A curriculum `matching` exercise can have fewer pairs when appropriate; it must not be padded with unencountered words. Recognition-only words may appear in visible matching; their appearance does not authorize mandatory reverse flashcard production.

## 12. Language verification, originality and release gates

Use the CSV to verify lemma identity and rank, not to certify examples. Record separate provenance for existing project decisions, external linguistic facts and original authored text. Consult authoritative dictionaries, language institutes and educational resources for uncertain claims. Cite the specific source and its limitation. Do not copy another course's dialogue, sequence of exercises, distractors or explanatory prose.

Keep the editorial lifecycle `draft → needs_review → reviewed → approved`. Generated content remains `needs_review` until a named authorized human reviewer actually checks it. A web reference supports a language fact; it does not approve an entire new assessment. Never invent reviewer names or dates.

Before release, audit naturalness, grammatical scope, register, translation, answer alternatives, scoring, accessibility, prerequisites and load. Run structural validation separately from pedagogical review. Report unresolved issues and test novice learners in the real interface; a numeric self-score is an editorial estimate, not evidence of effectiveness.

## 13. Definition of an authoring-complete lesson

The handoff contains actual opening copy, teaching cards, examples, ordered step IDs, exercises, all answers, every feedback path, target references, review flags, completion copy and coverage evidence. There are no instructions for Codex to invent missing Finnish. Constraints requiring engineering work—text entry, token controls, pair-level scoring—are stated rather than disguised as implemented features.

The reusable contract is the structure and quality process. Swedish will reuse those, but its vocabulary, phonology, grammar, acceptable answers and spoken notes must be independently authored.

## References and boundaries

The normative product rules come from the linked Vokri documents, not from an outside textbook. Finnish-specific verification and source URLs are recorded with Unit 1 in [Coverage & Editorial QA](./unit-01-coverage-and-qa.md). This standard intentionally makes no claim that a precise exercise count, duration or textbook sequence has been scientifically proven optimal.
