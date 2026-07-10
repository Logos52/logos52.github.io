---
title: "Wiki cleanup ritual"
type: skill-prompt
status: active
created: 2026-05-27
updated: 2026-07-09
tags:
  - tools
  - ritual
  - wiki
  - cleanup
---

# Wiki cleanup ritual

A manually-triggered periodic cleanup pass over `llm-knowledge-base`. **AI-agnostic** — any agent (Claude, Grok, ChatGPT, Hermes, others) can read this prompt and execute the steps. Output goes to `01 - Workbench/wiki-cleanup-{YYYY-MM-DD}.md` for Wedge's review before any change is applied to the wiki itself.

## Intent

Surface — not silently fix — the issues worth looking at during a deliberate downtime session. The agent reports; Wedge curates.

## What to check

Scan the vault and produce a markdown report with these sections.

### 1. Unprocessed sources

Files in `raw/inbox/` that haven't been promoted to `raw/sources/` or `raw/processed/`. For each: filename · `description` from frontmatter · age in days since `created`.

### 2. Sourceless wiki pages

Pages in `wiki/` where `type` is `brief | concept | synthesis | technique` AND the `source` / `sources` frontmatter is missing or empty, and there is no `## Sources` section.

### 3. Stuck workbench items

Files in `01 - Workbench/` (excluding `README.md`, `Workbench.md`, and `.gitkeep`) whose `file.mtime` is older than 14 days. Possibly forgotten WIP.

### 4. Audit-due

Notes where `last-audited` is older than 90 days, OR notes of `type: brief | concept | synthesis` with no `last-audited` field at all.

### 5. Untagged

Pages in `wiki/` with empty or missing `tags`. Limits discoverability.

### 6. Status stagnation

Notes with `status: seed` or `status: developing` whose `file.mtime` is older than 60 days. Promote, demote, or archive candidates. Prefer `stable` over `mature` when promoting (see `AGENTS.md`).

### 7. Generated-questions backlog

Count items in `outputs/generated-questions.md`. If more than 20 open bullets, flag for pruning. (These are AI-deposited per `AGENTS.md` step 7.)

### 8. Orientation drift

Compare `00 Command Center/Active Questions.md` with `journal/index.md` frontmatter `openQuestions` and "What's top of mind." Flag if they diverge. Do not invent a third queue.

### 9. Orphans

Notes with zero inbound links AND zero outbound links. Possibly stale. Exclude intentional redirects (`type: redirect`).

### 10. Possible duplicates

Pages with very similar titles or first-paragraph content. Heuristic only — list candidates; do not merge.

## Output format

Single markdown file at `01 - Workbench/wiki-cleanup-{YYYY-MM-DD}.md`. Use `## Section`, one bullet per item: `path · key fields · brief suggestion`. Scannable, no narrative.

## Boundaries

- **Do not edit any wiki page.** Output only.
- **Do not delete anything.**
- **Do not append to `02 - System/Open Questions.md`.** That file is an archived stub. Auto-appends go to `outputs/generated-questions.md` per `AGENTS.md` step 7. Live human orientation is journal + Active Questions.
- Respect frontmatter conventions described in `AGENTS.md` and `CLAUDE.md`.
- Stay inside `wiki/`, `raw/`, `01 - Workbench/`, `outputs/`, `00 Command Center/`, and `journal/index.md` (orientation check only). Do not scan `decisions/`, `PRDs/`, full `journal/` bodies, or `mg-kolbs/` unless Wedge asks.

## How Wedge triggers it

> "Run the wiki cleanup ritual at `tools/wiki-cleanup-ritual.md`."

The instructions above are everything an agent needs. No tool-specific syntax required.
