---
id: intro
title: Testcafe Testing Library
---

## Introduction

[`testcafe-testing-library`][gh] allows the use of dom testing library queries within
[Testcafe](https://devexpress.github.io/testcafe/) for cross-browser end-to-end web
testing.

If you are new to the testing-library approach for writing tests, check out the [this guide on which query to use](https://testing-library.com/docs/guide-which-query) as well as the [cheat sheet](https://testing-library.com/docs/dom-testing-library/cheatsheet).   

## Install
```
npm install --save-dev testcafe @testing-library/testcafe
```

- [testcafe-testing-library on GitHub][gh]

## Usage

`testcafe-testing-library` provides custom Selectors allowing you to query the
dom.

Add the following to your .testcaferc.json file:

```json
  "clientScripts": [
    "module":"@testing-library/dom/dist/@testing-library/dom.umd.js"
  ],
```

You can now import & use get[All]By*, query[All]By*, find[All]By\* selectors in
your tests.
[See `DOM Testing Library` API for reference](dom-testing-library/api-queries.md)

> A note about queries in testcafe.  Testcafe has [built in waiting](https://devexpress.github.io/testcafe/documentation/test-api/built-in-waiting-mechanisms.html#wait-mechanism-for-selectors), for this reason, there's no difference between `queryBy` and `findBy` queries in testcafe testing library.  `getBy` queries will throw an exception (as designed) so they will fail immediately and do not work with the built in waiting that Testcafe provides.

## Examples

To show some simple examples (from
[https://github.com/testing-library/testcafe-testing-library/blob/master/tests/testcafe/selectors.js](https://github.com/testing-library/testcafe-testing-library/blob/master/tests/testcafe/selectors.js)):

```javascript

test('getByPlaceHolderText', async t => {
  await t.typeText(
    getByPlaceholderText('Placeholder Text'),
    'Hello Placeholder'
  )
})
test('getByText', async t => {
  await t.click(getByText('getByText'))
})

test('getByLabelText', async t => {
  await t.typeText(
    getByLabelText('Label For Input Labelled By Id'),
    'Hello Input Labelled By Id'
  )
})

test('queryAllByText', async t => {
  await t.expect(queryAllByText('Button Text').exists).ok()
  await t.expect(queryAllByText('Non-existing Button Text').exists).notOk()
})
```

## Configure

You can customize the testIdAttribute using the [configure function of DOM
Testing Library][config] in a few different ways:

### Once in a single page load:

```javascript
import { configureOnce, getByTestId } from '@testing-library/testcafe'

test('can be configured once in a single page load', async t => {
  await configureOnce({ testIdAttribute: 'data-other-test-id' })
  await t.click(getByTestId('other-id'))
})
```

### For every test & page load in a fixture:

```javascript
import { configure, getByTestId, getByText } from '@testing-library/testcafe'

fixture`configure`.clientScripts(
  configure({ testIdAttribute: 'data-automation-id' })
).page`http://localhost:13370`

test('supports alternative testIdAttribute', async t => {
  await t.click(getByTestId('image-with-random-alt-tag'))
})

test('still works after browser page load and reload', async t => {
  await t.click(getByText('Go to Page 2'))

  await t.eval(() => location.reload(true))

  await t
    .click(getByTestId('page2-thing'))
    .expect(getByText('second page').exists)
    .ok()
})
```

### Globally for all fixtures, tests and page loads by [injecting clientScripts][inject]

> Note: the dom-testing-library umd must come before your configure script

.testcaferc.json

```json
  "clientScripts": [
    "./node_modules/@testing-library/dom/dist/@testing-library/dom.umd.js"
    "./path/to/my-app-testcafe.config.js"
  ]
```

./path/to/my-app-testcafe.config.js

```javascript
window.TestingLibraryDom.configure({ testIdAttribute: 'data-automation-id' })
```

## Containers

By default the selectors come pre-bound to `document.body`, so no need to
provide a container. However, if you want to restrict your query using a
container, you can use `within` which can take either a
string or a query (get[All]By*, query[All]By*, find[All]By\*).

### Examples using `within`

```javascript
import { within } from '@testing-library/testcafe'

fixture`within`.page`http://localhost:13370`

test('works with getBy* selectors', async t => {
  await t
    .expect(within(getByTestId('nested')).getByText('Button Text').exists)
    .ok()
})

test('works with CSS selector strings', async t => {
  const { getByText } = await within('#nested')
  await t.click(getByText('Button Text')).ok()
})

test('works on any testcafe selector', async t => {
  const nested = Selector('#nested')

  await t.expect(within(nested).getByText('Button Text').exists).ok()
})

test('works with results from "byAll" query with index - regex', async t => {
  const nestedDivs = getAllByTestId(/nested/)
  await t.expect(nestedDivs.count).eql(2)

  await t
    .expect(within(nestedDivs.nth(0)).getByText('Button Text').exists)
    .ok()
    .expect(
      within(nestedDivs.nth(1)).getByText('text only in 2nd nested').exists
    )
    .ok()
})
```

[config]: https://testing-library.com/docs/dom-testing-library/api-configuration
[gh]: https://github.com/testing-library/testcafe-testing-library
[inject]:
  https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/inject-scripts-into-tested-pages.html#add-client-scripts-to-all-tests
