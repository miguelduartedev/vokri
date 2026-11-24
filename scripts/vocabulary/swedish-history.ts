import { parse } from 'csv-parse/sync';

interface Identity {
  word_id: string;
  lemma: string;
  part_of_speech: string;
}
interface Correction {
  wordId: string;
  from: [string, string];
  to: [string, string];
  reason: string;
}

// Record a reviewed spelling or POS correction here, on its original ID.
const corrections: readonly Correction[] = [];
const key = (lemma: string, pos: string) => JSON.stringify([lemma.normalize('NFC'), pos]);

function identities(csv: string) {
  const entries: Identity[] = parse(csv, { columns: true, bom: true });
  const byId = new Map<string, string>();
  for (const row of entries) {
    if (!row.word_id || !row.lemma || !row.part_of_speech || byId.has(row.word_id))
      throw new Error('Invalid or duplicate Swedish identity: ' + row.word_id);
    byId.set(row.word_id, key(row.lemma, row.part_of_speech));
  }
  return byId;
}

export function verifySwedishHistory(before: string, after: string, reviewed = corrections) {
  const previous = identities(before);
  const current = identities(after);
  for (const [id, original] of previous) {
    const next = current.get(id);
    if (!next) throw new Error('Removed Swedish ID: ' + id);
    if (next === original) continue;
    const corrected = reviewed.some(
      (c) =>
        c.wordId === id && c.reason.trim() && key(...c.from) === original && key(...c.to) === next,
    );
    if (!corrected)
      throw new Error('Swedish identity changed: ' + id + ' ' + original + ' → ' + next);
  }
}
