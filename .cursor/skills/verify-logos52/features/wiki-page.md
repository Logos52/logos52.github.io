# Wiki page

A published note is one `[...slug].astro` route wrapped in `Article.astro`. The home spotlight, a map row, or a wikilink opens one.

Source: `src/pages/[...slug].astro`, `src/layouts/Article.astro`, `src/components/Backlinks.astro`, `src/lib/note.ts` (`readerTypeLabel`), `src/lib/fold-related.ts`, `src/pages/folder/[...folder].astro`, `src/lib/folder-order.ts`, `src/redirects/doors/legacy-spaced.json` (Astro `redirects` in `astro.config.ts`).

## Sub-features

- `note-title` shows `h1.reading__title`. `p.reading__dek` appears when frontmatter `description` or `blurb` is non-empty (`[...slug].astro` passes `description ?? blurb`).
- `note-type` sits in `p.reading__meta` as `readerTypeLabel`, then ` · Updated …` when the note has a date. `concept` → `Concept`, `hub` → `Hub`, `reference` → `Reference`, `synthesis` → `Essay`. An unknown type omits the type word. There is no `.kb-type-tag`. Match the text, not a separate pill.
- `note-crumbs` uses `p.trail`. The last segment is plain text. A first segment of `journal`, `personal`, or `projects` links to that landing. `notes` links to `/map/`. Every other crumb, including `wiki`, links to `/folder/{path}/`.
- `note-prose` is `.copy.copy--note`. Links resolve as `a`. Unresolved targets are `span.missing[title^="unresolved link"]`.
- `note-related` folds a `Related` or `Related pages` list after five items into `details.related-more`.
- `note-linked` is `section.linked[aria-label="Linked from"]` after `.copy`, inside the article. The heading text is `Linked from`. The section is omitted when nothing links here.
- `note-folder-order`: direct child notes on a folder page sort with `byHubThen`. A type that is exactly `hub` comes before every other type, then title. `topic hub` stays in title order. On `/folder/wiki/Story-Craft/`, the first `.word__title` is `Story Craft`, and `Diagnosing a Character` is a later row.
- `note-legacy-url`: a spaced path (spaces, `&`, apostrophes) and a naive slug (spaces become `-`, `&` becomes `and`) 301 to the quartz URL. The browser lands on the note. Pairs live in `src/redirects/doors/legacy-spaced.json`.

There is no rail. `Article.astro` does not render an aside, a TOC, or a local constellation.

## How to get to it (user POV)

From Home, use the `a.word__link` whose text is `Open Builders' Logs 2026`. From Map, use a `.word__title`. From a note, click a `.copy a`.

A stable first note is the spotlight: `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`. The `h1` is `Builders' Logs 2026`. Frontmatter `type` is `reference`, so `p.reading__meta` starts with `Reference`. The dek is present. A prose link `Use Cases` goes to `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs/Use-Cases/`.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Home is loaded.

- **Open the note.** From `/`, click the link whose text is `Open Builders' Logs 2026`.
- **Read the note.** Wait for `article[data-pagefind-body]` and `h1.reading__title` `Builders' Logs 2026`. `p.reading__meta` starts with `Reference`. `p.reading__dek` is present. The first crumb `wiki` has href `/folder/wiki/`. There is no aside and no `nav.kb-toc`.
- **Follow a prose link.** In `.copy.copy--note`, click the `a` whose visible text is `Use Cases` (the sentence that starts with that link).
- **Resulting state.** The URL is `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs/Use-Cases/`. `h1.reading__title` is `Use Cases`.
- **Open the folder.** Go back to the spotlight note. Click the trail link `wiki`. The URL is `/folder/wiki/`. `h1.page__title` is `wiki`. The listing is `a.word__link` rows.
- **Hubs first.** Open `/folder/wiki/Story-Craft/`. `h1.page__title` is `Story Craft`. The first `.word__title` is `Story Craft`. `Diagnosing a Character` is a later `.word__title` on the same page.
- **Legacy spaced URL.** Open `/wiki/Books/The Parasitic Mind/`. The address bar is `/wiki/Books/The-Parasitic-Mind/`. `h1.reading__title` is `The Parasitic Mind`. The spaced URL itself responds 301.
- **Second spaced URL.** Open `/wiki/Concepts/Cave Theory/`. The address bar is `/wiki/Concepts/Cave-Theory/`. `h1.reading__title` is `Cave Theory`.
- **Naive slug.** Open `/wiki/Concepts/Cognitive-Load-and-What-Mental-Effort-Is-Trying-to-Cue/`. The address bar is `/wiki/Concepts/Cognitive-Load--and--What-Mental-Effort-Is-Trying-to-Cue/`. `h1.reading__title` is `Cognitive Load & What Mental Effort Is Trying to Cue`.

## Gotchas

- `index.md` at the vault root is home. `notes/index` is not a visitor page. Neither is a `[...slug]` note.
- The leading markdown `h1` inside `.copy--note` is hidden so the layout title is the only visible title.
- Wikilink resolution is shortest-basename. A short `[[Title]]` can land in a different folder than the author meant. Record the URL you got.
- `span.missing` is a broken vault link. Do not click it, and do not patch the note to make the skill pass.
- The first crumb of a wiki note does not return to a Notes index. Menu `Map` is the way back to the list. A folder crumb lands on `/folder/…/`.
- Folder subfolders are a separate list, sorted by name, and they are not part of the hub sort. On `/folder/wiki/Story-Craft/` the page rows are the note list. The first `.word__title` there is the hub.
- A naive slug that already equals the quartz URL is not a redirect. `/wiki/Books/The-Parasitic-Mind/` is the destination, not a legacy URL. Use a spaced path, or a naive path whose `&` became `and` instead of `--and--`.
- `/wiki/Syntheses/Are-You-Learning,-or-Just-Using-Techniques/` and `/wiki/Syntheses/Learning,-Condensed/` return 301 to `/wiki/Dimensions/Dimensions-of-Learning/`. That page returns 200. The cut notes stay deleted.
- Backlinks are `Linked from`, after the prose. The section is omitted when nothing links here.
