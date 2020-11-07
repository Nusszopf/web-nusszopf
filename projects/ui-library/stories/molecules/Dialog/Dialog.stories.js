import React from 'react'
import { Button } from '../../atoms'
import Dialog from './Dialog.molecule'

export default {
  title: 'Design System/Molecules/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: '**Dialog Molecule** based on [ReachUI Dialog](https://reach.tech/dialog/).',
      },
    },
  },
}

export const Checked = () => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      <Button onClick={open}>Open Dialog</Button>
      <Dialog isOpen={showDialog} onDismiss={close} className="bg-lilac-400">
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </>
  )
}
