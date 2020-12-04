import PropTypes from 'prop-types'

import { Route, Text } from 'ui-library/stories/atoms'
import { FramedCard } from 'ui-library/stories/templates'
import { Page } from '~/components'
import { confirmNewsletterSubscription } from '~/utils/services/newsletter.service'
import { SVGNusszopfLogoBig } from '~/assets/logos'
import { newsletterData } from '~/assets/data'

const SubscribeConfirm = ({ lead }) => (
  <Page
    className="bg-blue-300 text-steel-700"
    navHeader={{ visible: process.env.ENV !== 'production', goBackUri: '/' }}
    footer={{ className: 'bg-blue-300' }}
    noindex={true}>
    <FramedCard className="bg-white">
      <Route
        variant="svg"
        className="block mx-auto mt-6 w-36 sm:mt-0"
        href="/"
        title={newsletterData.unsubscribe.logo}
        ariaLabel={newsletterData.unsubscribe.logo}>
        <SVGNusszopfLogoBig className="flex-shrink-0 w-full" />
      </Route>
      <Text as="h1" variant="textXl" className="mt-10 mb-5 sm:mt-12">
        {newsletterData.subscribeConfirm.heading}
      </Text>
      <Text variant="textSmMedium" className="hyphens-auto">
        <span className="italic font-semibold">{lead?.email}</span> {newsletterData.subscribeConfirm.textA}{' '}
        {newsletterData.subscribeConfirm.textB}
      </Text>
    </FramedCard>
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
