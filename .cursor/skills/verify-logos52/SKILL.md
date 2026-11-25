---
name: verify-logos52
description: Drive the published Logos52 Astro wiki in a browser. Use when a public-site change needs a visitor-path proof — launch npm run dev on port 4321, doctor that instance, exercise a mapped feature, keep evidence, then tear down only what this run started.
---

# verify-logos52

Logos52 is a static Astro wiki. Visitors use the web UI. Live publish is https://logos52.github.io. Drive the local instance this skill started. The local command is `npm run dev` at http://127.0.0.1:4321 (the same bind as `.cursor/environment.json`). `npm run build` then `npm run preview` is the production-like path.

This skill is the visitor-facing drive loop. It is not a second CI stack. `npm run verify` runs `lint:fm && guard:source && build && guard:design && guard && test`, the same sequence as `.github/workflows/deploy.yml`. Doctor `--ci` calls that script. Do not add another `verify` npm script.

Record product gaps in the feature file. Leave product code alone unless the task is a product fix.

`verify-wiki` is a different skill (kept-blocks, frontmatter lint, a production build, one 390px render). Leave it alone.

## Launch

Install is `npm ci` (Node >= 22). Launch does not install.

```sh
.cursor/skills/verify-logos52/helpers/launch.sh
```

That script runs `npm run dev -- --host 0.0.0.0 --port 4321` from the repo root, in its own session (`setsid`) so the server stays up after the launch script exits. It records the PID and process group in `/tmp/verify-logos52/run.env`, and waits until `GET http://127.0.0.1:4321/` returns 200 and the HTML contains `hero__title`.

Ready means the home page is usable:

- HTTP 200 on `/` and the home markup includes `hero__title` (`h1.hero__title` in `src/pages/index.astro`). The title text is read from `kb-astro/site-data/home.json` when that file exists.
- The Astro log at `/tmp/verify-logos52/astro.log` mentions port 4321
- First boot runs `predev` (note copy, catalog, `ensure-pagefind`). When `dist/pagefind/pagefind.js` is missing, `predev` runs a full `astro build` before the dev server binds. Wait for HTTP, not just the process.

Production-like alternative, still on 4321, still this run's process:

```sh
npm run build && npm run preview -- --host 0.0.0.0 --port 4321
```

Prefer `npm run dev` unless the bug is build-only or preview-only. One instance. Port 4321 is the isolation boundary. When 4321 is already bound by a PID this run did not start, launch exits 2 and you stop. Leave that process alone. Do not start a second server beside it.

Teardown is Cleanup. Launch leaves the server up.

## Doctor

Cheap, read-only, default. Run this before the first drive, and again after a drive that behaved strangely:

```sh
.cursor/skills/verify-logos52/helpers/doctor.sh
```

Doctor checks, in order:

1. Node >= 22 (`package.json` `engines.node`)
2. `node_modules` present
3. `/tmp/verify-logos52/run.env` names a live PID this skill launched
4. That process tree owns port 4321
5. `GET /` is 200 and includes `hero__title`
6. `GET /map/` is 200 and includes `map-head__title` (`h1.map-head__title`, text `The vault`)

When any check fails, do not drive.

The CI sequence is the same script with `--ci`. It runs the cheap checks, then calls `npm run verify`:

```sh
.cursor/skills/verify-logos52/helpers/doctor.sh --ci
```

`--ci` reads `package.json` `scripts.verify` and runs `npm run verify`. When that script is missing, `--ci` exits 1. Do not paste `lint:fm`, `guard:source`, `build`, `guard:design`, `guard`, and `test` in as a substitute.

## Drive

Harness: Chrome via the `computerUse` subagent, or CDP against http://127.0.0.1:4321. Prefer accessible names, `data-*` attributes, and route paths. Do not use click coordinates.

Drive only an instance this skill launched, and only after doctor passed. Open http://127.0.0.1:4321/. Chrome is `header.kb-chrome` (`src/components/Chrome.astro`) on every page. At laptop width the six nav links are visible. Do not open a menu first. `button#kb-menu-btn` (`aria-label="Open menu"`) is hidden until `max-width: 720px`, where it toggles `.kb-nav.open`.

The current section is class `on` on `a.kb-nav__link`. There is no `aria-current`. `.on` is also the search highlight (`a.kb-ac-row.on`). The footer (`footer.kb-footer` in `src/components/Footer.astro`) renders no links. It does not repeat the nav. There is no `.mast` and no `.colophon`.

| Control | How to find it | Where it goes |
|---|---|---|
| Brand | `a.kb-brand`, name `Logos52` | `/` |
| Nav (laptop) | `a.kb-nav__link` text `Map`, `Notes`, `Projects`, `Journal`, `Personal`, `About` | `/map`, `/notes`, `/projects`, `/journal`, `/personal`, `/about` (hrefs have no trailing slash) |
| Menu (≤720px) | `button#kb-menu-btn` `aria-label="Open menu"` | shows the same six links |
| Theme | `button#theme-toggle` `aria-label="Toggle theme"` | flips `html[data-theme]` between `light` and `dark` |
| Search (laptop) | `input[data-search-input]` `aria-label="Search notes"` | dropdown `[data-search-results]` |
| Search (≤720px) | `button#kb-search-btn` `aria-label="Search"` | adds `search-open` on `.kb-chrome__inner` and focuses the same input |

`/` sets `active="home"`, and the nav has no `home` id, so no nav link is current there. `/map/` sets `active="map"`. `/notes/`, domain pages, folder pages, and `/graph/` set `active="notes"`, so Notes is current.

Home (`src/pages/index.astro`, copy in `src/lib/home-page.ts`, hero text from `kb-astro/site-data/home.json` when that file exists):

- `h1.hero__title` is `LLM Knowledge Base`. `p.hero__lede` is the lede under it.
- A spine graph `[data-constellation-root][data-mode="spine"]`, then six `DomainChip` links to `/domains/{learning,agentic,language,focus,mind,gen}/`. Labels are `Learning`, `Agentic`, `Language`, `Focus`, `Mind`, `Generativity`.
- Start here: `h2.start-here__head` text `Start here`. Three `a.door` cards. Visible titles are `Does a Study Technique Work?`, `How Chinese Characters Are Built`, `Map of the Site`.
- Top of mind: `h2.topmind__head` and `ul.topmind__list`. The build throws when there are more than 4 `li`.
- Three hub columns (`Five Dimensions`, `Life Systems`, `Knowledge & Execution`) and a `Project Updates` section.

Wiki note (`src/pages/[...slug].astro` → `src/layouts/Note.astro`):

- `article[data-pagefind-body]`
- `h1.kb-note-title`
- `p.kb-note-dek` when the note has a description or blurb
- Type sits in `span.kb-type-tag` inside `.kb-note-meta` as `readerTypeLabel` (`Concept`, `Essay`, `Hub`, `Reference`, …). The meta row is CSS-uppercased.
- Breadcrumb `div.kb-crumb`: last segment is text. `journal` / `personal` / `projects` first segments go to those landings. A `notes` first segment goes to `/notes/`. Other crumbs, including `wiki`, go to `/folder/…/`
- A folder listing sorts a direct child whose type is exactly `hub` ahead of other types, then by title. On `/folder/wiki/Story-Craft/` the first `.moc__title` is `Story Craft`, and `Diagnosing a Character` is the next.
- Spaced paths and naive slugs in `src/redirects/doors/legacy-spaced.json` 301 to the quartz URL. `/wiki/Books/The Parasitic Mind/` lands on `/wiki/Books/The-Parasitic-Mind/`. `/wiki/Concepts/Cave Theory/` lands on `/wiki/Concepts/Cave-Theory/`.
- Body links are `.kb-prose a`. Unresolved targets are `span.missing`
- A `Related` or `Related pages` list shows five items, then `details.kb-related-more`
- The rail is `aside.kb-note-aside`: a local constellation and `nav.kb-toc` (`aria-label="Contents"`) when the note has an h2.
- The article body is `.kb-prose`. The markdown `h1` inside it is hidden.
- Backlinks sit after the prose, inside the article: `section.kb-backlinks[aria-label="Linked from"]`, heading text `Linked from`. Five `a.kb-backlink` rows, then `details.kb-backlinks-more`.

Map (`/map/`, `src/pages/map.astro`): `h1.map-head__title` is `The vault`. Full graph `[data-constellation-root][data-mode="full"][data-domain-labels]`. Below it, `h2` `The six domains`. Each domain is `section.domain` with `p.domain__blurb` and a link to `/domains/{d}/`. There is no filter field and no `button[data-map-domain]`.

`section[data-content-map]` is headed `Content map` (`h2#content-map-title`). The dek is `p.cmap__dek` and states the computed page count (`data-content-map-count`). When `data-content-map-other` is not `0`, the dek also states how many pages have no type. The tree is closed `details`: type by page count with `Other` last, then folder, then `a.cmap__link` titles. It lists every published note except home and `notes/index`. Hub-first order inside one content-map folder does not show, because that folder is already one type. The visible hub-first check is `/folder/wiki/Story-Craft/`.

Domain pages (`src/pages/domains/[domain].astro`) open from the home chips. The `h1` is `DOMAIN_LABELS[d]` (`Learning` for `learning`). `a.head__kind` text `Map of Content` returns to `/map/`. The list is `ul.moc`. Notes is current, because the page sets `active="notes"`.

`/graph/` (`src/pages/graph.astro`) is its own page. `h1` text is `Vault graph`. It does not redirect to `/map/`.

`/notes/` (`src/pages/notes.astro`) is the Notes index: h2 `Condensed` and h2 `Hubs`. It does not redirect to `/map/`. There is no `h1`.

Search: on a laptop, type into `input[data-search-input]` (or focus with Control/Meta+K). Results are `a.kb-ac-row` inside `[data-search-results]` (hidden until open). Empty: `p.kb-ac-empty` with `No notes found.` Loading miss: `Search index loading…`. Enter opens the highlighted row, else the first row. At `max-width: 720px` the field is hidden until `button#kb-search-btn` opens it. The domain chip is one of the six `DOMAIN_LABELS`. `wiki/Language/…` resolves to `language`, so the chip's DOM text is `Language`. `src/layouts/Base.astro` uppercases `.kb-ac-domain` and caps it at 84px.

Read `features/` before driving. A pass that claims the map is current drives every feature in one session. A task about one surface drives that feature.

## Evidence

```sh
.cursor/skills/verify-logos52/helpers/evidence.sh
```

Named location. Cleanup must leave it in place:

- `/opt/cursor/artifacts/verify-logos52/` when `/opt/cursor/artifacts` exists
- `/tmp/verify-logos52/evidence/` otherwise

Override with `VERIFY_EVIDENCE_DIR`.

Capture the visitor action and the resulting state:

- Action: the control (role, name, or selector, plus the text)
- Resulting state: URL, heading, and a chrome or nav change when one exists
- Side effect: the next route, an open dropdown, a theme attribute, or a 404 you left as a 404
- Artifacts: before and after screenshots, doctor stdout, the launch log tail. A screen recording of the clicks belongs with those files.

This site has no authenticated API. Do not stub Pagefind or `/graph.json`. When the index is missing, record that and stop.

## Cleanup

```sh
.cursor/skills/verify-logos52/helpers/cleanup.sh
```

Stops only the PID and process group in `/tmp/verify-logos52/run.env`, then removes that run file. It does not delete the evidence directory. After cleanup, list the evidence directory and confirm the proof files are still there.

Kill the recorded process group. Do not `pkill` by the name `astro` or `node`. When launch fails part-way, still run cleanup so port 4321 is not stranded.

## Helpers

Executable. Invoke by path from the repo root:

| Script | Role |
|---|---|
| `helpers/launch.sh` | Start `npm run dev` on 4321, wait for the `hero__title` class |
| `helpers/doctor.sh` | Ownership and HTTP check. `doctor.sh --ci` calls `npm run verify` |
| `helpers/evidence.sh` | Print and create the evidence directory |
| `helpers/cleanup.sh` | Kill only this run's process tree. Keep evidence |
| `helpers/common.sh` | Shared paths. Source it. Do not run it |

## Features

See `features/README.md`.

1. Home / Start here
2. Notes index (`/notes/`)
3. Wiki page
4. Search
5. Map
6. Graph (`/graph/`)
