import React from 'react'
import { ArrowLeft } from 'react-feather'
import { Route, ROUTE_TYPES } from '../../atoms'

export default {
  title: 'Design System/Atoms/Route',
  component: Route,
}

export const Text = () => (
  <Route href="/" title="title" ariaLabel="arial label">
    Home
  </Route>
)

export const Text_Active = () => (
  <Route href="/" title="title" ariaLabel="arial label" active={true}>
    Home
  </Route>
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
  <Route type={ROUTE_TYPES.button} href="/" width={23} icon={ArrowLeft} title="title" ariaLabel="arial label">
    Link
  </Route>
)
