import PropTypes from 'prop-types'
import { Route, Link, Text } from 'ui-library/stories/atoms'
import { FrameFullCenter } from 'ui-library/stories/templates'
import { Page } from '~/components'
import { errorData as cms } from '~/assets/data'

const ErrorPage = ({ statusCode }) => (
  <Page footer={{ className: 'bg-warning-200' }}>
    <FrameFullCenter className="text-stone-800 bg-warning-200">
      <div className="max-w-xl mx-auto">
        <Text as="h1" variant="titleLg" className="sm:text-center">
          {statusCode && `${statusCode} – `}
          {cms.heading}
        </Text>
        <Text className="mt-8">
          {cms.message.text}{' '}
          <Link
            color="warning"
            href={cms.message.link.href}
            title={cms.message.link.meta}
            ariaLabel={cms.message.link.meta}>
            {cms.message.link.text}
          </Link>
          .
        </Text>
        <div className="text-center">
          <Route
            variant="button"
            size="large"
            className="mt-16 bg-warning-300"
            href="/"
            title={cms.nav.home}
            ariaLabel={cms.nav.home}>
            {cms.nav.home}
          </Route>
        </div>
      </div>
    </FrameFullCenter>
  </Page>
)

ErrorPage.propTypes = {
  statusCode: PropTypes.string,
}

export default ErrorPage
