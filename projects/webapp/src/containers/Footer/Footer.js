import PropTypes from 'prop-types'
import { Route, Link, ROUTE_TEXT_COLORS, LINK_TYPES } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'
import footerData from './footer.data'

export const FOOTER_TYPE = {
  primary: 'primary',
  secondary: 'secondary',
}

const Footer = ({ type = FOOTER_TYPE.primary }) => (
  <>
    {type === FOOTER_TYPE.primary && (
      <Frame as="footer" className="py-8 sm:py-0 bg-turquoise-700">
        <div className="flex flex-col sm:h-24 sm:justify-between sm:flex-row sm:items-center">
          <div className="flex justify-center">
            <Route
              className="mr-8 sm:mr-10"
              color={ROUTE_TEXT_COLORS.turquoise400}
              href="/legalNotice"
              title={footerData.nav.legalNotice}
              ariaLabel={footerData.nav.legalNotice}>
              {footerData.nav.legalNotice}
            </Route>
            <Route
              color={ROUTE_TEXT_COLORS.turquoise400}
              href="/privacy"
              title={footerData.nav.privacy}
              ariaLabel={footerData.nav.privacy}>
              {footerData.nav.privacy}
            </Route>
          </div>
          <div className="flex justify-center h-8 mt-6 sm:mt-0">
            <Link
              type={LINK_TYPES.svg}
              href={footerData.brand.href}
              title={footerData.brand.meta}
              ariaLabel={footerData.brand.meta}>
              <footerData.brand.logo className="w-32 h-full" />
            </Link>
          </div>
        </div>
      </Frame>
    )}
    {type === FOOTER_TYPE.secondary && (
      <Frame as="footer" className="py-8 bg-blue-600 sm:py-0">
        <div className="flex items-center justify-between sm:h-24">
          <div>
            <Route
              color={ROUTE_TEXT_COLORS.blue200}
              href="/"
              title={footerData.nav.home}
              ariaLabel={footerData.nav.home}>
              {footerData.nav.home}
            </Route>
          </div>
          <div>
            <Link
              type={LINK_TYPES.svg}
              href={footerData.brand.href}
              title={footerData.brand.meta}
              ariaLabel={footerData.brand.meta}>
              <footerData.brand.logo className="w-32 h-full" />
            </Link>
          </div>
        </div>
      </Frame>
    )}
  </>
)

Footer.propTypes = {
  type: PropTypes.oneOf(Object.values(FOOTER_TYPE)),
}

export default Footer
