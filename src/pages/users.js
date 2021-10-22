/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {Showcase} from '../components/Showcase'

export default function Users(props) {
  const {siteConfig} = useDocusaurusContext()
  if ((siteConfig.customFields.users || []).length === 0) {
    return null
  }
  const editUrl = `${siteConfig.customFields.docsRepoUrl}/edit/main/docusaurus.config.js`
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
              <Showcase users={siteConfig.customFields.users} />
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
