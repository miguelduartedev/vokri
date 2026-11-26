import type { LearningLanguage } from '../domain/languages';
import { personalPrefix, searchKey, type PersonalEntry } from '../domain/learning/personal';
import { serializeVocabulary } from '../domain/interchange/export';
import {
  validateDocument,
  type Membership,
  type PortableCollection,
  type VocabularyDocument,
} from '../domain/interchange/format';
import { inspectVocabulary } from '../domain/interchange/preview';
import type { LearningDatabase } from './database';

function inventory(db: LearningDatabase, language: LearningLanguage) {
  const personalEntries = db.getAllSync<PersonalEntry>(
    'SELECT * FROM personal_entries WHERE languageId=? AND archivedAt IS NULL ORDER BY wordId',
    language,
  );
  const collections = db.getAllSync<PortableCollection>(
    'SELECT languageId,id AS collectionId,name,description,createdAt,updatedAt FROM collections WHERE languageId=? ORDER BY id',
    language,
  );
  const memberships = db
    .getAllSync<
      Omit<Membership, 'kind'>
    >('SELECT languageId,collectionId,wordId FROM collection_members WHERE languageId=? ORDER BY collectionId,wordId', language)
    .map((row) => ({
      ...row,
      kind: row.wordId.startsWith(personalPrefix) ? ('personal' as const) : ('curated' as const),
    }));
  return { personalEntries, collections, memberships };
}

export function exportSnapshot(db: LearningDatabase, language: LearningLanguage, stamp: string) {
  let data!: ReturnType<typeof inventory>;
  db.withTransactionSync(() => {
    data = inventory(db, language);
  });
  const json = serializeVocabulary({ ...data, learningLanguage: language, exportedAt: stamp });
  return {
    json,
    filename: 'vokri-my-words-' + language + '-' + stamp.slice(0, 10) + '.json',
    entries: data.personalEntries.length,
    collections: data.collections.length,
    types: ['Word', 'Phrase', 'Sentence'].map(
      (type) => data.personalEntries.filter((item) => item.type === type).length,
    ),
  };
}

function localState(db: LearningDatabase, doc: VocabularyDocument) {
  const data = inventory(db, doc.learningLanguage);
  const incoming = new Set(doc.personalEntries.map((e) => e.wordId));
  const reserved = db
    .getAllSync<{ wordId: string }>(
      'SELECT wordId FROM personal_entries WHERE languageId<>? OR archivedAt IS NOT NULL ORDER BY wordId',
      doc.learningLanguage,
    )
    .map((row) => row.wordId)
    .filter((id) => incoming.has(id));
  return { ...data, reserved };
}

export function previewImport(db: LearningDatabase, raw: VocabularyDocument) {
  const { document: doc, missingCurated } = validateDocument(raw);
  let local!: ReturnType<typeof localState>;
  db.withTransactionSync(() => {
    local = localState(db, doc);
  });
  const words = inspectVocabulary(doc, local.personalEntries, new Set(local.reserved));
  const byId = new Map(local.collections.map((c) => [c.collectionId, c]));
  const byName = new Map(local.collections.map((c) => [searchKey(c.name), c]));
  const names = new Set<string>(),
    duplicates = new Set<string>();
  for (const c of doc.collections) {
    const name = searchKey(c.name);
    if (names.has(name)) duplicates.add(name);
    names.add(name);
  }
  const collections = doc.collections.map((item) => {
    const key = searchKey(item.name);
    const id = byId.get(item.collectionId),
      name = byName.get(key);
    const candidates = [...new Set([id, name].filter((c): c is PortableCollection => !!c))];
    const equivalent =
      id && id.name === item.name.trim() && id.description === (item.description ?? '').trim();
    const status = equivalent
      ? ('matching' as const)
      : candidates.length || duplicates.has(key)
        ? ('conflict' as const)
        : ('new' as const);
    return { item, status, candidates };
  });
  const missing = new Set(missingCurated.map((r) => r.wordId));
  return {
    doc,
    ...words,
    collections,
    local,
    missing,
    missingEdges: doc.memberships.filter((m) => m.kind === 'curated' && missing.has(m.wordId)),
  };
}

export type ImportPreview = ReturnType<typeof previewImport>;
export type Choice =
  | { action: 'reuse'; id: string }
  | { action: 'create'; name?: string }
  | { action: 'skip' };
export interface Choices {
  words: Map<string, Choice>;
  collections: Map<string, Choice>;
  skipMissing: boolean;
}
export function freshChoices(): Choices {
  return { words: new Map(), collections: new Map(), skipMissing: false };
}
export function keepRemainingSeparate(preview: ImportPreview, choices: Choices): Choices {
  const words = new Map(choices.words);
  for (const { item, status } of preview.entries)
    if (status === 'similar' && !words.has(item.wordId))
      words.set(item.wordId, { action: 'create' });
  return { ...choices, words };
}
export class StalePreview extends Error {}

export function suggestedName(
  preview: ImportPreview,
  choices: Choices,
  source: PortableCollection,
) {
  const used = new Set(
    [...preview.local.collections, ...preview.doc.collections].map((c) => searchKey(c.name)),
  );
  for (const c of choices.collections.values())
    if (c.action === 'create' && c.name) used.add(searchKey(c.name));
  let i = 1,
    name: string;
  do {
    name = source.name.trim() + ' (copy' + (i === 1 ? '' : ' ' + i) + ')';
    i++;
  } while (used.has(searchKey(name)));
  return name;
}

// Run only inside LearningStore.commit. No other store mutator opens a nested transaction.
export function writeImport(
  db: LearningDatabase,
  preview: ImportPreview,
  choices: Choices,
  now: string,
) {
  const { doc } = preview,
    lang = doc.learningLanguage;
  if (JSON.stringify(localState(db, doc)) !== JSON.stringify(preview.local))
    throw new StalePreview('Your vocabulary changed. Refresh the preview before importing.');
  if (preview.missing.size && !choices.skipMissing)
    throw new Error('Review unavailable references before importing.');
  const result = {
    entriesAdded: 0,
    entriesReused: 0,
    entriesSkipped: 0,
    collectionsAdded: 0,
    collectionsReused: 0,
    collectionsSkipped: 0,
    membershipsAdded: 0,
    membershipsSkipped: 0,
  };
  const words = new Map<string, string>(),
    groups = new Map<string, string>();
  const occupied = new Set([
    ...preview.local.personalEntries.map((x) => x.wordId),
    ...preview.local.reserved,
  ]);
  const groupIds = new Set(preview.local.collections.map((c) => c.collectionId));
  const names = new Set(preview.local.collections.map((c) => searchKey(c.name)));
  function freshId(prefix: string) {
    return prefix + db.getAllSync<{ id: string }>('SELECT lower(hex(randomblob(16))) AS id')[0].id;
  }
  for (const { item, status } of preview.entries) {
    const id = item.wordId;
    const choice =
      status === 'new'
        ? ({ action: 'create' } as const)
        : status === 'matching'
          ? ({ action: 'reuse', id } as const)
          : choices.words.get(id);
    if (!choice) throw new Error('Choose how to import each remaining entry.');
    if (choice.action === 'skip') {
      result.entriesSkipped++;
      continue;
    }
    if (choice.action === 'reuse') {
      if (status !== 'matching' && !preview.candidates(item).some((c) => c.wordId === choice.id))
        throw new Error('Choose an available vocabulary match.');
      words.set(id, choice.id);
      result.entriesReused++;
      continue;
    }
    const target = occupied.has(id) ? freshId(personalPrefix) : id;
    db.runSync(
      'INSERT INTO personal_entries(languageId,wordId,type,displayForm,english,lemma,context,forms,note,createdAt,updatedAt) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
      lang,
      target,
      item.type,
      item.displayForm,
      item.english,
      item.lemma ?? '',
      item.context ?? '',
      item.forms ?? '',
      item.note ?? '',
      item.createdAt ?? item.updatedAt ?? now,
      item.updatedAt ?? item.createdAt ?? now,
    );
    words.set(id, target);
    occupied.add(target);
    result.entriesAdded++;
  }
  for (const { item, status, candidates } of preview.collections) {
    const id = item.collectionId;
    const choice: Choice | undefined =
      status === 'new'
        ? { action: 'create' }
        : status === 'matching'
          ? { action: 'reuse', id }
          : choices.collections.get(id);
    if (!choice) throw new Error('Choose how to import each remaining collection.');
    if (choice.action === 'skip') {
      result.collectionsSkipped++;
      continue;
    }
    if (choice.action === 'reuse') {
      if (!candidates.some((c) => c.collectionId === choice.id))
        throw new Error('Choose an available collection.');
      groups.set(id, choice.id);
      result.collectionsReused++;
      continue;
    }
    const name = (choice.name ?? item.name).trim(),
      key = searchKey(name);
    if (!key || names.has(key)) throw new Error('Choose a unique name for each new collection.');
    const target = groupIds.has(id) ? freshId('') : id;
    db.runSync(
      'INSERT INTO collections(languageId,id,name,nameKey,description,createdAt,updatedAt) VALUES(?,?,?,?,?,?,?)',
      lang,
      target,
      name,
      key,
      (item.description ?? '').trim(),
      item.createdAt ?? item.updatedAt ?? now,
      item.updatedAt ?? item.createdAt ?? now,
    );
    names.add(key);
    groupIds.add(target);
    groups.set(id, target);
    result.collectionsAdded++;
  }
  const edges = new Set(
    preview.local.memberships.map((m) => JSON.stringify([m.collectionId, m.wordId])),
  );
  for (const m of doc.memberships) {
    const group = groups.get(m.collectionId),
      word = m.kind === 'personal' ? words.get(m.wordId) : m.wordId;
    if (!group || !word || preview.missing.has(word)) {
      result.membershipsSkipped++;
      continue;
    }
    const key = JSON.stringify([group, word]);
    if (edges.has(key)) continue;
    db.runSync(
      'INSERT INTO collection_members(languageId,collectionId,wordId) VALUES(?,?,?)',
      lang,
      group,
      word,
    );
    edges.add(key);
    result.membershipsAdded++;
  }
  return result;
}
