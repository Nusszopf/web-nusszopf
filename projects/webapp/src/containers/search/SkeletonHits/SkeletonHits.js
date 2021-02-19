import { Skeleton } from 'ui-library/stories/atoms'

const SkeletonHits = () => (
  <div className="flex flex-col sm:flex-row">
    <div className="flex-1 sm:mr-2.5">
      <Skeleton className="bg-lilac-200 h-36" />
      <Skeleton className="mt-5 bg-lilac-200 h-44" />
      <Skeleton className="h-64 mt-5 bg-lilac-200" />
    </div>
    <div className="flex-1 hidden mx-2.5 sm:block">
      <Skeleton className="h-64 bg-lilac-200" />
      <Skeleton className="mt-5 bg-lilac-200 h-36" />
      <Skeleton className="mt-5 bg-lilac-200 h-44" />
    </div>
    <div className="flex-1 hidden ml-2.5 lg:block">
      <Skeleton className="bg-lilac-200 h-44" />
      <Skeleton className="h-64 mt-5 bg-lilac-200" />
      <Skeleton className="mt-5 bg-lilac-200 h-36" />
    </div>
  </div>
)

export default SkeletonHits
