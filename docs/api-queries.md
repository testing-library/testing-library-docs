---
id: queries
title: Queries
sidebar_label: Queries
---

## Queries

### `getByLabelText`

```typescript
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

```typescript
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

```typescript
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

```typescript
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

```typescript
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

[data-testid-blog-post]: https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269
[dom-testing-lib-textmatch]: https://github.com/kentcdodds/dom-testing-library#textmatch

<!-- prettier-ignore-end -->
