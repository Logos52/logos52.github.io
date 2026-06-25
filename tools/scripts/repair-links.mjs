#!/usr/bin/env node
/**
 * repair-links.mjs — one-shot link repairs for published-path content.
 * Run: node tools/scripts/repair-links.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');

/** [search, replace] — applied globally per file. Order matters. */
const REPLACEMENTS = [
  ['[[private/Goals/Priority 0|Priority 0]]', '[[wiki/Self Management/Priority 0+1 System|Priority 0+1]]'],

  ['[[Mindset]]', '[[wiki/Dimensions/Mindset|Mindset]]'],
  ['[[Self-Regulation|Self-Regulation]]', '[[wiki/Dimensions/Self-Regulation|Self-Regulation]]'],
  ['[[wiki/Concepts/Minimalism|Minimalism]]', '[[wiki/Minimalism/Minimalism as Systems Design|Minimalism]]'],
  ["[[Kolb's Experiential Cycle|Kolb's Experiential Cycle]]", '[[wiki/Dimensions/Self-Management/Kolbs Experiential Cycle|Kolb\'s Experiential Cycle]]'],
  ['[[wiki/Systems/AI & Agentic Systems|AI & Agentic Systems]]', '[[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]]'],
  [
    '[[Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]',
    '[[raw/sources/Andrej Karpathy From Vibe Coding to Agentic Engineering|Andrej Karpathy: From Vibe Coding to Agentic Engineering]]',
  ],
  ['[[How I use LLMs|How I use LLMs]]', '[[raw/sources/How I use LLMs|How I use LLMs]]'],
  [
    '[[How to Learn Anything Faster Using Modern Research|How to Learn Anything Faster Using Modern Research]]',
    '[[raw/sources/How to Learn Anything Faster Using Modern Research|How to Learn Anything Faster Using Modern Research]]',
  ],
  [
    "[[If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes|If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes]]",
    "[[raw/sources/If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes|If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes]]",
  ],
  [
    "[[If You Have A Bad Memory, I’ll Help You Fix It In 28 Minutes|If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes]]",
    "[[raw/sources/If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes|If You Have A Bad Memory, I'll Help You Fix It In 28 Minutes]]",
  ],
  [
    '[[Learn to Learn in 4hrs 54mins - Full Course|Learn to Learn in 4hrs 54mins - Full Course]]',
    '[[raw/sources/Learn to Learn in 4hrs 54mins - Full Course|Learn to Learn in 4hrs 54mins - Full Course]]',
  ],
  [
    "[[Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People|Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People]]",
    "[[raw/sources/Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People|Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People]]",
  ],
  [
    "[[Watch This For 18 Minutes, and You’ll Outlearn 99.9% Of People|Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People]]",
    "[[raw/sources/Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People|Watch This For 18 Minutes, and You'll Outlearn 99.9% Of People]]",
  ],
  [
    "[[How to Think So Clearly People Assume You're A Genius|How to Think So Clearly People Assume You're A Genius]]",
    "[[raw/sources/How to Think So Clearly People Assume You're A Genius|How to Think So Clearly People Assume You're A Genius]]",
  ],
  [
    "[[How to Think So Clearly People Assume You’re A Genius|How to Think So Clearly People Assume You're A Genius]]",
    "[[raw/sources/How to Think So Clearly People Assume You're A Genius|How to Think So Clearly People Assume You're A Genius]]",
  ],
  [
    "[[raw/sources/‘Nothing Ever Happens’ Is Over|Local source]]",
    "[[raw/sources/‘Nothing Ever Happens’ Is Over|Local source]]",
  ],
  ['[[raw/sources/Sell the Truth|Local source]]', '[[raw/sources/Sell the Truth|Local source]]'],
  ['[[llm-wiki|llm-wiki]]', '[[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]]'],
  ['[[llm-wiki|Local clipping]]', '[[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]]'],
  ['[[log|log.md]]', '`log.md`'],
  ['[[Writing Standards]]', '[[02 - System/Writing Standards|Writing Standards]]'],
  ['[[Open Questions]]', '[[02 - System/Open Questions|Open Questions]]'],
  ['[[Finance MOC]]', '[[wiki/Money/Investing and Budgeting Mindsets|Investing & Budgeting Mindsets]]'],
  ['[[PRDs/PRD-Tsumugu]]', '[[projects/tsumugu|Tsumugu]]'],
  [
    '[[wiki/Live Clinic 60 The Right vs Wrong Way to Use AI|Live Clinic 60: The Right vs Wrong Way to Use AI]]',
    '[[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|Live Clinic 60: The Right vs Wrong Way to Use AI]]',
  ],
  ['[[tsumugu-analytics-seo]]', 'tsumugu analytics/SEO (see this journal entry)'],
  ['[[00 Command Center/Home]]', '[[notes/index|Knowledge Base Index]]'],
  ['[[SOUL.md]]', '`SOUL.md`'],
  [
    '[[02 - System/Writing Standards|Writing Standards]]',
    '[[02 - System/Writing Standards|Writing Standards]]',
  ],
  ['[[raw/Source Index]]', '[[raw/Source Index|Source Index]]'],
  ['[[raw/Source Index|Source Index]]', '[[raw/Source Index|Source Index]]'],
  [
    '[[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|Live Clinic 60: The Right vs Wrong Way to Use AI]]',
    '[[wiki/Domains/AI & Tooling/The Right vs Wrong Way to Work With AI|Live Clinic 60: The Right vs Wrong Way to Use AI]]',
  ],
];

const SCAN_DIRS = ['wiki', 'journal', 'notes', 'projects'];
const SCAN_FILES = ['README.md', 'about.md', 'AGENTS.md'];

function walkMd(dir, out = []) {
  const p = join(ROOT, dir);
  try {
    for (const name of readdirSync(p)) {
      const fp = join(p, name);
      if (statSync(fp).isDirectory()) walkMd(join(dir, name), out);
      else if (name.endsWith('.md')) out.push(fp);
    }
  } catch {
    /* skip */
  }
  return out;
}

function main() {
  const files = [
    ...SCAN_DIRS.flatMap((d) => walkMd(d)),
    ...SCAN_FILES.map((f) => join(ROOT, f)).filter((p) => {
      try {
        return statSync(p).isFile();
      } catch {
        return false;
      }
    }),
  ];

  let touched = 0;
  for (const file of files) {
    let text = readFileSync(file, 'utf8');
    const before = text;
    for (const [from, to] of REPLACEMENTS) {
      if (from === to) continue;
      text = text.split(from).join(to);
    }
    if (text !== before) {
      writeFileSync(file, text);
      touched++;
      console.log('repaired:', file.replace(ROOT + '/', ''));
    }
  }
  console.log(`repair-links: ${touched} file(s) updated`);
}

main();