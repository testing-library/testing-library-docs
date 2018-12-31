---
id: version-5.4.1-faq
title: FAQ
sidebar_label: FAQ
original_id: faq
---

<details>

<summary>How do I test input onChange handlers?</summary>

TL;DR:
[Go to the `on-change.js` example](https://codesandbox.io/s/github/kentcdodds/react-testing-library-examples/tree/master/?module=%2Fsrc%2F__tests__%2Fon-change.js&previewwindow=tests)

In summary:

```javascript
import React from "react";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";

test("change values via the fireEvent.change method", () => {
  const handleChange = jest.fn();
  const { container } = render(<input type="text" onChange={handleChange} />);
  const input = container.firstChild;
  fireEvent.change(input, { target: { value: "a" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(input.value).toBe("a");
});

test("checkboxes (and radios) must use fireEvent.click", () => {
  const handleChange = jest.fn();
  const { container } = render(
    <input type="checkbox" onChange={handleChange} />
  );
  const checkbox = container.firstChild;
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(checkbox.checked).toBe(true);
});
```

If you've used enzyme or React's TestUtils, you may be accustomed to changing
inputs like so:

```javascript
input.value = "a";
Simulate.change(input);
```

We can't do this with react-testing-library because React actually keeps track
of any time you assign the `value` property on an `input` and so when you fire
the `change` event, React thinks that the value hasn't actually been changed.

This works for Simulate because they use internal APIs to fire special simulated
events. With react-testing-library, we try to avoid implementation details to
make your tests more resiliant.

So we have it worked out for the change event handler to set the property for
you in a way that's not trackable by React. This is why you must pass the value
as part of the `change` method call.

</details>

<details>

<summary>Which get method should I use?</summary>

Based on [the Guiding Principles](./guiding-principles), your test should
resemble how your code (component, page, etc.) is used as much as possible. With
this in mind, we recommend this order of priority:

1.  `getByLabelText`: Only really good for form fields, but this is the number 1
    method a user finds those elements, so it should be your top preference.
2.  `getByPlaceholderText`:
    [A placeholder is not a substitute for a label](https://www.nngroup.com/articles/form-design-placeholders/).
    But if that's all you have, then it's better than alternatives.
3.  `getByText`: Not useful for forms, but this is the number 1 method a user
    finds other elements (like buttons to click), so it should be your top
    preference for non-form elements.
4.  `getByAltText`: If your element is one which supports `alt` text (`img`,
    `area`, and `input`), then you can use this to find that element.
5.  `getByTestId`: The user cannot see (or hear) these, so this is only
    recommended for cases where you can't match by text or it doesn't make sense
    (the text is dynamic).

Other than that, you can also use the `container` to query the rendered
component as well (using the regular
[`querySelector` API](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)).

</details>

<details>

<summary>Can I write unit tests with this library?</summary>

Definitely yes! You can write unit and integration tests with this library. See
below for more on how to mock dependencies (because this library intentionally
does NOT support shallow rendering) if you want to unit test a high level
component. The tests in this project show several examples of unit testing with
this library.

As you write your tests, keep in mind:

> The more your tests resemble the way your software is used, the more
> confidence they can give you. - [17 Feb 2018][guiding-principle]

</details>

<details>

<summary>What if my app is localized and I don't have access to the text in test?</summary>

This is fairly common. Our first bit of advice is to try to get the default text
used in your tests. That will make everything much easier (more than just using
this utility). If that's not possible, then you're probably best to just stick
with `data-testid`s (which is not bad anyway).

</details>

<details>

<summary>If I can't use shallow rendering, how do I mock out components in tests?</summary>

In general, you should avoid mocking out components (see
[the Guiding Principles section](./guiding-principles)). However if you need to,
then it's pretty trivial using
[Jest's mocking feature](https://facebook.github.io/jest/docs/en/manual-mocks.html).
One case that I've found mocking to be especially useful is for animation
libraries. I don't want my tests to wait for animations to end.

```javascript
jest.mock("react-transition-group", () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(props =>
    props.in ? <FakeTransition>{props.children}</FakeTransition> : null
  );
  return { CSSTransition: FakeCSSTransition, Transition: FakeTransition };
});

test("you can mock things with jest.mock", () => {
  const { getByTestId, queryByTestId } = render(
    <HiddenMessage initialShow={true} />
  );
  expect(queryByTestId("hidden-message")).toBeTruthy(); // we just care it exists
  // hide the message
  fireEvent.click(getByTestId("toggle-message"));
  // in the real world, the CSSTransition component would take some time
  // before finishing the animation which would actually hide the message.
  // So we've mocked it out for our tests to make it happen instantly
  expect(queryByTestId("hidden-message")).toBeNull(); // we just care it doesn't exist
});
```

Note that because they're Jest mock functions (`jest.fn()`), you could also make
assertions on those as well if you wanted.

[Open full test](./example-react-transition-group)
for the full example.

This looks like more work that shallow rendering (and it is), but it gives you
more confidence so long as your mock resembles the thing you're mocking closely
enough.

If you want to make things more like shallow rendering, then you could do
something more
[like this]([Open full test](./example-react-transition-group)
).

Learn more about how Jest mocks work from my blog post:
["But really, what is a JavaScript mock?"](https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d)

</details>

<details>

<summary>What if I want to verify that an element does NOT exist?</summary>

You typically will get access to rendered elements using the `getByTestId`
utility. However, that function will throw an error if the element isn't found.
If you want to specifically test for the absence of an element, then you should
use the `queryByTestId` utility which will return the element if found or `null`
if not.

```javascript
expect(queryByTestId("thing-that-does-not-exist")).toBeNull();
```

</details>

<details>

<summary>I really don't like data-testids, but none of the other queries make sense. Do I have to use a data-testid?</summary>

Definitely not. That said, a common reason people don't like the `data-testid`
attribute is they're concerned about shipping that to production. I'd suggest
that you probably want some simple E2E tests that run in production on occasion
to make certain that things are working smoothly. In that case the `data-testid`
attributes will be very useful. Even if you don't run these in production, you
may want to run some E2E tests that run on the same code you're about to ship to
production. In that case, the `data-testid` attributes will be valuable there as
well.

All that said, if you really don't want to ship `data-testid` attributes, then
you can use
[this simple babel plugin](https://www.npmjs.com/package/babel-plugin-react-remove-properties)
to remove them.

If you don't want to use them at all, then you can simply use regular DOM
methods and properties to query elements off your container.

```javascript
const firstLiInDiv = container.querySelector("div li");
const allLisInDiv = container.querySelectorAll("div li");
const rootElement = container.firstChild;
```

</details>

<details>

<summary>What if I’m iterating over a list of items that I want to put the data-testid="item" attribute on. How do I distinguish them from each other?</summary>

You can make your selector just choose the one you want by including :nth-child
in the selector.

```javascript
const thirdLiInUl = container.querySelector("ul > li:nth-child(3)");
```

Or you could include the index or an ID in your attribute:

```javascript
<li data-testid={`item-${item.id}`}>{item.text}</li>
```

And then you could use the `getByTestId` utility:

```javascript
const items = [
  /* your items */
];
const { getByTestId } = render(/* your component with the items */);
const thirdItem = getByTestId(`item-${items[2].id}`);
```

</details>

<details>

<summary>What about enzyme is "bloated with complexity and features" and "encourage
poor testing practices"?</summary>

Most of the damaging features have to do with encouraging testing implementation
details. Primarily, these are
[shallow rendering](http://airbnb.io/enzyme/docs/api/shallow.html), APIs which
allow selecting rendered elements by component constructors, and APIs which
allow you to get and interact with component instances (and their
state/properties) (most of enzyme's wrapper APIs allow this).

The guiding principle for this library is:

> The more your tests resemble the way your software is used, the more
> confidence they can give you. - [17 Feb 2018][guiding-principle]

Because users can't directly interact with your app's component instances,
assert on their internal state or what components they render, or call their
internal methods, doing those things in your tests reduce the confidence they're
able to give you.

That's not to say that there's never a use case for doing those things, so they
should be possible to accomplish, just not the default and natural way to test
react components.

</details>

<details>

<summary>Why isn't snapshot diffing working?</summary>

If you use the [snapshot-diff](https://github.com/jest-community/snapshot-diff)
library to save snapshot diffs, it won't work out of the box because this
library uses the DOM which is mutable. Changes don't return new objects so
snapshot-diff will think it's the same object and avoid diffing it.

Luckily there's an easy way to make it work: clone the DOM when passing it into
snapshot-diff. It looks like this:

```js
const firstVersion = container.cloneNode(true);
// Do some changes
snapshotDiff(firstVersion, container.cloneNode(true));
```

</details>

<details>

<summary>Does this library work with React Native?</summary>

> This is still quite experimental - please contribute with your own
> results/findings!

The short answer is yes, but with a few caveats. It's possible to replicate a
lot of DOM functionality with
[`react-native-web`](https://github.com/necolas/react-native-web), allowing you
to use the query APIs like `getByText`. You can then add a `press` event to
`fireEvent` that simulates a mouseDown immediately followed by a mouseUp, and
call this with Touchable\* components.

One thing this approach does _not_ support is any kind of native module
functionality (like native navigation modules). The way around this is to design
your components so that as much of the functionality you need tested is
encapsulated outside of any native module functionality.

For a barebones example of testing a React Native component,
[see here](https://github.com/thchia/rn-testing-library-example).

There is also a sibling project called
[react-native-testing-library](https://github.com/callstack/react-native-testing-library)
which aims to test React Native apps without mentioned tradeoffs, having the API
inspired by and mostly compatible with this library.

</details>

<!--
Links:
-->

<!-- prettier-ignore-start -->

[guiding-principle]: https://twitter.com/kentcdodds/status/977018512689455106
[data-testid-blog-post]: https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269
[dom-testing-lib-textmatch]: https://github.com/kentcdodds/dom-testing-library#textmatch

<!-- prettier-ignore-end -->
