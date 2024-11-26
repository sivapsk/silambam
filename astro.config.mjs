import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sivapsk.github.io',
  base: '/silambam',
  build: {
    assets: 'assets'
  }
});
