# Wiki index

The Notes page is the hand-curated front door: Condensed doctrine plus Hubs. Visitors reach it from Chrome, not by opening the vault file.

## Sub-features

- Lede pointing at search and the Map (`.notes-lede`, link to `/map/`)
- Full constellation (`[data-constellation-root][data-mode="full"]`)
- Condensed list `.entry-list` under `h2.notes-head` `Condensed`
- Hubs list under `h2.notes-head` `Hubs`
- Each row is an `a` with `.entry-list__title` + `.entry-list__blurb`

## How to get to it (user POV)

Click `Notes` in the sticky Chrome nav, or open http://localhost:4321/notes/. The brand lockup goes home; the Map link in the lede goes to `/map/`.

The vault file `notes/index.md` (`title: Knowledge Base Index`) is the Obsidian/agent catalog. `src/pages/[...slug].astro` skips `notes/index` because `src/pages/notes.astro` owns this route. The published UI is the Astro page at `/notes/`, filled from `CONDENSED_ENTRIES` / `HUB_ENTRIES` in `src/lib/icons.ts`.

## Driving it with computerUse

1. From `/`, click the nav link named `Notes`.
2. Resulting state: URL `/notes` or `/notes/`, `main.notes-page`, Chrome `Notes` has class `on`.
3. Assert headings `Condensed` and `Hubs`, and at least one `.entry-list a`.
4. Click `.entry-list__title` `Learning, Condensed`. Land on a note page (`article[data-pagefind-body]`, `h1.kb-note-title`).
5. To open the index again, click Chrome `Notes`. On a wiki note the first crumb is `wiki` → `/folder/wiki/`, not `/notes/`.

## Gotchas

- Chrome href is `/notes` (no trailing slash). `trailingSlash` is `ignore`, so `/notes` and `/notes/` should both work.
- `/notes/index/` is not a generated slug. Live `GET /notes/index/` is 404. Treat that as a routing fact, not something to hide by rewriting the map to a URL that 200s. The published index is `/notes/` (`src/pages/notes.astro`).
- `notes/index.md` and `HUB_ENTRIES` can drift. On this tree the Condensed slugs match. The published Hubs list is shorter than the vault index: `src/lib/icons.ts` omits Using Grok Bot, pstack, Cursor Cloud Agents, and Picking a computer. Learning Systems and Attention & Self-Management now point at `Are You Learning, or Just Using Techniques` and `Flow State`. Those are direct links. The old First Principles and Focus Management paths still 301 in `kb-astro/site-data/redirects.json`, but the Notes page does not use them. Record the missing hubs as a product gap. Do not edit `icons.ts` from this skill.
- This page is not the gitignored `notes/catalog.md`.

## Source

`src/pages/notes.astro` owns `/notes/` (`active="notes"`). Rows come from `CONDENSED_ENTRIES` and `HUB_ENTRIES` in `src/lib/icons.ts`. The graph is `<Constellation mode="full">`. `[...slug].astro` skips `notes/index`. `GET /notes/index/` is 404. The published index is `/notes/`.
