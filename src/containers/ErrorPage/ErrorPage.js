import PropTypes from 'prop-types'
import { ArrowLeft } from 'react-feather'
import { Route, Link, Text, TEXT_TYPE, LINK_TEXT_COLORS, ROUTE_TYPES, BTN_COLORS } from '../../stories/atoms'
import { FullScreenCenter } from '../../stories/templates'
import { Page } from '../../containers'

const ErrorPage = ({ statusCode }) => (
  <Page showFooter={false}>
    <FullScreenCenter className="text-yellow-400 bg-pink-600">
      <div className="max-w-xl">
        <Text as="h1" type={TEXT_TYPE.titleLg}>
          {statusCode && `${statusCode} – `}Nusszopf verknetet...
        </Text>
        <Text className="max-w-xl mt-8">
          Sorry! Es ist ein technische Problem aufgetreten. Falls der Feher erneut auftritt, melde dich bitte bei uns
          unter{' '}
          <Link
            color={LINK_TEXT_COLORS.yellow400pink500}
            href="mailto:mail@nusszopf.org?subject=Nusszopf verknetet"
            title="E-Mail an Nusszopf schreiben"
            ariaLabel="E-Mail an Nusszopf schreiben">
            mail@nusszopf.org
          </Link>
          .
        </Text>
        <Route
          type={ROUTE_TYPES.button}
          color={BTN_COLORS.yellow400pink600}
          className="mt-16"
          href="/"
          icon={ArrowLeft}
          title="Zum Nusszopf"
          ariaLabel="Zum Nusszopf">
          Zum Nusszopf
        </Route>
      </div>
    </FullScreenCenter>
  </Page>
)

ErrorPage.propTypes = {
  statusCode: PropTypes.string,
}

export default ErrorPage
