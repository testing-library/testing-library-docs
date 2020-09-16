---
id: ecosystem-query-extensions
title: query-extensions
---

[`query-extensions`][gh] is a companion library for Testing Library that mixes a
higher-level API into the standard @testing-library core queries

```
npm install --save-dev query-extensions
```

```jsx
test('query-extensions can help us write more maintainable tests', async () => {
  const ui = {
    successIcon: { filter: 'role', params: ['img', { name: 'celebration' }] },
    signUpBtn: { filter: 'role', params: ['button', { name: /sign up/i }] },
    emailInput: { filter: 'labelText', params: ['Your email'] },
    loading: { filter: 'text', params: ['Loading...'] },
  }

  render(<YourComponent />)

  // component starts in loading state
  expect(screen.get(ui.loading)).toBeInTheDocument()

  // loads up an email input, loading disappears
  const emailInput = await screen.find(ui.emailInput)
  expect(screen.query(ui.loading)).toBeNull()

  // fill out email and click to sign up
  fireEvent.change(emailInput, { target: { value: 'email@example.com' } })
  fireEvent.click(screen.get(ui.signUpBtn))

  // success modal pops up and takes over component (hiding other content)
  await screen.find(ui.successIcon)
  expect(screen.query(ui.emailInput)).toBeNull()
  expect(screen.query(ui.signUpBtn)).toBeNull()
})
```

- [query-extensions on GitHub][gh]

[gh]: https://github.com/tjefferson08/query-extensions
