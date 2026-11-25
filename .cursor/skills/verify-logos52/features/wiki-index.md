# Notes index

The Notes page lists condensed doctrine and cluster hubs. It is the nav `Notes` item. It is not a redirect, and it is not the filterable list on Map.

Source: `src/pages/notes.astro` (`active="notes"`), `src/lib/icons.ts` (`CONDENSED_ENTRIES`, `HUB_ENTRIES`). The header nav includes Notes (`src/components/Chrome.astro`).

## Sub-features

- `notes-page`: `GET /notes/` is 200. The address stays on `/notes/`. `main.notes-page` is present. There is no `h1`.
- `notes-condensed`: `h2.notes-head` text `Condensed`, then `ul.entry-list` of `.entry-list__title`.
- `notes-hubs`: a second `h2.notes-head` text `Hubs`, then another `ul.entry-list`.
- `notes-open`: one entry opens a note.

## How to get to it (user POV)

Click the nav link `Notes`, or open http://127.0.0.1:4321/notes/. The wordmark goes home.

`notes/index.md` is the Obsidian catalog the page comment says the lists stay aligned with. The rendered lists are `CONDENSED_ENTRIES` and `HUB_ENTRIES`.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- The page is at laptop width.

- **Open the index.** From `/`, click the nav link named `Notes`.
- **Resulting state.** URL is `/notes` or `/notes/`. There is no `h1`. The nav link `Notes` has class `on`. `h2` text `Condensed` and `h2` text `Hubs` are present.
- **Open a hub that exists.** Click the `.entry-list__title` whose text is `Chinese Characters`.
- **Land on the note.** URL is `/wiki/Language/Chinese/How-Chinese-Characters-Work/`. `article[data-pagefind-body]` is present. `h1.kb-note-title` is `How Chinese Characters Work`. `span.kb-type-tag` text is `Hub`. `p.kb-note-dek` is present.

## Product gaps

`Learning, Condensed` (the first Condensed row) hrefs `/wiki/Syntheses/Learning,-Condensed/`, which is 301 to `/wiki/Razors/` (`src/redirects/doors/self.json`). The heading there is `Razors`. The Hubs row `Learning Systems` hrefs `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/` and lands on the same note. Leave the pages alone. Do not treat `Razors` as a successful open of either title.

## Gotchas

- Do not expect a 301 to `/map/`, `main` with no `notes-page`, or a filter `input[data-map-search]`. The wiki list on Map was removed with `src/islands/map-list.ts`.
- Do not look for `h1[data-map-title]` on this page.
- The Notes link takes class `on` when this page is current. There is no `aria-current`.
- This page is not the gitignored `notes/catalog.md`.
