import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  parseVocabulary,
  maxBytes,
  type PortableEntry,
  type VocabularyDocument,
} from '@/domain/interchange/format';
import { serializeVocabulary } from '@/domain/interchange/export';
import { compareEntries, summarizeVocabulary } from '@/domain/interchange/preview';
import { getVocabulary } from '@/domain/vocabulary/registry';
import { languageIds, type LearningLanguage } from '@/domain/languages';

const date = '2026-11-25T12:34:56.000Z';
function fixture(lang: LearningLanguage = 'fi'): VocabularyDocument {
  const words =
    lang === 'fi'
      ? [
          ['sa\u0308a\u0308', 'weather'],
          ['ei se mitään', 'no worries'],
          ['Olen asunut Suomessa kolme vuotta.', 'I have lived in Finland for three years.'],
        ]
      : [
          ['en nyckel', 'a key'],
          ['det gör inget', 'never mind'],
          ['Jag skulle vilja ha en kopp kaffe.', 'I would like a cup of coffee.'],
        ];
  const personalEntries = words.map(([displayForm, english], i) => ({
    languageId: lang,
    wordId: 'personal:' + String(i + 1).padStart(32, '0'),
    type: (['Word', 'Phrase', 'Sentence'] as const)[i],
    displayForm,
    english,
    ...(i === 0 ? { lemma: displayForm } : {}),
    context: ' At the café.\nSecond line. ',
    forms: '',
    note: '<class> “A & B”',
    createdAt: date,
    updatedAt: date,
  }));
  const collections = ['course', 'café'].map((collectionId) => ({
    languageId: lang,
    collectionId,
    name: collectionId,
    description: 'My class',
    createdAt: date,
  }));
  const memberships = collections.map((c) => ({
    languageId: lang,
    collectionId: c.collectionId,
    kind: 'personal' as const,
    wordId: personalEntries[2].wordId,
  }));
  return {
    format: 'vokri-cards-my-words',
    version: 1,
    learningLanguage: lang,
    exportedAt: date,
    personalEntries,
    collections,
    memberships: [
      ...memberships,
      {
        languageId: lang,
        collectionId: 'course',
        kind: 'curated',
        wordId: getVocabulary(lang)[0].wordId,
      },
    ],
  };
}

it.each(languageIds)(
  'round-trips authored %s content and shared references deterministically without mutating sources',
  (lang) => {
    const data = fixture(lang);
    data.personalEntries.push({
      ...data.personalEntries[0],
      wordId: 'personal:' + 'f'.repeat(32),
      english: lang === 'fi' ? 'weather conditions' : 'a key to a puzzle',
      note: 'Separate entry from my course',
    });
    const source = {
      ...data,
      personalEntries: data.personalEntries.map((row) => ({
        ...row,
        revision: 8,
        reviewState: 'private',
      })),
      collections: data.collections.map((c) => ({ ...c, internal: 'private' })),
      memberships: data.memberships.map((m) => ({ ...m, internal: 'private' })),
    };
    const original = JSON.stringify(source);
    const json = serializeVocabulary(source);
    expect(json).not.toMatch(/private|revision/);
    expect(JSON.stringify(source)).toBe(original);
    const parsed = parseVocabulary(json);
    if (!parsed.ok) throw parsed.error;
    expect(parsed.missingCurated).toEqual([]);
    expect(parsed.document.personalEntries).toEqual(data.personalEntries);
    expect(parsed.document.collections).toEqual(expect.arrayContaining(data.collections));
    expect(parsed.document.memberships).toEqual(expect.arrayContaining(data.memberships));
    expect(serializeVocabulary(parsed.document)).toBe(json);
    expect(
      serializeVocabulary({
        ...source,
        personalEntries: [...source.personalEntries].reverse(),
        collections: [...source.collections].reverse(),
        memberships: [...source.memberships].reverse(),
      }),
    ).toBe(json);
  },
);

it('omits archived content and its memberships and accepts an empty file', () => {
  const data = fixture();
  const parsed = parseVocabulary(
    serializeVocabulary({
      ...data,
      personalEntries: data.personalEntries.map((row) => ({ ...row, archivedAt: date })),
    }),
  );
  if (!parsed.ok) throw parsed.error;
  expect(parsed.document.personalEntries).toEqual([]);
  expect(parsed.document.memberships).toEqual(data.memberships.filter((m) => m.kind === 'curated'));
  const empty = { ...data, personalEntries: [], collections: [], memberships: [] };
  expect(parseVocabulary(serializeVocabulary(empty))).toMatchObject({ ok: true, document: empty });
});

function invalid(raw: unknown, code: string, path?: (string | number)[]) {
  const result = parseVocabulary(JSON.stringify(raw));
  expect(result).toMatchObject({ ok: false, error: { code, ...(path ? { path } : {}) } });
  expect(result).not.toHaveProperty('document');
}
it('dispatches by format and version before interpreting the records', () => {
  expect(parseVocabulary('[')).toMatchObject({ ok: false, error: { code: 'json' } });
  for (const value of [null, [], {}, { format: 'other' }]) invalid(value, 'format');
  const doc = fixture();
  invalid({ ...doc, version: 2, personalEntries: 'future layout' }, 'unsupported_version', [
    'version',
  ]);
  for (const version of [undefined, '1']) invalid({ ...doc, version }, 'schema', ['version']);
  invalid({ ...doc, learningLanguage: 'en' }, 'schema', ['learningLanguage']);
  invalid({ ...doc, exportedAt: '2026-02-31' }, 'schema', ['exportedAt']);
  invalid({ ...doc, memberships: null }, 'schema', ['memberships']);
});
it('requires valid authored fields and identifiers and rejects unrecognised fields', () => {
  const doc = fixture();
  for (const patch of [
    { displayForm: ' \t' },
    { english: undefined },
    { type: 'noun' },
    { wordId: 'personal:1' },
    { note: 123 },
    { revision: 2 },
    { createdAt: 'yesterday' },
  ])
    invalid({ ...doc, personalEntries: [{ ...doc.personalEntries[0], ...patch }] }, 'schema');
  invalid({ ...doc, collections: [{ ...doc.collections[0], name: ' ' }] }, 'schema');
  invalid({ ...doc, collections: [{ ...doc.collections[0], collectionId: 'bad/id' }] }, 'schema');
  invalid({ ...doc, settings: {} }, 'schema');
  const unexpected = JSON.stringify(doc).replace('{', '{"__proto__":{"extra":"text"},');
  expect(parseVocabulary(unexpected)).toMatchObject({
    ok: false,
    error: { code: 'schema', path: ['__proto__'] },
  });
});
it('checks uniqueness and both ends of each membership', () => {
  const doc = fixture(),
    [edge] = doc.memberships;
  for (const key of ['personalEntries', 'collections', 'memberships'] as const)
    invalid({ ...doc, [key]: [...doc[key], doc[key][0]] }, 'duplicate');
  invalid({ ...doc, memberships: [{ ...edge, collectionId: 'absent' }] }, 'reference', [
    'memberships',
    0,
    'collectionId',
  ]);
  invalid({ ...doc, personalEntries: [] }, 'reference', ['memberships', 0, 'wordId']);
  invalid({ ...doc, memberships: [{ ...edge, kind: 'curated' }] }, 'reference');
  invalid({ ...doc, memberships: [{ ...edge, kind: 'deck' }] }, 'schema');
});
it('rejects cross-language records and known wrong-language catalogue references', () => {
  const doc = fixture();
  for (const key of ['personalEntries', 'collections', 'memberships'] as const)
    invalid({ ...doc, [key]: [{ ...doc[key][0], languageId: 'sv' }] }, 'language');
  invalid(
    { ...doc, memberships: [{ ...doc.memberships[2], wordId: getVocabulary('sv')[0].wordId }] },
    'language',
  );
  expect(() =>
    serializeVocabulary({ ...doc, personalEntries: fixture('sv').personalEntries }),
  ).toThrow(/one language/);
});
it('preserves unknown curated edges and returns one warning reference per missing item', () => {
  const doc = fixture(),
    wordId = 'vocab.unavailable';
  doc.memberships = doc.collections.map((c) => ({
    languageId: 'fi',
    collectionId: c.collectionId,
    kind: 'curated',
    wordId,
  }));
  expect(parseVocabulary(serializeVocabulary(doc))).toMatchObject({
    ok: true,
    missingCurated: [{ languageId: 'fi', wordId }],
    document: {
      personalEntries: doc.personalEntries,
      memberships: expect.arrayContaining(doc.memberships),
    },
  });
});
it('enforces the same UTF-8 byte and row budgets on read and write', () => {
  const doc = fixture();
  doc.personalEntries[0].note = 'ä'.repeat(maxBytes / 2);
  expect(parseVocabulary(JSON.stringify(doc))).toMatchObject({
    ok: false,
    error: { code: 'size' },
  });
  expect(() => serializeVocabulary(doc)).toThrow(/4 MiB/);
  invalid({ ...fixture(), memberships: Array(25001).fill(null) }, 'schema', ['memberships']);
});
it('keeps different meanings, notes, accents and Swedish articles distinguishable in preview', () => {
  const [fi] = fixture().personalEntries,
    [sv] = fixture('sv').personalEntries;
  const other = { ...fi, wordId: 'personal:' + 'f'.repeat(32) };
  expect(compareEntries(fi, { ...fi, displayForm: ' sää ', updatedAt: undefined })).toBe(
    'matching_identity',
  );
  expect(compareEntries(fi, { ...fi, note: 'new note' })).toBe('identity_conflict');
  expect(compareEntries(fi, { ...fi, displayForm: 'SÄÄ' })).toBe('identity_conflict');
  expect(compareEntries(fi, { ...other, displayForm: 'sää' })).toBe('equivalent_content');
  expect(compareEntries(fi, { ...other, english: ' forecast ' })).toBe('different_meaning');
  expect(compareEntries(fi, { ...other, note: 'course 2' })).toBe('different_details');
  expect(compareEntries(fi, { ...other, displayForm: 'saa', lemma: '' })).toBe('unrelated');
  expect(compareEntries(fi, sv)).toBe('unrelated');
  expect(compareEntries(fi, { ...fi, archivedAt: date })).toBe('identity_conflict');
  expect(
    compareEntries(sv, { ...sv, wordId: other.wordId, displayForm: 'nyckel', lemma: 'nyckel' }),
  ).toBe('unrelated');
});
it('summarizes identities before similarity without changing either inventory', () => {
  const doc = fixture('sv');
  const independent: PortableEntry = {
    ...doc.personalEntries[0],
    wordId: 'personal:' + 'a'.repeat(32),
    english: 'a different sense',
  };
  doc.personalEntries.push(independent);
  const existing = [
    doc.personalEntries[1],
    { ...doc.personalEntries[2], context: 'a changed context' },
  ];
  const before = JSON.stringify([doc, existing]);
  expect(summarizeVocabulary(doc, existing)).toEqual({
    language: 'sv',
    entries: 4,
    collections: 2,
    memberships: 3,
    matchingIdentities: 1,
    identityConflicts: 1,
    possibleDuplicates: 2,
    newEntries: 0,
  });
  expect(JSON.stringify([doc, existing])).toBe(before);
});

it('reports both incoming senses of a new expression and reserves archived identities', () => {
  const doc = fixture();
  const base = { ...doc.personalEntries[0], displayForm: 'oman ryhmän ilmaus', lemma: undefined };
  const second = { ...base, wordId: doc.personalEntries[1].wordId, english: 'another sense' };
  doc.personalEntries = [base, second];
  expect(summarizeVocabulary(doc)).toMatchObject({ possibleDuplicates: 2, newEntries: 0 });
  expect(summarizeVocabulary(doc, [{ ...base, archivedAt: date }])).toMatchObject({
    identityConflicts: 1,
    possibleDuplicates: 1,
  });
  expect(compareEntries(base, { ...base, note: 'line 1\nline 2' })).toBe('identity_conflict');
  expect(
    compareEntries({ ...base, note: 'line 1 line 2' }, { ...base, note: 'line 1\nline 2' }),
  ).toBe('identity_conflict');
  expect(() =>
    serializeVocabulary({ ...doc, personalEntries: [base, { ...base, archivedAt: date }] }),
  ).toThrow(/both archived and active/);
});

it('accepts both published v1 examples with the installed catalogues', () => {
  const specification = readFileSync(
    resolve(__dirname, '../docs/handoff/vokri-cards/vocabulary-interchange-v1.md'),
    'utf8',
  );
  const examples = [...specification.matchAll(/`{3}json\n([\s\S]*?)\n`{3}/g)];
  expect(
    examples.map(([, json]) => {
      const result = parseVocabulary(json);
      if (!result.ok) throw result.error;
      expect(result.missingCurated).toEqual([]);
      return result.document.learningLanguage;
    }),
  ).toEqual(['fi', 'sv']);
});
