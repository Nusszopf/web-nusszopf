import { requireEventSecret } from '../../../utils/functions/auth.function'
import { UsersTrigger, handleDeleteUser, handleUpdateUser } from '../../../utils/functions/users.function'
import { handleError } from '../../../utils/functions/api.function'

export default async function users(req, res) {
  try {
    requireEventSecret(req.headers.secret)
    switch (req.body?.trigger?.name) {
      case UsersTrigger.delete:
        await handleDeleteUser(req.body?.event?.data?.old, res)
        break
      case UsersTrigger.update:
        await handleUpdateUser(req.body?.event?.data?.old, res)
        break
      default:
        res.status(200).end('nothing triggered')
    }
  } catch (error) {
    handleError({ res, error })
  }
}
