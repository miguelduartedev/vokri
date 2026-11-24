import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { finnishCurriculumRef } from '../../src/domain/vocabulary/curriculum.ts';

const endOfInventory = [
  'Phrases, grammar and spoken notes',
  'Phrase and grammar inventory',
  'Phrases and grammar',
  'Grammar and authored phrase inventory',
  'Fixed learner-facing inflected forms and grammar',
  'Support vocabulary and earlier targets',
  'Finite taught forms and grammatical boundaries',
  'Existing learning and phrase reuse',
];
export interface Declaration {
  lemma: string;
  wordId: string;
  source: string;
}

export function auditCurriculum(directory: string) {
  const declarations: Declaration[] = [];
  const references = new Set<string>();
  const files = readdirSync(directory)
    .filter((n) => /^unit-\d\d-.*complete-specification\.md$/.test(n))
    .sort();
  if (files.length !== endOfInventory.length)
    throw new Error('Review the inventory boundaries for the authored units');
  files.forEach((filename, index) => {
    const doc = readFileSync(join(directory, filename), 'utf8').replaceAll('\r\n', '\n');
    const end = doc.indexOf('### ' + endOfInventory[index] + '\n');
    if (end < 0) throw new Error('Missing end of lexical inventory in ' + filename);
    let header: string[] = [];
    let tableCount = 0;
    doc
      .slice(0, end)
      .split(/\r?\n/)
      .forEach((line, n) => {
        if (!line.startsWith('|')) {
          header = [];
          return;
        }
        const cells = line
          .slice(1, -1)
          .split('|')
          .map((s) => s.trim());
        if (!header.length) {
          header = cells;
          if (header.some((h) => /rank/i.test(h))) tableCount++;
          return;
        }
        if (!header.some((h) => /rank/i.test(h)) || /^[-:]+$/.test(cells[0])) return;
        const col = header.findIndex((h) => /lemma/i.test(h) || h === 'Item');
        const lemma = cells[col]?.replace(/[\x60*]/g, '').split(/ \(| — /)[0];
        const ids = line.match(/\bvocab\.[\p{L}\d-]+/gu) ?? [];
        const source = filename + ':' + (n + 1);
        if (!lemma || (!ids.length && index !== 5) || ids.length > 1)
          throw new Error('Invalid vocabulary declaration at ' + source);
        // Only Unit 6 declares the historical ASCII convention in place of a per-row ID.
        const wordId = ids[0] ?? 'vocab.' + lemma.normalize('NFD').replace(/\p{M}/gu, '');
        declarations.push({ wordId, lemma, source });
      });
    if (tableCount !== (index === 0 ? 1 : 2))
      throw new Error('Unexpected vocabulary inventory tables in ' + filename);
    for (const match of doc.matchAll(/\bvocab\.[\p{L}\d-]+/gu)) references.add(match[0]);
  });
  const ids = new Map<string, string>();
  const lemmas = new Map<string, string>();
  for (const { wordId, lemma, source } of declarations) {
    if (
      (ids.has(wordId) && ids.get(wordId) !== lemma) ||
      (lemmas.has(lemma) && lemmas.get(lemma) !== wordId)
    )
      throw new Error('Conflicting curriculum declaration at ' + source);
    ids.set(wordId, lemma);
    lemmas.set(lemma, wordId);
  }
  for (const spelling of references) {
    if (!ids.has(finnishCurriculumRef(spelling).wordId))
      throw new Error('Undeclared Finnish curriculum reference: ' + spelling);
  }
  return { declarations, ids, references };
}
