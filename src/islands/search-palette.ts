/**
 * search-palette.ts — ⌘K command palette over the Pagefind full-body index.
 * Result rows: title + domain + excerpt snippet; keyboard ↑↓ Enter Esc.
 */
import { loadPagefind } from '../lib/pagefind-client';
import { DOMAIN_LABELS, isDomain } from '../lib/types';

function domainLabel(raw: string | undefined): string {
  if (raw && isDomain(raw)) return DOMAIN_LABELS[raw];
  return raw ?? '';
}

export function initSearchPalette(root: HTMLElement): void {
  const dialog = root.querySelector<HTMLDialogElement>('[data-search-dialog]');
  const input = root.querySelector<HTMLInputElement>('[data-search-input]');
  const list = root.querySelector<HTMLElement>('[data-search-results]');
  if (!dialog || !input || !list) return;

  let active = 0;
  let rows: { url: string; title: string; domain: string; excerpt: string }[] = [];

  const render = () => {
    list.innerHTML = '';
    if (!rows.length) {
      const empty = document.createElement('p');
      empty.className = 'kb-search-empty';
      empty.textContent = input.value.trim() ? 'No notes found.' : 'Type to search the vault…';
      list.append(empty);
      active = 0;
      return;
    }
    rows.forEach((r, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'kb-search-row';
      if (i === active) btn.classList.add('on');
      btn.dataset.url = r.url;
      btn.innerHTML = `
        <span class="kb-search-row__title">${escapeHtml(r.title)}</span>
        ${r.domain ? `<span class="kb-search-row__domain">${escapeHtml(r.domain)}</span>` : ''}
        <span class="kb-search-row__excerpt">${escapeHtml(r.excerpt)}</span>`;
      btn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        go(r.url);
      });
      list.append(btn);
    });
  };

  const go = (url: string) => {
    close();
    window.location.href = url;
  };

  const open = () => {
    dialog.showModal();
    input.value = '';
    rows = [];
    active = 0;
    render();
    requestAnimationFrame(() => input.focus());

  };

  const close = () => {
    dialog.close();
    input.blur();
  };

  let timer: ReturnType<typeof setTimeout> | undefined;
  const runSearch = async (q: string) => {
    try {
      const api = await loadPagefind(24);
      const { results } = await api.search(q.trim() || ' ');
      const slice = results.slice(0, 12);
      rows = await Promise.all(
        slice.map(async (hit) => {
          const d = await hit.data();
          const title = d.meta.title ?? d.meta['title'] ?? d.url.split('/').filter(Boolean).pop() ?? 'Note';
          const domain = domainLabel(d.meta.domain ?? d.meta['domain']);
          return { url: d.url, title, domain, excerpt: d.excerpt?.trim() || '…' };
        }),
      );
      active = 0;
      render();
    } catch {
      list.innerHTML = '<p class="kb-search-empty">Search index not loaded yet.</p>';
    }
  };

  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => void runSearch(input.value), 120);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      active = Math.min(active + 1, Math.max(rows.length - 1, 0));
      render();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      active = Math.max(active - 1, 0);
      render();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const pick = rows[active];
      if (pick) go(pick.url);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
    }
  });

  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener('close', () => {
    input.value = '';
    rows = [];
    render();
  });

  document.addEventListener('keydown', (e) => {
    const mod = e.metaKey || e.ctrlKey;
    if (mod && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (dialog.open) close();
      else open();
    } else if (e.key === 'Escape' && dialog.open) {
      close();
    }
  });

  document.querySelectorAll('[data-search-open]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      open();
    });
  });
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}