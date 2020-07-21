---
id: using-fake-timers
title: Using Fake Timers
sidebar_label: Using Fake Timers
---

Using real timers in your tests is less common since they depend on real time
lapse. To solve this, most testing frameworks offer the option to use fake
timers in your tests so you won't need to rely on real times.

When using fake timers in your tests, all of the code inside your test uses fake
timers. The common pattern to setup fake timers is usually within the
`beforeEach`, here's an example of how to do that using jest:

```js
beforeEach(() => {
  jest.useFakeTimers()
})
```

When doing so, you'll probably want to restore the timers after your test runs.
For that you usually call `useRealTimers` in `afterEach`. It's important to
remember that before calling `useRealTimers` you should call
`runOnlyPendingTimers`. This will ensure you progress all pending timers so none
of them are left hanging and don't get executed.  
That way, your fake timers are encapsulated to your tests only and all of them
behave as you would expect. Here's an example of doing that using jest:

```js
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
```
