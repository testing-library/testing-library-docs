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

`testIdAttribute`: The attribute used by `getByTestId` and related queries.
Defaults to `data-testid`. See [`getByTestId`](#getbytestid).

```html

```

<!--DOCUSAURUS_CODE_TABS-->

<!--Native-->

```js
// setup-tests.js
import { configure } from '@testing-library/dom'

configure({testIdAttribute: 'my-data-test-id'})`
```

<!--React-->

```js
// setup-tests.js
import { configure } from '@testing-library/react'

configure({testIdAttribute: 'my-data-test-id'})`
```

<!--Cypress-->

```
The configuration object is not currently exposed to in Cypress Testing Library
```

<!--END_DOCUSAURUS_CODE_TABS-->
