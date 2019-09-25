---
id: intro
title: Cypress Testing Library
---

[`Cypress Testing Library`][gh] allows the use of dom-testing queries within
[Cypress](https://cypress.io) end-to-end browser tests.

```
npm install --save-dev cypress @testing-library/cypress
```

- [Cypress Testing Library on GitHub][gh]

## Usage

`Cypress Testing Library` extends Cypress's `cy` commands.

Add this line to your project's `cypress/support/commands.js`:

```
import '@testing-library/cypress/add-commands';
```

## With TypeScript

Typings are defined in `@types/testing-library__cypress` at [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/testing-library__cypress),
and should be added as follows in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["cypress", "@types/testing-library__cypress"]
  }
}
```

You can now use all of `DOM Testing Library`'s `getBy`, `getAllBy`, `queryBy`
and `queryAllBy` commands.
[See `DOM Testing Library` API for reference](dom-testing-library/api-queries.md)

## Examples

You can find [all library definitions here](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/testing-library__cypress/index.d.ts).

To show some simple examples (from [https://github.com/testing-library/cypress-testing-library/tree/master/cypress/integration](https://github.com/testing-library/cypress-testing-library/tree/master/cypress/integration)):

```javascript
cy.findAllByText(/^Button Text \d$/)
  .should('have.length', 2)
  .click({ multiple: true })
  .should('contain', 'Button Clicked')
cy.queryByText('Button Text 1')
  .click()
  .should('contain', 'Button Clicked')
cy.queryByText('Non-existing Button Text', { timeout: 100 }).should('not.exist')
cy.queryByLabelText('Label 1')
  .click()
  .type('Hello Input Labelled By Id')
cy.get('#nested').within(() => {
  cy.queryByText('Button Text 2').click()
})
cy.get('#nested').then(subject => {
  cy.queryByText(/^Button Text/, { container: subject }).click()
})
```

`Cypress Testing Library` supports both jQuery elements and DOM nodes. This is
necessary because Cypress uses jQuery elements, while `DOM Testing Library`
expects DOM nodes. When you pass a jQuery element as `container`, it will get
the first DOM node from the collection and use that as the `container` parameter
for the DOM Testing Library functions.

[gh]: https://github.com/testing-library/cypress-testing-library
