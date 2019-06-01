---
id: intro
title: Introduction
sidebar_label: Intro
---

Native Testing Library is a testing library for **React Native** inspired by
`DOM Testing Library`. Because React Native does not run in a browser
environment, the core queries are implemented independently, unlike other
wrappers that use `DOM Testing Library` as the base. You'll find much more
information about the library, including examples, on the project sites:

- [Docs][docs]
- [Docs repo][docs-repo]
- [Project repo][gh]

## Quickstart

```
npm install --save-dev @testing-library/react-native
```

- [Native Testing Library on GitHub][gh]

[docs]: https://native-testing-library.com
[gh]: https://github.com/testing-library/native-testing-library
[docs-repo]: https://github.com/testing-library/native-testing-library-docs

## The problem

You want to write maintainable tests for your React Native application. You love
testing library, and you want to be able to write maintainable tests for your
React Native application also. You don't want to use a library that renders
components to a fake DOM, and you've had a hard time finding what you need to
write tests using that philosophy in React Native.

## This solution

`Native Testing Library` is an implementation of the well-known
`testing-library` API that works for React Native. The primary goal is to mimic
the testing library API as closely as possible while still accounting for the
differences in the platforms. Accomplishing this is no small feat because of the
differences between the two platforms. Although most framework implementations
like `React Testing Library` are thin layers over `DOM Testing Library`, this
library needed to have its own base implementation as well as a user-facing API.
This library uses the
[react-test-renderer](https://reactjs.org/docs/test-renderer.html), whereas
`DOM Testing Library` uses ReactDOM and JSDOM. The main philosophy is that you
should find elements that are on the "screen" the way users would. This approach
is meant to give you confidence that your app is working as a cohesive unit.
Just like the `DOM Testing Library`, `Native Testing Library`'s primary guiding
principle is:

> [The more your tests resemble the way your software is used, the more confidence they can give you.](guiding-principles.md)

This library gives you the tools you need to find things in your application the
way your users would. You can do things like find elements by text, input value,
and accessibility labels -- the types of things your users can see. We also give
you the ability to search for elements by `testID`, but you should consider it a
last resort because users can't see a testID and it can introduce unpredictable
behavior in your tests.

It will also encourage you to build more accessible apps. For example, your
users can't see your icon touchable that doesn't have an accessibility label, so
neither can your tests. We believe that writing good tests using this library
will force you to give more consideration to whether what you're doing is an
accessible experience for all of your users.

This library should, in theory, work with any any testing framework like Jest or
Mocha, but we do recommend you use Jest with the `react-native` Jest preset. We
have not tested it in any other environment, and likely won't be able to support
usage with another library.

[jest]: https://jestjs.io
