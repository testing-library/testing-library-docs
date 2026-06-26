import React from 'react'
import {useColorMode} from '@docusaurus/theme-common'

export const Showcase = ({users}) => {
  const {colorMode} = useColorMode()
  const isDarkTheme = colorMode === 'dark'
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
