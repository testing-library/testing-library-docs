---
id: examples
title: Examples
---

## Basic example

```html
<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      count: 0,
    }),

    methods: {
      increment() {
        this.count++
      },
    },
  }
</script>
```

```js
import { render, fireEvent, cleanup } from '@testing-library/vue'
import Component from './Component.vue'

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('increments value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(Component)

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0')

  const button = getByText('increment')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})
```

## Example using `v-model`:

```html
<template>
  <div>
    <p>Hi, my name is {{ user }}</p>

    <label for="username">Username:</label>
    <input v-model="user" id="username" name="username" />
  </div>
</template>

<script>
  export default {
    data: () => ({
      user: 'Alice',
    }),
  }
</script>
```

```js
import { render, fireEvent, cleanup } from '@testing-library/vue'
import Component from './Component.vue'

afterEach(cleanup)

test('properly handles v-model', async () => {
  const { getByLabelText, getByText } = render(Component)

  // Asserts initial state.
  getByText('Hi, my name is Alice')

  // Get the input DOM node by querying the associated label.
  const usernameInput = getByLabelText(/username/i)

  // Updates the <input> value and triggers an `input` event.
  // fireEvent.input() would make the test fail.
  await fireEvent.update(usernameInput, 'Bob')

  getByText('Hi, my name is Bob')
})
```

## More examples

You'll find examples of testing with different libraries in
[the test directory](https://github.com/testing-library/vue-testing-library/tree/master/tests/__tests__).

Some included are:

- [`vuex`](https://github.com/testing-library/vue-testing-library/blob/master/tests/__tests__/vuex.js)
- [`vue-router`](https://github.com/testing-library/vue-testing-library/tree/master/tests/__tests__/vue-router.js)
- [`vee-validate`](https://github.com/testing-library/vue-testing-library/tree/master/tests/__tests__/validate-plugin.js)
