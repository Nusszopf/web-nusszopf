import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'
import { Route, Link, ROUTE_TEXT_COLORS, LINK_TYPES } from '../../stories/atoms'
import { Frame } from '../../stories/templates'
import { SVGPoweredByVercelTurquoise, SVGPoweredByVercelBlue } from '../../assets'

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
              title="Impressum"
              ariaLabel="Impressum">
              Impressum
            </Route>
            <Route color={ROUTE_TEXT_COLORS.turquoise400} href="/privacy" title="Datenschutz" ariaLabel="Datenschutz">
              Datenschutz
            </Route>
          </div>
          <div className="flex justify-center h-8 mt-6 sm:mt-0">
            <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu vercel">
              <SVGPoweredByVercelTurquoise className="w-20 h-full" />
            </Link>
          </div>
        </div>
      </Frame>
    )}
    {type === FOOTER_TYPE.secondary && (
      <Frame as="footer" className="py-8 bg-blue-600 sm:py-0">
        <div className="flex items-center justify-between sm:h-24">
          <div>
            <Route color={ROUTE_TEXT_COLORS.blue200} href="/" title="Zum Nusszopf" ariaLabel="Zum Nusszopf">
              Zum Nusszopf <ArrowRight className="inline h-5 mb-px -ml-px" />
            </Route>
          </div>
          <div>
            <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu vercel">
              <SVGPoweredByVercelBlue className="w-20 h-full" />
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
