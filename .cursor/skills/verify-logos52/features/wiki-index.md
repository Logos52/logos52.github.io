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
5. Use `.kb-crumb a` back toward `/notes/` if you need the index again.

## Gotchas

- Chrome href is `/notes` (no trailing slash). `trailingSlash` is `ignore`, so `/notes` and `/notes/` should both work.
- `/notes/index/` is not a generated slug. Treat a 404 there as a routing fact, not something to hide by rewriting the map to a URL that 200s.
- `notes/index.md` and `HUB_ENTRIES` can drift. Example already on this tree: the vault lists Learning Systems → `Are You Learning, or Just Using Techniques`; `icons.ts` lists Learning Systems → `First Principles of Learning`. Record drift; do not "fix" it in the skill.
- This page is not the gitignored `notes/catalog.md`.
