---
id: example-react-hooks
title: React Hooks
---
[`react-hooks-testing-library`][gh] is built on top of [`react-testing-library`][gh] to create a simple test harness for [React hooks](https://reactjs.org/docs/hooks-intro.html) that handles running them within the body of a function component, as well as providing various useful utility functions for updating the inputs and retrieving the outputs of your [custom hook](https://reactjs.org/docs/hooks-custom.html).

> **Note**
>
> This is the recommended way to test reusable custom react hooks. It is not
> however recommended to use the testHook utility to test single-use custom
> hooks. Typically those are better tested by testing the component that is
> using it.

```
npm install --save-dev react-hooks-testing-library
```

```js
// useCounter.js
import { useState } from 'react'

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount)

  const incrementBy = useCallback((n) => setCount(count + n), [count])
  const decrementBy = useCallback((n) => setCount(count - n), [count])

  return { count, incrementBy, decrementBy }
}

export default useCounter
```

```js
// useCounter.test.js
import { renderHook, cleanup, act } from 'react-hooks-testing-library'
import useCounter from './useCounter'

afterEach(cleanup)

test('should create counter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
})

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => result.current.incrementBy(1))

  expect(result.current.count).toBe(1)

  act(() => result.current.incrementBy(2))

  expect(result.current.count).toBe(3)
})

test('should decrement counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => result.current.decrementBy(1))

  expect(result.current.count).toBe(-1)

  act(() => result.current.decrementBy(2))

  expect(result.current.count).toBe(-3)
})
```