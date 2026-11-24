import { execFileSync } from 'node:child_process';
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildVocabulary, mapFile, outputDirectory } from './generate.ts';
import { identityMapSchema, verifyPreviousMap } from './identities.ts';

import { verifySwedishHistory } from './swedish-history.ts';

const root = fileURLToPath(new URL('../../', import.meta.url));
const directory = join(root, outputDirectory);
function run() {
  const [mode, flag, base, ...extra] = process.argv.slice(2);
  if (
    !['generate', 'validate', 'check'].includes(mode) ||
    (flag && (mode !== 'check' || flag !== '--base' || !base)) ||
    extra.length
  )
    throw new Error('Usage: generate | validate | check [--base <Git revision>]');
  const { files, manifest, mapping, audit } = buildVocabulary(root);
  if (base) {
    const git = (...args: string[]) =>
      execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 4_000_000 });
    const commit = git('rev-parse', '--verify', '--end-of-options', base + '^{commit}').trim();
    const swedishSource = 'docs/curriculum/vocabulary/swedish_2000_curated.csv';
    verifySwedishHistory(
      git('show', commit + ':' + swedishSource),
      readFileSync(join(root, swedishSource), 'utf8'),
    );
    if (git('ls-tree', '--name-only', commit, '--', mapFile).trim()) {
      verifyPreviousMap(
        identityMapSchema.parse(JSON.parse(git('show', commit + ':' + mapFile))),
        mapping,
      );
    }
  }
  if (mode === 'generate') {
    mkdirSync(directory, { recursive: true });
    const stage = mkdtempSync(join(dirname(directory), '.vocabulary-'));
    try {
      for (const [name, content] of files) writeFileSync(join(stage, name), content);
      // Publish complete files only, with the manifest last. A retry repairs an interrupted publish.
      for (const name of files.keys()) renameSync(join(stage, name), join(directory, name));
    } finally {
      rmSync(stage, { recursive: true, force: true });
    }
  } else if (mode === 'check') {
    for (const name of readdirSync(directory))
      if (!files.has(name)) throw new Error('Unexpected generated asset: ' + name);
    for (const [name, content] of files) {
      if (!readFileSync(join(directory, name)).equals(Buffer.from(content)))
        throw new Error('Stale ' + name + '; run npm run vocabulary:generate');
    }
  }
  for (const language of manifest.languages)
    console.log(
      language.languageId,
      language.count,
      'items;',
      language.bytes,
      'bytes;',
      language.contentSha256,
    );
  console.log(
    mode,
    'OK;',
    audit.declarations.length,
    'authored declarations,',
    audit.ids.size,
    'canonical Finnish targets',
  );
}
try {
  run();
} catch (error) {
  console.error((error as Error).message);
  process.exitCode = 1;
}
