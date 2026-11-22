# Wiki index

The Notes landing is a redirect. The wiki list on Map is the index a visitor browses.

Source: `src/pages/notes.astro` (redirect to `/map/`), `src/pages/map.astro`, `src/islands/map-list.ts`. Chrome has no Notes item (`src/components/Chrome.astro`).

## Sub-features

- `notes-redirect`: `GET /notes/` is 301, `location: /map/`.
- `notes-list`: `ul[data-map-list]` of `a.map-row__link` / `.map-row__title`, filtered by `input[data-map-search]`.
- `notes-open`: one row opens a note.

## How to get to it (user POV)

Click `Map` in Chrome, or open http://127.0.0.1:4321/notes/ and follow the redirect. The brand lockup goes home.

`notes/index.md` is the Obsidian catalog. It is not this page. `CONDENSED_ENTRIES` and `HUB_ENTRIES` in `src/lib/icons.ts` are not rendered by any page.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Chrome is visible at laptop width.

- **Open the index.** From `/`, click the nav link named `Map`.
- **Resulting state.** URL is `/map` or `/map/`. `h1.data-map-title` is `Map`. Chrome `Map` has class `on`. `input[aria-label="Filter pages"]` is present.
- **Legacy URL.** Open `/notes/`. The browser lands on `/map/` with the same heading. Do not expect `main.notes-page`.
- **Open a row.** Type `Don't Outsource the Learning` into the filter. Click the `.map-row__title` with that text.
- **Land on the note.** URL is `/wiki/Learning-Craft/Don't-Outsource-the-Learning/`. `article[data-pagefind-body]` is present. `h1.reading__title` is `Don't Outsource the Learning`. The type pill's trimmed text is `Concept`. `.kb-note-dek` is present.

## Gotchas

- Do not look for `.notes-lede`, `h2.notes-head`, `.entry-list`, or a nav link named `Notes`.
- `Learning, Condensed` is not a published note (`wiki/Syntheses/` is gone). Do not treat a miss on that title as a list failure.
- The list is client-rendered from `#map-rows-data`. Wait for `.map-row__title`, not a fixed sleep.
- The filter matches title, source line, and slug.
- This page is not the gitignored `notes/catalog.md`.
