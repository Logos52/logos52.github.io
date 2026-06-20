/**
 * slug.ts — Quartz-identical slug derivation.
 *
 * Ported verbatim from quartz/util/path.ts (`sluggify` / `slugifyFilePath` / `simplifySlug`) so the
 * Astro site's URLs stay 1:1 with the old Quartz paths (preserves inbound links + SEO). Pure, no deps.
 */

/** Slugify a path segment-wise, exactly as Quartz does. */
export function sluggify(s: string): string {
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

/**
 * Vault-relative `.md` path → full slug (no extension). `_index`/`index` preserved as `index`.
 * e.g. "wiki/Books/The Parasitic Mind.md" → "wiki/Books/The-Parasitic-Mind"; "notes/index.md" → "notes/index".
 */
export function slugifyFilePath(fp: string): string {
  let s = fp.replace(/^\/+/, '').replace(/\/+$/, '');
  s = s.replace(/\.(md|html)$/i, '');
  s = sluggify(s);
  if (s.endsWith('_index')) s = s.replace(/_index$/, 'index');
  return s;
}

/** Full slug → simple slug (trailing "index" trimmed; empty → "/"). Matches Quartz `simplifySlug`. */
export function simplifySlug(slug: string): string {
  let s = slug.replace(/\/?index$/, '');
  s = s.replace(/^\/+|\/+$/g, '');
  return s.length === 0 ? '/' : s;
}

/** Full slug → site URL path (folder-based, leading + trailing slash; root → "/"). */
export function slugToUrl(slug: string): string {
  const simple = simplifySlug(slug);
  return simple === '/' ? '/' : `/${simple}/`;
}

/** Last path segment of a slug (used for default link text + basename resolution). */
export function basename(slug: string): string {
  const parts = slug.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? slug;
}
