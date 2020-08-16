import React from 'react'
import { ArrowLeft } from 'react-feather'
import { NavItem, NAVITEM_TYPES } from '../../atoms'

export default {
  title: 'Design System/Atoms/NavItem',
  component: NavItem,
}

export const Default_Text = () => (
  <NavItem href="/" title="title" ariaLabel="arial label">
    home
  </NavItem>
)

export const Default_Nav_Button = () => (
  <NavItem type={NAVITEM_TYPES.button} href="/" icon={ArrowLeft} title="title" ariaLabel="arial label" />
)
