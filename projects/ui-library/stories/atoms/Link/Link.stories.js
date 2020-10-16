import React from 'react'
import Link from './Link.atom'
import { SVGNusszopfLogoBig } from '../../../assets/logos'

export default {
  title: 'Design System/Atoms/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: '**UI atom** preconfigured and styled `a` dom element.',
      },
    },
  },
}

export const Text = () => (
  <div className="space-x-3 space-y-3">
    <Link href="https://nusszopf.org/" title="title" ariaLabel="ariaLabel">
      external link
    </Link>
    <Link href="https://nusszopf.org/" color="turquoise400turquoise800" title="title" ariaLabel="ariaLabel">
      external link
    </Link>
    <Link href="https://nusszopf.org/" color="yellow100red500" title="title" ariaLabel="ariaLabel">
      external link
    </Link>
    <Link href="https://nusszopf.org/" color="yellow300pink700" title="title" ariaLabel="ariaLabel">
      external link
    </Link>
  </div>
)

export const SVG = () => (
  <Link type="svg" href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
    <SVGNusszopfLogoBig className="w-32 h-full" />
  </Link>
)

export const Button = () => (
  <Link type="button" color="gray600gray200" href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
    Link with button styles
  </Link>
)
