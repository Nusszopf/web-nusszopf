import { useMemo } from 'react'

import { Swiper } from 'ui-library/stories/organisms'
import { Frame } from 'ui-library/stories/templates'
import { Text, Skeleton } from 'ui-library/stories/atoms'
import { useSearch } from '~/utils/services/search.service'
import { HitCard } from '~/containers/search'
import { homeData as cms } from '~/assets/data'

const CarouselSection = () => {
  const { groupedHits, isInitial } = useSearch()
  const swiperItems = useMemo(() => {
    return groupedHits
      .map(group => [group[0], group[1].filter(hit => hit.type !== 'project').slice(0, 2)])
      .filter(group => group[1].length > 0)
      .slice(0, 6)
      .map(group => <HitCard key={group[0]} projectId={group[0]} hits={group[1]} className="m-2.5" />)
  }, [groupedHits])

  return (
    <Frame className="pt-12 pb-16 -mb-5 bg-lilac-100 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
      <Text as="h3" variant="titleMd" className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
        {cms.carousel.title}
      </Text>
      <Swiper
        className="-mx-2.5"
        items={
          !isInitial && swiperItems?.length > 0
            ? swiperItems
            : [
                <Skeleton full={false} key="swipe-item-1" className="h-36 mx-2.5 bg-lilac-400" />,
                <Skeleton full={false} key="swipe-item-2" className="h-44 mx-2.5 bg-lilac-400" />,
                <Skeleton full={false} key="swipe-item-3" className="h-36 mx-2.5 bg-lilac-400" />,
                <Skeleton full={false} key="swipe-item-4" className="h-36 mx-2.5 bg-lilac-400" />,
                <Skeleton full={false} key="swipe-item-5" className="h-44 mx-2.5 bg-lilac-400" />,
                <Skeleton full={false} key="swipe-item-6" className="h-44 mx-2.5 bg-lilac-400" />,
              ]
        }
      />
    </Frame>
  )
}

export default CarouselSection
