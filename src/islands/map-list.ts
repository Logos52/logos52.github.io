type MapRow = {
  slug: string;
  title: string;
  url: string;
  source: string;
  domain: string;
  thumb?: string;
};

function norm(s: string): string {
  return s.trim().toLowerCase();
}

function text(s: string): Text {
  return document.createTextNode(s);
}

function rowEl(r: MapRow): HTMLLIElement {
  const li = document.createElement('li');
  li.className = 'word__item';
  const a = document.createElement('a');
  a.className = 'word__link';
  a.href = r.url;
  const title = document.createElement('span');
  title.className = 'word__title';
  title.append(text(r.title));
  const source = document.createElement('span');
  source.className = 'word__meta';
  source.append(text(r.source));
  a.append(title, source);
  if (r.thumb) {
    const img = document.createElement('img');
    img.className = 'word__shot';
    img.src = r.thumb;
    img.alt = '';
    img.loading = 'lazy';
    a.append(img);
  }
  li.append(a);
  return li;
}

function filterRows(rows: MapRow[], domain: string, query: string): MapRow[] {
  return rows.filter((r) => {
    if (domain && r.domain !== domain) return false;
    if (!query) return true;
    return norm(`${r.title} ${r.source} ${r.slug}`).includes(query);
  });
}

function paintList(list: HTMLElement, items: MapRow[]): void {
  list.replaceChildren(...items.map(rowEl));
}

export function initMapList(root: HTMLElement, rows: MapRow[]): void {
  const search = root.querySelector<HTMLInputElement>('[data-map-search]');
  const chips = root.querySelectorAll<HTMLButtonElement>('[data-map-domain]');
  const list = root.querySelector<HTMLElement>('[data-map-list]');
  const empty = root.querySelector<HTMLElement>('[data-map-empty]');
  if (!list) return;

  let domain = '';
  let query = '';

  const render = () => {
    const items = filterRows(rows, domain, query);
    if (empty) empty.hidden = items.length > 0;
    paintList(list, items);
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const d = chip.getAttribute('data-map-domain') ?? '';
      domain = domain === d ? '' : d;
      chips.forEach((c) => c.classList.toggle('on', domain !== '' && c.getAttribute('data-map-domain') === domain));
      render();
    });
  });
  search?.addEventListener('input', () => {
    query = norm(search.value);
    render();
  });
  render();
}