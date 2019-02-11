---
id: ecosystem-bs-jest-dom
title: bs-jest-dom
---

[`bs-jest-dom`][gh] is a companion library for `bs-react-testing-library` that
provides custom DOM element matchers for Jest

```
npm install --save-dev bs-jest-dom
```

- [bs-jest-dom on GitHub][gh]

Check out [jest-dom's documentation](https://github.com/gnapse/jest-dom) for a
full list of available matchers.

[gh]: https://github.com/wyze/bs-jest-dom

## Setup

```json
{
  "bs-dev-dependencies": ["bs-jest-dom"]
}
```

## Example

```reason
/* A_test.re */

open Jest;
open JestDom;
open ReactTestingLibrary;

module Heading = {
  let component = ReasonReact.statelessComponent("Heading");

  let make = (~text, _children) => {
    ...component,
    render: _self =>
      <h1> {ReasonReact.string(text)} </h1>,
  };
};

test("renders with text", () =>
  <Heading text="Hello, World!" />
  |> render
  |> getByText(~matcher=`Str("Hello, World!"))
  |> expect
  |> toBeInTheDocument
);
```

## More Examples

You can find more bs-jest-dom examples at
[wyze/bs-jest-dom/src/\_\_tests\_\_](https://github.com/wyze/bs-jest-dom/tree/master/src/__tests__).
