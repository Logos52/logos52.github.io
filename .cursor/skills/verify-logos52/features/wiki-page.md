# Wiki page

A published note is one `[...slug].astro` route wrapped in `Note.astro`. A wikilink or a Start here door becomes another real page.

Source: `src/pages/[...slug].astro`, `src/layouts/Note.astro`, `src/components/Backlinks.astro`, `src/components/Toc.astro`, `src/lib/note.ts` (`readerTypeLabel`), `src/lib/fold-related.ts`.

## Sub-features

- `note-title` shows `h1.kb-note-title`. `.kb-note-dek` appears when frontmatter `description` or `blurb` is non-empty.
- `note-pill` shows `.kb-type-tag` from `readerTypeLabel`. `synthesis` → `Essay`, `hub` → `Hub`, `condensed` → `Condensed`, `dimension` → `Dimension`, `concept` → `Concept`. An unknown type omits the pill. The pill sits in `.kb-note-meta`, which uppercases the paint. The DOM text trims to `Essay` (the markup has a space on each side). Match the trimmed text. `updated` stays in `.kb-note-meta` as `updated YYYY-MM-DD`.
- `note-crumbs` uses `.kb-crumb`. The last segment is plain text. A first segment of `journal`, `personal`, `projects`, or `notes` links to that landing. Every other crumb, including `wiki`, links to `/folder/{path}/`.
- `note-prose` resolves links as `a` and unresolved targets as `span.missing[title^="unresolved link"]`.
- `note-related` folds a `Related` or `Related pages` list after five items into `details.kb-related-more`. The summary is `{N} more related pages`. The extra links stay in the HTML.
- `note-rail` is `aside.kb-note-aside`: local graph `[data-constellation-root][data-mode="local"]` and `nav.kb-toc[aria-label="Contents"]` with h2 anchors only.
- `note-linked` is `section.kb-backlinks[aria-label="Linked from"]` after `.kb-prose`, inside the article. The heading text is `Linked from`. Five `.kb-backlink` rows, then `details.kb-backlinks-more` (`{N} more`) when there are more. The section is not in the rail.

## How to get to it (user POV)

From Home, use a Start here door (Learn or Decode), a Top of mind link, a hub-list row, or a Project Update title. From Notes, use a Condensed or Hubs row. From a note, click a `.kb-prose a`.

A stable first note is the Learn door: `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/`. The door title is `Does a Study Technique Work?`. The note `h1` is `Are You Learning, or Just Using Techniques`. Assert the note title.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- The Learn door is on `/` (intent `Learn`).

- **Open the note.** From `/`, click the door whose `.door__intent` is `Learn`.
- **Read the note.** Wait for `article[data-pagefind-body]` and `h1.kb-note-title` `Are You Learning, or Just Using Techniques`. The type pill's trimmed text is `Essay` (the paint is uppercase). `.kb-note-dek` is present. The first crumb `wiki` has href `/folder/wiki/`. `details.kb-related-more` is present and its summary matches `{N} more related pages`.
- **Linked from.** `section.kb-backlinks[aria-label="Linked from"]` is inside `article`, after `.kb-prose`. Its `h2` text is `Linked from`. The aside does not contain that section. `nav.kb-toc[aria-label="Contents"]` is in the aside.
- **Follow a prose link.** In `.kb-prose`, click the `a` whose href is `/wiki/Dimensions/Self-Regulation/` and whose text is `Self-Regulation`, the one in the opening paragraphs (before the Related list).
- **Resulting state.** The URL is `/wiki/Dimensions/Self-Regulation/`. `h1.kb-note-title` is `Self-Regulation`. The type pill's trimmed text is `Dimension` (the paint is uppercase).

## Gotchas

- `index.md` at the vault root is home. `notes/index` is the Notes Astro page. Neither is a `[...slug]` note.
- The leading markdown `h1` inside `.kb-prose` is hidden so the layout title is the only visible title.
- Wikilink resolution is shortest-basename. A short `[[Title]]` can land in a different folder than the author meant. Record the URL you got.
- `span.missing` is a broken vault link. Do not click it, and do not patch the note to make the skill pass.
- The first crumb of a wiki note does not return to `/notes/`. Chrome `Notes` is the way back to the index. A folder crumb lands on `/folder/…/`, a listing (`h1` is the folder name, `active="notes"` so Notes is `.on`). The wiki folder's up-link goes to `/notes/`.
- The constellation wrapper in the rail is `aria-hidden`. Use the TOC and Linked from names, not canvas pixels.
- Backlinks used to sit in the rail under `aria-label="Backlinks"`. That label is gone. The section is `Linked from`, after the prose.
