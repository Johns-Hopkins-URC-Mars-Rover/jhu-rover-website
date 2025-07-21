// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from '@astrojs/preact';

import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://jhurover.org',
  integrations: [preact(), sitemap()],
  adapter: netlify(),
});