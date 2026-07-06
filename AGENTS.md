---
type: agents
tags:
  - system
---

# AGENTS.md

This repository is an LLM-maintained Obsidian wiki. Obsidian is the IDE, the LLM is the wiki maintainer, and the markdown wiki is the persistent compiled artifact.

Assume this repository may be public on GitHub under `logos52`.

## Core Idea

Do not treat this vault as a passive RAG folder. The goal is not to rediscover knowledge from raw sources every time a question is asked.

The goal is to incrementally compile raw sources into a persistent, interlinked wiki that accumulates understanding over time.

Every source ingest, question, and lint pass should make the wiki better.

Write role before theory. A wiki page should first explain what the topic does inside this knowledge base, when the user should use it, and what behavior or decision it changes. General background comes after the practical role is clear.

## Three Layers

### 1. Raw Sources

Raw sources are the source of truth. They may include articles, transcripts, papers, screenshots, repos, datasets, or clipped web pages.

Current raw-source locations:

- `raw/inbox/` for new unsorted L4 clippings and imports
- `raw/sources/` for active source material still useful for synthesis
- `raw/processed/` for sources that already have usable workbench synthesis or wiki output
- `raw/private/` for human-only sources
- `raw/sessions/` for agent activity

Rules:

- Treat raw sources as immutable.
- Read raw sources, but do not edit them unless the user explicitly asks.
- Prefer adding metadata in `raw/Source Index.md` over modifying source files.
- Keep private, copyrighted, paywalled, or sensitive material out of public commits.

### 2. Wiki

`wiki/` is the compiled understanding layer. The LLM owns this layer.

The LLM should:

- Create concept, technique, workflow, entity, tool, paper, and synthesis pages.
- Update existing pages when new sources change or enrich the synthesis.
- Add cross-references between pages.
- Flag contradictions and unresolved claims.
- Keep `notes/index.md` hub links current; `notes/catalog.md` regenerates on build.
- Keep claims source-grounded.

The human mostly reads the wiki and gives direction.

### 3. Schema

`AGENTS.md` is the operating schema for the LLM. Update it when the workflow changes.

`notes/index.md` and `log.md` are special navigation/history files and must be maintained as part of normal work.

## Working With Different Models

We use three models in the current setup: Claude/Opus (via Cowork), Grok (remote), and GPT (remote). Each has different strengths.

### Claude / Opus (via Cowork)
- Primary model for synthesis, brief writing (L4→L3), and wiki work.
- Reads `CLAUDE.md` for brief writing conventions and `AGENTS.md` for system operations.
- Has direct access to the filesystem via Cowork.
- Best used for:
  - L4→L3 brief conversion
  - L2 fused synthesis
  - Wiki page creation and updates
  - File operations, archiving, and folder maintenance

### Grok (Remote)
- Strong at high-level reasoning, system design, and maintaining conceptual coherence.
- Good at synthesizing new ideas and writing in the desired operating tone.
- Best used for:
  - Designing or refining frameworks
  - Writing new synthesis pages
  - High-level audits and structural recommendations
  - Philosophical framing and orientation pieces

### GPT (Remote)
- Strong on taxonomy, structured analysis, and exhaustive coverage.
- Best used for:
  - Detailed breakdown of systems and failure modes
  - Comparative analysis across multiple sources
  - Structured reference documents

**General rule of thumb:**  
Use **Claude** for file work, briefs, and wiki.  
Use **Grok** for thinking and design.  
Use **GPT** for structured reference and taxonomy.

## Special Files

### `notes/index.md`

Public entry-point index for the wiki. Read this first for orientation before answering questions or compiling sources.

It lists hand-curated hubs and condensed doctrine pages — not every leaf page. Keep it short.

Update the **Condensed** or **Hubs** sections when a new doctrine page or cluster hub deserves a front-door link.

### `notes/catalog.md`

Agent-only full wiki inventory. **Gitignored** — never committed, never published. Regenerated automatically by `scripts/update-notes-catalog.mjs` on `npm run dev` / `npm run build`.

Read `notes/catalog.md` when you need exhaustive coverage: lint, status, breakdown, or verifying that every wiki page is accounted for. Each row has link, type, and one-line summary (from frontmatter).

Do not edit the catalog tables by hand. Re-run `node scripts/update-notes-catalog.mjs` (or `npm run dev`) after bulk wiki changes if you need a fresh local copy before the next build.

### `log.md`

Chronological append-only record of operations.

Every entry must start with this parseable format:

```md
## [YYYY-MM-DD] operation | Title
```

Allowed operation labels:

- `setup`
- `ingest`
- `query`
- `lint`
- `compile`
- `tool`
- `maintenance`

Useful shell check:

```sh
grep "^## \\[" log.md | tail -5
```

Append to `log.md` after every meaningful ingest, query, lint pass, compile pass, or tool change.

## Operations

### Ingest

Use when the user drops in a new source and asks to process it.

Workflow:

1. Read `notes/index.md`, `notes/catalog.md`, `raw/Source Index.md`, and recent `log.md` entries.
2. Read the new source from `raw/inbox/`, `raw/sources/`, or `raw/private/` when explicitly allowed.
3. Identify source metadata: title, author, URL, date, type, topic, and publication/privacy risk.
4. Add or update the source row in `raw/Source Index.md`.
5. Write or update relevant wiki pages.
6. Update related pages that the new source strengthens, contradicts, or reframes.
7. Add backlinks between source, concepts, techniques, workflows, tools, and outputs.
8. Update `notes/index.md` if a new hub or condensed page needs a front-door link (the full catalog regenerates on build).
9. Append an `ingest` or `compile` entry to `log.md`.

Prefer one-source-at-a-time ingest when the user wants close supervision.

### Query

Use when the user asks a question against the wiki.

Workflow:

1. Read `notes/index.md` first; use `notes/catalog.md` when you need the full inventory.
2. Search relevant terms across `wiki/`, `raw/`, `workbench/`, and legacy archives when needed.
3. Read the most relevant wiki pages before raw sources.
4. Read raw sources only when the wiki is insufficient or citations need checking.
5. Write durable synthesis candidates to `workbench/` when they need review before wiki promotion.
6. Include consulted wiki pages and sources.
7. Add unresolved issues to `outputs/generated-questions.md`. (Not `00 Command Center/Open Questions.md` — that file is the user's personal log; auto-appends go to the generated bucket.)
8. Promote durable insights back into `wiki/`.
9. Update `notes/index.md` if a hub or condensed front-door link changed (full catalog regenerates on build).
10. Append a `query` entry to `log.md`.

### Lint

Use for health checks.

Check for:

- Uncompiled sources.
- Wiki pages with no sources.
- Orphan pages.
- Missing cross-references.
- Duplicate concepts.
- Contradictory claims.
- Stale pages superseded by newer sources.
- Important concepts mentioned repeatedly without their own page.
- Public/private publication risks.

Write reports to `workbench/GPT - YYYY-MM-DD Wiki Health Check.md` unless the user asks for a different location.

Append a `lint` entry to `log.md`.

### Status

Use when the user asks how the wiki is doing, whether anything needs cleanup, or what should be improved next.

Workflow:

1. Read `notes/catalog.md`, `notes/index.md`, recent `log.md` entries, and the top-level `wiki/` directory list.
2. Count wiki pages by folder and page type when practical.
3. Identify recently updated pages, high-value pages, likely orphans, pages missing source sections, bloated pages, and pages that may need splitting.
4. Check for public/private risk at a high level.
5. Return a concise status report with recommended next actions.
6. Write a durable report to `workbench/GPT - YYYY-MM-DD Wiki Status.md` only if the status report is substantial.
7. Append a `lint` or `maintenance` entry to `log.md` when a durable report or wiki change is made.

Status is read-mostly. Do not reorganize files during a status pass unless the user explicitly asks.

### Breakdown

Use when the user asks for missing page ideas, split candidates, or ways to grow the wiki.

Workflow:

1. Read `notes/catalog.md`, `notes/index.md`, recent `log.md`, and relevant hub pages.
2. Search `wiki/` for recurring named concepts, techniques, workflows, tools, books, people, or systems without dedicated pages.
3. Identify bloated pages where a subtopic has enough substance to become its own page.
4. Rank candidates by usefulness to the user's active systems, number of references, and clarity of purpose.
5. Present a candidate table before creating pages unless the user has already asked to create them.
6. When creating pages, add backlinks from the parent or hub pages; update `notes/index.md` only when a new hub or condensed page earns a front-door link.
7. Append a `compile` or `maintenance` entry to `log.md`.

Breakdown expands the wiki deliberately. Avoid creating stubs that cannot support at least one useful summary, a few practical implications, and related links.

## Page Standards

Every durable wiki page should include:

- YAML frontmatter with `type`, `status`, `created`, `updated`, `source-count`, and `tags`.
- A short summary near the top.
- Related concept links.
- A `Sources` section.
- An `Open Questions` section when uncertainty remains.

### Type vocabulary (canonical)

Core content types:

- `concept` — an idea, principle, or framework
- `technique` — an actionable practice or method
- `workflow` — a sequenced process
- `synthesis` — integration of multiple ideas/sources into a higher-level frame
- `hub` — top-level connector page for a category
- `dimension` — major component of a multi-dimensional model

Source / reference types:

- `book` — book note (the user's reading of the book, not the book itself)
- `paper` — paper or academic source note
- `person` — person note
- `tool` — software / service / platform note
- `resource-catalog` — curated list of external resources

Meta / system types:

- `system` — operational pages (AGENTS, log, indexes, command-center pages)
- `reference` — bibliography, glossary, timeline (the wiki's own reference scaffolding)

Do not invent new types ad hoc. If a page does not fit any of the above, propose a new type to the user before using it.

### Status vocabulary

- `seed` — created, may be partial; the default for new pages
- `mature` — substantially complete and audited
- `needs-review` — flagged during a health check; revisit before next promotion
- `draft` — early scratch state, not ready for cross-linking

## Article Development Rules

These rules apply to newly created pages and substantial rewrites. Do not retroactively rewrite existing pages just to match this standard unless the user asks.

### Useful Operating Notes

Write useful operating notes, not generic articles.

A good page should usually make clear:

- what the idea is,
- when the user should use it,
- what problem or bad habit it replaces,
- what it produces,
- and what it connects to.

Do this naturally. Do not force every page into the same template.

Keep theory after usefulness. Background is welcome when it helps the user apply, diagnose, or connect the idea.

Examples:

- A book page is not only a book summary; it explains what the book clarifies, challenges, or changes in the user's thinking.
- A technique page is not only a definition; it explains when to use the technique, how to run it, and how it fails.
- A concept page is not only background; it explains what the concept helps diagnose, build, or decide.

### Hub And Detail Discipline

Hub pages should orient. Detail pages should carry the load.

Avoid cramming repeated subtopics into large hub pages. If a subtopic needs a third substantial paragraph, consider whether it deserves its own page.

Avoid thinning the wiki into many weak stubs. A new page should have enough material to explain its role, practical use, related pages, and open questions.

### Integration Rule

When updating an existing page:

1. Re-read the page first.
2. Integrate new material into the existing structure.
3. Improve the page's coherence, links, and practical usefulness.
4. Avoid appending disconnected notes to the bottom.
5. Update frontmatter `updated` and `source-count` when relevant.

Every page touched during an ingest should become meaningfully better.

## Source Discipline

- Do not fabricate sources, citations, authors, publication dates, URLs, or claims.
- If a claim is uncertain, mark it explicitly.
- Use source links or local source-note links for factual claims.
- Do not copy long copyrighted passages into public wiki pages.
- Summarize and synthesize in original language.
- Keep copyrighted full-text transcripts local/private unless the user explicitly decides otherwise.

## Writing Style

- Write useful operating notes, not rigid templates.
- Prefer plain, active sentences and concrete verbs.
- Name real failure modes in ordinary language.
- Make pages specific to this knowledge base.
- Preserve strong existing language unless there is a clear reason to change it.
- Avoid generic encyclopedia entries, AI essays, and forced page formats.
- Avoid hype, peacock words, rhetorical questions, and AI-editorial filler such as "importantly," "interestingly," and "it is worth noting."
- Use Obsidian links for internal concepts: `[[wiki/Dimensions/Self-Regulation/Metacognition - The Control Layer|Metacognition]]`.
- Use normal markdown links for external URLs.
- Avoid decorative formatting that makes files harder to diff.
- Decision documents (PRDs, proposals, decision notes, weighing-options journal entries, memos) follow the **High-Signal Decision Writing** section of [[02 - System/Writing Standards|Writing Standards]]: verdict first, measured claims, steelman what you reject, price your own recommendation, falsifiable success criteria.
- Wiki pages follow the **High-Signal Wiki Pages** section of Writing Standards (2026-06-11) as the primary bar — thesis first, specifics over adjectives, the case against, price the method, quit signals, checkable expectations. Front-facing surfaces follow **High-Signal Front-Facing Pages**. The May rules are deleted (2026-06-12); do not cite them.

## Workbench and Archives

The active synthesis loop is `raw/` → `workbench/` → `workbench/` → `wiki/`.

Use `workbench/` as the only active draft surface for synthesis work. Wiki-shaped material that is ready should be promoted to `wiki/`; material that still needs comparison, voice work, or human review stays in `workbench/`.

Workbench conventions:

- L3 first-pass drafts use model-first filenames: `[Model] - [Title].md`.
- L2 fused syntheses use `L2 - [Title].md`.
- Keep `workbench/` temporary and easy to scan. After promotion or rejection, move drafts out of the active surface.
- `outputs/` is legacy/archive space for older generated artifacts. Do not use it for new active synthesis unless the user explicitly asks.

Workflow:

1. Put active synthesis, comparison, and status drafts in `workbench/`.
2. Promote durable, reviewed material into `wiki/`.
3. Archive completed, rejected, or superseded drafts outside the active workbench.
4. Keep source material in `raw/`; do not treat archived drafts as source of truth unless explicitly cited.

## Tooling

At small scale, `notes/index.md` plus `notes/catalog.md` plus `rg` is enough.

As the wiki grows, consider adding:

- A naive local markdown search script in `tools/search/`.
- Health-check scripts in `tools/healthchecks/`.
- Optional qmd integration for local hybrid search.
- Marp support for slide outputs.

Do not add tooling until the wiki's shape justifies it.

## Privacy and Publication

**The source repo is PUBLIC.** A tracked file is browsable as raw markdown on GitHub **even if it never renders on the site.** `ignorePatterns` only controls *rendering* — it is NOT a privacy mechanism. The cardinal rule:

> **Private = untracked (gitignored / kept out of the repo). Not "just un-rendered."**

Three ways to keep content off the public site, strongest first:

1. **Genuinely private (money, secrets, personal life, credentials):** keep it OUT of the repo — gitignore it or store it externally. `finances/` and `private/` are gitignored; financial data/secrets live in a gitignored, external location. Do not commit it.
2. **Keep-unpublished but OK in the repo:** add `draft: true` to the note's frontmatter — the `RemoveDrafts` filter drops it from the build. (Still raw-browsable in the repo, so not for genuinely-private content.)
3. **Never put sensitive content in a publish-eligible path** — anything under `wiki/`, `journal/`, `blog/`, `public-snapshots/`, or a root `.md` renders by default.

Enforcement — defense-in-depth, see `tools/scripts/publish-guard.mjs`:

- **Pre-commit hook** (`.githooks/pre-commit`, enable once with `git config core.hooksPath .githooks`) blocks committing private/financial content into publish-eligible paths *before it reaches the public repo*. First and most important line.
- **Deploy guard** — `deploy.yml` runs the guard on the built `public/` output after `quartz build`; a leak fails the job and blocks the deploy.
- **Source audit** — `npm run guard:source` flags private content that is tracked-but-unrendered (raw-exposed on the public repo). Run periodically; the fix is to gitignore those folders.

Known raw-exposure: some un-rendered folders (`PRDs/`, `decisions/`, `00 Command Center/`, `mg-kolbs/`) are still tracked, so their raw `.md` is public. If any holds genuinely-private content, gitignore + untrack it (and scrub history if it was already pushed).

## Static Site (Astro)

The site is published at <https://logos52.github.io>. Astro builds from `src/`; before each build, `scripts/copy-public-notes.mjs` copies the public subset of the vault into `src/content/notes/` (the only directory the `notes` collection reads). Pushes to `main` trigger a rebuild via `.github/workflows/deploy.yml` (which runs the publish-guard before deploying).

Publish model: **publish-by-default.** Every `.md` is published EXCEPT (a) paths git ignores, (b) paths matched by the denylist in `src/lib/ignore-patterns.mjs`, and (c) notes with `draft: true`. There is no allow-list, so the denylist plus the guard ARE the privacy gates — keep them current. A denied note is never copied into `src/content/notes/`, so it physically cannot appear in the build (stronger than a render-time filter).

- **Published (publish-eligible):** `index.md`, `about.md`, `README.md`, `AGENTS.md` / `CLAUDE.md` / `GROK.md`, `wiki/`, `blog/`, `journal/`, `public-snapshots/`, `notes/index.md`.
- **Not published (gitignored or denylist):** `notes/catalog.md` (gitignored — agent-only full inventory), `00 Command Center/`, `raw/`, `private/`, `finances/`, `outputs/`, `templates/`, `tools/`, `PRDs/`, `decisions/`, `mg-kolbs/`, `MG & Kolbs/`, `pans-mg-kolbs-template/`, `01 - Workbench/`, `02 - System/`, `_archive/`, `hermes/`, `_meta/`, `log.md`.

Do not move content between these without updating `src/lib/ignore-patterns.mjs` — and remember (above) that un-publishing is not the same as private.

Rules for LLM agents:

- Wikilinks (`[[Page]]` and `[[path/to/Page|Alias]]`) are first-class on the published site. Prefer wikilinks over raw markdown links so the build can resolve them and feed them into the graph and backlinks.
- Wikilinks pointing into excluded folders (e.g., `[[raw/Source Index|Source Index]]`, `[[templates/Kolbs Template]]`) will render as broken on the site. They are still valuable inside Obsidian; leave them unless the user asks for a cleanup.
- When adding a new wiki page, prefer placing it under one of the existing top-level subfolders in `wiki/` (`Books/`, `Concepts/`, `Decision Making/`, `Dimensions/`, `Domains/`, `Experiences/`, `Language/`, `Learning Craft/`, `Minimalism/`, `Red Team/`, `Resources/`, `Self Management/`, `Syntheses/`, `Systems/`, `Techniques/`, `Workflows/`).
- Do not commit `node_modules/`, `dist/`, or `.astro/`. These are gitignored.
- The site is a normal Astro project: pages in `src/pages/`, UI in `src/components/`, layouts in `src/layouts/`, client islands in `src/islands/`, shared logic in `src/lib/`. The publish boundary is `scripts/copy-public-notes.mjs` plus the denylist `src/lib/ignore-patterns.mjs`.
- The site's home page is `src/pages/index.astro`, the public LLM Knowledge Base landing page.
- The public wiki index lives at `notes/index.md`; the full agent catalog lives at gitignored `notes/catalog.md`.

Local preview workflow:

- One-time: `npm install`
- Dev server: `npm run dev` then open <http://localhost:4321>
- Build, then preview: `npm run build` then `npm run preview`


## Feedback protocol (standing rule — canonical in ~/Projects/AGENTS.md)

Deep read before execution, always: enumerate everything Wedge asked, details included, never the gist; find the general principle behind the specific complaint; then execute against both, and record the principle in the appropriate standard. Prose is generated as a continuous explanation to a real person first, then filtered through the writing standards — never assembled from rule-compliant fragments.
