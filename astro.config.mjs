import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  srcDir: 'src',
  markdown: {
    smartypants: false
  },
  build: {
    inlineStylesheets: 'never'
  }
});
