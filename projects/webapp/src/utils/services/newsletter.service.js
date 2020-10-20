import { useState } from 'react'
import { useToasts } from 'ui-library/services/Toasts.service'
import { newsletterData } from '../../assets/data'
import { NewsletterType } from '../functions/newsletter.function'

export const confirmNewsletterSubscription = token => {
  return fetch(`${process.env.DOMAIN}/api/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, action: NewsletterType.subscribeConfirm }),
  })
}

export const confirmNewsletterUnsubscription = token => {
  return fetch(`${process.env.DOMAIN}/api/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, action: NewsletterType.unsubscribeConfirm }),
  })
}

const useNewsletter = () => {
  const { notify } = useToasts()
  const [isLoading, setLoading] = useState(false)

  const subscribeToNewsletter = async values => {
    await handleRequest(
      { email: values.email, name: values.name, privacy: values.privacy, action: NewsletterType.subscribe },
      'subscribe'
    )
  }

  const unsubscribeFromNewsletter = async values => {
    await handleRequest({ email: values.email, action: NewsletterType.unsubscribe }, 'unsubscribe')
  }

  const handleRequest = async (values, type) => {
    try {
      notify({ type: 'loading', message: newsletterData[type].alerts.loading })
      setLoading(true)
      const request = fetch(`${process.env.DOMAIN}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const response = await delayedFetch(request)
      if (response.ok) {
        notify({ type: 'success', message: newsletterData[type].alerts.success })
      } else {
        notify({ type: 'error', message: newsletterData[type].alerts.error })
      }
    } catch (error) {
      notify({ type: 'error', message: newsletterData[type].alerts.error })
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
