import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import { remarkWikilinks } from './src/lib/wikilinks';
import { rehypeFoldRelated } from './src/lib/fold-related';
import { loadAllRedirects } from './src/redirects/load-redirects.mjs';

// Logos52 knowledge base — re-platformed from Quartz to Astro.
// - GitHub Pages user site → site root is https://logos52.github.io/, no base path.
// - Folder-based URLs (`build.format: 'directory'`) so slugs stay 1:1 with the old Quartz paths.
// - Pagefind builds a full-body search index from the rendered HTML at build time.
export default defineConfig({
  site: 'https://logos52.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  redirects: loadAllRedirects(),
  integrations: [sitemap(), pagefind()],
  vite: {
    plugins: [
      {
        name: 'external-pagefind',
        enforce: 'pre',
        resolveId(id) {
          if (id === '/pagefind/pagefind.js' || id.startsWith('/pagefind/')) {
            return { id, external: true };
          }
        },
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkWikilinks],
    rehypePlugins: [rehypeFoldRelated],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
