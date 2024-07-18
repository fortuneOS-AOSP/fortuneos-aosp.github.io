import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'FortuneOS',
  tagline: 'lorem',
  favicon: 'img/favicon.ico',
  url: 'https://hefatss.github.io',
  baseUrl: '/FortuneOS-Blog',
  organizationName: 'fortuneOS-AOSP', // Usually your GitHub org/user name.
  projectName: 'FortuneOS', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: 'FortuneOS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/fos.svg',
        },
        items: [
          {to: '/', label: 'General', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/fortuneOS-AOSP",
            position: "right",
            className: "header-github-link",
          },
          {
            label: "Community",
            position: "left",
            items: [
              {
                label: "Telegram (Channel)",
                to: "https://t.me/FortuneOSNews",
              },
              {
                label: "Telegram (Chat)",
                to: "https://t.me/FortuneOSChat",
              },
            ],
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} FortuneOS.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
