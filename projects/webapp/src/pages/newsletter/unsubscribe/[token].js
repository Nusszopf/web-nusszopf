import PropTypes from 'prop-types'

import { Route, Link, Text } from 'ui-library/stories/atoms'
import { FramedCard } from 'ui-library/stories/templates'
import { Page, FOOTER_TYPE } from '~/components'
import { confirmNewsletterUnsubscription } from '~/utils/services/newsletter.service'
import { SVGNusszopfLogoBig } from '~/assets/logos'
import { newsletterData } from '~/assets/data'

const UnsubscribeConfirm = ({ lead }) => (
  <Page
    className="text-blue-400 bg-white sm:bg-blue-400"
    showFooter={true}
    footerType={FOOTER_TYPE.secondary}
    noindex={true}>
    <FramedCard className="bg-white">
      <Route
        variant="svg"
        className="block w-40 mx-auto"
        href="/"
        title={newsletterData.unsubscribe.logo}
        ariaLabel={newsletterData.unsubscribe.logo}>
        <SVGNusszopfLogoBig className="flex-shrink-0 w-full" />
      </Route>
      <Text as="h1" variant="textXl" className="mt-10 mb-5 sm:mt-12">
        {newsletterData.unsubscribeConfirm.heading}
        <span className="hidden sm:inline">...</span>
      </Text>
      <Text variant="textSmMedium" className="hyphens-auto">
        <span className="italic font-semibold">{lead?.email}</span> {newsletterData.unsubscribeConfirm.textA}{' '}
        {newsletterData.unsubscribeConfirm.textB}
      </Text>
      <Link
        variant="button"
        color="whiteBlue400"
        className="mt-6"
        title={newsletterData.unsubscribeConfirm.action.meta}
        ariaLabel={newsletterData.unsubscribeConfirm.action.meta}
        href={newsletterData.unsubscribeConfirm.action.href}>
        {newsletterData.unsubscribeConfirm.action.text}
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
