import React from 'react'
import { ArrowLeft } from 'react-feather'
import Route from './Route.atom'
import { RouteBorder, RouteVariant } from './Route.theme'

export default {
  title: 'Design System/Atoms/Route',
  component: Route,
  parameters: {
    docs: {
      description: {
        component: '**UI atom** based on [Next Link](https://nextjs.org/docs/api-reference/next/link).',
      },
    },
  },
  argTypes: {
    border: {
      control: {
        type: 'select',
        options: Object.keys.bind(RouteBorder),
      },
    },
    variant: {
      control: {
        type: 'select',
        options: Object.keys(RouteVariant),
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = args => <Route {...args}>{args.children}</Route>

export const Main = Template.bind({})
Main.args = {
  href: '/',
  ariaLabel: 'arial label',
  title: 'title',
  children: 'Route',
}

export const Button = Template.bind({})
Button.args = {
  variant: 'button',
  href: '/',
  title: 'title',
  ariaLabel: 'arial label',
  size: 'circle',
  children: <ArrowLeft size={27} />,
}
