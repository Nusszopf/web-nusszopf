import sgClient from '@sendgrid/client'
import { requireEventSecret } from '../../../utils/functions/auth.function'
import { AccountTrigger, handleDelete } from '../../../utils/functions/account.function'

const ERROR_CONSTRAINT = 'constraint-violation'

export default async function account(req, res) {
  try {
    requireEventSecret(req.headers.secret)
    sgClient.setApiKey(process.env.SENDGRID_API_KEY)
    switch (req.body?.trigger?.name) {
      case AccountTrigger.delete:
        await handleDelete(req.body?.event?.data?.old, res, sgClient)
        break
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
