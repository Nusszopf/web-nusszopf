import PropTypes from 'prop-types'

import { Route, Text } from 'ui-library/stories/atoms'
import { FramedCard } from 'ui-library/stories/templates'
import { Page } from '~/components'
import { confirmNewsletterSubscription } from '~/utils/services/newsletter.service'
import { SVGNusszopfLogoBig } from '~/assets/logos'
import { newsletterData as cms } from '~/assets/data'

const SubscribeConfirm = ({ lead }) => (
  <Page
    className="bg-white sm:bg-steel-100"
    navHeader={{ visible: true }}
    footer={{ className: 'bg-white sm:bg-steel-100' }}
    noindex={true}>
    <FramedCard className="bg-white text-steel-700">
      <Route variant="svg" href="/" title={cms.unsubscribe.logo} ariaLabel={cms.unsubscribe.logo}>
        <SVGNusszopfLogoBig className="h-full w-36" />
      </Route>
      <Text as="h1" variant="textXl" className="mt-10 mb-5 sm:mt-12">
        {cms.subscribeConfirm.heading}
      </Text>
      <Text variant="textSmMedium" className="hyphens-auto">
        <span className="italic font-semibold">{lead?.email}</span> {cms.subscribeConfirm.textA}{' '}
        {cms.subscribeConfirm.textB}
      </Text>
      <Route
        variant="button"
        className="mt-6 bg-steel-100"
        title={cms.subscribeConfirm.action.meta}
        ariaLabel={cms.subscribeConfirm.action.meta}
        href="/">
        {cms.subscribeConfirm.action.text}
      </Route>
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
