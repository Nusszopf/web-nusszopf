import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'

const useFormikStepper = () => {
  const router = useRouter()
  const [step, setStep] = useState()
  const [progress, setProgress] = useState(0)
  const [children, setChildren] = useState()
  const [currentChild, setCurrentChild] = useState()

  useEffect(() => {
    if (!children) return
    const numSteps = children.length
    const queryStep = parseInt(router.query?.step) // first render is always NaN (https://github.com/vercel/next.js/discussions/11484)
    if (isNaN(queryStep) || queryStep >= numSteps || queryStep < 0) {
      router.push({ pathname: '/user/project/create', query: { step: 0 } })
    } else if (step !== queryStep) {
      setStep(queryStep)
    }
  }, [router, children, setStep, step])

  useEffect(() => {
    if (children && step >= 0) {
      setCurrentChild(children[step])
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

export default useFormikStepper
