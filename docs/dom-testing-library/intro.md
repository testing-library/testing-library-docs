---
id: intro
title: Introduction
---

## The problem

You want to write maintainable tests for your Web UI. As a part of this goal,
you want your tests to avoid including implementation details of your components
and rather focus on making your tests give you the confidence for which they are
intended. As part of this, you want your testbase to be maintainable in the long
run so refactors of your components (changes to implementation but not
functionality) don't break your tests and slow you and your team down.

## This solution

The `DOM Testing Library` is a very light-weight solution for testing DOM nodes
(whether simulated with [`JSDOM`](https://github.com/jsdom/jsdom) as provided by
default with [Jest][jest] or in the browser). The main utilities it provides
involve querying the DOM for nodes in a way that's similar to how the user finds
elements on the page. In this way, the library helps ensure your tests give you
confidence in your UI code. The `DOM Testing Library`'s primary guiding
principle is:

> [The more your tests resemble the way your software is used, the more confidence they can give you.](guiding-principles.md)

As part of this goal, the utilities this library provides facilitate querying
the DOM in the same way the user would. Finding for elements by their label text
(just like a user would), finding links and buttons from their text (like a user
would), and more. It also exposes a recommended way to find elements by a
`data-testid` as an "escape hatch" for elements where the text content and label
do not make sense or is not practical.

This library encourages your applications to be more accessible and allows you
to get your tests closer to using your components the way a user will, which
allows your tests to give you more confidence that your application will work
when a real user uses it.

**What this library is not**:

1.  A test runner or framework
2.  Specific to a testing framework (though we recommend Jest as our preference,
    the library works with any framework. See
    [Using Without Jest](setup.md#using-without-jest))

[jest]: https://jestjs.io
