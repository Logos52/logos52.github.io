---
title: "Publish snapshots"
type: skill-prompt
status: active
created: 2026-05-27
updated: 2026-05-27
tags:
  - tools
  - publishing
  - quartz
---

# Publish snapshots

Generate the public showcase tables under `public-snapshots/` for the Quartz site (`logos52.github.io`). **AI-agnostic** — any agent (Claude, Grok, ChatGPT, Hermes, others) can read this prompt and produce the output. Manually triggered before `npx quartz build`.

## Intent — important

These are **showcase tables that demonstrate the dashboard's schema and visual pattern, with representative dummy data**. They are **not** snapshots of Wedge's actual decisions, skills, or goals. Personal values stay private (`decisions/`, `mg-kolbs/**` are all in Quartz `ignorePatterns`). The audience of `logos52.github.io` should see what the system *looks like* and be able to fork the patterns — not see Wedge's personal data.

If actual values are ever wanted public, they're opted in per-snapshot, by hand. Default is dummy.

## What to produce

Three files in `public-snapshots/`, each a markdown table with a frontmatter header. **Use fictional, plausible-but-clearly-generic examples** (no real personal data). 4–6 rows each is plenty — enough to demonstrate the schema.

### 1. `public-snapshots/decisions.md`

Columns: Date · Decision · Ruled out.
Example rows: tooling choices, methodology choices, naming convention adoptions. Anything that demonstrates the "decision + reasoning + ruled-out" pattern with plausible but fictional content.

### 2. `public-snapshots/skills.md`

Columns: Skill · Competency · Current · Target.
Competency uses `CI`, `CC (low)`, `CC (high)`, `UC`. Current/Target are integers 1–10.
Example skills: generic productivity / craft skills (Focused Reading, Technical Writing, Code Review, etc.). Not Wedge's actual mg-kolbs skill names.

### 3. `public-snapshots/direction.md`

Columns: Goal · Status.
Status values: `planning`, `in-progress`, `active`, `paused`.
Example goals: generic life domains (Master a Knowledge System, Develop Communication Skills, etc.). Not Wedge's actual goals.

## Output format

Each file has frontmatter (`title`, `type: snapshot`, `status: published`, `created`, `updated`, `tags`), an H1 title, a one-line description that explicitly notes "representative dummy data, demonstrating the schema," the markdown table, and a footer pointing back to this skill file.

No wikilinks to real source notes (they're not public). If the table needs a "Title" column, plain text is fine.

## Boundaries

- **Do not read or extract** Wedge's actual decisions, skills, or goals. Even if the source files are accessible, ignore them for this task.
- **Do not include** Finances, Tasks, Active Questions, Open Questions, PRDs, journal entries, raw sources, anything in `00 Command Center/`, `private/`, `mg-kolbs/`, `decisions/`, or `outputs/`.
- **Do not delete** existing files in `public-snapshots/` other than the three above (overwriting them is expected).

## How Wedge triggers it

> "Regenerate the public showcase snapshots per `tools/publish-snapshots.md`."

The AI produces the three files with fresh dummy examples (or the same ones if they already look right) and reports "snapshots regenerated."

## After running

Wedge reviews the three files, confirms no personal data leaked in, then runs `npx quartz build` to publish.
