---
id: example-react-modal
title: Modals
---

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'

const modalRoot = document.createElement('div')
modalRoot.setAttribute('id', 'modal-root')
document.body.appendChild(modalRoot)

class Modal extends React.Component {
  el = document.createElement('div')
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }
  render() {
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
        onClick={this.props.onClose}
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
          {this.props.children}
          <hr />
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>,
      this.el
    )
  }
}

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
