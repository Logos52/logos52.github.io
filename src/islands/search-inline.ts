/**
 * search-inline.ts — inline dropdown search over the Pagefind full-body index.
 * No modal, no backdrop blur: results drop down right under the input. Keyboard ↑ ↓ Enter Esc, ⌘K focus.
 * Wire on any element containing `[data-search-input]` + `[data-search-results]`.
 */
import { loadPagefind } from '../lib/pagefind-client';
import { DOMAIN_LABELS, isDomain } from '../lib/types';

/** Warm Pagefind after idle so first keystroke doesn't hitch the main thread. */
function preloadPagefind(): void {
  const run = () => void loadPagefind(18).catch(() => {});
  if ('requestIdleCallback' in window) {
    requestIdleCallback(run, { timeout: 2500 });
  } else {
    setTimeout(run, 800);
  }
}

const domainLabel = (raw?: string) => (raw && isDomain(raw) ? DOMAIN_LABELS[raw] : (raw ?? ''));
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let cmdKBound = false;

export function initInlineSearch(root: HTMLElement): void {
  const input = root.querySelector<HTMLInputElement>('[data-search-input]');
  const list = root.querySelector<HTMLElement>('[data-search-results]');
  if (!input || !list) return;

  let active = -1;
  let rows: { url: string; title: string; domain: string; excerpt: string }[] = [];

  const show = (v: boolean) => {
    list.hidden = !v;
    root.classList.toggle('open', v);
  };

  const render = () => {
    list.innerHTML = '';
    if (!input.value.trim()) return show(false);
    if (!rows.length) {
      list.innerHTML = '<p class="kb-ac-empty">No notes found.</p>';
      return show(true);
    }
    rows.forEach((r, i) => {
      const a = document.createElement('a');
      a.href = r.url;
      a.className = 'kb-ac-row' + (i === active ? ' on' : '');
      a.innerHTML =
        `<span class="kb-ac-title">${esc(r.title)}</span>` +
        (r.domain ? `<span class="kb-ac-domain">${esc(r.domain)}</span>` : '') +
        (r.excerpt ? `<span class="kb-ac-ex">${esc(r.excerpt)}</span>` : '');
      a.addEventListener('mousedown', (e) => {
        e.preventDefault();
        window.location.href = r.url;
      });
      list.append(a);
    });
    show(true);
  };

  let timer: ReturnType<typeof setTimeout> | undefined;
  const run = async (q: string) => {
    if (!q.trim()) {
      rows = [];
      return render();
    }
    try {
      const api = await loadPagefind(18);
      const { results } = await api.search(q.trim());
      rows = await Promise.all(
        results.slice(0, 8).map(async (h) => {
          const d = await h.data();
          return {
            url: d.url,
            title: d.meta.title ?? d.url.split('/').filter(Boolean).pop() ?? 'Note',
            domain: domainLabel(d.meta.domain),
            excerpt: d.excerpt?.trim() || '',
          };
        }),
      );
      active = -1;
      render();
    } catch {
      list.innerHTML = '<p class="kb-ac-empty">Search index loading…</p>';
      show(true);
    }
  };

  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => void run(input.value), 110);
  });
  input.addEventListener('focus', () => {
    if (input.value.trim()) render();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      active = Math.min(active + 1, rows.length - 1);
      render();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      active = Math.max(active - 1, 0);
      render();
    } else if (e.key === 'Enter') {
      const pick = rows[active] ?? rows[0];
      if (pick) {
        e.preventDefault();
        window.location.href = pick.url;
      }
    } else if (e.key === 'Escape') {
      show(false);
      input.blur();
    }
  });

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target as Node)) show(false);
  });

  if (!cmdKBound) {
    cmdKBound = true;
    preloadPagefind();
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('.kb-chrome [data-search-input]')?.focus();
      }
    });
  }
}
