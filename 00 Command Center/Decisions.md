---
title: "Decisions"
type: decisions-log
status: active
created: 2026-05-27
updated: 2026-05-27
cssclasses:
  - command-center
tags:
  - command-center
  - decisions
---

<div class="cc-head">
<p class="cc-eyebrow">Log</p>
<h1 class="cc-title">Decisions</h1>
<p class="cc-date">Choices, reasoning, ruled-out — adjacent to the journal log</p>
</div>

[[Home|← back to Home]]

Notes live in [[decisions]] (the folder), one note per choice, with `type: decision`. Each note records the decision, the reasoning, and what was ruled out — so months from now "wait, why did I pick X?" is findable in one search.

```datacorejsx
return function DecisionsLog() {
  const items = dc.useQuery('@page and type = "decision"');
  const sorted = [...items].sort((a, b) => {
    const ad = String(a.value('created') || '');
    const bd = String(b.value('created') || '');
    return bd.localeCompare(ad);
  });
  if (sorted.length === 0) {
    return <div class="cc-card"><p class="cc-meta" style={{margin:0}}>No decisions logged yet.</p></div>;
  }
  return (
    <div class="cc-card">
      <ul class="decisions-mini">
        {sorted.map(d => {
          const title = String(d.value('title') || (d.$name || '').replace(/\.md$/, ''));
          return (
            <li class="decision-mini-item">
              <a class="internal-link decision-mini-link" href={d.$path} data-href={d.$path}>{title}</a>
              <span class="decision-mini-date">{String(d.value('created') || '')}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```
