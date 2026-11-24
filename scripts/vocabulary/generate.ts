import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { languageIds, type LearningLanguage } from '../../src/domain/languages.ts';
import { tiers, type VocabularyItem } from '../../src/domain/vocabulary/schema.ts';
import { adaptSource } from './adapters.ts';
import { auditCurriculum } from './curriculum.ts';
import { identityMapSchema, indexAssignments } from './identities.ts';

export const mapFile = 'scripts/vocabulary/finnish-identities.json';
export const outputDirectory = 'src/content/vocabulary/generated';
const sources = {
  fi: { file: 'finnish_2000_curated.csv', attribution: 'README.md' },
  sv: { file: 'swedish_2000_curated.csv', attribution: 'swedish_2000_curated_README.md' },
};
const digest = (bytes: string | Buffer) => createHash('sha256').update(bytes).digest('hex');

export function verifyCatalogue(language: LearningLanguage, items: VocabularyItem[]) {
  if (items.length !== 2000)
    throw new Error(language + ': expected 2,000 rows; found ' + items.length);
  const ids = new Set<string>();
  const ranks = new Set<number>();
  for (const item of items) {
    if (item.languageId !== language || ids.has(item.wordId))
      throw new Error(language + ': invalid or duplicate ID ' + item.wordId);
    if (ranks.has(item.rank) || item.tier !== tiers[Math.floor((item.rank - 1) / 500)])
      throw new Error(language + ': invalid rank or tier for ' + item.wordId + ' at ' + item.rank);
    ranks.add(item.rank);
    ids.add(item.wordId);
  }
}

export function serializeItems(items: VocabularyItem[]) {
  const sorted = [...items].sort(
    (a, b) => a.rank - b.rank || (a.wordId < b.wordId ? -1 : a.wordId > b.wordId ? 1 : 0),
  );
  return '[\n' + sorted.map((item) => '  ' + JSON.stringify(item)).join(',\n') + '\n]\n';
}

export function buildVocabulary(root: string) {
  const mapBytes = readFileSync(join(root, mapFile));
  const mapping = identityMapSchema.parse(JSON.parse(mapBytes.toString('utf8')));
  const { byKey, byId } = indexAssignments(mapping.entries);
  const audit = auditCurriculum(join(root, 'docs/curriculum/authoring'));
  for (const { wordId, lemma, source } of audit.declarations) {
    const entry = byId.get(wordId);
    if (
      !entry ||
      (entry.lemma !== lemma && !entry.previousKeys?.some((key) => key.lemma === lemma))
    )
      throw new Error('Curriculum ID mismatch at ' + source + ': ' + wordId + ' / ' + lemma);
  }
  const files = new Map<string, string>();
  const languages = languageIds.map((languageId) => {
    const { file, attribution } = sources[languageId];
    const source = 'docs/curriculum/vocabulary/' + file;
    const input = readFileSync(join(root, source));
    const items = adaptSource(languageId, input, byKey);
    verifyCatalogue(languageId, items);
    const content = serializeItems(items);
    files.set(languageId + '.json', content);
    return {
      languageId,
      count: items.length,
      source,
      sourceSha256: digest(input),
      contentSha256: digest(content),
      bytes: Buffer.byteLength(content),
      attribution: 'docs/curriculum/vocabulary/' + attribution,
    };
  });
  const manifest = {
    schemaVersion: 1,
    identityMap: { version: mapping.version, sha256: digest(mapBytes) },
    languages,
  };
  files.set('manifest.json', JSON.stringify(manifest, null, 2) + '\n');
  return { files, manifest, mapping, audit };
}
