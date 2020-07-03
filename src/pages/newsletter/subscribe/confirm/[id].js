import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Heading, Text, Link, Section } from '../../../../components/atoms'
import { LINK_EXTERN } from '../../../../components/atoms/Link/link.atom'
import { Page } from '../../../../components/molecules'
import { logError } from '../../../../utils/services/error.service'

const SubscribeConfirm = () => {
  const router = useRouter()
  const { id } = router.query
  const [isLoading, setLoading] = useState(true)
  const [hasError, setError] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const main = async () => {
      try {
        const response = await fetch('/api/newsletter/subscribe-confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        })
        const { email } = await response.json()
        setEmail(email)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
        logError(`newsletter-confirm: ${error.message}`)
      }
    }
    if (id) {
      main()
    }
  }, [id])

  const getStatus = () => {
    if (isLoading) {
      return <Text>Bitte warte kurz, wir überprüfen gerade deine E-Mail-Adresse.</Text>
    } else if (!isLoading && !hasError) {
      return <Text>Deine E-Mail-Adresse {email} wurde erfolgreich bei uns hinterlegt.</Text>
    } else if (!isLoading && hasError) {
      return (
        <Text>
          Deine E-Mail-Adresse konnte leider nicht bei uns hinterlegt werden. Bitte melde dich bei
          uns unter{' '}
          <Link mode={LINK_EXTERN} href="mailto:mail@nusszopf.org">
            mail@nusszopf.org
          </Link>{' '}
          damit wir das technische Problem lösen können.
        </Text>
      )
    }
  }

  return (
    <Page noindex={true} footer={[{ text: 'Zurück zur Startseite', href: '/', mode: null }]}>
      <Heading as="h1">Überprüfung deiner E-Mail-Adresse</Heading>
      <Section>
        <Heading as="h3">Status</Heading>
        {getStatus()}
      </Section>
      <Section>
        <Heading as="h3">Info</Heading>
        <Text>
          Wir nutzen den zusätzlichen Schritt der Bestätigung deiner E-Mail-Adresse, damit wir
          sichergehen können, dass Du nicht ohne dein Wissen hinzugefügt wurdest. Ebenfalls schützen
          wir uns damit vor Spam-Registrierungen.
        </Text>
      </Section>
    </Page>
  )
}

export default SubscribeConfirm
