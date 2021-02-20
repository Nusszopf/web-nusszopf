import { Frame } from 'ui-library/stories/templates'
import { Link, Text } from 'ui-library/stories/atoms'
import { withAuth } from '~/utils/hoc'
import { Page } from '~/components'
import { legalPolicyData as cms } from '~/assets/data'

const LegalPolicy = () => (
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
        <div className="mb-10">
          <Text variant="textSm">{cms.info[0]}</Text>
          <Text variant="textSm" className="mt-3">
            {cms.info[1]}
          </Text>
        </div>
        <Text as="h2" variant="textLgSemi" className="mb-8">
          {cms.subtitle}
        </Text>
        {cms.list.map((section, index) => (
          <div key={`section-${index}`} className="mb-10">
            <Text as="h3" variant="titleSmSemi" className="mb-3">
              {section.title}
            </Text>
            {typeof section.description === 'string' ? (
              <Text variant="textSm">{section.description}</Text>
            ) : (
              <ol className="pl-4 list-decimal">
                {section.description.map((text, subIndex) => (
                  <>
                    {typeof text === 'string' ? (
                      <li key={`${index}-${subIndex}`} className="mt-3">
                        <Text as="span" variant="textSm">
                          {text}
                        </Text>
                      </li>
                    ) : (
                      <ul className="pl-5 list-disc">
                        {text.map((item, index) => (
                          <li key={`section-${index}`} className="mt-1">
                            <Text as="span" variant="textSm">
                              {item}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ))}
              </ol>
            )}
          </div>
        ))}
        <div>
          <Text variant="textSm" className="italic">
            {cms.source[0]}{' '}
            <Link
              textVariant="textSm"
              href={cms.source[1].href}
              ariaLabel={cms.source[1].meta}
              title={cms.source[1].meta}>
              {cms.source[1].text}
            </Link>
            {', '}
            <Link
              textVariant="textSm"
              href={cms.source[2].href}
              ariaLabel={cms.source[2].meta}
              title={cms.source[2].meta}>
              {cms.source[2].text}
            </Link>
            .
          </Text>
        </div>
      </div>
    </Frame>
  </Page>
)

export default withAuth(LegalPolicy, { isAuthRequired: false })
