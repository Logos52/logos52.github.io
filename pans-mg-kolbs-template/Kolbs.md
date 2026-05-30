---
type: database
---
# Kolbs

> A Kolb's reflective cycle: Experience → Reflection → Abstraction → Experimentation.
> **Frontmatter:** `type: kolbs`, `status` (Not started / In progress / Done), `start`, `finish`, `mgs-and-experiments` (text). Links: `next-kolbs`, `previous-kolbs` (self), `skills`. `duration` derived from finish − start.

> [!tip] The ☑️ cycle button
> In Notion, the purple ☑️ button completes the current Kolbs and creates + opens the next. In Obsidian this is reproduced by a QuickAdd + Templater macro (see `/scripts`): set current `status: Done`, create the next Kolbs from template, link `previous-kolbs`/`next-kolbs`, and open it. (Tier 2: pre-fill the new cycle with AI-suggested marginal gains from the previous reflection.)

## Live view (Obsidian)

```base
filters:
  and:
    - file.inFolder("pans-mg-kolbs-template/Kolbs")
views:
  - type: table
    name: Kolbs
    order:
      - file.name
      - status
      - start
      - finish
```
