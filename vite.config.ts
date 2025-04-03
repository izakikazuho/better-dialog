import { defineConfig } from 'vite';

const banner = `/*!
 * better-dialog
 * (c) 2025 izakikazuho
 * Released under the MIT License.
 */`;

export default defineConfig({
  root: '.',
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Better Dialog',
      fileName: 'better-dialog',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [],
      output: {
        banner,
      },
    },
  },
  server: {
    open: '/playground/index.html',
  },
});
