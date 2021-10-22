---
id: example-findByText
title: Using findByText
---

```javascript
// src/__tests__/example.test.js
// This is an example of how to use findByText to query for text that
// is not visible right away

import {getByRole, findByText, getByPlaceholderText} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
// provides a set of custom jest matchers that you can use to extend jest
// i.e. `.toBeVisible`
import '@testing-library/jest-dom'

const renderContent = el => {
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

    var userName = userInput.value
    var password = passwordInput.value
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

  return el
}

describe('findByText Examples', () => {
  let div
  let container

  beforeEach(() => {
    div = document.createElement('div')
    container = renderContent(div)
  })

  it('should show a required field warning for each empty input field', async () => {
    userEvent.click(
      getByRole(container, 'button', {
        name: 'Login',
      }),
    )

    expect(await findByText(container, 'User Name Required')).toBeVisible()

    expect(await findByText(container, 'Password Required')).toBeVisible()
  })

  it('should show invalid field errors for each invalid input field', async () => {
    const userNameField = getByPlaceholderText(container, 'Enter user name')
    const passwordField = getByPlaceholderText(container, 'Enter password')

    expect(await findByText(container, 'Invalid Password')).not.toBeVisible()
    expect(await findByText(container, 'Invalid User Name')).not.toBeVisible()

    userEvent.type(userNameField, 'Philchard')
    userEvent.type(passwordField, 'theCat')

    expect(userNameField).toHaveValue('Philchard')
    expect(passwordField).toHaveValue('theCat')

    userEvent.click(
      getByRole(container, 'button', {
        name: 'Login',
      }),
    )

    expect(await findByText(container, 'Invalid User Name')).toBeVisible()
    expect(await findByText(container, 'Invalid Password')).toBeVisible()
  })
})
```
