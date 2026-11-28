export function bindMenu() {
  const menu = document.querySelector('.menu');
  if (!(menu instanceof HTMLDetailsElement)) return;
  document.addEventListener('click', (event) => closeMenu(menu, event));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) menu.removeAttribute('open');
  });
}

function closeMenu(menu: HTMLDetailsElement, event: Event) {
  if (menu.open && event.target instanceof Node && !menu.contains(event.target)) menu.removeAttribute('open');
}

function searchRows() {
  return [...document.querySelectorAll('.works > a, .journal > a, .pages > a, .pl-list > a, a.rw, .ex-hubs > a, .archived a')];
}

function paintRow(row: Element, q: string) {
  const hit = !q || (row.textContent ?? '').toLowerCase().includes(q);
  if (hit) row.removeAttribute('data-search-hide');
  else row.setAttribute('data-search-hide', '');
}

function paintNode(node: Element, q: string) {
  const hit = !q || (node.getAttribute('data-title') ?? '').toLowerCase().includes(q);
  if (hit) node.removeAttribute('data-search-dim');
  else node.setAttribute('data-search-dim', '');
}

function runSearch(input: HTMLInputElement, rows: Element[]) {
  const q = input.value.trim().toLowerCase();
  for (const row of rows) paintRow(row, q);
  for (const node of document.querySelectorAll('svg.diagram a.node')) paintNode(node, q);
  window.dispatchEvent(new Event('resize'));
}

function slashFocus(event: KeyboardEvent, input: HTMLInputElement) {
  const tag = document.activeElement?.tagName ?? '';
  if (event.key !== '/' || document.activeElement === input) return false;
  if (tag === 'INPUT' || tag === 'TEXTAREA') return false;
  event.preventDefault();
  input.focus();
  return true;
}

function searchEnter(input: HTMLInputElement, rows: Element[]) {
  if (document.activeElement !== input || rows.length || !input.value.trim()) return;
  location.href = `/?q=${encodeURIComponent(input.value.trim())}`;
}

function searchEscape(input: HTMLInputElement, rows: Element[]) {
  if (document.activeElement !== input) return;
  input.value = '';
  runSearch(input, rows);
  input.blur();
}

function onSearchKey(event: KeyboardEvent, input: HTMLInputElement, rows: Element[]) {
  if (slashFocus(event, input)) return;
  if (event.key === 'Enter') searchEnter(input, rows);
  if (event.key === 'Escape') searchEscape(input, rows);
}

export function bindSearch() {
  const input = document.getElementById('site-search');
  if (!(input instanceof HTMLInputElement)) return;
  const rows = searchRows();
  const run = () => runSearch(input, rows);
  input.addEventListener('input', run);
  const params = new URLSearchParams(location.search).get('q');
  if (params && rows.length) {
    input.value = params;
    run();
  }
  document.addEventListener('keydown', (event) => onSearchKey(event, input, rows));
}

function tipBox(svg: SVGSVGElement) {
  const tip = svg.querySelector('[data-tip]');
  const box = tip?.querySelector('rect');
  const txt = tip?.querySelector('text');
  if (!(tip instanceof SVGElement) || !(box instanceof SVGRectElement) || !(txt instanceof SVGTextElement)) return undefined;
  return { tip, box, txt, width: svg.viewBox.baseVal.width || 414 };
}

function showTip(parts: NonNullable<ReturnType<typeof tipBox>>, node: Element) {
  parts.txt.textContent = node.getAttribute('data-title') ?? '';
  const w = parts.txt.getComputedTextLength() + 12;
  const x = Number(node.getAttribute('data-x'));
  const y = Number(node.getAttribute('data-y'));
  const tx = Math.min(parts.width - w - 4, Math.max(4, x - w / 2));
  const ty = y < 36 ? y + 10 : y - 26;
  parts.box.setAttribute('width', String(w));
  parts.txt.setAttribute('x', '6');
  parts.tip.setAttribute('transform', `translate(${tx} ${ty})`);
  parts.tip.setAttribute('visibility', 'visible');
}

function wireTip(svg: SVGSVGElement) {
  const parts = tipBox(svg);
  if (!parts) return;
  const hide = () => parts.tip.setAttribute('visibility', 'hidden');
  for (const node of svg.querySelectorAll('a.node')) {
    node.addEventListener('mouseenter', () => showTip(parts, node));
    node.addEventListener('focus', () => showTip(parts, node));
    node.addEventListener('mouseleave', hide);
    node.addEventListener('blur', hide);
  }
}

export function bindTips() {
  for (const svg of document.querySelectorAll('svg.diagram')) {
    if (svg instanceof SVGSVGElement) wireTip(svg);
  }
}
