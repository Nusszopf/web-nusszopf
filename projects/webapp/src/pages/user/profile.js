import { useEffect } from 'react'
import { PlusCircle } from 'react-feather'
import { useRouter } from 'next/router'
import { FramedGridCard } from 'ui-library/stories/templates'
import projectMocks from 'ui-library/assets/mocks/projects.mock'
import { Text, Button } from 'ui-library/stories/atoms'
import { EditProjectCard, NusszopfCard, Page, Avatar } from '../../containers'
import { useFetchUser } from '../../utils/services/auth.service'
import apollo from '../../utils/services/apollo.service'
import { profileData } from '../../assets/data'

// Todo: hasura request user+lead object

const Profile = () => {
  const router = useRouter()
  const { user: authUser } = useFetchUser({ required: true })
  const [loadData, { loading, data: user }] = apollo.useLazyGetUser(authUser?.sub)

  // useEffect(() => {
  //   if (authUser) loadData()
  // }, [authUser, loadData])

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
          <div id="header" className="flex flex-col md:flex-row md:justify-between md:items-center">
            <Avatar user={authUser} />
            <Button color="whiteLilac700" iconLeft={<PlusCircle className="mr-2 -ml-1" />} className="hidden md:block">
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
          {projectMocks.length > 0 ? (
            <>
              {projectMocks.map((project, index) => (
                <FramedGridCard.Body.Col
                  key={project.id}
                  variant="twoCols"
                  className={index % 2 === 0 && 'lg:col-start-2'}>
                  <EditProjectCard project={project} onClick={id => router.push(`/user/project/${id}`)} />
                </FramedGridCard.Body.Col>
              ))}
            </>
          ) : (
            <FramedGridCard.Body.Col variant="oneCol">
              <NusszopfCard
                title={profileData.welcome.title}
                description={profileData.welcome.description}
                greetings={profileData.welcome.greetings}
              />
            </FramedGridCard.Body.Col>
          )}
        </FramedGridCard.Body>
      </FramedGridCard>
    </Page>
  )
}

export default Profile
