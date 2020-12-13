import { Skeleton } from 'ui-library/stories/atoms'

const ProjectsSkeleton = () => (
  <div className="flex flex-col lg:flex-row">
    <div className="flex-1 lg:mr-2.5">
      <Skeleton className="bg-lilac-200 h-36" />
      <Skeleton className="mt-5 bg-lilac-200 h-44" />
    </div>
    <div className="flex-1 hidden ml-2.5 lg:block">
      <Skeleton className="h-64 bg-lilac-200" />
    </div>
  </div>
)

export default ProjectsSkeleton
