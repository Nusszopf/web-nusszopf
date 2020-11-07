import React from 'react'
import FormikStepper, { useFormikStepper } from './FormikStepper.molecule'
import { Button, Input, Progressbar } from '../../atoms'

export default {
  title: 'Design System/Molecules/FormikStepper',
  component: FormikStepper,
  parameters: {
    docs: {
      description: {
        component:
          '**FormikStepper Molecule** based on [Formik](https://formik.org/docs/overview). Stepper can be controlled via `useFormikStepper`.',
      },
    },
  },
}

const Step1 = ({ formik }) => (
  <div id="step1">
    <Input
      type="email"
      name="email"
      placeholder="Email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
    />
  </div>
)

const Step2 = ({ formik }) => (
  <div id="step2">
    <Input
      type="text"
      name="name"
      placeholder="Name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
    />
  </div>
)

export const Default = () => {
  const stepper = useFormikStepper({
    onSubmit: values => handleSubmit(values),
    initialValues: { name: 'name', email: 'mail@mail.de' },
  })

  const handleSubmit = values => {
    console.log(values)
  }

  return (
    <>
      <div className="w-full h-auto px-4 py-6 mb-6 border-2 rounded-lg border-lilac-400">
        <Progressbar progress={stepper.progress} label={stepper.step ? 'Name' : 'Mail'} className="mb-4" />
        <FormikStepper {...stepper}>
          <Step1 />
          <Step2 />
        </FormikStepper>
      </div>
      <div className="float-right space-x-4">
        <Button onClick={stepper.goBack}>zurück</Button>
        <Button onClick={stepper.formik.submitForm}>weiter</Button>
      </div>
    </>
  )
}
