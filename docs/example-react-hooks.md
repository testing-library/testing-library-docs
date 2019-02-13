---
id: example-react-hooks
title: React Hooks
---

`react-testing-library` provides the
[`testHook`](/docs/react-testing-library/api#testhook) utility to test custom
hooks.

> **Note**
>
> This is the recommended way to test reusable custom react hooks. It is not
> however recommended to use the testHook utility to test single-use custom
> hooks. Typically those are better tested by testing the component that is
> using it.

## Using `result`

Testing the last returned value of a hook using the `result` ref

```jsx
function useCounter({ initialCount = 0, step = 1 } = {}) {
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  const decrement = () => setCount(c => c - step)
  return { count, increment, decrement }
}
```

```jsx
test('returns result ref with latest result from hook execution', () => {
  const { result } = testHook(useCounter)
  expect(result.current.count).toBe(0)
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
```

## State

Testing a hook that provides state

```jsx
import { useState } from 'react'

export function useCounter({ initialCount = 0, step = 1 } = {}) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(c => c + step)
  const decrement = () => setCount(c => c - step)
  return { count, increment, decrement }
}
```

```jsx
import { testHook, act, cleanup } from 'react-testing-library'
afterEach(cleanup)

describe('useCounter', () => {
  test('accepts default initial values', () => {
    let count
    testHook(() => ({ count } = useCounter()))

    expect(count).toBe(0)
  })

  test('accepts a default initial value for `count`', () => {
    let count
    testHook(() => ({ count } = useCounter({})))

    expect(count).toBe(0)
  })

  test('provides an `increment` function', () => {
    let count, increment
    testHook(() => ({ count, increment } = useCounter({ step: 2 })))

    expect(count).toBe(0)
    act(() => {
      increment()
    })
    expect(count).toBe(2)
  })

  test('provides an `decrement` function', () => {
    let count, decrement
    testHook(() => ({ count, decrement } = useCounter({ step: 2 })))

    expect(count).toBe(0)
    act(() => {
      decrement()
    })
    expect(count).toBe(-2)
  })

  test('accepts a default initial value for `step`', () => {
    let count, increment
    testHook(() => ({ count, increment } = useCounter({})))

    expect(count).toBe(0)
    act(() => {
      increment()
    })
    expect(count).toBe(1)
  })
})
```

## Unmount Side-Effects

Using the `unmount` function to check useEffect behavior when unmounting

```jsx
import { useState, useEffect } from 'react'

export function useDocumentTitle(title) {
  const [originalTitle, setOriginalTitle] = useState(document.title)
  useEffect(() => {
    setOriginalTitle(document.title)
    document.title = title
    return () => {
      document.title = originalTitle
    }
  }, [title])
}
```

```jsx
describe('useDocumentTitle', () => {
  test('sets a title', () => {
    document.title = 'original title'
    testHook(() => {
      useDocumentTitle('modified title')
    })

    expect(document.title).toBe('modified title')
  })

  test('returns to original title when component is unmounted', () => {
    document.title = 'original title'
    const { unmount } = testHook(() => {
      useDocumentTitle('modified title')
    })

    unmount()
    expect(document.title).toBe('original title')
  })
})
```

## Rerender Side-Effects

Using the `rerender` function to test calling useEffect multiple times

```jsx
import { useEffect } from 'react'

export function useCall(callback, deps) {
  useEffect(() => {
    callback()
  }, deps)
}
```

```jsx
describe('useCall', () => {
  test('calls once on render', () => {
    const spy = jest.fn()
    testHook(() => {
      useCall(spy, [])
    })
    expect(spy).toHaveBeenCalledTimes(1)
  })

  test('calls again if deps change', () => {
    let deps = [false]
    const spy = jest.fn()
    const { rerender } = testHook(() => {
      useCall(spy, deps)
    })
    expect(spy).toHaveBeenCalledTimes(1)

    deps = [true]
    rerender()
    expect(spy).toHaveBeenCalledTimes(2)
  })

  test('does not call again if deps are the same', () => {
    let deps = [false]
    const spy = jest.fn()
    const { rerender } = testHook(() => {
      useCall(spy, deps)
    })
    expect(spy).toHaveBeenCalledTimes(1)

    deps = [false]
    rerender()
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
```
