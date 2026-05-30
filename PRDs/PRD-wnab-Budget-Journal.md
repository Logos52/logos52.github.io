---
title: "PRD — wnab Budget Journal (a Kolb coaching loop over exports)"
type: PRD
status: draft
created: 2026-05-30
updated: 2026-05-30
tags:
  - PRD
  - wnab
  - coaching
  - kolbs
  - journal
  - finances
links:
  - "[[PRDs/PRD-wnab-AI-Layer]]"
  - "[[PRDs/PRD-wnab-Onboarding-Coaching]]"
  - "[[PRDs/PRD-wnab-Obsidian-Bridge]]"
  - "[[PRDs/wnab-AI-Ideas]]"
  - "[[templates/Kolbs Template]]"
---

# PRD — wnab Budget Journal (a Kolb coaching loop over exports)

> A private, conversational journal where an AI helps reflect on small budget decisions over time —
> structured as a **Kolb cycle scoped to money**, tracked as a skill in `mg-kolbs`. The dynamic,
> longitudinal sibling of the static in-app coaching from [[PRDs/PRD-wnab-Onboarding-Coaching]];
> promotes opportunities #3 (dynamic coaching) and #4 (monthly review) from [[PRDs/wnab-AI-Ideas]].

## 1. Problem

The mechanics of budgeting are easy; the **decisions** are the tax — and changing how you spend is a
**mindset shift that happens little by little, not in one overhaul.** wnab now teaches the rules
in-the-moment (the static nudges + first-run flow), but there is no place to *reflect over time* — to
notice a pattern, try one small experiment, and see whether it stuck. Wedge wants a journal he can
open and **talk to an AI about one small thing**: a micro-decision, a spend that drifted, a habit to
nudge — and have his findings, experiments, and reflections accrue.

Crucially: **don't build this into the app.** No in-app AI, no new wnab feature surface. The whole
thing rides on the snapshot wnab already exports ([[PRDs/PRD-wnab-Obsidian-Bridge]]) + a markdown
journal + a Cowork/Claude Code session opened in a second tab.

## 2. Success criteria

1. Opening a Cowork/Claude Code session in the finance dir gives a grounded, *positive* coaching
   conversation about the current budget (it reads the real snapshot, not guesses).
2. Each session leaves a small, dated **Kolb-shaped entry** — written by the AI from the
   conversation, so logging is never a chore.
3. **Experiments accumulate visibly** in a running ledger (trying → kept → dropped); the mindset
   shift is observable over weeks, not asserted.
4. Budgeting shows up as a **tracked competency in `mg-kolbs`** (leveled CI → CC → UC, like every
   other skill), so progress is real, not vibes.
5. **No financial data ever enters the public repo** (the dollar-bearing entries are gitignored).
6. Zero new wnab app code beyond the existing snapshot export.

## 3. The design

### The loop
Open Cowork/Claude Code in `~/Documents/Finances/wnab/` (or the vault, see §5). It reads (a) the
latest `snapshot.json` (real budget state) and (b) the prior journal entry. You talk through **one**
small thing. It appends a new dated entry and carries the open experiment forward. Any actual budget
change is **manual re-entry in wnab** — approve-before-execute, per [[PRDs/PRD-wnab-AI-Layer]]. The AI
suggests; you decide and act.

### Entry shape — a Kolb cycle, in Wedge's own vocabulary
Maps the five beats onto the existing [[templates/Kolbs Template]] stages so budgeting is just another
Kolb chain:

- **Experience** — *state of play* (one line straight from the snapshot: To-Assign, what moved, age
  of money) + *what's on my mind* this cycle.
- **Reflection** — how the last experiment went, *what made the good choice easy*, and the
  **trigger** behind any slip (boredom, "earned it", nothing prepped) — context to engineer around,
  framed as data, never fault.
- **Abstraction** — the takeaway in the four-rule frame (give every dollar a job · embrace true
  expenses · roll with the punches · age your money) + any cross-life pattern.
- **Experimentation** — *one* small, concrete next experiment + a **marginal metric**: a binary
  daily Y/N target ("Dinner decided before 5pm — M T W T F S S"), never a vague goal.

Plus a running **experiments ledger** (`| experiment | started | status | verdict |`) and **chaining**
(`previous:` link) so each entry builds on the last — "the chain is what makes it a cycle, not
disconnected entries."

### The non-negotiable voice rule
**Positive reinforcement only. No blame, no negative reinforcement — ever.** Lead with what went
well, celebrate recoveries (covering an overspend *is* a win), treat slips as triggers to design
around. Most budget tools shame overspending; wnab nudges the next good decision instead. This is a
hard design rule, not a tone preference — it's the whole reason the loop is sustainable. (Consistent
with the vault writing guidelines: "what's happening underneath", never "mistake/wrong".)

### Budgeting as a tracked skill
A `Budgeting` skill in `mg-kolbs/Skills/` with the usual frontmatter (`competency`, `current-level`,
`final-level`) and concrete **final-level metrics** ("Dining Out within target 3 of 4 weeks", not
"spend less"). The four rules can later split into four sub-skills if granularity helps. The journal
cycles are what level it up.

## 4. Scope

**In:**
- A journal *convention* + entry template (Kolb-shaped, the five beats, marginal metrics, ledger).
- A reusable **session prompt** the Cowork/CC tab runs (reads snapshot + last entry → positive
  coaching conversation → appends the entry). Model-portable (a later Ollama swap is a drop-in).
- The `mg-kolbs` integration: the `Budgeting` skill note + a private budget-kolb folder + a local
  index so it surfaces in the overview.

**Out:**
- Any in-app / in-browser AI or new wnab feature surface (this is the anti-goal).
- Write-back into wnab (read-only bridge; changes are manual re-entry).
- Anything needing new wnab code beyond the existing snapshot export.
- Opportunities #5–#7 from the ideas bank.

## 5. Placement & privacy (the load-bearing decision)

The vault is the **public `logos52.github.io` repo**, with two *different* exclusion mechanisms:
`.gitignore` keeps content **out of the repo entirely** (the real privacy boundary); Quartz
`ignorePatterns` only keeps it **off the rendered site** — git-tracked content still lives in the
public repo. `mg-kolbs/**` is Quartz-excluded but **not** gitignored.

**Method is public, money is private** — Wedge's call: showing the *approach* (the template, the
skill, what he's working on) is welcome; the *finances* are not. So it splits three ways:
- **Budget-kolb template → `mg-kolbs/Budget Kolb Template.md`** — **tracked (public).** The empty
  Kolb structure with placeholders, no data — so the method is shareable. This is the template the
  AI fills per entry.
- **`Budgeting` skill note → `mg-kolbs/Skills/Budgeting.md`** — **tracked (public).** Competency
  level + method only, no dollars. Surfaces in `skills.base` (`file.inFolder("mg-kolbs")` +
  `competency`) and the mg-kolbs overview.
- **Filled entries — the *information* → `mg-kolbs/private/budget-kolbs/`, added to `.gitignore`** —
  **gitignored (private).** Dollar amounts + spending reflections never enter the public repo, *and*
  still under `mg-kolbs/` so Obsidian/Datacore lists them locally (Obsidian ignores git status, so
  gitignored files still render + match `.base` filters).
- **"Public" here = in the public GitHub repo** — same visibility as his other skills/templates,
  which `mg-kolbs/**` keeps off the rendered Quartz *site*. If he later wants the *method* featured on
  the published site too, surface a sanitized methodology page in `wiki/` (open item) — never the
  entries.
- Trade-off: gitignored entries ⇒ **not backed up by the vault repo** — same as `finances/` today;
  keep the independent backup. Reconfirm `git check-ignore` before writing a real entry.

> This honors the wnab security model (Option A: financial data never in the public repo) while still
> putting the journal *inside* the knowledge base where Wedge wants it.

## 6. Constraints / risks

- **Privacy is the #1 risk.** A dollar-bearing entry committed to the public repo is the failure mode.
  Mitigation: gitignore the entry folder; verify with `git check-ignore`; the session prompt writes
  entries only to that path.
- **Friction kills journals** (the cos lesson). Mitigation: **the AI writes the entry from the
  conversation** — Wedge talks, it logs. One experiment at a time; no homework.
- **Staleness.** A stale snapshot ⇒ coaching on old numbers. Mitigation: surface `generatedAt`
  ("based on a snapshot from <time>"); export before a session (the Settings button), or once the
  on-close export lands.
- **Over-coaching / nagging.** Soft cap of ~1–2 active experiments; the entry stays short.
- **Scope creep into tooling.** Hold the line: this is a prompt + a markdown convention, not an app
  feature.

## 7. Plan (sequencing)

1. Add the `Budgeting` skill note (`mg-kolbs/Skills/Budgeting.md`) **and the public**
   `mg-kolbs/Budget Kolb Template.md` — both tracked.
2. Add `mg-kolbs/private/budget-kolbs/` to `.gitignore` (the private filled entries), with a tracked
   `.gitkeep` and a tracked local `index.md` / Datacore view that lists entries so the overview
   surfaces them. Verify `git check-ignore`.
3. Write the **session prompt** (reads snapshot + last entry → positive Kolb conversation → appends an
   entry to the private folder; updates the experiments ledger + the skill's level when warranted).
4. Run the first real cycle once a budget + snapshot exist (gated on Wedge's private budget session).
5. **Later:** a light scheduled weekly reflection routine (reads the new snapshot, notes what changed,
   drafts a reflection + candidate experiment to react to) — the "auto-update" feel, still a Claude
   routine, no app code.
6. **Later:** split the four rules into sub-competencies if granularity earns it.

## 8. Open questions

- **Cadence:** on-demand only to start, or add the weekly scheduled reflection now? *(Recommend:
  on-demand first — prove the rhythm — then add the weekly nudge.)*
- **Skill granularity:** one `Budgeting` skill, or the four rules as four sub-skills? *(Recommend:
  start with one; split later if it helps.)*
- **Entry location final call:** `mg-kolbs/private/budget-kolbs/` (in the overview) vs
  `finances/budget-journal/` (already gitignored, but needs manual linking). *(Recommend the former
  for overview visibility.)*
- Does the snapshot carry enough history for good reflection, or lean on the AI-layer's
  `categoryHistory` field? *(Reuse the same snapshot superset.)*

## 9. Decisions captured (2026-05-30 session)

- **It's a Kolb chain scoped to money**, in Wedge's existing template vocabulary — not a new format.
- **Positive reinforcement only; no blame** — a hard rule.
- **Marginal metrics** (binary daily Y/N) are the operational engine of "little by little."
- **The AI writes the entries** from the conversation (friction is the killer).
- **No in-app tooling** — a Cowork/CC session over the existing snapshot + a markdown journal.
- **Privacy = method public, money private:** the **template** and the **`Budgeting` skill** are
  tracked/public (shareable, no dollars — Wedge likes people seeing what he's working on); the
  **filled entries** are **gitignored** under `mg-kolbs/private/budget-kolbs/`. Quartz-exclusion
  alone is *not* sufficient for the entries.
- **Budgeting becomes a tracked `mg-kolbs` competency**, leveled like any other skill.
