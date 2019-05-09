---
id: api-async
title: Async Utilities
---

Several utilities are provided for dealing with asynchronous code. These can be
useful to wait for an element to appear or disappear in response to an action.
(See the [guide to testing disappearance](guide-disappearance.md).)

## `wait`

```typescript
function wait(
  callback?: () => void,
  options?: {
    timeout?: number
    interval?: number
  }
): Promise<void>
```

When in need to wait for non-deterministic periods of time you can use `wait`,
to wait for your expectations to pass. The `wait` function is a small wrapper
around the
[`wait-for-expect`](https://github.com/TheBrainFamily/wait-for-expect) module.
Here's a simple example:

```javascript
// ...
// Wait until the callback does not throw an error. In this case, that means
// it'll wait until we can get a form control with a label that matches "username".
await wait(() => getByLabelText(container, 'username'))
getByLabelText(container, 'username').value = 'chucknorris'
// ...
```

This can be useful if you have a unit test that mocks API calls and you need to
wait for your mock promises to all resolve.

The default `callback` is a no-op function (used like `await wait()`). This can
be helpful if you only need to wait for one tick of the event loop (in the case
of mocked API calls with promises that resolve immediately).

The default `timeout` is `4500ms` which will keep you under
[Jest's default timeout of `5000ms`](https://facebook.github.io/jest/docs/en/jest-object.html#jestsettimeouttimeout).

The default `interval` is `50ms`. However it will run your callback immediately
on the next tick of the event loop (in a `setTimeout`) before starting the
intervals.

## `waitForElement`

```typescript
function waitForElement<T>(
  callback: () => T,
  options?: {
    container?: HTMLElement
    timeout?: number
    mutationObserverOptions?: MutationObserverInit
  }
): Promise<T>
```

When in need to wait for DOM elements to appear, disappear, or change you can
use `waitForElement`. The `waitForElement` function is a small wrapper around
the
[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

Here's a simple example:

```javascript
// ...
// Wait until the callback does not throw an error and returns a truthy value. In this case, that means
// it'll wait until we can get a form control with a label that matches "username".
// The difference from `wait` is that rather than running your callback on
// an interval, it's run as soon as there are DOM changes in the container
// and returns the value returned by the callback.
const usernameElement = await waitForElement(
  () => getByLabelText(container, 'username'),
  { container }
)
usernameElement.value = 'chucknorris'
// ...
```

You can also wait for multiple elements at once:

```javascript
const [usernameElement, passwordElement] = await waitForElement(
  () => [
    getByLabelText(container, 'username'),
    getByLabelText(container, 'password'),
  ],
  { container }
)
```

Using
[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
is more efficient than polling the DOM at regular intervals with `wait`. This
library sets up a
[`'mutationobserver-shim'`](https://github.com/megawac/MutationObserver.js) on
the global `window` object for cross-platform compatibility with older browsers
and the [`jsdom`](https://github.com/jsdom/jsdom/issues/639) that is usually
used in Node-based tests.

The default `container` is the global `document`. Make sure the elements you
wait for will be attached to it, or set a different `container`.

The default `timeout` is `4500ms` which will keep you under
[Jest's default timeout of `5000ms`](https://facebook.github.io/jest/docs/en/jest-object.html#jestsettimeouttimeout).

<a name="mutationobserveroptions"></a>The default `mutationObserverOptions` is
`{subtree: true, childList: true, attributes: true, characterData: true}` which
will detect additions and removals of child elements (including text nodes) in
the `container` and any of its descendants. It will also detect attribute
changes.

## `waitForDomChange`

```typescript
function waitForDomChange<T>(options?: {
  container?: HTMLElement
  timeout?: number
  mutationObserverOptions?: MutationObserverInit
}): Promise<T>
```

When in need to wait for the DOM to change you can use `waitForDomChange`. The
`waitForDomChange` function is a small wrapper around the
[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

Here is an example where the promise will be resolved because the container is
changed:

```javascript
const container = document.createElement('div')
waitForDomChange({ container })
  .then(() => console.log('DOM changed!'))
  .catch(err => console.log(`Error you need to deal with: ${err}`))
container.append(document.createElement('p'))
// if 👆 was the only code affecting the container and it was not run,
// waitForDomChange would throw an error
```

The promise will resolve with a
[`mutationsList`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver)
which you can use to determine what kind of a change (or changes) affected the
container

```javascript
const container = document.createElement('div')
container.setAttribute('data-cool', 'true')
waitForDomChange({ container }).then(mutationsList => {
  const mutation = mutationsList[0]
  console.log(
    `was cool: ${mutation.oldValue}\ncurrently cool: ${
      mutation.target.dataset.cool
    }`
  )
})
container.setAttribute('data-cool', 'false')
/*
  logs:
    was cool: true
    currently cool: false
*/
```

Using
[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
is more efficient than polling the DOM at regular intervals with `wait`. This
library sets up a
[`'mutationobserver-shim'`](https://github.com/megawac/MutationObserver.js) on
the global `window` object for cross-platform compatibility with older browsers
and the [`jsdom`](https://github.com/jsdom/jsdom/issues/639) that is usually
used in Node-based tests.

The default `container` is the global `document`. Make sure the elements you
wait for will be attached to it, or set a different `container`.

The default `timeout` is `4500ms` which will keep you under
[Jest's default timeout of `5000ms`](https://facebook.github.io/jest/docs/en/jest-object.html#jestsettimeouttimeout).

<a name="mutationobserveroptions"></a>The default `mutationObserverOptions` is
`{subtree: true, childList: true, attributes: true, characterData: true}` which
will detect additions and removals of child elements (including text nodes) in
the `container` and any of its descendants. It will also detect attribute
changes.

## `waitForElementToBeRemoved`

```typescript
function waitForElementToBeRemoved<T>(
  callback: () => T,
  options?: {
    container?: HTMLElement
    timeout?: number
    mutationObserverOptions?: MutationObserverInit
  }
): Promise<T>
```

To wait for the removal of element(s) from the DOM you can use
`waitForElementToBeRemoved`. The `waitForElementToBeRemoved` function is a small
wrapper around the
[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

The callback must return the pre-existing element or array of elements that are
expected to be removed.

Here is an example where the promise resolves with `true` because the element is
removed:

```javascript
const el = document.querySelector('div.getOuttaHere')

waitForElementToBeRemoved(() =>
  document.querySelector('div.getOuttaHere')
).then(() => console.log('Element no longer in DOM'))

el.setAttribute('data-neat', true)
// other mutations are ignored...

el.parentElement.removeChild(el)
// logs 'Element no longer in DOM'
```

`waitForElementToBeRemoved` will throw an error when the provided callback does
not return an element.

```javascript
waitForElementToBeRemoved(() => null).catch(err => console.log(err))

// 'The callback function which was passed did not return an element
// or non-empty array of elements.
// waitForElementToBeRemoved requires that the element(s) exist
// before waiting for removal.'
```

Using
[`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
is more efficient than polling the DOM at regular intervals with `wait`. This
library sets up a
[`'mutationobserver-shim'`](https://github.com/megawac/MutationObserver.js) on
the global `window` object for cross-platform compatibility with older browsers
and the [`jsdom`](https://github.com/jsdom/jsdom/issues/639) that is usually
used in Node-based tests.

The default `container` is the global `document`. Make sure the elements you
wait for are descendants of `container`.

The default `timeout` is `4500ms` which will keep you under
[Jest's default timeout of `5000ms`](https://facebook.github.io/jest/docs/en/jest-object.html#jestsettimeouttimeout).

<a name="mutationobserveroptions"></a>The default `mutationObserverOptions` is
`{subtree: true, childList: true, attributes: true, characterData: true}` which
will detect additions and removals of child elements (including text nodes) in
the `container` and any of its descendants. It will also detect attribute
changes.
