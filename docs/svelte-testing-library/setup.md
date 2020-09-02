---
id: setup
title: Setup
sidebar_label: Setup
---

We recommend using [Jest](https://jestjs.io) but you're free to use the library
with any testing framework and runner you're comfortable with.

## Jest

1.  Install Jest

    ```
    npm install --save-dev jest
    ```

2.  Add the following to your `package.json`

    ```json
    {
      "scripts": {
        "test": "jest src",
        "test:watch": "npm run test -- --watch"
      }
    }
    ```

3.  You'll need to compile the Svelte components before using them in Jest, so
    we need to install
    [svelte-jester](https://github.com/mihar-22/svelte-jester)

    ```
    npm install --save-dev svelte-jester
    ```

4.  Add the following Jest configuration to your `package.json`

    ```json
    {
      "jest": {
        "transform": {
          "^.+\\.svelte$": "svelte-jester"
        },
        "moduleFileExtensions": ["js", "svelte"]
      }
    }
    ```

5.  This is optional but it is recommended, you can install
    [jest-dom](https://github.com/testing-library/jest-dom) to add handy
    assertions to Jest

    5.1 Install jest-dom

    ```
    npm install --save-dev @testing-library/jest-dom
    ```

    5.2 Add the following to your Jest configuration in `package.json`

    ```json
    {
      "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
    }
    ```

6.  Create your component + test file (checkout the rest of the docs to see how)
    and run it

    ```
    npm run test
    ```

## Typescript

To use Typescript, you'll need to install and configure `svelte-preprocess` and
`ts-jest`. For full instructions, see the
[`svelte-jester`](https://github.com/mihar-22/svelte-jester#typescript) docs.

## Babel / Preprocessors

If you'd like to also include [Babel](https://babeljs.io/) or any
[Svelte preprocessors](https://github.com/sveltejs/svelte-preprocess) then
simply follow the instructions over at
[svelte-jester](https://github.com/mihar-22/svelte-jester#babel).
