---
name: verify-logos52
description: Drive the published Logos52 Astro wiki in a browser. Use when a public-site change needs a visitor-path proof — launch npm run dev on port 4321, doctor that instance, exercise a mapped feature, keep evidence, then tear down only what this run started.
---

# verify-logos52

Logos52 is a static Astro wiki. Visitors use the web UI. Live publish is https://logos52.github.io. Drive the local instance this skill started. The local command is `npm run dev` at http://127.0.0.1:4321 (the same bind as `.cursor/environment.json`). `npm run build` then `npm run preview` is the production-like path.

This skill is the visitor-facing drive loop. It is not a second CI stack. `npm run verify` on main runs `lint:fm && guard:source && build && guard && test`, the same sequence as a pull request. Doctor `--ci` calls that script. Do not add another `verify` npm script.

Record product gaps in the feature file. Leave product code alone unless the task is a product fix.

`verify-wiki` is a different skill (kept-blocks, frontmatter lint, a production build, one 390px render). Leave it alone.

## Launch

Install is `npm ci` (Node >= 22). Launch does not install.

```sh
.cursor/skills/verify-logos52/helpers/launch.sh
```

That script runs `npm run dev -- --host 0.0.0.0 --port 4321` from the repo root, in its own session (`setsid`) so the server stays up after the launch script exits. It records the PID and process group in `/tmp/verify-logos52/run.env`, and waits until `GET http://127.0.0.1:4321/` returns 200 and the HTML contains `hero__title`.

Ready means the home page is usable:

- HTTP 200 on `/` and the home markup includes `.hero__title`
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
5. `GET /` is 200 and includes `.hero__title`
6. `GET /notes/` is 200 (the Notes index Chrome actually opens)

When any check fails, do not drive.

The CI sequence is the same script with `--ci`. It runs the cheap checks, then calls `npm run verify`:

```sh
.cursor/skills/verify-logos52/helpers/doctor.sh --ci
```

`--ci` reads `package.json` `scripts.verify` and runs `npm run verify`. When that script is missing, `--ci` exits 1. Do not paste `lint:fm`, `guard:source`, `build`, `guard`, and `test` in as a substitute.

## Drive

Harness: Chrome via the `computerUse` subagent, or CDP against http://127.0.0.1:4321. Prefer accessible names, `data-*` attributes, and route paths. Do not use click coordinates.

Drive only an instance this skill launched, and only after doctor passed. Open http://127.0.0.1:4321/. Chrome is on every page (`.kb-chrome`):

| Control | How to find it | Where it goes |
|---|---|---|
| Brand | link `.kb-brand`; the mark has `aria-label="Logos52"` | `/` |
| Map | nav link named `Map` (`.kb-nav__link`) | `/map` |
| Notes | nav link named `Notes` | `/notes` |
| Projects / Journal / Personal / About | same nav labels | `/projects` `/journal` `/personal` `/about` |
| Theme | `button#theme-toggle` `aria-label="Toggle theme"` | flips `html[data-theme]` |
| Search (laptop) | `input[data-search-input]` `aria-label="Search notes"` | dropdown `[data-search-results]` |
| Search (≤720px) | `button#kb-search-btn` `aria-label="Search"` | adds `.search-open` on `.kb-chrome__inner` and focuses the same input |
| Menu (≤720px) | `button#kb-menu-btn` `aria-label="Open menu"` | `.kb-nav.open` |

Home (`src/pages/index.astro`, `active="home"`, so no nav item is `.on`):

- Hero: `.hero__title`, `.hero__lede`. When `kb-astro/site-data/home.json` is present, the live `h1` is `LLM Knowledge Base`.
- Domain chips: `a.kb-domainchip[data-domain]` → `/domains/{learning,agentic,language,focus,mind,gen}/`
- Start here: `section.start-here` → three `a.door`. Intent text is `.door__intent` (`Learn`, `Decode`, `Explore`). CSS uppercases the paint; the DOM text stays `Learn`.
- Explore door `href` is `/map/`. Learn and Decode resolve through `slugifyFilePath` / `slugToUrl`.
- Top of mind: `.topmind__item`. This tree has three. The build throws when the array grows past four.
- Home graph: default `Constellation` is `mode="spine"` (`[data-constellation-root][data-mode="spine"]`). `selectSpineConstellation` keeps hubs that exist in the graph, up to three `wiki/` satellites each (Self-Regulation: none), and `outerPerPrimarySat` is 0, so there is no outer ring.
- Hub columns: `.hub-lists` / `.hub-card` / `.hub-list a`
- Project Updates: `.updates a.updates__title`

Wiki note (`src/pages/[...slug].astro` → `src/layouts/Note.astro`):

- `article[data-pagefind-body]`
- `h1.kb-note-title`
- `.kb-note-dek` when the note has `description` or `blurb`
- Type pill `.kb-type-tag` is `readerTypeLabel` (`Concept`, `Essay`, `Hub`, `Condensed`, …)
- Breadcrumb `.kb-crumb`: last segment is text. `journal` / `personal` / `projects` / `notes` first segments go to those landings. Other crumbs, including `wiki`, go to `/folder/…/`
- Body links `.kb-prose a`. Unresolved targets are `span.missing`
- A `Related` or `Related pages` list shows five items, then `details.kb-related-more`
- Rail (`aside.kb-note-aside`): `[data-constellation-root][data-mode="local"]` and `nav.kb-toc[aria-label="Contents"]` (h2 anchors only)
- Backlinks sit after the prose, inside the article: `section.kb-backlinks[aria-label="Linked from"]`, heading text `Linked from`. Five `.kb-backlink` rows, then `details.kb-backlinks-more`. They are not in the rail.

Map (`/map/`): `h1.map-head__title` is `The vault`; full graph `[data-constellation-root][data-mode="full"][data-domain-labels]`; each domain has `p.domain__blurb` and a heading link to `/domains/{d}/`. Domain pages and `/graph/` set Chrome `active="notes"`, so Notes is `.on` after those hops.

Graph (`/graph/`): `h1` is `Vault graph`. Same constellation island. Not in Chrome nav.

Search: on a laptop, type into `input[data-search-input]` (or focus with Control/Meta+K). Results are `a.kb-ac-row` inside `[data-search-results]` (hidden until open). Empty: `.kb-ac-empty` with `No notes found.` Loading miss: `Search index loading…`. Enter opens the highlighted row, else the first row. At ≤720px the field is hidden until `button#kb-search-btn` opens it.

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
| `helpers/launch.sh` | Start `npm run dev` on 4321, wait for `.hero__title` |
| `helpers/doctor.sh` | Ownership and HTTP check. `doctor.sh --ci` calls `npm run verify` |
| `helpers/evidence.sh` | Print and create the evidence directory |
| `helpers/cleanup.sh` | Kill only this run's process tree. Keep evidence |
| `helpers/common.sh` | Shared paths. Source it. Do not run it |

## Features

See `features/README.md`.

1. Home / Start here
2. Wiki index
3. Wiki page
4. Search
5. Map
