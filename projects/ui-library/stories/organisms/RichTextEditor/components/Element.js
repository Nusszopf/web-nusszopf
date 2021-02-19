/* eslint-disable react/prop-types */
import React from 'react'
import { Text, Link } from '../../../atoms'

const Element = ({ attributes, children, color, element }) => {
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

export default Element
