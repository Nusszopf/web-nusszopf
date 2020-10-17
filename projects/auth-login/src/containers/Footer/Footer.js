import { Frame } from 'ui-library/stories/templates'
import { LinkType, Link, Text } from 'ui-library/stories/atoms'
import footerData from './footer.data'

const Footer = () => (
  <Frame as="footer" className="py-8 bg-gray-100 sm:py-0">
    <div className="flex items-center justify-between sm:h-24">
      <div>
        <Link
          type={LinkType.text}
          href={footerData.home.href}
          title={footerData.home.meta}
          color="gray600transparent"
          border="small"
          textStyle="textSm"
          ariaLabel={footerData.home.meta}>
          Zum Nusszopf
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Text style="textSm">Unterstützt von:</Text>
        {footerData.sponsors.map((sponsor, index) => (
          <Link
            key={`sponsor-${index}`}
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
