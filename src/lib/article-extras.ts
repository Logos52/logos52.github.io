import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const BEAR_FIGURE = readFileSync(join(process.cwd(), 'src/data/bear-hunter-figure.html'), 'utf8');
const KOLB_FIGURE = readFileSync(join(process.cwd(), 'src/data/kolb-figure.html'), 'utf8');
const FOUR_FIGURE = readFileSync(join(process.cwd(), 'src/data/four-stages-figure.html'), 'utf8');

const BEAR_NOTES = [
  { match: 'Bear Hunter System.md', phrase: 'total time often falls', note: 'Slower on the first pass. The time comes back later, because retrieval gets cheaper.' },
  { match: 'Bear Hunter System.md', phrase: 'order control', note: 'Order control is choosing the sequence in which you meet the ideas. Linear notes take it away.' },
  { match: 'Bear Hunter System.md', phrase: 'is earned', note: 'Feeling sure after a first read is often false fluency. Here the map has been judged first.' },
];

const OTHER_NOTES = [
  { match: 'The Beat Board.md', phrase: 'tests events; it does not invent them', note: 'One event per card. The board tests events. It does not invent them.' },
  { match: 'The Beat Board.md', phrase: 'storage, not test', note: 'A squeeze pass cuts each card to about seven words. If no beat changes, the board is only holding the story.' },
  { match: 'The Beat Board.md', phrase: 'Reverse outline after each session', note: 'After each session, write what every scene actually does in twelve to fifteen words. Then move any card that no longer matches.' },
  { match: 'The Beat Board.md', phrase: 'The crew spends against the outline', note: 'Once the outline is approved, nobody adds, deletes or reshapes a beat. A beat that fails goes back for a decision instead of being quietly redone.' },
  { match: 'The Beat Board.md', phrase: 'Order for change arc', note: 'The glimpse of truth comes first, so the low point reads as the last stand of the old belief. Put the two in one beat and the climax is acted from the old self.' },
  { match: 'Four Stages of Competence.md', phrase: 'high-effort skills at once', note: 'Add a technique only when the ones already in use are getting cheap. A pile of high-effort skills drains the attempt.' },
  { match: 'Kolbs Experiential Cycle.md', phrase: 'is rumination', note: 'A backward glance that never chooses a next step is rumination. The cycle has to end in something you can try.' },
  { match: 'Give an agent a task without micromanaging it.md', phrase: 'the context to do the work well', note: 'Two things make an agent miss: a vague intent, and missing context. The spoken brief fixes the first. The link fixes the second.' },
  { match: 'Give an agent a task without micromanaging it.md', phrase: 'The brief below, paraphrased', note: 'Every limit in the brief protects something: what to skip, and what to watch for in the feedback text.' },
  { match: 'Give an agent a task without micromanaging it.md', phrase: 'Trust grows in steps', note: 'Early on, watch every chat. Once the ask-first rules hold, rely on proof and sampling.' },
];

function field(value: unknown, key: string): unknown {
  if (typeof value !== 'object' || value === null || !(key in value)) return undefined;
  return Reflect.get(value, key);
}

function textOf(node: unknown): string {
  const value = field(node, 'value');
  const type = field(node, 'type');
  if (typeof value === 'string' && (type === 'text' || type === 'html' || type === 'inlineCode')) return value;
  const children = field(node, 'children');
  if (!Array.isArray(children)) return '';
  return children.map(textOf).join('');
}

function childrenOf(node: unknown): unknown[] {
  const children = field(node, 'children');
  if (Array.isArray(children)) return children;
  return [];
}

function aside(id: string, note: string) {
  return {
    type: 'html',
    value: `<aside class="note" id="note-${id}" data-ref="ref-${id}"><p><a class="note-num" href="#ref-${id}">${id}</a> ${note}</p></aside>`,
  };
}

function attach(paragraph: unknown, id: string) {
  const kids = childrenOf(paragraph);
  kids.push({
    type: 'html',
    value: `<a class="sidenote-ref" id="ref-${id}" href="#note-${id}">${id}</a>`,
  });
  if (typeof paragraph === 'object' && paragraph !== null) Reflect.set(paragraph, 'children', kids);
}

function noteHit(node: unknown, specs: typeof BEAR_NOTES, filePath: string) {
  if (field(node, 'type') !== 'paragraph') return '';
  const body = textOf(node);
  const spec = specs.find((item) => filePath.endsWith(item.match) && body.includes(item.phrase));
  return spec?.note ?? '';
}

function applyNotes(root: unknown, specs: typeof BEAR_NOTES, filePath: string) {
  let n = 0;
  const kids = childrenOf(root);
  for (let i = 0; i < kids.length; i++) {
    const hit = noteHit(kids[i], specs, filePath);
    if (!hit) continue;
    n += 1;
    attach(kids[i], String(n));
    kids.splice(i + 1, 0, aside(String(n), hit));
    i += 1;
  }
}

function frontString(file: unknown): string {
  const fm = field(field(field(file, 'data'), 'astro'), 'frontmatter');
  const description = field(fm, 'description');
  if (typeof description === 'string' && description.trim()) return description.trim();
  const blurb = field(fm, 'blurb');
  if (typeof blurb === 'string' && blurb.trim()) return blurb.trim();
  return '';
}

function fieldText(line: RegExpMatchArray | null): string {
  if (!line) return '';
  if (line[1]) return line[1].trim();
  if (line[2]) return line[2].trim();
  if (line[3]) return line[3].trim();
  return '';
}

function summaryIn(raw: string): string {
  const fence = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const block = fence?.[1];
  if (!block) return '';
  return fieldText(block.match(/^(?:description|blurb):\s*(?:"([^"]*)"|'([^']*)'|(.+))\s*$/m));
}

function summaryFromPath(path: string): string {
  if (!path) return '';
  try {
    return summaryIn(readFileSync(path, 'utf8'));
  } catch {
    return '';
  }
}

function summaryFrom(file: unknown): string {
  const direct = frontString(file);
  if (direct) return direct;
  const path = field(file, 'path');
  return summaryFromPath(typeof path === 'string' ? path : '');
}

function isBody(node: unknown): boolean {
  const type = field(node, 'type');
  return type === 'paragraph' || type === 'html' || type === 'list';
}

function dropOpeningQuote(root: unknown, summary: string) {
  if (!summary) return;
  const kids = childrenOf(root);
  const quoteAt = kids.findIndex((node) => field(node, 'type') === 'blockquote');
  if (quoteAt < 0) return;
  if (kids.slice(0, quoteAt).some(isBody)) return;
  kids.splice(quoteAt, 1);
}

function swapBear(node: unknown) {
  const value = field(node, 'value');
  if (field(node, 'type') !== 'html' || typeof value !== 'string') return;
  if (!value.includes('<figure') || !value.includes('dim-bhs')) return;
  if (typeof node === 'object' && node !== null) Reflect.set(node, 'value', BEAR_FIGURE);
}

function tuneBear(tree: unknown, filePath: string) {
  if (!filePath.endsWith('Bear Hunter System.md')) return;
  for (const node of childrenOf(tree)) swapBear(node);
  applyNotes(tree, BEAR_NOTES, filePath);
}

function tuneKolb(tree: unknown, filePath: string) {
  if (!filePath.endsWith('Kolbs Experiential Cycle.md')) return;
  const kids = childrenOf(tree);
  const first = kids.findIndex((node) => field(node, 'type') === 'paragraph');
  if (first >= 0) kids.splice(first + 1, 0, { type: 'html', value: KOLB_FIGURE });
  applyNotes(tree, OTHER_NOTES, filePath);
}

function swapFour(node: unknown) {
  const value = field(node, 'value');
  if (field(node, 'type') !== 'html' || typeof value !== 'string') return;
  if (!value.includes('wv-fsc-t')) return;
  if (typeof node === 'object' && node !== null) Reflect.set(node, 'value', FOUR_FIGURE);
}

function tuneNotes(tree: unknown, filePath: string) {
  if (filePath.endsWith('The Beat Board.md')) applyNotes(tree, OTHER_NOTES, filePath);
  if (filePath.endsWith('Four Stages of Competence.md')) {
    for (const node of childrenOf(tree)) swapFour(node);
    applyNotes(tree, OTHER_NOTES, filePath);
  }
  if (filePath.endsWith('Give an agent a task without micromanaging it.md')) applyNotes(tree, OTHER_NOTES, filePath);
}

export function remarkArticleExtras() {
  return (tree: unknown, file: unknown) => {
    const path = field(file, 'path');
    const filePath = typeof path === 'string' ? path : '';
    dropOpeningQuote(tree, summaryFrom(file));
    tuneBear(tree, filePath);
    tuneKolb(tree, filePath);
    tuneNotes(tree, filePath);
  };
}
