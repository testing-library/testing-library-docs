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

const { getByText } = test('click', () => {
  render(<textarea data-testid="email" />)
})

userEvent.type(getByTestId('email'), 'Hello, World!')
expect(getByTestId('email')).toHaveAttribute('value', 'Hello, World!')
```

- [user-event on GitHub][gh]

[gh]: https://github.com/testing-library/user-event
