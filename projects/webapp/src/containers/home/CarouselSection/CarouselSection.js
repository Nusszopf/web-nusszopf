import { useMemo } from 'react'

import { Swiper } from 'ui-library/stories/organisms'
import { Frame } from 'ui-library/stories/templates'
import { Text, Skeleton } from 'ui-library/stories/atoms'
import apollo from '~/utils/services/apollo.service'
import { ItemCard } from '~/containers'
import { homeData as cms } from '~/assets/data'

const CarouselSection = () => {
  const { data } = apollo.useGetLatestProjects()
  const swiperItems = useMemo(() => {
    if (!data?.projects) {
      return []
    } else {
      return data?.projects.map(project => {
        const _project = { ...project, requests: project.requests.slice(0, 3) }
        return <ItemCard key={project.id} project={_project} className="m-2.5" />
      })
    }
  }, [data])

  return (
    <Frame className="pt-12 pb-16 -mb-2 bg-lilac-150 sm:pt-16 sm:pb-18 xl:pt-18 xl:pb-20">
      <Text as="h3" variant="titleMd" className="mb-8 sm:max-w-sm xl:max-w-full xl:mb-10">
        {cms.carousel.title}
      </Text>
      <Swiper
        className="-mx-2.5"
        items={
          swiperItems?.length > 0
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
