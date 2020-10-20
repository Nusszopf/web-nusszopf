import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { WebAuth } from 'auth0-js'
import { isEmpty } from 'lodash'

import { FrameFullCenter } from 'ui-library/stories/templates'
import { Link } from 'ui-library/stories/atoms'
import { useToasts } from 'ui-library/services/Toasts.service'
import { Page } from '../containers'
import { SVGNusszopfLogoBig } from '../assets/images'

export default function IndexPage() {
  const { notify } = useToasts()
  const router = useRouter()
  const [webAuth, setWebAuth] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isEmpty(router.query)) return
    const params = {
      overrides: {
        __tenant: process.env.AUTH0_TENANT,
        __token_issuer: `https://${process.env.AUTH0_DOMAIN}/`,
      },
      audience: router.query['audience'],
      auth0Client: router.query['auth0Client'],
      clientID: router.query['client'],
      domain: process.env.AUTH0_DOMAIN,
      protocol: router.query['protocol'],
      redirectUri: router.query['redirect_uri'],
      responseType: router.query['response_type'],
      scope: router.query['scope'],
      state: router.query['state'],
    }
    const webAuth = new WebAuth(params)
    setWebAuth(webAuth)
  }, [router.query])

  return (
    <Page className="bg-white">
      <FrameFullCenter fullScreen={false}>
        <div className="flex flex-col items-center w-full max-w-sm mx-auto">
          <Link variant="svg" href="https://nusszopf.org" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
            <SVGNusszopfLogoBig className="w-40 h-full" />
          </Link>
          <div className="mt-12">auth-password page works!</div>
        </div>
      </FrameFullCenter>
    </Page>
  )
}
