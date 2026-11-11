---
title: "Keep logins, cards and secrets safe on a bot's computer"
type: concept
status: seed
created: 2026-11-11
updated: 2026-11-11
method: fresh-from-notes-2026-11-11
description: "The vault fills passwords and cards without the model seeing them, but every bot on an account shares one computer and one vault, secrets typed into the shell or files can leak, and a saved card pays without asking."
tags:
  - agents
  - grok-bot
  - security
wedge_reviewed: false
---

# Keep logins, cards and secrets safe on a bot's computer

> Not yet reviewed by Wedge.

Grok Bot's vault lets a bot sign in and pay without the model ever seeing the password, card number or security code, because the app fills those values straight into the page. The protection has edges, though. Every bot on an account shares one computer and one vault, so a login or file saved for one bot is open to all of them. Secrets pasted into chat, typed into a shell or saved in a file on the computer get no such protection. One team found two of its saved secrets printed in plain text after a bot listed the computer's environment. A card saved in the vault also pays at checkout with no approval step, so anyone who wants to approve each payment should leave the card unsaved. Approval rules make a bot stop and ask before risky actions, though they work as a review step and lock nothing. The simplest safeguard is not to connect an account the bots do not need.

## What the vault hides

The vault holds three kinds of item. A login is a website, a username and a password. A card holds the number, expiry date, security code, name and billing address. Contact info covers names, addresses, phone numbers and emails used for shipping and billing. The model never sees a stored password, card number or security code. A bot can see the contact info and which logins exist, so it can pick the right entry.

To sign in, a bot tries a vault login first, then a password manager the owner has connected, such as 1Password, and only then asks the owner through a secure form in the chat. Values from the vault and from the form go straight into the page. When a bot signs up for a new site and picks the password, the vault generates and saves it, so the bot never sees that one either. Saved values are write-only for people too. The app shows only the last four digits of a card and never shows a saved password or secret again, which means a blank field does not prove the secret is gone.

<figure>
<svg viewBox="0 0 520 278" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="sec-vault-t">
<title id="sec-vault-t">The model never sees a stored password, card number or security code.</title>
<rect x="0.5" y="0.5" width="519" height="277" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="232" height="88" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="136" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">The model never sees</text><text x="136" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">a stored password,</text><text x="136" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">card number or security code</text>
<rect x="268" y="20" width="232" height="88" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="384" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">A bot can see</text><text x="384" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">the contact info and</text><text x="384" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">which logins exist</text>
<text x="20" y="138" style="fill:var(--qp-mut);font-size:12px">To sign in</text>
<rect x="20" y="148" width="144" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="92" y="178" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">a vault login</text>
<rect x="188" y="148" width="144" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="178" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">a password manager</text><text x="260" y="198" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the owner has connected</text><text x="260" y="216" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">such as 1Password</text>
<rect x="356" y="148" width="144" height="86" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="428" y="178" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">asks the owner</text><text x="428" y="198" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">through a secure form</text>
<path d="M167,191 L176,191" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="185,191 176.0,196.0 176.0,186.0" style="fill:var(--qp-mut)"/>
<path d="M335,191 L344,191" style="fill:none;stroke:var(--qp-rule2);stroke-width:1.25"/><polygon points="353,191 344.0,196.0 344.0,186.0" style="fill:var(--qp-mut)"/>
<text x="260" y="260" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">go straight into the page</text>
</svg>
</figure>

Some steps a form cannot do, for example single sign-on, a passkey, a CAPTCHA the bot could not pass, a QR code or a bank's card check. The bot hands the computer to its owner for that one step. Afterwards the computer keeps that signed-in session for later tasks, and every one of the owner's bots can use it.

## Every bot shares one computer

Each user gets a separate virtual machine, so one user cannot reach another user's computer. Inside one account, though, every bot shares that single computer, and the security guidance says to treat any login or file on it as available to every bot the user runs. The vault works the same way, covering the whole account with no way to limit an item to one bot. A workload that needs its own computer and its own set of credentials needs its own user account.

Bots have no identity of their own, so a bot can never hold more access than the person signed in. Blocking a connected app still leaves that service's website open to the bot's browser, because app blocking and network blocking are separate controls. Closing the website path needs a network policy that only the enterprise plan offers.

## How secrets leak

Secrets leak through the ordinary computer, outside the vault. One team running many bots found that a bot had listed the computer's environment variables during routine testing, and two saved secrets showed up unmasked in a tool output file. The team deleted the file and replaced both secrets with new ones. Their first fix wrapped the commands that print the environment so they hid values, but other forum users showed several ways around it. Bot shells that run without an interactive session never loaded the wrapper at all. The safer fix was to take each secret out of the environment every command sees and keep it in a locked file readable only by the script that uses it.

The official guidance draws the same line. Passwords, one-time codes and API keys should never be pasted into chat, typed into a shell command or saved in a file on the computer. They also stay out of any recorded demonstration that teaches a bot a task. Keys belong in the secure secret card, which masks the field and never writes the value into the chat. Computer updates and resets also wipe installed apps and packages, so a secret kept in a file or shell profile can vanish with them.

<figure>
<svg viewBox="0 0 520 148" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="sec-leak-t">
<title id="sec-leak-t">Passwords, one-time codes and API keys should never be pasted into chat, typed into a shell command or saved in a file on the computer.</title>
<rect x="0.5" y="0.5" width="519" height="147" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="232" height="108" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="136" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:13px">Keys belong in</text><text x="136" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">the secure secret card</text><text x="136" y="88" text-anchor="middle" style="fill:var(--qp-mut);font-size:12px">masks the field</text>
<rect x="268" y="20" width="232" height="108" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="384" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">should never be pasted into chat,</text><text x="384" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">typed into a shell command</text><text x="384" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">or saved in a file</text><text x="384" y="110" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">on the computer</text>
</svg>
</figure>

The vault's own guarantees have had reported gaps. In early October a forum user reported that a password filled through the secure form showed up unmasked in a browser snapshot and in the chat transcript. The suggested workaround was to type such a password by hand during a takeover. In a separate case, a video reported that a chief executive's bot had posted his personal bank statement into a company chat.

## Which approvals to keep

A saved card fills in at checkout without asking, and no setting requires approval for each use. To approve every payment, leave the card out of the vault. When a bot asks for a card through a secure form, leaving the save option unticked keeps the card to that one chat. With Link connected, a bot can instead request a single-use card for one purchase. The request lists the merchant, the items and the total, and no charge goes through if the owner declines or the request expires.

<figure>
<svg viewBox="0 0 520 148" width="100%" style="max-width:520px;--qp-surface:light-dark(#ffffff,#1a1a1a);--qp-ink:light-dark(#090909,#f2f2f2);--qp-mut:light-dark(#6b6b6b,#a3a3a3);--qp-rule:light-dark(#ededed,#262626);--qp-rule2:light-dark(#dedede,#333333);--qp-accent:light-dark(#1a7fe6,#5aa9f5);font-family:Inter,system-ui,sans-serif" role="img" aria-labelledby="sec-pay-t">
<title id="sec-pay-t">A saved card fills in at checkout without asking, and no setting requires approval for each use.</title>
<rect x="0.5" y="0.5" width="519" height="147" rx="16" style="fill:var(--qp-surface);stroke:var(--qp-rule);stroke-width:1"/>
<rect x="20" y="20" width="152" height="108" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="96" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">A saved card</text><text x="96" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">fills in at checkout</text><text x="96" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">without asking</text>
<rect x="184" y="20" width="152" height="108" rx="20" style="fill:none;stroke:var(--qp-rule2);stroke-width:1"/><text x="260" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">leaving the save</text><text x="260" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">option unticked</text><text x="260" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">keeps the card to</text><text x="260" y="110" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">that one chat</text>
<rect x="348" y="20" width="152" height="108" rx="20" style="fill:none;stroke:var(--qp-accent);stroke-width:1.25"/><text x="424" y="50" text-anchor="middle" style="fill:var(--qp-ink);font-size:14px;font-weight:600">a single-use card</text><text x="424" y="70" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">for one purchase</text><text x="424" y="90" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">lists the merchant,</text><text x="424" y="110" text-anchor="middle" style="fill:var(--qp-ink);font-size:12px">the items and the total</text>
</svg>
</figure>

Approval rules cover the actions around payments. An Ask first rule makes a bot stop and show an approval card before matching shell commands, app calls, computer use or launches of other agents. Those rules do not review memory writes or most settings changes, and each list holds at most 20 rules of up to 1,000 characters each. There is also no way to lock files on the shared computer. Any bot can edit a safety script that other bots rely on. Staff suggested one Ask first rule naming those files as the closest brake and said plainly that it is a review step, with no lock behind it. Not connecting an account at all is the first line of defence.

## Open questions

How should a fleet split work across user accounts when bots need different credentials?

What would protected files on a shared bot computer need to stop a bot from editing them?

## Sources

- Official Grok Bot docs, ["Vault and secure sign-in"](https://docs.x.ai/grok-bot/vault), last updated 28 October 2026. What the vault holds, sign-in order, write-only values, handovers, secrets, card payments and Link. Paraphrased.
- Official Grok Bot docs, ["Grok Bot security FAQ"](https://docs.x.ai/grok-bot/security-faq), 9 November 2026. Isolation, shared computer, bot identity, app versus website blocking, Auto Review scope. Paraphrased.
- Cursor forum, ["Feature request: mask secret values in bot shell output"](https://forum.cursor.com/t/feature-request-mask-secret-values-in-bot-shell-output/175384), 20 October 2026. The environment-listing leak and the locked-file fix.
- Cursor forum, ["Grok Bot: protected files on the shared bot computer"](https://forum.cursor.com/t/grok-bot-protected-files-on-the-shared-bot-computer-read-only-to-bots-unless-approved/175765) and ["raise the 20-rule limit on Auto-review custom rules"](https://forum.cursor.com/t/grok-bot-raise-the-20-rule-limit-on-auto-review-custom-rules/175770), staff replies of 22 October 2026.
- Cursor forum, ["browser snapshot shows a password filled by the Secure Form in plain text"](https://forum.cursor.com/t/grok-bot-browser-snapshot-shows-a-password-filled-by-the-secure-form-requestuserform-in-plain-text/173748), 7 October 2026.
- Akshat Bahety, ["A CEO Says His AI Agent Leaked His Bank Balances. Could Yours?"](https://www.youtube.com/watch?v=lr4IeFF68rU), YouTube, 27 October 2026. The bank statement case and the order of defences, connect less, then rules, then the vault. Paraphrased.

## Related pages

- [[wiki/Systems/AI & Agentic Systems/Using Grok Bot|Using Grok Bot]]
- [[wiki/Systems/AI & Agentic Systems/Grok Bot Primer|Grok Bot Primer]]
- [[wiki/Working with Agents/Organize a fleet of bots|Organize a fleet of bots]]
