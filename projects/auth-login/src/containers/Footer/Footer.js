import { Link, Text } from 'ui-library/stories/atoms'
import { Footer as UIFooter } from 'ui-library/stories/organisims'
import footerData from './footer.data'

const Footer = () => (
  <UIFooter variant="col" className="text-gray-500 bg-gray-200">
    <UIFooter.LeftElement>
      <Link
        className="hidden lg:block"
        variant="text"
        href={footerData.href}
        title={footerData.meta}
        color="gray500Transparent"
        border="small"
        textVariant="textSm"
        ariaLabel={footerData.meta}>
        {footerData.meta}
      </Link>
      <Text variant="textXs" className="block sm:hidden">
        {footerData.supportedBy}
      </Text>
    </UIFooter.LeftElement>
    <UIFooter.RightElement className="w-full lg:w-auto" sponsors={['auth0', 'vercel']}>
      <Text variant="textXs" className="hidden sm:block sm:mr-6">
        {footerData.supportedBy}
      </Text>
    </UIFooter.RightElement>
  </UIFooter>
)

export default Footer
