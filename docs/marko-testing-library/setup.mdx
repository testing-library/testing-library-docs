---
id: setup
title: Setup
sidebar_label: Setup
---

`Marko Testing Library` is not dependent on any test runner, however it is
dependent on the test environment. This package works for testing both server
side, and client side Marko templates and provide a slightly different
implementation for each. This is done using a
[browser shim](https://github.com/defunctzombie/package-browser-field-spec),
just like in Marko.

The [browser shim](https://github.com/defunctzombie/package-browser-field-spec)
is picked up by many tools, including all bundlers and some test runners.

Below is some example configurations to test both server and browser components
with some popular test runners.

### [Jest](http://jestjs.io)

For Jest to understand Marko templates you must first
[install the @marko/jest preset](https://github.com/marko-js/jest#installation).
This allows your Marko templates to be imported into your tests.

In Jest there is a
[browser option](https://jestjs.io/docs/en/configuration#browser-boolean) which
will tell Jest to resolve the
[browser shim](https://github.com/defunctzombie/package-browser-field-spec)
version of all modules as mentioned above.

To test components rendered in the client side, be sure to enable both the
`browser` option and the preset and you are good to go!

**jest.config.js**

```javascript
module.exports = {
  preset: '@marko/jest',
  browser: true, // Tells Jest to resolve browser shims.
}
```

For testing components rendered server side we can omit the `browser` option,
however ideally you should also set the
[`testEnvironment option`](https://jestjs.io/docs/en/configuration#testenvironment-string)
to `node` which will disable loading JSDOM globally.

**jest.config.js**

```javascript
module.exports = {
  preset: '@marko/jest',
  testEnvironment: 'node', // Tells Jest not to load a global JSDOM for server side.
}
```

A Jest configuration can also have multiple
[projects](https://jestjs.io/docs/en/configuration#projects-array-string-projectconfig)
which we can use to create a combined configuration for server side tests, and
browser side tests, like so:

**jest.config.js**

```javascript
module.exports = {
  projects: [
    {
      displayName: 'server',
      testEnvironment: 'node',
      preset: '@marko/jest',
      testRegex: '/__tests__/[^.]+\\.server\\.js$',
    },
    {
      displayName: 'browser',
      preset: '@marko/jest',
      browser: true,
      testRegex: '/__tests__/[^.]+\\.browser\\.js$',
    },
  ],
}
```

### [Mocha](https://mochajs.org)

Mocha also works great for testing Marko components. Mocha, however, has no
understanding of
[browser shims](https://github.com/defunctzombie/package-browser-field-spec)
which means out of the box it can only work with server side Marko components.

To run server side Marko tests with `mocha` you can simply run the following
command:

```console
mocha -r marko/node-require
```

This enables the
[Marko require hook](https://markojs.com/docs/installing/#require-marko-views)
and allows you to require server side Marko templates directly in your tests.

For client side testing of your components with Mocha often you will use a
bundler to build your tests (this will properly resolve the browser shims
mentioned above) and then you can load these tests in some kind of browser
context.
