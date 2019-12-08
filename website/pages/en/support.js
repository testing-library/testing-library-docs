const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const ExternalLink = props => (
  <a target="_blank" rel="noreferrer noopener" {...props} />
)
const Link = props => <a {...props} />

function Support(props) {
  const { config: siteConfig, language = '' } = props
  const { baseUrl, docsUrl } = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const supportLinks = [
    {
      content: `Answer a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/react-testing-library)`,
      title: 'Stack Overflow',
    },
    {
      content:
        'Discuss issues with community members on [Spectrum](https://spectrum.chat/testing-library)',
      title: 'Spectrum',
    },
    {
      content: `Chat on [Discord](https://www.reactiflux.com/)`,
      title: 'Discord',
    },
    {
      content: `Write your own blog posts and tutorials and add them to the [learning material](${props.config.baseUrl}docs/learning) page`,
      title: 'Blog',
    },
    {
      content: `Contribute to [the project recipes](${props.config.baseUrl}docs/recipes)`,
      title: 'Recipes',
    },
    {
      content: `Watch the [GitHub repo](${props.config.repoUrl}) and respond to issues and PRs`,
      title: 'GitHub',
    },
  ]

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer helpContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Want to help?</h1>
          </header>
          <p>
            Thanks! The Testing Library maintainers are happy to maintain this
            library along with you, the community. We aren't looking for
            funding, but we need everyone to pitch in to make this project and
            community successful and improve tests for everyone in the long run.
            With that in mind, here are a few ways you can help support this
            effort.
          </p>
          <GridBlock
            contents={supportLinks}
            layout="threeColumn"
            align="left"
          />
          <section>
            <h2 align="center">Buy a Course</h2>
            <p align="center">
              <ExternalLink href="https://kentcdodds.com">
                Kent C. Dodds
              </ExternalLink>
              , the creator of Testing Library, was able to create and maintain
              Testing Library packages thanks to license purchases of his
              TestingJavaScript.com course.
            </p>
            <p align="center">
              You can support Kent buy purchasing a license to{' '}
              <ExternalLink href="https://testingjavascript.com">
                TestingJavaScript.com
              </ExternalLink>
            </p>
            <div align="center">
              <ExternalLink href="https://testingjavascript.com">
                <img
                  width="500"
                  alt="TestingJavaScript.com Learn the smart, efficient way to test any JavaScript application."
                  src={`${baseUrl}img/testingjavascript.jpg`}
                />
              </ExternalLink>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}

module.exports = Support
