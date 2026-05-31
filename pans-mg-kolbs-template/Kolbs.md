---
type: database
---
# Kolbs

> A Kolb's reflective cycle: Experience → Reflection → Abstraction → Experimentation.
> **Frontmatter:** `type: kolbs`, `status` (Not started / In progress / Done), `start`, `finish`, `mgs-and-experiments` (text). Links: `next-kolbs`, `previous-kolbs` (self), `skills`. `duration` derived from finish − start.

> [!tip] The ☑️ cycle button
> In Notion, the purple ☑️ button completes the current Kolbs and creates + opens the next. In Obsidian (plugin-free) run:
> `node scripts/new-kolbs.mjs "Kolbs/SIR 1.md"`
> — it sets the current to `status: Done`, creates the next from `Kolbs/Kolbs Template.md`, links `previous-kolbs`/`next-kolbs`, and prints the path to open. (Tier 2: have an LLM pre-fill the new cycle's marginal gains from the previous reflection.)

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
