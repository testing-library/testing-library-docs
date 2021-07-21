import React from 'react'
import {Remarkable} from 'remarkable'
const md = new Remarkable()

export const MarkdownBlock = ({children}) => {
  const markdown = md.render(children)
  return <div dangerouslySetInnerHTML={{__html: markdown}} />
}
