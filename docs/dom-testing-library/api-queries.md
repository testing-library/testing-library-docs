---
id: api-queries
title: Queries
---

## Variants

> `getBy` queries are shown by default in the [query documentation](#queries)
> below.

### getBy

`getBy*` queries return the first matching node for a query, and throw an
error if no elements match or if more than one match is found (use `getAllBy`
instead).

### getAllBy

`getAllBy*` queries return an array of all matching nodes for a query, and
throw an error if no elements match.

### queryBy

`queryBy*` queries return the first matching node for a query, and return
`null` if no elements match. This is useful for asserting an element that is not
present. This throws if more than one match is found (use `queryAllBy` instead).

### queryAllBy

`queryAllBy*` queries return an array of all matching nodes for a query, and
return an empty array (`[]`) if no elements match.

### findBy

`findBy*` queries return a promise which resolves when an element is found which
matches the given query. The promise is rejected if no element is found or if
more than one element is found after a default timeout of `4500`ms. If you need
to find more than one element, then use `findAllBy`.

> Note, this is a simple combination of `getBy*` queries and
> [`waitForElement`](/docs/api-async#waitforelement). The `findBy*` queries
> accept the `waitForElement` options as the last argument. (i.e.
> `findByText(container, 'text', queryOptions, waitForElementOptions)`)

### findAllBy

`findAllBy*` queries return a promise which resolves to an array of elements
when any elements are found which match the given query. The promise is rejected
if no elements are found after a default timeout of `4500`ms.

## Options

The argument to a query can be a _string_, _regular expression_, or _function_.
There are also options to adjust how node text is parsed.

See [TextMatch](#textmatch) for documentation on what can be passed to a query.

## Queries

### `ByLabelText`

> getByLabelText, queryByLabelText, getAllByLabelText, queryAllByLabelText
> findByLabelText, findAllByLabelText

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

The example below will find the input node for the following DOM structures:

```js
// for/htmlFor relationship between label and form element id
<label for="username-input">Username</label>
<input id="username-input" />

// The aria-labelledby attribute with form elements
<label id="username-label">Username</label>
<input aria-labelledby="username-label" />

// The aria-labelledby attribute with non-form elements
<section aria-labelledby="section-one-header">
  <h3 id="section-one-header">Section One</h3>
  <p>some content</p>
</section>

// Wrapper labels
<label>Username <input /></label>

// aria-label attributes
// Take care because this is not a label that users can see on the page,
// so the purpose of your input must be obvious to visual users.
<input aria-label="username" />
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```javascript
import { getByLabelText } from '@testing-library/dom'

const container = document.body
const inputNode = getByLabelText(container, 'Username')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByLabelText } = render(<Login />)

const inputNode = getByLabelText('username')
```

<!--Cypress-->

```js
cy.getByLabelText('username').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

It will NOT find the input node for label text broken up by elements. For this
case, you can provide a `selector` in the options:

```html
<label> <span>Username</span> <input /> </label>
```

```js
const container = document.body
const inputNode = getByLabelText(container, 'Username', {
  selector: 'input',
})
```

### `ByPlaceholderText`

> getByPlaceholderText, queryByPlaceholderText, getAllByPlaceholderText,
> queryAllByPlaceholderText, findByPlaceholderText, findAllByPlaceholderText

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

```html
<input placeholder="Username" />
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByPlaceholderText } from '@testing-library/dom'

const container = document.body
const inputNode = getByPlaceholderText(container, 'Username')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByPlaceholderText } = render(<MyComponent />)
const inputNode = getByPlaceholderText('Username')
```

<!--Cypress-->

```js
cy.getByPlaceholderText('Username').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

> **Note**
>
> A placeholder is not a good substitute for a label so you should generally use
> `getByLabelText` instead.

### `ByText`

> getByText, queryByText, getAllByText, queryAllByText, findByText,
> findAllByText

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

```html
<a href="/about">About ℹ️</a>
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByText } from '@testing-library/dom'

const container = document.body
const aboutAnchorNode = getByText(container, /about/i)
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByText } = render(<MyComponent />)
const aboutAnchorNode = getByText(/about/i)
```

<!--Cypress-->

```js
cy.getByText(/about/i).should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

It also works with `input`s whose `type` attribute is either `submit` or
`button`:

```js
<input type="submit" value="Send data" />
```

> **Note**
>
> See [`getByLabelText`](#bylabeltext) for more details on how and when to use
> the `selector` option

The `ignore` option accepts a query selector. If the
[`node.matches`](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)
returns true for that selector, the node will be ignored. This defaults to
`'script'` because generally you don't want to select script tags, but if your
content is in an inline script file, then the script tag could be returned.

If you'd rather disable this behavior, set `ignore` to `false`.

### `ByAltText`

> getByAltText, queryByAltText, getAllByAltText, queryAllByAltText,
> findByAltText, findAllByAltText

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

```html
<img alt="Incredibles 2 Poster" src="/incredibles-2.png" />
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByAltText } from '@testing-library/dom'

const container = document.body
const incrediblesPosterImg = getByAltText(container, /incredibles.*? poster/i)
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByAltText } = render(<MyComponent />)
const incrediblesPosterImg = getByAltText(/incredibles.*? poster/i)
```

<!--Cypress-->

```js
cy.getByAltText(/incredibles.*? poster/i).should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `ByTitle`

> getByTitle, queryByTitle, getAllByTitle, queryAllByTitle, findByTitle,
> findAllByTitle

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

Will also find a `title` element within an SVG.

```html
<span title="Delete" id="2"></span>
<svg>
  <title>Close</title>
  <g><path /></g>
</svg>
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByTitle } from '@testing-library/dom'

const container = document.body
const deleteElement = getByTitle(container, 'Delete')
const closeElement = getByTitle(container, 'Close')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByTitle } = render(<MyComponent />)
const deleteElement = getByTitle('Delete')
const closeElement = getByTitle('Close')
```

<!--Cypress-->

```js
cy.getByTitle('Delete').should('exist')
cy.getByTitle('Close').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `ByDisplayValue`

> getByDisplayValue, queryByDisplayValue, getAllByDisplayValue,
> queryAllByDisplayValue, findByDisplayValue, findAllByDisplayValue

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

```html
<input type="text" id="lastName" />
```

```js
document.getElementById('lastName').value = 'Norris'
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByDisplayValue } from '@testing-library/dom'

const container = document.body
const lastNameInput = getByDisplayValue(container, 'Norris')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByDisplayValue } = render(<MyComponent />)
const lastNameInput = getByDisplayValue('Norris')
```

<!--Cypress-->

```js
cy.getByDisplayValue('Norris').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### `textarea`

```html
<textarea id="messageTextArea" />
```

```js
document.getElementById('messageTextArea').value = 'Hello World'
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByDisplayValue } from '@testing-library/dom'

const container = document.body
const messageTextArea = getByDisplayValue(container, 'Hello World')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByDisplayValue } = render(<MyComponent />)
const messageTextArea = getByDisplayValue('Hello World')
```

<!--Cypress-->

```js
cy.getByDisplayValue('Hello World').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

#### `select`

In case of `select`, this will search for a `<select>` whose selected `<option>`
matches the given [`TextMatch`](#textmatch).

```html
<select id="state-select" data-testid="state">
  <option value="">State</option>
  <option value="AL">Alabama</option>
  <option selected value="AK">Alaska</option>
  <option value="AZ">Arizona</option>
</select>
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByDisplayValue } from '@testing-library/dom'

const container = document.body
const selectElement = getByDisplayValue(container, 'Alaska')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByDisplayValue } = render(<MyComponent />)
const selectElement = getByDisplayValue('Alaska')
```

<!--Cypress-->

```js
cy.getByDisplayValue('Alaska').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `ByRole`

> getByRole, queryByRole, getAllByRole, queryAllByRole, findByRole,
> findAllByRole

```typescript
getByRole(
  container: HTMLElement,
  role: TextMatch,
  options?: {
    exact?: boolean = true,
    normalizer?: NormalizerFn,
  }): HTMLElement
```

Queries for elements with the given role (and it also
accepts a [`TextMatch`](#textmatch)). Default roles are taken
into consideration e.g. `<button />` has the `button` role without
explicitly setting the `role` attribute. The [W3C HTML recommendation](https://www.w3.org/TR/html5/index.html#contents)
lists all HTML elements with their default aria roles.

```html
<div role="dialog">...</div>
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByRole } from '@testing-library/dom'

const container = document.body
const dialogContainer = getByRole(container, 'dialog')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByRole } = render(<MyComponent />)
const dialogContainer = getByRole('dialog')
```

<!--Cypress-->

```js
cy.getByRole('dialog').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

### `ByTestId`

> getByTestId, queryByTestId, getAllByTestId, queryAllByTestId, findByTestId,
> findAllByTestId

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

```html
<input data-testid="username-input" />
```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { getByTestId } from '@testing-library/dom'

const container = document.body
const usernameInput = getByTestId(container, 'username-input')
```

<!--React-->

```js
import { render } from '@testing-library/react'

const { getByTestId } = render(<MyComponent />)
const usernameInput = getByTestId('username-input')
```

<!--Cypress-->

```js
cy.getByTestId('username-input').should('exist')
```

<!--END_DOCUSAURUS_CODE_TABS-->

> In the spirit of [the guiding principles](#guiding-principles), it is
> recommended to use this only after the other queries don't work for your use
> case. Using data-testid attributes do not resemble how your software is used
> and should be avoided if possible. That said, they are _way_ better than
> querying based on DOM structure or styling css class names. Learn more about
> `data-testid`s from the blog post
> ["Making your UI tests resilient to change"](https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269)

#### Overriding `data-testid`

The `...ByTestId` functions in `DOM Testing Library` use the attribute
`data-testid` by default, following the precedent set by
[React Native Web](https://github.com/testing-library/react-testing-library/issues/1)
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

Before running any matching logic against text in the DOM, `DOM Testing Library`
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
getByText(node, 'text', {
  normalizer: getDefaultNormalizer({ trim: false }),
})
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

Given the following HTML:

```html
<div>Hello World</div>
```

**_Will_ find the div:**

```javascript
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
```

**_Will not_ find the div:**

```javascript
// full string does not match
getByText(container, 'Goodbye World')

// case-sensitive regex with different case
getByText(container, /hello world/)

// function looking for a span when it's actually a div:
getByText(container, (content, element) => {
  return element.tagName.toLowerCase() === 'span' && content.startsWith('Hello')
})
```
