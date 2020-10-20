import React from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Route from './Route.atom'

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
}

export const Text = () => (
  <div className="space-x-3">
    <Route href="/" title="title" ariaLabel="arial label">
      Home <ArrowRight className="inline h-5 mb-px -ml-1" />
    </Route>
    <Route href="/" title="title" ariaLabel="arial label" active={true}>
      Home (active)
    </Route>
  </div>
)

export const Button = () => (
  <Route variant="button" href="/" title="title" ariaLabel="arial label" size="circle" color="gray600Gray200">
    <ArrowLeft size={27} />
  </Route>
)
