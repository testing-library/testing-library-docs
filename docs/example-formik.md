---
id: example-react-formik
title: Formik
---

Example based in this
[Async Submission Formik example](https://formik.org/docs/examples/async-submission)

```jsx
// myForm.js
import React from 'react'
import {Formik, Field, Form} from 'formik'

const sleep = ms => new Promise(r => setTimeout(r, ms))

export const MyForm = ({onSubmit}) => {
  const handleSubmit = async values => {
    await sleep(500)
    onSubmit(values)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
```

```jsx
// myForm.test.js
import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {MyForm} from './myForm.js'

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  render(<MyForm onSubmit={handleSubmit} />)
  const user = userEvent.setup()

  await user.type(screen.getByRole('textbox', {name: /first name/i}), 'John')
  await user.type(screen.getByRole('textbox', {name: /last name/i}), 'Dee')
  await user.type(
    screen.getByRole('textbox', {name: /email/i}),
    'john.dee@someemail.com',
  )

  await user.click(screen.getByRole('button', {name: /submit/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
    }),
  )
})
```
