import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'

import { Page, PageBrand } from '../../../containers'
import { Link, LINK_TYPES, Text, TEXT_TYPE, Route, ROUTE_TYPES, BTN_COLORS } from '../../../stories/atoms'
import { confirmNewsletterUnsubscription } from '../../../utils/services/newsletter.service'
import { FrameFullCenter } from '../../../stories/templates'
import { SVGNusszopfLogoBigYellow } from '../../../assets'

const UnsubscribeConfirm = ({ lead }) => (
  <Page showFooter={false}>
    <FrameFullCenter
      className="text-yellow-300 bg-blue-400"
      flex="justify-center"
      footer={<PageBrand className="mt-24" color="blue" />}>
      <div className="w-full max-w-xl sm:mt-12">
        <SVGNusszopfLogoBigYellow
          className="flex-shrink-0 w-48 mx-auto mb-10 sm:mb-20"
          title="<3 Nusszopf"
          aria-label="Nusszopf"
        />
        <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-4 text-yellow-300">
          Schade Marmelade...
        </Text>
        <Text className="mb-4">
          <span className="font-bold">{lead.email}</span> wurde erfolgreich vom Newsletter abgemeldet. Wir freuen uns
          über dein Feedback, was wir an dem Newsletter verbessern können.
        </Text>
        <Text className="mb-8 italic">
          Frische Grüße<br></br>Dein Nusszopf-Team
        </Text>
        <Link
          className="mb-4 sm:mr-4 sm:mb-0"
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
    if (response.ok) {
      const lead = await response.json()
      return { props: { lead } }
    } else {
      ctx.res.writeHead(307, { Location: '/404' })
      ctx.res.end()
      return { props: { statusCode: 404 } }
    }
  } catch (error) {
    ctx.res.writeHead(307, { Location: '/500' })
    ctx.res.end()
    return { props: { statusCode: 500 } }
  }
}
