import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { PlusCircle } from 'react-feather'
import { useRouter } from 'next/router'
import { throttle } from 'lodash'

import { FramedGridCard } from 'ui-library/stories/templates'
import { Route } from 'ui-library/stories/atoms'
import { Avatar } from 'ui-library/stories/molecules'
import { Masonry } from 'ui-library/stories/organisms'
import apollo from '~/utils/services/apollo.service'
import useProjectsService from '~/utils/services/projects.service'
import { PROJECT } from '~/utils/enums'
import { EditProjectCard, WelcomeCard, ProjectsSkeleton } from '~/containers'
import { Page } from '~/components'
import { withAuth } from '~/utils/hoc'
import { projectsData as cms } from '~/assets/data'

const Projects = ({ user, loading: loadingUser }) => {
  const router = useRouter()
  const { data, loading: loadingProjects } = apollo.useGetProjects(user?.data?.private?.id, {
    skip: loadingUser || !user?.data,
  })
  const { deleteProject, updateProject, updateLoading } = useProjectsService()

  useEffect(() => {
    router.prefetch('/user/project/[id]/edit', '/user/project/id/edit')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleVisibility = throttle((id, _visibility) => {
    if (!updateLoading) {
      const visibility =
        _visibility === PROJECT.visibility.public ? PROJECT.visibility.private : PROJECT.visibility.public
      updateProject(id, { visibility })
    }
  }, 1000)

  return (
    <Page
      navHeader={{ visible: true }}
      footer={{ className: 'bg-steel-100' }}
      noindex={true}
      className="bg-white text-steel-700 lg:bg-steel-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-steel-100"
        headerColor="bg-steel-200 lg:bg-steel-100">
        <FramedGridCard.Header className="bg-steel-200">
          <div className="flex flex-col lg:flex-row sm:justify-between lg:items-center">
            <Avatar user={user} loading={loadingUser} />
            <Route
              data-test="route_create-project_projects-page"
              variant="button"
              ariaLabel={cms.action}
              href={{ pathname: '/user/project/create', query: { step: 0 } }}
              iconLeft={<PlusCircle className="mr-2 -ml-1" />}
              color="lilac"
              className="hidden lg:block bg-lilac-200">
              {cms.action}
            </Route>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="bg-white">
          <FramedGridCard.Body.Col variant="oneCol" className="text-center lg:hidden">
            <Route
              data-test="route_create-project_projects-page"
              ariaLabel={cms.action}
              variant="button"
              size="large"
              className="mb-8 md:mb-10 bg-lilac-200"
              color="lilac"
              href={{ pathname: '/user/project/create', query: { step: 0 } }}
              iconLeft={<PlusCircle className="mr-2 -ml-1" />}>
              {cms.action}
            </Route>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol">
            {loadingProjects || loadingUser ? (
              <ProjectsSkeleton />
            ) : data?.projects?.length > 0 ? (
              <Masonry gap={{ wrap: '-ml-5 -mb-5', col: 'pl-5', row: 'mb-5' }}>
                {data?.projects.map(project => (
                  <EditProjectCard
                    data-test="route_edit-project_projects-page"
                    key={project.id}
                    project={project}
                    onClick={id => router.push({ pathname: '/projects/[id]', query: { id } })}
                    onEdit={id => router.push({ pathname: '/user/project/[id]/edit', query: { id } })}
                    onDelete={deleteProject}
                    toggleVisibility={handleVisibility}
                  />
                ))}
              </Masonry>
            ) : (
              <WelcomeCard
                title={cms.welcome.title}
                description={cms.welcome.description}
                greetings={cms.welcome.greetings}
              />
            )}
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
    </Page>
  )
}

Projects.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
}

export default withAuth(Projects, { isAuthRequired: true })
