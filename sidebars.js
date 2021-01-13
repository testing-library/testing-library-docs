module.exports = {
  queries: [
    'queries/about',
    {
      type: 'category',
      label: 'Queries',
      collapsed: false,
      items: [
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
  ],
  recipes: [
    'recipes',
    {
      Guides: ['guide-disappearance', 'guide-events', 'using-fake-timers'],
    },
    {
      Examples: [
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
      Help: ['learning', 'contributing'],
    },
  ],
  docs: [
    {
      'Getting Started': [
        'intro',
        'guiding-principles',
        'dom-testing-library/faq',
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
            'dom-testing-library/api-queries',
            'dom-testing-library/api-events',
            'dom-testing-library/api-async',
            'dom-testing-library/api-helpers',
            'dom-testing-library/api-configuration',
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
          'Marko Testing Library': [
            'marko-testing-library/intro',
            'marko-testing-library/setup',
            'marko-testing-library/api',
          ],
        },
        {
          'Angular Testing Library': [
            'angular-testing-library/intro',
            'angular-testing-library/examples',
            'angular-testing-library/api',
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
          'Svelte Testing Library': [
            'svelte-testing-library/intro',
            'svelte-testing-library/setup',
            'svelte-testing-library/example',
            'svelte-testing-library/api',
          ],
        },
        'cypress-testing-library/intro',
        'pptr-testing-library/intro',
        'testcafe-testing-library/intro',
        'nightwatch-testing-library/intro',
      ],
    },
    {
      Ecosystem: [
        'ecosystem-user-event',
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
      ],
    },
    { Help: ['learning', 'contributing'] },
  ],
}
