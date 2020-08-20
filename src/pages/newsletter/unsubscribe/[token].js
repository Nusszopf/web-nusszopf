import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import { ArrowRight } from 'react-feather'

import { Page, PageBrand } from '../../../containers'
import { Link, LINK_TYPES, Text, TEXT_TYPE, Route, ROUTE_TYPES, BTN_COLORS } from '../../../stories/atoms'
import { confirmNewsletterUnsubscription } from '../../../utils/services/newsletter.service'
import { FrameFullCenter } from '../../../stories/templates'

const UnsubscribeConfirm = ({ lead }) => (
  <Page showFooter={false}>
    <FrameFullCenter
      className="text-yellow-300 bg-blue-400"
      flex="justify-center"
      footer={<PageBrand className="mt-24" color="pink" />}>
      <div className="w-full max-w-xl sm:mt-12">
        <SVG
          className="flex-shrink-0 w-48 mx-auto mb-10 sm:mb-20"
          src="/images/logos/nusszopf-big.svg"
          title="<3 Nusszopf"
          aria-label="Nusszopf"
        />
        <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-4 text-yellow-300">
          Juhuu! Vielen Dank für Dein Interesse!
        </Text>
        <Text className="mb-4">
          <span className="font-bold">{lead.email}</span> wurde erfolgreich vom Newsletter abgemeldet. Wir freuen uns
          über dein Feedback, was wir an dem Newsletter verbessern können.
        </Text>
        <Text className="mb-8 italic">
          Frische Grüße<br></br>Dein Nusszopf-Team
        </Text>
        <Link
          className="mb-4 sm:mr-4"
          type={LINK_TYPES.button}
          color={BTN_COLORS.blue400Yellow300}
          title="E-Mail an Nusszopf schreiben"
          ariaLabel="E-Mail an Nusszopf schreiben"
          href="mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback">
          Feedback senden
        </Link>
        <Route
          type={ROUTE_TYPES.buttonIconRight}
          color={BTN_COLORS.blue400blue200}
          href="/"
          title="Zum Nusszopf"
          ariaLabel="Zum Nusszopf"
          icon={ArrowRight}>
          Zum Nusszopf
        </Route>
      </div>
    </FrameFullCenter>
  </Page>
)

UnsubscribeConfirm.propTypes = {
  lead: PropTypes.objectOf({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
}

export default UnsubscribeConfirm

export const getServerSideProps = async ctx => {
  try {
    const { token } = ctx.query
    const response = await confirmNewsletterUnsubscription(token)
    console.log(response)
    if (response.ok) {
      const lead = await response.json()
      return { props: { lead } }
    } else {
      // TODO: logError(`newsletter-subscribe-confirm: ${error.message}`)
      const statusCode = response.status === 404 ? 404 : 500
      ctx.res.writeHead(307, { Location: `/${statusCode}` })
      ctx.res.end()
      return { props: { statusCode } }
    }
  } catch (error) {
    // TODO: logError(`newsletter-subscribe-confirm: ${error.message}`)
    ctx.res.writeHead(307, { Location: '/500' })
    ctx.res.end()
    return { props: { statusCode: 500 } }
  }
}
