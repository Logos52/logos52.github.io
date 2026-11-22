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

That script runs `npm run dev -- --host 0.0.0.0 --port 4321` from the repo root, in its own session (`setsid`) so the server stays up after the launch script exits. It records the PID and process group in `/tmp/verify-logos52/run.env`, and waits until `GET http://127.0.0.1:4321/` returns 200 and the HTML contains `data-home-objective`.

Ready means the home page is usable:

- HTTP 200 on `/` and the home markup includes `data-home-objective` (`p.lede[data-home-objective]` in `src/pages/index.astro`). `/` has no `h1`.
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
5. `GET /` is 200 and includes `data-home-objective`
6. `GET /map/` is 200 and includes `data-map-title`. `/notes/` is a 301 to `/map/`, so a 200 check on `/notes/` does not describe this site.

When any check fails, do not drive.

The CI sequence is the same script with `--ci`. It runs the cheap checks, then calls `npm run verify`:

```sh
.cursor/skills/verify-logos52/helpers/doctor.sh --ci
```

`--ci` reads `package.json` `scripts.verify` and runs `npm run verify`. When that script is missing, `--ci` exits 1. Do not paste `lint:fm`, `guard:source`, `build`, `guard:design`, `guard`, and `test` in as a substitute.

## Drive

Harness: Chrome via the `computerUse` subagent, or CDP against http://127.0.0.1:4321. Prefer accessible names, `data-*` attributes, and route paths. Do not use click coordinates.

Drive only an instance this skill launched, and only after doctor passed. Open http://127.0.0.1:4321/. Chrome is on every page (`.mast`). Section links are not a visible header bar. Open `button#menu-btn` first. The footer (`.colophon`) repeats the same five links. The current section is `aria-current="page"` on that link. There is no class `on` for the current section (`.on` is the map filter chip and the search highlight).

| Control | How to find it | Where it goes |
|---|---|---|
| Brand | link `.mast__mark` text `Logos52` | `/` |
| Menu | `button#menu-btn` `aria-label="Open menu"` | overlay `#menu` with Home, Map, Projects, Journal, About |
| Footer | `a.colophon__link` with those same labels | the same hrefs |
| Search (laptop) | `input[data-search-input]` `aria-label="Search notes"` | dropdown `[data-search-results]` |
| Search (≤48rem) | `button#search-btn` `aria-label="Search"` | adds `.is-search` on `.mast` and focuses the same input |

Chrome has no Notes item and no Personal item. `/notes/` and `/graph/` are 301 redirects to `/map/`.

Home (`src/pages/index.astro`, `active="home"`, so the Home link is `aria-current="page"`):

- Lede: `p.lede[data-home-objective]`. There is no `h1` on `/`. The document title is `Logos52`. `kb-astro/site-data/home.json` is not read by this page.
- Spotlight: the `a.word__link` whose text is `Open Builders' Logs 2026` → `/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`.
- Where to start: heading `Where to start` (`#start-head`). Five `a.word__link` doors. The label is the `.word__title` (`Working well with AI`, `Learning faster`, `Managing yourself`, `Making sense of the world`, `Money and craft`). Href is `/domains/{ai,learning,self,world,craft}/`.
- Top of mind: `#mind-head` and the following `ul.lines` with exactly three `li`. The build throws when the count is not 3.
- Home does not mount a constellation, domain chips, hub columns, or project updates.

Wiki note (`src/pages/[...slug].astro` → `src/layouts/Article.astro`):

- `article[data-pagefind-body]`
- `h1.reading__title`
- `.reading__dek` when the note has a description
- Type sits in `.reading__meta` as `readerTypeLabel` (`Concept`, `Essay`, `Hub`, `Reference`, …)
- Breadcrumb `.trail`: last segment is text. `journal` / `personal` / `projects` first segments go to those landings. A `notes` first segment goes to `/map/`. Other crumbs, including `wiki`, go to `/folder/…/`
- Body links `.copy a`. Unresolved targets are `span.missing`
- A `Related` or `Related pages` list shows five items, then `details.related-more`
- No rail. `Article.astro` does not render an aside, a TOC, or a local constellation.
- The article body is `.copy.copy--note`. The markdown `h1` inside it is hidden.
- Backlinks sit after the prose, inside the article: `section.linked[aria-label="Linked from"]`, heading text `Linked from`. Five `.linked__row` rows, then `details.linked__more`.

Map (`/map/`): `h1[data-map-title]` is `Map`. The phrase `The vault` survives only in the page description (`The vault graph and every wiki page.`), not as the heading. Full graph `[data-constellation-root][data-mode="full"][data-domain-labels]`. Below it, `input[data-map-search]` (`aria-label="Filter pages"`) and `button[data-map-domain]` filter `.word__link` rows (`.word__title`). Those chips filter the list. They are not links to `/domains/…/`. Domain pages are opened from the home doors. A domain `h1` is the label in `DOMAIN_LABELS` (`Learning faster` for `learning`). Domain pages set `active="map"`, so Map is current in the menu. the trail link `Map of Content` returns to `/map/`.

`/graph/` redirects to `/map/`. It has no `h1`.

Search: on a laptop, type into `input[data-search-input]` (or focus with Control/Meta+K). Results are `a.find__row` inside `[data-search-results]` (hidden until open). Empty: `.find__empty` with `No notes found.` Loading miss: `Search index loading…`. Enter opens the highlighted row, else the first row. At ≤48rem the field is hidden until `button#search-btn` opens it. The domain chip is one of the five `DOMAIN_LABELS`. `wiki/Language/…` resolves to `world`, so the chip text is `Making sense of the world`. There is no theme toggle.

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
| `helpers/launch.sh` | Start `npm run dev` on 4321, wait for the `data-home-objective` attribute |
| `helpers/doctor.sh` | Ownership and HTTP check. `doctor.sh --ci` calls `npm run verify` |
| `helpers/evidence.sh` | Print and create the evidence directory |
| `helpers/cleanup.sh` | Kill only this run's process tree. Keep evidence |
| `helpers/common.sh` | Shared paths. Source it. Do not run it |

## Features

See `features/README.md`.

1. Home / Where to start
2. Wiki index (the Map list; `/notes/` redirects)
3. Wiki page
4. Search
5. Map
