import { PlusCircle, Search } from 'react-feather'

import { Frame } from 'ui-library/stories/templates'
import { Text, Route } from 'ui-library/stories/atoms'
import { useFetchUser } from '~/utils/services/auth.service'
import { homeData as cms } from '~/assets/data'
import StepCard from './StepCard'

const HowToSection = () => {
  const { user } = useFetchUser()
  return (
    <Frame className="pt-12 pb-16 bg-yellow-300 sm:pt-16 sm:pb-18">
      <Text as="h3" variant="titleMd" className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
        {cms.howTo.title}
      </Text>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {cms.howTo.steps.map((step, index) => (
          <StepCard key={`step-${index}`} step={{ index: index + 1, ...step }} />
        ))}
        <div className="flex flex-col items-center justify-center mt-8 sm:flex-row lg:justify-end">
          <div>
            <Route
              variant="button"
              size="large"
              href={user ? '/user/project/create' : '/api/login'}
              className="bg-yellow-400"
              iconLeft={<PlusCircle className="hidden mr-2 -ml-1 lg:inline-block" />}>
              {cms.howTo.actions.create.text}
            </Route>
          </div>
          <div className="mt-5 sm:ml-5 sm:mt-0 lg:hidden">
            <Route
              variant="button"
              size="large"
              href="/search"
              ariaLabel={cms.howTo.actions.search.meta}
              iconLeft={<PlusCircle className="hidden mr-2 -ml-1 lg:inline-block" />}
              className="bg-yellow-400">
              {cms.howTo.actions.search.text}
            </Route>
          </div>
        </div>
        <div className="hidden mt-8 lg:block">
          <Route
            variant="button"
            size="large"
            href="/search"
            ariaLabel={cms.howTo.actions.search.meta}
            iconLeft={<Search className="hidden mr-2 -ml-1 lg:inline-block" />}
            className="bg-yellow-400">
            {cms.howTo.actions.search.text}
          </Route>
        </div>
      </div>
    </Frame>
  )
}

export default HowToSection
