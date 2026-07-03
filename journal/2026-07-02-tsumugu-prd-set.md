# 2026-07-02 — Tsumugu PRD set authored (core + ed)

Session: Cowork (Claude Fable). Wedge asked for a comprehensive set of Opus-executable PRDs improving tsumugu-core and tsumugu-ed, written to durable locations with a change index.

## Decided (Wedge, this session)

- Scope: **mix, roadmap-weighted** — mostly convert tracked roadmap/backlog items into executable PRDs; small number of net-new proposals.
- Location: **repo conventions** — core PRDs in `tsumugu-core/docs/`, ed PRDs at `tsumugu-ed/` root; index in each repo; this journal entry.
- Size: **comprehensive**; sign-off mode: **author directly**, review the finished set (proposal-list round-trip waived).

## Output — 13 PRDs, all `status: draft`, none approved yet

- Indexes: `tsumugu-core/docs/PRD-INDEX-2026-07-02.md` · `tsumugu-ed/PRD-INDEX-2026-07-02.md` (each lists what was deliberately NOT written, with reasons — the anti-duplication record).
- Core (8): Content-Wave-1, Library-UX, Design-Unification-Pass, Front-Facing-Copy, Dict-Handoff-Axes (cross-repo), PWA-Offline, Encoding-Modal (scope-change proposal), First-Run-Onboarding (net-new).
- Ed (5): Word-Example-Sentences, Inband-Definitions, Idioms-Chengyu, ScholarNote-Renderer, Corpus-Reach.

## Ruled out (and why) — do not re-propose without new evidence

- PRDs for the Simplified toggle, dictionary audio, char-sentence closeout: **live work orders already exist**; duplicating them is the exact stale-doc failure mode this vault guards against.
- Pulling accounts/voice/flashcards/grammar into v1: reverses PRD §1.3 with no new evidence. Encoding modal is the one exception argued (as an explicit sign-off proposal, "stay gated" a valid outcome).

## Open questions parked with Wedge (the set's gating decisions)

1. Content Wave 1 generation path — the metered-API collision (rec: subscription-session lane, pilot 10 first).
2. Default palette + default rail (v1-STATUS Review 5–6).
3. Flat vs graduated defining ceiling for in-band definitions (rec: graduated; 1,373-word B1 budget is the decider) + the schema WO.
4. Idiom list freeze + entry-shape schema WO.
5. Word-sentence recipe deltas: 3-vs-5, collocation shape, band interleaving.
6. Encoding modal in/out; onboarding build/reject.

## Next move

Wedge reads the two indexes, kills what he disagrees with, signs what he wants run. Suggested first signatures: Content-Wave-1 (core) and Word-Example-Sentences Phase 0 (ed) — each unblocks the largest visible gap in its repo.
