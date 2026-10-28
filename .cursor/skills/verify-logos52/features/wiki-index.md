# Wiki index

The Notes page is the hand-curated front door: Condensed doctrine plus Hubs. Visitors reach it from Chrome.

Source: `src/pages/notes.astro` (`active="notes"`), `CONDENSED_ENTRIES` and `HUB_ENTRIES` in `src/lib/icons.ts`. `[...slug].astro` skips `notes/index` because this page owns `/notes/`.

## Sub-features

- `notes-lede` points at search and the Map (`.notes-lede`, link to `/map/`).
- `notes-graph` is a full constellation (`[data-constellation-root][data-mode="full"]`).
- `notes-condensed` is the `.entry-list` under `h2.notes-head` `Condensed`.
- `notes-hubs` is the list under `h2.notes-head` `Hubs`.
- `notes-open` follows one row to a note page.

## How to get to it (user POV)

Click `Notes` in the sticky Chrome nav, or open http://127.0.0.1:4321/notes/. The brand lockup goes home. The Map link in the lede goes to `/map/`.

The vault file `notes/index.md` is the Obsidian catalog. The published UI is the Astro page at `/notes/`.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Chrome is visible at laptop width, so the `Notes` link is on the bar (at ≤720px, open the menu first).

- **Open the index.** From `/`, click the nav link named `Notes`.
- **Resulting state.** URL is `/notes` or `/notes/`. `main.notes-page` is present. Chrome `Notes` has class `on`. Headings `Condensed` and `Hubs` are present. At least one `.entry-list a` is present.
- **Open a row.** Click the `.entry-list__title` whose text is `Learning, Condensed`.
- **Land on the note.** `article[data-pagefind-body]` is present. `h1.kb-note-title` is `Learning, Condensed`. `.kb-note-dek` is present. The type pill reads `Condensed`.
- **Return.** Click Chrome `Notes`. On the note, the first crumb `wiki` goes to `/folder/wiki/`, which is a folder listing, not this index.

## Gotchas

- Chrome href is `/notes` (no trailing slash). `trailingSlash` is `ignore`, so `/notes` and `/notes/` both serve.
- `GET /notes/index/` is 404. The published index is `/notes/` (`src/pages/notes.astro`). Leave the 404 as a 404.
- `notes/index.md` lists two hubs that `HUB_ENTRIES` omits: Using Grok Bot and pstack. Those titles are absent from the live Notes page. Record the gap. Do not edit `icons.ts` from this skill.
- Learning Systems and Attention & Self-Management on the published page point at `Are You Learning, or Just Using Techniques` and `Flow State`. Those hrefs are direct.
- This page is not the gitignored `notes/catalog.md`.
