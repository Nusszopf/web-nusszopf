import {
  SearchTrigger as trigger,
  addRequest,
  updateRequest,
  addProject,
  updateProject,
  deleteDocument,
} from '../../../utils/functions/search.function'
import { requireEventSecret } from '../../../utils/functions/auth.function'
import { handleError } from '../../../utils/functions/api.function'

export default async function search(req, res) {
  try {
    requireEventSecret(req.headers.secret)
    switch (true) {
      case req.body?.trigger?.name === trigger.requests && req.body?.event?.op === trigger.add:
        await addRequest(req.body.event.data, res)
        break
      case req.body?.trigger?.name === trigger.requests && req.body?.event?.op === trigger.update:
        await updateRequest(req.body.event.data, res)
        break
      case req.body?.trigger?.name === trigger.projects && req.body?.event?.op === trigger.add:
        await addProject(req.body.event.data, res)
        break
      case req.body?.trigger?.name === trigger.projects && req.body?.event?.op === trigger.update:
        await updateProject(req.body.event.data, res)
        break
      case req.body?.event?.op === trigger.delete:
        await deleteDocument(req.body.event.data, res)
        break
      default:
        res.status(200).end('nothing triggered')
    }
  } catch (error) {
    handleError({ res, error })
  }
}
