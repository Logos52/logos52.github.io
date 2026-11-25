# Feature map

Visitor surfaces on the published Astro wiki. Drive these in Chrome against the instance `helpers/launch.sh` started. A web page does not get a parallel CLI check.

| Feature | User entry | File |
|---|---|---|
| Home / Start here | `/` → `h2` `Start here` → `a.door` | [home-start-here.md](home-start-here.md) |
| Notes index | Nav `Notes`, or `/notes/` → an entry title | [wiki-index.md](wiki-index.md) |
| Wiki page | a Start here door, a Notes entry, a search row, a content-map link, or a legacy spaced URL → `[...slug].astro` | [wiki-page.md](wiki-page.md) |
| Search | `input[aria-label="Search notes"]` (⌘K / Ctrl+K); on a phone, the magnifier first | [search.md](search.md) |
| Map | Nav `Map`, or `/map/` | [map.md](map.md) |
| Graph | `/graph/` | [graph.md](graph.md) |

## What this map leaves out

A pass after the October design restore (`dc0ec574`, `src/pages/`) kept these as their own files: home, the Notes index, a wiki note, search, Map (including the content map and domain pages), and the vault graph. `src/pages/graph.astro` is a page with its own `h1`. It is the Graph feature. `src/pages/notes.astro` is the Notes index. It is not a redirect.

These pages stay out of the map:

- Nav `Projects`, `Journal`, `Personal`, `About` (`src/pages/projects.astro`, `src/pages/journal.astro`, `src/pages/personal.astro`, `src/pages/about.astro`). Personal is in the header nav.
- `/archive/` (`src/pages/archive.astro`, `h1` `Archive`), linked from Projects
- `/projects/digital-gardeners/` and `/projects/digital-gardeners/{id}/` (`src/pages/projects/digital-gardeners/`)
- `/tags/[tag]/`
- `/journal/calendar/` (a link on the Journal landing)
- `/llm-knowledge-base/` (`src/pages/llm-knowledge-base.astro`, 301 to `/`)

The content map is a section on Map (`section[data-content-map]` in `src/pages/map.astro`). Legacy spaced and naive-slug redirects (`src/redirects/doors/legacy-spaced.json`, loaded by `astro.config.ts`) are another way to open a wiki page. Hub-first order (`src/lib/folder-order.ts`) is the folder listing on the Wiki page feature. Domain pages are the home chips and the return trip on Map. `footer.kb-footer` does not repeat the nav.

Folder listings (`/folder/…/`) are the crumb destination on a wiki note. Drive them from the Wiki page feature.

Phone search (the magnifier at `max-width: 720px`) is an entry point on Search, not a separate feature.

## Driving conventions

- Start from the instance `launch.sh` started. Doctor before the first drive.
- Prefer ARIA names, `data-*` attributes, and route paths.
- One serial Chrome session for the whole pass.
- Capture the action and the resulting state.
- Report an unreachable path with the URL you opened and the precondition that failed.
- Cleanup removes the server. It leaves the evidence directory in place.
