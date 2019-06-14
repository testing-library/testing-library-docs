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

`Cypress Testing Library` extends Cypress' `cy` command.

Add this line to your project's `cypress/support/commands.js`:

```
import '@testing-library/cypress/add-commands';
```

## With typescript
Typings are defined under @testing-library/cypress/typings, and should be added as follows in tsconfig.json:

```json
{
  "compilerOptions": {
    "types": ["cypress", "../@testing-library/cypress/typings"]
  }
}
```
or if tsconfig.json has a `baseUrl` of `../node_modules` as recommended in the official Cypress documentation use:
```json
{
  "compilerOptions": {
    "types": ["cypress", "@testing-library/cypress/typings"]
  }
}
```

You can now use all of `DOM Testing Library`'s `getBy`, `getAllBy`, `queryBy`
and `queryAllBy` commands.
[See `DOM Testing Library` API for reference](dom-testing-library/api-queries.md)

## Examples
You can find [all Library definitions here](https://github.com/testing-library/cypress-testing-library/blob/master/typings/index.d.ts).


To show some simple examples (from
[https://github.com/testing-library/cypress-testing-library/blob/master/cypress/integration/commands.spec.js](https://github.com/testing-library/cypress-testing-library/blob/master/cypress/integration/commands.spec.js)):

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

`Cypress Testing Library` supports both jQuery elements and DOM nodes. This is
necessary because Cypress uses jQuery elements, while `DOM Testing Library`
expects DOM nodes. When you pass a jQuery element as `container`, it will get
the first DOM node from the collection and use that as the `container` parameter
for the DOM Testing Library functions.

[gh]: https://github.com/testing-library/cypress-testing-library
