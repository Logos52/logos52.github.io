# Hermes as a Real-time Analyst

Hermes now pulls full X content for research through the `x_search` tool using a Grok subscription. The tool defaults to Grok-4.3 for search steps and returns richer results than the previous X API path at lower cost.

## x_search Integration

`x_search` gives Hermes native access to full posts and articles on X. 

- No separate model switch required for search
- Full article bodies available for synthesis (previously only headlines and snippets)
- Daily tracking and bookmark jobs drop from ~$0.5 to ~$0.1 in inference cost across 7–8 accounts

## Three Adjusted Workflows

### Bookmark Summarization

Drop an X article URL into Hermes and say “summarize with x_search”. The tool fetches the complete post; the base model performs the analysis.

Authenticate through the Grok subscription using `xai-oauth` (not plain `xai`). Run `hermes model` first to link the subscription.

### Deep Research Pipeline

For geopolitics, macro, and market questions, run a composite six-stage flow:

- Targeted `x_search` queries for real-time signals
- Cookie MCP for KOL leaderboards, sentiment, and mindshare time series
- Browser CDP to open the native Grok web interface and prompt SuperGrok directly for superior post-processing
- DeepSeek v4 as the persistent base model, with Hindsight pulling prior context from the local knowledge base

Grok-4.3 performs poorly as the default agent model in long tool loops and browser harnesses. Reserve it for the search step only.

### Account Tracking

Replace X API calls in daily cron jobs with `x_search`. The same 7–8 high-signal accounts now cost roughly one-fifth as much while returning fuller content.

## Configuration and Model Rules

Set these values in `config.yaml`:

```yaml
x_search:
  timeout_seconds: 300
  retries: 2
  model: grok-4.3
```

Never set Grok-4.3 as the default Hermes model. It fails repeatedly on multi-turn tool use and browser control. Keep DeepSeek v4 (or your preferred open model) as the daily driver.

`x_search` + Cookie MCP forms a strong pair: Cookie supplies structured metrics quickly; `x_search` supplies reliable news and explanatory context.

## Operating Shift

Stop asking Hermes to generate thinking and execution from scratch. Instead:

- Define the problem and hypothesis yourself
- Wire the data sources and retrieval patterns
- Let the agent execute and synthesize under that scaffold

The expanded X research surface makes Hermes far more effective as a persistent analyst than as a pure task runner.