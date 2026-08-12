---
title: "Grok Bot Fleet Structures"
type: reference
status: seed
created: 2026-08-12
updated: 2026-08-12
description: "Candidate structures for the Grok Bot fleet — the standing half of the research drawn at configuration resolution. Structure A: five bots, single duties. Nothing ruled yet."
tags:
  - agents
  - agentic-engineering
  - grok-bot
  - workflows
---

# Grok Bot Fleet Structures

Candidate structures for the Grok Bot fleet — the always-on agents of [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]], drawn here at configuration resolution. Nothing on this page is ruled. Structures get added as they are derived, and the one that survives contact with configuration becomes the record.

## Structure A — five bots, single duties

One bot per duty, no personas, no orchestrator. The names are working labels.

<svg viewBox="0 0 640 330" width="560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure A: five single-duty bots on one shared computer">
  <rect x="14" y="30" width="380" height="284" rx="10" fill="rgba(130,130,130,.04)" stroke="rgba(130,130,130,.3)"/>
  <text x="204" y="20" font-size="9" fill="currentColor" opacity=".45" text-anchor="middle" font-weight="700" letter-spacing=".08em">ONE SHARED COMPUTER</text>
  <g style="cursor:help"><title>Watch — sites, deploys, indexation, link rot; exception-only</title>
    <rect x="32" y="48" width="164" height="46" rx="6" fill="rgba(47,158,143,.08)" stroke="#2f9e8f" stroke-opacity=".55"/>
    <text x="114" y="68" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Watch</text>
    <text x="114" y="84" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">estate monitor</text>
  </g>
  <g style="cursor:help"><title>Brief — weekday morning signal from X and the open web, exceptions first</title>
    <rect x="32" y="118" width="164" height="46" rx="6" fill="rgba(91,108,176,.08)" stroke="#5b6cb0" stroke-opacity=".55"/>
    <text x="114" y="138" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Brief</text>
    <text x="114" y="154" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">morning signal</text>
  </g>
  <g style="cursor:help"><title>Intake — daily source sweep scored into review packets; weekly competitor diff</title>
    <rect x="32" y="188" width="164" height="46" rx="6" fill="rgba(198,146,52,.08)" stroke="#c69234" stroke-opacity=".55"/>
    <text x="114" y="208" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Intake</text>
    <text x="114" y="224" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">research feeder</text>
  </g>
  <g style="cursor:help"><title>Corpus — weekly audit of the published wiki plus the retired-tool mold check</title>
    <rect x="32" y="258" width="164" height="46" rx="6" fill="rgba(129,86,166,.08)" stroke="#8156a6" stroke-opacity=".55"/>
    <text x="114" y="278" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Corpus</text>
    <text x="114" y="294" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">wiki auditor</text>
  </g>
  <g style="cursor:help"><title>Steward — weekly quota, routine health, rent-earned report; created last</title>
    <rect x="222" y="152" width="154" height="46" rx="6" fill="rgba(130,130,130,.07)" stroke="rgba(130,130,130,.5)"/>
    <text x="299" y="172" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">Steward</text>
    <text x="299" y="188" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".6">quartermaster</text>
  </g>
  <g style="cursor:help"><title>The desk — every packet and push lands with a human; nothing irreversible leaves it</title>
    <rect x="452" y="118" width="168" height="96" rx="8" fill="rgba(47,158,143,.12)" stroke="#2f9e8f" stroke-opacity=".7"/>
    <text x="536" y="160" font-size="11" fill="currentColor" text-anchor="middle" font-weight="700">The desk</text>
    <text x="536" y="178" font-size="8.5" fill="currentColor" text-anchor="middle" opacity=".65">rulings · capture · config</text>
  </g>
  <g stroke="rgba(130,130,130,.5)" stroke-width="1.2" fill="none">
    <line x1="114" y1="94" x2="114" y2="118"/>
    <line x1="196" y1="141" x2="452" y2="150"/>
    <line x1="196" y1="211" x2="452" y2="182"/>
    <line x1="196" y1="281" x2="452" y2="200"/>
  </g>
  <g fill="rgba(130,130,130,.6)">
    <polygon points="114,118 110.5,111 117.5,111"/>
    <polygon points="452,150 444.8,146.9 445.1,153.9"/>
    <polygon points="452,182 444.7,180.1 445.6,187.1"/>
    <polygon points="452,200 445.2,196.5 444.9,203.5"/>
  </g>
  <g font-size="8.5" fill="currentColor" opacity=".55">
    <text x="122" y="110" text-anchor="start">overnight exceptions</text>
    <text x="324" y="128" text-anchor="middle" transform="rotate(2 324 128)">push · packets</text>
  </g>
</svg>

*Steward holds no lane of its own; it reads the other four bots' run records.*

**Watch — the estate monitor.** Hourly reachability on the public sites. On every push, a deploy check — and on failure, the build reproduced on the bot's own box with the offending file named. Daily Search Console diff: canary crawl times, coverage flips, indexed counts moving off zero. Weekly link-rot crawl. Exception-only voice — a silent day means a healthy estate. Needs one fresh read-only Search Console key and nothing else.

**Brief — the morning signal.** Weekdays 07:00: one sweep of X and the open web on the vault's beats — AI, agentic engineering, learning science — plus whatever Watch flagged overnight, delivered as a single exception-first push. What changed comes first, the roundup last, silence where nothing moved. The daily digest reborn on the platform whose absence killed it. Needs only its schedule.

**Intake — the research feeder.** Daily sweep of the standing sources — feeds, paper servers, followed channels — each find scored for relevance and novelty, filed as one review packet. Weekly, the competitor bank re-run and diffed. The packet is the product; nothing enters the vault except through the desk. Needs chat delivery to start, a git bridge later if packets should land as files.

**Corpus — the wiki auditor.** Weekly clone of the published repo, then the sweep: near-duplicate pages, contradicting claims, dead wikilinks, sourceless pages — one packet, never an edit. Standing sub-duty, the mold check: tracked instruction and config files grepped for resurrections of retired tools, every new spore flagged with file and line. Needs git confirmed present on the box; the repo is public, so no credential at all.

**Steward — the quartermaster, created last.** Weekly: quota burn against the included allowance, routine health, review dates coming due, and one line per lane on whether it earns its rent. Administration, never orchestration — the proven remainder of the chief-of-staff idea.

**Shared clearance.** All five sit on one computer where files and logins are common property, so all five hold the same trust level: public material only, scoped read-only keys only, and every output lands as a push, a chat message, or a review packet. Nothing writes to the vault, nothing touches production.

**Rollout.** Week one, Watch and Brief alone — the metering week, watching how fast two lanes eat the weekly allowance. Week two, Intake and Corpus if the meter allows. Steward once three lanes run. Before any of it, five minutes of in-product verification: one computer or one per bot, git present or absent, disk quota, the actual weekly allowance, push reaching the phone.

**The case against A.** Five bots may be two too many for a shared weekly quota — the meter decides, and the structure shrinks gracefully (Steward's duties fold into Watch, Intake's weekly diff into Brief). Single-duty bots also multiply routines to maintain: five bots at even three routines each is fifteen schedules carrying canaries and review dates.

## Sketches not yet derived

- **B — three generalists.** Ops, Research, Admin. Fewer routines to maintain, muddier accountability per finding; field reports so far favor narrow bots over broad ones.
- **C — two bots plus routines.** One monitor, one reader; the audit becomes a monthly routine instead of a standing bot. Cheapest on quota, slowest to notice drift.

## Related

- [[wiki/Systems/AI & Agentic Systems/Standing Research Agents|Standing Research Agents]] — the same structure one level up, and the laws the fleet answers to
- [[wiki/Systems/AI & Agentic Systems/Current Agentic LLM Stack|Current Agentic LLM Stack]] — where the fleet sits among the other agents
- [[wiki/Concepts/Human vs AI Capability Lens|Human vs AI Capability Lens]] — why every lane ends at the desk
