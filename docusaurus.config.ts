const { themes } = require('prism-react-renderer')

const lightCodeTheme = themes.github
const darkCodeTheme = themes.github

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'The Sweat Box',
  tagline: 'Hypothesis Brief — High-Intensity Fitness for the Chicago Loop',
  url: 'https://sweat-box.pages.dev',
  baseUrl: '/',
  projectName: 'sweat-box',
  organizationName: 'The Sweat Box',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/spantree/hypotheses-briefs/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    async function tailwind(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'The Sweat Box',
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Overview',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Github',
          //       href: 'https://github.com/Spantree',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/spantreellc',
          //     },
          //   ],
          // },
          // {
          //   title: 'Resources',
          //   items: [
          //     {
          //       label: 'The Four Steps to the Ephiphany',
          //       href: 'https://www.amazon.com/Four-Steps-Epiphany-Steve-Blank/dp/0989200507',
          //     },
          //     {
          //       label: 'Steve Blank',
          //       href: 'https://steveblank.com/',
          //     },
          //     {
          //       label: 'Google Design Sprints',
          //       href: 'http://www.gv.com/sprint/',
          //     },
          //   ],
          // },
        ],
        copyright: `The Sweat Box — Hypothesis Brief`,
      },
      metadata: [
        {
          name: 'font-inter',
          content: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap`,
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
          },
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
}
