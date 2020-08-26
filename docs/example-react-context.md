---
id: example-react-context
title: React Context
---

```jsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { NameContext, NameProvider, NameConsumer } from '../react-context'

/**
 * Test default values by rendering a context consumer without a
 * matching provider
 */
test('NameConsumer shows default value', () => {
  render(<NameConsumer />)
  expect(screen.getByText(/^My Name Is:/)).toHaveTextContent(
    'My Name Is: Unknown'
  )
})

/**
 * To test a component tree that uses a context consumer but not the provider,
 * wrap the tree with a matching provider
 */
test('NameConsumer shows value from provider', () => {
  const tree = (
    <NameContext.Provider value="C3P0">
      <NameConsumer />
    </NameContext.Provider>
  )
  render(tree)
  expect(screen.getByText(/^My Name Is:/)).toHaveTextContent('My Name Is: C3P0')
})

/**
 * To test a component that provides a context value, render a matching
 * consumer as the child
 */
test('NameProvider composes full name from first, last', () => {
  const tree = (
    <NameProvider first="Boba" last="Fett">
      <NameContext.Consumer>
        {(value) => <span>Received: {value}</span>}
      </NameContext.Consumer>
    </NameProvider>
  )
  render(tree)
  expect(screen.getByText(/^Received:/).textContent).toBe('Received: Boba Fett')
})

/**
 * A tree containing both a providers and consumer can be rendered normally
 */
test('NameProvider/Consumer shows name of character', () => {
  const tree = (
    <NameProvider first="Leia" last="Organa">
      <NameConsumer />
    </NameProvider>
  )
  render(tree)
  expect(screen.getByText(/^My Name Is:/).textContent).toBe(
    'My Name Is: Leia Organa'
  )
})
```
