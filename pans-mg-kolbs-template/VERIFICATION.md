---
type: reference
status: in-progress
---
# Faithful template — verification checklist

Source of truth = the live Notion "MG & Kolb's Template". "Done" = **✅ verified**, not "built." Status is honest.

**Methods:** [me/file] sandbox check (exists, YAML parses, script runs) · [me/notion] diff vs live Notion · [me/quartz] localhost preview · [you/obsidian] only you can confirm renders.

Legend: ✅ verified · 🟡 built + self-checked, but needs your Obsidian render-check · ❌ missing

## Main index page
| Item | Method | Status |
|---|---|---|
| "Databases" collapsible toggle | you/obsidian | 🟡 now a `> [!note]-` toggle |
| ℹ️ callout (Pan's 6 notes + ping) | me/notion | ✅ matches Notion |
| Embedded Tasks / Kolbs / Skills / Goals views | you/obsidian | 🟡 `![[*.base]]` embeds added — confirm they render |
| Anchored-goal: dissect + evaluation | me/notion | ✅ |

## Databases (.base)
| Item | Method | Status |
|---|---|---|
| All 5 `.base` parse as valid YAML | me/file | ✅ (pyyaml) |
| skills.base (Current + All, progress bar) | you/obsidian | 🟡 parses; render? |
| tasks.base incl. **Board (cards/kanban)** | you/obsidian | 🟡 Board view present; **confirm it renders as cards** |
| kolbs.base / goals.base / goal-tracking.base | you/obsidian | 🟡 parse; render? |
| Database pages embed their `.base` | me/file | ✅ (Tasks/Kolbs/Goals/Goal Tracking) |

## Example / filler data
| Item | Method | Status |
|---|---|---|
| Skills: SIR, Sleep, Deep Work, Focus (with metrics) | me/file | ✅ 4 skills |
| Kolbs: SIR 1 (filled), SIR 2, Sleep 1 (filled) sessions | me/file | ✅ |
| Tasks: Task 1, Task 2 + 3 recurring | me/file | ✅ |
| Goals: Example Goal (with checklist) + Learning Systems | me/file | ✅ |
| Goal Tracking: @Today entry | me/file | ✅ |

## Page templates
| Item | Method | Status |
|---|---|---|
| Kolbs reflection template | me/notion | ✅ |
| Recurring Task templates (weekly eval, Priority 0, Skills audit) | me/file | ✅ present as task notes |
| Goal page w/ goal-setting checklist | me/notion | ✅ (Example Goal) |
| Goal-tracking @Today template | me/file | ✅ |

## Automations
| Item | Method | Status |
|---|---|---|
| ☑️ Kolbs cycle script (+ duplicate guard) | me/file (ran) | ✅ verified |
| ✅ task complete + break-timing script | me/file (ran) | ✅ verified |

## What ONLY you can verify (please screenshot back)
Open `pans-mg-kolbs-template/index.md` in Obsidian (reading mode) and confirm:
1. The four embedded views (Tasks, Kolbs, Skills, Goals) actually render under their headings.
2. The **Tasks board** shows as **cards/kanban grouped by status** (this is the one I'm least sure of — Bases `cards` may render differently than Notion's board).
3. The Databases toggle collapses, and `[[links]]` resolve.
4. Each database page (Skills/Kolbs/Tasks/Goals/Goal Tracking) shows its embedded base.

Until those four are confirmed, this is **structurally complete and self-checked, but NOT render-verified.** I will not call it "done" before your screenshots.
