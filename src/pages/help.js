/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {GridBlock} from '../components/GridBlock'

const ExternalLink = props => (
  <a target="_blank" rel="noreferrer noopener" {...props} />
)
const Link = props => <a {...props} />

export default function Help(props) {
  const {language = ''} = props
  const {siteConfig} = useDocusaurusContext()
  const {baseUrl, docsUrl} = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const supportLinks = [
    {
      content: `Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/react-testing-library)`,
      title: 'Stack Overflow',
    },
    {
      content:
        'Discuss issues with community members on [Spectrum](https://spectrum.chat/testing-library)',
      title: 'Spectrum',
    },
    {
      content: `Chat on [Discord](https://discord.gg/testing-library)`,
      title: 'Discord',
    },
    {
      content: `Stay up to date by following the [blog](${props.config.baseUrl}blog)`,
      title: 'Blog',
    },
    {
      content: `Browse [Learning Material](/docs/learning)`,
      title: 'Resources',
    },
    {
      content: `Get support on [GitHub](${siteConfig.customFields.repoUrl})`,
      title: 'GitHub',
    },
  ]

  return (
    <Layout
      permalink="/help"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="wrapper">
        <div className="mainContainer documentContainer postContainer helpContainer">
          <div>
            <header>
              <h1 className="help-heading-1">Need help?</h1>
            </header>
            <GridBlock
              contents={supportLinks.slice(0, 3)}
              layout="threeColumn"
              align="left"
            />
            <GridBlock
              contents={supportLinks.slice(3)}
              layout="threeColumn"
              align="left"
            />
            <section>
              <h2 className="help-heading-2">Buy a course</h2>
              <p>
                Learn how to test JavaScript with{' '}
                <ExternalLink href="https://kentcdodds.com">
                  Kent C. Dodds
                </ExternalLink>
                , the creator of Testing Library, on{' '}
                <ExternalLink href="https://testingjavascript.com">
                  TestingJavaScript.com
                </ExternalLink>
              </p>
              <div>
                <ExternalLink href="https://testingjavascript.com">
                  <img
                    width="500"
                    alt="TestingJavaScript.com Learn the smart, efficient way to test any JavaScript application."
                    src={`${baseUrl}img/testingjavascript.jpg`}
                  />
                </ExternalLink>
              </div>
            </section>
            <header className="postHeader">
              <h2 className="help-heading-2">Want to help?</h2>
            </header>
            <p>
              Thanks! The Testing Library maintainers are happy to maintain this
              library along with you, the community. We aren't looking for
              funding, but we need everyone to pitch in to make this project and
              community successful and improve tests for everyone in the long
              run.
            </p>
            <p>
              Please consider helping us answer community questions and update
              documentation content via the help links above. You can also help
              support{' '}
              <ExternalLink href="https://kentcdodds.com">
                Kent C. Dodds
              </ExternalLink>{' '}
              financially by purchasing his{' '}
              <ExternalLink href="https://kentcdodds.com/courses">
                courses
              </ExternalLink>{' '}
              or{' '}
              <ExternalLink href="https://kentcdodds.com/workshops/">
                remote workshops
              </ExternalLink>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
