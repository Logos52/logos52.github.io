# Search

Inline Pagefind in the Chrome bar. A visitor types a note title and opens a hit. There is no modal.

Source: `src/components/Chrome.astro`, `src/islands/search-inline.ts`. `scripts/ensure-pagefind.mjs` runs from `predev`.

## Sub-features

- `search-field` is `input.kb-search-input[data-search-input]` with `aria-label="Search notes"` and placeholder `Find a note… (⌘K)`.
- `search-phone` at ≤720px hides that field until `button#kb-search-btn` (`aria-label="Search"`) adds `search-open` on `.kb-chrome__inner` and focuses the input. Control/Meta+K on that width opens the field the same way.
- `search-results` is `[data-search-results]`, `hidden` until open. Hits are `a.kb-ac-row` with `.kb-ac-title`, optional `.kb-ac-domain`, and `.kb-ac-ex`.
- `search-empty` is `.kb-ac-empty` with text `No notes found.`
- `search-keys` are ArrowUp, ArrowDown, Enter, and Escape. Control/Meta+K focuses the input. Enter opens the highlighted row, else the first row.

## How to get to it (user POV)

Land on any page with Chrome. On a laptop, click the search field in the header, or press ⌘K / Ctrl+K. On a phone-width window, click the magnifier first. Type. Click a row or press Enter.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- The drive is at laptop width, so `input[aria-label="Search notes"]` is visible without the magnifier. A phone-width pass clicks `button[aria-label="Search"]` first and waits until `.kb-chrome__inner` has class `search-open`.
- `dist/pagefind/pagefind.js` exists (launch's `predev` builds it when it is missing).

- **Focus the field.** On `/`, click `input[aria-label="Search notes"]`.
- **Query.** Type `How Chinese Characters Work`.
- **Wait for rows.** `[data-search-results]` is not `hidden`. A `.kb-ac-row` or `.kb-ac-empty` is present. Wait for the row, not a fixed sleep (the input debounces about 110ms, and the first query may still be loading Pagefind).
- **Read the first row.** `.kb-ac-title` is `How Chinese Characters Work`. `.kb-ac-domain` is `Language`.
- **Open it.** Click that row (or press Enter).
- **Resulting state.** URL is `/wiki/Language/Chinese/How-Chinese-Characters-Work/`. `h1.kb-note-title` is `How Chinese Characters Work`. The type pill's trimmed text is `Hub` (the paint is uppercase).

Do not stub `/pagefind/pagefind.js`. When the dropdown stays on `Search index loading…`, the index was not built. Record that and stop.

## Gotchas

- Pagefind is emitted at `dist/pagefind/` on `astro build`. `predev` runs `scripts/ensure-pagefind.mjs`, which builds the whole site when that file is missing. A fresh checkout's first `npm run dev` is slow. Search before that build finishes shows the loading line.
- Vite must not bundle `/pagefind/pagefind.js` (`astro.config.ts` `external-pagefind`). A transform-time import error is a product or setup bug.
- Results cap at eight. The keyboard highlight class is `.kb-ac-row.on`.
- `.kb-ac-domain` is `DOMAIN_LABELS` (`src/lib/types.ts`): `Learning`, `Agentic`, `Language`, `Focus`, `Mind`, `Generativity`. Assert the chip text and the note `h1`, not a hyphen count in the address bar.
- The excerpt is Pagefind HTML. `excerptHtml` keeps `<mark>` and `dropTitlePrefix` strips a leading restatement of the title. Visible `<mark>` characters in the excerpt are a product bug. Record them.
- `Vibe Coding` is not a search target. That page was removed. Do not treat a miss on that title as a search failure.
- At ≤720px the field is `display: none` until the magnifier opens it. A laptop pass that clicks the magnifier is clicking a hidden button.
- Drive search on http://127.0.0.1:4321. Leave https://logos52.github.io alone.
