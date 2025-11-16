import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  // GitHub Pages serves the site from /<repo-name>/, so the assets must be referenced relatively.
  base: command === 'build' ? './' : '/',
}));
