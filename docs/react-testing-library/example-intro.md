---
id: example-intro
title: Example
sidebar_label: Example
---


## Simple Example

This will be a simple example using useState to test a React Hooks functional component.

Here is our component, it is a simple component that changes some text when a user clicks a button: 

```jsx
// Counter.js

import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Times clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Counter
```

now our tests: 

```js
// counter.test.js

import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import Counter from '../Counter.js'

test('increments value on click', () => {
  const { getByText } = render(<Counter />)

  getByText('Times clicked: 0')

  const button = getByText('Click me')
  fireEvent.click(button)
  fireEvent.click(button)

  getByText('Times clicked: 2')
})
```

### Arrange:
Here we first check to see if the text of "Initial State" is present, which is our default state. 

### Act: 
We click the button that should change the text to "Initial State Changed". 

### Assert:
We check if the new text is "Initial State Changed"

<br />
This is keeping with the guiding principle of not testing implementation details and testing the app based on how the end user will interact with it. 

The end user will see the text of "Initial State" so this is how we query for it. 

The end user will see the text on the button before clicking it, so this is how we should get and click the button. 

Finally the end user will see the new state text on their screen, so this is how we should query for it. 

We are not calling the changeState() function because this is an implementation detail, 
the end user does not know or care what the name of our function is. 

If the text changes in the button for example we will have to rewrite our tests, because this means what the
end user will see and interact with has also changed. 


## Full Example

See the following sections for a detailed breakdown of the test

```jsx
// __tests__/fetch.test.js
import React from 'react'
import {
  render,
  fireEvent,
  waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import Fetch from '../fetch'

test('loads and displays greeting', async () => {
  const url = '/greeting'
  const { getByText, getByTestId } = render(<Fetch url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(getByText('Load Greeting'))

  const greetingTextNode = await waitForElement(() =>
    getByTestId('greeting-text')
  )

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
  expect(getByTestId('ok-button')).toHaveAttribute('disabled')
})
```

---

## Step-By-Step

### Imports

```jsx
// import dependencies
import React from 'react'

// import react-testing methods
import {
  render,
  fireEvent,
  waitForElement,
} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

// the axios mock is in __mocks__/
// see https://jestjs.io/docs/en/manual-mocks
import axiosMock from 'axios'

// the component to test
import Fetch from '../fetch'
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
const { getByText, getByTestId, container, asFragment } = render(
  <Fetch url={url} />
)
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
// `waitForElement` waits until the callback doesn't throw an error

const greetingTextNode = await waitForElement(() =>
  // getByTestId throws an error if it cannot find an element
  getByTestId('greeting-text')
)
```

### Assert

fetch.js

```jsx
import React,{useState} from 'react'

export default function Fetch({url}) {
  const {greeting, setGreeting} = useState('')
  const {buttonClicked, setButtonClicked} = useState(false)
  
  const fetchGreeting = async url => {
    const data = await fetch(url)
    const {greeting} = data
    setGreeting(greeting)
    setButtonClicked(true)
  }

  const buttonText = buttonClicked ? 'Ok' : 'Load Greeting'
  
  return (
    <div>
      <button 
        onClick={fetchGreeting} 
        data-testid ='ok-button' 
        disabled={buttonClicked}>
          {buttonText}
      </button>
      {greeting ? <h1 data-testid ='greeting-text'>{greeting}</h1>) : null}
    </div>
    )
}
```

```jsx
expect(axiosMock.get).toHaveBeenCalledTimes(1)
expect(axiosMock.get).toHaveBeenCalledWith(url)
expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
expect(getByTestId('ok-button')).toHaveAttribute('disabled')

// snapshots work great with regular DOM nodes!
expect(container).toMatchInlineSnapshot(`
  <div>
    <button disabled>Ok</button>
    <h1>hello there</h1>
  </div>
`)

// you can also use get a `DocumentFragment`,
// which is useful if you want to compare nodes across render
expect(asFragment()).toMatchSnapshot()
```


