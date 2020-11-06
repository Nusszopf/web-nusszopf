import React, { useState, useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { ListOrdered, Link, List, Bold, Italic, Underline } from 'lucide-react'
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

import { withLinks } from './utils/link'
import { Element, Leaf, LinkButton, MarkButton, BlockButton } from './components'

const RichTextEditor = ({ className, onChange, ...props }) => {
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ])
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withLinks(withHistory(withReact(createEditor()))), [])

  useEffect(() => {
    onChange(value)
  }, [value])

  return (
    <div className={classnames('overflow-hidden border-2 rounded-md border-lilac-800', className)} {...props}>
      <Slate editor={editor} value={value} onChange={value => setValue(value)}>
        <div className="flex items-center px-1 py-1 bg-lilac-500">
          <MarkButton format="bold" icon={<Bold size={18} />} />
          <MarkButton format="italic" icon={<Italic size={16} />} />
          <MarkButton format="underline" icon={<Underline size={18} />} />
          <BlockButton format="unordered-list" icon={<List size={19} />} />
          <BlockButton format="ordered-list" icon={<ListOrdered size={19} />} />
          <LinkButton icon={<Link size={17} />} />
        </div>
        <Editable
          className="px-4 py-3 min-h-48"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Was muss man über das Projekt wissen?"
        />
      </Slate>
    </div>
  )
}

RichTextEditor.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default RichTextEditor