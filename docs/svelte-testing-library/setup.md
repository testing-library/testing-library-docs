---
id: setup
title: Setup
sidebar_label: Setup
---

We recommend using [Jest](https://jestjs.io) but you're free to use the library
with any testing framework and runner you're comfortable with.

## Jest

1.  Install Jest and Babel

    ```
    npm install --save-dev jest babel-jest @babel/core @babel/preset-env
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

3.  Add a `.babelrc` with the following

    ```json
    {
      "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
    }
    ```

4.  You'll need to compile the Svelte components before using them in Jest, so
    we need to install
    [jest-transform-svelte](https://github.com/rspieker/jest-transform-svelte)

    ```
    npm install --save-dev jest-transform-svelte
    ```

5.  Add the following Jest configuration to your `package.json`

    ```json
    {
      "jest": {
        "transform": {
          "^.+\\.js$": "babel-jest",
          "^.+\\.svelte$": "jest-transform-svelte"
        },
        "moduleFileExtensions": ["js", "json", "svelte"]
      }
    }
    ```

6.  This is optional but it is recommended, you can install
    [jest-dom](https://github.com/testing-library/jest-dom) to add handy
    assertions to Jest

    6.1 Install jest-dom

    ```
    npm install --save-dev @testing-library/jest-dom
    ```

    6.2 Add the following to your Jest configuration in `package.json`

    ```json
    {
      "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
    }
    ```

7.  Create your component + test file (checkout the rest of the docs to see how)
    and run it

    ```
    npm run test
    ```
