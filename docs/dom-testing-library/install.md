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

If you are using a framework such as React, you will likely want to install the
wrapper:

- [React Testing Library](react-testing-library/intro.md)
- [Cypress Testing Library](cypress-testing-library/intro.md)

## Ecosystem

`DOM Testing Library` works well with these companion libraries:

- [user-event](ecosystem-user-event.md) browser event simulation
- [jest-dom](ecosystem-jest-dom.md) custom Jest matchers

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
