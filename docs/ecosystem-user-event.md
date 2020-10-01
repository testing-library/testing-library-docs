---
id: ecosystem-user-event
title: user-event
---

[`user-event`][gh] is a companion library for Testing Library that provides more
advanced simulation of browser interactions than the built-in [`fireEvent`][docs]
method.

```
npm install --save-dev @testing-library/user-event
```

```jsx
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

test('types inside textarea', async () => {
  document.body.innerHTML = `<textarea />`

  await userEvent.type(screen.getByRole('textbox'), 'Hello, World!')
  expect(screen.getByRole('textbox')).toHaveValue('Hello, World!')
})
```

- [user-event on GitHub][gh]

[gh]: https://github.com/testing-library/user-event
[docs]: https://testing-library.com/docs/dom-testing-library/api-events#fireevent
