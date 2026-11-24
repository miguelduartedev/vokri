import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  cpSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { parse } from 'csv-parse/sync';
import { languageIds } from '../../src/domain/languages.ts';
import { finnishCurriculumRef } from '../../src/domain/vocabulary/curriculum.ts';
import { itemSchema, tiers, type VocabularyItem } from '../../src/domain/vocabulary/schema.ts';
import { adaptSource, parseCsv } from './adapters.ts';
import { buildVocabulary, outputDirectory, serializeItems, verifyCatalogue } from './generate.ts';
import {
  identityMapSchema,
  indexAssignments,
  verifyPreviousMap,
  type Assignment,
  type IdentityMap,
} from './identities.ts';

const root = fileURLToPath(new URL('../../', import.meta.url));
const { files, manifest, audit, mapping } = buildVocabulary(root);
const { byKey, byId } = indexAssignments(mapping.entries);
type Row = Record<string, string>;
function csv(rows: Row[]) {
  const keys = Object.keys(rows[0]);
  const quote = (s: string) => '"' + s.replaceAll('"', '""') + '"';
  return [keys, ...rows.map((row) => keys.map((k) => row[k]))]
    .map((line) => line.map(quote).join(','))
    .join('\n');
}

test('parser accepts both record endings, BOM, embedded commas/newlines, escapes and empty values', () => {
  for (const eol of ['\n', '\r\n']) {
    assert.deepEqual(
      parseCsv(
        Buffer.from('\uFEFFname,value,last' + eol + 'ääkkö,"å, ""ö""' + eol + 'näin",' + eol),
        ['name', 'value', 'last'],
      ),
      [{ name: 'ääkkö', value: 'å, "ö"' + eol + 'näin', last: '' }],
    );
  }
});

test('parser fails explicitly on invalid UTF-8, malformed records and unexpected column schemas', () => {
  for (const input of [
    '',
    'a,a\n1,2',
    'a,b,c\n1,2,3',
    'a\n1',
    'a,b\n1',
    'a,b\n1,"unclosed',
    Buffer.from([0xff]),
  ]) {
    assert.throws(() => parseCsv(input, ['a', 'b']));
  }
});

// Reconstruct the source vocabulary columns from GENERATED records. This also checks omitted cells.
function sourceView(item: VocabularyItem): Row {
  const shared = {
    rank: String(item.rank),
    lemma: item.lemma,
    english: item.english,
    part_of_speech: item.partOfSpeech,
    tier: item.tier,
    topic: item.topic,
    usefulness_score: String(item.usefulnessScore),
    spoken_forms: item.spokenForms ?? '',
    example_en: item.example!.english,
    notes: item.notes ?? '',
  };
  if (item.languageId === 'fi')
    return {
      ...shared,
      example_fi: item.example!.learning,
      original_frequency_rank: String(item.provenance.originalFrequencyRank ?? ''),
    };
  return {
    ...shared,
    language_id: item.languageId,
    word_id: item.wordId,
    display_form: item.displayForm,
    example_sv: item.example!.learning,
    noun_gender: item.noun?.gender ?? '',
    definite_singular: item.noun?.definiteSingular ?? '',
    plural_indefinite: item.noun?.indefinitePlural ?? '',
    plural_definite: item.noun?.definitePlural ?? '',
    verb_present: item.verb?.present ?? '',
    verb_past: item.verb?.past ?? '',
    verb_supine: item.verb?.supine ?? '',
    adjective_neuter: item.adjective?.neuter ?? '',
    adjective_plural: item.adjective?.plural ?? '',
    original_kelly_id: item.provenance.kelly?.id ?? '',
    original_kelly_frequency: item.provenance.kelly?.frequency ?? '',
    original_kelly_cefr: item.provenance.kelly?.cefr ?? '',
    source_status: item.provenance.sourceStatus,
    qa_flags: item.editorial.flags?.join('; ') ?? '',
  };
}

for (const language of manifest.languages) {
  test(
    language.languageId +
      ' preserves every source cell, ID and rank through the committed runtime asset',
    () => {
      const bytes = readFileSync(join(root, language.source));
      const rows: Row[] = parse(bytes, { bom: true, columns: true });
      const items: VocabularyItem[] = JSON.parse(
        readFileSync(join(root, outputDirectory, language.languageId + '.json'), 'utf8'),
      );
      assert.equal(items.length, 2000);
      assert.equal(rows.length, items.length);
      assert.equal(new Set(items.map((i) => i.wordId)).size, items.length);
      assert.equal(new Set(rows.map((r) => r.lemma.normalize('NFC'))).size, rows.length);
      const byRank = new Map(rows.map((row) => [Number(row.rank), row]));
      items.forEach((item, i) => {
        assert.equal(item.rank, i + 1);
        assert.equal(item.tier, tiers[Math.floor(i / 500)]);
        assert.equal(item.languageId, language.languageId);
        assert.deepEqual(sourceView(item), byRank.get(item.rank));
        assert.equal(item.editorial.gloss, 'unreviewed');
        assert.equal(item.editorial.publicTeaching, 'pending');
        if (item.languageId === 'fi') {
          assert.equal(byId.get(item.wordId)?.lemma, item.lemma);
          assert.equal(item.displayForm, item.lemma);
        }
      });
    },
  );
}

test('every declared Finnish vocabulary target and explicit reuse resolves to its assigned source lemma', () => {
  assert.equal(mapping.entries.length, 2000);
  assert.equal(audit.declarations.length, 199);
  assert.equal(audit.ids.size, 196);
  assert.equal(audit.references.size, 198);
  for (const { wordId, lemma } of audit.declarations) {
    const entry = byId.get(wordId)!;
    assert.ok([entry, ...(entry.previousKeys ?? [])].some((key) => key.lemma === lemma));
  }
  for (const spelling of audit.references)
    assert.ok(byId.has(finnishCurriculumRef(spelling).wordId));
});

const fiRows: Row[] = parse(readFileSync(join(root, manifest.languages[0].source)), {
  columns: true,
  bom: true,
});
const baseRow = fiRows.find((row) => row.lemma === 'minä')!;
const base = byId.get('vocab.mina')!;
const another = byId.get('vocab.ystava')!;
test('rank, translation, topic, record order and inserting an unrelated lexical item preserve Finnish IDs', () => {
  const second = fiRows.find((row) => row.lemma === another.lemma)!;
  const one = adaptSource('fi', csv([baseRow]), indexAssignments([base]).byKey);
  const two = adaptSource(
    'fi',
    csv([second, { ...baseRow, rank: '99', english: 'revised', topic: 'People' }]),
    indexAssignments([base, another]).byKey,
  );
  assert.equal(two[1].wordId, one[0].wordId);
  assert.equal(two[0].wordId, another.wordId);
  assert.equal(serializeItems(two), serializeItems([...two].reverse()));
});
test('malformed numeric, missing required values and unresolved lexical keys fail with record context', () => {
  const changes: Row[] = [
    { rank: '99x' },
    { usefulness_score: '101' },
    { usefulness_score: '49' },
    { english: ' ' },
    { example_fi: '' },
    { lemma: 'new' },
  ];
  for (const change of changes) {
    assert.throws(
      () => adaptSource('fi', csv([{ ...baseRow, ...change }]), indexAssignments([base]).byKey),
      /fi CSV record 2/,
    );
  }
  assert.throws(() => adaptSource('fi', csv([baseRow]), byKey), /Stale Finnish/);
  assert.throws(
    () =>
      adaptSource(
        'fi',
        csv([baseRow, { ...baseRow, lemma: baseRow.lemma.normalize('NFD') }]),
        byKey,
      ),
    /Ambiguous Finnish/,
  );
});
test('duplicate IDs, conflicting NFC keys and reused historical keys are rejected', () => {
  assert.equal(
    identityMapSchema.safeParse({
      version: 1,
      entries: [{ ...base, wordId: 'vocab.pelätä'.normalize('NFD') }],
    }).success,
    false,
  );
  const variants: Assignment[] = [
    { ...another, wordId: 'vocab.minä' },
    { ...another, wordId: base.wordId },
    { ...base, wordId: 'vocab.new' },
    { ...base, lemma: base.lemma.normalize('NFD'), wordId: 'vocab.new' },
    { ...another, previousKeys: [{ lemma: base.lemma, partOfSpeech: base.partOfSpeech }] },
  ];
  for (const entry of variants)
    assert.throws(() => indexAssignments([base, entry]), /Duplicate|Conflicting/);
});
test('historical baseline rejects loss or reassignment and accepts explicit lexical corrections retaining ID', () => {
  const previous: IdentityMap = { version: 1, entries: [base, another] };
  const corrected = { ...base, lemma: 'corrected' };
  assert.throws(() => verifyPreviousMap(previous, { version: 1, entries: [another] }), /Removed/);
  assert.throws(
    () => verifyPreviousMap(previous, { version: 1, entries: [corrected, another] }),
    /Unacknowledged/,
  );
  const next: IdentityMap = {
    version: 1,
    entries: [{ ...corrected, previousKeys: [base] }, another],
  };
  verifyPreviousMap(previous, next);
  assert.throws(
    () => verifyPreviousMap(next, { version: 1, entries: [corrected, another] }),
    /Unacknowledged/,
  );
});

test('Swedish metadata rejects invalid language, misplaced morphology and unqualified synthetic Kelly values', () => {
  const rows: Row[] = parse(readFileSync(join(root, manifest.languages[1].source)), {
    columns: true,
    bom: true,
  });
  const synthetic = rows.find((row) => row.original_kelly_frequency === '1000000,00')!;
  const verb = rows.find((row) => row.lemma === 'äta')!;
  for (const row of [
    { ...verb, language_id: 'fi' },
    { ...verb, noun_gender: 'en' },
    { ...verb, original_kelly_frequency: '169.74' },
    { ...synthetic, qa_flags: '' },
    { ...verb, source_status: 'curated_added' },
  ]) {
    assert.throws(() => adaptSource('sv', csv([row]), byKey), /sv CSV record 2/);
  }
  const items = adaptSource('sv', csv(rows), byKey);
  assert.equal(
    items.filter((i) => i.languageId === 'sv' && i.provenance.kelly?.frequencyKind === 'synthetic')
      .length,
    25,
  );
});

test('cross-row validation rejects incorrect count, duplicate IDs, repeated ranks and wrong tiers', () => {
  const items: VocabularyItem[] = JSON.parse(files.get('fi.json')!);
  assert.throws(() => verifyCatalogue('fi', items.slice(1)), /2,000/);
  for (const change of [
    { wordId: items[1].wordId },
    { rank: 2 },
    { tier: 'Extended' as const },
    { rank: 2001 },
  ]) {
    assert.throws(
      () => verifyCatalogue('fi', [{ ...items[0], ...change }, ...items.slice(1)]),
      /duplicate ID|rank or tier/,
    );
  }
  assert.equal(itemSchema.safeParse({ ...items[0], noun: { gender: 'en' } }).success, false);
});
test('regeneration is byte-identical for both languages and the manifest', () => {
  const again = buildVocabulary(root);
  assert.deepEqual(again.files, files);
  for (const [name, data] of files)
    assert.deepEqual(Buffer.from(data), readFileSync(join(root, outputDirectory, name)));
  assert.deepEqual(
    manifest.languages.map((l) => l.languageId),
    languageIds,
  );
});
test('real CLI detects stale, missing and extra assets and invalid source without modifying output', () => {
  const temp = mkdtempSync(join(tmpdir(), 'vokri-vocabulary-'));
  try {
    cpSync(join(root, 'scripts/vocabulary'), join(temp, 'scripts/vocabulary'), { recursive: true });
    mkdirSync(join(temp, 'src'), { recursive: true });
    symlinkSync(join(root, 'src/domain'), join(temp, 'src/domain'), 'dir');
    symlinkSync(join(root, 'node_modules'), join(temp, 'node_modules'), 'dir');
    mkdirSync(join(temp, 'docs/curriculum'), { recursive: true });
    symlinkSync(
      join(root, 'docs/curriculum/authoring'),
      join(temp, 'docs/curriculum/authoring'),
      'dir',
    );
    cpSync(join(root, 'docs/curriculum/vocabulary'), join(temp, 'docs/curriculum/vocabulary'), {
      recursive: true,
    });
    const invoke = (mode: string) =>
      spawnSync(process.execPath, ['scripts/vocabulary/cli.mts', mode], {
        cwd: temp,
        encoding: 'utf8',
      });
    const path = join(temp, outputDirectory, 'fi.json');
    assert.equal(invoke('generate').status, 0);
    assert.equal(invoke('check').status, 0);
    writeFileSync(path, 'stale');
    assert.match(invoke('check').stderr, /Stale fi.json/);
    assert.equal(readFileSync(path, 'utf8'), 'stale');
    rmSync(path);
    assert.notEqual(invoke('check').status, 0);
    assert.equal(invoke('generate').status, 0);
    writeFileSync(join(temp, outputDirectory, 'unexpected.json'), '[]');
    assert.match(invoke('check').stderr, /Unexpected generated asset/);
    writeFileSync(join(temp, manifest.languages[0].source), csv([{ ...baseRow, rank: 'oops' }]));
    for (const mode of ['validate', 'generate']) {
      const result = invoke(mode);
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /fi CSV record 2/);
    }
    assert.equal(readFileSync(path, 'utf8'), files.get('fi.json'));
  } finally {
    rmSync(temp, { force: true, recursive: true });
  }
});
