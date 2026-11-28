# Projects

The projects page is a whiteboard of six cards, plus List and Activity views of the same six. A tail under the board lists vault projects that are not on the whiteboard.

Source: `src/pages/projects.astro` (`section="projects"`), `src/data/projects-views.html`, `src/scripts/ndc-board.ts` (`bindViews`, `bindPacked`, `bindWrite`).

## Sub-features

- `projects-title` is `header.mast span.title` text `Projects`. `span.here` is `Projects`. The nav link `Projects` has class `current`.
- `projects-views` is `div.vsw` (`role="group"`, `aria-label="View"`). Buttons: `Whiteboard` (`data-view="whiteboard"`, default `aria-pressed="true"`), `List` (`list`), `Activity` (`activity`). The matching `div.vw` gets class `on`.
- `projects-board` is `div.cards.wb[data-wb]`. Cards are `a.wb-card`, six of them, in this order: `Tsumugu Story` (`/projects/tsumugu-story/`), `Tsumugu Core` (`/projects/tsumugu-core/`, the Tsumugu Core feature), `Tsumugu Encoding Dictionary` (`https://tsumugu-ed.com`, leaves the origin), `llm-knowledge-base` (`/about/`), `Builders' Logs 2026` (`/wiki/Systems/AI--and--Agentic-Systems/Builders'-Logs-2026/`), `WNAC / Wedge Needs A Copilot` (`/projects/wnac/`, the vault note `projects/wnac.md` rendered as an article).
- `projects-list` is `div.pl-list` of the same six links. `projects-activity` is `a.ac-row` rows.
- `projects-tail` is `div.page.archived` when any vault project is not on the board: `h2` `Current` and `h2` `Archived`, rows `a.rw`.

## How to get to it (user POV)

Click the nav link `Projects`, or open http://127.0.0.1:4321/projects/. `/archive/` redirects here.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Laptop width.

- **Open Projects.** Go to `/projects/`.
- **Read it.** `header.mast span.title` is `Projects`. `button[data-view="whiteboard"]` has `aria-pressed="true"`. Six `a.wb-card` cards are on the board, including `h3` `Tsumugu Story`, `h3` `Tsumugu Core`, and `h3` `WNAC / Wedge Needs A Copilot`. Stop before opening Tsumugu Core. That reader is its own feature.
- **Switch view.** Click the button named `List`.
- **View state.** `button[data-view="list"]` has `aria-pressed="true"`. `div.vw[data-view="list"]` has class `on`. `div.pl-list a[href="/projects/tsumugu-story/"]` is present (`h3` `Tsumugu Story`). Stop on this page. The student switcher is the Tsumugu Story feature.

- **Proof.** Screenshot the Projects mast on Whiteboard, with the view buttons visible.

## Product gaps

On `npm run dev`, clicking `Tsumugu Story` (`href="/projects/tsumugu-story/"`) lands on Astro's 404 (`Path: /projects/tsumugu-story/`). `npm run preview` returns 200 for that path. On dev the file is at `/projects/tsumugu-story/index.html`. Same split for `/about/` from the `llm-knowledge-base` card.

## Gotchas

- Whiteboard cards are `a.wb-card`. `#site-search` does not filter them. List rows (`.pl-list > a`) are search rows.
- `bindPacked` absolutely positions the whiteboard cards. Click the card's `h3`, not a coordinate.
- `Tsumugu Encoding Dictionary` leaves the origin (`https://tsumugu-ed.com`). Use `Tsumugu Story` for an on-site landing.
- The student switcher is the Tsumugu Story feature. This feature stops when List is the pressed view.
