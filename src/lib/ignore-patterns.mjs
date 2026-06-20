/**
 * ignore-patterns.mjs — the publish DENYLIST, single source of truth.
 *
 * Replicated 1:1 from the former `quartz.config.ts` `ignorePatterns` (pure Quartz parity:
 * everything NOT listed here publishes; `private/` and `finances/` stay excluded). When this
 * list changes, the public surface of BOTH the site copy and the leak guard changes together.
 *
 * Consumed by:
 *   - scripts/copy-public-notes.mjs  (decides which vault .md get copied into src/content/notes)
 *   - tools/scripts/publish-guard.mjs (derives its private-path prefixes from this list)
 *
 * Plain ESM (no deps) so a Node build script can import it directly.
 */

export const IGNORE_PATTERNS = [
  // Obsidian internals
  '.obsidian/**',
  '.trash/**',

  // Vault folders intentionally kept out of the public site
  '00 Command Center/**',
  'raw/**',
  'private/**',
  'finances/**',
  'outputs/**',
  'templates/**',
  'journal/templates/**',
  'tools/**',
  'PRDs/**',
  'decisions/**',
  'mg-kolbs/**',
  'MG & Kolbs/**',
  '01 - Workbench/**',
  '02 - System/**',
  '_archive/**',
  'hermes/**',
  'log.md',
  '_meta/**',

  // Individual pages kept out of the public site (finance direction / decisions)
  'journal/2026-05-29-wnab-direction-decided.md',

  // New in the Astro re-platform — internal build + handoff docs, not knowledge-base content.
  // (The ONLY addition to the otherwise-verbatim Quartz denylist; it touches no existing content.)
  'kb-astro/**',

  // Former Quartz framework + build artifacts (kept for parity; harmless once Quartz is gone)
  'quartz/**',
  'public/**',
  'node_modules/**',
  '.quartz-cache/**',

  // Repo metadata
  '.git/**',
  '.github/**',
  '.githooks/**',

  // OS noise
  '**/.DS_Store',

  // Guard against tools writing absolute paths as relative (stray ./Users/... trees)
  'Users/**',
];

/**
 * The Astro project's own files live in the same repo root as the vault. They are not vault
 * content and must never be copied into the note collection.
 */
export const PROJECT_PATHS = [
  'src/**',
  'dist/**',
  '.astro/**',
  'scripts/**',
  'public/**', // Astro static dir (also the old Quartz output) — not vault content
  'astro.config.ts',
  'package.json',
  'package-lock.json',
  'tsconfig.json',
];
// NOTE: the vault's root `assets/` is publishable image content and is intentionally NOT denied here.

/**
 * Minimal glob matcher covering exactly the pattern shapes used above:
 *   "dir/**"  → the dir and anything under it
 *   "**\/x"   → x in any directory (used for **\/.DS_Store)
 *   "exact"   → an exact path
 * Sufficient and intentionally simple — not a general globber.
 * @param {string} rel POSIX-style repo-relative path (e.g. "wiki/Books/Note.md")
 * @param {string[]} patterns
 */
export function matchesAny(rel, patterns) {
  const p = rel.replace(/\\/g, '/').replace(/^\.\//, '');
  for (const pat of patterns) {
    if (pat.endsWith('/**')) {
      const base = pat.slice(0, -3);
      if (p === base || p.startsWith(base + '/')) return true;
    } else if (pat.startsWith('**/')) {
      const tail = pat.slice(3);
      if (p === tail || p.endsWith('/' + tail)) return true;
    } else if (p === pat) {
      return true;
    }
  }
  return false;
}

/** True when a repo-relative path is excluded from publication (denylist OR Astro project file). */
export function isIgnored(rel) {
  return matchesAny(rel, IGNORE_PATTERNS) || matchesAny(rel, PROJECT_PATHS);
}
