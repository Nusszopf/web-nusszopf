import { Page, PageBrand, NavHeader } from '../containers'
import { Frame } from 'ui-library/stories/templates'
import { Link, Text, TEXT_TYPE, LINK_TEXT_COLORS } from 'ui-library/stories/atoms'
import { privacyData } from '../assets/data'

const Privacy = () => (
  <Page className="bg-turquoise-700 text-turquoise-300" showFooter={false}>
    <NavHeader />
    <Frame className="my-12 sm:my-20 hyphens-auto">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[0].title}
          </Text>
          <Text type={TEXT_TYPE.textSm} className="mb-3">
            {privacyData[0].description[0]}
          </Text>
          <Text type={TEXT_TYPE.textSm}>{privacyData[0].description[1]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[1].title}
          </Text>
          <Text type={TEXT_TYPE.textSm}>{privacyData[1].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h2" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[2].title}
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            {privacyData[2].description[0]}{' '}
            <Link
              color={LINK_TEXT_COLORS.turquoise400Turquoise800}
              href={privacyData[2].description[1].href}
              title={privacyData[2].description[1].meta}
              ariaLabel={privacyData[2].description[1].meta}>
              {privacyData[2].description[1].text}
            </Link>
            .
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[3].title}
          </Text>
          <Text type={TEXT_TYPE.textSm}>{privacyData[3].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[4].title}
          </Text>
          <Text type={TEXT_TYPE.textSm}>{privacyData[4].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[5].title}
          </Text>
          <Text type={TEXT_TYPE.textSm} className="mb-3">
            {privacyData[5].description[0]}
          </Text>
          <ul className="pl-6 mb-3 text-lg font-normal list-disc">
            {privacyData[5].description[1].map((data, index) => (
              <li key={`log-${index}`}>{data}</li>
            ))}
          </ul>
          <Text type={TEXT_TYPE.textSm}>{privacyData[5].description[2]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[6].title}
          </Text>
          <Text type={TEXT_TYPE.textSm}>{privacyData[6].description[0]}</Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[7].title}
          </Text>
          <Text type={TEXT_TYPE.textSm}>
            <Link
              color={LINK_TEXT_COLORS.turquoise400Turquoise800}
              href={privacyData[7].description[0].href}
              title={privacyData[7].description[0].meta}
              ariaLabel={privacyData[7].description[0].meta}>
              {privacyData[7].description[0].text}
            </Link>{' '}
            {privacyData[7].description[1]}
          </Text>
        </div>
        <div className="mb-10">
          <Text as="h3" type={TEXT_TYPE.titleSmSemi} className="mb-3">
            {privacyData[8].title}
          </Text>
          <Text type={TEXT_TYPE.textSm} className="mb-3">
            {privacyData[8].description[0]}
          </Text>
        </div>
        <div>
          <Text type={TEXT_TYPE.textSm} className="italic">
            {privacyData[9].text}{' '}
            <Link
              color={LINK_TEXT_COLORS.turquoise400Turquoise800}
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
