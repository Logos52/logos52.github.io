---
type: agents
tags:
  - system
---

# AGENTS.md

This repository is an Obsidian vault that an LLM maintains, and a public wiki built from it. It is public on GitHub under `logos52`. Raw sources are compiled into linked wiki pages, so that knowledge is not worked out again from the sources each time a question is asked.

Cut on 2026-09-20 on the owner's word. Earlier versions are in git history.

**Agent product names.** Before inventing a parallel note, or picking Claude Code vs Cowork vs Managed Agents vs Cursor Cloud Agents vs Grok Build vs Codex vs Copilot vs Devin, read [[wiki/Systems/AI & Agentic Systems/Agent Glossary|Agent Glossary]]. File a miss the same day on [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Agent Wrong-Door Log]].

## Layers

- `raw/` holds the sources: `raw/inbox/` for new clippings, `raw/sources/` for active material, `raw/processed/` for sources already compiled, `raw/private/` for human-only sources, `raw/sessions/` for agent activity. Do not edit a raw source unless the owner asks. Put metadata in `raw/Source Index.md`. Keep private, copyrighted, paywalled or sensitive material out of public commits.
- `01 - Workbench/` is the only draft surface. A model first pass is named `[Model] - [Title].md` and a fused synthesis is named `L2 - [Title].md`. After a draft is promoted or rejected, move it out. `outputs/` is an archive and takes no new work.
- `wiki/` is the compiled layer. A page there is named `[Title].md`, with no model name and no prefix.

## Special files

- `notes/index.md` is the public entry index. It lists hand-picked hubs and condensed pages, not every page. Read it first for orientation. Add a line only when a new hub or condensed page deserves a front-door link.
- `notes/catalog.md` is the full inventory for agents. It is gitignored, and `scripts/update-notes-catalog.mjs` regenerates it on `npm run dev` and `npm run build`. Do not edit it by hand.
- `log.md` is the append-only record of operations. Each entry starts `## [YYYY-MM-DD] operation | Title`, where the operation is one word such as `ingest`, `compile` or `maintenance`. Append an entry after every meaningful ingest, compile or tool change.

## Operations

**Ingest**, when the owner drops in a source:

1. Read `notes/index.md`, `notes/catalog.md`, `raw/Source Index.md` and recent `log.md` entries.
2. Read the source. Read from `raw/private/` only when he allows it.
3. Add or update its row in `raw/Source Index.md`: title, author, URL, date, type, topic, and publication or privacy risk.
4. Write or update the wiki pages it bears on, including pages it contradicts. Add links both ways.
5. Append an entry to `log.md`.

**Query**, when he asks a question against the wiki: read `notes/index.md` first, then the relevant wiki pages, and raw sources only when the wiki is not enough. Name the pages and sources consulted. Unresolved issues go to `outputs/generated-questions.md`. His live open questions are in `journal/index.md` and `00 Command Center/Active Questions.md`.

**Health check, status, or new-page ideas**, when he asks: work from `notes/catalog.md`. Look for uncompiled sources, pages with no sources, orphans, duplicates, contradictions, pages that need splitting, and public or private risk. Report first. Do not reorganize files during a status pass unless he asks. Show a table of candidate pages before creating any. A long report goes in `01 - Workbench/[Model] - YYYY-MM-DD [Title].md`.

## Pages

- Match the frontmatter of the pages already in the section the new page joins: `title`, `type`, `status`, `created`, `updated`, `tags`, and `source-count` where the section uses it.
- The page layout, what never ships, and the one style rule are in [[02 - System/Writing Standards|Writing Standards]]. That file is short. Read it before writing a page. Grok's own writing rules are in `/Users/n1/.grok/AGENTS.md`. Claude's are in `CLAUDE.md` and `/Users/n1/.claude/CLAUDE.md`.
- A hub orients the reader, and the detail pages hold the content. Do not make a page too thin to say what its subject is, how it is used, and what it links to.
- When updating a page, re-read it first, put new material into the existing structure, do not append notes at the bottom, and update `updated`.
- Do not fabricate sources, citations, authors, dates, URLs or claims. Mark an uncertain claim as uncertain. Do not copy long copyrighted passages into public pages. Keep full copyrighted transcripts private.
- Do not copy offhand chat into files. Write the ruling. A chat line is filed as the owner's words only when he asked for that line to be kept.
- Use wikilinks for internal pages, such as `[[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition]]`, and normal markdown links for external URLs.
- `notes/index.md`, `notes/catalog.md` and `rg` are enough for local search. The published site search is Pagefind. Do not add another search tool or a health-check framework.

## Privacy and Publication

**The source repo is PUBLIC.** A tracked file is browsable as raw markdown on GitHub **even if it never renders on the site.** `ignorePatterns` only controls *rendering* — it is NOT a privacy mechanism. The cardinal rule:

> **Private = untracked (gitignored / kept out of the repo). Not "just un-rendered."**

Three ways to keep content off the public site, strongest first:

1. **Genuinely private (money, secrets, personal life, credentials):** keep it OUT of the repo — gitignore it or store it externally. `finances/` and `private/` are gitignored; financial data/secrets live in a gitignored, external location. Do not commit it.
2. **Keep-unpublished but OK in the repo:** add `draft: true` to the note's frontmatter — `scripts/copy-public-notes.mjs` skips it, so it never reaches the build. (Still raw-browsable in the repo, so not for genuinely-private content.)
3. **Never put sensitive content in a publish-eligible path** — anything under `wiki/`, `journal/`, `blog/`, `public-snapshots/`, or a root `.md` renders by default.

Enforcement — defense-in-depth, see `tools/scripts/publish-guard.mjs`:

- **The `money` tag is a topic label, not a privacy signal** (ruled 2026-09-13). It marks public pages about money ideas and stays off `SENSITIVE_TAGS` in the guard and in `src/pages/tags/[tag].astro`. Personal financial data is still private under rule 1 above; tag it `finances`, `budget`, `salary`, or `networth` if it must be flagged, and keep it out of the repo.
- **Pre-commit hook** (`.githooks/pre-commit`, enable once with `git config core.hooksPath .githooks`) blocks committing private/financial content into publish-eligible paths *before it reaches the public repo*. First and most important line.
- **Deploy guard** — `deploy.yml` runs the guard on the built `dist/` HTML after `astro build`; a leak fails the job and blocks the deploy. `node --test tools/scripts/leak.test.mjs` runs in the same job.
- **Source audit** — `npm run guard:source` flags private content that is tracked-but-unrendered (raw-exposed on the public repo). Run periodically; the fix is to gitignore those folders.

Known raw-exposure: some un-rendered folders (`PRDs/`, `decisions/`, `00 Command Center/` except `Finances.md`, `mg-kolbs/`) are still tracked, so their raw `.md` is public. `00 Command Center/Finances.md` is gitignored. If any remaining file holds genuinely-private content, gitignore + untrack it (and scrub history if it was already pushed).

## Static Site (Astro)

The site is published at <https://logos52.github.io>. Astro builds from `src/`; before each build, `scripts/copy-public-notes.mjs` copies the public subset of the vault into `src/content/notes/` (the only directory the `notes` collection reads). Pushes to `main` and pull requests run `.github/workflows/deploy.yml` (frontmatter lint, build, publish-guard on `dist/`, leak tests). Only `main` deploys to GitHub Pages.

Publish model: **publish-by-default.** Every `.md` is published EXCEPT (a) paths git ignores, (b) paths matched by the denylist in `src/lib/ignore-patterns.mjs`, and (c) notes with `draft: true`. There is no allow-list, so the denylist plus the guard ARE the privacy gates — keep them current. A denied note is never copied into `src/content/notes/`, so it physically cannot appear in the build (stronger than a render-time filter).

- **Published (publish-eligible):** `index.md`, `about.md`, `README.md`, `wiki/` except `wiki/Research/` and the Design extraction catalogs, `journal/`, `public-snapshots/`, `notes/index.md`, `personal/`, `projects/`.
- **Not published (gitignored or denylist):** `AGENTS.md`, `CLAUDE.md`, `GROK.md` (denylisted, but tracked, so their raw text is public on GitHub), `notes/catalog.md` (gitignored — agent-only full inventory), `wiki/Research/` (agent banks, tracked), Design extraction catalogs (tracked), `00 Command Center/`, `raw/`, `private/`, `finances/`, `outputs/`, `templates/`, `tools/`, `PRDs/`, `decisions/`, `mg-kolbs/`, `cos/`, `01 - Workbench/`, `02 - System/`, `_archive/`, `hermes/`, `_meta/`, `kb-astro/`, `log.md`.

Do not move content between these without updating `src/lib/ignore-patterns.mjs` — and remember (above) that un-publishing is not the same as private.

Rules for LLM agents:

- Wikilinks (`[[Page]]` and `[[path/to/Page|Alias]]`) are first-class on the published site. Prefer wikilinks over raw markdown links so the build can resolve them and feed them into the graph and backlinks.
- Wikilinks pointing into excluded folders (e.g., `[[raw/Source Index|Source Index]]`, `[[templates/Kolbs Template]]`) will render as broken on the site. They are still valuable inside Obsidian; leave them unless the user asks for a cleanup.
- When adding a new wiki page, place it under an existing top-level subfolder of `wiki/`. List the folder to see them. Do not add a top-level subfolder without asking.
- Do not commit `node_modules/`, `dist/`, or `.astro/`. These are gitignored.
- The site is a normal Astro project: pages in `src/pages/`, UI in `src/components/`, layouts in `src/layouts/`, client islands in `src/islands/`, shared logic in `src/lib/`. The publish boundary is `scripts/copy-public-notes.mjs` plus the denylist `src/lib/ignore-patterns.mjs`.
- The site's home page is `src/pages/index.astro`, the public LLM Knowledge Base landing page.
- The public wiki index lives at `notes/index.md`; the full agent catalog lives at gitignored `notes/catalog.md`.

Local preview workflow:

- One-time: `npm install`
- Dev server: `npm run dev` then open <http://localhost:4321>
- Build, then preview: `npm run build` then `npm run preview`


## Feedback protocol

Deep read before execution, always: enumerate everything Wedge asked, details included, never the gist; find the general principle behind the specific complaint; then execute against both. When he strikes a text, regenerate it. Do not add a rule or a record line unless he says "make this a rule" (ruled 2026-09-18). Prose is generated as a continuous explanation to a real person, never assembled from rule-compliant fragments.
