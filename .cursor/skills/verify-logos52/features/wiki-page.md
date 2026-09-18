# Wiki page

A published note is one `[...slug].astro` route wrapped in `Note.astro`. Driving this feature means a wikilink or hub link becomes another real page, not a `span.missing`.

## Sub-features

- Title `h1.kb-note-title` and optional `.kb-type-tag` / `updated` in `.kb-note-meta`
- Clickable crumbs `.kb-crumb` (first segment → `/notes/`, middle → `/domains/{domain}/`, last is text)
- Prose `.kb-prose` with resolved links as `a` and unresolved as `span.missing[title^="unresolved link"]`
- Local graph `[data-constellation-root][data-mode="local"]`
- `nav.kb-toc[aria-label="Contents"]` when the note has h2/h3
- `section.kb-backlinks[aria-label="Backlinks"]` when other notes link here

## How to get to it (user POV)

From Home, use a Start-here door (Understand / Apply / Learn / Decode), a Top of mind link, a hub-list row, or a Project Update title. From Notes, use a Condensed or Hubs row. From a note, click a `.kb-prose a`.

A stable first note: Understand door → `/wiki/Concepts/The-AI-Industrial-Revolution/` (`wiki/Concepts/The AI Industrial Revolution.md`). The door title is `What Engineers Are Judged On`; the note `h1.kb-note-title` is `The AI Industrial Revolution` (frontmatter `title` via `deriveTitle`). Assert the derived title, not the door copy.

## Driving it with computerUse

1. Open `/`. Click the door whose `.door__intent` is `Understand`.
2. Wait for `article[data-pagefind-body]` and `h1.kb-note-title`.
3. In `.kb-prose`, click a real `a` (not `span.missing`).
4. Resulting state: URL changes under `/wiki/…/` or `/journal/…/` or `/personal/…/`; new `h1.kb-note-title` matches the link text or the note's derived title.
5. Optional: click a `.kb-backlink` or a `.kb-toc-link` and confirm the hash or the next note.

## Gotchas

- `index.md` at the vault root is home; `notes/index` is the Notes Astro page. Neither is a `[...slug]` note.
- Leading markdown `h1` inside `.kb-prose` is hidden so the layout title is the only title.
- Wikilink resolution is shortest-basename, same as old Quartz. A short `[[Title]]` can land on a different folder than the author meant. Record the URL you got.
- `span.missing` is a product signal (broken vault link), not a harness failure. Do not click it and do not patch the note to make the skill pass.
- Aside rail is `aria-hidden` on the constellation wrapper; use TOC/backlink names, not canvas pixels.
