# Search

The header field filters the rows already on the page. It does not open a Pagefind dropdown and it does not navigate to a hit.

Source: `src/layouts/Base.astro` (`input#site-search`), `src/scripts/ndc-ui.ts`, `src/scripts/ndc-search.ts` (`bindSearch`). Hide rule: `[data-search-hide]` in `src/styles/ndc/extras.css`.

## Sub-features

- `search-field` is `input#site-search` with `aria-label="Search this page"` and placeholder `Search`. A `kbd` shows `/`.
- `search-rows` are `.works > a`, `.journal > a`, `.pages > a`, `.pl-list > a`, `a.rw`, `.ex-hubs > a`, and `.archived a`. A non-match gets `data-search-hide`. `svg.diagram a.node` uses `data-title` and `data-search-dim`.
- `search-keys`: `/` focuses the field unless focus is already in an input or textarea. Escape clears the field, re-runs the filter, and blurs. Enter goes to `/?q=…` only when the page has no search rows. On a page that has rows, Enter does not navigate.
- A `?q=` on a page that has rows prefills the field and runs the filter.

## How to get to it (user POV)

The field is in the bar on every `Base` page and on the static About and Tsumugu pages. Click it, or press `/`. Type. Matching rows stay. The rest get `data-search-hide`.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Laptop width.

- **Focus the field.** On `/`, click `input#site-search` (or `input[aria-label="Search this page"]`).
- **Query.** Type `Tsumugu`.
- **Read the filter.** The URL stays `/`. `section#work .works a[href="/projects/tsumugu/"]` does not have `data-search-hide`. A `.journal a` whose text does not contain `Tsumugu` has `data-search-hide`.
- **Clear.** Press Escape. The input value is empty and that journal row no longer has `data-search-hide`.

Do not stub `/pagefind/pagefind.js`. This field does not request it. `src/islands/search-inline.ts` is not imported.

## Gotchas

- There is no `input[aria-label="Search notes"]`, no `[data-search-results]`, no `a.kb-ac-row`, and no `button#kb-search-btn`. Control/Meta+K does not focus this field. `/` does.
- Journal board rows are `a.jr-row`. They are not in `searchRows()`, so `/journal/` has nothing to filter. Enter there navigates to `/?q=`.
- The Projects whiteboard uses `a.wb-card`, which is not in `searchRows()`. The List view's `.pl-list > a` is. Drive the filter on `/`, where `.works a` and `.journal a` exist on load.
- The field stays in the bar at phone width. It is not behind a magnifier.
