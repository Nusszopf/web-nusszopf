import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

const useStepper = () => {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [children, setChildren] = useState()
  const [isInitialized, setIsInitialized] = useState(false)
  const [currentChild, setCurrentChild] = useState()

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
      router.push({ pathname: '/user/project/create', query: { step: 0 } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized])

  useEffect(() => {
    if (!children || !isInitialized) {
      return
    }
    const numSteps = children.length
    const queryStep = parseInt(router.query?.step)
    if (isNaN(queryStep) || queryStep >= numSteps || queryStep < 0) {
      return
    } else if (step !== queryStep) {
      setStep(queryStep)
    }
  }, [router, children, setStep, step, isInitialized])

  useEffect(() => {
    if (children && isInitialized && step >= 0) {
      setCurrentChild(children[step])
      const progress = step < 0 ? 100 : ((step + 1) / children.length) * 100
      setProgress(progress)
    }
  }, [step, children, isInitialized])

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
      router.push({ pathname: '/user/project/create', query: { step: nextStep } })
      return false
    } else {
      return true
    }
  }

  const goBack = () => {
    const previousStep = step > 0 ? step - 1 : 0
    router.push({ pathname: '/user/project/create', query: { step: previousStep } })
  }

  return { goForward, setChildren, currentChild, goBack, step, progress }
}

export default useStepper
