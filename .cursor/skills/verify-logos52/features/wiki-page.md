# Wiki page

A published note is one `[...slug].astro` route wrapped in `Note.astro`. Driving this feature means a wikilink or hub link becomes another real page, not a `span.missing`.

## Sub-features

- Title `h1.kb-note-title`. This tree's `Note.astro` does not render `.kb-note-dek`. The Understand door note has no `description` or `blurb`. `Learning, Condensed` has a `description` and still has no dek. `origin/main` shows `.kb-note-dek` when `description` or `blurb` is a non-empty string.
- `.kb-type-tag` is the raw frontmatter string. The Understand note's pill reads `concept`. Learning, Condensed reads `condensed`. This tree's `[...slug].astro` does not call `readerTypeLabel` (`src/lib/note.ts` has no such function). `origin/main` maps `concept` → `Concept`, `technique` → `Method`, `synthesis` → `Essay`, `hub` → `Hub`, `condensed` → `Condensed`. `updated` stays in `.kb-note-meta` as `updated YYYY-MM-DD`.
- Crumbs `.kb-crumb`: the last segment is plain text. The first segment links to `/notes/` (`wiki` on the Understand note). Each middle segment links to `/domains/{domain}/` for that note's domain, so `Concepts` on this agentic note goes to `/domains/agentic/`. There is no `src/pages/folder/` on this branch. `origin/main` sends wiki crumbs to `/folder/{path}/`.
- Prose `.kb-prose` with resolved links as `a` and unresolved as `span.missing[title^="unresolved link"]`
- Related lists are not folded. `src/lib/fold-related.ts` is not in this branch, and `astro.config.ts` does not run `rehypeFoldRelated`. Do not assert `details.kb-related-more`. `origin/main` folds after five and the summary is `{N} more related pages`.
- Local graph `[data-constellation-root][data-mode="local"]`
- `nav.kb-toc[aria-label="Contents"]` when the note has h2/h3
- `section.kb-backlinks[aria-label="Backlinks"]` renders every `.kb-backlink`. The Understand note shows 14, with no `details.kb-backlinks-more`. `origin/main`'s `Backlinks.astro` folds after five.

## How to get to it (user POV)

From Home, use a Start-here door (Understand / Apply / Learn / Decode), a Top of mind link, a hub-list row, or a Project Update title. From Notes, use a Condensed or Hubs row. From a note, click a `.kb-prose a`.

A stable first note: Understand door → `/wiki/Concepts/The-AI-Industrial-Revolution/` (`wiki/Concepts/The AI Industrial Revolution.md`). The door title is `What Engineers Are Judged On`; the note `h1.kb-note-title` is `The AI Industrial Revolution` (frontmatter `title` via `deriveTitle`). Assert the derived title, not the door copy.

## Driving it with computerUse

1. Open `/`. Click the door whose `.door__intent` is `Understand`.
2. Wait for `article[data-pagefind-body]` and `h1.kb-note-title` `The AI Industrial Revolution`. The type pill reads `concept`. There is no `.kb-note-dek`. The first crumb `wiki` has href `/notes/`. The next crumb `Concepts` has href `/domains/agentic/`. There is no `details.kb-related-more`. Backlinks are an open list (14 on this note), not a five-row fold.
3. In `.kb-prose`, click a real `a` (not `span.missing`). Prefer a link in the article body. This tree does not fold Related lists.
4. Resulting state: URL changes under `/wiki/…/` or `/journal/…/` or `/personal/…/`; new `h1.kb-note-title` matches the link text or the note's derived title.
5. Optional: click a `.kb-backlink` or a `.kb-toc-link` and confirm the hash or the next note.

## Gotchas

- `index.md` at the vault root is home; `notes/index` is the Notes Astro page. Neither is a `[...slug]` note.
- Leading markdown `h1` inside `.kb-prose` is hidden so the layout title is the only title.
- Wikilink resolution is shortest-basename, same as old Quartz. A short `[[Title]]` can land on a different folder than the author meant. Record the URL you got.
- `span.missing` is a product signal (broken vault link), not a harness failure. Do not click it and do not patch the note to make the skill pass.
- On this tree the first crumb of a wiki note does return to `/notes/`. A later crumb goes to that note's domain page (`/domains/{domain}/`), which is the note's domain, not the folder name. Chrome `Notes` is still the nav back to the index. `origin/main` uses `/folder/…/` instead; do not assert that path until `src/pages/folder/[...folder].astro` is in this tree.
- Aside rail is `aria-hidden` on the constellation wrapper; use TOC/backlink names, not canvas pixels.

## Source

`src/pages/[...slug].astro` skips vault `index.md` and `notes/index`, derives the title, and passes the raw `type` string into `src/layouts/Note.astro`. Crumbs: first segment `/notes/`, middle segments `/domains/{domain}/`, last segment text (`src/layouts/Note.astro`). This branch does not fold Related lists or backlinks. `origin/main` adds `readerTypeLabel`, `.kb-note-dek`, `/folder/…/` crumbs, `rehypeFoldRelated`, and a five-row backlink fold.
