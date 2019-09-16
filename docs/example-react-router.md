---
id: example-react-router
title: React Router
---

```jsx
// app.js
import React from 'react'
import { withRouter } from 'react-router'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
))

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
      <LocationDisplay />
    </div>
  )
}
```

```jsx
// app.test.js
import { Router } from 'react-router-dom'

test('full app rendering/navigating', () => {
  const { container, getByText } = render(
    <Router>
      <App />
    </Router>
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(container.innerHTML).toMatch('You are home')

  fireEvent.click(getByText(/about/i))

  // check that the content changed to the new page
  expect(container.innerHTML).toMatch('You are on the about page')
})

test('landing on a bad page shows 404 page', () => {
  window.history.pushState({}, '', '/some/bad/route')
  const { getByRole } = render(
    <Router>
      <App />
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent('404 Not Found')
})

test('rendering a component that uses withRouter', () => {
  const route = '/some-route'
  window.history.pushState({}, '', route)
  const { getByTestId } = render(
    <Router>
      <LocationDisplay />
    </Router>
  )
  expect(getByTestId('location-display').textContent).toBe(route)
})
```

## Reducing boilerplate

1. You can use the `wrapper` option to wrap `Router` around the component you want to render:

```jsx
test('full app rendering/navigating', () => {
  const { container, getByText } = render(<App />, {wrapper: Router})
  // verify page content for expected route
  expect(getByRole('heading')).toMatch('Home')
})
```

2. If you find yourself adding Router components to your tests a lot, you may want to create
a helper function that wraps around `render`. 

```jsx
// test utils file
function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}
```

```jsx
// app.test.js
test('landing on a bad page', () => {
  const { container } = renderWithRouter(<App />, {
    route: '/something-that-does-not-match',
  })
  expect(container.innerHTML).toMatch('No match')
})

test('rendering a component that uses withRouter', () => {
  const route = '/some-route'
  const { getByTestId } = renderWithRouter(<LocationDisplay />, { route })
  expect(getByTestId('location-display').textContent).toBe(route)
})
```

