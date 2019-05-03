/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'PayPal',
    image: '/img/users/paypal.svg',
    infoLink: 'https://www.paypal.com',
    pinned: true,
  },
  {
    caption: 'Tiller',
    image: '/img/users/tiller.svg',
    infoLink: 'https://www.tillersystems.com',
    pinned: true,
  },
  {
    caption: 'Codecademy',
    image: '/img/users/codecademy.svg',
    infoLink: 'https://www.codecademy.com',
    pinned: true,
  },
  {
    caption: 'Autodesk',
    image: '/img/users/autodesk.svg',
    infoLink: 'https://www.autodesk.com',
    pinned: true,
  },
  {
    caption: 'Sweepbright',
    image: '/img/users/sweepbright.svg',
    infoLink: 'https://sweepbright.com',
    pinned: true,
  },
  {
    caption: 'TravelPerk',
    image: '/img/users/travelperk.svg',
    infoLink: 'https://www.travelperk.com',
    pinned: true,
  },
  {
    caption: 'Velo Payments',
    image: '/img/users/velopayments.svg',
    infoLink: 'https://www.velopayments.com',
    pinned: true,
  },
  {
    caption: 'Parsley Health',
    image: '/img/users/parsleyhealth.svg',
    infoLink: 'https://www.parsleyhealth.com',
    pinned: true,
  },
  {
    caption: 'Facebook Open Source',
    image: '/img/users/facebook-open-source.png',
    infoLink: 'https://opensource.facebook.com',
    pinned: true,
  },
  {
    caption: 'Expedia Group',
    image: '/img/users/expediagroup.svg',
    infoLink: 'https://www.expediagroup.com',
    pinned: true,
  },
  {
    caption: 'Wix.com',
    image: '/img/users/wix.svg',
    infoLink: 'https://www.wix.com',
    pinned: true,
  },
  {
    caption: 'Testsigma',
    image: '/img/users/testsigma.svg',
    infoLink: 'https://www.testsigma.com',
    pinned: true,
  }
]

const siteConfig = {
  title: 'Testing Library', // Title for your website.
  tagline:
    'Simple and complete testing utilities that encourage good testing practices',
  url: 'https://testing-library.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'testing-library-docs',
  // organizationName: 'alexkrolick', // shouldn't be needed except for GH pages
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'intro', label: 'Docs' },
    { doc: 'recipes', label: 'Recipes' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/octopus-64x64.png',
  footerIcon: 'img/octopus-128x128.png',
  favicon: 'img/octopus-32x32.png',

  /* Colors for website */
  colors: {
    primaryColor: '#292422',
    secondaryColor: '#2468e5',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
    '/js/sidenav.js',
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700|Source+Code+Pro:500,700|Source+Sans+Pro:400,400i,700',
  ],

  /* Custom fonts for website */
  fonts: {
    fontMain: ['Source Sans Pro', 'sans-serif'],
    fontCode: ['IBM Plex Mono', 'monospace'],
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2018-${new Date().getFullYear()} Kent C. Dodds and contributors`,

  // Highlight.js doesn't work well with JSX
  // pass an array of languages to use Prism, or true for all
  // usePrism: ['jsx'],
  usePrism: true,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    // Need to pass a value here that also works with Prism
    // theme: 'gruvbox-dark',
    theme: 'default',
    defaultLang: 'javascript',
  },

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Allow collapsing left nav headings
  // if true, all but focused section collapse by default
  docsSideNavCollapsible: false,

  // Open Graph and Twitter card images.
  ogImage: 'img/octopus-128x128.png',
  twitterImage: 'img/octopus-128x128.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: false,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/testing-library/dom-testing-library',
  docsRepoUrl: 'https://github.com/testing-library/testing-library-docs',
  editUrl:
    'https://github.com/testing-library/testing-library-docs/blob/master/docs/',

  // Algolia DocSearch config
  algolia: {
    apiKey: 'bda29e6557dc5be1ce5c05f2dbff8f33',
    indexName: 'testing-library',
  },

  // Google Analytics
  gaTrackingId: 'UA-137787095-1',
}

module.exports = siteConfig
