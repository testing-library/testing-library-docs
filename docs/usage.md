---
id: usage
title: Usage
sidebar_label: Usage
---

## `render`

Defined as:

```typescript
function render(
  ui: React.ReactElement<any>,
  options?: {
    /* You won't often use this, expand below for docs on options */
  },
): RenderResult
```

Render into a container which is appended to `document.body`.

```jsx
import {render} from 'react-testing-library'

render(<div />)
```

```jsx
import {render, cleanup} from 'react-testing-library'
import 'jest-dom/extend-expect'
afterEach(cleanup)

test('renders a message', () => {
  const {container, getByText} = render(<Greeting />)
  expect(getbyText('Hello, world!')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `)
})
```

> Note
> 
> The [cleanup](#cleanup) function should be called between tests to remove the created DOM nodes and keep the tests isolated.

### `render` Options

<details>

<summary>Expand to see documentation on the options</summary>

You wont often need to specify options, but if you ever do, here are the
available options which you could provide as a second argument to `render`.

**container**: By default, `react-testing-library` will create a `div` and
append that div to the `document.body` and this is where your react component
will be rendered. If you provide your own HTMLElement `container` via this
option, it will not be appended to the `document.body` automatically.

For Example: If you are unit testing a `tablebody` element, it cannot be a child
of a `div`. In this case, you can specify a `table` as the render `container`.

```jsx
const table = document.createElement('table')

const {container} = render(<TableBody {...props} />, {
  container: document.body.appendChild(table),
})
```

**baseElement**: If the `container` is specified, then this defaults to that,
otherwise this defaults to `document.documentElement`. This is used as the base
element for the queries as well as what is printed when you use `debug()`.

**hydrate**: If hydrate is set to true, then it will render with
[ReactDOM.hydrate](https://reactjs.org/docs/react-dom.html#hydrate). This may be
useful if you are using server-side rendering and use ReactDOM.hydrate to mount
your components.

</details>

---

The `render` method returns an object that has a few properties:

### `...queries`

The most important feature of `render` is that the queries from [dom-testing-library][dom-testing-lib-queries] are automatically bound to the rendered container.

See [Queries](./queries) for a complete list.

**Example**

```jsx
const { getByLabelText, queryAllByTestId } = render(<Component />);
```

### `container`

The containing DOM node of your rendered React Element (rendered using
`ReactDOM.render`). It's a `div`. This is a regular DOM node, so you can call
`container.querySelector` etc. to inspect the children.

> Tip: To get the root element of your rendered element, use
> `container.firstChild`.
>
> NOTE: When that root element is a
> [React Fragment](https://reactjs.org/docs/fragments.html),
> `container.firstChild` will only get the first child of that Fragment, not the
> Fragment itself.

> 🚨 If you find yourself using `container` to query for rendered elements then
> you should reconsider! The other queries are designed to be more resiliant to
> changes that will be made to the component you're testing. Avoid using
> `container` to query for elements!

### `baseElement`

The containing DOM node where your React Element is rendered in the container.
If you don't specify the `baseElement` in the options of `render`, it will
default to `document.body`.

This is useful when the component you want to test renders something outside the
container div, e.g. when you want to snapshot test your portal component which
renders it's HTML directly in the body.

> Note: the queries returned by the `render` looks into baseElement, so you can
> use queries to test your portal component without the baseElement.

### `debug`

This method is a shortcut for `console.log(prettyDOM(baseElement))`.

```jsx
import React from 'react'
import {render} from 'react-testing-library'

const HelloWorld = () => <h1>Hello World</h1>
const {debug} = render(<HelloWorld />)
debug()
// <div>
//   <h1>Hello World</h1>
// </div>
// you can also pass an element: debug(getByTestId('messages'))
```

This is a simple wrapper around `prettyDOM` which is also exposed and comes from
[`dom-testing-library`](https://github.com/kentcdodds/dom-testing-library/blob/master/README.md#prettydom).

### `rerender`

It'd probably be better if you test the component that's doing the prop updating
to ensure that the props are being updated correctly (see
[the Guiding Principles section](#guiding-principles)). That said, if you'd
prefer to update the props of a rendered component in your test, this function
can be used to update props of the rendered component.

```jsx
import {render} from 'react-testing-library'

const {rerender} = render(<NumberDisplay number={1} />)

// re-render the same component with different props
rerender(<NumberDisplay number={2} />)
```

[See the examples page](example-update-props)

### `unmount`

This will cause the rendered component to be unmounted. This is useful for
testing what happens when your component is removed from the page (like testing
that you don't leave event handlers hanging around causing memory leaks).

> This method is a pretty small abstraction over
> `ReactDOM.unmountComponentAtNode`

```jsx
import {render} from 'react-testing-library'

const {container, unmount} = render(<Login />)
unmount()
// your component has been unmounted and now: container.innerHTML === ''
```

### `asFragment`

Returns a `DocumentFragment` of your rendered component. This can be useful if
you need to avoid live bindings and see how your component reacts to events.

```jsx
import {render, fireEvent} from 'react-testing-library'

class TestComponent extends React.Component {
  constructor() {
    super()
    this.state = {count: 0}
  }

  render() {
    const {count} = this.state

    return (
      <button onClick={() => this.setState({count: count + 1})}>
        Click to increase: {count}
      </button>
    )
  }
}

const {getByText, asFragment} = render(<TestComponent />)
const firstRender = asFragment()

fireEvent.click(getByText(/Click to increase/))

// This will snapshot only the difference between the first render, and the
// state of the DOM after the click event.
// See https://github.com/jest-community/snapshot-diff
expect(firstRender).toMatchDiffSnapshot(asFragment())
```

## `cleanup`

Unmounts React trees that were mounted with [render](#render).

```jsx
import {cleanup, render} from 'react-testing-library'

afterEach(cleanup) // <-- add this

test('renders into document', () => {
  render(<div />)
  // ...
})

// ... more tests ...
```

Failing to call `cleanup` when you've called `render` could result in a memory
leak and tests which are not "idempotent" (which can lead to difficult to debug
errors in your tests).

**If you don't want to add this to _every single test file_** then we recommend
that you configure your test framework to run a file before your tests which
does this automatically. See the [setup](./setup) section for guidance on how to set up your framework.

## `flushEffects`

**Experimental**

This experimental API is intended to be used to force React's `useEffect` hook
to run synchronously.

## `dom-testing-library` APIs

`react-testing-library` is built on top of
[`dom-testing-library`](https://github.com/kentcdodds/dom-testing-library) and
re-exports everything from `dom-testing-library`. Some notable included exports:

### `fireEvent`

```typescript
fireEvent(node: HTMLElement, event: Event)
```

Fire DOM events.

React attaches an event handler on the `document` and handles some DOM events
via event delegation (events bubbling up from a `target` to an ancestor).
Because of this, your `node` must be in the `document.body` for `fireEvent` to
work with React. This is why `render` appends your container to `document.body`.
This is an alternative to simulating Synthetic React Events via
[`Simulate`](https://reactjs.org/docs/test-utils.html#simulate). The benefit of
using `fireEvent` over `Simulate` is that you are testing real DOM events
instead of Synthetic Events. This aligns better with
[the Guiding Principles](#guiding-principles).
([Also Dan Abramov told me to stop use Simulate](https://twitter.com/dan_abramov/status/980807288444383232)).

> NOTE: If you don't like having to use `cleanup` (which we have to do because
> we render into `document.body`) to get `fireEvent` working, then feel free to
> try to chip into making it possible for React to attach event handlers to the
> rendered node rather than the `document`. Learn more here:
> [facebook/react#2043](https://github.com/facebook/react/issues/2043)

```jsx
import {render, cleanup, fireEvent} from 'react-testing-library'

// don't forget to clean up the document.body
afterEach(cleanup)

test('clicks submit button', () => {
  const handleClick = jest.fn()
  const {getByText} = render(<button onClick={handleClick}>Submit</button>)

  fireEvent.click(getByText('Submit'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

#### `fireEvent[eventName]`

```typescript
fireEvent[eventName](node: HTMLElement, eventProperties: Object)
```

Convenience methods for firing DOM events. Check out
[dom-testing-library/src/events.js](https://github.com/kentcdodds/dom-testing-library/blob/master/src/events.js)
for a full list as well as default `eventProperties`.

```jsx
import {render, fireEvent} from 'react-testing-library'

const {getByText} = render(<Form />)

// similar to the above example
// click will bubble for React to see it
const rightClick = {button: 2}
fireEvent.click(getByText('Submit'), rightClick)
// default `button` property for click events is set to `0` which is a left click.
```

If you want to trigger the
[`onChange`](https://reactjs.org/docs/dom-elements.html#onchange) handler of a
[controlled component](https://reactjs.org/docs/forms.html#controlled-components)
with a different `event.target.value`, sending `value` through `eventProperties`
won't work like it does with `Simulate`. You need to use `fireEvent` to fire a
`change` DOM event with `value` property set on `target`

```jsx
import {render, fireEvent} from 'react-testing-library'

const {getByLabelText} = render(<Form />)

const comment = getByLabelText('Comment')
fireEvent.change(comment, {
  target: {value: 'Great advice, I love your posts!'},
})
```

Note that if you want to trigger `onChange` handler on a checkbox, you should
fire a `click` event instead of `change`.

```jsx
import {render, fireEvent} from 'react-testing-library'

const {getByLabelText} = render(<Checkbox />)

fireEvent.click(getByLabelText('Checkbox'))
```

### `waitForElement`

> [Read full docs from `dom-testing-library`](https://github.com/kentcdodds/dom-testing-library/blob/master/README.md#waitforelement)

```jsx
import {render, waitForElement} from 'react-testing-library'

test('waiting for an element', async () => {
  const {getByText} = render(<SearchForm />)

  await waitForElement(() => getByText('Search'))
})
```

### `wait`

> [Read full docs from `dom-testing-library`](https://github.com/kentcdodds/dom-testing-library/blob/master/README.md#wait)

It's recommended to prefer `waitForElement`, but this can be helpful on occasion

```jsx
import 'jest-dom/extend-expect'
import {render, wait} from 'react-testing-library'

test('can fill in the form after loaded', async () => {
  const {queryByText, getByLabelText} = render(<Login />)

  // wait until the callback does not throw an error. In this case, that means
  // it'll wait until the element with the text that says "loading..." is gone.
  await wait(() =>
    expect(queryByText(/loading\.\.\./i)).not.toBeInTheDocument(),
  )
  getByLabelText('username').value = 'chucknorris'
  // continue doing stuff
})
```

### `within`

> [Read full docs from `dom-testing-library`](https://github.com/kentcdodds/dom-testing-library/blob/master/README.md#within-and-getqueriesforelement-apis)

The queries returned from `render` are scoped to the entire page. Sometimes,
there is no guarantee that the text, placeholder, or label you want to query is
unique on the page. So you might want to explicitly tell react-render-dom to get
an element only within a particular section of the page, within is a helper
function for this case.

Example: To get the text 'hello' only within a section called 'messages', you
could do:

```jsx
import {render, within} from 'react-testing-library'

// ...

const {getByTestId} = render(/* stuff */)
const messagesSection = getByTestId('messages')
const hello = within(messagesSection).getByText('hello')
```

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
[dom-testing-lib-queries]: https://github.com/kentcdodds/dom-testing-library#usage
[bugs]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc
[requests]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen
[good-first-issue]: https://github.com/kentcdodds/react-testing-library/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3A"good+first+issue"+
[reactiflux]: https://www.reactiflux.com/
[stackoverflow]: https://stackoverflow.com/questions/tagged/react-testing-library

<!-- prettier-ignore-end -->
