---
id: intro
title: Introduction
---

The [`@testing-library`][npm] family of packages helps you test UI components in
a user-centric way.

> [The more your tests resemble the way your software is used, the more confidence they can give you.](guiding-principles.md)

## The problem

You want to write maintainable tests that give you high confidence that your
components are working for your users. As a part of this goal, you want your
tests to avoid including implementation details so refactors of your components
(changes to implementation but not functionality) don't break your tests and
slow you and your team down.

## This solution

The core library, [`DOM Testing Library`][dom], is a light-weight solution for
testing web pages by querying and interacting with DOM nodes (whether simulated
with [`JSDOM`][jsdom]/[Jest][jest] or in the browser). The main utilities it
provides involve querying the DOM for nodes in a way that's similar to how the
user finds elements on the page. In this way, the library helps ensure your
tests give you confidence that your application will work when a real user uses
it.

The core library has been wrapped to provide ergonomic APIs for several
frameworks, including [React][react], [Angular][angular], and [Vue][vue]. There
is also a plugin to use testing-library queries for end-to-end tests in
[Cypress][cypress] and an implementation for [React Native][react-native].

### What this library is not

1.  A test runner or framework
2.  Specific to a testing framework

`DOM Testing Library` works with any environment that provides DOM APIs, such as
Jest, Mocha + JSDOM, or a real browser

### What you should avoid with Testing Library
Testing Library encourages you to avoid testing internals of the component (though you can test them). The Guiding Principles of this library emphasize on tests that closely resemble how your web pages are interacted by the users.

You may want to avoid following internals for testing - 
1. Internal state of the component
1.  Internal methods
1. Lifecycle methods of the component
1. Child component

[jest]: https://jestjs.io
[jsdom]: https://github.com/jsdom/jsdom
[dom]: dom-testing-library/intro.md
[react]: react-testing-library/intro.md
[angular]: angular-testing-library/intro.md
[vue]: vue-testing-library/intro.md
[cypress]: cypress-testing-library/intro.md
[react-native]: react-native-testing-library/intro.md
[npm]: https://www.npmjs.com/org/testing-library
