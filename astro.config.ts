import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { remarkWikilinks } from './src/lib/wikilinks';

function loadRedirects(): Record<string, string> {
  const path = 'kb-astro/site-data/redirects.json';
  if (!existsSync(path)) return {};
  try {
    const items = JSON.parse(readFileSync(path, 'utf8')) as { from: string; to: string }[];
    return Object.fromEntries(items.map(({ from, to }) => [from, to]));
  } catch {
    return {};
  }
}

// Logos52 knowledge base — re-platformed from Quartz to Astro.
// - GitHub Pages user site → site root is https://logos52.github.io/, no base path.
// - Folder-based URLs (`build.format: 'directory'`) so slugs stay 1:1 with the old Quartz paths.
// - Pagefind builds a full-body search index from the rendered HTML at build time.
export default defineConfig({
  site: 'https://logos52.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  redirects: loadRedirects(),
  integrations: [sitemap(), pagefind()],
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
