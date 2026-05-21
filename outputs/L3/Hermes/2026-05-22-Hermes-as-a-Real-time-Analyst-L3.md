# Hermes as a Real-time Analyst — L3 Synthesis

**Source:** X post by @0xJeff (2026-05-17), "Hermes as a Real-time Analyst"
**Context:** Hermes agent user integrating Grok subscription features after the Nous/xAI partnership.

## Core Update

xAI expanded Grok access for X Premium+ users inside Hermes. The key new capability is the `x_search` tool, which lets Hermes natively search and analyze X content (similar to prompting SuperGrok directly on X or grok.com).

Previously, Hermes research on X relied on the X API. This had several limitations:
- Could only fetch basic metadata (headline, author, a few lines)
- Could not deeply read full article content
- Required separate handling for bookmarks and timelines
- Higher cost for tracking workflows

With `x_search`:
- Hermes can now pull full X posts and articles for analysis
- The tool defaults to Grok-4.3 automatically (no manual model switch needed for search)
- Significantly cheaper for many use cases
- Enables richer research reports

## Adjusted Workflows

### 1. X Bookmark Cron Job
The user maintains a daily "fresh bookmarks" brief. Previously this used X API + DeepSeek-v4-flash.

Now the user can drop an X article URL and say "summarize with x_search". The flow becomes:
- x_search fetches the full article
- Base model (DeepSeek) synthesizes
- Much higher quality because full content is available

**Important config note:** Must use `xai-oauth` authentication (not plain `xai`) so that the Grok subscription is consumed instead of the xAI API. User recommends running `hermes model` first to authenticate the Grok sub.

### 2. Deep Research Pipeline (6-stage)
For higher-stakes research (geopolitics, macro, markets, crypto), the user developed a composite pipeline after working with Claude:

Stages involve:
- Targeted `x_search` queries
- Cookie MCP tool (for KOL leaderboards, sentiment, mindshare time series, project analytics)
- Browser CDP tool to manually open Grok web interface and prompt SuperGrok directly for better post-processing
- DeepSeek as the primary synthesizer + Hindsight for cross-referencing past insights from the user's knowledge base

Example prompt used: "Deep dive on geopolitics, macro, and their impact on stock market and crypto — focus on current state and forward-looking signals for the next 2 weeks."

**Observation:** Grok-4.3 performed poorly as the base agent model in multi-turn tool use and browser harness scenarios. User strongly prefers DeepSeek v4 as the daily driver and only lets x_search borrow Grok-4.3 when needed.

### 3. X Tracker Cron Jobs
User tracks 7-8 high-signal accounts. Previously this cost ~$0.5/day across jobs via X API.

After switching the tracker jobs to `x_search`, daily cost dropped to ~$0.1. The bookmark job remains the only one still using the older path for now.

## Practical Learnings

- Grok subscription can be obtained for effectively $10/month via a cancel-and-re-subscribe offer (3 months for $30 after initial $30 cancellation). User notes xAI has been generous here.
- `x_search` config in `config.yaml` should set `timeout_seconds: 300` (and retries: 2) to avoid frequent timeouts.
- Do **not** set Grok-4.3 as the default Hermes model. It struggles with:
  - Browser harness / tool execution
  - Multi-turn agent loops
  - Deep reasoning + connecting dots
- `x_search` + Cookie MCP is a strong pairing: Cookie gives structured social metrics quickly; x_search supplies reliable real-time news and explanatory "why" context.

## Usage Philosophy Shift

After ~2 months, the user reports moving away from "ask Hermes to think and execute everything" toward:

- Identifying the real problem / hypothesis themselves
- Setting up the right tools, data sources, and retrieval patterns
- Using the agent primarily for execution, synthesis, and testing under that scaffold

The new research capabilities have made the user more excited to keep iterating on Hermes as a true second-brain analyst rather than just a task runner.

## Open Questions / Future Angles

- How much of the quality gap between native SuperGrok web and the `x_search` tool can be closed with better prompting / scaffolding inside Hermes?
- What other high-signal data sources (beyond X and Cookie) would be worth wiring into similar composite research pipelines?
- Long-term: will the cost savings from `x_search` (vs heavy X API usage) remain stable as usage scales?