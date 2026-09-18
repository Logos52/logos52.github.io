# Search

Inline Pagefind in the Chrome bar. A visitor types a note title or a phrase and opens a hit. There is no modal.

## Sub-features

- Field `input.kb-search-input[data-search-input]` `aria-label="Search notes"` placeholder `Find a note… (⌘K)`
- Dropdown `[data-search-results]` (`hidden` until open)
- Hits `a.kb-ac-row` with `.kb-ac-title`, optional `.kb-ac-domain`, `.kb-ac-ex`
- Empty `.kb-ac-empty` `No notes found.`
- Keyboard: ArrowUp/Down, Enter, Escape; Control/Meta+K focuses the Chrome input
- Preload: Pagefind warms on idle so the first keystroke is less cold

## How to get to it (user POV)

Land on any page with Chrome. Click the search field in the header, or press ⌘K / Ctrl+K. Type. Click a row or press Enter.

## Driving it with computerUse

1. On `/`, click `input[aria-label="Search notes"]`.
2. Type `Vibe Coding` (or another title you can see on Home).
3. Wait until `[data-search-results]` is not `hidden` and either `.kb-ac-row` or `.kb-ac-empty` is present.
4. Click the first `.kb-ac-row` (or press Enter).
5. Resulting state: a note page (`article[data-pagefind-body]`, `h1.kb-note-title`) whose title matches the row.

Do not stub `/pagefind/pagefind.js`. If the dropdown says `Search index loading…` and stays there, the index was not built — record that and stop.

## Gotchas

- Pagefind is emitted at `dist/pagefind/` on `astro build`. `predev` runs `scripts/ensure-pagefind.mjs`, which builds the whole site when that file is missing. A fresh checkout's first `npm run dev` is slow; search before that build finishes is empty/loading.
- Vite must not bundle `/pagefind/pagefind.js` (see `astro.config.ts` `external-pagefind`). A transform-time import error is a product/setup bug.
- Results cap at eight. Keyboard highlight class is `.kb-ac-row.on`.
- A row's domain/path label can show `AI & Agentic Systems`. The live note URL uses `slugifyFilePath` (`AI--and--Agentic-Systems`, spaces around `&`). Assert `h1.kb-note-title`, not a hyphen count in the address bar.
- At ≤720px the field still exists; the nav hides behind `#kb-menu-btn`.
- Never test search against https://logos52.github.io from this skill.
