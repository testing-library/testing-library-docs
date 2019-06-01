---
id: api
title: API
sidebar_label: API
---

Here you'll find a high level summary of the most frequently used parts of
Native Testing Library. For a more comprehensive look at what's possible, check
out the [main docs site](https://native-testing-library.com).

- [`render`](#render)
- [`act`](#act)

## `render`

```typescript
function render(
  ui: React.ReactElement<any>,
  options?: {
    /* You won't often use this, expand below for docs on options */
  }
): RenderResult
```

Create a `ReactTestRenderer` Instance.

```jsx
import { render } from '@testing-library/react-native'

render(<View />)
```

```javascript
import { render } from '@testing-library/react-native'

test('renders a message', () => {
  const { container, getByText } = render(<Text>Hello, World!</Text>)
  expect(getByText('Hello, world!')).toBeTruthy()
  expect(container.toJSON()).toMatchInlineSnapshot(`
    <Text>Hello, World!</Text>
  `)
})
```

## `render` Options

Most of the time you won't need to pass any options to `render`, but when you
do, you will pass them as the second parameter. There are some important key
differences between this and `React Testing Library` that you will want to be
aware of.

### `wrapper`

Pass a React Component as the `wrapper` option to have it rendered around the
inner element. This is most useful for creating reusable custom render functions
for common data providers. See [setup](setup.md#custom-render) for examples.

### `queries`

Queries to bind. Overrides the default set from `Native Testing Library` unless
merged.

```js
// Example, a function to traverse table contents
import * as tableQueries from 'my-table-query-libary'
import queries from '@testing-library/react-native'

const { getByRowColumn, getByText } = render(<MyTable />, {
  queries: { ...queries, ...tableQueries },
})
```

See [helpers](https://www.native-testing-library.com/docs/api-helpers) for
guidance on using utility functions to create custom queries.

Custom queries can also be added globally by following the
[custom render guide](setup.md#custom-render).

## `render` Result

The `render` method returns an object that has a few properties:

### `...queries`

The most important feature of `render` is that the
[default queries](https://www.native-testing-library.com/docs/api-queries) are
automatically returned with their first argument bound to the `baseElement`.

**Example**

```javascript
const { getByText, getByTestId /* etc */ } = render(<Component />)
```

### `container`

The `ReactTestRendererInstance` result from your render. This has helpful
methods like `toTree()` and `toJSON()`.

> You should rarely use the container. There are very few instances where you
> need to access the container itself to do something you'd need to in a test.

### `baseElement`

This is the root element of your render result. By default, this is what all of
your queries will be run on, and you could also use it to do any custom
searching logic you wanted to..

### `debug`

This method is a shortcut for `console.log(prettyPrint(container.toJSON()))`.

```javascript
import { render } from '@testing-library/react-native'

const { debug } = render(
  <View>
    <Text>Hello World</Text>
  </View>
)
debug()
// <View>
//   <Text>
//     Hello World
//   </Text>
// </View>
```

This is a simple wrapper around `prettyPrint` which is also exported.

### `rerender`

Although its likely better to test updating your props the way a user would
(through events and interaction), this method will allow you to re-render your
entire tree at the base with new props.

```jsx
import { render } from '@testing-library/react-native'

const { rerender } = render(<NumberDisplay number={1} />)

// re-render the same component with different props
rerender(<NumberDisplay number={2} />)
```

[See the examples page](example-update-props.md)

### `unmount`

This will cause the rendered component to be unmounted. This is useful for
testing what happens when your component is removed from the page (like testing
that you don't leave event handlers hanging around causing memory leaks). Note
that you don't need to call this `afterEach` like you do in react testing
library because these elements aren't being added to a DOM. Use it only as
necessary.

> This method is a wrapper around ReactTestRenderer.unmount()

```javascript
import { render } from '@testing-library/react-native'

const { unmount } = render(<Login />)
unmount()
```

## `act`

This is a light wrapper around the
[`react-test-renderer` `act` function](https://reactjs.org/docs/test-renderer.html).
All it does is forward all arguments to the act function if your version of
react supports `act`.
