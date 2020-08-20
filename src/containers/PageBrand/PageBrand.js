import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Route, Link, LINK_TYPES, ROUTE_TYPES } from '../../stories/atoms'
import {
  SVGNusszopfLogoSmallPink,
  SVGPoweredByVercelPink,
  SVGNusszopfLogoSmallTurquoise,
  SVGPoweredByVercelTurquoise,
} from '../../assets'

const PageBrand = ({ className, color = 'turquoise' }) => (
  <div className={classnames('flex h-8 justify-center', className)}>
    <Route type={ROUTE_TYPES.svg} href="/" title="Nusszopf" ariaLabel="nusszopf">
      {color === 'pink' && <SVGNusszopfLogoSmallPink className="w-6 mr-6 sm:mr-8" />}
      {color === 'turquoise' && <SVGNusszopfLogoSmallTurquoise className="w-6 mr-6 sm:mr-8" />}
    </Route>
    <Link type={LINK_TYPES.svg} href="https://vercel.com/" title="Zu Vercel" ariaLabel="Zu vercel">
      {color === 'pink' && <SVGPoweredByVercelPink className="w-20 h-full" />}
      {color === 'turquoise' && <SVGPoweredByVercelTurquoise className="w-20 h-full" />}
    </Link>
  </div>
)

PageBrand.propTypes = {
  color: PropTypes.oneOf(['pink', 'turquoise', 'blue', 'yellow', 'red']),
  className: PropTypes.string,
}

export default PageBrand
