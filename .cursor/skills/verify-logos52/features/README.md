# Feature map

Visitor surfaces on the published Astro wiki. Drive these in Chrome against the instance `helpers/launch.sh` started. A web page does not get a parallel CLI check.

| Feature | User entry | File |
|---|---|---|
| Home / Where to start | `/` → `section.doors` → `a.door` | [home-start-here.md](home-start-here.md) |
| Wiki index | Chrome `Map`, or `/notes/` (301 to `/map/`) → `a.map-row__link` | [wiki-index.md](wiki-index.md) |
| Wiki page | the home spotlight, a map row, or a resolved wikilink → `[...slug].astro` | [wiki-page.md](wiki-page.md) |
| Search | `input[aria-label="Search notes"]` (⌘K / Ctrl+K); on a phone, the magnifier first | [search.md](search.md) |
| Map | Chrome `Map`, or `/map/` | [map.md](map.md) |

## What this map leaves out

A route scan of `src/pages/` after the NDC redesign (commit `2ea4f605`) found no sixth visitor surface that needs its own file. Domain pages are the home doors and the return trip on Map. The wiki list is the Wiki index feature.

These pages stay out of the map:

- Chrome `Projects`, `Journal`, `About`. Personal is not in Chrome. The page is still `/personal/` (`src/pages/personal.astro`).
- `/archive/` (`src/pages/archive.astro`, `h1` `Archive`), linked from Projects → Full archive
- `/projects/digital-gardeners/` and `/projects/digital-gardeners/{id}/` (`src/pages/projects/digital-gardeners/`), the Notable design features catalog reached from a Projects card
- `/graph/` (`src/pages/graph.astro` redirects to `/map/`)
- `/tags/[tag]/`
- `/journal/calendar/` (a link on the Journal landing)
- `/llm-knowledge-base/` (301 to `/`)

Folder listings (`/folder/…/`) are the crumb destination on a wiki note. Drive them from the Wiki page feature.

Phone search (the magnifier at ≤720px) is an entry point on Search, not a separate feature.

## Driving conventions

- Start from the instance `launch.sh` started. Doctor before the first drive.
- Prefer ARIA names, `data-*` attributes, and route paths.
- One serial Chrome session for the whole pass.
- Capture the action and the resulting state.
- Report an unreachable path with the URL you opened and the precondition that failed.
- Cleanup removes the server. It leaves the evidence directory in place.
