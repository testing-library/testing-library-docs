---
id: faq
title: FAQ
---

<details>

<summary>Which get method should I use?</summary>

Based on [the Guiding Principles](guiding-principles.md), your test should
resemble how your code (component, page, etc.) as much as possible. With this in
mind, we recommend this order of priority:

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

Definitely yes! You can write unit, integration, functional, and end-to-end
tests with this library.

</details>

<details>

<summary>What if my app is localized and I don't have access to the text in test?</summary>

This is fairly common. Our first bit of advice is to try to get the default text
used in your tests. That will make everything much easier (more than just using
this utility). If that's not possible, then you're probably best to just stick
with `data-testid`s (which is not too bad anyway).

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
const firstLiInDiv = container.querySelector('div li')
const allLisInDiv = container.querySelectorAll('div li')
const rootElement = container.firstChild
```

</details>

<details>

<summary>What if I’m iterating over a list of items that I want to put the data-testid="item" attribute on. How do I distinguish them from each other?</summary>

You can make your selector just choose the one you want by including :nth-child
in the selector.

```javascript
const thirdLiInUl = container.querySelector('ul > li:nth-child(3)')
```

Or you could include the index or an ID in your attribute:

```javascript
;`<li data-testid="item-${item.id}">{item.text}</li>`
```

And then you could use the `getByTestId` utility:

```javascript
const items = [
  /* your items */
]
const container = render(/* however you render this stuff */)
const thirdItem = getByTestId(container, `item-${items[2].id}`)
```

</details>
