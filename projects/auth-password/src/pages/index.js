import { useState } from 'react'

import { FramedCard } from 'ui-library/stories/templates'
import { Link } from 'ui-library/stories/atoms'
import { useToasts } from 'ui-library/services/Toasts.service'
import { Page, PasswordForm } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'
import { pageData as cms } from '../assets/data'

export default function IndexPage() {
  const { notify } = useToasts()
  const [loading, setLoading] = useState(false)

  const handleSavePassword = async ({ password }) => {
    setLoading(true)
    notify({ type: 'loading', message: cms.notify.loading })
    const _csrf = document.getElementById('auth0-csrf')?.value
    const ticket = document.getElementById('auth0-ticket')?.value
    const email = document.getElementById('auth0-email')?.value
    const data = { newPassword: password, confirmNewPassword: password, _csrf, ticket, email }
    try {
      const response = await fetch('/lo/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          credentials: 'include',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        notify({ type: 'success', message: cms.notify.success })
        setTimeout(() => {
          window.location.href = `${process.env.DOMAIN}/api/login`
        }, 1500)
      } else {
        notify({ type: 'error', message: cms.notify.error })
      }
    } catch (error) {
      notify({ type: 'error', message: cms.notify.error })
    }
    setLoading(false)
  }

  return (
    <Page className="bg-white sm:bg-steel-100">
      <FramedCard className="bg-white">
        <Link variant="svg" href="https://nusszopf.org" title={cms.logo.meta} ariaLabel={cms.logo.meta}>
          <SVGNusszopfLogoBig className="w-40 h-full" />
        </Link>
        <PasswordForm className="mt-10 sm:mt-12" onSubmit={handleSavePassword} loading={loading} />
      </FramedCard>
    </Page>
  )
}
