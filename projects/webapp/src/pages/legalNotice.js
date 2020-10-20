import { Page, PageBrand, NavHeader } from '../containers'
import { Frame } from 'ui-library/stories/templates'
import { Link, Text } from 'ui-library/stories/atoms'
import { legalNoticeData } from '../assets/data'

const LegalNotice = () => (
  <Page className="bg-turquoise-700 text-turquoise-300" showFooter={false}>
    <NavHeader />
    <Frame className="my-12 sm:my-20 hyphens-auto">
      <div className="max-w-2xl mx-auto">
        {legalNoticeData.list.map((section, index) => (
          <div key={`section-${index}`} className="mb-10">
            <Text as="h2" variant="titleSmSemi" className="mb-3">
              {section.title}
            </Text>
            <Text variant="textSm">{section.description}</Text>
          </div>
        ))}
        <div>
          <Text variant="textSm" className="italic">
            {legalNoticeData.source.text}{' '}
            <Link
              color="turquoise400Turquoise800"
              textVariant="textSm"
              href={legalNoticeData.source.link.href}
              ariaLabel={legalNoticeData.source.link.meta}
              title={legalNoticeData.source.link.meta}>
              {legalNoticeData.source.link.text}
            </Link>
            .
          </Text>
        </div>
      </div>
      <PageBrand className="mt-24" />
    </Frame>
  </Page>
)

export default LegalNotice
