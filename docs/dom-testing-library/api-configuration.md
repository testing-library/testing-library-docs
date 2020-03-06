---
id: api-configuration
title: Configuration
---

## Configuration

The library can be configured via the `configure` function, which accepts:

- a plain JS object; this will be merged into the existing configuration. e.g.
  `configure({testIdAttribute: 'not-data-testid'})`
- a function; the function will be given the existing configuration, and should
  return a plain JS object which will be merged as above, e.g.
  `configure(existingConfig => ({something: [...existingConfig.something, 'extra value for the something array']}))`

Configuration options:

`defaultHidden`: The default value for the `hidden` option used by
[`getByRole`](api-queries#byrole). Defaults to `false`.

`testIdAttribute`: The attribute used by [`getByTestId`](api-queries#bytestid)
and related queries. Defaults to `data-testid`.

`getElementError`: A function that returns the error used when
[`getBy*`](api-queries#getby) or [`getAllBy*`](api-queries#getallby) fail. Takes
the error message and container object as arguments.

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
// setup-tests.js
import { configure } from '@testing-library/dom'
import serialize from 'my-custom-dom-serializer'

configure({
  testIdAttribute: 'data-my-test-id',
  getElementError: (message, container) => {
    const customMessage = [message, serialize(container.firstChild)].join(
      '\n\n'
    )
    return new Error(customMessage)
  },
})
```

<!--React-->

```js
// setup-tests.js
import { configure } from '@testing-library/react'

configure({ testIdAttribute: 'data-my-test-id' })
```

<!--Cypress-->

```js
// setup-tests.js
import { configure } from '@testing-library/cypress'

configure({ testIdAttribute: 'data-my-test-id' })
```

<!--END_DOCUSAURUS_CODE_TABS-->
