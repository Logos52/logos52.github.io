# Wiki page

A published note is one `[...slug].astro` route wrapped in `Note.astro`. A Start here door, a Notes entry, a search row, or a wikilink opens one.

Source: `src/pages/[...slug].astro`, `src/layouts/Note.astro`, `src/components/Backlinks.astro`, `src/components/Toc.astro`, `src/lib/note.ts` (`readerTypeLabel`), `src/lib/fold-related.ts`, `src/pages/folder/[...folder].astro`, `src/lib/folder-order.ts`, `src/redirects/doors/legacy-spaced.json` (Astro `redirects` in `astro.config.ts`).

## Sub-features

- `note-title` shows `h1.kb-note-title`. `p.kb-note-dek` appears when frontmatter `description` or `blurb` is non-empty (`[...slug].astro` passes `description ?? blurb`).
- `note-type` sits in `span.kb-type-tag` inside `.kb-note-meta` as `readerTypeLabel`, then `updated …` when the note has a date. `concept` → `Concept`, `hub` → `Hub`, `reference` → `Reference`, `synthesis` → `Essay`. An unknown type omits the pill. `.kb-note-meta` is CSS-uppercased. Match the DOM text, not the painted capitals. There is no separate `.reading__meta` line.
- `note-crumbs` uses `div.kb-crumb`. The last segment is plain text. A first segment of `journal`, `personal`, or `projects` links to that landing. `notes` links to `/notes/`. Every other crumb, including `wiki`, links to `/folder/{path}/`.
- `note-prose` is `.kb-prose`. Links resolve as `a`. Unresolved targets are `span.missing[title^="unresolved link"]`.
- `note-related` folds a `Related` or `Related pages` list after five items into `details.kb-related-more`.
- `note-linked` is `section.kb-backlinks[aria-label="Linked from"]` after `.kb-prose`, inside the article. The heading text is `Linked from`. Rows are `a.kb-backlink`. The section is omitted when nothing links here.
- `note-rail` is `aside.kb-note-aside`: a local constellation (`data-mode="local"`) and `nav.kb-toc` (`aria-label="Contents"`) for h2 headings.
- `note-folder-order`: direct child notes on a folder page sort with `byHubThen`. A type that is exactly `hub` comes before every other type, then title. `topic hub` stays in title order. On `/folder/wiki/Story-Craft/`, the first `.moc__title` is `Story Craft`, and `Diagnosing a Character` is the next row.
- `note-legacy-url`: a spaced path (spaces, `&`, apostrophes) and a naive slug (spaces become `-`, `&` becomes `and`) 301 to the quartz URL. The browser lands on the note. Pairs live in `src/redirects/doors/legacy-spaced.json`.

## How to get to it (user POV)

From Home, use the Decode door `How Chinese Characters Are Built`. From Notes, use an `.entry-list__title`. From Map, use an `a.cmap__link` or a domain-section link. From a note, click a `.kb-prose a`.

A stable note with a rail, a dek, and a prose link is `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`. The `h1` is `Builders' Logs 2026`. Frontmatter `type` is `reference`, so `span.kb-type-tag` text is `Reference`. The dek is present. A prose link `Use Cases` goes to `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs/Use-Cases/`.

## Driving it with computerUse

Preconditions:

- Doctor passed.

- **Open the note.** Go to `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`.
- **Read the note.** Wait for `article[data-pagefind-body]` and `h1.kb-note-title` `Builders' Logs 2026`. `span.kb-type-tag` text is `Reference`. `p.kb-note-dek` is present. The first crumb `wiki` has href `/folder/wiki/`. `aside.kb-note-aside` is present, with `nav.kb-toc`.
- **Follow a prose link.** In `.kb-prose`, click the `a` whose visible text is `Use Cases`.
- **Resulting state.** The URL is `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs/Use-Cases/`. `h1.kb-note-title` is `Use Cases`.
- **Hubs first.** Open `/folder/wiki/Story-Craft/`. The `h1` text is `Story Craft`. The first `.moc__title` is `Story Craft`. `Diagnosing a Character` is a later `.moc__title` on the same page.
- **Legacy spaced URL.** Open `/wiki/Books/The Parasitic Mind/`. The address bar is `/wiki/Books/The-Parasitic-Mind/`. `h1.kb-note-title` is `The Parasitic Mind`. The spaced URL itself responds 301.
- **Second spaced URL.** Open `/wiki/Concepts/Cave Theory/`. The address bar is `/wiki/Concepts/Cave-Theory/`. `h1.kb-note-title` is `Cave Theory`.
- **Naive slug.** Open `/wiki/Concepts/Cognitive-Load-and-What-Mental-Effort-Is-Trying-to-Cue/`. The address bar is `/wiki/Concepts/Cognitive-Load--and--What-Mental-Effort-Is-Trying-to-Cue/`. `h1.kb-note-title` is `Cognitive Load & What Mental Effort Is Trying to Cue`.

## Gotchas

- `index.md` at the vault root is home. `notes/index` is the Notes index route, not a `[...slug]` note.
- The leading markdown `h1` inside `.kb-prose` is hidden so the layout title is the only visible title.
- Wikilink resolution is shortest-basename. A short `[[Title]]` can land in a different folder than the author meant. Record the URL you got.
- `span.missing` is a broken vault link. Do not click it, and do not patch the note to make the skill pass.
- The first crumb of a wiki note does not return to Notes. Nav `Notes` is the way back to that index. A folder crumb lands on `/folder/…/`.
- Folder subfolders are a separate list, sorted by name, and they are not part of the hub sort. `/folder/wiki/Story-Craft/` has no subfolders. The page rows are the note list. The first `.moc__title` there is the hub. The `h1` has no `page__title` class.
- A naive slug that already equals the quartz URL is not a redirect. `/wiki/Books/The-Parasitic-Mind/` is the destination, not a legacy URL. Use a spaced path, or a naive path whose `&` became `and` instead of `--and--`.
- `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/` and `/wiki/Syntheses/Learning,-Condensed/` return 301 to `/wiki/Dimensions/Dimensions-of-Learning/`. That page returns 200. The cut notes stay deleted. Do not use either URL as this page's sample note.
- Backlinks are `Linked from`, after the prose. The section is omitted when nothing links here.
