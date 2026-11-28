# Article

A published note is one `[...slug].astro` route wrapped in `Note.astro`. Home cards, explainers rows, and project links open one. The visible title is the mast, not an `h1` in the prose.

Source: `src/pages/[...slug].astro`, `src/layouts/Note.astro`, `src/layouts/Base.astro`, `src/lib/note.ts` (`deriveTitle`, `readerTypeLabel`), `src/scripts/ndc-article.ts`, `src/redirects/doors/legacy-spaced.json` (loaded by `astro.config.ts`).

## Sub-features

- `note-title` is `header.mast span.title`. `p.abstract` appears when frontmatter `description` or `blurb` is non-empty.
- `note-facts` is `aside.org` (`aria-label="About this page"`) and `#article-facts`. `h6` `Kind` then a `p` of `{type} · {parent folder}` when both exist. `h6` `Updated` then a date like `22 November 2026`. `reference` → `Reference`, `hub` → `Hub`. There is no `span.kb-type-tag`.
- `note-prose` is `.essay-body`. The markdown `h1` inside it is hidden (`src/styles/ndc/extras.css`). Links are `a`. Unresolved targets are `span.missing[title^="unresolved link"]`.
- `note-linked` is an `h2` `Linked from` inside `.essay-body`, then `div.lf` of links. Omitted when nothing links here. There is no `section.kb-backlinks`.
- `note-rail` positions `.essay-body figcaption` and `aside.note` beside `#article-facts` (`bindArticle`). There is no `nav.kb-toc` and no `aside.kb-note-aside`.
- `note-lightbox` is `dialog.lightbox`. Clicking a figure image calls `showModal`.
- `note-legacy-url` still 301s a spaced path to the quartz URL (`legacy-spaced.json`). `/wiki/Books/The Parasitic Mind/` lands on `/wiki/Books/The-Parasitic-Mind/`.

## How to get to it (user POV)

From Explainers, use `Learning systems` or an `a.rw`. From Projects, use `Builders' Logs 2026`. A stable note with an abstract, a kind line, and a prose link is `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`.

## Driving it with computerUse

Preconditions:

- Doctor passed.

- **Open the note.** Go to `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`.
- **Read the note.** Wait for `div#page-article` and `header.mast span.title` `Builders' Logs 2026`. `#article-facts` text includes `Reference` and `AI & Agentic Systems`. `p.abstract` is present. `h6` `Updated` is followed by `22 November 2026`. `span.here` is `Explainers`.
- **Follow a prose link.** In `.essay-body`, click the `a` whose visible text is `Use Cases`.
- **Resulting state.** The URL is `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs/Use-Cases/`. `header.mast span.title` is `Use Cases`.
- **Legacy spaced URL.** Open `/wiki/Books/The Parasitic Mind/`. The address bar is `/wiki/Books/The-Parasitic-Mind/`. `header.mast span.title` is `The Parasitic Mind`.

## Gotchas

- `index.md` at the vault root is not this route. The owned set in `[...slug].astro` also skips `about`, `journal/index`, `projects/index`, `projects/tsumugu`, `personal/index`, and `notes/index`.
- The first crumb is the site section (`Explainers` for `wiki/…`), not a folder trail. `/folder/…/` redirects to `/explainers/`. Hub-first folder order is not a page a visitor can open.
- `span.missing` is a broken vault link. Do not click it, and do not patch the note to make the skill pass.
- Backlinks are the `Linked from` heading after the prose. The section is omitted when nothing links here.
