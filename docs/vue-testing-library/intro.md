---
id: intro
title: Vue Testing Library
---

[`vue-testing-library`][gh] is a lightweight adapter allowing
`dom-testing-library` to be used to test [Vue](https://vuejs.org/) components
built on top of `@vue/test-utils`.

```
npm install --save-dev vue vue-testing-library
```

- [vue-testing-library on GitHub][gh]

## Usage

```
npm install --save-dev vue-testing-library
                       jest
                       vue-jest
                       babel-jest
                       babel-preset-env
                       babel-plugin-transform-runtime
```

```json
// package.json
"scripts": {
  "test": "jest"
}

"jest": {
  "moduleDirectories": [
    "node_modules",
    "src"
  ],
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  }
}
```
```
// .babelrc
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }]
  ],
  "plugins": [
    "transform-runtime"
  ],
  "env": {
    "test": {
      "presets": ["env"]
    }
  }
}
```
```html
// src/TestComponent.vue
<template>
  <div>
    <span data-testid="test1">Hello World</span>
  </div>
</template>
```
```js
// src/TestComponent.spec.js
import 'jest-dom/extend-expect'
import { render } from 'vue-testing-library'
import TestComponent from './TestComponent'

test('should render HelloWorld', () => {
  const { queryByTestId } = render(TestComponent)
  expect(queryByTestId('test1')).toHaveTextContent('Hello World')
})
```

You can now use all of `dom-testing-library`'s `getBy`, `getAllBy`, `queryBy`
and `queryAllBy` commands. See [here](dom-testing-library/api-queries.md) for
usage.

### render

The `render` function takes up to 3 parameters and returns an object with some
helper methods

1. Component - the Vue component to be tested.
2. RenderOptions - an object containing additional information to be passed to
   @vue/test-utils mount. This can include:

- store - The object definition of a Vuex store. If present, `render` will
  configure a Vuex store and pass to mount.
- routes - A set of routes. If present, render will configure VueRouter and pass
  to mount.

  All additional render options are passed to the vue-test-utils mount function
  in its options.

3. configurationCb - A callback to be called passing the Vue instance when
   created. This allows 3rd party plugins to be installed prior to mount.

### Forwarded methods from dom-testing-library

vue-testing-library forwards all exports from dom-testing-library but it alters
`fireEvent` so that all events are async (ie: `await fireEvent.click(button)`)

In particular, the `wait` utility can be very important in Vue components,
@vue/test-utils has succeeded in making the majority of updates happen
synchronously however there are occasions when wait will allow the DOM to
update. For example, see
[`here`](https://github.com/testing-library/vue-testing-library/tree/master/tests/__tests__/end-to-end.js).

## Examples

You'll find examples of testing with different libraries in
[the test directory](https://github.com/testing-library/vue-testing-library/tree/master/tests/__tests__).
Some included are:

- [`vuex`](https://github.com/testing-library/vue-testing-library/blob/master/tests/__tests__/vuex.js)
- [`vue-router`](https://github.com/testing-library/vue-testing-library/tree/master/tests/__tests__/vue-router.js)
- [`vee-validate`](https://github.com/testing-library/vue-testing-library/tree/master/tests/__tests__/validate-plugin.js)

[gh]: https://github.com/testing-library/vue-testing-library
