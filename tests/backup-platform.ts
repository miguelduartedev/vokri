// File-backed equivalents of the small Expo interfaces used by the backup adapter.
import * as fs from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { backup, DatabaseSync } from 'node:sqlite';

export const Paths = { document: '', cache: '', availableDiskSpace: 1e9 };
export let defaultDatabaseDirectory: string;
export function setDatabaseDirectory(path: string) {
  defaultDatabaseDirectory = path;
}
function pathOf(parent: string | Directory, child?: string) {
  const path =
    typeof parent === 'string'
      ? parent.startsWith('file:')
        ? fileURLToPath(parent)
        : parent
      : parent.path;
  return child ? join(path, child) : path;
}
export class Directory {
  path: string;
  constructor(parent: string | Directory, child?: string) {
    this.path = pathOf(parent, child);
  }
  get uri() {
    return pathToFileURL(this.path).href;
  }
  get exists() {
    return fs.existsSync(this.path);
  }
  get name() {
    return basename(this.path);
  }
  create() {
    fs.mkdirSync(this.path, { recursive: true });
  }
  delete() {
    fs.rmSync(this.path, { recursive: true });
  }
  list() {
    return fs
      .readdirSync(this.path, { withFileTypes: true })
      .map((item) =>
        item.isDirectory() ? new Directory(this, item.name) : new File(this, item.name),
      );
  }
}
export const FileMode = { ReadOnly: 'r', WriteOnly: 'r+' };
export class File {
  path: string;
  constructor(parent: string | Directory, ...children: string[]) {
    this.path = join(pathOf(parent), ...children);
  }
  get uri() {
    return pathToFileURL(this.path).href;
  }
  get parentDirectory() {
    return new Directory(dirname(this.path));
  }
  get name() {
    return basename(this.path);
  }
  get size() {
    return this.exists ? fs.statSync(this.path).size : 0;
  }
  get exists() {
    return fs.existsSync(this.path);
  }
  create() {
    fs.closeSync(fs.openSync(this.path, 'wx'));
  }
  delete() {
    fs.unlinkSync(this.path);
  }
  write(bytes: Uint8Array) {
    fs.writeFileSync(this.path, bytes);
  }
  async digest() {
    const hash = createHash('sha256');
    for await (const chunk of fs.createReadStream(this.path)) hash.update(chunk);
    return hash.digest('hex');
  }
  open(mode: string) {
    const fd = fs.openSync(this.path, mode);
    return {
      readBytes(size: number) {
        if (size > 256 * 1024) throw Error('Unbounded native read');
        const buffer = Buffer.alloc(size);
        return buffer.subarray(0, fs.readSync(fd, buffer));
      },
      writeBytes(bytes: Uint8Array) {
        if (bytes.length > 256 * 1024) throw Error('Unbounded native write');
        fs.writeSync(fd, bytes);
      },
      close() {
        fs.closeSync(fd);
      },
    };
  }
}
export const openDatabaseAsync = jest.fn(
  async (name: string, _options?: unknown, directory?: string) => {
    const path = name === ':memory:' ? name : pathOf(directory ?? defaultDatabaseDirectory, name);
    const raw = new DatabaseSync(path);
    return {
      raw,
      path,
      execSync: (sql: string) => raw.exec(sql),
      runSync: (sql: string, ...params: (string | number | null)[]) =>
        raw.prepare(sql).run(...params),
      getAllSync: (sql: string, ...params: (string | number | null)[]) =>
        raw.prepare(sql).all(...params),
      getEachSync: (sql: string) => raw.prepare(sql).iterate(),
      getFirstSync: (sql: string) => raw.prepare(sql).get(),
      withTransactionSync(fn: () => void) {
        raw.exec('BEGIN');
        try {
          fn();
          raw.exec('COMMIT');
        } catch (error) {
          raw.exec('ROLLBACK');
          throw error;
        }
      },
      closeAsync: async () => raw.close(),
      closeSync: () => raw.close(),
    };
  },
);
type DB = Awaited<ReturnType<typeof openDatabaseAsync>>;
export const backupDatabaseAsync = jest.fn(
  async ({ sourceDatabase, destDatabase }: { sourceDatabase: DB; destDatabase: DB }) => {
    await backup(sourceDatabase.raw, destDatabase.path);
  },
);
