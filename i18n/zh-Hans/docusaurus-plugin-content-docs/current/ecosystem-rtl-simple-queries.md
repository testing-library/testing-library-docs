---
id: ecosystem-rtl-simple-queries
title: rtl-simple-queries
---

[`rtl-simple-queries`][gh] 是 `React Testing Library` 的一个配套库，它提供了一个替代的查询API。

```bash npm2yarn
npm install --save-dev rtl-simple-queries
```

```jsx
import {screen} from 'rtl-simple-queries'

screen.fetchByText(/text/, {allowEmpty: true, allowMultiple: false})
screen.fetchByText(/text/, {allowMultiple: false})
screen.fetchByText(/text/)

// async
await screen.fetchByTextAsync(/text/, {allowMultiple: true})
```

- [rtl-simple-queries on GitHub][gh]

[gh]: https://github.com/balavishnuvj/rtl-simple-queries
