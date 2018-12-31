---
id: example-intro
title: Example
sidebar_label: Example
---

## Full Example

See the following sections for a detailed breakdown of the test

```jsx
// __tests__/fetch.test.js
import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import axiosMock from "axios";
import Fetch from "../fetch";

afterEach(cleanup);

test("loads and displays greeting", async () => {
  const url = "/greeting";
  const { getByText, getByTestId } = render(<Fetch url={url} />);

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: "hello there" }
  });

  fireEvent.click(getByText("Load Greeting"));

  const greetingTextNode = await waitForElement(() =>
    getByTestId("greeting-text")
  );

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(getByTestId("greeting-text")).toHaveTextContent("hello there");
  expect(getByTestId("ok-button")).toHaveAttribute("disabled");
});
```

## Imports

```jsx
// import dependencies
import React from "react";

// import react-testing methods
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";

// add custom jest matchers from jest-dom
import "jest-dom/extend-expect";

// the axios mock is in __mocks__/
// see https://jestjs.io/docs/en/manual-mocks
import axiosMock from "axios";

// the component to test
import Fetch from "../fetch";
```

## Test

```jsx
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("loads and displays greeting", async () => {
  // Arrange
  // Act
  // Assert
});
```

### Arrange

The [`render`](./ecosystem-react-testing-library#render) method renders a React element into the DOM and returns utility functions for testing the component.

```jsx
const url = "/greeting";
const { getByText, getByTestId, container, asFragment } = render(
  <Fetch url={url} />
);
```

### Act

The [`fireEvent`](./api-events#fireEvent) method allows you to fire events to simulate user actions.

```jsx
axiosMock.get.mockResolvedValueOnce({
  data: { greeting: "hello there" }
});

fireEvent.click(getByText("Load Greeting"));

// Wait until the mocked `get` request promise resolves and
// the component calls setState and re-renders.
// `waitForElement` waits until the callback doesn't throw an error

const greetingTextNode = await waitForElement(() =>
  // getByTestId throws an error if it cannot find an element
  getByTestId("greeting-text")
);
```

### Assert

```jsx
expect(axiosMock.get).toHaveBeenCalledTimes(1);
expect(axiosMock.get).toHaveBeenCalledWith(url);
expect(getByTestId("greeting-text")).toHaveTextContent("hello there");
expect(getByTestId("ok-button")).toHaveAttribute("disabled");

// snapshots work great with regular DOM nodes!
expect(container.firstChild).toMatchSnapshot();

// you can also use get a `DocumentFragment`,
// which is useful if you want to compare nodes across render
expect(asFragment()).toMatchSnapshot();
```
