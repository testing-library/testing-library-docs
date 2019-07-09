---
id: api-helpers
title: Helpers
---

## Custom Queries

`DOM Testing Library` exposes many of the helper functions that are used to
implement the default queries. You can use the helpers to build custom queries.
For example, the code below shows a way to override the default `testId` queries
to use a different data-attribute. (Note: test files would import
`test-utils.js` instead of using `DOM Testing Library` directly).

```js
// test-utils.js
const domTestingLib = require('@testing-library/dom')
const { queryHelpers } = domTestingLib

export const queryByTestId = queryHelpers.queryByAttribute.bind(
  null,
  'data-test-id'
)
export const queryAllByTestId = queryHelpers.queryAllByAttribute.bind(
  null,
  'data-test-id'
)

export function getAllByTestId(container, id, ...rest) {
  const els = queryAllByTestId(container, id, ...rest)
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [data-test-id="${id}"]`,
      container
    )
  }
  return els
}

export function getByTestId(...args) {
  return queryHelpers.firstResultOrNull(getAllByTestId, ...args)
}

// re-export with overrides
module.exports = {
  ...domTestingLib,
  getByTestId,
  getAllByTestId,
  queryByTestId,
  queryAllByTestId,
}
```

> **Note**
>
> Custom queries can be added to `React Testing Library`'s `render` method by
> adding `queries` to the options config object. See the render
> [options](/docs/react-testing-library/api#render-options).

## `buildQueries`

The `buildQueries` helper allows you to create custom queres with all standard
[variants](api-queries.md) of queries in testing-library.

See the
[Add custom queries](/docs/react-testing-library/setup#add-custom-queries)
section of the custom render guide for example usage.

### Using other assertion libraries

If you're not using jest, you may be able to find a similar set of custom
assertions for your library of choice. Here's a list of alternatives to jest-dom
for other popular assertion libraries:

- [chai-dom](https://github.com/nathanboktae/chai-dom)

If you're aware of some other alternatives, please [make a pull request][prs]
and add it here!

## `getNodeText`

```typescript
getNodeText(node: HTMLElement)
```

Returns the complete text content of a html element, removing any extra
whitespace. The intention is to treat text in nodes exactly as how it is
perceived by users in a browser, where any extra whitespace within words in the
html code is not meaningful when the text is rendered.

```javascript
// <div>
//   Hello
//     World  !
// </div>
const text = getNodeText(container.querySelector('div')) // "Hello World !"
```

This function is also used internally when querying nodes by their text content.
This enables functions like `getByText` and `queryByText` to work as expected,
finding elements in the DOM similarly to how users would do.

The function has a special behavior for some input elements:

```javascript
// <input type="submit" value="Send data" />
// <input type="button" value="Push me" />
const submitText = getNodeText(container.querySelector('input[type=submit]')) // "Send data"
const buttonText = getNodeText(container.querySelector('input[type=button]')) // "Push me"

These elements use the attribute `value` and display its value to the user.
```

## `within` and `getQueriesForElement` APIs

`within` (an alias to `getQueriesForElement`) takes a DOM element and binds it
to the raw query functions, allowing them to be used without specifying a
container. It is the recommended approach for libraries built on this API and is
in use in `React Testing Library` and `Vue Testing Library`.

Example: To get the text 'hello' only within a section called 'messages', you
could do:

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
import { within } from '@testing-library/dom'

const { getByText } = within(document.getElementById('messages'))
const helloMessage = getByText('hello')
```

<!--React-->

```js
import { render, within } from '@testing-library/react'

const { getByLabelText } = render(<MyComponent />)
const signinModal = getByLabelText('Sign In')
within(signinModal).getByPlaceholderText('Username')
```

<!--Cypress-->

```js
cy.get('form').within(() => {
  cy.getByText('Button Text').should('be.disabled')
})
```

<!--END_DOCUSAURUS_CODE_TABS-->

## `getRoles`

This function allows iteration over the implicit ARIA roles represented in a
given tree of DOM nodes.

It returns an object, indexed by role name, with each value being an array of
elements which have that implicit ARIA role.

See
[ARIA in HTML](https://www.w3.org/TR/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html)
for more information about implicit ARIA roles.

```javascript
import { getRoles } from '@testing-library/dom'

const nav = document.createElement('nav')
nav.innerHTML = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`
console.log(getRoles(nav))

// Object {
//   navigation: [<nav />],
//   list: [<ul />],
//   listitem: [<li />, <li />]
// }
```

## Debugging

When you use any `get` calls in your test cases, the current state of the
`container` (DOM) gets printed on the console. For example:

```javascript
// <div>Hello world</div>
getByText(container, 'Goodbye world') // will fail by throwing error
```

The above test case will fail, however it prints the state of your DOM under
test, so you will get to see:

```
Unable to find an element with the text: Goodbye world. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.
Here is the state of your container:
<div>
  <div>
    Hello World!
  </div>
</div>
```

Note: Since the DOM size can get really large, you can set the limit of DOM
content to be printed via environment variable `DEBUG_PRINT_LIMIT`. The default
value is `7000`. You will see `...` in the console, when the DOM content is
stripped off, because of the length you have set or due to default size limit.
Here's how you might increase this limit when running tests:

```
DEBUG_PRINT_LIMIT=10000 npm test
```

This works on macOS/linux, you'll need to do something else for windows. If
you'd like a solution that works for both, see
[`cross-env`](https://www.npmjs.com/package/cross-env)

### `prettyDOM`

Built on top of
[`pretty-format`](https://github.com/facebook/jest/tree/master/packages/pretty-format),
this helper function can be used to print out readable representation of the DOM
tree of a node. This can be helpful for instance when debugging tests.

It is defined as:

```typescript
function prettyDOM(
  node: HTMLElement,
  maxLength?: number,
  options?: Options
): string
```

It receives the root node to print out, an optional extra parameter to limit the
size of the resulting string, for cases when it becomes too large. It has a last
parameter which allows you to configure your formatting as defined in the
[options](https://github.com/facebook/jest/tree/master/packages/pretty-format#usage-with-options)
of `pretty-format`.

This function is usually used alongside `console.log` to temporarily print out
DOM trees during tests for debugging purposes:

```javascript
const div = document.createElement('div')
div.innerHTML = '<div><h1>Hello World</h1></div>'
console.log(prettyDOM(div))
// <div>
//   <h1>Hello World</h1>
// </div>
```

This function is what also powers
[the automatic debugging output described above](#debugging).

### `logRoles`

This helper function can be used to print out a list of all the implicit ARIA
roles within a tree of DOM nodes, each role containing a list of all of the
nodes which match that role. This can be helpful for finding ways to query the
DOM under test with [getByRole](api-queries.md#byrole)

```javascript
import { logRoles } from '@testing-library/dom'

const nav = document.createElement('nav')
nav.innerHTML = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`

console.log(logRoles(nav))

// navigation:
//
// <nav />
//
//
// --------------------------------------------------
// list:
//
// <ul />
//
//
// --------------------------------------------------
// listitem:
//
// <li />
//
// <li />
//
//
// --------------------------------------------------
```
