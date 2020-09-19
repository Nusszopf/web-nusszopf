import React from 'react'
import { ArrowLeft } from 'react-feather'
import { Link, LINK_TYPES, LINK_TEXT_COLORS } from '../../atoms'
import { SVGNusszopfLogoBig } from '../../../assets/logos'

export default {
  title: 'Design System/Atoms/Link',
  component: Link,
}

export const Text = () => (
  <div className="space-x-3 space-y-3">
    <Link href="https://nusszopf.org/" title="title" ariaLabel="ariaLabel">
      external link
    </Link>
    <Link
      href="https://nusszopf.org/"
      color={LINK_TEXT_COLORS.turquoise400turquoise800}
      title="title"
      ariaLabel="ariaLabel">
      external link
    </Link>
    <Link href="https://nusszopf.org/" color={LINK_TEXT_COLORS.yellow100red500} title="title" ariaLabel="ariaLabel">
      external link
    </Link>
    <Link href="https://nusszopf.org/" color={LINK_TEXT_COLORS.yellow300pink700} title="title" ariaLabel="ariaLabel">
      external link
    </Link>
  </div>
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

export const SVG = () => (
  <Link type={LINK_TYPES.svg} href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
    <SVGNusszopfLogoBig className="w-32 h-full" />
  </Link>
)
