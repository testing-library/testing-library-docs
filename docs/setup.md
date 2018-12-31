---
id: setup
title: Setup
sidebar_label: Setup
---

`react-testing-library` does not require any configuration to be used (as
demonstrated in the example above). However, there are some things you can do
when configuring your testing framework to reduce some boilerplate. In these
docs we'll demonstrate configuring Jest, but you should be able to do similar
things with any testing framework (react-testing-library does not require that
you use Jest).

## Global Config

There are several options you can add to your global test config that simplify
the setup and teardown of tests in individual files. For example, you can ensure
[`cleanup`](./ecosystem-react-testng-library#cleanup) is called after each test and import additional
assertions.

To do this with Jest, you can add the
[`setupTestFrameworkScriptFile`](https://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string)
option to your Jest config. The setup file can be anywhere, for example
`jest.setup.js` or `./utils/setupTests.js`.

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
import 'react-testing-library/cleanup-after-each'
```

## Custom Render

It's often useful to define a custom render method that includes things like
global context providers, data stores, etc. To make this available globally, one
approach is to define a utility file that re-exports everything from
`react-testing-library`. You can replace react-testing-library with this file in
all your imports.

```diff
// my-component.test.js
- import { render, fireEvent } from 'react-testing-library';
+ import { render, fireEvent } from '../test-utils';
```

```js
// test-utils.js
import {render} from 'react-testing-library'
import {ThemeProvider} from 'my-ui-lib'
import {TranslationProvider} from 'my-i18n-lib'
import defaultStrings from 'i18n/en-x-default'

const customRender = (node, options) => {
  return render(
    <ThemeProvider theme="light">
      <TranslationProvider messages={defaultStrings}>
        {node}
      </TranslationProvider>
    </ThemeProvider>,
    options,
  )
}

// re-export everything
export * from 'react-testing-library'

// override render method
export {customRender as render}
```

To make this file accessible without using relative imports, add the folder
containing the file to the Jest `moduleDirectories` option. Note: this will make
_all_ the .js files in that directory importable without `../`.

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

If your project is based on top of Create React App, to make the file accessible
without using relative imports, you just need to create a `.env` file in the
root of your project with the following configuration:

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

There is the case when you want to wrap your components in a `Provider`, this
might cause conflicts when `rerender`ed. To achieve this, we suggest the
`rerender` should be implemented the same way custom queries, by changing the
return value of the customRender.

```js
// test-utils.js

const customRender = (ui, options) => {
  const rendered = render(<div>{ui}</div>, options)
  return {
    ...rendered,
    rerender: newUi =>
      customRender(newUi, {
        container: rendered.container,
        baseElement: rendered.baseElement,
      }),
  }
}
```

### Export Issue with Babel Versions Lower Than 7

Babel versions lower than 7 throw an error when trying to override the named
export in the example above. (See
[#169](https://github.com/kentcdodds/react-testing-library/issues/169).)

<details>
<summary>Workaround</summary>

You can use CommonJS modules instead of ES modules, which should work in Node:

```js
// test-utils.js
const rtl = require('react-testing-library')

const customRender = (node, options) => {
  return rtl.render(<Something>{node}</Something>)
}

module.exports = {
  ...rtl,
  render: customRender,
}
```

</details>

## Using without Jest

If you're running your tests in the browser bundled with webpack (or similar) then `react-testing-library` should work out of the box for you. However, most people using react-testing-library are using it with the Jest testing framework with the `testEnvironment` set to `jest-environment-jsdom` (which is the default configuration with Jest).

`jsdom` is a pure JavaScript implementation of the DOM and browser APIs that runs in node. If you're not using Jest and you would like to run your tests in Node, then you must install jsdom yourself. There's also a package called `jsdom-global` which can be used to setup the global environment to simulate the browser APIs.

First, install `jsdom` and `jsdom-global`.

```
npm install --save-dev jsdom jsdom-global
```

With mocha, the test command would look something like this:

```
mocha --require jsdom-global/register
```

Note, depending on the version of Node you're running, you may also need to install @babel/polyfill (if you're using babel 7) or babel-polyfill (for babel 6).
