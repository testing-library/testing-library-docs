---
id: example-react-modal
title: Modals
---

```jsx
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

const App = ({ onClose, children }) => {
  const el = document.createElement('div')

  useEffect(() => {
    modalRoot.appendChild(el)

    return () => modalRoot.removeChild(el)
  })

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          padding: 20,
          background: '#fff',
          borderRadius: '2px',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          justifySelf: 'center',
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <hr />
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    el
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

test('modal shows the children and a close button', () => {
  // Arrange
  const handleClose = jest.fn()

  // Act
  const { getByText } = render(
    <Modal onClose={handleClose}>
      <div>test</div>
    </Modal>
  )
  // Assert
  expect(getByText('test')).toBeTruthy()

  // Act
  fireEvent.click(getByText(/close/i))

  // Assert
  expect(handleClose).toHaveBeenCalledTimes(1)
})
```
