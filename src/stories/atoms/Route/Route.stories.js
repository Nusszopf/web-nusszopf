import React from 'react'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Route, ROUTE_TYPES } from '../../atoms'

export default {
  title: 'Design System/Atoms/Route',
  component: Route,
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

export const Icon = () => (
  <Route type={ROUTE_TYPES.icon} href="/" icon={ArrowLeft} title="title" ariaLabel="arial label" />
)

export const Button = () => (
  <Route type={ROUTE_TYPES.button} href="/" width={23} title="title" ariaLabel="arial label">
    Link
  </Route>
)

export const Button_Icon = () => (
  <Route type={ROUTE_TYPES.buttonIconLeft} href="/" width={23} icon={ArrowLeft} title="title" ariaLabel="arial label">
    Link
  </Route>
)
