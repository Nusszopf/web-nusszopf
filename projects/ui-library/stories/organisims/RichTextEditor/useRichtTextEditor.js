import React from 'react'
import escapeHtml from 'escape-html'
import { Text as SText } from 'slate'
import classnames from 'classnames'
import { Text, Link } from '../../atoms'

// todo color variants...

const useRichtTextEditor = () => {
  const parseUrl = _url => {
    const url = `https://${_url.split('//').pop()}`
    return escapeHtml(url)
  }

  const serialize = node => {
    if (SText.isText(node)) {
      return (
        <span
          className={classnames({
            'font-semibold': node.bold,
            italic: node.italic,
            underline: node.underline,
            'block my-2': node.text === '',
          })}>
          {node.text}
        </span>
      )
    }

    const children = node.children.map(n => serialize(n))

    switch (node.type) {
      case 'unordered-list':
        return <ul className="ml-8 list-disc">{children}</ul>
      case 'list-item':
        return <li>{children}</li>
      case 'ordered-list':
        return <ol className="ml-8 list-decimal">{children}</ol>
      case 'link':
        return (
          <Link textVariant="textSm" href={parseUrl(node.url)} title={node.url} ariaLabel={node.url}>
            {children}
          </Link>
        )
      case 'paragraph':
        return <Text variant="textSm">{children}</Text>
      default:
        return children
    }
  }
  return { serialize }
}

export default useRichtTextEditor
