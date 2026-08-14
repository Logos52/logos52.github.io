---
title: "Prohibition After Diffusion"
type: concept
status: developing
created: 2026-07-26
updated: 2026-08-14
written-by: grok
model: grok
source-count: 5
description: "A ban that arrives after the file is already on other machines does not take the file back. It binds the people who can be audited."
tags:
  - ai-policy
  - open-source
  - regulatory-capture
  - economics
  - enforcement
  - red-teaming
---

# Prohibition After Diffusion

On 25 July 2026 a prediction market priced a 2026 US ban on open-weight models already in the wild at 45%. A ban that arrives after the file is already on other machines does not take the file back. It binds the people who can be audited.

## Stop it at the source

The live instance that week was an open-weight release from a foreign lab, an administration figure asserting that the release had been distilled off a frontier American model, and reporting that a ban on Chinese open-source models was under consideration. This page does not adjudicate that accusation. It asks what a prohibition can reach once copies exist.

Distillation, here, is training a model on another model's answers until much of its behavior has been cloned. That act happens at the point of serving, on the accused lab's own infrastructure. A remedy pointed at downloaders, at hubs, at American startups that later post-train the result, is doing something other than stopping the cloning. Weight-theft is a different act and wants a different remedy. Training-on-outputs is the one the panel was talking about, and it happens where the tokens are served.

If industrial-scale distillation is a national-security threat, the party best positioned to stop it is the one serving the tokens. That is a procedure, not a motive test: name the party who can physically stop the harm, then check whether the proposed rule reaches that party. [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking - Testing Frames]] owns the general drill of who benefits if a frame becomes default; stop-it-at-the-source is the policy instrument of that drill.

Restricting American access to Chinese models is not interchangeable with restricting Chinese access to American models. Accounts bought in Manila or India and run through US IP addresses defeat nationality-keyed rules. The two restrictions can be pursued together. They are not substitutes, and treating them as substitutes is how the diagnostic gets abused as motive-detection.

No rule written afterward recovers a distillation already performed. A model cannot be un-trained by banning the teacher after the fact.

The unused cheap fix, on the panel's account, is identity at signup with a payment instrument bound to the account. That would not solve distillation "on its face." Stolen and synthetic identities, corporate accounts, and transcripts already taken remain. What the unused fix does show is a revealed preference. A complainant who leaves an available self-funded remedy unpursued while pushing the one that binds competitors has repriced its own stated harm. The inference is easy to abuse. "Any complainant who has not exhausted self-help is lying" is false often enough. Both halves stay: the unused cheap fix reprices the stated motive, and the inference is not a lie detector.

Bulk signup — students elsewhere, accounts sold on, used through US IPs — is how industrial accounts are obtained, on the same unsourced account. Plausible as a pattern. Not evidenced here. The growth cost of KYC is the reason given for its absence. A few points of a frontier lab's reported gross margin would cover the work, on that same account. The margin figure is a panel number, not a measurement on this page.

## After the download

Open weights are a model that can be downloaded and run without calling the publisher. Once the code is on a machine it runs with no connection back and no dependency on the publisher. Enforcement that wants to reach that copy has to move from distribution to possession and use. The panel called that move near-precedentless and ugly. The file-runs-offline half is ordinary. The "near-precedentless" half is the boast the case-against takes apart.

Taint travels downstream. Declaring an upstream weight tainted reaches every derivative trained or post-trained on it. The episode offered two provenance stories for that mechanism — a best American open model distilled off an earlier Chinese open release, a coding agent shipped by post-training the same weights. Both were unsourced, from the person arguing hardest against the ban. The mechanism survives. The two names do not ship as facts.

Nearly two hundred startups urged the president not to ban Chinese models, on reporting the episode cites. The IP-theft framing is being asserted rather than adjudicated.

Self-hosted open-weight inference needs servers and energy and produces no invoice. Dark tokens are that inference: work that never appears on a lab's revenue series because it runs on someone else's hardware. Lab revenue and token-growth charts measure the paid channel. "It is not in the data yet" inherits a blind spot. There is no public measurement of the dark-token share. An interested-party anecdote that startups are moving off frontier onto local open weights is evidence that something is happening, not of how much. [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]] owns where value goes when the model layer commoditizes, and dark tokens as served volume that never shows up as billed volume.

An ordinary company told it may buy AI from two approved American sellers, at a large multiple of what every foreign competitor pays, gets rerated for an irrational cost structure. The propped seller gets rerated too. The size of that multiple was stated four different ways in ten minutes inside the same episode, plus a fifth figure in the opening that contradicted the other four. None of those magnitudes travel. The directional claim does: an approved-seller regime prices the domestic buyer above foreign competitors. The one sourced number in the room ran the other way. Published cost analysis, cited on air by the same person arguing against the ban, found the named open model not that much cheaper to run, and disputed capability parity as resting on one test.

## What a ban after diffusion actually does

A prohibition after diffusion does not stop the artifact. It relocates cost onto those who obey, reaches backwards into derivative work, hands the accused a reason to keep not doing the cheap thing, and hides the substitution inside an unbilled channel. What it reaches is the compliant layer.

That is smaller than "a ban does nothing." The foreign lab keeps publishing. The rest of the world keeps downloading. The rule lands on domestic firms with auditors, procurement, and counsel. Cost bases move. Derivative work already built on the banned weights is newly exposed. The accused, watching the unused cheap fix stay unused, has less reason to adopt it. Substitution that would have shown up as a cancelled invoice shows up as nothing.

## Boundaries and tests

This describes what a prohibition can reach after copies exist. It says nothing about whether the accusation is true or the conduct wrongful. Taking model outputs and learning from them is one claim, with its own evidence. Stealing the weights themselves is another. [[wiki/Concepts/The Price of a Training Corpus|The Price of a Training Corpus]] owns the reciprocal exposure of an IP-theft framing.

Two live chokepoints the panel concedes, so the page is not "nothing is enforceable": terms-of-service enforcement at the point of inference, and copyright action through due process. Those reach the serving layer and the copier who can be found. They do not reach a file already running offline on a machine nobody will search.

The tests below expire 2026-12-31. Until then they are tests, not a retrospective.

| Test | What would confirm the mechanism | What would falsify it |
|---|---|---|
| Where enforcement lands, if a ban ships | Hosting, hubs, distribution, procurement, employment — the compliant layer | Possession and use of an already-held file |
| KYC plus a bound card at frontier labs by the expiry | — | Would falsify the growth-over-enforcement reading of the unused cheap fix |
| Taint that bites American derivatives by the same date | Derivative exposure is what the rule actually reaches | — |
| Approved-seller price gap | — | A gap under 10× against the 25–100× claim made on air. The 10× is this page's own bar, not a field standard. The 25–100× is the claim under test, not a number this page asserts |

## Case against

"I don't think we have a lot of great precedent" was asserted on air by a non-lawyer and carried twice. As a legal claim it is false.

Strong cryptography was regulated as a munition under US export law while the source circulated. Injunctions issued against posting and linking a DVD descrambler after the code had already spread globally. Anti-circumvention was written into statute after the tools existed. Printable-gun files were taken down after more than a hundred thousand downloads in two days, and the files were already on other hosts. None of those actions recalled a copy. Each moved hosting, distribution, procurement, and employment — the compliant layer.

Whether binding that layer counts as failure turns on how much of the capability anyone cares about actually flows through parties who can be found. A ban that relocates cost onto the addressable fraction is doing something, even if every already-copied file keeps running. A ban that is scored as success only if the file disappears has defined success as the one thing these actions have never done.

Restricting Chinese access to American models and restricting American use of Chinese open weights are not mutually exclusive. A party can pursue the unused cheap fix *and* a regulatory remedy without either being a lie. That is the strongest objection to using stop-it-at-the-source as a motive detector. The procedure still earns its keep as a procedure: name who can physically stop the harm, then notice where the proposed rule actually lands.

Escalation — a response from the other state — was raised and answered in under a minute with no estimate. Distillation was called evidence-free when it threatened open source and taken at face value for the negligence charge. That is weight on the panel, not a new claim about the world.

Interests sit on the surface. The most active advocate was the first administration official to talk publicly about distillation and a co-author of a "winning the AI race" report. The commoditization case runs through a host whose company sells enterprise open-source implementation. Everyone in the room is talking their books. [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]] owns who ends up holding the gate; this page is the diffusion and enforcement half of the same problem.

[[wiki/Concepts/Riding the AGI|Riding the AGI]] owns open-source release economics and the strategy of subsidizing the open layer. The two pages do not have to agree about which layer stays scarce.

A ban after diffusion still does not take the file back. It still binds the people who can be audited. Whether that is failure depends on the fraction of the capability that still flows through parties who can be found.

## Related

- [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]] — who ends up holding the gate; this page is the diffusion and enforcement half
- [[wiki/Concepts/Riding the AGI|Riding the AGI]] — open-source release economics and the subsidize-the-open-layer strategy; reverse claim on which layer stays scarce
- [[wiki/Concepts/The Price of a Training Corpus|The Price of a Training Corpus]] — reciprocal exposure of an IP-theft framing
- [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]] — where value goes when the model layer commoditizes; dark tokens as served volume
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking - Testing Frames]] — the general detection drill; stop-it-at-the-source is its policy instrument

## Open Questions

- What fraction of the capability anyone cares about still flows through parties who can be found, if a ban ships.
- Whether KYC plus a bound card appears at frontier labs before the 2026-12-31 test expires.
- How large the approved-seller gap actually is, against a bar of 10×, once numbers that can be sourced replace the four unsourced multiples.

## Sources

- All-In Podcast, episode 282 (25 July 2026). The live instance, the unused-fix account, the taint mechanism, the dark-token coinage, and the interests on the surface. Interested parties talking their books. Panel numbers are not measurements.
- *Bernstein v. United States*, 176 F.3d 1132 (9th Cir. 1999). Encryption source treated as speech; ITAR/EAR munitions controls while source circulated.
- *Universal City Studios, Inc. v. Reimerdes*, 111 F. Supp. 2d 294 (S.D.N.Y. 2000), aff'd *Universal City Studios, Inc. v. Corley*, 273 F.3d 429 (2d Cir. 2001). DMCA injunction on posting and linking DeCSS after the code had spread.
- Digital Millennium Copyright Act, 17 U.S.C. § 1201 (1998). Anti-circumvention written after the tools existed.
- U.S. Department of State letter to Defense Distributed, May 2013; Andy Greenberg, "State Department Demands Takedown Of 3D-Printable Gun Plans," *Forbes*, 9 May 2013. More than 100,000 downloads in two days; files already on other hosts.
