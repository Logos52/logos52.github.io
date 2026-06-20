#!/usr/bin/env node
/**
 * lint-front-facing.mjs — checks FRONT-FACING copy against
 *   "02 - System/Writing Standards.md" → High-Signal Front-Facing Pages.
 *
 * Scope is chrome only: each front page's <title>, meta description, the <h1>, and the hero / page
 * ledes + kickers — NOT note bodies (those follow High-Signal Wiki Pages). It REPORTS; it never
 * rewrites — the call on every flag is yours. Run after a build:
 *   npm run build && node tools/scripts/lint-front-facing.mjs   (or: npm run lint:front)
 *
 * Exit is always 0 — this is an analysis tool, not a gate. Wire it into CI later if you want one.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const PAGES = [
  ['/', 'index.html'],
  ['/map/', 'map/index.html'],
  ['/projects/', 'projects/index.html'],
  ['/about/', 'about/index.html'],
  ['/notes/', 'notes/index.html'],
  ['/journal/', 'journal/index.html'],
];

const decodeEntities = (s) =>
  s
    .replace(/&mdash;|&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&rsquo;|&#8217;/g, '’')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&[a-z]+;/g, ' ');
const text = (s) => decodeEntities(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

// Pull the front-facing strings out of one built page.
function frontFacing(html) {
  const out = [];
  const one = (re, where) => {
    const m = re.exec(html);
    const t = m && text(m[1]);
    if (t) out.push([where, t]);
  };
  one(/<title>([^<]*)<\/title>/i, 'title');
  one(/<meta name="description" content="([^"]*)"/i, 'description');
  one(/<h1[^>]*>([\s\S]*?)<\/h1>/i, 'h1');
  for (const m of html.matchAll(/class="[^"]*(?:lede|kicker|blurb)[^"]*"[^>]*>([\s\S]*?)<\/(?:p|span|div|h[1-6])>/gi)) {
    const t = text(m[1]);
    if (t) out.push(['lede', t]);
  }
  // the first paragraph inside a page <header> — an unclassed page lede (e.g. /projects/)
  for (const m of html.matchAll(/<header[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    const t = text(m[1]);
    if (t) out.push(['header lede', t]);
  }
  return out;
}

// Rules, each traceable to a named subsection of the standard. strike = clear violation; review = look.
const RULES = [
  { id: 'em-dash', strike: true, re: /—/, rule: 'Complete Sentences — em dashes are cut from front-facing prose' },
  { id: 'screen-commentary', strike: true, re: /\b(drag|pinch|zoom|scroll|swipe|pan|hover|tap|click)\b/i, rule: 'Say Nothing the Screen Shows' },
  { id: 'instruction-verb', strike: true, re: /\b(browse|explore|discover|wander|dive in|jump in|read on|find out)\b/i, rule: 'The Page Wants Nothing — no instructions to the reader' },
  { id: 'posing', strike: true, re: /\b(carefully|thoughtfully|honestly|transparently|calmly|humbly|lovingly|obsessively)\b|the thinking stays|maintained in the open/i, rule: 'No Posing' },
  { id: 'grade-or-sell', strike: true, re: /\b(best|deepest|richest|powerful|seamless|beautiful|amazing|cutting[- ]edge|revolutionary|effortless|world[- ]class|ultimate|growing|deeper)\b/i, rule: 'No grades or superlatives — nouns, counts, states only' },
  { id: 'screen-position', strike: false, re: /\b(below|above|to the (?:left|right))\b/i, rule: 'Possible screen chatter ("… below")' },
  { id: 'generic-claim', strike: false, re: /\b(built around|powered by|designed to|helps you|your go-to|everything you need|a collection of)\b/i, rule: 'Possibly generic — would it sit on a stranger’s site?' },
];

let strikes = 0;
let reviews = 0;
const blocks = [];
for (const [url, file] of PAGES) {
  const path = join(DIST, file);
  if (!existsSync(path)) {
    blocks.push(`  (skip ${url} — not built)`);
    continue;
  }
  const html = readFileSync(path, 'utf8');
  const lines = [];
  for (const [where, t] of frontFacing(html)) {
    for (const r of RULES) {
      if (r.re.test(t)) {
        lines.push(`    ${r.strike ? '✗' : '·'} [${r.id}] ${where}: "${t}"\n        → ${r.rule}`);
        r.strike ? strikes++ : reviews++;
      }
    }
  }
  if (lines.length) blocks.push(`\n${url}\n${lines.join('\n')}`);
}

console.log('front-facing lint  (02 - System/Writing Standards.md → High-Signal Front-Facing Pages)');
console.log(blocks.length ? blocks.join('\n') : '  clean.');
console.log(`\n${strikes} strike(s), ${reviews} to review.`);
process.exit(0);
