import PropTypes from 'prop-types'

import { Route, Link, Text } from 'ui-library/stories/atoms'
import { FramedCard } from 'ui-library/stories/templates'
import { Page } from '~/components'
import { confirmNewsletterUnsubscription } from '~/utils/services/newsletter.service'
import { withAuth } from '~/utils/hoc'
import { SVGNusszopfLogoBig } from '~/assets/logos'
import { newsletterData as cms } from '~/assets/data'

const UnsubscribeConfirm = ({ lead }) => (
  <Page
    className="bg-white sm:bg-steel-100"
    navHeader={{ visible: true }}
    footer={{ className: 'bg-white sm:bg-steel-100' }}
    noindex={true}>
    <FramedCard className="bg-white text-steel-700">
      <Route variant="svg" href="/" title={cms.unsubscribe.logo} ariaLabel={cms.unsubscribe.logo}>
        <SVGNusszopfLogoBig className="h-full w-36" />
      </Route>
      <Text as="h1" variant="textLgSemi" className="mt-10 mb-5 sm:mt-12">
        {cms.unsubscribeConfirm.heading}
        <span className="hidden sm:inline">...</span>
      </Text>
      <Text variant="textSmMedium" className="hyphens-auto">
        <span className="italic font-semibold">{lead?.email}</span> {cms.unsubscribeConfirm.textA}{' '}
        {cms.unsubscribeConfirm.textB}
      </Text>
      <Link
        variant="button"
        className="mt-6 bg-steel-100"
        title={cms.unsubscribeConfirm.action.meta}
        ariaLabel={cms.unsubscribeConfirm.action.meta}
        href={cms.unsubscribeConfirm.action.href}>
        {cms.unsubscribeConfirm.action.text}
      </Link>
    </FramedCard>
  </Page>
)

UnsubscribeConfirm.propTypes = {
  lead: PropTypes.objectOf({
    email: PropTypes.string,
    name: PropTypes.string,
  }),
}

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

export default withAuth(UnsubscribeConfirm, { isAuthRequired: false })
