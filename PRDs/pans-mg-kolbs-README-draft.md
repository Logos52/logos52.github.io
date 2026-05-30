# Pan's MG & Kolbs Template

*An Obsidian rebuild of Pan's Notion **MG & Kolb's** learning-system template.*

> **Original template (Notion):** https://panstemplates.notion.site/Dashboard-16ea69e8f5c48000920dc2ec2f401c4a
>
> This repo takes Pan's Notion template and repurposes it natively in **Obsidian** — same structure and workflow, rebuilt on Obsidian **Bases**, local markdown, and version control. All credit for the original system and its method goes to Pan ([@pan.ps](https://panstemplates.notion.site/)). This is a fan reimplementation for people who'd rather run it in Obsidian than Notion.

---

## What it is

A Kolb's-cycle / marginal-gains **learning system**. You run short reflective cycles ("Kolbs"), track the **skills** you're developing, manage **tasks** with deliberate break timing, and tie everything back to your **goals**. The original lives in Notion; this is the Obsidian port.

Five linked databases:

- **Tasks** — what to do, with `Do Date`, priority, time taken, and a computed break length.
- **Kolbs** — reflective cycles, chained previous → next, linked to the skills they develop.
- **Skills** — what you're building, current vs. final level, competency, linked to its Kolbs cycles.
- **Goals** — anchoring objectives with start/end dates.
- **Goal tracking** — periodic evaluation against goals.

## Built on Obsidian Bases

Each Notion database is an Obsidian **Base** (`.base`) with one note per row, backed by frontmatter properties. Notion's views (board grouped by date, calendar, tables) are reproduced as Base views. Relations between databases are wikilinks + Base link properties — and because it's Obsidian, you also get **Graph view** and **backlinks** to navigate how skills, cycles, and goals connect, which Notion can't do.

## Two tiers: works with or without AI

The template is built to run for **anyone, with zero AI tools** — and to optionally light up AI features if you want them.

- **Tier 1 — deterministic (default).** Obsidian plugins + plain scripts. The Kolbs-cycle button scaffolds and links the next cycle; task completion computes break timing; recurring evaluation notes are generated on a schedule. No AI, no API keys, no external services.
- **Tier 2 — AI-augmented (optional, off by default).** The same triggers, upgraded: a new Kolbs cycle can be pre-filled with suggested marginal gains drawn from your previous reflection; recurring evaluations can be drafted from recent notes. Toggle it off and Tier 1 still works fully.

## Requirements

- **Obsidian** with **Bases** (latest version).
- Recommended plugins: **Templater**, **QuickAdd**, **Dataview** (and optionally **Meta Bind**, **Full Calendar**).
- For Tier 1 scheduled automations: **Python** (or Node) for the small scripts in `/scripts`, run manually or via `cron` / macOS `launchd`.
- For Tier 2: an LLM API client (only if you choose to enable it).

See the PRD for the full dependency rationale.

## Install

**As a standalone vault**

1. Clone this repo.
2. Open the folder as an Obsidian vault.
3. Enable Bases + the recommended plugins.
4. (Optional) Set up the `/scripts` automations per `/scripts/README`.

**As a submodule inside an existing vault**

This template is designed to live both on its own and inside a larger vault:

```bash
# from the root of your vault repo
git submodule add <repo-url> Templates/mg-kolbs
git commit -m "Add Pan's MG & Kolbs Template as submodule"
```

The files render normally in Obsidian; your vault just pins a commit of this repo.

## Automations at a glance

| Action | Tier 1 (no AI) | Tier 2 (optional AI) |
|---|---|---|
| Complete a Kolbs cycle | Scaffolds + links the next cycle, marks current done | Pre-fills next cycle with suggested marginal gains |
| Complete a task | Computes break timing from time taken | (deterministic — AI optional) |
| Weekly eval / goal tracking | Script generates the note from a template | Script drafts the note from recent activity |
| Calendar | Calendar view over task dates | — |

## Credits

Original **MG & Kolb's** template and learning method by **Pan** — see the [Notion source](https://panstemplates.notion.site/Dashboard-16ea69e8f5c48000920dc2ec2f401c4a). This repository is an independent Obsidian reimplementation of that template's structure and workflow.

## Status

Active rebuild. Structure and databases are being ported from the live Notion template; see `PRD-notion-to-obsidian-conversion.md` for scope, the full source inventory, and the build plan.
