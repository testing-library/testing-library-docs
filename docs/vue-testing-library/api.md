---
id: api
title: API
---

`Vue Testing Library` re-exports everything from `DOM Testing Library`.

It also exposes these methods:

- [`render(Component, options, callback)`](#rendercomponent-options-callback)
  - [Parameters](#parameters)
    - [Component](#component)
    - [Options](#options)
    - [Callback Function](#callback-function)
  - [`render` result](#render-result)
    - [`...queries`](#queries)
    - [`container`](#container)
    - [`baseElement`](#baseelement)
    - [`debug()`](#debug)
    - [`unmount()`](#unmount)
    - [`isUnmounted()`](#isunmounted)
    - [`html()`](#html)
    - [`emitted()`](#emitted)
    - [`updateProps(props)`](#updatepropsprops)
- [`fireEvent`](#fireevent)
  - [`touch(elem)`](#touchelem)
  - [`update(elem, value)`](#updateelem-value)
- [`cleanup`](#cleanup)

---

## `render(Component, options, callback)`

The `render` function is the only way of rendering components in Vue Testing
Library.

It takes up to 3 parameters and returns an object with some helper methods.

```js
function render(Component, options, callbackFunction) {
  return {
    ...DOMTestingLibraryQueries,
    container,
    baseElement,
    debug,
    unmount,
    isUnmounted,
    html,
    emitted,
    updateProps,
  }
}
```

### Parameters

#### Component

The valid Vue Component to be tested.

#### Options

An object containing additional information to be passed to `@vue/test-utils`
[mount](https://vue-test-utils.vuejs.org/api/options.html#context).

Additionally, the options object can also include the following three keys:

1. `store` - The object definition of a [Vuex](https://vuex.vuejs.org/) store.
2. `routes` - A set of routes for [Vue Router](https://router.vuejs.org/).
3. `props` - It will be merged with `propsData`.

If a `store` object is provided, `Vue Testing Library` will import and configure
a Vuex store.

Similarly, if `routes` is provided, the library will import and configure Vue
Router.

#### Callback Function

```js
function callbackFunction(vueInstance, vuexStore, router) {}
```

A callback function that receives the Vue instance as a parameter. This allows
3rd party plugins to be installed prior to mount.

The function will also receive the Store or the Router object if the associated
option was passed in during render.

### `render` result

The `render` method returns an object that has a few properties:

#### `...queries`

The most important feature of `render` is that the queries from
[DOM Testing Library](dom-testing-library/api-queries.md) are automatically
returned with their first argument bound to the [baseElement](#baseelement),
which defaults to `document.body`.

See [Queries](dom-testing-library/api-queries.md) for a complete list of
available methods.

```js
const { getByLabelText, queryAllByTestId } = render(Component)
```

#### `container`

The containing DOM node of your rendered Vue Component. It's a `div`. This is a
regular DOM node, so you can call `container.querySelector` etc. to inspect the
children.

> Tip: To get the root element of your rendered element, use
> `container.firstChild`.

#### `baseElement`

Returns `document.body`, the DOM node where your Vue component is rendered.

#### `debug()`

This method is a shortcut for `console.log(prettyDOM(baseElement))`.

```jsx
import { render } from '@testing-library/vue'

const HelloWorldComponent {
  template: `<h1>Hello World</h1>`
}

const { debug } = render(HelloWorldComponent)
debug()
// <div>
//   <h1>Hello World</h1>
// </div>

// you can also pass an element: debug(getByTestId('messages'))
```

This is a simple wrapper around `prettyDOM` which is also exposed and comes from
[`DOM Testing Library`](https://github.com/testing-library/dom-testing-library/blob/master/README.md#prettydom).

#### `unmount()`

An alias for `@vue/test-utils`
[destroy](https://vue-test-utils.vuejs.org/api/wrapper/#destroy).

#### `isUnmounted()`

Returns whether if a Vue component has been destroyed.

#### `html()`

An alias for `@vue/test-utils`
[html](https://vue-test-utils.vuejs.org/api/wrapper/#html).

#### `emitted()`

An alias for `@vue/test-utils`
[emitted](https://vue-test-utils.vuejs.org/api/wrapper/#emitted).

#### `updateProps(props)`

An alias for `@vue/test-utils`
[setProps](https://vue-test-utils.vuejs.org/api/wrapper/#setprops).

It returns a Promise through `wait()`, so you can `await updateProps(...)`.

---

## `fireEvent`

Vue Testing Library re-exports all DOM Testing Library
[firing events](https://deploy-preview-132--testing-library.netlify.com/docs/dom-testing-library/api-events).
However, it alters them so that all events are async.

```js
await fireEvent.click(getByText('Click me'))
```

Additionally, Vue Testing Library exposes two useful methods:

### `touch(elem)`

It triggers both `focus()` and `blur()` events.

```js
await fireEvent.touch(getByLabelText('username'))

// Same as:
await fireEvent.focus(getByLabelText('username'))
await fireEvent.blur(getByLabelText('username'))
```

### `update(elem, value)`

Properly handles inputs controlled by `v-model`. It updates the
input/select/textarea inner value while emitting the appropiate native event.

See a working example of `update` in the
[v-model example test](/docs/vue-testing-library/examples#example-using-v-model).

---

## `cleanup`

Unmounts Vue trees that were mounted with [render](#render).

```jsx
import { cleanup, render } from '@testing-library/vue'
import Component from './Component.vue'

afterEach(cleanup) // <-- add this

test('renders into document', () => {
  render(Component)
  // ...
})

// ... more tests ...
```

Failing to call `cleanup` when you've called `render` could result in a memory
leak and tests which are not "idempotent" (which can lead to difficult to debug
errors in your tests).

**If you don't want to add this to _every single test file_** then we recommend
that you configure your test framework to run a file before your tests which
does this automatically. See the [setup](./setup) section for guidance on how to
set up your framework.
