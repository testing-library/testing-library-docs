---
id: install
title: Install
sidebar_label: Install
---

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev @testing-library/dom
```

## Wrappers

If you are using a framework or library such as React, you will likely want to
install the wrapper:

- [React Testing Library](react-testing-library/intro.md)
- [Reason Testing Library](bs-react-testing-library/intro.md)
- [Native Testing Library](native-testing-library/intro.md)
- [Vue Testing Library](vue-testing-library/intro.md)
- [Marko Testing Library](marko-testing-library/intro.md)
- [Angular Testing Library](angular-testing-library/intro.md)
- [Preact Testing Library](preact-testing-library/intro.md)
- [Svelte Testing Library](svelte-testing-library/intro.md)
- [Cypress Testing Library](cypress-testing-library/intro.md)
- [Puppeteer Testing Library](pptr-testing-library/intro.md)
- [Testcafe Testing Library](testcafe-testing-library/intro.md)
- [Nightwatch Testing Library](nightwatch-testing-library/intro.md)

## Ecosystem

`DOM Testing Library` works well with these companion libraries:

- [user-event](ecosystem-user-event.md) browser event simulation
- [jest-dom](ecosystem-jest-dom.md) custom Jest matchers
- [bs-jest-dom](ecosystem-bs-jest-dom.md) companion library for `bs-react-testing-library`
- [jest-native](ecosystem-jest-native.md) companion library for `Native Testing Library`
- [react-select-event](ecosystem-react-select-event.md) companion library for `React Testing Library`
- [eslint-plugin-testing-library](ecosystem-eslint-plugin-testing-library.md) ESLint plugin for Testing Library
- [eslint-plugin-jest-dom](ecosystem-eslint-plugin-jest-dom.md) ESLint plugin for Jest DOM
- [riot-testing-library](ecosystem-riot-testing-library.md) adds APIs for working with Riot.js components

## Main Exports

You can
[review the `DOM Testing Library` package.json here](https://unpkg.com/@testing-library/dom/package.json).

In particular, the `main`, `module`, and `umd:main` fields are useful. Each of
these points to a file that's useful in certain situations. Typically, your
testing framework will resolve to the correct one for your situation, but if it
does not, then you can either configure your testing framework to resolve to the
right file when you require/import `@testing-library/dom` or you can import the
file you need more explicitly. For example:

```js
import { within } from '@testing-library/dom/dist/@testing-library/dom.umd.js'
```

You can
[review the published `dist` files here](https://unpkg.com/@testing-library/dom/dist/).

The `main` file is configured to compile down to support the version of node
that is referenced in the `package.json` `engines.node` field. But the `module`
and `umd:main` files are configured to compile down to support browsers as old
as IE 10.

<!--
Links
-->

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
