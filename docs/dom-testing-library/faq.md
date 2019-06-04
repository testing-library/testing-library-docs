---
id: faq
title: FAQ
---

<details>

<summary>Which get method should I use?</summary>

See [Which Query Should I Use](guide-which-query.md)

</details>

<details>

<summary>Can I write unit tests with this library?</summary>

Definitely yes! You can write unit, integration, and end-to-end tests with this
library.

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

<!--
Links:
-->

<!-- prettier-ignore-start -->

[guiding-principle]: https://twitter.com/kentcdodds/status/977018512689455106

<!-- prettier-ignore-end -->
