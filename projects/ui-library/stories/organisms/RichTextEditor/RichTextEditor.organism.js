import React, { useState, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ListOrdered } from 'lucide-react'
import { Link, List, Bold, Italic, Underline } from 'react-feather'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

import { withLinks } from './utils'
import { richTextEditorData as cms } from '../../../assets/data'
import { Element, Leaf, LinkButton, MarkButton, BlockButton } from './components'
import { ThemeColor } from './RichTextEditor.theme'

export const emptyRichText = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
]

const RichTextEditor = ({
  className,
  ariaLabel,
  color = 'lilac',
  onChange,
  placeholder,
  initialState = emptyRichText,
  ...props
}) => {
  const [value, setValue] = useState(initialState)
  const renderElement = useCallback(props => <Element color={color} {...props} />, [color])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withLinks(withHistory(withReact(createEditor()))), [])

  useEffect(() => {
    onChange(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div className={classnames('overflow-hidden border-2 rounded-md', ThemeColor[color].border, className)} {...props}>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <div className={classnames('flex items-center px-1 py-1', ThemeColor[color].bg)}>
          <MarkButton aria-label={cms.aria.bold} color={color} format="bold" icon={<Bold size={18} />} />
          <MarkButton aria-label={cms.aria.italic} color={color} format="italic" icon={<Italic size={18} />} />
          <MarkButton aria-label={cms.aria.underline} color={color} format="underline" icon={<Underline size={18} />} />
          <BlockButton
            aria-label={cms.aria.unordered}
            color={color}
            format="unordered-list"
            icon={<List size={18} />}
          />
          <BlockButton
            aria-label={cms.aria.ordered}
            color={color}
            format="ordered-list"
            icon={<ListOrdered size={18} />}
          />
          <LinkButton aria-label={cms.aria.link} color={color} icon={<Link size={18} />} />
        </div>
        <Editable
          className="px-4 py-3 min-h-48"
          aria-label={ariaLabel}
          renderElement={props => renderElement({ ...props, color })}
          renderLeaf={props => renderLeaf({ ...props, color })}
          placeholder={placeholder}
        />
      </Slate>
    </div>
  )
}

RichTextEditor.propTypes = {
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(ThemeColor)),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  initialState: PropTypes.array,
}

export default RichTextEditor
