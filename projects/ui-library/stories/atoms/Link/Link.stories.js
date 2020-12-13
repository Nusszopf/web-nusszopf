import React from 'react'
import { SVGNusszopfLogoBig } from '../../../assets/logos'
import Link from './Link.atom'
import { LinkBorder, LinkColor, LinkVariant } from './Link.theme'

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
  argTypes: {
    border: {
      control: {
        type: 'select',
        options: Object.keys(LinkBorder),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(LinkColor),
      },
    },
    variant: {
      control: {
        type: 'select',
        options: Object.keys(LinkVariant),
      },
    },
  },
}

const Template = args => <Link {...args}>{args.children}</Link>

const Main = Template.bind({})
Main.args = {
  href: 'https://nusszopf.org/',
  title: 'Zum Nusszopf',
  ariaLabel: 'Zum Nusszopf',
  children: 'External Link',
}

export const SVG = () => (
  <Link variant="svg" href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
    <SVGNusszopfLogoBig className="w-32 h-full" />
  </Link>
)

export const Button = () => (
  <Link variant="button" href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
    Link with button styles
  </Link>
)
