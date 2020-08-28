import PropTypes from 'prop-types'
import { Page, FOOTER_TYPE } from '../../../containers'
import { ROUTE_TYPES, Route, Link, LINK_TYPES, Text, TEXT_TYPE, BTN_COLORS } from '../../../stories/atoms'
import { confirmNewsletterUnsubscription } from '../../../utils/services/newsletter.service'
import { FrameFullCenter } from '../../../stories/templates'
import { SVGNusszopfBigYellowBlue } from '../../../assets'

const UnsubscribeConfirm = ({ lead }) => (
  <Page className="text-yellow-300 bg-blue-400" showFooter={true} footerType={FOOTER_TYPE.secondary}>
    <FrameFullCenter fullScreen={false}>
      <div className="sm:text-center">
        <Route
          type={ROUTE_TYPES.svg}
          className="block w-40 mx-auto mb-12 sm:w-48 sm:mb-16"
          href="/"
          title="Zum Nusszopf"
          ariaLabel="Zum Nusszopf">
          <SVGNusszopfBigYellowBlue className="flex-shrink-0 w-full" />
        </Route>
        <Text as="h1" type={TEXT_TYPE.titleMd} className="mb-8">
          Schade Marmelade<span className="hidden sm:inline">...</span>
        </Text>
        <Text className="mb-12 sm:mb-16 hyphens-auto">
          <span className="italic">{lead.email}</span> wurde vom Newsletter abgemeldet.
          <span className="block mt-3">Wir freuen uns über dein Feedback!</span>
        </Text>
        <div className="text-center">
          <Link
            type={LINK_TYPES.button}
            color={BTN_COLORS.blue400Yellow300}
            title="E-Mail an Nusszopf schreiben"
            ariaLabel="E-Mail an Nusszopf schreiben"
            href="mailto:mail@nusszopf.org?subject=Sponsorship | Partnerschaft | Feedback">
            Feedback senden
          </Link>
        </div>
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
