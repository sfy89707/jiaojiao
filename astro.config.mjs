// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://sfy89707.github.io',
	base: '/jiaojiao',
	integrations: [mdx(), sitemap()],
});
