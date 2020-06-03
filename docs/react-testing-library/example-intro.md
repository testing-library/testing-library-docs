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
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Fetch from '../fetch'

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  const url = '/greeting'
  render(<Fetch url={url} />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

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

// import API mocking utilities from Mock Service Worker
// (see https://github.com/mswjs/msw)
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import Fetch from '../fetch'

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/greeting', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

// establish API mocking before all tests
// and clean up once the tests are finished
beforeAll(() => server.listen())
afterAll(() => server.close())
```

```jsx
test('loads and displays greeting', async () => {
  // Arrange
  // Act
  // Assert
})
```

### Arrange

The [`render`](./api#render) method renders a React element into the DOM and
returns utility functions for testing the component.

```jsx
const url = '/greeting'
const { container, asFragment } = render(<Fetch url={url} />)
```

### Act

The [`fireEvent`](dom-testing-library/api-events.md) method allows you to fire
events to simulate user actions.

```jsx
fireEvent.click(screen.getByText('Load Greeting'))

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
    <div>
      <button onClick={fetchGreeting} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting ? <h1>{greeting}</h1> : null}
    </div>
  )
}
```
