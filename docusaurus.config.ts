const { themes } = require('prism-react-renderer')

const lightCodeTheme = themes.github
const darkCodeTheme = themes.github

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Spantree/Trifork Drone AI Solutions',
  tagline: 'Autonomous Inventory Intelligence for the Physical World',
  url: 'https://hypotheses-briefs.span.land',
  baseUrl: '/',
  projectName: 'hypotheses-briefs',
  organizationName: 'Spantree',
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
          path: 'docs/examples/spantree-drone-ai',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
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
        title: 'Drone AI Solutions',
        logo: {
          alt: 'Spantree Logo',
          src: 'img/logos/spantree-long-gray-800.svg',
          srcDark: 'img/logos/spantree-long-gray-50.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Overview',
          },
          {
            type: 'doc',
            docId: 'product/index',
            position: 'left',
            label: 'Product',
          },
          {
            type: 'doc',
            docId: 'customer/index',
            position: 'left',
            label: 'Customer',
          },
          {
            type: 'doc',
            docId: 'distribution/index',
            position: 'left',
            label: 'Distribution',
          },
          {
            type: 'doc',
            docId: 'competition/index',
            position: 'left',
            label: 'Competition',
          },
          {
            href: 'https://github.com/spantree/hypotheses-briefs',
            label: 'GitHub',
            position: 'right',
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
        copyright: `Copyright © ${new Date().getFullYear()} Spantree, LLC. Built with Docusaurus.`,
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
