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

- `raw/` (including `raw/private/` for human-only sources and `raw/sessions/` for agent activity)
- `Clippings/`

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
- Keep `notes/index.md` current.
- Keep claims source-grounded.

The human mostly reads the wiki and gives direction.

### 3. Schema

`AGENTS.md` is the operating schema for the LLM. Update it when the workflow changes.

`notes/index.md` and `log.md` are special navigation/history files and must be maintained as part of normal work.

## Working With Different Models

We currently use two models in a hybrid setup: Grok (remote) and Hermes 3 (local via Ollama). They have different strengths, so instructions should be adapted depending on which model is active.

### Grok (Remote)
- Strong at high-level reasoning, system design, and maintaining conceptual coherence.
- Good at synthesizing new ideas and writing in the desired operating tone.
- Can handle more abstract or philosophical instructions.
- Best used for:
  - Designing or refining frameworks (e.g. the Five Dimensions)
  - Writing new synthesis pages
  - High-level audits and structural recommendations
  - Maintaining overall tone and philosophical consistency

### Hermes 3 (Local via Ollama)
- Runs locally and has direct access to the filesystem.
- Weaker at deep reasoning and long-range conceptual work (especially the 8B version).
- More literal and benefits from explicit, detailed instructions.
- Best used for:
  - Direct file editing and implementation
  - Auditing pages for consistency, links, and structure
  - Mechanical or execution-heavy tasks

**When using Hermes, follow these rules:**
- Be highly explicit. Do not assume it will infer intent.
- Prefer small, reviewable changes over large refactors.
- Show proposed changes before applying them when editing existing pages.
- Ask for confirmation before making structural changes (new pages, major reorganizations, etc.).
- Draw heavily from the private/ICS material as a source of truth when synthesizing or improving content. However, **never cite or reference the private sources directly** in any public-facing pages.
- If a task requires strong conceptual synthesis or high-level framing, escalate it to Grok instead.

**General rule of thumb:**  
Use **Grok** for thinking and design.  
Use **Hermes** for execution and direct work on the files.

### Session Summary Habit (Level 2 Ingestion)

After any substantial work session — especially when Hermes has proposed or made edits to `wiki/`, performed taxonomy work, synthesized new content, or advanced 30-day challenge material — Hermes must follow this post-work routine:

1. Create a new structured session summary in `raw/sessions/`.
2. Use the template at `raw/sessions/templates/session-summary.md` as the starting point (copy it and fill in the details).
3. Name the file meaningfully, e.g. `2026-05-20-30-day-challenges-retrieval-work.md` or `2026-05-20-taxonomy-audit.md`.
4. Fill out the sections honestly, especially:
   - Decisions Made
   - Failures / Issues Encountered
   - Proposed Wiki Changes
   - Insights & Material for Promotion (this is the most important for long-term value)
   - Open Loops / Follow-ups
5. Stage the completed summary (and any proposed `wiki/` diffs) together for human review.
6. Do **not** apply the summary or any `wiki/` changes until the user explicitly approves.

This habit turns Hermes activity into reviewable raw material that can later be mined for promotion (see Recommendation 2 patterns). It is a core part of safe Level 2 operation.

The goal is not perfection on the first try — the goal is consistent production of structured, reviewable session artifacts.

## Hermes Access Boundaries (Security Model)

As Hermes takes on more autonomy (Level 2: propose + implement with approval, and future Level 3), strict read/write boundaries are required. The agent is never given unrestricted write access to the entire repository.

### Read Rules
- Hermes has unrestricted read access to the entire `wiki/` directory (required to understand current state and make coherent edits).
- Hermes may read specific files under `raw/private/` **only when the user explicitly provides the file path or pastes the relevant excerpt** for a given task.
- Hermes must **not** autonomously scan, list, or read arbitrary content from `raw/private/` (or any private user data) without explicit user direction.
- This preserves the existing practice where the human first reviews private ICS material and then feeds synthesized context or instructions to the agent.

### Write Rules
- **Primary write target**: `wiki/` — all durable public content changes must target this directory.
- **Agent activity write target**: `raw/sessions/` — Hermes is explicitly permitted (and encouraged) to write raw session logs, full transcripts, proposed diffs/patches, and operational traces here. Everything in this folder is treated as untrusted/raw evidence.
- Hermes must **never** write to:
  - The repository root
  - `raw/` outside of `sessions/`
  - `raw/private/`
  - `Clippings/`
  - `outputs/`
  - Any dot-directories or configuration files
  - Without explicit user approval for the specific location.

### Level 2+ Workflow Requirements
- At Level 2, every proposed edit to `wiki/` must be shown to the user (as a diff or clear description) and receive explicit approval before Hermes executes the write.
- After substantial work, Hermes must create a structured session summary in `raw/sessions/` using the template (see "Session Summary Habit" above) and present it together with any `wiki/` proposals for review.
- Proposed changes to `wiki/` should be staged in `raw/sessions/` first whenever practical, so the raw proposal remains reviewable even after the change is applied.
- Secret scanning and private-data leakage checks are required before any `wiki/` write (at minimum: no API keys, no raw private paths, no direct references to `raw/private/` content in public pages).

### Rationale
These boundaries are directly adapted from proven patterns in other agent-maintained wikis (raw/untrusted agent output stays isolated from promoted public content; writes are narrowly scoped; private sources are human-gated).

The goal is to make higher autonomy safe rather than to restrict Hermes unnecessarily.

## Special Files

### `notes/index.md`

Content-oriented catalog of the wiki. Read this first before answering questions or compiling sources.

It should list important wiki pages with:

- Link.
- One-line summary.
- Type/category.
- Status.
- Source count when useful.

Update `notes/index.md` whenever wiki pages are created, deleted, renamed, or substantially changed.

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

1. Read `notes/index.md`, `raw/Source Index.md`, and recent `log.md` entries.
2. Read the new source from `raw/` or `Clippings/`.
3. Identify source metadata: title, author, URL, date, type, topic, and publication/privacy risk.
4. Add or update the source row in `raw/Source Index.md`.
5. Write or update relevant wiki pages.
6. Update related pages that the new source strengthens, contradicts, or reframes.
7. Add backlinks between source, concepts, techniques, workflows, tools, and outputs.
8. Update `notes/index.md`.
9. Append an `ingest` or `compile` entry to `log.md`.

Prefer one-source-at-a-time ingest when the user wants close supervision.

### Query

Use when the user asks a question against the wiki.

Workflow:

1. Read `notes/index.md` first.
2. Search relevant terms across `wiki/`, `raw/`, `Clippings/`, and `outputs/`.
3. Read the most relevant wiki pages before raw sources.
4. Read raw sources only when the wiki is insufficient or citations need checking.
5. Write the answer to `outputs/answers/YYYY-MM-DD - Short Question Title.md` when the answer is durable.
6. Include consulted wiki pages and sources.
7. Add unresolved issues to `00 Command Center/Open Questions.md`.
8. Promote durable insights back into `wiki/`.
9. Update `notes/index.md` if wiki pages changed.
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

Write reports to `outputs/audits/YYYY-MM-DD - Wiki Health Check.md`.

Append a `lint` entry to `log.md`.

### Status

Use when the user asks how the wiki is doing, whether anything needs cleanup, or what should be improved next.

Workflow:

1. Read `notes/index.md`, recent `log.md` entries, and the top-level `wiki/` directory list.
2. Count wiki pages by folder and page type when practical.
3. Identify recently updated pages, high-value pages, likely orphans, pages missing source sections, bloated pages, and pages that may need splitting.
4. Check for public/private risk at a high level.
5. Return a concise status report with recommended next actions.
6. Write a durable report to `outputs/audits/YYYY-MM-DD - Wiki Status.md` only if the status report is substantial.
7. Append a `lint` or `maintenance` entry to `log.md` when a durable report or wiki change is made.

Status is read-mostly. Do not reorganize files during a status pass unless the user explicitly asks.

### Breakdown

Use when the user asks for missing page ideas, split candidates, or ways to grow the wiki.

Workflow:

1. Read `notes/index.md`, recent `log.md`, and relevant hub pages.
2. Search `wiki/` for recurring named concepts, techniques, workflows, tools, books, people, or systems without dedicated pages.
3. Identify bloated pages where a subtopic has enough substance to become its own page.
4. Rank candidates by usefulness to the user's active systems, number of references, and clarity of purpose.
5. Present a candidate table before creating pages unless the user has already asked to create them.
6. When creating pages, add backlinks from the parent or hub pages and update `notes/index.md`.
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
- Use Obsidian links for internal concepts: `[[wiki/Concepts/Metacognition|Metacognition]]`.
- Use normal markdown links for external URLs.
- Avoid decorative formatting that makes files harder to diff.

## Outputs

`outputs/` is for non-wiki-shaped artifacts. Use it when an answer or artifact does not belong in the wiki yet (or ever) but should not disappear into chat history. Wiki-shaped material (concepts, techniques, syntheses) goes straight to `wiki/`.

Output types:

- `outputs/answers/` — Q&A-flavored responses where the question matters as much as the answer; useful when an answer might become wiki-grade later.
- `outputs/briefs/` — short memos and synthesis briefs written for someone other than future-you.
- `outputs/diagrams/` — Mermaid/SVG one-offs that don't belong inside a wiki page.
- `outputs/slides/` — Marp-style slide decks.
- `outputs/audits/` — health-check reports and system audits, typically dated (e.g. `2026-05-09-system-audit.md`).

Workflow:

1. If the content is clearly wiki-grade (concept, technique, workflow, synthesis), write it directly to `wiki/`.
2. Otherwise, file it under the appropriate `outputs/` subfolder.
3. Periodically review `outputs/answers/` — promote durable insights into `wiki/`, delete the rest.
4. Audit and brief artifacts are typically kept indefinitely as evidence, not promoted.

## Tooling

At small scale, `notes/index.md` plus `rg` is enough.

As the wiki grows, consider adding:

- A naive local markdown search script in `tools/search/`.
- Health-check scripts in `tools/healthchecks/`.
- Optional qmd integration for local hybrid search.
- Marp support for slide outputs.

Do not add tooling until the wiki's shape justifies it.

## Privacy and Publication

Before GitHub publication, review:

- `raw/`
- `Clippings/`
- `outputs/`

Do not include private journal material, relationship notes, credentials, private client data, private emails, paid course content, or unpublished third-party content.

## Static Site (Quartz v4)

The site is published at <https://logos52.github.io>. The site is built by Quartz v4 from the repo root. Pushes to `main` trigger an automatic rebuild via `.github/workflows/deploy.yml`.

What gets published vs. what stays local:

- Published: `index.md`, `about.md`, `blog/`, `wiki/`, `00 Command Center/`, `notes/index.md`, `log.md`, `README.md`, `AGENTS.md`.
- Excluded from the site (still in repo): `raw/`, `Clippings/`, `outputs/`, `templates/`, `tools/`, `.obsidian/`.

Exclusions live in `quartz.config.ts → ignorePatterns`. Do not move published content into excluded folders or vice versa without updating that list.

Rules for LLM agents:

- Wikilinks (`[[Page]]` and `[[path/to/Page|Alias]]`) are first-class on the published site. Prefer wikilinks over raw markdown links so Quartz can resolve them and feed them into the graph view and backlinks.
- Wikilinks pointing into excluded folders (e.g., `[[raw/Source Index]]`, `[[templates/Kolbs Template]]`) will render as broken on the site. They are still valuable inside Obsidian; leave them unless the user asks for a cleanup.
- When adding a new wiki page, prefer placing it under one of the existing top-level subfolders in `wiki/` (`Concepts/`, `Decision Making/`, `Techniques/`, `Workflows/`, `Models/`, `Dimensions/`, `Language/`, `People/`, `Papers/`, `Resources/`, `Syntheses/`, `Tools/`).
- Do not commit `node_modules/`, `public/`, or `.quartz-cache/`. These are gitignored.
- Avoid editing upstream Quartz framework files unless the customization requires a small local component. Prefer `quartz.config.ts`, `quartz.layout.ts`, and dedicated custom components.
- The site's home page is rendered from `index.md`, which is the public LLM Knowledge Base landing page.
- The full content-oriented wiki catalog lives at `notes/index.md`.

Local preview workflow:

- One-time: `bash tools/scripts/setup-site.sh`
- Preview: `npm run serve` then open <http://localhost:8080>
- Build: `npm run build` (output in `public/`)
