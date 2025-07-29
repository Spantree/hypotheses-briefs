import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main sidebar for the drone AI documentation
  mainSidebar: [
    'index',
    {
      type: 'category',
      label: 'Product',
      link: {
        type: 'doc',
        id: 'product',
      },
      items: [
        'product-features',
        'product-benefits',
        'product-implementation',
      ],
    },
    'customer',
    'pricing',
    'distribution',
    {
      type: 'category',
      label: 'Competition',
      link: {
        type: 'doc',
        id: 'competition',
      },
      items: [
        'competition-direct',
        'competition-platforms',
        'competition-alternatives',
      ],
    },
    'market-type',
  ],
}

export default sidebars
