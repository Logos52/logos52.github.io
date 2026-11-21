import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcPath =
  process.env.BUILDERS_LOGS_SRC ??
  join(root, 'scripts/.builders-logs-source.md');

const raw = readFileSync(srcPath, 'utf8');
const fmEnd = raw.indexOf('---', 3);
const body = fmEnd > 0 ? raw.slice(fmEnd + 3).trim() : raw;

const PEOPLE_ORDER = [
  { key: 'Lauren Tan', slug: 'Lauren Tan', handle: 'poteto', lab: 'grok' },
  { key: 'Matt Palmer', slug: 'Matt Palmer', handle: 'mattyp', lab: 'grok' },
  { key: 'Andrej Karpathy', slug: 'Andrej Karpathy', handle: 'karpathy', lab: 'anthropic' },
  { key: 'Roman Ugarte', slug: 'Roman Ugarte', handle: 'romanugarte_', lab: null },
  { key: 'Geoffrey Litt', slug: 'Geoffrey Litt', handle: 'geoffreylitt', lab: null },
  { key: 'John Bai', slug: 'John Bai', handle: 'johnbai', lab: 'grok' },
  { key: 'Peng Zheng', slug: 'Peng Zheng', handle: 'pengzheng_', lab: 'grok' },
  { key: 'Baltazar Zuniga Ruiz', slug: 'Baltazar Zuniga Ruiz', handle: 'baltaaazr', lab: 'grok' },
  { key: 'Sam Sokolin', slug: 'Sam Sokolin', handle: 'SamSokolin', lab: null },
  { key: 'Simon Willison', slug: 'Simon Willison', handle: 'simonw', lab: null },
  { key: 'swyx', slug: 'swyx', handle: 'swyx', lab: null },
  { key: 'Boris Cherny', slug: 'Boris Cherny', handle: 'bcherny', lab: 'anthropic' },
  { key: 'Lingxi Li', slug: 'Lingxi Li', handle: 'lingxi', lab: 'grok' },
];

function parsePeople(text) {
  const parts = text.split(/\n### /);
  const map = new Map();
  for (const part of parts.slice(1)) {
    const nl = part.indexOf('\n');
    const head = part.slice(0, nl);
    const rest = part.slice(nl + 1);
    const name = head.split(',')[0].trim();
    const detailsMatch = rest.match(/<details>[\s\S]*?<summary>[^<]*<\/summary>\s*([\s\S]*?)<\/details>/);
    const before = detailsMatch ? rest.slice(0, detailsMatch.index).trim() : rest.trim();
    const timeline = detailsMatch ? detailsMatch[1].trim() : '';
    map.set(name, { head, intro: before, timeline });
  }
  return map;
}

const peopleMap = parsePeople(body);
const outDir = join(root, "wiki/Systems/AI & Agentic Systems/Builders' Logs");
mkdirSync(outDir, { recursive: true });
const lastChecked = '2026-11-19';

function mindsetFromIntro(intro) {
  const paras = intro.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  if (paras.length <= 1) return 'Not much on mindset is public beyond what the timeline shows.';
  return paras.slice(1).join('\n\n');
}

function setupFromIntro(intro) {
  const lower = intro.toLowerCase();
  if (/(bot|agents?|cursor|grok|claude|fleet|pstack|conductor)/i.test(intro)) {
    const first = intro.split(/\n\n+/)[0];
    const sentences = first.match(/[^.!?]+[.!?]+/g) ?? [first];
    const hit = sentences.filter((s) => /(bot|agent|cursor|grok|claude|pstack|conductor)/i.test(s));
    if (hit.length) return hit.join(' ').trim();
  }
  return 'Setup details are not spelled out in public posts beyond what the timeline links.';
}

for (const person of PEOPLE_ORDER) {
  const block = peopleMap.get(person.key);
  if (!block) {
    console.warn('missing', person.key);
    continue;
  }
  const who = block.intro.split(/\n\n+/)[0].trim();
  const mindset = mindsetFromIntro(block.intro);
  const setup = setupFromIntro(block.intro);
  const wiki =
    `---
title: "${person.slug}"
type: person
status: seed
domain: ai
created: 2026-11-22
updated: 2026-11-22
method: builders-logs-publish-2026-11-22
source-count: 1
description: "Builders' Logs 2026 — ${person.slug} (@${person.handle})."
tags:
  - agents
  - builders-logs-2026
wedge_reviewed: false
---

# ${person.slug}, @${person.handle}

Part of [[wiki/Systems/AI & Agentic Systems/Builders' Logs 2026|Builders' Logs 2026]] and [[wiki/Systems/AI & Agentic Systems/Builders' Logs/Use Cases|Use Cases]].

## Who they are

${who}

Last checked: ${lastChecked}.

## Mindset

${mindset}

## Setup

${setup}

## Timeline

${block.timeline}
`;
  writeFileSync(join(outDir, `${person.slug}.md`), wiki);
  console.log('wrote', person.slug);
}

const grokNames = PEOPLE_ORDER.filter((p) => p.lab === 'grok').map((p) => p.slug);
const anthropicNames = PEOPLE_ORDER.filter((p) => p.lab === 'anthropic').map((p) => p.slug);
const otherNames = PEOPLE_ORDER.filter((p) => !p.lab).map((p) => p.slug);

const link = (name) =>
  `[[wiki/Systems/AI & Agentic Systems/Builders' Logs/${name}|${name}]]`;

const hub = `---
title: "Builders' Logs 2026"
type: reference
status: seed
domain: ai
created: 2026-11-22
updated: 2026-11-22
method: builders-logs-publish-2026-11-22
source-count: 1
description: "Dated 2026 work logs for thirteen people who build with AI agents, ordered by how much they bridge AI and everyday users, with Grok and Anthropic lab sections."
tags:
  - agents
  - builders-logs-2026
  - engineering
wedge_reviewed: false
---

# Builders' Logs 2026

Builders' Logs 2026 follows what thirteen people who build with AI agents did from January through 19 November 2026. Every dated line on a person page links to the post, video, or page it comes from. Everyone listed is on X. There is no trust grading: read the sources and decide for yourself.

People are ordered by how much they bridge heavy agent engineering and everyday use (email, errands, meetings, team chores). The hub opens with the two labs this sprint tracks most closely: **Grok** (xAI / SpaceX Super Intelligence) and **Anthropic**. A short third band holds builders whose public work does not sit with either lab right now.

[[wiki/Systems/AI & Agentic Systems/Builders' Logs/Use Cases|Use Cases]] groups public examples into individual bots and systems of bots; person pages link back when a timeline entry names a concrete bot or fleet pattern.

## Grok

Big releases and themes in the logs:

- 2026-08-11 — Grok Bot launch, bots that run on their own machines while the owner is away. (${link('Lauren Tan')}, [post](https://x.com/poteto/status/2087227636590465030))
- 2026-08-31 — ${link('Lingxi Li')} posts Grok Bot for Engineering ([post](https://x.com/lingxi/status/2094493172516966781))
- 2026-11-18 — ${link('Lauren Tan')} publishes Automate Anything with Grok Bot for people who do not code ([post](https://x.com/poteto/status/2123159537016533493))

Upcoming (called out in public posts; dates move):

- Grok model revisions (4.8 and later) as xAI ships them — watch xAI and builder timelines below.

### People (Grok-affiliated, bridge order within lab)

${grokNames.map(link).join(' · ')}

## Anthropic

Big releases and themes in the logs:

- 2026-01-18 — ${link('Boris Cherny')} marks Claude Code breaking through after a year of work ([post](https://x.com/bcherny/status/2012682569376993734))
- ${link('Andrej Karpathy')} joins the public conversation on small models, education, and agent tooling across 2026 (see timeline).

Upcoming:

- Model and Claude Code releases as Anthropic ships them — see ${link('Boris Cherny')} and ${link('Andrej Karpathy')} timelines.

### People (Anthropic-affiliated)

${anthropicNames.map(link).join(' · ')}

## Other builders (no single lab on the page)

${otherNames.map(link).join(' · ')}

## Related

- [[wiki/Systems/AI & Agentic Systems/Agentic Engineering|Agentic Engineering]] — doctrine for building with agents while keeping the engineering standard.

## Sources

- Builders' Logs 2026 source compile, 2026-11-19 (vault inputs / Project store).
`;

writeFileSync(join(root, "wiki/Systems/AI & Agentic Systems/Builders' Logs 2026.md"), hub);

const useCases = `---
title: "Use Cases"
type: reference
status: seed
domain: ai
created: 2026-11-22
updated: 2026-11-22
method: builders-logs-publish-2026-11-22
source-count: 1
description: "Builders' Logs 2026 — individual bots and systems of bots, with links to person timelines."
tags:
  - agents
  - builders-logs-2026
wedge_reviewed: false
---

# Use Cases (Builders' Logs 2026)

Public posts from the thirteen builders, grouped by shape. Each line links to a dated source on a person timeline.

## Individual bots (one bot, one job)

- Email and inbox triage bots — see ${link('Sam Sokolin')} on recording network requests once then calling APIs directly (2026-09-01, [post](https://x.com/SamSokolin/status/2094824011427373415)).
- Design production bots (Figma, motion) — ${link('John Bai')}, Designing Grok Bot with Grok Bot (2026-08-24, [guide](https://x.ai/bot/guides/designing-grok-bot-with-grok-bot)).
- Personal site as a bot back end — ${link('Peng Zheng')} on How I AI (2026-09-14, [video](https://www.youtube.com/watch?v=zJEHbvT5_Yg)).
- Phone-driven coding sessions — ${link('Matt Palmer')} on running Claude Code from a phone (2026-01-20, [post](https://x.com/mattyp/status/2013466276824523180)).
- Beginner automation walkthroughs — ${link('Lauren Tan')}, Automate Anything with Grok Bot (2026-11-18, [post](https://x.com/poteto/status/2123159537016533493)).

## Systems of bots (several bots working together)

- Grok Bot team fleet / company-shaped agent work — ${link('Lauren Tan')} and ${link('Matt Palmer')} timelines (thousands of PRs, livestreams, Galaxy studio run).
- pstack skills that spawn subagents and codemods — ${link('Lauren Tan')} poteto-mode and pstack releases (see timeline from 2026-02 through 2026-11).
- Conductor syncing multiple coding agents — ${link('Matt Palmer')} Conductor walkthrough (2026-06-23, [post](https://x.com/mattyp/status/2069420212651233504)).
- Grok Bot for Engineering — ${link('Lingxi Li')} (2026-08-31, [post](https://x.com/lingxi/status/2094493172516966781)).
- Kanban + follow-up question agent demos — ${link('Geoffrey Litt')} (2026-01-07, [post](https://x.com/geoffreylitt/status/2008941866515824748)).

Return to [[wiki/Systems/AI & Agentic Systems/Builders' Logs 2026|Builders' Logs 2026]].
`;

writeFileSync(join(outDir, 'Use Cases.md'), useCases);
console.log('wrote hub and use cases');