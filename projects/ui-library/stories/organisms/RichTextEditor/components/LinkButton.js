import React from 'react'
import PropTypes from 'prop-types'
import { useSlate } from 'slate-react'
import classnames from 'classnames'

import { insertLink, isLinkActive } from '../utils'
import { ThemeColor } from '../RichTextEditor.theme'

const LinkButton = ({ icon, className, color, ...props }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        'mx-2 p-2 rounded-full tranform transition-color duration-150 ease-out',
        ThemeColor[color].text,
        ThemeColor[color].hover,
        { [`${ThemeColor[color].active}`]: isLinkActive(editor) },
        className
      )}
      onMouseDown={event => {
        event.preventDefault()
        const url = window.prompt('Gib die URL des Links ein.')
        if (!url) return
        insertLink(editor, url)
      }}>
      {React.cloneElement(icon, {
        strokeWidth: 3,
      })}
    </button>
  )
}

LinkButton.propTypes = {
  format: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
}

export default LinkButton
