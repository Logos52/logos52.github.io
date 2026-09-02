# H2 — Domain color system (single source of truth)

Today the graph palette is defined twice and disagrees (`quartz.layout.ts` legend/colorRules vs `HomeLanding.tsx` colorRules). Replace both with one module.

## 1. Create `quartz/domains.ts`

Export `DOMAINS: Domain[]` where `Domain = { id, label, color, prefixes: string[] }`. Locked palette:

| id | label | color | folder prefixes (`wiki/…`) |
|----|-------|-------|----------------------------|
| learning | Learning | `#b968ff` | `Dimensions/`, `Syntheses/`, `Techniques/`, `Learning Craft/` |
| agentic | Agentic & systems | `#4f9dff` | `Systems/`, `Workflows/` |
| concepts | Concepts | `#9aa4ff` | `Concepts/` |
| focus | Focus & self-management | `#ff6fa3` | `Self Management/` |
| decisions | Decision making | `#ff8a3d` | `Decision Making/` |
| redteam | Red team | `#ff4d4d` | `Red Team/` |
| language | Language | `#ffb000` | `Language/`, `Resources/` |
| minimalism | Minimalism | `#9aa0a6` | `Minimalism/` |
| money | Money | `#2fa36b` | `Money/` |
| reference | Reference | `#88c4b7` | `Books/`, `Experiences/`, `Domains/` |

Fallback for unmatched slugs: `#6f6875`. Export helpers `domainOf(slug)` and `colorOf(slug)`, matching on `wiki/{prefix}` (mind URL-slugged forms — folders with spaces become dashed slugs; match against the slugged prefix, verify against real slugs in the build).

## 2. Wire it everywhere, delete the old palettes

- `quartz.layout.ts`: `graphLegend` and `graphColorRules` are generated from `DOMAINS`. Delete the hand-written arrays (including the `black-white` special case).
- `HomeLanding.tsx`: delete its local `colorRules`; import from `domains.ts`. (Full HomeLanding rebuild happens in H4 — for now just unify the source.)
- Note-page accent: in the content header, render a 2px rule under ContentMeta in `colorOf(slug)`, and color the breadcrumb's first segment the same. Wiki pages only; non-wiki pages use the accent purple.
- Tag chips keep neutral styling (tags are cross-domain; do not color chips by domain).

## Acceptance

- `grep -rn "#b968ff\|colorRules" quartz/` shows colors defined in exactly one file.
- A Language page shows an amber accent rule; a Red Team page shows red; graph node colors match the page accents.
- Build passes. Commit: `atlas(H2): single-source domain palette, wired into graph, accents, legend`.
