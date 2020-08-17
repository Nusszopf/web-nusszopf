import React from 'react'
import { Link, LINK_TYPES } from '../../atoms'
import { ArrowLeft } from 'react-feather'

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
    Link
  </Link>
)

export const Button_Icon = () => (
  <Link href="https://nusszopf.org/" type={LINK_TYPES.button} icon={ArrowLeft} title="title" ariaLabel="ariaLabel">
    Link
  </Link>
)
