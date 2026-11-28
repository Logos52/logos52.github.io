#!/usr/bin/env node
// copy-lint: flags reader-facing sentences the owner has ruled out.
// Usage: node tools/copy-lint.mjs [files or folders...]   (default: wiki journal src/pages)
// Exits 1 when anything is flagged, so it can run in CI or a pre-commit hook.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const RULES = [
  { id: 'not-on-site', why: 'Says what is NOT on the site. The reader learns nothing from it.',
    re: /\b(stays? private|private (material|notes?|pages?|data)|stays? (out|off)|kept (out|off)|public build|publish guards?|off the public site|never real|not (shown|included|published)|workbench drafts)\b/i },
  { id: 'production-note', why: 'Explains how the page or picture was made. That belongs in the stylesheet or design notes.',
    re: /\b((labels?|text|type) (is|are) set in|set in (IBM Plex|Monaspace)|Monaspace Neon|IBM Plex|ink only|blue wash|cropped flat|numbered (blue )?dot)\b/i },
  { id: 'first-person', why: 'First person. The owner wants neutral wording, no "I".',
    re: /(^|[^A-Za-z])(I|I['’](m|ve|d|ll)|my|me|mine|myself|we|our|ours)(?![A-Za-z'’])/ },
  { id: 'tech-stack', why: 'Names the tooling. Technical detail is irrelevant to the reader.',
    re: /\b(Obsidian|Astro|Quartz|GitHub Pages|static site|markdown)\b/i },
];
// Exact sentences the owner has approved despite matching a rule.
const ALLOW = [
  'How much of daily life still belongs on personal pages that stay off the public site.',
];

const EXT = new Set(['.md', '.mdx', '.html', '.astro']);
const walk = (p) => statSync(p).isDirectory()
  ? readdirSync(p).flatMap((f) => (f.startsWith('.') || f === 'node_modules' ? [] : walk(join(p, f))))
  : EXT.has(extname(p)) ? [p] : [];
const visible = (src) => src
  .replace(/^---\n[\s\S]*?\n---/, ' ')                       // front matter
  .replace(/<(style|script)[\s\S]*?<\/\1>/gi, ' ')            // code
  .replace(/```[\s\S]*?```/g, ' ')                        // fenced code
  .replace(/data:[^"')\s]+/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .replace(/ ([.!?,;:])/g, '$1');

const roots = process.argv.slice(2).length ? process.argv.slice(2) : ['wiki', 'journal', 'src/pages'];
let hits = 0;
for (const file of roots.flatMap((r) => { try { return walk(r); } catch { return []; } })) {
  const sentences = visible(readFileSync(file, 'utf8')).match(/[^.!?]+[.!?]+/g) || [];
  for (const raw of sentences) {
    const s = raw.trim();
    if (ALLOW.some((a) => s.includes(a) || a.includes(s))) continue;
    for (const r of RULES) if (r.re.test(s)) { hits++; console.log(`${file}\n  [${r.id}] ${s}\n  ${r.why}\n`); }
  }
}
console.log(hits ? `${hits} sentence(s) flagged.` : 'Copy lint: clean.');
process.exit(hits ? 1 : 0);
