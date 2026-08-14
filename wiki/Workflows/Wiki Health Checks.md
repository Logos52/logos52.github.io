---
title: "Wiki Health Checks"
type: workflow
status: developing
created: 2026-05-02
updated: 2026-08-14
written-by: grok
model: grok
source-count: 2
tags:
  - workflow
  - lint
  - llm
  - audit
  - maintenance
---

# Wiki Health Checks

The wiki holds its coverage, consistency, and source discipline only under a scheduled review. Lint is that review: contradictions, orphans, sources, and — in a public repo — whether anything private has leaked. The artifact is a dated report, not a rewrite.

## The checks, then the report

Lint is a periodic review of coverage, contradictions, orphans, source discipline, and publication risk. An orphan is a page nothing else points to.

1. Uncompiled sources.
2. Wiki pages with no sources.
3. Orphan pages.
4. Broken links.
5. Duplicate concepts.
6. Contradictory claims.
7. Stale pages superseded by newer sources.
8. Good candidate pages not yet written — flagged, not created. [[wiki/Workflows/Wiki Breakdown Pass|Wiki Breakdown Pass]] tables then creates.
9. Public/private publication risk. Private means untracked, not merely un-rendered. In a public GitHub repo this is not optional color.

Write the report to `01 - Workbench/GPT - YYYY-MM-DD Wiki Health Check.md` unless the user asks for a different location. The report carries a summary, findings, suggested edits, and a `log.md` line. Unresolved questions auto-append only to `outputs/generated-questions.md`, never to [[journal/index|journal openQuestions]]. Pages are not created during the check.

A check that only counts broken links, creates pages, dumps into the human journal, or skips privacy is the case against. The price is a dated workbench file, not a rewrite tour. A report with no privacy line in a public repo, or questions appended to the journal, is the quit signal. The checkable residue is the file at that filename, a log line, and the generated-questions bucket receiving any auto-appends.

The review happened. The artifact is the dated report.

## Links into the knowledge base

- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — why a compiled wiki needs audits.
- [[Raw to Wiki Compilation|Raw to Wiki Compilation]] — ingest sibling.
- [[journal/index|journal openQuestions]] — human orientation. Do not auto-append here.

## Open Questions

How often is "periodic" when the vault is under regen versus when it is quiet?

## Sources

- [[AGENTS]] — live Lint operation.
- [[wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems|LLM Knowledge Systems]] — why a compiled wiki needs audits.
