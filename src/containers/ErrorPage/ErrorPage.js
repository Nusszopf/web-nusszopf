import PropTypes from 'prop-types'
import { Route, Link, Text, TEXT_TYPE, LINK_TEXT_COLORS, ROUTE_TYPES, BTN_COLORS } from '../../stories/atoms'
import { FrameFullCenter } from '../../stories/templates'
import { Page, PageBrand } from '../../containers'

const ErrorPage = ({ statusCode }) => (
  <Page showFooter={false}>
    <FrameFullCenter className="text-yellow-300 bg-pink-600" brand={<PageBrand className="mt-12 " color="pink" />}>
      <div className="max-w-xl mx-auto">
        <Text as="h1" type={TEXT_TYPE.titleLg} className="sm:text-center">
          {statusCode && `${statusCode} – `}Nusszopf verknetet...
        </Text>
        <Text className="mt-8">
          Sorry, es ist ein technisches Problem aufgetreten. Falls der Fehler erneut auftritt, melde dich bitte unter{' '}
          <Link
            color={LINK_TEXT_COLORS.yellow300pink700}
            href="mailto:mail@nusszopf.org?subject=Nusszopf verknetet"
            title="E-Mail an Nusszopf schreiben"
            ariaLabel="E-Mail an Nusszopf schreiben">
            mail@nusszopf.org
          </Link>
          .
        </Text>
        <div className="text-center">
          <Route
            type={ROUTE_TYPES.button}
            color={BTN_COLORS.pink600yellow300}
            className="mt-16"
            href="/"
            title="Zum Nusszopf"
            ariaLabel="Zum Nusszopf">
            Zum Nusszopf
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
