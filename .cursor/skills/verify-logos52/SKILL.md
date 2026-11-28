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

That script runs `npm run dev -- --host 0.0.0.0 --port 4321` from the repo root, in its own session (`setsid`) so the server stays up after the launch script exits. It records the PID and process group in `/tmp/verify-logos52/run.env`, and waits until `GET http://127.0.0.1:4321/` returns 200 and the HTML contains `id="page-home"`.

Ready means the home page is usable:

- HTTP 200 on `/` and the home markup includes `id="page-home"` (`div#page-home` in `src/pages/index.astro`).
- The Astro log at `/tmp/verify-logos52/astro.log` mentions port 4321
- First boot runs `predev` (note copy, catalog, journal surfaces, `ensure-pagefind`). When `dist/pagefind/pagefind.js` is missing, `predev` runs a full `astro build` before the dev server binds. The header search does not query Pagefind. Wait for HTTP, not just the process.

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
5. `GET /` is 200 and includes `id="page-home"`
6. `GET /explainers/` is 200 and includes `id="page-explainers"` (`div#page-explainers` in `src/pages/explainers.astro`)

When any check fails, do not drive.

The CI sequence is the same script with `--ci`. It runs the cheap checks, then calls `npm run verify`:

```sh
.cursor/skills/verify-logos52/helpers/doctor.sh --ci
```

`--ci` reads `package.json` `scripts.verify` and runs `npm run verify`. When that script is missing, `--ci` exits 1. Do not paste `lint:fm`, `guard:source`, `build`, `guard:design`, `guard`, and `test` in as a substitute.

## Drive

Harness: Chrome via the `computerUse` subagent, or CDP against http://127.0.0.1:4321. Prefer accessible names, `data-*` attributes, and route paths. Do not use click coordinates.

Drive only an instance this skill launched, and only after doctor passed. Open http://127.0.0.1:4321/. Chrome is `header.ia-bar` (`src/layouts/Base.astro`) on Astro pages. Static pages (`public/about/index.html`, `public/projects/tsumugu-story/index.html`) copy the same bar. At laptop width (wider than `45.98rem`) the four nav links are visible. Do not open the menu first. At `max-width: 45.98rem`, `nav.meta-links` is `display: none` and the same links are inside `details.menu`.

The current section is class `current` on `nav.meta-links a`. There is no `aria-current` and no `a.kb-nav__link`. The footer does not repeat the nav. There is no `header.kb-chrome` on a rendered page. `src/components/Chrome.astro` is not imported.

| Control | How to find it | Where it goes |
|---|---|---|
| Brand | `a.brand`, name `Logos52` | `/` |
| Nav (laptop) | `nav.meta-links a` text `Explainers`, `Projects`, `Journal`, `About` | `/explainers/`, `/projects/`, `/journal/`, `/about/` |
| Menu | `summary[aria-label="Menu"]` | the same links, plus `Home`, plus theme |
| Theme | inside the menu, `button[data-theme-set="light"]` (`aria-label="Light"`) and `button[data-theme-set="dark"]` (`aria-label="Dark"`) | sets `html[data-theme]` |
| Search | `input#site-search` `aria-label="Search this page"` | filters rows on the page (`data-search-hide`) |

`/` sets `section="home"`. `span.here` is `Home`, and no meta link is `current`. `/explainers/` sets `current` on Explainers. A wiki note sets `section` to `explainers`, so Explainers is current there too. A journal note sets Journal. A project note sets Projects.

Home (`src/pages/index.astro`):

- `div#page-home`. `a.wordmark` text `Logos52`. The lede is `#intro`.
- `section#work` `h1` `Projects`, `section#journal` `h1` `Journal`, `section#explainers` `h1` `Explainers`, and `h1` `Top of mind`.
- The Explainers column includes `svg.diagram` (`FlatGraph`). Nodes are `a.node`.

Article (`src/pages/[...slug].astro` → `src/layouts/Note.astro`):

- `div#page-article`
- `header.mast span.title`
- `p.abstract` when the note has a description or blurb
- Kind and updated sit in `#article-facts` (`h6` `Kind`, `h6` `Updated`)
- Body is `.essay-body`. The markdown `h1` inside it is hidden.
- `h2` `Linked from` and `div.lf` when anything links here
- Figures and side notes are not on every note. The pages, the `a.sidenote-ref` markers, and the `button.fig-open` diagram control are in `features/wiki-page.md`. Builders' Logs 2026 has neither.

Explainers (`/explainers/`, `src/pages/explainers.astro`): `span.title` is `Explainers`. View buttons are `Sections`, `A to Z`, `Recently updated`. Topic cards are `.ex-hubs a`.

Journal (`/journal/`, `src/pages/journal.astro`): `span.title` is `Journal`. View buttons are `Months`, `Two tracks`, `Year`, `Threads`, plus `AI news`.

Projects (`/projects/`, `src/pages/projects.astro`): `span.title` is `Projects`. View buttons are `Whiteboard`, `List`, `Activity`.

About (`/about/`, `public/about/index.html`): `span.title` is `How this wiki works`.

Tsumugu Story (`/projects/tsumugu-story/`, `public/projects/tsumugu-story/index.html`): `span.title` is `Tsumugu Story`. The student row is `[aria-label="The six students"]`.

Tsumugu Core (`/projects/tsumugu-core/`, `public/projects/tsumugu-core/index.html`): `span.title` is `Tsumugu Core`. The level switch is `button[data-level]`.

`/about/`, `/projects/tsumugu/`, `/projects/tsumugu-story/`, and `/projects/tsumugu-core/` are 200 on `npm run preview`. On `npm run dev` those directory URLs are Astro's 404, and the file is at the same path plus `index.html`. The feature files record that split. Do not patch the route from this skill.

Search: type into `input#site-search` (or focus with `/`). Rows that do not contain the query get `data-search-hide`. There is no results dropdown. Enter opens `/?q=` only on a page with no search rows.

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
- Side effect: the next route, a view panel, a theme attribute, an open profile, or a 404 you left as a 404
- Artifacts: before and after screenshots, doctor stdout, the launch log tail. A screen recording of the clicks belongs with those files.

This site has no authenticated API. Do not stub Pagefind, `/graph.json`, or the static project HTML. The header search filters DOM rows. It does not load `/pagefind/pagefind.js`. When `#site-search` is missing on a `Base` page, record that and stop.

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
| `helpers/launch.sh` | Start `npm run dev` on 4321, wait for `id="page-home"` |
| `helpers/doctor.sh` | Ownership and HTTP check. `doctor.sh --ci` calls `npm run verify` |
| `helpers/evidence.sh` | Print and create the evidence directory |
| `helpers/cleanup.sh` | Kill only this run's process tree. Keep evidence |
| `helpers/common.sh` | Shared paths. Source it. Do not run it |

## Features

See `features/README.md`.

1. Home
2. Explainers (`/explainers/`)
3. Article
4. Search
5. Journal (`/journal/`)
6. Projects (`/projects/`)
7. About (`/about/`)
8. Tsumugu Story switcher (`/projects/tsumugu-story/`)
9. Tsumugu Core reader (`/projects/tsumugu-core/`)
