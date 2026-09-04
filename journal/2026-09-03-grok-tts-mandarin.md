---
title: "Grok TTS is out for Mandarin"
type: journal
status: settled
created: 2026-09-03
updated: 2026-09-03
description: "Grok Text to Speech failed an ear test on Mandarin podcast lines. Production stays on local Chinese TTS (Qwen3-TTS). Catalog A-43. Zero-like. Do not retry this engine for Mandarin."
tags:
  - journal
  - tts
  - grok
  - qwen
  - tsumugu-podcast-gaming
  - decision-making
---

# Grok TTS is out for Mandarin

xAI sells a text-to-speech API called Grok TTS. Tsumugu is a language-learning project with a gaming podcast in Mandarin. Qwen3-TTS is a Chinese speech model on Wedge's Mac. Qwen3-TTS already voices the Tsumugu gaming podcast. Today Wedge listened to Grok TTS on Episode 2 lines in the xAI playground, language `zh`, stock voices, MP3. **Verdict: do not use Grok TTS for Mandarin on the Tsumugu gaming podcast. Keep Qwen3-TTS.**

Wedge, 2026-09-03, verbatim: "no these voices are not that good for Mandarin. maybe it's fine to stick with the Chinese models for mandarin speech. also there's some weird choppiness in the mp3 files. so it's not even that clear even if they voices were good" and "i guess this is a failed experiment."

Episode 2 is a script titled 新手, draft 1. That script has 602 spoken lines and 4,571 Chinese characters. Speakers 阿迪, 星野, and 阮草 still needed a production voice. Speakers 金多恩, 白龍, and 沈文 already have locked Qwen identities he is happy with. Before Wedge opened the playground, 金多恩, 白龍, and 沈文 were going to stay on Qwen3-TTS. Grok TTS was only in the running for 阿迪, 星野, and 阮草.

Grok TTS was tested as a different engine, not as another Qwen voice recipe. Official price is $15 per million characters, about $0.07 for one clean pass of episode 2. The xAI team on this Mac has no API credits. He listened in the playground with no key. The paste lines are at `/Users/n1/Projects/tan/library/voice-bakeoff/grok-tts-trial/EP2-PLAYGROUND-SAMPLE.txt`.

Grok TTS ships five original stock voices: Eve, Ara, Rex, Sal, and Leo. Eve and Ara are women. Rex, Sal, and Leo are men. Those five voices are enough people for 阿迪, 星野, and 阮草 if the Mandarin had been good. The playground voice list also has twenty-one later flagship voices. The ruling killed Grok TTS before those later voices could matter.

The Grok voices are not good enough for Mandarin. A later change of file format cannot make those voices good at Mandarin.

The playground MP3 files also chop. He said the files are not clear even if the voices had been good.

He heard both problems on one playground pass. Either problem is enough to keep Qwen3-TTS.

Grok TTS is cheap. It bills per character. It has inline speech tags for pause, laugh, loud, and whisper. Wedge's Mac already uses Grok for chat, image, and video. Grok TTS could have voiced 阿迪, 星野, and 阮草. Qwen3-TTS would have kept 金多恩, 白龍, and 沈文. That mix would have been a small cut, not a recast.

A later Grok TTS generation might speak Taiwan Mandarin as well as Qwen3-TTS. A WAV or PCM download of that generation might not chop. If both of those are true, listen again in the playground the same way, on that later generation. Do not rerun this generation. Do not rerun the playground MP3 path.

Qwen3-TTS stays free and local. The identity locks already paid for 金多恩, 白龍, and 沈文 remain the production voices. 阿迪 and 星野 still have open Qwen bakeoff work. That work stays on Qwen3-TTS. It is not a Grok retry.

In July 2026 a podcast handoff banned metered APIs. Today's listen asked whether metered APIs should stay banned for Grok TTS. They should, for Mandarin.

Today's listen is catalogued as A-43 in `/Users/n1/Projects/tan/library/voice-bakeoff/ATTEMPT-CATALOG.md`. Tag: ZERO-LIKE. He liked none of the Grok voices he heard. The catalog rule for that tag: do not retry Grok TTS for Mandarin.

**Decided:** Mandarin speech on the Tsumugu gaming podcast stays on Chinese local models. Qwen3-TTS is the live engine. Grok TTS is out for Mandarin podcast voicing.

**Outstanding:** 阿迪 identity and 星野 energy on Qwen3-TTS, unchanged by today.

**Next move:** do not open the Grok TTS playground for another Mandarin pass. Resume Qwen3-TTS when 阿迪 or 星野 is the work.
