# Wiki page

A published note is one `[...slug].astro` route wrapped in `Note.astro`. Driving this feature means a wikilink or hub link becomes another real page, not a `span.missing`.

## Sub-features

- Title `h1.kb-note-title`. Optional `.kb-note-dek` under the meta row when frontmatter `description` or `blurb` is a non-empty string. The Understand door note has neither, so no dek there is correct. `Learning, Condensed` has a description, so that page shows `.kb-note-dek`.
- Optional `.kb-type-tag` is `readerTypeLabel` (`src/lib/note.ts`), not the raw frontmatter string. `concept` → `Concept`, `technique` → `Method`, `synthesis` → `Essay`, `hub` → `Hub`, `condensed` → `Condensed`. An unknown type omits the pill. `updated` stays in `.kb-note-meta` as `updated YYYY-MM-DD`.
- Crumbs `.kb-crumb`: the last segment is plain text. A first segment of `journal`, `personal`, `projects`, or `notes` links to that section landing. Every other crumb, including `wiki`, links to `/folder/{path}/` (`src/pages/folder/[...folder].astro`). Wiki crumbs do not go to `/notes/` or `/domains/{domain}/`.
- Prose `.kb-prose` with resolved links as `a` and unresolved as `span.missing[title^="unresolved link"]`
- A heading `Related` or `Related pages` shows five items, then `details.kb-related-more` whose summary is `{N} more related pages` (`src/lib/fold-related.ts`). The extra links stay in the HTML.
- Local graph `[data-constellation-root][data-mode="local"]`
- `nav.kb-toc[aria-label="Contents"]` when the note has h2/h3
- `section.kb-backlinks[aria-label="Backlinks"]` shows five `.kb-backlink` rows, then `details.kb-backlinks-more` (`{N} more`) when there are more (`src/components/Backlinks.astro`)

## How to get to it (user POV)

From Home, use a Start-here door (Understand / Apply / Learn / Decode), a Top of mind link, a hub-list row, or a Project Update title. From Notes, use a Condensed or Hubs row. From a note, click a `.kb-prose a`.

A stable first note: Understand door → `/wiki/Concepts/The-AI-Industrial-Revolution/` (`wiki/Concepts/The AI Industrial Revolution.md`). The door title is `What Engineers Are Judged On`; the note `h1.kb-note-title` is `The AI Industrial Revolution` (frontmatter `title` via `deriveTitle`). Assert the derived title, not the door copy.

## Driving it with computerUse

1. Open `/`. Click the door whose `.door__intent` is `Understand`.
2. Wait for `article[data-pagefind-body]` and `h1.kb-note-title` `The AI Industrial Revolution`. The type pill reads `Concept`. There is no `.kb-note-dek`. The first crumb `wiki` has href `/folder/wiki/`. `details.kb-related-more` is present; its summary is `{N} more related pages`.
3. In `.kb-prose`, click a real `a` (not `span.missing`). Prefer a link outside the folded related list so the click is visible without opening the disclosure.
4. Resulting state: URL changes under `/wiki/…/` or `/journal/…/` or `/personal/…/`; new `h1.kb-note-title` matches the link text or the note's derived title.
5. Optional: click a `.kb-backlink` or a `.kb-toc-link` and confirm the hash or the next note.

## Gotchas

- `index.md` at the vault root is home; `notes/index` is the Notes Astro page. Neither is a `[...slug]` note.
- Leading markdown `h1` inside `.kb-prose` is hidden so the layout title is the only title.
- Wikilink resolution is shortest-basename, same as old Quartz. A short `[[Title]]` can land on a different folder than the author meant. Record the URL you got.
- `span.missing` is a product signal (broken vault link), not a harness failure. Do not click it and do not patch the note to make the skill pass.
- Do not expect the first crumb of a wiki note to return to `/notes/`. Chrome `Notes` is the way back to the index. A folder crumb lands on `/folder/…/`, a listing, not a domain page.
- Aside rail is `aria-hidden` on the constellation wrapper; use TOC/backlink names, not canvas pixels.

## Source

`src/pages/[...slug].astro` skips vault `index.md` and `notes/index`, derives the title, maps `type` through `readerTypeLabel`, and passes `description` or `blurb` into `src/layouts/Note.astro`. Crumbs are folder paths. `rehypeFoldRelated` in `astro.config.ts` folds Related lists after five items. Backlinks fold after five.
