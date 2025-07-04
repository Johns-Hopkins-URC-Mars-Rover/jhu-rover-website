// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import preact from '@astrojs/preact';

import netlify from "@astrojs/netlify";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact()],
  adapter: netlify(),
});