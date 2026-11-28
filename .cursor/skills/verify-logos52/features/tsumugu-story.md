# Tsumugu Story switcher

Tsumugu Story is a static project page. Six student buttons open and close a profile panel. The same page links to a story board and a binder. Those are separate tools.

Source: `public/projects/tsumugu-story/index.html` (the switcher is the inline script that binds `.st-b`). The Projects whiteboard and list link here (`src/data/projects-views.html`, `href="/projects/tsumugu-story/"`). No Astro page generates this URL.

## Sub-features

- `story-title` is `header.mast span.title` text `Tsumugu Story`. `span.here` is `Projects`.
- `story-row` is `div.st-row` (`role="group"`, `aria-label="The six students"`). Buttons are `button.st-b` with `data-i` `0` through `5`: 沈文, 阮草, 星野遙香, 金多恩, 阿迪, 白龍. Each starts with `aria-pressed="false"`.
- `story-panel` is `.st-p[data-i]`. CSS hides it until class `on`. The click handler sets `open` from the clicked button's `aria-pressed`. A closed button opens its panel (`aria-pressed="true"`, matching `.st-p` gets `on`). The same button again clears `on`. A different button switches the open panel.
- `story-tools` are `a[data-tool="board"]` and `a[data-tool="binder"]` further down the page. They are not the switcher.

## How to get to it (user POV)

From Projects, click the card or list row `Tsumugu Story`. Or open http://127.0.0.1:4321/projects/tsumugu-story/.

## Driving it with computerUse

Preconditions:

- Doctor passed.

- **Open the page.** On `npm run preview`, go to `/projects/tsumugu-story/`. On the dev server `launch.sh` starts, that path is a 404; open `/projects/tsumugu-story/index.html` (same file).
- **Read it.** `header.mast span.title` is `Tsumugu Story`. `[role="group"][aria-label="The six students"]` is present. No `.st-p` has class `on`.
- **Open a student.** Click `button.st-b[data-i="0"]` (visible name `沈文`).
- **Open state.** That button has `aria-pressed="true"`. `.st-p[data-i="0"]` has class `on`. Its `h2` contains `沈文`.
- **Close it.** Click the same button again.
- **Closed state.** `.st-p[data-i="0"]` does not have class `on`. The button has `aria-pressed="false"`.

- **Proof.** Screenshot the student row before the click, and the open 沈文 panel (the `h2` visible).

## Product gaps

`GET /projects/tsumugu-story/` on `npm run dev` is Astro's 404. The Projects card and list use that href. `npm run preview` returns 200 and the mast is `Tsumugu Story`. On dev, `/projects/tsumugu-story/index.html` is 200. The switcher above was driven on that `index.html` URL.

## Gotchas

- The profile is not a navigation. The address stays on the URL you opened.
- Each `button.st-b` shows the Chinese name and then the pinyin, with no space between them in the text (`沈文Shěn Wén`). Click `button.st-b[data-i="0"]`. Do not require the button's full text to equal `沈文` alone. The open panel `h2` contains `沈文`.
- Do not click `button.vp` (the catchphrase player) as the proof. The switcher is `button.st-b`.
- Board and binder (`#board`, `#binder`, and `public/projects/tsumugu-story/board/`) are a different control. Leave them unless the task is those tools.
