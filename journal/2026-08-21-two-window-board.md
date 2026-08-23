---
title: "Two-window board — skills / writing / wiki lane"
type: journal
status: current
created: 2026-08-20
updated: 2026-08-20
tags:
  - grok
  - checklist
  - handoff
---

# Two-window board

Shared disk for two Grok windows that cannot see each other. Orchestrator writes **Current** and **Rulings**. Pieces window writes **Findings**. Wedge is the only message bus.

Checklist: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-skills-kb-study-lane.md`

## Pieces window standing order

Study the remaining sequence without asking. After each finding, start the next study in the same turn. Do not say “waiting for the next piece.” Do not ask Wedge what to do next. Last user-facing line only when Stage 5 findings are written: “Study done through Stage 5. Rulings live in Window A.”

Sequence: 2b → 2c → 3 → 5. Skip 2d and 4. Skip Stage 0 and 1 (findings already on this board). Never build, install, disable, or edit Current / Rulings / AGENTS.md / config.

## Current

- Stage: 1 findings are on the board. 2b / 2c / 3 / 5 findings still empty.
- Piece: parked. Window B left the standing order and started deciding with Wedge (skill name, Generator reuse, writing-on-Grok). That talk is still under Stage 1, not Rulings.
- Pieces window last did: found The Generator + eight owner-picked wiki doors; last turn was “reuse Fable’s write-act, don’t invent a new one.”
- Next for Wedge: rule in Window A. Do not keep deciding in Window B. Stage 1 four boxes + what he already said there (below). Then 2b/2c are mostly decided and only need ticks.

## Rulings

| When | Stage | Item | Ruling |
|---|---|---|---|
| 2026-08-20 | 0 | Karpathy foundations | Unchanged. Already have them. Do not re-implement from a 2026 tutorial. Stage 0 is confirm-only; nothing to build. |
| 2026-08-20 | 0 | Human custody of wiki prose | Yes. Keep rejecting “LLM writes the wiki, human never writes.” |

## Findings

### Stage 0

Karpathy did not ship a v2. The live gist is still the April 4 idea file — “this is an idea file,” three layers, ingest / query / lint, `index.md` + `log.md`, qmd called optional. This vault already took that shape on May 2 (`log.md`: “Align schema with Karpathy LLM-wiki pattern”). `raw/` is immutable, `wiki/` is compiled (354 pages), schema is `AGENTS.md`, plus `notes/index.md` and `log.md`. A 2026 tutorial or an `llm-wiki-skill` / `llm-wiki-cli` clone would be a downgrade of what is already here. The one gist line this vault already turned down is still in the gist and still in `AGENTS.md`: the LLM writes the wiki and the human never does. Practice is the opposite. The schema file has not been rewritten to match.

**Facts**

- Gist (fetched 2026-08-20): still “idea file,” still “intentionally abstract,” still “You never (or rarely) write the wiki yourself.” Copy in the vault: `/Users/n1/Projects/llm-knowledge-base/raw/sources/llm-wiki.md`.
- May 2, 2026: `/Users/n1/Projects/llm-knowledge-base/log.md` records the alignment. Schema page from the same day: `/Users/n1/Projects/llm-knowledge-base/wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems.md`.
- On disk now: `raw/inbox/`, `raw/sources/`, `raw/processed/`, `raw/private/`; `wiki/`; `AGENTS.md`; `notes/index.md`; `log.md`.
- Comment thread on the gist is other people’s tutorials and CLIs. That is not a Karpathy v2.
- Checklist already marks “LLM writes the wiki, human never writes” as rejected here. `AGENTS.md` still says “The LLM owns this layer” / “The human mostly reads the wiki.”

**Options (not a ruling)**

1. Tick foundations as unchanged / already have them / do not re-implement from a 2026 tutorial.
2. Human custody of wiki prose: **yes** (matches the prior rejection; schema language lags) or **no** (matches leftover `AGENTS.md` wording).

**Still to rule**

- Those two ticks. Stage 0 does not rewrite `AGENTS.md`.

### Stage 1

Claude skills are flooding the list. `grok inspect` (once, CWD `/Users/n1/Projects`, profile n1) shows **45 skills live**. None of them live in `~/.grok/skills/` — that folder is empty. Twenty-two are bundled Grok skills, twenty-two are `user [claude]` from `~/.claude/skills/`, and one is the `frontend-design` plugin. Cursor compat is on, but `~/.cursor/skills/` does not exist, so Cursor is not adding names. Suggested cap was 3–5 of ours, ceiling 12. Live set is 45, and “ours” is zero.

**What is live**

| Lever | Live on this inspect |
|---|---|
| Rules / always-on | 5 files: `/Users/n1/.grok/Agents.md`, `/Users/n1/.grok/rules/00-shared-core.md`, `/Users/n1/.claude/Claude.md` `[claude]`, `/Users/n1/Projects/Agents.md`, `/Users/n1/Projects/Claude.md`. Vault `AGENTS.md` and Writing Standards are **not** in this list (CWD is Projects, not the wiki repo). |
| Skills | 45. 22 bundled (`/Users/n1/.grok/bundled/skills/`). 22 Claude user. 1 plugin. 0 Grok user. 0 project. |
| Plan | Builtin agent `plan`. `/plan` exists in the docs. Inspect has no separate “plan mode” row. |
| Subagents | 3 builtin: `general-purpose`, `explore`, `plan`. |
| Workflows | No `~/.grok/workflows/`. No project `.grok/workflows/`. Inspect did not list any named runs. Bundled skill `create-workflow` is present. |
| Memory | `config.toml` has no `[memory] enabled`. Inspect did not mention memory. Files exist at `/Users/n1/.grok/memory/` (empty Preferences in `MEMORY.md` plus a sqlite index). Docs say memory is off unless you turn it on. |
| Hooks | 6. One Grok user: SessionStart → `grok-profile-banner.sh`. Five `[claude]` from `/Users/n1/.claude/settings.json` (authoring-direction, retired-frames, dead-names, plus a Bash matcher). |
| Plugins | 2 user, enabled: `frontend-design` (1 skill, listed) and `productivity` (claims 4 skills + 1 MCP; those 4 names and that MCP did **not** show in Skills 45 or MCP 0). Grok `installed-plugins/registry.json` is empty; these came in through Claude compat. |
| MCP | 0. |
| Marketplaces | Inspect: 0. Config still has the xAI Official git source and `official_marketplace_auto_installed = true`. |
| Config | `/Users/n1/.grok/config.toml`. No `[skills]` table (no `disabled` / `ignore`). Claude and Cursor `skills` both **on (default)**. `[plugins] enabled = []`, `disabled = ["firecrawl"]`. One warning: `[privacy]` unrecognized key. |

**Where skills load from (docs order vs this Mac)**

Priority in `/Users/n1/.grok/docs/user-guide/08-skills.md`: `./.grok/skills/` → repo `.grok/skills/` → `~/.grok/skills/` → Claude/Cursor folders.

On disk: cwd and repo Grok skill dirs are missing or empty (`/Users/n1/Projects/llm-knowledge-base/.grok/skills/` exists, 0 files). All 45 come from bundled + `~/.claude/skills/` + the frontend-design plugin. `~/.claude/skills/` has **37** directories; inspect lists 22. The 15 not listed are the Firecrawl pack (Grok has `firecrawl` in `plugins.disabled`; they stay on disk, they did not make the live list).

Claude names that did make the list: Cloudflare/Workers pack (`agents-sdk`, `cloudflare`, `cloudflare-email-service`, `cloudflare-one`, `cloudflare-one-migrations`, `durable-objects`, `sandbox-sdk`, `turnstile-spin`, `web-perf`, `workers-best-practices`, `wrangler`) and the COS pack (`cos-calendar-tasks-refresh` through `cos-vault-scan`, including retired `cos-dashboard-refresh` and `cos-vault-scan`).

**Options (not a ruling)**

1. Always-on law stays in Writing Standards / `AGENTS.md`, not in a skill — inspect already loads five always-on files; a writing skill would be a sixth channel.
2. A skill is allowed only when it is one job with a loud trigger.
3. Cap: keep 45 / cut Claude compat / disable names one by one / start a 3–5 user set in `~/.grok/skills/` after Claude is quieter.
4. Stranger packs (Hassid 26, marketplace Find Skills): **out / later / inspect one by one**. Nothing from those packs is in the 45. Official marketplace auto-install is on in config even though inspect shows 0 marketplaces.

**Wedge, this window (2026-08-20) — stated direction, not a Rulings tick**

- Clean list: yes. Cap is 3–5 we author. Do not dump-install Claude’s folder. Do **not** drop Claude’s 22 until we know they are not the writing files (they are not — see scan).
- Writing work: try it on Grok because Fable is out of tokens and Opus looped three days. 15 Aug ranking still said Fable writes wiki prose; this is a seat change under that constraint, not a silent reversal.
- B: yes to one writing skill. Do not like the name `how-i-write`.
- D: not blanket-out. Experiment pack by pack.
- A: still undecided; this window’s recommendation is below.
- This window has not cut `config.toml` and has not built a skill.

**Scan: the good intros are not in Claude’s 22 skills**

Claude’s live 22 are COS (`/brief`, `/today`, `/capture`, …) and Cloudflare/Workers. None of them wrote wiki openings. Firecrawl’s 15 sit on disk and stay banned.

The usable openings live in the vault, from wiki regen:

- Write-act (locked after “ugh finally. they’re all good.”): `/Users/n1/Projects/llm-knowledge-base/02 - System/The Generator.md`
- Two doors: `/Users/n1/Projects/llm-knowledge-base/wiki/Writing Craft/Opening Doors.md`
- Owner-picked Fable eight, spliced live: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/regen-2026-08/REPLACEMENTS-FROM-GENERATOR.md` (Attention, Decisional Delays, How Chinese Characters Work, Expectancy B, Environment Design, Wanting Less, Exit Strategy, Empty Components)
- When Fable ran out, Opus wrote more doors he picked: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/regen-2026-08/REPLACEMENTS-OPUS-13.md` (13 pages, workbench, not all live)
- What failed: Grok opener slates (52 pillow-test fails); Writing Standards used as a generator; nineteen-test intro grind (killed 2026-08-19)
- Report intros are a **different object**. Bank says no accepted report specimen yet except the first paragraph of `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-fable-opus-degradation.md`. Wiki doors do not automatically write report leads. That is why a good wiki opener sat on disk while the report still inventoried.

**Recommended ticks (not written to Rulings)**

- **A. Yes, with a split.** Always-on holds the floor (`writing-normally`: say it out loud; no invented “you”; no drumroll). The write-act stays in The Generator + one specimen, loaded as a job. Do not paste Writing Standards into a skill. Do not leave The Generator as always-on-only — that is how it got ignored.
- **B. Yes, one job.** One skill for authored prose (report, brief, decision note, wiki page). Directory/slash not `how-i-write`. Suggested: `write` (`/write`). Description names the triggers. Intro is a section, not a second skill, until that trigger is too quiet.
- **C. 3–5 we author.** First slot is that writing skill, when Stage 2 says yes. Remaining slots stay empty until a job appears. Claude’s 22 stay in Claude. Copy a COS skill into `~/.grok/skills/` only if he actually wants `/brief` here.
- **D. Inspect one by one.** Do not install Hassid’s 26 or Find Skills as a dump. From that library, the only idea worth taking is “a small voice skill with samples.” We already have the samples. `/grill-me` overlaps PRD-first. `/humanizer` is the prohibition loop. LinkedIn/hook/CTA packs are Stage 6 out. `/create-skill` already exists.

**Plan — what “writing moves to Grok” means (draft, not a ruling)**

1. **This week, this window:** reports, decision notes, study-lane prose. Point at the journal notes by hand until a skill exists.
2. **Reuse, do not restart:** The Generator, Opening Doors, the accepted eight, writing-normally, report-intro note. Grok reads those; it does not invent a new intro religion.
3. **Wiki pages:** still Fable’s ranked job (15 Aug) until a Grok slate beats Fable on three pages. If Fable stays out of tokens, Grok may draft wiki doors from the same files, owner eyes every door. That is a scored experiment, not a quiet invert.
4. **Claude:** Cowork/COS can keep the 22. Grok does not inherit them. Writing artifacts stay in the vault, not in `~/.claude/skills/`.

**Still to rule**

- A yes/no (split above). B name: `write` vs something he prefers. D: inspect-one-by-one vs a named pack to open first. Orchestrator writes ticks. No config edit from this window.

**Generator (this window, 2026-08-20)**

Locked act, not opened or edited this pass: `/Users/n1/Projects/llm-knowledge-base/02 - System/The Generator.md`. Grok runner: `/Users/n1/Projects/llm-knowledge-base/01 - Workbench/regen-2026-08/THE-GENERATOR-GROK.md` — reads the locked file, writes A and B, WPW for the page. Does not copy the stance. Catalog entry 6 second pass. No slate. Not a skill. Not `AGENTS.md`.

### Stage 2 (skills, including report intro at 2c)

_(empty)_

### Stage 3

_(empty)_

### Stage 4

_(empty)_

### Stage 5

_(empty)_

### Stage 6

_(empty)_
