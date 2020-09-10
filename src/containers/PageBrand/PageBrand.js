import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, LINK_TYPES } from '../../stories/atoms'
import { SVGPoweredByVercel } from '../../assets'

const PageBrand = ({ className }) => (
  <div className={classnames('flex h-8 justify-center', className)}>
    <Link
      type={LINK_TYPES.svg}
      href="https://vercel.com?utm_source=nusszopf&utm_campaign=oss"
      title="Zu Vercel"
      ariaLabel="Zu vercel">
      <SVGPoweredByVercel className="w-20 h-full" />
    </Link>
  </div>
)

PageBrand.propTypes = {
  className: PropTypes.string,
}

export default PageBrand
