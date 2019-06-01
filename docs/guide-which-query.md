---
id: guide-which-query
title: Which query should I use?
---

## Priority

Based on [the Guiding Principles](guiding-principles.md), your test should
resemble how users interact with your code (component, page, etc.) as much as
possible. With this in mind, we recommend this order of priority:

1. **Queries Accessible to Everyone** queries that reflect the experience of
   visual/mouse users as well as those that use assistive technology
   1. `getByLabelText`: Only really good for form fields, but this is the number
      one method a user finds those elements, so it should be your top
      preference.
   1. `getByPlaceholderText`:
      [A placeholder is not a substitute for a label](https://www.nngroup.com/articles/form-design-placeholders/).
      But if that's all you have, then it's better than alternatives.
   1. `getByText`: Not useful for forms, but this is the number 1 method a user
      finds other elements (like buttons to click), so it should be your top
      preference for non-form elements.
   1. `getByDisplayValue`: The current value of a form element can be useful
      when navigating a page with filled-in values.
1. **Semantic Queries** HTML5 and ARIA compliant selectors. Note that the user
   experience of interacting with these attributes varies greatly across
   browsers and assistive technology.
   1. `getByAltText`: If your element is one which supports `alt` text (`img`,
      `area`, and `input`), then you can use this to find that element.
   1. `getByTitle`: The title attribute is not consistently read by
      screenreaders, and is not visible by default for sighted users
   1. `getByRole`: This can be used to select dialog boxes and other
      difficult-to-capture elements in a more semantic way
1. **Test IDs**
   1. `getByTestId`: The user cannot see (or hear) these, so this is only
      recommended for cases where you can't match by text or it doesn't make
      sense (the text is dynamic).

## Manual Queries

On top of the queries provided by the testing library, you can use the regular
[`querySelector` DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
to query elements. Note that using this as an escape hatch to query by class or
id is a bad practice because users can't see or identify these attributes. Use a
testid if you have to.

```jsx
// @testing-library/react
const { container } = render(<MyComponent />)
const foo = container.querySelector('[data-foo="bar"]')
```
