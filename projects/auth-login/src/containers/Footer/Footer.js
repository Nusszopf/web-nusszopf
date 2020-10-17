import { Frame } from 'ui-library/stories/templates'
import { LinkType, Link, Text } from 'ui-library/stories/atoms'
import footerData from './footer.data'

const Footer = () => (
  <Frame as="footer" className="text-gray-500 bg-gray-100">
    <div className="flex items-center justify-center h-24 lg:justify-between">
      <div className="hidden lg:block">
        <Link
          type={LinkType.text}
          href={footerData.home.href}
          title={footerData.home.meta}
          color="gray500Transparent"
          border="small"
          textStyle="textSm"
          ariaLabel={footerData.home.meta}>
          Zum Nusszopf
        </Link>
      </div>
      <div className="flex items-center">
        <Text style="textXs" className="hidden mr-6 sm:block">
          Unterstützt von:
        </Text>
        {footerData.sponsors.map((sponsor, index) => (
          <Link
            key={`sponsor-${index}`}
            className={index && 'ml-4'}
            type={LinkType.svg}
            href={sponsor.href}
            title={sponsor.meta}
            ariaLabel={sponsor.meta}>
            <sponsor.logo className="w-32 h-full" />
          </Link>
        ))}
      </div>
    </div>
  </Frame>
)

export default Footer
