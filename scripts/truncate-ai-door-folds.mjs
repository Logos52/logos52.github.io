#!/usr/bin/env node
/** Remove post-merge fold sections (after first horizontal rule following body). */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const TRUNCATE_AT_FOLD = [
  'wiki/Working with Agents/Scope a bot like a job description.md',
  'wiki/Working with Agents/Give an agent a task without micromanaging it.md',
  'wiki/Working with Agents/Let an agent check its own work.md',
  'wiki/Systems/AI & Agentic Systems/Using Grok Bot.md',
];

for (const rel of TRUNCATE_AT_FOLD) {
  const text = readFileSync(join(ROOT, rel), 'utf8');
  const marker = '\n---\n\n## ';
  const idx = text.indexOf(marker);
  if (idx === -1) continue;
  const kept = text.slice(0, idx).trimEnd() + '\n';
  writeFileSync(join(ROOT, rel), kept);
  console.log('truncated folds:', rel);
}