#!/usr/bin/env node
/**
 * One-shot executor for the "Working well with AI" cut (door ai).
 * Merges sources into targets, archives unpublished research, emits redirect pairs.
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  renameSync,
  unlinkSync,
  existsSync,
  readdirSync,
} from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function sluggify(s) {
  return s
    .split('/')
    .map((seg) =>
      seg
        .replace(/\s/g, '-')
        .replace(/&/g, '-and-')
        .replace(/%/g, '-percent')
        .replace(/\?/g, '')
        .replace(/#/g, ''),
    )
    .join('/')
    .replace(/\/$/, '');
}

export function filePathToUrl(fp) {
  let s = fp.replace(/^\/+/, '').replace(/\.md$/i, '');
  s = sluggify(s);
  return `/${s}/`;
}

function stripFrontmatter(text) {
  return text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
}

function titleFromPath(rel) {
  const base = basename(rel, '.md');
  const fm = readFileSync(join(ROOT, rel), 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fm) {
    const t = fm[1].match(/^title:\s*["']?([^"'\n]+)["']?/m);
    if (t) return t[1].trim();
  }
  return base;
}

const MERGES = {
  'wiki/Systems/AI & Agentic Systems/Agentic Engineering.md': [
    'wiki/Concepts/A Motorcycle for the Mind.md',
    'wiki/Concepts/A Return to Code.md',
    'wiki/Concepts/Agent-Native Infrastructure.md',
    'wiki/Concepts/Human vs AI Capability Lens.md',
    'wiki/Concepts/Higher-Order Generativity vs Higher-Order Judgment.md',
    'wiki/Systems/AI & Agentic Systems/Automatic and Deliberate Work with AI.md',
    'wiki/Books/The Book of Elon.md',
    'wiki/Concepts/Global Workspace and J-space.md',
  ],
  'wiki/Systems/AI & Agentic Systems/Using Grok Bot.md': [
    'wiki/Systems/AI & Agentic Systems/Grok Bot Primer.md',
    'wiki/Systems/AI & Agentic Systems/Grok Bot, Condensed.md',
    'wiki/Systems/AI & Agentic Systems/Grok Bot Galaxy.md',
  ],
  'wiki/Working with Agents/Scope a bot like a job description.md': [
    'wiki/Working with Agents/Organize a fleet of bots.md',
    'wiki/Working with Agents/How other people staff their bot fleets.md',
    'wiki/Working with Agents/Set up a first engineering bot.md',
  ],
  'wiki/Working with Agents/Give an agent a task without micromanaging it.md': [
    'wiki/Working with Agents/Review less without losing control.md',
    'wiki/Working with Agents/Trust agents more over time.md',
  ],
  'wiki/Working with Agents/Let an agent check its own work.md': [
    'wiki/Working with Agents/Handle a bug report - reproduce first.md',
    'wiki/Concepts/The Same Model Twice.md',
  ],
  'wiki/Planning and Automation.md': [
    'wiki/Systems/AI & Agentic Systems/Automation and the Job Iceberg.md',
    'wiki/Systems/AI & Agentic Systems/Thursday Arena.md',
    'wiki/Working with Agents/Plan a piece of work with an agent.md',
    'wiki/Working with Agents/Set up a routine or outer loop.md',
    'wiki/Syntheses/ICS System.md',
    'wiki/Syntheses/The 30-Day Plan.md',
    'wiki/Syntheses/Prestudy, BHS, and SIR - Turning Information into Usable Structure.md',
    'wiki/ICS Program Map.md',
    'wiki/Dimensions/30-Day Challenges.md',
    'wiki/Dimensions/Self-Management/Reverse Goal Setting.md',
  ],
};

const ARCHIVE_UNPUBLISHED = [
  'wiki/Research/Claude Fable 5.1 Bank.md',
  'wiki/Research/Grok Bot Field Packet 2026-08-15.md',
  'wiki/Research/Grok Bot Field Packet 2026-08-31.md',
  'wiki/Research/Grok Bot Practitioner Bank.md',
  'wiki/Research/Grok Build and Cursor Bank.md',
];

const PLANNING_LEDE =
  'Planning and Automation is how a block of work is sequenced and what a machine runs without a person.';

function ensurePlanningPage() {
  const rel = 'wiki/Planning and Automation.md';
  const abs = join(ROOT, rel);
  if (existsSync(abs)) return;
  const body = `---
title: Planning and Automation
type: hub
status: seed
created: 2026-11-22
updated: 2026-11-22
source-count: 0
tags:
  - agents
  - planning
  - automation
---

# Planning and Automation

${PLANNING_LEDE}
`;
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, body);
  console.log('created', rel);
}

function appendMerge(targetRel, sourceRel) {
  const targetAbs = join(ROOT, targetRel);
  const sourceAbs = join(ROOT, sourceRel);
  if (!existsSync(sourceAbs)) {
    console.error('missing source', sourceRel);
    process.exit(1);
  }
  const title = titleFromPath(sourceRel);
  const body = stripFrontmatter(readFileSync(sourceAbs, 'utf8')).trim();
  const chunk = `\n\n---\n\n## ${title}\n\n${body}\n`;
  writeFileSync(targetAbs, readFileSync(targetAbs, 'utf8').replace(/\s*$/, '') + chunk);
  unlinkSync(sourceAbs);
  console.log('merged', sourceRel, '→', targetRel);
}

function moveUnpublished(rel) {
  const destRel = join('archive/unpublished', rel);
  const src = join(ROOT, rel);
  const dest = join(ROOT, destRel);
  if (!existsSync(src)) {
    console.error('missing archive', rel);
    process.exit(1);
  }
  mkdirSync(dirname(dest), { recursive: true });
  renameSync(src, dest);
  console.log('archived', rel, '→', destRel);
}

function listMdFiles() {
  const out = execFileSync(
    'git',
    ['ls-files', '-z', '--cached', '--others', '--exclude-standard', '--', '*.md'],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 },
  );
  return out.split('\0').filter(Boolean);
}

/** Update wikilinks that pointed at a removed page. */
function retargetWikilinks(removedRel, targetRel) {
  const removedStem = removedRel.replace(/\.md$/, '');
  const targetStem = targetRel.replace(/\.md$/, '');
  const removedBase = basename(removedStem);
  const targetBase = basename(targetStem);
  const patterns = [
    // [[path|alias]] or [[path]]
    new RegExp(`\\[\\[${escapeRe(removedStem)}(\\|[^\\]]+)?\\]\\]`, 'g'),
    new RegExp(`\\[\\[${escapeRe(removedBase)}(\\|[^\\]]+)?\\]\\]`, 'g'),
  ];
  const replacements = [
    (m) => m.replace(removedStem, targetStem),
    (m) => {
      if (m.includes('|')) {
        return m.replace(`[[${removedBase}|`, `[[${targetStem}|`).replace(`[[${removedStem}|`, `[[${targetStem}|`);
      }
      return `[[${targetStem}|${removedBase}]]`;
    },
  ];
  for (const file of listMdFiles()) {
    const abs = join(ROOT, file);
    if (!existsSync(abs)) continue;
    let text = readFileSync(abs, 'utf8');
    let changed = false;
    for (let i = 0; i < patterns.length; i++) {
      const next = text.replace(patterns[i], (match) => {
        changed = true;
        if (i === 0) return match.replace(removedStem, targetStem);
        if (match.includes(removedStem)) return match.replace(removedStem, targetStem);
        if (match.startsWith(`[[${removedBase}|`)) return match.replace(`[[${removedBase}|`, `[[${targetStem}|`);
        if (match === `[[${removedBase}]]`) return `[[${targetStem}|${targetBase}]]`;
        return match;
      });
      text = next;
    }
    if (changed) writeFileSync(abs, text);
  }
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function main() {
  ensurePlanningPage();
  const redirects = [];

  for (const [target, sources] of Object.entries(MERGES)) {
    for (const src of sources) {
      if (!existsSync(join(ROOT, src))) {
        console.warn('skip (already merged)', src);
        redirects.push({ from: filePathToUrl(src), to: filePathToUrl(target) });
        continue;
      }
      retargetWikilinks(src, target);
      appendMerge(target, src);
      redirects.push({ from: filePathToUrl(src), to: filePathToUrl(target) });
    }
  }

  for (const rel of ARCHIVE_UNPUBLISHED) {
    moveUnpublished(rel);
  }

  const outDir = join(ROOT, 'src', 'redirects', 'doors');
  mkdirSync(outDir, { recursive: true });
  const sorted = redirects.sort((a, b) => a.from.localeCompare(b.from));
  writeFileSync(join(outDir, 'ai.json'), JSON.stringify(sorted, null, 2) + '\n');
  console.log(`wrote ${sorted.length} redirects → src/redirects/doors/ai.json`);
}

main();