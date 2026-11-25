/**
 * design-guard.mjs
 *
 * Class-name and token bans are gone. This check only keeps the archived
 * design from being imported into the live source.
 * Publish exclusion for design-archive/ stays in src/lib/ignore-patterns.mjs.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = join(import.meta.dirname, '../..');
const failures = [];

async function walk(dir, out) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'content') continue;
      await walk(path, out);
    } else {
      out.push(path);
    }
  }
}

const files = [];
await walk(join(ROOT, 'src'), files);
for (const file of files) {
  const rel = relative(ROOT, file);
  const text = await readFile(file, 'utf8');
  if (/(?:from\s+|@import\s+|url\(\s*)['"][^'"]*design-archive\//.test(text)) {
    failures.push(`${rel}: imports the archived design`);
  }
}

if (failures.length) {
  process.stderr.write(`design-guard: ${failures.length} problem(s)\n`);
  for (const line of failures) process.stderr.write(`  ${line}\n`);
  process.exit(1);
}
process.stdout.write(`design-guard: clean (${files.length} files, archive stays unloaded)\n`);
