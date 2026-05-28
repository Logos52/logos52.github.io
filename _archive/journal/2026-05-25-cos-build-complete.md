# 2026-05-25 — cos Build Complete

Built the full `cos` personal OS in Claude Cowork in one sitting — 10 PRD blocks, both sessions.

## What got built

**Four domains**, each with `inputs/` (human-maintained), `data/` (machine-refreshed), `outputs/` (generated):

- **finances** — runway, net monthly, goal progress. Live: 15.4 months runway, $2,150/mo net. Seed/dummy expense data for now; real numbers TBD.
- **knowledge-base** — read-only vault scan. Result: 0 stale notes, 565 open questions extracted from callouts + `## Open Questions` sections (journal included).
- **learning-pipeline** — intake queue with deduplication. Seeded with 3 items.
- **tasks-calendar** — Calendar + TASKS.md merge, timezone-aware (Asia/Ho_Chi_Minh from config). Empty for now — Calendar connector not yet connected.

**Morning schedule (ICT):** finance-refresh (07:00) → vault-scan (07:01) → intake-refresh (07:02) → calendar-tasks-refresh (07:03) → daily-digest (07:15) → dashboard-refresh (07:20)

**Skills:** `/today`, `/research`, `/capture`, `/builder` — all in Cowork sidebar as ad-hoc tasks.

**Dashboard:** static generated HTML, dark-themed, four tiles, embedded data — regenerated daily at 07:20 ICT.

## Key decisions

- Vault is **read-only for all automation**. `/capture` is the only vault writer, and only on explicit per-write "proceed."
- Open question extraction: `> [!question]` callouts + `## Open Questions` bullet sections. Freeform not extracted.
- Journal included in open question scan.
- `inputs/` is never touched by automation. Hard invariant.
- Timezone always from `tasks-calendar/inputs/config.json` — never hardcoded.
- Dashboard is generated static HTML (not a live artifact).
- One writer per `data/` file — safe for future multi-agent migration to Grok/Hermes.

## Outstanding

- [ ] Connect Calendar connector → tasks-calendar tile fills in
- [ ] Enter real financial numbers in `finances/inputs/`
- [ ] Run each scheduled task once manually to pre-approve tool permissions
- [ ] 565 open questions — consider a `/review-questions` skill for triage
- [ ] Textual TUI frontend — future work, reads same `data/` layer
- [ ] Health domain — placeholder exists, build when ready
- [ ] cos GitHub repo — push when ready (structure public, data private)

## Notes

`cos` is now public-ready as a project scaffold (MIT license). The `.gitignore` keeps all `inputs/`, `data/`, personal `memory/`, and `briefs/` private. The `llm-knowledge-base` vault is an adjacent connected folder — a read source for cos, never cos storage.
