---
id: cheatsheet
title: Cheatsheet
---

A short guide to all the exported functions in `DOM Testing Library`

## Queries

See [Which query should I use?](guide-which-query.md)

|                | No Match | 1 Match | 1+ Match | Await? |
| -------------- | -------- | ------- | -------- | ------ |
| **getBy**      | throw    | return  | throw    | No     |
| **findBy**     | throw    | return  | throw    | Yes    |
| **queryBy**    | null     | return  | throw    | No     |
| **getAllBy**   | throw    | array   | array    | No     |
| **findAllBy**  | throw    | array   | array    | Yes    |
| **queryAllBy** | []       | array   | array    | No     |

- **ByLabelText** find by label or aria-label text content
  - getByLabelText
  - queryByLabelText
  - getAllByLabelText
  - queryAllByLabelText
  - findByLabelText
  - findAllByLabelText
- **ByPlaceholderText** find by input placeholder value
  - getByPlaceholderText
  - queryByPlaceholderText
  - getAllByPlaceholderText
  - queryAllByPlaceholderText
  - findByPlaceholderText
  - findAllByPlaceholderText
- **ByText** find by element text content
  - getByText
  - queryByText
  - getAllByText
  - queryAllByText
  - findByText
  - findAllByText
- **ByDisplayValue** find by form element current value
  - getByDisplayValue
  - queryByDisplayValue
  - getAllByDisplayValue
  - queryAllByDisplayValue
  - findByDisplayValue
  - findAllByDisplayValue
- **ByAltText** find by img alt attribute
  - getByAltText
  - queryByAltText
  - getAllByAltText
  - queryAllByAltText
  - findByAltText
  - findAllByAltText
- **ByTitle** find by title attribute or svg title tag
  - getByTitle
  - queryByTitle
  - getAllByTitle
  - queryAllByTitle
  - findByTitle
  - findAllByTitle
- **ByRole** find by aria role
  - getByRole
  - queryByRole
  - getAllByRole
  - queryAllByRole
  - findByRole
  - findAllByRole
- **ByTestId** find by data-testid attribute
  - getByTestId
  - queryByTestId
  - getAllByTestId
  - queryAllByTestId
  - findByTestId
  - findAllByTestId

## Async

See [Async API](dom-testing-library/api-async.md)

- **wait** (Promise) retry the function within until it stops throwing or times
  out
- **waitForElement** (Promise) retry the function until it returns an element or
  an array of elements
  - `findBy` and `findAllBy` queries are async and retry until either a timeout
    or if the query returns successfully; they wrap `waitForElement`
- **waitForDomChange** (Promise) retry the function each time the DOM is changed
- **waitForElementToBeRemoved** (Promise) retry the function until it no longer
  returns a DOM node

> Remember to `await` or `.then()` the result of async functions in your tests!

## Events

See [Considerations for fireEvent](guide-events.md), [Events API](api-events.md)

- **fireEvent** trigger DOM event: `fireEvent(node, event)`
- **fireEvent.\*** helpers for default event types
  - **click** `fireEvent.click(node)`
  - [See all supported events](https://github.com/testing-library/dom-testing-library/blob/master/src/events.js)

## Other

See [Helpers API](api-helpers.md), [Config API](api-configuration.md)

- **within** take a node and return an object with all the queries bound to the
  node (used to return the queries from `React Testing Library`'s render
  method): `within(node).getByText("hello")`
- **configure** change global options:
  `configure({testIdAttribute: 'my-data-test-id'})`

## Text Match Options

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

Given a button that updates the page after some time:

```jsx
test('loads items eventually', async () => {
  // Click button
  fireEvent.click(getByText(node, 'Load'))

  // Wait for page to update with query text
  const items = await findByText(node, /Item #[0-9]: /)
  expect(items).toHaveLength(10)
})
```
