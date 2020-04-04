---
id: example-react-redux
title: React Redux
---

```jsx
// counter.js
import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <h1>{this.props.count}</h1>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ count: state.count }))(Counter)
```

For this example, we'll have a simple reducer that tracks and updates `count`:

```js
// reducer.js
export const initialState = {
  count: 0,
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}
```

To test our connected component we can create a custom `render` function using
the `wrapper` option as explained in the
[setup](./react-testing-library/setup.md) page.  
Our custom `render` function can look like this:

```js
// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
```

```jsx
// counter.test.js
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { fireEvent, screen } from '@testing-library/react'
// We're using our own custom render function and not RTL's render
import { render } from './test-utils.js
import '@testing-library/jest-dom/extend-expect'
import { initialState, reducer } from './reducer.js'
import Counter from './counter.js'

test('can render with redux with defaults', () => {
  renderWithRedux(<Counter />)
  fireEvent.click(screen.getByText('+'))
  expect(screen.getByRole('heading')).toHaveTextContent('1')
})

test('can render with redux with custom initial state', () => {
  renderWithRedux(<Counter />, {
    initialState: { count: 3 },
  })
  fireEvent.click(screen.getByText('-'))
  expect(screen.getByRole('heading')).toHaveTextContent('2')
})

test('can render with redux with custom store', () => {
  // this is a silly store that can never be changed
  const store = createStore(() => ({ count: 1000 }))
  renderWithRedux(<Counter />, {
    store,
  })
  fireEvent.click(screen.getByText('+'))
  expect(screen.getByRole('heading')).toHaveTextContent('1000')
  fireEvent.click(screen.getByText('-'))
  expect(screen.getByRole('heading')).toHaveTextContent('1000')
})
```
