---
id: using-fake-timers
title: Using Fake Timers
sidebar_label: Using Fake Timers
---

Using real timers in your tests is problematic since they depend on real time
lapse.  
When you depend on real time, your tests can be unpredictable, slow, flaky. This
will will also prevent you from making any assumptions about timestamps within
your tests.

To solve these problems, most testing frameworks offer the option to use fake
timers in your tests so you won't need to rely on real times.

When using fake timers in your tests, all of the code inside your test uses fake
timers.  
The common pattern to setup fake timers is usually within the `beforeEach`, for
example:

```js
// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers()
})
```

When using fake timers, you need to remember to restore the timers after your
test runs.  
The main reason to do that is to prevent 3rd party libraries running after your
test finishes (e.g cleanup functions), from being coupled to your fake timers
and use real timers instead.  
For that you usually call `useRealTimers` in `afterEach`.  
It's important to also call `runOnlyPendingTimers` before switching to real
timers.  
This will ensure you flush all the pending timers before you switch to real
timers. If you don't progress the timers and just switch to real timers, the
scheduled tasks won't get executed and you'll get an unexpected behavior.  
This is mostly important for 3rd parties that schedule tasks without you being
aware of it.  
Here's an example of doing that using jest:

```js
// Running all pending timers and switching to real timers using Jest
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})
```
