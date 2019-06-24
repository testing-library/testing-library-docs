---
id: setup
title: Setup
sidebar_label: Setup
---

`React Testing Library` does not require any configuration to be used (as
demonstrated in the example above). However, there are some things you can do
when configuring your testing framework to reduce some boilerplate. In these
docs we'll demonstrate configuring Jest, but you should be able to do similar
things with [any testing framework](#using-without-jest) (React Testing Library
does not require that you use Jest).

## Global Config

Adding options to your global test config can simplify the setup and teardown of
tests in individual files.

### Cleanup

You can ensure [`cleanup`](./api#cleanup) is called after each test and import
additional assertions by adding it to the setup configuration in Jest.

In Jest 24 and up, add the
[`setupFilesAfterEnv`](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array)
option to your Jest config:

```javascript
// jest.config.js
module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    // ... other setup files ...
  ],
  // ... other options ...
}
```

<details>

<summary>Older versions of Jest</summary>

Jest versions 23 and below use the
[`setupTestFrameworkScriptFile`](https://jestjs.io/docs/en/23.x/configuration#setuptestframeworkscriptfile-string)
option in your Jest config instead of `setupFilesAfterEnv`. This setup file can
be anywhere, for example `jest.setup.js` or `./utils/setupTests.js`.

If you are using the default setup from create-react-app, this option is set to
`src/setupTests.js`. You should create this file if it doesn't exist and put the
setup code there.

```javascript
// jest.config.js
module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),
  // ... other options ...
}
```

```javascript
// jest.setup.js

// add some helpful assertions
import 'jest-dom/extend-expect'

// this is basically: afterEach(cleanup)
import '@testing-library/react/cleanup-after-each'
```

</details>

## Custom Render

It's often useful to define a custom render method that includes things like
global context providers, data stores, etc. To make this available globally, one
approach is to define a utility file that re-exports everything from
`React Testing Library`. You can replace React Testing Library with this file in
all your imports. See [below](#configuring-jest-with-test-utils) for a way to
make your test util file accessible without using relative paths.

The example below sets up data providers using the
[`wrapper`](api.md#render-options) option to `render`.

```diff
// my-component.test.js
- import { render, fireEvent } from '@testing-library/react';
+ import { render, fireEvent } from '../test-utils';
```

```js
// test-utils.js
import { render } from '@testing-library/react'
import { ThemeProvider } from 'my-ui-lib'
import { TranslationProvider } from 'my-i18n-lib'
import defaultStrings from 'i18n/en-x-default'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme='light'>
      <TranslationProvider messages={defaultStrings}>
        {children}
      </TranslationProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
```

> **Note**
>
> Babel versions lower than 7 throw an error when trying to override the named
> export in the example above. See
> [#169](https://github.com/testing-library/react-testing-library/issues/169)
> and the workaround below.

<details>
<summary>Workaround for Babel 6</summary>

You can use CommonJS modules instead of ES modules, which should work in Node:

```js
// test-utils.js
const rtl = require('@testing-library/react')

const customRender = (ui, options) =>
  rtl.render(ui, {
    myDefaultOption: 'something',
    ...options,
  })

module.exports = {
  ...rtl,
  render: customRender,
}
```

</details>

### Add custom queries

> **Note**
>
> Generally you should not need to create custom queries for
> react-testing-library. Where you do use it, you should consider whether your
> new queries encourage you to test in a user-centric way, without testing
> implementation details.

You can define your own custom queries as described in the example in the
[Helpers API](/doc/dom-testing-library/api-helpers.md) documentation, or via the
[`buildQueries`](/doc/dom-testing-library/api-helpers#buildQueries) helper. Then
you can use them in any render call using the `queries` option. To make the
custom queries available globally, you can add them to your custom render method
as shown below.

In the example below, a new set of query variants are created for getting
elements by `data-cy`, a "test ID" convention mentioned in the
[Cypress.io](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)
documentation.

```js
// custom-queries.js
import { queryHelpers, buildQueries } from '@testing-library/react'

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataCy = (...args) =>
  queryHelpers.queryAllByAttribute('data-cy', ...args)

const getMultipleError = (c, dataCyValue) =>
  `Found multiple elements with the data-cy attribute of: ${dataCyValue}`
const getMissingError = (c, dataCyValue) =>
  `Unable to find an element with the data-cy attribute of: ${dataCyValue}`

const [
  queryByDataCy,
  getAllByDataCy,
  getByDataCy,
  findAllByDataCy,
  findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError)

export {
  queryByDataCy,
  queryAllByDataCy,
  getByDataCy,
  getAllByDataCy,
  findAllByDataCy,
  findByDataCy,
}
```

You can then override and append the new queries via the render function by
passing a [`queries`](api.md#render-options) option.

If you want to add custom queries globally, you can do this by defining a custom
render method:

```js
// test-utils.js
import { render, queries, queryHelpers } from '@testing-library/react'
import * as customQueries from './custom-queries'

const customRender = (ui, options) =>
  render(ui, { queries: { ...queries, ...customQueries } })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
```

You can then use your custom queries as you would any other query:

```js
const { getByDataCy } = render(<Component />)

expect(getByDataCy('my-component')).toHaveTextContent('Hello')
```

</details>

### Configuring Jest with Test Utils

To make your custom test file accessible in your Jest test files without using
relative imports (`../../test-utils`), add the folder containing the file to the
Jest `moduleDirectories` option.

This will make all the `.js` files in the test-utils directory importable
without `../`.

```diff
// my-component.test.js
- import { render, fireEvent } from '../test-utils';
+ import { render, fireEvent } from 'test-utils';
```

```diff
// jest.config.js
module.exports = {
  moduleDirectories: [
    'node_modules',
+   // add the directory with the test-utils.js file, for example:
+   'utils', // a utility folder
+    __dirname, // the root directory
  ],
  // ... other options ...
}
```

### Jest and Create React App

If your project is based on top of Create React App, to make the `test-utils`
file accessible without using relative imports, you just need to create a `.env`
file in the root of your project with the following configuration:

```
// Create React App project structure

$ app
.
├── .env
├── src
│   ├── utils
│   │  └── test-utils.js
│
```

```
// .env

// example if your utils folder is inside the /src directory.
NODE_PATH=src/utils
```

## Using without Jest

If you're running your tests in the browser bundled with webpack (or similar)
then `React Testing Library` should work out of the box for you. However, most
people using React Testing Library are using it with the Jest testing framework
with the `testEnvironment` set to `jest-environment-jsdom` (which is the default
configuration with Jest).

`jsdom` is a pure JavaScript implementation of the DOM and browser APIs that
runs in node. If you're not using Jest and you would like to run your tests in
Node, then you must install jsdom yourself. There's also a package called
`jsdom-global` which can be used to setup the global environment to simulate the
browser APIs.

First, install `jsdom` and `jsdom-global`.

```
npm install --save-dev jsdom jsdom-global
```

With mocha, the test command would look something like this:

```
mocha --require jsdom-global/register
```

Note, depending on the version of Node you're running, you may also need to
install @babel/polyfill (if you're using babel 7) or babel-polyfill (for babel
6).
