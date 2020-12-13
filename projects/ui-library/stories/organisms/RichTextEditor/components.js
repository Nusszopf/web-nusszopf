/* eslint-disable react/prop-types */
import React from 'react'
import { useSlate } from 'slate-react'
import classnames from 'classnames'

import { Text, Link } from '../../atoms'
import { toggleMark, isMarkActive } from './utils/mark'
import { toggleBlock, isBlockActive } from './utils/block'
import { insertLink, isLinkActive } from './utils/link'
import { ThemeColor } from './RichTextEditor.theme'

export const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <span className="font-medium">{children}</span>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}

export const Element = ({ attributes, children, color, element }) => {
  switch (element.type) {
    case 'unordered-list':
      return (
        <ul className="ml-8 text-lg list-disc" {...attributes}>
          {children}
        </ul>
      )
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'ordered-list':
      return (
        <ol className="ml-8 text-lg list-decimal" {...attributes}>
          {children}
        </ol>
      )
    case 'link':
      return (
        <Link
          textVariant="textSm"
          color={color}
          href={element.url}
          {...attributes}
          title={element.url}
          ariaLabel={element.url}>
          {children}
        </Link>
      )
    default:
      return (
        <p {...attributes}>
          <Text as="span" variant="textSm">
            {children}
          </Text>
        </p>
      )
  }
}

export const BlockButton = ({ format, icon, className, color, ...props }) => {
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

export const MarkButton = ({ format, icon, className, color, ...props }) => {
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

export const LinkButton = ({ icon, className, color, ...props }) => {
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
