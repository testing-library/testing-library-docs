---
id: intro
title: Cypress Testing Library
---

[`cypress-testing-library`][gh] allows the use of dom-testing queries within
[Cypress](https://cypress.io) end-to-end browser tests.

```
npm install --save-dev cypress cypress-testing-library
```

- [cypress-testing-library on GitHub][gh]

## Usage

`cypress-testing-library` extends Cypress' `cy` command.

Add this line to your project's `cypress/support/commands.js`:

```
import 'cypress-testing-library/add-commands';
```

You can now use all of `dom-testing-library`'s `getBy`, `getAllBy`, `queryBy`
and `queryAllBy` commands.
[See `dom-testing-library` repo for reference](https://github.com/kentcdodds/dom-testing-library#usage)

## Examples

To show some simple examples (from
[https://github.com/kentcdodds/cypress-testing-library/blob/master/cypress/integration/commands.spec.js](cypress/integration/commands.spec.js)):

```javascript
cy.getAllByText('Jackie Chan').click()
cy.queryByText('Button Text').should('exist')
cy.queryByText('Non-existing Button Text').should('not.exist')
cy.queryByLabelText('Label text', { timeout: 7000 }).should('exist')
cy.get('form').within(() => {
  cy.getByText('Button Text').should('exist')
})
cy.get('form').then(subject => {
  cy.getByText('Button Text', { container: subject }).should('exist')
})
```

`cypress-testing-library` supports both jQuery elements and DOM nodes. This is
necessary because Cypress uses jQuery elements, while `dom-testing-library`
expects DOM nodes. When you pass a jQuery element as `container`, it will get
the first DOM node from the collection and use that as the `container` parameter
for the `dom-testing-library` functions.

[gh]: https://github.com/kentcdodds/cypress-testing-library
