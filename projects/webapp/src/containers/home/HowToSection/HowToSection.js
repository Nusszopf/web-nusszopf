import { PlusCircle, Search } from 'react-feather'

import { Frame } from 'ui-library/stories/templates'
import { Text, Route } from 'ui-library/stories/atoms'
import { useAuth } from '~/utils/services/auth.service'
import { homeData as cms } from '~/assets/data'
import StepCard from './StepCard'

const HowToSection = () => {
  const { user } = useAuth()
  return (
    <Frame className="pt-12 pb-16 bg-yellow-250 sm:pt-16 sm:pb-18">
      <Text as="h3" variant="titleMd" className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
        {cms.howTo.title}
      </Text>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {cms.howTo.steps.map((step, index) => (
          <StepCard key={`step-${index}`} step={{ index: index + 1, ...step }} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Route
          data-test="route_search-page"
          variant="button"
          size="large"
          href="/search"
          ariaLabel={cms.howTo.actions.search.meta}
          iconLeft={<Search className="mr-2 -ml-1" />}
          className="bg-yellow-400">
          {cms.howTo.actions.search.text}
        </Route>
      </div>
    </Frame>
  )
}

export default HowToSection
