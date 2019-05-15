/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    )

    const ProjectTitle = () => (
      <div>
        <h2 className="projectTitle">{siteConfig.title}</h2>
        <div className="projectTaglineWrapper">
          <p className="projectTagline">{siteConfig.tagline}</p>
        </div>
      </div>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo-large.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('dom-testing-library/intro')}>
              Get Started
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align || 'center'}
          imageAlign={props.imageAlign || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    const FeatureCallout = () => (
      <Container className="" background={'light'} padding={['top', 'bottom']}>
        <div style={{ textAlign: 'center' }}>
          <p>
            <i>
              The more your tests resemble the way your software is used, <br />
              the more confidence they can give you.
            </i>
          </p>
        </div>
      </Container>
    )

    const Problem = () => (
      <React.Fragment>
        <Block background={'light'} align="left">
          {[
            {
              title: '',
              content:
                "## The Problem \n - You want tests for your UI that avoid including implementation details and rather focus on making your tests give you the confidence for which they are intended. \n - You want your tests to be maintainable so refactors _(changes to implementation but not functionality)_ don't break your tests and slow you and your team down.",
              image: `${baseUrl}img/interrobang-128x128.png`,
              imageAlt: 'The problem (picture of a question mark)',
              imageAlign: 'left',
            },
          ]}
        </Block>
      </React.Fragment>
    )

    const Solution = () => [
      <Block background={null} align="left">
        {[
          {
            title: '',
            image: `${baseUrl}img/star-128x128.png`,
            imageAlign: 'right',
            imageAlt: 'The solution (picture of a star)',
            content:
              '## The Solution \n The Testing Library family of libraries is a very light-weight solution for testing without all the implementation details. The main utilities it provides involve querying for nodes similarly to how users would find them. In this way, testing-library helps ensure your tests give you confidence in your UI code.',
          },
        ]}
      </Block>,
      <Block background={'light'} align="left">
        {[
          {
            title: 'Guiding Principle',
            image: `${baseUrl}img/trophy-128x128.png`,
            imageAlign: 'left',
            imageAlt: 'The guiding principle (picture of a brick wall)',
            content:
              '_The more your tests resemble the way your software is used, the more confidence they can give you._',
          },
        ]}
      </Block>,
    ]

    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            content:
              'Tests only break when your app breaks, not implementation details',
            image: `${baseUrl}img/wrench-128x128.png`,
            imageAlign: 'top',
            title: 'Write Maintainable Tests',
          },
          {
            content: 'Interact with your app the same way as your users',
            image: `${baseUrl}img/check-128x128.png`,
            imageAlign: 'top',
            title: 'Develop with Confidence',
          },
          {
            content:
              'Built-in selectors find elements the way users do to help you write inclusive code',
            image: `${baseUrl}img/tada-128x128.png`,
            imageAlign: 'top',
            title: 'Accessible by Default',
          },
        ]}
      </Block>
    )

    const Ecosystem = () => (
      <Block layout="fourColumn" background={null}>
        {[
          {
            image: `${baseUrl}img/react-128x128.png`,
            imageAlign: 'top',
            title:
              '[React Testing Library](./docs/react-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/evergreen-128x128.png`,
            imageAlign: 'top',
            title:
              '[Cypress Testing Library](./docs/cypress-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/testcafe-128x128.jpg`,
            imageAlign: 'top',
            title: `[Testcafe Testing Library](./docs/testcafe-testing-library/intro)`,
          },
          {
            image: `${baseUrl}img/svelte-logo.png`,
            imageAlign: 'top',
            title:
              '[Svelte Testing Library](./docs/svelte-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/vue-400x400.png`,
            imageAlign: 'top',
            title: '[Vue Testing Library](./docs/vue-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/angular-250x250.png`,
            imageAlign: 'top',
            title:
              '[Angular Testing Library](./docs/angular-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/reason-200x200.png`,
            imageAlign: 'top',
            title:
              '[ReasonReact Testing Library](./docs/bs-react-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/puppeteer-275x275.png`,
            imageAlign: 'top',
            title:
              '[Puppeteer Testing Library](./docs/pptr-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/react-native-128x128.png`,
            imageAlign: 'top',
            title:
              '[Native Testing Library](./docs/native-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/construction-128x128.png`,
            imageAlign: 'top',
            title: '[And more...](./docs/ecosystem-user-event)',
          },
        ]}
      </Block>
    )

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ))

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      )
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <Problem />
          <Solution />
          <Showcase />
          <Ecosystem />
        </div>
      </div>
    )
  }
}

module.exports = Index
