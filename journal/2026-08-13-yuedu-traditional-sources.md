---
title: "Yuedu: Traditional only, Dcard first"
description: "Yuedu's reading queue is locked to 繁體 reports, Taiwan vernacular first (Dcard + filtered X), a thin CNA/iThome side, and an explicit ban on CCP organs and progressive Taiwan outlets. The 08-12 stub that mixed 澎湃, 紐時中文, and 關鍵評論網 is dead."
type: journal
status: published
created: 2026-08-13
updated: 2026-08-13
tags:
  - grok-bot
  - chinese
  - decision-making
---

# Yuedu: Traditional only, Dcard first

Verdict: Yuedu stays a reading queue, not a partner-pack bot, and the packet is 繁體 end to end. The Chinese he can actually get is Taiwan 口語 from Dcard and filtered X, plus a little 書面語 from CNA and iThome. The 08-12 stub would have fed him 简体 portals and progressive Taiwan outlets. That list is gone.

What flipped the source table is measurement, not taste language. Dcard's unofficial API and board pages returned Cloudflare 403 from this Mac on 2026-08-13 — the bot has to use its browser, and a 403 run is allowed to skip Dcard rather than invent a popular post. Unfiltered `lang:zh` on X was VTuber merch, dating bios, and crypto Simplified. RFA's Mandarin RSS is live and **简体**. UDN's advertised RSS is a 200 with empty item titles. CNA life/tech/finance, iThome, and 天下 RSS returned Traditional titles the same afternoon.

The rejected option is "any decent 中文, convert to 繁體 in the report." That would let 澎湃 and NYT Chinese back in wearing Taiwanese clothes, and it would train the wrong written language. Flip condition: if Dcard stays 403 on the bot's browser for two packets *and* the X vernacular queries stay thin, add one more Taiwan written source (聯合報首頁 browse, not the dead RSS) before inventing a new bot.

Price: the packet will look more like 閒聊／面試／租屋 than a world briefing. Brief already owns exception signal. Mixing them is how Yuedu becomes a second morning digest in harder characters.

Files: `/Users/n1/Research/grok-bot/yuedu-sources.md`, `/Users/n1/Research/grok-bot/YUEDU.md`.
