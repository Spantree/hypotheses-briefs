const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.github;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hypotheses Briefs",
  tagline: "Charting the Course of Customer Discovery",
  url: "https://hypotheses-briefs.github.io/", // Your website URL
  baseUrl: "/",
  projectName: "hypotheses-briefs",
  organizationName: "Spantree",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/spantree/hypotheses-briefs/edit/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    async function tailwind(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        // title: 'Spantree Docs',
        logo: {
          alt: "Spantree Logo",
          src: "img/logos/spantree-long-black-on-white.svg",
          srcDark: "img/logos/spantree-long-white-609.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Hypotheses Briefs",
          },
          {
            type: "doc",
            docId: "components/product",
            position: "left",
            label: "Components",
          },
          {
            type: "doc",
            docId: "example-airbnb/introduction",
            position: "left",
            label: "Airbnb Example",
          },
          {
            type: "doc",
            docId: "example-foosoft/introduction",
            position: "left",
            label: "Foosoft Example",
          },
          {
            href: "https://github.com/spantree/hypotheses-briefs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/Spantree",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/spantreellc",
              },
            ],
          },

          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/spantree/hypotheses-briefs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      metadata: [
        {
          name: "font-inter",
          content: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap`,
          tagName: "link",
          attributes: {
            rel: "stylesheet",
          },
        },
      ],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};
