---
id: api-events
title: Events
---

## `fireEvent`

```typescript
fireEvent(node: HTMLElement, event: Event)
```

Fire DOM events.

React attaches an event handler on the `document` and handles some DOM events
via event delegation (events bubbling up from a `target` to an ancestor).
Because of this, your `node` must be in the `document.body` for `fireEvent` to
work with React. This is why `render` appends your container to `document.body`.
This is an alternative to simulating Synthetic React Events via
[`Simulate`](https://reactjs.org/docs/test-utils.html#simulate). The benefit of
using `fireEvent` over `Simulate` is that you are testing real DOM events
instead of Synthetic Events. This aligns better with
[the Guiding Principles](#guiding-principles).
([Also Dan Abramov told me to stop use Simulate](https://twitter.com/dan_abramov/status/980807288444383232)).

> NOTE: If you don't like having to use `cleanup` (which we have to do because
> we render into `document.body`) to get `fireEvent` working, then feel free to
> try to chip into making it possible for React to attach event handlers to the
> rendered node rather than the `document`. Learn more here:
> [facebook/react#2043](https://github.com/facebook/react/issues/2043)

```jsx
import {render, cleanup, fireEvent} from 'react-testing-library'

// don't forget to clean up the document.body
afterEach(cleanup)

test('clicks submit button', () => {
  const handleClick = jest.fn()
  const {getByText} = render(<button onClick={handleClick}>Submit</button>)

  fireEvent.click(getByText('Submit'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### `fireEvent[eventName]`

```typescript
fireEvent[eventName](node: HTMLElement, eventProperties: Object)
```

Convenience methods for firing DOM events. Check out
[dom-testing-library/src/events.js](https://github.com/kentcdodds/dom-testing-library/blob/master/src/events.js)
for a full list as well as default `eventProperties`.

```jsx
import {render, fireEvent} from 'react-testing-library'

const {getByText} = render(<Form />)

// similar to the above example
// click will bubble for React to see it
const rightClick = {button: 2}
fireEvent.click(getByText('Submit'), rightClick)
// default `button` property for click events is set to `0` which is a left click.
```

If you want to trigger the
[`onChange`](https://reactjs.org/docs/dom-elements.html#onchange) handler of a
[controlled component](https://reactjs.org/docs/forms.html#controlled-components)
with a different `event.target.value`, sending `value` through `eventProperties`
won't work like it does with `Simulate`. You need to use `fireEvent` to fire a
`change` DOM event with `value` property set on `target`

```jsx
import {render, fireEvent} from 'react-testing-library'

const {getByLabelText} = render(<Form />)

const comment = getByLabelText('Comment')
fireEvent.change(comment, {
  target: {value: 'Great advice, I love your posts!'},
})
```

Note that if you want to trigger `onChange` handler on a checkbox, you should
fire a `click` event instead of `change`.

```jsx
import {render, fireEvent} from 'react-testing-library'

const {getByLabelText} = render(<Checkbox />)

fireEvent.click(getByLabelText('Checkbox'))
```
