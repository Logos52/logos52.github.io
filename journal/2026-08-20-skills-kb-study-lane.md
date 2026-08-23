---
title: "Skills, writing, and the wiki — study lane and rulings"
type: journal
status: current
created: 2026-08-20
updated: 2026-08-20
tags:
  - grok
  - skills
  - writing
  - karpathy
  - checklist
---

# Skills, writing, and the wiki — study lane and rulings

This is the work list for the lane that opened today. You already have a working wiki. You do not need a new religion. You need to decide, piece by piece, what Grok should load, what stays in the vault as law, and what we never install. Intro-paragraph writing sits under skills, because the failure was “the agent did not have a small, loadable job for the first paragraph of a report.”

Walk it in order. Each stage is study, then a ruling, then a build only if you said yes. Do not build during study.

Two Grok windows cannot talk. They share this file and `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-21-two-window-board.md`. Orchestrator updates Current + Rulings. Pieces window writes Findings only. You carry messages between windows.

Source pack for the day (read these, not the internet again):

- This file
- `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-skills-writing-x-research.md`
- `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-writing-normally.md`
- `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-report-intro-paragraph.md`
- `/Users/n1/Projects/llm-knowledge-base/wiki/Research/Report Intro Paragraph Bank.md`
- `/Users/n1/.grok/docs/user-guide/08-skills.md`
- `/Users/n1/Projects/llm-knowledge-base/wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems.md`
- Karpathy gist (unchanged idea file): https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
- `/Users/n1/Projects/llm-knowledge-base/wiki/Writing Craft/Opening Doors.md` (the inventory fault)

---

## Stage 0 — What you already have

**Study.** Confirm you are not missing a new Karpathy foundation. You are not. May 2, 2026 aligned this vault to his three layers: immutable `raw/`, compiled `wiki/`, schema in `AGENTS.md`, plus `notes/index.md` and `log.md`. The gist is still that idea file. He did not ship a v2.

**What grew around it, not in it**

| Piece | Status here | Ruling tomorrow |
|---|---|---|
| Three layers + ingest / query / lint | You have this | No rebuild |
| “LLM writes the wiki, human never writes” | You rejected this | Keep rejecting |
| `index.md` enough at ~100 sources / a few hundred pages | Wiki is past that | Stage 4 |
| File good answers back | `outputs/`, journal | Stage 4: what may be filed |
| Lint / health | You have wiki health work | Stage 4: contradiction stays a report to you, not a fact the model writes |
| Search for agents | Humans have Pagefind; agents grep | Stage 4: `qmd` or similar, later |
| Next session must read yesterday’s ruling | Journal exists; next run still has to be pointed at it | Stage 5 |

**Rule**

- [x] Karpathy foundations: **unchanged / we already have them / do not re-implement from a 2026 tutorial**
- [x] We keep human custody of wiki prose (**yes**)

---

## Stage 1 — Grok, as it actually works on this Mac

**Study.** Skills are not the only lever. Run `grok inspect` once and look at what it already sees.

| Lever | When it fires | Use for |
|---|---|---|
| Rules / `AGENTS.md` / Writing Standards | Always | Law that must hold on every turn |
| Skill (`SKILL.md`) | Slash `/name`, or auto if `description` matches | One repeatable job, too long to retype, too specific for always-on |
| Plan mode | You ask to plan | Shape before edits |
| Subagents | Parallel research or isolated work | Lanes, not prose voice |
| Workflows | Named multi-agent runs | Bounded fan-out you already use |
| Memory | Across sessions | Facts, not craft |
| Hooks / plugins / MCP | Events and integrations | Later, not this lane |

Locations, in priority: `./.grok/skills/` → repo `.grok/skills/` → `~/.grok/skills/` → Claude/Cursor skill folders. Docs: `/Users/n1/.grok/docs/user-guide/08-skills.md`. Make a new one with `/create-skill`.

**Rule**

- [ ] Always-on law stays in Writing Standards / `AGENTS.md`, not in a skill
- [ ] A skill is allowed only when it is one job with a loud trigger
- [ ] Cap the active set (suggested: start at 3–5 of ours, hard ceiling 12)
- [ ] Stranger skill packs (Hassid 26, marketplace “Find Skills”) : **out / later / inspect one by one**

**Do, after the rulings**

- [ ] `grok inspect` and keep a one-page list of what is live
- [ ] Disable or ignore noise if Claude/Cursor skills are flooding the list (`[compat.claude]` / `[skills] disabled` in `~/.grok/config.toml`)

---

## Stage 2 — Skills to write, keep, or refuse

This is the main ruling block. Intro paragraphs live here.

### 2a. How a skill is supposed to work (X + Grok)

One skill, one job. The `description` is the switch. Keep `SKILL.md` lean. Put examples and long notes in `references/`. Read a stranger’s scripts before install. Add a skill only when the current set cannot do the job.

**Rule**

- [ ] We follow “one job, loud description, lean body, examples on the side”
- [ ] We do not paste Writing Standards into a skill

### 2b. Candidate: `/how-i-write` (user skill, `~/.grok/skills/`)

What people actually run (Hassid, Peter Yang): voice, banned constructions, a few of your own sentences as samples, “use this unless I say otherwise.”

**Study.** `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-writing-normally.md`

**Rule**

- [ ] Build `/how-i-write` : **yes / no / later**
- [ ] Scope: user (every project) vs repo-only
- [ ] Auto-invoke vs slash-only (`disable-model-invocation`)
- [ ] What goes in: speakable sentences, no invented “you” scenes, no drumrolls, no object-as-person verbs. What stays out: the full standards file.

**Do, if yes**

- [ ] `/create-skill` → `how-i-write`
- [ ] Point the skill at the journal note; do not duplicate the law
- [ ] One session test: ask for a short report and see if it loads without being named

### 2c. Candidate: report intro (child of 2b, or its own skill)

This is the intro-paragraph item.

The job: first paragraph of a report, brief, or decision note answers the question. Sentence two continues sentence one. Dates, mechanisms, quotes wait for the body. Not a wiki opener. Not a personal-page intro. Not another test battery.

**Study**

- `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-report-intro-paragraph.md`
- `/Users/n1/Projects/llm-knowledge-base/wiki/Research/Report Intro Paragraph Bank.md`
- Opening Doors, “The inventory”
- The current first paragraph of `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-fable-opus-degradation.md` (the one that answers, then stops)

**Rule**

- [ ] Intro craft is a **skill job** (loads when writing a report) vs **always-on law** vs **both** (skill points at the journal; standards stay silent on report intros)
- [ ] Separate `/report-intro` vs a section inside `/how-i-write`
- [ ] Suggested default to rule on: **section inside `/how-i-write`**, triggered by “report,” “brief,” “decision note,” “write me an intro.” A second skill only if that trigger is too quiet.
- [ ] We will not rebuild the nineteen-test Intro QA grind for reports

**Do, if skill-yes**

- [ ] Write the trigger phrases so a request like today’s “write me a thorough report” actually loads it
- [ ] Include one accepted specimen (the Fable-report first paragraph, once you are happy with it) and the struck class (inventory, drumroll, “you ask for Fable”)
- [ ] Practice: three report intros, you strike or keep, before we treat it as done

### 2d. Other skills people name — rule each

| Skill / pattern | What it is | Suggested ruling |
|---|---|---|
| `/grill-me` | Questions before work | You already have PRD-first. **Skip unless** you want it as a slash for Grok. |
| `/write-a-prd` | Idea → PRD | **Later.** You have a PRD habit. |
| Superpowers / TDD | Spec then tests then code | **Code lane, not this lane.** |
| `frontend-design` | Stops default AI UI | **Only if** you are doing UI in Grok. |
| `skill-creator` | Built in as `/create-skill` | **Already have.** |
| `/how-to`, `/about-me` | Interview you, then plan | **Skip.** Overlap with profile + PRD. |
| Hook / newsletter / CTA packs | Creator content | **Out.** Wrong job. |
| `obsidian-skills` | Agent reads/writes the vault | **Out for now.** Claude Code already lives in the vault. |
| `llm-wiki-skill` / `llm-wiki-cli` | Starter Karpathy | **Out.** Downgrade. |

**Rule (write yes / no / later next to each)**

- [ ] grill-me
- [ ] write-a-prd
- [ ] Superpowers / TDD (park in a coding checklist, not here)
- [ ] frontend-design
- [ ] creator hook packs
- [ ] obsidian-skills / llm-wiki-skill

---

## Stage 3 — How we use the model on writing

Not a skill. A work rule. Skills will fail if this is wrong.

**Study.** The X writers who keep a voice: research and outline with the model, mark weak sentences, never the first draft of the piece, never the angle. Opening line: you write it, or you reject theirs out loud.

**Rule**

- [ ] On reports and wiki pages, the model may draft; you keep the first paragraph if it fails the speakable test
- [ ] Or: you write sentence one, the model continues
- [ ] AI is allowed to: research, outline, find weak lines, propose three openings
- [ ] AI is not allowed to: ship a report whose first paragraph you have not read aloud

**Do**

- [ ] Put the allowed / not-allowed list in `/how-i-write` if that skill exists, else in `writing-normally.md` only

---

## Stage 4 — Karpathy deltas (only these)

Foundations did not change. Rule the optional extras.

| Delta | What it is | Suggested ruling |
|---|---|---|
| Agent search at wiki scale | `qmd` or similar; gist called this optional once the index is not enough | **Later.** Open when grep starts missing. |
| Contradiction as a human report | Model must not write “A contradicts B” as a wiki fact | **Yes.** Matches your eye-as-gate. |
| Do not file unpromoted answers as sources | One implementer built that loop and deleted it | **Yes.** Journal and `outputs/` are not `raw/`. |
| Decisions as living objects (assumptions + new evidence) | Vigil-style | **Interesting, not this month.** You already journal decisions. |
| Watch sources for changes | Periodic re-ingest | **Later.** |
| Obsidian clipper + local images | In the gist tips | You likely have this. Confirm, do not rebuild. |

**Rule**

- [ ] qmd / agent search: now / later / never
- [ ] Contradiction stays a report to Wedge: yes / no
- [ ] Unpromoted chat answers may not enter `raw/`: yes / no
- [ ] Living-decision layer: park

**Do, if yes on the first three**

- [ ] One sentence in `AGENTS.md` or the wiki schema: contradictions are proposed, not written as fact
- [ ] One sentence: `outputs/` and journal are not sources
- [ ] Do not install qmd until a session actually fails to find a page

---

## Stage 5 — The next session has to read the ruling

This is the piece the second-brain posts have and we still drop.

**Study.** A correction that lives only in yesterday’s chat is gone. Karpathy-shaped vaults keep a rulings file the next run reads first.

You already write journal. The hole is: Grok/Claude starting a report tomorrow without being pointed at `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-writing-normally.md` and the report-intro note.

**Rule**

- [ ] Always-on pointer in repo `AGENTS.md` or Grok rules: before authored prose, read writing-normally + report-intro
- [ ] Or: only the `/how-i-write` skill (weaker — it has to load)
- [ ] Or: both (pointer + skill)

**Do, after the ruling**

- [ ] Write the pointer. One paragraph, no new law pile.
- [ ] Tomorrow’s first report in a fresh session is the test. If the intro is an inventory again, the pointer failed.

---

## Stage 6 — Park / never

Do not spend tomorrow on these.

- [ ] 26-skill newsletter packs
- [ ] Marketplace install-count skills
- [ ] Re-cloning Karpathy from a blog
- [ ] Nineteen-test intro battery
- [ ] Letting the model own wiki prose
- [ ] Hook-formula skills for this vault’s reports

---

## Suggested order tomorrow

1. Stage 0 (15 min). Confirm Karpathy, tick the two rulings.
2. Stage 1 (20 min). `grok inspect`. Cap and refuse packs.
3. Stage 2b + 2c (the real work). Rule `/how-i-write` and where intro paragraphs live. If yes, build the skill the same sitting. Practice three intros.
4. Stage 3 (10 min). Allowed / not-allowed for AI on prose.
5. Stage 5 (15 min). Pointer so the next session cannot “forget.”
6. Stage 4 and 2d only if there is time. qmd waits.

Done for the day when: you have a written ruling on the writing skill, a written ruling on the intro job, and a pointer the next agent has to see.

## Companion files

- X evidence: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-skills-writing-x-research.md`
- Speakable prose: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-writing-normally.md`
- Report intro write-act: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-report-intro-paragraph.md`
- Report intro bank: `/Users/n1/Projects/llm-knowledge-base/wiki/Research/Report Intro Paragraph Bank.md`
- Worked example: `/Users/n1/Projects/llm-knowledge-base/journal/2026-08-20-fable-opus-degradation.md`
- Wiki schema page: `/Users/n1/Projects/llm-knowledge-base/wiki/Systems/AI & Agentic Systems/LLM Knowledge Systems.md`
