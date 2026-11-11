# Vokri — Unit 1 Coverage & Editorial QA

**Audit date:** 11 November 2026  
**Scope:** Authored content and content-specific contracts; no implementation, human teacher sign-off or learner trial.  
**Result:** All five lessons are fully authored and suitable for engineering/editorial review. **Not approved for public teaching release.** Every new language-sensitive record remains `needs_review`.

Primary deliverables: [Authoring Standard](./exercise-authoring-standard-v1.md), [Complete Unit 1 specification](./unit-01-hello-complete-specification.md), [Implementation Notes](./unit-01-implementation-notes.md).

## 1. Source baseline and what was actually inspected

The branch was created from `main` commit `00cab1e9369112c9558ae85777934d68022b1f69`. The curriculum blueprint, learning/data architecture, Finnish source CSV and attribution README, mobile-first technical plan, mobile design handoff and Vocabulary Practice data contract were inspected. Existing source material supplies the required scope, roles, stable IDs and learning model; it does not supply finished questions or certify the new examples.

The unchanged vocabulary CSV has Git blob `81341de6828ec5ffa3b6bebfc828ac31bb275776`. The locally available uploaded bytes matched that blob. Programmatic checks confirmed 2,000 rows, 2,000 unique lemmas, ranks 1–2,000 and four 500-item tiers. All **26 Unit 1 lexical references** and their ranks matched the CSV. No dataset example sentence was copied wholesale into a lesson merely because it existed in the source.

Figma was inspected **read-only** at nine specific mobile nodes: lesson `173:922`; exercise default `173:997`; correct `173:1052`; lesson complete `268:1320`; unit complete `268:1345`; Review `182:977`; Vocabulary Library `182:1025`; Flashcards `343:2505`; Word Match `362:3113`. Text, dimensions, scroll containers and existing reactions were read. The actual **Exercise Default screenshot** was visually inspected. This is not a claim of a new screenshot audit of every screen, or of device accessibility testing. No Figma write occurred.

## 2. Completed content inventory

| Lesson | Instructional steps | Ordinary exercise steps | Checkpoint containers | Ordered steps | Required exercise records | Atomic responses | Standalone review-eligible records |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1.1 Hello | 5 | 7 | 1 | 13 | 9 | 9 | 7 |
| 1.2 I am, you are | 6, including 1 optional spoken note | 7 | 1 | 14 | 8 | 9 | 7 |
| 1.3 Your name | 5 | 6 | 1 | 12 | 7 | 7 | 7 |
| 1.4 Yes, and a few numbers | 6 | 10 | 1 | 17 | 11 | 19 | 7 |
| 1.5 First review | 3 | 5 | 1 | 9 | 12 | 19 | 7 |
| **Lessons total** | **25** | **35** | **5** | **65** | **47** | **63** | **35** |
| Separate Review bank | — | — | — | — | **6 additional authored records** | 6 if selected later | **6** |

There are **53 distinct exercise IDs** across the lessons and review bank, not 53 mandatory interactions in one session. Of 65 ordered steps, one is optional: the spoken-Finnish note in 1.2. Four matching records contain 2, 5, 5 and 8 pairs respectively. The atomic response count therefore exceeds the number of exercise records.

| Exercise kind | Required lesson records | Additional Review-bank records | Total authored |
|---|---:|---:|---:|
| Multiple choice | 15 | 6 | 21 |
| Text input | 26 | 0 | 26 |
| Matching | 4 | 0 | 4 |
| Token construction | 1 | 0 | 1 |
| Transformation | 1 | 0 | 1 |
| **Total** | **47** | **6** | **53** |

The user preference for quality over volume is respected by limiting each record to a purpose and by not manufacturing a 100-question bank. The fixed number lesson still needs substantial individual work: that load is disclosed rather than disguised as two simple matching screens.

## 3. Reading the coverage matrices

G/I/N/Y/C/R labels below refer to the **exact `ex.*` records in the complete specification**, not alternate persistent IDs. Step references use the lesson number plus the stable suffix declared in that lesson. “Guided exposure” means meaning is shown; it is **not** a scored recognition success. “Retrieval” explicitly states when a cue remains. “Checkpoint” names an opportunity, not an assertion that the learner succeeded.

All 16 production lemmas have intentional introductions and required retrieval. Four synonymous forms—hei, moi, kyllä, joo—use a first-letter cue to ensure the specific form can be practised without pretending its synonym is wrong. This is a conscious tradeoff, not unaided retrieval of both synonyms in an open task.

### Production vocabulary — all 16

| Lemma / rank / ID | First introduction | Guided recognition or exposure | First required retrieval | Later resurfacing | End-of-unit checkpoint evidence | Scheduled Review |
|---|---|---|---|---|---|---|
| olla / 1 / `vocab.olla` | 1.2 `meet-olla` (olen/olet as teaching forms) | I2, with prior two-form explanation | I8 produces olet; I6 also uses olen but scores the phrase | N7, C6, C9 | C9 tests person agreement; C6 introduction is capability-only | I2 and I8 target the lemma's taught forms; C9 targets grammar |
| ja / 2 / `vocab.ja` | 1.3 `name-and` | N2 | N5 | C5 reverses the order of the names | C5 is cumulative retrieval before the final checkpoint, not a separate final checkpoint item | N2, N5, C5 |
| minä / 5 / `vocab.mina` | 1.2 `people-words` | I1 pair | I4 | 1.3 dialogue, C6/C9 | C6 may omit the pronoun; do not credit it when omitted. C9 displays minä while transforming to sinä | I4 targets the word |
| sinä / 6 / `vocab.sina` | 1.2 `people-words` | I1 pair | I5 | I7 phrase, 1.3 dialogue, C9 | C9 explicitly requires sinä but scores the person-pattern target, not every visible word | I5 targets the word |
| yksi / 17 / `vocab.yksi` | 1.4 `numbers-one-three` | Y3 pair | Y5 | Later Unit 1 number work provides context; no second scored lexical retrieval in 1.5 | Not individually sampled in C11; do not infer success from neljä | Y5 |
| kaksi / 18 / `vocab.kaksi` | 1.4 `numbers-one-three` | Y3 pair | Y7 | Retained for scheduled Review; no second scored lexical retrieval in 1.5 | Not individually sampled in C11 | Y7 |
| kolme / 19 / `vocab.kolme` | 1.4 `numbers-one-three` | Y3 pair | Y4 | Retained for scheduled Review; no second scored lexical retrieval in 1.5 | Not individually sampled in C11 | Y4 |
| neljä / 20 / `vocab.nelja` | 1.4 `numbers-four-five` | Y3 pair | Y8 | C11, number in a ticket scenario | C11 produces the number word | Y8, C11 |
| viisi / 21 / `vocab.viisi` | 1.4 `numbers-four-five` | Y3 pair | Y6 | 1.5 length explanation, not another lexical score | Not individually sampled in final checkpoint | Y6 |
| kyllä / 47 / `vocab.kylla` | 1.4 `yes-words` | Y2 contextual choice | Y9, explicitly k-cued | `pause-and-use` with kiitos, C12 | C12 accepts either yes response; capability-only, never credits both words | Y2 |
| joo / 48 / `vocab.joo` | 1.4 `yes-words` | Y1 | Y10, explicitly j-cued | 1.5 length explanation and C12 | Same synonym-safe capability condition as kyllä | Y1 |
| nimi / 322 / `vocab.nimi` | 1.3 `name-and` | N1 form label | N4 | C4 name-field task, C10 question context | C4 directly retrieves nimi before final checkpoint; C10 scores the question chunk instead | N1, N4, C4 |
| anteeksi / 373 / `vocab.anteeksi` | 1.1 `courtesy-words` | G3 | G9 | C8 polite interruption | C8 produces the word in a new scenario | G3, G9, C8 |
| kiitos / 374 / `vocab.kiitos` | 1.1 `courtesy-words` | G2 | G8 | 1.4 Kyllä, kiitos; 1.5 spelling and C7 | C7 contextual thank-you | G2, G8, C7 |
| hei / 375 / `vocab.hei` | 1.1 `greeting-words` | G1 | G4, explicitly h-cued | 1.3 dialogue and C6 | C6 supplies greeting choices; capability only, not uncued spelling evidence | G1 |
| moi / 376 / `vocab.moi` | 1.1 `greeting-words` | Shown meaning and `tiny-exchanges`; no separate required MC before retrieval | G5, explicitly m-cued with leaving context | C6 and independent R6 when due | C6 permits moi or hei; do not infer both were retrieved | R6 |

**Coverage limitation, stated rather than concealed:** the final checkpoint samples communicative abilities, not a full second free-production examination of all 16 words. Numbers 1–5 each receive direct recall in Y4–Y8; only four is sampled again in C11. Dedicated Review tasks ensure the others can return without adding a repetitive end-of-unit number test. Novice testing should determine whether another in-unit encounter is needed, particularly for one/two/three/five and the four cued synonyms.

### Recognition vocabulary — all eight

| Lemma / rank / ID | Introduction | First recognition | Later cumulative recognition | Required Finnish production? | Independent Review |
|---|---|---|---|---|---|
| kuusi / 22 / `vocab.kuusi` | 1.4 `numbers-six-ten` | Y11 pair | C3 pair | **No** | R1 |
| seitsemän / 23 / `vocab.seitseman` | Same | Y11 pair | C3 pair | **No** | R2 |
| kahdeksan / 24 / `vocab.kahdeksan` | Same | Y11 pair | C3 pair | **No** | R3 |
| yhdeksän / 25 / `vocab.yhdeksan` | Same | Y11 pair | C3 pair | **No** | R4 |
| kymmenen / 26 / `vocab.kymmenen` | Same | Y11 pair | C3 pair | **No** | R5 |
| hyvä / 114 / `vocab.hyva` | 1.3 `notice-good` | N6 | C3 pair | **No** | N6 |
| tervetuloa / 377 / `vocab.tervetuloa` | 1.1 `notice-welcome-goodbye` | G6 | C3 pair | **No** | G6 |
| näkemiin / 378 / `vocab.nakemiin` | Same | G7 | C3 pair | **No** | G7 |

Recognition opportunities occur before the final 1.5 checkpoint, not necessarily inside its seven final exercises. They remain recognition even when all pairs are completed. Reversing a Flashcard or typed task must not silently change these roles.

### Support words

`vocab.nyt` (#40) and `vocab.ehka` (#46) are retained as the blueprint's support allocation but deliberately unused in assessed learner-facing Finnish in this unit. They have **no formal encounter, scored attempt or due-review event** from this specification. Their absence avoids an unnecessary load increase; it does not remove them from the curriculum dataset.

## 4. Phrase, grammar and spoken-note coverage

| Target | Introduction | Practice/evidence | Review policy / limitation |
|---|---|---|---|
| `phrase.olen-slot` | 1.2 `introduction-chunks` | I6; N7; C6 capability integration | I6/N7 independently reviewable; C6 must not double-score all linked words |
| `phrase.enta-sina` | Same | I7; later 1.3 dialogue | I7 reviewable; no separate final-checkpoint retrieval of this phrase |
| `phrase.what-is-your-name` | 1.3 `name-question` | N3 recognition; N7 incoming context; C10 recognition | N3/C10 recognition Review only; never require spelling/building this question in Unit 1 |
| `grammar.personal-pronouns-mina-sina` | 1.2 `person-pattern` | I1/I4/I5 assess associated vocabulary; C9 applies person distinction | Do not advance the grammar record from incidental vocabulary scores; no extra grammar-only Review item authored |
| `grammar.olla-present-1sg-2sg` | Same | I3 token task; C9 transformation | I3/C9 explicitly score grammar; I2/I8 score vocabulary teaching forms |
| `grammar.subject-omission-awareness` | Same | I6/N7 accept both pronoun-included and omitted forms | Awareness only; no required omission or scheduled-review grade |
| `grammar.vowel-length-awareness` | 1.5 `notice-length` | C1 identifies written ii | Unscored awareness; no claim of hearing/pronunciation competence |
| `grammar.vowel-harmony-awareness` | 1.5 `notice-harmony` | C2 notices neutral i with ä | Unscored preview; no suffix selection or full harmony paradigm |
| Four spoken notes: mina-ma, sina-sa, olen-oon, olet-oot | Optional 1.2 `spoken-recognition` | Recognition exposure only | No scored task; disabling notes leaves all required work valid |

Hei!, Moi!, Kiitos. and Anteeksi. remain utterance presentations of existing vocabulary records. There is no `phrase.hei` or equivalent duplicate familiarity score. The optional contracted numbers are not added to the taught note set.

## 5. Prerequisites, assessment and review audit

An independent authoring-inventory manifest was built from the declared exercise records and checked programmatically. It is **not an automated parser of the full remote Markdown, nor a test of a running app**. The manifest checked 53 unique exercise IDs, target sets, declared step positions, modes and review flags against the actual CSV and lesson introduction map.

Results:

- **16/16** production lemmas have at least one required typed retrieval opportunity (four are deliberately cued).
- **8/8** recognition lemmas have introduction and comprehension exercises; **zero** are scored through required Finnish free-production tasks.
- **Zero** scored targets are scheduled before their declared formal introduction.
- **Zero** support words receive recall outcomes.
- **53/53** exercise IDs in the audit inventory are unique.
- **41** exercise records are independently Review-eligible: 35 in the lessons, six bank variants. Multi-target lesson matching records are excluded as whole Review questions.
- **16 deterministic normalization fixtures** passed an independent authoring check: case, whitespace, NFC, diacritics, long vowels, punctuation, pronoun omission and task-specific constraints.
- The CSV remains byte-identical to the authoritative blob; no ranks or lemmas were edited.

Review selection must still respect the single-target due queue, editorial approval and encounters. Reuse does not mean replaying all 41 eligible records in a session. The existing default of up to ten due items remains unchanged. Immediate corrected retries do not manufacture successful spaced recalls.

## 6. Linguistic verification and source register

The following sources were used to check **limited linguistic facts**, not to copy teaching sequences. Original explanations, role-play, prompts, distractors and feedback were authored for Vokri. No textbook dialogue or assessment was reproduced. Standard elementary expressions are language facts, not a claim to authorship of the phrase itself.

### S1 — Greetings can also be farewells

[Kotus: Nähdään, hei!](https://kotus.fi/kolumni/nahdaan-hei/) supports context-sensitive use of hei/moi in leave-taking. The historical column is not a current frequency survey. It motivated arrival/leaving context in G1/G5/R6 and the semantic exclusion of ambiguous greeting pairs in optional matching. [Kotus: Moi!](https://kotus.fi/kolumni/moi/) supplies additional historical/register context; the course avoids absolute claims about where every Finnish speaker uses it.

### S2 — Standard name question

[Yle Oppiminen: Kohteliaisuudet ja tervehdykset](https://yle.fi/a/20-152797) contains **Mikä sinun nimesi on?** as a Finnish expression in its language-learning material. The page itself teaches Russian to Finnish speakers; its relevance here is **attestation of the Finnish phrasing**, not evidence that Yle designed or approved this Finnish A1 sequence. The course uses this question as a fixed recognition chunk and replies through already taught Olen + name.

### S3 — Alternative everyday phrasing and the two olla forms

[A Taste of Finnish, Lesson 1.1](https://tasteoffinnish.fi/lesson1-1/) and its [grammar index](https://tasteoffinnish.fi/grammar/) provide educational examples of minä olen / sinä olet and a less morphologically complete everyday name-question form. Indexed source excerpts were available; direct page retrieval was intermittent. This is supplementary confirmation, not full-source human review. Vokri does not mix the shorter `nimi` question and the selected standard `nimesi` question within a hidden answer key.

### S4 — Pronoun omission and spoken-language variation

[Kotus: Ovatko puhuttu ja kirjoitettu kieli erkaantuneet toisistaan?](https://kotus.fi/kolumni/ovatko-puhuttu-ja-kirjoitettu-kieli-erkaantuneet-toisistaan/) discusses differences in pronoun use between writing and speech and the heterogeneity of spoken Finnish. This supports qualifying the omission explanation rather than saying speakers must drop pronouns. [Uusi kielemme: Finnish commas, part 1](https://uusikielemme.fi/finnish-grammar/syntax/finnish-commas-rules-pilkkusaannot-part-1) explicitly illustrates first-person omission. Vokri's target is the limited I/you pattern, not a complete rule for every subject.

### S5 — Kyllä and joo are not exclusive yes meanings

[Uusi kielemme: How to Say Yes and No in Finnish](https://uusikielemme.fi/finnish-grammar/syntax/yes-and-no-in-finnish-kylla-ja-ei) explains affirmative alternatives and contextual responses. It supports accepting both yes words in C12 and avoiding a false polite/rude dichotomy. Other affirmative strategies are acknowledged but not taught productively in this unit. This is an educator-authored supplementary reference, not a Kotus directive.

### S6 — Vowel harmony with qualifications

[Kielitoimiston ohjepankki: Vierassanojen taivutuspäätteen vokaali](https://kielitoimistonohjepankki.fi/ohje/vierassanojen-taivutuspaatteen-vokaali/) describes the usual noncompound-word vowel groups, neutral e/i and exceptions involving loans/compounds. The learner copy therefore says **many simple words**, not every Finnish word, and does not ask beginners to produce case endings.

### S7 — Written sound length

[A Taste of Finnish: Finnish](https://tasteoffinnish.fi/finnish/) provides an indexed explanation of length and doubled letters; direct retrieval was intermittent. The [Kielitoimiston guidance on foreign-name inflection](https://kielitoimistonohjepankki.fi/ohje/nimien-taivutus-vieraskieliset-nimet/) also explicitly uses doubled vowel letters for long vowels in its Finnish-style pronunciation notation. These are supporting references for the spelling explanation, not evidence that a text-only task assesses pronunciation. C1 is explicitly unscored phonological awareness.

### What has not been verified externally

The sources do not prove these exercise quantities, estimated lesson times, distractor choices or order to be optimal. Those are original design judgments. There has been **no independent Finnish teacher approval, recorded-audio verification, beginner trial or formal assessment validation**. The full eight recognition word glosses and production ranks were checked against the project CSV, which is itself curated; editorial review remains necessary.

## 7. Corrections and refinements made during authoring

| Issue in the planning or a naive implementation | Resolution in this content |
|---|---|
| Tervetuloa, näkemiin and hyvä were allocated to Unit 1 but not placed in its detailed lesson outline | Added recognition introductions in 1.1 (welcome/goodbye) and 1.3 (good), with later C3 recognition |
| Name-question wording was intentionally unresolved | Authored a single attested standard candidate as recognition-only; retained teacher review and no extra productive grammar |
| Hei/moi and kyllä/joo could become unfair distractors or impossible matching pairs | Contextualized recognition; explicit form cues for individual retrieval; accepted alternatives in capability tasks; exclude ambiguous pairs |
| A typed introduction may omit minä correctly | Explicitly accept both forms where no pronoun is required; acknowledge omission as grammatical when a task specifically requires it |
| Wrong versus near answers did not have a complete domain mapping | Documented a proposed non-success adapter to the existing `almost` bucket with honest, distinct visible feedback; needs implementation confirmation |
| Multi-pair matching could credit or penalize all words at once | Explicit per-pair target evidence and first-attempt semantics |
| Large matching boards could conceal workload | Reported atomic response counts: 63 required response units, not merely 47 record cards |
| Course examples and dictionary lemmas could be confused | Olla remains one lemma with taught forms; ID transliteration is never accepted spelling |
| Eight recognition targets could slip into mandatory reverse practice | Explicit role-sensitive direction filters; no required Finnish production for them |
| Spelling length could be presented as pronunciation mastery | Limited it to written awareness and stated the missing audio evidence |

The base curriculum, its 16 production lemmas, its five lesson objectives and the original CSV are unchanged. These are completion decisions for previously unspecified content, not a new unit sequence.

## 8. Lesson-by-lesson pedagogical review

Legend: **Strong** = the authored design contains direct supporting evidence; **Watch** = plausible but needs teacher/novice/device confirmation; **N/A** = intentionally not a distinct teaching aim. These judgments are a self-audit, not external review.

| Criterion | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 |
|---|---|---|---|---|---|
| Linguistic accuracy | Watch greeting context/register | Watch spoken variants/omission | Watch fixed name chunk | Watch yes register | Watch simplified sound explanations |
| Pedagogical progression | Strong meaning → scenario → recall | Strong person contrast → production | Strong recognition chunk → known reply | Strong but dense | Strong cumulative application |
| Vocabulary load | Watch four production + two recognition | Manageable three lemmas + chunks | Manageable two lemmas + recognition | **Watch: seven production + five recognition** | No new production; retrieval load still material |
| Grammar clarity | N/A beyond usage distinctions | Strong limited two-form explanation | Strong chunk boundary | No new inflection | Watch awareness without rule overload |
| Practical usefulness | Strong courtesy situations | Strong introductions | Strong form/name exchange | Useful small-number and yes responses | Strong introduction/politeness transfer |
| Exercise variety | MC and typed context | Matching, choice, tokens, typing | Meaning and production in context | Matching/typing/choice | All needed demands, no forced extra game |
| Appropriate difficulty | Watch cued synonyms | Watch typed ä and omission alternatives | Watch length of recognized question | Watch number load | Watch abstract vowel-group check |
| Answer validity | Explicit contextual acceptance | Optional pronouns handled | Recognition question, controlled reply | Yes synonyms not falsely excluded | Capability-only handling of multiple valid replies |
| Feedback quality | Function-specific | Person/form-specific | Word/chunk distinction | Digit/spelling/register-specific | Context plus specific error explanations |
| Cumulative retrieval | Reuses courtesy functions within lesson | Reuses greeting background | Reuses introductions and turn-taking | Reuses kiitos | Recycles prior domains, samples final numbers |
| Assessment validity | First-letter prompts not called uncued | Tokens distinguished from free recall | Question recognition not production | Per-pair evidence separate | Explicitly sampled, not exhaustive mastery test |
| Mobile ergonomics | Short copy | Two semantic grammar panels | Short exchange | Pause before recognition numbers | Pause before seven-item checkpoint |

### Aggregate 100-point rubric

This is a **provisional editorial self-assessment**, not a measurement of effectiveness or a guarantee. The requested 95–100 target is an aspiration; current unresolved teacher/pacing/device evidence prevents an honest perfect or near-perfect release claim.

| Criterion | Maximum | Awarded | Evidence / reason for deduction |
|---|---:|---:|---|
| Linguistic accuracy | 15 | 14 | Source checks performed; no independent teacher approval |
| Pedagogical progression | 12 | 12 | Introduction-before-scoring and staged recall explicitly mapped |
| Vocabulary load | 10 | 8 | Lesson 1.4 remains dense under the fixed curriculum |
| Grammar clarity | 10 | 9 | Scope controlled; omission/harmony simplifications still need S2 review |
| Practical usefulness | 10 | 10 | Adult greetings, introductions, courtesy and number contexts |
| Exercise variety | 7 | 7 | Five supported formats, chosen for purpose |
| Appropriate difficulty | 7 | 6 | Cued synonym recall and abstract awareness require beginner trial |
| Answer validity | 8 | 8 | Finite keys, alternatives, constraints and semantic collisions explicit |
| Feedback quality | 6 | 6 | Authored correct/wrong/near/Not sure paths |
| Cumulative retrieval | 7 | 7 | Explicit recurrence and independent Review candidates |
| Assessment validity | 5 | 4 | Capability checkpoint samples numbers and does not re-assess all forms |
| Mobile ergonomics | 3 | 2 | Existing frame constraints considered; new input flows untested |
| **Total** | **100** | **93** | **Authoring-complete; editorial and learner validation outstanding** |

No points are earned by asserting that a native teacher reviewed this content. The remaining deductions identify concrete next checks rather than missing placeholder exercises.

## 9. Release gates and remaining risks

1. **Finnish/S2 teacher review:** confirm name-question register and chunk introduction, greeting contexts, kyllä/joo descriptions, spoken forms and the limited phonological explanations. Mark individual records approved only after actual review.
2. **Product/domain confirmation:** accept or revise the documented incorrect → legacy `almost` non-success adapter; test per-pair scoring and capability-only checkpoints without changing review intervals silently.
3. **Novice pacing:** study 1.4 and 1.5 on a real phone. Check whether the suggested pause points, text amount and 19-response workload in each are manageable. The current duration estimates are not measured.
4. **Native input/accessibility:** verify Finnish keyboard support, Unicode behavior, screen-reader flow, token access, matching focus, larger text and keyboard-safe fixed actions.
5. **Content ingestion validation:** convert the specification into actual typed JSON, run ID/answer/reference validators and confirm the UI does not display all CSV examples or future Unit 4 vocabulary.

The material is complete enough for implementation and teacher review without inventing missing Finnish questions. It is not a substitute for those gates. A documentation merge must not automatically change editorial status to approved.

## 10. Change scope and verification statement

Only new files under `docs/curriculum/authoring/` are intended for this PR. Existing source curriculum documents, the vocabulary CSV, application code and Figma are preserved. Full record answers and learner-facing text are in the companion specification; this report provides traceable coverage rather than another duplicated lesson script.

Validation findings above distinguish independent manifest checks, source inspection, read-only visual inspection and editorial judgment. No native tests or human approvals are represented as completed.
