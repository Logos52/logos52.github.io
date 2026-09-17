---
name: verify-logos52
description: Drive the published Logos52 Astro wiki the way a visitor does. Launch the local site, doctor this run's instance, exercise one mapped feature in the browser, keep evidence, then tear down only what this run started.
---

# verify-logos52

Logos52 is a static Astro wiki. Visitors use the web UI, not a CLI. Live publish is https://logos52.github.io — never drive production as the instance under test. The local surface is `npm run dev` at http://localhost:4321 (same bind as `.cursor/environment.json`). `npm run build` then `npm run preview` is the production-like path.

This skill is the user-facing verification loop. It is not a second CI stack. `npm run verify` already exists on the Cloud Agent environment branch and runs `lint:fm && guard:source && build && guard && test` — the same sequence as PR CI. Doctor/launch may call that script when you want the heavy check. Do not add another `verify` npm script. On main without that script, call the individual scripts already on main.

Edit product code only when the task is a product fix. This skill records product gaps; it does not paper over them.

## Launch

Install is `npm ci` (Node >= 22). Launch does not install.

Default verification instance (matches environment.json):

```sh
.cursor/skills/verify-logos52/helpers/launch.sh
```

That script runs `npm run dev -- --host 0.0.0.0 --port 4321` from the repo root, records the PID/PGID in `/tmp/verify-logos52/run.env`, and waits until `GET http://127.0.0.1:4321/` returns 200 with `.hero__title` in the HTML.

Ready signals:

- HTTP 200 on `/` and the home markup includes `.hero__title`
- Astro log line with `localhost:4321` in `/tmp/verify-logos52/astro.log`
- First boot runs `predev` (note copy, catalog, `ensure-pagefind`). If `dist/pagefind/pagefind.js` is missing, `predev` runs a full `astro build` before the dev server binds. Wait for HTTP, not just the process.

Production-like alternative (still on 4321, still this run's process):

```sh
npm run build && npm run preview -- --host 0.0.0.0 --port 4321
```

Prefer `npm run dev` unless the bug is build/preview-only. One instance. Isolate port 4321. If 4321 is already bound by a PID this run did not start, launch exits 2 and you stop. Do not adopt that process. Do not start a second server beside it.

Teardown is Cleanup below. Launch leaves the server up.

## Doctor

Cheap, read-only, default:

```sh
.cursor/skills/verify-logos52/helpers/doctor.sh
```

Doctor checks, in order:

1. Node >= 22 (`package.json` `engines.node`)
2. `node_modules` present
3. `/tmp/verify-logos52/run.env` names a live PID this skill launched
4. That process tree owns port 4321
5. `GET /` is 200 and includes `.hero__title`
6. `GET /notes/` is 200 (Notes index the Chrome nav actually opens)

If any check fails, do not drive. Doctor does not run `npm run verify`.

Heavy optional (same CI sequence, not a new stack):

```sh
.cursor/skills/verify-logos52/helpers/doctor.sh --ci
```

`--ci` calls `npm run verify` when that script exists. If it does not (main without the environment branch), it calls `lint:fm`, `guard:source`, `build`, `guard`, and `test` in that order.

## Drive

Harness: Chrome via the `computerUse` subagent (or CDP against http://127.0.0.1:4321). Prefer accessible names, `data-*` attributes, and route paths. Do not use click coordinates.

Never drive an instance you did not start. Never drive https://logos52.github.io. If doctor did not pass, stop.

Open http://localhost:4321/. Chrome is on every page (`.kb-chrome`):

| Control | How to find it | Where it goes |
|---|---|---|
| Brand | link `.kb-brand`, `aria-label="Logos52"` on the mark | `/` |
| Map | nav link named `Map` (`.kb-nav__link`) | `/map` |
| Notes | nav link named `Notes` | `/notes` |
| Projects / Journal / Personal / About | same nav labels | `/projects` `/journal` `/personal` `/about` |
| Theme | `button#theme-toggle` `aria-label="Toggle theme"` | flips `html[data-theme]` |
| Search | `input[data-search-input]` `aria-label="Search notes"` | dropdown `[data-search-results]` |
| Menu (≤720px) | `button#kb-menu-btn` `aria-label="Open menu"` | `.kb-nav.open` |

Home (`src/pages/index.astro`, `active="home"` so no nav item is `.on`):

- Hero: `.hero__title`, `.hero__lede`
- Domain chips: `a.kb-domainchip[data-domain]` → `/domains/{learning,agentic,language,focus,mind,gen}/`
- Start here: `section.start-here` → five `a.door`; intent text is `.door__intent` (`Understand`, `Apply`, `Learn`, `Decode`, `Explore`)
- Explore door `href` is `/map/`. The other four resolve through `slugifyFilePath` / `slugToUrl`
- Top of mind: `.topmind__item` — the build throws if there are more than four
- Hub columns: `.hub-lists` / `.hub-card` / `.hub-list a`
- Project Updates: `.updates a.updates__title`

Wiki note (`src/pages/[...slug].astro` → `Note.astro`):

- `article[data-pagefind-body]`
- `h1.kb-note-title`
- Breadcrumb `.kb-crumb` (first crumb → `/notes/`)
- Body links `.kb-prose a` (resolved wikilinks). Unresolved targets are `span.missing`, not links
- Rail: `[data-constellation-root][data-mode="local"]`, `nav.kb-toc[aria-label="Contents"]`, `section.kb-backlinks[aria-label="Backlinks"]`

Map (`/map/`): `h1.map-head__title` is `The vault`; full graph `[data-constellation-root][data-mode="full"][data-domain-labels]`; domain headings link to `/domains/{d}/`.

Graph (`/graph/`): `h1` is `Vault graph`; same constellation island. Not in Chrome nav.

Search: type into `input[data-search-input]` (or focus with Control/Meta+K). Results are `a.kb-ac-row` inside `[data-search-results]` (hidden until open). Empty: `.kb-ac-empty`. Loading miss: `Search index loading…`. Enter opens the highlighted row, else the first row.

Recipe for the first mapped feature (Home / Start here → Explore):

1. Launch, then doctor. Stop if doctor fails.
2. Open http://localhost:4321/ in Chrome this run started.
3. Wait for `h1.hero__title` and `section.start-here`.
4. Count `a.door` (five) and read `.door__intent` labels.
5. Click the door whose `.door__intent` is `Explore` (href `/map/`).
6. Wait for URL `/map/` or `/map`, `h1.map-head__title` = `The vault`, and `.kb-nav__link.on` named `Map`.
7. Capture evidence (before click, after navigation). Then cleanup.

Read `features/` before driving any other surface. One feature per prove pass unless the task says otherwise.

## Evidence

```sh
.cursor/skills/verify-logos52/helpers/evidence.sh
```

Named location (cleanup must not delete it):

- `/opt/cursor/artifacts/verify-logos52/` when `/opt/cursor/artifacts` exists (this Cloud Agent VM)
- `/tmp/verify-logos52/evidence/` otherwise

Override with `VERIFY_EVIDENCE_DIR`.

Capture a real visitor path, not a final screenshot alone:

- Action: the control you used (role/name/selector + text)
- Resulting state: URL, heading, and a chrome/nav change when one exists
- Side effects: a second route, a dropdown that opened, a theme attribute, a 404 you refused to hide
- Artifacts: before/after screenshots, a short screen recording of the click, `doctor` stdout, the launch log tail

Mocks only at a production boundary. This site has no authenticated API; do not stub Pagefind or `/graph.json`. If the index is missing, that is a product/setup gap — record it.

## Cleanup

```sh
.cursor/skills/verify-logos52/helpers/cleanup.sh
```

Stops only the PID/PGID in `/tmp/verify-logos52/run.env`. Then removes that run file. Does not delete `EVIDENCE_DIR`. Confirm the evidence directory still lists files after cleanup.

Never `pkill -f astro` / `pkill -f node`. If launch failed part-way, still run cleanup so port 4321 is not stranded.

## Helpers

All executable; invoke them by path from the repo root:

| Script | Role |
|---|---|
| `helpers/launch.sh` | Start `npm run dev` on 4321, wait for `.hero__title` |
| `helpers/doctor.sh` | Cheap ownership + HTTP check; `--ci` → existing verify scripts |
| `helpers/evidence.sh` | Print/create the named evidence directory |
| `helpers/cleanup.sh` | Kill only this run's process tree; keep evidence |
| `helpers/common.sh` | Shared paths (sourced, not run) |

## Features

See `features/README.md`. Mapped user surfaces:

1. Home / Start here
2. Wiki index
3. Wiki page
4. Search
5. Map
