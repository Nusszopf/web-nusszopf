import React from 'react'
import { Button, BTN_COLORS } from '../../atoms'

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
}

export const Primary = () => (
  <div className="space-x-3">
    <Button label="Button" />
    <Button color={BTN_COLORS.blue400Yellow300} label="Button" />
    <Button color={BTN_COLORS.pink400blue700} label="Button" />
    <Button color={BTN_COLORS.pink600yellow300} label="Button" />
    <Button color={BTN_COLORS.yellow400yellow700} label="Button" />
    <Button color={BTN_COLORS.turquoise700turquoise500} label="Button" />
    <Button color={BTN_COLORS.blue400blue200} label="Button" />
  </div>
)
