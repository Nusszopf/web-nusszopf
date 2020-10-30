import { deleteLead } from './api.function'

export const UsersTrigger = {
  delete: 'clean_up_deleted_user',
}

export const handleDeleteUser = async ({ id, email }, res) => {
  // projects / searchings / offers / ...
  await deleteLead(email)
  res.status(200).json({ id })
}
