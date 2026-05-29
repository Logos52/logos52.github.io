---
title: "Finances"
type: finances
status: active
created: 2026-05-27
updated: 2026-05-27
cssclasses:
  - command-center
tags:
  - command-center
  - finances
---

<div class="cc-head">
<p class="cc-eyebrow">Drill-down</p>
<h1 class="cc-title">Finances</h1>
<p class="cc-date">Apple Card · imported CSV</p>
</div>

[[Home|← back to Home]]

```datacorejsx
// CSV loader is shared via tools/finance-helpers.md (also used by the Home finance card).
const { loadLatest } = await dc.require(dc.headerLink("tools/finance-helpers.md", "Helpers"));

function fmt(n) {
  const sign = n < 0 ? '-' : '';
  const v = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return sign + '$' + v;
}

return function Finances() {
  const data = dc.useMemo(() => loadLatest(), []);
  if (!data || data.error) {
    return <div class="cc-card"><p style={{margin:0}}>{data ? data.error : 'Loading…'}</p></div>;
  }

  const purchases = data.items.filter(t => t._amount > 0);
  const total = purchases.reduce((s, t) => s + t._amount, 0);
  const dates = purchases.map(t => t._date).filter(d => !isNaN(d));
  const minDate = dates.length ? new Date(Math.min(...dates.map(d => d.getTime()))) : null;
  const maxDate = dates.length ? new Date(Math.max(...dates.map(d => d.getTime()))) : null;
  const dateRange = (minDate && maxDate)
    ? minDate.toLocaleDateString('en-US', {month:'short', day:'numeric'}) + ' → ' + maxDate.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'})
    : '—';

  const byCat = {};
  purchases.forEach(t => {
    const c = t['Category'] || 'Other';
    byCat[c] = (byCat[c] || 0) + t._amount;
  });
  const cats = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  const catMax = cats.length > 0 ? cats[0][1] : 1;

  const recent = [...purchases].sort((a, b) => b._date - a._date).slice(0, 25);

  // Monthly aggregation
  const byMonth = {};
  purchases.forEach(t => {
    if (!isNaN(t._date)) {
      const k = t._date.getFullYear() + '-' + String(t._date.getMonth() + 1).padStart(2, '0');
      byMonth[k] = (byMonth[k] || 0) + t._amount;
    }
  });
  const monthKeys = Object.keys(byMonth).sort();
  const monthValues = monthKeys.map(k => byMonth[k]);
  const monthMax = Math.max(...monthValues, 1);
  const monthLabel = k => {
    const [y, m] = k.split('-');
    return new Date(Number(y), Number(m) - 1, 1).toLocaleDateString('en-US', {month: 'short'});
  };

  // Top merchants
  const byMerchant = {};
  purchases.forEach(t => {
    const m = t['Merchant'] || t['Description'] || 'Unknown';
    byMerchant[m] = (byMerchant[m] || 0) + t._amount;
  });
  const top10 = Object.entries(byMerchant).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const mMax = top10.length > 0 ? top10[0][1] : 1;

  // Day-of-week pattern
  const dayLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const byDay = [0,0,0,0,0,0,0];
  purchases.forEach(t => {
    if (!isNaN(t._date)) byDay[t._date.getDay()] += t._amount;
  });
  const dayMax = Math.max(...byDay, 1);

  // Cumulative YTD path
  const sorted = purchases.filter(t => !isNaN(t._date)).sort((a, b) => a._date - b._date);
  let acc = 0;
  const cumPoints = sorted.map(t => ({ date: t._date, total: (acc += t._amount) }));
  const ytdTotal = cumPoints.length > 0 ? cumPoints[cumPoints.length - 1].total : 0;
  const ytdMin = cumPoints.length > 0 ? cumPoints[0].date.getTime() : 0;
  const ytdMax = cumPoints.length > 0 ? cumPoints[cumPoints.length - 1].date.getTime() : 1;
  const ytdSpan = ytdMax - ytdMin || 1;
  const ytdW = 600, ytdH = 120;
  const ytdPath = cumPoints.map((p, i) => {
    const x = ((p.date.getTime() - ytdMin) / ytdSpan) * ytdW;
    const y = ytdH - (ytdTotal > 0 ? (p.total / ytdTotal) * ytdH : 0);
    return (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
  }).join(' ');

  return (
    <div>
      <div class="cc-card" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
        <a class="external-link" href="http://localhost:4179/" rel="noopener" style={{fontWeight:600,textDecoration:'none'}}>Open WNAB to budget →</a>
        <span class="cc-meta" style={{fontSize:'0.8em',opacity:0.6}}>local · not running? double-click wnab.command (~/Documents/Finances/wnab/serve/)</span>
      </div>
      <div class="cc-card finance-summary">
        <div class="finance-stat">
          <div class="finance-stat-label">Total spent</div>
          <div class="finance-stat-value">{fmt(total)}</div>
        </div>
        <div class="finance-stat">
          <div class="finance-stat-label">Transactions</div>
          <div class="finance-stat-value">{purchases.length}</div>
        </div>
        <div class="finance-stat">
          <div class="finance-stat-label">Range</div>
          <div class="finance-stat-value finance-stat-small">{dateRange}</div>
        </div>
      </div>

      <h2>Spend by category</h2>
      <div class="cc-card">
        {cats.map(([cat, amt]) => (
          <div class="cat-row">
            <span class="cat-name">{cat}</span>
            <span class="cat-bar"><i style={{width: ((amt / catMax) * 100) + "%"}}></i></span>
            <span class="cat-amt">{fmt(amt)}</span>
          </div>
        ))}
      </div>

      <h2>Monthly spend</h2>
      <div class="cc-card">
        <div class="monthly-chart">
          {monthKeys.map((k, i) => (
            <div class="month-col">
              <div class="month-bar" style={{height: ((monthValues[i] / monthMax) * 120) + "px", opacity: 0.5 + 0.5 * ((i + 1) / monthKeys.length)}}></div>
              <div class="month-label">{monthLabel(k)}</div>
              <div class="month-amt">{fmt(monthValues[i])}</div>
            </div>
          ))}
        </div>
      </div>

      <h2>Spend by weekday</h2>
      <div class="cc-card">
        <div class="weekday-chart">
          {byDay.map((v, i) => (
            <div class="week-col">
              <div class="week-bar" style={{height: ((v / dayMax) * 100) + "px"}}></div>
              <div class="week-label">{dayLabels[i]}</div>
              <div class="week-amt">{fmt(v)}</div>
            </div>
          ))}
        </div>
      </div>

      <h2>YTD cumulative</h2>
      <div class="cc-card">
        <svg class="ytd-chart" viewBox={`0 0 ${ytdW} ${ytdH}`} preserveAspectRatio="none">
          <path d={ytdPath} fill="none" stroke="var(--cc-teal)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" />
        </svg>
        <div class="ytd-meta">Total: {fmt(ytdTotal)}</div>
      </div>

      <h2>Top merchants</h2>
      <div class="cc-card top-merchants">
        {top10.map(([m, amt]) => (
          <div class="cat-row">
            <span class="cat-name">{m}</span>
            <span class="cat-bar"><i style={{width: ((amt / mMax) * 100) + "%"}}></i></span>
            <span class="cat-amt">{fmt(amt)}</span>
          </div>
        ))}
      </div>

      <h2>Recent transactions</h2>
      <div class="cc-card">
        <table class="finance-table">
          <thead><tr><th>Date</th><th>Merchant</th><th>Category</th><th class="amt">Amount</th></tr></thead>
          <tbody>
            {recent.map(t => (
              <tr>
                <td>{t['Transaction Date']}</td>
                <td>{t['Merchant'] || t['Description']}</td>
                <td>{t['Category']}</td>
                <td class="amt">{fmt(t._amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Budget template</h2>
      <div class="cc-card">
        <p class="cc-meta" style={{marginTop:0}}>Current per-category averages from your CSV. Copy this into <code>~/Documents/Finances/budget.json</code>, then adjust each number to what you <em>want</em> spending to be (not what it is now). Once that file exists, this dashboard switches from "what you spent" to "spent vs budgeted" with traffic-light bars.</p>
        <pre class="budget-json">{JSON.stringify({
          monthly_total: Math.round(total / Math.max(1, monthKeys.length)),
          categories: Object.fromEntries(
            Object.entries(byCat)
              .sort((a, b) => b[1] - a[1])
              .map(([cat, amt]) => [cat, Math.round(amt / Math.max(1, monthKeys.length))])
          )
        }, null, 2)}</pre>
      </div>

      <p class="cc-meta" style={{marginTop:'1rem'}}>Source: {data.file}</p>
    </div>
  );
}
```
