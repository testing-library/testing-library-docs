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

### for v2.x:
Add `testcafe-testing-library` to your test fixture's `beforeEach` hook:

```javascript
import {
  getByText, //or any other queries you want
  addTestcafeTestingLibrary,
} from '@testing-library/testcafe'

fixture`selectors`.beforeEach(addTestcafeTestingLibrary)
  .page`http://localhost:13370`
```

### for v3.x+ (requires testcafe 1.4.0 or greater)
`addTestcafeTestingLibrary` was removed in 3.x, instead you can now inject clientScripts as of testcafe 1.4.0.  For now, the path has to be used, but this will hopefully be changed to a module soon (pending a change to testcafe to support `umd:main` in package.json.

```json
  "clientScripts": [
    "./node_modules/@testing-library/dom/dist/@testing-library/dom.umd.js"
  ],
```

You can now import & use get[All]By*, query[All]By*, find[All]By*
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
container, you can use `within`. Note similar to using a testcafe `ClientFunction`
so you will need to await `within`, and you can't make assertions on it like you can using a `Selector`.
`within` can take either a string or a query (get[All]By*, query[All]By*, find[All]By*).

### Examples using `within`

```javascript
import { within } from '@testing-library/testcafe'

fixture`within`
  .page`http://localhost:13370`

test('getByText within container', async t => {
  const { getByText } = await within('#nested')
  await t.click(getByText('Button Text')).ok()
})

test("queryByPlaceholder doesn't find anything", async t => {
  const { queryByPlaceholderText } = await within('#nested')

  await t.expect(queryByPlaceholderText('Placeholder Text').exists).notOk()
})

test('works with nested selectors', async t => {
  const nested = await within(getByTestId('nested'));
  await t.expect(nested.getByText('Button Text').exists).ok()

});

test('works with nested selector from "All" query with index', async t => {
  const nestedDivs = getAllByTestId(/nested/);
  await t.expect(nestedDivs.count).eql(2);
  const nested = await within(nestedDivs.nth(0));

  await t.expect(nested.getByText('Button Text').exists).ok();
});
```

[gh]: https://github.com/benmonro/testcafe-testing-library
