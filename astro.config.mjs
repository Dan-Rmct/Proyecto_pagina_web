// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://dan-rmct.github.io",
  base: "/Proyecto_pagina_web/"
  vite: {
    plugins: [tailwindcss()]
  }
});
