---
id: example-intro
title: Example
sidebar_label: Example
---


## React Hooks useState

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

