/**
 * wikilinks.ts — remark plugin that resolves Obsidian `[[wikilinks]]` to real links.
 *
 * Handles all three forms in the vault — `[[path]]`, `[[path|alias]]`, `[[path#heading|alias]]` —
 * plus the escaped-pipe quirk (`[[…\|alias]]`, treated as `|`). Resolution mirrors Quartz's
 * `markdownLinkResolution: 'shortest'`: exact slug → path suffix → shortest by basename.
 *
 * Unresolved targets render as `<span class="missing">` (dim, non-clickable) so broken links are
 * visible, not silently dropped. Heading anchors are slugified with github-slugger (Quartz parity).
 *
 * The slug map is built ONCE (module-memoized) from the copied public notes in src/content/notes.
 */
import { findAndReplace } from 'mdast-util-find-and-replace';
import { readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { slug as headingSlug } from 'github-slugger';
import { slugifyFilePath, slugToUrl, basename } from './slug';

export interface WikilinkResolver {
  /** A target string (possibly partial/aliased path) → resolved full slug, or null if unresolved. */
  resolve(target: string): string | null;
  /** Every known full slug (for diagnostics / link-integrity tooling). */
  slugs: Set<string>;
}

let resolverMemo: WikilinkResolver | null = null;

export function buildSlugResolver(notesDir = 'src/content/notes'): WikilinkResolver {
  if (resolverMemo) return resolverMemo;
  const slugs = new Set<string>();
  const byBasename = new Map<string, string[]>();

  if (existsSync(notesDir)) {
    const walk = (dir: string) => {
      let entries;
      try {
        entries = readdirSync(dir, { withFileTypes: true });
      } catch {
        return;
      }
      for (const ent of entries) {
        const abs = join(dir, ent.name);
        try {
          if (ent.isDirectory()) walk(abs);
          else if (ent.isFile() && ent.name.endsWith('.md')) {
            const s = slugifyFilePath(relative(notesDir, abs).split('\\').join('/'));
            slugs.add(s);
            const b = basename(s);
            const arr = byBasename.get(b);
            if (arr) arr.push(s);
            else byBasename.set(b, [s]);
          }
        } catch {
          /* ignore vanished files during parallel prerender */
        }
      }
    };
    walk(notesDir);
  }

  const byLength = (a: string, b: string) => a.length - b.length;

  function resolve(target: string): string | null {
    const wanted = slugifyFilePath(target);
    if (!wanted) return null;
    if (slugs.has(wanted)) return wanted;
    // path-suffix match, e.g. "Red Team/Red Teaming" → "wiki/Red-Team/Red-Teaming"
    const suffix = [...slugs].filter((s) => s === wanted || s.endsWith('/' + wanted));
    if (suffix.length) return suffix.sort(byLength)[0];
    // bare "[[Title]]" → shortest slug with that basename (Quartz 'shortest')
    const cands = byBasename.get(basename(wanted));
    if (cands && cands.length) return [...cands].sort(byLength)[0];
    return null;
  }

  resolverMemo = { resolve, slugs };
  return resolverMemo;
}

/** Split a `[[…]]` body into target path, optional heading anchor, optional alias. */
export function parseWikilink(inner: string): { path: string; anchor?: string; alias?: string } {
  const cleaned = inner.replace(/\\\|/g, '|'); // normalize escaped pipe \| → |
  const pipe = cleaned.indexOf('|');
  const targetPart = pipe === -1 ? cleaned : cleaned.slice(0, pipe);
  const alias = pipe === -1 ? undefined : cleaned.slice(pipe + 1).trim() || undefined;
  const hash = targetPart.indexOf('#');
  const path = (hash === -1 ? targetPart : targetPart.slice(0, hash)).trim();
  const anchor = hash === -1 ? undefined : targetPart.slice(hash + 1).trim() || undefined;
  return { path, anchor, alias };
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Built once per process — the note set is stable across a build.
let cached: WikilinkResolver | null = null;
const getResolver = (notesDir?: string) => (cached ??= buildSlugResolver(notesDir));

/** remark plugin. Usage in astro.config: `markdown: { remarkPlugins: [remarkWikilinks] }`. */
export function remarkWikilinks() {
  const resolver = getResolver();
  return (tree: unknown) => {
    findAndReplace(tree as never, [
      [
        /\[\[([^\]\n]+)\]\]/g,
        (_full: string, inner: string) => {
          const { path, anchor, alias } = parseWikilink(inner);
          const display = alias ?? (path ? basename(slugifyFilePath(path)).replace(/-/g, ' ') : (anchor ?? ''));

          // Pure-anchor link [[#heading]] → same page.
          if (!path && anchor) {
            return { type: 'link', url: `#${headingSlug(anchor)}`, children: [{ type: 'text', value: display }] };
          }

          const slug = resolver.resolve(path);
          if (!slug) {
            return {
              type: 'html',
              value: `<span class="missing" title="unresolved link: ${escapeHtml(inner)}">${escapeHtml(display)}</span>`,
            };
          }
          const url = slugToUrl(slug) + (anchor ? `#${headingSlug(anchor)}` : '');
          return { type: 'link', url, children: [{ type: 'text', value: display }] };
        },
      ],
    ]);
  };
}
