---
id: intro
title: Intro
---

Vue Testing Library builds on top of `DOM Testing Library` by adding APIs for
working with Vue components. It is built on top of
[@vue/test-utils](https://github.com/vuejs/vue-test-utils), the official testing
library for Vue.

- [Vue Testing Library on GitHub][gh]

In short, Vue Testing Library does three things:

1. Re-exports query utilities and helpers from `DOM Testing Library`.
2. Hides `@vue/test-utils` methods that are in conflict with Testing Library
   [Guiding Principle](/docs/guiding-principles).
3. Tweaks some methods from both sources to match Vue requirements.

## Quickstart

```
npm install --save-dev @testing-library/vue
```

You can now use all of `DOM Testing Library`'s `getBy`, `getAllBy`, `queryBy`
and `queryAllBy` commands. See [here](dom-testing-library/api-queries.md) for
usage.

You may also be interested in installing `jest-dom` so you can use
[the custom Jest matchers](https://github.com/gnapse/jest-dom#readme).

## The problem

You want to write maintainable tests for your Vue components. As a part of this
goal, you want your tests to avoid including implementation details of your
components and rather focus on making your tests give you the confidence for
which they are intended. As part of this, you want your testbase to be
maintainable in the long run so refactors of your components (changes to
implementation but not functionality) don't break your tests and slow you and
your team down.

## This solution

`Vue Testing Library` is a very light-weight solution for testing Vue
components. It provides light utility functions on top of `@vue/test-utils`, in
a way that encourages better testing practices. Its primary guiding principle
is:

> [The more your tests resemble the way your software is used, the more confidence they can give you.](guiding-principles.md)

So rather than dealing with instances of rendered Vue components, your tests
will work with actual DOM nodes.

The utilities this library provides facilitate querying the DOM in the same way
the user would. Finding for elements by their label text (just like a user
would), finding links and buttons from their text (like a user would). It also
exposes a recommended way to find elements by a `data-testid` as an "escape
hatch" for elements where the text content and label do not make sense or is not
practical.

This library encourages your applications to be more accessible and allows you
to get your tests closer to using your components the way a user will, which
allows your tests to give you more confidence that your application will work
when a real user uses it.

[gh]: https://github.com/testing-library/vue-testing-library
