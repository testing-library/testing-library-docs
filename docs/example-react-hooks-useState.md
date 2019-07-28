---
id: example-react-hooks-useState
title: React Hooks useState
---

## React Hooks useState

This will be a simple example using useState to test a React Hooks functional component.

Here is our component, it is a simple component that changes some text when a user clicks a button: 

```jsx
import React, { useState } from 'react'

const ExampleComponent = (props) => {
  const [state, setState] = useState("Initial State")

  const changeState = () => {
    setState("Initial State Changed")
  }

  return (
    <div>
      <button onClick={changeState}>
        State Change Button
      </button>
      <p>{state}</p>
    </div>
  )
}

export default ExampleComponent;
```

now our tests: 

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ExampleComponent from '../example_component.js'
import {render, fireEvent, cleanup} from '@testing-library/react'

afterEach(cleanup)

it('Text in state is changed when button is clicked', () => {
    const { getByText } = render(<ExampleComponent />);

    expect(getByText(/Initial/i).textContent).toBe("Initial State")

    fireEvent.click(getByText("State Change Button"))

    expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
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

