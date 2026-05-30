# PRD — Convert Pan's "MG & Kolb's" Notion Template to Obsidian

**Owner:** Wedge
**Author:** Claude (Cowork)
**Executor:** Claude Code
**Status:** Draft v2 — awaiting sign-off
**Date:** 2026-05-30

---

## 0. Read this first (executor orientation)

You are converting **one** Notion template into Obsidian.

- **Source (live, source of truth for behavior):** [MG & Kolb's Template](https://panstemplates.notion.site/Dashboard-16ea69e8f5c48000920dc2ec2f401c4a) — note the page is *titled* "Dashboard" in the URL but is the **MG & Kolb's** daily-driver template.
- **Source (text content):** zip export at `notion_basic/MG & Kolb's Template/`.
- **Out of scope (this round):** the heavier "Basic template" study system ([Basic-template URL](https://panstemplates.notion.site/Basic-template-1052bce988614a2884bac4c8201d8988)). Inventory for it is preserved in Appendix B in case Wedge greenlights it later — **do not build it now.**

> ⚠️ The markdown export is **lossy** — it has text but **no** view configs, formulas, relations, rollups, button logic, or layout. **Re-open the live Notion page and inspect it directly** (you have the extension) before building. The export is for text; the live page is for behavior.

> 🧹 A **prior failed AI attempt** for this same template already exists as a front-facing page named **"MG & Kolbs"** inside `llm-knowledge-base`. Its layout is wrong, but **read it first and salvage anything reusable** (frontmatter conventions, prose, partial Bases) before archiving it (§8, Phase 0).

---

## 1. Problem

Wedge wants Pan's **MG & Kolb's** Notion template (a Kolb's-cycle / marginal-gains learning system: Tasks, Kolbs cycles, Skills, Goals) rebuilt natively in Obsidian. It should live in `llm-knowledge-base` and ship as its own publishable git repo so friends can use it too.

A prior AI attempt is already a front-facing page in the vault but **failed** — the layout diverges badly from the source. Wedge wants to **start over**, salvaging only what's genuinely useful.

**Critical design constraint:** the result must work for **someone with no AI tools at all** (Wedge no longer uses Hermes and assumes a zero-AI baseline user), *and* offer an **optional AI-augmented layer** Wedge can switch on later. Build **both tiers over the same hooks** (see §7).

**Why now:** the template is in active use; every day on the broken version is more notes built against a structure that'll need re-migrating.

## 2. Success criteria (concrete, checkable)

1. **Structural parity.** Every page, database, and database property in §6 exists in the Obsidian build. Nothing silently dropped. (This list is the acceptance checklist.)
2. **Bases for databases.** Each Notion database = an Obsidian **Base** (`.base`, latest Bases version) with note-per-row backed by frontmatter. Every Notion view (board/calendar/table + grouping/sort/filter) maps to a Base view, or has a documented reason it can't.
3. **Relations preserved.** Skills↔Kolbs, Kolbs↔Kolbs (next/previous, self-referential), Skills→Goals/Goal-tracking are wikilinks + Base link properties, navigable both directions.
4. **Rollups/formulas approximated.** Computed Notion fields (Kolbs `Duration`, level metrics, break timing) reproduced via Base formula properties; anything Bases can't do is documented with a fallback (Dataview or script).
5. **Layout fidelity.** The dashboard page recognizably matches the original: "Databases" toggle index, the ℹ️ usage-notes callout, embedded DB views, headings, toggles. Close enough to be the same template — not pixel-perfect.
6. **Automations — both tiers.** Every automation in §6/§7 is implemented as **(Tier 1) a deterministic no-AI version** AND **(Tier 2) an optional AI-augmented version** sharing the same trigger points. No Hermes. No assumption that the user has any AI tooling.
7. **Clean sample data.** Pan's filler/junk rows are rebuilt as **clean, realistic sample entries** (useful for dev + as user examples), not left as `Task 1` / `asdjah` garbage.
8. **Self-contained, publishable repo.** Standalone git repo (README, `.gitignore`, no `(1)` duplicate-suffix artifacts, no Notion export cruft), ready to push to GitHub and reference from `llm-knowledge-base`.
9. **Salvage handled.** Existing "MG & Kolbs" page read for reusable parts, then moved to `_archive/` (recoverable, not deleted).
10. **Automated verification pass.** A final automated check diffs the §6 checklist against the built vault and reports any gaps (§8, Phase 5).
11. **No plugin/script dependency added without Wedge's approval** (§5).

## 3. Scope

### In scope
- Full rebuild of **MG & Kolb's Template** only.
- Obsidian **Bases** for all 5 databases; frontmatter schema per DB.
- Relations, rollups, formulas (best-effort via Bases, fallback documented).
- Dashboard page + callouts + toggles + embedded Base views; the Kolb's-cycle structure.
- **Dual-tier automations** (Tier 1 no-AI scripts/plugins; Tier 2 optional AI) — §7.
- Clean sample data per database.
- Salvage + archive of the existing "MG & Kolbs" page.
- README + git repo init.
- Final automated coverage check.

### Out of scope
- The "Basic template" study system (Appendix B holds its inventory for later).
- **Hermes** or any assumption the user runs AI agents (Tier 1 must work without them).
- Live **Notion Calendar / Basecamp "OFFrest"** external sync. We reproduce the data model (`Do Date`, `Break length`, `Time taken`) + an in-vault calendar view; not the external pipe.
- Migrating Wedge's real historical entries (sample data only).
- Pixel-perfect CSS replication.
- `cos` / Cowork OS — untouched.

## 4. Constraints & assumptions

- **DB engine = Obsidian Bases**, latest version. Confirm installed Obsidian + Bases version in Phase 0; it determines formula/rollup parity vs. Dataview/script fallback.
- **Plugin policy = wide but verify.** Plugins + scripting allowed, but **every dependency in §5 is approved by Wedge before install/use.**
- **Zero-AI baseline.** Tier 1 must run with no AI tools, no Hermes, no API keys. Scripts are plain Python/Node (or pure Obsidian plugins).
- **Dual-purpose architecture.** Tier 2 AI features plug into the *same* automation hooks as Tier 1 — a switch, not a fork. Keep a clean interface so the AI layer is additive.
- **Repo shape = git submodule (LOCKED).** `llm-knowledge-base` is a git repo, and Wedge wants the template **both** inside the vault **and** published as a separate repo. The template is therefore its **own standalone git repo** (publishable to GitHub independently), added to `llm-knowledge-base` as a **git submodule** at a vault path (e.g. `Templates/mg-kolbs/`). Files live on disk so Obsidian renders them normally; the parent vault pins a submodule commit. Executor steps: init the template repo, push to GitHub, then `git submodule add <url> Templates/mg-kolbs` in the vault and commit the pointer. *Fallback if Wedge later dislikes submodule friction (e.g. `--recurse-submodules` on clone): convert to a **git subtree** — same dual-publish outcome, files always present, no special clone flags, at the cost of intertwined history.*
- **Clean slate:** ignore the failed attempt's structure; salvage prose/conventions only.
- **Export artifacts:** strip `(1)` suffixes from duplicated relation/property names; replace junk example rows.

## 5. Dependencies — **PENDING WEDGE APPROVAL** (do not install/use until confirmed)

| Dependency | Tier | Purpose | If rejected |
|---|---|---|---|
| **Bases** (core) | both | All databases & views | — (required) |
| **Templater** | 1 | Page templates w/ logic for new Kolbs/Task/Goal notes | QuickAdd templates only |
| **QuickAdd** | 1 | Button-driven note creation + macros (☑️ cycle, ✅ complete) | Manual "New from template" |
| **Dataview** | 1 | Rollups/formulas Bases can't express | Static/script-computed values |
| **Meta Bind** *(opt)* | 1 | In-note buttons/inline fields matching Notion's ☑️/✅ feel | QuickAdd via command palette |
| **Full Calendar** *(opt)* | 1 | Calendar view over task `Do Date` | Bases date-sorted "Next" view |
| **Python or Node** (standalone scripts) | 1 | Recurring-note generation, break-timing calc, cycle scaffolding — runnable by anyone via terminal/cron/launchd | Pure-plugin equivalents where possible |
| **LLM API client** (e.g. small script calling an API) | 2 | Optional AI: draft eval notes, suggest marginal gains, summarize cycles | Tier 2 simply stays off |

**Recommended core (Tier 1):** Bases + Templater + QuickAdd + Dataview + a small `/scripts` folder (Python). Tier 2 is an optional `/scripts/ai` layer.

## 6. Source inventory — MG & Kolb's Template (the build checklist)

**Top page layout:**
- Toggle **"Databases"** → index links: Tasks, Kolbs, Skills, Goal tracking, Goals.
- **ℹ️ callout** with Pan's usage notes (6 points: Notion Calendar usage; auto-created pages; the ☑️ Kolbs cycle button; Goals "not optimised"; the `(1)` suffix warning; filler pages). Rebuild as `> [!info]` callout (keep the guidance text, drop Notion-specific UI references or translate them to the Obsidian equivalent).
- Embedded views: **Tasks** (*Next* = board grouped by `Do Date`: `No Do Date / Today / Tomorrow / Next 7 days`; *Calendar*), **Kolbs** (gallery of session cards w/ "MGs and experiments" + ☑️), **Skills** (table), **Goals** (table).

**Databases & properties:**

1. **Tasks** — `Task` (title), `Property`, `Break length`, `Created` (created-time), `Do Date` (date), `Priority 0+1` (select: *important + not urgent*, *important + urgent*, …), `Status` (Incomplete/Complete), `Time taken`. **✅ button** → complete + generate break timing. Views: *Next* (board by `Do Date`), *Calendar*.
2. **Kolbs** — `Session name` (title), `Created`, `Duration` (computed = Finish − Start), `Finish time`, `MGs and experiments` (text), `Next kolbs` (relation→Kolbs, self), `Previous kolbs` (relation→Kolbs, self), `Skills` (relation→Skills), `Start time`, `Status` (Done/…), `☑️` button. **☑️ button** → set current to Done, create **and open** next Kolbs (same name; user renumbers). Cycling only.
3. **Skills** — `Skill` (title), `Anchored goal` (relation), `Competency` (select: *CC (low)*, *CC (high)*, …), `Current level` (e.g. `5/10`), `Edited`, `Final level` (e.g. `7/10`), `Final level metrics` (text), `Goal tracking` (relation), `Kolbs cycles` (relation→Kolbs; appears as `Kolbs (1)` in export — strip suffix), `Last tracked`, `Status` (Active/…).
4. **Goal tracking** — relation target referenced by Skills + the recurring "weekly eval + goal tracking" note. *Schema thin in export — re-derive from live page in Phase 0.*
5. **Goals** — `Name` (title), `Start date`, `End date`, `Last edited`, `Status` (In progress/…).

**Relations:** Skills.Kolbs ↔ Kolbs.Skills; Kolbs.Next/Previous → Kolbs (self); Skills.Anchored goal; Skills.Goal tracking.

**Automations (build both tiers — see §7):** Tasks ✅; Kolbs ☑️ cycle; auto-recurring pages ("weekly eval + goal tracking", "Skills audit→ feedback request"); Notion Calendar sync (data model + in-vault view only).

**Assets:** `image.png`, `image 1.png` (screenshots of auto-created pages — reference only).

## 7. Automation design — dual tier (no Hermes)

Every automation ships as **Tier 1 (deterministic, no AI)** and **Tier 2 (optional AI over the same hook)**. Tier 2 is additive; toggling it off leaves a fully working Tier 1.

**(a) ✅ Task complete → break timing.**
- *Tier 1:* QuickAdd / Meta Bind button sets `Status: Complete`, stamps `Time taken`, and a Templater user-script (or `/scripts/break_timing.py`) computes `Break length` deterministically from time taken (e.g. fixed ratio / OFFrest rule). Fully reproducible without AI.
- *Tier 2:* optional — AI suggests a break *activity* given the task; timing stays deterministic. (Low value here; can skip.)

**(b) ☑️ Kolbs cycle (complete current → create + open next).**
- *Tier 1:* QuickAdd "Template" action → creates next Kolbs from a Templater template, auto-links `Previous`/`Next`, sets prior `Status: Done`, opens the new note. Faithful replica, no AI.
- *Tier 2:* the new Kolbs is **pre-filled** with AI-suggested marginal gains / experiments derived from the previous cycle's reflection. Same trigger, richer output. **This is the flagship dual-purpose example.**

**(c) Recurring pages ("weekly eval + goal tracking", "Skills audit→feedback").**
- *Tier 1:* a standalone `/scripts/recurring.py` (or Node) that stamps a new note from a template into the vault on a schedule via **OS cron / macOS launchd** (no Obsidian scheduler, no AI). Alternatively the **Periodic Notes** plugin + a "New weekly eval" QuickAdd button for fully-manual use. Document both so a no-tooling user can pick.
- *Tier 2:* the same script calls an LLM to **draft** the eval scaffold from recent Kolbs/Skills notes before writing it.

**(d) Notion Calendar / OFFrest sync.** Out of scope as a live pipe. *Tier 1:* Full Calendar plugin over task `Do Date`, **or** a Bases date-sorted "Next" view. No AI either way.

**Obsidian-native advantages to lean into:** native **callouts** (ℹ️ notes), **collapsible callouts / foldable headings** for Notion toggles, **Graph view + backlinks** to visualize and navigate the Skills↔Kolbs relations (a real win over Notion), **Canvas** to lay out the Kolb's cycle, **embedded Base views in notes** to recreate Notion's "database-on-a-page," and the **properties panel** as the native field editor.

## 8. Plan (phased, sequenced)

**Phase 0 — Recon, salvage, safety.**
0.1 Re-open the live Notion page; capture exact view configs, select options, the `Duration`/break formulas, and relation directions the export lost.
0.2 Confirm Obsidian + **Bases** version; note formula/rollup ceiling vs. Dataview/script fallback.
0.3 **Read the existing "MG & Kolbs" front-facing page** in `llm-knowledge-base`; extract anything reusable (frontmatter conventions, prose, partial Bases). Then **move it to `_archive/MG-Kolbs-legacy/`** — recoverable, **not deleted**. Confirm the move with Wedge first (§9 Q3).
0.4 Confirm/install approved deps (§5).

**Phase 1 — Scaffolding.**
1.1 Repo skeleton: `/Tasks`, `/Kolbs`, `/Skills`, `/Goals`, `/Goal-tracking`, `/Bases`, `/Templates`, `/scripts` (+ `/scripts/ai` for Tier 2), `/Assets`, `/_archive`, `README.md`, `.gitignore`.
1.2 Define frontmatter schema per database (§6); one consistent property convention.

**Phase 2 — Databases as Bases.**
2.1 Per DB: create `.base`, the note-per-row folder, and 2–3 **clean sample notes** (replace Pan's junk).
2.2 Recreate each view (board by `Do Date`, calendar, tables) with original grouping/sort/filter.
2.3 Wire relations as link properties; Dataview fallback only where Bases can't (flag each).

**Phase 3 — Dashboard & pages.**
3.1 Build the dashboard page: Databases index, ℹ️ callout, embedded Base views, headings, toggles.
3.2 Build the Kolbs reflection/cycle structure and any per-row page bodies.

**Phase 4 — Automations (both tiers).**
4.1 Templater/QuickAdd templates for new Kolbs / Task / Goal notes.
4.2 Tier 1: implement (a)–(d) deterministically; write `/scripts` (Python) with clear run instructions for a no-tooling user.
4.3 Tier 2: mirror the AI-augmented variants in `/scripts/ai`, gated behind a config flag, off by default.

**Phase 5 — Polish, verify, ship.**
5.1 Strip `(1)` artifacts; confirm every relation resolves.
5.2 **Automated coverage check:** a script/subagent diffs the §6 checklist against the built vault, reports gaps.
5.3 README: structure, dependencies, per-automation Tier 1 vs Tier 2 instructions, known gaps.
5.4 `git init`, initial commit. Hand back for the submodule-vs-nested decision (§9 Q1) and the GitHub publish.

## 9. Open questions (resolve at sign-off)

1. ~~Repo shape~~ **RESOLVED:** git submodule — standalone template repo published to GitHub, added to the `llm-knowledge-base` repo as a submodule. (Subtree as documented fallback.) **Repo display name:** `Pan's MG & Kolbs Template` (GitHub slug `pans-mg-kolbs-template`). **Submodule path:** `Templates/mg-kolbs/`. README provided (see `README.md`), credits Pan and links the Notion source.
2. **Salvage threshold:** read the old "MG & Kolbs" page and salvage opportunistically, or is there a specific part you know is worth keeping?
3. **Confirm archive:** OK to move the existing front-facing "MG & Kolbs" page to `_archive/` (recoverable) once salvaged?
4. **Goal tracking DB:** its schema is thin in the export — fine to re-derive fully from the live page in Phase 0?
5. **Tier 1 recurring mechanism default:** cron/launchd script (hands-off but needs one-time terminal setup) vs. Periodic Notes + manual button (no terminal, but manual)? Or ship both and let the user choose? (My default: ship both, document both.)
6. **Sample data flavor:** generic ("Skill: Sleep, 3/10→9/10" like Pan's) or themed to your actual learning domains?

---

## Appendix A — files reviewed
- `notion_basic/` → `MG & Kolb's Template` export (this build's source).
- `notion_dashboard/` → `Basic template` export (deferred — Appendix B).
- Live: panstemplates.notion.site — both pages, rendered.

## Appendix B — "Basic template" study system (DEFERRED, do not build)
Heavier template, preserved for a possible later round. Top page: Databases toggle (Processes and evaluations, Kolbs daily tracker, Experiments, 30 day plan, 1% gains, Performance goals, Tasks, Question papers, Syllabus, Generated questions bank, SIR; nested "Previous anchored goals" + "Master views"). Key subpages: "+ Anchored goal" (6-step goal-setting, risk-management 13-step guideline, projects/obstacles), "30 day plan" (30/14-day performance-goal DBs, scheduling checklist), "Kolbs daily tracker" (full Experience→Reflection→Abstraction→Experimentation template + embedded `Kolbs-Cycle-Example.pdf`), Performance goals (Type/Progress), Processes and evaluations (Competency, relations/rollups to Kolbs/1% gains/30-day-plan/Experiments/Performance goals), 1% gains ("@Today"), Question papers (Score/Grade + QP/Gen-Q rollups), Syllabus, Generated questions bank, SIR. Asset: `Kolbs-Cycle-Example.pdf`.
