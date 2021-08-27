## testing-library-docs

<!-- prettier-ignore-start -->
[![Open Collective Sponsors and Backers][opencollective-badge]][opencollective]
[![All Contributors][allcontributors-badge]](#contributors)
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

Documentation site for
[React Testing Library](https://github.com/testing-library/react-testing-library),
[DOM Testing Library](https://github.com/testing-library/dom-testing-library),
and [related projects](https://github.com/testing-library)

**https://testing-library.com**

**Build Status**:

[![Netlify Status][netlify-badge]][build]

[netlify-badge]:
  https://api.netlify.com/api/v1/badges/24366204-84ca-41e9-b573-2a64f0845e46/deploy-status
[build]: https://app.netlify.com/sites/testing-library/deploys
[opencollective]: https://opencollective.com/testing-library/
[opencollective-badge]:
  https://img.shields.io/opencollective/all/testing-library.svg?label=opencollective%20backers&style=flat-square
[allcontributors-badge]:
  https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square
[coc-badge]:
  https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]:
  https://github.com/testing-library/react-testing-library/blob/main/CODE_OF_CONDUCT.md

This website was created with [Docusaurus](https://v2.docusaurus.io).

# What's In This Document

- [Get Started in 5 Minutes](#get-started-in-5-minutes)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)

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

Edit blog posts by navigating to `blog` and editing the corresponding post:

`blog/post-to-be-edited.mdx`

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

2. Refer to that doc's ID in an existing sidebar in `sidebar.json`:

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

## Contributors

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars0.githubusercontent.com/u/1500684?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="#maintenance-kentcdodds" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://alexkrolick.com"><img src="https://avatars3.githubusercontent.com/u/1571667?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex Krolick</b></sub></a><br /><a href="#maintenance-alexkrolick" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://sidak.ml"><img src="https://avatars0.githubusercontent.com/u/35738138?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sidak Singh Aulakh</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=co16353sidak" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/bcarroll22"><img src="https://avatars2.githubusercontent.com/u/11020406?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brandon Carroll</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=bcarroll22" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dbismut"><img src="https://avatars2.githubusercontent.com/u/5003380?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dbismut" title="Documentation">📖</a></td>
    <td align="center"><a href="http://ryanwilsonjames.com"><img src="https://avatars2.githubusercontent.com/u/12059539?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan James</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dangerismycat" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/bjohn465"><img src="https://avatars2.githubusercontent.com/u/821397?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brandon Johnson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=bjohn465" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://edcs.me"><img src="https://avatars1.githubusercontent.com/u/754498?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Edward Coleridge Smith</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=edcs" title="Documentation">📖</a></td>
    <td align="center"><a href="https://afontcu.dev"><img src="https://avatars0.githubusercontent.com/u/9197791?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adrià Fontcuberta</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=afontcu" title="Documentation">📖</a> <a href="https://github.com/testing-library/testing-library-docs/pulls?q=is%3Apr+reviewed-by%3Aafontcu" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://timdeschryver.dev"><img src="https://avatars1.githubusercontent.com/u/28659384?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tim Deschryver</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=timdeschryver" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/benmonro"><img src="https://avatars3.githubusercontent.com/u/399236?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ben Monro</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=benmonro" title="Documentation">📖</a></td>
    <td align="center"><a href="http://scottsauber.com"><img src="https://avatars2.githubusercontent.com/u/10823939?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Scott Sauber</b></sub></a><br /><a href="#blog-scottsauber" title="Blogposts">📝</a></td>
    <td align="center"><a href="https://www.yuuniworks.com/"><img src="https://avatars0.githubusercontent.com/u/10986861?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shota Tamura</b></sub></a><br /><a href="#content-junkboy0315" title="Content">🖋</a> <a href="https://github.com/testing-library/testing-library-docs/commits?author=junkboy0315" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/Gpx"><img src="https://avatars0.githubusercontent.com/u/767959?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Giorgio Polvara</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Gpx" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://twitter.com/jasi3k11"><img src="https://avatars3.githubusercontent.com/u/9253631?v=4?s=100" width="100px;" alt=""/><br /><sub><b>michalak111</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=michalak111" title="Documentation">📖</a> <a href="https://github.com/testing-library/testing-library-docs/commits?author=michalak111" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/huyenltnguyen"><img src="https://avatars3.githubusercontent.com/u/25715018?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Huyen Nguyen</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=huyenltnguyen" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.kierenhughes.com"><img src="https://avatars0.githubusercontent.com/u/2124299?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kieren Hughes</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=kierenhughes" title="Documentation">📖</a></td>
    <td align="center"><a href="https://seanmcp.com"><img src="https://avatars1.githubusercontent.com/u/6360367?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sean McPherson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=SeanMcP" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/michaellasky"><img src="https://avatars2.githubusercontent.com/u/6646599?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Lasky</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=michaellasky" title="Documentation">📖</a></td>
    <td align="center"><a href="http://thomlom.dev"><img src="https://avatars3.githubusercontent.com/u/16003285?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Lombart</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=thomlom" title="Documentation">📖</a></td>
    <td align="center"><a href="https://pklong.io"><img src="https://avatars0.githubusercontent.com/u/10551697?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Patrick K Long</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Pklong" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/pedroapfilho"><img src="https://avatars2.githubusercontent.com/u/13142568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pedro Filho</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=pedroapfilho" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/tanguyantoine"><img src="https://avatars3.githubusercontent.com/u/263097?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tanguy Antoine</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=tanguyantoine" title="Documentation">📖</a></td>
    <td align="center"><a href="https://kevinanderson.codes"><img src="https://avatars2.githubusercontent.com/u/22228809?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Anderson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Agentkma" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/dustinmyers"><img src="https://avatars0.githubusercontent.com/u/10288477?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dustin Myers</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dustinmyers" title="Documentation">📖</a></td>
    <td align="center"><a href="http://vojta.io"><img src="https://avatars2.githubusercontent.com/u/25487857?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vojta Holik</b></sub></a><br /><a href="#design-vojtaholik" title="Design">🎨</a></td>
    <td align="center"><a href="http://tech.agilitynerd.com/"><img src="https://avatars3.githubusercontent.com/u/184171?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steve Schwarz</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=saschwarz" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/aayushrajvanshi"><img src="https://avatars0.githubusercontent.com/u/14968551?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aayush Rajvanshi</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=aayushrajvanshi" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://eugielimpin.com"><img src="https://avatars3.githubusercontent.com/u/431442?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eugie Limpin</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=eugiellimpin" title="Documentation">📖</a></td>
    <td align="center"><a href="https://hsiangyu.com"><img src="https://avatars3.githubusercontent.com/u/7204070?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=KevinHu2014" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jennifer-shehane"><img src="https://avatars1.githubusercontent.com/u/1271364?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jennifer Shehane</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jennifer-shehane" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/stevetaggart"><img src="https://avatars3.githubusercontent.com/u/11730266?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steve Taggart</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=stevetaggart" title="Documentation">📖</a></td>
    <td align="center"><a href="http://stephensugden.com"><img src="https://avatars3.githubusercontent.com/u/82634?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stephen Sugden</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=grncdr" title="Documentation">📖</a></td>
    <td align="center"><a href="http://samitier.github.io"><img src="https://avatars2.githubusercontent.com/u/4160121?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Blai Samitier</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Samitier" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/vernonk"><img src="https://avatars1.githubusercontent.com/u/74096?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vernon Kesner</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=vernonk" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/wdoug"><img src="https://avatars3.githubusercontent.com/u/5432102?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Will Douglas</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=wdoug" title="Documentation">📖</a></td>
    <td align="center"><a href="https://velog.io/@head"><img src="https://avatars0.githubusercontent.com/u/40166539?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Head</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=HTMLhead" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mynar7"><img src="https://avatars0.githubusercontent.com/u/32332479?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lee</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=mynar7" title="Documentation">📖</a></td>
    <td align="center"><a href="https://mario.dev"><img src="https://avatars1.githubusercontent.com/u/2677072?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mario Beltrán Alarcón</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Belco90" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jameslevine"><img src="https://avatars0.githubusercontent.com/u/41184245?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jameslevine</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jameslevine" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mihar-22"><img src="https://avatars2.githubusercontent.com/u/14304599?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rahim Alwer</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=mihar-22" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.btorange.com"><img src="https://avatars1.githubusercontent.com/u/1797160?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chenjia</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=ariesjia" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://blog.staz.be"><img src="https://avatars0.githubusercontent.com/u/82500?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Olivier Le Thanh Duong</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=olethanh" title="Documentation">📖</a></td>
    <td align="center"><a href="https://kubajastrz.com"><img src="https://avatars0.githubusercontent.com/u/6443113?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jakub Jastrzębski</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=KubaJastrz" title="Documentation">📖</a></td>
    <td align="center"><a href="http://russianbrandgardeners.com"><img src="https://avatars1.githubusercontent.com/u/640657?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ivan Galiatin</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=trurl-master" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/HendrikRoehm"><img src="https://avatars3.githubusercontent.com/u/26203080?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hendrik Röhm</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=HendrikRoehm" title="Documentation">📖</a></td>
    <td align="center"><a href="https://samvk.com"><img src="https://avatars1.githubusercontent.com/u/12996081?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam Kauffman</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=samvk" title="Documentation">📖</a></td>
    <td align="center"><a href="http://turadg.aleahmad.net/"><img src="https://avatars1.githubusercontent.com/u/21505?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Turadg Aleahmad</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=turadg" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/MarkGeeRomano"><img src="https://avatars1.githubusercontent.com/u/13630752?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mark g romano</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=MarkGeeRomano" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/arturoromeroslc"><img src="https://avatars0.githubusercontent.com/u/7406639?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arturo Romero</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=arturoromeroslc" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.dustinsoftware.com"><img src="https://avatars3.githubusercontent.com/u/942358?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dustin Masters</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dustinsoftware" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.darrenlester.com"><img src="https://avatars2.githubusercontent.com/u/19534488?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Darren Lester</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=darren-lester" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/iswara108"><img src="https://avatars3.githubusercontent.com/u/9681451?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Iswara Chaitanya</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=iswara108" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/pylnata"><img src="https://avatars0.githubusercontent.com/u/33361478?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nataliia Pylypenko</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=pylnata" title="Documentation">📖</a></td>
    <td align="center"><a href="https://huchen.dev"><img src="https://avatars3.githubusercontent.com/u/2078389?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hu Chen</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=huchenme" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jkdowdle"><img src="https://avatars0.githubusercontent.com/u/19804196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jkdowdle" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://numb86.net/"><img src="https://avatars1.githubusercontent.com/u/16703337?v=4?s=100" width="100px;" alt=""/><br /><sub><b>numb86</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=numb86" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/NicholasBoll"><img src="https://avatars2.githubusercontent.com/u/338257?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nicholas Boll</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=NicholasBoll" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Billy-"><img src="https://avatars2.githubusercontent.com/u/4316168?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Billy Matthews</b></sub></a><br /><a href="#talk-Billy-" title="Talks">📢</a> <a href="https://github.com/testing-library/testing-library-docs/commits?author=Billy-" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/dale-french"><img src="https://avatars3.githubusercontent.com/u/6544116?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dale French</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dale-french" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/aw-davidson"><img src="https://avatars2.githubusercontent.com/u/32170938?v=4?s=100" width="100px;" alt=""/><br /><sub><b>aw-davidson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=aw-davidson" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/B_Blackwo"><img src="https://avatars0.githubusercontent.com/u/7598058?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin Blackwood</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=BBlackwo" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/rockingskier"><img src="https://avatars1.githubusercontent.com/u/681614?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ben</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=rockingskier" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/danieljcafonso"><img src="https://avatars3.githubusercontent.com/u/35337607?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Afonso</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=danieljcafonso" title="Documentation">📖</a></td>
    <td align="center"><a href="https://dev.to/nomangul"><img src="https://avatars1.githubusercontent.com/u/39244918?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Noman Gul</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=NomanGul" title="Documentation">📖</a></td>
    <td align="center"><a href="http://rafatech.tk"><img src="https://avatars2.githubusercontent.com/u/20307803?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rafael Souza</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=rafaelangical" title="Documentation">📖</a></td>
    <td align="center"><a href="http://pustovalov.dev"><img src="https://avatars2.githubusercontent.com/u/1568885?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pavel Pustovalov</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=pustovalov" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/dymafr"><img src="https://avatars2.githubusercontent.com/u/32801166?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dyma</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dymafr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/matan_bobi"><img src="https://avatars2.githubusercontent.com/u/12711091?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matan Borenkraout</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=MatanBobi" title="Documentation">📖</a> <a href="https://github.com/testing-library/testing-library-docs/commits?author=MatanBobi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/timrobinson33"><img src="https://avatars0.githubusercontent.com/u/57178390?v=4?s=100" width="100px;" alt=""/><br /><sub><b>timrobinson33</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=timrobinson33" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://manueldugue.de"><img src="https://avatars1.githubusercontent.com/u/894149?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Manuel Dugué</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=mdugue" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/karthik20"><img src="https://avatars2.githubusercontent.com/u/12153250?v=4?s=100" width="100px;" alt=""/><br /><sub><b>karthik20</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=karthik20" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/pobch"><img src="https://avatars3.githubusercontent.com/u/19894957?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pob Ch</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=pobch" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mkermani144"><img src="https://avatars2.githubusercontent.com/u/12621708?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohammad Kermani</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=mkermani144" title="Documentation">📖</a></td>
    <td align="center"><a href="http://twitter.com/adeelibr"><img src="https://avatars0.githubusercontent.com/u/16651811?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adeel Imran</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=adeelibr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://varundey.me"><img src="https://avatars0.githubusercontent.com/u/9202135?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Varun Dey</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=varundey" title="Documentation">📖</a></td>
    <td align="center"><a href="http://pablodinella.com/"><img src="https://avatars1.githubusercontent.com/u/2482730?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pablo R. Dinella</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=PabloDinella" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://jamie.tokyo"><img src="https://avatars0.githubusercontent.com/u/5964236?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jamie</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jamsinclair" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.bitnative.com"><img src="https://avatars2.githubusercontent.com/u/1688997?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cory House</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=coryhouse" title="Documentation">📖</a></td>
    <td align="center"><a href="http://fb.me/yz"><img src="https://avatars3.githubusercontent.com/u/14841421?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jack Zhao</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=bugzpodder" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/rkennel"><img src="https://avatars2.githubusercontent.com/u/28492538?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Kennel</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=rkennel" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/JesuHrz"><img src="https://avatars0.githubusercontent.com/u/28031187?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jesus Hernandez</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=JesuHrz" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/airjp73"><img src="https://avatars2.githubusercontent.com/u/25882770?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aaron Pettengill</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=airjp73" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Izhaki"><img src="https://avatars1.githubusercontent.com/u/880132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Izhaki</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Izhaki" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.robinwieruch.de"><img src="https://avatars0.githubusercontent.com/u/2479967?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robin Wieruch</b></sub></a><br /><a href="#tutorial-rwieruch" title="Tutorials">✅</a></td>
    <td align="center"><a href="https://github.com/Alex-Sokolov"><img src="https://avatars3.githubusercontent.com/u/4497128?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexander Sokolov</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Alex-Sokolov" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/sastan"><img src="https://avatars1.githubusercontent.com/u/514405?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sascha Tandel</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=sastan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://gyuwon.github.io/"><img src="https://avatars3.githubusercontent.com/u/973743?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gyuwon Yi</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=gyuwon" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/boriscoder"><img src="https://avatars2.githubusercontent.com/u/812240?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Boris Serdiuk</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=just-boris" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/balavishnuvj"><img src="https://avatars3.githubusercontent.com/u/13718688?v=4?s=100" width="100px;" alt=""/><br /><sub><b>balavishnuvj</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=balavishnuvj" title="Documentation">📖</a></td>
    <td align="center"><a href="http://jesupaul.com/"><img src="https://avatars1.githubusercontent.com/u/7876997?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sharmila Jesupaul</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=sharmilajesupaul" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/BatuhanW"><img src="https://avatars3.githubusercontent.com/u/16444991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Batuhan Wilhelm</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=BatuhanW" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/deadkff01"><img src="https://avatars2.githubusercontent.com/u/5138179?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dennis Kaffer</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=deadkff01" title="Documentation">📖</a></td>
    <td align="center"><a href="http://camjackson.net"><img src="https://avatars0.githubusercontent.com/u/1930451?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cam Jackson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=camjackson" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.jaredlux.com"><img src="https://avatars0.githubusercontent.com/u/450478?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jared Luxenberg</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jluxenberg" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/yakirn"><img src="https://avatars3.githubusercontent.com/u/6659632?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yakir Narkis</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=yakirn" title="Documentation">📖</a></td>
    <td align="center"><a href="https://rahulbhooteshwar.github.io/"><img src="https://avatars2.githubusercontent.com/u/15920476?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rahul Bhooteshwar</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=rahulbhooteshwar" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/majapw"><img src="https://avatars1.githubusercontent.com/u/1383861?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maja Wichrowska</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=majapw" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://medium.com/@kermani"><img src="https://avatars2.githubusercontent.com/u/7496103?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kermani</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=m98" title="Documentation">📖</a> <a href="https://github.com/testing-library/testing-library-docs/pulls?q=is%3Apr+reviewed-by%3Am98" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://malykhinvi.dev"><img src="https://avatars2.githubusercontent.com/u/5537715?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vasily Malykhin</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=malykhinvi" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/brrianalexis"><img src="https://avatars2.githubusercontent.com/u/51463930?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brian Alexis</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=brrianalexis" title="Documentation">📖</a></td>
    <td align="center"><a href="http://KnowKalpesh.in"><img src="https://avatars2.githubusercontent.com/u/13119410?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kalpesh Singh</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=kalpeshsingh" title="Documentation">📖</a></td>
    <td align="center"><a href="http://gerritalex.de"><img src="https://avatars1.githubusercontent.com/u/29307652?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gerrit Alex</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=ljosberinn" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/winterlamon"><img src="https://avatars0.githubusercontent.com/u/16295605?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Winter LaMon</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=winterlamon" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jpenna"><img src="https://avatars1.githubusercontent.com/u/16005946?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juliano Penna</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jpenna" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.pcoroneos.com"><img src="https://avatars2.githubusercontent.com/u/40515238?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paul Coroneos</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=PaulACoroneos" title="Documentation">📖</a></td>
    <td align="center"><a href="https://solverfox.dev"><img src="https://avatars3.githubusercontent.com/u/12292047?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sebastian Silbermann</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=eps1lon" title="Documentation">📖</a> <a href="https://github.com/testing-library/testing-library-docs/pulls?q=is%3Apr+reviewed-by%3Aeps1lon" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://paulsalaets.com/"><img src="https://avatars0.githubusercontent.com/u/123952?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paul Salaets</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=psalaets" title="Documentation">📖</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=michaeldeboey" title="Documentation">📖</a></td>
    <td align="center"><a href="https://thewashington.dev"><img src="https://avatars3.githubusercontent.com/u/5726140?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Washington Soares</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=washingtonsoares" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jamisuomalainen"><img src="https://avatars2.githubusercontent.com/u/19325270?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jami Suomalainen</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jamisuomalainen" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.oriolpuig.com"><img src="https://avatars3.githubusercontent.com/u/3933098?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Oriol Puig</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=oriolpuig" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://hedgecox.dev/"><img src="https://avatars3.githubusercontent.com/u/41297418?v=4?s=100" width="100px;" alt=""/><br /><sub><b>hedgecox</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=hedgecox" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/shermanhui"><img src="https://avatars2.githubusercontent.com/u/11592023?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sherman Hui</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=shermanhui" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jesujcastillom"><img src="https://avatars3.githubusercontent.com/u/7827281?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jesu Castillo</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jesujcastillom" title="Documentation">📖</a></td>
    <td align="center"><a href="http://gearysite.com/"><img src="https://avatars1.githubusercontent.com/u/1553693?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Core HTML5 Canvas, the book</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=corehtml5canvas" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/johnste"><img src="https://avatars3.githubusercontent.com/u/886051?v=4?s=100" width="100px;" alt=""/><br /><sub><b>John Sterling</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=johnste" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.velusgautam.com"><img src="https://avatars3.githubusercontent.com/u/8556085?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Velu S Gautam</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=velusgautam" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.youtube.com/c/RichardBray"><img src="https://avatars2.githubusercontent.com/u/1377253?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Richard Oliver Bray</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=RichardBray" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/cncolder"><img src="https://avatars3.githubusercontent.com/u/127009?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yanlin Jiang</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=cncolder" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/lidoravitan"><img src="https://avatars0.githubusercontent.com/u/35113398?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lidor Avitan</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=lidoravitan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ITenthusiasm"><img src="https://avatars0.githubusercontent.com/u/47364027?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Isaiah Thomason</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=ITenthusiasm" title="Documentation">📖</a></td>
    <td align="center"><a href="http://barushev.net"><img src="https://avatars3.githubusercontent.com/u/805?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denis Barushev</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=denis" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/domasx2"><img src="https://avatars1.githubusercontent.com/u/847684?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Domas</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=domasx2" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.antn.se"><img src="https://avatars0.githubusercontent.com/u/785676?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anton Niklasson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=AntonNiklasson" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/nick722"><img src="https://avatars3.githubusercontent.com/u/31370625?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nikolai Yakuschenko</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=nick722" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/vier31"><img src="https://avatars1.githubusercontent.com/u/34372068?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Schröder</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=vier31" title="Documentation">📖</a></td>
    <td align="center"><a href="https://nickmccurdy.com/"><img src="https://avatars0.githubusercontent.com/u/927220?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nick McCurdy</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=nickmccurdy" title="Documentation">📖</a> <a href="https://github.com/testing-library/testing-library-docs/pulls?q=is%3Apr+reviewed-by%3Anickmccurdy" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/testing-library/testing-library-docs/commits?author=nickmccurdy" title="Code">💻</a></td>
    <td align="center"><a href="http://sudhanshu-ranjan.tech"><img src="https://avatars2.githubusercontent.com/u/22864071?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sudhanshu</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=tsuki42" title="Documentation">📖</a></td>
    <td align="center"><a href="http://newrope.biz"><img src="https://avatars0.githubusercontent.com/u/58922379?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aleksandr Chernov</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=aleks-rope" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/mathiassoeholm"><img src="https://avatars0.githubusercontent.com/u/1747242?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mathias</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=mathiassoeholm" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/davidseow"><img src="https://avatars1.githubusercontent.com/u/502503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>davidseow</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=davidseow" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/tonyhallett"><img src="https://avatars2.githubusercontent.com/u/11292998?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tony Hallett</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=tonyhallett" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/prsdta"><img src="https://avatars3.githubusercontent.com/u/19373361?v=4?s=100" width="100px;" alt=""/><br /><sub><b>prsdta</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=prsdta" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/tal-joffe"><img src="https://avatars0.githubusercontent.com/u/7221753?v=4?s=100" width="100px;" alt=""/><br /><sub><b>tal-joffe</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=tal-joffe" title="Documentation">📖</a></td>
    <td align="center"><a href="http://mayankjethva.xyz"><img src="https://avatars.githubusercontent.com/u/1103708?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mayank Jethva</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=mayank23" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/EladIsraeli"><img src="https://avatars.githubusercontent.com/u/13487086?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Elad Israeli</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=EladIsraeli" title="Documentation">📖</a></td>
    <td align="center"><a href="https://francischartrand.com"><img src="https://avatars.githubusercontent.com/u/1503758?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francis Chartrand</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=chartrandf" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/prestoncarman"><img src="https://avatars.githubusercontent.com/u/3517157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Preston Carman</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=prestoncarman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/olivierwilkinson"><img src="https://avatars.githubusercontent.com/u/15321261?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Olivier Wilkinson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=olivierwilkinson" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/amitmiran137"><img src="https://avatars.githubusercontent.com/u/47772523?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Amit Miran</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=amitmiran137" title="Documentation">📖</a></td>
    <td align="center"><a href="https://graficos.net"><img src="https://avatars.githubusercontent.com/u/6775220?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paul Melero</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=gangsthub" title="Documentation">📖</a></td>
    <td align="center"><a href="https://modo.sc"><img src="https://avatars.githubusercontent.com/u/2231664?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jonathan schatz</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=modosc" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/rickysullivan"><img src="https://avatars.githubusercontent.com/u/437480?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ricky Sullivan Himself</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=rickysullivan" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/wuarmin"><img src="https://avatars.githubusercontent.com/u/9987680?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Armin</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=wuarmin" title="Documentation">📖</a></td>
    <td align="center"><a href="http://linktr.ee/dalebaldwin"><img src="https://avatars.githubusercontent.com/u/403546?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dale Baldwin</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dalebaldwin" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/adrisolid/"><img src="https://avatars.githubusercontent.com/u/25487037?v=4?s=100" width="100px;" alt=""/><br /><sub><b>AdriSolid</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=AdriSolid" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://naruth.dev"><img src="https://avatars.githubusercontent.com/u/9120451?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Naruth Kongurai</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=naruthk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ErfanMirzapour"><img src="https://avatars.githubusercontent.com/u/52346515?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Erfan Mirzapour</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=ErfanMirzapour" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/shemExelate"><img src="https://avatars.githubusercontent.com/u/46557021?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shem Mahluf</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=shemExelate" title="Code">💻</a> <a href="#infra-shemExelate" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/testing-library/testing-library-docs/commits?author=shemExelate" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/scoobster17"><img src="https://avatars.githubusercontent.com/u/12157029?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Phil Gibbins</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=scoobster17" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Liadshiran"><img src="https://avatars.githubusercontent.com/u/18011106?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Liad Shiran</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=Liadshiran" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/EduardoSimon"><img src="https://avatars.githubusercontent.com/u/19764148?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eduardo Simón Picón</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=EduardoSimon" title="Documentation">📖</a></td>
    <td align="center"><a href="https://thesanjeevsharma.now.sh"><img src="https://avatars.githubusercontent.com/u/29539278?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sanjeev Sharma</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=thesanjeevsharma" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/drorheller"><img src="https://avatars.githubusercontent.com/u/12750737?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dror-heller</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=drorheller" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/yialo"><img src="https://avatars.githubusercontent.com/u/38593881?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aleksei Arro</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=yialo" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/carlobeltrame"><img src="https://avatars.githubusercontent.com/u/7566995?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Carlo Beltrame</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=carlobeltrame" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ggorlen"><img src="https://avatars.githubusercontent.com/u/17895165?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ggorlen</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=ggorlen" title="Documentation">📖</a></td>
    <td align="center"><a href="https://blog.scottlogic.com/mstobbs/"><img src="https://avatars.githubusercontent.com/u/15341757?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mattstobbs</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=mattstobbs" title="Documentation">📖</a></td>
    <td align="center"><a href="https://vxxce.github.io"><img src="https://avatars.githubusercontent.com/u/38638365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zach</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=vxxce" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/anpaopao"><img src="https://avatars.githubusercontent.com/u/44686792?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Angus J. Pope</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=anpaopao" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://twitter.com/dylan_piercey"><img src="https://avatars.githubusercontent.com/u/4985201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dylan Piercey</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=DylanPiercey" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ruhollahh"><img src="https://avatars.githubusercontent.com/u/53814636?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ruhollah</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=ruhollahh" title="Documentation">📖</a></td>
    <td align="center"><a href="https://votemike.co.uk"><img src="https://avatars.githubusercontent.com/u/3957065?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Gwynne</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=votemike" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/thetric"><img src="https://avatars.githubusercontent.com/u/19861998?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dominik Broj</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=thetric" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/stephenwade"><img src="https://avatars.githubusercontent.com/u/4148577?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stephen Wade</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=stephenwade" title="Documentation">📖</a></td>
    <td align="center"><a href="https://luizbaldi.com"><img src="https://avatars.githubusercontent.com/u/17226904?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luiz Baldi</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=luizbaldi" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.ravinggenius.com/"><img src="https://avatars.githubusercontent.com/u/21517?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Ingram</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=ravinggenius" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://blacksheepcode.com"><img src="https://avatars.githubusercontent.com/u/2467377?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Johnston</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=dwjohnston" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fildon.me"><img src="https://avatars.githubusercontent.com/u/10462288?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rupert McKay</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=fildon" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.sebastianmaciel.com"><img src="https://avatars.githubusercontent.com/u/4841148?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sebastián Maciel</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=SebastianMaciel" title="Documentation">📖</a></td>
    <td align="center"><a href="http://sidharth.dev"><img src="https://avatars.githubusercontent.com/u/10703445?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sidharth Vinod</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=sidharthv96" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/jankalfus"><img src="https://avatars.githubusercontent.com/u/12714276?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Honza Kalfus</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=jankalfus" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/claidler"><img src="https://avatars.githubusercontent.com/u/43636691?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christopher Laidler</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=claidler" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/savcni01"><img src="https://avatars.githubusercontent.com/u/18025894?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nik Savchenko</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=savcni01" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://stevenfrieson.com"><img src="https://avatars.githubusercontent.com/u/15187179?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steven Frieson</b></sub></a><br /><a href="https://github.com/testing-library/testing-library-docs/commits?author=sfrieson" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
