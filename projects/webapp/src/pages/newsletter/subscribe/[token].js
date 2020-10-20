import PropTypes from 'prop-types'
import { Page, FOOTER_TYPE } from '../../../containers'
import { Route, Text } from 'ui-library/stories/atoms'
import { FrameFullCenter } from 'ui-library/stories/templates'
import { confirmNewsletterSubscription } from '../../../utils/services/newsletter.service'
import { SVGNusszopfBigYellowBlue } from '../../../assets/logos'
import { newsletterData } from '../../../assets/data'

const SubscribeConfirm = ({ lead }) => (
  <Page className="text-yellow-300 bg-blue-400" showFooter={true} footerType={FOOTER_TYPE.secondary} noindex={true}>
    <FrameFullCenter fullScreen={false}>
      <div className="sm:text-center">
        <Route
          variant="svg"
          className="block w-40 mx-auto mb-12 sm:w-48 sm:mb-16"
          href="/"
          title={newsletterData.subscribeConfirm.logo}
          ariaLabel={newsletterData.subscribeConfirm.logo}>
          <SVGNusszopfBigYellowBlue className="flex-shrink-0 w-full" />
        </Route>
        <Text as="h1" variant="titleMd" className="mb-8">
          {newsletterData.subscribeConfirm.heading}
        </Text>
        <Text className="hyphens-auto">
          <span className="italic">{lead?.email}</span> {newsletterData.subscribeConfirm.textA}
          <span className="block mt-2">{newsletterData.subscribeConfirm.textB}</span>
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
