import { Page, NewsletterSection } from '../containers'
import { Button, Link, Text, LINK_TYPES, TEXT_TYPE, LINK_TEXT_COLORS, BTN_COLORS } from '../stories/atoms'
import { Frame } from '../stories/templates'
import { headerData, hintData, featuresData, bmbfData, fellowsData } from '../assets/data'

const Index = () => {
  const scrollIntoView = id => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <Page>
      <Frame as="header" className="bg-white">
        <div className="flex flex-col pt-12 pb-12 sm:pt-20 sm:pb-20 lg:flex-row xl:pt-32 xl:pb-32">
          <div className="lg:w-1/2 lg:pr-8 lg:self-center">
            <headerData.logo.component
              className="w-3/4 mx-auto lg:w-full xl:w-4/5"
              title={headerData.logo.title}
              aria-label={headerData.logo.ariaLabel}
            />
          </div>
          <div className="mt-8 sm:mt-16 lg:mt-0 lg:pl-8 lg:w-1/2 lg:self-center">
            <Text as="h1" type={TEXT_TYPE.titleLg} className="max-w-md text-gray-600">
              {headerData.title}
            </Text>
            <Text as="h2" type={TEXT_TYPE.textLg} className="mt-5 text-gray-600">
              {headerData.subtitle}
            </Text>
          </div>
        </div>
      </Frame>
      <Frame className="pt-12 pb-16 text-yellow-700 bg-yellow-400 sm:pt-16 sm:pb-18">
        <div className="flex flex-col max-w-2xl mx-auto xl:max-w-3xl">
          <Text type={TEXT_TYPE.textXl}>{hintData.message}</Text>
          <Button
            color={BTN_COLORS.yellow400yellow700}
            onClick={() => scrollIntoView('newsletter')}
            label={hintData.action}
            className="self-center mt-10 sm:mt-12"
          />
        </div>
      </Frame>
      <Frame className="pt-12 pb-16 text-pink-600 bg-turquoise-400 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
        <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
          {featuresData.heading}
        </Text>
        <div className="flex flex-wrap">
          <div className="mb-8 sm:pr-4 xl:pr-10 lg:pr-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              {featuresData.list[0].title}
            </Text>
            <Text>{featuresData.list[0].description}</Text>
          </div>
          <div className="mb-8 sm:pl-4 lg:pl-3 lg:pr-3 xl:pl-5 xl:pr-5 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              {featuresData.list[1].title}
            </Text>
            <Text>{featuresData.list[1].description}</Text>
          </div>
          <div className="mb-8 sm:pr-4 lg:pr-0 xl:pl-10 lg:pl-6 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              {featuresData.list[2].title}
            </Text>
            <Text>{featuresData.list[2].description}</Text>
          </div>
          <div className="mb-8 sm:pl-4 lg:mb-0 lg:pl-0 lg:pr-6 xl:pr-10 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              {featuresData.list[3].title}
            </Text>
            <Text>{featuresData.list[3].description}</Text>
          </div>
          <div className="mb-8 sm:mb-0 sm:pr-4 lg:pr-3 lg:pl-3 xl:pl-5 xl:pr-5 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              {featuresData.list[4].title}
            </Text>
            <Text>{featuresData.list[4].description}</Text>
          </div>
          <div className="sm:pl-4 lg:pl-6 xl:pl-10 sm:w-1/2 lg:w-1/3">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              {featuresData.list[5].title}
            </Text>
            <Text>{featuresData.list[5].description}</Text>
          </div>
        </div>
      </Frame>
      <Frame id="bmbf" className="pt-12 pb-16 text-yellow-100 bg-red-400 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
        <div className="lg:flex">
          <div className="lg:w-2/3 xl:w-7/12">
            <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-8 xl:mb-10">
              {bmbfData.heading}
            </Text>
            <Text className="mb-4 sm:mb-5">{bmbfData.description}</Text>
            <Text>
              {bmbfData.infoText}{' '}
              <Link
                href={bmbfData.infoLink.href}
                title={bmbfData.infoLink.meta}
                color={LINK_TEXT_COLORS.yellow100red500}
                ariaLabel={bmbfData.infoLink.meta}>
                {bmbfData.infoLink.text}
              </Link>
            </Text>
          </div>
          <div className="mt-16 lg:ml-4 xl:ml-0 lg:mt-4 lg:self-center lg:w-1/3 xl:w-5/12">
            <Link
              className="block w-48 mx-auto lg:w-56 xl:w-64"
              type={LINK_TYPES.svg}
              href={bmbfData.host.href}
              title={bmbfData.host.meta}
              ariaLabel={bmbfData.host.meta}>
              <bmbfData.host.logo />
            </Link>
          </div>
        </div>
      </Frame>
      <Frame className="pt-12 pb-16 text-blue-700 bg-pink-400 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
        <Text as="h3" type={TEXT_TYPE.titleMd} className="mb-6">
          {fellowsData.heading}
        </Text>
        <div className="flex flex-wrap items-center mb-6 -ml-4">
          {fellowsData.list.map((fellow, index) => (
            <Link
              key={`fellow-${index}`}
              type={LINK_TYPES.svg}
              href={fellow.href}
              title={fellow.meta}
              ariaLabel={fellow.meta}>
              <fellow.logo className="w-32 p-4" />
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap mb-10 sm:mb-12 xl:mb-16">
          <div className="mb-8 lg:mb-0 lg:pr-6 lg:w-1/3 xl:pr-10">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Werde Sponsor:in!
            </Text>
            <Text>
              Der Nusszopf ist ein Non-Profit-Herzensprojekt: Unterstütze ihn, damit er dich unterstützen kann!
            </Text>
          </div>
          <div className="mb-8 lg:pl-3 lg:mb-0 lg:pr-3 lg:w-1/3 xl:pr-5 xl:pl-5">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Werde Partner:in!
            </Text>
            <Text>
              Zusammen mit passenden Vereinen, Unternehmen und anderen Organi&shy;sationen wollen wir ein
              Partner:innen&shy;netzwerk aufbauen.
            </Text>
          </div>
          <div className="lg:pl-6 lg:mb-0 lg:w-1/3 xl:pl-10">
            <Text as="h4" type={TEXT_TYPE.titleSm}>
              Gib´ uns Feedback!
            </Text>
            <Text className="hyphens-auto">
              Teile deine Ideen und Wünsche mit uns, damit wir den Nusszopf weiter verbessern und an deine Bedürfnisse
              anpassen können.
            </Text>
          </div>
        </div>
        <div className="w-full text-center">
          <Link
            type={LINK_TYPES.button}
            color={BTN_COLORS.pink400blue700}
            title={fellowsData.action.meta}
            ariaLabel={fellowsData.action.meta}
            href={fellowsData.action.href}>
            {fellowsData.action.text}
          </Link>
        </div>
      </Frame>
      <NewsletterSection />
    </Page>
  )
}

export default Index
