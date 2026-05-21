---
title: "XプレミアムプランでGrokとx_searchツールを使う"
source: "https://zenn.dev/robustonian/articles/x_premium_grok_search"
author:
published: 2026-05-17
created: 2026-05-18
description:
tags:
  - "clippings"
---
51

21

## Introduction

This morning, I saw a post saying that X premium plan users can now use X search via hermes-agent.

<iframe src="https://embed.zenn.studio/tweet#zenn-embedded__bc965e52021f" frameborder="0" height="710"></iframe>

I was curious, so I looked it up and found a lot of confusing information about whether I needed a SuperGrok contract, X Premium+, or even Premium.

As a result of my actual implementation,

- No SuperGrok required
- X Premium Plan Only `grok-4.3` You can also move and X search

This is the conclusion I came to, but I had some difficulty building the environment, so I will summarize it as a memorandum in this article. The specific details are as follows:

- Introduction of hermes-agent
- xAI OAuth Authentication with X Premium Plan
- `x_search` Tool Settings
- Grok model and `x_search` Easy use of the tool

## Procedure

## Introduction of hermes-agent

Deploying hermes-agent itself is very easy and follows the README.md in the GitHub repository.

<iframe src="https://embed.zenn.studio/card#zenn-embedded__d4f5b752e2fb9" frameborder="0" height="122"></iframe>

```
$ curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

This is the only way to complete the installation.

## Introducing the x\_search tool

After installing hermes-agent, run the following command:

```
$ hermes tools
```

The following will then be displayed (the numbers may be slightly different):

![](https://static.zenn.studio/user-upload/2d4f0c251bc5-20260517.png)

First here `Configure 🖥️  CLI` Select and press Enter.

![](https://static.zenn.studio/user-upload/5c8e3cb50c09-20260517.png)

Here `🐦 X (Twitter) Search  (x_search (requires xAI OAuth or XAI_API_KEY))` Select and use the spacebar to enter with ☑.

Then return to the screen below, `Reconfigure an existing tool's provider or API key` Select and enter.

![](https://static.zenn.studio/user-upload/2d4f0c251bc5-20260517.png)

Furthermore `🐦 X (Twitter) Search` Select and Enter.

![](https://static.zenn.studio/user-upload/79f7b1072011-20260517.png)

Enter here as is.

![](https://static.zenn.studio/user-upload/4771faf2eea7-20260517.png)

Again, there is a word that bothers me called SuperGrok Subscription, but I ignore it and enter.

![](https://static.zenn.studio/user-upload/174aeebc8ccb-20260517.png)

The following message will then appear: It gets a little confusing from here.

```
--- 🐦 X (Twitter) Search - Choose a provider ---

      xAI needs credentials. Choose one:
    Skipped (keeping current)

  Signing in to xAI Grok OAuth (SuperGrok Subscription)...
Open this URL to authorize Hermes with xAI:
https://auth.x.ai/oauth2/authorize?response_type=code&client_id=*****.....

Waiting for callback on http://127.0.0.1:56121/callback

Remote session detected. Your browser will redirect to
  http://127.0.0.1:56121/callback
which the loopback listener on THIS machine is waiting on. If your
browser is on a different machine, forward the port first from your
local machine in a separate terminal:

  ssh -N -L 56121:127.0.0.1:56121 <user>@<this-host>

Then open the authorize URL above in your local browser.
Provider docs:      https://hermes-agent.nousresearch.com/docs/guides/xai-grok-oauth
SSH/jump-box guide: https://hermes-agent.nousresearch.com/docs/guides/oauth-over-ssh
```

From here on, we'll split the case.

### ①If you are running hermes-agent on a PC that operates the terminal

In this case, it's easy, `https://auth.x.ai/oauth2/authorize?response_type=code&client_id=*****` When you open it in a browser, the following screen will appear. However, assume that X has already logged in.

![](https://static.zenn.studio/user-upload/46386d32d290-20260517.png)

Select permission and authentication will end.

![](https://static.zenn.studio/user-upload/76f266c44b4a-20260517.png)

### ②If you are running hermes-agent on a remote PC

In this case, it can be a bit complicated, so you need to leave the above terminal alone, open another terminal, and set up an SSH tunnel by running the following command:

```
$ ssh -N -L 56121:127.0.0.1:56121 <user>@<this-host>
```

Here `<user>`, `<this-host>` are the logged-in user and IP address of the PC running hermes-agent, respectively. For example `gosrum`, `192.168.0.11` etc.

When you run this, it will ask for your login password, and if you enter it correctly, it will stop working as shown below.

```
🐔@EVO-X2:~$ ssh -N -L 56121:127.0.0.1:56121 gosrum@192.168.0.11
gosrum@192.168.0.11's password:
```

I was worried for a moment, but now I was able to set up an SSH tunnel. It will be displayed in the original terminal in this state `https://auth.x.ai/oauth2/authorize?response_type=code&client_id=*****` You can authenticate in the same way by opening it in a browser.

## Provider Model Selection

In fact, if you have already completed the model selection, at this point `x_search` Tools are now available.

That is `x_search` If your only goal is to use the tool, there's no need to switch to Grok's model, just use your preferred provider/model. Of course, local LLM is fine too.

If you want to use Grok's model, you can select it with the following command.

```
$ hermes model
```

Then the providers will be displayed in a row like this, `xAI Grok OAuth (SuperGrok Subscription)` Find it and enter.

![](https://static.zenn.studio/user-upload/94c36ccf88e0-20260517.png)

Since we have just verified the X Premium, `1. Use existing credentials` Select and Enter.

![](https://static.zenn.studio/user-upload/447fc8819d28-20260517.png)

Your preferred model (e.g `grok-4.3` ) and from then on `grok-4.3` You can use the model.

![](https://static.zenn.studio/user-upload/29f6ab4b9b2c-20260517.png)

The provider model is now set up.

## Try using

Hermes-agent can also be integrated with external tools such as Discord, but we will not go into that detail as this is not the main focus of this article.

Here is a simple way to use it as a CLI. It's very simple to use, just run the following command in the terminal:

```
$ hermes
```

The following CLI will then stand up, and from here you can communicate in the same way as a regular AI agent.

![](https://static.zenn.studio/user-upload/97d32c48c78f-20260517.png)

`x_search` Use the tool to search for ○○ and ask for X search.

<iframe src="https://embed.zenn.studio/tweet#zenn-embedded__3e1098ace68b5" frameborder="0" height="787"></iframe>

That's it!

What the x\_search tool can and cannot do (reference)

The following is a summary of what can be done with the x\_search tool based on the tool definition.

- Basic functions
	- Search posts, profiles, and threads on X (formerly Twitter)
		- In addition to regular keyword search, X's advanced search operators (from:, since:, until:, filter:media, etc.) can be used with query
		- Suitable for researching current topics, reactions, and claims (X-specific, not general web search)

Available parameters and effects

- Required
	- query(string)  
		Specify search keywords or queries. The advanced search syntax is also enabled.
- Options
	- allowed\_x\_handles(array, max 10)  
		Limit search to posts from specified users (e.g. \["gosrum"\])
		- excluded\_x\_handles(array, max 10)  
		Exclude posts from specified users
		- from\_date(string, YYYY-MM-DD format)  
		Focus on posts from this date onwards
		- to\_date(string, YYYY-MM-DD format)  
		Narrow your posts to those before this date
		- enable\_image\_understanding(boolean)  
		If an image is attached to a matching post, xAI will analyze and understand the content of the image and reflect it in the answer
		- enable\_video\_understanding(boolean)  
		If a video is attached to a matching post, xAI will analyze and understand the content of the video and reflect it in the answer
- Output Features
	- It is returned in a summarized answer format rather than a raw post list
		- Account profile information and context may also be supplemented
		- The URL of the relevant post is provided as citations
		- Authentication required (SuperGrok OAuth or XAI\_API\_KEY)
- What you can't do
	- Get Like History
		- Obtaining bookmarks
		- Viewing DMs and private posts
		- Get a list of followers or followers
		- Searching for liked posts (does not work with public searches such as filter:likes)

## Summary

In this article, **With Grok on the X Premium plan `x_search` How to use the tool** The following is summarized in a memorandum:

- Introduction of hermes-agent
- xAI OAuth Authentication with X Premium Plan
- `x_search` Tool Settings
- Grok model and `x_search` Easy use of the tool

X Search Tool ( `x_search` The addition of) and the use of the Grok model are independent, so you can use your favorite provider/model `x_search` You can also use

Furthermore, if you integrate hermes-agent with Discord etc., you can also search from that UI, and if you integrate it with regular execution by cron job, it will be much more widely used. We would like to consider specific ways to use it in the future.

Thank you for reading to the end. If I find any interesting or convenient ways to use it in the future, I will continue to share it in articles and articles.

51

21