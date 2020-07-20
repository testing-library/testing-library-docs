---
id: using-fake-timers
title: Using Fake Timers
sidebar_label: Using Fake Timers
---

Using real timers in your tests is less common since they depend on real time
lapse. For that, some testing frameworks offer the option to use fake timers in
your tests so you won't need to depend on real times.

When using fake timers in your tests, all of the code inside your test uses fake
timers. The common pattern to setup fake timers is usually within the
`beforeEach`, here's an example of how to do that in jest:

```js
beforeEach(() => {
  jest.useFakeTimers()
})
```

When doing so, you'll probably want to restore the timers after your test runs.
For that you usually call `useRealTimers` in `afterEach`. It's important to
remember that before calling `useRealTimers` you have to `clearAllTimers`. This
will ensure you clear all the timers even if they weren't executed. That way,
your fake timers are encapsulated to your tests only and when we try to cleanup,
we will work with real timers. So you'll need to do something like this:

```js
afterEach(() => {
  jest.clearAllTimers()
  jest.useRealTimers()
})
```
