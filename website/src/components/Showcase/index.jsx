import React from 'react'
import useThemeContext from '@theme/hooks/useThemeContext'

export const Showcase = ({ users }) => {
  const { isDarkTheme } = useThemeContext()
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
