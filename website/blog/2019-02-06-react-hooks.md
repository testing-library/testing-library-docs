---
title: React Hooks Are Supported
author: Alex Krolick
authorURL: http://github.com/alexkrolick
---

[Hooks have been released in React 16.8](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks)
and they are supported out of the box by `react-testing-library`!

Because `react-testing-library` only uses the external interface of your React
components, hooks work right away! If you rewrite a class component with hooks
your tests should still pass.

For unit testing custom hooks, we've also added a `testHook` utility. Check out
the [docs for `testHook`](/docs/react-testing-library/api#testhook). Thanks to
[@donavon](https://github.com/donavon) for the PR.
