import React from 'react'
import Stepper from './Stepper.molecule'
import useStepper from './useStepper'
import { Button, Progressbar } from '../../atoms'

export default {
  title: 'Design System/Molecules/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component:
          '**Stepper Molecule**, which can be controlled via `useStepper`. `useStepper` uses [Next.js Router](https://nextjs.org/docs/api-reference/next/router) to determine the current step via url-query.',
      },
    },
  },
}

export const Default = () => {
  const stepper = useStepper({})

  return (
    <>
      <div className="w-full h-auto px-4 py-6 mb-6 border-2 rounded-lg border-lilac-400">
        <Progressbar progress={stepper.progress} label={stepper.step ? 'Step2' : 'Step1'} className="mb-4" />
        <Stepper {...stepper}>
          <div>step 1</div>
          <div>step 2</div>
        </Stepper>
      </div>
      <div className="float-right space-x-4">
        <Button onClick={stepper.goBack}>zurück</Button>
        <Button onClick={stepper.goForward}>weiter</Button>
      </div>
    </>
  )
}
