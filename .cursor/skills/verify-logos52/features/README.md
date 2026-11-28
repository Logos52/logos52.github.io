# Feature map

Visitor surfaces on the published Astro wiki after the NDC rebuild (`71839401`). Drive these in Chrome against the instance `helpers/launch.sh` started. A web page does not get a parallel CLI check.

| Feature | User entry | File |
|---|---|---|
| Home | `/` | [home.md](home.md) |
| Explainers | Nav `Explainers`, or `/explainers/` | [explainers.md](explainers.md) |
| Article | a home card, an explainers row, or a project link → `[...slug].astro` | [wiki-page.md](wiki-page.md) |
| Search | `input#site-search` (`aria-label="Search this page"`); `/` focuses it | [search.md](search.md) |
| Journal | Nav `Journal`, or `/journal/` | [journal.md](journal.md) |
| Projects | Nav `Projects`, or `/projects/` | [projects.md](projects.md) |
| About | Nav `About`, or `/about/` | [about.md](about.md) |
| Tsumugu Story switcher | a Projects card `Tsumugu Story` → `/projects/tsumugu-story/` | [tsumugu-story.md](tsumugu-story.md) |

## What this map leaves out

The header is `header.ia-bar` in `src/layouts/Base.astro`. The four nav links are Explainers, Projects, Journal, About. `src/components/Chrome.astro` is not imported by any page.

These routes are not their own features:

- `/map/`, `/notes/`, and `/graph/` are Astro redirects to `/explainers/` (`astro.config.ts`). There is no `src/pages/map.astro`, `notes.astro`, or `graph.astro`.
- `/domains/{d}/`, `/folder/…/`, and `/tags/…/` answer 301 to `/explainers/` (`src/pages/domains/[domain].astro`, `src/pages/folder/[...folder].astro`, `src/pages/tags/[tag].astro`).
- `/archive/` redirects to `/projects/` (`astro.config.ts`). There is no `src/pages/archive.astro`.
- `/llm-knowledge-base/` is 301 to `/` (`src/pages/llm-knowledge-base.astro`).
- `/personal/` (`src/pages/personal.astro`) is a list of personal notes. It is not in the header nav.
- `/projects/digital-gardeners/` (`src/pages/projects/digital-gardeners/`).
- The story board and binder (`public/projects/tsumugu-story/board/`, `…/binder/`) are separate tools on the Tsumugu Story page. The mapped control is the student switcher.

The flat graph (`src/components/FlatGraph.astro`) is a section on Home and on Explainers. It is not a `/graph/` page.

## Driving conventions

- Start from the instance `launch.sh` started. Doctor before the first drive.
- Prefer ARIA names, `data-*` attributes, and route paths.
- One serial Chrome session for the whole pass.
- Laptop width (wider than `45.98rem`) so `nav.meta-links` is visible. At `max-width: 45.98rem` those links hide and the same destinations are in `details.menu`.
- Capture the action and the resulting state.
- Report an unreachable path with the URL you opened and the precondition that failed.
- Cleanup removes the server. It leaves the evidence directory in place.
- `launch.sh` starts `npm run dev`. On that server, `/about/`, `/projects/tsumugu/`, and `/projects/tsumugu-story/` are 404s. The HTML is at `index.html` on the same path. `npm run preview` returns 200 for the directory URLs. The feature files call that a product gap.
