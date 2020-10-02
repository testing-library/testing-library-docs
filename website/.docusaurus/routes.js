import React from 'react'
import ComponentCreator from '@docusaurus/ComponentCreator'
export default [
  {
    path: '/',
    component: ComponentCreator('/', 'deb'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3d6'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '914'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c28'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3cf'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '31b'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0da'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '244'),
    exact: true,
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '6cc'),
    exact: true,
  },
  {
    path: '/blog/2018/12/29/new-site',
    component: ComponentCreator('/blog/2018/12/29/new-site', 'c2e'),
    exact: true,
  },
  {
    path: '/blog/2019/03/17/code-blocks',
    component: ComponentCreator('/blog/2019/03/17/code-blocks', '36a'),
    exact: true,
  },
  {
    path: '/blog/2019/04/25/new-org',
    component: ComponentCreator('/blog/2019/04/25/new-org', '361'),
    exact: true,
  },
  {
    path: '/help',
    component: ComponentCreator('/help', '416'),
    exact: true,
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '643'),
    exact: true,
  },
  {
    path: '/users',
    component: ComponentCreator('/users', '9b3'),
    exact: true,
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd34'),

    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'a74'),
        exact: true,
      },
      {
        path: '/docs/angular-testing-library/api',
        component: ComponentCreator('/docs/angular-testing-library/api', '526'),
        exact: true,
      },
      {
        path: '/docs/angular-testing-library/examples',
        component: ComponentCreator(
          '/docs/angular-testing-library/examples',
          '26f'
        ),
        exact: true,
      },
      {
        path: '/docs/angular-testing-library/intro',
        component: ComponentCreator(
          '/docs/angular-testing-library/intro',
          'e40'
        ),
        exact: true,
      },
      {
        path: '/docs/bs-react-testing-library/examples',
        component: ComponentCreator(
          '/docs/bs-react-testing-library/examples',
          '40c'
        ),
        exact: true,
      },
      {
        path: '/docs/bs-react-testing-library/intro',
        component: ComponentCreator(
          '/docs/bs-react-testing-library/intro',
          '16f'
        ),
        exact: true,
      },
      {
        path: '/docs/contributing',
        component: ComponentCreator('/docs/contributing', '68b'),
        exact: true,
      },
      {
        path: '/docs/cypress-testing-library/intro',
        component: ComponentCreator(
          '/docs/cypress-testing-library/intro',
          'dcc'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/api-async',
        component: ComponentCreator(
          '/docs/dom-testing-library/api-async',
          '914'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/api-configuration',
        component: ComponentCreator(
          '/docs/dom-testing-library/api-configuration',
          '9df'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/api-events',
        component: ComponentCreator(
          '/docs/dom-testing-library/api-events',
          '45b'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/api-helpers',
        component: ComponentCreator(
          '/docs/dom-testing-library/api-helpers',
          '560'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/api-queries',
        component: ComponentCreator(
          '/docs/dom-testing-library/api-queries',
          'b86'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/cheatsheet',
        component: ComponentCreator(
          '/docs/dom-testing-library/cheatsheet',
          'a34'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/example-intro',
        component: ComponentCreator(
          '/docs/dom-testing-library/example-intro',
          'ce4'
        ),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/faq',
        component: ComponentCreator('/docs/dom-testing-library/faq', 'bce'),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/install',
        component: ComponentCreator('/docs/dom-testing-library/install', '57c'),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/intro',
        component: ComponentCreator('/docs/dom-testing-library/intro', '5ff'),
        exact: true,
      },
      {
        path: '/docs/dom-testing-library/setup',
        component: ComponentCreator('/docs/dom-testing-library/setup', 'f7a'),
        exact: true,
      },
      {
        path: '/docs/ecosystem-bs-jest-dom',
        component: ComponentCreator('/docs/ecosystem-bs-jest-dom', '282'),
        exact: true,
      },
      {
        path: '/docs/ecosystem-eslint-plugin-jest-dom',
        component: ComponentCreator(
          '/docs/ecosystem-eslint-plugin-jest-dom',
          'c8d'
        ),
        exact: true,
      },
      {
        path: '/docs/ecosystem-eslint-plugin-testing-library',
        component: ComponentCreator(
          '/docs/ecosystem-eslint-plugin-testing-library',
          '7ba'
        ),
        exact: true,
      },
      {
        path: '/docs/ecosystem-jasmine-dom',
        component: ComponentCreator('/docs/ecosystem-jasmine-dom', '0ec'),
        exact: true,
      },
      {
        path: '/docs/ecosystem-jest-dom',
        component: ComponentCreator('/docs/ecosystem-jest-dom', 'be1'),
        exact: true,
      },
      {
        path: '/docs/ecosystem-jest-native',
        component: ComponentCreator('/docs/ecosystem-jest-native', '651'),
        exact: true,
      },
      {
        path: '/docs/ecosystem-react-select-event',
        component: ComponentCreator(
          '/docs/ecosystem-react-select-event',
          '079'
        ),
        exact: true,
      },
      {
        path: '/docs/ecosystem-riot-testing-library',
        component: ComponentCreator(
          '/docs/ecosystem-riot-testing-library',
          'dd1'
        ),
        exact: true,
      },
      {
        path: '/docs/ecosystem-user-event',
        component: ComponentCreator('/docs/ecosystem-user-event', '1b4'),
        exact: true,
      },
      {
        path: '/docs/example-codesandbox',
        component: ComponentCreator('/docs/example-codesandbox', '804'),
        exact: true,
      },
      {
        path: '/docs/example-drag',
        component: ComponentCreator('/docs/example-drag', '1cd'),
        exact: true,
      },
      {
        path: '/docs/example-external',
        component: ComponentCreator('/docs/example-external', '87c'),
        exact: true,
      },
      {
        path: '/docs/example-input-event',
        component: ComponentCreator('/docs/example-input-event', '5e0'),
        exact: true,
      },
      {
        path: '/docs/example-reach-router',
        component: ComponentCreator('/docs/example-reach-router', '8d6'),
        exact: true,
      },
      {
        path: '/docs/example-react-context',
        component: ComponentCreator('/docs/example-react-context', 'fb4'),
        exact: true,
      },
      {
        path: '/docs/example-react-hooks-useReducer',
        component: ComponentCreator(
          '/docs/example-react-hooks-useReducer',
          '7df'
        ),
        exact: true,
      },
      {
        path: '/docs/example-react-intl',
        component: ComponentCreator('/docs/example-react-intl', '729'),
        exact: true,
      },
      {
        path: '/docs/example-react-modal',
        component: ComponentCreator('/docs/example-react-modal', '249'),
        exact: true,
      },
      {
        path: '/docs/example-react-redux',
        component: ComponentCreator('/docs/example-react-redux', 'cdb'),
        exact: true,
      },
      {
        path: '/docs/example-react-router',
        component: ComponentCreator('/docs/example-react-router', 'c7c'),
        exact: true,
      },
      {
        path: '/docs/example-react-transition-group',
        component: ComponentCreator(
          '/docs/example-react-transition-group',
          '6e6'
        ),
        exact: true,
      },
      {
        path: '/docs/example-update-props',
        component: ComponentCreator('/docs/example-update-props', 'ab3'),
        exact: true,
      },
      {
        path: '/docs/guide-disappearance',
        component: ComponentCreator('/docs/guide-disappearance', '7a5'),
        exact: true,
      },
      {
        path: '/docs/guide-events',
        component: ComponentCreator('/docs/guide-events', 'da1'),
        exact: true,
      },
      {
        path: '/docs/guide-which-query',
        component: ComponentCreator('/docs/guide-which-query', '54b'),
        exact: true,
      },
      {
        path: '/docs/guiding-principles',
        component: ComponentCreator('/docs/guiding-principles', '037'),
        exact: true,
      },
      {
        path: '/docs/learning',
        component: ComponentCreator('/docs/learning', '2aa'),
        exact: true,
      },
      {
        path: '/docs/marko-testing-library/api',
        component: ComponentCreator('/docs/marko-testing-library/api', '4d9'),
        exact: true,
      },
      {
        path: '/docs/marko-testing-library/intro',
        component: ComponentCreator('/docs/marko-testing-library/intro', '2d0'),
        exact: true,
      },
      {
        path: '/docs/marko-testing-library/setup',
        component: ComponentCreator('/docs/marko-testing-library/setup', 'e9f'),
        exact: true,
      },
      {
        path: '/docs/nightwatch-testing-library/intro',
        component: ComponentCreator(
          '/docs/nightwatch-testing-library/intro',
          '6b1'
        ),
        exact: true,
      },
      {
        path: '/docs/pptr-testing-library/intro',
        component: ComponentCreator('/docs/pptr-testing-library/intro', '130'),
        exact: true,
      },
      {
        path: '/docs/preact-testing-library/api',
        component: ComponentCreator('/docs/preact-testing-library/api', '944'),
        exact: true,
      },
      {
        path: '/docs/preact-testing-library/example',
        component: ComponentCreator(
          '/docs/preact-testing-library/example',
          'a8d'
        ),
        exact: true,
      },
      {
        path: '/docs/preact-testing-library/intro',
        component: ComponentCreator(
          '/docs/preact-testing-library/intro',
          '629'
        ),
        exact: true,
      },
      {
        path: '/docs/preact-testing-library/learn',
        component: ComponentCreator(
          '/docs/preact-testing-library/learn',
          'b25'
        ),
        exact: true,
      },
      {
        path: '/docs/react-native-testing-library/example-intro',
        component: ComponentCreator(
          '/docs/react-native-testing-library/example-intro',
          '2fb'
        ),
        exact: true,
      },
      {
        path: '/docs/react-native-testing-library/intro',
        component: ComponentCreator(
          '/docs/react-native-testing-library/intro',
          '735'
        ),
        exact: true,
      },
      {
        path: '/docs/react-native-testing-library/setup',
        component: ComponentCreator(
          '/docs/react-native-testing-library/setup',
          '4bd'
        ),
        exact: true,
      },
      {
        path: '/docs/react-testing-library/api',
        component: ComponentCreator('/docs/react-testing-library/api', '0aa'),
        exact: true,
      },
      {
        path: '/docs/react-testing-library/cheatsheet',
        component: ComponentCreator(
          '/docs/react-testing-library/cheatsheet',
          '2a0'
        ),
        exact: true,
      },
      {
        path: '/docs/react-testing-library/example-intro',
        component: ComponentCreator(
          '/docs/react-testing-library/example-intro',
          '429'
        ),
        exact: true,
      },
      {
        path: '/docs/react-testing-library/faq',
        component: ComponentCreator('/docs/react-testing-library/faq', '8c1'),
        exact: true,
      },
      {
        path: '/docs/react-testing-library/intro',
        component: ComponentCreator('/docs/react-testing-library/intro', '2d5'),
        exact: true,
      },
      {
        path: '/docs/react-testing-library/migrate-from-enzyme',
        component: ComponentCreator(
          '/docs/react-testing-library/migrate-from-enzyme',
          'f56'
        ),
        exact: true,
      },
      {
        path: '/docs/react-testing-library/setup',
        component: ComponentCreator('/docs/react-testing-library/setup', 'ba0'),
        exact: true,
      },
      {
        path: '/docs/recipes',
        component: ComponentCreator('/docs/recipes', '9b9'),
        exact: true,
      },
      {
        path: '/docs/svelte-testing-library/api',
        component: ComponentCreator('/docs/svelte-testing-library/api', '576'),
        exact: true,
      },
      {
        path: '/docs/svelte-testing-library/example',
        component: ComponentCreator(
          '/docs/svelte-testing-library/example',
          '601'
        ),
        exact: true,
      },
      {
        path: '/docs/svelte-testing-library/intro',
        component: ComponentCreator(
          '/docs/svelte-testing-library/intro',
          '572'
        ),
        exact: true,
      },
      {
        path: '/docs/svelte-testing-library/setup',
        component: ComponentCreator(
          '/docs/svelte-testing-library/setup',
          '4d1'
        ),
        exact: true,
      },
      {
        path: '/docs/testcafe-testing-library/intro',
        component: ComponentCreator(
          '/docs/testcafe-testing-library/intro',
          'b8b'
        ),
        exact: true,
      },
      {
        path: '/docs/using-fake-timers',
        component: ComponentCreator('/docs/using-fake-timers', '137'),
        exact: true,
      },
      {
        path: '/docs/vue-testing-library/api',
        component: ComponentCreator('/docs/vue-testing-library/api', '7be'),
        exact: true,
      },
      {
        path: '/docs/vue-testing-library/cheatsheet',
        component: ComponentCreator(
          '/docs/vue-testing-library/cheatsheet',
          'a79'
        ),
        exact: true,
      },
      {
        path: '/docs/vue-testing-library/examples',
        component: ComponentCreator(
          '/docs/vue-testing-library/examples',
          '4f0'
        ),
        exact: true,
      },
      {
        path: '/docs/vue-testing-library/faq',
        component: ComponentCreator('/docs/vue-testing-library/faq', 'ba1'),
        exact: true,
      },
      {
        path: '/docs/vue-testing-library/intro',
        component: ComponentCreator('/docs/vue-testing-library/intro', 'd43'),
        exact: true,
      },
      {
        path: '/docs/vue-testing-library/setup',
        component: ComponentCreator('/docs/vue-testing-library/setup', '46b'),
        exact: true,
      },
    ],
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
]
