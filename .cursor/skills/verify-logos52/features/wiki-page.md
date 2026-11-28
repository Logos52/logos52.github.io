# Article

A published note is one `[...slug].astro` route wrapped in `Note.astro`. Home cards, explainers rows, and project links open one. The visible title is the mast, not an `h1` in the prose.

Source: `src/pages/[...slug].astro`, `src/layouts/Note.astro`, `src/layouts/Base.astro`, `src/lib/note.ts` (`deriveTitle`, `readerTypeLabel`), `src/scripts/ndc-article.ts`, `src/lib/article-extras.ts`, `src/redirects/doors/legacy-spaced.json` (loaded by `astro.config.ts`).

## Sub-features

- `note-title` is `header.mast span.title`. `p.abstract` appears when frontmatter `description` or `blurb` is non-empty.
- `note-facts` is `aside.org` (`aria-label="About this page"`) and `#article-facts`. `h6` `Kind` then a `p` of `{type} · {parent folder}` when both exist. `h6` `Updated` then a date like `22 November 2026`. `reference` → `Reference`, `hub` → `Hub`. There is no `span.kb-type-tag`.
- `note-prose` is `.essay-body`. The markdown `h1` inside it is hidden (`src/styles/ndc/extras.css`). Links are `a`. Unresolved targets are `span.missing[title^="unresolved link"]`.
- `note-linked` is an `h2` `Linked from` inside `.essay-body`, then `div.lf` of links. Omitted when nothing links here. There is no `section.kb-backlinks`.
- `note-rail` positions `.essay-body figcaption` and `aside.note` in the same column as `#article-facts`. `bindArticle` (`src/scripts/ndc-article.ts`) sets `position: absolute` and an inline `top`, so each note lines up with its `a.sidenote-ref`. At `min-width: 46rem` that column is the right rail. Narrower than that, the caption and the note go back to static flow (`src/styles/ndc/part-03.css`). There is no `nav.kb-toc` and no `aside.kb-note-aside`.
- `note-lightbox` is `dialog.lightbox`. The diagrams are `button.fig-open` around an `svg`, not an `img`. Clicking that button calls `showModal` and copies the svg into `.lb-svg` (the id gains `-lb`). A `figure img`, when a note has one, opens the same dialog through a separate listener.
- `note-samples` are the only notes `remarkArticleExtras` (`src/lib/article-extras.ts`) attaches these to. Bear Hunter has 3 `aside.note`, 3 `a.sidenote-ref`, and `svg#bhs` (`/wiki/Dimensions/Deep-Processing/Bear-Hunter-System/`). Kolb has 1 note and `svg#kolb` (`/wiki/Dimensions/Self-Management/Kolbs-Experiential-Cycle/`). The Beat Board has 5 notes and no diagram (`/wiki/Story-Craft/The-Beat-Board/`). Four Stages has 1 note and `svg#fsc` (`/wiki/Concepts/Four-Stages-of-Competence/`). The agent-task note has 3 notes and no diagram (`/wiki/Working-with-Agents/Give-an-agent-a-task-without-micromanaging-it/`). Builders' Logs 2026 has none of these.
- `note-legacy-url` still 301s a spaced path to the quartz URL (`legacy-spaced.json`). A GET of `/wiki/Books/The Parasitic Mind/` lands on `/wiki/Books/The-Parasitic-Mind/`. A HEAD of that URL is 308. That is Astro's trailing-slash handler, not a different redirect.

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
- **Open a note that has a figure and side notes.** Go to `/wiki/Dimensions/Deep-Processing/Bear-Hunter-System/`. Laptop width, wider than `46rem`.
- **Read the rail.** `aside.note` count is 3 (`note-1`, `note-2`, `note-3`). `a.sidenote-ref` count is 3 (`ref-1`, `ref-2`, `ref-3`). The figure is `button.fig-open` (accessible name `Open Figure 1 larger`) around `svg#bhs`, and that figure has no `img`. Each `aside.note` has computed `position: absolute`, a non-empty inline `top`, and the same left edge as `#article-facts`. The note sits level with its marker. The `note-1` text includes `Slower on the first pass.`
- **Open the diagram.** Click that `button.fig-open`.
- **Lightbox.** `dialog.lightbox` is open. `.lb-svg` is visible and contains an `svg` whose id is `bhs-lb`.
- **Close it.** Click `button.lightbox-close` (`aria-label="Close"`). The dialog is no longer open.

## Gotchas

- `index.md` at the vault root is not this route. The owned set in `[...slug].astro` also skips `about`, `journal/index`, `projects/index`, `projects/tsumugu`, `personal/index`, and `notes/index`.
- The first crumb is the site section (`Explainers` for `wiki/…`), not a folder trail. `/folder/…/` redirects to `/explainers/`. Hub-first folder order is not a page a visitor can open.
- `span.missing` is a broken vault link. Do not click it, and do not patch the note to make the skill pass.
- Backlinks are the `Linked from` heading after the prose. The section is omitted when nothing links here.
