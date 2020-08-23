---
id: ecosystem-jasmine-dom
title: jasmine-dom
---

[`jasmine-dom`][gh] is a companion library for `React Testing Library` that
provides custom DOM element matchers for Jasmine

```
npm install --save-dev @testing-library/jasmine-dom
```

Then follow [usage section][gh-usage] from jasmine-dom's documentation to add
the matchers to Jasmine.

```jsx
<span data-testid="not-empty"><span data-testid="empty"></span></span>
<div data-testid="visible">Visible Example</div>

expect(queryByTestId(container, 'not-empty')).not.toBeEmptyDOMElement()
expect(getByText(container, 'Visible Example')).toBeVisible()
```

> Note: when using some of these matchers, you may need to make sure you use a
> query function (like `queryByTestId`) rather than a get function (like
> `getByTestId`). Otherwise the `get*` function could throw an error before your
> assertion.

Check out [jasmine-dom's documentation][gh] for a full list of available
matchers.

- [jasmine-dom on GitHub][gh]

[gh]: https://github.com/testing-library/jasmine-dom
[gh-usage]: https://github.com/testing-library/jasmine-dom#usage
