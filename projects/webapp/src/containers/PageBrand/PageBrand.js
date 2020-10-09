import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link, LINK_TYPES } from 'ui-library/stories/atoms'
import pageBrandData from './pageBrand.data'

const PageBrand = ({ className }) => (
  <div className={classnames('flex h-8 justify-center', className)}>
    <Link
      type={LINK_TYPES.svg}
      href="https://vercel.com?utm_source=nusszopf&utm_campaign=oss"
      title={pageBrandData.meta}
      ariaLabel={pageBrandData.meta}>
      <pageBrandData.logo className="w-32 h-full" />
    </Link>
  </div>
)

PageBrand.propTypes = {
  className: PropTypes.string,
}

export default PageBrand
