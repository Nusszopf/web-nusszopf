/* eslint-disable react/prop-types */
import React from 'react'
import { useSlate } from 'slate-react'
import classnames from 'classnames'

import { Text, Link } from '../../atoms'
import { toggleMark, isMarkActive } from './utils/mark'
import { toggleBlock, isBlockActive } from './utils/block'
import { insertLink, isLinkActive } from './utils/link'

export const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}

export const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'unordered-list':
      return (
        <ul className="ml-8 list-disc" {...attributes}>
          {children}
        </ul>
      )
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'ordered-list':
      return (
        <ol className="ml-8 list-decimal" {...attributes}>
          {children}
        </ol>
      )
    case 'link':
      return (
        <Link textVariant="textXs" href={element.url} {...attributes} title={element.url} ariaLabel={element.url}>
          {children}
        </Link>
      )
    default:
      return (
        <p {...attributes}>
          <Text as="span" variant="textXs">
            {children}
          </Text>
        </p>
      )
  }
}

export const BlockButton = ({ format, icon, className, ...props }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        'text-lilac-800 mx-2 p-2 rounded-full tranform transition-color duration-150 ease-out hover:bg-lilac-300',
        { 'bg-lilac-300': isBlockActive(editor, format) },
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

export const MarkButton = ({ format, icon, className, ...props }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        'text-lilac-800 p-2 mx-1 rounded-full tranform transition-color duration-150 ease-out hover:bg-lilac-300',
        { 'bg-lilac-300': isMarkActive(editor, format) },
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

export const LinkButton = ({ icon, className, ...props }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      {...props}
      className={classnames(
        'text-lilac-800 mx-2 p-2 rounded-full tranform transition-color duration-150 ease-out hover:bg-lilac-300',
        { 'bg-lilac-300': isLinkActive(editor) },
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
