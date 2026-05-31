---
type: database
---
# Tasks

> **Frontmatter:** `type: task`, `status` (Incomplete / Complete), `priority` (important + not urgent / important + urgent / not important + urgent), `do-date` (date), `time-taken`, `break-length`.

> [!tip] Automations (plugin-free — see `scripts/`)
> - **✅ task complete → break timing** (the OFFrest rule): `node scripts/complete-task.mjs "Tasks/Task 1.md" 50` stamps `time-taken` and computes `break-length`.
> - **Recurring tasks** ("weekly eval + goal tracking", "Priority 0 check-in", "Skills audit → feedback request"): kept as page-templates under `Tasks/`; duplicate them, or schedule a copy via cron/launchd (no Hermes per the automation decision).
> - Notion's **Next** board (grouped by Do Date) and **Calendar** map to the Bases table below (Bases gains board/calendar views over time).

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
