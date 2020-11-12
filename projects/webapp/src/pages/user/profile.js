import { PlusCircle } from 'react-feather'
import { useRouter } from 'next/router'

import { FramedGridCard } from 'ui-library/stories/templates'
import projectMocks from 'ui-library/assets/mocks/projects.mock'
import { Button } from 'ui-library/stories/atoms'
import { Masonry } from 'ui-library/stories/organisims'
import { EditProjectCard, NusszopfCard, Page, Avatar } from '../../containers'
import { useUser } from '../../utils/helper'
import { profileData } from '../../assets/data'

// Todo: hasura request user+lead object

const Profile = () => {
  const router = useRouter()
  const { loading, ...user } = useUser()
  return (
    <Page
      navHeader={{ visible: true, goBackUri: 'back' }}
      showFooter={false}
      noindex={true}
      className="text-gray-600 bg-gray-100">
      <FramedGridCard
        className="lg:mb-20 lg:mt-12"
        bodyColor="bg-white lg:bg-gray-100"
        headerColor="bg-gray-200 lg:bg-gray-100">
        <FramedGridCard.Header className="bg-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <Avatar user={user} />
            <Button
              color="whiteLilac700"
              onClick={() => router.push({ pathname: '/user/project/create', query: { step: 0 } })}
              iconLeft={<PlusCircle className="mr-2 -ml-1" />}
              className="hidden md:block">
              {profileData.action}
            </Button>
          </div>
        </FramedGridCard.Header>
        <FramedGridCard.Body gap="medium" className="bg-white">
          <FramedGridCard.Body.Col variant="oneCol" className="md:hidden">
            <Button
              className="block mx-auto mb-8"
              color="whiteLilac700"
              iconLeft={<PlusCircle className="mr-2 -ml-1" />}>
              {profileData.action}
            </Button>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol">
            {projectMocks.length > 0 ? (
              <Masonry>
                {projectMocks.map(project => (
                  <EditProjectCard
                    key={project.id}
                    project={project}
                    onClick={id => router.push(`/user/project/${id}`)}
                    onEdit={id => router.push(`/user/project/${id}/edit`)}
                    onDelete={id => console.log('onDelete', id)}
                    toggleVisibility={id => console.log('toggleVisibility', id)}
                  />
                ))}
              </Masonry>
            ) : (
              <NusszopfCard
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
