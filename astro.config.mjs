import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import decapCmsOauth from 'astro-decap-cms-oauth';

export default defineConfig({
  integrations: [tailwind(), sitemap(), decapCmsOauth({ adminDisabled: true })],
  adapter: vercel(),
  output: 'static',
  image: {
    domains: [],
  },
  site: 'https://dragon-city-tattoo.vercel.app',
});
