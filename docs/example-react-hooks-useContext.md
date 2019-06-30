This is a simple example to test a component using the useContext hook. 


The context object

```
import React from 'react';

const Context = React.createContext()

export default Context
```

the root parent component

```
import React, { useState } from 'react';
import Context from './components/store/context';


const App = () => {
  const [state, setState] = useState("Some Text")

  const changeText = () => {
    setState("Some Other Text")
  }

   <h1> Basic Hook useContext</h1>
     <Context.Provider value={{changeTextProp: changeText,
                               stateProp: state
                                 }} >
        <TestHookContext />
     </Context.Provider>
    </div>
  );
}

export default App;

```


the child component using the context

```
import React, { useContext } from 'react';

import Context from '../store/context';

const TestHookContext = () => {
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


export default TestHookContext;
```

and the tests 

```
import React from 'react';
import ReactDOM from 'react-dom';
import TestHookContext from '../test_hook_context.js';
import {render, fireEvent, cleanup} from '@testing-library/react';
import App from '../../../App'

import Context from '../../store/context';

afterEach(cleanup)

it('Context value is updated by child component', () => {

   const { container, getByText } = render(<App>
                                            <Context.Provider>
                                             <TestHookContext />
                                            </Context.Provider>
                                           </App>);

   expect(getByText(/Some/i).textContent).toBe("Some Text")

   fireEvent.click(getByText("Change Text"))

   expect(getByText(/Some/i).textContent).toBe("Some Other Text")
})
```
