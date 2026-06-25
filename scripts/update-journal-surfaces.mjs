#!/usr/bin/env node
/**
 * update-journal-surfaces.mjs — keeps journal/index.md Recent entries (5) and
 * journal/calendar.md (5, recent-first) in sync with dated journal/*.md files.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const JOURNAL = join(ROOT, 'journal');
const INDEX = join(JOURNAL, 'index.md');
const CALENDAR = join(JOURNAL, 'calendar.md');
const RECENT = 5;

const DATED = /^(\d{4}-\d{2}-\d{2})-/;

function deriveTitle(data, body, slug) {
  if (typeof data.title === 'string' && data.title.trim()) return data.title.trim();
  const h1 = body.match(/^\s*#\s+(.+?)\s*$/m);
  if (h1) return h1[1].replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2').trim();
  return slug.replace(/^.*\//, '').replace(/-/g, ' ');
}

function deriveSummary(data, body) {
  if (typeof data.description === 'string' && data.description.trim()) return data.description.trim();
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || line.startsWith('---') || line.startsWith('>')) continue;
    if (line.startsWith('**Verdict:**')) return line.replace(/^\*\*Verdict:\*\*\s*/, '').slice(0, 220);
    return line.replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2').replace(/[*_`]/g, '').slice(0, 220);
  }
  return '';
}

function loadEntries() {
  const files = readdirSync(JOURNAL).filter((f) => f.endsWith('.md') && DATED.test(f));
  return files
    .map((file) => {
      const raw = readFileSync(join(JOURNAL, file), 'utf8');
      const { data, content } = matter(raw);
      if (data.draft === true) return null;
      const slug = `journal/${file.replace(/\.md$/, '')}`;
      const date = file.match(DATED)[1];
      const title = deriveTitle(data, content, slug);
      const summary = deriveSummary(data, content);
      return { slug, date, title, summary, file };
    })
    .filter(Boolean)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

function row(e) {
  const sum = e.summary ? ` — ${e.summary}` : '';
  return `- [[${e.slug}|${e.date}]] — ${e.title}${sum}`;
}

function patchIndex(entries) {
  const src = readFileSync(INDEX, 'utf8');
  const head = '## Recent entries';
  const tail = '## Essays';
  const i = src.indexOf(head);
  const j = src.indexOf(tail);
  if (i === -1 || j === -1) {
    console.error('update-journal-surfaces: markers missing in journal/index.md');
    process.exit(1);
  }
  const block = [
    head,
    '',
    ...entries.slice(0, RECENT).map(row),
    '',
    '[[journal/calendar|Full calendar →]]',
    '',
  ].join('\n');
  const tailText = src.slice(j).replace(/^\n*/, '');
  return src.slice(0, i) + block + '\n' + tailText;
}

function touchUpdated(fm) {
  const today = new Date().toISOString().slice(0, 10);
  if (/^updated:/m.test(fm)) return fm.replace(/^updated:.*$/m, `updated: ${today}`);
  return fm.replace(/^(---\r?\n[\s\S]*?)(\r?\n---\r?\n)/, `$1\nupdated: ${today}$2`);
}

function writeCalendar(entries) {
  let fm = readFileSync(CALENDAR, 'utf8').match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)?.[0] ?? '';
  fm = touchUpdated(fm);
  const body = [
    '# Journal Calendar',
    '',
    'Five most recent journal entries, newest first. Older entries stay in the vault; add a dated `journal/YYYY-MM-DD-*.md` file and this page updates on build.',
    '',
    ...entries.slice(0, RECENT).map((e) => {
      const sum = e.summary ? `\n\n${e.summary}` : '';
      return `## ${e.date}\n\n[[${e.slug}|${e.title}]]${sum}\n`;
    }),
    '',
    '[[journal/index|← Back to Journal]]',
    '',
  ].join('\n');
  writeFileSync(CALENDAR, fm + body);
}

function main() {
  const entries = loadEntries();
  writeFileSync(INDEX, patchIndex(entries));
  writeCalendar(entries);
  console.log(`update-journal-surfaces: ${Math.min(RECENT, entries.length)} entries (of ${entries.length} dated)`);
}

main();