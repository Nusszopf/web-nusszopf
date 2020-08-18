import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import classnames from 'classnames'
import { Route, Link, LINK_TYPES, ROUTE_TYPES } from '../../stories/atoms'

const PageBrand = ({ className, color = 'turquoise' }) => (
  <div className={classnames('flex justify-center', className)}>
    <Route type={ROUTE_TYPES.svg} href="/" title="Nusszopf" ariaLabel="nusszopf">
      <SVG className="w-6 mr-6 sm:mr-8" src={`/images/logos/nusszopf-logo-small-${color}.svg`} />
    </Route>
    <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu vercel">
      <SVG className="w-24" src={`/images/logos/powered-by-vercel-${color}.svg`} />
    </Link>
  </div>
)

PageBrand.propTypes = {
  color: PropTypes.oneOf(['pink', 'turquoise', 'blue', 'yellow', 'red']),
  className: PropTypes.string,
}

export default PageBrand
