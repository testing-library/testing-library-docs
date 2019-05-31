---
id: setup
title: Setup
sidebar_label: Setup
---

If you're running your tests in the browser bundled with webpack (or similar)
then `DOM Testing Library` should work out of the box for you. However, most
people using `DOM Testing Library` are using it with
[the Jest testing framework](https://jestjs.io/) with the `testEnvironment` set
to
[`jest-environment-jsdom`](https://www.npmjs.com/package/jest-environment-jsdom)
(which is the default configuration with Jest).

## Using Without Jest

[jsdom](https://github.com/jsdom/jsdom) is a pure JavaScript implementation of
the DOM and browser APIs that runs in node. If you're not using Jest and you
would like to run your tests in Node, then you must install jsdom yourself.
There's also a package called
[jsdom-global](https://github.com/rstacruz/jsdom-global) which can be used to
setup the global environment to simulate the browser APIs.

First, install jsdom and jsdom-global.

```
npm install --save-dev jsdom jsdom-global
```

With mocha, the test command would look something like this:

```
mocha --require jsdom-global/register
```

> Note, depending on the version of Node you're running, you may also need to
> install `@babel/polyfill` (if you're using babel 7) or `babel-polyfill` (for
> babel 6).
