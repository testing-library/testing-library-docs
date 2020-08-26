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
 * To avoid repetition when creating wrappers
 */
const makeWrapper = (props) => ({ children }) => (
  <NameContext.Provider {...props}>{children}</NameContext.Provider>
)

/**
 * To test a component tree that uses a context consumer but not the provider,
 * wrap the tree with a matching provider
 */
test('NameConsumer shows value from provider', () => {
  const wrapper = makeWrapper({ value: 'C3PO' })
  render(<NameConsumer />, { wrapper })
  expect(screen.getByText(/^My Name Is:/)).toHaveTextContent('My Name Is: C3P0')
})

/**
 * To test a component that provides a context value, render a matching
 * consumer as the child
 */
test('NameProvider composes full name from first, last', () => {
  const wrapper = makeWrapper({ first: 'Boba', last: 'Fett' })
  render(
    <NameContext.Consumer>
      {(value) => <span>Received: {value}</span>}
    </NameContext.Consumer>,
    { wrapper }
  )
  expect(screen.getByText(/^Received:/).textContent).toBe('Received: Boba Fett')
})

/**
 * A tree containing both a providers and consumer can be rendered normally
 */
test('NameProvider/Consumer shows name of character', () => {
  const wrapper = ({ children }) => (
    <NameProvider first="Leia" last="Organa">
      {children}
    </NameProvider>
  )

  render(<NameConsumer />, { wrapper })
  expect(screen.getByText(/^My Name Is:/).textContent).toBe(
    'My Name Is: Leia Organa'
  )
})
```
