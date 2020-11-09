import { useState, useEffect, useCallback } from 'react'

const useFormikStepper = ({ initialStep = 0 }) => {
  const [step, setStep] = useState(initialStep)
  const [progress, setProgress] = useState(0)
  const [children, setChildren] = useState()
  const [currentChild, setCurrentChild] = useState()

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

  const goForward = (values, helpers) => {
    const nextStep = getNextStep(values)
    if (nextStep >= 0 && nextStep < children.length) {
      helpers.setTouched({}, false)
      setStep(nextStep)
      return false
    } else {
      return true
    }
  }

  const goBack = () => {
    setStep(step => (step > 0 ? step - 1 : step))
  }

  return { goForward, setChildren, currentChild, goBack, step, progress }
}

export default useFormikStepper
