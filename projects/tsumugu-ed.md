---
title: "Tsumugu Encoding Dictionary"
type: project
status: current
stack:
  - Python
  - Static site generation
order: 3
blurb: "A Chinese dictionary that explains characters through their form and through stories."
image: projects/tsumugu-ed.png
cardHref: "/projects/tsumugu-ed-status.html"
created: 2026-06-15
updated: 2026-09-13
method: plain-register-2026-09-13
prose-model: opus
tags:
  - projects
  - tsumugu
  - dictionary
---

## What it is

![Tsumugu 記憶辭典 front page: hero "A Chinese dictionary built on form and story", coverage stats (2662 characters and 7001 words), search, and the example entry for 很 with 字源 FORM and 故事 STORY sections.](tsumugu-ed.png)

The Tsumugu Encoding Dictionary is the public encoding dictionary for Tsumugu. It has 9,663 character and word entries and 515 grammar patterns, written for students of Traditional Chinese. Each entry starts with the form and the functional structure. After that come stories, mnemonics, cross-referenced grammar, and explanations and examples written in Chinese. The script `tsumugu-ed/scripts/render_site.py` generates the site from the private tsumugu-ed content store, which holds one JSON file per entry.

## Status

The site was deployed to its custom domain on 2026-06-15. Validation passes: IDs are unique across entries and patterns, and the schema check is clean. After reconciliation, the grammar catalog was reduced to 303 functional points. The previous copy pass fixed walls of text and duplicate English labels. The public copy on the Home and About pages is final. Within the Tsumugu production line, the dictionary is the public asset whose value grows over time. The reader, the wiki, and the engine are kept separate from the dictionary.

## Links

- **Project status dashboard:** [view the live build-out tracker](/projects/tsumugu-ed-status.html). It shows what is done, in progress, and not started for every content workstream, as of 2026-06-21.
- **Live site:** https://tsumugu-ed.com
- **Main Tsumugu project (reader, wiki, engine):** [[projects/tsumugu]]
- **Dictionary custody decision:** [[journal/2026-06-11-tsumugu-dictionary-custody-and-display]]
- **Grammar browse and site copy pass:** [[journal/2026-06-15-tsumugu-grammar-browse-and-site-copy]]

### Story-card redesign (Modified Method of Loci)

- **The Story-Card Catalog:** [[journal/the-story-card-catalog]]. It lists every way to generate a memory scene for a single character, as 34 archetypes. A future authoring agent will choose from these archetypes and add new ones.
- **First principles:** [[journal/first-principles-of-the-story-card]]. It states the residue rule and the two axes the catalog is built from.
- **The pivot (memory scenes):** [[journal/story-cards-as-memory-scenes]]. It explains why the Story card was changed into a loci scene that encodes only the residue of the Form.
- **Decision record:** [[journal/2026-06-29-tsumugu-story-card-loci-pivot]] and [[journal/2026-06-29-story-card-first-principles]].
