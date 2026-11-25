# Search

Inline Pagefind in the mast. A visitor types a note title and opens a hit. There is no modal.

Source: `src/components/Mast.astro`, `src/islands/search-inline.ts`, `src/lib/types.ts` (`DOMAIN_LABELS`), `src/lib/domain.ts`. `scripts/ensure-pagefind.mjs` runs from `predev`.

## Sub-features

- `search-field` is `input.find__input[data-search-input]` with `aria-label="Search notes"` and placeholder `Search`.
- `search-phone` at ≤48rem hides that field until `button#search-btn` (`aria-label="Search"`) adds `is-search` on `.mast` and focuses the input. Control/Meta+K on that width opens the field the same way.
- `search-results` is `[data-search-results]`, `hidden` until open. Hits are `a.find__row` with `.find__title`, optional `.find__domain`, and `.find__excerpt`.
- `search-empty` is `.find__empty` with text `No notes found.`
- `search-keys` are ArrowUp, ArrowDown, Enter, and Escape. Control/Meta+K focuses the input. Enter opens the highlighted row, else the first row.

## How to get to it (user POV)

Land on any page with the mast. On a laptop, click the search field in the header, or press ⌘K / Ctrl+K. On a phone-width window, click the magnifier first. Type. Click a row or press Enter.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- The drive is at laptop width, so `input[aria-label="Search notes"]` is visible without the magnifier. A phone-width pass clicks `button[aria-label="Search"]` first and waits until `.mast` has class `is-search`.
- `dist/pagefind/pagefind.js` exists (launch's `predev` builds it when it is missing).

- **Focus the field.** On `/`, click `input[aria-label="Search notes"]`.
- **Query.** Type `How Chinese Characters Work`.
- **Wait for rows.** `[data-search-results]` is not `hidden`. An `a.find__row` or `.find__empty` is present. Wait for the row, not a fixed sleep (the input debounces about 110ms, and the first query may still be loading Pagefind).
- **Read the first row.** `.find__title` is `How Chinese Characters Work`. `.find__domain` text is `Making sense of the world` (`wiki/Language/` resolves to domain `world`). The stylesheet does not uppercase that text. Match the DOM text.
- **Open it.** Click that row (or press Enter).
- **Resulting state.** URL is `/wiki/Language/Chinese/How-Chinese-Characters-Work/`. `h1.reading__title` is `How Chinese Characters Work`. `p.reading__meta` starts with `Hub`. A row opens on `mousedown` (`window.location`), so a click that never presses the mouse misses the handler. Enter still opens the highlighted row, else the first row.

Do not stub `/pagefind/pagefind.js`. When the dropdown stays on `Search index loading…`, the index was not built. Record that and stop.

## Gotchas

- Pagefind is emitted at `dist/pagefind/` on `astro build`. `predev` runs `scripts/ensure-pagefind.mjs`, which builds the whole site when that file is missing. A fresh checkout's first `npm run dev` is slow. Search before that build finishes shows the loading line.
- Vite must not bundle `/pagefind/pagefind.js` (`astro.config.ts` `external-pagefind`). A transform-time import error is a product or setup bug.
- Results cap at eight. The keyboard highlight class is `.find__row.on`.
- `.find__domain` is the five labels in `DOMAIN_LABELS` (`src/lib/types.ts`): `Working well with AI`, `Learning faster`, `Managing yourself`, `Making sense of the world`, `Money and craft`. Legacy keys `agentic`, `language`, `focus`, `mind`, and `gen` fold into those five. `src/styles/site.css` does not uppercase the chip and does not cap it at 84px. Match the DOM text, not the old chip `Language`.
- The excerpt is Pagefind HTML. `excerptHtml` keeps `<mark>` and `dropTitlePrefix` strips a leading restatement of the title. Visible `<mark>` characters in the excerpt are a product bug. Record them.
- `.find__title` ellipsizes when the dropdown is narrow. The domain chip does not. Read the DOM text, then confirm with the note `h1` after the click.
- At `max-width: 48rem` the field is `display: none` until the magnifier opens it. A laptop pass that clicks the magnifier is clicking a hidden button.
- Drive search on http://127.0.0.1:4321. Leave https://logos52.github.io alone.
