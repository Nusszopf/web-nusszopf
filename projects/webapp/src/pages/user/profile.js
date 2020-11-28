import { PlusCircle } from 'react-feather'
import { useRouter } from 'next/router'

import { FramedGridCard } from 'ui-library/stories/templates'
import { Button } from 'ui-library/stories/atoms'
import { Avatar } from 'ui-library/stories/molecules'
import { Masonry } from 'ui-library/stories/organisims'
import apollo from '~/utils/services/apollo.service'
import useProjectsService from '~/utils/services/projects.service'
import { PROJECT } from '~/utils/enums'
import { EditProjectCard, WelcomeCard } from '~/containers'
import { Page } from '~/components'
import { useEntireUser } from '~/utils/services/auth.service'
import { profileData } from '~/assets/data'

const Profile = () => {
  const router = useRouter()
  const { loading: loadingUser, ...user } = useEntireUser()
  const { data, loading: loadingProjects } = apollo.useGetProjects(user?.data?.id, { skip: loadingUser || !user?.data })
  const { deleteProject, updateProject, updateLoading } = useProjectsService()

  const handleVisibility = (id, _visibility) => {
    if (!updateLoading) {
      const visibility =
        _visibility === PROJECT.visibility.public ? PROJECT.visibility.private : PROJECT.visibility.public
      updateProject(id, { visibility })
    }
  }

  return (
    <Page
      navHeader={{ visible: true, fixed: true }}
      showFooter={false}
      noindex={true}
      className="text-gray-600 bg-gray-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-gray-100"
        headerColor="bg-gray-200 lg:bg-gray-100">
        <FramedGridCard.Header className="bg-gray-200">
          <div className="flex flex-col lg:flex-row sm:justify-between lg:items-center">
            <Avatar user={user} />
            <Button
              onClick={() => router.push({ pathname: '/user/project/create', query: { step: 0 } })}
              iconLeft={<PlusCircle className="mr-2 -ml-1" />}
              className="hidden lg:block">
              {profileData.action}
            </Button>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="bg-white">
          <FramedGridCard.Body.Col variant="oneCol" className="lg:hidden">
            <Button
              className="block mx-auto mb-8 md:mb-10"
              onClick={() => router.push({ pathname: '/user/project/create', query: { step: 0 } })}
              iconLeft={<PlusCircle className="mr-2 -ml-1" />}>
              {profileData.action}
            </Button>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol">
            {loadingProjects || loadingUser ? (
              <>loading...</>
            ) : data?.projects?.length > 0 ? (
              <Masonry>
                {data?.projects.map(project => (
                  <EditProjectCard
                    key={project.id}
                    project={project}
                    onClick={id => router.push(`/projects/${id}`)}
                    onEdit={id => router.push(`/user/project/${id}/edit`)}
                    onDelete={deleteProject}
                    toggleVisibility={handleVisibility}
                  />
                ))}
              </Masonry>
            ) : (
              <WelcomeCard
                title={profileData.welcome.title}
                description={profileData.welcome.description}
                greetings={profileData.welcome.greetings}
              />
            )}
          </FramedGridCard.Body.Col>
        </FramedGridCard.Body>
      </FramedGridCard>
    </Page>
  )
}

export default Profile
