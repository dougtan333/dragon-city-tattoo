import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  image: {
    domains: [],
  },
  site: 'https://dragon-city-tattoo.vercel.app',
});
