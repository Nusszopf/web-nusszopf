import { Frame } from 'ui-library/stories/templates'
import { Text } from 'ui-library/stories/atoms'
import { Page } from '../../containers'
import { useFetchUser } from '../../utils/services/auth.service'

// Todo: hasura request user+lead object

const Profile = () => {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Page noindex={true} navHeader={{ visible: true, goBackUri: 'back' }} showFooter={false}>
      <Frame className="bg-white">
        {!loading && user && (
          <div className="flex items-center p-8">
            <img className="mr-8 bg-black rounded-full w-18 h-18" src={user.picture} alt="avatar" />
            <div>
              <Text>{user.nickname}</Text>
              <Text variant="textSm">{user.name}</Text>
            </div>
          </div>
        )}
      </Frame>
    </Page>
  )
}

export default Profile
