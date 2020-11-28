import React from 'react'
import { ChevronDown, ChevronLeft, ArrowLeft } from 'react-feather'
import Button from './Button.atom'
import { ButtonColor, ButtonSize, ButtonVariant } from './Button.theme'

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
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.keys(ButtonSize),
      },
    },
    color: {
      control: {
        type: 'select',
        options: Object.keys(ButtonColor),
      },
    },
    variant: {
      control: {
        type: 'select',
        options: Object.keys(ButtonVariant),
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = args => <Button {...args}>{args.children}</Button>

export const Main = Template.bind({})
Main.args = { children: 'Button' }

export const Filled = Template.bind({})
Filled.args = {
  className: 'bg-red-300',
  children: 'Button',
}

export const Circle = () => (
  <Button size="circle">
    <ArrowLeft size={27} />
  </Button>
)

export const IconLeft = () => <Button iconLeft={<ChevronLeft className="-ml-2" />}>Button</Button>

export const IconRight = () => (
  <Button size="large" iconRight={<ChevronDown className="mt-1 -mr-2" />}>
    Button
  </Button>
)

export const As = () => <Button as="p">As Paragraph</Button>
