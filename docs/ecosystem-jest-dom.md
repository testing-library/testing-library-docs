---
id: ecosystem-jest-dom
title: jest-dom
---

[`jest-dom`][gh] is a companion library for `React Testing Library` that
provides custom DOM element matchers for Jest

```
npm install --save-dev @testing-library/jest-dom
```

```jsx
<span data-testid="not-empty"><span data-testid="empty"></span></span>
<div data-testid="visible">Visible Example</div>

expect(queryByTestId(container, 'not-empty')).not.toBeEmpty()
expect(getByText(container, 'Visible Example')).toBeVisible()
```

> Note: when using some of these matchers, you may need to make sure you use a
> query function (like `queryByTestId`) rather than a get function (like
> `getByTestId`). Otherwise the `get*` function could throw an error before your
> assertion.

Check out [jest-dom's documentation][gh] for a full list of available matchers.

- [jest-dom on GitHub][gh]

[gh]: https://github.com/testing-library/jest-dom
