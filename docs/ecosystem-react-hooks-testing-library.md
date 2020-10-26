---
id: ecosystem-react-hooks-testing-library
title: react-hooks-testing-library
---

The [`react-hooks-testing-library`](https://github.com/testing-library/react-hooks-testing-library) allows you to create a simple test harness for React hooks that handles running them within the body of a function component, as well as providing various useful utility functions for updating the inputs and retrieving the outputs of your amazing custom hook. This library aims to provide a testing experience as close as possible to natively using your hook from within a real component.

Using this library, you do not have to concern yourself with how to construct, render or interact with the react component in order to test your hook. You can just use the hook directly and assert the results.

```
npm install --save-dev @testing-library/react-hooks
```
Imagine we have a simple hook that we want to test:

```js
import { useState, useCallback } from 'react'

export default function useCounter() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((x) => x + 1), [])
  return { count, increment }
}
```

To test `useCounter` we need to render it using the `renderHook` function provided by
`react-hooks-testing-library`:

```js
import { renderHook } from '@testing-library/react-hooks'
import useCounter from './useCounter'

test('should use counter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
  expect(typeof result.current.increment).toBe('function')
})
```

As you can see, the result's current value matches what is returned by our hook.


[react-hooks-testing-library github](https://github.com/testing-library/react-hooks-testing-library)

[react-hooks-testing-library docs](https://react-hooks-testing-library.com/)
