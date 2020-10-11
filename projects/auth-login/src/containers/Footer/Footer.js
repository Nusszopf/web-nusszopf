import { Frame } from 'ui-library/stories/templates'
import { LINK_TYPES, Link } from 'ui-library/stories/atoms'
import footerData from './footer.data'

const Footer = () => (
  <Frame as="footer" className="py-8 bg-gray-100 sm:py-0">
    <div className="flex items-center justify-between sm:h-24">
      <div>
        <Link
          type={LINK_TYPES.text}
          href={footerData.home.href}
          title={footerData.home.meta}
          ariaLabel={footerData.home.meta}>
          Zum Nusszopf
        </Link>
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
)

export default Footer
