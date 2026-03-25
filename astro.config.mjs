import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: [],
  },
  site: 'https://your-tattoo-shop.com',
});
