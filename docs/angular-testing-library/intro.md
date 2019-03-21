---
id: intro
title: Angular Testing Library
---

[`@angular-extensions/testing-library`][gh] is an [Angular][angular] adapter
around `dom-testing-library`.

```bash
npm install --save-dev @angular-extensions/testing-library
```

- [@angular-extensions/testing-library on GitHub][gh]

## Usage

Use the `createComponent` function to create the component and the Angular
TestBed.

After this, you can use all of `dom-testing-library`'s `getBy`, `getAllBy`,
`queryBy` and `queryAllBy` queries. See [here](../api-queries) for more info.

Besides the `dom-testing-library`'s queries, all of the events (e.g. `click`,
`input`, ...) are also exposed. After every event, this library will run the
Angular change detection. See [here](../api-events) for more info.

## Examples

> **Note**
>
> There are two different ways to create a component, in both ways it's still
> required to provide the Angular TestBed.

One way to create the component is via the component's selector:

```typescript
test('a user can login', async () => {
  const {
    container,
    getByLabelText,
    getByText,
    input,
    submit,
  } = await createComponent<LoginFormComponent>('<login-form></login-form>', {
    declarations: [LoginFormComponent],
    imports: [ReactiveFormsModule],
  })

  const usernameNode = getByLabelText(/username/i)
  const passwordNode = getByLabelText(/password/i)
  const submitButtonNode = getByText(/submit/i)
  const formNode = container.querySelector('form')

  const fakeUser = { username: 'jackiechan', password: 'supersecurepassword' }

  input(usernameNode, {
    target: {
      value: fakeUser.username,
    },
  })

  passwordNode.value = fakeUser.password
  input(passwordNode)

  submit(formNode)
})
```

Another way to create the component is via the `object` syntax. The only
difference is the setup of the component, the assertions remain the same. This
can come in handy in order to provide more complex parameters or to use a spy to
verify output events.

```typescript
test('a user can login', async () => {
  const login = {
    emit: jest.fn(),
  }

  const {
    container,
    getByLabelText,
    getByText,
    input,
    submit,
  } = await createComponent(
    {
      component: LoginFormComponent,
      parameters: {
        login,
      },
    },
    {
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule],
    }
  )

  const usernameNode = getByLabelText(/username/i)
  const passwordNode = getByLabelText(/password/i)
  const submitButtonNode = getByText(/submit/i)
  const formNode = container.querySelector('form')

  const fakeUser = { username: 'jackiechan', password: 'supersecurepassword' }

  input(usernameNode, {
    target: {
      value: fakeUser.username,
    },
  })

  passwordNode.value = fakeUser.password
  input(passwordNode)

  submit(formNode)

  expect(handleLogin.emit).toHaveBeenCalledWith(fakeUser)
})
```

Inside the project
[tests folder](https://github.com/angular-extensions/testing-library/tree/master/projects/testing-library/tests)
you can find some more simple tests.

[gh]: https://github.com/angular-extensions/testing-library
[angular]: https://angular.io/
