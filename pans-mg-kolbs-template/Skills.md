---
type: database
---
# Skills

> Skill = something you're developing toward a goal. Track current vs. final level and competency stage (CI → CC → UC).
> **Frontmatter schema:** `type: skill`, `status` (Active / Paused / Inactive / Archived), `current-level` (1–10), `final-level` (1–10), `competency` (CI / CC (low) / CC (medium) / CC (high) / UC), `final-level-metrics` (text). Relations as links: `anchored-goal`, `goal-tracking`, `kolbs`, `kolbs-cycles`.

## Public view (website)

| Skill | Current | Final | Competency | Status |
|-------|---------|-------|------------|--------|
| SIR | 5/10 | 7/10 | CC (low) | Active |
| Sleep | 3/10 | 9/10 | CC (high) | Active |

## Live view (Obsidian)

```base
filters:
  and:
    - file.inFolder("pans-mg-kolbs-template/Skills")
views:
  - type: table
    name: Current
    filters:
      and:
        - status == "Active"
    order:
      - file.name
      - status
      - current-level
      - final-level
      - competency
      - final-level-metrics
    columnSize:
      note.current-level: 127
      note.final-level: 124
  - type: table
    name: All
    order:
      - status
      - file.name
      - current-level
      - final-level
      - competency

```
