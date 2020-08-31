import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, LINK_TYPES } from '../../stories/atoms'
import { SVGPoweredByVercelPink, SVGPoweredByVercelTurquoise, SVGPoweredByVercelBlue } from '../../assets'

const PageBrand = ({ className, color = 'turquoise' }) => (
  <div className={classnames('flex h-8 justify-center', className)}>
    <Link
      type={LINK_TYPES.svg}
      href="https://vercel.com?utm_source=nusszopf&utm_campaign=oss"
      title="Zu Vercel"
      ariaLabel="Zu vercel">
      {color === 'pink' && <SVGPoweredByVercelPink className="w-20 h-full" />}
      {color === 'turquoise' && <SVGPoweredByVercelTurquoise className="w-20 h-full" />}
      {color === 'blue' && <SVGPoweredByVercelBlue className="w-20 h-full" />}
    </Link>
  </div>
)

PageBrand.propTypes = {
  color: PropTypes.oneOf(['pink', 'turquoise', 'blue', 'yellow', 'red']),
  className: PropTypes.string,
}

export default PageBrand
