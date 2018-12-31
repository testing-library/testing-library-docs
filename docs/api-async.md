---
id: api-async
title: Async
---

## `waitForElement`

```jsx
import {render, waitForElement} from 'react-testing-library'

test('waiting for an element', async () => {
  const {getByText} = render(<SearchForm />)

  await waitForElement(() => getByText('Search'))
})
```

## `wait`

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

## `within`

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
