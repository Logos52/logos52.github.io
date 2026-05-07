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

Write role before theory. A wiki page should first explain what the topic does inside this knowledge base and why it matters to the user's systems. General background comes after the page's practical role is clear.

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
- Keep `notes/index.md` current.
- Keep claims source-grounded.

The human mostly reads the wiki and gives direction.

### 3. Schema

`AGENTS.md` is the operating schema for the LLM. Update it when the workflow changes.

`notes/index.md` and `log.md` are special navigation/history files and must be maintained as part of normal work.

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

## Article Development Rules

These rules apply to newly created pages and substantial rewrites. Do not retroactively rewrite existing pages just to match this standard unless the user asks.

### Role Before Theory

A page is not a generic article about the topic. It explains why the topic matters inside this knowledge base, how it connects to the user's systems, and what practical role it serves.

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

### Type-Specific Structure

Use the structure that fits the page type:

- `concept`: definition, role in the system, practical implications, failure modes, related pages, sources.
- `technique`: purpose, when to use it, step-by-step use, examples, failure modes, related techniques, sources.
- `workflow`: trigger, inputs, steps, outputs, maintenance rules, related pages, sources.
- `synthesis`: core thesis, operating model, key takeaways, linked subpages, open questions, sources.
- `book`: core argument, longform summary, what it clarifies for this wiki, key takeaways, limits, related pages, sources.
- `tool`: what it does, when to use it, setup or operating notes, tradeoffs, related workflows, sources.
- `source note`: metadata, summary, extracted claims, useful quotes if allowed, links into the wiki.

## Source Discipline

- Do not fabricate sources, citations, authors, publication dates, URLs, or claims.
- If a claim is uncertain, mark it explicitly.
- Use source links or local source-note links for factual claims.
- Do not copy long copyrighted passages into public wiki pages.
- Summarize and synthesize in original language.
- Keep copyrighted full-text transcripts local/private unless the user explicitly decides otherwise.

## Writing Style

- Write concise technical prose.
- Prefer concrete explanations, examples, tradeoffs, failure modes, and practical use.
- Start with the page's role before abstract theory.
- Use neutral, plain, article-like prose. Let facts, examples, and source-grounded claims carry significance.
- Avoid hype, peacock words, rhetorical questions, and AI-editorial filler such as "importantly," "interestingly," and "it is worth noting."
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

- Published: `wiki/`, `00 Command Center/`, `notes/index.md`, `log.md`, `README.md`, `AGENTS.md`.
- Excluded from the site (still in repo): `raw/`, `Clippings/`, `outputs/`, `templates/`, `tools/`, `.obsidian/`.

Exclusions live in `quartz.config.ts → ignorePatterns`. Do not move published content into excluded folders or vice versa without updating that list.

Rules for LLM agents:

- Wikilinks (`[[Page]]` and `[[path/to/Page|Alias]]`) are first-class on the published site. Prefer wikilinks over raw markdown links so Quartz can resolve them and feed them into the graph view and backlinks.
- Wikilinks pointing into excluded folders (e.g., `[[raw/Source Index]]`, `[[templates/Kolbs Template]]`) will render as broken on the site. They are still valuable inside Obsidian; leave them unless the user asks for a cleanup.
- When adding a new wiki page, prefer placing it under one of the existing top-level subfolders in `wiki/` (`Concepts/`, `Techniques/`, `Workflows/`, `Models/`, `Dimensions/`, `Language/`, `People/`, `Papers/`, `Resources/`, `Syntheses/`, `Tools/`).
- Do not commit `node_modules/`, `public/`, or `.quartz-cache/`. These are gitignored.
- Avoid editing upstream Quartz framework files unless the customization requires a small local component. Prefer `quartz.config.ts`, `quartz.layout.ts`, and dedicated custom components.
- The site's home page is rendered from `index.md`. The wiki catalog lives at `notes/index.md`.

Local preview workflow:

- One-time: `bash tools/scripts/setup-site.sh`
- Preview: `npm run serve` then open <http://localhost:8080>
- Build: `npm run build` (output in `public/`)
