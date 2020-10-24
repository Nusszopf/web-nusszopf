import PropTypes from 'prop-types'
import { Route, Link, Text } from 'ui-library/stories/atoms'
import { FrameFullCenter } from 'ui-library/stories/templates'
import { Page, PageBrand } from '../../containers'
import errorData from './error.data'

const ErrorPage = ({ statusCode }) => (
  <Page showFooter={false}>
    <FrameFullCenter className="text-yellow-300 bg-pink-600" brand={<PageBrand className="mt-12 " />}>
      <div className="max-w-xl mx-auto">
        <Text as="h1" variant="titleLg" className="sm:text-center">
          {statusCode && `${statusCode} – `}
          {errorData.heading}
        </Text>
        <Text className="mt-8">
          {errorData.message.text}{' '}
          <Link
            color="yellow300Pink700"
            href={errorData.message.link.href}
            title={errorData.message.link.meta}
            ariaLabel={errorData.message.link.meta}>
            {errorData.message.link.text}
          </Link>
          .
        </Text>
        <div className="text-center">
          <Route
            variant="button"
            color="pink600Yellow300"
            size="large"
            className="mt-16"
            href="/"
            title={errorData.nav.home}
            ariaLabel={errorData.nav.home}>
            {errorData.nav.home}
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
