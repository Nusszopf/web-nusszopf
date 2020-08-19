import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Page } from '../../../containers'

const UnsubscribeConfirm = () => {
  const router = useRouter()
  const { token } = router.query
  const [isLoading, setLoading] = useState(true)
  const [isSuccessful, setSuccessful] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const main = async () => {
      try {
        const response = await fetch(`${process.env.DOMAIN}/api/newsletter/unsubscribe-confirm`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        })
        if (response.ok) {
          const { email } = await response.json()
          setEmail(email)
          setSuccessful(true)
        } else {
          // TODO: logError(`newsletter-unsubscribe-confirm: ${my-response-message}`)
        }
      } catch (error) {
        // TODO: logError(`newsletter-unsubscribe-confirm: ${error.message}`)
      }
      setLoading(false)
    }
    if (token) {
      main()
    }
  }, [token])

  // TODO: ui design
  return (
    <Page>
      <div className="container mx-auto">
        <h1 className="my-8 text-3xl font-semibold leading-tight text-gray-600">
          Bestätigung Deiner Abmeldung zum Newsletter
        </h1>
        {isLoading ? (
          <p>in progress..</p>
        ) : isSuccessful ? (
          <p>confirmation successful - {email}</p>
        ) : (
          <p>confirmation failed</p>
        )}
      </div>
    </Page>
  )
}

// TODO: server fetch...

export default UnsubscribeConfirm
