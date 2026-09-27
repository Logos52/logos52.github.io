---
title: "Prohibition After Diffusion"
type: concept
status: developing
created: 2026-07-26
updated: 2026-09-27
method: outline-2026-09-27
prose-model: fable
written-by: opus
model: grok
source-count: 6
description: "Why banning software after its copies have spread reaches only law-abiding users at home, shown by the 2026 open-model fight and earlier code bans."
tags:
  - ai-policy
  - open-source
  - regulatory-capture
  - economics
  - enforcement
  - red-teaming
---

# Prohibition After Diffusion

Prohibition after diffusion is what happens when a government tries to ban software after copies have already spread. Open-weight AI models, whose files are published for anyone to download, are the current case: anyone who downloaded one can run it offline, so a ban cannot recall it. What a ban can still reach is the domestic companies and developers who would build on the model, while the rest of the world keeps using it.

## Core takeaways

- A published model file cannot be pulled back.
- A late ban reaches only law-abiding users at home.
- The cheapest place to stop copying is before release.
- Labs can check customer identity on their own servers.
- Calling a model stolen puts every model built from it at risk.
- Past bans on code after it spread mostly failed.

## The July 2026 case

In July 2026 the Chinese company Moonshot AI released Kimi K3 as open weights, matching the best American models at about half the price. A White House official said Moonshot had built it partly by distillation from Anthropic's Fable, which means sending a model millions of questions and training your own model on the answers. Axios reported that a ban on Chinese open models was under consideration. Panellists on the All-In podcast, some with money in open-model companies, argued that a ban would fall on American developers and leave the copying untouched.

- Distillation runs through the lab's own paid service.
- Checking ID at sign-up and capping card spending would slow it.
- That check also slows the lab's revenue, so it was not used.
- A US ban leaves every other country on the Chinese models.

## How a late ban plays out

Before release, one company controls the model and can decide who gets it. After release, the file sits on thousands of computers and needs no internet connection to run. A ban then works only on the people who obey it: American companies, American clouds, and American developers who would copy and adapt the model. Their foreign competitors keep using it at a fraction of the cost.

```
before release          after release
one company holds it    thousands of copies
check who queries it    runs offline, no check
stop copying here       ban reaches only
                        law-abiding users at home
```

- An open model is a file.
- A copy hosted in the US lets no data leave.
- Enforcement means telling people not to use a file they own.

Model output is counted in tokens, small pieces of text, and the tokens served from self-hosted models appear on no company's revenue chart. On one public service that routes requests to many models, over half the tokens now go to open models.

## The taint problem

The accusation of theft matters beyond one model. If a model built from another model's outputs is called stolen, every model built from that one is tainted too. Thinking Machines' leading American open model was distilled from an earlier Kimi release, and Cursor trained its Composer 2 coding model further on the same release. About 200 startups signed a letter against calling such models stolen.

- Stealing a lab's weights would be theft.
- Training on a model's outputs is how labs trained on the web.
- The theft label reaches every copy built on it, American ones included.

## Earlier cases

The pattern has run before with code. Each time the rule arrived after the code had spread, and the copies stayed available. The 1998 law banned tools for getting around copy protection. In 2013 the gun files had been downloaded 100,000 times in two days before the order came.

- 1990s: encryption code was an export-controlled weapon while its source circulated.
- 1998: the Digital Millennium Copyright Act banned tools that already existed.
- 1999: a US appeals court treated encryption source code as speech.
- 2000: a court barred posting DVD-decryption code after it had spread.
- 2013: US officials ordered 3D-printed gun files taken down.
- 2026: Nvidia's Jensen Huang said a downloaded, altered model belongs to its holder.

## Related pages

- [[wiki/Concepts/Regulatory Capture via Doom-Marketing|Regulatory Capture via Doom-Marketing]]: who ends up holding the gate; diffusion and enforcement are the other half of the same problem
- [[wiki/Concepts/Riding the AGI|Riding the AGI]]: open-source release economics and the subsidize-the-open-layer strategy; reverse claim on which layer stays scarce
- [[wiki/Concepts/The Price of a Training Corpus|The Price of a Training Corpus]]: reciprocal exposure of an IP-theft framing
- [[wiki/Concepts/The Margin Moves to the Serving Layer|The Margin Moves to the Serving Layer]]: where value goes when the model layer commoditizes; dark tokens as served volume
- [[wiki/Red Team/Applied Critical Thinking - Testing Frames|Applied Critical Thinking - Testing Frames]]: the general detection drill; stop-it-at-the-source is its policy instrument

## Sources

- All-In Podcast, episode 282 (25 July 2026). The live instance, the unused-fix account, the taint mechanism, the dark-token coinage, and the interests on the surface. Interested parties arguing positions they have a financial stake in. Panel numbers are not measurements.
- *Bernstein v. United States*, 176 F.3d 1132 (9th Cir. 1999). Encryption source treated as speech; ITAR/EAR munitions controls while source circulated.
- *Universal City Studios, Inc. v. Reimerdes*, 111 F. Supp. 2d 294 (S.D.N.Y. 2000), aff'd *Universal City Studios, Inc. v. Corley*, 273 F.3d 429 (2d Cir. 2001). DMCA injunction on posting and linking DeCSS after the code had spread.
- Digital Millennium Copyright Act, 17 U.S.C. § 1201 (1998). Anti-circumvention written after the tools existed.
- U.S. Department of State letter to Defense Distributed, May 2013; Andy Greenberg, "State Department Demands Takedown Of 3D-Printable Gun Plans," *Forbes*, 9 May 2013. More than 100,000 downloads in two days; files already on other hosts.
- All-In, All-In Summit interview with Jensen Huang, 14 September 2026. The fork claim applied to kernels, orchestrators and open weights, and the origin of most open-source contribution. First-party captions. Local copy: `/Users/n1/handoff-2026-09-14-to-16.md`; originating packets under `/workspace/recap/` on the collecting machine.
