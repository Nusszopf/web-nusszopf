import { Frame } from 'ui-library/stories/templates'
import { Link, Text } from 'ui-library/stories/atoms'
import { Page } from '~/components'
import { legalNoticeData as cms } from '~/assets/data'

const LegalNotice = () => (
  <Page
    className="bg-steel-200 text-steel-800"
    footer={{ className: 'bg-steel-200' }}
    back="/"
    navHeader={{ visible: true, goBackUri: '/' }}>
    <Frame className="my-12 sm:my-20 hyphens-auto">
      <div className="max-w-2xl mx-auto">
        <Text as="h1" variant="titleMd" className="mb-8">
          {cms.title}
        </Text>
        {cms.list.map((section, index) => (
          <div key={`section-${index}`} className="mb-10">
            <Text as="h2" variant="titleSmSemi" className="mb-3">
              {section.title}
            </Text>
            <Text variant="textSm">{section.description}</Text>
          </div>
        ))}
        <div>
          <Text variant="textSm" className="italic">
            {cms.source.text}{' '}
            <Link
              textVariant="textSm"
              href={cms.source.link.href}
              ariaLabel={cms.source.link.meta}
              title={cms.source.link.meta}>
              {cms.source.link.text}
            </Link>
            .
          </Text>
        </div>
      </div>
    </Frame>
  </Page>
)

export default LegalNotice
