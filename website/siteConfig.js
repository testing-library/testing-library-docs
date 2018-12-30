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
  // {
  //   caption: 'User1',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: '/img/docusaurus.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'React Testing Library', // Title for your website.
  tagline: 'Simple and complete React DOM testing utilities that encourage good testing practices',
  url: 'https://react-testing-library.netlify.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'react-testing-library-docs',
  // organizationName: 'alexkrolick', // shouldn't be needed except for GH pages
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'readme', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/goat-64x64.png',
  footerIcon: 'img/goat-128x128.png',
  favicon: 'img/goat-32x32.png',

  /* Colors for website */
  colors: {
    primaryColor: '#292422',
    secondaryColor: '#556699',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700|Source+Code+Pro:500,700|Source+Sans+Pro:400,400i,700',
    '/css/code-block-buttons.css'
  ],

  /* Custom fonts for website */
  fonts: {
    fontMain: [
      "Source Sans Pro",
      "sans-serif"
    ],
    fontCode: [
      "IBM Plex Mono",
      "monospace"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2018-${new Date().getFullYear()} Kent Dodds and contributors`,
  
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

  // Open Graph and Twitter card images.
  ogImage: 'img/logo-128x128.png',
  twitterImage: 'img/goat-128x128.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/kentcdodds/react-testing-library',
    docsRepoUrl: 'https://github.com/alexkrolick/react-testing-library-docs',
};

module.exports = siteConfig;
