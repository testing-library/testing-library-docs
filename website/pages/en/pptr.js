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
        <h2 className="projectTitle">Puppeteer Testing Library</h2>
        <div className="projectTaglineWrapper">
          <p className="projectTagline">
            Simple and complete Puppeteer DOM testing utilities that encourage
            good testing practices
          </p>
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
        <Logo img_src={`${baseUrl}img/puppeteer-275x275.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('pptr-testing-library/intro')}>
              Read the Docs
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
          <MarkdownBlock>
            `npm install --save-dev pptr-testing-library`
          </MarkdownBlock>
        </div>
      </Container>
    )

    const Features = () => (
      <React.Fragment>
        <Block layout="threeColumn">
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
                'Built-in selectors use semantic HTML and ARIA roles to help you write inclusive code',
              image: `${baseUrl}img/tada-128x128.png`,
              imageAlign: 'top',
              title: 'Accessible by Default',
            },
          ]}
        </Block>
      </React.Fragment>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
        </div>
      </div>
    )
  }
}

module.exports = Index
