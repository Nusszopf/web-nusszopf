import sgClient from '@sendgrid/client'
import { requireEventSecret } from '../../../utils/functions/auth.function'
import { LeadsTrigger, handleConfirmation, handleDeleteLead } from '../../../utils/functions/leads.function'
import { handleError } from '../../../utils/functions/api.function'

export default async function account(req, res) {
  try {
    requireEventSecret(req.headers.secret)
    sgClient.setApiKey(process.env.SENDGRID_API_KEY)
    switch (req.body?.trigger?.name) {
      case LeadsTrigger.syncSendGrid:
        if (req.body?.event?.op === 'DELETE') {
          await handleDeleteLead(req.body?.event?.data?.old, res, sgClient)
        } else if (req.body?.event?.op === 'UPDATE') {
          await handleConfirmation(req.body?.event?.data?.new, res, sgClient)
        }
        break
      default:
        res.status(200).end('nothing triggered')
    }
  } catch (error) {
    handleError({ res, error })
  }
}
