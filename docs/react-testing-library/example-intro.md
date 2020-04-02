---
id: example-intro
title: Example
sidebar_label: Example
---

## Full Example

See the following sections for a detailed breakdown of the test

```jsx
// __tests__/fetch.test.js
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import Fetch from '../fetch'

jest.mock('axios')

test('loads and displays greeting', async () => {
  const url = '/greeting'
  render(<Fetch url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
```

---

## Step-By-Step

### Imports

```jsx
// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
// the component to test
import Fetch from '../fetch'

// https://jestjs.io/docs/en/mock-functions#mocking-modules
jest.mock('axios')
```

```jsx
test('loads and displays greeting', async () => {
  // Arrange
  // Act
  // Assert
})
```

### Arrange

The [`render`](./api#render) method renders a React element into the DOM and returns utility functions for testing the component.

```jsx
const url = '/greeting'
const { container, asFragment } = render(<Fetch url={url} />)
```

### Act

The [`fireEvent`](dom-testing-library/api-events.md) method allows you to fire
events to simulate user actions.

```jsx
axiosMock.get.mockResolvedValueOnce({
  data: { greeting: 'hello there' },
})

fireEvent.click(getByText('Load Greeting'))

// Wait until the mocked `get` request promise resolves and
// the component calls setState and re-renders.
// `waitFor` waits until the callback doesn't throw an error

await waitFor(() =>
  // getByRole throws an error if it cannot find an element
  screen.getByRole('heading')
)
```

### Assert

fetch.js

```jsx
import React, { useState } from 'react'
import axios from 'axios'

export default function Fetch({ url }) {
  const [greeting, setGreeting] = useState('')
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchGreeting = async () => {
    const response = await axios.get(url)
    const data = response.data
    const { greeting } = data
    setGreeting(greeting)
    setButtonClicked(true)
  }

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'

  return (
    <>
      <button onClick={fetchGreeting} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
    </>
  )
}
```

```jsx
expect(axiosMock.get).toHaveBeenCalledTimes(1)
expect(axiosMock.get).toHaveBeenCalledWith(url)
expect(screen.getByRole('heading')).toHaveTextContent('hello there')
expect(screen.getByRole('button')).toHaveAttribute('disabled')

// snapshots work great with regular DOM nodes!
expect(container).toMatchInlineSnapshot(`
  <div>
      <button
        disabled=""
      >
        Ok
      </button>
      <h1>
        hello there
      </h1>
  </div>
`)

// you can also use get a `DocumentFragment`,
// which is useful if you want to compare nodes across render
expect(asFragment()).toMatchSnapshot()
```
