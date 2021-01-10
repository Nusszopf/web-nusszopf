import { ArrowDownCircle, Loader, ChevronUp } from 'react-feather'

import { Text, Button } from 'ui-library/stories/atoms'
import { Masonry } from 'ui-library/stories/organisms'
import { Frame } from 'ui-library/stories/templates'
import { useSearch } from '~/utils/services/search.service'
import { HitCard, SearchInput, NoHitsSection, SkeletonHits } from '~/containers/search'
import { Page } from '~/components'
import { searchData as cms } from '~/assets/data'

const Search = () => {
  const { hits, groupedHits, isInitial, loadMore, isLoadingMore } = useSearch()
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Page navHeader={{ visible: true }} footer={{ className: 'bg-white' }} className="bg-white text-steel-700">
      <Frame className="py-6 md:pt-12 md:pb-10 bg-moss-200 text-moss-800" size="large">
        <div className="max-w-3xl mx-auto">
          <Text as="h1" variant="titleMd" className="mb-6">
            {cms.title}
          </Text>
          <SearchInput />
        </div>
      </Frame>
      <Frame className="flex-1 h-full my-8 break-all" size="large">
        {isInitial ? (
          <SkeletonHits />
        ) : groupedHits.length > 0 ? (
          <Masonry
            breakpointCols={{ default: 3, 1023: 2, 639: 1 }}
            gap={{ wrap: '-ml-5 -mb-5', col: 'pl-5', row: 'mb-5' }}>
            {groupedHits.map(group => (
              <HitCard key={group[0]} projectId={group[0]} hits={group[1]} />
            ))}
          </Masonry>
        ) : (
          <NoHitsSection className="mt-4" />
        )}
      </Frame>
      {hits?.nbHits > hits?.hits?.length && (
        <Frame className="my-10 text-center">
          <Button
            onClick={loadMore}
            className="bg-moss-200"
            iconLeft={
              <>
                {isLoadingMore ? (
                  <Loader size={22} className="mr-2 animate-spin" />
                ) : (
                  <ArrowDownCircle className="mr-1.5" />
                )}
              </>
            }
            color="moss">
            {cms.more}
          </Button>
        </Frame>
      )}
      <Button onClick={scrollTop} size="circle" className="fixed bottom-0 right-0 m-6 shadow-lg-dark bg-steel-300">
        <ChevronUp />
      </Button>
    </Page>
  )
}

export default Search
