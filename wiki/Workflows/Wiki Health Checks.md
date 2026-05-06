---
type: workflow
status: seed
created: 2026-05-02
updated: 2026-05-02
source-count: 1
last-audited:
tags:
  - llm
  - audit
  - maintenance
---

# Wiki Health Checks

Wiki health checks are periodic LLM-assisted reviews that improve coverage, consistency, and source discipline.

## Checks

- Uncompiled sources.
- Wiki pages with no sources.
- Orphan pages.
- Broken links.
- Duplicate concepts.
- Contradictory claims.
- Stale pages.
- Missing glossary terms.
- Good candidate pages not yet written.

## Output

Write health check reports to `outputs/audits/`.

Each report should include:

- Summary.
- Findings.
- Suggested edits.
- Pages created or updated.
- Questions added to [[00 Command Center/Open Questions|Open Questions]].
- Entry appended to [[log|log.md]].

## Related Concepts

- [[wiki/Concepts/LLM Knowledge Systems|LLM Knowledge Systems]]
- [[Raw to Wiki Compilation]]

## Sources

- [[llm-wiki|llm-wiki]]
