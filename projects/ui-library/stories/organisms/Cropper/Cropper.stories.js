import React, { useRef, useState } from 'react'
import Cropper from './Cropper.organism'
import { Button } from '../../atoms'

export default {
  title: 'Design System/Organisms/Cropper',
  component: Cropper,
  parameters: {
    docs: {
      description: {
        component: '**Cropper Organism** based on [React-Easy-Crop](https://github.com/ricardo-ch/react-easy-crop).',
      },
    },
  },
}

export const Checked = () => {
  const [isComplete, setIsComplete] = useState(false)
  const cropper = useRef()

  const logImage = async () => {
    const image = await cropper.current.createImage()
    console.log(image)
  }

  return (
    <div>
      <Cropper ref={cropper} onComplete={() => setIsComplete(true)} />
      <Button onClick={logImage} disabled={!isComplete}>
        Log Image
      </Button>
    </div>
  )
}
