import PropTypes from 'prop-types'
import { Page, FOOTER_TYPE } from '../../../containers'
import { ROUTE_TYPES, Route, Text, TEXT_TYPE } from '../../../stories/atoms'
import { FrameFullCenter } from '../../../stories/templates'
import { confirmNewsletterSubscription } from '../../../utils/services/newsletter.service'
import { SVGNusszopfBigYellowBlue } from '../../../assets'

const SubscribeConfirm = ({ lead }) => (
  <Page className="text-yellow-300 bg-blue-400" showFooter={true} footerType={FOOTER_TYPE.secondary} noindex={true}>
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
          Juhuu! Nussige News!
        </Text>
        <Text className="hyphens-auto">
          <span className="italic">{lead.email}</span> wurde zum Newsletter angemeldet.
          <span className="block mt-2">Schön, dass Du mit dabei bist!</span>
        </Text>
      </div>
    </FrameFullCenter>
  </Page>
)

SubscribeConfirm.propTypes = {
  lead: PropTypes.objectOf({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
}

export default SubscribeConfirm

export const getServerSideProps = async ctx => {
  try {
    const { token } = ctx.query
    const response = await confirmNewsletterSubscription(token)
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
