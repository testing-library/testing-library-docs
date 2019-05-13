---
id: intro
title: Angular Testing Library
---

🦔 [`@angular-extensions/testing-library`][gh] Simple and complete
[Angular](https://angular.io) testing utilities that encourage good testing
practices.

```bash
npm install --save-dev angular-extensions/testing-library
```

- [`@angular-extensions/testing-library` on GitHub][gh]

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
import { render } from '@angular-extensions/testing-library'
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

There is a small difference between `@angular-extensions/testing-library` and
the `testing-library` family, in this library we also expose all of the events
via the `render` function. This is done to trigger Angular's change detection
after each interaction.

You can also import these event via `@angular-extensions/testing-library`, but
the Angular's change detection will not be triggered automatically.

The same counts for all the queries provided by `dom-testing-library`, these are
also re-exported and can be imported via `@angular-extensions/testing-library`.

```typescript
import { getByText, click } from '@angular-extensions/testing-library'
```

[gh]: https://github.com/testing-library/angular-testing-library
