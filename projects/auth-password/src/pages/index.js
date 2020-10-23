import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'

import { FramedCard } from 'ui-library/stories/templates'
import { Link } from 'ui-library/stories/atoms'
import { useToasts } from 'ui-library/services/Toasts.service'
import { Page, PasswordForm } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'

export default function IndexPage() {
  const router = useRouter()
  const { notify } = useToasts()
  const [ticket, setTicket] = useState()
  const [loading, setLoading] = useState(false)

  const handleSavePassword = async _data => {
    console.log(_data)
    setLoading(true)
    const data = {
      ticket,
      newPassword: _data.password,
      confirmNewPassword: _data.password,
      // _csrf: _data._csrf,
      // email: _data.email,
    }
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

  useEffect(() => {
    if (isEmpty(router.query)) return
    console.log(router.query)
    setTicket(router.query['ticket'])
    // {
    //   _csrf: router.query['csrf_token'],
    //   ticket: ,
    //   email: router.query['email'],
    // })
  }, [router.query])

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
