---
id: guide-events
title: Considerations for fireEvent
---

## Interactions vs. events

Based on [the Guiding Principles](guiding-principles.md), your test should
resemble how users interact with your code (component, page, etc.) as much as
possible. With this in mind, you should be aware that `fireEvent` is not actually
how the user interacts with your application.

Depending on the interaction multiple events can be fired in the browser and sometimes
the events fired depend on the type of the element. For example consider a button
element that should receive a keydown. It will only receive that event if the button
is focused. If it is focused an additional click event is fired if the Enter key
was pressed.

You don't need to know every possible combination of interactions but you shouldn't
have to much confidence in the interactive behavior of your components if you only
test them with mocked sequences of events.

## Alternatives

We will describe a couple of simple adjustments to your tests that will increase your confidence
in the interactive behavior of your components. For other interactions you should
either consider using `user-event` or testing your components in a real environment
(e.g. manually, automatic with cypress etc.).

### Keydown

[A keydown is dispatched on the currently focused element, the body element
or the document element](https://w3c.github.io/uievents/#events-keyboard-event-order). Following this you should prefer

```diff
- fireEvent.keyDown(getByText('click me'));
+ getByText('click me').focus();
+ fireEvent.keyDown(document.activeElement || document.body);
```

This will also test that the element in question can even receive keyboard events.

### Focus/Blur

If an element is focused not only a focus event is dispatched. The active element
in the document also changes as well as the previously focused element getting blurred.
To simulate this behavior you can simply replace `fireEvent` with imperative focus:

```diff
fireEvent.focus(getByText('focus me');
getByText('focus me').focus();
```

A nice side-effect of this approach is that any assertion on fired focus events will fail
if the element is not focusable. This is especially important if you follow-up with a keydown event.
