function railItem(el: HTMLElement, origin: HTMLElement, preferred: number) {
  return { el, origin, preferred };
}

function captionItems(page: HTMLElement) {
  const items: ReturnType<typeof railItem>[] = [];
  for (const cap of page.querySelectorAll('.essay-body figcaption')) {
    if (!(cap instanceof HTMLElement)) continue;
    const fig = cap.closest('figure');
    if (!(fig instanceof HTMLElement)) continue;
    items.push(railItem(cap, fig, fig.getBoundingClientRect().top));
  }
  return items;
}

function noteItems(page: HTMLElement, block: HTMLElement) {
  const items: ReturnType<typeof railItem>[] = [];
  for (const note of page.querySelectorAll('aside.note')) {
    if (!(note instanceof HTMLElement)) continue;
    const refId = note.getAttribute('data-ref');
    const ref = refId ? document.getElementById(refId) : null;
    const preferred = ref ? ref.getBoundingClientRect().top : note.getBoundingClientRect().top;
    items.push(railItem(note, block, preferred));
  }
  return items;
}

function clearRail(page: HTMLElement) {
  for (const cap of page.querySelectorAll('.essay-body figcaption')) {
    if (!(cap instanceof HTMLElement)) continue;
    cap.style.top = '';
    cap.style.bottom = '';
  }
  for (const note of page.querySelectorAll('aside.note')) {
    if (!(note instanceof HTMLElement)) continue;
    note.style.top = '';
    note.style.marginTop = '';
  }
}

function stackRail(items: ReturnType<typeof railItem>[], cursor: number) {
  let next = cursor;
  for (const item of items) {
    const topPx = Math.max(item.preferred, next);
    item.el.style.bottom = 'auto';
    item.el.style.top = `${Math.ceil(topPx - item.origin.getBoundingClientRect().top)}px`;
    next = Math.ceil(item.el.getBoundingClientRect().bottom) + 18;
  }
}

export function placeRail() {
  const page = document.querySelector('#page-article');
  if (!(page instanceof HTMLElement)) return;
  const facts = page.querySelector('#article-facts');
  const block = page.querySelector('.top-block');
  if (!(facts instanceof HTMLElement) || !(block instanceof HTMLElement)) return;
  clearRail(page);
  const items = [...captionItems(page), ...noteItems(page, block)];
  items.sort((a, b) => a.preferred - b.preferred);
  stackRail(items, Math.ceil(facts.getBoundingClientRect().bottom) + 24);
}

export function bindArticle() {
  if (!document.getElementById('article-facts')) return;
  placeRail();
  window.addEventListener('resize', placeRail);
  window.addEventListener('load', placeRail);
  if (document.fonts) void document.fonts.ready.then(placeRail);
}

function stageOf(dialog: HTMLDialogElement, full: HTMLImageElement, closeBtn: HTMLButtonElement) {
  const box = document.createElement('div');
  box.className = 'lb-svg';
  box.hidden = true;
  dialog.appendChild(box);
  return { dialog, full, box, closeBtn };
}

function openImage(stage: ReturnType<typeof stageOf>, img: HTMLImageElement) {
  stage.box.hidden = true;
  stage.box.textContent = '';
  stage.full.hidden = false;
  stage.full.src = img.currentSrc || img.src;
  stage.full.alt = img.alt || '';
  if (typeof stage.dialog.showModal === 'function') stage.dialog.showModal();
  stage.closeBtn.focus();
}

function openSvg(stage: ReturnType<typeof stageOf>, svg: SVGSVGElement) {
  const id = svg.id || 'fig';
  stage.box.innerHTML = svg.outerHTML.split(id).join(`${id}-lb`);
  const big = stage.box.querySelector('svg');
  if (big) {
    big.removeAttribute('width');
    big.removeAttribute('height');
  }
  stage.full.hidden = true;
  stage.box.hidden = false;
  if (typeof stage.dialog.showModal === 'function') stage.dialog.showModal();
  stage.closeBtn.focus();
}

function wireImages(stage: ReturnType<typeof stageOf>) {
  for (const img of document.querySelectorAll('.essay-body figure img')) {
    if (!(img instanceof HTMLImageElement)) continue;
    img.addEventListener('click', (event) => {
      event.preventDefault();
      openImage(stage, img);
    });
  }
}

function wireFigs(stage: ReturnType<typeof stageOf>) {
  for (const btn of document.querySelectorAll('.essay-body figure .fig-open')) {
    btn.addEventListener('click', () => {
      const svg = btn.querySelector('svg');
      if (!(svg instanceof SVGSVGElement)) return;
      openSvg(stage, svg);
    });
  }
}

export function bindLightbox() {
  const dialog = document.querySelector('dialog.lightbox');
  if (!(dialog instanceof HTMLDialogElement)) return;
  const full = dialog.querySelector('img');
  const closeBtn = dialog.querySelector('.lightbox-close');
  if (!(full instanceof HTMLImageElement) || !(closeBtn instanceof HTMLButtonElement)) return;
  const stage = stageOf(dialog, full, closeBtn);
  wireImages(stage);
  wireFigs(stage);
  closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    stage.box.hidden = true;
    stage.box.textContent = '';
    stage.full.hidden = false;
  });
}
