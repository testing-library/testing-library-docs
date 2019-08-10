This is a simple example to test a component using the [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) React hook.

The basic idea is to test your components as they are used by the end users. 

Instead of testing the context-providing component separately, your main focus should be testing that the features connected to the context work correctly.


```js
// Context.js

import React, { createContext } from 'react'

const Context = createContext()

export default Context
```

```jsx
// App.js

import React, { useState } from 'react'
import Context from './Context'

const App = () => {
  const [text, setText] = useState('Some Text')

  const changeText = () => {
    setText('Some Other Text')
  }

  return (
    <Context.Provider value={{ changeText, text }}>
      <ChildComponent />
    </Context.Provider>
  )
}


export default App
```

```jsx
// ChildComponent.js

import React, { useContext } from 'react'
import Context from '../context'

export default ChildComponent = () => {
  const context = useContext(Context)

  return (
    <div>
      <button onClick={context.changeText}>Change Text</button>
      <p>{context.text}</p>
    </div>
  )
}

export default ChildComponent
```

```js
// App.test.js

import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'

// Notice how the Context file is not even imported
import App from './App'

test('Context value is updated by child component', () => {
  const { getByText, getByRole } = render(<App />)

  expect(getByText(/Some/i).textContent).toBe('Some Text')

  fireEvent.click(getByRole('button'))

  expect(getByText(/Some/i).textContent).toBe('Some Other Text')
})
```
