import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thumuacapdonggiacao.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});