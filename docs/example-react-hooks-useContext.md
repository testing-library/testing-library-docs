This is a simple example to test a component using the useContext hook. 


The context object

```
import React, { createContext } from 'react'

const Context = createContext()

export default Context
```

the root parent component

```
import React, { useState } from 'react'
import Context from './context'


const App = () => {
  const [state, setState] = useState("Some Text")

  const changeText = () => {
    setState("Some Other Text")
  }

   <h1> Basic Hook useContext</h1>
     <Context.Provider value={{changeTextProp: changeText,
                               stateProp: state
                                 }} >
        <ChildComponent />
     </Context.Provider>
    </div>
  );
}

export default App

```


the child component using the context

```
import React, { useContext } from 'react'

import Context from '../context'

const ChildComponent = () => {
  const context = useContext(Context)

  return (
    <div>
    <button onClick={context.changeTextProp}>
        Change Text
    </button>
      <p>{context.stateProp}</p>
    </div>
  )
}


export default ChildComponent
```

and the tests. 
The basic idea is to test your components as they are used. Instead of testing the context-providing component separately, your main focus should be testing that the features connected to the context work correctly.

```
import React from 'react'
import ReactDOM from 'react-dom'
import ChildComponent from '../childcomponent.js'
import {render, fireEvent, cleanup} from '@testing-library/react'
import App from './App'

import Context from './context'

afterEach(cleanup)

it('Context value is updated by child component', () => {

   const { container, getByText } = render(<App>
                                            <Context.Provider>
                                             <ChildComponent />
                                            </Context.Provider>
                                           </App>);

   expect(getByText(/Some/i).textContent).toBe("Some Text")

   fireEvent.click(getByText("Change Text"))

   expect(getByText(/Some/i).textContent).toBe("Some Other Text")
})
```
