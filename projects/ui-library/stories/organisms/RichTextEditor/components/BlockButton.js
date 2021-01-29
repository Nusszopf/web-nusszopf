import React from 'react'
import PropTypes from 'prop-types'
import { useSlate } from 'slate-react'
import classnames from 'classnames'

import { toggleBlock, isBlockActive } from '../utils'
import { ThemeColor } from '../RichTextEditor.theme'

const BlockButton = ({ format, icon, className, color, ...props }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        'mx-2 p-2 rounded-full tranform transition-color duration-150 ease-out',
        ThemeColor[color].text,
        ThemeColor[color].hover,
        { [`${ThemeColor[color].active}`]: isBlockActive(editor, format) },
        className
      )}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}>
      {React.cloneElement(icon, {
        strokeWidth: 3,
      })}
    </button>
  )
}

BlockButton.propTypes = {
  format: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
}

export default BlockButton
