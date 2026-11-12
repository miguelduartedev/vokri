# Vokri — Unit 7: People & Descriptions · Coverage, Research and Editorial QA

**12 November 2026 · Finnish A1 authoring review only.** This is an editorial audit of [the complete Unit 7 specification](./unit-07-people-and-descriptions-complete-specification.md), [Unit 7 implementation notes](./unit-07-implementation-notes.md), [Exercise Authoring Standard v1](./exercise-authoring-standard-v1.md) and [merged Unit 6](./unit-06-daily-life-complete-specification.md). It is **not** a completed Expo app, a measured learner study or certification by a Finnish teacher.

## 1. Authored inventory and realistic workload

**Six lessons**, **121 ordered LessonSteps** (119 required, two optional spoken-recognition notes), **96 required lesson exercise records**, **nine matching boards with 19 individual pair decisions** and **nine independent due-Review variants** = **105 unique authored exercise IDs**. First-pass minimum learner response units: **96 − 9 + 19 = 106**, before typing length, feedback reading and retries. Every lesson has one embedded checkpoint; 7.6 has a six-task final capability check inside the sixth lesson, not a seventh lesson. All durations are **untested editorial estimates**.

| Lesson | Ordered steps | Required exercises | Matching boards | Pair decisions | Estimated minutes |
|---|---:|---:|---:|---:|---|
| 7.1 Your family | 19 | 14 | 2 | 4 | 9–13 |
| 7.2 People close to you | 24 | 18 | 1 | 2 | 13–20 |
| 7.3 Whose? And with whom? | 23 | 17 | 1 | 3 | 13–20 |
| 7.4 Describing someone | 20 | 16 | 3 | 6 | 10–15 |
| 7.5 Basic colours | 19 | 15 | 2 | 4 | 9–14 |
| 7.6 People review | 16 | 16 | 0 | 0 | 12–18 |
| **Total** | **121** | **96** | **9** | **19** | **66–100** |

**Exercise types (required):** 35 `multiple_choice`, 44 `text_input`, nine `matching` boards, four `token_build`, **four `transform`**. The four transformations assess only *taught* positive-to-negative sentences and do not generate arbitrary case forms. Additional due-Review items are nine `multiple_choice` records, not compulsory lesson steps.

## 2. All 20 production-role targets: introduction, retrieval and reuse

The source CSV confirms the 20 listed ranks and canonical lemma identities. `vocab.ystava` is a **production-role promotion**, not a brand-new lemma: it was recognised in **Unit 2 lesson 2.2**, and Unit 7 reuses its existing learner record. Thus Unit 7 contains **20 production roles but only 19 genuinely new lemma encounters**. Recognition in a teaching card is not a successful recall.

| Lemma (rank) | Formal production introduction | First guided recognition | First required lexical retrieval | Later reuse / capability | Independent due Review candidate |
|---|---|---|---|---|---|
| **perhe** (#155) | 7.1 family-group | A03 | A08 | A14; due Review | A08/A14 |
| **äiti** (#151) | 7.1 mother-father | A01 | A06 | A11; C01/C03 genitive | A06 |
| **isä** (#152) | 7.1 mother-father | A01 | A07 | A12 guided; 7.3 isän form | A07 |
| **veli** (#153) | 7.1 brother-sister | A02 | A09 | B14; C02/C07; F03/F05/F07 | A09/F07 |
| **sisko** (#154) | 7.1 brother-sister | A02 | A10 | B09/B13; F02/F04/F06 | A10/F02 |
| **kumppani** (#158) | 7.2 relationships | B01 | B04 | B10/B15; C11–C15; F08/F09/F13/F15/F16 | B04 |
| **ystävä** (#156) | 7.2 production role promotion from Unit 2 recognition | Unit 2 role + B02 | B05 | B17/C06; R09 Gen+With review context | B05 |
| **kaveri** (#157) | 7.2 relationships | B03 | B06 | 7.3 taught kaverin; C16 independent sentence | B06 |
| **kanssa** (#349) | 7.3 introduce-kanssa | C11 | C13 | C14–C16; F08/F09 | C13/R09 |
| **iso** (#116) | 7.4 size-words | D01 | D06 | D14 house description | D06/D14 |
| **pieni** (#117) | 7.4 size-words | D01 | D07 | D15 room description | D07/D15 |
| **vanha** (#119) | 7.4 age-words | D02 | D08 | D14 distractor in house context; otherwise later due Review | D08 |
| **nuori** (#120) | 7.4 age-words | D02 | D09 | D13; F11/F15 | D09/F11 |
| **pitkä** (#121) | 7.4 height-words | D03 | D10 | D12; F10 person height | D10/F10 |
| **lyhyt** (#122) | 7.4 height-words | D03 | D11 | D16 person height | D11/D16 |
| **väri** (#297) | 7.5 colour-words | E03 | E06 | semantic category reused in 7.5, later due Review | E06 |
| **musta** (#298) | 7.5 colour-words | E01 | E07 | E14 black house | E07/E14 |
| **valkoinen** (#299) | 7.5 colour-words | E01 | E08 | E13 white room (guided) | E08 |
| **punainen** (#300) | 7.5 red-blue | E02 | E09 | E11/E15; F12 red house | E09/F12 |
| **sininen** (#301) | 7.5 red-blue | E02 | E10 | E12; F15 fictional blue house | E10/E12 |

**Coverage judgement:** every production-role item has an explicit retrieval task, and frequent/useful words recur in later lessons. Several narrower vocabulary items (notably `vanha` and `väri`) rely more heavily on their independent lesson task and eventual scheduled Review than on the final six-item capability sample; do not claim they all have repeated unaided retrieval across multiple lessons. The final check samples communicative ability rather than re-testing all twenty lemmas.

## 3. Six recognition-only lemmas: correct limits and independent Review

| Lemma (rank) | Formal encounter | Required recognition | Standalone due Review | Production restriction |
|---|---|---|---|---|
| **poika** (#149) | 7.1 son-daughter | A04 | R01 | boy/son, family context; no Finnish typing |
| **tyttö** (#150) | 7.1 son-daughter | A05 | R02 | girl/daughter; no Finnish typing |
| **kaunis** (#132) | 7.4 extra adjectives | D04 | R03 | beautiful; recognition only |
| **mukava** (#134) | 7.4 extra adjectives | D05 | R04 | nice/pleasant; recognition only |
| **silmä** (#273) | 7.5 body recognition | E04 | R05 | one eye; no productive plural |
| **hius** (#431) | 7.5 body recognition | E05 | R06 | single hair strand; no productive hair-description paradigm |

No recognition-only target is required as unrestricted Finnish text production. `poika` and `tyttö` are scoped to boy/son, girl/daughter respectively by context. `hius` is treated as **an individual hair strand**, not a magically singular expression for someone's whole hair. `kaunis` and `mukava` remain recognition-only adjectives.

## 4. Morphology and grammar verification

| Construction | Exact taught Finnish | Verification and deferred scope |
|---|---|---|
| Positive first-person possession | **Minulla on sisko.** | Minulla + on; no fabricated 'have' verb |
| Positive second-person possession | **Sinulla on veli.** | Sinulla + on; **not** `Sinulla olet` |
| Negative possession | **Minulla ei ole siskoa.** / **Minulla ei ole veljeä.** / **Minulla ei ole kumppania.** | Partitive after negative; finite forms, not one-suffix generator |
| Genitive of family nouns | **äidin, isän, veljen, siskon, ystävän, kaverin, kumppanin** | Stems may change; no general noun-case engine |
| Proper-name genitive | **Ainon, Emman** | Two verified practical names; don't generalise to all proper names |
| With someone | **Asun kumppanin kanssa.** / **Asun kaverin kanssa.** | `kanssa` follows finite genitive forms |
| Predicative singular adjective | **Hän on nuori.** / **Hän on pitkä.** / **Talo on iso.** | Basic singular adjective in concrete-subject sentences |
| Concrete colour predicate | **Talo on punainen.** / **Huone on valkoinen.** | No mass-noun adjective partitive, plural agreement or attributive case production |
| Spoken recognition | **mulla on, sulla on, mun, kaa** | Optional conversational/register variants; standard writing scored |

**Independent references and evidence limits:**

- [Uusi kielemme — Minulla on / possession](https://uusikielemme.fi/finnish-grammar/syntax/sentence-types/possession-having-something) documents `on` for first/second possessors and partitive after negative.
- [Uusi kielemme — Family beginner sequence](https://uusikielemme.fi/language-levels/lesson-plans/family-beginner-finnish-lesson-plan) directly illustrates `Minulla on sisko` and `Minulla ei ole veljeä`, and recommends limited partitive teaching for family expressions.
- [Aalto OpenLearning — Family genitives](https://openlearning.aalto.fi/mod/page/view.php?id=9897&lang=sv_fi) lists `äidin/isän/siskon/veljen`; [J. Korpela's partitive handbook](https://jkorpela.fi/finnish/Partitive.html) explains the stem change `veli → veljeä`.
- [Suomisanakirja — sisko](https://www.suomisanakirja.fi/sisko) and [kumppani](https://www.suomisanakirja.fi/kumppani) show the relevant genitive and partitive forms.
- [Uusi kielemme — Genitive](https://uusikielemme.fi/finnish-grammar/finnish-cases/grammatical-cases/the-genitive-case-genetiivi) and [postpositions](https://uusikielemme.fi/finnish-grammar/finnish-cases/location-cases/the-inflection-of-postpositions-taivutus) support a genitive before `kanssa`.
- [Uusi kielemme — Predicate complement](https://uusikielemme.fi/finnish-grammar/finnish-cases/grammatical-cases/the-complement-predikatiivi) documents singular concrete-subject `Talo on punainen`, **not** a global predicate rule for all nouns.
- [Uusi kielemme — spoken language](https://uusikielemme.fi/spoken-language/spoken-language-grammar/question-sentences-in-finnish-spoken-language) illustrates conversational second-person possession; its [colloquial kaa example](https://uusikielemme.fi/finnish-culture/finnish-song-lyrics/anssi-kela-1972-meista-tuli-muurareita-song-analysis) supports the register note without copying the example lyric.

These sources support the *grammatical forms*, not independent proofreading of every new distractor, translation and example sentence. Original Vokri teaching content still requires the agreed owner review before approval.

## 5. Grammar/phrase coverage and assessment boundaries

| Target | Teaching location | Assessed evidence | Limitation |
|---|---|---|---|
| `grammar.people.possession-positive` | 7.2 positive-grammar | B07–B10, B16–B17, F01–F02 | No conjugation of a fictitious 'have' verb |
| `grammar.people.possession-negative` | 7.2 negative-grammar | B11–B15/B18, F03–F05/F16, R07 | Exact siskoa/veljeä/kumppania, not arbitrary partitives |
| `grammar.people.genitive-restricted` | 7.3 noun-genitives/proper names | C01–C09/C17, F06/F07/F14/F15, R08 | `äidin/veljen` stem changes |
| `grammar.people.kanssa-genitive` | 7.3 kanssa-intro | C11–C16, F08/F09, R09 | Genitive before kanssa, no new postposition paradigm |
| `grammar.people.predicative-singular` | 7.4 predicate explanation | D12–D16, F10–F11 | Simple singular concrete person/object |
| `grammar.people.colour-statement` | 7.5 colour explanation | E11–E15, F12/F15 | No plural adjective agreement |
| `phrase.people.minulla-on` | 7.2 | B07/B09/B17, F01/F02 | Distinct from the `olla` verb identity |
| `phrase.people.sinulla-on` | 7.2 | B08/B10/B16 | Second-person possessor, still `on` |
| `phrase.people.minulla-ei-ole` | 7.2 | B11–B18, F03–F05 | Actual partitive target after negative |
| `phrase.people.asun-kumppanin-kanssa` | 7.3 | C14–C15, F09 | Reuses earlier `asua` without re-introduction |
| `phrase.people.han-on-pitka` | 7.4 exemplar | D12, F10 | A teaching example, not automatic double familiarity |

**Role-promotion gate:** Unit 2 formally encounters `vocab.ystava` in the recognition role. Unit 7 step `relationships` changes the role to production without resetting the learner's first-encounter record; B05 is the new required independent retrieval evidence. This is an implementation constraint, not a second dictionary item.

## 6. Units 1–6 cumulative continuity

| Earlier unit | Authored Unit 7 recurrence | Scoring guardrail |
|---|---|---|
| Unit 1 | `nimi`, `olla/on`, `ja`, simple names/introductions | Do not score names as new vocabulary |
| Unit 2 | `hän`, `asua/asun`, `ystävä` recognition | Preserve prior `ystävä` history |
| Unit 3 | Earlier first-person verbs, negative awareness | Don't infer all negative-possession morphology |
| Unit 4 | `talo`, `huone`, `kotona` used for colour/size statements | Don't reintroduce known building nouns |
| Unit 5 | Partitive awareness / fixed food forms; `Minulla on nälkä` recognition chunk | New negative possession is a separate, scoped construction |
| Unit 6 | Simple routines and earlier `kello`/day vocabulary | Use only natural overlaps; no forced weekday-colour lists |
| Unit 7 itself | Relationship/description/colour through six lessons and final checkpoint | No unrestricted personal profiling or scores for incidental words |

## 7. Blueprint end-of-unit capability assessment

| Blueprint-mandated ability | Exact authored evidence | Assessment demand and score |
|---|---|---|
| Say you have a sibling/partner | F02 `Minulla on sisko.` | Independent full-text recall, scored `phrase.people.minulla-on` |
| Make `Minulla on` negative | F04/F05 `Minulla ei ole siskoa/veljeä.` | Controlled authored transformation, only negative-possession concept scored |
| Say someone is tall/young/etc. | F10 recognition `Hän on pitkä`; F11 independent `Hän on nuori` | F11 independent adjective output |
| Recognise simple -n ownership | F06 `Ainon sisko`; F07 `veljen`; F14 `Emman veli on Olli` | Recognition and independent finite-form output |
| Describe a concrete object by colour | F12 `Talo on punainen.` | Independent typed singular colour sentence |
| Coherent cumulative fictional profile | F15 three sentences about Emma and Aino | **Capability-only**, no multiple automatic lexical successes |
| Fresh negative-partner example | F16 `Minulla ei ole kumppania.` | Recognition of a different taught negative noun |

The F15 profile is deliberately **restricted** to three taught lines (Emman kumppani on Aino. / Aino on nuori. / Ainon talo on sininen.) and cannot establish spontaneous conversation or unrestricted writing ability. It should be displayed as three scoped text inputs if the current text-input normaliser cannot preserve line boundaries.

## 8. QA corrections, remaining risks and limits

- **Checked:** Exact CSV ranks and canonical IDs for all **26** Unit 7 role items; 19 genuinely new production lemmas plus one recognition→production promotion; six new recognition-only lemmas.
- **Checked:** Six numbered lessons, six embedded checkpoints, 121 sequential step rows, 96 required exercises, nine Review-only variants, **105 unique IDs** and all required prompt/stimulus/answer/feedback/target fields.
- **Corrected:** An answer leak in B05's friend retrieval prompt was removed; the earlier Unit 2 role cue remains without displaying `ystävä`.
- **Corrected:** F13 token bank preserves proper-name capitalisation for `Emma`, while the first lexical token `ainon` is capitalised on sentence assembly.
- **Corrected:** A12 asked for 'two' tiles while three were supplied; now the instruction and bank agree.
- **Corrected:** C12 avoids falsely implying that `kumppanin kanssa` alone grammatically encodes an explicit 'my' possessor.
- **Strengthened:** C16 requires `kaverin kanssa`, giving `kaveri` later authentic application rather than just one lesson-local noun recall.
- **Open:** Lesson 7.2 (18 exercises) and 7.3 (17) are dense. Real beginner pacing, retention and the effectiveness of the checkpoint order remain unknown; pause/resume needs device QA.
- **Open:** F15 needs deterministic multiline field handling; wrong-vs-Almost shared scheduling is still provisional from Units 1–6.
- **Open:** Full Finnish-teacher/native-speaker editorial review, VoiceOver/TalkBack, physical device tests, keyboard auto-correction and local persistence were **not performed**. The product owner's approval is sufficient for *internal* content sign-off, not a fabricated external certificate.
- **Open:** Contextual overlaps `ystävä`/`kaveri` and `pitkä`/long-tall require authored Word Match glosses or separation; no simultaneous indistinguishable answers.
- **Release boundary:** Unit 7's authored content does not imply that A1 learning effectiveness has been measured, that Swedish content has been authored or that any Expo runtime was implemented.

## 9. Provisional authoring-quality rubric (100 points)

| Area | Awarded / max | Evidence and limits |
|---|---:|---|
| Curriculum scope & vocabulary identity | 12 / 12 | All six lessons and 20 production roles + six recognition lemmas; `ystävä` promotion |
| Linguistic accuracy / finite morphological forms | 17 / 20 | Source-checked patterns, but no human review of every authored example |
| Pedagogical sequencing & cognitive load | 13 / 15 | Full gradual teaching; possession/genitive lessons need learner timing |
| Exercise originality & distractor quality | 11 / 12 | 96 fully authored exercises; a few contrasts remain necessarily simple at A1 |
| Deterministic answer/score boundaries | 10 / 12 | Scoped first-attempt events; F15 native multiline and legacy wrong/Almost unresolved |
| Cumulative retrieval and capability validity | 8 / 10 | Five abilities assessed; several less-used words rely on future due Review |
| Inclusive/contextual language | 7 / 7 | All scenarios fictional; no forced family/relationship disclosure |
| Scheduled Review integration | 6 / 6 | Nine standalone, encountered-only Review variants; optional modes separate |
| Mobile ergonomics and pacing | 3 / 4 | Text-friendly layouts and pauses, no real device/novice trial |
| Evidence and editorial transparency | 2 / 2 | Sources, limitations and owner approval clearly distinguished |
| **Provisional authoring total** | **89 / 100** | **Ready for owner review and downstream content conversion, not a functioning mobile unit or teacher-certified curriculum** |

**Final judgement:** The unit is fully authored in documentation and ready for the owner's explicit editorial decision. The main outstanding risks are learner burden in possession/genitive lessons, deterministic G15-style multiline acceptance, actual native accessibility and the shared Wrong/Almost adapter. These should be addressed during Expo conversion and testing, not by inventing a second authoring standard or review engine.
