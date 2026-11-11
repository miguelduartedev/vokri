# A1 Foundations — Curriculum Blueprint

## Curriculum principles

This stage should teach **usable Finnish before complete Finnish**.

> **Vokri scope note — 11 November 2026.** This curriculum covers **Finnish (`fi`) only**. Vokri V1 starts with Finnish A1 Foundations on React Native + Expo. **Swedish (`sv`) is a separate future learning language**, not a requirement to translate these lessons or expose a language picker now. The same app may reuse its schemas, UI, exercise/review engine and persistence interfaces for a separately authored and reviewed Swedish curriculum. Finnish-specific cases, word forms and grammar rules remain Finnish content. The lessons, 142 production lemmas, existing ranks and recurrence decisions below are unchanged. Unit 4 Figma examples are illustrative; new learners start at **Unit 1 — Hello**.

The vocabulary backbone is the curated 2,000-word dataset at `docs/curriculum/vocabulary/finnish_2000_curated.csv`, with the first 500 lemmas treated as the Core tier and ranks used as a priority signal rather than a rigid teaching order.

Guiding principles:

1. **One dominant ability per lesson.**
2. **Production vocabulary stays small and realistic.**
3. **Grammar is progressively disclosed.**
4. **Useful chunks outrank grammatical completeness.**
5. **Spoken Finnish is recognition-first; standard Finnish remains the production target.**

Proper names such as Helsinki, Aino, or Portugal can appear as context tokens without counting toward vocabulary totals.

---

## Vocabulary load plan

| Unit | New production lemmas | Cumulative | Recognition items | New chunks ≈ | Main grammar |
|---|---:|---:|---:|---:|---|
| 1. Hello | 16 | 16 | 8 | 5 | minä/sinä + olla; person endings; sound/spelling awareness |
| 2. People & things | 17 | 33 | 7 | 6 | tämä/tuo/se; questions; -ko/-kö; negative verb |
| 3. Everyday actions | 17 | 50 | 5 | 7 | 1st-person present; verb type 1 model; en + verb; verb + infinitive |
| 4. Where are you? | 16 | 66 | 5 | 7 | missä?; -ssa/-ssä; location; fixed destination forms |
| 5. Food & quantities | 16 | 82 | 8 | 6 | practical partitive; numeral + partitive; price/payment |
| 6. Daily life | 21 | 103 | 7 | 6 | routine verbs; clock time; weekdays; frequency |
| 7. People & descriptions | 20 | 123 | 6 | 6 | Minulla on; genitive -n; kanssa; adjective descriptions |
| 8. Getting around | 19 | 142 | 9 | 7 | destination/from patterns; transport chunks; basic directions |

Target by the end of Unit 8:
- ~142 active production lemmas
- ~45–50 useful chunks/phrases
- ~25–30 recurring grammar patterns/constructions encountered

---

# Unit 1 — Hello

## Unit capability

After this unit, you can greet someone, say who you are, respond politely and recognise basic numbers.

## Grammar scope

### Introduced
- minä / sinä
- olla: olen, olet
- Finnish verbs change according to the person
- subject pronouns can eventually be omitted when the verb already makes the person clear; recognition only for now
- basic awareness that Finnish spelling maps closely to pronunciation
- long vs short vowels as a listening/reading concept
- vowel harmony as a preview only

### Reinforced
- none assumed

### Deferred
- full olla paradigm
- negative sentences
- -ko/-kö questions
- grammatical cases
- detailed vowel-harmony rules

## Vocabulary allocation

### Production vocabulary
- olla — to be (#1, Core; spoken: oon, oot…)
- ja — and (#2, Core)
- minä — I (#5, Core; spoken: mä…)
- sinä — you (#6, Core; spoken: sä…)
- yksi — one (#17, Core; spoken: yks)
- kaksi — two (#18, Core; spoken: kaks)
- kolme — three (#19, Core)
- neljä — four (#20, Core)
- viisi — five (#21, Core; spoken: viis)
- kyllä — yes/certainly (#47, Core; spoken: kyl)
- joo — yeah/yes (#48, Core)
- nimi — name (#322, Core)
- anteeksi — sorry/excuse me (#373, Core)
- kiitos — thank you (#374, Core)
- hei — hi (#375, Core)
- moi — hi/bye (#376, Core)

### Recognition vocabulary
- kuusi (#22)
- seitsemän (#23)
- kahdeksan (#24)
- yhdeksän (#25)
- kymmenen (#26)
- hyvä (#114)
- tervetuloa (#377)
- näkemiin (#378)

### Support vocabulary
- nyt (#40)
- ehkä (#46)

## Key phrases / chunks

### NEW
- Hei!
- Moi!
- Kiitos.
- Anteeksi.
- Olen …
- Entä sinä?

## Spoken Finnish recognition
- minä → mä
- sinä → sä
- olen → oon
- olet → oot
- optional: yksi → yks, kaksi → kaks

## Lesson sequence

### 1.1 — Hello
Capability: greet and leave politely.  
Grammar: none.  
New: hei, moi, kiitos, anteeksi.  
Approximate new-item load: 4.

Exercise types:
- Finnish → English recognition
- choose the appropriate greeting
- controlled recall

### 1.2 — I am, you are
Capability: say who you are and understand who someone addresses.  
Grammar: minä olen / sinä olet.  
New: olla, minä, sinä.  
Chunks: Olen …, Entä sinä?  
Approximate new-item load: 3 lemmas + 2 chunks.

Exercise types:
- choose olen/olet
- construct Minä olen …
- identify I vs you

### 1.3 — Your name
Capability: recognise and answer a basic name exchange.  
New: nimi, ja.  
Review: minä, sinä, olla.  
Approximate new-item load: 2.

Note: the exact standard-Finnish name question should receive teacher review before production rather than teaching its internal genitive/possessive morphology here.

### 1.4 — Yes, and a few numbers
Capability: answer yes and recognise small numbers.  
New: kyllä, joo, yksi, kaksi, kolme, neljä, viisi.  
Recognition: 6–10.  
Approximate new-item load: 7 production items, treated as one semantic set.

### 1.5 — First review
Capability: complete a tiny introduction independently.  
Grammar: pronunciation awareness; vowel length and harmony preview.  
New: none.

## Cumulative dependencies
From the moment they appear, olla, minä, sinä, ja, kiitos, numbers and greetings should recur in later examples.

## End-of-unit capability check
- Choose the correct greeting for a short interaction.
- Complete Minä ___ Aino.
- Build Olen …
- Recognise sinä olet.
- Recall numbers 1–5.

### Indo-European bridge
Finnish puts more grammatical information directly on the verb. `olen` already communicates “I am”, so `minä` is not always needed.

---

# Unit 2 — People & things

## Unit capability

After this unit, you can identify people and things, say what language you speak and ask a few basic questions.

## Grammar scope

### Introduced
- tämä / tuo / se
- mikä? / kuka?
- yes/no -ko/-kö through a few verbs: onko?, oletko?, puhutko?
- Finnish negative verb: en, et, ei conceptually, with production focused on en
- simple present of puhua and asua
- hän

### Reinforced
- olla
- minä / sinä

### Deferred
- full negative paradigm
- full verb-type system
- case explanation for suomea
- full location grammar in forms such as Suomessa

Teach `Puhun suomea` and `Asun Suomessa` initially as high-value constructions rather than launching immediately into partitive and local cases.

## Vocabulary allocation

### Production vocabulary
- ei — not/no (#3, Core)
- se — it/that (#4, Core)
- hän — he/she (#7, Core)
- tämä — this (#11, Core; spoken: tää)
- tuo — that (#12, Core; spoken: toi)
- mikä — what/which (#13, Core)
- kuka — who (#14, Core)
- puhua — to speak/talk (#70, Core)
- asua — to live/reside (#88, Core)
- ihminen — person (#145, Core)
- mies — man (#146, Core)
- nainen — woman (#147, Core)
- lapsi — child (#148, Core)
- suomalainen — Finnish/Finn (#161, Core)
- kieli — language (#325, Core)
- suomi — Finnish/Finland (#326, Core)
- englanti — English/England (#327, Core)

### Recognition vocabulary
- me (#8)
- te (#9)
- he (#10)
- ystävä (#156)
- miten (#337)
- hyvin (#53)
- maa (#506, Everyday)

### Support vocabulary
- olla (#1)
- minä (#5)
- sinä (#6)
- ja (#2)
- hyvä (#114)

## Key phrases / chunks

### NEW
- Mikä tämä on?
- Kuka hän on?
- Puhun suomea.
- Puhutko suomea?
- Asun Suomessa.
- En puhu …

### REVIEW
- Olen …
- Entä sinä?

## Spoken Finnish recognition
- tämä → tää
- tuo → toi
- hän → se in common casual speech
- he → ne as recognition only later

## Lesson sequence

### 2.1 — This, that, it
New: tämä, tuo, se, mikä.  
Goal: identify a thing.

### 2.2 — Who is that?
New: kuka, hän, ihminen, mies, nainen, lapsi.  
Goal: identify a person.

### 2.3 — Finnish and English
New: kieli, suomi, englanti, suomalainen, puhua.  
Goal: say what language you speak.

### 2.4 — Where you live, without the grammar yet
New: asua.  
Goal: use Asun … as a practical sentence pattern.

### 2.5 — Questions and no
New: ei.  
Goal: ask simple yes/no questions and make one basic negative.  
Grammar: -ko/-kö; en + verb.

## End-of-unit capability check
- Ask “What is this?”
- Decide whether kuka or mikä fits.
- Say you speak Finnish.
- Make one sentence negative.
- Turn a statement into a yes/no question.

### Indo-European bridge
Finnish does not normally add a separate equivalent of English “do” in questions or negatives. Questions can be built by attaching `-ko/-kö`; negation uses the special verb `ei`.

---

# Unit 3 — Everyday actions

## Unit capability

After this unit, you can say what you want, need, know, understand, can do, and where you are going.

## Grammar scope

### Introduced
- first-person present as the primary productive viewpoint
- verb type 1 as the first transparent conjugation model, using already-known puhua/asua
- en + connegative as an everyday negative pattern
- verb + infinitive: Haluan mennä / Voin tulla
- useful verbs from other types learned initially as high-frequency forms, not paradigms

### Deferred
- all five verb-type tables
- full six-person conjugation
- object case selection after verbs
- conditional as grammar

## Vocabulary allocation

### Production vocabulary
- mutta (#29)
- nyt (#40)
- ehkä (#46)
- tulla (#59)
- mennä (#60)
- tehdä (#61)
- voida (#63)
- haluta (#65)
- tarvita (#66)
- sanoa (#69)
- kysyä (#72)
- vastata (#73)
- tietää (#74)
- ymmärtää (#75)
- lukea (#80)
- kirjoittaa (#81)
- opiskella (#104)

### Recognition vocabulary
- saada (#62)
- pitää (#64)
- nähdä (#77)
- kuulla (#79)
- auttaa (#96)

### Support vocabulary
- ei (#3)
- puhua (#70)
- asua (#88)
- olla (#1)
- ja (#2)

## Key phrases / chunks

### NEW
- Haluan …
- Tarvitsen …
- En tiedä.
- En ymmärrä.
- Voin …
- Voinko …?
- Haluan mennä …

### REVIEW
- Puhun suomea.
- En puhu …

## Spoken Finnish recognition
- haluan → haluun
- tiedän → tiiän
- menen → meen
- tulen → tuun
- mutta → mut

## Lesson sequence

### 3.1 — What you want and need
New: haluta, tarvita.  
Grammar: useful first-person forms.

### 3.2 — I know / I don’t know
New: tietää, ymmärtää.  
Grammar: en + verb.  
Chunks: En tiedä. / En ymmärrä.

### 3.3 — What you can do
New: voida, tehdä.  
Chunks: Voin … / Voinko …?

### 3.4 — Going and coming
New: mennä, tulla, nyt, ehkä.

### 3.5 — Read, write, study
New: lukea, kirjoittaa, opiskella.

### 3.6 — Ask, answer, say
New: kysyä, vastata, sanoa, mutta.

## End-of-unit capability check
- Produce En tiedä.
- Say what you want to do.
- Ask if you can do something.
- Distinguish go/come.
- Build one negative action sentence.

### Indo-European bridge
Finnish verbs usually carry the person ending themselves. Rather than memorising all verb types immediately, learners first see recurring shapes and learn the most useful forms.

---

# Unit 4 — Where are you?

## Unit capability

After this unit, you can ask where something is, say that something is in a place, and use a few common destination expressions.

## Grammar scope

### Introduced
- missä?
- inessive -ssa / -ssä
- vowel harmony applied in a useful context
- olla + place
- täällä / siellä
- minne?
- a small set of destination forms learned as patterns/chunks: kotiin, kauppaan, kouluun

### Reinforced
- olla
- asua
- mennä
- demonstratives
- questions

### Deferred
- general illative formation rules
- -lla/-llä
- -sta/-stä
- the six-local-case system as a table

## Vocabulary allocation

### Production vocabulary
- koti (#187)
- talo (#188)
- asunto (#189)
- huone (#190)
- vessa (#195)
- paikka (#206)
- työ (#207)
- koulu (#212)
- kauppa (#234)
- ravintola (#236)
- kahvila (#237)
- lähellä (#351)
- täällä (#352)
- siellä (#353)
- missä (#338)
- minne (#339)

### Recognition vocabulary
- pöytä (#198)
- tuoli (#199)
- ovi (#201)
- työpaikka (#208)
- ruokakauppa (#235)

### Support vocabulary
- olla (#1)
- asua (#88)
- mennä (#60)
- tulla (#59)
- se (#4)
- tämä (#11)

## Key phrases / chunks

### NEW
- Missä se on?
- Olen täällä.
- Se on siellä.
- Olen talossa.
- Olen kotona.
- Minne menet?
- Menen kotiin.

## Spoken Finnish recognition
- täällä → tääl
- siellä → siel

## Lesson sequence

### 4.1 — Asking where something is
New: missä, täällä, siellä.  
Chunk: Missä se on?

### 4.2 — Saying “in”
New: talo, huone.  
Grammar: -ssa/-ssä.

### 4.3 — Common places
New: asunto, kauppa, koulu, työ, kahvila, ravintola, vessa, paikka.

### 4.4 — Saying where you’re going
New: minne, koti.  
Use kotiin, kauppaan, kouluun as chunks.

### 4.5 — Useful location phrases
New: lähellä.  
Teach kotona as a high-value form without implying that it follows the inessive pattern.

### 4.6 — Location review
Mixed missä vs minne, location recognition and sentence construction.

## End-of-unit capability check
- Ask where the toilet is.
- Say you are in a shop.
- Identify talossa as “in the house”.
- Say “I’m here”.
- Choose missä vs minne.

### Indo-European bridge
Instead of always using separate prepositions like English “in”, Finnish often attaches location meaning directly to the noun.

---

# Unit 5 — Food & quantities

## Unit capability

After this unit, you can talk about a few everyday foods and drinks, say what you want, ask a price and handle a simple purchase.

## Grammar scope

### Introduced
- practical partitive with food/liquid: kahvia, vettä, maitoa
- quantity expressions: paljon/vähän + partitive
- numerals above one + partitive as a usable pattern
- Haluaisin… as a polite chunk, not as a conditional lesson
- payment expressions as chunks

### Deferred
- full partitive formation rules
- object grammar
- countability theory
- conditional conjugation
- complex quantity phrases

## Vocabulary allocation

### Production vocabulary
- vähän (#54)
- paljon (#55)
- ostaa (#94)
- maksaa (#95)
- hinta (#238)
- euro (#239)
- kortti (#241)
- ruoka (#246)
- vesi (#247)
- leipä (#248)
- maito (#249)
- kahvi (#250)
- tee (#251)
- lounas (#253)
- omena (#264)
- paljonko (#341)

### Recognition vocabulary
- kuitti (#243)
- kassa (#244)
- kana (#255)
- kala (#256)
- peruna (#259)
- banaani (#265)
- nälkä (#268)
- jano (#269)

### Support vocabulary
- haluta (#65)
- tarvita (#66)
- voida (#63)
- tämä (#11)
- yksi (#17)
- kaksi (#18)

## Key phrases / chunks

### NEW
- Haluan kahvia.
- Haluaisin …
- Voinko saada vettä?
- Paljonko tämä maksaa?
- Vähän maitoa, kiitos.
- Voinko maksaa kortilla?

### REVIEW
- Haluan …
- Voinko …?
- Kiitos.

## Spoken Finnish recognition
- paljon → paljo
- vähän → vähä
- haluan → haluun

## Lesson sequence

### 5.1 — Coffee, tea and water
New: kahvi, tee, vesi, maito.  
Grammar: first practical partitive forms.

### 5.2 — Food you actually use
New: ruoka, leipä, lounas, omena.

### 5.3 — Asking for something
Chunks: Haluaisin … / Voinko saada …?  
No conditional paradigm.

### 5.4 — A little, a lot, two
New: vähän, paljon.  
Grammar: quantity + partitive; numeral + partitive.

### 5.5 — How much is it?
New: hinta, euro, maksaa, ostaa, paljonko, kortti.

### 5.6 — Café and shop review
Mixed comprehension and production.

## End-of-unit capability check
- Ask for water.
- Say you want coffee.
- Understand a simple quantity expression.
- Ask the price.
- Say you can/want to pay by card.

### Indo-European bridge
The Finnish partitive often appears where English simply uses an unmarked noun like “coffee” or “water”. It is a grammatical perspective on the amount/object, not simply a word meaning “some”.

---

# Unit 6 — Daily life

## Unit capability

After this unit, you can describe a simple daily routine, say basic clock times and talk about days of the week.

## Grammar scope

### Introduced
- routine verbs across several common verb shapes
- first-person present remains the production anchor
- kello on…
- weekday forms such as maanantaina as recurring patterns
- frequency adverbs
- verb + verb review

### Reinforced
- mennä
- tulla
- haluta
- voida
- numbers
- food/drink
- locations

### Deferred
- formal verb-types 1–5 table
- half/quarter time expressions beyond the simplest useful forms
- months as active vocabulary
- past tense

## Vocabulary allocation

### Production vocabulary
- aina (#42)
- usein (#43)
- joskus (#44)
- lähteä (#85)
- syödä (#90)
- juoda (#91)
- nukkua (#92)
- herätä (#93)
- aika (#162)
- aamu (#170)
- ilta (#171)
- tänään (#173)
- huomenna (#175)
- maanantai (#176)
- tiistai (#177)
- keskiviikko (#178)
- torstai (#179)
- perjantai (#180)
- lauantai (#181)
- sunnuntai (#182)
- kello (#581, Everyday)

### Recognition vocabulary
- päivä (#163)
- viikko (#164)
- kuukausi (#165)
- tunti (#167)
- minuutti (#168)
- eilen (#174)
- nousta (#519, Everyday)

### Support vocabulary
- mennä (#60)
- tulla (#59)
- tehdä (#61)
- koti (#187)
- työ (#207)
- kahvi (#250)

## Key phrases / chunks

### NEW
- Kello on seitsemän.
- Herään …
- Nukun …
- Maanantaina …
- Lähden …
- Teen tämän usein.

### REVIEW
- Menen …
- Haluan mennä …
- Nähdään huomenna.

## Spoken Finnish recognition
- lähden → lähen
- familiar meen, tuun

## Lesson sequence

### 6.1 — Morning and evening
New: aamu, ilta, herätä, nukkua.

### 6.2 — Eat, drink, today, tomorrow
New: syödä, juoda, tänään, huomenna.

### 6.3 — What time is it?
New: kello, aika.  
Review: numbers 1–10.  
Initial production: whole hours.

### 6.4 — Monday to Thursday
New: maanantai, tiistai, keskiviikko, torstai.

### 6.5 — Friday to Sunday
New: perjantai, lauantai, sunnuntai, lähteä.

### 6.6 — How often?
New: aina, usein, joskus.  
Full cumulative routine.

## End-of-unit capability check
- State a simple wake-up time.
- Say one thing you do in the morning.
- Identify the correct weekday.
- Say something happens often/sometimes.
- Build a 3-sentence mini routine.

### Indo-European bridge
Finnish uses endings in many time expressions too. Useful forms such as `maanantaina` should first become familiar through repeated context before the learner is asked to memorise a case label.

---

# Unit 7 — People & descriptions

## Unit capability

After this unit, you can talk simply about family and people, say what you have and give basic descriptions.

## Grammar scope

### Introduced
- Minulla on…
- Sinulla on…
- Minulla ei ole…
- simple genitive -n
- kanssa following a genitive form
- predicative descriptions with olla
- basic colour statements

### Reinforced
- hän
- olla
- adjectives
- asua

### Deferred
- full pronoun-case paradigm
- possessive suffix system
- full adjective/noun agreement
- plural description paradigms

## Vocabulary allocation

### Production vocabulary
- äiti (#151)
- isä (#152)
- veli (#153)
- sisko (#154)
- perhe (#155)
- ystävä (#156)
- kaveri (#157)
- kumppani (#158)
- iso (#116)
- pieni (#117)
- vanha (#119)
- nuori (#120)
- pitkä (#121)
- lyhyt (#122)
- väri (#297)
- musta (#298)
- valkoinen (#299)
- punainen (#300)
- sininen (#301)
- kanssa (#349)

### Recognition vocabulary
- poika (#149)
- tyttö (#150)
- kaunis (#132)
- mukava (#134)
- silmä (#273)
- hius (#431)

### Support vocabulary
- hän (#7)
- lapsi (#148)
- olla (#1)
- asua (#88)
- hyvä (#114)
- tämä (#11)

## Key phrases / chunks

### NEW
- Minulla on …
- Minulla ei ole …
- Sinulla on …
- Hän on pitkä.
- Asun kumppanin kanssa.
- [name]n … for simple possession

## Spoken Finnish recognition
- minulla on → mulla on
- sinulla on → sulla on
- minun → mun
- kanssa → kaa

## Lesson sequence

### 7.1 — Your family
New: perhe, äiti, isä, veli, sisko.

### 7.2 — People close to you
New: kumppani, ystävä, kaveri.  
Grammar: Minulla on / ei ole.

### 7.3 — Whose? And with whom?
New: kanssa.  
Grammar: simple -n genitive.

### 7.4 — Describing someone
New: iso, pieni, vanha, nuori, pitkä, lyhyt.

### 7.5 — Basic colours
New: väri, musta, valkoinen, punainen, sininen.

### 7.6 — People review
Combine relationships, Minulla on, genitive and descriptions.

## End-of-unit capability check
- Say you have a brother/sister/partner.
- Make Minulla on negative.
- Say someone is tall/young/etc.
- Recognise a simple -n possession.
- Describe one object with a colour.

### Indo-European bridge
Finnish does not express “I have” with a normal verb meaning *have*. `Minulla on` is structurally closer to “at me there is”. Teach it as a pattern first.

---

# Unit 8 — Getting around

## Unit capability

After this unit, you can understand basic transport language, ask where you should go and follow very simple location/direction instructions.

## Grammar scope

### Introduced
- destination expressions expanded from Unit 4
- -sta/-stä as recognition of “from/out of”
- transport -lla/-llä forms such as bussilla as practical chunks
- tänne / sinne
- simple imperative chunks, especially Mene suoraan
- left/right vocabulary

### Reinforced
- missä / minne
- -ssa/-ssä
- mennä / tulla / lähteä
- places and city vocabulary

### Deferred
- six local cases as a full system
- complete illative rules
- full adessive/allative/elative paradigms
- detailed imperative morphology
- complex route instructions

## Vocabulary allocation

### Production vocabulary
- kaupunki (#205, Core)
- bussi (#220, Core)
- juna (#221, Core)
- raitiovaunu (#222, Core)
- metro (#223, Core)
- taksi (#224, Core)
- tie (#226, Core)
- asema (#227, Core)
- pysäkki (#228, Core)
- lippu (#229, Core)
- matka (#230, Core)
- reitti (#231, Core)
- tänne (#354, Core)
- sinne (#355, Core)
- suoraan (#361, Core)
- takaisin (#362, Core; spoken: takas)
- oikea (#126, Core)
- keskusta (#591, Everyday)
- vasen (#1618, Extended)

`vasen` is the one deliberate production item beyond the first 1000 because pairing “left” with “right” is disproportionately useful for navigation.

### Recognition vocabulary
- pyörä (#225)
- lento (#232)
- lentokenttä (#233)
- matkalippu (#452)
- laituri (#457)
- myöhässä (#458)
- ajoissa (#459)
- päästä (#509, Everyday)
- ajaa (#571, Everyday)

### Support vocabulary
- missä (#338)
- minne (#339)
- täällä (#352)
- siellä (#353)
- mennä (#60)
- tulla (#59)
- lähteä (#85)

## Key phrases / chunks

### NEW
- Missä asema on?
- Minne tämä bussi menee?
- Menen keskustaan.
- Menen bussilla.
- Mene suoraan.
- Miten pääsen keskustaan?
- Tulen takaisin.

### REVIEW
- Missä se on?
- Minne menet?

## Spoken Finnish recognition
- takaisin → takas
- familiar meen / tuun

## Lesson sequence

### 8.1 — Bus, train, tram, metro
New: bussi, juna, raitiovaunu, metro, taksi.

### 8.2 — Stops, stations and tickets
New: asema, pysäkki, lippu, reitti.

### 8.3 — Around the city
New: kaupunki, keskusta, tie, matka.

### 8.4 — Here, there and where to
New: tänne, sinne.  
Review: minne and fixed destination forms.

### 8.5 — From there and by bus
Grammar recognition: -sta/-stä; transport -lla/-llä chunks.  
Recognition: päästä, laituri, myöhässä, ajoissa.

### 8.6 — Simple directions
New: suoraan, takaisin, oikea, vasen.  
Use imperative expressions as chunks, not a full imperative lesson.

## End-of-unit capability check
- Find the correct transport word from a short situation.
- Ask where the station is.
- Say you are going downtown.
- Understand that an -sta/-stä form expresses movement from somewhere.
- Follow a very simple straight/left/right instruction.

---

## High-recurrence core vocabulary

These should recur throughout multiple units rather than disappearing after introduction.

### Grammar/function core
- olla #1
- ja #2
- ei #3
- se #4
- minä #5
- sinä #6
- tämä #11
- mikä #13
- kuka #14
- mutta #29
- nyt #40
- ehkä #46
- kyllä #47
- joo #48
- vähän #54
- paljon #55

### Action core
- tulla #59
- mennä #60
- tehdä #61
- voida #63
- haluta #65
- tarvita #66
- puhua #70
- kysyä #72
- tietää #74
- ymmärtää #75
- asua #88
- syödä #90
- juoda #91
- ostaa #94
- maksaa #95

### Everyday noun/location core
- hyvä #114
- pieni #117
- koti #187
- paikka #206
- koulu #212
- kauppa #234
- vesi #247
- kahvi #250
- missä #338
- täällä #352
- siellä #353
- anteeksi #373
- kiitos #374

The aim is for these words to gain familiarity through repeated contextual encounters, not one vocabulary card followed by silence.

---

## Grammar progression across Units 1–8

| Unit | Productive focus | Recognition / preview | Explicitly withheld |
|---|---|---|---|
| 1 | olen/olet | subject omission, vowel harmony | full person paradigm |
| 2 | tämä/tuo/se, basic en, -ko/-kö | other persons | full negation |
| 3 | 1sg present, en + verb, verb+infinitive | several verb shapes | all five verb tables |
| 4 | missä, -ssa/-ssä, fixed destination forms | vowel harmony applied | local-case table |
| 5 | practical partitive | polite conditional chunk | object/partitive system |
| 6 | routine present forms, basic time/day patterns | broader verb types | past tense |
| 7 | Minulla on, genitive -n, kanssa | other possession forms | pronoun declension |
| 8 | fixed destination/from/transport patterns | -sta/-stä, -lla/-llä | complete local cases |

---

## Cumulative review map

### Immediate resurfacing
Every new production item should appear again within the next 1–2 lessons.

### Short-delay resurfacing
The same item should return 2–4 lessons later in a different sentence or context.

### Unit-boundary resurfacing
Roughly one third of an end-of-unit review should draw from previous units.

### Long-range resurfacing
High-recurrence core items remain eligible across the whole stage.

### Unit dependency chain
- U2 continually reuses minä/sinä/olla/greetings.
- U3 mixes U2 questions and negation into verbs.
- U4 puts familiar verbs and pronouns inside new location sentences.
- U5 uses haluta/voida/tämä/numbers rather than teaching food in isolation.
- U6 puts food, places and earlier actions into routines.
- U7 uses asua/olla and location vocabulary when talking about people.
- U8 deliberately revisits almost all of Unit 4 while adding movement and transport.

A word should move through states such as:
first encounter → guided recall → later recall → contextual reuse

rather than a binary learned/not learned flag.

---

## Deliberately deferred beyond A1 Foundations

- complete six-local-case paradigm
- systematic noun stem/type system (e, nen, i, etc.)
- comprehensive consonant-gradation rules
- all five verb types as full paradigms
- full past tense
- object case system
- advanced partitive/object distinctions
- full personal-pronoun declension
- possessive suffix system
- broad postposition system
- ordinal-number and date system
- months as required active vocabulary
- complete imperative paradigm
- detailed plural morphology
- workplace/occupation unit
- Chapter 9-style kenelle / keneltä
- systematic destination formation across every noun type

These can become early material for the next stage instead of being compressed into Foundations.

---

## Editorial / native-speaker review flags

Before production, teacher/native-speaker review is recommended for:

- all production example sentences
- the simplification of -ssa/-ssä ≈ “in”
- kotona being introduced alongside the inessive without implying it follows that pattern
- the exact set/order of fixed destination forms in Unit 4
- the Unit 5 partitive explanation
- Haluaisin… taught as a chunk before formal conditional grammar
- clock expressions and weekday forms in Unit 6
- how far to take Minulla/Sinulla/Hänellä on in Unit 7
- genitive + kanssa
- Unit 8 destination/source/transport-case simplifications
- directional forms derived from vasen/oikea
- colloquial se/ne for people
- spoken forms such as haluun, tiiän, meen, tuun, tääl, siel, mulla, kaa, takas
- semantic dual roles such as oikea (“right/correct”), suomi, englanti

---

## Validation summary

- 142 unique production lemmas
- no production lemma intentionally introduced as NEW twice
- recognition/support vocabulary may later be promoted to production
- all but one production item are within the first 1000 ranks
- the exception is vasen (#1618), retained because of its high practical value for navigation
- useful everyday Finnish is prioritised over textbook completeness
- spoken Finnish remains recognition-first
- Unit 8 remains constrained to realistic A1 functionality rather than becoming compressed A2
