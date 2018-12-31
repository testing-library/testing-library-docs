---
id: version-5.4.2-guiding-principles
title: Guiding Principles
sidebar_label: Guiding Principles
original_id: guiding-principles
---

> [The more your tests resemble the way your software is used, the more
> confidence they can give you.][guiding-principle]

We try to only expose methods and utilities that encourage you to write tests
that closely resemble how your react components are used.

Utilities are included in this project based on the following guiding
principles:

1.  If it relates to rendering components, it deals with DOM nodes rather than
    component instances, nor should it encourage dealing with component
    instances.
2.  It should be generally useful for testing individual React components or
    full React applications. While this library is focused on `react-dom`,
    utilities could be included even if they don't directly relate to
    `react-dom`.
3.  Utility implementations and APIs should be simple and flexible.

At the end of the day, what we want is for this library to be pretty
light-weight, simple, and understandable.

<!--
Links:
-->

<!-- prettier-ignore-start -->

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/react-testing-library.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/react-testing-library
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/react-testing-library.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/react-testing-library
[version-badge]: https://img.shields.io/npm/v/react-testing-library.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-testing-library
[downloads-badge]: https://img.shields.io/npm/dm/react-testing-library.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-testing-library
[spectrum-badge]: https://withspectrum.github.io/badge/badge.svg
[spectrum]: https://spectrum.chat/react-testing-library
[license-badge]: https://img.shields.io/npm/l/react-testing-library.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-testing-library/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-testing-library/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/react-testing-library.svg?style=social
[github-watch]: https://github.com/kentcdodds/react-testing-library/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/react-testing-library.svg?style=social
[github-star]: https://github.com/kentcdodds/react-testing-library/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-testing-library%20by%20%40kentcdodds%20https%3A%2F%2Fgithub.com%2Fkentcdodds%2Freact-testing-library%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/react-testing-library.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[set-immediate]: https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
[guiding-principle]: https://twitter.com/kentcdodds/status/977018512689455106
[data-testid-blog-post]: https://blog.kentcdodds.com/making-your-ui-tests-resilient-to-change-d37a6ee37269
[dom-testing-lib-textmatch]: https://github.com/kentcdodds/dom-testing-library#textmatch
[bugs]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc
[requests]: https://github.com/kentcdodds/react-testing-library/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen
[good-first-issue]: https://github.com/kentcdodds/react-testing-library/issues?utf8=✓&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3A"good+first+issue"+
[reactiflux]: https://www.reactiflux.com/
[stackoverflow]: https://stackoverflow.com/questions/tagged/react-testing-library

<!-- prettier-ignore-end -->
