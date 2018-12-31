---
id: api-queries
title: Queries
---

## Queries

> **Note**
>
> - Each of the `get` APIs below have a matching
>   [`getAll`](#queryall-and-getall-apis) API that returns all elements instead
>   of just the first one, and
>   [`query`](#query-apis)/[`queryAll`](#queryall-and-getall-apis) that return
>   `null`/`[]` instead of throwing an error.
> - See [TextMatch](#textmatch) for details on the `exact`, `trim`, and
>   `collapseWhitespace` options.

### `getByLabelText`

```typescript
getByLabelText(
  container: HTMLElement,
  text: TextMatch,
  options?: {
    selector?: string = '*',
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

This will search for the label that matches the given [`TextMatch`](#textmatch),
then find the element associated with that label.

```javascript
const inputNode = getByLabelText(container, 'Username')

// this would find the input node for the following DOM structures:
// The "for" attribute (NOTE: in JSX with React you'll write "htmlFor" rather than "for")
// <label for="username-input">Username</label>
// <input id="username-input" />
//
// The aria-labelledby attribute with form elements
// <label id="username-label">Username</label>
// <input aria-labelledby="username-label" />
//
// The aria-labelledby attribute with other elements
// <section aria-labelledby="section-one-header">
//   <h3 id="section-one-header">Section One</h3>
//   <p>some content...</p>
// <section>
//
// Wrapper labels
// <label>Username <input /></label>
//
// It will NOT find the input node for this:
// <label><span>Username</span> <input /></label>
//
// For this case, you can provide a `selector` in the options:
const inputNode = getByLabelText(container, 'username', { selector: 'input' })
// and that would work
// Note that <input aria-label="username" /> will also work, but take
// care because this is not a label that users can see on the page. So
// the purpose of your input should be obvious for those users.
```

> **Note**
>
> This method will throw an error if it cannot find the node. If you don't want
> this behavior (for example you wish to assert that it doesn't exist), then use
> `queryByLabelText` instead.

### `getByPlaceholderText`

```typescript
getByPlaceholderText(
  container: HTMLElement,
  text: TextMatch,
  options?: {
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

This will search for all elements with a placeholder attribute and find one that
matches the given [`TextMatch`](#textmatch).

```javascript
// <input placeholder="Username" />
const inputNode = getByPlaceholderText(container, 'Username')
```

> **Note**
>
> A placeholder is not a good substitute for a label so you should generally use
> `getByLabelText` instead.

### `getByText`

```typescript
getByText(
  container: HTMLElement,
  text: TextMatch,
  options?: {
    selector?: string = '*',
    exact?: boolean = true,
    ignore?: string|boolean = 'script, style',
    normalizer?: NormalizerFn,
  }): HTMLElement
```

This will search for all elements that have a text node with `textContent`
matching the given [`TextMatch`](#textmatch).

```javascript
// <a href="/about">About ℹ️</a>
const aboutAnchorNode = getByText(container, /about/i)
```

It also works properly with `input`s whose `type` attribute is either `submit`
or `button`:

```javascript
// <input type="submit" value="Send data" />
const submitButton = getByText(container, /send data/i)
```

> **Note**
>
> See [`getByLabelText`](#getbylabeltext) for more details on how and when to
> use the `selector` option

The `ignore` option accepts a query selector. If the
[`node.matches`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
returns true for that selector, the node will be ignored. This defaults to
`'script'` because generally you don't want to select script tags, but if your
content is in an inline script file, then the script tag could be returned.

If you'd rather disable this behavior, set `ignore` to `false`.

### `getByAltText`

```typescript
getByAltText(
  container: HTMLElement,
  text: TextMatch,
  options?: {
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

This will return the element (normally an `<img>`) that has the given `alt`
text. Note that it only supports elements which accept an `alt` attribute:
[`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img),
[`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input),
and [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
(intentionally excluding
[`<applet>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet)
as it's deprecated).

```javascript
// <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
const incrediblesPosterImg = getByAltText(container, /incredibles.*poster$/i)
```

### `getByTitle`

```typescript
getByTitle(
  container: HTMLElement,
  title: TextMatch,
  options?: {
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

Returns the element that has the matching `title` attribute.

```javascript
// <span title="Delete" id="2" />
const deleteElement = getByTitle(container, 'Delete')
```

Will also find a `title` element within an SVG.

```javascript
// <svg> <title>Close</title> <g> <path /> </g> </svg>
const closeElement = getByTitle(container, 'Close')
```

### `getByDisplayValue`

```typescript
getByDisplayValue(
  container: HTMLElement,
  value: TextMatch,
  options?: {
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

Returns the `input`, `textarea`, or `select` element that has the matching
display value.

#### `input`

```javascript
// <input type="text" id="lastName" />
// document.getElementById('lastName').value = 'Norris'

const lastNameInput = getByDisplayValue(container, 'Norris')
```

#### `textarea`

```javascript
// <textarea id="messageTextArea"></textarea>
// document.getElementById('messageTextArea').value = 'Hello World'

const messageTextArea = getByDisplayValue(container, 'Hello World')
```

#### `select`

```javascript
// <select id="state-select" data-testid="state">
//   <option value="">State</option>
//   <option value="AL">Alabama</option>
//   <option selected value="AK" >Alaska</option>
//   <option value="AZ">Arizona</option>
// </select>

const selectElement = getByDisplayName(container, 'Alaska')
```

In case of `select`, this will search for a `<select>` whose selected `<option>`
matches the given [`TextMatch`](#textmatch).

### `getByRole`

```typescript
getByRole(
  container: HTMLElement,
  text: TextMatch,
  options?: {
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

A shortcut to `` container.querySelector(`[role="${yourRole}"]`) `` (and it also
accepts a [`TextMatch`](#textmatch)).

```javascript
// <div role="dialog">...</div>
const dialogContainer = getByRole(container, 'dialog')
```

### `getByTestId`

```typescript
getByTestId(
  container: HTMLElement,
  text: TextMatch,
  options?: {
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

A shortcut to `` container.querySelector(`[data-testid="${yourId}"]`) `` (and it
also accepts a [`TextMatch`](#textmatch)).

```javascript
// <input data-testid="username-input" />
const usernameInputElement = getByTestId(container, 'username-input')
```

> In the spirit of [the guiding principles](#guiding-principles), it is
> recommended to use this only after the other queries don't work for your use
> case. Using data-testid attributes do not resemble how your software is used
> and should be avoided if possible. That said, they are _way_ better than
> querying based on DOM structure or styling css class names. Learn more about
> `data-testid`s from the blog post ["Making your UI tests resilient to
> change"][data-testid-blog-post]

#### Overriding `data-testid`

The `...ByTestId` functions in `dom-testing-library` use the attribute
`data-testid` by default, following the precedent set by
[React Native Web](https://github.com/kentcdodds/react-testing-library/issues/1)
which uses a `testID` prop to emit a `data-testid` attribute on the element, and
we recommend you adopt that attribute where possible. But if you already have an
existing codebase that uses a different attribute for this purpose, you can
override this value via
`configure({testIdAttribute: 'data-my-test-attribute'})`.

## `TextMatch`

Several APIs accept a `TextMatch` which can be a `string`, `regex` or a
`function` which returns `true` for a match and `false` for a mismatch.

### Precision

Some APIs accept an object as the final argument that can contain options that
affect the precision of string matching:

- `exact`: Defaults to `true`; matches full strings, case-sensitive. When false,
  matches substrings and is not case-sensitive.
  - `exact` has no effect on `regex` or `function` arguments.
  - In most cases using a regex instead of a string gives you more control over
    fuzzy matching and should be preferred over `{ exact: false }`.
- `normalizer`: An optional function which overrides normalization behavior. See
  [`Normalization`](#normalization).

### Normalization

Before running any matching logic against text in the DOM, `dom-testing-library`
automatically normalizes that text. By default, normalization consists of
trimming whitespace from the start and end of text, and collapsing multiple
adjacent whitespace characters into a single space.

If you want to prevent that normalization, or provide alternative normalization
(e.g. to remove Unicode control characters), you can provide a `normalizer`
function in the options object. This function will be given a string and is
expected to return a normalized version of that string.

Note: Specifying a value for `normalizer` _replaces_ the built-in normalization,
but you can call `getDefaultNormalizer` to obtain a built-in normalizer, either
to adjust that normalization or to call it from your own normalizer.

`getDefaultNormalizer` takes an options object which allows the selection of
behaviour:

- `trim`: Defaults to `true`. Trims leading and trailing whitespace
- `collapseWhitespace`: Defaults to `true`. Collapses inner whitespace
  (newlines, tabs, repeated spaces) into a single space.

#### Normalization Examples

To perform a match against text without trimming:

```javascript
getByText(node, 'text', { normalizer: getDefaultNormalizer({ trim: false }) })
```

To override normalization to remove some Unicode characters whilst keeping some
(but not all) of the built-in normalization behavior:

```javascript
getByText(node, 'text', {
  normalizer: str =>
    getDefaultNormalizer({ trim: false })(str).replace(/[\u200E-\u200F]*/g, ''),
})
```

### TextMatch Examples

```javascript
// <div>
//  Hello World
// </div>

// WILL find the div:

// Matching a string:
getByText(container, 'Hello World') // full string match
getByText(container, 'llo Worl', { exact: false }) // substring match
getByText(container, 'hello world', { exact: false }) // ignore case

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

Each of the `get` APIs listed in [the 'Usage'](#usage) section above have a
complimentary `query` API. The `get` APIs will throw errors if a proper node
cannot be found. This is normally the desired effect. However, if you want to
make an assertion that an element is _not_ present in the DOM, then you can use
the `query` API instead:

```javascript
const submitButton = queryByText(container, 'submit')
expect(submitButton).toBeNull() // it doesn't exist
// or if you're using the custom matchers:
expect(submitButton).not.toBeTruthy()
```

## `queryAll` and `getAll` APIs

Each of the `query` APIs have a corresponsing `queryAll` version that always
returns an Array of matching nodes. `getAll` is the same but throws when the
array has a length of 0.

```javascript
const submitButtons = queryAllByText(container, 'submit')
expect(submitButtons).toHaveLength(3) // expect 3 elements
expect(submitButtons[0]).toBeTruthy()
```

## `within` and `getQueriesForElement` APIs

`within` (an alias to `getQueriesForElement`) takes a DOM element and binds it
to the raw query functions, allowing them to be used without specifying a
container. It is the recommended approach for libraries built on this API and is
in use in `react-testing-library` and `vue-testing-library`.

Example: To get the text 'hello' only within a section called 'messages', you
could do:

```javascript
import { within } from 'dom-testing-library'

const { getByText } = within(document.getElementById('messages'))
const helloMessage = getByText('hello')
```
