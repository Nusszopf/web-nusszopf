import { useState, useEffect, useCallback } from 'react'
import { useFormik } from 'formik'
import { object } from 'yup'

export const useFormikStepper = ({ onSubmit, initialStep = 0, initialValues = {}, enableReinitialize = true }) => {
  const [step, setStep] = useState(initialStep)
  const [progress, setProgress] = useState(0)
  const [children, setChildren] = useState()
  const [currentChild, setCurrentChild] = useState()
  const formik = useFormik({
    initialValues,
    validateOnMount: false,
    validationSchema: currentChild?.props?.validationSchema ?? object({}),
    onSubmit: (values, helpers) => handleSubmit(values, helpers),
    enableReinitialize: enableReinitialize,
  })

  useEffect(() => {
    if (children) {
      if (step >= 0) {
        setCurrentChild(children[step])
      }
      const progress = step < 0 ? 100 : ((step + 1) / children.length) * 100
      setProgress(progress)
    }
  }, [step, children])

  const getNextStep = useCallback(
    values => {
      return children.findIndex((child, index) => {
        if (child?.props?.requiredSchema) {
          const valid = child.props.requiredSchema.isValidSync(values)
          return valid && index > step
        } else {
          return index > step
        }
      })
    },
    [step, children]
  )

  const handleSubmit = (values, helpers) => {
    const nextStep = getNextStep(values)
    if (nextStep >= 0 && nextStep < children.length) {
      setStep(nextStep)
    } else {
      onSubmit(values, helpers)
    }
  }

  const goBack = () => {
    setStep(step => (step > 0 ? step - 1 : step))
  }

  return { formik, setChildren, currentChild, goBack, step, progress }
}

export default useFormikStepper
