---
title: "Wiki Status Checks"
type: workflow
status: developing
created: 2026-05-08
updated: 2026-08-14
written-by: grok
model: grok
source-count: 1
tags:
  - workflow
  - maintenance
  - llm
  - wiki-health
---

# Wiki Status Checks

The knowledge base needs a read-mostly audit of present shape and next repair. The files stay where they are while the look happens. A status check is that look: not a rewrite.

## When, then the walk

Use the pass when the ask is what needs cleanup, whether the wiki is healthy, which pages matter most, what should improve next, or whether the public site has obvious structure problems.

1. Read [[notes/index|notes/index.md]], recent `log.md`, and the top-level `wiki/` folders. Also read `notes/catalog.md`. The catalog is how counts by type happen without walking the tree. It is agent-only, not a public page.
2. Count wiki pages by folder and page type when useful.
3. Identify recently updated pages.
4. Identify likely orphans, pages missing source sections, stale pages, and bloated pages. These are flags, not fixes.
5. Check for public/private risk at a high level. The deeper privacy pass lives on [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]].
6. Return a concise report with recommended next actions.
7. Write a durable report to `01 - Workbench/GPT - YYYY-MM-DD Wiki Status.md` only if the report is substantial. Append a `lint` or `maintenance` line to `log.md` when a durable report or a wiki change is made. A status pass that writes a report and leaves no log line is invisible next month.

## The report, and what it may not do

| Field | What it holds |
|---|---|
| Page counts | By folder and type |
| Recently updated | What moved |
| High-value pages | What matters now |
| Orphan candidates | Pages nothing points to |
| Split candidates | Pages [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]] may table later |
| Source gaps | Pages with no sources |
| Public/private risks | High-level only |
| Recommended next actions | Named pages, not generic advice |

1. Files are not reorganized during a status pass unless the user asks.
2. Pages are not rewritten during a status pass unless there is a clear small fix.
3. Recommendations are concrete and page-level.
4. The report stays short enough to act on. Status is read-mostly. That sentence is the page.

A status pass that reorganizes, rewrites, files a substantial report with no log line, or says "the wiki needs cleanup" with no page names is the case against. The price is a short read, a report only when substantial, and a log line if filed. Files moved, pages rewritten beyond a small fix, or a next month that cannot find the report in `log.md` are quit signals. The checkable residue is answers to the two questions, any durable file at the live path, and a `lint` or `maintenance` line if it was filed.

Shape named, next action named, tree untouched.

## Links into the knowledge base

- [[wiki/Workflows/Wiki Health Checks|Wiki Health Checks]] — full lint. Deeper, more checks. Privacy at full strength lives there.
- [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]] — the create-after-table pass. Status flags; Breakdown tables then creates.
- [[02 - System/Writing Standards|Writing Standards]] — how pages should read. Unpublished on the public site.

## Open Questions

What makes a report "substantial" enough to file — a page-count shift, a privacy flag, a split candidate, or only a user request?

## Sources

- [[AGENTS]] — live Status operation.
