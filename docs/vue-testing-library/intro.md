---
id: intro
title: Introduction
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

```
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

// src/TestComponent.vue
<template>
  <div>
    <span data-testid="test1">Hello World</span>
  </div>
</template>

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
and `queryAllBy` commands.
[See `dom-testing-library` repo for reference](https://github.com/kentcdodds/dom-testing-library#usage)

### render

The `render` function takes up to 3 parameters and returns an object with some
helper methods

1. Component - the Vue component to be tested.
2. RenderOptions - an object containing additional information to be passed to
   @vue/test-utils mount. This can be:

- store - The object definition of a Vuex store, if present `render` will
  configure a Vuex store and pass to mount.
- routes - A set of routes, if present render will configure VueRouter and pass
  to mount. All additional render options are passed to the vue-test-utils mount
  function in its options.

3. configurationCb - A callback to be called passing the Vue instance when
   created. This allows 3rd party plugins to be installed prior to mount.

### fireEvent

Lightweight wrapper around DOM element events and methods. Will call wait, so
can be awaited to allow effects to propagate.

### wait

When in need to wait for non-deterministic periods of time you can use `wait`,
to wait for your expectations to pass. The `wait` function is a small wrapper
around the
[`wait-for-expect`](https://github.com/TheBrainFamily/wait-for-expect) module.

Waiting can be very important in Vue components, @vue/test-utils has succeeded
in making the majority of updates happen synchronously however there are
occasions when wait will allow the DOM to update. For example, see
[`here`](https://github.com/dfcook/vue-testing-library/tree/master/tests/__tests__/validate-plugin.js)

## Examples

You'll find examples of testing with different libraries in
[the test directory](https://github.com/dfcook/vue-testing-library/tree/master/tests/__tests__).
Some included are:

- [`vuex`](https://github.com/dfcook/vue-testing-library/tree/master/tests/__tests__/vuex.js)
- [`vue-router`](https://github.com/dfcook/vue-testing-library/tree/master/tests/__tests__/vue-router.js)
- [`vee-validate`](https://github.com/dfcook/vue-testing-library/tree/master/tests/__tests__/validate-plugin.js)

[gh]: https://github.com/dfcook/vue-testing-library
