module.exports = {
  title: 'Testing Library',
  tagline:
    'Simple and complete testing utilities that encourage good testing practices',
  url: 'https://testing-library.com',
  baseUrl: '/',
  projectName: 'testing-library-docs',
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
    '/js/sidenav.js',
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500,700|Source+Code+Pro:500,700|Source+Sans+Pro:400,400i,700',
  ],
  favicon: 'img/octopus-32x32.png',
  customFields: {
    // List of projects/orgs using your project for the users page.
    // You should add a lightImage and a darkImage for each theme.
    users: [
      {
        caption: 'PayPal',
        lightImage: '/img/users/paypal.svg',
        darkImage: '/img/users/paypal.svg',
        infoLink: 'https://www.paypal.com',
        pinned: true,
      },
      {
        caption: 'Walmart Labs',
        lightImage: '/img/users/walmart.png',
        darkImage: '/img/users/walmart.png',
        infoLink: 'https://www.walmartlabs.com/',
      },
      {
        caption: 'Tiller',
        lightImage: '/img/users/tiller.svg',
        darkImage: '/img/users/tiller.svg',
        infoLink: 'https://www.tillersystems.com',
      },
      {
        caption: 'Codecademy',
        lightImage: '/img/users/codecademy.svg',
        darkImage: '/img/users/codecademy.svg',
        infoLink: 'https://www.codecademy.com',
        pinned: true,
      },
      {
        caption: 'Autodesk',
        lightImage: '/img/users/autodesk.svg',
        darkImage: '/img/users/autodesk.svg',
        infoLink: 'https://www.autodesk.com',
      },
      {
        caption: 'Sweepbright',
        lightImage: '/img/users/sweepbright.svg',
        darkImage: '/img/users/sweepbright.svg',
        infoLink: 'https://sweepbright.com',
      },
      {
        caption: 'TravelPerk',
        lightImage: '/img/users/travelperk.svg',
        darkImage: '/img/users/travelperk.svg',
        infoLink: 'https://www.travelperk.com',
        pinned: true,
      },
      {
        caption: 'Velo Payments',
        lightImage: '/img/users/velopayments.svg',
        darkImage: '/img/users/velopayments.svg',
        infoLink: 'https://www.velopayments.com',
        pinned: true,
      },
      {
        caption: 'Parsley Health',
        lightImage: '/img/users/parsleyhealth.svg',
        darkImage: '/img/users/parsleyhealth.svg',
        infoLink: 'https://www.parsleyhealth.com',
        pinned: true,
      },
      {
        caption: 'Facebook Open Source',
        lightImage: '/img/users/facebook-open-source.png',
        darkImage: '/img/users/facebook-open-source.png',
        infoLink: 'https://opensource.facebook.com',
      },
      {
        caption: 'Expedia Group',
        lightImage: '/img/users/expediagroup.svg',
        darkImage: '/img/users/expediagroup.svg',
        infoLink: 'https://www.expediagroup.com',
        pinned: true,
      },
      {
        caption: 'Wix.com',
        lightImage: '/img/users/wix.svg',
        darkImage: '/img/users/wix.svg',
        infoLink: 'https://www.wix.com',
      },
      {
        caption: 'Testsigma',
        lightImage: '/img/users/testsigma.svg',
        darkImage: '/img/users/testsigma.svg',
        infoLink: 'https://www.testsigma.com',
        pinned: true,
      },
      {
        caption: 'intelliHR',
        lightImage: '/img/users/intellihr.svg',
        darkImage: '/img/users/intellihr.svg',
        infoLink: 'https://intellihr.com.au',
        pinned: true,
      },
      {
        caption: 'Quizlet',
        lightImage: '/img/users/quizlet.svg',
        darkImage: '/img/users/quizlet.svg',
        infoLink: 'https://quizlet.com',
        pinned: true,
      },
      {
        caption: 'Radity',
        lightImage: '/img/users/radity.svg',
        darkImage: '/img/users/radity.svg',
        infoLink: 'https://radity.com',
      },
      {
        caption: 'Gusto',
        lightImage: '/img/users/gusto.svg',
        darkImage: '/img/users/gusto.svg',
        infoLink: 'https://gusto.com/',
        pinned: true,
      },
      {
        caption: 'iFood',
        lightImage: '/img/users/ifood.png',
        darkImage: '/img/users/ifood.png',
        infoLink: 'https://www.ifood.com.br',
        pinned: true,
      },
    ],
    fonts: {
      fontMain: ['Source Sans Pro', 'sans-serif'],
      fontCode: ['IBM Plex Mono', 'monospace'],
    },
    repoUrl: 'https://github.com/testing-library/dom-testing-library',
    docsRepoUrl: 'https://github.com/testing-library/testing-library-docs',
    docsPath: 'docs',
  },
  onBrokenLinks: 'log',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/testing-library/testing-library-docs/blob/master/docs/',
          path: '../docs',
          sidebarPath: './sidebars.json',
        },
        blog: {
          path: './blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      title: 'Testing Library',
      logo: {
        src: 'img/octopus-64x64.png',
      },
      items: [
        {
          to: 'docs/',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'docs/recipes',
          label: 'Recipes',
          position: 'right',
        },
        {
          to: '/help',
          label: 'Help',
          position: 'right',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
      ],
    },
    image: 'img/octopus-128x128.png',
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs',
            },
            {
              label: 'Examples',
              to: 'docs/example-codesandbox',
            },
            {
              label: 'API',
              to: 'docs/dom-testing-library/api-queries',
            },
            {
              label: 'Help',
              to: 'docs/dom-testing-library/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Stack Overflow',
              href:
                'https://stackoverflow.com/questions/tagged/react-testing-library',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/c6JN9fM',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              html: `
              <a target="_blank" rel="noreferrer noopener" class="github-button"
                href="https://github.com/testing-library/react-testing-library"
                data-icon="octicon-star"
                data-count-href="/testing-library/react-testing-library/stargazers"
                data-show-count="true"
                data-count-aria-label="# stargazers on GitHub"
                aria-label="Star this project on GitHub">Star</a>
              `,
            },
            {
              label: 'GitHub',
              href: 'https://github.com/testing-library',
            },
            {
              label: 'Edit Docs on GitHub',
              href: 'https://github.com/testing-library/testing-library-docs',
            },
            {
              label: 'Hosted by Netlify',
              href: 'https://netlify.com',
            },
          ],
        },
      ],
      copyright: `Copyright © 2018-${new Date().getFullYear()} Kent C. Dodds and contributors`,
      logo: {
        src: 'img/octopus-128x128.png',
      },
    },
    algolia: {
      apiKey: 'bda29e6557dc5be1ce5c05f2dbff8f33',
      indexName: 'testing-library',
    },
    gtag: {
      trackingID: 'UA-137787095-1',
    },
  },
}
