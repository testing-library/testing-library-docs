---
id: intro
title: Testcafe Testing Library
---

[`testcafe-testing-library`][gh] allows the use of dom-testing queries within
[Testcafe](https://devexpress.github.io/testcafe/) cross-browser end-to-end web
testing.

```
npm install --save-dev testcafe testcafe-testing-library
```

- [testcafe-testing-library on GitHub][gh]

## Usage

`testcafe-testing-library` provides custom Selectors allowing you to query the
dom.

Add `testcafe-testing-library` to your test fixture's `beforeEach` hook:

```javascript
import {
  getByText, //or any other queries you want
  addTestcafeTestingLibrary,
} from 'testcafe-testing-library'

fixture`selectors`.beforeEach(addTestcafeTestingLibrary)
  .page`http://localhost:13370`
```

You can now import & use `getBy`, `getAllBy`, `queryBy` and `queryAllBy`
selectors in your tests.
[See `dom-testing-library` API for reference](dom-testing-library/api-queries.md)

## Examples

To show some simple examples (from
[https://github.com/benmonro/testcafe-testing-library/blob/master/tests/testcafe/selectors.js](https://github.com/benmonro/testcafe-testing-library/blob/master/tests/testcafe/selectors.js)):

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
```

**_Note:_** The selectors come pre-bound to `document.body`, so no need to
provide a container.

[gh]: https://github.com/benmonro/testcafe-testing-library
