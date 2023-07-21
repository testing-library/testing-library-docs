/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Translate, {translate} from '@docusaurus/Translate'
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
      content: translate({
        id: 'pages.help.stackOverflow',
        message: `Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/react-testing-library)`,
      }),
      title: 'Stack Overflow',
    },
    {
      content: translate({
        id: 'pages.help.spectrum',
        message:
          'Discuss issues with community members on [Spectrum](https://spectrum.chat/testing-library)',
      }),
      title: 'Spectrum',
    },
    {
      content: translate({
        id: 'pages.help.discord',
        message: `Chat on [Discord](https://discord.gg/testing-library)`,
      }),
      title: 'Discord',
    },
    {
      content: translate(
        {
          id: 'pages.help.blog',
          message: 'Stay up to date by following the [blog]({baseUrl}blog)',
        },
        {
          baseUrl: `${props.config.baseUrl}`,
        },
      ),
      title: 'Blog',
    },
    {
      content: translate({
        id: 'pages.help.resources',
        message: `Browse [Learning Material](/docs/learning)`,
      }),
      title: 'Resources',
    },
    {
      content: translate(
        {
          id: 'pages.help.github',
          message: `Get support on [GitHub]({repoUrl})`,
        },
        {
          repoUrl: `${siteConfig.customFields.repoUrl}`,
        },
      ),
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
              <h1>
                <Translate id="pages.help.Need help">Need help?</Translate>
              </h1>
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
              <h2>
                <Translate id="pages.help.Buy a Course">Buy a Course</Translate>
              </h2>
              <p>
                <Translate
                  id="pages.help.Buy a Course.content"
                  values={{
                    kentcdodds: (
                      <ExternalLink href="https://kentcdodds.com">
                        Kent C. Dodds
                      </ExternalLink>
                    ),
                    testingjavascript: (
                      <ExternalLink href="https://testingjavascript.com">
                        TestingJavaScript.com
                      </ExternalLink>
                    ),
                  }}
                >
                  {
                    'Learn how to test JavaScript with {kentcdodds}, the creator of Testing Library, on {testingjavascript}'
                  }
                </Translate>
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
              <h1>
                <Translate id="pages.help.Want to help">
                  Want to help?
                </Translate>
              </h1>
            </header>
            <p>
              <Translate id="pages.help.Help maintain">
                Thanks! The Testing Library maintainers are happy to maintain
                this library along with you, the community. We aren't looking
                for funding, but we need everyone to pitch in to make this
                project and community successful and improve tests for everyone
                in the long run.
              </Translate>
            </p>
            <p>
              <Translate
                id="pages.help.Help answer question"
                values={{
                  kentcdodds: (
                    <ExternalLink href="https://kentcdodds.com">
                      Kent C. Dodds
                    </ExternalLink>
                  ),
                  courses: (
                    <ExternalLink href="https://kentcdodds.com/courses">
                      <Translate id="pages.help.courses">courses</Translate>
                    </ExternalLink>
                  ),
                  workshops: (
                    <ExternalLink href="https://kentcdodds.com/workshops/">
                      <Translate id="pages.help.remote workshops">
                        remote workshops
                      </Translate>
                    </ExternalLink>
                  ),
                }}
              >
                {
                  'Please consider helping us answer community questions and update documentation content via the help links above. You can also help support {kentcdodds} financially by purchasing his {courses} or {workshops}'
                }
              </Translate>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
