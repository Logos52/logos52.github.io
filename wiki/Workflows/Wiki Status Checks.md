---
type: workflow
status: seed
created: 2026-05-08
updated: 2026-05-08
source-count: 1
tags:
  - llm
  - workflow
  - maintenance
  - wiki-health
---

# Wiki Status Checks

The knowledge base needs lightweight read-mostly audits that answer: what shape is it in right now, and what should improve next?

## When To Use

Use a status check when the user asks:

- what needs cleanup,
- whether the wiki is healthy,
- what pages are most important,
- what should be improved next,
- or whether the public site has obvious structure problems.

## Workflow

1. Read [[notes/index|notes/index.md]], recent [[log|log.md]] entries, and the top-level `wiki/` folders.
2. Count wiki pages by folder and page type when useful.
3. Identify recently updated pages.
4. Identify likely orphans, pages missing source sections, stale pages, and bloated pages.
5. Check for public/private risk at a high level.
6. Return a concise report with recommended next actions.
7. Write a durable report to `outputs/audits/YYYY-MM-DD - Wiki Status.md` only if the report is substantial.

## What To Report

Useful status fields:

| Field | Purpose |
| --- | --- |
| Page counts | Shows where the wiki is growing. |
| Recently updated pages | Shows current activity. |
| High-value pages | Shows pages that anchor the system. |
| Orphan candidates | Shows pages that need links. |
| Split candidates | Shows pages that may be too broad. |
| Source gaps | Shows pages that need better citation. |
| Public/private risks | Protects paid, private, or sensitive material. |
| Recommended next actions | Turns the audit into a plan. |

## Rules

- Do not reorganize files during a status pass unless the user asks.
- Do not rewrite pages during a status pass unless there is a clear small fix.
- Prefer concrete page-level recommendations over generic advice.
- Keep the report short enough to act on.

## Related

- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]]
- [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]]
- [[00 Command Center/Writing Standards|Writing Standards]]

## Sources

- [[AGENTS]]
