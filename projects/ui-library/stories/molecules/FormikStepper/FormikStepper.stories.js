import React from 'react'
import FormikStepper, { useFormikStepper } from './FormikStepper.molecule'
import { string, object } from 'yup'
import { Button, Input, Progressbar } from '../../atoms'

export default {
  title: 'Design System/Molecules/FormikStepper',
  component: FormikStepper,
  parameters: {
    docs: {
      description: {
        component:
          '**FormikStepper Molecule** based on [Formik](https://formik.org/docs/overview). Stepper can be controlled via `useFormikStepper`. You can pass a `validationSchema` to each step for validation and a `requiredSchema` to be able to skip a step for specific inputs.',
      },
    },
  },
}

export const Default = () => {
  const stepper = useFormikStepper({
    onSubmit: (values, helpers) => handleSubmit(values, helpers),
    initialValues: { name: '', email: '' },
  })

  const handleSubmit = (values, helpers) => {
    console.log(values, helpers)
  }

  const Step1 = ({ formik }) => (
    <div id="step1">
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors?.name && formik.touched?.name && <p>{formik.errors?.name}</p>}
    </div>
  )

  const Step2 = ({ formik }) => (
    <div id="step2">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors?.email && formik.touched?.email && <p>{formik.errors?.email}</p>}
    </div>
  )

  const step1ValidationSchema = () => object({ name: string().required('bitte einen namen eingeben') })
  const step2RequiredSchema = object({})

  return (
    <>
      <div className="w-full h-auto px-4 py-6 mb-6 border-2 rounded-lg border-lilac-400">
        <Progressbar progress={stepper.progress} label={stepper.step ? 'Mail' : 'Name'} className="mb-4" />
        <FormikStepper {...stepper}>
          <Step1 validationSchema={step1ValidationSchema} />
          <Step2 requiredSchema={step2RequiredSchema} />
        </FormikStepper>
      </div>
      <div className="float-right space-x-4">
        <Button onClick={stepper.goBack}>zurück</Button>
        <Button onClick={stepper.formik.submitForm}>weiter</Button>
      </div>
    </>
  )
}
