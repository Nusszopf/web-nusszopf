import { Text } from 'ui-library/stories/atoms'
import { searchData as cms } from '~/assets/data'

const InitialHitsSection = () => (
  <div className="">
    <Text as="h3" variant="titleMd" className="my-6">
      {cms.initial.title}
    </Text>
    <Text>...latest documents</Text>
  </div>
)

export default InitialHitsSection
