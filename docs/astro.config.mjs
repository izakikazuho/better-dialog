// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  integrations: [
    starlight({
      title: 'Better Dialog',
      favicon: '/favicon.png',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
        alt: 'Better Dialog',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          lang: 'en',
          label: 'English',
        },
        ja: {
          label: '日本語',
        },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/izakikazuho/better-dialog' }],
      sidebar: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'Getting Started',
          link: '/getting-started/',
        },
        {
          label: 'Animations',
          link: '/animations/',
        },
        {
          label: 'Plugins',
          link: '/plugins/',
        },
        {
          label: 'API',
          autogenerate: { directory: 'api' },
        },
      ],
      customCss: ['./src/assets/fonts/index.css', './src/assets/styles/style.css'],
    }),
  ],
});
