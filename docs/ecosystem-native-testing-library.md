---
id: ecosystem-native-testing-library
title: Native Testing Library
sidebar_label: native-testing-library
---

Native Testing Library is a testing library for **React Native** inspired by
`DOM Testing Library`. Because React Native does not run in a browser
environment, the core queries are implemented independently, unlike other
wrappers that use `DOM Testing Library` as the base. You'll find much more
information about the library, including examples, on the project website:

- [Docs](https://native-testing-library.com)
- [Docs repo](https://github.com/bcarroll22/native-testing-library-docs)
- [Project repo](https://github.com/bcarroll22/native-testing-library)

## Installation

This module should be installed in your project's `devDependencies`:

```
npm install --save-dev @testing-library/react-native
```

You will also need `react` and `react-native` installed as `dependencies` in
order to use this project.

## Example

```javascript
import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { fireEvent, render, wait } from '@testing-library/react-native'

function Example() {
  const [name, setUser] = React.useState('')
  const [show, setShow] = React.useState(false)

  return (
    <View>
      <TextInput value={name} onChangeText={setUser} testID="input" />
      <Button
        title="Print Username"
        onPress={() => {
          // let's pretend this is making a server request, so it's async
          // (you'd want to mock this imaginary request in your unit tests)...
          setTimeout(() => {
            setShow(!show)
          }, Math.floor(Math.random() * 200))
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  )
}

test('examples of some things', async () => {
  const { getByTestId, getByText, queryByTestId, rootInstance } = render(
    <Example />
  )
  const famousWomanInHistory = 'Ada Lovelace'

  const input = getByTestId('input')
  fireEvent.changeText(input, famousWomanInHistory)

  const button = getByText('Print Username')
  fireEvent.press(button)

  await wait(() => expect(queryByTestId('printed-username')).toBeTruthy())

  expect(getByTestId('printed-username').props.children).toBe(
    famousWomanInHistory
  )
  expect(rootInstance).toMatchSnapshot()
})
```
