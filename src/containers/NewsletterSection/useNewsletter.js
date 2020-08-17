import { useState } from 'react'

const useNewsletter = () => {
  const [hasFailed, setFailed] = useState(false)
  const [isSuccessful, setSuccessful] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleChange = () => {
    setLoading(false)
    setFailed(false)
    setSuccessful(false)
  }

  const handleSubmit = async values => {
    setLoading(true)
    try {
      const response = await fetch(`${process.env.DOMAIN}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email, name: values.name }),
      })
      if (response.ok) {
        setSuccessful(true)
      } else {
        setFailed(true)
        // TODO: logError(`newsletter-subscribe: ${my-response-message}`)
      }
    } catch (error) {
      setFailed(true)
      // TODO: logError(`newsletter-subscribe: ${error.message}`)
    }
    setLoading(false)
  }

  return { loading: isLoading, success: isSuccessful, hasFailed, handleChange, handleSubmit }
}

export default useNewsletter
