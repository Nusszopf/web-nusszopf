import React from 'react'
import { Link, LINK_TYPES } from '../../atoms'

export default {
  title: 'Design System/Atoms/Link',
  component: Link,
}

export const Text = () => (
  <Link href="https://nusszopf.org/" title="title" ariaLabel="ariaLabel">
    link
  </Link>
)

export const Button = () => (
  <Link href="https://nusszopf.org/" type={LINK_TYPES.button} title="title" ariaLabel="ariaLabel">
    link
  </Link>
)
