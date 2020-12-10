import React from 'react'
import { Button, Progressbar } from '../../atoms'
import Stepper from './Stepper.organism'
import useStepper from './useStepper'

export default {
  title: 'Design System/Organisms/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component:
          '**Stepper Organism**, which can be controlled via `useStepper`. `useStepper` uses [Next.js Router](https://nextjs.org/docs/api-reference/next/router) to determine the current step via url-query.',
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
