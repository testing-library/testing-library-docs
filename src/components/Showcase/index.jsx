import React from 'react'
import {useThemeConfig} from '@docusaurus/theme-common'

export const Showcase = ({users}) => {
  const {isDarkTheme} = useThemeConfig()
  return users.map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img
        src={isDarkTheme ? user.darkImage : user.lightImage}
        alt={user.caption}
        title={user.caption}
      />
    </a>
  ))
}
