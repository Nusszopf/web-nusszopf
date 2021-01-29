import React from 'react'
import PropTypes from 'prop-types'
import { useSlate } from 'slate-react'
import classnames from 'classnames'

import { toggleMark, isMarkActive } from '../utils'
import { ThemeColor } from '../RichTextEditor.theme'

const MarkButton = ({ format, icon, className, color, ...props }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        'p-2 mx-1 rounded-full tranform transition-color duration-150 ease-out',
        ThemeColor[color].text,
        ThemeColor[color].hover,
        { [`${ThemeColor[color].active}`]: isMarkActive(editor, format) },
        className
      )}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}>
      {React.cloneElement(icon, {
        strokeWidth: 3,
      })}
    </button>
  )
}

MarkButton.propTypes = {
  format: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
}

export default MarkButton
