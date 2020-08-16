import React from 'react'
import { Link, LINK_TYPES } from '../atoms'

export default {
  title: 'Design System/Atoms/Link',
  component: Link,
}

export const Default_Text = () => (
  <Link href="https://nusszopf.org/" title="title" ariaLabel="ariaLabel">
    link
  </Link>
)

export const Default_Button = () => (
  <Link href="https://nusszopf.org/" type={LINK_TYPES.button} title="title" ariaLabel="ariaLabel">
    link
  </Link>
)
