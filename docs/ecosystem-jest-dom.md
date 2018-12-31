---
id: ecosystem-jest-dom
title: jest-dom
---

[`jest-dom`][gh] is a companion library for `react-testing-library` that provides custom DOM element matchers for Jest

```
npm install --save-dev jest-dom
```

```jsx
<span data-testid="not-empty"><span data-testid="empty"></span></span>
<div data-testid="visible">Visible Example</div>

expect(queryByTestId(container, 'not-empty')).not.toBeEmpty()
expect(getByText(container, 'Visible Example')).toBeVisible()
```

- [jest-dom on GitHub][gh]


[gh]: https://github.com/gnapse/jest-dom