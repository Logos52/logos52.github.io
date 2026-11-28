type RailItem = {
  el: HTMLElement;
  origin: HTMLElement;
  preferred: number;
};

function bindMenu() {
  const menu = document.querySelector('.menu');
  if (!(menu instanceof HTMLDetailsElement)) return;
  document.addEventListener('click', (event) => {
    if (menu.open && event.target instanceof Node && !menu.contains(event.target)) menu.removeAttribute('open');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) menu.removeAttribute('open');
  });
}

function bindSearch() {
  const input = document.getElementById('site-search');
  if (!(input instanceof HTMLInputElement)) return;
  const rows = [...document.querySelectorAll('.works > a, .journal > a, .pages > a, .pl-list > a, a.rw, .ex-hubs > a, .archived a')];
  const nodes = [...document.querySelectorAll('svg.diagram a.node')];
  const run = () => {
    const q = input.value.trim().toLowerCase();
    for (const row of rows) {
      const hit = !q || (row.textContent ?? '').toLowerCase().includes(q);
      if (hit) row.removeAttribute('data-search-hide');
      else row.setAttribute('data-search-hide', '');
    }
    for (const node of nodes) {
      const hit = !q || (node.getAttribute('data-title') ?? '').toLowerCase().includes(q);
      if (hit) node.removeAttribute('data-search-dim');
      else node.setAttribute('data-search-dim', '');
    }
    window.dispatchEvent(new Event('resize'));
  };
  input.addEventListener('input', run);
  const params = new URLSearchParams(location.search).get('q');
  if (params && rows.length) {
    input.value = params;
    run();
  }
  document.addEventListener('keydown', (event) => {
    const tag = document.activeElement?.tagName ?? '';
    if (event.key === '/' && document.activeElement !== input && tag !== 'INPUT' && tag !== 'TEXTAREA') {
      event.preventDefault();
      input.focus();
    } else if (event.key === 'Enter' && document.activeElement === input && !rows.length && input.value.trim()) {
      location.href = `/?q=${encodeURIComponent(input.value.trim())}`;
    } else if (event.key === 'Escape' && document.activeElement === input) {
      input.value = '';
      run();
      input.blur();
    }
  });
}

function bindTips() {
  for (const svg of document.querySelectorAll('svg.diagram')) {
    if (!(svg instanceof SVGSVGElement)) continue;
    const tip = svg.querySelector('[data-tip]');
    const box = tip?.querySelector('rect');
    const txt = tip?.querySelector('text');
    if (!(tip instanceof SVGElement) || !(box instanceof SVGRectElement) || !(txt instanceof SVGTextElement)) continue;
    const width = svg.viewBox.baseVal.width || 414;
    const show = (node: Element) => {
      txt.textContent = node.getAttribute('data-title') ?? '';
      const w = txt.getComputedTextLength() + 12;
      const x = Number(node.getAttribute('data-x'));
      const y = Number(node.getAttribute('data-y'));
      const tx = Math.min(width - w - 4, Math.max(4, x - w / 2));
      const ty = y < 36 ? y + 10 : y - 26;
      box.setAttribute('width', String(w));
      txt.setAttribute('x', '6');
      tip.setAttribute('transform', `translate(${tx} ${ty})`);
      tip.setAttribute('visibility', 'visible');
    };
    const hide = () => tip.setAttribute('visibility', 'hidden');
    for (const node of svg.querySelectorAll('a.node')) {
      node.addEventListener('mouseenter', () => show(node));
      node.addEventListener('focus', () => show(node));
      node.addEventListener('mouseleave', hide);
      node.addEventListener('blur', hide);
    }
  }
}

function bindViews() {
  for (const root of document.querySelectorAll('[data-views]')) {
    if (!(root instanceof HTMLElement)) continue;
    const buttons = [...root.querySelectorAll('.vsw button, .jr-views button[data-view]')];
    const panels = [...root.querySelectorAll(':scope > .vw, .vw, .jv')].filter((el) => el instanceof HTMLElement);
    const go = (view: string) => {
      for (const button of buttons) {
        if (!(button instanceof HTMLButtonElement)) continue;
        button.setAttribute('aria-pressed', String(button.getAttribute('data-view') === view));
      }
      for (const panel of panels) {
        panel.classList.toggle('on', panel.getAttribute('data-view') === view);
      }
      const journal = root.querySelector('.jr');
      if (journal instanceof HTMLElement) journal.dataset.view = view;
      if (root.classList.contains('jr')) root.dataset.view = view;
      window.dispatchEvent(new Event('resize'));
    };
    for (const button of buttons) {
      button.addEventListener('click', () => {
        const view = button.getAttribute('data-view');
        if (view) go(view);
      });
    }
  }
}

function bindJournal() {
  const journal = document.querySelector('.jr');
  if (!(journal instanceof HTMLElement)) return;
  const months = [...journal.querySelectorAll('.jr-month, .jt-month')];
  const rails = [...journal.querySelectorAll('.jr-m')];
  const cals = [...journal.querySelectorAll('.jr-cal')];
  const show = (id: string) => {
    for (const month of months) {
      const key = month.id || month.getAttribute('data-m') || '';
      month.classList.toggle('on', key === id);
    }
    for (const rail of rails) rail.classList.toggle('on', rail.getAttribute('data-m') === id);
    for (const cal of cals) cal.classList.toggle('on', cal.getAttribute('data-m') === id);
    journal.dataset.month = id;
  };
  for (const link of journal.querySelectorAll('[data-month]')) {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('data-month');
      if (!id) return;
      event.preventDefault();
      show(id);
    });
  }
  const news = journal.querySelector('.jr-newsbtn');
  if (news instanceof HTMLButtonElement) {
    news.addEventListener('click', () => {
      const on = news.getAttribute('aria-pressed') !== 'true';
      news.setAttribute('aria-pressed', String(on));
      journal.classList.toggle('nonews', !on);
    });
  }
}

function bindPacked() {
  const lists = [...document.querySelectorAll('[data-wb]')];
  if (!lists.length) return;
  const lay = () => {
    for (const list of lists) {
      if (!(list instanceof HTMLElement)) continue;
      const items = [...list.children].filter((el): el is HTMLElement => el instanceof HTMLElement);
      for (const card of items) {
        card.style.position = '';
        card.style.width = '';
        card.style.top = '';
        card.style.left = '';
      }
      list.style.height = '';
      const cols = getComputedStyle(list).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
      const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
      const rowGap = parseFloat(getComputedStyle(list).rowGap) || 0;
      const width = (list.offsetWidth - gap * (cols - 1)) / cols;
      const heights = Array.from({ length: cols }, () => 0);
      for (const card of items) {
        if (card.hasAttribute('data-search-hide')) continue;
        card.style.position = 'absolute';
        card.style.width = `${width}px`;
        let shortest = 0;
        for (let i = 1; i < heights.length; i++) if (heights[i] < heights[shortest]) shortest = i;
        const top = heights[shortest] > 0 ? heights[shortest] + rowGap : 0;
        card.style.top = `${top}px`;
        card.style.left = `${(width + gap) * shortest}px`;
        heights[shortest] = top + card.offsetHeight;
      }
      list.style.height = `${Math.max(...heights)}px`;
    }
  };
  lay();
  requestAnimationFrame(lay);
  window.addEventListener('resize', lay);
  window.addEventListener('load', lay);
  if (document.fonts) void document.fonts.ready.then(lay);
}

function bindWrite() {
  const el = document.querySelector('[data-write]');
  if (!(el instanceof SVGElement)) return;
  const glyphs = [...el.querySelectorAll('text')];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (const glyph of glyphs) glyph.setAttribute('class', 'on');
    return;
  }
  let index = 0;
  const step = () => {
    if (index < glyphs.length) {
      glyphs[index].setAttribute('class', 'on');
      index += 1;
      window.setTimeout(step, 420);
      return;
    }
    window.setTimeout(() => {
      el.setAttribute('class', 'tw clear');
      window.setTimeout(() => {
        for (const glyph of glyphs) glyph.setAttribute('class', '');
        el.setAttribute('class', 'tw');
        index = 0;
        window.setTimeout(step, 600);
      }, 900);
    }, 3200);
  };
  window.setTimeout(step, 500);
}

function placeRail() {
  const page = document.querySelector('#page-article');
  if (!(page instanceof HTMLElement)) return;
  const facts = page.querySelector('#article-facts');
  const block = page.querySelector('.top-block');
  if (!(facts instanceof HTMLElement) || !(block instanceof HTMLElement)) return;
  const caps = [...page.querySelectorAll('.essay-body figcaption')].filter((el): el is HTMLElement => el instanceof HTMLElement);
  const notes = [...page.querySelectorAll('aside.note')].filter((el): el is HTMLElement => el instanceof HTMLElement);
  for (const cap of caps) {
    cap.style.top = '';
    cap.style.bottom = '';
  }
  for (const note of notes) {
    note.style.top = '';
    note.style.marginTop = '';
  }
  const items: RailItem[] = [];
  for (const cap of caps) {
    const fig = cap.closest('figure');
    if (!(fig instanceof HTMLElement)) continue;
    items.push({ el: cap, origin: fig, preferred: fig.getBoundingClientRect().top });
  }
  for (const note of notes) {
    const refId = note.getAttribute('data-ref');
    const ref = refId ? document.getElementById(refId) : null;
    items.push({
      el: note,
      origin: block,
      preferred: ref ? ref.getBoundingClientRect().top : note.getBoundingClientRect().top,
    });
  }
  items.sort((a, b) => a.preferred - b.preferred);
  let cursor = Math.ceil(facts.getBoundingClientRect().bottom) + 24;
  for (const item of items) {
    const topPx = Math.max(item.preferred, cursor);
    item.el.style.bottom = 'auto';
    item.el.style.top = `${Math.ceil(topPx - item.origin.getBoundingClientRect().top)}px`;
    cursor = Math.ceil(item.el.getBoundingClientRect().bottom) + 18;
  }
}

function bindArticle() {
  if (!document.getElementById('article-facts')) return;
  const run = () => placeRail();
  run();
  window.addEventListener('resize', run);
  window.addEventListener('load', run);
  if (document.fonts) void document.fonts.ready.then(run);
}

function bindLightbox() {
  const dialog = document.querySelector('dialog.lightbox');
  if (!(dialog instanceof HTMLDialogElement)) return;
  const full = dialog.querySelector('img');
  const closeBtn = dialog.querySelector('.lightbox-close');
  if (!(full instanceof HTMLImageElement) || !(closeBtn instanceof HTMLButtonElement)) return;
  const box = document.createElement('div');
  box.className = 'lb-svg';
  box.hidden = true;
  dialog.appendChild(box);
  const openImage = (img: HTMLImageElement) => {
    box.hidden = true;
    box.textContent = '';
    full.hidden = false;
    full.src = img.currentSrc || img.src;
    full.alt = img.alt || '';
    if (typeof dialog.showModal === 'function') dialog.showModal();
    closeBtn.focus();
  };
  for (const img of document.querySelectorAll('.essay-body figure img')) {
    if (!(img instanceof HTMLImageElement)) continue;
    img.addEventListener('click', (event) => {
      event.preventDefault();
      openImage(img);
    });
  }
  for (const btn of document.querySelectorAll('.essay-body figure .fig-open')) {
    btn.addEventListener('click', () => {
      const svg = btn.querySelector('svg');
      if (!(svg instanceof SVGSVGElement)) return;
      const id = svg.id || 'fig';
      box.innerHTML = svg.outerHTML.split(id).join(`${id}-lb`);
      const big = box.querySelector('svg');
      if (big) {
        big.removeAttribute('width');
        big.removeAttribute('height');
      }
      full.hidden = true;
      box.hidden = false;
      if (typeof dialog.showModal === 'function') dialog.showModal();
      closeBtn.focus();
    });
  }
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    box.hidden = true;
    box.textContent = '';
    full.hidden = false;
  });
}

bindMenu();
bindSearch();
bindTips();
bindViews();
bindJournal();
bindPacked();
bindWrite();
bindArticle();
bindLightbox();
