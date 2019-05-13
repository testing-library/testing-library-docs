---
id: api-events
title: Firing Events
---

## `fireEvent`

```typescript
fireEvent(node: HTMLElement, event: Event)
```

Fire DOM events.

```javascript
// <button>Submit</button>
fireEvent(
  getByText(container, 'Submit'),
  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  })
)
```

## `fireEvent[eventName]`

```typescript
fireEvent[eventName](node: HTMLElement, eventProperties: Object)
```

Convenience methods for firing DOM events. Check out
[src/events.js](https://github.com/testing-library/dom-testing-library/blob/master/src/events.js)
for a full list as well as default `eventProperties`.

```javascript
// <button>Submit</button>
const rightClick = { button: 2 }
fireEvent.click(getByText('Submit'), rightClick)
// default `button` property for click events is set to `0` which is a left click.
```

**target**: When an event is dispatched on an element, the event has the
subjected element on a property called `target`. As a convenience, if you
provide a `target` property in the `eventProperties` (second argument), then
those properties will be assigned to the node which is receiving the event.

This is particularly useful for a change event:

```javascript
fireEvent.change(getByLabelText(/username/i), { target: { value: 'a' } })

// note: attempting to manually set the files property of an HTMLInputElement
// results in an error as the files property is read-only.
// this feature works around that by using Object.defineProperty.
fireEvent.change(getByLabelText(/picture/i), {
  target: {
    files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
  },
})
```

**Keyboard events**: There are three event types related to keyboard input -
`keyPress`, `keyDown`, and `keyUp`. When firing these you need to reference an
element in the DOM and the key you want to fire.

```javascript
fireEvent.keyDown(domNode, { key: 'Enter', code: 13 })

// note: you should set the charCode or it will be fallback to 0
// will Fire an KeyboardEvent with charCode = 0
fireEvent.keyDown(domNode, { key: 'Enter', code: 13 })

// will Fire an KeyboardEvent with charCode = 65
fireEvent.keyDown(domNode, { key: 'A', code: 65, charCode: 65 })
```

You can find out which key code to use at
[https://keycode.info/](https://keycode.info/).

## `createEvent[eventName]`

```typescript
createEvent[eventName](node: HTMLElement, eventProperties: Object)
```

Convenience methods for creating DOM events that can then be fired by
`fireEvent`, allowing you to have a reference to the event created: this might
be useful if you need to access event properties that cannot be initiated
programmatically (such as `timeStamp`).

```javascript
const myEvent = createEvent.click(node, { button: 2 })
fireEvent(node, myEvent)
// myEvent.timeStamp can be accessed just like any other properties from myEvent
```
