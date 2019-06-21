---
id: api
title: API
---

`Marko Testing Library` re-exports everything from `DOM Testing Library` as well
as these methods:

- [`render`](#render)
- [`cleanup`](#cleanup)

---

## `render`

```javascript
function render(
  template, // A Marko template to render
  input, // Input for the above template
  options // You won't often use this, expand below for docs on options
):
```

Render into a container which is appended to `document.body`.

```javascript
import { render } from '@marko/testing-library'
import MyTemplate from './my-template.marko'

render(MyTemplate)
```

```javascript
import { render, cleanup } from '@marko/testing-library'
import 'jest-dom/extend-expect'
import Greeting from './greeting.marko'

afterEach(cleanup)

test('renders a message', async () => {
  const { container, getByText } = await render(Greeting, { name: 'Marko' })
  expect(getByText(/Marko/)).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>Hello, Marko!</h1>
  `)
})
```

> Note
>
> The [cleanup](#cleanup) function should be called between tests to remove the
> created DOM nodes and keep the tests isolated.

## `render` Options

You won't often need to specify options, but if you ever do, here are the
available options which you could provide as the third argument to `render`.

### `container`

By default for client side tests, `Marko Testing Library` will create a `div`
and append that `div` to the `document.body` and this is where your component
will be rendered. If you provide your own HTMLElement `container` via this
option, it will not be appended to the `document.body` automatically.

For example: If you are unit testing a `tablebody` element, it cannot be a child
of a `div`. In this case, you can specify a `table` as the render `container`.

```javascript
const table = document.createElement('table')

const { container } = await render(MyTableBody, null, {
  container: document.body.appendChild(table),
})
```

## `render` Result

The `render` method returns a promise which resolves with an object that has a
few properties:

### `...queries`

The most important feature of `render` is that the queries from
[DOM Testing Library](dom-testing-library/api-queries.md) are automatically
returned with their first argument bound to the results of rendering your
component.

See [Queries](dom-testing-library/api-queries.md) for a complete list.

**Example**

```javascript
const { getByLabelText, queryAllByTestId } = await render(MyTemplate)
```

### `debug`

This method is a shortcut for logging the `prettyDOM` for all children inside of
the `container`.

```javascript
import { render } from '@marko/testing-library'
import Greeting from './greeting.marko'

const { debug } = await render(Greeting, { name: 'World' })
debug()

// <h1>Hello World</h1>
// you can also pass an element: debug(getByTestId('messages'))
```

This is a simple wrapper around `prettyDOM` which is also exposed and comes from
[`DOM Testing Library`](https://github.com/testing-library/dom-testing-library/blob/master/README.md#prettydom).

### `rerender`

It'd probably be better if you test the component that's doing the prop updating
to ensure that the props are being updated correctly (see
[the Guiding Principles section](guiding-principles.md)). That said, if you'd
prefer to update the props of a rendered component in your test, this function
can be used to update props of the rendered component.

```javascript
import { render } from '@marko/testing-library'
import Greeting from './greeting.marko'

const { rerender, debug } = await render(Greeting, { name: 'World' })

// re-render the same component with different props
await rerender({ name: 'Marko' })

debug()
// <h1>Hello Marko</h1>
```

### `container`

The containing DOM node of your rendered Marko Component. For server side tests
this is a [JSDOM.fragment](), and for client side tests this will be whatever is
passed as the `container` render option.

> Tip: To get the root element of your rendered element, use
> `container.firstChild`.

> 🚨 If you find yourself using `container` to query for rendered elements then
> you should reconsider! The other queries are designed to be more resilient to
> changes that will be made to the component you're testing. Avoid using
> `container` to query for elements!

## `cleanup`

With client side tests your components are rendered into a placeholder
HTMLElement. To ensure that your components are properly removed, and destroyed,
you can call `cleanup` at any time which will remove any attached components.

```javascript
import { cleanup } from '@marko/testing-library'
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)
```

To save some typing, you could also import a file with the above.

```javascript
import '@marko/testing-library/cleanup-after-each'
```

If you are using Jest, you can simply include the following to your Jest config
to avoid doing this in each file.

```javascript
module.exports = {
  ...,
  setupFilesAfterEnv: ['@marko/testing-library/cleanup-after-each']
}
```
