import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { logError } from '../../../../utils/services/error.service'
import { Heading, Text, Link } from '../../../../components/atoms'
import { LINK_EXTERN } from '../../../../components/atoms/Link/link.atom'
import { Page } from '../../../../components/molecules'

const UnsubscribeConfirm = () => {
  const router = useRouter()
  const { token } = router.query

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        await fetch('/api/newsletter/unsubscribe-confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        })
      } catch (error) {
        logError(`newsletter-unsubscribe: ${error.message}`)
      }
    }
    if (token) {
      unsubscribe()
    }
  }, [token])

  return (
    <Page noindex={true} footer={[{ text: 'Zurück zur Startseite', href: '/', mode: null }]}>
      <Heading as="h1">Abmeldung vom Newsletter</Heading>
      <Text>
        Du wurdes erfolgreich vom Newsletter abgemeldet. Falls du dennoch den Newsletter bekommen solltest, gib uns
        bitte unter{' '}
        <Link mode={LINK_EXTERN} href="mailto:mail@nusszopf.org">
          mail@nusszopf.org
        </Link>{' '}
        Bescheid und wir kümmern uns um das technsiche Problem.
      </Text>
    </Page>
  )
}

export default UnsubscribeConfirm
