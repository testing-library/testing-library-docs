---
id: example-react-modal
title: Modals
---

```jsx
import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'

afterEach(cleanup)

// Component

const Modal = ({ onClose = () => {}, onConfirm = () => {}, children } = {}) => (
  <div aria-label="Modal">
    <section>{children}</section>
    <footer>
      <button aria-label="Accept" onClick={onConfirm}>
        Accept
      </button>
      <button aria-label="Cancel" onClick={onClose}>
        Cancel
      </button>
    </footer>
  </div>
)

// Tests

describe('Modal', () => {
  describe('render', () => {
    it('displays children', () => {
      const { getByText } = render(
        <Modal>
          <p>Popping in to say hi</p>
        </Modal>
      )
      expect(getByText('Popping in to say hi')).toBeVisible()
    })

    it('displays buttons', () => {
      const { getByLabelText } = render(<Modal />)
      expect(getByLabelText('Accept')).toBeVisible()
      expect(getByLabelText('Cancel')).toBeVisible()
    })
  })

  describe('Modal activities', () => {
    describe('onClose', () => {
      it('is called when clicking the cancel button', () => {
        const handleClose = jest.fn()
        const { getByLabelText } = render(<Modal onClose={handleClose} />)
        fireEvent.click(getByLabelText('Cancel'))
        expect(handleClose).toHaveBeenCalled()
      })
    })
    describe('onConfirm', () => {
      it('is called when clicking the accept button', () => {
        const handleConfirm = jest.fn()
        const { getByLabelText } = render(<Modal onConfirm={handleConfirm} />)
        fireEvent.click(getByLabelText('Delete'))
        expect(handleConfirm).toHaveBeenCalled()
      })
    })
  })
})
```
