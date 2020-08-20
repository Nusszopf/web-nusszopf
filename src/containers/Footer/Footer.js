import SVG from 'react-inlinesvg'
import { Route, Link, ROUTE_TEXT_COLORS, LINK_TYPES, ROUTE_TYPES } from '../../stories/atoms'
import { Frame } from '../../stories/templates'

const Footer = () => (
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
        <Route
          className="mr-8 sm:mr-10"
          color={ROUTE_TEXT_COLORS.turquoise400}
          href="/privacy"
          title="Datenschutz"
          ariaLabel="Datenschutz">
          Datenschutz
        </Route>
      </div>
      <div className="flex justify-center h-8 mt-6 sm:mt-0">
        <Route type={ROUTE_TYPES.svg} href="/" title="Nusszopf" ariaLabel="nusszopf">
          <SVG className="w-6 mr-6 sm:mr-8" src="/images/logos/nusszopf-logo-small-turquoise.svg" />
        </Route>
        <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu vercel">
          <SVG className="w-24" src="/images/logos/powered-by-vercel-turquoise.svg" />
        </Link>
      </div>
    </div>
  </Frame>
)

export default Footer
