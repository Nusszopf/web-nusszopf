import { deleteLead } from './api.function'
const ManagementClient = require('auth0').ManagementClient

export const UsersTrigger = {
  delete: 'clean_up_deleted_user',
}

export const handleDeleteUser = async ({ id, email }, res) => {
  const management = new ManagementClient({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_MANAGEMENT_DOMAIN,
    scope: 'delete:users',
  })
  await deleteLead(email)
  await management.deleteUser({ id })
  res.status(200).json({ id })
}
