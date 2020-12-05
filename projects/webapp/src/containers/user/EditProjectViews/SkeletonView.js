import { Skeleton } from 'ui-library/stories/atoms'
import { FramedGridCard } from 'ui-library/stories/templates'

const SkeletonView = () => (
  <FramedGridCard.Body gap="medium" className="grid-flow-row bg-white ">
    <FramedGridCard.Body.Col variant="twoCols" className="lg:pr-4 lg:col-start-2">
      <>
        <Skeleton full={false} className="h-4 max-w-xs bg-lilac-200 w-36" />
        <Skeleton className="w-full h-10 mt-3 bg-lilac-200" />
      </>
      <>
        <Skeleton full={false} className="h-4 max-w-xs mt-6 bg-lilac-200 w-36" />
        <Skeleton className="w-full mt-3 bg-lilac-200 h-18" />
      </>
      <>
        <Skeleton full={false} className="h-4 max-w-xs mt-6 bg-lilac-200 w-36" />
        <Skeleton className="w-full h-32 mt-3 bg-lilac-200" />
      </>
    </FramedGridCard.Body.Col>
    <FramedGridCard.Body.Col variant="twoCols" className="lg:pl-4">
      <>
        <Skeleton full={false} className="h-4 max-w-xs bg-lilac-200 w-36" />
        <Skeleton className="w-full h-10 mt-3 bg-lilac-200" />
      </>
      <>
        <Skeleton full={false} className="h-4 max-w-xs mt-6 bg-lilac-200 w-36" />
        <Skeleton className="w-full h-10 mt-3 bg-lilac-200" />
      </>
      <>
        <Skeleton full={false} className="h-4 max-w-xs mt-6 bg-lilac-200 w-36" />
        <Skeleton className="w-full h-32 mt-3 bg-lilac-200" />
      </>
      <>
        <Skeleton full={false} className="h-4 max-w-xs mt-6 bg-lilac-200 w-36" />
        <Skeleton className="w-full mt-3 bg-lilac-200 h-18" />
      </>
    </FramedGridCard.Body.Col>
  </FramedGridCard.Body>
)

export default SkeletonView
