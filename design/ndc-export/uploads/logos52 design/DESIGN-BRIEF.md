# Logos52 home page: design brief

## Task

Add pictures and icons to the home page. The home page is text only today.

## Files in this folder

| File | Status |
|---|---|
| `about.html` | Finished and approved. Do not change it. |
| `index.html` | The home page, in progress. This is the page to design. |
| `PRD.md` | The rules for the site. |
| `reference/ndc-whiteboard-cards.png` | The seven card pictures from the NDC Whiteboard page as stills, for reference only. |
| `reference/ndc-card-*.gif` | The two animated GIF cards from that page, for reference only. |
| `index-mock.html` | An earlier draft with thumbnails, a folder map, a journal strip and highlights. The owner has not judged these items. Optional reading. |

Both HTML pages are single files with fonts embedded, so they open from disk.

## Direction

- The template for pictures and layout is the NDC Whiteboard page: https://www.ndc.co.jp/whiteboard/
- The engraving on About and its blue wash are not repeated on Home.
- Other About patterns (dot-grid diagrams, cropped screenshot with numbered dots, highlighter, graph mark) are judged one at a time. None is copied to Home by default.

## What the NDC Whiteboard page does

- It opens with a small page title and one large bold sentence.
- Below that is a grid of cards: three columns on desktop, two on tablet, one on phone.
- A card is one picture with a short bold title under it, about 14px. There is no caption, border, shadow or description.
- Pictures keep their own shape. Square, 4:3 and 16:9 sit in the same grid, so the rows are uneven.
- Each picture is a different kind of image: a photograph, a line drawing, a 3D render, a pictogram, two characters of type on white, a photo of a sign. Each one is made from the subject of its own article.
- Three of the seven cards are animated. The first card (the glowing screen) plays a muted, looping video over its still picture. The type-only card and the walking pictogram card are looping GIFs. The other four are still pictures.
- The background is near white (`#fcfcfc`), the text is `#1a1a1a`, and a picture dims a little on hover.

## What stays the same on Home

- The text. Keep the wording already on `index.html`.
- The sections: Work (five projects), Journal, Explainers, Top of mind.
- Type: IBM Plex Sans 400 and 700 for text, Monaspace Neon for diagram labels.
- Colors: background `#f9f9f9`, ink `#1a1a1a`, accent `#00c3ff`, link `#0090cc`.
- Page width 992px, with the sticky top bar from both pages.

## Rules from the PRD

- Every picture comes from the content it represents.
- Most of the page is visible on the first screen.
- The PRD currently states that Home has no pictures. That line changes once a design is accepted.

## Limits on pictures

- No real financial figures. A screenshot of WNAC or cos uses demo data only.
- Pictures are the owner's own, drawn for the site, or public domain.

## Open item

The Explainers count on the page reads 239 and is out of date. The repo shows 331 published pages under `wiki/` and 488 in total. The owner recalls a cut to roughly 116 on 22 November 2026. Treat the number as a placeholder until the owner confirms it.
