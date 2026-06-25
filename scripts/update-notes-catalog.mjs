#!/usr/bin/env node
/**
 * update-notes-catalog.mjs — regenerates the "## Full Catalog" section of notes/index.md
 * from wiki frontmatter. The "## Hubs & Condensed" block stays hand-curated.
 *
 * Wired into prebuild alongside update-notes-count.mjs.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEX = join(ROOT, 'notes', 'index.md');
const WIKI = join(ROOT, 'wiki');
const MARKER = '## Full Catalog';

/** First-match section assignment for wiki slugs (path without .md). */
const SECTIONS = [
  {
    title: 'LLM wiki architecture',
    test: (s) =>
      s.startsWith('wiki/Workflows/') ||
      s === 'wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems' ||
      s === 'wiki/Systems/AI & Agentic Systems/Context Engineering' ||
      s === 'wiki/Concepts/LLM Knowledge Systems' ||
      s === 'wiki/Concepts/LLM Tool Use' ||
      s === 'wiki/Concepts/Thinking Models' ||
      s === 'wiki/Domains/AI & Tooling/LLM Tool Use',
  },
  {
    title: 'Agentic engineering',
    test: (s) =>
      s.startsWith('wiki/Systems/AI & Agentic Systems/') ||
      s.startsWith('wiki/Domains/AI & Tooling/') ||
      [
        'wiki/Concepts/Agentic Engineering',
        'wiki/Concepts/Vibe Coding',
        'wiki/Concepts/Software 3.0',
        'wiki/Concepts/Agent-Native Infrastructure',
        'wiki/Concepts/Understanding Bottleneck',
        'wiki/Concepts/A Motorcycle for the Mind',
        'wiki/Concepts/A Return to Code',
        'wiki/Concepts/Nothing Ever Happens Is Over',
        'wiki/Concepts/How to Communicate Truth Into Someone Else\'s Frame',
        'wiki/Concepts/The Age Of Nonlinear Returns',
        'wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment',
        'wiki/Concepts/The AI Industrial Revolution',
        'wiki/Concepts/The AI Productivity Curve',
        'wiki/Concepts/Regulatory Capture via Doom-Marketing',
      ].includes(s),
  },
  {
    title: 'Chinese characters',
    test: (s) => s.startsWith('wiki/Language/Chinese/'),
  },
  {
    title: 'Language learning',
    test: (s) => s.startsWith('wiki/Language/') || s.startsWith('wiki/Resources/'),
  },
  {
    title: 'Decision making',
    test: (s) => s.startsWith('wiki/Decision Making/'),
  },
  {
    title: 'Self-management',
    test: (s) => s.startsWith('wiki/Self Management/'),
  },
  {
    title: 'Minimalism',
    test: (s) => s.startsWith('wiki/Minimalism/'),
  },
  {
    title: 'Investing & budgeting',
    test: (s) => s.startsWith('wiki/Money/'),
  },
  {
    title: 'Red Teaming',
    test: (s) => s.startsWith('wiki/Red Team/'),
  },
  {
    title: 'Reference',
    test: (s) =>
      s.startsWith('wiki/Books/') ||
      s.startsWith('wiki/Experiences/') ||
      s === 'wiki/Glossary' ||
      s === 'wiki/Bibliography' ||
      s === 'wiki/Timeline' ||
      [
        'wiki/Concepts/Meiwaku',
        'wiki/Concepts/Style',
        'wiki/Concepts/Bias and Framing',
        'wiki/Concepts/Good Faith',
        'wiki/Concepts/Charisma',
        'wiki/Concepts/Anti-Marketing',
        'wiki/Concepts/Design of Everyday Things',
        'wiki/Concepts/Suicidal Empathy',
        'wiki/Books/The Parasitic Mind',
        'wiki/Books/Suicidal Empathy',
        'wiki/Books/The Book of Elon',
        'journal/experiences',
      ].includes(s),
  },
  {
    title: 'Metacognition and learning',
    test: (s) => s.startsWith('wiki/'),
  },
];

function walkMd(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkMd(p, out);
    else if (name.endsWith('.md')) out.push(p);
  }
  return out;
}

function deriveTitle(data, body, slug) {
  if (typeof data.title === 'string' && data.title.trim()) return data.title.trim();
  const h1 = body.match(/^\s*#\s+(.+?)\s*$/m);
  if (h1) return h1[1].replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2').trim();
  return slug.split('/').pop().replace(/-/g, ' ');
}

function deriveSummary(data, body) {
  if (typeof data.description === 'string' && data.description.trim()) return data.description.trim();
  if (typeof data.blurb === 'string' && data.blurb.trim()) return data.blurb.trim();
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#') || line.startsWith('---') || line.startsWith('>')) continue;
    if (line.startsWith('<div') || line.startsWith('![')) continue;
    return line
      .replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2')
      .replace(/[*_`]/g, '')
      .slice(0, 220)
      .trim();
  }
  return '';
}

function sectionFor(slug) {
  for (const sec of SECTIONS) if (sec.test(slug)) return sec.title;
  return 'Metacognition and learning';
}

function escapePipe(s) {
  return s.replace(/\|/g, '\\|');
}

function row(slug, title, type, summary) {
  const link = `[[${slug.replace(/\\/g, '/')}\\|${escapePipe(title)}]]`;
  const t = type || 'note';
  const sum = summary.replace(/\|/g, '\\|').replace(/\n/g, ' ');
  return `| ${link} | ${t} | ${sum} |`;
}

function buildCatalog() {
  const files = walkMd(WIKI);
  const extras = [join(ROOT, 'journal', 'experiences.md')].filter((p) => {
    try {
      return statSync(p).isFile();
    } catch {
      return false;
    }
  });
  const bySection = new Map(SECTIONS.map((s) => [s.title, []]));

  for (const file of [...files, ...extras]) {
    const raw = readFileSync(file, 'utf8');
    const { data, content } = matter(raw);
    if (data.draft === true) continue;
    const slug = relative(ROOT, file).replace(/\.md$/, '').replace(/\\/g, '/');
    const title = deriveTitle(data, content, slug);
    const type = typeof data.type === 'string' ? data.type : 'note';
    const summary = deriveSummary(data, content);
    const sec = sectionFor(slug);
    bySection.get(sec).push({ slug, title, type, summary });
  }

  const lines = [MARKER, ''];
  for (const sec of SECTIONS) {
    const items = bySection.get(sec.title) ?? [];
    if (!items.length) continue;
    items.sort((a, b) => a.title.localeCompare(b.title, 'en'));
    lines.push(`### ${sec.title}`, '', '| Page | Type | Summary |', '| --- | --- | --- |');
    for (const it of items) lines.push(row(it.slug, it.title, it.type, it.summary));
    lines.push('');
  }
  return lines.join('\n').trimEnd() + '\n';
}

function main() {
  const src = readFileSync(INDEX, 'utf8');
  const idx = src.indexOf(MARKER);
  if (idx === -1) {
    console.error('update-notes-catalog: marker not found in notes/index.md');
    process.exit(1);
  }
  const head = src.slice(0, idx).trimEnd() + '\n\n';
  const next = head + buildCatalog();
  if (next !== src) {
    writeFileSync(INDEX, next);
    console.log('update-notes-catalog: regenerated Full Catalog');
  } else {
    console.log('update-notes-catalog: already current');
  }
}

main();