module.exports = {
  recipes: [
    'recipes',
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
        'example-codesandbox',
        'example-external',
        'example-findByText',
        'example-input-event',
        'example-react-context',
        'example-react-hooks-useReducer',
        'example-react-formik',
        'example-react-intl',
        'example-react-redux',
        'example-react-router',
        'example-reach-router',
        'example-react-transition-group',
        'example-react-modal',
        'example-update-props',
      ],
    },
    {
      type: 'category',
      label: 'Help',
      collapsed: false,
      items: ['learning', 'contributing'],
    },
  ],
  docs: [
    {
      'Getting Started': [
        'introduction',
        'guiding-principles',
        'dom-testing-library/faq',
      ],
    },
    {
      type: 'category',
      label: 'Core API',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Queries',
          collapsed: false,
          items: [
            'queries/about',
            'queries/byrole',
            'queries/bylabeltext',
            'queries/byplaceholdertext',
            'queries/bytext',
            'queries/bydisplayvalue',
            'queries/byalttext',
            'queries/bytitle',
            'queries/bytestid',
          ],
        },
        {
          type: 'category',
          label: 'User Actions',
          collapsed: false,
          items: [
            'dom-testing-library/api-events',
            'dom-testing-library/api-async',
            'guide-disappearance',
            'guide-events',
            'using-fake-timers',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsed: false,
          items: [
            'dom-testing-library/api-accessibility',
            'dom-testing-library/api-custom-queries',
            'dom-testing-library/api-debugging',
            'dom-testing-library/api-within',
            'dom-testing-library/api-configuration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Frameworks',
      items: [
        {
          'DOM Testing Library': [
            'dom-testing-library/intro',
            'dom-testing-library/install',
            'dom-testing-library/example-intro',
            'dom-testing-library/setup',
            'dom-testing-library/api',
            'dom-testing-library/cheatsheet',
          ],
        },
        {
          'React Testing Library': [
            'react-testing-library/intro',
            'react-testing-library/example-intro',
            'react-testing-library/setup',
            'react-testing-library/api',
            'react-testing-library/migrate-from-enzyme',
            'react-testing-library/faq',
            'react-testing-library/cheatsheet',
          ],
        },
        {
          'Vue Testing Library': [
            'vue-testing-library/intro',
            'vue-testing-library/examples',
            'vue-testing-library/setup',
            'vue-testing-library/api',
            'vue-testing-library/cheatsheet',
            'vue-testing-library/faq',
          ],
        },
        {
          'Angular Testing Library': [
            'angular-testing-library/intro',
            'angular-testing-library/examples',
            'angular-testing-library/api',
            'angular-testing-library/version-compatibility',
            'angular-testing-library/faq',
          ],
        },
        {
          'Svelte Testing Library': [
            'svelte-testing-library/intro',
            'svelte-testing-library/setup',
            'svelte-testing-library/example',
            'svelte-testing-library/api',
            'svelte-testing-library/faq',
          ],
        },
        {
          'Marko Testing Library': [
            'marko-testing-library/intro',
            'marko-testing-library/setup',
            'marko-testing-library/api',
          ],
        },
        {
          'Preact Testing Library': [
            'preact-testing-library/intro',
            'preact-testing-library/example',
            'preact-testing-library/api',
            'preact-testing-library/learn',
          ],
        },
        {
          'Reason Testing Library': [
            'bs-react-testing-library/intro',
            'bs-react-testing-library/examples',
          ],
        },
        {
          'Native Testing Library': [
            'react-native-testing-library/intro',
            'react-native-testing-library/example-intro',
            'react-native-testing-library/setup',
          ],
        },
        {
          'Solid Testing Library': [
            'solid-testing-library/intro',
            'solid-testing-library/api',
          ],
        },
        'cypress-testing-library/intro',
        'pptr-testing-library/intro',
        'testcafe-testing-library/intro',
        'nightwatch-testing-library/intro',
        'webdriverio-testing-library/intro',
      ],
    },
    {
      type: 'category',
      label: 'User Interactions',
      collapsed: true,
      items: [
        'user-event/intro',
        'user-event/install',
        'user-event/setup',
        'user-event/options',
        'user-event/pointer',
        'user-event/keyboard',
        'user-event/clipboard',
        'user-event/utility',
        'user-event/convenience',
        'user-event/v13',
      ],
    },
    {
      Ecosystem: [
        'ecosystem-jest-dom',
        'ecosystem-bs-jest-dom',
        'ecosystem-jest-native',
        'ecosystem-react-select-event',
        'ecosystem-eslint-plugin-testing-library',
        'ecosystem-eslint-plugin-jest-dom',
        'ecosystem-riot-testing-library',
        'ecosystem-jasmine-dom',
        'ecosystem-query-extensions',
        'ecosystem-rtl-simple-queries',
        'ecosystem-testing-library-selector',
        'ecosystem-cli-testing-library',
      ],
    },
  ],
}
