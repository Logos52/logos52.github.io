---
title: "Front-facing copy becomes law; Writing Standards reordered; June decisions backfilled"
type: journal
created: 2026-06-12
updated: 2026-06-12
tags:
  - journal
  - writing
  - site
  - decisions
---

# Front-facing law + standards housekeeping (2026-06-12)

A review of the Living Atlas work and the Writing Standards file turned into two things: a housekeeping pass that made the June standards properly supersede the May ones, and — out of one hated hero line — a fourth primary writing standard governing every front-facing surface.

## The front-facing arc

The KB hero sub-line ("Maintained in the open, partly by LLM agents — the thinking stays mine") got struck. Diagnosing *why* took several failed rewrites, each rejection narrowing the rule:

1. First miss: treating it as an AI-mention problem. Correction: it's the **attitude** — the line poses (a boast wearing a defense, mic-drop rhythm).
2. Second miss: replacement lines that described the site's editorial apparatus ("each page carries the mechanism, its cost...") — meta-language is still posing in a flatter voice.
3. Third miss: subject-matter lines with copywriter cadence — triads, fragments, anaphora. The rhythm is the selling.
4. Fourth miss: a calm, well-shaped sentence that wasn't true ("open questions stay on the page until they close" — they don't). Truth outranks register.

The convergence test, now law: **read the line and ask what it wants from the reader; the only passing answer is nothing.** The register authority was already written — the Tsumugu register rounds (PRD-Entry-Authoring §0.5–0.6, condensed register + show-don't-tell) — this session extended them from dictionary entries to all front-facing chrome and prose, alongside the standing rule from the dictionary session: no-selling covers chrome, not just prose.

**Codified:** new primary-tier section **High-Signal Front-Facing Pages** in [[02 - System/Writing Standards|Writing Standards]] (the page wants nothing; no posing; complete sentences, one fact each; details, not conclusions; say nothing the screen shows; true against the system). The May Front-Facing Voice section carries a superseded marker. Accepted exemplars: Tsumugu B2 ("A Chinese dictionary built on form and story") and the new KB hero line.

**Shipped, after a second round of strikes:** the first accepted hero ("Each page explains one idea in enough detail to use it...") was itself struck as too generic — it could caption any wiki — which produced two more law additions: **Specific Beats Generic** (move the line onto a stranger's site; if it still fits, it isn't finished) and an em-dash ban in front-facing prose. The final hero states the actual loop in the explaining voice: "Source material comes in, and the useful structure gets written into linked pages. Pages get reworked as standards rise, domains get compressed into condensed pages, and old pages resurface daily." All three clauses verified against the system. The register lesson that closed the arc: the voice Wedge wants is the one Claude already uses when explaining to him; the failure was switching into drafting-mode inside quotation marks. Condensing is deletion, never re-crafting; his language gets preserved when he supplies it. Also cleaned to the law: about.md (the "thinking and direction stay mine" twin line, "the loop is simple," the New-here navigation chatter), notes/index (nav sentence cut), projects/index (card narration cut, retired-projects fact kept), Trails heading ("guided paths through the wiki" decoder cut). H1/H4 handoffs amended so the dead lines can't be restored from spec. TSX syntax verified; full `npm run build` still owed before deploy.

## Standards housekeeping (same day, earlier)

- **Writing Standards reordered, then the May standard deleted outright** (same day, Wedge's call, against the morning's keep-it-subordinate reasoning): agents kept citing the subordinate May rules instead of the High-Signal sections, so the gravity well got removed. The four High-Signal sections are now the complete standard; the May text lives only in git history (bd5adc9). Dangling references fixed in the preamble, Boundaries After Definition, GROK.md, and AGENTS.md.
- **May redesign docs marked superseded** (PRD-Site-Aesthetic-Refresh, the 2026-05-30 wnab-aesthetic decision) with pointers to what replaced them and what survived (Lora + JetBrains Mono, amethyst accent).
- **June decisions backfilled into decisions/** — engine Quartz-over-Astro, Living Atlas design, ledger demotion, High-Signal standards — closing the drift where the Decisions log stopped at May while June's calls lived only in journal entries.
- **GROK.md** now states the authority order.

## The Atlas scare, resolved

"What happened to the atlas redesigns?" — nothing. 22 atlas commits on main, all handoffs committed, site shipped. What never existed in the repo: the parent PRD (`PRD-living-atlas-phase-1-3`) and the two redesign proposals the atlas README cites — they lived only in the design chat. The session ("LLM knowledge base website redesign") still exists locally, so recovery beats reconstruction.

## Ruled out

- Deleting the May standard outright (orphans rules the new bar incorporates by reference).
- Archiving the superseded redesign docs out of PRDs/ and decisions/ (breaks "findable in one search").

## Outstanding

- Recover or reconstruct the Living Atlas PRD + proposals; assignee undecided (Grok Build vs Composer vs recovery from the saved session).
- `enableSPA` test — the engine decision's mitigation, still unmeasured.
- Auto-catalog PRD (scheduled "immediately after Atlas ships").
- Worktree/branch pruning declined this round; two prunable worktrees (105MB) and four merged branches remain.
- Promote-or-absorb question is settled for Front-Facing Voice; the rest of the May block stays subordinate until something proves load-bearing the same way.
