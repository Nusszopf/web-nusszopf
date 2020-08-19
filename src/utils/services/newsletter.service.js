import { useState } from 'react'

export const confirmNewsletterSubscription = token => {
  return fetch(`${process.env.DOMAIN}/api/newsletter/subscribe-confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
}

export const confirmNewsletterUnsubscription = () => {
  // TODO: fetch
}

const useNewsletter = () => {
  const [hasFailed, setFailed] = useState(false)
  const [isSuccessful, setSuccessful] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleChange = () => {
    setLoading(false)
    setFailed(false)
    setSuccessful(false)
  }

  const subscribeToNewsletter = async values => {
    try {
      setLoading(true)
      const request = fetch(`${process.env.DOMAIN}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email, name: values.name }),
      })
      const response = await delayedFetch(request)
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

  const unsubscribeFromNewsletter = async values => {
    try {
      setLoading(true)
      const request = fetch(`${process.env.DOMAIN}/api/newsletter/unsubscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.email }),
      })
      const response = await delayedFetch(request)
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

  const delayedFetch = async request => {
    const timer = new Promise(resolve => setTimeout(() => resolve(), 500))
    const [response] = await Promise.all([request, timer])
    return response
  }

  return {
    loading: isLoading,
    success: isSuccessful,
    error: hasFailed,
    handleChange,
    subscribeToNewsletter,
    unsubscribeFromNewsletter,
  }
}

export default useNewsletter
