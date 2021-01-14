import classnames from 'classnames'

import { NewsletterSection, CarouselSection, HowToSection } from '../containers'
import { Link, Text } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'
import { Page } from '~/components'
import { headerData, featuresData, contestData, fellowsData } from '~/assets/data'

const Index = () => (
  <Page
    navHeader={{ visible: true }}
    footer={{ variant: 'classy', className: 'bg-steel-200' }}
    className="text-steel-700">
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
          <Text as="h1" variant="titleLg" className="max-w-md">
            {headerData.title}
          </Text>
          <Text as="h2" variant="textLg" className="mt-5">
            {headerData.subtitle}
          </Text>
        </div>
      </div>
    </Frame>
    <HowToSection />
    {process.env.ENV !== 'production' && <CarouselSection />}
    <Frame className="pt-12 pb-16 bg-turquoise-300 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
      <Text as="h3" variant="titleMd" className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
        {featuresData.heading}
      </Text>
      <div className="flex flex-wrap">
        <div className="mb-8 sm:pr-4 xl:pr-10 lg:pr-6 sm:w-1/2 lg:w-1/3">
          <Text as="h4" variant="titleSm">
            {featuresData.list[0].title}
          </Text>
          <Text>{featuresData.list[0].description}</Text>
        </div>
        <div className="mb-8 sm:pl-4 lg:pl-3 lg:pr-3 xl:pl-5 xl:pr-5 sm:w-1/2 lg:w-1/3">
          <Text as="h4" variant="titleSm">
            {featuresData.list[1].title}
          </Text>
          <Text>{featuresData.list[1].description}</Text>
        </div>
        <div className="mb-8 sm:pr-4 lg:pr-0 xl:pl-10 lg:pl-6 sm:w-1/2 lg:w-1/3">
          <Text as="h4" variant="titleSm">
            {featuresData.list[2].title}
          </Text>
          <Text>{featuresData.list[2].description}</Text>
        </div>
        <div className="mb-8 sm:pl-4 lg:mb-0 lg:pl-0 lg:pr-6 xl:pr-10 sm:w-1/2 lg:w-1/3">
          <Text as="h4" variant="titleSm">
            {featuresData.list[3].title}
          </Text>
          <Text>{featuresData.list[3].description}</Text>
        </div>
        <div className="mb-8 sm:mb-0 sm:pr-4 lg:pr-3 lg:pl-3 xl:pl-5 xl:pr-5 sm:w-1/2 lg:w-1/3">
          <Text as="h4" variant="titleSm">
            {featuresData.list[4].title}
          </Text>
          <Text>{featuresData.list[4].description}</Text>
        </div>
        <div className="sm:pl-4 lg:pl-6 xl:pl-10 sm:w-1/2 lg:w-1/3">
          <Text as="h4" variant="titleSm">
            {featuresData.list[5].title}
          </Text>
          <Text>{featuresData.list[5].description}</Text>
        </div>
      </div>
    </Frame>
    <Frame id="bmbf" className="pt-12 pb-16 bg-red-300 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
      <div className="lg:flex">
        <div className="lg:w-2/3 xl:w-7/12">
          <Text as="h3" variant="titleMd" className="mb-8 xl:mb-10">
            {contestData.heading}
          </Text>
          <Text className="mb-4 sm:mb-5">{contestData.description}</Text>
          <Text>
            {contestData.infoText}{' '}
            <Link
              color="red"
              href={contestData.infoLink.href}
              title={contestData.infoLink.meta}
              ariaLabel={contestData.infoLink.meta}>
              {contestData.infoLink.text}
            </Link>
          </Text>
        </div>
        <div className="mt-12 sm:mt-16 lg:ml-4 xl:ml-0 lg:mt-4 lg:self-center lg:w-1/3 xl:w-5/12">
          <Link
            className="block w-48 mx-auto sm:w-56 lg:mr-0 xl:mr-auto xl:w-64"
            variant="svg"
            href={contestData.host.href}
            title={contestData.host.meta}
            ariaLabel={contestData.host.meta}>
            <contestData.host.logo className="fill-current" />
          </Link>
        </div>
      </div>
    </Frame>
    <Frame className="pt-12 pb-16 bg-pink-200 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
      <Text as="h3" variant="titleMd" className="mb-6">
        {fellowsData.heading}
      </Text>
      <div className="flex flex-wrap items-center mb-8 -ml-4">
        {fellowsData.list.map((fellow, index) => (
          <Link key={`fellow-${index}`} variant="svg" href={fellow.href} title={fellow.meta} ariaLabel={fellow.meta}>
            <fellow.logo className="w-32 p-4 fill-current" />
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap">
        {fellowsData.options.map((fellow, index) => (
          <div
            key={`fellow-${index}`}
            className={classnames('flex flex-col justify-between lg:w-1/3', {
              'lg:pr-6 xl:pr-10 mb-12 lg:mb-0': index === 0,
              'lg:pl-3 lg:pr-3 xl:pr-5 xl:pl-5 mb-12 lg:mb-0': index === 1,
              'lg:pl-6 xl:pl-10': index === 2,
            })}>
            <div>
              <Text as="h4" variant="titleSm">
                {fellow.title}
              </Text>
              <Text>{fellow.description}</Text>
            </div>
            <div className="w-full mt-8 text-center lg:text-left">
              <Link
                variant="button"
                className="bg-pink-300"
                title={fellow.action.meta}
                ariaLabel={fellow.action.meta}
                href={fellow.action.href}>
                {fellow.action.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Frame>
    <NewsletterSection />
  </Page>
)

export default Index
