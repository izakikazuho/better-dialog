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
      head: [
        {
          tag: 'script',
          content: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PHZQXVT');`,
        },
      ],
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
