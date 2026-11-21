# Vokri — Curated Swedish Vocabulary (2,000 entries)

**Release:** initial curated dataset, 21 November 2026  
**Files:** `swedish_2000_curated.csv`, `swedish_2000_curated_README.md`, `swedish_2000_curated_QA.md`  
**Learning language:** Swedish (`sv`); interface translation language: English.

## Purpose and status

This dataset contains **exactly 2,000 distinct Swedish learning entries** for the shared vocabulary foundation of **Vokri** and **Vokri Cards**. It is intended for roughly A1–B1 vocabulary discovery and flashcards, organised into four **pedagogical** tiers of 500 items each:

| Ranks | Vokri tier | Intent |
| --- | --- | --- |
| 1–500 | Core | Essential, high-reuse everyday words and basic communication |
| 501–1,000 | Everyday | Home, daily tasks, public life, travel, conversation |
| 1,001–1,500 | Independent | Broader, more independent daily expression |
| 1,501–2,000 | Extended | Useful general vocabulary beyond the core learning path |

This is **not** a statistically optimal or objectively verified 2,000-most-frequent list. The final order and `usefulness_score` are editorial/AI-curated judgments informed by frequency and everyday needs. **No 80% spoken-comprehension claim** is made. The research says the **entire 8,425-entry Kelly list** covered approximately 80% of the *SweWAC web corpus*, not that these 2,000 entries guarantee comprehension of 80% of daily conversations.

**Publication status:** the file has passed structural validation and contains complete English glosses and bilingual examples. It is a **substantial content backbone, not a fully native-speaker-verified release**. Many inflection fields intentionally remain blank rather than containing guessed forms. Before enabling all inflection teaching/reverse recall in production, review the flagged rows, and have a native Swedish editor check examples and meanings.

## Source basis and what was actually analysed

### Swedish Kelly List — primary source directly parsed

- **Source:** Swedish Kelly List (Volodina, Elena; Johansson Kokkinakis, Sofie), Språkbanken Text / University of Gothenburg.
- **Official resource:** https://www.sprakbanken.se/en/resources/kelly
- **DOI:** https://doi.org/10.23695/6act-rs25
- **Attached input file:** `kelly(1).xml`, an XML/LexicalResource snapshot corresponding to the Kelly XML distribution.
- **Original list:** 8,425 lexical entries, 8,170 distinct written forms, compiled using approximately 114 million words in the SweWAC web corpus and subsequent learner-oriented adaptation.
- **Original fields parsed:** Kelly ID, written form, POS, noun-gender grammar marker (when supplied), original frequency per million (WPM), raw frequency, Kelly CEFR band and source indication. Some entries also have colloquial-form notes.
- **Artificial data:** the first **86 original Kelly IDs** have `1000000,00` WPM values used as synthetic/manual priority markers, not true measured frequency. Their source frequencies were **never used as real statistical weights**. If retained, the literal original WPM stays in `original_kelly_frequency` for traceability and the row carries `synthetic_kelly_frequency_do_not_rank` in `qa_flags`.
- **Original CEFR:** bands are retained as `original_kelly_cefr`. **These are the original Kelly annotations, not independent proficiency assessments or the Vokri tier.**

### External reference sources — consulted as research context, not bulk ingested

- [Gothenburg Dialogue Corpus](https://www.sprakbanken.se/en/resources/gdc) — 360 recorded/transcribed dialogues representing approximately 25 social activities; useful for the importance of conversational Swedish. **Its transcripts/frequencies were not downloaded or batch-processed for these ranks.**
- [Korp](https://spraakbanken.gu.se/en/tools/korp) — Swedish corpus-search infrastructure; not a source of a second machine-joined ranking in this release.
- [Svenska Akademiens ordlista / svenska.se](https://svenska.se/) — authoritative Swedish dictionary and inflection reference; **no claim of independent dictionary verification of every entry or inflected form is made**.
- Finland-Swedish usage is a consideration, but this dataset uses broadly standard Swedish and **does not claim comprehensive Finland-Swedish dialect validation**.

**Evidence boundary:** The Kelly XML was directly inspected programmatically. The other resources informed the research rationale and metadata policy, but no separate spoken corpus was processed or numerically compared to Kelly here. The English translations, final pedagogical ranking, topics, original examples, supplemental lexical items, optional inflections, notes and usefulness scores were generated/curated for this task; they are **not** Kelly corpus facts.

## Selection and curation

The selection was **not** the first 2,000 Kelly rows. It included explicit manual prioritisation of basic function words, everyday verbs and A1 essentials, followed by everyday topical balancing and an expansion into 2,000 unique entries. The resulting release retains **1,929 records with a Kelly source match** and adds **71 entries not found in this Kelly XML**. Source items from much lower Kelly ranks were moved into learner-important positions, and over-specialised news/politics/sports entries were removed or demoted. For instance, entries such as *inrikesminister* and *inrikespolitik* did not take beginner priority merely because Kelly's manually inserted entries had synthetic values.

Several source homographs were corrected by selecting the proper original Kelly ID and POS for the learning sense: *sex* (numeral six rather than a noun), *åtta* (numeral eight), *kort* (noun “card” rather than adjective “short”), *resa* (verb “to travel” rather than noun “trip”), *mobil* (noun “mobile phone” rather than adjective) and *lag* (noun *en lag*, law, rather than *ett lag*, team). Comparatives or fixed multiword items retained as particularly high-use learner items are explained in their notes instead of being misrepresented as inflectional corpus-independent lemmas.

The 71 added items address underrepresented daily-life vocabulary including *tandborste*, *diskmaskin*, *busshållplats*, *personnummer*, *hörlurar*, *laktosfri* and other useful forms. They do **not** receive invented Kelly IDs, frequencies or CEFR labels.

## Columns and application integration

| Field(s) | Semantics |
| --- | --- |
| `rank`, `tier`, `usefulness_score` | **Editorial** rank, Core/Everyday/Independent/Extended, integer usefulness (50–100). Never treat as actual corpus measurements. |
| `word_id` | Stable lexical key (`sv-...` plus SHA-based suffix derived from language+lemma+POS), independent of final rank. Preserve/migrate IDs if POS/lemma is later editorially corrected. |
| `language_id` | Always `sv`. Future learning data should key by `language_id + word_id`. |
| `lemma` | Dictionary headword without inflection or an `en/ett` article; a few fixed multiword lexical study items exist intentionally. |
| `display_form` | Learner-facing expression, usually `en/ett + lemma` for countable singular nouns; bare lemma for verbs, adjectives, plural-only nouns, mass nouns and function words. |
| `english`, `part_of_speech`, `topic` | **AI-curated** short gloss, simple English word-class label and one primary topic. `Other` is reserved for genuinely generic concepts. |
| `noun_gender` | `en`, `ett`, or blank. Most come from Kelly noun POS/grammar annotations; added-word gender is separately flagged for review. Some noncountable/plural nouns display without an article. |
| `definite_singular`, `plural_indefinite`, `plural_definite` | Selectively entered **high-confidence, not exhaustively independently checked** noun forms. Blank fields mean *not enriched*, not necessarily inapplicable. |
| `verb_present`, `verb_past`, `verb_supine` | Selectively entered forms; `verb_past` is Swedish **preterite**, `verb_supine` is **supine**, not a past participle. |
| `adjective_neuter`, `adjective_plural` | Selectively entered neuter and plural adjective forms. |
| `spoken_forms` | Conservative selection of widespread informal written forms or colloquial pronunciations, with type labelled. Blank does not imply no colloquial use. |
| `example_sv`, `example_en` | One individually written, contextual bilingual example per item. **All examples are AI-written** and have not been independently proofread by native Swedish editors. |
| `notes` | Selected learner-relevant contextual or morphology warnings. |
| `original_kelly_id`, `original_kelly_frequency`, `original_kelly_cefr` | Original Kelly record ID, literal original **WPM per million words** (comma-decimal string), and original CEFR band. Blank for added words. Synthetic WPM values must not be interpreted numerically. |
| `source_status`, `qa_flags` | `kelly_retained` or `curated_added`; semicolon-separated outstanding verification warnings or important exceptions. |

### Swedish grammar and flashcards

Canonical identity and learner expression deliberately differ. For example, `lemma=bok`, `display_form=en bok`, `noun_gender=en`. In **English → Swedish** recall, the article should be part of the expected answer. For verbs: `lemma=äta`; forms can display `äter`, `åt`, `ätit` when present. The app should **hide empty grammar sections** and must not attempt to guess missing forms on the client.

Not all common nouns take an indefinite article in ordinary use. Plural-only items (e.g., *glasögon*, *hörlurar*, *pengar*) and uncountable nouns (e.g., *information*, *vård*, *forskning*) use the bare form in `display_form`; a grammatical gender can still be recorded for an uncountable noun where applicable. This is intentional.

### Swedish spoken forms

Only relatively widespread variants are included, e.g., *någon → nån*, *något → nåt*, *de/dem → dom*, *sedan → sen*, *mig → mej*. These are **not blanket recommendations for standard formal spelling**. Swedish colloquial variation and Finland-Swedish pronunciation are richer than this one field.

## QA and limitations

Run the checks described in `swedish_2000_curated_QA.md`. The CSV is UTF-8 with a BOM for spreadsheet compatibility, preserving `å`, `ä`, and `ö`. Grammar enrichment is deliberately incomplete. Missing genders and unfilled paradigms, as well as all examples, require editorial review before being presented as independently validated lessons or assessed inflection questions. The dataset is appropriate to prototype or begin integrating **basic bilingual vocabulary flashcards**, with flagged annotation fields disabled or reviewed before shipping.

## Licensing and attribution

The **specific Kelly XML download** is identified as **CC BY 4.0** on the official resource page (https://www.sprakbanken.se/en/resources/kelly), which lists `kelly.xml` and the Excel product under that licence. The general Kelly project description on the same site also mentions **CC BY-SA 3.0 and LGPL 3.0** for the broader project; do not assume those general statements automatically supersede the specific XML download's listed CC BY 4.0 licence. If redistributing derivative data in a commercial product, confirm the licence terms that apply to the exact upstream copy and all downstream contributions.

Suggested attribution when distributing this dataset:

> Swedish Kelly List — Elena Volodina and Sofie Johansson Kokkinakis; Språkbanken Text / University of Gothenburg; https://www.sprakbanken.se/en/resources/kelly; DOI: https://doi.org/10.23695/6act-rs25. Source XML listed CC BY 4.0. Adapted for Vokri with new pedagogical ranking, English translations, topics and original AI-authored examples (2026).

The original Kelly corpus text or third-party dictionary example sentences have **not** been copied into the generated `example_sv`/`example_en` fields. The GDC corpus data was not redistributed. This section describes source-attribution considerations, not legal advice.
