---
id: queries
title: Queries
sidebar_label: Queries
---

## Queries

The `render` function returns the queries from 
[`dom-testing-library`](https://github.com/kentcdodds/dom-testing-library) bound to the created element:

### `getByLabelText`

```ts
getByLabelText(text: TextMatch, options): HTMLElement
```

> Options:
> `{selector = '*', exact = true, collapseWhitespace = true, trim = true}`

This will search for the label that matches the given [`TextMatch`](#textmatch),
then find the element associated with that label.

```jsx
import {render} from 'react-testing-library'

const {getByLabelText} = render(<Login />)
const inputNode = getByLabelText('Username')

// this would find the input node for the following DOM structures:
// The "for" attribute (NOTE: in JSX with React you'll write "htmlFor" rather than "for")
// <label for="username-input">Username</label>
// <input id="username-input" />
//
// The aria-labelledby attribute
// <label id="username-label">Username</label>
// <input aria-labelledby="username-label" />
//
// Wrapper labels
// <label>Username <input /></label>
//
// It will NOT find the input node for this:
// <label><span>Username</span> <input /></label>
//
// For this case, you can provide a `selector` in the options:
const inputNode = getByLabelText('username', {selector: 'input'})
// and that would work
// Note that <input aria-label="username" /> will also work, but take
// care because this is not a label that users can see on the page. So
// the purpose of your input should be obvious for those users.
```

> Note: This method will throw an error if it cannot find the node. If you don't
> want this behavior (for example you wish to assert that it doesn't exist),
> then use `queryByLabelText` instead.

### `getByPlaceholderText`

```ts
getByPlaceholderText(text: TextMatch, options): HTMLElement
```

> Options: `{exact = true, collapseWhitespace = true, trim = true}`

This will search for all elements with a placeholder attribute and find one that
matches the given [`TextMatch`](#textmatch).

```jsx
import {render} from 'react-testing-library'

const {getByPlaceholderText} = render(<input placeholder="Username" />)
const inputNode = getByPlaceholderText('Username')
```

> NOTE: a placeholder is not a good substitute for a label so you should
> generally use `getByLabelText` instead.

### `getByText`

```ts
getByText(text: TextMatch, options): HTMLElement
```

> Options:
> `{selector = '*', exact = true, collapseWhitespace = true, trim = true, ignore = 'script, style'}`

This will search for all elements that have a text node with `textContent`
matching the given [`TextMatch`](#textmatch).

```jsx
import {render} from 'react-testing-library'

const {getByText} = render(<a href="/about">About ℹ️</a>)
const aboutAnchorNode = getByText('about')
```

### `getByAltText`

```ts
getByAltText(text: TextMatch, options): HTMLElement
```

> Options: `{exact = true, collapseWhitespace = true, trim = true}`

This will return the element (normally an `<img>`) that has the given `alt`
text. Note that it only supports elements which accept an `alt` attribute:
[`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img),
[`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input),
and [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
(intentionally excluding
[`<applet>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet)
as it's deprecated).

```jsx
import {render} from 'react-testing-library'

const {getByAltText} = render(
  <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />,
)
const incrediblesPosterImg = getByAltText(/incredibles.*poster$/i)
```

### `getByTestId`

```ts
getByTestId(text: TextMatch, options): HTMLElement
```

> Options: `{exact = true, collapseWhitespace = true, trim = true}`

A shortcut to `` container.querySelector(`[data-testid="${yourId}"]`) `` (and it
also accepts a [`TextMatch`](#textmatch)).

```jsx
import {render} from 'react-testing-library'

const {getByTestId} = render(<input data-testid="username-input" />)
const usernameInputElement = getByTestId('username-input')
```

> In the spirit of [the guiding principles](#guiding-principles), it is
> recommended to use this only after `getByLabel`, `getByPlaceholderText` or
> `getByText` don't work for your use case. Using `data-testid` attributes do
> not resemble how your software is used and should be avoided if possible. That
> said, they are _way_ better than querying based on DOM structure. Learn more
> about `data-testid`s from the blog post ["Making your UI tests resilient to
> change"][data-testid-blog-post]

<details>
  <summary>What if my project already uses <code>data-test-id</code> or another attribute?
  Do I have to migrate to <code>data-testid</code>?
</summary>

If you're starting out with a new codebase, it's recommended that you stick with
<code>data-testid</code>, following the precedent set by
[React Native Web](https://github.com/kentcdodds/react-testing-library/issues/1),
but if you already have a codebase that uses a different attribute for this
purpose, you can use the `configure` function of `dom-testing-library` to change
the attribute that is used. This requires `dom-testing-library` version 3.13:

```jsx
import {configure} from 'dom-testing-library'
configure({testIdAttribute: 'data-test-id'})
```

</details>

## `dom-testing-library` APIs

`react-testing-library` is built on top of
[`dom-testing-library`](https://github.com/kentcdodds/dom-testing-library) and
re-exports everything from `dom-testing-library`. Some notable included exports:

### `fireEvent`

```ts
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

```ts
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

## `TextMatch`

Several APIs accept a `TextMatch` which can be a `string`, `regex` or a
`function` which returns `true` for a match and `false` for a mismatch.

See [dom-testing-library#textmatch][dom-testing-lib-textmatch] for options.

Examples:

```jsx
import {render, getByText} from 'react-testing-library'

const {container} = render(<div>Hello World</div>)

// WILL find the div:

// Matching a string:
getByText(container, 'Hello World') // full string match
getByText(container, 'llo Worl', {exact: false}) // substring match
getByText(container, 'hello world', {exact: false}) // ignore case

// Matching a regex:
getByText(container, /World/) // substring match
getByText(container, /world/i) // substring match, ignore case
getByText(container, /^hello world$/i) // full string match, ignore case
getByText(container, /Hello W?oRlD/i) // advanced regex

// Matching with a custom function:
getByText(container, (content, element) => content.startsWith('Hello'))

// WILL NOT find the div:

getByText(container, 'Goodbye World') // full string does not match
getByText(container, /hello world/) // case-sensitive regex with different case
// function looking for a span when it's actually a div:
getByText(container, (content, element) => {
  return element.tagName.toLowerCase() === 'span' && content.startsWith('Hello')
})
```

## `query` APIs

Each of the `get` APIs listed in [the `render`](#render) section above have a
complimentary `query` API. The `get` APIs will throw errors if a proper node
cannot be found. This is normally the desired effect. However, if you want to
make an assertion that an element is _not_ present in the DOM, then you can use
the `query` API instead:

```jsx
import {render} from 'react-testing-library'

const {queryByText} = render(<Form />)
const submitButton = queryByText('submit')
expect(submitButton).toBeNull() // it doesn't exist
```

## `queryAll` and `getAll` APIs

Each of the `query` APIs have a corresponding `queryAll` version that always
returns an Array of matching nodes. `getAll` is the same but throws when the
array has a length of 0.

```jsx
import {render} from 'react-testing-library'

const {queryAllByText} = render(<Forms />)
const submitButtons = queryAllByText('submit')
expect(submitButtons).toHaveLength(3) // expect 3 elements
expect(submitButtons[0]).toBeInTheDocument()
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
[bugs]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc
[requests]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen
[good-first-issue]: https://github.com/kentcdodds/react-testing-library/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3A"good+first+issue"+
[reactiflux]: https://www.reactiflux.com/
[stackoverflow]: https://stackoverflow.com/questions/tagged/react-testing-library

<!-- prettier-ignore-end -->
