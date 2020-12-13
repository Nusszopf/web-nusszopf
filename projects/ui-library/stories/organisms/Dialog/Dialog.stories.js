import React from 'react'
import { Button } from '../../atoms'
import Dialog from './Dialog.organism'

export default {
  title: 'Design System/Organisms/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: '**Dialog Organism** based on [ReachUI Dialog](https://reach.tech/dialog/).',
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
      <Dialog isOpen={showDialog} onDismiss={close} className="bg-lilac-400" aria-label="Test dialog">
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </>
  )
}
