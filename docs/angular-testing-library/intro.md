---
id: intro
title: Angular Testing Library
---

🦔 [`@testing-library/angular`][gh] Simple and complete
[Angular](https://angular.io) testing utilities that encourage good testing
practices.

```bash
npm install --save-dev @testing-library/angular
```

- [`@testing-library/angular-testing-library` on GitHub][gh]

## Usage

counter.component.ts

```typescript
@Component({
  selector: 'counter',
  template: `
    <button (click)="decrement()">-</button>
    <span data-testid="count">Current Count: {{ counter }}</span>
    <button (click)="increment()">+</button>
  `,
})
export class CounterComponent {
  @Input() counter = 0

  increment() {
    this.counter += 1
  }

  decrement() {
    this.counter -= 1
  }
}
```

counter.component.spec.ts

```typescript
import { render } from '@testing-library/angular'
import CounterComponent from './counter.component.ts'

describe('Counter', () => {
  test('should render counter', async () => {
    const { getByText } = await render(CounterComponent, {
      componentProperties: { counter: 5 },
    })

    expect(getByText('Current Count: 5'))
  })

  test('should increment the counter on click', async () => {
    const { getByText, click } = await render(CounterComponent, {
      componentProperties: { counter: 5 },
    })

    click(getByText('+'))

    expect(getByText('Current Count: 6'))
  })
})
```

## API

There is a small difference between `@testing-library/angular` and the
`testing-library` family, in this library we also expose all of the events via
the `render` function. This is done to trigger Angular's change detection after
each interaction.

You can also import these event via `@testing-library/angular`, but the
Angular's change detection will not be triggered automatically.

The same counts for all the queries provided by the DOM Testing Library
(`@testing-library/dom`), these are also re-exported and can be imported via
`@testing-library/angular`.

```typescript
import { getByText, click } from '@testing-library/angular'
```

[gh]: https://github.com/testing-library/angular-testing-library
