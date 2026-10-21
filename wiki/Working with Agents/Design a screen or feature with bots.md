---
title: "Design a screen or feature with bots"
type: technique
section: "Working with Agents"
status: seed
description: "Explore a design with bots: cut the concepts a user must learn, frame each surface with a few questions, make several options real and pick by a stated criterion, tune with the real production asset, build one component yourself and let a bot scale it, then take things away."
created: 2026-10-20
updated: 2026-10-20
effort: varies
needs: bots with Figma or code access
cost_note: no
aliases:
  - "Design with bots"
tags:
  - agents
  - design
---

# Design a screen or feature with bots

Designing with bots means making more versions of an idea real, sooner, and keeping your own judgment for the choice between them. The work starts by deciding which few concepts a person needs, then explores several options for each open question and picks one against a stated criterion. Bots carry the making: live prototypes, motion tuned on the real asset, and repetitive production from one component you built. The design ends by taking things away.

**Scope.** This follows how the Grok Bot design team described designing Grok Bot itself, in an essay on the product and in one designer's guide to working with design bots, plus [Lauren](https://x.com/poteto/status/2097732320606507506)'s prompts for prototyping options in code. The sources describe the process; they publish no specs or results.

<div class="callout">

<b>At a glance</b>

1. Cut the vocabulary to the few concepts a person needs.
2. Frame each surface with the questions it must answer.
3. Explore many options and pick by a stated criterion.
4. Make options real enough to judge before deciding.
5. Tune with the real production asset, not a recreation.
6. Build one component yourself and let a bot fill in the rest.
7. Take things away.

</div>

<figure>
<svg viewBox="0 0 520 730" width="100%" style="max-width:520px" role="img" aria-labelledby="ds-loop-t">
<title id="ds-loop-t">The design loop with bots. Seven steps, each with a dashed arrow back to a bar labelled you keep the choice. 1. Cut the vocabulary first: many new terms, then kept coming back to five. 2. Frame each surface with questions: who is this? What are they doing? How much do I need to know? 3. Explore widely, then pick by a criterion: initials, emojis, pixel art, watercolor and clay, and the one ticked is consistent construction with controlled variations. 4. Make options real before deciding: three live prototypes, and none shipped exactly as explored. 5. Tune with the real asset: a localhost playground around the actual animation spec file, with timing, springs, distance, scale and easing by hand, and the feedback bounce is too exaggerated. 6. Build one, let the bot scale it: one component becomes 20 starter-bot cards. 7. Take things away: did this help someone delegate, or did it give them one more thing to manage?</title>
<rect x="10" y="10" width="384" height="64" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="30" style="font-weight:600">1. Cut the vocabulary first</text></g>
<rect x="24" y="42" width="130" height="22" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="89" y="57">Many new terms</text></g>
<path d="M160,53 L188,53" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="188.0,53.0 179.0,58.0 179.0,48.0" style="fill:var(--mut,#666)"/>
<rect x="194" y="42" width="180" height="22" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="284" y="57">Kept coming back to five</text></g>
<rect x="10" y="88" width="384" height="78" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="108" style="font-weight:600">2. Frame each surface with questions</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="24" y="128">Who is this?</text><text x="24" y="142">What are they doing?</text><text x="24" y="156">How much do I need to know?</text></g>
<rect x="10" y="180" width="384" height="104" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="200" style="font-weight:600">3. Explore widely, then pick by a criterion</text></g>
<rect x="24" y="210" width="70" height="24" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="59" y="226">Initials</text></g>
<rect x="96" y="210" width="70" height="24" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="131" y="226">Emojis</text></g>
<rect x="168" y="210" width="70" height="24" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="203" y="226">Pixel art</text></g>
<rect x="240" y="210" width="70" height="24" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="275" y="226">Watercolor</text></g>
<rect x="312" y="210" width="70" height="24" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="middle"><text x="347" y="226">Clay</text></g>
<rect x="24" y="242" width="356" height="30" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<path d="M34,257 L38,262 L45,253" style="fill:none;stroke:var(--accent,#2a6);stroke-width:2"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="52" y="262">Consistent construction with controlled variations</text></g>
<rect x="10" y="298" width="384" height="92" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="318" style="font-weight:600">4. Make options real before deciding</text></g>
<rect x="24" y="328" width="110" height="40" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<line x1="24" y1="338" x2="134" y2="338" style="stroke:var(--rule2,#999);stroke-width:1"/><g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="79" y="358">Live prototype</text></g>
<rect x="144" y="328" width="110" height="40" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<line x1="144" y1="338" x2="254" y2="338" style="stroke:var(--rule2,#999);stroke-width:1"/><g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="199" y="358">Live prototype</text></g>
<rect x="264" y="328" width="110" height="40" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<line x1="264" y1="338" x2="374" y2="338" style="stroke:var(--rule2,#999);stroke-width:1"/><g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="319" y="358">Live prototype</text></g>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="24" y="382">None shipped exactly as explored</text></g>
<rect x="10" y="404" width="384" height="112" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="424" style="font-weight:600">5. Tune with the real asset</text></g>
<rect x="24" y="434" width="210" height="70" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="34" y="452">Localhost playground around</text><text x="34" y="466">the actual animation spec file</text></g>
<line x1="34" y1="486" x2="220" y2="486" style="stroke:var(--mut,#666);stroke-width:1.2"/><circle cx="80" cy="486" r="3.5" style="fill:var(--ink,currentColor)"/>
<line x1="34" y1="496" x2="220" y2="496" style="stroke:var(--mut,#666);stroke-width:1.2"/><circle cx="150" cy="496" r="3.5" style="fill:var(--ink,currentColor)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="246" y="448">Timing, springs, distance,</text><text x="246" y="462">scale and easing by hand</text></g>
<rect x="246" y="468" width="140" height="36" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="256" y="482">Bounce is too</text><text x="256" y="496">exaggerated.</text></g>
<rect x="10" y="530" width="384" height="98" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="550" style="font-weight:600">6. Build one, let the bot scale it</text></g>
<rect x="24" y="562" width="72" height="46" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="middle"><text x="60" y="582">One</text><text x="60" y="596">component</text></g>
<path d="M100,585 L122,585" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5"/><polygon points="122.0,585.0 113.0,590.0 113.0,580.0" style="fill:var(--mut,#666)"/>
<rect x="128" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="152" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="176" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="200" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="224" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="248" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="272" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="296" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="320" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="344" y="562" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="128" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="152" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="176" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="200" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="224" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="248" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="272" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="296" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="320" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/><rect x="344" y="586" width="20" height="20" rx="3" style="fill:none;stroke:var(--mut,#666);stroke-width:1"/>
<g style="fill:var(--mut,#666);font-family:inherit;font-size:12px" text-anchor="start"><text x="128" y="620">20 starter-bot cards</text></g>
<rect x="10" y="642" width="384" height="78" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="start"><text x="20" y="662" style="font-weight:600">7. Take things away</text></g>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:12px" text-anchor="start"><text x="24" y="682">Did this help someone delegate, or did it</text><text x="24" y="696">give them one more thing to manage?</text></g>
<rect x="420" y="10" width="90" height="720" rx="8" style="fill:var(--paper,transparent);stroke:var(--rule2,#999);stroke-width:1.5;stroke:var(--accent,#2a6)"/>
<g style="fill:var(--ink,currentColor);font-family:inherit;font-size:13px" text-anchor="middle"><text x="465" y="357" style="font-weight:600">You keep</text><text x="465" y="374">the choice</text></g>
<path d="M394,42.0 L419,42.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="419.0,42.0 410.0,47.0 410.0,37.0" style="fill:var(--mut,#666)"/>
<path d="M394,127.0 L419,127.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="419.0,127.0 410.0,132.0 410.0,122.0" style="fill:var(--mut,#666)"/>
<path d="M394,232.0 L419,232.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="419.0,232.0 410.0,237.0 410.0,227.0" style="fill:var(--mut,#666)"/>
<path d="M394,344.0 L419,344.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="419.0,344.0 410.0,349.0 410.0,339.0" style="fill:var(--mut,#666)"/>
<path d="M394,460.0 L419,460.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="419.0,460.0 410.0,465.0 410.0,455.0" style="fill:var(--mut,#666)"/>
<path d="M394,579.0 L419,579.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="419.0,579.0 410.0,584.0 410.0,574.0" style="fill:var(--mut,#666)"/>
<path d="M394,681.0 L419,681.0" style="fill:none;stroke:var(--mut,#666);stroke-width:1.5;stroke-dasharray:5 4"/><polygon points="419.0,681.0 410.0,686.0 410.0,676.0" style="fill:var(--mut,#666)"/>
</svg>
<figcaption>The design loop with bots. Bots make the versions, and every step comes back to you for the choice.</figcaption>
</figure>

## Why it works

As making gets easier, a designer can explore more directions, react sooner and let an idea show what it wants to become. The designer's guide says bots haven't made design a one-shot process; they have made the loop tighter, so more attention goes to the judgment between versions.

## The method

1. **Cut the vocabulary first.** The team started by asking which concepts a person actually needs, and kept coming back to five. Everything else could stay beneath the interface until the user had a reason to care about it.
2. **Frame each surface with questions.** For how bots appear in the product, the team named three questions to answer at once: who is this, what are they doing, and how much do I need to know?
3. **Explore widely, then pick by a criterion.** For avatars, the team studied styles from initials and emojis to pixel art, watercolor and clay. Watercolor and clay had too much detail at sidebar scale, and simpler systems often left bots looking interchangeable, so the team kept a consistent construction with controlled variations. For the bot's own computer, they tried four arrangements and found that the more prominent the computer was, the more the product encouraged users to supervise it. They settled on three levels of access. User research showed people wanted step-by-step detail mainly for reassurance, so the avatar's motion now gives the first reassurance that the bot is active, and hovering shows its current action.
4. **Make options real before deciding.** One designer keeps a bot just for experiments. Asked for ways to reach a bot from anywhere, it built three live prototypes and delegated motion and implementation questions to other bots. None shipped exactly as explored; the point was to make three versions real and learn from each. For code, [Lauren](https://x.com/poteto/status/2097732320606507506) asks an agent to prototype a few options and take screenshots or videos for her to choose from, as [[wiki/Working with Agents/Plan a piece of work with an agent|Plan a piece of work with an agent]] describes.
5. **Tune with the real asset.** For a short animation, the designer had a motion bot build a localhost playground around the actual animation spec file, not a recreation from a screenshot. The designer adjusted timing, springs, distance, scale and easing by hand, and also gave short comparative feedback such as "Bounce is too exaggerated."
6. **Build one, let the bot scale it.** For 20 starter-bot cards, the designer built one auto-layout component in Figma, a single card template, and had a production bot copy it and fill it in for the other cards. The bot works through the Figma MCP, a connection that lets it read the real Figma file's exact measurements instead of guessing. It reads positions, sizes, spacing, type and component structure rather than eyeballing them. An existing frame or component is the source of truth.
7. **Take things away.** By the end, much of the team's design work was removal. Each decision came back to one question: "Did this help someone delegate, or did it give them one more thing to manage?"

### A prompt to copy

> We are designing <screen or feature>. List the few concepts a user needs and the questions this surface must answer. Then build three options as live prototypes, using our real components and assets. Take screenshots or videos of each so I can choose, and note anything we could remove.

## Signals and failure points

| What you notice | What it means | What to do |
|---|---|---|
| Users must learn many new terms | The vocabulary wasn't cut | Keep only the concepts people need |
| You chose the first option you saw | The space wasn't explored | Make several options real |
| Options can't be compared | No criterion was stated | Name what the choice must serve |
| Small inconsistencies creep in (wrong variant, uneven spacing) | The bot is eyeballing or working from a picture | Point it at the real file, frame or asset |
| A feature adds work for the user | It fails the removal test | Take it away |

Bots make the versions; you keep the choice. Cut the concepts, make several options real, tune with the real thing, then remove what doesn't help.

## Related pages

- [[wiki/Working with Agents/Plan a piece of work with an agent|Plan a piece of work with an agent]] covers prototyping options in code before planning.
- [[wiki/Working with Agents/Scope a bot like a job description|Scope a bot like a job description]] covers giving each design bot one job.

## Sources

- Grok Bot team, "[Designing Grok Bot for a world of persistent agents](https://x.ai/news/designing-grok-bot)" (official essay). The five concepts, the three questions, the avatar and computer explorations, the reassurance finding, and removal. Paraphrased, one quote.
- A Grok Bot designer, "[Designing Grok Bot with Grok Bot](https://x.ai/bot/guides/designing-grok-bot-with-grok-bot)" (official guide, 2026-08-24). The experiments bot, the motion playground, building one component for a bot to scale, and the tighter loop. Paraphrased, one short quote.
- [Lauren](https://x.com/poteto/status/2097732320606507506), "The Complete Guide to pstack Pt. 2" (X Article). Prompting an agent to prototype options and show them for review. Paraphrased.

## Open questions

How were finished designs tested after launch? The sources give no metrics or results beyond one research finding.

Which bot or tool built which shipped screen? The guide describes exploration, not production.

Is there a design-system or token spec that bots follow? None has been published.
