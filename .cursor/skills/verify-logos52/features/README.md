# Feature map

User-facing surfaces on the published Astro wiki. Drive these in Chrome against the instance `helpers/launch.sh` started. Do not add a parallel CLI check for a feature that is a web page.

| Feature | User entry | File |
|---|---|---|
| Home / Start here | `/` → `section.start-here` → `a.door` | [home-start-here.md](home-start-here.md) |
| Wiki index | Chrome `Notes` → `/notes/` | [wiki-index.md](wiki-index.md) |
| Wiki page | a door, a hub link, or a resolved wikilink → `[...slug].astro` | [wiki-page.md](wiki-page.md) |
| Search | `input[aria-label="Search notes"]` (⌘K / Ctrl+K) | [search.md](search.md) |
| Map | Chrome `Map`, Explore door, or `/map/` | [map.md](map.md) |

Graph (`/graph/`) is a related constellation page, not a Chrome nav item. Cover it from the Map feature when a graph-only bug is in play.

First prove-once: Home / Start here, Explore door.
