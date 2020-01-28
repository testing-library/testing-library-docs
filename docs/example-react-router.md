---
id: example-react-router
title: React Router
---

```jsx
// app.js
import React from 'react'
import { withRouter } from 'react-router'
import { Link, Route, Switch } from 'react-router-dom'

const About = () => <h1>You are on the about page</h1>
const Home = () => <h1>You are home</h1>
const NoMatch = () => <h1>404 Not Found</h1>

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

export { LocationDisplay, App }
```

```jsx
// app.test.js
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { LocationDisplay, App } from './app'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={history}>
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
  const history = createMemoryHistory()
  history.push('/some/bad/route')
  const { getByRole } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent('404 Not Found')
})

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory()
  const route = '/some-route'
  history.push(route)
  const { getByTestId } = render(
    <Router history={history}>
      <LocationDisplay />
    </Router>
  )
  expect(getByTestId('location-display')).toHaveTextContent(route)
})
```

## Reducing boilerplate

1. You can use the `wrapper` option to wrap a `MemoryRouter` around the component you want to render (`MemoryRouter` works when you don't need access to the history object itself in the test, but just need the components to be able to render and navigate).

```jsx
import { MemoryRouter } from 'react-router-dom'

test('full app rendering/navigating', () => {
  const { container, getByText } = render(<App />, {wrapper: MemoryRouter})
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
  const Wrapper = ({children}) => <Router history={history}>{children}</Router>
  return {
    ...render(ui, {wrapper: Wrapper}),
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
  expect(getByTestId('location-display')).toHaveTextContent(route)
})
```

