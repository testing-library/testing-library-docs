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
          <span data-testid="count-value">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({count: state.count}))(Counter)
```

For this example, we'll have a simple reducer that tracks and updates `count`:

```js
// reducer.js
export const initialState = {
  count: 0
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

Now here's what your test will look like:

```jsx
// counter.test.js
import React from 'react'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { initialState, reducer } from './reducer.js'
import Counter from './counter.js'

afterEach(cleanup)

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

test('can render with redux with defaults', () => {
  const { getByTestId, getByText } = renderWithRedux(<Counter />)
  fireEvent.click(getByText('+'))
  expect(getByTestId('count-value').textContent).toBe('1')
})

test('can render with redux with custom initial state', () => {
  const { getByTestId, getByText } = renderWithRedux(<Counter />, {
    initialState: { count: 3 },
  })
  fireEvent.click(getByText('-'))
  expect(getByTestId('count-value').textContent).toBe('2')
})

test('can render with redux with custom store', () => {
  // this is a silly store that can never be changed
  const store = createStore(() => ({ count: 1000 }))
  const { getByTestId, getByText } = renderWithRedux(<Counter />, {
    store,
  })
  fireEvent.click(getByText('+'))
  expect(getByTestId('count-value').textContent).toBe('1000')
  fireEvent.click(getByText('-'))
  expect(getByTestId('count-value').textContent).toBe('1000')
})
```
