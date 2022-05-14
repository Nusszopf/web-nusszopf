import classnames from 'classnames'

import { NewsletterSection, CarouselSection, HowToSection } from '../containers'
import { Link, Text } from 'ui-library/stories/atoms'
import { Frame } from 'ui-library/stories/templates'
import { withAuth } from '~/utils/hoc'
import { Page } from '~/components'
import { headerData, contestData, fellowsData, homeData } from '~/assets/data'

const Index = () => (
  <Page
    navHeader={{ visible: false }}
    footer={{ variant: 'classy', className: 'bg-steel-200' }}
    className="text-steel-700">
    <Frame as="header" className="bg-steel-50">
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
      <div className="pb-16 sm:pb-18 xl:pb-20">
        <div className="max-w-3xl mx-auto break-normal">
          <div className="px-6 py-8 rounded-lg sm:px-8 lg:p-12 bg-livid-300 text-livid-800">
            <Text className="-mt-1.5">{headerData.info[0]}</Text>
            <Text variant="textSm" className="mt-3">
              {headerData.info[1]}
            </Text>
            <div className="flex lg:justify-center">
              <ol className="pl-3 list-decimal my-3 lg:w-4/5">
                {headerData.info[2].map((item, key) => (
                  <li key={`header-${key}`} className="mt-3">
                    <Text as="span" variant="textSm">
                      {item}
                    </Text>
                  </li>
                ))}
              </ol>
            </div>
            <Text variant="textSm">{headerData.info[3]}</Text>
          </div>
        </div>
      </div>
    </Frame>
    <HowToSection />
    {/* <CarouselSection /> */}
    <Frame className="pt-12 pb-16 bg-turquoise-300 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
      <Text as="h3" variant="titleMd" className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
        {homeData.about.heading}
      </Text>
      <div className="flex flex-wrap">
        {homeData.about.list.map((about, index) => (
          <div
            key={`about-${index}`}
            className={classnames('flex flex-col justify-between lg:w-1/3', {
              'lg:pr-6 xl:pr-10 mb-12 lg:mb-0': index === 0,
              'lg:pl-3 lg:pr-3 xl:pr-5 xl:pl-5 mb-12 lg:mb-0': index === 1,
              'lg:pl-6 xl:pl-10': index === 2,
            })}>
            <div>
              <Text as="h4" variant="titleSm" className="mb-2">
                {about.title}
              </Text>
              <Text>{about.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </Frame>
    <Frame className="pt-12 pb-16 bg-red-300 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
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
      <div className="flex flex-col mb-7 lg:items-center lg:flex-row">
        <Text className="lg:mr-8">{fellowsData.listInfo}</Text>
        <div className="flex flex-wrap items-center -ml-4">
          {fellowsData.list.map((fellow, index) => (
            <Link key={`fellow-${index}`} variant="svg" href={fellow.href} title={fellow.meta} ariaLabel={fellow.meta}>
              <fellow.logo className={classnames('p-4 fill-current', { 'w-32': index !== 3, 'w-36': index === 3 })} />
            </Link>
          ))}
        </div>
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
              <Text as="h4" variant="titleSm" className="mb-2">
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
                type={fellow.action.type}
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

export default withAuth(Index, { isAuthRequired: false })
