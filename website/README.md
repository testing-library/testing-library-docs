# Testing Library Docs

## Contributing

This website was created with [Docusaurus](https://v2.docusaurus.io).

# What's In This Document

- [Get Started in 5 Minutes](#get-started-in-5-minutes)
- [Directory Structure](#directory-structure)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)
- [Full Documentation](#full-documentation)

# Get Started in 5 Minutes

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ npm install
```

2. Run your dev server:

```sh
# Start the site
$ npm start
```

## Directory Structure

Your project file structure should look something like this

```
my-docusaurus/
  docs/
    doc-1.md
    doc-2.md
    doc-3.md
  website/
    blog/
      2016-3-11-oldest-post.md
      2017-10-24-newest-post.md
    src/
      components/
      css/
      pages/
    node_modules/
    static/
      css/
      img/
    package.json
    sidebars.json
    docusaurus.config.js
```

# Editing Content

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.mdx`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://v2.docusaurus.io/docs)

## Editing an existing blog post

Edit blog posts by navigating to `website/blog` and editing the corresponding
post:

`website/blog/post-to-be-edited.mdx`

```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, click
[here](https://v2.docusaurus.io/docs/blog)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.mdx`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

Note: Ensure the file name and the id value do not include non-url safe
characters i.e. '\*'.

2. Refer to that doc's ID in an existing sidebar in `website/sidebar.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click
[here](https://v2.docusaurus.io/docs/)

## Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the
   `themeConfig.navbar.items` field of `website/docusaurus.config.js`:

`website/docusaurus.config.js`

```javascript
themeConfig: {
    navbar: {
      title: 'Testing Library',
      logo: {
        src: 'img/octopus-64x64.png',
      },
      items: [
        {
          to: 'docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/recipes',
          label: 'Recipes',
          position: 'left',
        },
        {
          to: '/help',
          label: 'Help',
          position: 'left',
        },
      ],
    }
```

## Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as
   .js files in `website/src/pages`:
2. If you want your page to show up in your navigation header, you will need to
   update `website/docusaurus.config.js` and add it to the `items` under
   `themeConfig.navbar.items`:

`website/docusaurus.config.js`

```javascript
themeConfig: {
    navbar: {
      title: 'Testing Library',
      logo: {
        src: 'img/octopus-64x64.png',
      },
      items: [
        {
          to: 'docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/recipes',
          label: 'Recipes',
          position: 'left',
        },
        {
          to: '/help',
          label: 'Help',
          position: 'left',
        },
      ],
    }
```

For more information about custom pages, click
[here](https://v2.docusaurus.io/docs/creating-pages).

# Full Documentation

Full documentation can be found on the [website](https://v2.docusaurus.io).
