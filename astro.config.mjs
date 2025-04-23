import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: isProd
    ? 'https://austinlili.github.io/Austin_website'
    : 'http://localhost:4321',
  base: isProd ? '/Austin_website/' : '/',
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  }
});
