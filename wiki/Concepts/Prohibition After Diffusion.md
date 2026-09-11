---
title: "Prohibition After Diffusion"
type: concept
status: developing
created: 2026-07-26
updated: 2026-09-11
method: plain-rewrite-2026-09-11
prose-model: fable
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

A prohibition after diffusion is a ban that arrives after the file is already on other machines. Such a ban does not take the file back. It binds the people who can be audited: firms with auditors, procurement, and counsel.

On 25 July 2026 a prediction market priced a 2026 US ban on open-weight models already in the wild at 45%.

## Core takeaways

- A ban issued after a model's weights have been copied removes no copy. It falls on the firms that comply.
- Distillation is training a model on another model's answers. The answers are collected where they are served, so the party serving the tokens is the party that can stop it.
- The lab whose outputs were copied has an available, self-funded fix: identity at signup with a payment instrument bound to the account. It has not adopted it. That lowers the weight of the stated harm without proving the complaint is false.
- Self-hosted open-weight inference produces no invoice. Revenue and token-growth charts cannot show it, so "it is not in the data yet" is not evidence that it is absent.
- There is precedent. Cryptography, a DVD descrambler, anti-circumvention tools, and printable-gun files were all regulated after they had spread. None of those actions recalled a copy.
- Whether binding the compliant layer counts as failure depends on how much of the capability anyone cares about flows through parties who can be found.

## Where the copying happens

The live instance that week, discussed by a podcast panel on 25 July 2026, was an open-weight release from a foreign lab. An administration figure asserted that the release had been distilled off a frontier American model. Reporting said a ban on Chinese open-source models was under consideration. Whether that accusation is true is a separate question. The question that follows is what a prohibition can reach once copies exist.

Distillation, here, is training a model on another model's answers until much of its behavior has been cloned. The answers are collected at the point of serving, on the serving lab's own infrastructure. A remedy pointed at downloaders, at hubs, or at American startups that later post-train the result does not stop the cloning. Weight theft is a different act and needs a different remedy. Training on outputs is the act the panel was discussing, and it happens where the tokens are served.

If industrial-scale distillation is a national-security threat, the party best positioned to stop it is the one serving the tokens. That is a procedure, not a test of motive. Name the party who can physically stop the harm, then check whether the proposed rule reaches that party. [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking - Testing Frames]] describes the general drill: ask who benefits if a frame becomes the default. Stop-it-at-the-source is the policy form of that drill.

Restricting American access to Chinese models is a different rule from restricting Chinese access to American models. Nationality-keyed rules fail when accounts are bought in Manila or India and run through US IP addresses. The two restrictions can be pursued together. Treating one as a substitute for the other is how the stop-at-the-source procedure gets misused as a test of motive.

No rule written afterward recovers a distillation already performed. A model cannot be un-trained by banning the teacher after the fact.

## The cheap fix that was not used

On the panel's account, the unused cheap fix is identity at signup with a payment instrument bound to the account. That would not solve distillation on its face. Stolen and synthetic identities, corporate accounts, and transcripts already taken would remain. What the unused fix shows is a revealed preference. A complainant that leaves an available self-funded remedy unused, while pushing for the remedy that binds competitors, has shown by that choice that it values the stated harm at less than the cost of the fix. This inference is easy to misuse. The claim "any complainant who has not exhausted self-help is lying" is false often enough to reject. Two things hold at once. The unused cheap fix lowers the weight of the stated motive. The inference does not prove the complainant is lying.

In the same unsourced panel statement, bulk signup is how industrial accounts are obtained: students elsewhere, accounts sold on, used through US IPs. That pattern is plausible. No evidence for it was given. The reason given for the absence of KYC is its cost to growth. A few points of a frontier lab's reported gross margin would cover the work, in the same statement. The margin figure comes from the panel and has not been measured.

## What a file does after it is downloaded

Open weights are a model that can be downloaded and run without calling the publisher. Once the file is on a machine, it runs with no connection back and no dependency on the publisher. Enforcement that wants to reach that copy has to move from regulating distribution to regulating possession and use. The panel called that move near-precedentless and ugly. That a file runs offline is ordinary. The claim that there is little precedent is false: cryptography, a DVD descrambler, anti-circumvention tools, and printable-gun files were all regulated after they had spread.

Call a banned upstream weight tainted. Declaring an upstream weight tainted reaches every derivative trained or post-trained on it. Two examples of that chain were given on the panel: a best American open model distilled off an earlier Chinese open release, and a coding agent shipped by post-training the same weights. Both examples were unsourced and came from the person arguing hardest against the ban. The mechanism holds without them. The two examples are unverified.

Nearly two hundred startups urged the president not to ban Chinese models. The IP-theft framing is being asserted and has not been adjudicated.

## Work that never gets billed

Self-hosted open-weight inference needs servers and energy and produces no invoice. The panel's term for that inference is dark tokens: work that never appears on a lab's revenue series because it runs on someone else's hardware. Lab revenue and token-growth charts measure the paid channel only. Anyone who says "it is not in the data yet" is reading data that cannot contain dark tokens. There is no public measurement of the dark-token share. An interested party's anecdote that startups are moving off frontier models onto local open weights shows that some movement is happening. It gives no measure of the amount. [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]] covers where value goes when the model layer commoditizes, and dark tokens as served volume that never shows up as billed volume.

## What an approved-seller rule does to prices

Suppose an ordinary company is told it may buy AI only from two approved American sellers, at a large multiple of what every foreign competitor pays. Investors then value that company lower, because its cost structure is higher than its competitors' for no business reason. Investors also revalue the approved seller. The size of that multiple was stated four different ways in ten minutes inside the same episode, plus a fifth figure in the opening that contradicted the other four. None of those five magnitudes is usable. The direction is usable: an approved-seller regime makes the domestic buyer pay more than foreign competitors. The one sourced number in the episode pointed the other way. A published cost analysis, cited on air by the same person arguing against the ban, found the named open model not that much cheaper to run, and disputed capability parity because the parity claim rested on one test.

## What the ban reaches

A prohibition after diffusion does not stop the artifact. It moves cost onto the firms that comply. It reaches backward into derivative work already built on the banned weights. It gives the complainant lab one more reason to leave the cheap fix unused. It pushes the substitution into a channel that produces no bill. What it reaches is the compliant layer.

That is a narrower claim than "a ban does nothing." The foreign lab keeps publishing. The rest of the world keeps downloading. The rule lands on domestic firms with auditors, procurement, and counsel. Their cost bases move. Derivative work already built on the banned weights becomes newly exposed. The complainant lab, which has left the cheap fix unused, has less reason to adopt it. Substitution from paid APIs to self-hosted weights shows up in no revenue series, because self-hosted inference is not billed.

## What stays enforceable

The mechanism concerns what a prohibition can reach after copies exist. It does not settle whether the accusation is true or whether the conduct was wrongful. Taking a model's outputs and learning from them is one claim with its own evidence. Stealing the weights themselves is a separate claim. [[wiki/Concepts/The Price of a Training Corpus|The Price of a Training Corpus]] covers the reciprocal exposure of an IP-theft framing.

Two chokepoints remain enforceable, and the panel conceded both: terms-of-service enforcement at the point of inference, and copyright action through due process. Those reach the serving layer and any copier who can be found. They do not reach a file already running offline on a machine nobody will search.

## Four tests that expire at the end of 2026

The tests expire on 2026-12-31. Until that date none of them has a result.

1. Where enforcement lands, if a ban ships. The mechanism is confirmed if enforcement lands on hosting, hubs, distribution, procurement, and employment, the compliant layer. It is falsified if enforcement reaches possession and use of an already-held file.
2. KYC plus a bound card at frontier labs by the expiry date. If that appears, it falsifies the reading that the lab chose growth over enforcement when it left the cheap fix unused. No confirming outcome is listed.
3. Taint that reaches American derivatives by the same date. If that happens, it confirms that derivative exposure is what the rule actually reaches. No falsifying outcome is listed.
4. The approved-seller price gap. A gap under 10×, against the 25–100× claim made on air, would falsify the mechanism. The 10× bar was chosen for this test and is not a field standard. The 25–100× figure is the on-air claim under test and is not a measurement.

## Earlier bans on files that had already spread

"I don't think we have a lot of great precedent" was said on air by a non-lawyer and repeated twice. As a legal claim it is false.

Strong cryptography was regulated as a munition under US export law while the source code circulated. Courts issued injunctions against posting and linking a DVD descrambler after the code had already spread globally. Anti-circumvention was written into statute after the tools existed. Printable-gun files were taken down after more than a hundred thousand downloads in two days, and the files were already on other hosts. None of those actions recalled a copy. Each moved hosting, distribution, procurement, and employment, the compliant layer.

## Whether binding the compliant layer is failure

Whether binding that layer counts as failure depends on how much of the capability anyone cares about flows through parties who can be found. A ban that moves cost onto that addressable fraction is doing something, even though every already-copied file keeps running. If success is defined as the file disappearing, none of the four earlier actions succeeded, since none recalled a copy.

Restricting Chinese access to American models and restricting American use of Chinese open weights can both be pursued. A party can pursue the unused cheap fix and a regulatory remedy at the same time without lying about either. That is the strongest objection to using stop-it-at-the-source as a test of motive. The procedure remains useful as a procedure: name who can physically stop the harm, then check where the proposed rule actually lands.

Escalation, meaning a response from the other state, was raised on the panel and answered in under a minute with no estimate. The panel called the distillation charge evidence-free when it was used to justify a ban on open source. The same panel accepted the charge without evidence when it was used to say the complainant lab was negligent for leaving the cheap fix unused. That inconsistency is a fact about the panel's reasoning. It adds nothing about the world.

A ban after diffusion does not take the file back. It binds the people who can be audited. Whether that is failure depends on the fraction of the capability that still flows through parties who can be found.

## Who was speaking and what they sell

The speakers' interests are public. The most active advocate of the ban was the first administration official to talk publicly about distillation and a co-author of a "winning the AI race" report. The commoditization case was made by a host whose company sells enterprise open-source implementation. Each speaker has a financial interest in the position they argued. [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]] covers who ends up holding the gate. Diffusion and enforcement are the other half of that same problem.

[[wiki/Concepts/Riding the AGI|Riding the AGI]] covers open-source release economics and the strategy of subsidizing the open layer, and takes the reverse position on which layer stays scarce.

## How to practice this

1. Take one proposed rule you have read about. Name the party who can physically stop the harm. Check whether the rule reaches that party. Notice if the rule lands instead on downloaders, hubs, or firms that post-train the result.
2. When a complainant asks for a rule that binds competitors, look for a cheaper fix the complainant could fund alone. Check whether that fix is in use. An unused fix lowers the weight of the stated harm. Notice that it does not prove the complainant is lying.
3. When a revenue or token-growth chart is used to say open models are not being adopted, ask what it measures. Notice that self-hosted inference produces no invoice and cannot appear in that chart.
4. When someone says a ban on an already-spread file has no precedent, check four earlier actions. Those are export controls on cryptography, the DeCSS injunction, the anti-circumvention statute, and the printable-gun takedown. Notice that each moved hosting, distribution, procurement, and employment. Notice that none recalled a copy.
5. When a number is given on air, count how many ways it is stated. The approved-seller multiple was stated four ways in ten minutes, plus a fifth in the opening. Notice that a number stated five ways is not a measurement.
6. For each speaker in a debate, write down what they sell. Notice whether the advocate for a ban has a public position tied to it. Notice whether the speaker arguing that models commoditize sells open-source implementation.

## Related pages

- [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]]: who ends up holding the gate; diffusion and enforcement are the other half of the same problem
- [[wiki/Concepts/Riding the AGI|Riding the AGI]]: open-source release economics and the subsidize-the-open-layer strategy; reverse claim on which layer stays scarce
- [[wiki/Concepts/The Price of a Training Corpus|The Price of a Training Corpus]]: reciprocal exposure of an IP-theft framing
- [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]]: where value goes when the model layer commoditizes; dark tokens as served volume
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking - Testing Frames]]: the general detection drill; stop-it-at-the-source is its policy instrument

## Open questions

- What fraction of the capability anyone cares about still flows through parties who can be found, if a ban ships.
- Whether KYC plus a bound card appears at frontier labs before the 2026-12-31 test expires.
- How large the approved-seller gap actually is, against a bar of 10×, once numbers that can be sourced replace the four unsourced multiples.

## Sources

- All-In Podcast, episode 282 (25 July 2026). The live instance, the unused-fix account, the taint mechanism, the dark-token coinage, and the interests on the surface. Interested parties arguing positions they have a financial stake in. Panel numbers are not measurements.
- *Bernstein v. United States*, 176 F.3d 1132 (9th Cir. 1999). Encryption source treated as speech; ITAR/EAR munitions controls while source circulated.
- *Universal City Studios, Inc. v. Reimerdes*, 111 F. Supp. 2d 294 (S.D.N.Y. 2000), aff'd *Universal City Studios, Inc. v. Corley*, 273 F.3d 429 (2d Cir. 2001). DMCA injunction on posting and linking DeCSS after the code had spread.
- Digital Millennium Copyright Act, 17 U.S.C. § 1201 (1998). Anti-circumvention written after the tools existed.
- U.S. Department of State letter to Defense Distributed, May 2013; Andy Greenberg, "State Department Demands Takedown Of 3D-Printable Gun Plans," *Forbes*, 9 May 2013. More than 100,000 downloads in two days; files already on other hosts.
