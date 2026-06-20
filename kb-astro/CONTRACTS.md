# CONTRACTS — KB Astro site

The typed interface the three lanes build against. **Opus owns this file.** Composer and Grok
import / match these shapes; if a shape needs to change, change it here first and tell the others.

- **Repo:** `llm-knowledge-base` (the Obsidian vault) · **Branch:** `astro-replatform`
- **In-place re-platform:** Astro replaces Quartz in this same repo, history continues. Vault
  markdown is untouched and remains the source of truth.
- **Source of truth for types:** `src/lib/types.ts` (TS) + `src/content.config.ts` (Zod schema).
- **Design system:** Tsumugu DS export at `/Users/n1/Projects/PRDs/tsumugu-ds-export`,
  `data-accent="violet"`, Paper & Ink. Port pixel-for-pixel; never redesign.

```
llm-knowledge-base/
  astro.config.mjs            # site=https://logos52.github.io, folder URLs, sitemap + pagefind
  src/
    content.config.ts         # `notes` collection — the Zod frontmatter schema (lenient)
    content/notes/            # BUILD-TIME copy of the public vault subset (gitignored; never edit)
    lib/
      types.ts                # ← THIS CONTRACT in code (Domain, GraphData, SearchDoc, Backlink…)
      ignore-patterns.mjs     # the 1:1 publish denylist (single source of truth)
      slug.ts                 # Quartz-identical slug derivation
      wikilinks.ts            # remark plugin: [[target|alias]] resolution
      graph.ts, backlinks.ts  # emit public/graph.json + public/backlinks.json
    components/ layouts/ pages/   # Opus ports DS components/layouts; Composer builds pages/islands
  scripts/copy-public-notes.mjs   # the publish guard's copy step (vault → src/content/notes)
  tools/scripts/publish-guard.mjs # existing content-leak guard, preserved (scans dist/ in CI)
  kb-astro/
    CONTRACTS.md  opus.md  composer.md  grok.md
    site-data/                # ← Grok writes here; Opus/Composer read at build
```

---

## 1. Frontmatter schema (`notes` collection)

Defined in `src/content.config.ts`, mirrored as `NoteFrontmatter` in `types.ts`. **Lenient by
design** — ~314 notes with messy frontmatter; validation must never break the build.

| field | type | notes |
|-------|------|-------|
| `title` | `string?` | present on ~half; **derive from H1/filename when missing** |
| `type` | `string?` | 34 distinct values — **free string, not an enum** |
| `status` | `string?` | informational; not a publish signal |
| `created`,`updated` | `string \| Date ?` | YAML may parse a bare date to `Date`; accept both |
| `tags` | `string[]?` | accepts list / single string / absent |
| `order`,`image`,`blurb`,`draft`,`aliases`,`description` | optional | — |
| *(any other key)* | passthrough | unknown keys allowed |

`draft: true` (boolean or `"true"`) → the note is **not published** (parity with Quartz `RemoveDrafts`).

## 2. Domains (locked) — `Domain` + `DOMAIN_COLORS`

Six domains. Colors are **verbatim from the DS** `--d-*` vars (light / dark) and are the single
source of truth — do not invent hexes.

| key | label | light | dark |
|-----|-------|-------|------|
| `learning` | Learning | `#5a8f4e` | `#7bb06d` |
| `agentic` | Agentic | `#3f6e96` | `#6f9fc9` |
| `language` | Language | `#b8862f` | `#d6ad5c` |
| `focus` | Focus | `#c2703f` | `#dd8a5f` |
| `mind` | Mind | `#2e8b86` | `#54b3ab` |
| `gen` | Generativity | `#7d5a86` | `#ad8ab5` |

`gen` is intentionally the violet accent. Default/fallback domain = `gen`.

**8→6 collapse (Grok finalizes).** The live `quartz/domains.ts` used 8 domains keyed by `wiki/`
subfolder. Starter mapping for Grok's `domains.json`:

| old domain → prefixes | → new |
|---|---|
| learning ← Concepts/ Techniques/ Syntheses/ Learning Craft/ Dimensions/ | `learning` |
| agentic ← Systems/ Workflows/ | `agentic` |
| language ← Language/ Resources/ | `language` |
| focus ← Self Management/ | `focus` |
| decisions ← Decision Making/ | **`mind`** *(judgment call — Grok confirms)* |
| minimalism ← Minimalism/ | **`gen`** *(DS hub maps Minimalism→gen)* |
| money ← Money/ | **`gen`** *(ambiguous — Grok confirms)* |
| reference ← Books/ Experiences/ Domains/ | **per-topic; fallback `gen`** *(Grok)* |

Grok owns the authoritative per-note assignment with **100% coverage**; fallback rule = folder root.

## 3. Slugs (1:1 with Quartz)

`slug.ts` replicates Quartz `sluggify` exactly, per path segment:
`\s→-`, `&→-and-`, `%→-percent`, strip `?` and `#`; join with `/`; trim trailing `/`; `_index→index`;
`.md` extension dropped. Examples: `index.md → /`, `about.md → /about`,
`wiki/Books/The Parasitic Mind.md → /wiki/Books/The-Parasitic-Mind/`. Folder-based; **keep these
slugs** so inbound links/SEO survive. URLs render with `build.format:'directory'`.

## 4. Graph — `GraphData` → `public/graph.json` *(Opus emits)*

```ts
GraphNode = { slug: string; title: string; domain: Domain; type: string }
GraphEdge = { source: string; target: string }   // slugs
GraphData = { nodes: GraphNode[]; edges: GraphEdge[] }
```
Nodes colored by `domain` (from Grok's `domains.json`; folder fallback until then). Edges from
resolved wikilinks. A helper slices a 1–2 hop **local graph** for the note rail.

## 5. Backlinks — `BacklinkIndex` → `public/backlinks.json` *(Opus emits)*

```ts
Backlink = { slug: string; title: string; context: string }   // context = the line around the link
BacklinkIndex = Record<TargetSlug, Backlink[]>
```

## 6. Search — `SearchDoc` *(for Composer's Pagefind ⌘K palette)*

```ts
SearchDoc = { slug; url; title; summary; domain: Domain; tags: string[]; headings: string[] }
```
Pagefind indexes rendered HTML (full body). Result rows show title + domain + snippet.

---

## 7. `kb-astro/site-data/*.json` — Grok's outputs (exact shapes)

```jsonc
// domains.json — every public note slug → one of the 6 domains. 100% coverage.
{ "wiki/Concepts/Higher-Order-Generativity...": "gen", "wiki/Workflows/Wiki-Health-Checks": "agentic" }

// home.json — curated atlas home (shapes mirror the DS data.js). Use REAL vault notes only.
{
  "hero":   { "overline": "記憶 · second brain · public", "title": "…", "lede": "…" },
  "questions": ["…", "…", "…"],
  "todaysRetrieval": { "kind": "Technique · due today", "title": "…", "prompt": "…", "queueCount": 4, "slug": "…" },
  "trails":     [{ "kind": "Trail · 9 notes", "title": "…", "summary": "…", "domain": "learning", "meta": "updated Jun 11", "slug": "…" }],
  "dimensions": [{ "kind": "Dimension", "title": "…", "summary": "…", "domain": "learning", "slug": "…" }],
  "hubs":       [{ "kind": "Hub", "title": "…", "summary": "…", "domain": "mind", "slug": "…" }],
  "landmarkMap": { "nodes": [{ "slug": "…", "title": "…", "domain": "gen" }] }   // ~7 central notes
}

// redirects.json — old Quartz URL → new slug, ONLY where they differ (should be ~empty: slugs are 1:1).
[{ "from": "/old/path", "to": "/new/path" }]

// audit.json — frontmatter issues, worst-first. LIST ONLY (no content edits).
[{ "file": "wiki/…md", "issues": ["missing title", "unknown type 'page'"] }]

// links-report.json — broken/ambiguous wikilinks for the resolver + human cleanup.
[{ "file": "…md", "link": "[[…]]", "problem": "broken target", "suggestion": "…" }]
```
`NoteCardData` (trails/dimensions/hubs items) = `{ kind, title, summary, domain: Domain, meta?, slug }`.

## 8. Publish guard — **pure 1:1 Quartz parity** (privacy doctrine all lanes honor)

- **Denylist** = `ignorePatterns`, verbatim, in `src/lib/ignore-patterns.mjs` (only addition: `kb-astro/**`).
  Everything not denied + not `draft:true` **publishes**. `private/**` and `finances/**` stay excluded.
- **Intentionally public:** `AGENTS.md`, `CLAUDE.md`, `GROK.md`, `README.md`, `cos/` PRD — by owner's
  choice (showing the commands given to agents is part of the spirit of sharing). Do **not** exclude them.
- **Content-leak guard** preserved at `tools/scripts/publish-guard.mjs` (blocks owner email,
  finance paths, secrets, sensitive tags). Runs in CI against `dist/` before deploy.
- **Never** surface `private/`, `finances/`, or privacy-tagged content in any `site-data/` file.

## 9. Ownership & dependency order

```
Opus O6 contracts (this file + types.ts) ──┬─→ Grok  G1–G5  (start now; no code dependency)
Opus O1–O5 (scaffold, guard, libs, DS port)─┴─→ Composer C1–C6 (start once components + types land)
```
**Status:** contracts published ✅ · Grok **unblocked now** · Composer unblocked when DS components land.
