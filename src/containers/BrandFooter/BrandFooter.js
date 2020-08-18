import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import classnames from 'classnames'
import { Route, Link, LINK_TYPES, ROUTE_TYPES } from '../../stories/atoms'
import { Frame } from '../../stories/templates'

const BrandFooter = ({ className, color }) => (
  <Frame as="footer" className={classnames('bg-turquoise-700', className)}>
    <div className="flex justify-center">
      <Route type={ROUTE_TYPES.svg} href="/" title="Nusszopf" ariaLabel="nusszopf">
        <SVG className="w-6 mr-6 sm:mr-8" src="/images/logos/nusszopf-logo-small.svg" />
      </Route>
      <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu vercel">
        <SVG className="w-24" src="/images/logos/powered-by-vercel-turquoise.svg" />
      </Link>
    </div>
  </Frame>
)

BrandFooter.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
}

export default BrandFooter
