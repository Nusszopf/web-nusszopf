import { Frame } from 'ui-library/stories/templates'
import { Page } from '~/components'
import { SearchInput } from '~/containers/search'

const Search = () => {
  return (
    <Page navHeader={{ visible: true }} footer={{ className: 'bg-white' }} className="text-steel-700">
      <Frame className="pt-6 pb-4 md:pt-12 bg-moss-200">
        <SearchInput className="max-w-2xl mx-auto" />
      </Frame>
      <Frame className="flex-1 h-full bg-white">hits</Frame>
    </Page>
  )
}

export default Search
