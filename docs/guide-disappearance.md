---
id: guide-disappearance
title: Appearance and Disappearance
---

Sometimes you need to test that an element is present and then disappears or the
other way around.

## Waiting for appearance

If you need to wait for an element to appear, [`findBy`][find-by] and the [async
wait utility][async-api] `waitFor` allow you to wait for an assertion to be
satisfied before proceeding. The wait utilities retry until the query passes or
times out.

Wait for appearance and return the element using `findBy`:

```javascript
test('movie title appears', async () => {
  // element is initially not present...

  const movieTitle = await screen.findByText('the lion king')
  expect(movieTitle).toBeInTheDocument()
})
```

Or wait for appearance using `waitFor` and `getBy`:

```javascript
test('movie title appears', async () => {
  // element is initially not present...

  await waitFor(() => {
    expect(screen.getByText('the lion king')).toBeInTheDocument()
  })
})
```

These do more or less the same thing (`findBy` uses `waitFor` under the hood),
but the `findBy` version results in simpler code and a better error message.

_Note: `toBeInTheDocument()` comes from [`@testing-library/jest-dom`][jest-dom]_

## Waiting for disappearance

When you want to wait until an element has disappeared, you can use
`waitForElementToBeRemoved` or `waitFor`.

The `waitForElementToBeRemoved` [async wait utility][async-api] takes an element
as an argument and waits until that element has been removed from the document.

```javascript
test('movie title no longer present in document', async () => {
  // element is present
  const movie = screen.queryByText('the mummy')
  await waitForElementToBeRemoved(movie)

  // element has been removed
  expect(movie).not.toBeInTheDocument()
})
```

`waitForElementToBeRemoved` works by using a
[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
internally, which means it responds to the element being removed in a very
efficient way.

You can also pass an array or a callback to `waitForElementToBeRemoved` -
[see the documentation for more options](dom-testing-library/api-async.md#waitforelementtoberemoved).

Another option is using the `waitFor` helper.

The `waitFor` [async wait utility][async-api] retries until the wrapped function
stops throwing an error. Because expectations throw errors when they fail,
putting one in the wrapped function can be used to wait for the element to be
removed.

```javascript
test('movie title goes away', async () => {
  // element is initially present...
  // note use of queryBy instead of getBy to return null
  // instead of throwing in the query itself
  await waitFor(() => {
    expect(screen.queryByText('i, robot')).not.toBeInTheDocument()
  })
})
```

Polling like this is not as efficient as observing for mutations using
`waitForElementToBeRemoved`, but sometimes it's the best option.

## Asserting elements are not present

As opposed to waiting for removal, this is for when you are at a point in your
test where you know an element shouldn't be present.

You might reach for `getBy` to check that something is not present, but `getBy`
queries throw an error when they can't find an element. If you want to make an
assertion that an element is _not_ present in the document, you need to use
`queryBy` queries instead:

```javascript
const submitButton = screen.queryByText('submit')
expect(submitButton).not.toBeInTheDocument() // it doesn't exist in the document
```

The `queryAll` query methods return an array of matching elements. The length of
the array can be useful for assertions after elements are added or removed from
the document.

```javascript
const submitButtons = screen.queryAllByText('submit')
expect(submitButtons).toHaveLength(2) // expect 2 elements
```

_Note: `not.toBeInTheDocument()` comes from
[`@testing-library/jest-dom`][jest-dom]_

## The `toBeInTheDocument()` matcher

The [`@testing-library/jest-dom`][jest-dom] utility library provides the
`.toBeInTheDocument()` matcher, which can be used to assert that an element is
in the body of the document, or not. This can be more meaningful than asserting
a query result is `null`, and it also provides more helpful error messages when
your tests fail.

```javascript
// use `queryBy` to avoid throwing an error with `getBy`
const submitButton = screen.queryByText('submit')
expect(submitButton).not.toBeInTheDocument()
```

Read about how to set this up [in the documentation](jest-dom).

[async-api]: dom-testing-library/api-async.md
[find-by]: dom-testing-library/api-queries.md#findby
[jest-dom]: ecosystem-jest-dom.md
