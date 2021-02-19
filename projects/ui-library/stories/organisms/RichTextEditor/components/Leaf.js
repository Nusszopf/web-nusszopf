/* eslint-disable react/prop-types */
import React from 'react'

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <span className="font-medium">{children}</span>
  }
  if (leaf.italic) {
    children = <i>{children}</i>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}

export default Leaf
