import { Frame } from 'ui-library/stories/templates'
import { Link, Text } from 'ui-library/stories/atoms'
import { Page, PageBrand, NavHeader } from '~/components'
import { privacyData } from '~/assets/data'

const Privacy = () => (
  <Page className="bg-turquoise-700 text-turquoise-300" showFooter={false}>
    <NavHeader />
    <Frame className="my-12 sm:my-20 hyphens-auto">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Text as="h2" variant="titleSmSemi" className="mb-3">
            {privacyData[0].title}
          </Text>
          <Text variant="textSm" className="mb-3">
            {privacyData[0].description[0]}
          </Text>
          <Text variant="textSm">{privacyData[0].description[1]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h2" variant="titleSmSemi" className="mb-3">
            {privacyData[1].title}
          </Text>
          <Text variant="textSm">{privacyData[1].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h2" variant="titleSmSemi" className="mb-3">
            {privacyData[2].title}
          </Text>
          <Text variant="textSm">
            {privacyData[2].description[0]}{' '}
            <Link
              textVariant="textSm"
              href={privacyData[2].description[1].href}
              title={privacyData[2].description[1].meta}
              ariaLabel={privacyData[2].description[1].meta}>
              {privacyData[2].description[1].text}
            </Link>
            .
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {privacyData[3].title}
          </Text>
          <Text variant="textSm">{privacyData[3].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {privacyData[4].title}
          </Text>
          <Text variant="textSm">{privacyData[4].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {privacyData[5].title}
          </Text>
          <Text variant="textSm" className="mb-3">
            {privacyData[5].description[0]}
          </Text>
          <ul className="pl-6 mb-3 text-lg font-normal list-disc">
            {privacyData[5].description[1].map((data, index) => (
              <li key={`log-${index}`}>{data}</li>
            ))}
          </ul>
          <Text variant="textSm">{privacyData[5].description[2]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {privacyData[6].title}
          </Text>
          <Text variant="textSm">{privacyData[6].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {privacyData[7].title}
          </Text>
          <Text variant="textSm">
            <Link
              textVariant="textSm"
              href={privacyData[7].description[0].href}
              title={privacyData[7].description[0].meta}
              ariaLabel={privacyData[7].description[0].meta}>
              {privacyData[7].description[0].text}
            </Link>{' '}
            {privacyData[7].description[1]}
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {privacyData[8].title}
          </Text>
          <Text variant="textSm" className="mb-3">
            {privacyData[8].description[0]}
          </Text>
        </div>
        <div>
          <Text variant="textSm" className="italic">
            {privacyData[9].text}{' '}
            <Link
              textVariant="textSm"
              href={privacyData[9].link.href}
              ariaLabel={privacyData[9].link.meta}
              title={privacyData[9].link.meta}>
              {privacyData[9].link.text}
            </Link>
            .
          </Text>
        </div>
      </div>
      <PageBrand className="mt-16 sm:mt-24" />
    </Frame>
  </Page>
)

export default Privacy
