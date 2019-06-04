---
id: intro
title: Testcafe Testing Library
---

[`testcafe-testing-library`][gh] allows the use of dom-testing queries within
[Testcafe](https://devexpress.github.io/testcafe/) cross-browser end-to-end web
testing.

```
npm install --save-dev testcafe @testing-library/testcafe
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
} from '@testing-library/testcafe'

fixture`selectors`.beforeEach(addTestcafeTestingLibrary)
  .page`http://localhost:13370`
```

You can now import & use `getBy`, `getAllBy`, `queryBy` and `queryAllBy`
selectors in your tests.
[See `DOM Testing Library` API for reference](dom-testing-library/api-queries.md)

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

## Containers

By default the selectors come pre-bound to `document.body`, so no need to
provide a container. However, if you want to restrict your query using a
container, you can use `within`. Keep in mind that `within` works using a
Testcafe `ClientFunction` so you will need to await it, and you can't make
assertions on it like you can using a `Selector`.

### Examples using `within`

```javascript
import { within, addTestcafeTestingLibrary } from '@testing-library/testcafe'

fixture`within`.beforeEach(addTestcafeTestingLibrary)
  .page`http://localhost:13370`

test('getByText within container', async t => {
  const { getByText } = await within('#nested')
  await t.click(getByText('Button Text')).ok()
})

test("queryByPlaceholder doesn't find anything", async t => {
  const { queryByPlaceholderText } = await within('#nested')

  await t.expect(queryByPlaceholderText('Placeholder Text').exists).notOk()
})
```

[gh]: https://github.com/benmonro/testcafe-testing-library
