import sgClient from '@sendgrid/client'
import { requireEventSecret } from '../../../utils/functions/auth.function'
import { UsersTrigger, handleDeleteUser } from '../../../utils/functions/users.function'

const ERROR_CONSTRAINT = 'constraint-violation'

export default async function users(req, res) {
  try {
    requireEventSecret(req.headers.secret)
    sgClient.setApiKey(process.env.SENDGRID_API_KEY)
    switch (req.body?.trigger?.name) {
      case UsersTrigger.delete:
        await handleDeleteUser(req.body?.event?.data?.old, res, sgClient)
        break
      default:
        res.status(200).end('nothing triggered')
    }
  } catch (error) {
    console.error(error)
    const status =
      error.response?.errors[0]?.extensions?.code === ERROR_CONSTRAINT || error.message?.includes('jwt')
        ? 400
        : error.status ?? 500
    res.status(status).end(error.message)
  }
}
