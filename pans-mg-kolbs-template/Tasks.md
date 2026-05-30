---
type: database
---
# Tasks

> **Frontmatter:** `type: task`, `status` (Incomplete / Complete), `priority` (important + not urgent / important + urgent / not important + urgent), `do-date` (date), `time-taken`, `break-length`.

> [!tip] Automations
> - **✅ task complete → break timing** (the OFFrest rule): Tier 1 = a QuickAdd/script that stamps `time-taken` and computes `break-length`; Tier 2 optional.
> - **Recurring tasks** ("weekly eval + goal tracking", "Priority 0 check-in", "Skills audit → feedback request"): Tier 1 = Templater + Periodic Notes or a `/scripts` generator (no Hermes per the automation decision).
> - Notion's **Next** board (grouped by Do Date) and **Calendar** are approximated below with a table + the Full Calendar plugin.

## Live view (Obsidian)

```base
filters:
  and:
    - file.inFolder("pans-mg-kolbs-template/Tasks")
views:
  - type: table
    name: Next
    filters:
      and:
        - status != "Complete"
    order:
      - file.name
      - priority
      - do-date
      - status
  - type: table
    name: Past
    order:
      - status
      - do-date
      - file.name
      - priority
```
