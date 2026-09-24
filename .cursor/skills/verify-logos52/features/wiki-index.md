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
4. Click `.entry-list__title` `Learning, Condensed`. Land on a note page (`article[data-pagefind-body]`, `h1.kb-note-title` `Learning, Condensed`). The pill reads `condensed`. There is no `.kb-note-dek`.
5. To open the index again, click Chrome `Notes`. On a wiki note in this tree the first crumb is `wiki` → `/notes/`.

## Gotchas

- Chrome href is `/notes` (no trailing slash). `trailingSlash` is `ignore`, so `/notes` and `/notes/` should both work.
- `/notes/index/` is not a generated slug. Live `GET /notes/index/` is 404. Treat that as a routing fact, not something to hide by rewriting the map to a URL that 200s. The published index is `/notes/` (`src/pages/notes.astro`).
- `notes/index.md` and `HUB_ENTRIES` can drift. On this tree the Condensed slugs match. The published Hubs list does not:
  - Learning Systems href is `/wiki/Syntheses/First-Principles-of-Learning/`. The vault index names `Are You Learning, or Just Using Techniques`. Live `GET` of the published href is `301` to `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/` (`kb-astro/site-data/redirects.json`).
  - Attention & Self-Management href is the Focus Management path. Live `GET` is `301` to `/wiki/Self-Management/Flow-State/`. The vault index already names Flow State.
  - Worldviews & the Political Order is in `notes/index.md` and absent from `HUB_ENTRIES`. The live Hubs list does not show it.
- `origin/main`'s `notes/index.md` also lists Using Grok Bot, pstack, Cursor Cloud Agents, and Picking a computer. Those four are still absent from `origin/main`'s `HUB_ENTRIES`. They are not in this branch's `notes/index.md`, so the live Notes page cannot show them. On `origin/main`, Learning Systems and Attention are direct links to Are You Learning and Flow State, and Worldviews is in `HUB_ENTRIES`. Record both gaps. Do not edit `icons.ts` from this skill.
- This page is not the gitignored `notes/catalog.md`.

## Source

`src/pages/notes.astro` owns `/notes/` (`active="notes"`). Rows come from `CONDENSED_ENTRIES` and `HUB_ENTRIES` in `src/lib/icons.ts`. The graph is `<Constellation mode="full">`. `[...slug].astro` skips `notes/index`. `GET /notes/index/` is 404. The published index is `/notes/`. This tree's hub hrefs for Learning Systems and Attention still point at the redirect sources above.
