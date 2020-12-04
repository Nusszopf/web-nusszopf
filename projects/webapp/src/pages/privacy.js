import { Frame } from 'ui-library/stories/templates'
import { Link, Text } from 'ui-library/stories/atoms'
import { Page } from '~/components'
import { privacyData as cms } from '~/assets/data'

const Privacy = () => (
  <Page
    className="bg-steel-200 text-steel-800"
    footer={{ className: 'bg-steel-200' }}
    navHeader={{ visible: process.env.ENV !== 'production', goBackUri: '/' }}>
    <Frame className="my-12 sm:my-20 hyphens-auto">
      <div className="max-w-2xl mx-auto">
        <Text as="h1" variant="titleMd" className="mb-8">
          {cms.title}
        </Text>
        <div className="mb-10">
          <Text as="h2" variant="titleSmSemi" className="mb-3">
            {cms.list[0].title}
          </Text>
          <Text variant="textSm" className="mb-3">
            {cms.list[0].description[0]}
          </Text>
          <Text variant="textSm">{cms.list[0].description[1]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h2" variant="titleSmSemi" className="mb-3">
            {cms.list[1].title}
          </Text>
          <Text variant="textSm">{cms.list[1].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h2" variant="titleSmSemi" className="mb-3">
            {cms.list[2].title}
          </Text>
          <Text variant="textSm">
            {cms.list[2].description[0]}{' '}
            <Link
              textVariant="textSm"
              href={cms.list[2].description[1].href}
              title={cms.list[2].description[1].meta}
              ariaLabel={cms.list[2].description[1].meta}>
              {cms.list[2].description[1].text}
            </Link>
            .
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {cms.list[3].title}
          </Text>
          <Text variant="textSm">{cms.list[3].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {cms.list[4].title}
          </Text>
          <Text variant="textSm">{cms.list[4].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {cms.list[5].title}
          </Text>
          <Text variant="textSm" className="mb-3">
            {cms.list[5].description[0]}
          </Text>
          <ul className="pl-6 mb-3 text-lg font-normal list-disc">
            {cms.list[5].description[1].map((data, index) => (
              <li key={`log-${index}`}>{data}</li>
            ))}
          </ul>
          <Text variant="textSm">{cms.list[5].description[2]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {cms.list[6].title}
          </Text>
          <Text variant="textSm">{cms.list[6].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {cms.list[7].title}
          </Text>
          <Text variant="textSm">
            <Link
              textVariant="textSm"
              href={cms.list[7].description[0].href}
              title={cms.list[7].description[0].meta}
              ariaLabel={cms.list[7].description[0].meta}>
              {cms.list[7].description[0].text}
            </Link>{' '}
            {cms.list[7].description[1]}
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" variant="titleSmSemi" className="mb-3">
            {cms.list[8].title}
          </Text>
          <Text variant="textSm" className="mb-3">
            {cms.list[8].description[0]}
          </Text>
        </div>
        <div>
          <Text variant="textSm" className="italic">
            {cms.list[9].text}{' '}
            <Link
              textVariant="textSm"
              href={cms.list[9].link.href}
              ariaLabel={cms.list[9].link.meta}
              title={cms.list[9].link.meta}>
              {cms.list[9].link.text}
            </Link>
            .
          </Text>
        </div>
      </div>
    </Frame>
  </Page>
)

export default Privacy
