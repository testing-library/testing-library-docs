Basic example showing how to test useReducer hook. 


The component we are testing which changes some text depending on `stateprop1` value.

```jsx
import React, { useReducer } from 'react'

const initialState = {
    isConfirmed: false,
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "SUCCESS":
      return {
        ...state,
        stateprop1: true,
      }
    case "FAILURE":
      return {
        ...state,
        stateprop1: false,
      }
    default:
      console.log(state)
  }
}

const TestHookReducer = () => {
  const [reducerState, dispatch] = useReducer(Reducer, initialState)

  const dispatchActionSuccess = () => {
    dispatch({ type: 'SUCCESS' })
  }

  const dispatchActionFailure = () => {
    dispatch({ type: 'FAILURE' })
  }

  return (
    <div>
       <div>
        {reducerState.stateprop1
           ? <p>stateprop1 is true</p>
           : <p>stateprop1 is false</p>}
       </div>
       <button onClick={dispatchActionSuccess}>
         Dispatch Success
       </button>
    </div>
  )
}

export default TestHookReducer
```


Finally our tests: We are testing to see if we get the correct output in our JSX based on the reducer state.  

```js
import React from 'react'
import ReactDOM from 'react-dom'
import TestHookReducer from '../test_hook_reducer.js'
import {render, fireEvent, cleanup} from '@testing-library/react'

afterEach(cleanup)

it('Reducer changes stateprop1 from false to true', () => {
   const { getByText } = render(<TestHookReducer />)

   expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is false")

   fireEvent.click(getByText("Dispatch Success"))

   expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is true")
})
```
