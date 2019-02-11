---
id: intro
title: Introduction
---

[`bs-dom-testing-library`][gh] contains [BuckleScript][bs] bindings for
`dom-testing-library`.

```
npm install --save-dev bs-dom-testing-library
```

- [bs-dom-testing-library on GitHub][gh]

[gh]: https://github.com/wyze/bs-dom-testing-library

## Setup

After installation, you will need to add it to your `bsconfig.json` file like
so:

```json
{
  "bs-dev-dependencies": ["bs-dom-testing-library"]
}
```

## Other Dependencies

### bs-platform

This is what [BuckleScript][bs] uses to compile the [Reason][re] code to JS. If
it is not in your project you can install it like so:

```
npm install --save-dev bs-platform
```

### bs-jest

This is the recommended test runner and is a wrapper around Jest. All of the
examples here will be using it.

- [bs-jest on GitHub](https://github.com/glennsl/bs-jest)

```
npm install --save-dev @glennsl/bs-jest
```

Then update `bsconfig.json`:

```json
{
  "bs-dev-dependencies": ["@glennsl/bs-jest"]
}
```

[bs]: https://bucklescript.github.io/
[re]: https://reasonml.github.io/
