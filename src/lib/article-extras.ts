import { readFileSync } from 'node:fs';
import { join } from 'node:path';

type MdNode = {
  type: string;
  value?: string;
  children?: MdNode[];
};

type Frontmatter = {
  description?: unknown;
  blurb?: unknown;
};

type AstroFront = {
  frontmatter?: Frontmatter;
};

type AstroFileData = {
  astro?: AstroFront;
};

type FileLike = {
  path?: string;
  data?: AstroFileData;
};

type NoteSpec = {
  match: string;
  phrase: string;
  note: string;
};

const BEAR_FIGURE = readFileSync(join(process.cwd(), 'src/data/bear-hunter-figure.html'), 'utf8');

const KOLB_FIGURE = `<figure>
<button type="button" class="fig-open" aria-label="Open the cycle larger"><svg class="diagram neon-diagram" id="kolb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 688 168" width="688" height="168" role="img" aria-label="Look back, name what went wrong, change the method, then try again.">
<defs><pattern id="dotskolb" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="8" cy="8" r="0.9" fill="#cfcfcf"/></pattern>
<marker id="ahkolb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1.5 1.5 L8.5 5 L1.5 8.5" fill="none" stroke="#0094d0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<rect width="688" height="168" rx="3" fill="#f7f7f7"/><rect width="688" height="168" rx="3" fill="url(#dotskolb)"/>
<g fill="none" stroke="#0094d0" stroke-width="2">
<path d="M150 84 H250" marker-end="url(#ahkolb)"/>
<path d="M390 84 H490" marker-end="url(#ahkolb)"/>
<path d="M560 108 C 620 150, 80 150, 120 108" marker-end="url(#ahkolb)"/>
</g>
<rect x="40" y="62" width="110" height="44" rx="10" fill="#fff" stroke="#1a1a1a" stroke-width="1.5"/>
<rect x="250" y="62" width="140" height="44" rx="10" fill="#fff" stroke="#1a1a1a" stroke-width="1.5"/>
<rect x="490" y="62" width="130" height="44" rx="10" fill="#e3f7fe" stroke="#0094d0" stroke-width="2"/>
<text class="t" x="95" y="89" text-anchor="middle">Look back</text>
<text class="t" x="320" y="89" text-anchor="middle">Name the miss</text>
<text class="t" x="555" y="89" text-anchor="middle">Try again</text>
</svg></button>
<figcaption><span class="figno">Figure 1.</span> One pass. Blue is the usual path, back to the next attempt.</figcaption>
</figure>`;

function textOf(node: MdNode): string {
  if (node.value && (node.type === 'text' || node.type === 'html' || node.type === 'inlineCode')) return node.value;
  return (node.children ?? []).map(textOf).join('');
}

function aside(id: string, note: string): MdNode {
  return {
    type: 'html',
    value: `<aside class="note" id="note-${id}" data-ref="ref-${id}"><p><a class="note-num" href="#ref-${id}">${id}</a> ${note}</p></aside>`,
  };
}

function attach(paragraph: MdNode, id: string) {
  const kids = paragraph.children ?? [];
  kids.push({
    type: 'html',
    value: `<a class="sidenote-ref" id="ref-${id}" href="#note-${id}">${id}</a>`,
  });
  paragraph.children = kids;
}

const BEAR_NOTES: NoteSpec[] = [
  {
    match: 'Bear Hunter System.md',
    phrase: 'total time often falls',
    note: 'Slower on the first pass. The time comes back later, because retrieval gets cheaper.',
  },
  {
    match: 'Bear Hunter System.md',
    phrase: 'order control',
    note: 'Order control is choosing the sequence in which you meet the ideas. Linear notes take it away.',
  },
  {
    match: 'Bear Hunter System.md',
    phrase: 'is earned',
    note: 'Feeling sure after a first read is often false fluency. Here the map has been judged first.',
  },
];

const OTHER_NOTES: NoteSpec[] = [
  {
    match: 'The Beat Board.md',
    phrase: 'does not invent',
    note: 'One event per card. The board tests events. It does not invent them.',
  },
  {
    match: 'Four Stages of Competence.md',
    phrase: 'high-effort skills at once',
    note: 'Add a technique only when the ones already in use are getting cheap. A pile of high-effort skills drains the attempt.',
  },
  {
    match: 'Kolbs Experiential Cycle.md',
    phrase: 'is rumination',
    note: 'A backward glance that never chooses a next step is rumination. The cycle has to end in something you can try.',
  },
];

function summaryFrom(file: FileLike): string {
  const fm = file.data?.astro?.frontmatter;
  const fromAstro = typeof fm?.description === 'string' ? fm.description : typeof fm?.blurb === 'string' ? fm.blurb : '';
  if (fromAstro.trim()) return fromAstro.trim();
  if (!file.path) return '';
  try {
    const raw = readFileSync(file.path, 'utf8');
    const fence = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fence) return '';
    const line = fence[1].match(/^(?:description|blurb):\s*(?:"([^"]*)"|'([^']*)'|(.+))\s*$/m);
    return (line?.[1] || line?.[2] || line?.[3] || '').trim();
  } catch {
    return '';
  }
}

function dropOpeningQuote(root: MdNode, summary: string) {
  if (!summary) return;
  const kids = root.children ?? [];
  const quoteAt = kids.findIndex((node) => node.type === 'blockquote');
  if (quoteAt < 0) return;
  const earlier = kids.slice(0, quoteAt).some((node) => node.type === 'paragraph' || node.type === 'html' || node.type === 'list');
  if (earlier) return;
  kids.splice(quoteAt, 1);
}

function applyNotes(root: MdNode, specs: NoteSpec[], filePath: string) {
  let n = 0;
  const kids = root.children ?? [];
  for (let i = 0; i < kids.length; i++) {
    const node = kids[i];
    if (node.type !== 'paragraph') continue;
    const body = textOf(node);
    const spec = specs.find((s) => filePath.endsWith(s.match) && body.includes(s.phrase));
    if (!spec) continue;
    n += 1;
    attach(node, String(n));
    kids.splice(i + 1, 0, aside(String(n), spec.note));
    i += 1;
  }
}

/** Article template extras: drop a leading summary quote, and add a figure or side note only where a paragraph needs it. */
export function remarkArticleExtras() {
  return (tree: MdNode, file: FileLike) => {
    const filePath = file.path ?? '';
    const kids = tree.children ?? [];
    dropOpeningQuote(tree, summaryFrom(file));

    if (filePath.endsWith('Bear Hunter System.md')) {
      for (const node of kids) {
        if (node.type === 'html' && node.value?.includes('<figure') && node.value.includes('dim-bhs')) {
          node.value = BEAR_FIGURE;
          break;
        }
      }
      applyNotes(tree, BEAR_NOTES, filePath);
    }

    if (filePath.endsWith('Kolbs Experiential Cycle.md')) {
      const first = kids.findIndex((n) => n.type === 'paragraph');
      if (first >= 0) kids.splice(first + 1, 0, { type: 'html', value: KOLB_FIGURE });
      applyNotes(tree, OTHER_NOTES, filePath);
    }

    if (filePath.endsWith('The Beat Board.md') || filePath.endsWith('Four Stages of Competence.md')) {
      applyNotes(tree, OTHER_NOTES, filePath);
    }
  };
}
