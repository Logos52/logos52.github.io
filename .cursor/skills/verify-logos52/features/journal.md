# Journal

The journal is a month board with four views and an AI-news toggle. A row opens a journal note.

Source: `src/pages/journal.astro` (`section="journal"`), `src/lib/journal-board.ts`, `src/data/journal-surface.json`, `src/scripts/ndc-board.ts` (`bindViews`, `bindJournal`).

## Sub-features

- `journal-title` is `header.mast span.title` text `Journal`. `span.here` is `Journal`. The nav link `Journal` has class `current`.
- `journal-views` is `div.jr-views` (`role="group"`, `aria-label="View"`). Buttons: `Months` (`data-view="months"`, default `aria-pressed="true"`), `Two tracks` (`tracks`), `Year` (`year`), `Threads` (`threads`). `bindViews` sets `data-view` on `div.jr` and class `on` on the matching `div.jv`.
- `journal-months` lists `a.jr-row` entries (`href` like `/journal/YYYY-MM-DD-…/`) and, when the week has news, external `a.jr-row` with `target="_blank"`.
- `journal-news` is `button.jr-newsbtn` text `AI news`, default `aria-pressed="true"`. A click sets `aria-pressed` to the opposite and toggles class `nonews` on `div.jr`.
- `journal-rail` month links (`a.jr-mn[data-month]`) call `showMonth` and do not leave the page.

## How to get to it (user POV)

Click the nav link `Journal`, or open http://127.0.0.1:4321/journal/. Home's `All journal entries` link lands here.

## Driving it with computerUse

Preconditions:

- Doctor passed.
- Laptop width.

- **Open the board.** Go to `/journal/`.
- **Read it.** `header.mast span.title` is `Journal`. `button[data-view="months"]` has `aria-pressed="true"`. `div.jv[data-view="months"]` has class `on`.
- **Switch view.** Click the button named `Two tracks`.
- **View state.** `div.jr` has `data-view="tracks"`. `div.jv[data-view="tracks"]` has class `on`. `div.jv[data-view="months"]` does not. The `Two tracks` button has `aria-pressed="true"`.
- **Toggle news.** Click `Months` to restore that panel. Click `button.jr-newsbtn`.
- **News state.** The button has `aria-pressed="false"` and `div.jr` has class `nonews`.

- **Proof.** Screenshot the Journal mast on Months, and the same page after Two tracks (the tracks panel visible).

## Gotchas

- There is no `/journal/calendar/` link on this page.
- `a.jr-row` is not a search row. Typing in `#site-search` on this page does not hide those rows. Enter leaves for `/?q=`.
- News links use `target="_blank"`. An entry link stays on this origin. Do not require a particular entry title. Titles come from `journal-surface.json` and can change when the surface file is rebuilt.
