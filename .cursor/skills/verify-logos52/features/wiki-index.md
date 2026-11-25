# Wiki index

The Notes landing is a redirect. The wiki list on Map is the index a visitor browses.

Source: `src/pages/notes.astro` (redirect to `/map/`), `src/pages/map.astro`, `src/islands/map-list.ts`. The menu has no Notes item (`src/components/Mast.astro`). The footer repeats Map (`src/components/Colophon.astro`).

## Sub-features

- `notes-redirect`: `GET /notes/` is 301, `location: /map/`.
- `notes-list`: `ul[data-map-list]` of `a.word__link` / `.word__title`, filtered by `input[data-map-search]`.
- `notes-open`: one row opens a note.

## How to get to it (user POV)

Open the menu with `button#menu-btn` and click `Map`, or open http://127.0.0.1:4321/notes/ and follow the redirect. The wordmark goes home. A footer link named `Map` opens the same page without the menu.

`notes/index.md` is the Obsidian catalog. It is not this page. `CONDENSED_ENTRIES` and `HUB_ENTRIES` in `src/lib/icons.ts` are not rendered by any page.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- The page is at laptop width.

- **Open the index.** From `/`, click `button#menu-btn` (`aria-label="Open menu"`), then the menu link named `Map`.
- **Resulting state.** URL is `/map` or `/map/`. `h1[data-map-title]` is `Map`. The menu link `Map` has `aria-current="page"`. `input[aria-label="Filter pages"]` is present.
- **Legacy URL.** Open `/notes/`. The browser lands on `/map/` with the same heading. The response status is 301. Do not expect `main.notes-page`.
- **Open a row.** Type `Don't Outsource the Learning` into the filter. Click the `.word__title` with that text.
- **Land on the note.** URL is `/wiki/Learning-Craft/Don't-Outsource-the-Learning/`. `article[data-pagefind-body]` is present. `h1.reading__title` is `Don't Outsource the Learning`. `p.reading__meta` includes `Concept`. `.reading__dek` is present.

## Gotchas

- Do not look for `.notes-lede`, `h2.notes-head`, `.entry-list`, or a nav link named `Notes`.
- `Learning, Condensed` is not a published note title (`wiki/Syntheses/` is gone). A miss on that title in the Map list is not a list failure. `/wiki/Syntheses/Learning,-Condensed/` returns 301 to `/wiki/Dimensions/Dimensions-of-Learning/`, and that page returns 200.
- The list is client-rendered from `#map-rows-data`. Wait for `.word__title`, not `.map-row__title` and not a fixed sleep.
- The Map link does not take a class `on`. Current is `aria-current="page"`.
- The filter matches title, source line, and slug.
- This page is not the gitignored `notes/catalog.md`.
