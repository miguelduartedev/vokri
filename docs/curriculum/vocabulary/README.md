# Finnish 2000 Curated Vocabulary Dataset

## What this is

`finnish_2000_curated.csv` is a pedagogically curated set of **2,000 Finnish lemmas**
for a beginner-to-intermediate (roughly A1–B1) Finnish-learning application.

It is **not** an objective list of "the 2,000 most frequent Finnish words".
The final ranking intentionally combines corpus frequency with pedagogical usefulness
and everyday-life coverage. Words that are inflated by news, professional sports,
politics, crime reporting, administration, or institutional titles were demoted or
removed when they were less useful than ordinary daily-life vocabulary.

The tiers are:

- 1–500: **Core**
- 501–1000: **Everyday**
- 1001–1500: **Independent**
- 1501–2000: **Extended**

Each tier contains exactly 500 unique lemmas.

## Columns

- `rank` — final pedagogical rank, 1–2000
- `lemma` — standard Finnish dictionary form
- `english` — concise learner-oriented English gloss
- `part_of_speech` — simplified English part-of-speech label
- `tier` — Core / Everyday / Independent / Extended
- `topic` — one primary learner-friendly topic
- `spoken_forms` — widely understood colloquial/spoken forms where especially useful
- `example_fi` — short learner-oriented Finnish example
- `example_en` — natural English translation
- `usefulness_score` — AI-curated pedagogical score (50–100), derived from final rank
- `original_frequency_rank` — rank from the supplied Yle-based backbone where retained
- `notes` — learner clarification only when useful

## Sources and how they were used

### 1. Supplied Yle frequency backbone

The supplied `finnish_2000_frequency_backbone.csv` was used as the initial frequency
signal and to preserve `original_frequency_rank` for retained items.

Its underlying source is Daniel Radice's **Yle Uutisten taajuussanakirja**, derived
from the Yle Finnish News Archive 2011–2024 and Kotus headwords:

https://github.com/danradice/yle-uutiset-taajuussanakirja

This source is news-heavy, so its raw order was deliberately **not** preserved.

### 2. Language Bank of Finland — Psycholinguistic Descriptives

Used as evidence for balancing formal written frequency against broader Finnish usage.
The resource is based on six large corpora including magazines/newspapers,
movie and TV-series subtitles, encyclopedia material, and Internet discussions,
and includes **lemma frequencies**.

https://www.kielipankki.fi/corpora/psychlingdesc/

The dataset was used as a corpus-design/frequency reference rather than copied
row-by-row into this file.

### 3. ArkiSyn — Database of Finnish Conversational Discourse

Used as a spoken-language reference for the importance of everyday conversational
Finnish. ArkiSyn is specifically a corpus of everyday Finnish conversations and
includes lemmatization, part of speech, morphology, and syntax.

https://www.utu.fi/en/university/faculty-of-humanities/school-of-languages-and-translation-studies/research/utu-digilang/arkisyn-database-of-finnish-conversational-discourse

The corpus text itself is **not reproduced** in this dataset.

## Spoken Finnish

The main `lemma` column always uses the standard dictionary lemma.

Common colloquial forms are stored in `spoken_forms` instead of becoming duplicate
vocabulary entries. Examples include `minä → mä`, `sinä → sä`, `tämä → tää`,
`olla → oon/oot`, and `mennä → meen/meet`.

The spoken forms are intentionally conservative: they focus on widespread contemporary
colloquial Finnish, especially forms common in urban/southern speech and broadly
understood across Finland. This is not intended to be a dialect dictionary.

## What is corpus-derived vs AI-curated

**Corpus/input-derived:**
- the source backbone and its retained `original_frequency_rank`
- the general frequency evidence and corpus characteristics described above

**AI-curated/generated:**
- final selection and pedagogical ranking
- replacements/additions of practical everyday vocabulary
- English glosses
- simplified part-of-speech normalization where needed
- topic labels
- spoken-form selection
- Finnish and English example sentences
- usefulness scores
- explanatory notes

The examples are **not corpus quotations**.

Because the pedagogical annotations and examples are AI-curated, they should receive
a native-speaker / Finnish-teacher editorial review before being treated as production
curriculum content, especially if the app will teach grammar or assess learners.

## Licensing / attribution

The supplied Yle/Kotus-derived backbone identifies its upstream frequency resource
as CC BY 4.0. If you redistribute data that preserves material from that source,
retain appropriate attribution to the upstream project and its stated sources.

ArkiSyn is listed by the University of Turku as **CC BY-ND**. No ArkiSyn conversation
text has been copied into this dataset; it was consulted as a research/corpus reference.

The Language Bank Psycholinguistic Descriptives resource is publicly available;
consult the resource page for the license applying to the exact version you use if
you later ingest its data directly.

This README is descriptive, not legal advice.

## Validation performed

The generated CSV was checked for:

- exactly 2,000 rows
- exactly 2,000 unique lemmas
- continuous ranks 1–2000
- exactly 500 entries per tier
- non-empty English gloss, POS, topic, Finnish example, and English example
- removal of obvious news/politics/pro-sports terms from the Core 1–500
- UTF-8 output with Finnish characters preserved

The CSV is encoded as UTF-8 with BOM for broad compatibility with spreadsheet software.
