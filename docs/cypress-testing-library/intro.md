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

You can now use all of `DOM Testing Library`'s `findBy`, `findAllBy`, `queryBy`
and `queryAllBy` commands off the global `cy` object.
[See the `DOM Testing Library` docs for reference](https://testing-library.com/docs/dom-testing-library/api-queries).

> Note: the `get*` queries are not supported because for reasonable Cypress tests you
> need retryability and `find*` queries already support that. `query*` queries are no longer
> necessary since v5 and will be removed in v6. `find*` fully support built-in Cypress
> assertions (removes the only use-case for `query*`).

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

You can find [all Library definitions here](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/testing-library__cypress/index.d.ts).

## Examples

To show some simple examples (from
[cypress/integration/query.spec.js](https://github.com/testing-library/cypress-testing-library/blob/master/cypress/integration/query.spec.js) or [cypress/integration/find.spec.js](https://github.com/testing-library/cypress-testing-library/blob/master/cypress/integration/find.spec.js)):

```javascript
cy.findAllByText('Jackie Chan').click()
cy.findByText('Button Text').should('exist')
cy.findByText('Non-existing Button Text').should('not.exist')
cy.findByLabelText('Label text', {timeout: 7000}).should('exist')

// findAllByText _inside_ a form element
cy.get('form').findByText('Button Text').should('exist')
cy.get('form').then(subject => {
  cy.findByText('Button Text', {container: subject}).should('exist')
})
```

`Cypress Testing Library` supports both jQuery elements and DOM nodes. This is
necessary because Cypress uses jQuery elements, while `DOM Testing Library`
expects DOM nodes. When you pass a jQuery element as `container`, it will get
the first DOM node from the collection and use that as the `container` parameter
for the `DOM Testing Library` functions.

[gh]: https://github.com/testing-library/cypress-testing-library
