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
      formats: ['es', 'cjs'],
      fileName: (format) => {
        return format === 'es'
          ? 'better-dialog.js'
          : format === 'cjs'
          ? 'better-dialog.cjs'
          : `better-dialog.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['tua-body-scroll-lock'],
      output: {
        banner,
      },
    },
  },
  server: {
    open: '/playground/index.html',
  },
});
