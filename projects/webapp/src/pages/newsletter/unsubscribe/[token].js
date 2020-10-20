import PropTypes from 'prop-types'
import { Page, FOOTER_TYPE } from '../../../containers'
import { Route, Link, Text } from 'ui-library/stories/atoms'
import { confirmNewsletterUnsubscription } from '../../../utils/services/newsletter.service'
import { FrameFullCenter } from 'ui-library/stories/templates'
import { SVGNusszopfBigYellowBlue } from '../../../assets/logos'
import { newsletterData } from '../../../assets/data'

const UnsubscribeConfirm = ({ lead }) => (
  <Page className="text-yellow-300 bg-blue-400" showFooter={true} footerType={FOOTER_TYPE.secondary} noindex={true}>
    <FrameFullCenter fullScreen={false}>
      <div className="sm:text-center">
        <Route
          variant="svg"
          className="block w-40 mx-auto mb-12 sm:w-48 sm:mb-16"
          href="/"
          title={newsletterData.unsubscribeConfirm.logo}
          ariaLabel={newsletterData.unsubscribeConfirm.logo}>
          <SVGNusszopfBigYellowBlue className="flex-shrink-0 w-full" />
        </Route>
        <Text as="h1" variant="titleMd" className="mb-8">
          {newsletterData.unsubscribeConfirm.heading}
          <span className="hidden sm:inline">...</span>
        </Text>
        <Text className="mb-12 sm:mb-16 hyphens-auto">
          <span className="italic">{lead?.email}</span> {newsletterData.unsubscribeConfirm.textA}
          <span className="block mt-3">{newsletterData.unsubscribeConfirm.textB}</span>
        </Text>
        <div className="text-center">
          <Link
            variant="button"
            color="blue400Yellow300"
            size="large"
            title={newsletterData.unsubscribeConfirm.action.meta}
            ariaLabel={newsletterData.unsubscribeConfirm.action.meta}
            href={newsletterData.unsubscribeConfirm.action.href}>
            {newsletterData.unsubscribeConfirm.action.text}
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
