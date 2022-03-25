---
id: example-findByText
title: Using findByText
---

```javascript
// src/__tests__/example.test.js
// This is an example of how to use findByText to query for text that
// is not visible right away

import {screen} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
// provides a set of custom jest matchers that you can use to extend jest
// i.e. `.toBeVisible`
import '@testing-library/jest-dom'

function renderApp() {
  const el = document.body.appendChild(document.createElement('div'))
  el.innerHTML = `
    <form id='login_form' method='post' name='login'>
      <label for='username'>User Name:</label>

      <input
        type='text'
        name='username'
        id='username_input'
        placeholder='Enter user name'
      />

      <span id='username_required_error' style='color: red; display: none;'>
        User Name Required
      </span>

      <span id='invalid_username_error' style='color: red; display: none;'>
        Invalid User Name
      </span>

      <label for='password'>Password:</label>

      <input
        type='password'
        name='password'
        id='password_input'
        placeholder='Enter password'
      />

      <span id='invalid_password_error' style='color: red; display: none;'>
        Invalid Password
      </span>

      <span id='password_required_error' style='color: red; display: none;'>
        Password Required
      </span>

      <button id='submit' type='submit'>
        Login
      </button>
    </form>
  `

  const submitButton = el.querySelector('#submit')
  const formEl = el.querySelector('#login_form')

  submitButton.addEventListener('click', () => {
    const userInput = el.querySelector('#username_input')
    const passwordInput = el.querySelector('#password_input')

    const userName = userInput.value
    const password = passwordInput.value
    if (!userName) {
      el.querySelector('#username_required_error').style.display = 'inline'
    }

    if (!password) {
      el.querySelector('#password_required_error').style.display = 'inline'
    }

    if (userName && userName !== 'Bob') {
      el.querySelector('#invalid_username_error').style.display = 'inline'
    }

    if (password && password !== 'theBuilder') {
      el.querySelector('#invalid_password_error').style.display = 'inline'
    }
  })

  formEl.addEventListener('submit', function (evt) {
    evt.preventDefault()
    window.history.back()
  })

  return {user: userEvent.setup()}
}

afterEach(() => (document.body.innerHTML = ``))

describe('findByText Examples', () => {
  it('should show a required field warning for each empty input field', async () => {
    const {user} = renderApp()
    await user.click(
      screen.getByRole('button', {
        name: 'Login',
      }),
    )

    expect(await screen.findByText('User Name Required')).toBeVisible()

    expect(await screen.findByText('Password Required')).toBeVisible()
  })

  it('should show invalid field errors for each invalid input field', async () => {
    const {user} = renderApp()
    const userNameField = screen.getByPlaceholderText('Enter user name')
    const passwordField = screen.getByPlaceholderText('Enter password')

    expect(await screen.findByText('Invalid Password')).not.toBeVisible()
    expect(await screen.findByText('Invalid User Name')).not.toBeVisible()

    await user.type(userNameField, 'Philchard')
    await user.type(passwordField, 'theCat')

    expect(userNameField).toHaveValue('Philchard')
    expect(passwordField).toHaveValue('theCat')

    await user.click(
      screen.getByRole('button', {
        name: 'Login',
      }),
    )

    expect(await screen.findByText('Invalid User Name')).toBeVisible()
    expect(await screen.findByText('Invalid Password')).toBeVisible()
  })
})
```
