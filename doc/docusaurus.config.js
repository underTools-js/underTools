// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const currentVersion = '1.2.5';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'underTools',
  tagline: 'Light, fast, and complete Javascript library',
  url: 'https://undertoolsjs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'underTools-js',
  projectName: 'underTools',
  deploymentBranch: 'doc',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: currentVersion,
          // versions: {
          //   current: {
          //     label: currentVersion,
          //     path: currentVersion,
          //   },
          // },
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/underTools-js/underTools/tree/dev/doc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'underTools',
        logo: {
          alt: 'underTools',
          src: 'img/undertools.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {
          //   type: 'docsVersionDropdown',
          // },
          {
            href: 'https://github.com/underTools-js/underTools',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.npmjs.com/package/undertools',
            label: 'NPM',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                // to: `/docs/${currentVersion}/intro`,
                to: `/docs/intro`,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Discord',
              //   href: '#',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/undetools',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/underTools-js/underTools',
              },
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/undertools',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()}, underTools.`,
      },
      metadata: [
        {
          name: 'description',
          content: 'underTools facilitates the manipulation of the DOM, the events, the API calls and adds interesting functions, not present in the native Javascript.'
        },
        {
          name: 'author',
          content: 'Elliot Sutton a.k.a Skyleen'
        }
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
