---
id: version-5.4.1-setup
title: Setup
sidebar_label: Setup
original_id: setup
---

`react-testing-library` does not require any configuration to be used (as
demonstrated in the example above). However, there are some things you can do
when configuring your testing framework to reduce some boilerplate. In these
docs we'll demonstrate configuring Jest, but you should be able to do similar
things with any testing framework (react-testing-library does not require that
you use Jest).

### Global Config

There are several options you can add to your global test config that simplify
the setup and teardown of tests in individual files. For example, you can ensure
[`cleanup`](#cleanup) is called after each test and import additional
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
  setupTestFrameworkScriptFile: require.resolve("./jest.setup.js")
  // ... other options ...
};
```

```javascript
// jest.setup.js

// add some helpful assertions
import "jest-dom/extend-expect";

// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each";
```

### Custom Render

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
import { render } from "react-testing-library";
import { ThemeProvider } from "my-ui-lib";
import { TranslationProvider } from "my-i18n-lib";
import defaultStrings from "i18n/en-x-default";

const customRender = (node, options) => {
  return render(
    <ThemeProvider theme="light">
      <TranslationProvider messages={defaultStrings}>
        {node}
      </TranslationProvider>
    </ThemeProvider>,
    options
  );
};

// re-export everything
export * from "react-testing-library";

// override render method
export { customRender as render };
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
  const rendered = render(<div>{ui}</div>, options);
  return {
    ...rendered,
    rerender: newUi =>
      customRender(newUi, {
        container: rendered.container,
        baseElement: rendered.baseElement
      })
  };
};
```

#### Export Issue with Babel Versions Lower Than 7

Babel versions lower than 7 throw an error when trying to override the named
export in the example above. (See
[#169](https://github.com/kentcdodds/react-testing-library/issues/169).)

<details>
<summary>Workaround</summary>

You can use CommonJS modules instead of ES modules, which should work in Node:

```js
// test-utils.js
const rtl = require("react-testing-library");

const customRender = (node, options) => {
  return rtl.render(<Something>{node}</Something>);
};

module.exports = {
  ...rtl,
  render: customRender
};
```

</details>

<!--
Links:
-->

<!-- prettier-ignore-start -->

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/react-testing-library.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/react-testing-library
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/react-testing-library.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/react-testing-library
[version-badge]: https://img.shields.io/npm/v/react-testing-library.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-testing-library
[downloads-badge]: https://img.shields.io/npm/dm/react-testing-library.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-testing-library
[spectrum-badge]: https://withspectrum.github.io/badge/badge.svg
[spectrum]: https://spectrum.chat/react-testing-library
[license-badge]: https://img.shields.io/npm/l/react-testing-library.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-testing-library/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-testing-library/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/react-testing-library.svg?style=social
[github-watch]: https://github.com/kentcdodds/react-testing-library/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/react-testing-library.svg?style=social
[github-star]: https://github.com/kentcdodds/react-testing-library/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-testing-library%20by%20%40kentcdodds%20https%3A%2F%2Fgithub.com%2Fkentcdodds%2Freact-testing-library%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/react-testing-library.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[set-immediate]: https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
[guiding-principle]: https://twitter.com/kentcdodds/status/977018512689455106
[data-testid-blog-post]: https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269
[dom-testing-lib-textmatch]: https://github.com/kentcdodds/dom-testing-library#textmatch
[bugs]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc
[requests]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen
[good-first-issue]: https://github.com/kentcdodds/react-testing-library/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3A"good+first+issue"+
[reactiflux]: https://www.reactiflux.com/
[stackoverflow]: https://stackoverflow.com/questions/tagged/react-testing-library

<!-- prettier-ignore-end -->
