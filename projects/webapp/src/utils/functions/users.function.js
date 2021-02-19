const ManagementClient = require('auth0').ManagementClient
import s3 from '../../utils/libs/s3'

export const UsersTrigger = {
  delete: 'clean_up_deleted_user',
  update: 'clean_up_users_digitalocean',
}

export const handleDeleteUser = async (user, res) => {
  const management = new ManagementClient({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_MANAGEMENT_DOMAIN,
    scope: 'delete:users',
  })
  // remove ocean delete picture
  const { error } = await deleteProfilePicture(user?.picture)
  if (error) {
    throw Error(error.message)
  }
  // remove auth0 user
  await management.deleteUser({ id: user.id })
  res.status(200).json({ id: user.id })
}

export const handleUpdateUser = async (user, res) => {
  const { error } = await deleteProfilePicture(user?.picture)
  if (error) {
    throw Error(error.message)
  }
  res.status(200).json({ id: user.id })
}

const deleteProfilePicture = picture => {
  return new Promise((resolve, reject) => {
    const hasOldPicture = picture?.includes('nz_v')
    if (hasOldPicture) {
      const key = decodeURIComponent(picture.split('com/')[1])
      s3.deleteObject(
        {
          Bucket: process.env.BUCKET_NAME,
          Key: key,
        },
        function (error, data) {
          if (error) {
            reject({ data: null, error })
          } else {
            resolve({ data, error: null })
          }
        }
      )
    } else {
      resolve({ data: null, error: null })
    }
  })
}
