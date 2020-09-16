/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useThemeContext from '@theme/hooks/useThemeContext'

export default function Users(props) {
  const { siteConfig } = useDocusaurusContext()
  if ((siteConfig.customFields.users || []).length === 0) {
    return null
  }
  const editUrl = `${siteConfig.customFields.docsRepoUrl}/edit/master/website/docusaurus.config.js`
  return (
    <Layout
      permalink="/users"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="mainContainer">
        <div>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is Using This?</h1>
              <p>This project is used by many folks</p>
            </div>
            <div className="logos">
              <Showcase />
            </div>
            <p>Are you using this project?</p>
            <a
              href={editUrl}
              className="button button--primary button--outline"
            >
              Add your company
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const Showcase = () => {
  const { isDarkTheme } = useThemeContext()
  const { siteConfig } = useDocusaurusContext()
  return siteConfig.customFields.users.map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img
        src={isDarkTheme ? user.darkImage : user.lightImage}
        alt={user.caption}
        title={user.caption}
      />
    </a>
  ))
}
