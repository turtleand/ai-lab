import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lab.turtleand.com',
  integrations: [mdx(), sitemap()],
  srcDir: 'src',
  markdown: {
    smartypants: false
  },
  build: {
    inlineStylesheets: 'never'
  }
});
