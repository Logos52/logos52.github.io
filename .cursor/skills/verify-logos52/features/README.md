# Feature map

Visitor surfaces on the published Astro wiki. Drive these in Chrome against the instance `helpers/launch.sh` started. A web page does not get a parallel CLI check.

| Feature | User entry | File |
|---|---|---|
| Home / Start here | `/` → `section.start-here` → `a.door` | [home-start-here.md](home-start-here.md) |
| Wiki index | Chrome `Notes` → `/notes/` | [wiki-index.md](wiki-index.md) |
| Wiki page | a door, a hub link, or a resolved wikilink → `[...slug].astro` | [wiki-page.md](wiki-page.md) |
| Search | `input[aria-label="Search notes"]` (⌘K / Ctrl+K); on a phone, the magnifier first | [search.md](search.md) |
| Map | Chrome `Map`, Explore door, or `/map/` | [map.md](map.md) |

## What this map leaves out

A route scan of `src/pages/` on current main found no sixth visitor surface that needs its own file.

These pages already existed when the map was first written. They stay out of it:

- Chrome `Projects`, `Journal`, `Personal`, `About`
- `/graph/` (same constellation as Map; cover it from Map when the bug is that page only)
- `/tags/[tag]/`
- `/journal/calendar/` (a link on the Journal landing)
- `/llm-knowledge-base/` (301 to `/`)

Folder listings (`/folder/…/`) are the crumb destination on a wiki note. Drive them from the Wiki page feature.

Phone search (the magnifier at ≤720px, added in the 2026-10-15 header pass) is an entry point on Search, not a separate feature.

## Driving conventions

- Start from the instance `launch.sh` started. Doctor before the first drive.
- Prefer ARIA names, `data-*` attributes, and route paths.
- One serial Chrome session for the whole pass.
- Capture the action and the resulting state.
- Report an unreachable path with the URL you opened and the precondition that failed.
- Cleanup removes the server. It leaves the evidence directory in place.
