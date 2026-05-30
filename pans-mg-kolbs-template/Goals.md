---
type: database
---
# 🎯 Goals

> Anchored, medium-term goals. **Frontmatter:** `type: goal`, `status` (Not started / In progress / Archived), `start-date`, `end-date`.

## Live view (Obsidian)

```base
filters:
  and:
    - file.inFolder("pans-mg-kolbs-template/Goals")
views:
  - type: table
    name: Active
    filters:
      and:
        - status != "Archived"
    order:
      - file.name
      - status
      - start-date
      - end-date
```
