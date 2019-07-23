Basic example showing how to test useReducer hook. 


The component: changes some text depending on `stateprop1` value.

```
import React, { useReducer } from 'react'
import * as ACTIONS from '../store/actions'
import * as Reducer from '../store/reducer'


const TestHookReducer = (props) => {
  const [reducerState, dispatch] = useReducer(Reducer.Reducer1, Reducer.initialState)

  const dispatchActionSuccess = () => {
    dispatch(ACTIONS.SUCCESS)
  }

  const dispatchActionFailure = () => {
    dispatch(ACTIONS.FAILURE)
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


export default TestHookReducer;

```


our reducer: changes stateprop1 to true based on the "SUCCESS" action. 

```
import * as ACTIONS from './actions'

export const initialState = {
    stateprop1: false,
}

export const Reducer1 = (state = initialState, action) => {
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
```

our actions hold strings of their type. 

```

export const SUCCESS = {
  type: 'SUCCESS'
}

export const FAILURE = {
  type: 'FAILURE'
}

```
Finally our tests: we first test our reducer to make sure it is returning the correct state based on a action. 
Then we test to see if we get the correct output in our JSX based on the reducer state.  

```
import React from 'react'
import ReactDOM from 'react-dom'
import TestHookReducer from '../test_hook_reducer.js'
import {render, fireEvent, cleanup} from '@testing-library/react'
import * as Reducer from '../../store/reducer'
import * as ACTIONS from '../../store/actions'


afterEach(cleanup)

describe('test the reducer and actions', () => {
  it('should return the initial state', () => {
    expect(Reducer.initialState).toEqual({ stateprop1: false })
  })

  it('should change stateprop1 from false to true', () => {
    expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS ))
      .toEqual({ stateprop1: true  })
  })
})

it('Reducer changes stateprop1 from false to true', () => {
   const { container, getByText } = render(<TestHookReducer />);

   expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is false")

   fireEvent.click(getByText("Dispatch Success"))

   expect(getByText(/stateprop1 is/i).textContent).toBe("stateprop1 is true")
})

```
