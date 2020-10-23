import { useState } from 'react'
import { FramedCard } from 'ui-library/stories/templates'
import { Link } from 'ui-library/stories/atoms'
import { useToasts } from 'ui-library/services/Toasts.service'
import { Page, PasswordForm } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'

export default function IndexPage() {
  const { notify } = useToasts()
  const [loading, setLoading] = useState(false)

  const handleSavePassword = async ({ password }) => {
    setLoading(true)
    const _csrf = document.getElementById('auth0-csrf')?.value
    const ticket = document.getElementById('auth0-ticket')?.value
    const email = document.getElementById('auth0-email')?.value
    const data = { password, _csrf, ticket, email }

    console.log(JSON.stringify(data))

    try {
      const response = await fetch('https://auth.nusszopf.org/lo/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          credentials: 'include',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        const json = await response.json()
        console.log(json)
      } else {
        console.log('HTTP-Error: ' + response.status)
      }
    } catch (error) {
      console.log('Catch-Error', error)
    }
    setLoading(false)
  }

  return (
    <Page className="bg-white sm:bg-gray-100">
      <FramedCard className="bg-white">
        <Link variant="svg" href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
          <SVGNusszopfLogoBig className="w-40 h-full" />
        </Link>
        <PasswordForm className="mt-10 sm:mt-12" onSubmit={handleSavePassword} loading={loading} />
      </FramedCard>
    </Page>
  )
}
