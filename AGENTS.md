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

## Three Layers

### 1. Raw Sources

Raw sources are the source of truth. They may include articles, transcripts, papers, screenshots, repos, datasets, or clipped web pages.

Current raw-source locations:

- `raw/`
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
- Keep `index.md` current.
- Keep claims source-grounded.

The human mostly reads the wiki and gives direction.

### 3. Schema

`AGENTS.md` is the operating schema for the LLM. Update it when the workflow changes.

`index.md` and `log.md` are special navigation/history files and must be maintained as part of normal work.

## Special Files

### `index.md`

Content-oriented catalog of the wiki. Read this first before answering questions or compiling sources.

It should list important wiki pages with:

- Link.
- One-line summary.
- Type/category.
- Status.
- Source count when useful.

Update `index.md` whenever wiki pages are created, deleted, renamed, or substantially changed.

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

1. Read `index.md`, `raw/Source Index.md`, and recent `log.md` entries.
2. Read the new source from `raw/` or `Clippings/`.
3. Identify source metadata: title, author, URL, date, type, topic, and publication/privacy risk.
4. Add or update the source row in `raw/Source Index.md`.
5. Write or update relevant wiki pages.
6. Update related pages that the new source strengthens, contradicts, or reframes.
7. Add backlinks between source, concepts, techniques, workflows, tools, and outputs.
8. Update `index.md`.
9. Append an `ingest` or `compile` entry to `log.md`.

Prefer one-source-at-a-time ingest when the user wants close supervision.

### Query

Use when the user asks a question against the wiki.

Workflow:

1. Read `index.md` first.
2. Search relevant terms across `wiki/`, `raw/`, `Clippings/`, and `outputs/`.
3. Read the most relevant wiki pages before raw sources.
4. Read raw sources only when the wiki is insufficient or citations need checking.
5. Write the answer to `outputs/answers/YYYY-MM-DD - Short Question Title.md` when the answer is durable.
6. Include consulted wiki pages and sources.
7. Add unresolved issues to `00 Command Center/Open Questions.md`.
8. Promote durable insights back into `wiki/`.
9. Update `index.md` if wiki pages changed.
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

## Page Standards

Every durable wiki page should include:

- YAML frontmatter with `type`, `status`, `created`, `updated`, `source-count`, and `tags`.
- A short summary near the top.
- Related concept links.
- A `Sources` section.
- An `Open Questions` section when uncertainty remains.

Preferred page types:

- `concept`
- `technique`
- `workflow`
- `tool`
- `paper`
- `person`
- `synthesis`
- `glossary`
- `bibliography`
- `timeline`

Preferred statuses:

- `seed`
- `developing`
- `mature`
- `needs-review`

## Source Discipline

- Do not fabricate sources, citations, authors, publication dates, URLs, or claims.
- If a claim is uncertain, mark it explicitly.
- Use source links or local source-note links for factual claims.
- Do not copy long copyrighted passages into public wiki pages.
- Summarize and synthesize in original language.
- Keep copyrighted full-text transcripts local/private unless the user explicitly decides otherwise.

## Writing Style

- Write concise technical prose.
- Prefer concrete explanations, examples, tradeoffs, and failure modes.
- Use Obsidian links for internal concepts: `[[wiki/Concepts/Metacognition|Metacognition]]`.
- Use normal markdown links for external URLs.
- Avoid decorative formatting that makes files harder to diff.

## Outputs

Durable answers should be saved in `outputs/`.

Output types:

- `outputs/answers/` for question answers.
- `outputs/briefs/` for short memos and synthesis briefs.
- `outputs/diagrams/` for Mermaid diagrams, charts, and visual outputs.
- `outputs/slides/` for Marp-style slide decks.
- `outputs/audits/` for health checks.

Good outputs should not disappear into chat history. If an output creates durable understanding, promote it into `wiki/`.

## Tooling

At small scale, `index.md` plus `rg` is enough.

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

The wiki is also published as a static site at <https://logos52.github.io/llm-knowledge-base>. The site is built by Quartz v4 from the repo root. Pushes to `main` trigger an automatic rebuild via `.github/workflows/deploy.yml`.

What gets published vs. what stays local:

- Published: `wiki/`, `00 Command Center/`, `index.md`, `log.md`, `README.md`, `AGENTS.md`.
- Excluded from the site (still in repo): `raw/`, `Clippings/`, `outputs/`, `templates/`, `tools/`, `.obsidian/`.

Exclusions live in `quartz.config.ts → ignorePatterns`. Do not move published content into excluded folders or vice versa without updating that list.

Rules for LLM agents:

- Wikilinks (`[[Page]]` and `[[path/to/Page|Alias]]`) are first-class on the published site. Prefer wikilinks over raw markdown links so Quartz can resolve them and feed them into the graph view and backlinks.
- Wikilinks pointing into excluded folders (e.g., `[[raw/Source Index]]`, `[[templates/Kolbs Template]]`) will render as broken on the site. They are still valuable inside Obsidian; leave them unless the user asks for a cleanup.
- When adding a new wiki page, prefer placing it under one of the existing top-level subfolders in `wiki/` (`Concepts/`, `Techniques/`, `Workflows/`, `Models/`, `Dimensions/`, `Language/`, `People/`, `Papers/`, `Resources/`, `Syntheses/`, `Tools/`).
- Do not commit `node_modules/`, `public/`, or `.quartz-cache/`. These are gitignored.
- Do not edit files in `quartz/` (the framework) directly. Customizations belong in `quartz.config.ts` and `quartz.layout.ts`.
- The site's home page is rendered from `index.md`. Treat it as the catalog/landing copy.

Local preview workflow:

- One-time: `bash tools/scripts/setup-site.sh`
- Preview: `npm run serve` then open <http://localhost:8080>
- Build: `npm run build` (output in `public/`)
