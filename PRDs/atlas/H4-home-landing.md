# H4 — Atlas homepage (rebuild HomeLanding)

Rebuild `quartz/components/HomeLanding.tsx` to the Atlas layout. All copy below is **final — use verbatim**, including capitalization. Reference mockup: dark page, top-to-bottom = hero → search → spine graph → legend chips → ledger strip → trail cards.

## Layout (top to bottom)

1. **Hero** (left-aligned, max 60ch):
   - h1, Lora: `A second brain for learning systems & agentic engineering`
   - Sub-line, mono 12px, text-secondary: `Maintained in the open — partly by LLM agents, under a fixed operating contract.`
     **Amended 2026-06-12:** sub-line copy is now `Each page explains one idea in enough detail to use it, and links to the ideas it depends on.` — per the High-Signal Front-Facing Pages standard (Writing Standards). The original line above is dead; do not restore it.
2. **Search**: reuse the existing Search component, restyled as an inline bar below the hero (~46% width desktop, full mobile). Placeholder: `Find a note…`
3. **Spine graph**: full content width, ~420px tall desktop / 260px mobile, using H3 `spineLayout` home config.
4. **Legend chips** under the graph (from `DOMAINS`), plus a trailing mono hint in text-faded: `click a domain to filter · ring = updated this week`
5. **Ledger strip**: placeholder container now; filled by H5. Render nothing if no data.
6. **Trails**:
   - Heading, Lora 14px: `Trails — guided paths through the wiki`
   - 4 cards, responsive grid (`minmax(160px, 1fr)`): surface bg, 1px border, 3px left border in the trail's domain color, title in Lora 13px, sub-line in mono 10px text-secondary. Cards are plain links — no progress UI in v0.

| Card title | Sub-line | Links to | Accent |
|---|---|---|---|
| Learning systems | `9 notes · the ICS core, start to finish` | `wiki/Syntheses/First Principles of ICS` | learning |
| Agentic engineering | `7 notes · building with agents without losing taste` | the Agentic Engineering hub page | agentic |
| Chinese characters | `11 notes · the writing system, decoded in order` | `wiki/Language/Chinese/How Chinese Characters Work` | language |
| Attention & focus | `8 notes · enter, hold, and recover focus` | `wiki/Self Management/Focus Management - How to Enter & Recover Inside a Work Block` | focus |

Note counts are authored copy, not computed — leave as written.

## Removals

- The **"Recently updated" panel is deleted** (replaced by ledger + pulse rings). 
- The old "Start here" picks section is deleted (trails replace it). Remove the fragile title-substring matching entirely.
- The "Browse by topic" tag grid is deleted from the homepage. (Tag pages still exist; reachable via tags on notes.)

## Related edits

- `notes/index.md` intro line — replace `New here? Start from a hub below — each one anchors a domain — then browse the tables for the full inventory.` with `The fastest ways in are the Map and the trails on the home page; the hubs below anchor each domain, and the tables are the exhaustive view.` (The Hubs retitle is already done — do not re-apply.)
- `about.md`: change the last sentence of the third paragraph from `New here? The [[index|home page]] (knowledge graph plus topics) is the fastest way in.` to `New here? Start with the [[index|Map]] — or pick a trail from the home page and follow it end to end.`

## Acceptance

- Home renders the six elements in order, both modes, desktop + ~390px mobile; all four trail cards resolve to real pages (verify slugs against build output).
- No remnant of Recently updated / Start here picks / topic grid in the DOM.
- Build passes. Commit: `atlas(H4): Atlas homepage — hero, search, spine graph, trails`.
