/**
 * pagefind-client.ts — load the Pagefind UI bundle at runtime (never via Vite import).
 *
 * Pagefind is emitted to dist/pagefind/ at build time; astro-pagefind serves it from dist/
 * during `astro dev`. A static `import('/pagefind/pagefind.js')` makes Vite try to resolve the
 * path at transform time and fails — this loader injects a module script in the browser instead.
 */

export type PagefindResult = {
  data: () => Promise<{
    url: string;
    meta: Record<string, string>;
    excerpt: string;
    content?: string;
  }>;
};

export type PagefindAPI = {
  options: (o: Record<string, unknown>) => Promise<void>;
  search: (q: string) => Promise<{ results: PagefindResult[] }>;
};

type WindowWithPagefind = Window & { __kbPagefind?: PagefindAPI };

const caches = new Map<number, Promise<PagefindAPI>>();

export function loadPagefind(excerptLength: number): Promise<PagefindAPI> {
  const cached = caches.get(excerptLength);
  if (cached) return cached;

  const promise = new Promise<PagefindAPI>((resolve, reject) => {
    const win = window as WindowWithPagefind;
    if (win.__kbPagefind) {
      void win.__kbPagefind.options({ excerptLength }).then(() => resolve(win.__kbPagefind!));
      return;
    }

    const onReady = () => {
      const api = win.__kbPagefind;
      if (!api) {
        reject(new Error('Pagefind module loaded but API missing'));
        return;
      }
      void api.options({ excerptLength }).then(() => resolve(api));
    };

    window.addEventListener('kb-pagefind-ready', onReady, { once: true });

    const boot = document.createElement('script');
    boot.type = 'module';
    boot.textContent = `
      import * as m from '/pagefind/pagefind.js';
      window.__kbPagefind = m;
      window.dispatchEvent(new CustomEvent('kb-pagefind-ready'));
    `;
    boot.onerror = () => {
      window.removeEventListener('kb-pagefind-ready', onReady);
      reject(
        new Error(
          'Pagefind index not found. Run `npm run build` once, then `npm run dev`.',
        ),
      );
    };
    document.head.append(boot);
  });

  caches.set(excerptLength, promise);
  return promise;
}