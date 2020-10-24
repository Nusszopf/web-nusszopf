import React from 'react'
import { ChevronDown, ChevronLeft, ArrowLeft } from 'react-feather'
import Button from './Button.atom'

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          '**UI atom** which at first only provides the **styling for buttons**. Works as [Reakit Button](https://reakit.io/docs/button/) by default, but can also be used via `as` as another element if you only need the button style.',
      },
    },
  },
}

export const Filled = () => <Button color="gray600Gray200">Button</Button>

export const Disabled = () => <Button disabled>Button</Button>

export const Circle = () => (
  <Button size="circle" color="gray600Gray200">
    <ArrowLeft size={27} />
  </Button>
)

export const IconLeft = () => <Button iconLeft={<ChevronLeft className="-ml-2" />}>Button</Button>

export const IconRight = () => (
  <Button size="large" iconRight={<ChevronDown className="mt-1 -mr-2" />}>
    Button
  </Button>
)

export const As = () => (
  <Button
    as="a"
    color="gray600Gray200"
    href="https://nusszopf.org"
    rel="noopener noreferrer"
    target="_blank"
    title="Zum Nusszopf"
    aria-label="Zum Nusszopf">
    As Link
  </Button>
)
