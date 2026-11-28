function pressView(root: Element, view: string) {
  for (const button of root.querySelectorAll('.vsw button, .jr-views button[data-view]')) {
    if (!(button instanceof HTMLButtonElement)) continue;
    button.setAttribute('aria-pressed', String(button.getAttribute('data-view') === view));
  }
  for (const panel of root.querySelectorAll(':scope > .vw, .vw, .jv')) {
    panel.classList.toggle('on', panel.getAttribute('data-view') === view);
  }
  const journal = root.querySelector('.jr');
  if (journal instanceof HTMLElement) journal.dataset.view = view;
  if (root instanceof HTMLElement && root.classList.contains('jr')) root.dataset.view = view;
  window.dispatchEvent(new Event('resize'));
}

export function bindViews() {
  for (const root of document.querySelectorAll('[data-views]')) {
    for (const button of root.querySelectorAll('.vsw button, .jr-views button[data-view]')) {
      button.addEventListener('click', () => {
        const view = button.getAttribute('data-view');
        if (view) pressView(root, view);
      });
    }
  }
}

function showMonth(journal: HTMLElement, id: string) {
  for (const month of journal.querySelectorAll('.jr-month, .jt-month')) {
    const key = month.id || month.getAttribute('data-m') || '';
    month.classList.toggle('on', key === id);
  }
  for (const rail of journal.querySelectorAll('.jr-m')) rail.classList.toggle('on', rail.getAttribute('data-m') === id);
  for (const cal of journal.querySelectorAll('.jr-cal')) cal.classList.toggle('on', cal.getAttribute('data-m') === id);
  journal.dataset.month = id;
}

function bindNews(journal: HTMLElement) {
  const news = journal.querySelector('.jr-newsbtn');
  if (!(news instanceof HTMLButtonElement)) return;
  news.addEventListener('click', () => {
    const on = news.getAttribute('aria-pressed') !== 'true';
    news.setAttribute('aria-pressed', String(on));
    journal.classList.toggle('nonews', !on);
  });
}

export function bindJournal() {
  const journal = document.querySelector('.jr');
  if (!(journal instanceof HTMLElement)) return;
  for (const link of journal.querySelectorAll('[data-month]')) {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('data-month');
      if (!id) return;
      event.preventDefault();
      showMonth(journal, id);
    });
  }
  bindNews(journal);
}

function elementChildren(list: HTMLElement) {
  const items: HTMLElement[] = [];
  for (const child of list.children) {
    if (child instanceof HTMLElement) items.push(child);
  }
  return items;
}

function resetCards(items: HTMLElement[]) {
  for (const card of items) {
    card.style.position = '';
    card.style.width = '';
    card.style.top = '';
    card.style.left = '';
  }
}

function columnCount(list: HTMLElement) {
  const cols = getComputedStyle(list).gridTemplateColumns.split(' ').filter(Boolean).length;
  return cols || 1;
}

function metrics(list: HTMLElement) {
  const cols = columnCount(list);
  const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
  const rowGap = parseFloat(getComputedStyle(list).rowGap) || 0;
  const width = (list.offsetWidth - gap * (cols - 1)) / cols;
  const heights: number[] = [];
  for (let i = 0; i < cols; i++) heights.push(0);
  return { gap, rowGap, width, heights };
}

function shortestCol(heights: number[]) {
  let shortest = 0;
  for (let i = 1; i < heights.length; i++) if (heights[i] < heights[shortest]) shortest = i;
  return shortest;
}

function placeCard(card: HTMLElement, box: ReturnType<typeof metrics>) {
  if (card.hasAttribute('data-search-hide')) return;
  card.style.position = 'absolute';
  card.style.width = `${box.width}px`;
  const shortest = shortestCol(box.heights);
  const top = box.heights[shortest] > 0 ? box.heights[shortest] + box.rowGap : 0;
  card.style.top = `${top}px`;
  card.style.left = `${(box.width + box.gap) * shortest}px`;
  box.heights[shortest] = top + card.offsetHeight;
}

function layList(list: HTMLElement) {
  const items = elementChildren(list);
  resetCards(items);
  list.style.height = '';
  const box = metrics(list);
  for (const card of items) placeCard(card, box);
  const peak = box.heights.reduce((max, height) => Math.max(max, height), 0);
  list.style.height = `${peak}px`;
}

function layPacked() {
  for (const list of document.querySelectorAll('[data-wb]')) {
    if (list instanceof HTMLElement) layList(list);
  }
}

export function bindPacked() {
  if (!document.querySelector('[data-wb]')) return;
  layPacked();
  requestAnimationFrame(layPacked);
  window.addEventListener('resize', layPacked);
  window.addEventListener('load', layPacked);
  if (document.fonts) void document.fonts.ready.then(layPacked);
}

function revealGlyph(glyphs: Element[], index: number) {
  glyphs[index]?.setAttribute('class', 'on');
}

function clearWrite(el: SVGElement, glyphs: Element[], step: () => void) {
  el.setAttribute('class', 'tw clear');
  window.setTimeout(() => {
    for (const glyph of glyphs) glyph.setAttribute('class', '');
    el.setAttribute('class', 'tw');
    window.setTimeout(step, 600);
  }, 900);
}

export function bindWrite() {
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
      revealGlyph(glyphs, index);
      index += 1;
      window.setTimeout(step, 420);
      return;
    }
    index = 0;
    window.setTimeout(() => clearWrite(el, glyphs, step), 3200);
  };
  window.setTimeout(step, 500);
}
