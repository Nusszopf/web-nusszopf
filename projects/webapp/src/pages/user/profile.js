import { useEffect, useState } from 'react'
import { PlusCircle } from 'react-feather'
import { useRouter } from 'next/router'

import { FramedGridCard } from 'ui-library/stories/templates'
import { Button } from 'ui-library/stories/atoms'
import { Avatar } from 'ui-library/stories/molecules'
import { Masonry } from 'ui-library/stories/organisims'
import apollo from '../../utils/services/apollo.service'
import { EditProjectCard, NusszopfCard, Page } from '../../containers'
import { useEntireUser } from '../../utils/services/auth.service'
import { profileData } from '../../assets/data'

const Profile = () => {
  const router = useRouter()
  const { loading: loadingUser, ...user } = useEntireUser()
  const [loadProjects, { called, data }] = apollo.useLazyGetProjects(user?.data?.id)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!loadingUser && user?.data && !called) {
      loadProjects()
    }
  }, [user, loadProjects, loadingUser, called])

  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])

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
          <div className="flex flex-col lg:flex-row sm:justify-between lg:items-center">
            <Avatar user={user} />
            <Button
              color="lilac800"
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
              color="lilac800"
              iconLeft={<PlusCircle className="mr-2 -ml-1" />}>
              {profileData.action}
            </Button>
          </FramedGridCard.Body.Col>
          <FramedGridCard.Body.Col variant="oneCol">
            {loading ? (
              <>loading...</>
            ) : data?.projects?.length > 0 ? (
              <Masonry>
                {data?.projects.map(project => (
                  <EditProjectCard
                    key={project.id}
                    project={project}
                    onClick={id => router.push(`/projects/${id}`)}
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
