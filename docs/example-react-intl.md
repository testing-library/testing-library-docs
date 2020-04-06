---
id: example-react-intl
title: React Intl
---

> **Note**
>
> If you want to combine setupTests with another setup you should check
> [`setup`](react-testing-library/setup.md)

## Configuring React-Intl Polyfills / Locales

If you're using React-Intl in your project, and you need to load a locale, You
have two options:

1.  If you're using Node 12 and higher, Intl support is now out of the box. You
    can
    [configure](https://nodejs.org/api/intl.html#intl_options_for_building_node_js)
    how many ICU's you want injected to your app, the default is `full-icu`
    meaning all ICU's.  
    All you need to do is embed the set of ICU data you need:

        ```js
        // test-utils.js
        export const setupTests = () => {
          if (global.Intl) {
            Intl.NumberFormat = new Intl.NumberFormat('pt')
            Intl.DateTimeFormat = new Intl.DateTimeFormat('pt')
          } else {
            global.Intl = IntlPolyfill
          }
        }
        ```

2.  If you're using Node with prior versions and you need to load a locale, you
    must load the Polyfills according to that language.  
    In order to do so, you may use this small setup and/or combine it with other
    setups.

        ```js
        // test-utils.js
        import IntlPolyfill from 'intl'
        import 'intl/locale-data/jsonp/pt'

        export const setupTests = () => {
          // https://formatjs.io/guides/runtime-environments/#server
          if (global.Intl) {
            Intl.NumberFormat = IntlPolyfill.NumberFormat
            Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
          } else {
            global.Intl = IntlPolyfill
          }
        }
        ```

## Creating a custom render function

To test our translated component we can create a custom `render` function using
the `wrapper` option as explained in the
[setup](./react-testing-library/setup.md) page.  
Our custom `render` function can look like this:

```jsx
// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

function render(ui, { locale = 'pt', ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <IntlProvider locale={locale}>{children}</IntlProvider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
```

## A complete example

```jsx
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
// We're importing from our own created test-utils and not RTL's
import { render, screen, setupTests } from '../test-utils.js'
import { FormattedDate } from 'react-intl'

const FormatDateView = () => {
  return (
    <div data-testid="date-display">
      <FormattedDate
        value="2019-03-11"
        timeZone="utc"
        day="2-digit"
        month="2-digit"
        year="numeric"
      />
    </div>
  )
}

setupTests()

test('it should render FormattedDate and have a formated pt date', () => {
  render(<FormatDateView />)
  expect(screen.getByTestId('date-display')).toHaveTextContent('11/03/2019')
})
```
