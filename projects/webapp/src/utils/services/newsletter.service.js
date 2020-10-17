import { useState } from 'react'
import { useToasts } from 'ui-library/services/Toasts.service'
import { ToastType } from 'ui-library/stories/molecules'
import { newsletterData } from '../../assets/data'

export const confirmNewsletterSubscription = token => {
  return fetch(`${process.env.DOMAIN}/api/newsletter/subscribe-confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
}

export const confirmNewsletterUnsubscription = token => {
  return fetch(`${process.env.DOMAIN}/api/newsletter/unsubscribe-confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  })
}

const useNewsletter = () => {
  const { notify } = useToasts()
  const [isLoading, setLoading] = useState(false)

  const subscribeToNewsletter = async values => {
    await handleRequest(
      { email: values.email, name: values.name, privacy: values.privacy },
      `${process.env.DOMAIN}/api/newsletter/subscribe`,
      'subscribe'
    )
  }

  const unsubscribeFromNewsletter = async values => {
    await handleRequest({ email: values.email }, `${process.env.DOMAIN}/api/newsletter/unsubscribe`, 'unsubscribe')
  }

  const handleRequest = async (values, url, type) => {
    try {
      notify({ type: ToastType.loading, message: newsletterData[type].alerts.loading })
      setLoading(true)
      const request = fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const response = await delayedFetch(request)
      if (response.ok) {
        notify({ type: ToastType.success, message: newsletterData[type].alerts.success })
      } else {
        notify({ type: ToastType.error, message: newsletterData[type].alerts.error })
      }
    } catch (error) {
      notify({ type: ToastType.error, message: newsletterData[type].alerts.error })
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
    subscribeToNewsletter,
    unsubscribeFromNewsletter,
  }
}

export default useNewsletter
