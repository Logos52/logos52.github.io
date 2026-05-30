---
type: database
---
# Goal Tracking

> The weekly evaluation cadence that links back to Skills (and feeds the skills radar's "last tracked").
> **Frontmatter:** `type: goal-tracking`, `date`, `performance-goals` (text), `skills-evaluation` (text). Links: `next-weeks-focus`, `skills`. Default entry template: **@Today**.

## Live view (Obsidian)

```base
filters:
  and:
    - file.inFolder("pans-mg-kolbs-template/Goal Tracking")
views:
  - type: table
    name: Tracking
    order:
      - file.name
      - date
      - performance-goals
      - skills-evaluation
```
