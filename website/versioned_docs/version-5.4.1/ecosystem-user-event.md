---
id: version-5.4.1-ecosystem-user-event
title: user-event
original_id: ecosystem-user-event
---

[`user-event`][gh] is a companion library for `react-testing-library` that provides more advanced simulation of browser interactions than the built-in `fireEvent` method.

```
npm install --save-dev user-event
```

```jsx
import React from "react";
import { render } from "react-testing-library";
import userEvent from "user-event";

const { getByText } = test("click", () => {
  render(<textarea data-testid="email" />);
});

userEvent.type(getByTestId("email"), "Hello, World!");
expect(getByTestId("email")).toHaveAttribute("value", "Hello, World!");
```

- [user-event on GitHub][gh]

[gh]: https://github.com/Gpx/user-event
