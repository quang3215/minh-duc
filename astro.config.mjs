import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thumuacapdonggiacao.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
  integrations: [tailwind(), sitemap()],
});