---
id: ecosystem-user-event
title: user-event
---

[`user-event`][gh] is a companion library for `React Testing Library` that
provides more advanced simulation of browser interactions than the built-in
`fireEvent` method.

```
npm install --save-dev @testing-library/user-event
```

```jsx
import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('click', async () => {
  const { getByRole } = render(<textarea />)

  await userEvent.type(getByRole('textbox'), 'Hello, World!')
  expect(getByRole('textbox')).toHaveAttribute('value', 'Hello, World!')
})
```

- [user-event on GitHub][gh]

[gh]: https://github.com/testing-library/user-event
