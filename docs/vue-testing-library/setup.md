---
id: setup
title: Setup
---

`Vue Testing Library` does not require any configuration to be used.

However, there are some things you can do when configuring your testing
framework to reduce some boilerplate. In these docs we'll demonstrate
configuring Jest.

## Global Config

Adding options to your global test config can simplify the setup and teardown of
tests in individual files.

### Cleanup

You can ensure [`cleanup`](./api#cleanup) is called after each test and import
additional assertions by adding it to the setup configuration in Jest.

In Jest 24 and up, add the
[`setupFilesAfterEnv`](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array)
option to your Jest config:

```javascript
// jest.config.js
module.exports = {
  setupFilesAfterEnv: ['@testing-library/vue/cleanup-after-each'],
}
```
