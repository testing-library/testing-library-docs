---
id: example-intro
title: Example
---

## Basic

```reason
/* Component_test.re */

open Jest;
open Expect;
open ReactTestingLibrary;

test("Component renders", () =>
  <div style=ReactDOMRe.Style.make(~color="rebeccapurple", ())>
    <h1> {ReasonReact.string("Heading")} </h1>
  </div>
  |> render
  |> expect
  |> toMatchSnapshot
);
```

## More

You can find more bs-react-testing-library examples at
[wyze/bs-react-testing-library/src/\_\_tests\_\_](https://github.com/wyze/bs-react-testing-library/tree/master/src/__tests__).
